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
    { id: 'francais',           code: 'FRAN', nom: 'Français',           icone: '📖', disponible: false, fichier: './data/3e/francais.json' },
    { id: 'anglais',            code: 'ANGL', nom: 'Anglais',            icone: '🌍', disponible: true,  fichiers: [
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
    { id: 'svt',                code: 'SVT',  nom: 'SVT',                icone: '🔬', disponible: false, fichier: './data/3e/svt.json' },
    { id: 'sciences-physiques', code: 'SPHY', nom: 'Sciences Physiques', icone: '⚛️', disponible: false, fichier: './data/3e/sciences-physiques.json' },
    { id: 'histoire',           code: 'HIST', nom: 'Histoire',           icone: '🏛️', disponible: false, fichier: './data/3e/histoire.json' },
    { id: 'geographie',         code: 'GEOG', nom: 'Géographie',         icone: '🗺️', disponible: false, fichier: './data/3e/geographie.json' }
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
// ============================================
// EXERCICES — SUJETS ET CORRIGÉS (section indépendante, évolutive)
// ============================================
const EXERCICES_PAR_CLASSE = {
  '3e': [
    { id: 'mathematiques', nom: 'Mathématiques', icone: '📐', disponible: true,
      fichier: './data/3e/exercices/exercices-mathematiques.json' },
    { id: 'anglais', nom: 'Anglais', icone: '🌍', disponible: true,
      fichier: './data/3e/exercices/exercices-anglais.json' }
  ],
  'tle': []
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
  exoMatiere: null,
  exoData: null,
  exoChapitre: null,
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
  window.scrollTo(0, 0);
}
function majBoutonRetour(visible) {
  $('btn-retour').hidden = !visible;
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
      
