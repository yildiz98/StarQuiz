const STORE_KEY = "starquiz_v7_state";
const app = document.getElementById("app");
let page = "home";
let activeQuiz = null;

const defaultState = {xp:0, tests:0, total:0, correct:0, wrong:0, wrongQuestions:[], history:[], recentQuestionIds:[]};
let state = load();

function load(){try{return {...defaultState, ...(JSON.parse(localStorage.getItem(STORE_KEY))||{})};}catch(e){return {...defaultState};}}
function save(){localStorage.setItem(STORE_KEY, JSON.stringify(state));}
function shuffle(arr){const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;}
function percent(a,b){return b?Math.round((a/b)*100):0;}
function setPage(p){page=p; activeQuiz=null; document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===p)); render();}
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));
document.getElementById("resetBtn").onclick=()=>{if(confirm("İlerleme sıfırlansın mı?")){localStorage.removeItem(STORE_KEY); state=load(); render();}};

function uniqueCategories(){
  const map = {};
  QUESTIONS.forEach(q=>{ map[q.category]=(map[q.category]||0)+1; });
  return Object.entries(map).sort((a,b)=>a[0].localeCompare(b[0],"tr"));
}
function pickQuestions(count, category=null){
  const recent = new Set(state.recentQuestionIds||[]);
  let pool = QUESTIONS.filter(q => (!category || q.category===category) && !recent.has(q.id));
  if(pool.length < count) pool = QUESTIONS.filter(q => !category || q.category===category);
  const selected=[], usedAnswers={}, usedTopics={};
  pool = shuffle(pool);
  while(selected.length<count && pool.length){
    pool.sort((a,b)=>((usedAnswers[a.answer]||0)*5+(usedTopics[a.topic]||0)*3+Math.random())-((usedAnswers[b.answer]||0)*5+(usedTopics[b.topic]||0)*3+Math.random()));
    const q=pool.shift();
    if(selected.some(x=>x.id===q.id || x.question===q.question)) continue;
    selected.push({...q, options:shuffle(q.options)});
    usedAnswers[q.answer]=(usedAnswers[q.answer]||0)+1;
    usedTopics[q.topic]=(usedTopics[q.topic]||0)+1;
  }
  return selected;
}

