// ===== GUIDE - Moteur de l'application =====
// Version simple et stable — cours + exercices uniquement.

var ecran = document.getElementById('ecran');

// ---------- Accueil : liste des classes ----------
function afficherAccueil() {
  var html = '<div class="liste">';
  for (var i = 0; i < CLASSES.length; i++) {
    var c = CLASSES[i];
    if (c.dispo) {
      html += '<button class="carte" onclick="afficherMatieres(\'' + c.id + '\')">' +
        '<span class="carte-icone">🎓</span>' +
        '<span class="carte-texte">' + c.nom + '</span>' +
        '<span class="badge-ok">Disponible</span>' +
        '</button>';
    } else {
      html += '<div class="carte carte-off">' +
        '<span class="carte-icone">🎓</span>' +
        '<span class="carte-texte">' + c.nom + '</span>' +
        '<span class="badge-attente">Bientôt</span>' +
        '</div>';
    }
  }
  html += '</div>';
  afficher(html);
}

// ---------- Matières d'une classe ----------
function afficherMatieres(classeId) {
  var mats = MATIERES[classeId] || [];
  var html = '<button class="retour" onclick="afficherAccueil()">← Retour</button>';
  html += '<h2 class="titre-page">🎓 ' + nomClasse(classeId) + '</h2>';
  html += '<div class="liste">';
  for (var i = 0; i < mats.length; i++) {
    var m = mats[i];
    if (m.dispo) {
      html += '<button class="carte" onclick="afficherChapitres(\'' + classeId + '\',\'' + m.id + '\')">' +
        '<span class="carte-icone">' + m.icone + '</span>' +
        '<span class="carte-texte">' + m.nom + '</span>' +
        '</button>';
    } else {
      html += '<div class="carte carte-off">' +
        '<span class="carte-icone">' + m.icone + '</span>' +
        '<span class="carte-texte">' + m.nom + '</span>' +
        '<span class="badge-attente">Bientôt</span>' +
        '</div>';
    }
  }
  html += '</div>';
  afficher(html);
}

// ---------- Chapitres d'une matière ----------
function afficherChapitres(classeId, matiereId) {
  var chapitres = obtenirChapitres(classeId, matiereId);
  var html = '<button class="retour" onclick="afficherMatieres(\'' + classeId + '\')">← Retour</button>';
  html += '<h2 class="titre-page">' + iconeMatiere(classeId, matiereId) + ' ' + nomMatiere(classeId, matiereId) + ' — ' + nomClasse(classeId) + '</h2>';

  if (!chapitres || chapitres.length === 0) {
    html += '<div class="vide">📭 Aucun chapitre pour le moment.<br>Reviens bientôt !</div>';
    afficher(html);
    return;
  }

  html += '<div class="liste">';
  for (var i = 0; i < chapitres.length; i++) {
    var ch = chapitres[i];
    html += '<button class="carte" onclick="afficherChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + i + ')">' +
      '<span class="carte-texte">' + ch.titre + '</span>' +
      '<span class="carte-fleche">›</span>' +
      '</button>';
  }
  html += '</div>';
  afficher(html);
}

// ---------- Un chapitre (leçons + exercices) ----------
function afficherChapitre(classeId, matiereId, index) {
  var chapitres = obtenirChapitres(classeId, matiereId);
  var ch = chapitres[index];
  var html = '<button class="retour" onclick="afficherChapitres(\'' + classeId + '\',\'' + matiereId + '\')">← Retour</button>';
  html += '<h2 class="titre-page">' + ch.titre + '</h2>';

  // Leçons
  html += '<h3 class="titre-section">📖 Leçons</h3>';
  for (var i = 0; i < ch.lecons.length; i++) {
    var lecon = ch.lecons[i];
    html += '<div class="bloc-lecon">';
    html += '<div class="lecon-titre">' + lecon.titre + '</div>';
    for (var j = 0; j < lecon.blocs.length; j++) {
      html += rendreBloc(lecon.blocs[j]);
    }
    html += '</div>';
  }

  // Exercices
  html += '<h3 class="titre-section">✏️ Exercices</h3>';
  for (var k = 0; k < ch.exercices.length; k++) {
    var ex = ch.exercices[k];
    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Niveau ' + ex.niveau + ' — ' + ex.points + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '<button class="btn-correction" onclick="basculerCorrection(this)">Voir la correction</button>';
    html += '<div class="correction cache">' + nl2br(ex.correction) + '</div>';
    html += '</div>';
  }

  afficher(html);
}

