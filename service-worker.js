const CACHE_NAME = "starquiz-webfull3-cache";
const FILES = [
  "./",
  "./index.html?v=webfull3",
  "./style.css?v=webfull3",
  "./app.js?v=webfull3",
  "./questions.js?v=webfull3",
  "./manifest.json?v=webfull3",
  "./logo.png?v=webfull3",
  "./icon-192.png?v=webfull3",
  "./icon-512.png?v=webfull3",
  "./apple-touch-icon.png?v=webfull3",
  "./favicon.png?v=webfull3"
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
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html?v=webfull3") || caches.match("./")))
  );
});
