// =====================================================
// GUIDE - Donnees centrales (ne pas effacer)
// Moteur de donnees + liste des fichiers de contenu
// Version : v3.34
// + Sciences Physiques 6e : chapitres 1 a 12 (COMPLET)
// =====================================================

var VERSION = 'v3.34';

// ----- Les classes -----
var CLASSES = [
  { id: '6e',   nom: 'Sixieme',   dispo: true },
  { id: '5e',   nom: 'Cinquieme', dispo: false },
  { id: '4e',   nom: 'Quatrieme', dispo: false },
  { id: '3e',   nom: 'Troisieme', dispo: false },
  { id: '2nde', nom: 'Seconde',   dispo: false },
  { id: '1ere', nom: 'Premiere',  dispo: false },
  { id: 'tle',  nom: 'Terminale', dispo: false }
];

// ----- Les matieres par classe -----
var MATIERES = {
  '6e': [
    { id: 'maths', nom: 'Mathematiques', court: 'Maths', icone: '📐', dispo: true,
      fichiers: ['data/6e/maths-ch1.js', 'data/6e/maths-ch2.js', 'data/6e/maths-ch3.js', 'data/6e/maths-ch4.js', 'data/6e/maths-ch5.js', 'data/6e/maths-ch6.js', 'data/6e/maths-ch7.js', 'data/6e/maths-ch8.js', 'data/6e/maths-ch9.js', 'data/6e/maths-ch10.js', 'data/6e/maths-ch11.js', 'data/6e/maths-ch12.js', 'data/6e/maths-ch13.js', 'data/6e/maths-ch14.js', 'data/6e/maths-ch15.js', 'data/6e/maths-ch16.js'] },
    { id: 'sp', nom: 'Sciences Physiques', court: 'SP', icone: '⚗️', dispo: true,
      fichiers: ['data/6e/sp-ch1.js', 'data/6e/sp-ch2.js', 'data/6e/sp-ch3.js', 'data/6e/sp-ch4.js', 'data/6e/sp-ch5.js', 'data/6e/sp-ch6.js', 'data/6e/sp-ch7.js', 'data/6e/sp-ch8.js', 'data/6e/sp-ch9.js', 'data/6e/sp-ch10.js', 'data/6e/sp-ch11.js', 'data/6e/sp-ch12.js'] },
    { id: 'svt', nom: 'Sciences de la Vie et de la Terre', court: 'SVT', icone: '🌱', dispo: false, fichiers: [] },
    { id: 'mal', nom: 'Malagasy', court: 'Mal', icone: '🇲🇬', dispo: false, fichiers: [] },
    { id: 'fr', nom: 'Francais', court: 'Fr', icone: '📖', dispo: false, fichiers: [] },
    { id: 'eng', nom: 'Anglais', court: 'Eng', icone: '🇬🇧', dispo: false, fichiers: [] },
    { id: 'hg', nom: 'Histoire', court: 'Hist', icone: '🌍', dispo: false, fichiers: [] },
    { id: 'geo', nom: 'Geographie', court: 'Geo', icone: '🗺️', dispo: false, fichiers: [] }
  ]
};

// ----- Le contenu (rempli par les fichiers) -----
var CONTENU = {};

function enregistrerChapitres(classeId, matiereId, chapitres) {
  var cle = classeId + '|' + matiereId;
  if (!CONTENU[cle]) { CONTENU[cle] = []; }
  for (var i = 0; i < chapitres.length; i++) {
    CONTENU[cle].push(chapitres[i]);
  }
}

function chargerFichierContenu(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + '?v=' + VERSION, false);
  xhr.send(null);
  if (xhr.status === 200 || xhr.status === 0) {
    new Function(xhr.responseText)();
  }
}

// ----- Chargement automatique -----
(function() {
  for (var classeId in MATIERES) {
    var liste = MATIERES[classeId];
    for (var i = 0; i < liste.length; i++) {
      var m = liste[i];
      if (!m.dispo) { continue; }
      for (var j = 0; j < m.fichiers.length; j++) {
        chargerFichierContenu(m.fichiers[j]);
      }
    }
  }
})();