// ---------- Afficher un bloc de leçon ----------
function rendreBloc(b) {
  var html = '';
  if (b.type === 'schema') {
    html += '<div class="bloc bloc-schema"><div class="bloc-titre">' + b.titre + '</div>' + b.svg;
    if (b.legende) html += '<div class="legende">' + b.legende + '</div>';
    html += '</div>';
  } else if (b.type === 'tableau') {
    html += '<div class="bloc bloc-tableau"><div class="bloc-titre">' + b.titre + '</div><table>';
    html += '<tr>';
    for (var i = 0; i < b.entetes.length; i++) html += '<th>' + b.entetes[i] + '</th>';
    html += '</tr>';
    for (var j = 0; j < b.lignes.length; j++) {
      html += '<tr>';
      for (var k = 0; k < b.lignes[j].length; k++) html += '<td>' + b.lignes[j][k] + '</td>';
      html += '</tr>';
    }
    html += '</table></div>';
  } else {
    var classe = 'bloc-' + b.type;
    html += '<div class="bloc ' + classe + '"><div class="bloc-titre">' + b.titre + '</div><div class="bloc-texte">' + nl2br(b.texte) + '</div></div>';
  }
  return html;
}

// ---------- À propos ----------
function afficherPropos() {
  var nb = 0;
  var cles = Object.keys(CONTENU);
  for (var i = 0; i < cles.length; i++) {
    nb += CONTENU[cles[i]].length;
  }
  var html = '<button class="retour" onclick="afficherAccueil()">← Retour</button>';
  html += '<h2 class="titre-page">ℹ️ À propos</h2>';
  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-texte">';
  html += '<strong>Guide</strong> t\'accompagne de la 6ème à la Terminale : leçons claires, exercices corrigés en 4 niveaux.<br><br>';
  html += '🇲🇬 Basée sur le programme officiel de Madagascar, complétée par Guide.<br><br>';
  html += '<strong>Guide ' + VERSION + '</strong> — fonctionne hors ligne 📴<br><br>';
  html += '✓ Contenu chargé : ' + cles.length + ' matière(s), ' + nb + ' chapitre(s)';
  html += '</div></div>';
  afficher(html);
}

// ---------- Utilitaires ----------
function afficher(html) {
  ecran.innerHTML = html;
  window.scrollTo(0, 0);
}

function nl2br(texte) {
  return texte.replace(/\n/g, '<br>');
}

function basculerCorrection(btn) {
  var correction = btn.nextElementSibling;
  if (correction.classList.contains('cache')) {
    correction.classList.remove('cache');
    btn.textContent = 'Masquer la correction';
  } else {
    correction.classList.add('cache');
    btn.textContent = 'Voir la correction';
  }
}

function obtenirChapitres(classeId, matiereId) {
  return CONTENU[classeId + '|' + matiereId] || [];
}

function nomClasse(id) {
  for (var i = 0; i < CLASSES.length; i++) if (CLASSES[i].id === id) return CLASSES[i].nom;
  return id;
}

function nomMatiere(classeId, matiereId) {
  var mats = MATIERES[classeId] || [];
  for (var i = 0; i < mats.length; i++) if (mats[i].id === matiereId) return mats[i].nom;
  return matiereId;
}

function iconeMatiere(classeId, matiereId) {
  var mats = MATIERES[classeId] || [];
  for (var i = 0; i < mats.length; i++) if (mats[i].id === matiereId) return mats[i].icone;
  return '📚';
}

// ---------- Démarrage ----------
document.getElementById('lien-propos').addEventListener('click', function(e) {
  e.preventDefault();
  afficherPropos();
});

afficherAccueil();
