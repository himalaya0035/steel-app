const CACHE_NAME = 'steel-calc-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/steelProfitCalculator.html',
  '/steelWeightPlateCalculator.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
  );
});
