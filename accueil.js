// Retire la carte de partage de l'accueil.
// La fonction de partage reste disponible dans les réglages.

(function () {
  var ancienAccueil = afficherAccueil;

  function retirerCartePartage() {
    var carte = document.querySelector('.acc-partager');
    if (carte) carte.remove();
  }

  afficherAccueil = function () {
    ancienAccueil();
    retirerCartePartage();
  };

  // Retire aussi la carte déjà affichée au démarrage.
  retirerCartePartage();
})();
