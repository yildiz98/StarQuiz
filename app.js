const STORE_KEY = "starquiz_dersler_pro_state";
const app = document.getElementById("app");
let page = "home";
let activeQuiz = null;

const defaultState = {
  xp: 0,
  tests: 0,
  total: 0,
  correct: 0,
  wrong: 0,
  wrongQuestions: [],
  history: [],
  recentQuestionIds: []
};

let state = load();

function getQuestions(){
  return Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
}
function load(){
  try { return {...defaultState, ...(JSON.parse(localStorage.getItem(STORE_KEY)) || {})}; }
  catch(e){ return {...defaultState}; }
}
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function shuffle(arr){
  const a=[...(arr || [])];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function percent(a,b){ return b ? Math.round((a/b)*100) : 0; }
function esc(v){
  return String(v ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
function jsArg(v){
  return String(v ?? "").replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g," ");
}
function normalizeDifficulty(d){ return ["Kolay","Orta","Zor"].includes(d) ? d : null; }

function setPage(p){
  page = p;
  activeQuiz = null;
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.page === p));
  render();
}
window.setPage = setPage;

document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => setPage(btn.dataset.page)));
document.getElementById("resetBtn").addEventListener("click", () => {
  if(confirm("İlerleme sıfırlansın mı?")){
    localStorage.removeItem(STORE_KEY);
    state = load();
    render();
  }
});

function uniqueCategories(){
  const map = {};
  getQuestions().forEach(q => { map[q.category || "Genel"] = (map[q.category || "Genel"] || 0) + 1; });
  return Object.entries(map).sort((a,b)=>a[0].localeCompare(b[0],"tr"));
}
function difficultyCounts(category=null){
  return ["Kolay","Orta","Zor"].map(level => [
    level,
    getQuestions().filter(q => (!category || q.category === category) && q.difficulty === level).length
  ]);
}
function pickQuestions(count, category=null, difficulty=null){
  difficulty = normalizeDifficulty(difficulty);
  const recent = new Set(state.recentQuestionIds || []);
  let pool = getQuestions().filter(q =>
    (!category || q.category === category) &&
    (!difficulty || q.difficulty === difficulty) &&
    !recent.has(q.id)
  );

  if(pool.length < count){
    pool = getQuestions().filter(q =>
      (!category || q.category === category) &&
      (!difficulty || q.difficulty === difficulty)
    );
  }

  pool = shuffle(pool);
  const selected = [];
  while(selected.length < count && pool.length){
    const q = pool.shift();
    if(!q || selected.some(x => x.id === q.id || x.question === q.question)) continue;
    selected.push({...q, options: shuffle(q.options || [])});
  }
  return selected;
}

function render(){
  if(page === "home") return renderHome();
  if(page === "exam") return renderExam();
  if(page === "topics") return renderTopics();
  if(page === "lessons") return renderLessons();
  if(page === "wrong") return renderWrong();
  if(page === "stats") return renderStats();
}

function renderHome(){
  const qs = getQuestions();
  const rate = percent(state.correct, state.total);
  app.innerHTML = `
    <section class="card hero web-hero">
<h1>KKTC Kamu Sınavı Hazırlık</h1>
      <p class="muted">Gerçek sınav mantığında dijital soru bankası. Şu an ${qs.length} soru eklendi.</p>
      <div class="grid">
        <div class="stat">📚 Soru <b>${qs.length}</b></div>
        <div class="stat">⭐ XP <b>${state.xp}</b></div>
        <div class="stat">📊 Başarı <b>%${rate}</b></div>
        <div class="stat">📝 Test <b>${state.tests}</b></div>
      </div>
      <button class="primary" onclick="startQuiz(20)">20 Soruluk Karışık Deneme</button>
      <button class="secondary" onclick="setPage('exam')">Seviyeli Test Başlat</button>
      <button class="secondary" onclick="setPage('lessons')">Mini Dersleri Aç</button>
    </section>
    <section class="card">
      <h2>StarQuiz</h2>
      <p class="muted">Tek logolu sade web görünümü hazırlandı. Soru sistemi, seviyeli testler ve analiz ekranı korunmuştur.</p>
    </section>`;
}

