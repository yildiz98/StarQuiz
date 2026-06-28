const CACHE_NAME = "starquiz-logo-fixed-10fix2";
const FILES = [
  "./",
  "./index.html?v=10fix2",
  "./style.css?v=10fix2",
  "./app.js?v=10fix2",
  "./questions.js?v=10fix2",
  "./manifest.json?v=10fix2",
  "./assets/logo.png?v=10fix2",
  "./assets/icon-192.png?v=10fix2",
  "./assets/icon-512.png?v=10fix2",
  "./assets/apple-touch-icon.png?v=10fix2",
  "./assets/favicon.png?v=10fix2"
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
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html?v=10fix2") || caches.match("./")))
  );
});
