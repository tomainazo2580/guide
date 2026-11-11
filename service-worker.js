// ===== GUIDE - Service Worker minimal =====
var CACHE = 'guide-v3';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'css/style.css',
        'js/data.js',
        'js/app.js',
        'data/6e/mathematiques.js'
      ]);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(noms) {
      return Promise.all(
        noms.map(function(nom) {
          if (nom !== CACHE) return caches.delete(nom);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(rep) {
      return rep || fetch(e.request);
    })
  );
});
