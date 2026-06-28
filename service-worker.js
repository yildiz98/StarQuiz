const CACHE_NAME = "starquiz-dersler-pro-3";
const FILES = [
  "./",
  "./index.html?v=derspro3",
  "./style.css?v=derspro3",
  "./app.js?v=derspro3",
  "./questions.js?v=derspro3",
  "./lessons.js?v=derspro3",
  "./manifest.json?v=derspro3",
  "./logo.png?v=derspro3",
  "./icon-192.png?v=derspro3",
  "./icon-512.png?v=derspro3",
  "./apple-touch-icon.png?v=derspro3",
  "./favicon.png?v=derspro3"
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
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html?v=derspro3") || caches.match("./")))
  );
});
