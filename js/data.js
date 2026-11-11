// ===== GUIDE - Registre des classes, matières, prix et contenus =====

var VERSION = 'v2.0';

var CLASSES = [
  { id: '6e',   nom: '6ème',      dispo: true  },
  { id: '5e',   nom: '5ème',      dispo: false },
  { id: '4e',   nom: '4ème',      dispo: false },
  { id: '3e',   nom: '3ème',      dispo: false },
  { id: '2nde', nom: 'Seconde',   dispo: false },
  { id: '1ere', nom: 'Première',  dispo: false },
  { id: 'term', nom: 'Terminale', dispo: false }
];

var MATIERES = {
  '6e': [
    { id: 'maths', nom: 'Mathématiques',      icone: '📐', dispo: true,  fichier: 'data/6e/mathematiques.js' },
    { id: 'sp',    nom: 'Sciences Physiques', icone: '⚗️', dispo: false },
    { id: 'svt',   nom: 'SVT',                icone: '🌱', dispo: false }
  ]
};

var PRIX = {
  '6e': 1500, '5e': 1500, '4e': 1500,
  '3e': 2500,
  '2nde': 3000, '1ere': 3000,
  'term': 5000
};

var DUREE_EXAMEN_MIN = 120;

// ----- Contenus : remplis par les fichiers data/<classe>/<matiere>.js -----
var CONTENU = {};

function enregistrerChapitres(classeId, matiereId, chapitres) {
  CONTENU[classeId + '|' + matiereId] = chapitres;
}

function contenuDe(classeId, matiereId) {
  return CONTENU[classeId + '|' + matiereId] || [];
}

// ----- Petits utilitaires -----
function classeDe(classeId) {
  for (var i = 0; i < CLASSES.length; i++) {
    if (CLASSES[i].id === classeId) return CLASSES[i];
  }
  return null;
}

function matieresDe(classeId) {
  return MATIERES[classeId] || [];
}

function matiereDe(classeId, matiereId) {
  var ms = matieresDe(classeId);
  for (var i = 0; i < ms.length; i++) {
    if (ms[i].id === matiereId) return ms[i];
  }
  return null;
}

function prixDe(classeId) {
  return PRIX[classeId] || 0;
}

function formatPrix(montant) {
  var s = String(montant);
  var r = '';
  while (s.length > 3) {
    r = ' ' + s.substr(s.length - 3) + r;
    s = s.substr(0, s.length - 3);
  }
  return s + r + ' Ar';
}

function combosDisponibles() {
  var liste = [];
  for (var i = 0; i < CLASSES.length; i++) {
    if (!CLASSES[i].dispo) continue;
    var ms = matieresDe(CLASSES[i].id);
    for (var j = 0; j < ms.length; j++) {
      if (ms[j].dispo) liste.push({ classe: CLASSES[i].id, matiere: ms[j].id });
    }
  }
  return liste;
}
