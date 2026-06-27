const CACHE_NAME = "starquiz-v3-cache-1";
const FILES = ["./","./index.html","./style.css","./app.js","./questions.js","./manifest.json","./icon.svg"];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
