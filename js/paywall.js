// ===== GUIDE - Blocage des chapitres et examens =====

(function () {
  // Conserve les fonctions existantes de Guide.
  var ancienMenuChapitre = afficherMenuChapitre;
  var ancienneLecon = afficherLecon;
  var anciensExercices = afficherExercices;
  var ancienneConfirmationExamen = exaConfirmation;
  var ancienLancementExamen = exaLancer;

  function bloquerChapitre(classeId, matiereId, index) {
    // Priorité à une épreuve déjà en cours.
    if (verrouExamen()) {
      afficherVerrouillage();
      return true;
    }

    if (chapitreVerrouille(classeId, matiereId, index)) {
      afficherPaiement(classeId, matiereId);
      return true;
    }

    return false;
  }

  afficherMenuChapitre = function (classeId, matiereId, index) {
    if (bloquerChapitre(classeId, matiereId, index)) return;
    ancienMenuChapitre(classeId, matiereId, index);
  };

  afficherLecon = function (
    classeId, matiereId, indexChapitre, indexLecon
  ) {
    if (bloquerChapitre(classeId, matiereId, indexChapitre)) return;
    ancienneLecon(classeId, matiereId, indexChapitre, indexLecon);
  };

  afficherExercices = function (classeId, matiereId, index) {
    if (bloquerChapitre(classeId, matiereId, index)) return;
    anciensExercices(classeId, matiereId, index);
  };

  exaConfirmation = function (classeId, matiereId) {
    if (!estPremium(classeId, matiereId)) {
      afficherPaiement(classeId, matiereId);
      return;
    }

    ancienneConfirmationExamen(classeId, matiereId);
  };

  exaLancer = function (classeId, matiereId) {
    if (!estPremium(classeId, matiereId)) {
      afficherPaiement(classeId, matiereId);
      return;
    }

    ancienLancementExamen(classeId, matiereId);
  };
})();
