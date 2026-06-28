const CACHE_NAME = "starquiz-anayasa-ekli-1";
const FILES = [
  "./","./index.html?v=anayasa1","./style.css?v=anayasa1","./app.js?v=anayasa1",
  "./questions.js?v=anayasa1","./lessons.js?v=anayasa1","./manifest.json?v=anayasa1",
  "./logo.png?v=anayasa1","./icon-192.png?v=anayasa1","./icon-512.png?v=anayasa1",
  "./apple-touch-icon.png?v=anayasa1","./favicon.png?v=anayasa1"
];
self.addEventListener("install", e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)))});
self.addEventListener("activate", e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))).then(()=>self.clients.claim()))});
self.addEventListener("fetch", e=>{e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)).catch(()=>{});return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html?v=anayasa1")||caches.match("./"))))});
