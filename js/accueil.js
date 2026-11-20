// ===== GUIDE — Accueil, reprendre et partage =====

(function () {
  var ancienAccueil = afficherAccueil;
  var anciensReglages = afficherReglages;

  // Ces fonctions comprennent déjà les contrôles du paywall.
  var ancienMenuChapitre = afficherMenuChapitre;
  var ancienneLecon = afficherLecon;
  var anciensExercices = afficherExercices;

  var CLE_REPRENDRE = 'guide-dernier-chapitre';

  // ---------- Vérification du souvenir ----------

  function trouverMatiere(classeId, matiereId) {
    var classeDisponible = false;

    for (var i = 0; i < CLASSES.length; i++) {
      if (CLASSES[i].id === classeId && CLASSES[i].dispo) {
        classeDisponible = true;
        break;
      }
    }

    if (!classeDisponible) return null;

    var matieres = MATIERES[classeId] || [];

    for (var j = 0; j < matieres.length; j++) {
      if (matieres[j].id === matiereId && matieres[j].dispo) {
        return matieres[j];
      }
    }

    return null;
  }

  function entierPositifOuZero(valeur) {
    return typeof valeur === 'number' &&
      isFinite(valeur) &&
      Math.floor(valeur) === valeur &&
      valeur >= 0;
  }

  function souvenirValide(souvenir) {
    if (!souvenir || typeof souvenir !== 'object') return false;

    if (!trouverMatiere(souvenir.classeId, souvenir.matiereId)) {
      return false;
    }

    if (!entierPositifOuZero(souvenir.index)) return false;

    var chapitres = obtenirChapitres(
      souvenir.classeId,
      souvenir.matiereId
    );

    var chapitre = chapitres[souvenir.index];

    if (!chapitre || !souvenir.titre) return false;

    // Évite de reprendre un autre chapitre si la liste a changé.
    if (chapitre.titre !== souvenir.titre) return false;

    // L'ancien souvenir sans type correspond au menu du chapitre.
    var type = souvenir.type || 'chapitre';

    if (type === 'lecon') {
      if (!entierPositifOuZero(souvenir.indexLecon)) return false;
      if (!chapitre.lecons || !chapitre.lecons[souvenir.indexLecon]) {
        return false;
      }

      if (
        souvenir.titreLecon &&
        chapitre.lecons[souvenir.indexLecon].titre !== souvenir.titreLecon
      ) {
        return false;
      }
    } else if (type === 'exercices') {
      if (!Array.isArray(chapitre.exercices)) return false;
    } else if (type !== 'chapitre') {
      return false;
    }

    return true;
  }

  function lireSouvenir() {
    try {
      var brut = localStorage.getItem(CLE_REPRENDRE);
      if (!brut) return null;

      var souvenir = JSON.parse(brut);
      return souvenirValide(souvenir) ? souvenir : null;
    } catch (erreur) {
      return null;
    }
  }

  function memoriser(classeId, matiereId, index, type, indexLecon) {
    if (verrouExamen()) return;

    var chapitres = obtenirChapitres(classeId, matiereId);
    var chapitre = chapitres[index];

    if (!chapitre) return;

    var souvenir = {
      classeId: classeId,
      matiereId: matiereId,
      index: index,
      titre: chapitre.titre,
      type: type
    };

    if (type === 'lecon') {
      souvenir.indexLecon = indexLecon;

      if (chapitre.lecons && chapitre.lecons[indexLecon]) {
        souvenir.titreLecon = chapitre.lecons[indexLecon].titre;
      }
    }

    if (!souvenirValide(souvenir)) return;

    // Une tentative d'accès verrouillée n'est pas mémorisée.
    if (chapitreVerrouille(classeId, matiereId, index)) return;

    try {
      localStorage.setItem(CLE_REPRENDRE, JSON.stringify(souvenir));
    } catch (erreur) {
      // Si le stockage est indisponible, Guide continue de fonctionner.
    }
  }

  // ---------- Mémorisation des pages consultées ----------

  afficherMenuChapitre = function (classeId, matiereId, index) {
    ancienMenuChapitre(classeId, matiereId, index);
    memoriser(classeId, matiereId, index, 'chapitre');
  };

  afficherLecon = function (
    classeId, matiereId, indexChapitre, indexLecon
  ) {
    ancienneLecon(classeId, matiereId, indexChapitre, indexLecon);

    memoriser(
      classeId,
      matiereId,
      indexChapitre,
      'lecon',
      indexLecon
    );
  };

  afficherExercices = function (classeId, matiereId, index) {
    anciensExercices(classeId, matiereId, index);
    memoriser(classeId, matiereId, index, 'exercices');
  };

  function reprendre() {
    if (verrouExamen()) {
      afficherVerrouillage();
      return;
    }

    var souvenir = lireSouvenir();

    if (!souvenir) {
      alert('Aucune page à reprendre pour le moment.');
      afficherAccueil();
      return;
    }

    // On utilise toujours les fonctions habituelles :
    // elles vérifient le premium et le verrouillage de l'examen.
    if (souvenir.type === 'lecon') {
      afficherLecon(
        souvenir.classeId,
        souvenir.matiereId,
        souvenir.index,
        souvenir.indexLecon
      );
    } else if (souvenir.type === 'exercices') {
      afficherExercices(
        souvenir.classeId,
        souvenir.matiereId,
        souvenir.index
      );
    } else {
      afficherMenuChapitre(
        souvenir.classeId,
        souvenir.matiereId,
        souvenir.index
      );
    }
  }

  // ---------- Style ----------

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
      flex: none;
      width: 100%;
      height: 60px;
      min-height: 60px;
      margin: 0;
      padding: 6px 10px;
      border: 0;
      border-radius: 12px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
      cursor: pointer;
      box-shadow: 0 6px 14px rgba(30, 80, 110, 0.23);
    }

    .guide-acc-ligne .acc-partager {
      background: linear-gradient(135deg, #168acb, #2878c7);
    }

    .guide-acc-reprendre {
      background: linear-gradient(135deg, #13a990, #078a83);
    }

    .guide-acc-reprendre:disabled {
      background: #83aaa8;
      cursor: default;
      box-shadow: 0 4px 10px rgba(30, 80, 110, 0.14);
    }

    .guide-reprendre-detail {
      display: block;
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 500;
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

    var boutonReprendre = document.createElement('button');
    boutonReprendre.type = 'button';
    boutonReprendre.className = 'guide-acc-reprendre';

    var titre = document.createElement('span');
    titre.textContent = 'Reprendre';
    boutonReprendre.appendChild(titre);

    var detail = document.createElement('span');
    detail.className = 'guide-reprendre-detail';

    var souvenir = lireSouvenir();

    if (souvenir) {
      var matiere = trouverMatiere(
        souvenir.classeId,
        souvenir.matiereId
      );

      var page = 'Chap. ' + (souvenir.index + 1);

      if (souvenir.type === 'exercices') {
        page += ' · Ex.';
      } else if (souvenir.type === 'lecon') {
        page += ' · Leçon ' + (souvenir.indexLecon + 1);
      }

      detail.textContent =
        nomCourtClasse(souvenir.classeId) + ' · ' +
        (matiere.court || matiere.nom) + ' · ' +
        page;

      boutonReprendre.onclick = reprendre;
    } else {
      detail.textContent = 'Aucune page consultée';
      boutonReprendre.disabled = true;
    }

    boutonReprendre.appendChild(detail);

    partager.textContent = 'Partager Guide';

    actions.appendChild(boutonReprendre);
    actions.appendChild(partager);

    classes.parentNode.insertBefore(ligne, classes);
    ligne.appendChild(classes);
    ligne.appendChild(actions);
  }

  afficherAccueil = function () {
    ancienAccueil();
    organiserAccueil();
  };

  // Retire uniquement la ligne de partage des réglages.
  afficherReglages = function () {
    anciensReglages();

    var lignes = ecran.querySelectorAll('.reglage-ligne');

    for (var i = 0; i < lignes.length; i++) {
      var bouton = lignes[i].querySelector(
        'button[onclick="afficherPartage()"]'
      );

      if (bouton) lignes[i].remove();
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