function render(){
 if(page==="home") return renderHome();
 if(page==="exam") return renderExam();
 if(page==="topics") return renderTopics();
 if(page==="wrong") return renderWrong();
 if(page==="stats") return renderStats();
}
function renderHome(){
 const rate=percent(state.correct,state.total);
 app.innerHTML = `
 <section class="card hero">
   <img class="logo-main" src="assets/logo.png" alt="StarQuiz">
   <h1>KKTC Kamu Sınavı Hazırlık</h1>
   <p class="muted">Gerçek sınav mantığında dijital soru bankası. Şu an ${QUESTIONS.length} soru eklendi.</p>
   <div class="grid">
    <div class="stat">📚 Soru <b>${QUESTIONS.length}</b></div>
    <div class="stat">⭐ XP <b>${state.xp}</b></div>
    <div class="stat">📊 Başarı <b>%${rate}</b></div>
    <div class="stat">📝 Test <b>${state.tests}</b></div>
   </div>
   <button class="primary" onclick="startQuiz(20)">20 Soruluk Deneme</button>
   <button class="secondary" onclick="setPage('topics')">Konu Bazlı Çalış</button>
 </section>
 <section class="card"><h2>V7 Yenilikleri</h2><p class="muted">Kitapçık tarzı sorular, cevap anahtarı mantığı, konu filtreleri, açıklama, yanlışlarım ve akıllı rastgele seçim eklendi.</p></section>`;
}
function renderExam(){
 app.innerHTML = `<section class="card"><h2>Karışık Deneme</h2><p class="muted">Sistem soru havuzundan karışık soru seçer. Aynı testte tekrar etmez.</p>
 <button class="primary" onclick="startQuiz(10)">10 Soru Hızlı Test</button>
 <button class="primary" onclick="startQuiz(20)">20 Soru Deneme</button>
 <button class="primary" onclick="startQuiz(50)">50 Soru Deneme</button>
 <button class="secondary" onclick="clearRecent()">Son çıkanları sıfırla</button></section>`;
}
window.clearRecent=()=>{state.recentQuestionIds=[];save();alert("Son çıkan soru hafızası temizlendi.");}
function renderTopics(){
 const cats=uniqueCategories();
 app.innerHTML=`<section class="card"><h2>Konu Bazlı Test</h2><p class="muted">İstediğin konudan 10-20 soru çöz.</p>
 ${cats.map(([c,n])=>`<button class="topic-btn" onclick="startQuiz(Math.min(20, ${n}), '${c.replace(/'/g,"\\'")}')">${c}<span class="topic-count">${n}</span></button>`).join("")}
 </section>`;
}
function startQuiz(count, category=null){
 activeQuiz={index:0, questions:pickQuestions(count,category), answers:[], locked:false, category};
 renderQuestion();
}
function renderQuestion(){
 const q=activeQuiz.questions[activeQuiz.index];
 app.innerHTML=`<section class="card">
 <div class="quiz-head"><span>Soru ${activeQuiz.index+1}/${activeQuiz.questions.length}</span><span>${q.category} · ${q.difficulty}</span></div>
 <div class="progress"><div style="width:${(activeQuiz.index/activeQuiz.questions.length)*100}%"></div></div>
 <div class="question">${q.question}</div>
 ${q.options.map(o=>`<button class="choice" onclick="answerQuestion('${String(o).replace(/'/g,"\\'")}')">${o}</button>`).join("")}
 <div class="small muted" style="margin-top:12px">Konu: ${q.topic}</div>
 </section>`;
}
window.answerQuestion=function(answer){
 if(!activeQuiz || activeQuiz.locked) return;
 activeQuiz.locked=true;
 const q=activeQuiz.questions[activeQuiz.index];
 const ok=answer===q.answer;
 activeQuiz.answers.push({...q,userAnswer:answer,isCorrect:ok});
 document.querySelectorAll(".choice").forEach(btn=>{
   if(btn.textContent===q.answer) btn.classList.add("correct");
   if(btn.textContent===answer && !ok) btn.classList.add("wrong");
   btn.disabled=true;
 });
 const box=document.createElement("div");
 box.className="explain";
 box.innerHTML=`<b>${ok?"Doğru":"Yanlış"}</b><br>Doğru cevap: <b>${q.answer}</b><br>${q.explanation}`;
 document.querySelector(".card").appendChild(box);
 setTimeout(()=>{activeQuiz.index++; activeQuiz.locked=false; if(activeQuiz.index>=activeQuiz.questions.length) finishQuiz(); else renderQuestion();}, 1100);
}
function finishQuiz(){
 const total=activeQuiz.answers.length, correct=activeQuiz.answers.filter(a=>a.isCorrect).length;
 const wrongs=activeQuiz.answers.filter(a=>!a.isCorrect), score=percent(correct,total), xp=Math.round(correct*7 + score/2);
 state.tests++; state.total+=total; state.correct+=correct; state.wrong+=wrongs.length; state.xp+=xp;
 state.wrongQuestions=[...wrongs,...state.wrongQuestions].slice(0,150);
 state.history.unshift({date:new Date().toLocaleString("tr-TR"), total, correct, score, category:activeQuiz.category||"Karışık"});
 state.recentQuestionIds=[...new Set([...activeQuiz.questions.map(q=>q.id),...(state.recentQuestionIds||[])])].slice(0,120);
 save();
 app.innerHTML=`<section class="card hero"><img class="logo-main" src="assets/logo.png"><h2>Sonuç</h2>
 <div class="grid"><div class="stat">✅ Doğru <b>${correct}</b></div><div class="stat">❌ Yanlış <b>${wrongs.length}</b></div><div class="stat">📊 Başarı <b>%${score}</b></div><div class="stat">⭐ XP <b>+${xp}</b></div></div>
 <button class="primary" onclick="setPage('wrong')">Yanlışları İncele</button><button class="secondary" onclick="setPage('exam')">Yeni Deneme</button></section>`;
 activeQuiz=null;
}
function renderWrong(){
 if(!state.wrongQuestions.length){app.innerHTML=`<section class="card"><h2>Yanlışlarım</h2><p class="muted">Henüz yanlış yok.</p></section>`;return;}
 app.innerHTML=`<section class="card"><h2>Yanlışlarım</h2>${state.wrongQuestions.map(w=>`<div class="wrong-item"><b>${w.question}</b><p class="small"><span class="bad">Senin cevabın:</span> ${w.userAnswer}</p><p class="small"><span class="ok">Doğru:</span> ${w.answer}</p><p class="muted small">${w.explanation}</p></div>`).join("")}</section>`;
}
function renderStats(){
 const rate=percent(state.correct,state.total);
 const byCat={}; QUESTIONS.forEach(q=>byCat[q.category]=(byCat[q.category]||0)+1);
 app.innerHTML=`<section class="card hero"><img class="logo-main" src="assets/logo.png"><h2>Analiz</h2><div class="grid"><div class="stat">Toplam Soru <b>${state.total}</b></div><div class="stat">Doğru <b>${state.correct}</b></div><div class="stat">Yanlış <b>${state.wrong}</b></div><div class="stat">Başarı <b>%${rate}</b></div></div></section>
 <section class="card"><h2>Konu Dağılımı</h2>${Object.entries(byCat).sort((a,b)=>b[1]-a[1]).map(([c,n])=>`<p class="small">${c}: <b>${n}</b> soru</p>`).join("")}</section>
 <section class="card"><h2>Son Testler</h2>${state.history.slice(0,10).map(h=>`<p class="small">${h.category} · ${h.correct}/${h.total} · %${h.score} · ${h.date}</p>`).join("")||"<p class='muted'>Henüz test yok.</p>"}</section>`;
}
render();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
