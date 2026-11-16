// ===== GUIDE - Paywall et filtre des examens =====
(function () {
  var ancienAfficherChapitres = afficherChapitres;
  var ancienMenuChapitre = afficherMenuChapitre;
  var ancienneLecon = afficherLecon;
  var anciensExercices = afficherExercices;
  var anciennesMatieresExamen = exaMatieresDispos;
  var ancienneIntroExamen = exaIntro;
  var ancienneConfirmationExamen = exaConfirmation;
  var ancienLancementExamen = exaLancer;
  // En mode Examen, garder seulement la classe choisie à l'accueil.
  exaMatieresDispos = function () {
    var toutes = anciennesMatieresExamen();
    var liste = [];
    for (var i = 0; i < toutes.length; i++) {
      if (toutes[i].classeId === classeAccueil) {
        liste.push(toutes[i]);
      }
    }
    return liste;
  };
  // Écran de paiement simplifié.
  afficherPaiement = function (classeId, matiereId) {
    if (verrouExamen()) {
      afficherVerrouillage();
      return;
    }
    majBarreBas(false);
    var id = obtenirIdAppareil();
    var classe = nomClasse(classeId);
    var matiere = nomMatiere(classeId, matiereId);
    var prix = PRIX_MATIERE[classeId];
    var texteSms =
      'Bonjour, je souhaite débloquer Guide.\n' +
      'ID : ' + id + '\n' +
      'Classe : ' + classe + '\n' +
      'Matière : ' + matiere + '\n' +
      'Référence du paiement : ';
    var html = '';
    html += '<button class="retour" onclick="afficherChapitres(\'' +
      classeId + '\',\'' + matiereId + '\')">← Retour</button>';
    html += '<h2 class="titre-page">🔒 ' + matiere +
      ' — ' + classe + '</h2>';
    html += '<div class="bloc bloc-definition">';
    html += '<div class="bloc-texte">';
    html += '<strong>' + prix + ' Ar</strong> — accès permanent<br><br>';
    html += 'Tiana Stephan<br>';
    html += '034 39 949 07<br>';
    html += '033 16 443 49<br>';
    html += '032 24 159 98<br><br>';
    html += 'Ton ID : <strong>' + id + '</strong>';
    html += '</div></div>';
    html += '<div class="bloc bloc-methode">';
    html += '<div class="bloc-texte">';
    html += 'Envoie ton ID, ta classe, ta matière et la référence ';
    html += 'du paiement :<br><br>';
    html += '💬 <a href="https://tomainazo2580.github.io/tsiky/" ';
    html += 'target="_blank" rel="noopener">Tsiky</a> ';
    html += '(recherche : 034 39 949 07)<br><br>';
    html += '📩 <a href="sms:0343994907?body=' +
      encodeURIComponent(texteSms) + '">SMS au 034 39 949 07</a>';
    html += '</div></div>';
    html += '<div class="bloc bloc-definition">';
    html += '<div class="bloc-texte">';
    html += '<label for="code-deblocage"><strong>Code reçu :</strong></label>';
    html += '<input id="code-deblocage" type="text" inputmode="numeric" ';
    html += 'autocomplete="off" placeholder="123-456" ';
    html += 'style="padding:12px; font-size:18px; width:100%; ';
    html += 'box-sizing:border-box; margin-top:8px">';
    html += '<p id="message-deblocage"></p>';
    html += '<button class="btn-principal" onclick="validerCodePaiement(\'' +
      classeId + '\',\'' + matiereId + '\')">Débloquer</button>';
    html += '</div></div>';
    afficher(html);
  };
  function bloquerChapitre(classeId, matiereId, index) {
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
  // Affiche un cadenas dans la liste des chapitres.
  afficherChapitres = function (classeId, matiereId) {
    ancienAfficherChapitres(classeId, matiereId);
    if (verrouExamen()) return;
    var cartes = ecran.querySelectorAll('.liste .carte');
    for (var i = 0; i < cartes.length; i++) {
      if (chapitreVerrouille(classeId, matiereId, i)) {
        var fleche = cartes[i].querySelector('.carte-fleche');
        if (fleche) fleche.textContent = '🔒';
      }
    }
  };
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
  // Affiche un cadenas à côté des examens verrouillés.
  exaIntro = function () {
    ancienneIntroExamen();
    var matieres = exaMatieresDispos();
    var cartes = ecran.querySelectorAll('.carte');
    for (var i = 0; i < matieres.length && i < cartes.length; i++) {
      if (!estPremium(matieres[i].classeId, matieres[i].id)) {
        var fleche = cartes[i].querySelector('.carte-fleche');
        if (fleche) fleche.textContent = '🔒';
      }
    }
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
