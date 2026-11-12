// ===== GUIDE - Moteur de l'application =====
// v3.6 - recherche tolerante aux accents et majuscules

var APP_VERSION = 'v3.6';

var ecran = document.getElementById('ecran');

// Piege a erreurs : bandeau rouge si le code plante (a retirer a la fin du projet)
window.onerror = function(message, source, ligne) {
  var d = document.createElement('div');
  d.style.cssText = 'position:fixed;left:10px;right:10px;bottom:80px;background:#dc2626;color:#fff;padding:12px;border-radius:8px;font-size:13px;z-index:9999;';
  d.textContent = '⚠️ Erreur : ' + message + ' (ligne ' + ligne + ')';
  document.body.appendChild(d);
  return false;
};

// Fonction magique : enleve les accents et met en minuscule
function simplifierTexte(texte) {
  return texte.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// ---------- Accueil ----------
function afficherAccueil() {
  majOnglets('accueil');
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

// ---------- Matieres ----------
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

// ---------- Chapitres ----------
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

// ---------- Menu d'un chapitre ----------
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

// ---------- Affichage d'un bloc de lecon ----------
function rendreBloc(bloc) {
  var html = '<div class="bloc bloc-' + bloc.type + '">';

  if (bloc.titre) {
    html += '<div class="bloc-titre">' + bloc.titre + '</div>';
  }

  if (bloc.type === 'schema') {
    html += '<div class="bloc-schema">' + bloc.svg + '</div>';
    if (bloc.legende) {
      html += '<div class="bloc-legende">' + bloc.legende + '</div>';
    }
  } else if (bloc.type === 'tableau') {
    html += '<table class="tableau"><thead><tr>';
    for (var i = 0; i < bloc.entetes.length; i++) {
      html += '<th>' + bloc.entetes[i] + '</th>';
    }
    html += '</tr></thead><tbody>';
    for (var j = 0; j < bloc.lignes.length; j++) {
      html += '<tr>';
      for (var k = 0; k < bloc.lignes[j].length; k++) {
        html += '<td>' + bloc.lignes[j][k] + '</td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
  } else {
    html += '<div class="bloc-texte">' + nl2br(bloc.texte || '') + '</div>';
  }

  html += '</div>';
  return html;
}

// ---------- Une lecon ----------
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

  html += '<div class="nav-lecon-haut">';
  if (indexLecon > 0) {
    html += '<button class="btn-nav" onclick="afficherLecon(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ',' + (indexLecon - 1) + ')">← Précédente</button>';
  } else {
    html += '<span></span>';
  }
  html += '<button class="btn-nav" onclick="afficherMenuChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ')">🏠 Menu</button>';
  if (indexLecon < ch.lecons.length - 1) {
    html += '<button class="btn-nav btn-nav-suivant" onclick="afficherLecon(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ',' + (indexLecon + 1) + ')">Suivante →</button>';
  } else {
    html += '<button class="btn-nav btn-nav-exercices" onclick="afficherExercices(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ')">✏️ Exercices →</button>';
  }
  html += '</div>';

  afficher(html);
}

// ---------- Exercices ----------
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
// === FIN MORCEAU 1 ===
// ---------- Recherche (tolere accents et majuscules) ----------
function afficherRecherche() {
  majOnglets('recherche');

  var html = '<h2 class="titre-page">🔍 Recherche</h2>';
  html += '<div class="barre-recherche">';
  html += '<span class="icone-loupe">🔍</span>';
  html += '<input type="text" id="champ-recherche" placeholder="Chercher une leçon, un mot..." oninput="rechercher()">';
  html += '</div>';
  html += '<div id="resultats-recherche"></div>';

  afficher(html);

  setTimeout(function() {
    document.getElementById('champ-recherche').focus();
  }, 300);
}

function rechercher() {
  var champ = document.getElementById('champ-recherche');
  var zone = document.getElementById('resultats-recherche');
  var requete = simplifierTexte(champ.value.trim());

  if (requete.length < 2) {
    zone.innerHTML = '';
    return;
  }

  var resultats = [];

  for (var cle in CONTENU) {
    var parties = cle.split('|');
    var classeId = parties[0];
    var matiereId = parties[1];
    var chapitres = CONTENU[cle];

    for (var i = 0; i < chapitres.length; i++) {
      var ch = chapitres[i];
      var titreSimple = simplifierTexte(ch.titre);

      if (titreSimple.indexOf(requete) !== -1) {
        resultats.push({
          type: 'chapitre',
          chemin: nomMatiere(classeId, matiereId) + ' — ' + nomClasse(classeId),
          titre: ch.titre,
          classeId: classeId,
          matiereId: matiereId,
          indexChapitre: i
        });
      }

      for (var j = 0; j < ch.lecons.length; j++) {
        var lecon = ch.lecons[j];
        var titreLecon = simplifierTexte(lecon.titre);
        
        if (titreLecon.indexOf(requete) !== -1) {
          resultats.push({
            type: 'lecon',
            chemin: ch.titre + ' — ' + nomMatiere(classeId, matiereId),
            titre: lecon.titre,
            classeId: classeId,
            matiereId: matiereId,
            indexChapitre: i,
            indexLecon: j
          });
        } else {
          var trouveDansBlocs = false;
          for (var k = 0; k < lecon.blocs.length; k++) {
            var bloc = lecon.blocs[k];
            var texte = simplifierTexte((bloc.titre || '') + ' ' + (bloc.texte || ''));
            if (texte.indexOf(requete) !== -1) {
              trouveDansBlocs = true;
              break;
            }
          }
          if (trouveDansBlocs) {
            resultats.push({
              type: 'lecon',
              chemin: ch.titre + ' — ' + nomMatiere(classeId, matiereId),
              titre: lecon.titre,
              classeId: classeId,
              matiereId: matiereId,
              indexChapitre: i,
              indexLecon: j
            });
          }
        }
      }
    }
  }

  if (resultats.length === 0) {
    zone.innerHTML = '<div class="vide">Aucun résultat pour « ' + champ.value + ' »<br><small>Essaye sans accent ni majuscule</small></div>';
    return;
  }

  var html = '';
  for (var r = 0; r < resultats.length; r++) {
    var res = resultats[r];
    html += '<div class="resultat-recherche">';
    if (res.type === 'chapitre') {
      html += '<button class="carte" onclick="afficherMenuChapitre(\'' + res.classeId + '\',\'' + res.matiereId + '\',' + res.indexChapitre + ')">';
    } else {
      html += '<button class="carte" onclick="afficherLecon(\'' + res.classeId + '\',\'' + res.matiereId + '\',' + res.indexChapitre + ',' + res.indexLecon + ')">';
    }
    html += '<span class="carte-texte">' + res.titre + '</span>';
    html += '<span class="carte-fleche">›</span>';
    html += '</button>';
    html += '<div class="resultat-chemin">' + res.chemin + '</div>';
    html += '</div>';
  }
  zone.innerHTML = html;
}

// ---------- A propos ----------
function afficherPropos() {
  majOnglets('propos');

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
  html += '<strong>Moteur : ' + APP_VERSION + ' | Données : ' + VERSION + '</strong><br>';
  html += '📶 Connexion Internet nécessaire pour le moment (le hors-ligne viendra à la fin).<br><br>';
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

function majOnglets(onglet) {
  var btns = document.querySelectorAll('.bas-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('actif');
  }
  var cible = document.getElementById('btn-' + onglet);
  if (cible) cible.classList.add('actif');
}

// ---------- Demarrage ----------
afficherAccueil();
