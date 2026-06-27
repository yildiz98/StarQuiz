const LEVELS = [
  { id:1, name:'Seviye 1', count:10, pass:70, time:8, desc:'Başlangıç - 10 soru' },
  { id:2, name:'Seviye 2', count:20, pass:75, time:15, desc:'Orta - 20 soru' },
  { id:3, name:'Seviye 3', count:30, pass:80, time:22, desc:'Zor - 30 soru' }
];

const QUESTIONS = [
  {q:'Kuzey Kıbrıs Türk Cumhuriyeti’nin başkenti neresidir?', a:['Girne','Lefkoşa','Gazimağusa','Güzelyurt'], c:1},
  {q:'KKTC hangi tarihte ilan edilmiştir?', a:['15 Kasım 1983','20 Temmuz 1974','1 Ağustos 1976','29 Ekim 1923'], c:0},
  {q:'KKTC bayrağında hangi renkler ağırlıklı olarak yer alır?', a:['Mavi ve beyaz','Kırmızı ve beyaz','Yeşil ve beyaz','Siyah ve sarı'], c:1},
  {q:'Kıbrıs Barış Harekâtı hangi yılda gerçekleşmiştir?', a:['1960','1974','1983','1990'], c:1},
  {q:'KKTC’nin para birimi günlük kullanımda hangisidir?', a:['Euro','Sterlin','Türk Lirası','Dolar'], c:2},
  {q:'Girne Kalesi hangi şehirde bulunur?', a:['Girne','Lefkoşa','İskele','Lefke'], c:0},
  {q:'Kıbrıs adası Akdeniz’in hangi bölgesinde yer alır?', a:['Batı Akdeniz','Doğu Akdeniz','Kuzey Denizi','Ege Denizi'], c:1},
  {q:'KKTC’de Cumhuriyet Bayramı hangi tarihte kutlanır?', a:['1 Ağustos','20 Temmuz','15 Kasım','23 Nisan'], c:2},
  {q:'Kapalı Maraş hangi şehir sınırları içerisindedir?', a:['Gazimağusa','Girne','Güzelyurt','Lefkoşa'], c:0},
  {q:'Lefke hangi özelliğiyle bilinen bir bölgedir?', a:['Narenciye ve doğal güzellikler','Kayak turizmi','Çöl iklimi','Volkanik dağlar'], c:0},
  {q:'KKTC’de yasama organı hangisidir?', a:['Cumhuriyet Meclisi','Danıştay','Senato','Valilik'], c:0},
  {q:'20 Temmuz KKTC’de hangi gün olarak kutlanır?', a:['Cumhuriyet Bayramı','Barış ve Özgürlük Bayramı','Zafer Bayramı','Gençlik Bayramı'], c:1},
  {q:'Kıbrıs’ın en önemli tarihi liman kentlerinden biri hangisidir?', a:['Gazimağusa','Karpaz','Lefke','Değirmenlik'], c:0},
  {q:'Karpaz Yarımadası daha çok hangi özelliğiyle tanınır?', a:['Altın kumsallar ve doğal yaşam','Sanayi tesisleri','Kayak merkezi','Büyük göller'], c:0},
  {q:'KKTC’de yürütmenin başında halk tarafından seçilen makam hangisidir?', a:['Cumhurbaşkanı','Kaymakam','Belediye Başkanı','Muhtar'], c:0},
  {q:'Kıbrıs Türk halkının önemli liderlerinden biri kimdir?', a:['Rauf Denktaş','Mehmet Akif Ersoy','Ziya Gökalp','Namık Kemal'], c:0},
  {q:'KKTC’nin resmi dili nedir?', a:['Türkçe','İngilizce','Rumca','Arapça'], c:0},
  {q:'Bellapais Manastırı hangi bölgeye yakındır?', a:['Girne','Güzelyurt','Lefke','İskele'], c:0},
  {q:'Salamis Antik Kenti hangi şehir yakınlarındadır?', a:['Gazimağusa','Girne','Lefkoşa','Lefke'], c:0},
  {q:'KKTC’de ilçelerden biri hangisidir?', a:['Mersin','İskele','Alanya','Silifke'], c:1},
  {q:'Kıbrıs’ta zeytin ağacı hangi alanla ilişkilidir?', a:['Tarım ve kültür','Madencilik','Kutup iklimi','Gemi motoru'], c:0},
  {q:'KKTC’de üniversite eğitimiyle öne çıkan şehirlerden biri hangisidir?', a:['Lefkoşa','Ağrı','Kars','Tekirdağ'], c:0},
  {q:'Namık Kemal Zindanı hangi şehirde bulunur?', a:['Gazimağusa','Girne','İskele','Lefke'], c:0},
  {q:'Kıbrıs mutfağında hellim ne tür bir üründür?', a:['Peynir','Tatlı','İçecek','Baharat'], c:0},
  {q:'KKTC’de turizm açısından öne çıkan şehirlerden biri hangisidir?', a:['Girne','Kars','Sivas','Edirne'], c:0},
  {q:'Kıbrıs Türk Federe Devleti hangi yılda ilan edilmiştir?', a:['1975','1983','1960','1998'], c:0},
  {q:'KKTC’de yerel yönetim birimi olarak hangisi bulunur?', a:['Belediye','Eyalet','Kanton','Prefektörlük'], c:0},
  {q:'Kıbrıs’ta narenciye üretimiyle bilinen bölge hangisidir?', a:['Güzelyurt','Karpaz','Boğaz','Haspolat'], c:0},
  {q:'KKTC’de trafik akışı genellikle hangi taraftandır?', a:['Sağdan','Soldan','Ortadan','Tek yön zorunlu'], c:1},
  {q:'Kıbrıs adasının kuzeyinde hangi devlet yer alır?', a:['KKTC','Malta','Girit','Rodos'], c:0}
];

