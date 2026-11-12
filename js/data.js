var VERSION = 'v3.15';

var CLASSES = [
  { id: '6e', nom: 'Sixième', dispo: true },
  { id: '5e', nom: 'Cinquième', dispo: false },
  { id: '4e', nom: 'Quatrième', dispo: false },
  { id: '3e', nom: 'Troisième', dispo: false },
  { id: '2nde', nom: 'Seconde', dispo: false },
  { id: '1ere', nom: 'Première', dispo: false },
  { id: 'term', nom: 'Terminale', dispo: false }
];

var MATIERES = {
  '6e': [
    {
      id: 'maths',
      nom: 'Mathématiques',
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
        'data/6e/maths-ch10.js'
      ]
    },
    { id: 'sp', nom: 'Sciences Physiques', icone: '⚗️', dispo: false },
    { id: 'svt', nom: 'SVT', icone: '🌱', dispo: false }
  ]
};

var CONTENU = {};

function enregistrerChapitres(classeId, matiereId, chapitres) {
  var cle = classeId + '|' + matiereId;
  if (!CONTENU[cle]) {
    CONTENU[cle] = [];
  }
  for (var i = 0; i < chapitres.length; i++) {
    CONTENU[cle].push(chapitres[i]);
  }
}

function chargerFichierContenu(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + '?v=' + VERSION, false);
  xhr.send(null);
  if (xhr.status >= 200 && xhr.status < 300) {
    new Function(xhr.responseText)();
  }
}

(function() {
  for (var i = 0; i < CLASSES.length; i++) {
    var classe = CLASSES[i];
    if (!classe.dispo) { continue; }
    var liste = MATIERES[classe.id] || [];
    for (var j = 0; j < liste.length; j++) {
      var matiere = liste[j];
      if (!matiere.dispo) { continue; }
      if (matiere.fichiers) {
        for (var k = 0; k < matiere.fichiers.length; k++) {
          chargerFichierContenu(matiere.fichiers[k]);
        }
      } else if (matiere.fichier) {
        chargerFichierContenu(matiere.fichier);
      }
    }
  }
})();
