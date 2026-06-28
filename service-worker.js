const CACHE_NAME = "starquiz-web-logo-fix-1";
const FILES = [
  "./",
  "./index.html?v=webfix1",
  "./style.css?v=webfix1",
  "./app.js?v=webfix1",
  "./questions.js?v=webfix1",
  "./manifest.json?v=webfix1",
  "./logo.png?v=webfix1",
  "./icon-192.png?v=webfix1",
  "./icon-512.png?v=webfix1",
  "./apple-touch-icon.png?v=webfix1",
  "./favicon.png?v=webfix1"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
      return response;
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html?v=webfix1") || caches.match("./")))
  );
});
