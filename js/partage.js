// ============================================
// GUIDE — partage.js (« Partager Guide » : ligne dans Réglages + fenêtre)
// Indépendant de app.js.
// ============================================
(function () {
  'use strict';
  const LIEN = 'https://tomainazo2580.github.io/guide/';
  const LIEN_TSIKY = 'https://tomainazo2580.github.io/tsiky';
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

  function fermerFenetre() {
    const f = document.getElementById('fenetre-partage');
    if (f) f.parentNode.removeChild(f);
  }

  function ouvrirFenetre() {
    if (document.getElementById('fenetre-partage')) return;
    const styleBouton = 'display:block;width:100%;box-sizing:border-box;margin-bottom:8px;padding:14px;border:none;border-radius:10px;background:#e8eef7;color:#1e3a5f;font-size:1rem;font-weight:600;cursor:pointer;';
    const fond = document.createElement('div');
    fond.id = 'fenetre-partage';
    fond.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:5000;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';
    fond.innerHTML = `
      <div style="background:#ffffff;color:#1e3a5f;border-radius:16px;width:100%;max-width:420px;max-height:90vh;overflow-y:auto;padding:20px;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <h3 style="margin:0;font-size:1.2rem;color:#1e3a5f;">Partager Guide</h3>
          <button id="btn-fermer-partage" aria-label="Fermer" style="border:none;background:transparent;font-size:1.5rem;color:#1e3a5f;cursor:pointer;padding:4px 8px;">✕</button>
        </div>
        <p style="margin:0 0 8px;color:#4a5a70;line-height:1.4;">Fais scanner ce code à un ami, ou envoie-lui le lien.</p>
        <img src="./icons/qr-guide.png" alt="QR code de Guide" style="display:block;margin:12px auto;width:100%;max-width:240px;height:auto;background:#ffffff;border-radius:12px;">
        <button id="btn-copier-lien" style="${styleBouton}">📋 Copier le lien</button>
        <button id="btn-partager-autres" style="${styleBouton}">📤 Autres applis</button>
        <p style="margin:12px 0 8px;color:#4a5a70;line-height:1.4;">Tu peux aussi l'envoyer par Tsiky (<a href="${LIEN_TSIKY}" target="_blank" rel="noopener" style="color:#1e6bb8;word-break:break-all;">${LIEN_TSIKY}</a>), WhatsApp ou SMS.</p>
        <p style="margin:0 0 14px;color:#4a5a70;line-height:1.4;">Chaque ami reçoit son propre code de déblocage après paiement : le tien ne fonctionne que sur ton téléphone.</p>
        <button id="btn-fermer-partage-bas" style="${styleBouton}margin-bottom:0;background:#1e3a5f;color:#ffffff;">Fermer</button>
      </div>
    `;
    document.body.appendChild(fond);
    fond.addEventListener('click', function (e) {
      if (e.target === fond) fermerFenetre();
    });
    document.getElementById('btn-fermer-partage').addEventListener('click', fermerFenetre);
    document.getElementById('btn-fermer-partage-bas').addEventListener('click', fermerFenetre);
    document.getElementById('btn-copier-lien').addEventListener('click', function () {
      copierLien(this);
    });
    const btnAutres = document.getElementById('btn-partager-autres');
    if (navigator.share) {
      btnAutres.addEventListener('click', partagerAutres);
    } else {
      btnAutres.style.display = 'none';
    }
  }

  function init() {
    const vue = document.getElementById('view-parametres');
    if (!vue) return;
    if (document.getElementById('bloc-partage')) return;
    const bloc = document.createElement('div');
    bloc.className = 'bloc-parametre';
    bloc.id = 'bloc-partage';
    bloc.innerHTML = `
      <button id="btn-ouvrir-partage" class="btn-secondaire" style="display:flex;align-items:center;justify-content:space-between;text-align:left;">
        <span>📤 Partager Guide</span><span>›</span>
      </button>
    `;
    vue.appendChild(bloc);
    document.getElementById('btn-ouvrir-partage').addEventListener('click', ouvrirFenetre);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
