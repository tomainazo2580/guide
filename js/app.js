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
    { id: 'anglais',            code: 'ANGL', nom: 'Anglais',            icone: '🌍', disponible: false, fichier: './data/3e/anglais.json' },
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
      fichier: './data/3e/exercices/exercices-mathematiques.json' }
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
  const debloque = estMatiereDebloquee(etat.classe, matiere.code);
  afficherVue('matiere');
  majBoutonRetour(true);
  if (comp.premium && !debloque) {
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
function afficherListeComposantes() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom;
  const debloque = estMatiereDebloquee(etat.classe, etat.matiere.code);
  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = '<div class="liste-cartes" id="liste-composantes"></div>';
  const liste = $('liste-composantes');
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
    const verrouille = comp.premium && !debloque;
    const pourcentage = calculerPourcentageComposante(etat.classe, etat.matiere.id, comp);
    const carte = document.createElement('div');
    carte.className = 'carte-liste' + (verrouille ? ' verrouille' : '');
    carte.innerHTML = `
      <div class="carte-liste-titre">${comp.titre} ${verrouille ? '🔒' : ''}</div>
      ${!verrouille ? `
        <div class="mini-progression">
          <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${pourcentage}%"></div></div>
          <span class="mini-progression-texte">${pourcentage}%</span>
        </div>` : '<div class="carte-liste-souscription">Chapitre premium — 3000 Ar</div>'}
    `;
    carte.addEventListener('click', () => {
      if (verrouille) {
        afficherPaywall(comp);
      } else {
        selectionnerComposante(comp);
      }
    });
    liste.appendChild(carte);
  });
}
function selectionnerComposante(comp) {
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
    '<div 
