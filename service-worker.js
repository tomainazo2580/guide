const CACHE_VERSION = 'guide-v30';
const CACHE_NAME = CACHE_VERSION;
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/examen.css',
  './js/app.js',
  './js/examen.js',
  './icons/icon.svg',
  './icons/icon.png',
  './data/3e/mathematiques/composante-1.json',
  './data/3e/mathematiques/composante-2.json',
  './data/3e/mathematiques/composante-3.json',
  './data/3e/mathematiques/composante-4.json',
  './data/3e/mathematiques/composante-5.json',
  './data/3e/francais/composante-1.json',
  './data/3e/francais/composante-2.json',
  './data/3e/francais/composante-3.json',
  './data/3e/francais/composante-4.json',
  './data/3e/francais/composante-5.json',
  './data/3e/francais/composante-6.json',
  './data/3e/francais/composante-7.json',
  './data/3e/anglais/composante-1.json',
  './data/3e/anglais/composante-2.json',
  './data/3e/anglais/composante-3.json',
  './data/3e/anglais/composante-4.json',
  './data/3e/anglais/composante-5.json',
  './data/3e/anglais/composante-6.json',
  './data/3e/anglais/composante-7.json',
  './data/3e/anglais/composante-8.json',
  './data/3e/svt/composante-1.json',
  './data/3e/svt/composante-2.json',
  './data/3e/svt/composante-3.json',
  './data/3e/svt/composante-4.json',
  './data/3e/svt/composante-5.json',
  './data/3e/sciences-physiques/composante-1.json',
  './data/3e/sciences-physiques/composante-2.json',
  './data/3e/sciences-physiques/composante-3.json',
  './data/3e/sciences-physiques/composante-4.json',
  './data/3e/sciences-physiques/composante-5.json',
  './data/3e/histoire/composante-1.json',
  './data/3e/histoire/composante-2.json',
  './data/3e/histoire/composante-3.json',
  './data/3e/histoire/composante-4.json',
  './data/3e/histoire/composante-5.json',
  './data/3e/histoire/composante-6.json',
  './data/3e/histoire/composante-7.json',
  './data/3e/histoire/composante-8.json',
  './data/3e/histoire/composante-9.json',
  './data/3e/histoire/composante-10.json',
  './data/3e/geographie/composante-1.json',
  './data/3e/geographie/composante-2.json',
  './data/3e/geographie/composante-3.json',
  './data/3e/geographie/composante-4.json',
  './data/3e/geographie/composante-5.json',
  './data/3e/geographie/composante-6.json',
  './data/3e/geographie/composante-7.json',
  './data/3e/geographie/composante-8.json',
  './data/3e/geographie/composante-9.json',
  './data/3e/exercices/exercices-mathematiques.json',
  './data/3e/exercices/exercices-anglais.json',
  './data/3e/exercices/exercices-sciences-physiques.json',
  './data/3e/exercices/exercices-svt.json',
  './data/3e/exercices/exercices-francais.json',
  './data/3e/exercices/exercices-histoire.json',
  './data/3e/exercices/exercices-geographie.json'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        APP_SHELL.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn('Impossible de mettre en cache :', url, err);
          });
        })
      );
    }).then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
