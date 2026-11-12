// ===== GUIDE - Moteur de l'application =====
// v3.1 - une lecon par page, exercices separes, corrections discretes

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

// ---------- Matieres d'une classe ----------
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
        '<span class="carte-fleche">›</span>' +
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

// ---------- Chapitres d'une matiere ----------
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
    html += '<button class="carte" onclick="afficherMenuChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + i + ')">' +
      '<span class="carte-texte">' + ch.titre + '</span>' +
      '<span class="carte-fleche">›</span>' +
      '</button>';
  }
  html += '</div>';
  afficher(html);
}

// ---------- Menu d'un chapitre : lecons + exercices ----------
function afficherMenuChapitre(classeId, matiereId, index) {
  var chapitres = obtenirChapitres(classeId, matiereId);
  var ch = chapitres[index];
  var html = '<button class="retour" onclick="afficherChapitres(\'' + classeId + '\',\'' + matiereId + '\')">← Retour</button>';
  html += '<h2 class="titre-page">' + ch.titre + '</h2>';

  html += '<h3 class="titre-section">📖 Leçons</h3>';
  html += '<div class="liste">';
  for (var i = 0; i < ch.lecons.length; i++) {
    html += '<button class="carte" onclick="afficherLecon(\'' + classeId + '\',\'' + matiereId + '\',' + index + ',' + i + ')">' +
      '<span class="numero-lecon">' + (i + 1) + '</span>' +
      '<span class="carte-texte">' + ch.lecons[i].titre + '</span>' +
      '<span class="carte-fleche">›</span>' +
      '</button>';
  }
  html += '</div>';

  html += '<h3 class="titre-section">✏️ Exercices</h3>';
  html += '<button class="carte carte-exercices" onclick="afficherExercices(\'' + classeId + '\',\'' + matiereId + '\',' + index + ')">' +
    '<span class="carte-icone">✏️</span>' +
    '<span class="carte-texte">Faire les exercices</span>' +
    '<span class="badge-nb">' + ch.exercices.length + '</span>' +
    '</button>';

  afficher(html);
}

// ---------- Une lecon (une seule par page) ----------
function afficherLecon(classeId, matiereId, indexChapitre, indexLecon) {
  var chapitres = obtenirChapitres(classeId, matiereId);
  var ch = chapitres[indexChapitre];
  var lecon = ch.lecons[indexLecon];

  var html = '<button class="retour" onclick="afficherMenuChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ')">← ' + ch.titre + '</button>';
  html += '<div class="lecon-progression">Leçon ' + (indexLecon + 1) + ' / ' + ch.lecons.length + '</div>';
  html += '<h2 class="titre-page">' + lecon.titre + '</h2>';

  for (var j = 0; j < lecon.blocs.length; j++) {
    html += rendreBloc(lecon.blocs[j]);
  }

  // Navigation entre lecons
  html += '<div class="nav-lecon">';
  if (indexLecon > 0) {
    html += '<button class="btn-nav" onclick="afficherLecon(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ',' + (indexLecon - 1) + ')">← Précédente</button>';
  } else {
    html += '<span></span>';
  }
  if (indexLecon < ch.lecons.length - 1) {
    html += '<button class="btn-nav btn-nav-suivant" onclick="afficherLecon(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ',' + (indexLecon + 1) + ')">Suivante →</button>';
  } else {
    html += '<button class="btn-nav btn-nav-exercices" onclick="afficherExercices(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ')">✏️ Exercices →</button>';
  }
  html += '</div>';

  afficher(html);
}

// ---------- Exercices (page separee) ----------
function afficherExercices(classeId, matiereId, index) {
  var chapitres = obtenirChapitres(classeId, matiereId);
  var ch = chapitres[index];

  var html = '<button class="retour" onclick="afficherMenuChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + index + ')">← ' + ch.titre + '</button>';
  html += '<h2 class="titre-page">✏️ Exercices</h2>';
  html += '<div class="conseil-exercices">💡 Essaie chaque exercice sur ton cahier <strong>avant</strong> de regarder la correction.</div>';

  for (var k = 0; k < ch.exercices.length; k++) {
    var ex = ch.exercices[k];
    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Exercice ' + (k + 1) + ' — Niveau ' + ex.niveau + ' — ' + ex.points + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '<button class="btn-correction" onclick="demanderCorrection(this)">Voir la correction</button>';
    html += '<div class="confirme cache">';
    html += '<div class="confirme-texte">🤔 As-tu vraiment essayé de résoudre l\'exercice ?</div>';
    html += '<div class="confirme-boutons">';
    html += '<button class="btn-oui" onclick="montrerCorrection(this)">Oui, montrer</button>';
    html += '<button class="btn-non" onclick="cacherConfirmation(this)">Pas encore</button>';
    html += '</div></div>';
    html += '<div class="correction cache">' + nl2br(ex.correction) + '</div>';
    html += '</div>';
  }

  afficher(html);
}

// ---------- Correction en 2 temps ----------
function demanderCorrection(btn) {
  btn.classList.add('cache');
  btn.nextElementSibling.classList.remove('cache');
}

function montrerCorrection(btn) {
  var confirme = btn.parentNode.parentNode;
  confirme.classList.add('cache');
  confirme.nextElementSibling.classList.remove('cache');
}

function cacherConfirmation(btn) {
  var confirme = btn.parentNode.parentNode;
  confirme.classList.add('cache');
  confirme.previousElementSibling.classList.remove('cache');
}

// ---------- Afficher un bloc de lecon ----------
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
    html += '<div class="bloc bloc-' + b.type + '"><div class="bloc-titre">' + b.titre + '</div><div class="bloc-texte">' + nl2br(b.texte) + '</div></div>';
  }
  return html;
}

// ---------- A propos ----------
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

// ---------- Demarrage ----------
document.getElementById('lien-propos').addEventListener('click', function(e) {
  e.preventDefault();
  afficherPropos();
});

afficherAccueil();
