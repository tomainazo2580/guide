// ==========================================
// VERSION DU CACHE
// ⚠️ IMPORTANT : change ce numéro à CHAQUE
// mise à jour de contenu ou de code, sinon
// les étudiants garderont l'ancienne version
// ==========================================
const CACHE_VERSION = 'guide-v1';

// Fichiers essentiels de l'application (le "squelette")
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './icons/icon.svg'
];

// ==========================================
// INSTALLATION : on met en cache le squelette
// ==========================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );
  // Force le nouveau service worker à s'activer
  // dès qu'il est installé (pas d'attente)
  self.skipWaiting();
});

// ==========================================
// ACTIVATION : on supprime les anciens caches
// ==========================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_VERSION)
          .map((name) => caches.delete(name))
      );
    })
  );
  // Prend le contrôle immédiat de toutes les pages ouvertes
  self.clients.claim();
});

// ==========================================
// INTERCEPTION DES REQUETES (stratégie réseau)
// ==========================================
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // On ne gère que les requêtes GET (pas les envois de données)
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Si trouvé dans le cache, on le sert immédiatement (rapide + offline)
      if (cachedResponse) {
        return cachedResponse;
      }

      // Sinon on essaie le réseau, et on met en cache pour la prochaine fois
      return fetch(request)
        .then((networkResponse) => {
          return caches.open(CACHE_VERSION).then((cache) => {
            // On ne cache que les réponses valides
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          // Pas de réseau ET pas en cache :
          // on pourrait afficher une page "hors ligne" ici plus tard
          return caches.match('./index.html');
        });
    })
  );
});
