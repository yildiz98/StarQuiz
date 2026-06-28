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
function pickQuestions(count, group, difficulty=null){
 const recent=new Set(state.recentQuestionIds||[]);
 let pool=questionsByGroup(group).filter(q=>(!difficulty||q.difficulty===difficulty)&&!recent.has(q.id));
 if(pool.length<count) pool=questionsByGroup(group).filter(q=>(!difficulty||q.difficulty===difficulty));
 pool=shuffle(pool);
 const selected=[];
 while(selected.length<count && pool.length){
   const q=pool.shift();
   if(!q || selected.some(x=>x.id===q.id || x.question===q.question)) continue;
   selected.push({...q, options:shuffle(q.options||[])});
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
  <div class="pro-hero-logo"><img src="./logo.png?v=trmath1" alt="StarQuiz"></div>
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
 <div class="final-score"><img src="./logo.png?v=trmath1" alt="StarQuiz"><b>${qs.length}</b><span>Toplam Soru</span></div></section>
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
 <div class="final-score"><img src="./logo.png?v=trmath1" alt="StarQuiz"><b>${qs.length}</b><span>Toplam Soru</span></div></section>
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

render();
