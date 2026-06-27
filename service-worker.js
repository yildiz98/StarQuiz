const CACHE_NAME='starquiz-v9-premium-auto-cache-4';
const FILES=[
  './',
  './index.html?v=9auto4',
  './style.css?v=9auto4',
  './app.js?v=9auto4',
  './questions.js?v=9auto4',
  './manifest.json?v=9auto4',
  './assets/logo.png?v=9auto4',
  './assets/icon-192.png?v=9auto4',
  './assets/icon-512.png?v=9auto4',
  './assets/apple-touch-icon.png?v=9auto4',
  './assets/favicon.png?v=9auto4'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
      return response;
    }).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html?v=9auto4') || caches.match('./')))
  );
});
