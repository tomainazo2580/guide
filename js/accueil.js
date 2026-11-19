// ===== GUIDE — Accueil et partage =====

(function () {
  var ancienAccueil = afficherAccueil;
  var anciensReglages = afficherReglages;

  // Styles propres à l'accueil et à la fenêtre de partage.
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

    .guide-acc-ligne .acc-partager {
      flex: 1 1 0;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 10px 14px;
      border: 0;
      border-radius: 12px;
      background: #2b4f7c;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    .guide-acc-ligne .acc-partager:focus-visible,
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

      .guide-acc-ligne .acc-classes {
        flex: 1 1 100%;
      }

      .guide-acc-ligne .acc-partager {
        flex: 1 1 100%;
      }
    }
  `;
  document.head.appendChild(style);

  // Place le bouton à droite des classes, en bas de la colonne.
  function organiserAccueil() {
    var fond = document.querySelector('.accueil-fond');
    if (!fond) return;

    var classes = fond.querySelector('.acc-classes');
    var bouton = fond.querySelector('.acc-partager');
    if (!classes || !bouton) return;

    var ligne = document.createElement('div');
    ligne.className = 'guide-acc-ligne';

    classes.parentNode.insertBefore(ligne, classes);
    ligne.appendChild(classes);
    ligne.appendChild(bouton);

    bouton.textContent = 'Partager Guide';

    // Même hauteur que la bannière lorsqu'elle est présente.
    // Une hauteur de secours est prévue si elle est masquée.
    var banniere = document.getElementById('banniere-install');
    var hauteur = banniere ? banniere.offsetHeight : 0;
    bouton.style.minHeight = (hauteur || 56) + 'px';
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

  // Remplace la page de partage par une fenêtre sur l'accueil.
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
        // Une annulation volontaire ne déclenche pas la copie.
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

  // L'accueil a déjà été affiché par app.js au démarrage :
  // on le redessine pour appliquer la nouvelle disposition.
  afficherAccueil();
})();
