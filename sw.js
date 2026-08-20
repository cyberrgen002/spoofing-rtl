const CACHE_NAME = 'pwa-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Tahap Install: Menyimpan file ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Tahap Fetch: Mengambil file dari cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
