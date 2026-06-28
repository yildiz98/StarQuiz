const STORE_KEY = "starquiz_test_secimli_state";
const app = document.getElementById("app");
let page = "home";
let activeQuiz = null;
let selectedTestGroup = null;

const defaultState = {xp:0, tests:0, total:0, correct:0, wrong:0, wrongQuestions:[], history:[], recentQuestionIds:[]};
let state = load();

function getQuestions(){ return Array.isArray(window.QUESTIONS) ? window.QUESTIONS : []; }
function getLessons(){ return Array.isArray(window.LESSONS) ? window.LESSONS : []; }
function load(){ try{return {...defaultState, ...(JSON.parse(localStorage.getItem(STORE_KEY))||{})};}catch(e){return {...defaultState};} }
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function shuffle(arr){ const a=[...(arr||[])]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function percent(a,b){ return b ? Math.round((a/b)*100) : 0; }
function esc(v){ return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }
function jsArg(v){ return String(v??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g," "); }
function progressData(){ try{return JSON.parse(localStorage.getItem("starquiz_lesson_progress")||"{}");}catch(e){return {};} }
function saveLessonProgress(p){ localStorage.setItem("starquiz_lesson_progress", JSON.stringify(p)); }

function setPage(p){ page=p; activeQuiz=null; document.querySelectorAll(".nav-btn").forEach(btn=>btn.classList.toggle("active", btn.dataset.page===p)); render(); }
window.setPage=setPage;

document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));
document.getElementById("resetBtn").addEventListener("click",()=>{ if(confirm("İlerleme sıfırlansın mı?")){ localStorage.removeItem(STORE_KEY); state=load(); render(); } });

function moduleStats(){
 const lessons=getLessons(), p=progressData();
 const total=lessons.length, done=lessons.filter(l=>p[l.id]).length;
 return {total,done,percentDone: total?Math.round(done/total*100):0};
}
function questionsByGroup(group){
 const qs=getQuestions();
 if(group==="Kamu Yasası") return qs.filter(q=>q.category==="Kamu Yasası" || q.testGroup==="Kamu Yasası");
 if(group==="KKTC Anayasası") return qs.filter(q=>q.category==="KKTC Anayasası" || q.testGroup==="KKTC Anayasası");
 if(group==="Genel Kültür") return qs.filter(q=>q.category!=="Kamu Yasası" && q.testGroup!=="Kamu Yasası" && q.category!=="KKTC Anayasası" && q.testGroup!=="KKTC Anayasası");
 return qs;
}
function groupCounts(){
 return {
   genel: questionsByGroup("Genel Kültür").length,
   kamu: questionsByGroup("Kamu Yasası").length,
   anayasa: questionsByGroup("KKTC Anayasası").length
 };
}
function difficultyCounts(group){
 return ["Kolay","Orta","Zor"].map(level=>[level, questionsByGroup(group).filter(q=>q.difficulty===level).length]);
}

