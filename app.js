const STORE_KEY = "starquiz_v31_state";
const app = document.getElementById("app");
let page = "home";
let activeQuiz = null;

const levels = [
  { id:1, title:"Seviye 1", count:10, pass:70, xp:100 },
  { id:2, title:"Seviye 2", count:20, pass:75, xp:180 },
  { id:3, title:"Seviye 3", count:30, pass:80, xp:300 },
];

const defaultState = {
  xp:0, streak:0, levelUnlocked:1, tests:0, total:0, correct:0, wrong:0,
  wrongQuestions:[], badges:[], history:[], recentQuestionIds:[]
};
let state = load();

function load(){ try{return {...defaultState, ...(JSON.parse(localStorage.getItem(STORE_KEY))||{})};}catch(e){return {...defaultState};}}
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function randInt(n){ return Math.floor(Math.random()*n); }
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=randInt(i+1); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function percent(a,b){ return b ? Math.round((a/b)*100) : 0; }
function setPage(p){ page=p; activeQuiz=null; document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===p)); render(); }

document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));
document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("Tüm StarQuiz ilerlemesi sıfırlansın mı?")){ localStorage.removeItem(STORE_KEY); state=load(); setPage("home");}
});

// Akıllı soru seçimi:
// 1) Aynı testte aynı soru asla gelmez.
// 2) Son çözülen sorular mümkün oldukça tekrar gelmez.
// 3) Aynı kategori/aynı cevap üst üste yığılmaz.
// 4) Test her açıldığında şıklar yeniden karışır.
function pickSmartQuestions(count){
  const recent = new Set(state.recentQuestionIds || []);
  let pool = QUESTIONS.filter(q => !recent.has(q.id));
  if(pool.length < count) pool = [...QUESTIONS]; // havuz yetmezse sıfırdan kullan

  pool = shuffle(pool);

  const selected = [];
  const usedIds = new Set();
  const topicCount = {};
  const categoryCount = {};

  function score(q){
    const topic = q.topic || (q.category+"::"+q.answer);
    let s = Math.random();
    s += (topicCount[topic] || 0) * 8;      // aynı cevap/konu tekrarını cezalandır
    s += (categoryCount[q.category] || 0) * 1.7; // aynı kategori yığılmasını azalt
    if(recent.has(q.id)) s += 20;
    return s;
  }

  while(selected.length < count && pool.length){
    pool.sort((a,b)=>score(a)-score(b));
    const q = pool.shift();
    if(!q || usedIds.has(q.id)) continue;
    selected.push(q);
    usedIds.add(q.id);
    const topic = q.topic || (q.category+"::"+q.answer);
    topicCount[topic] = (topicCount[topic] || 0) + 1;
    categoryCount[q.category] = (categoryCount[q.category] || 0) + 1;
  }

  // Her sorunun şıklarını test başında ayrı karıştır
  return selected.map(q => ({...q, options: shuffle(q.options)}));
}

function render(){
  if(page==="home") return renderHome();
  if(page==="quiz") return renderQuizStart();
  if(page==="wrong") return renderWrong();
  if(page==="stats") return renderStats();
  if(page==="sources") return renderSources();
}

function renderHome(){
  const rate = percent(state.correct,state.total);
  app.innerHTML = `
    <section class="card hero">
      <h1>Bilgini Test Et, Seviyeni Yükselt!</h1>
      <p class="muted">KKTC genel kültür için 500 soruluk genişletilebilir soru bankası.</p>
      <div class="grid">
        <div class="stat">⭐ XP <b>${state.xp}</b></div>
        <div class="stat">🏆 Açık Seviye <b>${state.levelUnlocked}</b></div>
        <div class="stat">📊 Başarı <b>%${rate}</b></div>
        <div class="stat">📚 Soru Bankası <b>${QUESTIONS.length}</b></div>
      </div>
      <button class="primary" onclick="setPage('quiz')">Teste Başla</button>
    </section>
    <section class="card">
      <h2>Karışık Test Sistemi</h2>
      <p class="muted">V3.1 ile aynı testte tekrar soru gelmez. Son çıkan sorular da mümkün olduğunca sonraki testlerde bekletilir.</p>
    </section>
    <section class="card">
      <h2>Seviyeler</h2>
      <div class="levels">
        ${levels.map(l=>`
          <div class="level-card ${state.levelUnlocked<l.id?'locked':''}">
            <div>
              <b>${state.levelUnlocked>=l.id?'✅':'🔒'} ${l.title}</b>
              <div class="muted small">${l.count} soru · Geçiş: %${l.pass} · Ödül: ${l.xp} XP</div>
            </div>
            <span class="badge ${l.id===1?'gold':''}">${l.count}</span>
          </div>`).join("")}
      </div>
    </section>
    <section class="card">
      <h2>Rozetler</h2>
      <p>${getBadges().join(" ") || "Henüz rozet yok. İlk testini çözerek başla."}</p>
    </section>
  `;
}

