const CACHE_NAME = "starquiz-test-secimli-1";
const FILES = [
  "./","./index.html?v=testsecim1","./style.css?v=testsecim1","./app.js?v=testsecim1",
  "./questions.js?v=testsecim1","./lessons.js?v=testsecim1","./manifest.json?v=testsecim1",
  "./logo.png?v=testsecim1","./icon-192.png?v=testsecim1","./icon-512.png?v=testsecim1",
  "./apple-touch-icon.png?v=testsecim1","./favicon.png?v=testsecim1"
];
self.addEventListener("install", e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)))});
self.addEventListener("activate", e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))).then(()=>self.clients.claim()))});
self.addEventListener("fetch", e=>{e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)).catch(()=>{});return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html?v=testsecim1")||caches.match("./"))))});
