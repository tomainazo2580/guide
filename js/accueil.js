// ===== GUIDE — Accueil, reprendre et partage =====

(function () {
  var ancienAccueil = afficherAccueil;
  var anciensReglages = afficherReglages;

  // Ces fonctions incluent déjà les contrôles du paywall.
  var ancienMenuChapitre = afficherMenuChapitre;
  var ancienneLecon = afficherLecon;
  var anciensExercices = afficherExercices;

  var CLE_REPRENDRE = 'guide-dernier-chapitre';

  // ---------- Dernier chapitre consulté ----------

  function chapitreValide(classeId, matiereId, index, titre) {
    var classeTrouvee = false;
    var matiereTrouvee = false;

    for (var i = 0; i < CLASSES.length; i++) {
      if (CLASSES[i].id === classeId && CLASSES[i].dispo) {
        classeTrouvee = true;
        break;
      }
    }

    var matieres = MATIERES[classeId] || [];

    for (var j = 0; j < matieres.length; j++) {
      if (matieres[j].id === matiereId && matieres[j].dispo) {
        matiereTrouvee = true;
        break;
      }
    }

    if (!classeTrouvee || !matiereTrouvee) return false;
    if (!Number.isInteger(index) || index < 0) return false;

    var chapitres = obtenirChapitres(classeId, matiereId);
    var chapitre = chapitres[index];

    if (!chapitre) return false;

    // Si les chapitres ont été réorganisés, ne pas ouvrir
    // un autre chapitre à la place de celui enregistré.
    if (titre && chapitre.titre !== titre) return false;

    return true;
  }

  function lireDernierChapitre() {
    try {
      var brut = localStorage.getItem(CLE_REPRENDRE);
      if (!brut) return null;

      var dernier = JSON.parse(brut);

      if (!dernier || !chapitreValide(
        dernier.classeId,
        dernier.matiereId,
        dernier.index,
        dernier.titre
      )) {
        return null;
      }

      return dernier;
    } catch (erreur) {
      return null;
    }
  }

  function memoriserChapitre(classeId, matiereId, index) {
    if (verrouExamen()) return;

    if (!chapitreValide(classeId, matiereId, index)) return;

    // Ne mémorise pas une tentative d'accès à un chapitre verrouillé.
    if (chapitreVerrouille(classeId, matiereId, index)) return;

    var chapitre = obtenirChapitres(classeId, matiereId)[index];

    try {
      localStorage.setItem(CLE_REPRENDRE, JSON.stringify({
        classeId: classeId,
        matiereId: matiereId,
        index: index,
        titre: chapitre.titre
      }));
    } catch (erreur) {
      // Si le stockage est indisponible, la navigation continue.
    }
  }

  afficherMenuChapitre = function (classeId, matiereId, index) {
    ancienMenuChapitre(classeId, matiereId, index);
    memoriserChapitre(classeId, matiereId, index);
  };

  afficherLecon = function (
    classeId, matiereId, indexChapitre, indexLecon
  ) {
    ancienneLecon(classeId, matiereId, indexChapitre, indexLecon);
    memoriserChapitre(classeId, matiereId, indexChapitre);
  };

  afficherExercices = function (classeId, matiereId, index) {
    anciensExercices(classeId, matiereId, index);
    memoriserChapitre(classeId, matiereId, index);
  };

  function reprendreChapitre() {
    if (verrouExamen()) {
      afficherVerrouillage();
      return;
    }

    var dernier = lireDernierChapitre();

    if (!dernier) {
      alert('Aucun chapitre à reprendre pour le moment.');
      afficherAccueil();
      return;
    }

    // Passe par la fonction habituelle : le paywall est vérifié.
    afficherMenuChapitre(
      dernier.classeId,
      dernier.matiereId,
      dernier.index
    );
  }

  // ---------- Styles ----------

  var style = document.createElement('style');

  style.textContent = `
    .guide-acc-ligne {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      margin-bottom: 16px;
    }

    .guide-acc-ligne .acc-classes {
      flex: 0 0 33%;
      width: auto;
      margin-bottom: 0;
    }

    .guide-acc-actions {
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .guide-acc-ligne .acc-partager,
    .guide-acc-reprendre {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      margin: 0;
      padding: 10px 14px;
      border: 0;
      border-radius: 12px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.25;
      cursor: pointer;
      box-shadow: 0 7px 16px rgba(15, 35, 60, 0.22);
    }

    .guide-acc-ligne .acc-partager {
      flex: none;
      background: #2b4f7c;
    }

    .guide-acc-reprendre {
      background: #16816f;
    }

    .guide-acc-reprendre:disabled {
      background: #718b89;
      cursor: default;
      box-shadow: 0 4px 10px rgba(15, 35, 60, 0.14);
    }

    .guide-reprendre-detail {
      display: block;
      margin-top: 4px;
      font-size: 12px;
      font-weight: 500;
      overflow-wrap: anywhere;
    }

    .guide-acc-ligne .acc-partager:focus-visible,
    .guide-acc-reprendre:focus-visible,
    .guide-partage-fenetre button:focus-visible {
      outline: 3px solid #f59e0b;
      outline-offset: 3px;
    }

    .guide-partage-fond {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      background: rgba(15, 23, 42, 0.65);
    }

    .guide-partage-fenetre {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      max-width: 420px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 24px 20px;
      border-radius: 18px;
      background: var(--carte, #fff);
      color: var(--texte, #1e293b);
      text-align: center;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
    }

    .guide-partage-fermer {
      position: absolute;
      top: 10px;
      right: 12px;
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: inherit;
      font-size: 24px;
      cursor: pointer;
    }

    .guide-partage-fenetre h2 {
      margin: 6px 36px 10px;
      font-size: 22px;
    }

    .guide-partage-fenetre p {
      color: var(--texte-doux, #64748b);
      line-height: 1.5;
    }

    .guide-partage-qr {
      display: inline-block;
      padding: 12px;
      border-radius: 12px;
      background: #fff;
    }

    .guide-partage-qr img {
      display: block;
      width: 190px;
      max-width: 100%;
      height: auto;
    }

    .guide-partage-lien {
      margin: 16px 0;
      padding: 10px;
      border: 1px solid var(--bordure, #e2e8f0);
      border-radius: 8px;
      overflow-wrap: anywhere;
      font-size: 14px;
    }

    .guide-partage-boutons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .guide-partage-boutons button {
      flex: 1 1 140px;
      min-height: 46px;
      padding: 10px;
      border: 0;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
    }

    .guide-partage-copier {
      background: #e2e8f0;
      color: #1e293b;
    }

    .guide-partage-envoyer {
      background: #2b4f7c;
      color: #fff;
    }

    @media (max-width: 340px) {
      .guide-acc-ligne {
        flex-wrap: wrap;
      }

      .guide-acc-ligne .acc-classes,
      .guide-acc-actions {
        flex: 1 1 100%;
      }
    }
  `;

  document.head.appendChild(style);

  // ---------- Organisation de l'accueil ----------

  function organiserAccueil() {
    var fond = document.querySelector('.accueil-fond');
    if (!fond) return;

    var classes = fond.querySelector('.acc-classes');
    var partager = fond.querySelector('.acc-partager');

    if (!classes || !partager) return;

    var ligne = document.createElement('div');
    ligne.className = 'guide-acc-ligne';

    var actions = document.createElement('div');
    actions.className = 'guide-acc-actions';

    var reprendre = document.createElement('button');
    reprendre.type = 'button';
    reprendre.className = 'guide-acc-reprendre';

    var dernier = lireDernierChapitre();
    var titre = document.createElement('span');
    titre.textContent = 'Reprendre';
    reprendre.appendChild(titre);

    var detail = document.createElement('span');
    detail.className = 'guide-reprendre-detail';

    if (dernier) {
      detail.textContent =
        nomCourtClasse(dernier.classeId) + ' · ' +
        nomMatiere(dernier.classeId, dernier.matiereId) + ' · ' +
        dernier.titre;

      reprendre.onclick = reprendreChapitre;
    } else {
      detail.textContent = 'Aucun chapitre consulté';
      reprendre.disabled = true;
    }

    reprendre.appendChild(detail);

    partager.textContent = 'Partager Guide';

    actions.appendChild(reprendre);
    actions.appendChild(partager);

    classes.parentNode.insertBefore(ligne, classes);
    ligne.appendChild(classes);
    ligne.appendChild(actions);

    // Même hauteur minimale que la bannière d'installation.
    var banniere = document.getElementById('banniere-install');
    var hauteur = banniere ? banniere.offsetHeight : 0;
    hauteur = hauteur || 56;

    reprendre.style.minHeight = hauteur + 'px';
    partager.style.minHeight = hauteur + 'px';

    // Si le texte fait grandir Reprendre, garder les deux égaux.
    var hauteurCommune = Math.max(
      reprendre.offsetHeight,
      partager.offsetHeight
    );

    reprendre.style.minHeight = hauteurCommune + 'px';
    partager.style.minHeight = hauteurCommune + 'px';
  }

  afficherAccueil = function () {
    ancienAccueil();
    organiserAccueil();
  };

  // Retire uniquement la ligne de partage dans les réglages.
  afficherReglages = function () {
    anciensReglages();

    var lignes = ecran.querySelectorAll('.reglage-ligne');

    for (var i = 0; i < lignes.length; i++) {
      var bouton = lignes[i].querySelector(
        'button[onclick="afficherPartage()"]'
      );

      if (bouton) {
        lignes[i].remove();
      }
    }
  };

  // ---------- Fenêtre de partage ----------

  afficherPartage = function () {
    if (verrouExamen()) {
      afficherVerrouillage();
      return;
    }

    if (document.getElementById('guide-partage-fond')) return;

    var boutonOrigine = document.activeElement;
    var fond = document.createElement('div');

    fond.id = 'guide-partage-fond';
    fond.className = 'guide-partage-fond';

    fond.innerHTML =
      '<div class="guide-partage-fenetre" role="dialog" ' +
      'aria-modal="true" aria-labelledby="guide-partage-titre">' +
        '<button class="guide-partage-fermer" type="button" ' +
          'aria-label="Fermer">×</button>' +
        '<h2 id="guide-partage-titre">Partager Guide</h2>' +
        '<p>Scanne ce QR code ou envoie le lien à un ami.</p>' +
        '<div class="guide-partage-qr">' +
          '<img src="icons/qr-guide.png" alt="QR code vers Guide">' +
        '</div>' +
        '<div class="guide-partage-lien"></div>' +
        '<div class="guide-partage-boutons">' +
          '<button class="guide-partage-copier" type="button">' +
            'Copier le lien' +
          '</button>' +
          '<button class="guide-partage-envoyer" type="button">' +
            'Envoyer le lien' +
          '</button>' +
        '</div>' +
      '</div>';

    fond.querySelector('.guide-partage-lien').textContent = GUIDE_URL;

    var image = fond.querySelector('img');

    image.onerror = function () {
      image.parentNode.textContent =
        'QR code indisponible. Utilise le lien ci-dessous.';
    };

    function fermer() {
      document.removeEventListener('keydown', surTouche);
      fond.remove();

      if (boutonOrigine && typeof boutonOrigine.focus === 'function') {
        boutonOrigine.focus();
      }
    }

    function surTouche(event) {
      if (event.key === 'Escape') fermer();
    }

    fond.querySelector('.guide-partage-fermer').onclick = fermer;

    fond.querySelector('.guide-partage-copier').onclick = function () {
      copierGuide();
    };

    fond.querySelector('.guide-partage-envoyer').onclick = function () {
      if (!navigator.share) {
        copierGuide();
        return;
      }

      navigator.share({
        title: 'Guide',
        text: 'Découvre Guide pour réviser :',
        url: GUIDE_URL
      }).catch(function (erreur) {
        if (!erreur || erreur.name !== 'AbortError') {
          copierGuide();
        }
      });
    };

    fond.addEventListener('click', function (event) {
      if (event.target === fond) fermer();
    });

    document.addEventListener('keydown', surTouche);
    document.body.appendChild(fond);
    fond.querySelector('.guide-partage-fermer').focus();
  };

  // Redessine l'accueil déjà affiché au démarrage.
  afficherAccueil();
})();
