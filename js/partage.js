// ============================================
// GUIDE — partage.js (bloc « Partager Guide » dans Réglages)
// Indépendant de app.js.
// ============================================
(function () {
  'use strict';
  const LIEN = 'https://tomainazo2580.github.io/guide/';
  const TEXTE_PARTAGE = 'Je révise avec Guide, une application de révision pour le BEPC. Les premières leçons sont gratuites.';

  function copierSecours(texte) {
    try {
      const zone = document.createElement('textarea');
      zone.value = texte;
      zone.style.position = 'fixed';
      zone.style.opacity = '0';
      document.body.appendChild(zone);
      zone.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(zone);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function copierLien(bouton) {
    const original = bouton.textContent;
    const fini = (ok) => {
      bouton.textContent = ok ? '✅ Lien copié' : '⚠️ Copie impossible';
      setTimeout(() => { bouton.textContent = original; }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(LIEN)
        .then(() => fini(true))
        .catch(() => fini(copierSecours(LIEN)));
    } else {
      fini(copierSecours(LIEN));
    }
  }

  function partagerAutres() {
    if (!navigator.share) return;
    navigator.share({ title: 'Guide', text: TEXTE_PARTAGE, url: LIEN }).catch(() => {});
  }

  function init() {
    const vue = document.getElementById('view-parametres');
    if (!vue) return;
    if (document.getElementById('bloc-partage')) return;
    const bloc = document.createElement('div');
    bloc.className = 'bloc-parametre';
    bloc.id = 'bloc-partage';
    bloc.innerHTML = `
      <h3>Partager Guide</h3>
      <p class="texte-parametre">Fais scanner ce code à un ami, ou envoie-lui le lien (par Tsiky, WhatsApp, SMS...).</p>
      <img src="./icons/qr-guide.png" alt="QR code de Guide" style="display:block;margin:12px auto;width:100%;max-width:240px;height:auto;background:#ffffff;border-radius:12px;">
      <button id="btn-copier-lien" class="btn-secondaire" style="margin-bottom:8px;">📋 Copier le lien</button>
      <button id="btn-partager-autres" class="btn-secondaire">📤 Autres applis</button>
      <p class="texte-parametre" style="margin-top:12px;">Chaque ami reçoit son propre code de déblocage après paiement : le tien ne fonctionne que sur ton téléphone.</p>
    `;
    vue.appendChild(bloc);
    document.getElementById('btn-copier-lien').addEventListener('click', function () {
      copierLien(this);
    });
    const btnAutres = document.getElementById('btn-partager-autres');
    if (navigator.share) {
      btnAutres.addEventListener('click', partagerAutres);
    } else {
      btnAutres.hidden = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
