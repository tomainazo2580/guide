var VERSION = 'v4.00';

var CLASSES = [
  { id: '6e', nom: 'Sixieme', dispo: true },
  { id: '5e', nom: 'Cinquieme', dispo: true },
  { id: '4e', nom: 'Quatrieme', dispo: false },
  { id: '3e', nom: 'Troisieme', dispo: false },
  { id: '2nde', nom: 'Seconde', dispo: false },
  { id: '1ere', nom: 'Premiere', dispo: false },
  { id: 'tle', nom: 'Terminale', dispo: false }
];

var MATIERES = {
  '6e': [
    {
      id: 'maths',
      nom: 'Mathematiques',
      court: 'Maths',
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
        'data/6e/maths-ch16.js',
        'data/6e/maths-ch17.js'
      ]
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: [
        'data/6e/sp-ch1.js',
        'data/6e/sp-ch2.js',
        'data/6e/sp-ch3.js',
        'data/6e/sp-ch4.js',
        'data/6e/sp-ch5.js',
        'data/6e/sp-ch6.js',
        'data/6e/sp-ch7.js',
        'data/6e/sp-ch8.js',
        'data/6e/sp-ch9.js',
        'data/6e/sp-ch10.js',
        'data/6e/sp-ch11.js',
        'data/6e/sp-ch12.js'
      ]
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: true,
      fichiers: [
        'data/6e/svt-ch1.js',
        'data/6e/svt-ch2.js',
        'data/6e/svt-ch3.js',
        'data/6e/svt-ch4.js',
        'data/6e/svt-ch5.js',
        'data/6e/svt-ch6.js',
        'data/6e/svt-ch7.js',
        'data/6e/svt-ch8.js',
        'data/6e/svt-ch9.js',
        'data/6e/svt-ch10.js',
        'data/6e/svt-ch11.js',
        'data/6e/svt-ch12.js',
        'data/6e/svt-ch13.js',
        'data/6e/svt-ch14.js'
      ]
    },
    {
      id: 'mal',
      nom: 'Malagasy',
      court: 'Mal',
      icone: '🇲🇬',
      dispo: false,
      fichiers: []
    },
    {
      id: 'fr',
      nom: 'Francais',
      court: 'Fr',
      icone: '📖',
      dispo: true,
      fichiers: [
        'data/6e/fr-ch1.js',
        'data/6e/fr-ch2.js',
        'data/6e/fr-ch3.js',
        'data/6e/fr-ch4.js',
        'data/6e/fr-ch5.js',
        'data/6e/fr-ch6.js',
        'data/6e/fr-ch7.js'
      ]
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: true,
      fichiers: [
        'data/6e/eng-ch1.js',
        'data/6e/eng-ch2.js',
        'data/6e/eng-ch3.js',
        'data/6e/eng-ch4.js',
        'data/6e/eng-ch5.js',
        'data/6e/eng-ch6.js',
        'data/6e/eng-ch7.js',
        'data/6e/eng-ch8.js'
      ]
    },
    {
      id: 'hg',
      nom: 'Histoire',
      court: 'Hist',
      icone: '🌍',
      dispo: false,
      fichiers: []
    },
    {
      id: 'geo',
      nom: 'Geographie',
      court: 'Geo',
      icone: '🗺️',
      dispo: false,
      fichiers: []
    }
  ],

  '5e': [
    {
      id: 'maths',
      nom: 'Mathematiques',
      court: 'Maths',
      icone: '📐',
      dispo: true,
      fichiers: [
        'data/5e/maths-ch1.js',
        'data/5e/maths-ch2.js',
        'data/5e/maths-ch3.js',
        'data/5e/maths-ch4.js',
        'data/5e/maths-ch5.js',
        'data/5e/maths-ch6.js',
        'data/5e/maths-ch7.js',
        'data/5e/maths-ch8.js',
        'data/5e/maths-ch9.js',
        'data/5e/maths-ch10.js',
        'data/5e/maths-ch11.js',
        'data/5e/maths-ch12.js',
        'data/5e/maths-ch13.js',
        'data/5e/maths-ch14.js',
        'data/5e/maths-ch15.js',
        'data/5e/maths-ch16.js',
        'data/5e/maths-ch17.js'
      ]
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: [
        'data/5e/sp-ch1.js',
        'data/5e/sp-ch2.js',
        'data/5e/sp-ch3.js',
        'data/5e/sp-ch4.js',
        'data/5e/sp-ch5.js',
        'data/5e/sp-ch6.js',
        'data/5e/sp-ch7.js',
        'data/5e/sp-ch8.js',
        'data/5e/sp-ch9.js',
        'data/5e/sp-ch10.js',
        'data/5e/sp-ch11.js',
        'data/5e/sp-ch12.js',
        'data/5e/sp-ch13.js'
      ]
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: true,
      fichiers: [
        'data/5e/svt-ch1.js',
        'data/5e/svt-ch2.js',
        'data/5e/svt-ch3.js',
        'data/5e/svt-ch4.js',
        'data/5e/svt-ch5.js',
        'data/5e/svt-ch6.js',
        'data/5e/svt-ch7.js',
        'data/5e/svt-ch8.js',
        'data/5e/svt-ch9.js',
        'data/5e/svt-ch10.js',
        'data/5e/svt-ch11.js',
        'data/5e/svt-ch12.js',
        'data/5e/svt-ch13.js',
        'data/5e/svt-ch14.js',
        'data/5e/svt-ch15.js',
        'data/5e/svt-ch16.js',
        'data/5e/svt-ch17.js'
      ]
    },
    {
      id: 'mal',
      nom: 'Malagasy',
      court: 'Mal',
      icone: '🇲🇬',
      dispo: false,
      fichiers: []
    },
    {
      id: 'fr',
      nom: 'Francais',
      court: 'Fr',
      icone: '📖',
      dispo: true,
      fichiers: [
        'data/5e/fr-ch1.js',
        'data/5e/fr-ch2.js',
        'data/5e/fr-ch3.js',
        'data/5e/fr-ch4.js',
        'data/5e/fr-ch5.js',
        'data/5e/fr-ch6.js',
        'data/5e/fr-ch7.js',
        'data/5e/fr-ch8.js'
      ]
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: true,
      fichiers: [
        'data/5e/eng-ch1.js',
        'data/5e/eng-ch2.js',
        'data/5e/eng-ch3.js',
        'data/5e/eng-ch4.js',
        'data/5e/eng-ch5.js',
        'data/5e/eng-ch6.js',
        'data/5e/eng-ch7.js'
      ]
    },
    {
      id: 'hg',
      nom: 'Histoire',
      court: 'Hist',
      icone: '🌍',
      dispo: false,
      fichiers: []
    },
    {
      id: 'geo',
      nom: 'Geographie',
      court: 'Geo',
      icone: '🗺️',
      dispo: false,
      fichiers: []
    }
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

  if (xhr.status === 200 || xhr.status === 0) {
    new Function(xhr.responseText)();
  }
}

(function chargerTout() {
  for (var c = 0; c < CLASSES.length; c++) {
    var classe = CLASSES[c];

    if (!classe.dispo) continue;

    var liste = MATIERES[classe.id] || [];

    for (var m = 0; m < liste.length; m++) {
      var matiere = liste[m];

      if (!matiere.dispo) continue;

      for (var f = 0; f < matiere.fichiers.length; f++) {
        chargerFichierContenu(matiere.fichiers[f]);
      }
    }
  }
})();