function renderExam(){
  const counts = Object.fromEntries(difficultyCounts());
  app.innerHTML = `
    <section class="card">
      <h2>Seviyeli Deneme</h2>
      <p class="muted">Karışık, Kolay, Orta veya Zor test başlat.</p>
      <button class="primary" onclick="startQuiz(10)">10 Soru Karışık</button>
      <button class="primary" onclick="startQuiz(20)">20 Soru Karışık</button>
      <button class="primary" onclick="startQuiz(50)">50 Soru Karışık</button>
      <div class="level-grid">
        <button class="level-btn easy" onclick="startQuiz(Math.min(20, ${counts.Kolay || 0}), null, 'Kolay')"><b>Kolay</b><span>${counts.Kolay || 0} soru</span></button>
        <button class="level-btn medium" onclick="startQuiz(Math.min(20, ${counts.Orta || 0}), null, 'Orta')"><b>Orta</b><span>${counts.Orta || 0} soru</span></button>
        <button class="level-btn hard" onclick="startQuiz(Math.min(20, ${counts.Zor || 0}), null, 'Zor')"><b>Zor</b><span>${counts.Zor || 0} soru</span></button>
      </div>
      <button class="secondary" onclick="clearRecent()">Son çıkanları sıfırla</button>
    </section>`;
}
window.clearRecent = function(){
  state.recentQuestionIds = [];
  save();
  alert("Son çıkan soru hafızası temizlendi.");
};

function renderTopics(){
  const cats = uniqueCategories();
  app.innerHTML = `
    <section class="card">
      <h2>Konu Bazlı Test</h2>
      <p class="muted">İstediğin konudan karışık veya seviyeli test başlat.</p>
      ${cats.map(([c,n]) => {
        const counts = Object.fromEntries(difficultyCounts(c));
        const sc = jsArg(c);
        return `<div class="topic-card">
          <button class="topic-btn" onclick="startQuiz(Math.min(20, ${n}), '${sc}')">${esc(c)}<span class="topic-count">${n}</span></button>
          <div class="topic-levels">
            <button onclick="startQuiz(Math.min(10, ${counts.Kolay || 0}), '${sc}', 'Kolay')">Kolay ${counts.Kolay || 0}</button>
            <button onclick="startQuiz(Math.min(10, ${counts.Orta || 0}), '${sc}', 'Orta')">Orta ${counts.Orta || 0}</button>
            <button onclick="startQuiz(Math.min(10, ${counts.Zor || 0}), '${sc}', 'Zor')">Zor ${counts.Zor || 0}</button>
          </div>
        </div>`;
      }).join("")}
    </section>`;
}

function startQuiz(count, category=null, difficulty=null){
  const questions = pickQuestions(count, category, difficulty);
  if(!questions.length){
    alert("Bu seçim için soru bulunamadı.");
    return;
  }
  activeQuiz = {index:0, questions, answers:[], locked:false, category, difficulty};
  renderQuestion();
}
window.startQuiz = startQuiz;

function renderQuestion(){
  const q = activeQuiz.questions[activeQuiz.index];
  app.innerHTML = `
    <section class="card">
      <div class="quiz-head">
        <span>Soru ${activeQuiz.index + 1}/${activeQuiz.questions.length}</span>
        <span>${esc(q.category)} · ${esc(q.difficulty)}</span>
      </div>
      <div class="progress"><div style="width:${(activeQuiz.index / activeQuiz.questions.length) * 100}%"></div></div>
      <div class="question">${esc(q.question)}</div>
      ${(q.options || []).map(o => `<button class="choice" onclick="answerQuestion('${jsArg(o)}')">${esc(o)}</button>`).join("")}
      <div class="small muted" style="margin-top:12px">Konu: ${esc(q.topic || "")}</div>
    </section>`;
}

