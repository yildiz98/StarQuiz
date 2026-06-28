const CACHE_NAME = "starquiz-kamu-yasasi-1";
const FILES = [
  "./",
  "./index.html?v=kamuyasa1",
  "./style.css?v=kamuyasa1",
  "./app.js?v=kamuyasa1",
  "./questions.js?v=kamuyasa1",
  "./lessons.js?v=kamuyasa1",
  "./manifest.json?v=kamuyasa1",
  "./logo.png?v=kamuyasa1",
  "./icon-192.png?v=kamuyasa1",
  "./icon-512.png?v=kamuyasa1",
  "./apple-touch-icon.png?v=kamuyasa1",
  "./favicon.png?v=kamuyasa1"
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
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html?v=kamuyasa1") || caches.match("./")))
  );
});