let state = JSON.parse(localStorage.getItem('starQuizState') || '{"unlocked":1,"totalSolved":0,"bestScore":0}');
let currentLevel = 1, currentIndex = 0, answers = [], secondsLeft = 0, timerId = null;
const $ = id => document.getElementById(id);
function save(){ localStorage.setItem('starQuizState', JSON.stringify(state)); }
function show(view){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active')); $(view).classList.add('active'); }
function renderHome(){
  $('totalSolved').textContent = state.totalSolved || 0; $('bestScore').textContent = Math.round(state.bestScore||0); $('openLevel').textContent = state.unlocked || 1;
  $('levels').innerHTML = LEVELS.map(l=>{
    const locked = l.id > state.unlocked;
    return `<div class="card level-card ${locked?'locked':''}"><div class="level-left"><div class="level-mark">${locked?'🔒':'★'}</div><div><h3>${l.name}</h3><p>${l.desc} • Geçiş: ${l.pass} puan</p></div></div><button ${locked?'disabled':''} onclick="startQuiz(${l.id})">${locked?'Kilitli':'Başla'}</button></div>`;
  }).join('');
}
function startQuiz(levelId){
  currentLevel = levelId; currentIndex = 0; const level = LEVELS[levelId-1]; answers = Array(level.count).fill(null); secondsLeft = level.time*60;
  clearInterval(timerId); timerId=setInterval(()=>{secondsLeft--; renderTimer(); if(secondsLeft<=0) finishQuiz();},1000);
  $('quizLevelBadge').textContent = level.name; $('quizTitle').textContent = `${level.count} Soruluk Genel Kültür Testi`; show('quizView'); renderQuestion(); renderTimer();
}
function renderTimer(){ const m=String(Math.floor(secondsLeft/60)).padStart(2,'0'), s=String(secondsLeft%60).padStart(2,'0'); $('timer').textContent=`${m}:${s}`; }
function renderQuestion(){
  const level = LEVELS[currentLevel-1], q = QUESTIONS[currentIndex];
  $('questionMeta').textContent = `Soru ${currentIndex+1} / ${level.count}`; $('questionText').textContent = q.q;
  $('answers').innerHTML = q.a.map((x,i)=>`<button class="answer ${answers[currentIndex]===i?'selected':''}" onclick="selectAnswer(${i})">${String.fromCharCode(65+i)}) ${x}</button>`).join('');
  $('progressBar').style.width = `${((currentIndex+1)/level.count)*100}%`; $('prevBtn').disabled = currentIndex===0; $('nextBtn').textContent = currentIndex===level.count-1 ? 'Bitir' : 'İleri';
}
function selectAnswer(i){ answers[currentIndex]=i; renderQuestion(); }
function finishQuiz(){
  clearInterval(timerId); const level=LEVELS[currentLevel-1]; let correct=0, empty=0;
  for(let i=0;i<level.count;i++){ if(answers[i]===null) empty++; else if(answers[i]===QUESTIONS[i].c) correct++; }
  const wrong = level.count-correct-empty; const score = Math.round((correct/level.count)*100);
  state.totalSolved=(state.totalSolved||0)+1; state.bestScore=Math.max(state.bestScore||0, score);
  const passed = score >= level.pass; if(passed && currentLevel < LEVELS.length) state.unlocked=Math.max(state.unlocked,currentLevel+1); save();
  $('correctCount').textContent=correct; $('wrongCount').textContent=wrong; $('emptyCount').textContent=empty; $('scoreCount').textContent=score;
  $('resultSummary').textContent = `${level.name} tamamlandı. Başarı oranı %${score}.`;
  $('passMessage').innerHTML = passed ? `<strong class="pass">Tebrikler!</strong> Seviyeyi geçtin.` : `<strong class="fail">Tekrar dene.</strong> Geçmek için en az ${level.pass} puan gerekli.`;
  $('nextLevelBtn').style.display = passed && currentLevel < LEVELS.length ? 'block':'none'; show('resultView');
}
$('nextBtn').onclick=()=>{ const level=LEVELS[currentLevel-1]; if(currentIndex<level.count-1){currentIndex++; renderQuestion();} else finishQuiz(); };
$('prevBtn').onclick=()=>{ if(currentIndex>0){currentIndex--; renderQuestion();} };
$('retryBtn').onclick=()=>startQuiz(currentLevel); $('nextLevelBtn').onclick=()=>startQuiz(currentLevel+1); $('homeBtn').onclick=()=>{renderHome(); show('homeView');};
$('resetBtn').onclick=()=>{ if(confirm('Tüm ilerleme silinsin mi?')){localStorage.removeItem('starQuizState'); state={unlocked:1,totalSolved:0,bestScore:0}; renderHome(); show('homeView'); }};
renderHome();