window.answerQuestion = function(answer){
  if(!activeQuiz || activeQuiz.locked) return;
  activeQuiz.locked = true;
  const q = activeQuiz.questions[activeQuiz.index];
  const ok = answer === q.answer;
  activeQuiz.answers.push({...q, userAnswer:answer, isCorrect:ok});

  document.querySelectorAll(".choice").forEach(btn => {
    if(btn.textContent === q.answer) btn.classList.add("correct");
    if(btn.textContent === answer && !ok) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const box = document.createElement("div");
  box.className = "explain";
  box.innerHTML = `<b>${ok ? "Doğru" : "Yanlış"}</b><br>Doğru cevap: <b>${esc(q.answer)}</b><br>${esc(q.explanation || "")}`;
  document.querySelector(".card").appendChild(box);

  setTimeout(() => {
    activeQuiz.index++;
    activeQuiz.locked = false;
    if(activeQuiz.index >= activeQuiz.questions.length) finishQuiz();
    else renderQuestion();
  }, 900);
};

function finishQuiz(){
  const total = activeQuiz.answers.length;
  const correct = activeQuiz.answers.filter(a => a.isCorrect).length;
  const wrongs = activeQuiz.answers.filter(a => !a.isCorrect);
  const score = percent(correct, total);

  state.tests++;
  state.total += total;
  state.correct += correct;
  state.wrong += wrongs.length;
  state.xp += correct * 10 + (score >= 80 ? 25 : 0);
  state.recentQuestionIds = [...(state.recentQuestionIds || []), ...activeQuiz.answers.map(a => a.id)].slice(-80);

  wrongs.forEach(w => {
    state.wrongQuestions = state.wrongQuestions.filter(x => x.id !== w.id);
    state.wrongQuestions.unshift(w);
  });
  state.wrongQuestions = state.wrongQuestions.slice(0, 80);

  state.history.unshift({
    date: new Date().toLocaleString("tr-TR"),
    total,
    correct,
    score,
    category: activeQuiz.category || "Karışık",
    difficulty: activeQuiz.difficulty || "Karışık"
  });
  state.history = state.history.slice(0, 30);
  save();

  app.innerHTML = `
    <section class="card hero web-hero">
<h2>Test Bitti</h2>
      <div class="grid">
        <div class="stat">✅ Doğru <b>${correct}</b></div>
        <div class="stat">❌ Yanlış <b>${wrongs.length}</b></div>
        <div class="stat">📊 Başarı <b>%${score}</b></div>
        <div class="stat">⭐ XP <b>${state.xp}</b></div>
      </div>
      <button class="primary" onclick="setPage('exam')">Yeni Test Başlat</button>
      <button class="secondary" onclick="setPage('wrong')">Yanlışları Gör</button>
    </section>`;
}

function renderWrong(){
  if(!state.wrongQuestions.length){
    app.innerHTML = `<section class="card"><h2>Yanlışlarım</h2><p class="muted">Henüz yanlış soru yok.</p></section>`;
    return;
  }
  app.innerHTML = `
    <section class="card">
      <h2>Yanlışlarım</h2>
      <p class="muted">${state.wrongQuestions.length} soru kayıtlı.</p>
      <button class="primary" onclick="startWrongQuiz()">Yanlışlardan Test Başlat</button>
      <button class="danger-btn" onclick="clearWrongs()">Yanlışları Temizle</button>
      ${state.wrongQuestions.map(w => `
        <div class="wrong-item">
          <b>${esc(w.question)}</b>
          <div class="small muted">Senin cevap: ${esc(w.userAnswer || "-")}</div>
          <div class="small ok">Doğru cevap: ${esc(w.answer)}</div>
          <div class="small muted">${esc(w.explanation || "")}</div>
        </div>`).join("")}
    </section>`;
}
window.startWrongQuiz = function(){
  const questions = state.wrongQuestions.map(q => ({...q, options: shuffle(q.options || [])}));
  activeQuiz = {index:0, questions, answers:[], locked:false, category:"Yanlışlar", difficulty:null};
  renderQuestion();
};
window.clearWrongs = function(){
  if(confirm("Yanlışlar listesi temizlensin mi?")){
    state.wrongQuestions = [];
    save();
    renderWrong();
  }
};

function renderStats(){
  const rate = percent(state.correct, state.total);
  app.innerHTML = `
    <section class="card">
      <h2>Analiz</h2>
      <div class="grid">
        <div class="stat">⭐ XP <b>${state.xp}</b></div>
        <div class="stat">📝 Test <b>${state.tests}</b></div>
        <div class="stat">📚 Soru <b>${state.total}</b></div>
        <div class="stat">📊 Başarı <b>%${rate}</b></div>
      </div>
    </section>
    <section class="card">
      <h2>Son Testler</h2>
      ${state.history.length ? state.history.map(h => `
        <div class="wrong-item">
          <b>${esc(h.category)} · ${esc(h.difficulty)}</b>
          <div class="small muted">${esc(h.date)}</div>
          <div>Doğru: <b>${h.correct}/${h.total}</b> · Başarı: <b>%${h.score}</b></div>
        </div>`).join("") : `<p class="muted">Henüz test çözülmedi.</p>`}
    </section>`;
}

render();


function getLessons(){
  return Array.isArray(window.LESSONS) ? window.LESSONS : [];
}

function lessonProgress(){
  try { return JSON.parse(localStorage.getItem("starquiz_lesson_progress") || "{}"); }
  catch(e){ return {}; }
}
function saveLessonProgress(p){
  localStorage.setItem("starquiz_lesson_progress", JSON.stringify(p));
}

function renderLessons(){
  const lessons = getLessons();
  const progress = lessonProgress();
  const doneCount = lessons.filter(l => progress[l.id]).length;
  const groups = {};
  lessons.forEach(l => {
    const key = l.category || "Genel";
    groups[key] = groups[key] || [];
    groups[key].push(l);
  });

  app.innerHTML = `
    <section class="card">
      <h2>📖 Genel Kültür Mini Dersler</h2>
      <p class="muted">Fotoğraflardaki notlardan hazırlanmış kısa çalışma metinleri. Test değil, hızlı tekrar modudur.</p>
      <div class="grid">
        <div class="stat">📚 Ders <b>${lessons.length}</b></div>
        <div class="stat">✅ Tamamlanan <b>${doneCount}</b></div>
      </div>
    </section>
    ${Object.entries(groups).map(([cat,items]) => `
      <section class="card">
        <h2>${esc(cat)}</h2>
        ${items.map(l => `
          <button class="lesson-btn ${progress[l.id] ? "done" : ""}" onclick="openLesson('${jsArg(l.id)}')">
            <span class="lesson-emoji">${esc(l.emoji || "📖")}</span>
            <span class="lesson-info">
              <b>${esc(l.title)}</b>
              <small>${esc(l.module)} · ${l.minutes || 2} dk okuma</small>
            </span>
            <span class="lesson-status">${progress[l.id] ? "✓" : "›"}</span>
          </button>
        `).join("")}
      </section>
    `).join("")}`;
}
window.renderLessons = renderLessons;

function openLesson(id){
  const lesson = getLessons().find(l => l.id === id);
  if(!lesson){
    alert("Ders bulunamadı.");
    return;
  }
  const progress = lessonProgress();
  const next = getLessons()[getLessons().findIndex(l => l.id === id) + 1];

  app.innerHTML = `
    <section class="card lesson-reader">
      <button class="secondary back-btn" onclick="setPage('lessons')">← Derslere Dön</button>
      <div class="lesson-title-row">
        <div class="lesson-big-emoji">${esc(lesson.emoji || "📖")}</div>
        <div>
          <h1>${esc(lesson.title)}</h1>
          <p class="muted">${esc(lesson.category)} · ${lesson.minutes || 2} dk okuma</p>
        </div>
      </div>

      <div class="lesson-section">
        <h2>Genel Anlatım</h2>
        ${(lesson.content || []).map(p => `<p>${esc(p)}</p>`).join("")}
      </div>

      <div class="remember-box">
        <h2>💡 Akılda Kalsın</h2>
        <ul>${(lesson.remember || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>

      <div class="exam-note">
        <h2>⭐ Sınav Notu</h2>
        <p>${esc(lesson.examNote || "")}</p>
      </div>

      <button class="primary" onclick="completeLesson('${jsArg(lesson.id)}')">${progress[lesson.id] ? "Tamamlandı ✓" : "Bu Konuyu Tamamladım"}</button>
      ${next ? `<button class="secondary" onclick="openLesson('${jsArg(next.id)}')">Sonraki Ders → ${esc(next.title)}</button>` : ""}
    </section>`;
}
window.openLesson = openLesson;

function completeLesson(id){
  const progress = lessonProgress();
  progress[id] = true;
  saveLessonProgress(progress);
  alert("Konu tamamlandı olarak işaretlendi.");
  openLesson(id);
}
window.completeLesson = completeLesson;


/* ===== StarQuiz Dersler Pro UI Override ===== */
function progressData(){
  try { return JSON.parse(localStorage.getItem("starquiz_lesson_progress") || "{}"); }
  catch(e){ return {}; }
}
function moduleStats(){
  const lessons = getLessons ? getLessons() : [];
  const p = progressData();
  const total = lessons.length;
  const done = lessons.filter(l => p[l.id]).length;
  const percentDone = total ? Math.round((done / total) * 100) : 0;
  return {total, done, percentDone};
}
function renderHome(){
  const qs = getQuestions();
  const rate = percent(state.correct, state.total);
  const ms = moduleStats();
  app.innerHTML = `
    <section class="pro-hero">
      <div class="pro-hero-left">
        <div class="pro-badge">KKTC Kamu Sınavı Hazırlık</div>
        <h1>StarQuiz Dersler Pro</h1>
        <p>Mini dersler, denemeler ve analiz ekranı tek yerde. Önce konuyu oku, sonra testlerle pekiştir.</p>
        <div class="pro-actions">
          <button class="primary" onclick="setPage('lessons')">📖 Derslere Başla</button>
          <button class="secondary" onclick="setPage('exam')">🎯 Deneme Çöz</button>
        </div>
      </div>
      <div class="pro-hero-logo">
        <img src="./logo.png?v=derspro3" alt="StarQuiz">
      </div>
    </section>

    <section class="pro-grid-3">
      <div class="pro-card">
        <span>📚 Soru Havuzu</span>
        <b>${qs.length}</b>
        <small>Seviyeli test sistemi</small>
      </div>
      <div class="pro-card">
        <span>📖 Mini Ders</span>
        <b>${ms.done}/${ms.total}</b>
        <small>%${ms.percentDone} tamamlandı</small>
      </div>
      <div class="pro-card">
        <span>⭐ XP</span>
        <b>${state.xp}</b>
        <small>Başarı: %${rate}</small>
      </div>
    </section>

    <section class="card pro-progress-card">
      <div class="section-head">
        <div>
          <h2>Genel Kültür İlerlemesi</h2>
          <p class="muted">İlk modül: Kıbrıs Coğrafyası ve Kıbrıs Tarihi mini çalışma metinleri.</p>
        </div>
        <strong>%${ms.percentDone}</strong>
      </div>
      <div class="big-progress"><div style="width:${ms.percentDone}%"></div></div>
      <button class="secondary" onclick="setPage('lessons')">Dersleri Görüntüle</button>
    </section>`;
}

function renderLessons(){
  const lessons = getLessons();
  const progress = progressData();
  const doneCount = lessons.filter(l => progress[l.id]).length;
  const groups = {};
  lessons.forEach(l => {
    const key = l.category || "Genel";
    groups[key] = groups[key] || [];
    groups[key].push(l);
  });

  app.innerHTML = `
    <section class="lesson-dashboard">
      <div>
        <div class="pro-badge">Okuma Modu</div>
        <h1>📖 Genel Kültür Mini Dersler</h1>
        <p>Fotoğraflardan hazırlanan kısa, sınav odaklı çalışma metinleri. Test değil; hızlı tekrar ve konu öğrenme ekranıdır.</p>
      </div>
      <div class="lesson-ring">
        <b>${doneCount}</b>
        <span>/${lessons.length}</span>
        <small>tamamlandı</small>
      </div>
    </section>

    ${Object.entries(groups).map(([cat,items]) => {
      const catDone = items.filter(l => progress[l.id]).length;
      const catPct = items.length ? Math.round(catDone/items.length*100) : 0;
      return `<section class="card lesson-group-card">
        <div class="section-head">
          <div>
            <h2>${esc(cat)}</h2>
            <p class="muted">${items.length} mini ders · ${catDone} tamamlandı</p>
          </div>
          <strong>%${catPct}</strong>
        </div>
        <div class="mini-progress"><div style="width:${catPct}%"></div></div>
        <div class="lesson-list-pro">
          ${items.map((l,idx) => `
            <button class="lesson-row-pro ${progress[l.id] ? "done" : ""}" onclick="openLesson('${jsArg(l.id)}')">
              <div class="lesson-num">${progress[l.id] ? "✓" : idx+1}</div>
              <div class="lesson-main">
                <b>${esc(l.emoji || "📖")} ${esc(l.title)}</b>
                <small>${esc(l.module)} · ${l.minutes || 2} dk okuma</small>
              </div>
              <div class="lesson-arrow">›</div>
            </button>
          `).join("")}
        </div>
      </section>`;
    }).join("")}`;
}

function openLesson(id){
  const lesson = getLessons().find(l => l.id === id);
  if(!lesson){ alert("Ders bulunamadı."); return; }
  const progress = progressData();
  const list = getLessons();
  const currentIndex = list.findIndex(l => l.id === id);
  const next = list[currentIndex + 1];

  app.innerHTML = `
    <section class="reader-shell">
      <button class="secondary back-btn" onclick="setPage('lessons')">← Derslere Dön</button>
      <div class="reader-hero">
        <div class="lesson-big-emoji">${esc(lesson.emoji || "📖")}</div>
        <div>
          <div class="pro-badge">${esc(lesson.category)} · ${lesson.minutes || 2} dk</div>
          <h1>${esc(lesson.title)}</h1>
          <p>${esc(lesson.module)} mini çalışma metni</p>
        </div>
      </div>

      <div class="reader-card">
        <h2>📘 Konu Anlatımı</h2>
        ${(lesson.content || []).map(p => `<p>${esc(p)}</p>`).join("")}
      </div>

      <div class="reader-two">
        <div class="remember-box pro-box">
          <h2>💡 Akılda Kalsın</h2>
          <ul>${(lesson.remember || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="exam-note pro-box">
          <h2>⭐ Sınav Notu</h2>
          <p>${esc(lesson.examNote || "")}</p>
        </div>
      </div>

      <div class="reader-actions">
        <button class="primary" onclick="completeLesson('${jsArg(lesson.id)}')">${progress[lesson.id] ? "Tamamlandı ✓" : "Bu Konuyu Tamamladım"}</button>
        ${next ? `<button class="secondary" onclick="openLesson('${jsArg(next.id)}')">Sonraki Ders → ${esc(next.title)}</button>` : ""}
      </div>
    </section>`;
}

render();
