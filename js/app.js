// ============================================
// GUIDE — app.js
// ============================================
const SEL_SECRET = "BEPC2026MDG";
const CLASSES = [
  { id: '6e',   nom: '6ème',      disponible: false },
  { id: '5e',   nom: '5ème',      disponible: false },
  { id: '4e',   nom: '4ème',      disponible: false },
  { id: '3e',   nom: 'Troisième', disponible: true  },
  { id: '2nd',  nom: 'Seconde',   disponible: false },
  { id: '1ere', nom: 'Première',  disponible: false },
  { id: 'tle',  nom: 'Terminale', disponible: false }
];
const MATIERES_PAR_CLASSE = {
  '3e': [
    { id: 'malagasy',           code: 'MALG', nom: 'Malagasy',           icone: '📚', disponible: false, fichier: './data/3e/malagasy.json' },
    { id: 'francais',           code: 'FRAN', nom: 'Français',           icone: '📖', disponible: false, fichiers: [
      './data/3e/francais/composante-1.json',
      './data/3e/francais/composante-2.json',
      './data/3e/francais/composante-3.json',
      './data/3e/francais/composante-4.json',
      './data/3e/francais/composante-5.json',
      './data/3e/francais/composante-6.json',
      './data/3e/francais/composante-7.json'
    ] },
    { id: 'anglais',            code: 'ANGL', nom: 'Anglais',            icone: '🌍', disponible: false, fichiers: [
      './data/3e/anglais/composante-1.json',
      './data/3e/anglais/composante-2.json',
      './data/3e/anglais/composante-3.json',
      './data/3e/anglais/composante-4.json',
      './data/3e/anglais/composante-5.json',
      './data/3e/anglais/composante-6.json',
      './data/3e/anglais/composante-7.json',
      './data/3e/anglais/composante-8.json'
    ] },
    { id: 'mathematiques',      code: 'MATH', nom: 'Mathématiques',      icone: '📐', disponible: true,  fichiers: [
      './data/3e/mathematiques/composante-1.json',
      './data/3e/mathematiques/composante-2.json',
      './data/3e/mathematiques/composante-3.json',
      './data/3e/mathematiques/composante-4.json',
      './data/3e/mathematiques/composante-5.json'
    ] },
    // SVT : 11 chapitres, rangés dans l'ordre d'apprentissage
    // 1 Alimentation (c1) · 2 Système nerveux (c3) · 3 Sens et vue (c6) · 4 Microbes (c7)
    // 5 Maladies (c8) · 6 Reproduction humaine (c4, premium) · 7 Organisation des êtres vivants (c2)
    // 8 Plantes à fleurs (c9) · 9 Roches (c10) · 10 Pierres gemmes (c5) · 11 Sol (c11)
    { id: 'svt',                code: 'SVT',  nom: 'SVT',                icone: '🔬', disponible: true,  fichiers: [
      './data/3e/svt/composante-1.json',
      './data/3e/svt/composante-3.json',
      './data/3e/svt/composante-6.json',
      './data/3e/svt/composante-7.json',
      './data/3e/svt/composante-8.json',
      './data/3e/svt/composante-4.json',
      './data/3e/svt/composante-2.json',
      './data/3e/svt/composante-9.json',
      './data/3e/svt/composante-10.json',
      './data/3e/svt/composante-5.json',
      './data/3e/svt/composante-11.json'
    ] },
    // Sciences Physiques : 11 chapitres, rangés dans l'ordre d'apprentissage
    // 1 Mouvement (c3) · 2 Force et interaction (c4) · 3 Poids et poussée d'Archimède (c6)
    // 4 Électricité (c2, premium) · 5 Effet Joule et facture JIRAMA (c7) · 6 Aimants et magnétisme (c8)
    // 7 Lumière et son (c5) · 8 Mirage, couleurs et filtres (c9) · 9 La mole et le volume molaire (c10)
    // 10 La matière (c1) · 11 Transformations chimiques (c11)
    { id: 'sciences-physiques', code: 'SPHY', nom: 'Sciences Physiques', icone: '⚛️', disponible: true,  fichiers: [
      './data/3e/sciences-physiques/composante-3.json',
      './data/3e/sciences-physiques/composante-4.json',
      './data/3e/sciences-physiques/composante-6.json',
      './data/3e/sciences-physiques/composante-2.json',
      './data/3e/sciences-physiques/composante-7.json',
      './data/3e/sciences-physiques/composante-8.json',
      './data/3e/sciences-physiques/composante-5.json',
      './data/3e/sciences-physiques/composante-9.json',
      './data/3e/sciences-physiques/composante-10.json',
      './data/3e/sciences-physiques/composante-1.json',
      './data/3e/sciences-physiques/composante-11.json'
    ] },
    { id: 'histoire',           code: 'HIST', nom: 'Histoire',           icone: '🏛️', disponible: false, fichiers: [
      './data/3e/histoire/composante-1.json',
      './data/3e/histoire/composante-2.json',
      './data/3e/histoire/composante-3.json',
      './data/3e/histoire/composante-4.json',
      './data/3e/histoire/composante-5.json',
      './data/3e/histoire/composante-6.json',
      './data/3e/histoire/composante-7.json',
      './data/3e/histoire/composante-8.json',
      './data/3e/histoire/composante-9.json',
      './data/3e/histoire/composante-10.json'
    ] },
    { id: 'geographie',         code: 'GEOG', nom: 'Géographie',         icone: '🗺️', disponible: false, fichiers: [
      './data/3e/geographie/composante-1.json',
      './data/3e/geographie/composante-2.json',
      './data/3e/geographie/composante-3.json',
      './data/3e/geographie/composante-4.json',
      './data/3e/geographie/composante-5.json',
      './data/3e/geographie/composante-6.json',
      './data/3e/geographie/composante-7.json',
      './data/3e/geographie/composante-8.json',
      './data/3e/geographie/composante-9.json'
    ] }
  ],
  'tle': [
    { id: 'malagasy',        code: 'MALG', nom: 'Malagasy',            icone: '📚', disponible: false, fichier: './data/tle/malagasy.json' },
    { id: 'francais',        code: 'FRAN', nom: 'Français',            icone: '📖', disponible: false, fichier: './data/tle/francais.json' },
    { id: 'anglais',         code: 'ANGL', nom: 'Anglais',             icone: '🌍', disponible: false, fichier: './data/tle/anglais.json' },
    { id: 'mathematiques',   code: 'MATH', nom: 'Mathématiques',       icone: '📐', disponible: false, fichier: './data/tle/mathematiques.json' },
    { id: 'svt',             code: 'SVT',  nom: 'SVT',                 icone: '🔬', disponible: false, fichier: './data/tle/svt.json' },
    { id: 'physique-chimie', code: 'PCHI', nom: 'Physique / Chimie',   icone: '⚛️', disponible: false, fichier: './data/tle/physique-chimie.json' },
    { id: 'histoire-geo',    code: 'HGEO', nom: 'Histoire-Géographie', icone: '🗺️', disponible: false, fichier: './data/tle/histoire-geographie.json' },
    { id: 'philosophie',     code: 'PHIL', nom: 'Philosophie',         icone: '🧠', disponible: false, fichier: './data/tle/philosophie.json' }
  ]
};
// Matières dont les chapitres sont numérotés automatiquement selon leur position
// (« Chapitre 1 : ... », « Chapitre 2 : ... »), pour le cours et pour les exercices
const MATIERES_NUMEROTEES = ['svt', 'sciences-physiques'];
// ============================================
// EXERCICES — SUJETS ET CORRIGÉS (section indépendante, évolutive)
// ============================================
const EXERCICES_PAR_CLASSE = {
  '3e': [
    { id: 'mathematiques', nom: 'Mathématiques', icone: '📐', disponible: true,
      fichier: './data/3e/exercices/exercices-mathematiques.json' },
    { id: 'anglais', nom: 'Anglais', icone: '🌍', disponible: true,
      fichier: './data/3e/exercices/exercices-anglais.json' },
    { id: 'sciences-physiques', nom: 'Sciences Physiques', icone: '⚛️', disponible: true,
      fichiers: [
        './data/3e/exercices/exercices-sciences-physiques.json',
        './data/3e/exercices/exercices-sciences-physiques-2.json',
        './data/3e/exercices/exercices-sciences-physiques-3.json',
        './data/3e/exercices/exercices-sciences-physiques-4.json',
        './data/3e/exercices/exercices-sciences-physiques-5.json',
        './data/3e/exercices/exercices-sciences-physiques-6.json',
        './data/3e/exercices/exercices-sciences-physiques-7.json'
      ],
      // Ordre d'affichage des chapitres d'exercices (même ordre logique que le cours)
      ordre: [
        'exo-sp-3-mouvement',
        'exo-sp-4-force',
        'exo-sp-6-poids-archimede',
        'exo-sp-2-electricite',
        'exo-sp-7-joule-jirama',
        'exo-sp-8-magnetisme',
        'exo-sp-5-lumiere-son',
        'exo-sp-9-mirage-couleurs',
        'exo-sp-10-mole',
        'exo-sp-1-matiere',
        'exo-sp-11-transformations'
      ] },
    { id: 'svt', nom: 'SVT', icone: '🔬', disponible: true,
      fichiers: [
        './data/3e/exercices/exercices-svt.json',
        './data/3e/exercices/exercices-svt-2.json',
        './data/3e/exercices/exercices-svt-3.json',
        './data/3e/exercices/exercices-svt-4.json'
      ],
      // Ordre d'affichage des chapitres d'exercices (même ordre logique que le cours)
      ordre: [
        'exo-svt-1-alimentation',
        'exo-svt-3-sante',
        'exo-svt-6-sens',
        'exo-svt-7-microbes',
        'exo-svt-8-maladies',
        'exo-svt-4-reproduction',
        'exo-svt-2-plantes',
        'exo-svt-9-plantes-fleurs',
        'exo-svt-10-roches',
        'exo-svt-5-geologie',
        'exo-svt-11-sol'
      ] },
    { id: 'francais', nom: 'Français', icone: '📖', disponible: true,
      fichier: './data/3e/exercices/exercices-francais.json' },
    { id: 'histoire', nom: 'Histoire', icone: '🏛️', disponible: true,
      fichier: './data/3e/exercices/exercices-histoire.json' },
    { id: 'geographie', nom: 'Géographie', icone: '🗺️', disponible: true,
      fichier: './data/3e/exercices/exercices-geographie.json' }
  ],
  'tle': []
};
// ============================================
// ACCÈS PAYANT — matières payantes, chapitre premium, alphabet des codes
// (Malagasy : gratuit, donc absent de ces listes)
// ============================================
const ALPHABET_CODE = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const MATIERES_PAYANTES = {
  '3e': ['MATH', 'SVT', 'SPHY'],
  'tle': []
};
// Position (à partir de 1) du chapitre payant dans la liste des chapitres de chaque matière
// SVT : le chapitre premium « Reproduction humaine » est en position 6
// Sciences Physiques : le chapitre premium « Électricité » est en position 4
const CHAPITRE_PREMIUM = {
  'mathematiques': 4,
  'sciences-physiques': 4,
  'svt': 6,
  'geographie': 4,
  'histoire': 9,
  'francais': 6,
  'anglais': 6
};
const LABELS_TYPE = {
  definition: { label: '📘 Définition', classe: 'bloc-definition' },
  formule:    { label: '🧮 Formule',    classe: 'bloc-formule' },
  exemple:    { label: '✏️ Exemple',    classe: 'bloc-exemple' },
  regle:      { label: '📏 Règle',      classe: 'bloc-regle' },
  remarque:   { label: '💡 Remarque',   classe: 'bloc-remarque' },
  theoreme:   { label: '🔺 Théorème',   classe: 'bloc-theoreme' },
  methode:    { label: '🛠️ Méthode',    classe: 'bloc-methode' }
};
const etat = {
  niveau: 'classes',
  classe: null,
  matiere: null,
  dataMatiere: null,
  composante: null,
  lecon: null,
  compPaywall: null,
  paywallMatiere: null,
  paywallOrigine: null,
  exoMatiere: null,
  exoData: null,
  exoChapitre: null,
  retourActif: false,
  cache: {}
};
function $(id) { return document.getElementById(id); }
function afficherVue(nom) {
  const cible = $('view-' + nom);
  if (!cible) {
    console.error('Vue introuvable dans le HTML : view-' + nom);
    return;
  }
  document.querySelectorAll('.view').forEach(v => v.hidden = true);
  cible.hidden = false;
  const zoneFlot = $('flottants-nav');
  if (zoneFlot && nom !== 'matiere') zoneFlot.style.display = 'none';
  window.scrollTo(0, 0);
}
// Le bouton « ← » du haut n'est plus utilisé dans les leçons, listes, exercices
// et paiement : les deux ronds flottants le remplacent.
// Il reste seulement pour les autres écrans (ex. Mode Examen) si le code les demande.
function majBoutonRetour(visible) {
  etat.retourActif = !!visible;
  const vueMatiere = $('view-matiere');
  const dansMatiere = !!vueMatiere && !vueMatiere.hidden;
  $('btn-retour').hidden = !(visible && !dansMatiere);
  majBoutonsFlottants();
}
// ============================================
// BOUTONS RONDS FLOTTANTS (précédent / suivant)
// ============================================
const SVG_FLECHE_GAUCHE = "<svg width='22' height='22' viewBox='0 0 24 24'><polyline points='15,5 8,12 15,19' fill='none' stroke='#ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>";
const SVG_FLECHE_DROITE = "<svg width='22' height='22' viewBox='0 0 24 24'><polyline points='9,5 16,12 9,19' fill='none' stroke='#ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>";
const STYLE_ROND = 'width:46px;height:46px;border-radius:50%;border:2px solid rgba(255,255,255,0.35);background:#1e3a5f;box-shadow:0 2px 8px rgba(0,0,0,0.35);padding:0;margin:0;display:flex;align-items:center;justify-content:center;cursor:pointer;pointer-events:auto;';
let dernierDefilement = 0;
function creerBoutonsFlottants() {
  let zone = $('flottants-nav');
  if (zone) return zone;
  zone = document.createElement('div');
  zone.id = 'flottants-nav';
  zone.style.cssText = 'position:fixed;left:0;right:0;bottom:80px;display:none;justify-content:space-between;align-items:center;padding:0 14px;pointer-events:none;z-index:50;transition:transform 0.25s ease,opacity 0.25s ease;';
  zone.innerHTML =
    '<button type="button" id="flot-prec" aria-label="Retour" style="' + STYLE_ROND + '">' + SVG_FLECHE_GAUCHE + '</button>' +
    '<button type="button" id="flot-suiv" aria-label="Leçon suivante" style="' + STYLE_ROND + '">' + SVG_FLECHE_DROITE + '</button>';
  document.body.appendChild(zone);
  window.addEventListener('scroll', () => {
    const z = $('flottants-nav');
    if (!z || z.style.display === 'none') return;
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    const bas = window.innerHeight + y >= document.documentElement.scrollHeight - 120;
    const d = y - dernierDefilement;
    if (y < 40 || bas) {
      afficherFlot(true);
      dernierDefilement = y;
    } else if (d > 8) {
      afficherFlot(false);
      dernierDefilement = y;
    } else if (d < -8) {
      afficherFlot(true);
      dernierDefilement = y;
    }
  }, { passive: true });
  return zone;
}
function afficherFlot(visible) {
  const zone = $('flottants-nav');
  if (!zone) return;
  zone.style.opacity = visible ? '1' : '0';
  zone.style.transform = visible ? 'translateY(0)' : 'translateY(24px)';
  for (let i = 0; i < zone.children.length; i++) {
    zone.children[i].style.pointerEvents = visible ? 'auto' : 'none';
  }
}
function allerLeconVoisine(delta) {
  const lecons = (etat.composante && etat.composante.lecons) || [];
  const position = etat.lecon ? lecons.findIndex(l => l.id === etat.lecon.id) : -1;
  const cible = position >= 0 ? lecons[position + delta] : null;
  if (cible) {
    selectionnerLecon(cible);
  } else {
    etat.niveau = 'lecons';
    afficherListeLecons();
  }
  window.scrollTo(0, 0);
}
function majBoutonsFlottants() {
  const zone = creerBoutonsFlottants();
  const conteneur = $('matiere-contenu');
  const vueMatiere = $('view-matiere');
  const actif = !!etat.retourActif && !!vueMatiere && !vueMatiere.hidden;
  if (!actif) {
    zone.style.display = 'none';
    if (conteneur) conteneur.style.paddingBottom = '';
    return;
  }
  const nav = document.querySelector('.nav-basse');
  const hauteurNav = nav ? nav.offsetHeight : 64;
  zone.style.bottom = (hauteurNav + 14) + 'px';
  const prec = $('flot-prec');
  const suiv = $('flot-suiv');
  if (etat.niveau === 'contenu' && !estModeExamenActif() && etat.lecon && etat.composante) {
    prec.onclick = () => allerLeconVoisine(-1);
    suiv.onclick = () => allerLeconVoisine(1);
    prec.setAttribute('aria-label', 'Leçon précédente');
    suiv.setAttribute('aria-label', 'Leçon suivante');
    suiv.style.display = 'flex';
  } else {
    prec.onclick = gererRetour;
    prec.setAttribute('aria-label', 'Retour');
    suiv.onclick = null;
    suiv.style.display = 'none';
  }
  if (conteneur) conteneur.style.paddingBottom = '64px';
  zone.style.display = 'flex';
  afficherFlot(true);
}
// ============================================
// MODE EXAMEN — hook de verrouillage (prêt, inactif par défaut)
// ============================================
function estModeExamenActif() {
  return localStorage.getItem('guide-mode-examen') === 'actif';
}
function htmlLeconVerrouillee() {
  return `
    <div class="paywall">
      <div class="paywall-icone">🔒</div>
      <div class="paywall-titre">Mode Examen actif</div>
      <p class="paywall-texte">Les leçons sont désactivées pendant le Mode Examen pour garantir l'équité entre élèves. Elles redeviendront accessibles une fois l'examen terminé.</p>
    </div>`;
}
// ============================================
// NIVEAU 1 — CHOIX DE LA CLASSE (une seule fois)
// ============================================
function renderClasses() {
  const grille = $('grille-classes');
  grille.innerHTML = '';
  CLASSES.forEach(c => {
    const carte = document.createElement('div');
    carte.className = 'carte-classe' + (c.disponible ? '' : ' indisponible');
    carte.innerHTML = `
      <div class="carte-classe-nom">${c.nom}</div>
      <div class="carte-classe-statut">${c.disponible ? 'Disponible' : 'Bientôt disponible'}</div>
    `;
    if (c.disponible) {
      carte.addEventListener('click', () => selectionnerClasse(c.id));
    }
    grille.appendChild(carte);
  });
}
function selectionnerClasse(classeId) {
  etat.classe = classeId;
  localStorage.setItem('guide-classe-choisie', classeId);
  etat.niveau = 'matieres';
  afficherVue('matieres');
  majBoutonRetour(false);
  renderMatieres();
}
// ============================================
// NIVEAU 2 — MATIÈRES (écran d'accueil habituel)
// ============================================
function renderMatieres() {
  const classeObj = CLASSES.find(c => c.id === etat.classe);
  $('sous-titre-matieres').textContent = classeObj ? classeObj.nom : 'Choisis ta matière';
  renderBoutonReprendre();
  const grille = $('grille-matieres');
  grille.innerHTML = '';
  const matieres = MATIERES_PAR_CLASSE[etat.classe] || [];
  matieres.forEach(m => {
    const carte = document.createElement('div');
    carte.className = 'carte-matiere' + (m.disponible ? '' : ' indisponible');
    carte.innerHTML = `
      <div class="carte-matiere-icone">${m.icone}</div>
      <div class="carte-matiere-nom">${m.nom}</div>
      <div class="carte-matiere-statut">${m.disponible ? '' : 'Bientôt disponible'}</div>
    `;
    if (m.disponible) {
      carte.addEventListener('click', () => selectionnerMatiere(m));
    }
    grille.appendChild(carte);
  });
}
function sauvegarderDernierePosition() {
  const position = {
    classe: etat.classe,
    matiereId: etat.matiere.id,
    matiereNom: etat.matiere.nom,
    matiereIcone: etat.matiere.icone,
    composanteId: etat.composante.id,
    leconId: etat.lecon.id,
    leconTitre: etat.lecon.titre
  };
  localStorage.setItem('guide-derniere-position', JSON.stringify(position));
}
function renderBoutonReprendre() {
  const zone = $('zone-reprendre');
  if (estModeExamenActif()) { zone.hidden = true; zone.innerHTML = ''; return; }
  const brut = localStorage.getItem('guide-derniere-position');
  if (!brut) { zone.hidden = true; zone.innerHTML = ''; return; }
  const pos = JSON.parse(brut);
  if (pos.classe !== etat.classe) { zone.hidden = true; zone.innerHTML = ''; return; }
  zone.hidden = false;
  zone.innerHTML = `
    <div class="carte-reprendre" id="carte-reprendre">
      <div class="reprendre-label">📍 Reprendre où tu en étais</div>
      <div class="reprendre-titre">${pos.matiereIcone} ${pos.matiereNom} — ${pos.leconTitre}</div>
    </div>`;
  $('carte-reprendre').addEventListener('click', reprendreDerniereLecon);
}
async function reprendreDerniereLecon() {
  if (estModeExamenActif()) return;
  const brut = localStorage.getItem('guide-derniere-position');
  if (!brut) return;
  const pos = JSON.parse(brut);
  if (pos.classe !== etat.classe) return;
  const matiere = (MATIERES_PAR_CLASSE[etat.classe] || []).find(m => m.id === pos.matiereId);
  if (!matiere || !matiere.disponible) return;
  const ok = await chargerDonneesMatiere(matiere);
  if (!ok) return;
  const comp = etat.dataMatiere.composantes.find(c => c.id === pos.composanteId);
  if (!comp) return;
  afficherVue('matiere');
  majBoutonRetour(true);
  if (estChapitreVerrouille(matiere, comp)) {
    etat.niveau = 'composantes';
    afficherListeComposantes();
    return;
  }
  const lecon = comp.lecons.find(l => l.id === pos.leconId);
  if (!lecon) {
    etat.composante = comp;
    etat.niveau = 'lecons';
    afficherListeLecons();
    return;
  }
  etat.composante = comp;
  etat.lecon = lecon;
  etat.niveau = 'contenu';
  afficherContenuLecon();
}
// ============================================
// CHARGEMENT DES DONNÉES (gère fichier unique OU plusieurs petits fichiers)
// ============================================
// Remplace l'ancien numéro (« Thématique 3 : ... ») par « Chapitre N : ... »
// selon la position du chapitre dans la liste.
function numeroterChapitres(composantes) {
  composantes.forEach((comp, index) => {
    if (!comp || comp.erreurChargement) return;
    const sansNumero = String(comp.titre || '')
      .replace(/^\s*(?:Thématique|Thematique|Chapitre|Composante)\s*\d+\s*[:.\-–—]?\s*/i, '');
    comp.titre = 'Chapitre ' + (index + 1) + ' : ' + sansNumero;
  });
}
async function recupererDonneesMatiere(classeId, matiere) {
  const cleCache = classeId + '-' + matiere.id;
  if (etat.cache[cleCache]) return etat.cache[cleCache];
  try {
    let composantes = [];
    if (matiere.fichiers && Array.isArray(matiere.fichiers)) {
      const resultats = await Promise.allSettled(
        matiere.fichiers.map(url => fetch(url).then(r => r.json()))
      );
      resultats.forEach((resultat, index) => {
        if (resultat.status === 'fulfilled') {
          composantes.push(resultat.value);
        } else {
          console.error('Erreur de chargement du fichier :', matiere.fichiers[index], resultat.reason);
          composantes.push({
            id: 'erreur-' + index,
            titre: 'Chapitre indisponible',
            premium: false,
            erreurChargement: true,
            lecons: []
          });
        }
      });
    } else if (matiere.fichier) {
      const reponse = await fetch(matiere.fichier);
      const data = await reponse.json();
      composantes = data.composantes || [];
    } else {
      return null;
    }
    if (MATIERES_NUMEROTEES.indexOf(matiere.id) !== -1) {
      numeroterChapitres(composantes);
    }
    const data = { matiere: matiere.nom, composantes };
    etat.cache[cleCache] = data;
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
async function chargerDonneesMatiere(matiere) {
  const data = await recupererDonneesMatiere(etat.classe, matiere);
  if (!data) {
    alert("Impossible de charger cette matière pour le moment.");
    return false;
  }
  etat.matiere = matiere;
  etat.dataMatiere = data;
  return true;
}
async function selectionnerMatiere(matiere) {
  const ok = await chargerDonneesMatiere(matiere);
  if (ok) ouvrirMatiere();
}
function ouvrirMatiere() {
  etat.niveau = 'composantes';
  afficherVue('matiere');
  majBoutonRetour(true);
  afficherListeComposantes();
}
// ============================================
// NIVEAU 3 — LISTE DES COMPOSANTES
// ============================================
function estChapitreVerrouille(matiere, comp) {
  if (!matiere || !comp || comp.erreurChargement) return false;
  if (estMatiereDebloquee(etat.classe, matiere.code)) return false;
  const position = CHAPITRE_PREMIUM[matiere.id];
  if (!position) return false;
  const index = etat.dataMatiere.composantes.indexOf(comp);
  return index === position - 1;
}
function afficherListeComposantes() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom;
  const conteneur = $('matiere-contenu');
  const rechercheActive = !estModeExamenActif();
  conteneur.innerHTML =
    (rechercheActive ? htmlBarreRecherche() + '<div id="resultats-recherche"></div>' : '') +
    '<div class="liste-cartes" id="liste-composantes"></div>';
  const liste = $('liste-composantes');
  if (rechercheActive) {
    brancherRecherche($('input-recherche'), $('resultats-recherche'), liste);
  }
  etat.dataMatiere.composantes.forEach(comp => {
    if (comp.erreurChargement) {
      const carte = document.createElement('div');
      carte.className = 'carte-liste verrouille';
      carte.innerHTML = `
        <div class="carte-liste-titre">⚠️ ${comp.titre}</div>
        <div class="carte-liste-souscription">Ce chapitre n'a pas pu être chargé. Réessaie plus tard.</div>
      `;
      liste.appendChild(carte);
      return;
    }
    const verrouille = estChapitreVerrouille(etat.matiere, comp);
    const pourcentage = calculerPourcentageComposante(etat.classe, etat.matiere.id, comp);
    const carte = document.createElement('div');
    carte.className = 'carte-liste' + (verrouille ? ' verrouille' : '');
    carte.innerHTML = `
      <div class="carte-liste-titre">${comp.titre} ${verrouille ? '🔒' : ''}</div>
      ${!verrouille ? `
        <div class="mini-progression">
          <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${pourcentage}%"></div></div>
          <span class="mini-progression-texte">${pourcentage}%</span>
        </div>` : '<div class="carte-liste-souscription">Chapitre premium — à débloquer</div>'}
    `;
    carte.addEventListener('click', () => {
      if (verrouille) {
        afficherPaywall(etat.matiere, 'composantes', comp.titre);
      } else {
        selectionnerComposante(comp);
      }
    });
    liste.appendChild(carte);
  });
  majBoutonsFlottants();
}
function selectionnerComposante(comp) {
  if (estChapitreVerrouille(etat.matiere, comp)) {
    afficherPaywall(etat.matiere, 'composantes', comp.titre);
    return;
  }
  etat.composante = comp;
  etat.niveau = 'lecons';
  afficherListeLecons();
}
// ============================================
// NIVEAU 4 — LISTE DES LEÇONS
// ============================================
function afficherListeLecons() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › ' + etat.composante.titre;
  const conteneur = $('matiere-contenu');
  const examenActif = estModeExamenActif();
  conteneur.innerHTML =
    (examenActif ? '<p class="texte-vide">🔒 Mode Examen actif — les leçons sont désactivées.</p>' : '') +
    '<div class="liste-cartes" id="liste-lecons"></div>';
  const liste = $('liste-lecons');
  etat.composante.lecons.forEach(lecon => {
    const vue = estLeconVue(etat.classe, etat.matiere.id, lecon.id);
    const carte = document.createElement('div');
    carte.className = 'carte-liste' + (examenActif ? ' verrouille' : '');
    carte.innerHTML = `<div class="carte-liste-titre">${lecon.titre} ${examenActif ? '🔒' : (vue ? '✅' : '')}</div>`;
    carte.addEventListener('click', () => selectionnerLecon(lecon));
    liste.appendChild(carte);
  });
  majBoutonsFlottants();
}
function selectionnerLecon(lecon) {
  etat.lecon = lecon;
  etat.niveau = 'contenu';
  if (estModeExamenActif()) {
    afficherVue('matiere');
    majBoutonRetour(true);
    const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
    $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › ' + etat.composante.titre + ' › ' + lecon.titre;
    $('matiere-contenu').innerHTML = htmlLeconVerrouillee();
    majBoutonsFlottants();
    return;
  }
  marquerLeconVue(etat.classe, etat.matiere.id, lecon.id);
  sauvegarderDernierePosition();
  afficherContenuLecon();
}
// ============================================
// NIVEAU 5 — CONTENU D'UNE LEÇON
// ============================================
function afficherContenuLecon() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › ' + etat.composante.titre + ' › ' + etat.lecon.titre;
  const conteneur = $('matiere-contenu');
  let html = `<h2 class="titre-lecon">${etat.lecon.titre}</h2>`;
  (etat.lecon.blocs || []).forEach(bloc => {
    try {
      html += renderBloc(bloc);
    } catch (e) {
      html += `<div class="bloc-erreur">⚠️ Un élément de cette leçon n'a pas pu s'afficher.</div>`;
      console.error('Erreur de rendu de bloc :', e, bloc);
    }
  });
  if (etat.lecon.lexique && etat.lecon.lexique.length > 0) {
    html += renderLexique(etat.lecon.lexique);
  }
  conteneur.innerHTML = html;
  majBoutonsFlottants();
}
function renderBloc(bloc) {
  if (bloc.type === 'schema') {
    return `
      <div class="bloc-schema">
        ${bloc.titre ? `<div class="bloc-schema-titre">${bloc.titre}</div>` : ''}
        <div class="schema-svg">${bloc.svg}</div>
        ${bloc.legende ? `<div class="bloc-schema-legende">${bloc.legende}</div>` : ''}
      </div>`;
  }
  if (bloc.type === 'tableau') {
    return renderTableau(bloc);
  }
  if (bloc.type === 'exercice') {
    return renderExercice(bloc);
  }
  const info = LABELS_TYPE[bloc.type];
  if (info) {
    return `
      <div class="bloc-pedagogique ${info.classe}">
        <div class="bloc-label">${info.label}${bloc.titre ? ' — ' + bloc.titre : ''}</div>
        <div class="bloc-texte">${bloc.texte}</div>
      </div>`;
  }
  return `<p class="bloc-texte-simple">${bloc.texte || ''}</p>`;
}
function ajusterSchemasHtml(texte) {
  if (!texte) return '';
  return String(texte)
    .replace(/\n*(<div style='text-align:center;margin:8px 0'>)/g, '$1')
    .replace(/(<\/svg><\/div><\/div>)\n*/g, '$1')
    .replace(/display:inline-block;/g, 'display:inline-block;max-width:100%;box-sizing:border-box;')
    .replace(/<svg /g, "<svg style='max-width:100%;height:auto;display:block;margin:0 auto' ");
}
function renderExercice(bloc) {
  return `
    <div class="bloc-exercice">
      <div class="bloc-exercice-label">📝 Exercice</div>
      <div class="bloc-exercice-enonce bloc-texte">${ajusterSchemasHtml(bloc.enonce)}</div>
      <details class="exercice-solution">
        <summary>Voir la correction</summary>
        <div class="bloc-exercice-corrige bloc-texte">${ajusterSchemasHtml(bloc.solution)}</div>
      </details>
    </div>`;
}
function renderTableau(bloc) {
  let entetes = bloc.entetes;
  let lignes = bloc.lignes || [];
  if (lignes.length > 0 && !Array.isArray(lignes[0])) {
    if (!entetes) {
      entetes = Object.keys(lignes[0]).map(cle =>
        cle.charAt(0).toUpperCase() + cle.slice(1)
      );
    }
    const cles = Object.keys(lignes[0]);
    lignes = lignes.map(obj => cles.map(cle => obj[cle]));
  }
  if (!entetes || !lignes.length) {
    return `<div class="bloc-erreur">⚠️ Tableau incomplet.</div>`;
  }
  let html = `<div class="bloc-tableau">`;
  if (bloc.titre) html += `<div class="bloc-tableau-titre">${bloc.titre}</div>`;
  html += `<table class="tableau-donnees"><thead><tr>`;
  entetes.forEach(e => html += `<th>${e}</th>`);
  html += `</tr></thead><tbody>`;
  lignes.forEach(ligne => {
    html += '<tr>';
    ligne.forEach(cell => html += `<td>${cell}</td>`);
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  return html;
}
function renderLexique(lexique) {
  let html = `<details class="lexique"><summary>📖 Mots difficiles</summary><ul class="lexique-liste">`;
  lexique.forEach(item => {
    html += `<li><strong>${item.terme}</strong> — ${item.traduction || item.definition || ''}</li>`;
  });
  html += '</ul></details>';
  return html;
}
// ============================================
// RECHERCHE DANS LA MATIÈRE EN COURS
// (hors ligne, sans accents, tolère les petites fautes)
// ============================================
const RECHERCHE_MIN = 2;
const RECHERCHE_MAX_RESULTATS = 30;
const STYLE_MARQUE = 'background:#fde047;color:#111;border-radius:2px;padding:0 1px;';
const STYLE_CHAMP_RECHERCHE = 'width:100%;box-sizing:border-box;padding:12px 14px;font-size:16px;border:1px solid #94a3b8;border-radius:10px;background:#fff;color:#111;margin-bottom:12px;font-family:inherit;text-transform:none;letter-spacing:normal;';
function echapperHtml(t) {
  return String(t == null ? '' : t)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
// Normalise caractère par caractère : la longueur du texte ne change jamais
// (utile pour surligner au bon endroit dans le texte d'origine).
function normaliserTexte(t) {
  const texte = String(t == null ? '' : t);
  let s = '';
  for (let i = 0; i < texte.length; i++) {
    const c = texte.charAt(i);
    if (c === '’' || c === '‘' || c === '`') { s += "'"; continue; }
    if (c === 'œ' || c === 'Œ') { s += 'o'; continue; }
    if (c === 'æ' || c === 'Æ') { s += 'a'; continue; }
    if (c === '−' || c === '–' || c === '—') { s += '-'; continue; }
    if (c === '\u00a0' || c === '\u202f') { s += ' '; continue; }
    const r = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    s += r.length ? r.charAt(0) : ' ';
  }
  return s;
}
function texteBrutRecherche(html) {
  return String(html == null ? '' : html)
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[a-zA-Z][^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}
function ajouterSegments(valeur, segs) {
  if (valeur === null || valeur === undefined || valeur === '') return;
  texteBrutRecherche(valeur).split('\n').forEach(ligne => {
    const t = ligne.replace(/\s+/g, ' ').trim();
    if (t.length >= 2) segs.push({ txt: t, norm: normaliserTexte(t) });
  });
}
function extraireSegmentsLecon(lecon) {
  const segs = [];
  (lecon.blocs || []).forEach(b => {
    ajouterSegments(b.titre, segs);
    ajouterSegments(b.texte, segs);
    ajouterSegments(b.legende, segs);
    ajouterSegments(b.enonce, segs);
    ajouterSegments(b.solution, segs);
    if (b.type === 'tableau') {
      (b.entetes || []).forEach(e => ajouterSegments(e, segs));
      (b.lignes || []).forEach(ligne => {
        if (Array.isArray(ligne)) {
          ligne.forEach(cell => ajouterSegments(cell, segs));
        } else if (ligne && typeof ligne === 'object') {
          Object.keys(ligne).forEach(k => ajouterSegments(ligne[k], segs));
        }
      });
    }
  });
  (lecon.lexique || []).forEach(item => {
    ajouterSegments((item.terme || '') + ' — ' + (item.traduction || item.definition || ''), segs);
  });
  return segs;
}
function obtenirIndexRecherche() {
  const cle = 'idx-' + etat.classe + '-' + etat.matiere.id;
  if (etat.cache[cle]) return etat.cache[cle];
  const index = [];
  etat.dataMatiere.composantes.forEach(comp => {
    if (comp.erreurChargement) return;
    (comp.lecons || []).forEach(lecon => {
      const segs = extraireSegmentsLecon(lecon);
      const titreNorm = normaliserTexte(lecon.titre || '');
      const tout = titreNorm + ' ' + segs.map(s => s.norm).join(' ');
      const ensemble = {};
      tout.split(/[^a-z0-9]+/).forEach(m => { if (m.length >= 3) ensemble[m] = true; });
      index.push({
        comp: comp,
        lecon: lecon,
        titreNorm: titreNorm,
        segs: segs,
        tout: tout,
        mots: Object.keys(ensemble)
      });
    });
  });
  etat.cache[cle] = index;
  return index;
}
function distanceEdition(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prec = [];
  for (let j = 0; j <= b.length; j++) prec[j] = j;
  for (let i = 1; i <= a.length; i++) {
    const cour = [i];
    let minLigne = i;
    for (let j = 1; j <= b.length; j++) {
      const cout = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
      const v = Math.min(prec[j] + 1, cour[j - 1] + 1, prec[j - 1] + cout);
      cour[j] = v;
      if (v < minLigne) minLigne = v;
    }
    if (minLigne > max) return max + 1;
    prec = cour;
  }
  return prec[b.length];
}
function formesDuJeton(jeton, ent) {
  if (ent.tout.indexOf(jeton) !== -1) return { formes: [jeton], approx: false };
  if (jeton.length < 5 || !/^[a-z]+$/.test(jeton)) return null;
  const max = jeton.length >= 8 ? 2 : 1;
  const formes = [];
  for (let i = 0; i < ent.mots.length; i++) {
    if (distanceEdition(jeton, ent.mots[i], max) <= max) {
      formes.push(ent.mots[i]);
      if (formes.length >= 3) break;
    }
  }
  return formes.length ? { formes: formes, approx: true } : null;
}
function chercherDansMatiere(requete) {
  const jetons = normaliserTexte(requete).split(/\s+/)
    .filter((j, i, tab) => j.length > 0 && tab.indexOf(j) === i);
  if (!jetons.length) return [];
  const index = obtenirIndexRecherche();
  const resultats = [];
  const verrousVus = {};
  index.forEach((ent, ordre) => {
    if (estChapitreVerrouille(etat.matiere, ent.comp)) {
      const titres = normaliserTexte(ent.comp.titre || '') + ' ' + ent.titreNorm;
      const tous = jetons.every(j => titres.indexOf(j) !== -1);
      if (tous && !verrousVus[ent.comp.id]) {
        verrousVus[ent.comp.id] = true;
        resultats.push({ verrouille: true, comp: ent.comp, score: 5, ordre: ordre });
      }
      return;
    }
    let score = 0;
    let toutesFormes = [];
    for (let k = 0; k < jetons.length; k++) {
      const r = formesDuJeton(jetons[k], ent);
      if (!r) return;
      toutesFormes = toutesFormes.concat(r.formes);
      if (ent.titreNorm.indexOf(jetons[k]) !== -1) score += 10;
      else if (r.approx) score += 1;
      else score += 2;
    }
    toutesFormes = toutesFormes.filter((f, i, tab) => tab.indexOf(f) === i);
    let meilleur = null;
    let meilleurN = 0;
    let nbSegs = 0;
    ent.segs.forEach(s => {
      let n = 0;
      toutesFormes.forEach(f => { if (s.norm.indexOf(f) !== -1) n++; });
      if (n > 0) {
        nbSegs++;
        if (n > meilleurN) { meilleurN = n; meilleur = s; }
      }
    });
    score += Math.min(nbSegs, 5) + meilleurN;
    resultats.push({
      verrouille: false,
      comp: ent.comp,
      lecon: ent.lecon,
      score: score,
      ordre: ordre,
      seg: meilleur || ent.segs[0] || null,
      formes: toutesFormes
    });
  });
  resultats.sort((a, b) => (b.score - a.score) || (a.ordre - b.ordre));
  return resultats;
}
function extraitSurligne(seg, formes) {
  if (!seg) return '';
  const txt = seg.txt;
  const norm = seg.norm;
  let pos = -1;
  formes.forEach(f => {
    const p = norm.indexOf(f);
    if (p !== -1 && (pos === -1 || p < pos)) pos = p;
  });
  const base = pos < 0 ? 0 : pos;
  const debut = Math.max(0, base - 40);
  const fin = Math.min(txt.length, base + 100);
  let plages = [];
  formes.forEach(f => {
    let p = norm.indexOf(f, debut);
    while (p !== -1 && p < fin) {
      plages.push([p, Math.min(p + f.length, fin)]);
      p = norm.indexOf(f, p + f.length);
    }
  });
  plages.sort((a, b) => a[0] - b[0]);
  const fusion = [];
  plages.forEach(pl => {
    const dernier = fusion[fusion.length - 1];
    if (dernier && pl[0] <= dernier[1]) {
      if (pl[1] > dernier[1]) dernier[1] = pl[1];
    } else {
      fusion.push([pl[0], pl[1]]);
    }
  });
  let html = debut > 0 ? '…' : '';
  let curseur = debut;
  fusion.forEach(pl => {
    html += echapperHtml(txt.slice(curseur, pl[0]));
    html += '<mark style="' + STYLE_MARQUE + '">' + echapperHtml(txt.slice(pl[0], pl[1])) + '</mark>';
    curseur = pl[1];
  });
  html += echapperHtml(txt.slice(curseur, fin));
  if (fin < txt.length) html += '…';
  return html;
}
function rendreResultatsRecherche(zone, requete) {
  zone.innerHTML = '';
  if (estModeExamenActif()) return;
  const tous = chercherDansMatiere(requete);
  const info = document.createElement('p');
  info.className = 'texte-vide';
  if (!tous.length) {
    info.textContent = 'Aucun résultat. Essaie un autre mot.';
    zone.appendChild(info);
    return;
  }
  const affiches = tous.slice(0, RECHERCHE_MAX_RESULTATS);
  info.textContent = tous.length > affiches.length
    ? tous.length + ' résultats (les ' + affiches.length + ' premiers)'
    : tous.length + (tous.length > 1 ? ' résultats' : ' résultat');
  zone.appendChild(info);
  const liste = document.createElement('div');
  liste.className = 'liste-cartes';
  affiches.forEach(r => {
    const carte = document.createElement('div');
    if (r.verrouille) {
      carte.className = 'carte-liste verrouille';
      carte.innerHTML = `
        <div class="carte-liste-titre">${echapperHtml(r.comp.titre)} 🔒</div>
        <div class="carte-liste-souscription">Chapitre premium — à débloquer</div>`;
      carte.addEventListener('click', () => {
        afficherPaywall(etat.matiere, 'composantes', r.comp.titre);
      });
    } else {
      carte.className = 'carte-liste';
      const extrait = extraitSurligne(r.seg, r.formes);
      carte.innerHTML = `
        <div class="carte-liste-titre">${echapperHtml(r.lecon.titre)}</div>
        <div style="font-size:12px;opacity:0.7;margin-top:2px;">${echapperHtml(r.comp.titre)}</div>
        ${extrait ? '<div style="font-size:14px;margin-top:6px;line-height:1.4;">' + extrait + '</div>' : ''}`;
      carte.addEventListener('click', () => {
        etat.composante = r.comp;
        selectionnerLecon(r.lecon);
        window.scrollTo(0, 0);
      });
    }
    liste.appendChild(carte);
  });
  zone.appendChild(liste);
}
function htmlBarreRecherche() {
  return `<input type="search" id="input-recherche" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Rechercher dans ${echapperHtml(etat.matiere.nom)}" style="${STYLE_CHAMP_RECHERCHE}">`;
}
function brancherRecherche(input, zone, liste) {
  if (!input || !zone) return;
  let minuteur = null;
  const lancer = () => {
    const actif = input.value.trim().length >= RECHERCHE_MIN;
    if (actif) {
      rendreResultatsRecherche(zone, input.value);
    } else {
      zone.innerHTML = '';
    }
    if (liste) liste.style.display = actif ? 'none' : '';
  };
  input.addEventListener('input', () => {
    clearTimeout(minuteur);
    minuteur = setTimeout(lancer, 200);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      clearTimeout(minuteur);
      lancer();
      input.blur();
    }
  });
}
// ============================================
// CHAPITRE "EXERCICES" — SUJETS ET CORRIGÉS (indépendant des leçons)
// ============================================
const NIVEAUX_EXO_PAYANTS = {
  '🟠': 'Niveau Difficile',
  '🔴': 'Niveau Expert (BEPC)'
};
function trouverMatiereParId(classeId, matiereId) {
  return (MATIERES_PAR_CLASSE[classeId] || []).find(m => m.id === matiereId) || null;
}
function niveauPayantExercice(ex) {
  const debut = String(ex.enonce || '').trim().slice(0, 2);
  return NIVEAUX_EXO_PAYANTS[debut] ? debut : null;
}
// Gère un fichier unique (fichier) OU plusieurs fichiers (fichiers) réunis en une seule liste.
// Si « ordre » est donné, les chapitres sont rangés dans cet ordre.
async function recupererDonneesExercices(classeId, matiere) {
  const cleCache = 'exo-' + classeId + '-' + matiere.id;
  if (etat.cache[cleCache]) return etat.cache[cleCache];
  try {
    let data;
    let toutCharge = true;
    if (matiere.fichiers && Array.isArray(matiere.fichiers)) {
      const resultats = await Promise.allSettled(
        matiere.fichiers.map(url => fetch(url).then(r => r.json()))
      );
      let chapitres = [];
      resultats.forEach((resultat, index) => {
        if (resultat.status === 'fulfilled' && resultat.value && Array.isArray(resultat.value.chapitres)) {
          chapitres = chapitres.concat(resultat.value.chapitres);
        } else {
          toutCharge = false;
          console.error('Erreur de chargement des exercices :', matiere.fichiers[index], resultat.reason);
        }
      });
      if (!chapitres.length) return null;
      if (Array.isArray(matiere.ordre)) {
        const rang = (id) => {
          const i = matiere.ordre.indexOf(id);
          return i === -1 ? 999 : i;
        };
        chapitres = chapitres
          .map((c, i) => ({ c: c, i: i }))
          .sort((a, b) => (rang(a.c.id) - rang(b.c.id)) || (a.i - b.i))
          .map(x => x.c);
      }
      data = { matiere: matiere.nom, chapitres: chapitres };
    } else {
      const reponse = await fetch(matiere.fichier);
      data = await reponse.json();
    }
    if (toutCharge) etat.cache[cleCache] = data;
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
function allerExercices() {
  etat.niveau = 'exo-matieres';
  afficherVue('exercices');
  majBoutonRetour(false);
  renderExoMatieres();
}
function renderExoMatieres() {
  const grille = $('grille-exo-matieres');
  grille.innerHTML = '';
  const matieres = EXERCICES_PAR_CLASSE[etat.classe] || [];
  if (matieres.length === 0) {
    grille.innerHTML = '<p class="texte-vide">Aucun exercice disponible pour le moment.</p>';
    return;
  }
  matieres.forEach(m => {
    const carte = document.createElement('div');
    carte.className = 'carte-matiere' + (m.disponible ? '' : ' indisponible');
    carte.innerHTML = `
      <div class="carte-matiere-icone">${m.icone}</div>
      <div class="carte-matiere-nom">${m.nom}</div>
      <div class="carte-matiere-statut">${m.disponible ? '' : 'Bientôt disponible'}</div>
    `;
    if (m.disponible) {
      carte.addEventListener('click', () => selectionnerExoMatiere(m));
    }
    grille.appendChild(carte);
  });
}
async function selectionnerExoMatiere(matiere) {
  const data = await recupererDonneesExercices(etat.classe, matiere);
  if (!data) {
    alert("Impossible de charger les exercices pour le moment.");
    return;
  }
  etat.exoMatiere = matiere;
  etat.exoData = data;
  etat.niveau = 'exo-chapitres';
  afficherVue('matiere');
  majBoutonRetour(true);
  afficherExoChapitres();
}
function afficherExoChapitres() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › Exercices › ' + etat.exoMatiere.nom;
  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = '<div class="liste-cartes" id="liste-exo-chapitres"></div>';
  const liste = $('liste-exo-chapitres');
  (etat.exoData.chapitres || []).forEach(chap => {
    const carte = document.createElement('div');
    carte.className = 'carte-liste';
    carte.innerHTML = `<div class="carte-liste-titre">${chap.titre}</div>`;
    carte.addEventListener('click', () => selectionnerExoChapitre(chap));
    liste.appendChild(carte);
  });
  majBoutonsFlottants();
}
function selectionnerExoChapitre(chap) {
  etat.exoChapitre = chap;
  etat.niveau = 'exo-liste';
  afficherExoListe();
}
function afficherExoListe() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › Exercices › ' + etat.exoMatiere.nom + ' › ' + etat.exoChapitre.titre;
  const conteneur = $('matiere-contenu');
  const matiereCours = trouverMatiereParId(etat.classe, etat.exoMatiere.id);
  const debloque = !matiereCours || estMatiereDebloquee(etat.classe, matiereCours.code);
  let html = `<h2 class="titre-lecon">${etat.exoChapitre.titre}</h2>`;
  (etat.exoChapitre.exercices || []).forEach((ex, index) => {
    const niveau = niveauPayantExercice(ex);
    if (niveau && !debloque) {
      html += `
        <div class="carte-liste verrouille exo-verrouille" style="margin-bottom:12px;cursor:pointer;">
          <div class="carte-liste-titre">Exercice ${index + 1} — ${niveau} ${NIVEAUX_EXO_PAYANTS[niveau]} 🔒</div>
          <div class="carte-liste-souscription">Exercice premium — à débloquer</div>
        </div>`;
    } else {
      html += renderExercice({
        enonce: `Exercice ${index + 1}\n\n` + ex.enonce,
        solution: ex.solution
      });
    }
  });
  conteneur.innerHTML = html;
  conteneur.querySelectorAll('.exo-verrouille').forEach(el => {
    el.addEventListener('click', () => {
      afficherPaywall(etat.exoMatiere, 'exo-liste', etat.exoChapitre.titre);
    });
  });
  majBoutonsFlottants();
}
// ============================================
// IDENTIFIANT DU TÉLÉPHONE
// ============================================
function idAppareilValide(id) {
  if (!id || id.length !== 6) return false;
  for (let i = 0; i < id.length; i++) {
    if (ALPHABET_CODE.indexOf(id.charAt(i)) === -1) return false;
  }
  return true;
}
function genererIdAppareil() {
  const tirage = new Uint32Array(6);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(tirage);
  } else {
    for (let i = 0; i < 6; i++) tirage[i] = Math.floor(Math.random() * 4294967296);
  }
  let id = '';
  for (let i = 0; i < 6; i++) {
    id += ALPHABET_CODE.charAt(tirage[i] % ALPHABET_CODE.length);
  }
  return id;
}
function obtenirIdAppareil() {
  let id = localStorage.getItem('guide-appareil-id');
  if (!idAppareilValide(id)) {
    id = genererIdAppareil();
    localStorage.setItem('guide-appareil-id', id);
  }
  return id;
}
function copierTexteSecours(texte) {
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
function copierTexte(texte, bouton) {
  const confirmer = (ok) => {
    if (!bouton) return;
    const ancien = bouton.getAttribute('data-libelle') || bouton.textContent;
    bouton.setAttribute('data-libelle', ancien);
    bouton.textContent = ok ? '✅ Copié' : '❌ Copie impossible';
    setTimeout(() => { bouton.textContent = ancien; }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texte)
      .then(() => confirmer(true))
      .catch(() => confirmer(copierTexteSecours(texte)));
  } else {
    confirmer(copierTexteSecours(texte));
  }
}
// ============================================
// PAYWALL — DÉBLOCAGE MOBILE MONEY (code lié au téléphone)
// ============================================
function afficherPaywall(matiere, origine, titreElement) {
  const mat = (matiere && matiere.code) ? matiere : (trouverMatiereParId(etat.classe, matiere.id) || matiere);
  etat.paywallMatiere = mat;
  etat.paywallOrigine = origine || 'composantes';
  etat.niveau = 'paywall';
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + mat.nom + ' › Débloquer';
  const idAppareil = obtenirIdAppareil();
  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = `
    <div class="paywall">
      <div class="paywall-titre">Accès premium (${mat.nom})</div>
      <div class="paywall-prix">2000 Ar</div>
      <div class="etape">
        <div class="etape-numero">1</div>
        <div class="etape-texte">Identifiant de ce téléphone</div>
      </div>
      <div class="paywall-prix" id="texte-id-appareil" style="letter-spacing:4px;">${idAppareil}</div>
      <button id="btn-copier-id" class="btn-valider">Copier mon identifiant</button>
      <div class="etape">
        <div class="etape-numero">2</div>
        <div class="etape-texte">Envoie 2000 Ar à l'un de ces numéros (nom : Tiana Stephan) :</div>
      </div>
      <div class="mobile-money-liste">
        <div class="mm-item"><span class="mm-operateur">Mvola</span><span class="mm-numero">034 39 949 07</span></div>
        <div class="mm-item"><span class="mm-operateur">Airtel Money</span><span class="mm-numero">033 16 443 49</span></div>
        <div class="mm-item"><span class="mm-operateur">Orange Money</span><span class="mm-numero">032 24 159 98</span></div>
      </div>
      <div class="etape">
        <div class="etape-numero">3</div>
        <div class="etape-texte">Envoie la capture, ton identifiant et la matière sur Tsiky (<a href="https://tomainazo2580.github.io/tsiky" target="_blank" rel="noopener" style="word-break:break-all;">https://tomainazo2580.github.io/tsiky</a>), sur WhatsApp au 034 39 949 07, ou par SMS.</div>
      </div>
      <div class="etape">
        <div class="etape-numero">4</div>
        <div class="etape-texte">Colle ton code ci-dessous. Il ne fonctionne que sur ce téléphone.</div>
      </div>
      <input type="text" id="input-code" class="input-code" placeholder="GUIDE-XXXXXX-MATH-XXXXXX" maxlength="40">
      <button id="btn-valider-code" class="btn-valider">Valider le code</button>
      <div id="message-code" class="message-code"></div>
      <p class="paywall-texte" style="margin-top:14px;text-align:left;color:#d32f2f;"><strong>Important :</strong> ne supprime pas « Cookies et données des sites » dans Chrome : tu perdrais ton déblocage.</p>
    </div>
  `;
  $('btn-copier-id').addEventListener('click', () => copierTexte(idAppareil, $('btn-copier-id')));
  $('btn-valider-code').addEventListener('click', traiterValidationCode);
  majBoutonsFlottants();
}
function minutesBlocageCode() {
  try {
    const e = JSON.parse(localStorage.getItem('guide-essais-code') || 'null');
    if (e && e.jusqua && Date.now() < e.jusqua) {
      return Math.ceil((e.jusqua - Date.now()) / 60000);
    }
  } catch (err) {}
  return 0;
}
function noterEchecCode() {
  let e = { n: 0, jusqua: 0 };
  try {
    e = JSON.parse(localStorage.getItem('guide-essais-code') || 'null') || e;
  } catch (err) {}
  if (e.jusqua && Date.now() >= e.jusqua) e = { n: 0, jusqua: 0 };
  e.n = (e.n || 0) + 1;
  if (e.n >= 5) {
    e.jusqua = Date.now() + 10 * 60 * 1000;
    e.n = 0;
  }
  localStorage.setItem('guide-essais-code', JSON.stringify(e));
}
function reinitialiserEchecsCode() {
  localStorage.removeItem('guide-essais-code');
}
function traiterValidationCode() {
  const messageEl = $('message-code');
  const minutes = minutesBlocageCode();
  if (minutes > 0) {
    messageEl.textContent = '⏳ Trop d\'essais. Réessaie dans ' + minutes + ' minute(s).';
    messageEl.className = 'message-code erreur';
    return;
  }
  const resultat = analyserCode($('input-code').value, etat.classe);
  if (!resultat) {
    noterEchecCode();
    messageEl.textContent = '❌ Code invalide pour ce téléphone. Vérifie et réessaie.';
    messageEl.className = 'message-code erreur';
    return;
  }
  reinitialiserEchecsCode();
  enregistrerDeblocage(etat.classe, resultat.matiere, resultat.code);
  const matiereDebloquee = trouverMatiereParCode(etat.classe, resultat.matiere);
  const nom = resultat.matiere === 'PACK' ? 'Pack complet' : (matiereDebloquee ? matiereDebloquee.nom : resultat.matiere);
  messageEl.textContent = '✅ Code valide ! ' + nom + ' débloqué.';
  messageEl.className = 'message-code succes';
  if (estMatiereDebloquee(etat.classe, etat.paywallMatiere.code)) {
    setTimeout(() => {
      if (etat.paywallOrigine === 'exo-liste') {
        etat.niveau = 'exo-liste';
        afficherExoListe();
      } else {
        etat.niveau = 'composantes';
        afficherListeComposantes();
      }
    }, 1500);
  }
}
function trouverMatiereParCode(classeId, code) {
  return (MATIERES_PAR_CLASSE[classeId] || []).find(m => m.code === code) || null;
}
function calculerChecksum(classeId, idAppareil, matiereCode) {
  const texte = classeId.toUpperCase() + '|' + idAppareil + '|' + matiereCode + '|' + SEL_SECRET;
  let h1 = 0x811c9dc5;
  let h2 = 5381;
  for (let i = 0; i < texte.length; i++) {
    const c = texte.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619);
    h2 = (Math.imul(h2, 33) + c * (i + 1)) | 0;
  }
  let n = ((h1 >>> 0) ^ (h2 >>> 0)) >>> 0;
  const base = ALPHABET_CODE.length;
  let sortie = '';
  for (let k = 0; k < 6; k++) {
    sortie += ALPHABET_CODE.charAt(n % base);
    n = Math.floor(n / base);
  }
  return sortie;
}
function analyserCode(saisie, classeId) {
  if (!saisie) return null;
  const propre = String(saisie).toUpperCase().replace(/[‐‑–—]/g, '-').replace(/\s+/g, '');
  const parties = propre.split('-');
  if (parties.length !== 4) return null;
  const prefixe = parties[0];
  const idCode = parties[1];
  const matiereCode = parties[2];
  const checksum = parties[3];
  if (prefixe !== 'GUIDE') return null;
  if (idCode !== obtenirIdAppareil()) return null;
  const autorisees = (MATIERES_PAYANTES[classeId] || []).concat(['PACK']);
  if (autorisees.indexOf(matiereCode) === -1) return null;
  if (checksum !== calculerChecksum(classeId, idCode, matiereCode)) return null;
  return { matiere: matiereCode, code: parties.join('-') };
}
function chargerDeblocages() {
  try {
    const brut = localStorage.getItem('guide-deblocages');
    const obj = brut ? JSON.parse(brut) : {};
    return (obj && typeof obj === 'object') ? obj : {};
  } catch (e) {
    return {};
  }
}
function sauvegarderDeblocages(deblocages) {
  localStorage.setItem('guide-deblocages', JSON.stringify(deblocages));
}
function cleDeblocage(classeId, matiereCode) {
  return classeId + '-' + matiereCode;
}
function enregistrerDeblocage(classeId, matiereCode, code) {
  const deblocages = chargerDeblocages();
  deblocages[cleDeblocage(classeId, matiereCode)] = code;
  sauvegarderDeblocages(deblocages);
}
function deblocageValide(classeId, matiereCode) {
  const stocke = chargerDeblocages()[cleDeblocage(classeId, matiereCode)];
  if (typeof stocke !== 'string') return false;
  const resultat = analyserCode(stocke, classeId);
  return !!resultat && resultat.matiere === matiereCode;
}
function estMatiereDebloquee(classeId, matiereCode) {
  if ((MATIERES_PAYANTES[classeId] || []).indexOf(matiereCode) === -1) return true;
  return deblocageValide(classeId, matiereCode) || deblocageValide(classeId, 'PACK');
}
// ============================================
// PROGRESSION
// ============================================
function chargerProgression() {
  const brut = localStorage.getItem('guide-progression');
  return brut ? JSON.parse(brut) : {};
}
function sauvegarderProgression(prog) {
  localStorage.setItem('guide-progression', JSON.stringify(prog));
}
function marquerLeconVue(classeId, matiereId, leconId) {
  const prog = chargerProgression();
  if (!prog[classeId]) prog[classeId] = {};
  if (!prog[classeId][matiereId]) prog[classeId][matiereId] = {};
  prog[classeId][matiereId][leconId] = true;
  sauvegarderProgression(prog);
}
function estLeconVue(classeId, matiereId, leconId) {
  const prog = chargerProgression();
  return !!(prog[classeId] && prog[classeId][matiereId] && prog[classeId][matiereId][leconId]);
}
function calculerPourcentageComposante(classeId, matiereId, composante) {
  const total = composante.lecons.length;
  if (total === 0) return 0;
  let vues = 0;
  composante.lecons.forEach(l => {
    if (estLeconVue(classeId, matiereId, l.id)) vues++;
  });
  return Math.round((vues / total) * 100);
}
function calculerPourcentageMatiere(classeId, matiereId, dataMatiere) {
  let total = 0;
  let vues = 0;
  dataMatiere.composantes.forEach(comp => {
    comp.lecons.forEach(l => {
      total++;
      if (estLeconVue(classeId, matiereId, l.id)) vues++;
    });
  });
  if (total === 0) return 0;
  return Math.round((vues / total) * 100);
}
// ============================================
// NOTES PERSONNELLES (texte libre, sauvegardé automatiquement)
// ============================================
const CLE_NOTES_PERSO = 'guide-notes-perso';
function chargerNotesPerso() {
  return localStorage.getItem(CLE_NOTES_PERSO) || '';
}
function sauvegarderNotesPerso(texte) {
  localStorage.setItem(CLE_NOTES_PERSO, texte);
}
function initNotesPerso() {
  const textarea = $('textarea-notes-perso');
  if (!textarea) return;
  textarea.value = chargerNotesPerso();
  const statut = $('statut-sauvegarde-notes');
  let timeoutId = null;
  textarea.addEventListener('input', () => {
    if (statut) {
      statut.textContent = '✍️ Écriture...';
      statut.className = 'statut-sauvegarde-notes';
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      sauvegarderNotesPerso(textarea.value);
      if (statut) {
        statut.textContent = '✅ Enregistré';
        statut.className = 'statut-sauvegarde-notes succes';
        setTimeout(() => {
          statut.textContent = '';
        }, 1500);
      }
    }, 600);
  });
}
// ============================================
// VUE "MES NOTES"
// ============================================
async function afficherNotes() {
  const conteneur = $('notes-contenu');
  conteneur.innerHTML = '<p class="texte-chargement">Chargement...</p>';
  let html = '';
  let auMoinsUne = false;
  for (const classeObj of CLASSES) {
    if (!classeObj.disponible) continue;
    const matieres = MATIERES_PAR_CLASSE[classeObj.id] || [];
    const matieresDisponibles = matieres.filter(m => m.disponible);
    if (matieresDisponibles.length === 0) continue;
    let blocClasse = `<h3 class="notes-classe-titre">${classeObj.nom}</h3>`;
    let auMoinsUneMatiere = false;
    for (const m of matieresDisponibles) {
      const data = await recupererDonneesMatiere(classeObj.id, m);
      if (!data) continue;
      const pourcentage = calculerPourcentageMatiere(classeObj.id, m.id, data);
      blocClasse += `
        <div class="notes-matiere">
          <div class="notes-matiere-nom">${m.icone} ${m.nom}</div>
          <div class="mini-progression">
            <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${pourcentage}%"></div></div>
            <span class="mini-progression-texte">${pourcentage}%</span>
          </div>
        </div>`;
      auMoinsUneMatiere = true;
      auMoinsUne = true;
    }
    if (auMoinsUneMatiere) html += blocClasse;
  }
  if (!auMoinsUne) {
    html = '<p class="texte-vide">Aucune matière disponible pour le moment.</p>';
  }
  conteneur.innerHTML = html;
}
// ============================================
// NAVIGATION — BOUTON RETOUR (utilisé par le rond flottant de gauche)
// ============================================
function gererRetour() {
  if (etat.niveau === 'composantes') {
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else if (etat.niveau === 'lecons') {
    etat.niveau = 'composantes';
    afficherListeComposantes();
  } else if (etat.niveau === 'contenu') {
    etat.niveau = 'lecons';
    afficherListeLecons();
  } else if (etat.niveau === 'paywall') {
    if (etat.paywallOrigine === 'exo-liste') {
      etat.niveau = 'exo-liste';
      afficherExoListe();
    } else {
      etat.niveau = 'composantes';
      afficherListeComposantes();
    }
  } else if (etat.niveau === 'exo-chapitres') {
    etat.niveau = 'exo-matieres';
    afficherVue('exercices');
    majBoutonRetour(false);
    renderExoMatieres();
  } else if (etat.niveau === 'exo-liste') {
    etat.niveau = 'exo-chapitres';
    afficherVue('matiere');
    majBoutonRetour(true);
    afficherExoChapitres();
  } else {
    allerAccueil();
  }
  window.scrollTo(0, 0);
}
// ============================================
// NAVIGATION BASSE
// ============================================
function allerAccueil() {
  if (etat.classe) {
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else {
    etat.niveau = 'classes';
    afficherVue('classes');
    majBoutonRetour(false);
  }
}
function allerNotes() {
  afficherVue('notes');
  majBoutonRetour(false);
  afficherNotes();
}
function afficherIdentifiantReglages() {
  const vue = $('view-parametres');
  if (!vue) return;
  let zone = $('zone-id-appareil');
  if (!zone) {
    zone = document.createElement('div');
    zone.id = 'zone-id-appareil';
    zone.className = 'paywall';
    vue.appendChild(zone);
  }
  const classeId = etat.classe || '3e';
  const idAppareil = obtenirIdAppareil();
  let lignes = '';
  (MATIERES_PAYANTES[classeId] || []).forEach(code => {
    const m = trouverMatiereParCode(classeId, code);
    if (!m) return;
    const ok = estMatiereDebloquee(classeId, code);
    lignes += '<div>' + m.nom + ' : ' + (ok ? 'débloquée' : 'verrouillée') + '</div>';
  });
  zone.innerHTML = `
    <div class="paywall-titre">Identifiant de ce téléphone</div>
    <div class="paywall-prix" style="letter-spacing:4px;">${idAppareil}</div>
    <button id="btn-copier-id-reglages" class="btn-valider">Copier mon identifiant</button>
    ${lignes ? '<p class="paywall-texte" style="margin-top:14px;text-align:left;">Matières premium :</p><div class="paywall-texte" style="text-align:left;">' + lignes + '</div>' : ''}
    <p class="paywall-texte" style="margin-top:14px;text-align:left;color:#d32f2f;"><strong>Important :</strong> ne supprime pas « Cookies et données des sites » dans Chrome : tu perdrais ton déblocage.</p>
  `;
  $('btn-copier-id-reglages').addEventListener('click', () => copierTexte(idAppareil, $('btn-copier-id-reglages')));
}
function allerParametres() {
  afficherVue('parametres');
  majBoutonRetour(false);
  const classeObj = CLASSES.find(c => c.id === etat.classe);
  $('texte-classe-actuelle').textContent = classeObj
    ? ('Classe actuelle : ' + classeObj.nom)
    : 'Aucune classe sélectionnée';
  afficherIdentifiantReglages();
}
function changerDeClasse() {
  if (confirm("Veux-tu changer de classe ? Tu devras choisir à nouveau ta classe au prochain écran.")) {
    localStorage.removeItem('guide-classe-choisie');
    etat.classe = null;
    renderClasses();
    afficherVue('classes');
    majBoutonRetour(false);
  }
}
// ============================================
// THÈME
// ============================================
function appliquerTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  $('btn-theme').textContent = theme === 'sombre' ? '☀️' : '🌙';
  localStorage.setItem('guide-theme', theme);
}
function basculerTheme() {
  const actuel = document.body.getAttribute('data-theme');
  appliquerTheme(actuel === 'sombre' ? 'clair' : 'sombre');
}
// ============================================
// INSTALLATION DE L'APP (bandeau personnalisé)
// ============================================
let deferredInstallPrompt = null;
const DELAI_REAPPARITION_JOURS = 7;
function estDejaInstallee() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function bandeauDoitSAfficher() {
  if (estDejaInstallee()) return false;
  const brut = localStorage.getItem('guide-install-dismiss');
  if (!brut) return true;
  const dateFermeture = parseInt(brut, 10);
  if (isNaN(dateFermeture)) return true;
  const delaiMs = DELAI_REAPPARITION_JOURS * 24 * 60 * 60 * 1000;
  return (Date.now() - dateFermeture) >= delaiMs;
}
function afficherBanniereInstall() {
  if (!bandeauDoitSAfficher()) return;
  $('banner-installer').hidden = false;
}
function cacherBanniereInstall() {
  $('banner-installer').hidden = true;
}
function initInstallation() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    afficherBanniereInstall();
  });
  $('btn-installer-app').addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    cacherBanniereInstall();
  });
  $('btn-fermer-installer').addEventListener('click', () => {
    localStorage.setItem('guide-install-dismiss', String(Date.now()));
    cacherBanniereInstall();
  });
  window.addEventListener('appinstalled', () => {
    localStorage.setItem('guide-install-dismiss', String(Date.now()));
    cacherBanniereInstall();
  });
}
// ============================================
// INITIALISATION
// ============================================
function initialiser() {
  obtenirIdAppareil();
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }
  const themeSauvegarde = localStorage.getItem('guide-theme') || 'clair';
  appliquerTheme(themeSauvegarde);
  const classeSauvegardee = localStorage.getItem('guide-classe-choisie');
  const classeValide = CLASSES.find(c => c.id === classeSauvegardee && c.disponible);
  if (classeValide) {
    etat.classe = classeValide.id;
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else {
    renderClasses();
    afficherVue('classes');
    majBoutonRetour(false);
  }
  $('btn-retour').addEventListener('click', gererRetour);
  $('btn-theme').addEventListener('click', basculerTheme);
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cible = btn.getAttribute('data-nav');
      if (cible === 'accueil') allerAccueil();
      if (cible === 'exercices') allerExercices();
      if (cible === 'notes') allerNotes();
      if (cible === 'parametres') allerParametres();
      setTimeout(majBoutonsFlottants, 60);
    });
  });
  $('btn-reset-progression').addEventListener('click', () => {
    if (confirm('Veux-tu vraiment réinitialiser toute ta progression ? Cette action est irréversible.')) {
      localStorage.removeItem('guide-progression');
      alert('Progression réinitialisée.');
    }
  });
  $('btn-changer-classe').addEventListener('click', changerDeClasse);
  initInstallation();
  initNotesPerso();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
}
document.addEventListener('DOMContentLoaded', initialiser);
