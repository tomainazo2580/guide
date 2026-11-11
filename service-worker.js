var CACHE = 'guide-v2.0';

var FICHIERS = [
  './',
  'index.html',
  'manifest.json',
  'css/style.css',
  'js/cles.js',
  'js/data.js',
  'js/app.js',
  'js/examen.js',
  'data/6e/mathematiques.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) { return cache.addAll(FICHIERS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(cles) {
      return Promise.all(cles.map(function(c) {
        if (c !== CACHE) return caches.delete(c);
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(rep) {
      return rep || fetch(e.request).then(function(reponse) {
        var copie = reponse.clone();
        caches.open(CACHE).then(function(cache) { cache.put(e.request, copie); });
        return reponse;
      });
    })
  );
});
