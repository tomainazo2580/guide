// ============================================
// GUIDE - data.js
// Version : v3.23
//   + Sciences Physiques 6e : chapitre 1
// ============================================

var VERSION = 'v3.23';

// ---------- Classes ----------
var CLASSES = [
  { id: '6e', nom: 'Sixième', dispo: true },
  { id: '5e', nom: 'Cinquième', dispo: false },
  { id: '4e', nom: 'Quatrième', dispo: false },
  { id: '3e', nom: 'Troisième', dispo: false },
  { id: '2nde', nom: 'Seconde', dispo: false },
  { id: '1ere', nom: 'Première', dispo: false },
  { id: 'term', nom: 'Terminale', dispo: false }
];

// ---------- Matieres ----------
var MATIERES = {
  '6e': [
    {
      id: 'maths',
      nom: 'Mathématiques',
      court: 'Math',
      icone: '📐',
      dispo: true,
      fichiers: [
        'data/6e/maths-ch1.js',
        'data/6e/maths-ch2.js',
        'data/6e/maths-ch3.js',
        'data/6e/maths-ch4.js',
        'data/6e/maths-ch5.js',
        'data/6e/maths-ch6.js',
        'data/6e/maths-ch7.js',
        'data/6e/maths-ch8.js',
        'data/6e/maths-ch9.js',
        'data/6e/maths-ch10.js',
        'data/6e/maths-ch11.js',
        'data/6e/maths-ch12.js',
        'data/6e/maths-ch13.js',
        'data/6e/maths-ch14.js',
        'data/6e/maths-ch15.js',
        'data/6e/maths-ch16.js'
      ]
    },
    { id: 'sp', nom: 'Sciences Physiques', court: 'SP', icone: '⚗️', dispo: true, fichiers: ['data/6e/sp-ch1.js'] },
    { id: 'svt', nom: 'SVT', court: 'SVT', icone: '🌱', dispo: false, fichiers: [] },
    { id: 'mal', nom: 'Malagasy', court: 'Mal', icone: '🇲🇬', dispo: false, fichiers: [] },
    { id: 'fr', nom: 'Français', court: 'Fr', icone: '📖', dispo: false, fichiers: [] },
    { id: 'eng', nom: 'Anglais', court: 'Eng', icone: '🇬🇧', dispo: false, fichiers: [] },
    { id: 'hg', nom: 'Histoire-Géographie', court: 'Hist', icone: '🌍', dispo: false, fichiers: [] },
    { id: 'geo', nom: 'Géographie', court: 'Géo', icone: '🗺️', dispo: false, fichiers: [] }
  ]
};

// ---------- Contenu ----------
var CONTENU = {};

// Chaque fichier de chapitre appelle cette fonction pour AJOUTER son contenu
function enregistrerChapitres(classeId, matiereId, chapitres) {
  var cle = classeId + '|' + matiereId;
  if (!CONTENU[cle]) CONTENU[cle] = [];
  for (var i = 0; i < chapitres.length; i++) {
    CONTENU[cle].push(chapitres[i]);
  }
}

// Charge le texte d'un fichier et l'execute
function chargerFichierContenu(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + '?v=' + VERSION, false);
  xhr.send(null);
  if (xhr.status === 200 || xhr.status === 0) {
    new Function(xhr.responseText)();
  }
}

// ---------- Chargement automatique ----------
(function() {
  for (var i = 0; i < CLASSES.length; i++) {
    var classe = CLASSES[i];
    var mats = MATIERES[classe.id] || [];
    for (var j = 0; j < mats.length; j++) {
      var m = mats[j];
      if (!m.dispo) continue;
      var fichiers = m.fichiers || (m.fichier ? [m.fichier] : []);
      for (var k = 0; k < fichiers.length; k++) {
        chargerFichierContenu(fichiers[k]);
      }
    }
  }
})();
