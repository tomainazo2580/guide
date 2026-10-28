const CACHE_VERSION = 'guide-v9';
const CACHE_NAME = 'guide-cache-' + CACHE_VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './icons/icon.svg',
  './icons/icon.png',
  './outil-codes.html',
  './data/3e/mathematiques.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((noms) => {
      return Promise.all(
        noms.filter((nom) => nom !== CACHE_NAME).map((nom) => caches.delete(nom))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((reponseCache) => {
      if (reponseCache) return reponseCache;
      return fetch(event.request).then((reponseReseau) => {
        return caches.open(CACHE_NAME).then((cache) => {
          if (event.request.method === 'GET' && reponseReseau.ok) {
            cache.put(event.request, reponseReseau.clone());
          }
          return reponseReseau;
        });
      }).catch(() => reponseCache);
    })
  );
});
