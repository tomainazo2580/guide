// ===== GUIDE - Moteur de l'application =====
// v3.2 - boutons flottants, barre du bas, recherche

var ecran = document.getElementById('ecran');

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

  afficher(html);

  // Boutons flottants
  ajouterBoutonsFlottants(classeId, matiereId, indexChapitre, indexLecon, ch.lecons.length);
}

// ---------- Boutons flottants lecons ----------
function ajouterBoutonsFlottants(classeId, matiereId, indexChapitre, indexLecon, totalLecons) {
  var ancien = document.querySelector('.nav-flottant');
  if (ancien) ancien.remove();

  var nav = document.createElement('div');
  nav.className = 'nav-flottant';

  // Bouton precedent
  if (indexLecon > 0) {
    var btnPrec = document.createElement('button');
    btnPrec.className = 'btn-rond btn-rond-gauche';
    btnPrec.innerHTML = '‹';
    btnPrec.onclick = function() {
      afficherLecon(classeId, matiereId, indexChapitre, indexLecon - 1);
    };
    nav.appendChild(btnPrec);
  } else {
    var espace = document.createElement('span');
    espace.style.width = '52px';
    nav.appendChild(espace);
  }

  // Bouton home (retour au menu du chapitre)
  var btnHome = document.createElement('button');
  btnHome.className = 'btn-rond btn-rond-centre';
  btnHome.innerHTML = '🏠';
  btnHome.onclick = function() {
    afficherMenuChapitre(classeId, matiereId, indexChapitre);
  };
  nav.appendChild(btnHome);

  // Bouton suivant ou exercices
  if (indexLecon < totalLecons - 1) {
    var btnSuiv = document.createElement('button');
    btnSuiv.className = 'btn-rond btn-rond-droite';
    btnSuiv.innerHTML = '›';
    btnSuiv.onclick = function() {
      afficherLecon(classeId, matiereId, indexChapitre, indexLecon + 1);
    };
    nav.appendChild(btnSuiv);
  } else {
    var btnExo = document.createElement('button');
    btnExo.className = 'btn-rond btn-rond-exercices';
    btnExo.innerHTML = '✏️';
    btnExo.onclick = function() {
      afficherExercices(classeId, matiereId, indexChapitre);
    };
    nav.appendChild(btnExo);
  }

  document.body.appendChild(nav);
}

// ---------- Exercices ----------
function afficherExercices(classeId, matiereId, index) {
  supprimerBoutonsFlottants();
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

// ---------- Recherche ----------
function afficherRecherche() {
  majOnglets('recherche');
  supprimerBoutonsFlottants();

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
  var requete = champ.value.toLowerCase().trim();

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

      // Chercher dans le titre du chapitre
      if (ch.titre.toLowerCase().indexOf(requete) !== -1) {
        resultats.push({
          type: 'chapitre',
          chemin: nomMatiere(classeId, matiereId) + ' — ' + nomClasse(classeId),
          titre: ch.titre,
          classeId: classeId,
          matiereId: matiereId,
          indexChapitre: i
        });
      }

      // Chercher dans les lecons
      for (var j = 0; j < ch.lecons.length; j++) {
        var lecon = ch.lecons[j];
        if (lecon.titre.toLowerCase().indexOf(requete) !== -1) {
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
          // Chercher dans le texte des blocs
          for (var k = 0; k < lecon.blocs.length; k++) {
            var bloc = lecon.blocs[k];
            var texte = (bloc.titre || '') + ' ' + (bloc.texte || '');
            if (texte.toLowerCase().indexOf(requete) !== -1) {
              resultats.push({
                type: 'lecon',
                chemin: ch.titre + ' — ' + nomMatiere(classeId, matiereId),
                titre: lecon.titre,
                classeId: classeId,
                matiereId: matiereId,
                indexChapitre: i,
                indexLecon: j
              });
              break;
            }
          }
        }
      }
    }
  }

  if (resultats.length === 0) {
    zone.innerHTML = '<div class="vide">Aucun résultat pour « ' + requete + ' »</div>';
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
  supprimerBoutonsFlottants();

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
  supprimerBoutonsFlottants();
}

function supprimerBoutonsFlottants() {
  var ancien = document.querySelector('.nav-flottant');
  if (ancien) ancien.remove();
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
