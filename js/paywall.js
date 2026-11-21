// ===== GUIDE — Paywall et filtre des examens =====

(function () {
  // Fonctions existantes conservées pour ajouter les contrôles.
  var ancienAfficherChapitres = afficherChapitres;
  var ancienMenuChapitre = afficherMenuChapitre;
  var ancienneLecon = afficherLecon;
  var anciensExercices = afficherExercices;

  var anciennesMatieresExamen = exaMatieresDispos;
  var ancienneIntroExamen = exaIntro;
  var ancienneConfirmationExamen = exaConfirmation;
  var ancienLancementExamen = exaLancer;

  // En mode Examen, ne proposer que la classe choisie à l'accueil.
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

  // Page de paiement utilisée par Guide.
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

    // Styles réservés à la page de paiement.
    html += '<style>';

    html += '.paiement-page {';
    html += 'max-width: 520px;';
    html += 'margin: 0 auto 20px;';
    html += 'color: var(--texte, #1e293b);';
    html += '}';

    html += '.paiement-entete {';
    html += 'background: linear-gradient(135deg, #1e3a5f, #2b5b8e);';
    html += 'color: #fff;';
    html += 'border-radius: 16px;';
    html += 'padding: 18px;';
    html += 'margin-bottom: 12px;';
    html += 'box-shadow: 0 5px 14px rgba(30,58,95,0.2);';
    html += '}';

    html += '.paiement-etiquette {';
    html += 'font-size: 12px;';
    html += 'font-weight: 700;';
    html += 'letter-spacing: 0.4px;';
    html += 'text-transform: uppercase;';
    html += 'opacity: 0.9;';
    html += '}';

    html += '.paiement-titre {';
    html += 'font-size: 19px;';
    html += 'line-height: 1.3;';
    html += 'margin: 5px 0 10px;';
    html += '}';

    html += '.paiement-prix-ligne {';
    html += 'display: flex;';
    html += 'align-items: baseline;';
    html += 'flex-wrap: wrap;';
    html += 'gap: 5px 10px;';
    html += '}';

    html += '.paiement-prix {';
    html += 'font-size: 25px;';
    html += 'font-weight: 800;';
    html += 'color: #fde68a;';
    html += '}';

    html += '.paiement-duree {';
    html += 'font-size: 13px;';
    html += '}';

    html += '.paiement-avantage {';
    html += 'font-size: 13px;';
    html += 'line-height: 1.4;';
    html += 'margin-top: 5px;';
    html += 'opacity: 0.95;';
    html += '}';

    html += '.paiement-carte {';
    html += 'background: var(--carte, #fff);';
    html += 'border: 1px solid var(--bordure, #e2e8f0);';
    html += 'border-radius: 14px;';
    html += 'padding: 14px;';
    html += 'margin-bottom: 10px;';
    html += '}';

    html += '.paiement-etape {';
    html += 'display: flex;';
    html += 'align-items: center;';
    html += 'gap: 9px;';
    html += 'font-size: 15px;';
    html += 'line-height: 1.3;';
    html += 'font-weight: 700;';
    html += 'margin-bottom: 8px;';
    html += '}';

    html += '.paiement-numero-etape {';
    html += 'display: inline-flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;';
    html += 'width: 26px;';
    html += 'height: 26px;';
    html += 'flex-shrink: 0;';
    html += 'border-radius: 50%;';
    html += 'background: #1e3a5f;';
    html += 'color: #fff;';
    html += 'font-size: 13px;';
    html += '}';

    html += '.paiement-texte {';
    html += 'font-size: 14px;';
    html += 'line-height: 1.45;';
    html += '}';

    html += '.paiement-beneficiaire {';
    html += 'font-size: 14px;';
    html += 'margin-bottom: 6px;';
    html += '}';

    html += '.paiement-numeros {';
    html += 'display: flex;';
    html += 'flex-wrap: wrap;';
    html += 'gap: 6px;';
    html += '}';

    html += '.paiement-numero {';
    html += 'display: inline-block;';
    html += 'background: var(--fond, #f1f5f9);';
    html += 'border: 1px solid var(--bordure, #e2e8f0);';
    html += 'border-radius: 8px;';
    html += 'padding: 5px 8px;';
    html += 'font-size: 13px;';
    html += 'font-weight: 700;';
    html += 'white-space: nowrap;';
    html += '}';

    html += '.paiement-id {';
    html += 'background: var(--fond, #f1f5f9);';
    html += 'border: 1px solid var(--bordure, #e2e8f0);';
    html += 'border-radius: 9px;';
    html += 'padding: 8px 10px;';
    html += 'margin: 8px 0;';
    html += 'font-size: 14px;';
    html += 'overflow-wrap: anywhere;';
    html += '}';

    html += '.paiement-liens {';
    html += 'display: flex;';
    html += 'flex-wrap: wrap;';
    html += 'gap: 8px;';
    html += 'margin-top: 10px;';
    html += '}';

    html += '.paiement-lien {';
    html += 'display: inline-flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;';
    html += 'flex: 1 1 130px;';
    html += 'min-height: 44px;';
    html += 'padding: 8px 10px;';
    html += 'border-radius: 10px;';
    html += 'background: #1e3a5f;';
    html += 'color: #fff;';
    html += 'font-size: 14px;';
    html += 'font-weight: 700;';
    html += 'text-align: center;';
    html += 'text-decoration: none;';
    html += '}';

    html += '.paiement-lien-tsiky {';
    html += 'background: #166534;';
    html += '}';

    html += '.paiement-aide {';
    html += 'font-size: 12px;';
    html += 'line-height: 1.4;';
    html += 'color: var(--texte-doux, #64748b);';
    html += 'margin-top: 7px;';
    html += '}';

    html += '.paiement-label {';
    html += 'display: block;';
    html += 'font-size: 14px;';
    html += 'font-weight: 600;';
    html += 'margin-bottom: 5px;';
    html += '}';

    html += '.paiement-champ {';
    html += 'display: block;';
    html += 'width: 100%;';
    html += 'min-height: 48px;';
    html += 'padding: 10px 12px;';
    html += 'border: 1px solid var(--bordure, #cbd5e1);';
    html += 'border-radius: 9px;';
    html += 'background: var(--fond, #f8fafc);';
    html += 'color: var(--texte, #1e293b);';
    html += 'font-size: 18px;';
    html += '}';

    html += '.paiement-message {';
    html += 'font-size: 14px;';
    html += 'color: #b91c1c;';
    html += '}';

    html += 'body.sombre .paiement-message {';
    html += 'color: #fca5a5;';
    html += '}';

    html += '.paiement-message:not(:empty) {';
    html += 'margin: 8px 0;';
    html += '}';

    html += '.paiement-debloquer {';
    html += 'margin-top: 9px;';
    html += '}';

    html += '.paiement-avertissement {';
    html += 'font-size: 12px;';
    html += 'line-height: 1.45;';
    html += 'color: var(--texte, #1e293b);';
    html += 'background: var(--carte, #fff);';
    html += 'border: 1px solid var(--bordure, #e2e8f0);';
    html += 'border-left: 4px solid #f59e0b;';
    html += 'border-radius: 10px;';
    html += 'padding: 10px 12px;';
    html += '}';

    html += '</style>';

    html += '<button class="retour" onclick="afficherChapitres(\'' +
      classeId + '\',\'' + matiereId + '\')">← Retour</button>';

    html += '<div class="paiement-page">';

    // Présentation de l'accès.
    html += '<div class="paiement-entete">';
    html += '<div class="paiement-etiquette">🔒 Accès premium</div>';
    html += '<h2 class="paiement-titre">' +
      echapperHtml(matiere) + ' — ' + echapperHtml(classe) + '</h2>';
    html += '<div class="paiement-prix-ligne">';
    html += '<span class="paiement-prix">' + prix + ' Ar</span>';
    html += '<span class="paiement-duree">pour 1 an après activation</span>';
    html += '</div>';
    html += '<div class="paiement-avantage">';
    html += 'Chapitres payants et mode Examen de cette matière, ';
    html += 'pour cette classe.';
    html += '</div>';
    html += '</div>';

    // Étape 1 : paiement.
    html += '<div class="paiement-carte">';
    html += '<div class="paiement-etape">';
    html += '<span class="paiement-numero-etape">1</span>';
    html += '<span>Effectue le paiement</span>';
    html += '</div>';

    html += '<div class="paiement-beneficiaire">';
    html += 'Au nom de <strong>Tiana Stephan</strong>';
    html += '</div>';

    html += '<div class="paiement-numeros">';
    html += '<span class="paiement-numero">034 39 949 07</span>';
    html += '<span class="paiement-numero">033 16 443 49</span>';
    html += '<span class="paiement-numero">032 24 159 98</span>';
    html += '</div>';
    html += '</div>';

    // Étape 2 : demande d'activation.
    html += '<div class="paiement-carte">';
    html += '<div class="paiement-etape">';
    html += '<span class="paiement-numero-etape">2</span>';
    html += '<span>Envoie ta demande</span>';
    html += '</div>';

    html += '<div class="paiement-texte">';
    html += 'Envoie ton ID, ta classe, ta matière et ';
    html += 'la référence du paiement.';
    html += '</div>';

    html += '<div class="paiement-id">';
    html += 'Ton ID : <strong>' + echapperHtml(id) + '</strong>';
    html += '</div>';

    html += '<div class="paiement-liens">';

    html += '<a class="paiement-lien" href="sms:0343994907?body=' +
      encodeURIComponent(texteSms) + '">📩 Envoyer un SMS</a>';

    html += '<a class="paiement-lien paiement-lien-tsiky" ';
    html += 'href="https://tomainazo2580.github.io/tsiky/" ';
    html += 'target="_blank" rel="noopener">💬 Ouvrir Tsiky</a>';

    html += '</div>';

    html += '<div class="paiement-aide">';
    html += 'Sur Tsiky, recherche le 034 39 949 07. ';
    html += 'Le SMS contient déjà ton ID, ta classe et ta matière : ';
    html += 'ajoute la référence du paiement avant de l’envoyer.';
    html += '</div>';
    html += '</div>';

    // Étape 3 : activation.
    html += '<div class="paiement-carte">';
    html += '<div class="paiement-etape">';
    html += '<span class="paiement-numero-etape">3</span>';
    html += '<span>Active ton accès</span>';
    html += '</div>';

    html += '<div class="paiement-texte">';
    html += 'Après vérification du paiement, tu recevras un code.';
    html += '</div>';

    html += '<label class="paiement-label" for="code-deblocage" ';
    html += 'style="margin-top:8px">Code reçu</label>';

    html += '<input class="paiement-champ" id="code-deblocage" ';
    html += 'type="text" inputmode="numeric" autocomplete="off" ';
    html += 'placeholder="Ex. 123-456">';

    html += '<p class="paiement-message" id="message-deblocage" ';
    html += 'role="status" aria-live="polite"></p>';

    html += '<button class="btn-principal paiement-debloquer" ';
    html += 'onclick="validerCodePaiement(\'' +
      classeId + '\',\'' + matiereId + '\')">Débloquer</button>';

    html += '</div>';

    // Avertissement conservé et toujours visible.
    html += '<div class="paiement-avertissement">';
    html += '⚠️ <strong>Important :</strong> ton accès est enregistré ';
    html += 'sur cet appareil. Si tu effaces les données du navigateur ';
    html += 'ou de l’application, tu peux perdre ton accès. ';
    html += 'Contacte-nous si cela arrive.';
    html += '</div>';

    html += '</div>';

    afficher(html);
  };

  // Vérifie les verrouillages avant d'ouvrir un chapitre.
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

  // Affiche un cadenas pour les chapitres verrouillés.
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