function renderQuizStart(){
  app.innerHTML = `
    <section class="card">
      <h2>Test Seç</h2>
      <p class="muted">Sorular akıllı karışır. Aynı test içinde tekrar soru çıkmaz, seçeneklerin sırası da her testte değişir.</p>
      ${levels.map(l=>`
        <button class="${state.levelUnlocked>=l.id?'primary':'secondary'}" ${state.levelUnlocked>=l.id?`onclick="startQuiz(${l.id})"`:"disabled"}>
          ${state.levelUnlocked>=l.id?'▶':'🔒'} ${l.title} — ${l.count} Soru
        </button>`).join("")}
      <button class="secondary" onclick="clearRecent()">Son çıkanları sıfırla / tam karıştır</button>
    </section>`;
}

window.clearRecent = function(){
  state.recentQuestionIds = [];
  save();
  alert("Son çıkan soru hafızası sıfırlandı. Yeni test tamamen karışık gelecek.");
}

function startQuiz(levelId){
  const lvl = levels.find(x=>x.id===levelId);
  activeQuiz = { level:lvl, index:0, answers:[], questions:pickSmartQuestions(lvl.count), locked:false };
  renderQuestion();
}

function renderQuestion(){
  const q = activeQuiz.questions[activeQuiz.index];
  const done = activeQuiz.index;
  app.innerHTML = `
    <section class="card">
      <div class="quiz-head">
        <span>Soru ${activeQuiz.index+1} / ${activeQuiz.level.count}</span>
        <span>${q.category} · ${q.difficulty}</span>
      </div>
      <div class="progress"><div style="width:${(done/activeQuiz.level.count)*100}%"></div></div>
      <div class="question">${q.question}</div>
      ${q.options.map(opt=>`<button class="choice" onclick="answerQuestion('${String(opt).replace(/'/g,"\\'")}')">${opt}</button>`).join("")}
    </section>`;
}

window.answerQuestion = function(answer){
  if(!activeQuiz || activeQuiz.locked) return;
  activeQuiz.locked = true;
  const q = activeQuiz.questions[activeQuiz.index];
  const isCorrect = answer === q.answer;
  activeQuiz.answers.push({ ...q, userAnswer:answer, isCorrect });
  document.querySelectorAll(".choice").forEach(btn=>{
    if(btn.textContent===q.answer) btn.classList.add("correct");
    if(btn.textContent===answer && !isCorrect) btn.classList.add("wrong");
    btn.disabled = true;
  });
  setTimeout(()=>{
    activeQuiz.index++;
    activeQuiz.locked = false;
    if(activeQuiz.index >= activeQuiz.questions.length) finishQuiz();
    else renderQuestion();
  }, 520);
}

function finishQuiz(){
  const correct = activeQuiz.answers.filter(a=>a.isCorrect).length;
  const total = activeQuiz.answers.length;
  const wrongs = activeQuiz.answers.filter(a=>!a.isCorrect);
  const score = Math.round((correct/total)*100);
  const passed = score >= activeQuiz.level.pass;
  const earned = passed ? activeQuiz.level.xp : Math.round(activeQuiz.level.xp * (score/100) * .55);

  state.tests++; state.total += total; state.correct += correct; state.wrong += wrongs.length; state.xp += earned;
  state.wrongQuestions = [...wrongs, ...state.wrongQuestions].slice(0,100);
  state.history.unshift({date:new Date().toLocaleString("tr-TR"), level:activeQuiz.level.id, score, correct, total});

  const solvedIds = activeQuiz.questions.map(q=>q.id);
  state.recentQuestionIds = [...solvedIds, ...(state.recentQuestionIds||[])];
  state.recentQuestionIds = [...new Set(state.recentQuestionIds)].slice(0,180); // son 180 soru tekrar etmesin

  if(passed && state.levelUnlocked < activeQuiz.level.id + 1 && activeQuiz.level.id < 3) state.levelUnlocked = activeQuiz.level.id + 1;
  save();

  app.innerHTML = `
    <section class="card hero">
      <div class="result-stars">${score>=90?"⭐⭐⭐⭐⭐":score>=75?"⭐⭐⭐⭐☆":score>=60?"⭐⭐⭐☆☆":"⭐⭐☆☆☆"}</div>
      <h2>Test Sonucu</h2>
      <div class="grid">
        <div class="stat">✅ Doğru <b>${correct}</b></div>
        <div class="stat">❌ Yanlış <b>${wrongs.length}</b></div>
        <div class="stat">📊 Başarı <b>%${score}</b></div>
        <div class="stat">⭐ XP <b>+${earned}</b></div>
      </div>
      <p class="${passed?'ok':'bad'}">${passed ? "Seviye başarıyla tamamlandı." : "Geçiş puanı yetmedi, tekrar dene."}</p>
      <button class="primary" onclick="setPage('wrong')">Yanlışları İncele</button>
      <button class="secondary" onclick="setPage('quiz')">Yeni Karışık Test</button>
      <button class="secondary" onclick="setPage('home')">Ana Menü</button>
    </section>`;
  activeQuiz = null;
}

function renderWrong(){
  if(!state.wrongQuestions.length){
    app.innerHTML = `<section class="card"><h2>Yanlışlarım</h2><p class="muted">Henüz yanlış yapılan soru yok.</p><button class="primary" onclick="setPage('quiz')">Test Çöz</button></section>`;
    return;
  }
  app.innerHTML = `
    <section class="card">
      <h2>Yanlışlarım</h2>
      <p class="muted">Son 100 yanlış kaydedilir. Doğru cevap ve açıklama gösterilir.</p>
      ${state.wrongQuestions.map(w=>`
        <div class="wrong-item">
          <b>${w.question}</b>
          <p class="small"><span class="bad">Senin cevabın:</span> ${w.userAnswer}</p>
          <p class="small"><span class="ok">Doğru cevap:</span> ${w.answer}</p>
          <p class="muted small">${w.explanation}</p>
        </div>`).join("")}
    </section>`;
}

function renderStats(){
  const rate = percent(state.correct,state.total);
  app.innerHTML = `
    <section class="card hero">
      <h2>İstatistikler</h2>
      <div class="grid">
        <div class="stat">Toplam Test <b>${state.tests}</b></div>
        <div class="stat">Toplam Soru <b>${state.total}</b></div>
        <div class="stat">Doğru <b>${state.correct}</b></div>
        <div class="stat">Yanlış <b>${state.wrong}</b></div>
      </div>
      <p class="muted">Genel başarı oranı: <b>%${rate}</b></p>
      <div class="progress"><div style="width:${rate}%"></div></div>
      <p class="small muted">Tekrar engelleme hafızası: ${state.recentQuestionIds?.length || 0} soru</p>
    </section>
    <section class="card">
      <h2>Son Testler</h2>
      ${state.history.length ? state.history.slice(0,8).map(h=>`<p class="small">Seviye ${h.level} · ${h.correct}/${h.total} · %${h.score} · ${h.date}</p>`).join("") : `<p class="muted">Henüz test çözülmedi.</p>`}
    </section>`;
}

function renderSources(){
  app.innerHTML = `
    <section class="card">
      <h2>Kaynak Notu</h2>
      <p class="muted">Bu V3.1 paketi, akıllı karışık test sistemi ve 500 soruluk genişletilebilir KKTC genel kültür altyapısını içerir.</p>
      <ul class="source-list">
        <li>KKTC Enformasyon Dairesi: Genel Bilgi, Coğrafi Bilgiler, Tarih ve kültür başlıkları.</li>
        <li>KKTC resmi kurum sayfaları: Resmi günler, kurumlar ve devlet yapısı bilgileri.</li>
        <li>Üniversite ve kurumların genel tanıtım bilgileri.</li>
      </ul>
      <p class="small muted">Not: Kamu sınavına dönük nihai sürümde sorular tek tek kontrol edilip “onaylı soru bankası” haline getirilmelidir.</p>
    </section>`;
}

function getBadges(){
  const badges=[];
  if(state.tests>=1) badges.push("🥉 İlk Test");
  if(state.correct>=100) badges.push("🥈 100 Doğru");
  if(state.correct>=500) badges.push("🥇 500 Doğru");
  if(state.xp>=1000) badges.push("🧠 Bilge");
  if(percent(state.correct,state.total)>=85 && state.total>=50) badges.push("👑 KKTC Uzmanı");
  return badges;
}

render();
if("serviceWorker" in navigator){ window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{})); }
