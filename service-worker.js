// ===== GUIDE - Nettoyage du cache =====
// Ce fichier supprime l'ancien systeme hors-ligne qui melangeait les versions.
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(noms) {
      return Promise.all(noms.map(function(nom) {
        return caches.delete(nom);
      }));
    }).then(function() {
      return self.registration.unregister();
    }).then(function() {
      return self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          try { client.navigate(client.url); } catch (err) {}
        });
      });
    })
  );
});
