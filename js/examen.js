// ============================================
// GUIDE — examen.js (Mode Examen)
// Se branche sur app.js sans le modifier.
// ============================================
(function () {
  'use strict';
  const CLE_SESSION = 'guide-examen-session';
  const CLE_HISTO = 'guide-examen-historique';
  const CLE_ESSAIS = 'guide-examen-essais';
  const DUREE_MS = 2 * 60 * 60 * 1000; // 2 h
  const NIVEAUX_SUJET = ['moyen', 'difficile', 'difficile', 'expert', 'expert'];
  const LIBELLES_NIVEAU = {
    facile: '🟢 Facile',
    moyen: '🟡 Moyen',
    difficile: '🟠 Difficile',
    expert: '🔴 Expert (BEPC)'
  };
  const LIBELLES_RES = {
    reussi: '✅ Réussi',
    partie: '🟡 En partie',
    revoir: '❌ À revoir'
  };
  let minuteur = null;

  // ---------- Sujets types (par classe et par matière) ----------
  function plage(prefixe, de, a) {
    const r = [];
    for (let n = de; n <= a; n++) r.push(prefixe + String(n).padStart(2, '0'));
    return r;
  }
  const DOSSIERS_SUJETS = {
    '3e': './data/3e/sujets/',
    '4e': './data/4e/sujets/'
  };
  const SUJETS_TYPES = {
    '3e': {
      MATH: {
        fichiers: ['sujets-mathematiques-A.json', 'sujets-mathematiques-B.json'],
        groupes: [
          plage('st-A-', 1, 3),
          plage('st-A-', 4, 6),
          plage('st-A-', 7, 10),
          plage('st-B-', 1, 11),
          plage('st-B-', 12, 14)
        ]
      },
      SPHY: {
        fichiers: ['sujets-sciences-physiques-A.json', 'sujets-sciences-physiques-B.json', 'sujets-sciences-physiques-C.json'],
        groupes: [
          plage('st-SP-', 1, 7),
          plage('st-SP-', 8, 14),
          plage('st-SP-', 15, 22)
        ]
      },
      SVT: {
        fichiers: ['sujets-svt-A.json', 'sujets-svt-B.json', 'sujets-svt-C.json'],
        groupes: [
          plage('st-SVT-', 1, 7),
          plage('st-SVT-', 8, 11),
          plage('st-SVT-', 12, 16),
          plage('st-SVT-', 17, 21),
          plage('st-SVT-', 22, 26)
        ]
      }
    },
    '4e': {
      MATH: {
        fichiers: ['sujets-mathematiques-A.json'],
        groupes: [
          plage('st4-', 1, 3),
          plage('st4-', 4, 6),
          plage('st4-', 7, 9),
          plage('st4-', 10, 12)
        ]
      }
    }
  };
  const cacheSujets = {};

  function cfgSujets(classe, code) {
    const parClasse = SUJETS_TYPES[classe];
    return (parClasse && code && parClasse[code]) ? parClasse[code] : null;
  }
  function cleCache(classe, code) {
    return classe + '-' + code;
  }
  function codeSujet(m) {
    const mat = trouverMatiereParId(etat.classe, m.id) || m;
    return (mat && cfgSujets(etat.classe, mat.code)) ? mat.code : null;
  }
  function nbExercicesSujet(m) {
    const code = codeSujet(m);
    return code ? cfgSujets(etat.classe, code).groupes.length : NIVEAUX_SUJET.length;
  }
  async function chargerSujets(classe, code) {
    const cfg = cfgSujets(classe, code);
    if (!cfg) return null;
    const cle = cleCache(classe, code);
    if (cacheSujets[cle]) return cacheSujets[cle];
    const dossier = DOSSIERS_SUJETS[classe];
    if (!dossier) return null;
    try {
      const parts = await Promise.all(cfg.fichiers.map(f =>
        fetch(dossier + f).then(r => {
          if (!r.ok) throw new Error('introuvable');
          return r.json();
        })
      ));
      const exos = [];
      let mention = '';
      parts.forEach(p => {
        if (!mention && p.mention) mention = p.mention;
        (p.exercices || []).forEach(ex => exos.push(ex));
      });
      const res = { exos: exos, mention: mention };
      cacheSujets[cle] = res;
      return res;
    } catch (e) {
      return null;
    }
  }
  function composerSujetType(sujets, classe, code) {
    const cfg = cfgSujets(classe, code);
    const items = [];
    cfg.groupes.forEach(ids => {
      const dispo = sujets.exos.filter(ex => ids.indexOf(ex.id) !== -1);
      if (!dispo.length) return;
      const ex = dispo[Math.floor(Math.random() * dispo.length)];
      items.push({
        chapId: ex.id,
        chapTitre: ex.domaineTitre || ex.titre,
        idx: 0,
        niveau: 'sujet'
      });
    });
    return items;
  }

  // ---------- Stockage ----------
  function lireSession() {
    try {
      const brut = localStorage.getItem(CLE_SESSION);
      return brut ? JSON.parse(brut) : null;
    } catch (e) { return null; }
  }
  function ecrireSession(s) {
    localStorage.setItem(CLE_SESSION, JSON.stringify(s));
  }
  function effacerSession() {
    localStorage.removeItem(CLE_SESSION);
    localStorage.removeItem('guide-mode-examen');
  }
  function lireHisto() {
    try {
      const brut = localStorage.getItem(CLE_HISTO);
      const liste = brut ? JSON.parse(brut) : [];
      return Array.isArray(liste) ? liste : [];
    } catch (e) { return []; }
  }
  function ecrireHisto(liste) {
    localStorage.setItem(CLE_HISTO, JSON.stringify(liste));
  }

  // ---------- Essai gratuit par matière ----------
  function lireEssais() {
    try {
      const brut = localStorage.getItem(CLE_ESSAIS);
      const obj = brut ? JSON.parse(brut) : {};
      return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) { return {}; }
  }
  function marquerEssaiUtilise(cle) {
    const obj = lireEssais();
    obj[cle] = Date.now();
    localStorage.setItem(CLE_ESSAIS, JSON.stringify(obj));
  }
  function infoAcces(m) {
    const mat = trouverMatiereParId(etat.classe, m.id) || m;
    const code = mat.code;
    const payantes = (typeof MATIERES_PAYANTES !== 'undefined' && MATIERES_PAYANTES[etat.classe]) || [];
    const payante = !!code && payantes.indexOf(code) !== -1;
    const debloquee = !payante || estMatiereDebloquee(etat.classe, code);
    const cle = etat.classe + '-' + code;
    const essaiUtilise = !!lireEssais()[cle];
    return {
      mat: mat,
      cle: cle,
      payante: payante,
      debloquee: debloquee,
      essaiUtilise: essaiUtilise,
      bloquee: payante && !debloquee && essaiUtilise,
      essaiDispo: payante && !debloquee && !essaiUtilise
    };
  }

  // ---------- Verrouillage (utilise le hook existant de app.js) ----------
  function examenVerrouille() {
    const s = lireSession();
    return !!(s && s.phase === 'en-cours' && Date.now() < s.fin);
  }
  function majVerrou() {
    if (examenVerrouille()) localStorage.setItem('guide-mode-examen', 'actif');
    else localStorage.removeItem('guide-mode-examen');
  }

  // ---------- Outils ----------
  function melanger(tab) {
    const a = tab.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function formatChrono(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return h + ':' + pad(m) + ':' + pad(s);
  }
  function formatDuree(min) {
    if (min < 60) return min + ' min';
    const h = Math.floor(min / 60);
    const m = min % 60;
    return h + ' h ' + pad(m) + ' min';
  }
  function formatPoints(p) {
    return Number.isInteger(p) ? String(p) : p.toFixed(1).replace('.', ',');
  }
  function formatDate(ts) {
    return new Date(ts).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  function cleChap(c) { return c.id || c.titre; }
  function niveauDe(ex, idx) {
    const t = (ex && ex.enonce) || '';
    if (t.indexOf('🟢') !== -1) return 'facile';
    if (t.indexOf('🟡') !== -1) return 'moyen';
    if (t.indexOf('🟠') !== -1) return 'difficile';
    if (t.indexOf('🔴') !== -1) return 'expert';
    return ['facile', 'moyen', 'difficile', 'expert'][Math.min(idx, 3)];
  }
  function restaurerTitre() {
    const t = $('titre-header');
    if (t) t.textContent = 'Guide';
  }
  function trouverExoEntree(classe, matiereId) {
    return (EXERCICES_PAR_CLASSE[classe] || []).find(m => m.id === matiereId && m.disponible);
  }

  // ---------- Composition du sujet (matières sans sujet type) ----------
  function candidats(chap, niveau, utilises) {
    const r = [];
    chap.exercices.forEach((ex, i) => {
      if (utilises.has(cleChap(chap) + '#' + i)) return;
      if (niveau && niveauDe(ex, i) !== niveau) return;
      r.push(i);
    });
    return r;
  }
  function composerSujet(data) {
    const chapitres = (data.chapitres || []).filter(c => c.exercices && c.exercices.length);
    if (!chapitres.length) return [];
    const ordre = melanger(chapitres);
    const total = chapitres.reduce((s, c) => s + c.exercices.length, 0);
    const nb = Math.min(NIVEAUX_SUJET.length, total);
    const utilises = new Set();
    const items = [];
    for (let i = 0; i < nb; i++) {
      const voulu = NIVEAUX_SUJET[i];
      let chap = ordre[i % ordre.length];
      let choix = candidats(chap, voulu, utilises);
      if (!choix.length) choix = candidats(chap, null, utilises);
      if (!choix.length) {
        for (const autre of ordre) {
          choix = candidats(autre, voulu, utilises);
          if (choix.length) { chap = autre; break; }
        }
      }
      if (!choix.length) {
        for (const autre of ordre) {
          choix = candidats(autre, null, utilises);
          if (choix.length) { chap = autre; break; }
        }
      }
      if (!choix.length) break;
      const idx = choix[Math.floor(Math.random() * choix.length)];
      utilises.add(cleChap(chap) + '#' + idx);
      items.push({
        chapId: cleChap(chap),
        chapTitre: chap.titre,
        idx: idx,
        niveau: niveauDe(chap.exercices[idx], idx)
      });
    }
    return items;
  }
  async function chargerLignes(s) {
    if (s.sujet) {
      const suj = await chargerSujets(s.classe, s.sujetCode);
      if (!suj) return null;
      const lignesSujet = [];
      s.items.forEach((it, i) => {
        const ex = suj.exos.find(e => e.id === it.chapId);
        if (ex) lignesSujet.push({ i: i, item: it, ex: ex });
      });
      return lignesSujet;
    }
    const entree = trouverExoEntree(s.classe, s.matiereId);
    if (!entree) return null;
    const data = await recupererDonneesExercices(s.classe, entree);
    if (!data) return null;
    const lignes = [];
    s.items.forEach((it, i) => {
      const chap = (data.chapitres || []).find(c => cleChap(c) === it.chapId);
      const ex = chap && chap.exercices ? chap.exercices[it.idx] : null;
      if (ex) lignes.push({ i: i, item: it, ex: ex });
    });
    return lignes;
  }

  // ---------- Chronomètre ----------
  function arreterMinuteur() {
    if (minuteur) { clearInterval(minuteur); minuteur = null; }
  }
  function demarrerMinuteur() {
    arreterMinuteur();
    minuteur = setInterval(tick, 1000);
    tick();
  }
  function tick() {
    const s = lireSession();
    if (!s || s.phase !== 'en-cours') {
      arreterMinuteur();
      restaurerTitre();
      return;
    }
    const reste = s.fin - Date.now();
    const vue = $('view-examen');
    const visible = !!(vue && !vue.hidden);
    const elTemps = $('examen-temps');
    const elChrono = $('examen-chrono');
    const elAlerte = $('examen-alerte');
    if (reste <= 0) {
      majVerrou();
      arreterMinuteur();
      if (visible) {
        $('titre-header').textContent = '⏰ Terminé';
        if (elTemps) elTemps.textContent = '0:00:00';
        if (elChrono) elChrono.classList.add('fini');
        if (elAlerte) {
          elAlerte.textContent = "⏰ Temps écoulé ! Termine ta réponse, puis clique sur « J'ai terminé » pour voir le corrigé.";
          elAlerte.hidden = false;
        }
      } else {
        restaurerTitre();
      }
      return;
    }
    if (visible) {
      $('titre-header').textContent = '⏱ ' + formatChrono(reste);
      if (elTemps) elTemps.textContent = formatChrono(reste);
    } else {
      restaurerTitre();
    }
  }

  // ---------- Écran 0 : point d'entrée ----------
  function allerExamen() {
    etat.niveau = 'examen';
    afficherVue('examen');
    majBoutonRetour(false);
    arreterMinuteur();
    restaurerTitre();
    const s = lireSession();
    if (s && s.phase === 'en-cours') renderEpreuve();
    else if (s && s.phase === 'corrige') renderCorrige();
    else renderChoix();
  }

  // ---------- Écran 1 : choix de la matière ----------
  function renderChoix() {
    const zone = $('examen-contenu');
    window.scrollTo(0, 0);
    if (!etat.classe) {
      zone.innerHTML = `<h2 class="titre-vue">🎓 Mode Examen</h2>
        <p class="texte-vide">Choisis d'abord ta classe depuis l'Accueil.</p>`;
      return;
    }
    zone.innerHTML = `
      <h2 class="titre-vue">🎓 Mode Examen</h2>
      <div class="bloc-pedagogique bloc-remarque">
        <div class="bloc-label">ℹ️ Comment ça marche</div>
        <div class="bloc-texte">
          • Choisis une matière : l'app compose un sujet de 3 à 5 exercices, différent à chaque essai.
          • Tu as 2 h. Pendant l'épreuve, les leçons et les corrigés sont verrouillés.
          • Écris tes réponses sur une feuille.
          • À la fin, tu consultes le corrigé et tu t'auto-évalues. Ton bilan est gardé dans « Mes notes ».
          • 🎁 Chaque matière payante offre un premier examen gratuit.
        </div>
      </div>
      <div id="examen-grille" class="grille-matieres"></div>`;
    const grille = $('examen-grille');
    (MATIERES_PAR_CLASSE[etat.classe] || []).forEach(m => {
      const dispo = !!m.disponible && !!trouverExoEntree(etat.classe, m.id);
      let statut = '';
      let acces = null;
      if (!dispo) {
        statut = 'Bientôt disponible';
      } else {
        acces = infoAcces(m);
        if (acces.bloquee) statut = '🔒 Premium';
        else if (acces.essaiDispo) statut = '🎁 1 essai gratuit';
      }
      const carte = document.createElement('div');
      carte.className = 'carte-matiere' + (dispo ? '' : ' indisponible');
      carte.innerHTML = `
        <div class="carte-matiere-icone">${m.icone}</div>
        <div class="carte-matiere-nom">${m.nom}</div>
        <div class="carte-matiere-statut">${statut}</div>`;
      if (dispo) {
        carte.addEventListener('click', () => {
          if (infoAcces(m).bloquee) renderBloque(m);
          else renderConfirmation(m);
        });
      }
      grille.appendChild(carte);
    });
  }

  // ---------- Écran : essai gratuit utilisé ----------
  function renderBloque(m) {
    const zone = $('examen-contenu');
    window.scrollTo(0, 0);
    zone.innerHTML = `
      <h2 class="titre-vue">${m.icone} Examen — ${m.nom}</h2>
      <div class="bloc-pedagogique bloc-remarque">
        <div class="bloc-label">🔒 Essai gratuit utilisé</div>
        <div class="bloc-texte">
          Tu as déjà passé ton examen gratuit en ${m.nom}.
          Pour passer d'autres examens dans cette matière, débloque-la (2000 Ar).
          Les leçons gratuites et les exercices 🟢 restent accessibles.
        </div>
      </div>
      <div class="examen-actions">
        <button id="examen-debloquer" class="btn-valider">🔓 Débloquer ${m.nom}</button>
        <button id="examen-retour-choix" class="btn-secondaire">← Choisir une autre matière</button>
      </div>`;
    $('examen-retour-choix').addEventListener('click', renderChoix);
    $('examen-debloquer').addEventListener('click', () => ouvrirPaywallExamen(m));
  }
  function ouvrirPaywallExamen(m) {
    const mat = trouverMatiereParId(etat.classe, m.id) || m;
    const cont = $('matiere-contenu');
    const vue = cont ? cont.closest('[id^="view-"]') : null;
    if (vue) afficherVue(vue.id.replace('view-', ''));
    majBoutonRetour(true);
    restaurerTitre();
    afficherPaywall(mat, 'composantes', 'Mode Examen — ' + mat.nom);
  }

  // ---------- Écran 2 : confirmation avant de lancer ----------
  function renderConfirmation(m) {
    const zone = $('examen-contenu');
    window.scrollTo(0, 0);
    const acces = infoAcces(m);
    const nb = nbExercicesSujet(m);
    const noteEssai = acces.essaiDispo
      ? `<div class="bloc-pedagogique bloc-remarque">
          <div class="bloc-label">🎁 Essai gratuit</div>
          <div class="bloc-texte">C'est ton examen gratuit en ${m.nom}. Les suivants nécessitent de débloquer la matière.</div>
        </div>`
      : '';
    zone.innerHTML = `
      <h2 class="titre-vue">${m.icone} Examen — ${m.nom}</h2>
      ${noteEssai}
      <div class="bloc-pedagogique bloc-methode">
        <div class="bloc-label">⏱ Conditions de l'épreuve</div>
        <div class="bloc-texte">
          • ${nb} exercices tirés au hasard
          • Durée : 2 h
          • Leçons et exercices verrouillés jusqu'à la fin
          • Prévois une feuille et un stylo
          • Si tu fermes l'app, le temps continue de s'écouler
        </div>
      </div>
      <div class="examen-actions">
        <button id="examen-lancer" class="btn-valider">▶️ Lancer l'examen</button>
        <button id="examen-retour-choix" class="btn-secondaire">← Choisir une autre matière</button>
      </div>`;
    $('examen-retour-choix').addEventListener('click', renderChoix);
    $('examen-lancer').addEventListener('click', () => lancerExamen(m));
  }
  async function lancerExamen(m) {
    const acces = infoAcces(m);
    if (acces.bloquee) { renderBloque(m); return; }
    const code = codeSujet(m);
    let items = [];
    let extra = {};
    if (code) {
      const sujets = await chargerSujets(etat.classe, code);
      if (!sujets) {
        alert("Impossible de charger le sujet pour le moment. Vérifie ta connexion, puis réessaie.");
        return;
      }
      items = composerSujetType(sujets, etat.classe, code);
      extra = { sujet: true, sujetCode: code };
    } else {
      const entree = trouverExoEntree(etat.classe, m.id);
      if (!entree) return;
      const data = await recupererDonneesExercices(etat.classe, entree);
      if (!data) {
        alert("Impossible de charger les exercices pour le moment.");
        return;
      }
      items = composerSujet(data);
    }
    if (!items.length) {
      alert("Aucun exercice disponible pour cette matière.");
      return;
    }
    if (acces.essaiDispo) marquerEssaiUtilise(acces.cle);
    const debut = Date.now();
    ecrireSession(Object.assign({
      classe: etat.classe,
      matiereId: m.id,
      matiereNom: m.nom,
      matiereIcone: m.icone,
      debut: debut,
      fin: debut + DUREE_MS,
      phase: 'en-cours',
      items: items,
      evals: {}
    }, extra));
    majVerrou();
    renderEpreuve();
  }

  // ---------- Écran 3 : l'épreuve ----------
  async function renderEpreuve() {
    const s = lireSession();
    const zone = $('examen-contenu');
    if (!s) { renderChoix(); return; }
    window.scrollTo(0, 0);
    zone.innerHTML = '<p class="texte-chargement">Chargement du sujet...</p>';
    const lignes = await chargerLignes(s);
    if (!lignes || !lignes.length) {
      zone.innerHTML = `
        <div class="bloc-pedagogique bloc-remarque">
          <div class="bloc-label">⚠️ Sujet indisponible</div>
          <div class="bloc-texte">Le sujet n'a pas pu être chargé. Vérifie ta connexion, puis réessaie.</div>
        </div>
        <div class="examen-actions">
          <button id="examen-reessayer" class="btn-valider">🔄 Réessayer</button>
          <button id="examen-abandon" class="btn-danger">Abandonner l'examen</button>
        </div>`;
      $('examen-reessayer').addEventListener('click', renderEpreuve);
      $('examen-abandon').addEventListener('click', abandonner);
      return;
    }
    let html = `
      <div id="examen-chrono" class="examen-chrono">
        <div class="examen-chrono-label">⏱ Temps restant</div>
        <div id="examen-temps" class="examen-chrono-temps">${formatChrono(s.fin - Date.now())}</div>
        <div class="examen-chrono-sous">${s.matiereIcone} ${s.matiereNom}</div>
      </div>
      <div id="examen-alerte" class="examen-alerte" hidden></div>
      <div class="bloc-pedagogique bloc-remarque">
        <div class="bloc-label">✍️ Consigne</div>
        <div class="bloc-texte">Écris tes réponses sur une feuille. Quand tu as fini, clique sur « J'ai terminé » pour voir le corrigé.</div>
      </div>`;
    lignes.forEach((l, n) => {
      html += `
        <div class="bloc-exercice">
          <div class="bloc-exercice-label">📝 Exercice ${n + 1}</div>
          <div class="bloc-exercice-enonce bloc-texte">${ajusterSchemasHtml(l.ex.enonce)}</div>
        </div>`;
    });
    html += `
      <div class="examen-actions">
        <button id="examen-terminer" class="btn-valider">✅ J'ai terminé — voir le corrigé</button>
        <button id="examen-abandon" class="btn-danger">Abandonner l'examen</button>
      </div>`;
    zone.innerHTML = html;
    $('examen-terminer').addEventListener('click', terminerEpreuve);
    $('examen-abandon').addEventListener('click', abandonner);
    demarrerMinuteur();
  }
  function terminerEpreuve() {
    const s = lireSession();
    if (!s) return;
    if (!confirm("Terminer l'examen et afficher le corrigé ? Tu ne pourras plus revenir à l'épreuve.")) return;
    s.phase = 'corrige';
    s.tempsFin = Date.now();
    s.evals = s.evals || {};
    ecrireSession(s);
    majVerrou();
    arreterMinuteur();
    restaurerTitre();
    renderCorrige();
  }
  function abandonner() {
    if (!confirm("Abandonner l'examen ? Rien ne sera enregistré.")) return;
    effacerSession();
    arreterMinuteur();
    restaurerTitre();
    renderChoix();
  }

  // ---------- Écran 4 : corrigé + auto-évaluation ----------
  async function renderCorrige() {
    const s = lireSession();
    const zone = $('examen-contenu');
    if (!s) { renderChoix(); return; }
    window.scrollTo(0, 0);
    zone.innerHTML = '<p class="texte-chargement">Chargement du corrigé...</p>';
    const lignes = await chargerLignes(s);
    if (!lignes || !lignes.length) {
      zone.innerHTML = `
        <div class="bloc-pedagogique bloc-remarque">
          <div class="bloc-label">⚠️ Corrigé indisponible</div>
          <div class="bloc-texte">Le corrigé n'a pas pu être chargé. Vérifie ta connexion, puis réessaie.</div>
        </div>
        <div class="examen-actions">
          <button id="examen-reessayer" class="btn-valider">🔄 Réessayer</button>
          <button id="examen-abandon" class="btn-danger">Abandonner l'examen</button>
        </div>`;
      $('examen-reessayer').addEventListener('click', renderCorrige);
      $('examen-abandon').addEventListener('click', abandonner);
      return;
    }
    const evals = s.evals || {};
    const cleSuj = s.sujet ? cleCache(s.classe, s.sujetCode) : null;
    const infoSujet = (cleSuj && cacheSujets[cleSuj] && cacheSujets[cleSuj].mention)
      ? `<p class="texte-parametre">${cacheSujets[cleSuj].mention}</p>`
      : '';
    let html = `
      <h2 class="titre-lecon">📖 Corrigé et auto-évaluation</h2>
      <div class="bloc-pedagogique bloc-remarque">
        <div class="bloc-label">💡 Comment faire</div>
        <div class="bloc-texte">Compare ta feuille avec la correction, puis dis honnêtement comment tu t'en es sortie pour chaque exercice.</div>
      </div>
      ${infoSujet}`;
    lignes.forEach((l, n) => {
      const cur = evals[l.i];
      const bouton = (val, texte) =>
        `<button class="examen-eval-btn eval-${val}${cur === val ? ' actif' : ''}" data-i="${l.i}" data-val="${val}">${texte}</button>`;
      html += `
        <div class="bloc-exercice">
          <div class="bloc-exercice-label">📝 Exercice ${n + 1} — ${l.item.chapTitre}</div>
          <div class="bloc-exercice-enonce bloc-texte">${ajusterSchemasHtml(l.ex.enonce)}</div>
          <details class="exercice-solution">
            <summary>Voir la correction</summary>
            <div class="bloc-exercice-corrige bloc-texte">${ajusterSchemasHtml(l.ex.solution)}</div>
          </details>
          <div class="examen-eval">
            <div class="examen-eval-question">Comment as-tu réussi cet exercice ?</div>
            <div class="examen-eval-boutons">
              ${bouton('reussi', '✅ Réussi')}
              ${bouton('partie', '🟡 En partie')}
              ${bouton('revoir', '❌ À revoir')}
            </div>
          </div>
        </div>`;
    });
    html += `
      <div id="examen-msg" class="examen-alerte" hidden></div>
      <div class="examen-actions">
        <button id="examen-bilan" class="btn-valider">📊 Voir mon bilan</button>
        <button id="examen-abandon" class="btn-secondaire">Quitter sans enregistrer</button>
      </div>`;
    zone.innerHTML = html;
    zone.querySelectorAll('.examen-eval-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sess = lireSession();
        if (!sess) return;
        sess.evals = sess.evals || {};
        sess.evals[btn.dataset.i] = btn.dataset.val;
        ecrireSession(sess);
        btn.parentElement.querySelectorAll('.examen-eval-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        const msg = $('examen-msg');
        if (msg) msg.hidden = true;
      });
    });
    $('examen-abandon').addEventListener('click', abandonner);
    $('examen-bilan').addEventListener('click', () => {
      const sess = lireSession();
      if (!sess) return;
      const manquants = lignes.filter(l => !(sess.evals && sess.evals[l.i]));
      if (manquants.length) {
        const msg = $('examen-msg');
        msg.textContent = "⚠️ Évalue chaque exercice avant de voir le bilan (" + manquants.length + " restant(s)).";
        msg.hidden = false;
        return;
      }
      validerBilan(sess, lignes);
    });
  }

  // ---------- Bilan ----------
  function validerBilan(s, lignes) {
    let points = 0;
    const details = [];
    const aRevoir = [];
    lignes.forEach(l => {
      const res = s.evals[l.i];
      if (res === 'reussi') points += 1;
      else if (res === 'partie') points += 0.5;
      details.push({ chapTitre: l.item.chapTitre, niveau: l.item.niveau, res: res });
      if (res !== 'reussi' && aRevoir.indexOf(l.item.chapTitre) === -1) aRevoir.push(l.item.chapTitre);
    });
    const nb = lignes.length;
    const fin = s.tempsFin || Date.now();
    const entree = {
      date: Date.now(),
      classe: s.classe,
      matiereId: s.matiereId,
      matiereNom: s.matiereNom,
      matiereIcone: s.matiereIcone,
      nb: nb,
      points: points,
      pct: Math.round((points / nb) * 100),
      dureeMin: Math.max(1, Math.round((Math.min(fin, s.fin) - s.debut) / 60000)),
      aRevoir: aRevoir,
      details: details
    };
    const histo = lireHisto();
    histo.push(entree);
    ecrireHisto(histo.slice(-50));
    effacerSession();
    arreterMinuteur();
    restaurerTitre();
    renderBilan(entree);
    renderHistoriqueExamens();
  }
  function renderBilan(e) {
    const zone = $('examen-contenu');
    window.scrollTo(0, 0);
    let message;
    if (e.pct >= 80) message = "Excellent travail ! 🎉";
    else if (e.pct >= 60) message = "Bien ! Quelques points à consolider.";
    else if (e.pct >= 40) message = "Passable : revois les chapitres ci-dessous.";
    else message = "Courage ! Reprends les cours, puis refais un examen.";
    let html = `
      <h2 class="titre-lecon">📊 Bilan — ${e.matiereIcone} ${e.matiereNom}</h2>
      <div class="examen-score">
        <div class="examen-score-note">${formatPoints(e.points)} / ${e.nb}</div>
        <div class="examen-score-pct">${e.pct} %</div>
        <div class="examen-score-msg">${message}</div>
      </div>
      <div class="mini-progression">
        <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${e.pct}%"></div></div>
        <span class="mini-progression-texte">${e.pct}%</span>
      </div>
      <div class="bloc-pedagogique bloc-remarque">
        <div class="bloc-label">🧾 Détail</div>
        <div class="bloc-texte">`;
    e.details.forEach((d, n) => {
      html += `<div class="examen-ligne-resultat"><span>Ex. ${n + 1}</span><span>${LIBELLES_NIVEAU[d.niveau] || ''}</span><span>${d.chapTitre}</span><span>${LIBELLES_RES[d.res] || ''}</span></div>`;
    });
    html += `</div></div>`;
    if (e.aRevoir.length) {
      html += `
        <div class="bloc-pedagogique bloc-methode">
          <div class="bloc-label">📚 À revoir</div>
          <div class="bloc-texte">${e.aRevoir.map(t => '• ' + t).join('\n')}</div>
        </div>`;
    }
    html += `
      <div class="examen-actions">
        ${e.aRevoir.length ? `<button id="examen-cours" class="btn-valider">📖 Ouvrir le cours de ${e.matiereNom}</button>` : ''}
        <button id="examen-nouveau" class="btn-secondaire">🎓 Passer un autre examen</button>
      </div>
      <p class="texte-parametre">Ce bilan est gardé dans « Mes notes ».</p>`;
    zone.innerHTML = html;
    if (e.aRevoir.length) {
      $('examen-cours').addEventListener('click', () => {
        const m = (MATIERES_PAR_CLASSE[e.classe] || []).find(x => x.id === e.matiereId && x.disponible);
        if (m) selectionnerMatiere(m);
      });
    }
    $('examen-nouveau').addEventListener('click', renderChoix);
  }

  // ---------- Historique dans « Mes notes » ----------
  function renderHistoriqueExamens() {
    const zone = $('notes-examens');
    if (!zone) return;
    const histo = lireHisto();
    if (!histo.length) {
      zone.innerHTML = `<p class="texte-vide">Aucun examen passé pour le moment. Va dans 🎓 Examen pour t'entraîner.</p>`;
      return;
    }
    const moyenne = Math.round(histo.reduce((s, e) => s + e.pct, 0) / histo.length);
    let html = `<p class="texte-parametre">${histo.length} examen(s) passé(s) · moyenne générale : ${moyenne} %</p>`;
    histo.slice().reverse().slice(0, 10).forEach(e => {
      html += `
        <div class="notes-matiere examen-histo-item">
          <div class="notes-matiere-nom">${e.matiereIcone} ${e.matiereNom}<span class="examen-histo-date">${formatDate(e.date)}</span></div>
          <div class="mini-progression">
            <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${e.pct}%"></div></div>
            <span class="mini-progression-texte">${e.pct}%</span>
          </div>
          <div class="examen-histo-detail">Score : ${formatPoints(e.points)} / ${e.nb} · Durée : ${formatDuree(e.dureeMin)}</div>
          ${e.aRevoir && e.aRevoir.length ? `<div class="examen-histo-revoir">À revoir : ${e.aRevoir.join(', ')}</div>` : ''}
        </div>`;
    });
    html += `<button id="examen-effacer-histo" class="btn-danger">🗑️ Effacer l'historique des examens</button>`;
    zone.innerHTML = html;
    $('examen-effacer-histo').addEventListener('click', () => {
      if (confirm("Effacer tout l'historique de tes examens ? Cette action est irréversible.")) {
        localStorage.removeItem(CLE_HISTO);
        renderHistoriqueExamens();
      }
    });
  }

  // ---------- Branchement sur l'app ----------
  function init() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const cible = btn.getAttribute('data-nav');
      btn.addEventListener('click', () => {
        if (cible === 'examen') {
          allerExamen();
        } else {
          restaurerTitre();
          if (cible === 'notes') renderHistoriqueExamens();
        }
      });
    });
    // Pendant l'épreuve, l'onglet Exercices est bloqué (les corrigés y sont visibles).
    const barre = document.querySelector('.nav-basse');
    if (barre) {
      barre.addEventListener('click', (ev) => {
        const btn = ev.target.closest('.nav-btn');
        if (!btn) return;
        if (btn.getAttribute('data-nav') === 'exercices' && examenVerrouille()) {
          ev.stopPropagation();
          ev.preventDefault();
          alert("Les exercices corrigés sont désactivés pendant l'examen.");
        }
      }, true);
    }
    majVerrou();
    if (examenVerrouille()) demarrerMinuteur();
    renderHistoriqueExamens();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
