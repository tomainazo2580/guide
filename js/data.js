// ===== GUIDE - Donnees et configuration =====
// v3.4

var VERSION = 'v3.4';

var CLASSES = [
  { id: '6e', nom: '6ème', dispo: true },
  { id: '5e', nom: '5ème', dispo: false },
  { id: '4e', nom: '4ème', dispo: false },
  { id: '3e', nom: '3ème', dispo: false },
  { id: '2nde', nom: 'Seconde', dispo: false },
  { id: '1ere', nom: 'Première', dispo: false },
  { id: 'term', nom: 'Terminale', dispo: false }
];

var MATIERES = {
  '6e': [
    { id: 'maths', nom: 'Mathématiques', icone: '📐', dispo: true, fichier: 'data/6e/mathematiques.js' },
    { id: 'sp', nom: 'Sciences Physiques', icone: '⚗️', dispo: false },
    { id: 'svt', nom: 'SVT', icone: '🌱', dispo: false }
  ]
};

var CONTENU = {};

function enregistrerChapitres(classeId, matiereId, chapitres) {
  CONTENU[classeId + '|' + matiereId] = chapitres;
}

function chargerFichierContenu(url) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    if ((xhr.status === 200 || xhr.status === 0) && xhr.responseText) {
      new Function(xhr.responseText)();
      return true;
    }
  } catch (e) {}
  return false;
}

(function chargerTousLesContenus() {
  for (var i = 0; i < CLASSES.length; i++) {
    var mats = MATIERES[CLASSES[i].id] || [];
    for (var j = 0; j < mats.length; j++) {
      if (mats[j].dispo && mats[j].fichier) {
        chargerFichierContenu(mats[j].fichier);
      }
    }
  }
})();
