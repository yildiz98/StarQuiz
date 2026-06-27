const CACHE_NAME='starquiz-v9-premium-fixed-cache-3';
const FILES=[
  './',
  './index.html',
  './style.css',
  './app.js',
  './questions.js',
  './manifest.json',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/favicon.png',
  './logo.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.map(key=>key!==CACHE_NAME ? caches.delete(key) : null)))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  event.respondWith(
    caches.match(event.request).then(response=>{
      return response || fetch(event.request).catch(()=>caches.match('./index.html'));
    })
  );
});
