// ===== GUIDE - Service Worker =====
// v2.3 - force le rechargement du contenu
var CACHE = 'guide-v2.3';

var FICHIERS = [
  './',
  'index.html',
  'manifest.json',
  'css/style.css',
  'js/cles.js',
  'js/data.js',
  'js/app.js',
  'js/examen.js',
  'data/6e/mathematiques.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return Promise.all(
        FICHIERS.map(function(f) {
          return cache.add(f).catch(function() { return null; });
        })
      );
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
          if (nom !== CACHE) {
            return caches.delete(nom);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(rep) {
      if (rep) return rep;
      return fetch(e.request).then(function(reponse) {
        var copie = reponse.clone();
        caches.open(CACHE).then(function(cache) {
          cache.put(e.request, copie);
        });
        return reponse;
      }).catch(function() {
        return caches.match('index.html');
      });
    })
  );
});
