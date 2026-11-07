const CACHE_VERSION = 'guide-v39';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/examen.css',
  './js/app.js',
  './js/examen.js',
  './js/partage.js',
  './icons/icon.svg',
  './icons/icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/qr-guide.png',

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
  './data/3e/exercices/exercices-geographie.json',

  './data/3e/sujets/sujets-mathematiques-A.json',
  './data/3e/sujets/sujets-mathematiques-B.json',
  './data/3e/sujets/sujets-sciences-physiques-A.json',
  './data/3e/sujets/sujets-sciences-physiques-B.json',
  './data/3e/sujets/sujets-sciences-physiques-C.json',
  './data/3e/sujets/sujets-svt-A.json',
  './data/3e/sujets/sujets-svt-B.json',
  './data/3e/sujets/sujets-svt-C.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache =>
        Promise.all(
          APP_SHELL.map(url =>
            cache.add(new Request(url, { cache: 'reload' })).catch(() => {})
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(noms =>
        Promise.all(
          noms
            .filter(nom => nom !== CACHE_VERSION)
            .map(nom => caches.delete(nom))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(enCache => {
      if (enCache) return enCache;
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
