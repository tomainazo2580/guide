// ===== GUIDE — Classes, matières et chargement des chapitres =====

var VERSION = 'v4.07';

var CLASSES = [
  { id: '6e', nom: 'Sixieme', dispo: true },
  { id: '5e', nom: 'Cinquieme', dispo: true },
  { id: '4e', nom: 'Quatrieme', dispo: true },
  { id: '3e', nom: 'Troisieme', dispo: true },
  { id: '2nde', nom: 'Seconde', dispo: false },
  { id: '1ere', nom: 'Premiere', dispo: false },
  { id: 'tle', nom: 'Terminale', dispo: false }
];

// Prépare les chemins des chapitres dans l'ordre.
function fichiersGuide(classe, matiere, nombre) {
  var fichiers = [];

  for (var i = 1; i <= nombre; i++) {
    fichiers.push(
      'data/' + classe + '/' + matiere + '-ch' + i + '.js'
    );
  }

  return fichiers;
}

var MATIERES = {
  '6e': [
    {
      id: 'maths',
      nom: 'Mathematiques',
      court: 'Maths',
      icone: '📐',
      dispo: true,
      fichiers: fichiersGuide('6e', 'maths', 17)
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: fichiersGuide('6e', 'sp', 12)
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: true,
      fichiers: fichiersGuide('6e', 'svt', 14)
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
      fichiers: fichiersGuide('6e', 'fr', 7)
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: true,
      fichiers: fichiersGuide('6e', 'eng', 8)
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
      fichiers: fichiersGuide('5e', 'maths', 17)
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: fichiersGuide('5e', 'sp', 13)
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: true,
      fichiers: fichiersGuide('5e', 'svt', 17)
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
      fichiers: fichiersGuide('5e', 'fr', 8)
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: true,
      fichiers: fichiersGuide('5e', 'eng', 7)
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

  '4e': [
    {
      id: 'maths',
      nom: 'Mathematiques',
      court: 'Maths',
      icone: '📐',
      dispo: true,
      fichiers: fichiersGuide('4e', 'maths', 18)
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: fichiersGuide('4e', 'sp', 19)
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: true,
      fichiers: fichiersGuide('4e', 'svt', 13)
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
      fichiers: fichiersGuide('4e', 'fr', 19)
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: true,
      fichiers: fichiersGuide('4e', 'eng', 16)
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

  '3e': [
    {
      id: 'maths',
      nom: 'Mathematiques',
      court: 'Maths',
      icone: '📐',
      dispo: true,
      fichiers: fichiersGuide('3e', 'maths', 15)
    },
    {
      id: 'sp',
      nom: 'Sciences Physiques',
      court: 'SP',
      icone: '⚗️',
      dispo: true,
      fichiers: fichiersGuide('3e', 'sp', 23)
    },
    {
      id: 'svt',
      nom: 'Sciences de la Vie et de la Terre',
      court: 'SVT',
      icone: '🌱',
      dispo: false,
      fichiers: []
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
      dispo: false,
      fichiers: []
    },
    {
      id: 'eng',
      nom: 'Anglais',
      court: 'Ang',
      icone: '🇬🇧',
      dispo: false,
      fichiers: []
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

// Télécharge plusieurs fichiers à la fois, puis les enregistre
// dans l'ordre des classes, des matières et des chapitres.
var chargementContenuGuide = (function () {
  var fichiers = [];

  for (var c = 0; c < CLASSES.length; c++) {
    var classe = CLASSES[c];
    if (!classe.dispo) continue;

    var liste = MATIERES[classe.id] || [];

    for (var m = 0; m < liste.length; m++) {
      var matiere = liste[m];
      if (!matiere.dispo) continue;

      for (var f = 0; f < matiere.fichiers.length; f++) {
        fichiers.push(matiere.fichiers[f]);
      }
    }
  }

  var textes = new Array(fichiers.length);
  var prochain = 0;
  var nombreTelechargements = 8;

  function telechargerSuivant() {
    var index = prochain++;

    if (index >= fichiers.length) {
      return Promise.resolve();
    }

    var url = fichiers[index] + '?v=' + encodeURIComponent(VERSION);

    return fetch(url)
      .then(function (reponse) {
        if (!reponse.ok) {
          throw new Error(
            'Impossible de charger ' + fichiers[index] +
            ' (erreur ' + reponse.status + ')'
          );
        }

        return reponse.text();
      })
      .then(function (texte) {
        textes[index] = texte;
        return telechargerSuivant();
      });
  }

  var telechargements = [];

  for (var i = 0; i < nombreTelechargements; i++) {
    telechargements.push(telechargerSuivant());
  }

  return Promise.all(telechargements).then(function () {
    for (var i = 0; i < textes.length; i++) {
      try {
        new Function(textes[i])();
      } catch (erreur) {
        throw new Error(
          'Erreur dans ' + fichiers[i] + ' : ' + erreur.message
        );
      }
    }
  });
})();