/* ===== UNIQUE QUESTION PICKER PATCH ===== */
function normalizeQuestionText(text){
  return String(text || "")
    .toLowerCase()
    .replace(/\(konu tekrarı\)/g, "")
    .replace(/\(tekrar\)/g, "")
    .replace(/aşağıdaki bilgilerden hareketle:/g, "")
    .replace(/sınav tarzı tekrar:/g, "")
    .replace(/bu konuyla ilgili olarak/g, "")
    .replace(/kısa tekrar sorusu:/g, "")
    .replace(/konu pekiştirme:/g, "")
    .replace(/genel tekrar/g, "")
    .replace(/[?.!,;:()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function questionUniqueKey(q){
  const topic = String(q.topic || "");
  const answer = String(q.answer || "");
  const exp = String(q.explanation || "");
  const clean = normalizeQuestionText(q.question || "");
  return `${topic}||${answer}||${exp || clean}`;
}

function pickQuestions(count, group, difficulty=null){
  const recent = new Set(state.recentQuestionIds || []);
  let pool = questionsByGroup(group).filter(q => (!difficulty || q.difficulty === difficulty) && !recent.has(q.id));

  if(pool.length < count){
    pool = questionsByGroup(group).filter(q => (!difficulty || q.difficulty === difficulty));
  }

  pool = shuffle(pool);

  const selected = [];
  const usedIds = new Set();
  const usedText = new Set();
  const usedKeys = new Set();

  for(const q of pool){
    if(!q) continue;

    const id = String(q.id || "");
    const textKey = normalizeQuestionText(q.question || "");
    const uniqueKey = questionUniqueKey(q);

    if(usedIds.has(id)) continue;
    if(textKey && usedText.has(textKey)) continue;
    if(uniqueKey && usedKeys.has(uniqueKey)) continue;

    selected.push({...q, options: shuffle(q.options || [])});
    usedIds.add(id);
    if(textKey) usedText.add(textKey);
    if(uniqueKey) usedKeys.add(uniqueKey);

    if(selected.length >= count) break;
  }

  if(selected.length < count){
    for(const q of pool){
      if(selected.length >= count) break;

      const id = String(q.id || "");
      const textKey = normalizeQuestionText(q.question || "");

      if(usedIds.has(id)) continue;
      if(textKey && usedText.has(textKey)) continue;

      selected.push({...q, options: shuffle(q.options || [])});
      usedIds.add(id);
      if(textKey) usedText.add(textKey);
    }
  }

  return selected;
}


function render(){
 if(page==="home") return renderHome();
 if(page==="exam") return renderExam();
 if(page==="lessons") return renderLessons();
 if(page==="wrong") return renderWrong();
 if(page==="stats") return renderStats();
}

function renderHome(){
 const qs=getQuestions(), rate=percent(state.correct,state.total), ms=moduleStats(), gc=groupCounts();
 app.innerHTML=`
 <section class="pro-hero">
  <div class="pro-hero-left">
   <div class="pro-badge">KKTC Kamu Sınavı Hazırlık</div>
   <h1>StarQuiz</h1>
   <p>Genel Kültür, Kamu Yasası ve KKTC Anayasası ayrı test havuzlarıyla çalış. Sorular birbirine karışmaz.</p>
   <div class="pro-actions">
    <button class="primary" onclick="setPage('exam')">🎯 Test Seç</button>
    <button class="secondary" onclick="setPage('lessons')">📖 Derslere Başla</button>
   </div>
  </div>
  <div class="pro-hero-logo"><img src="./logo.png?v=loginclean1" alt="StarQuiz"></div>
 </section>
 <section class="pro-grid-3">
  <div class="pro-card"><span>📚 Toplam Soru</span><b>${qs.length}</b><small>Genel + Kamu</small></div>
  <div class="pro-card"><span>⚖️ Kamu Yasası</span><b>${gc.kamu}</b><small>Ayrı test havuzu</small></div>
  <div class="pro-card"><span>🇨🇾 KKTC Anayasası</span><b>${gc.anayasa}</b><small>Ayrı test havuzu</small></div>
 </section>
 <section class="card pro-progress-card">
  <div class="section-head"><div><h2>Test Sistemi</h2><p class="muted">Genel Kültür ve Kamu Yasası ayrı seçilir. Karışık soru gelmez.</p></div><strong>%${rate}</strong></div>
  <div class="big-progress"><div style="width:${rate}%"></div></div>
  <button class="secondary" onclick="setPage('exam')">Test Seçeneklerini Aç</button>
 </section>`;
}

function renderExam(){
 const gc=groupCounts();
 app.innerHTML=`
 <section class="lesson-dashboard">
  <div>
   <div class="pro-badge">Test Seçimi</div>
   <h1>🎯 Hangi test?</h1>
   <p>Önce kategori seç. Genel Kültür, Kamu Yasası ve KKTC Anayasası soruları birbirine karışmaz.</p>
  </div>
 </section>
 <section class="test-choice-grid">
  <button class="test-choice-card blue" onclick="selectTestGroup('Genel Kültür')">
   <span>📚</span><h2>Genel Kültür Testi</h2><p>${gc.genel} soruluk havuz</p><b>Başla ›</b>
  </button>
  <button class="test-choice-card gold" onclick="selectTestGroup('Kamu Yasası')">
   <span>⚖️</span><h2>Kamu Yasası Testi</h2><p>${gc.kamu} soruluk havuz</p><b>Başla ›</b>
  </button>
  <button class="test-choice-card purple" onclick="selectTestGroup('KKTC Anayasası')">
   <span>🇨🇾</span><h2>KKTC Anayasası Testi</h2><p>${gc.anayasa} soruluk havuz</p><b>Başla ›</b>
  </button>
 </section>`;
}
window.selectTestGroup=function(group){
 selectedTestGroup=group;
 const counts=Object.fromEntries(difficultyCounts(group));
 const total=questionsByGroup(group).length;
 app.innerHTML=`
 <section class="card">
  <button class="secondary back-btn" onclick="setPage('exam')">← Test Seçimine Dön</button>
  <h2>${group}</h2>
  <p class="muted">${total} soruluk ayrı havuz. Bu ekranda sadece ${group} soruları gelir.</p>
  <div class="grid">
   <div class="stat">Kolay <b>${counts.Kolay||0}</b></div>
   <div class="stat">Orta <b>${counts.Orta||0}</b></div>
   <div class="stat">Zor <b>${counts.Zor||0}</b></div>
   <div class="stat">Toplam <b>${total}</b></div>
  </div>
  <button class="primary" onclick="startQuiz(20,'${jsArg(group)}')">20 Soruluk Deneme</button>
  <button class="secondary" onclick="startQuiz(10,'${jsArg(group)}')">10 Soruluk Hızlı Test</button>
  <button class="secondary" onclick="startQuiz(50,'${jsArg(group)}')">50 Soruluk Uzun Test</button>
  <div class="level-grid">
   <button class="level-btn easy" onclick="startQuiz(Math.min(20, ${counts.Kolay||0}), '${jsArg(group)}', 'Kolay')"><b>Kolay</b><span>${counts.Kolay||0} soru</span></button>
   <button class="level-btn medium" onclick="startQuiz(Math.min(20, ${counts.Orta||0}), '${jsArg(group)}', 'Orta')"><b>Orta</b><span>${counts.Orta||0} soru</span></button>
   <button class="level-btn hard" onclick="startQuiz(Math.min(20, ${counts.Zor||0}), '${jsArg(group)}', 'Zor')"><b>Zor</b><span>${counts.Zor||0} soru</span></button>
  </div>
 </section>`;
};

function startQuiz(count, group, difficulty=null){
 const questions=pickQuestions(count, group, difficulty);
 if(!questions.length){ alert("Bu seçim için soru bulunamadı."); return; }
 activeQuiz={index:0, questions, answers:[], locked:false, group, difficulty};
 renderQuestion();
}
window.startQuiz=startQuiz;

function renderQuestion(){
 const q=activeQuiz.questions[activeQuiz.index];
 app.innerHTML=`
 <section class="card">
  <div class="quiz-head"><span>${activeQuiz.group} · Soru ${activeQuiz.index+1}/${activeQuiz.questions.length}</span><span>${esc(q.difficulty||"")}</span></div>
  <div class="progress"><div style="width:${(activeQuiz.index/activeQuiz.questions.length)*100}%"></div></div>
  <div class="question">${esc(q.question)}</div>
  ${(q.options||[]).map(o=>`<button class="choice" onclick="answerQuestion('${jsArg(o)}')">${esc(o)}</button>`).join("")}
  <div class="small muted" style="margin-top:12px">Konu: ${esc(q.topic||"")}</div>
 </section>`;
}
window.answerQuestion=function(answer){
 if(!activeQuiz||activeQuiz.locked) return;
 activeQuiz.locked=true;
 const q=activeQuiz.questions[activeQuiz.index], ok=answer===q.answer;
 activeQuiz.answers.push({...q,userAnswer:answer,isCorrect:ok});
 document.querySelectorAll(".choice").forEach(btn=>{ if(btn.textContent===q.answer) btn.classList.add("correct"); if(btn.textContent===answer&&!ok) btn.classList.add("wrong"); btn.disabled=true; });
 const box=document.createElement("div"); box.className="explain";
 box.innerHTML=`<b>${ok?"Doğru":"Yanlış"}</b><br>Doğru cevap: <b>${esc(q.answer)}</b><br>${esc(q.explanation||"")}`;
 document.querySelector(".card").appendChild(box);
 setTimeout(()=>{ activeQuiz.index++; activeQuiz.locked=false; if(activeQuiz.index>=activeQuiz.questions.length) finishQuiz(); else renderQuestion(); }, 850);
};
function finishQuiz(){
 const total=activeQuiz.answers.length, correct=activeQuiz.answers.filter(a=>a.isCorrect).length, wrongs=activeQuiz.answers.filter(a=>!a.isCorrect), score=percent(correct,total);
 state.tests++; state.total+=total; state.correct+=correct; state.wrong+=wrongs.length; state.xp+=correct*10+(score>=80?25:0);
 state.recentQuestionIds=[...(state.recentQuestionIds||[]),...activeQuiz.answers.map(a=>a.id)].slice(-80);
 wrongs.forEach(w=>{ state.wrongQuestions=state.wrongQuestions.filter(x=>x.id!==w.id); state.wrongQuestions.unshift(w); });
 state.wrongQuestions=state.wrongQuestions.slice(0,100);
 state.history.unshift({date:new Date().toLocaleString("tr-TR"),total,correct,score,category:activeQuiz.group,difficulty:activeQuiz.difficulty||"Karışık"});
 state.history=state.history.slice(0,40); save();
 app.innerHTML=`<section class="card hero"><h2>${activeQuiz.group} Testi Bitti</h2><div class="grid"><div class="stat">✅ Doğru <b>${correct}</b></div><div class="stat">❌ Yanlış <b>${wrongs.length}</b></div><div class="stat">📊 Başarı <b>%${score}</b></div><div class="stat">⭐ XP <b>${state.xp}</b></div></div><button class="primary" onclick="setPage('exam')">Yeni Test Seç</button><button class="secondary" onclick="setPage('wrong')">Yanlışları Gör</button></section>`;
}

function renderLessons(){
 const lessons=getLessons(), progress=progressData(), doneCount=lessons.filter(l=>progress[l.id]).length, groups={};
 lessons.forEach(l=>{ const key=l.category||"Genel"; groups[key]=groups[key]||[]; groups[key].push(l); });
 app.innerHTML=`<section class="lesson-dashboard"><div><div class="pro-badge">Okuma Modu</div><h1>📖 Mini Dersler</h1><p>Genel Kültür, Kamu Yasası ve KKTC Anayasası mini çalışma metinleri.</p></div><div class="lesson-ring"><b>${doneCount}</b><span>/${lessons.length}</span><small>tamamlandı</small></div></section>
 ${Object.entries(groups).map(([cat,items])=>{ const catDone=items.filter(l=>progress[l.id]).length, catPct=items.length?Math.round(catDone/items.length*100):0; return `<section class="card lesson-group-card"><div class="section-head"><div><h2>${esc(cat)}</h2><p class="muted">${items.length} mini ders · ${catDone} tamamlandı</p></div><strong>%${catPct}</strong></div><div class="mini-progress"><div style="width:${catPct}%"></div></div><div class="lesson-list-pro">${items.map((l,idx)=>`<button class="lesson-row-pro ${progress[l.id]?"done":""}" onclick="openLesson('${jsArg(l.id)}')"><div class="lesson-num">${progress[l.id]?"✓":idx+1}</div><div class="lesson-main"><b>${esc(l.emoji||"📖")} ${esc(l.title)}</b><small>${esc(l.module)} · ${l.minutes||2} dk okuma</small></div><div class="lesson-arrow">›</div></button>`).join("")}</div></section>`; }).join("")}`;
}
function openLesson(id){
 const lesson=getLessons().find(l=>l.id===id); if(!lesson){alert("Ders bulunamadı.");return;}
 const progress=progressData(), list=getLessons(), next=list[list.findIndex(l=>l.id===id)+1];
 app.innerHTML=`<section class="reader-shell"><button class="secondary back-btn" onclick="setPage('lessons')">← Derslere Dön</button><div class="reader-hero"><div class="lesson-big-emoji">${esc(lesson.emoji||"📖")}</div><div><div class="pro-badge">${esc(lesson.category)} · ${lesson.minutes||2} dk</div><h1>${esc(lesson.title)}</h1><p>${esc(lesson.module)} mini çalışma metni</p></div></div><div class="reader-card"><h2>📘 Konu Anlatımı</h2>${(lesson.content||[]).map(p=>`<p>${esc(p)}</p>`).join("")}</div><div class="reader-two"><div class="remember-box pro-box"><h2>💡 Akılda Kalsın</h2><ul>${(lesson.remember||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="exam-note pro-box"><h2>⭐ Sınav Notu</h2><p>${esc(lesson.examNote||"")}</p></div></div><div class="reader-actions"><button class="primary" onclick="completeLesson('${jsArg(lesson.id)}')">${progress[lesson.id]?"Tamamlandı ✓":"Bu Konuyu Tamamladım"}</button>${next?`<button class="secondary" onclick="openLesson('${jsArg(next.id)}')">Sonraki Ders → ${esc(next.title)}</button>`:""}</div></section>`;
}
window.openLesson=openLesson;
function completeLesson(id){ const p=progressData(); p[id]=true; saveLessonProgress(p); openLesson(id); }
window.completeLesson=completeLesson;

function renderWrong(){
 if(!state.wrongQuestions.length){ app.innerHTML=`<section class="card"><h2>Yanlışlarım</h2><p class="muted">Henüz yanlış soru yok.</p></section>`; return; }
 app.innerHTML=`<section class="card"><h2>Yanlışlarım</h2><p class="muted">${state.wrongQuestions.length} soru kayıtlı.</p>${state.wrongQuestions.map(w=>`<div class="wrong-item"><b>${esc(w.question)}</b><div class="small muted">Senin cevap: ${esc(w.userAnswer||"-")}</div><div class="small ok">Doğru cevap: ${esc(w.answer)}</div><div class="small muted">${esc(w.explanation||"")}</div></div>`).join("")}</section>`;
}
function renderStats(){
 const rate=percent(state.correct,state.total);
 app.innerHTML=`<section class="card"><h2>Analiz</h2><div class="grid"><div class="stat">⭐ XP <b>${state.xp}</b></div><div class="stat">📝 Test <b>${state.tests}</b></div><div class="stat">📚 Soru <b>${state.total}</b></div><div class="stat">📊 Başarı <b>%${rate}</b></div></div></section><section class="card"><h2>Son Testler</h2>${state.history.length?state.history.map(h=>`<div class="wrong-item"><b>${esc(h.category)} · ${esc(h.difficulty)}</b><div class="small muted">${esc(h.date)}</div><div>Doğru: <b>${h.correct}/${h.total}</b> · Başarı: <b>%${h.score}</b></div></div>`).join(""):`<p class="muted">Henüz test çözülmedi.</p>`}</section>`;
}


/* FINAL UI OVERRIDE */
function renderHome(){
 const qs=getQuestions(), ms=moduleStats(), gc=groupCounts(), rate=percent(state.correct,state.total);
 app.innerHTML=`<section class="final-home">
 <div class="final-welcome"><div class="final-badge">KKTC Kamu Sınavı Hazırlık</div><h1>StarQuiz</h1>
 <p>Genel Kültür, Kamu Yasası ve KKTC Anayasası için ayrı ders ve test sistemi.</p>
 <div class="final-actions"><button class="primary" onclick="setPage('exam')">🎯 Test Seç</button><button class="secondary" onclick="setPage('lessons')">📖 Derslere Git</button></div></div>
 <div class="final-score"><img src="./logo.png?v=loginclean1" alt="StarQuiz"><b>${qs.length}</b><span>Toplam Soru</span></div></section>
 <section class="final-modules">
 <button onclick="selectTestGroup('Genel Kültür')"><span>📚</span><b>Genel Kültür</b><small>${gc.genel} soru</small></button>
 <button onclick="selectTestGroup('Kamu Yasası')"><span>⚖️</span><b>Kamu Yasası</b><small>${gc.kamu} soru</small></button>
 <button onclick="selectTestGroup('KKTC Anayasası')"><span>🇨🇾</span><b>KKTC Anayasası</b><small>${gc.anayasa} soru</small></button></section>
 <section class="final-panel"><div><h2>📖 Ders İlerlemesi</h2><p>${ms.total} mini dersin ${ms.done} tanesi tamamlandı.</p></div><strong>%${ms.percentDone}</strong><div class="final-progress"><div style="width:${ms.percentDone}%"></div></div></section>
 <section class="final-stats"><div><span>⭐ XP</span><b>${state.xp}</b></div><div><span>📝 Test</span><b>${state.tests}</b></div><div><span>📊 Başarı</span><b>%${rate}</b></div></section>`;
}
function renderExam(){
 const gc=groupCounts();
 app.innerHTML=`<section class="final-title"><div class="final-badge">Test Modu</div><h1>Test Seç</h1><p>Hangi alanı seçersen sadece o alandan soru gelir. Karışık soru yok.</p></section>
 <section class="final-test-grid">
 <button class="test-card-blue" onclick="selectTestGroup('Genel Kültür')"><span>📚</span><h2>Genel Kültür</h2><p>${gc.genel} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-gold" onclick="selectTestGroup('Kamu Yasası')"><span>⚖️</span><h2>Kamu Yasası</h2><p>${gc.kamu} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-purple" onclick="selectTestGroup('KKTC Anayasası')"><span>🇨🇾</span><h2>KKTC Anayasası</h2><p>${gc.anayasa} soruluk havuz</p><b>Teste Başla</b></button></section>`;
}
function renderLessons(){
 const lessons=getLessons(), progress=progressData(), doneCount=lessons.filter(l=>progress[l.id]).length, groups={};
 lessons.forEach(l=>{const key=l.category||"Genel";groups[key]=groups[key]||[];groups[key].push(l);});
 app.innerHTML=`<section class="final-title"><div class="final-badge">Ders Modu</div><h1>Mini Dersler</h1><p>Konuları kısa çalışma metinleriyle oku. Her modül ayrı kart sistemiyle düzenlendi.</p></section>
 <section class="final-panel"><div><h2>Genel İlerleme</h2><p>${doneCount}/${lessons.length} ders tamamlandı.</p></div><strong>%${lessons.length?Math.round(doneCount/lessons.length*100):0}</strong><div class="final-progress"><div style="width:${lessons.length?Math.round(doneCount/lessons.length*100):0}%"></div></div></section>
 ${Object.entries(groups).map(([cat,items])=>{const catDone=items.filter(l=>progress[l.id]).length,pct=items.length?Math.round(catDone/items.length*100):0;return `<section class="final-lesson-group"><div class="lesson-head"><div><h2>${esc(cat)}</h2><p>${items.length} ders · ${catDone} tamamlandı</p></div><b>%${pct}</b></div><div class="final-progress small"><div style="width:${pct}%"></div></div><div class="final-lesson-list">${items.map((l,idx)=>`<button class="${progress[l.id]?'done':''}" onclick="openLesson('${jsArg(l.id)}')"><i>${progress[l.id]?'✓':idx+1}</i><span><b>${esc(l.emoji||'📖')} ${esc(l.title)}</b><small>${esc(l.module)} · ${l.minutes||2} dk</small></span><em>›</em></button>`).join("")}</div></section>`;}).join("")}`;
}


/* ===== TURKCE MATEMATIK PATCH ===== */
function questionsByGroup(group){
 const qs=getQuestions();
 const modules=["Kamu Yasası","KKTC Anayasası","Türkçe","Matematik"];
 if(modules.includes(group)) return qs.filter(q=>q.category===group || q.testGroup===group);
 if(group==="Genel Kültür") return qs.filter(q=>!modules.includes(q.category) && !modules.includes(q.testGroup));
 return qs;
}
function groupCounts(){
 return {
   genel: questionsByGroup("Genel Kültür").length,
   kamu: questionsByGroup("Kamu Yasası").length,
   anayasa: questionsByGroup("KKTC Anayasası").length,
   turkce: questionsByGroup("Türkçe").length,
   matematik: questionsByGroup("Matematik").length
 };
}
function renderHome(){
 const qs=getQuestions(), ms=moduleStats(), gc=groupCounts(), rate=percent(state.correct,state.total);
 app.innerHTML=`<section class="final-home">
 <div class="final-welcome"><div class="final-badge">KKTC Kamu Sınavı Hazırlık</div><h1>StarQuiz</h1>
 <p>Genel Kültür, Kamu Yasası, KKTC Anayasası, Türkçe ve Matematik için ayrı ders ve test sistemi.</p>
 <div class="final-actions"><button class="primary" onclick="setPage('exam')">🎯 Test Seç</button><button class="secondary" onclick="setPage('lessons')">📖 Derslere Git</button></div></div>
 <div class="final-score"><img src="./logo.png?v=loginclean1" alt="StarQuiz"><b>${qs.length}</b><span>Toplam Soru</span></div></section>
 <section class="final-modules five">
 <button onclick="selectTestGroup('Genel Kültür')"><span>📚</span><b>Genel Kültür</b><small>${gc.genel} soru</small></button>
 <button onclick="selectTestGroup('Kamu Yasası')"><span>⚖️</span><b>Kamu Yasası</b><small>${gc.kamu} soru</small></button>
 <button onclick="selectTestGroup('KKTC Anayasası')"><span>🇨🇾</span><b>KKTC Anayasası</b><small>${gc.anayasa} soru</small></button>
 <button onclick="selectTestGroup('Türkçe')"><span>🇹🇷</span><b>Türkçe</b><small>${gc.turkce} soru</small></button>
 <button onclick="selectTestGroup('Matematik')"><span>➗</span><b>Matematik</b><small>${gc.matematik} soru</small></button>
 </section>
 <section class="final-panel"><div><h2>📖 Ders İlerlemesi</h2><p>${ms.total} mini dersin ${ms.done} tanesi tamamlandı.</p></div><strong>%${ms.percentDone}</strong><div class="final-progress"><div style="width:${ms.percentDone}%"></div></div></section>
 <section class="final-stats"><div><span>⭐ XP</span><b>${state.xp}</b></div><div><span>📝 Test</span><b>${state.tests}</b></div><div><span>📊 Başarı</span><b>%${rate}</b></div></section>`;
}
function renderExam(){
 const gc=groupCounts();
 app.innerHTML=`<section class="final-title"><div class="final-badge">Test Modu</div><h1>Test Seç</h1><p>Hangi alanı seçersen sadece o alandan soru gelir. Karışık soru yok.</p></section>
 <section class="final-test-grid five">
 <button class="test-card-blue" onclick="selectTestGroup('Genel Kültür')"><span>📚</span><h2>Genel Kültür</h2><p>${gc.genel} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-gold" onclick="selectTestGroup('Kamu Yasası')"><span>⚖️</span><h2>Kamu Yasası</h2><p>${gc.kamu} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-purple" onclick="selectTestGroup('KKTC Anayasası')"><span>🇨🇾</span><h2>KKTC Anayasası</h2><p>${gc.anayasa} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-red" onclick="selectTestGroup('Türkçe')"><span>🇹🇷</span><h2>Türkçe</h2><p>${gc.turkce} soruluk havuz</p><b>Teste Başla</b></button>
 <button class="test-card-green" onclick="selectTestGroup('Matematik')"><span>➗</span><h2>Matematik</h2><p>${gc.matematik} soruluk havuz</p><b>Teste Başla</b></button>
 </section>`;
}


/* ===== NEON MODULE CARDS UI ===== */
function moduleCard(group, title, count, icon, cls){
  return `<button class="neon-module-card ${cls}" onclick="selectTestGroup('${jsArg(group)}')">
    <div class="neon-icon-wrap"><div class="neon-orbit"></div><span class="neon-icon">${icon}</span></div>
    <h2>${title}</h2>
    <p>${count} Soru</p>
    <div class="neon-btn">Çalış <b>›</b></div>
  </button>`;
}

function renderHome(){
 const qs=getQuestions(), ms=moduleStats(), gc=groupCounts(), rate=percent(state.correct,state.total);
 app.innerHTML=`<section class="final-home neon-top">
 <div class="final-welcome"><div class="final-badge">KKTC Kamu Sınavı Hazırlık</div><h1>StarQuiz</h1>
 <p>Hedefine odaklan, konuları çalış ve başarıya ulaş. Her alan kendi test havuzunda ayrı ilerler.</p>
 <div class="final-actions"><button class="primary" onclick="setPage('exam')">🎯 Test Seç</button><button class="secondary" onclick="setPage('lessons')">📖 Derslere Git</button></div></div>
 <div class="final-score"><img src="./logo.png?v=loginclean1" alt="StarQuiz"><b>${qs.length}</b><span>Toplam Soru</span></div></section>

 <section class="neon-section-title">
   <div class="neon-line"></div>
   <span>⭐</span>
   <div class="neon-line"></div>
   <h1>Konular</h1>
   <p>Hedefine odaklan, başarıya ulaş!</p>
 </section>

 <section class="neon-modules-grid">
   ${moduleCard('Genel Kültür','Genel Kültür',gc.genel,'📚','blue')}
   ${moduleCard('Kamu Yasası','Kamu Yasası',gc.kamu,'⚖️','gold')}
   ${moduleCard('KKTC Anayasası','KKTC Anayasası',gc.anayasa,'📜','purple')}
   ${moduleCard('Türkçe','Türkçe',gc.turkce,'📖','teal')}
   ${moduleCard('Matematik','Matematik',gc.matematik,'➗','orange')}
 </section>

 <section class="neon-info-bar">
  <div><span>🎯</span><b>Hedefini Belirle</b><small>Planlı çalış, başarıyı yakala!</small></div>
  <div><span>📈</span><b>Gelişimini Takip Et</b><small>İstatistiklerini izle.</small></div>
  <div><span>🧠</span><b>Tekrar Et</b><small>Zayıf konuları pekiştir.</small></div>
  <div><span>🏆</span><b>Başarını Artır</b><small>Her doğru seni ileri taşır.</small></div>
 </section>

 <section class="final-panel"><div><h2>📖 Ders İlerlemesi</h2><p>${ms.total} mini dersin ${ms.done} tanesi tamamlandı.</p></div><strong>%${ms.percentDone}</strong><div class="final-progress"><div style="width:${ms.percentDone}%"></div></div></section>
 <section class="final-stats"><div><span>⭐ XP</span><b>${state.xp}</b></div><div><span>📝 Test</span><b>${state.tests}</b></div><div><span>📊 Başarı</span><b>%${rate}</b></div></section>`;
}

function renderExam(){
 const gc=groupCounts();
 app.innerHTML=`<section class="final-title neon-test-title"><div class="final-badge">Test Modu</div><h1>Test Seç</h1><p>Hangi alanı seçersen sadece o alandan soru gelir. Karışık soru yok.</p></section>
 <section class="neon-modules-grid">
   ${moduleCard('Genel Kültür','Genel Kültür',gc.genel,'📚','blue')}
   ${moduleCard('Kamu Yasası','Kamu Yasası',gc.kamu,'⚖️','gold')}
   ${moduleCard('KKTC Anayasası','KKTC Anayasası',gc.anayasa,'📜','purple')}
   ${moduleCard('Türkçe','Türkçe',gc.turkce,'📖','teal')}
   ${moduleCard('Matematik','Matematik',gc.matematik,'➗','orange')}
 </section>`;
}


/* ===== STARQUIZ V11 PREMIUM DASHBOARD ===== */
function questionsByGroup(group){
 const qs=getQuestions();
 const modules=["Kamu Yasası","KKTC Anayasası","Türkçe","Matematik"];
 if(modules.includes(group)) return qs.filter(q=>q.category===group || q.testGroup===group);
 if(group==="Genel Kültür") return qs.filter(q=>!modules.includes(q.category) && !modules.includes(q.testGroup));
 return qs;
}
function groupCounts(){
 return {
   genel: questionsByGroup("Genel Kültür").length,
   kamu: questionsByGroup("Kamu Yasası").length,
   anayasa: questionsByGroup("KKTC Anayasası").length,
   turkce: questionsByGroup("Türkçe").length,
   matematik: questionsByGroup("Matematik").length
 };
}
function v11ModuleCard(group, title, count, icon, cls){
  return `<button class="v11-card ${cls}" onclick="selectTestGroup('${jsArg(group)}')">
    <div class="v11-card-glow"></div>
    <div class="v11-icon-ring"><span>${icon}</span></div>
    <h2>${title}</h2>
    <p>${count} Soru</p>
    <div class="v11-mini-progress"><i></i></div>
    <div class="v11-card-btn">Çalış <b>›</b></div>
  </button>`;
}
function renderHome(){
 const qs=getQuestions(), ms=moduleStats(), gc=groupCounts(), rate=percent(state.correct,state.total);
 app.innerHTML=`<section class="v11-hero">
   <div class="v11-hero-left">
     <div class="v11-pill">KKTC Kamu Sınavı Hazırlık</div>
     <h1>StarQuiz</h1>
     <p>Hedefine odaklan, konuları çalış ve başarıya ulaş. Her alan kendi test havuzunda seni ilerletir.</p>
     <div class="v11-actions">
       <button class="primary" onclick="setPage('exam')">🎯 Test Seç</button>
       <button class="secondary" onclick="setPage('lessons')">📖 Derslere Git</button>
     </div>
   </div>
   <div class="v11-hero-center">
     <div class="v11-book-scene">
       <div class="v11-star">⭐</div>
       <div class="v11-book">📖</div>
       <div class="v11-orb one">🎯</div>
       <div class="v11-orb two">📈</div>
       <div class="v11-orb three">🧠</div>
       <div class="v11-orb four">🎓</div>
     </div>
   </div>
   <div class="v11-stats-panel">
     <h3>Genel İlerlemen</h3>
     <div class="v11-stat-main"><span>🏆</span><div><small>Toplam Soru</small><b>${qs.length}</b></div><em>%${rate}</em></div>
     <div class="v11-stat-row">
       <div><span>✅</span><small>Doğru</small><b>${state.correct}</b></div>
       <div><span>❌</span><small>Yanlış</small><b>${state.wrong}</b></div>
       <div><span>⭐</span><small>XP</small><b>${state.xp}</b></div>
     </div>
   </div>
 </section>

 <section class="v11-title">
   <span></span><b>⭐</b><span></span>
   <h1>Konular</h1>
   <p>Hedefine odaklan, başarıya ulaş!</p>
 </section>

 <section class="v11-grid">
   ${v11ModuleCard('Genel Kültür','Genel Kültür',gc.genel,'📚','blue')}
   ${v11ModuleCard('Kamu Yasası','Kamu Yasası',gc.kamu,'⚖️','gold')}
   ${v11ModuleCard('KKTC Anayasası','KKTC Anayasası',gc.anayasa,'📜','purple')}
   ${v11ModuleCard('Türkçe','Türkçe',gc.turkce,'📖','teal')}
   ${v11ModuleCard('Matematik','Matematik',gc.matematik,'➗','orange')}
 </section>

 <section class="v11-info-strip">
   <div><span>🎯</span><b>Hedefini Belirle</b><small>Planlı çalış, başarıyı yakala!</small></div>
   <div><span>📈</span><b>Düzenli Tekrar</b><small>Tekrar et, kalıcı öğren!</small></div>
   <div><span>🏆</span><b>Kendini Geliştir</b><small>Her soru seni ileri taşır!</small></div>
   <div><span>⭐</span><b>Başarını Takip Et</b><small>İlerlemeni gör, motivasyonunu artır!</small></div>
 </section>

 <section class="v11-progress-panel">
   <div><h2>📖 Ders İlerlemesi</h2><p>${ms.total} mini dersin ${ms.done} tanesi tamamlandı.</p></div>
   <strong>%${ms.percentDone}</strong>
   <div class="v11-progress"><i style="width:${ms.percentDone}%"></i></div>
 </section>`;
}
function renderExam(){
 const gc=groupCounts();
 app.innerHTML=`<section class="v11-title v11-test-title">
   <span></span><b>🚀</b><span></span>
   <h1>Test Seç</h1>
   <p>Hangi alanı seçersen sadece o alandan soru gelir. Karışık soru yok.</p>
 </section>
 <section class="v11-grid exam">
   ${v11ModuleCard('Genel Kültür','Genel Kültür',gc.genel,'📚','blue')}
   ${v11ModuleCard('Kamu Yasası','Kamu Yasası',gc.kamu,'⚖️','gold')}
   ${v11ModuleCard('KKTC Anayasası','KKTC Anayasası',gc.anayasa,'📜','purple')}
   ${v11ModuleCard('Türkçe','Türkçe',gc.turkce,'📖','teal')}
   ${v11ModuleCard('Matematik','Matematik',gc.matematik,'➗','orange')}
 </section>`;
}
function renderLessons(){
 const lessons=getLessons(), progress=progressData(), doneCount=lessons.filter(l=>progress[l.id]).length, groups={};
 lessons.forEach(l=>{ const key=l.category||"Genel"; groups[key]=groups[key]||[]; groups[key].push(l); });
 const overall = lessons.length ? Math.round(doneCount/lessons.length*100) : 0;
 app.innerHTML=`<section class="v11-title v11-lessons-title">
   <span></span><b>📖</b><span></span>
   <h1>Mini Dersler</h1>
   <p>Konuları kısa çalışma metinleriyle oku. Her modül ayrı kart sistemiyle düzenlendi.</p>
 </section>
 <section class="v11-progress-panel">
   <div><h2>Genel İlerleme</h2><p>${doneCount}/${lessons.length} ders tamamlandı.</p></div>
   <strong>%${overall}</strong>
   <div class="v11-progress"><i style="width:${overall}%"></i></div>
 </section>
 ${Object.entries(groups).map(([cat,items])=>{
   const catDone=items.filter(l=>progress[l.id]).length;
   const pct=items.length?Math.round(catDone/items.length*100):0;
   return `<section class="v11-lesson-group">
    <div class="v11-lesson-head"><div><h2>${esc(cat)}</h2><p>${items.length} ders · ${catDone} tamamlandı</p></div><b>%${pct}</b></div>
    <div class="v11-progress small"><i style="width:${pct}%"></i></div>
    <div class="v11-lesson-list">
      ${items.map((l,idx)=>`<button class="${progress[l.id]?'done':''}" onclick="openLesson('${jsArg(l.id)}')">
        <i>${progress[l.id]?'✓':idx+1}</i>
        <span><b>${esc(l.emoji||'📖')} ${esc(l.title)}</b><small>${esc(l.module)} · ${l.minutes||2} dk</small></span>
        <em>›</em>
      </button>`).join("")}
    </div>
   </section>`;
 }).join("")}`;
}


/* ===== V12 MATH EXAMPLES LESSON READER ===== */
function renderSolvedExamples(lesson){
  const examples = Array.isArray(lesson.examples) ? lesson.examples : [];
  if(!examples.length) return "";
  return `<div class="reader-card examples-card">
    <h2>📝 Çözümlü Örnekler</h2>
    <div class="examples-grid">
      ${examples.map((ex,idx)=>`
        <div class="example-box">
          <h3>${esc(ex.title || ("Örnek " + (idx+1)))}</h3>
          <p class="example-question">${esc(ex.question || "")}</p>
          <ol>${(ex.solution || []).map(step=>`<li>${esc(step)}</li>`).join("")}</ol>
          <div class="example-answer">✅ Cevap: <b>${esc(ex.answer || "")}</b></div>
        </div>
      `).join("")}
    </div>
  </div>`;
}
function renderPractice(lesson){
  const practice = Array.isArray(lesson.practice) ? lesson.practice : [];
  if(!practice.length) return "";
  return `<div class="reader-card practice-card">
    <h2>🎯 Mini Alıştırma</h2>
    <div class="practice-list">
      ${practice.map((p,idx)=>`
        <details>
          <summary>${idx+1}) ${esc(p.question || "")}</summary>
          <div>✅ Cevap: <b>${esc(p.answer || "")}</b></div>
        </details>
      `).join("")}
    </div>
  </div>`;
}
function openLesson(id){
 const lesson=getLessons().find(l=>l.id===id);
 if(!lesson){alert("Ders bulunamadı.");return;}
 const progress=progressData(), list=getLessons(), next=list[list.findIndex(l=>l.id===id)+1];
 app.innerHTML=`<section class="reader-shell">
  <button class="secondary back-btn" onclick="setPage('lessons')">← Derslere Dön</button>
  <div class="reader-hero">
    <div class="lesson-big-emoji">${esc(lesson.emoji||"📖")}</div>
    <div>
      <div class="pro-badge">${esc(lesson.category)} · ${lesson.minutes||2} dk</div>
      <h1>${esc(lesson.title)}</h1>
      <p>${esc(lesson.module)} mini çalışma metni</p>
    </div>
  </div>

  <div class="reader-card">
    <h2>📘 Konu Anlatımı</h2>
    ${(lesson.content||[]).map(p=>`<p>${esc(p)}</p>`).join("")}
  </div>

  ${renderSolvedExamples(lesson)}
  ${renderPractice(lesson)}

  <div class="reader-two">
    <div class="remember-box pro-box">
      <h2>💡 Akılda Kalsın</h2>
      <ul>${(lesson.remember||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    </div>
    <div class="exam-note pro-box">
      <h2>⭐ Sınav Notu</h2>
      <p>${esc(lesson.examNote||"")}</p>
    </div>
  </div>

  <div class="reader-actions">
    <button class="primary" onclick="completeLesson('${jsArg(lesson.id)}')">${progress[lesson.id]?"Tamamlandı ✓":"Bu Konuyu Tamamladım"}</button>
    ${next?`<button class="secondary" onclick="openLesson('${jsArg(next.id)}')">Sonraki Ders → ${esc(next.title)}</button>`:""}
  </div>
 </section>`;
}
window.openLesson=openLesson;


/* ===== STARQUIZ V13 FIREBASE AUTH ===== */
let firebaseReady = false;
let fbAuth = null;
let fbDb = null;
let currentUser = null;
let userProfile = null;

function initFirebase(){
  try{
    const cfg = window.STARQUIZ_FIREBASE_CONFIG || {};
    if(!cfg.apiKey || cfg.apiKey.includes("BURAYA")){
      console.warn("Firebase config girilmedi. Sistem misafir/offline modda çalışır.");
      return false;
    }
    if(!firebase.apps.length) firebase.initializeApp(cfg);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    firebaseReady = true;
    fbAuth.onAuthStateChanged(async function(user){
      currentUser = user || null;
      if(user){
        await ensureUserProfile(user);
        await syncLocalStatsToCloud();
      }
      render();
    });
    return true;
  }catch(e){
    console.error("Firebase başlatılamadı:", e);
    return false;
  }
}

function isAdmin(){
  const admins = (window.STARQUIZ_ADMINS || []).map(x => String(x).toLowerCase());
  return currentUser && admins.includes(String(currentUser.email || "").toLowerCase());
}

async function ensureUserProfile(user){
  if(!firebaseReady || !user) return;
  const ref = fbDb.collection("users").doc(user.uid);
  const snap = await ref.get();
  const base = {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || localStorage.getItem("starquiz_display_name") || "",
    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    totalTests: state.tests || 0,
    totalQuestions: state.total || 0,
    totalCorrect: state.correct || 0,
    totalWrong: state.wrong || 0,
    xp: state.xp || 0
  };
  if(!snap.exists) await ref.set({...base, createdAt: firebase.firestore.FieldValue.serverTimestamp()});
  else await ref.set(base, {merge:true});
  const updated = await ref.get();
  userProfile = updated.data() || null;
}

async function syncLocalStatsToCloud(){
  if(!firebaseReady || !currentUser) return;
  await fbDb.collection("users").doc(currentUser.uid).set({
    totalTests: state.tests || 0,
    totalQuestions: state.total || 0,
    totalCorrect: state.correct || 0,
    totalWrong: state.wrong || 0,
    xp: state.xp || 0,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, {merge:true});
}

if(typeof save === "function"){
  const originalSaveStarQuiz = save;
  save = function(){
    originalSaveStarQuiz();
    syncLocalStatsToCloud().catch(()=>{});
  };
}

function authScreen(mode="login"){
  const isRegister = mode === "register";
  app.innerHTML = `
    <section class="auth-shell">
      <div class="auth-card">
        <img src="./logo.png?v=loginclean1" alt="StarQuiz">
        <h1>${isRegister ? "Hesap Oluştur" : "Giriş Yap"}</h1>
        <p>${isRegister ? "Kendi e-posta ve şifrenle StarQuiz hesabını oluştur." : "StarQuiz hesabınla kaldığın yerden devam et."}</p>
        ${isRegister ? `<input id="authName" placeholder="Ad Soyad" autocomplete="name">` : ""}
        <input id="authEmail" placeholder="E-posta" type="email" autocomplete="email">
        <input id="authPass" placeholder="Şifre" type="password" autocomplete="${isRegister ? "new-password" : "current-password"}">
        <button class="primary" onclick="${isRegister ? "registerUser()" : "loginUser()"}">${isRegister ? "Kayıt Ol" : "Giriş Yap"}</button>
        <button class="secondary" onclick="authScreen('${isRegister ? "login" : "register"}')">${isRegister ? "Zaten hesabım var" : "Yeni hesap oluştur"}</button>
        <button class="ghost-auth" onclick="continueOffline()">Misafir olarak devam et</button>
        <div id="authMsg" class="auth-msg"></div>
      </div>
    </section>`;
}
window.authScreen = authScreen;

function authMessage(msg){
  const el = document.getElementById("authMsg");
  if(el) el.textContent = msg;
}

async function registerUser(){
  if(!firebaseReady){ authMessage("Firebase ayarları girilmedi. firebase-config.js dosyasını doldur."); return; }
  const name = document.getElementById("authName")?.value.trim() || "";
  const email = document.getElementById("authEmail")?.value.trim() || "";
  const pass = document.getElementById("authPass")?.value || "";
  if(!name || !email || pass.length < 6){ authMessage("Ad soyad, e-posta ve en az 6 karakter şifre gir."); return; }
  try{
    const cred = await fbAuth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({displayName:name});
    localStorage.setItem("starquiz_display_name", name);
    await ensureUserProfile(cred.user);
    setPage("home");
  }catch(e){ authMessage(firebaseErrorTR(e)); }
}
window.registerUser = registerUser;

async function loginUser(){
  if(!firebaseReady){ authMessage("Firebase ayarları girilmedi. firebase-config.js dosyasını doldur."); return; }
  const email = document.getElementById("authEmail")?.value.trim() || "";
  const pass = document.getElementById("authPass")?.value || "";
  try{
    await fbAuth.signInWithEmailAndPassword(email, pass);
    setPage("home");
  }catch(e){ authMessage(firebaseErrorTR(e)); }
}
window.loginUser = loginUser;

async function logoutUser(){
  if(firebaseReady && fbAuth) await fbAuth.signOut();
  currentUser = null;
  setPage("home");
}
window.logoutUser = logoutUser;

function continueOffline(){
  localStorage.setItem("starquiz_offline_mode", "1");
  setPage("home");
}
window.continueOffline = continueOffline;

function firebaseErrorTR(e){
  const code = e && e.code ? e.code : "";
  if(code.includes("email-already-in-use")) return "Bu e-posta zaten kayıtlı.";
  if(code.includes("invalid-email")) return "E-posta adresi geçersiz.";
  if(code.includes("weak-password")) return "Şifre en az 6 karakter olmalı.";
  if(code.includes("wrong-password") || code.includes("invalid-credential")) return "E-posta veya şifre hatalı.";
  if(code.includes("user-not-found")) return "Bu e-posta ile kayıt bulunamadı.";
  return "İşlem tamamlanamadı: " + (e.message || code);
}

async function renderAdminPanel(){
  if(!firebaseReady || !isAdmin()){
    app.innerHTML = `<section class="card"><h2>Admin Panel</h2><p class="muted">Bu ekran sadece yetkili admin hesabıyla görünür.</p></section>`;
    return;
  }
  const snap = await fbDb.collection("users").orderBy("createdAt","desc").limit(200).get();
  const users = [];
  snap.forEach(doc => users.push(doc.data()));
  const totalTests = users.reduce((a,u)=>a+(u.totalTests||0),0);
  const totalCorrect = users.reduce((a,u)=>a+(u.totalCorrect||0),0);
  const totalWrong = users.reduce((a,u)=>a+(u.totalWrong||0),0);
  app.innerHTML = `
    <section class="admin-dashboard">
      <div class="final-badge">Admin Panel</div>
      <h1>Kullanıcı İstatistikleri</h1>
      <div class="admin-grid">
        <div><span>👥 Toplam Kullanıcı</span><b>${users.length}</b></div>
        <div><span>📝 Toplam Test</span><b>${totalTests}</b></div>
        <div><span>✅ Toplam Doğru</span><b>${totalCorrect}</b></div>
        <div><span>❌ Toplam Yanlış</span><b>${totalWrong}</b></div>
      </div>
      <div class="admin-users">
        ${users.map(u=>`
          <div class="admin-user-row">
            <b>${esc(u.displayName || "İsimsiz")}</b>
            <span>${esc(u.email || "")}</span>
            <small>Test: ${u.totalTests || 0} · Doğru: ${u.totalCorrect || 0} · Yanlış: ${u.totalWrong || 0} · XP: ${u.xp || 0}</small>
          </div>`).join("")}
      </div>
    </section>`;
}
window.renderAdminPanel = renderAdminPanel;

function renderAccountBar(){
  if(currentUser){
    return `<div class="account-bar">
      <span>👤 ${esc(currentUser.displayName || currentUser.email || "Kullanıcı")}</span>
      ${isAdmin() ? `<button onclick="renderAdminPanel()">Admin</button>` : ""}
      <button onclick="logoutUser()">Çıkış</button>
    </div>`;
  }
  return `<div class="account-bar">
    <span>Misafir Modu</span>
    <button onclick="authScreen('login')">Giriş Yap</button>
    <button onclick="authScreen('register')">Kayıt Ol</button>
  </div>`;
}

if(typeof renderHome === "function"){
  const renderHomeBeforeAuth = renderHome;
  renderHome = function(){
    renderHomeBeforeAuth();
    app.insertAdjacentHTML("afterbegin", renderAccountBar());
  };
}

initFirebase();


/* ===== FIREBASE FIX PATCH loginclean1 ===== */
function starquizHasValidFirebaseConfig(){
  const cfg = window.STARQUIZ_FIREBASE_CONFIG || {};
  return !!(cfg.apiKey && cfg.authDomain && cfg.projectId && !String(cfg.apiKey).includes("BURAYA") && !String(cfg.projectId).includes("BURAYA"));
}

function initFirebase(){
  try{
    const cfg = window.STARQUIZ_FIREBASE_CONFIG || {};
    if(!starquizHasValidFirebaseConfig()){
      console.warn("Firebase config bulunamadı veya eksik:", cfg);
      firebaseReady = false;
      return false;
    }
    if(typeof firebase === "undefined"){
      console.error("Firebase SDK yüklenmedi. index.html script sırası kontrol edilmeli.");
      firebaseReady = false;
      return false;
    }
    if(!firebase.apps.length) firebase.initializeApp(cfg);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    firebaseReady = true;

    fbAuth.onAuthStateChanged(async function(user){
      currentUser = user || null;
      if(user){
        await ensureUserProfile(user);
        await syncLocalStatsToCloud();
      }
      try{ render(); }catch(e){ console.error(e); }
    });
    return true;
  }catch(e){
    console.error("Firebase başlatılamadı:", e);
    firebaseReady = false;
    return false;
  }
}

function authMessage(msg){
  const el = document.getElementById("authMsg");
  if(el) el.textContent = msg;
}

function firebaseErrorTR(e){
  const code = e && e.code ? e.code : "";
  if(code.includes("email-already-in-use")) return "Bu e-posta zaten kayıtlı.";
  if(code.includes("invalid-email")) return "E-posta adresi geçersiz.";
  if(code.includes("weak-password")) return "Şifre en az 6 karakter olmalı.";
  if(code.includes("wrong-password") || code.includes("invalid-credential")) return "E-posta veya şifre hatalı.";
  if(code.includes("user-not-found")) return "Bu e-posta ile kayıt bulunamadı.";
  if(code.includes("network-request-failed")) return "İnternet bağlantısı veya Firebase erişimi kontrol edilmeli.";
  return "İşlem tamamlanamadı: " + (e.message || code);
}

async function registerUser(){
  if(!starquizHasValidFirebaseConfig()){ authMessage("Firebase ayarları okunamadı. firebase-config.js dosyasını kontrol et."); return; }
  if(!firebaseReady) initFirebase();
  if(!firebaseReady){ authMessage("Firebase başlatılamadı. Authentication ayarlarını kontrol et."); return; }
  const name = document.getElementById("authName")?.value.trim() || "";
  const email = document.getElementById("authEmail")?.value.trim() || "";
  const pass = document.getElementById("authPass")?.value || "";
  if(!name || !email || pass.length < 6){ authMessage("Ad soyad, e-posta ve en az 6 karakter şifre gir."); return; }
  try{
    const cred = await fbAuth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({displayName:name});
    localStorage.setItem("starquiz_display_name", name);
    await ensureUserProfile(cred.user);
    setPage("home");
  }catch(e){ authMessage(firebaseErrorTR(e)); }
}
window.registerUser = registerUser;

async function loginUser(){
  if(!starquizHasValidFirebaseConfig()){ authMessage("Firebase ayarları okunamadı. firebase-config.js dosyasını kontrol et."); return; }
  if(!firebaseReady) initFirebase();
  if(!firebaseReady){ authMessage("Firebase başlatılamadı. Authentication ayarlarını kontrol et."); return; }
  const email = document.getElementById("authEmail")?.value.trim() || "";
  const pass = document.getElementById("authPass")?.value || "";
  if(!email || !pass){ authMessage("E-posta ve şifre gir."); return; }
  try{
    await fbAuth.signInWithEmailAndPassword(email, pass);
    setPage("home");
  }catch(e){ authMessage(firebaseErrorTR(e)); }
}
window.loginUser = loginUser;

setTimeout(()=>{
  if(!firebaseReady && starquizHasValidFirebaseConfig()) initFirebase();
}, 150);


/* ===== LOGIN REQUIRED PATCH loginclean1 ===== */
function authScreen(mode="login"){
  const isRegister = mode === "register";
  app.innerHTML = `
    <section class="auth-shell login-required-screen">
      <div class="auth-card">
        <img src="./logo.png?v=loginclean1" alt="StarQuiz">
        <h1>${isRegister ? "Hesap Oluştur" : "Giriş Yap"}</h1>
        <p>${isRegister ? "StarQuiz hesabını oluştur ve ilerlemeni güvenle kaydet." : "Kayıtlı hesabınla giriş yaparak devam et."}</p>
        ${isRegister ? `<input id="authName" placeholder="Ad Soyad" autocomplete="name">` : ""}
        <input id="authEmail" placeholder="E-posta" type="email" autocomplete="email">
        <input id="authPass" placeholder="Şifre" type="password" autocomplete="${isRegister ? "new-password" : "current-password"}">
        <button class="primary" onclick="${isRegister ? "registerUser()" : "loginUser()"}">${isRegister ? "Kayıt Ol" : "Giriş Yap"}</button>
        <button class="secondary" onclick="authScreen('${isRegister ? "login" : "register"}')">${isRegister ? "Zaten hesabım var" : "Yeni hesap oluştur"}</button>
        <div id="authMsg" class="auth-msg"></div>
      </div>
    </section>`;
}
window.authScreen = authScreen;

function continueOffline(){
  authScreen("login");
}
window.continueOffline = continueOffline;

function renderAccountBar(){
  if(currentUser){
    return `<div class="account-bar">
      <span>👤 ${esc(currentUser.displayName || currentUser.email || "Kullanıcı")}</span>
      ${isAdmin() ? `<button onclick="renderAdminPanel()">Admin</button>` : ""}
      <button onclick="logoutUser()">Çıkış</button>
    </div>`;
  }
  return "";
}
window.renderAccountBar = renderAccountBar;

const originalSetPageLoginRequired = setPage;
setPage = function(page){
  if(firebaseReady && !currentUser && page !== "auth"){
    authScreen("login");
    return;
  }
  originalSetPageLoginRequired(page);
};
window.setPage = setPage;

const renderBeforeLoginRequired = render;
render = function(){
  if(firebaseReady && !currentUser){
    authScreen("login");
    return;
  }
  renderBeforeLoginRequired();
};
window.render = render;

setTimeout(()=>{
  if(firebaseReady && !currentUser) authScreen("login");
}, 500);


/* ===== LOGIN CLEAN PATCH loginclean1 ===== */
function setAuthUiMode(isAuth){
  document.body.classList.toggle("auth-mode", !!isAuth);
}

function authScreen(mode="login"){
  const isRegister = mode === "register";
  setAuthUiMode(true);
  app.innerHTML = `
    <section class="auth-shell login-clean-screen">
      <div class="auth-card">
        <img src="./logo.png?v=loginclean1" alt="StarQuiz">
        <h1>${isRegister ? "Hesap Oluştur" : "Giriş Yap"}</h1>
        <p>${isRegister ? "StarQuiz hesabını oluştur ve ilerlemeni güvenle kaydet." : "Kayıtlı hesabınla giriş yaparak devam et."}</p>
        ${isRegister ? `<input id="authName" placeholder="Ad Soyad" autocomplete="name">` : ""}
        <input id="authEmail" placeholder="E-posta" type="email" autocomplete="email">
        <input id="authPass" placeholder="Şifre" type="password" autocomplete="${isRegister ? "new-password" : "current-password"}">
        <button class="primary" onclick="${isRegister ? "registerUser()" : "loginUser()"}">${isRegister ? "Kayıt Ol" : "Giriş Yap"}</button>
        <button class="secondary" onclick="authScreen('${isRegister ? "login" : "register"}')">${isRegister ? "Zaten hesabım var" : "Yeni hesap oluştur"}</button>
        <div id="authMsg" class="auth-msg"></div>
      </div>
    </section>`;
}
window.authScreen = authScreen;

const setPageBeforeLoginClean = setPage;
setPage = function(page){
  if(firebaseReady && !currentUser && page !== "auth"){
    authScreen("login");
    return;
  }
  setAuthUiMode(false);
  setPageBeforeLoginClean(page);
};
window.setPage = setPage;

const renderBeforeLoginClean = render;
render = function(){
  if(firebaseReady && !currentUser){
    authScreen("login");
    return;
  }
  setAuthUiMode(false);
  renderBeforeLoginClean();
};
window.render = render;

render();
