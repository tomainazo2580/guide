// ===== GUIDE - Moteur de l'application =====
// v3.7 - accueil croquis, 5 onglets, mode sombre, notes, verrou examen

var APP_VERSION = 'v3.7';

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

// ---------- Installation (banniere) ----------
var installPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  installPrompt = e;
});
window.addEventListener('appinstalled', function() {
  var b = document.getElementById('banniere-install');
  if (b) b.remove();
});

function estInstalle() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
    || window.navigator.standalone === true;
}

function banniereInstallVisible() {
  if (estInstalle()) return false;
  var ts = localStorage.getItem('guide-install-cache');
  if (ts && (Date.now() - Number(ts)) < 7 * 24 * 60 * 60 * 1000) return false;
  return true;
}

function installerApp() {
  if (installPrompt) {
    installPrompt.prompt();
    installPrompt = null;
  } else {
    alert("Pour installer Guide :\n\n1. Ouvre le menu ⋮ de Chrome (en haut à droite)\n2. Touche « Ajouter à l'écran d'accueil »\n3. Valide\n\nL'icône Guide apparaîtra sur ton écran d'accueil !");
  }
}

function cacherInstall() {
  localStorage.setItem('guide-install-cache', String(Date.now()));
  var b = document.getElementById('banniere-install');
  if (b) b.remove();
}

// ---------- Mode sombre ----------
function appliquerTheme() {
  if (localStorage.getItem('guide-theme') === 'sombre') {
    document.body.classList.add('sombre');
  } else {
    document.body.classList.remove('sombre');
  }
}

function basculerTheme() {
  var sombre = localStorage.getItem('guide-theme') === 'sombre';
  localStorage.setItem('guide-theme', sombre ? 'clair' : 'sombre');
  appliquerTheme();
  afficherReglages();
}

// ---------- Verrouillage examen ----------
function verrouExamen() {
  return (typeof examenVerrouille === 'function') && examenVerrouille();
}

function afficherVerrouillage() {
  majOnglets('');
  var html = '<div class="vide">🔒<br><br><strong>Examen en cours</strong><br><br>';
  html += "Les leçons et les corrections sont verrouillés<br>jusqu'à la fin de l'épreuve.<br><br>";
  html += '<button class="btn-principal" onclick="afficherExamen()">🎓 Aller à l\'examen</button></div>';
  afficher(html);
}

// ---------- Accueil (facon croquis) ----------
var classeAccueil = null;

function afficherAccueil() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majOnglets('accueil');

  if (!classeAccueil) {
    classeAccueil = CLASSES[0].id;
    for (var i = 0; i < CLASSES.length; i++) {
      if (CLASSES[i].dispo) { classeAccueil = CLASSES[i].id; break; }
    }
  }

  var html = '';

  if (banniereInstallVisible()) {
    html += '<div class="banniere-install" id="banniere-install">' +
      '<span class="bi-icone">📲</span>' +
      '<span class="bi-texte">Installe <strong>Guide</strong> sur ton téléphone</span>' +
      '<button class="bi-btn" onclick="installerApp()">Installer</button>' +
      '<button class="bi-x" onclick="cacherInstall()">✕</button>' +
      '</div>';
  }

  html += '<div class="acc-classes">';
  for (var j = 0; j < CLASSES.length; j++) {
    var c = CLASSES[j];
    html += '<button class="acc-classe' + (c.id === classeAccueil ? ' actif' : '') + (c.dispo ? '' : ' off') +
      '" onclick="choisirClasse(\'' + c.id + '\')">' + nomCourtClasse(c.id) + '</button>';
  }
  html += '</div>';

  html += '<div class="acc-matieres" id="acc-matieres"></div>';

  afficher(html);
  remplirMatieresAccueil();
}

function choisirClasse(id) {
  classeAccueil = id;
  afficherAccueil();
}

function remplirMatieresAccueil() {
  var zone = document.getElementById('acc-matieres');
  if (!zone) return;
  var mats = MATIERES[classeAccueil] || [];
  var html = '';
  for (var i = 0; i < mats.length; i++) {
    var m = mats[i];
    if (m.dispo) {
      html += '<button class="acc-mat" onclick="afficherChapitres(\'' + classeAccueil + '\',\'' + m.id + '\')">' + m.icone + '</button>';
    } else {
      html += '<span class="acc-mat off">' + m.icone + '</span>';
    }
  }
  if (!html) html = '<span class="acc-vide">Bientôt…</span>';
  zone.innerHTML = html;
}

// ---------- Matieres ----------
function afficherMatieres(classeId) {
  if (verrouExamen()) { afficherVerrouillage(); return; }
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
  if (verrouExamen()) { afficherVerrouillage(); return; }
  var chapitres = obtenirChapitres(classeId, matiereId);
  var html = '<button class="retour" onclick="afficherAccueil()">← Retour</button>';
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
  if (verrouExamen()) { afficherVerrouillage(); return; }
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
  if (verrouExamen()) { afficherVerrouillage(); return; }
  var chapitres = obtenirChapitres(classeId, matiereId);
  var ch = chapitres[indexChapitre];
  var lecon = ch.lecons[indexLecon];

  var html = '<button class="retour" onclick="afficherMenuChapitre(\'' + classeId + '\',\'' + matiereId + '\',' + indexChapitre + ')">← ' + ch.titre + '</button>';
  html += '<div class="lecon-progression">Leçon ' + (indexLecon + 1) + ' / ' + ch.lecons.length + '</div>';
  html += '<div class="prog-barre"><div class="prog-remplie" style="width:' + Math.round(((indexLecon + 1) / ch.lecons.length) * 100) + '%"></div></div>';
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
  if (verrouExamen()) { afficherVerrouillage(); return; }
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

// ---------- Recherche (tolere accents et majuscules) ----------
function afficherRecherche() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
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

// ---------- Mes notes ----------
function afficherNotes() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majOnglets('notes');

  var notes = localStorage.getItem('guide-notes-perso') || '';
  var html = '<h2 class="titre-page">📒 Mes notes</h2>';
  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-titre">✍️ Mes notes personnelles</div>';
  html += '<textarea id="notes-perso" class="notes-textarea" placeholder="Écris ici tes notes, rappels, astuces à retenir..." oninput="sauverNotesPerso()">' + echapperHtml(notes) + '</textarea>';
  html += '</div>';
  html += '<h3 class="titre-section">🎓 Mes examens</h3>';
  html += '<div id="notes-examens"></div>';

  afficher(html);

  if (typeof afficherHistoriqueExamens === 'function') {
    afficherHistoriqueExamens('notes-examens');
  }
}

function sauverNotesPerso() {
  localStorage.setItem('guide-notes-perso', document.getElementById('notes-perso').value);
}

function echapperHtml(t) {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- Reglages ----------
function afficherReglages() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majOnglets('reglages');

  var sombre = localStorage.getItem('guide-theme') === 'sombre';
  var nb = 0;
  var cles = Object.keys(CONTENU);
  for (var i = 0; i < cles.length; i++) {
    nb += CONTENU[cles[i]].length;
  }

  var html = '<h2 class="titre-page">⚙️ Réglages</h2>';

  html += '<div class="reglage-ligne"><span>🌙 Mode sombre</span>' +
    '<button class="switch' + (sombre ? ' on' : '') + '" onclick="basculerTheme()"><span class="switch-pastille"></span></button></div>';

  html += '<h3 class="titre-section">ℹ️ À propos</h3>';
  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-texte">';
  html += '<strong>Guide</strong> t\'accompagne de la 6ème à la Terminale : leçons claires, exercices corrigés en 4 niveaux.<br><br>';
  html += '🇲🇬 Basée sur le programme officiel de Madagascar, complétée par Guide.<br><br>';
  html += '<strong>Moteur : ' + APP_VERSION + ' | Données : ' + VERSION + '</strong><br>';
  html += '📶 Connexion Internet nécessaire pour le moment (le hors-ligne viendra à la fin).<br><br>';
  html += '✓ Contenu chargé : ' + cles.length + ' matière(s), ' + nb + ' chapitre(s)<br><br>';
  html += '💬 Une idée, un souci ? Écris-nous sur <strong>Tsiky</strong> (gratuit) : 034 39 949 07';
  html += '</div></div>';

  afficher(html);
}

// ---------- Utilitaires ----------
function afficher(html) {
  ecran.innerHTML = html;
  window.scrollTo(0, 0);
  ecran.scrollTop = 0;
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

function nomCourtClasse(id) {
  var courts = { '6e': '6e', '5e': '5e', '4e': '4e', '3e': '3e', '2nde': '2nde', '1ere': '1ère', 'term': 'T' };
  return courts[id] || id;
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
  var btns = document.querySelectorAll('.barre-bas button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('actif');
  }
  var cible = document.getElementById('btn-' + onglet);
  if (cible) cible.classList.add('actif');
}

// ---------- Demarrage ----------
appliquerTheme();
afficherAccueil();
// === FIN app.js ===

  html += '<div class="bloc bloc-regle"><div class="bloc-titre">ℹ️ Comment ça marche</div><div class="bloc-texte">';
  html += '• Choisis une matière : Guide compose un sujet de 5 exercices, différent à chaque essai.<br>';
  html += '• Tu as 2 h. Pendant l\'épreuve, les leçons et les corrections sont verrouillés.<br>';
  html += '• Écris tes réponses sur une feuille.<br>';
  html += '• À la fin, tu compares avec le corrigé et tu t\'auto-évalues honnêtement.<br>';
  html += '• Ta note sur 20 est gardée dans 📒 Notes.';
  html += '</div></div>';

  if (!mats.length) {
    html += '<div class="vide">Aucune matière disponible pour le moment.</div>';
  }
  for (var i = 0; i < mats.length; i++) {
    var m = mats[i];
    html += '<button class="carte" onclick="exaConfirmation(\'' + m.classeId + '\',\'' + m.id + '\')">' +
      '<span class="carte-icone">' + m.icone + '</span>' +
      '<span class="carte-texte">' + m.nom + ' — ' + m.classeNom +
      '<br><span class="carte-sous">' + m.nbExos + ' exercices dans la banque</span></span>' +
      '<span class="carte-fleche">›</span></button>';
  }
  afficher(html);
}

// ---------- Ecran 2 : confirmation ----------
function exaConfirmation(classeId, matiereId) {
  var html = '<h2 class="titre-page">' + iconeMatiere(classeId, matiereId) + ' Examen — ' + nomMatiere(classeId, matiereId) + ' ' + nomClasse(classeId) + '</h2>';
  html += '<div class="bloc bloc-methode"><div class="bloc-titre">⏱ Conditions de l\'épreuve</div><div class="bloc-texte">';
  html += '• 5 exercices tirés au hasard — note sur 20<br>';
  html += '• Durée : 2 h<br>';
  html += '• Leçons et corrections verrouillés jusqu\'à la fin<br>';
  html += '• Prévois une feuille et un stylo<br>';
  html += '• Si tu fermes l\'app, le temps continue de s\'écouler';
  html += '</div></div>';
  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaLancer(\'' + classeId + '\',\'' + matiereId + '\')">▶️ Lancer l\'examen</button>';
  html += '<button class="btn-secondaire" onclick="exaIntro()">← Choisir une autre matière</button>';
  html += '</div>';
  afficher(html);
}

// ---------- Lancer ----------
function exaLancer(classeId, matiereId) {
  var items = exaComposer(classeId, matiereId);
  if (items.length < 3) {
    alert("Pas assez d'exercices pour composer un sujet.");
    return;
  }
  var debut = Date.now();
  exaEcrireSession({
    classeId: classeId,
    matiereId: matiereId,
    debut: debut,
    fin: debut + EXA_DUREE_MS,
    phase: 'en-cours',
    items: items,
    evals: {}
  });
  afficherExamen();
}

// ---------- Ecran 3 : l'epreuve ----------
function exaEpreuve(s) {
  majOnglets('examen');
  var html = '<div class="exa-chrono">';
  html += '<div class="exa-chrono-label">⏱ Temps restant</div>';
  html += '<div id="exa-temps" class="exa-temps">' + exaChronoTexte(s.fin - Date.now()) + '</div>';
  html += '<div class="exa-chrono-sous">' + iconeMatiere(s.classeId, s.matiereId) + ' ' + nomMatiere(s.classeId, s.matiereId) + ' — ' + nomClasse(s.classeId) + '</div>';
  html += '</div>';
  html += '<div id="exa-alerte" class="exa-alerte cache">⏰ Temps écoulé ! Termine ta réponse, puis touche « J\'ai terminé » pour voir le corrigé.</div>';
  html += '<div class="bloc bloc-regle"><div class="bloc-titre">✍️ Consigne</div><div class="bloc-texte">Écris tes réponses sur une feuille, comme au vrai examen. Quand tu as fini, touche « J\'ai terminé ».</div></div>';

  for (var i = 0; i < s.items.length; i++) {
    var ex = exaExercice(s, s.items[i]);
    if (!ex) continue;
    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Exercice ' + (i + 1) + ' — ' + s.items[i].points + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '</div>';
  }

  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaTerminer()">✅ J\'ai terminé — voir le corrigé</button>';
  html += '<button class="btn-danger" onclick="exaAbandonner()">Abandonner l\'examen</button>';
  html += '</div>';
  afficher(html);
  exaDemarrerMinuteur();
}

// ---------- Minuteur ----------
function exaStopMinuteur() {
  if (exaMinuteur) { clearInterval(exaMinuteur); exaMinuteur = null; }
}

function exaDemarrerMinuteur() {
  exaStopMinuteur();
  exaMinuteur = setInterval(exaTick, 1000);
  exaTick();
}

function exaTick() {
  var s = exaLireSession();
  var el = document.getElementById('exa-temps');
  if (!s || s.phase !== 'en-cours' || !el) { exaStopMinuteur(); return; }
  var reste = s.fin - Date.now();
  if (reste <= 0) {
    el.textContent = '0:00:00';
    var alerte = document.getElementById('exa-alerte');
    if (alerte) alerte.classList.remove('cache');
    exaStopMinuteur();
    return;
  }
  el.textContent = exaChronoTexte(reste);
}

// ---------- Terminer / abandonner ----------
function exaTerminer() {
  var s = exaLireSession();
  if (!s) return;
  if (!confirm("Terminer l'examen et voir le corrigé ?\nTu ne pourras plus revenir à l'épreuve.")) return;
  s.phase = 'corrige';
  s.tempsFin = Date.now();
  s.evals = s.evals || {};
  exaEcrireSession(s);
  exaStopMinuteur();
  exaCorrige(s);
}

function exaAbandonner() {
  if (!confirm("Abandonner l'examen ? Rien ne sera enregistré.")) return;
  exaEffacerSession();
  exaStopMinuteur();
  exaIntro();
}

// ---------- Ecran 4 : corrige + auto-evaluation ----------
function exaCorrige(s) {
  majOnglets('examen');
  exaStopMinuteur();
  var html = '<h2 class="titre-page">📖 Corrigé et auto-évaluation</h2>';
  html += '<div class="bloc bloc-definition"><div class="bloc-titre">💡 Comment faire</div><div class="bloc-texte">Compare ta feuille avec la correction, puis évalue-toi honnêtement pour chaque exercice.</div></div>';

  for (var i = 0; i < s.items.length; i++) {
    var it = s.items[i];
    var ex = exaExercice(s, it);
    if (!ex) continue;
    var cur = (s.evals && s.evals[i]) || '';
    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Exercice ' + (i + 1) + ' — ' + it.chapTitre + ' — ' + exaNoteTexte(it.points) + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '<div class="correction">' + nl2br(ex.correction) + '</div>';
    html += '<div class="exa-eval"><div class="exa-eval-q">Comment as-tu réussi cet exercice ?</div>';
    html += '<div class="exa-eval-btns">';
    html += '<button class="exa-eval-btn' + (cur === 'reussi' ? ' actif' : '') + '" onclick="exaEval(' + i + ',\'reussi\',this)">✅ Réussi</button>';
    html += '<button class="exa-eval-btn' + (cur === 'partie' ? ' actif' : '') + '" onclick="exaEval(' + i + ',\'partie\',this)">🟡 En partie</button>';
    html += '<button class="exa-eval-btn' + (cur === 'revoir' ? ' actif' : '') + '" onclick="exaEval(' + i + ',\'revoir\',this)">❌ À revoir</button>';
    html += '</div></div></div>';
  }

  html += '<div id="exa-msg" class="exa-alerte cache"></div>';
  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaBilan()">📊 Voir mon bilan</button>';
  html += '<button class="btn-danger" onclick="exaAbandonner()">Quitter sans enregistrer</button>';
  html += '</div>';
  afficher(html);
}

function exaEval(i, val, btn) {
  var s = exaLireSession();
  if (!s) return;
  s.evals = s.evals || {};
  s.evals[i] = val;
  exaEcrireSession(s);
  var freres = btn.parentNode.querySelectorAll('.exa-eval-btn');
  for (var k = 0; k < freres.length; k++) freres[k].classList.remove('actif');
  btn.classList.add('actif');
  var msg = document.getElementById('exa-msg');
  if (msg) msg.classList.add('cache');
}

// ---------- Bilan ----------
function exaBilan() {
  var s = exaLireSession();
  if (!s) return;

  var manquants = 0;
  for (var i = 0; i < s.items.length; i++) {
    if (!s.evals || !s.evals[i]) manquants++;
  }
  if (manquants) {
    var msg = document.getElementById('exa-msg');
    if (msg) {
      msg.textContent = '⚠️ Évalue chaque exercice avant de voir le bilan (' + manquants + ' restant(s)).';
      msg.classList.remove('cache');
    }
    return;
  }

  var points = 0;
  var total = 0;
  var aRevoir = [];
  var details = [];
  for (i = 0; i < s.items.length; i++) {
    var it = s.items[i];
    total += it.points;
    var res = s.evals[i];
    if (res === 'reussi') points += it.points;
    else if (res === 'partie') points += it.points / 2;
    details.push({ chapTitre: it.chapTitre, points: it.points, res: res });
    if (res !== 'reussi' && aRevoir.indexOf(it.chapTitre) === -1) aRevoir.push(it.chapTitre);
  }

  var note20 = Math.round((points / total) * 20 * 2) / 2;
  var entree = {
    date: Date.now(),
    classeId: s.classeId,
    matiereId: s.matiereId,
    matiereNom: nomMatiere(s.classeId, s.matiereId),
    matiereIcone: iconeMatiere(s.classeId, s.matiereId),
    note20: note20,
    points: points,
    total: total,
    pct: Math.round((points / total) * 100),
    aRevoir: aRevoir,
    details: details
  };

  var histo = exaLireHisto();
  histo.push(entree);
  exaEcrireHisto(histo.slice(-50));
  exaEffacerSession();
  exaStopMinuteur();
  exaRenderBilan(entree);
}

function exaRenderBilan(e) {
  var message;
  if (e.note20 >= 16) message = 'Excellent travail ! 🎉';
  else if (e.note20 >= 14) message = 'Très bien ! Continue comme ça.';
  else if (e.note20 >= 10) message = 'Bien ! Quelques points à consolider.';
  else if (e.note20 >= 8) message = 'Passable : revois les chapitres ci-dessous.';
  else message = 'Courage ! Reprends les leçons, puis refais un examen.';

  var html = '<h2 class="titre-page">📊 Bilan — ' + e.matiereIcone + ' ' + e.matiereNom + '</h2>';
  html += '<div class="exa-score">';
  html += '<div class="exa-note">' + exaNoteTexte(e.note20) + ' / 20</div>';
  html += '<div class="exa-pct">' + e.pct + ' %</div>';
  html += '<div class="exa-msg">' + message + '</div>';
  html += '</div>';

  html += '<div class="bloc bloc-definition"><div class="bloc-titre">🧾 Détail</div><div class="bloc-texte">';
  for (var i = 0; i < e.details.length; i++) {
    var d = e.details[i];
    var lib = d.res === 'reussi' ? '✅' : (d.res === 'partie' ? '🟡' : '❌');
    html += lib + ' Ex. ' + (i + 1) + ' — ' + d.chapTitre + ' (' + exaNoteTexte(d.points) + ' pts)<br>';
  }
  html += '</div></div>';

  if (e.aRevoir.length) {
    html += '<div class="bloc bloc-methode"><div class="bloc-titre">📚 À revoir</div><div class="bloc-texte">';
    for (i = 0; i < e.aRevoir.length; i++) html += '• ' + e.aRevoir[i] + '<br>';
    html += '</div></div>';
  }

  html += '<div class="exa-actions">';
  if (e.aRevoir.length) {
    html += '<button class="btn-principal" onclick="afficherChapitres(\'' + e.classeId + '\',\'' + e.matiereId + '\')">📖 Revoir les leçons</button>';
  }
  html += '<button class="btn-secondaire" onclick="exaIntro()">🎓 Passer un autre examen</button>';
  html += '</div>';
  html += '<p class="histo-detail" style="text-align:center;margin-top:12px">Ce bilan est gardé dans 📒 Notes.</p>';
  afficher(html);
}

// ---------- Historique (onglet Notes) ----------
function afficherHistoriqueExamens(zoneId) {
  var zone = document.getElementById(zoneId);
  if (!zone) return;
  var histo = exaLireHisto();
  if (!histo.length) {
    zone.innerHTML = '<div class="vide">Aucun examen passé pour le moment.<br>Va dans 🎓 Examen pour t\'entraîner !</div>';
    return;
  }
  var somme = 0;
  for (var i = 0; i < histo.length; i++) somme += histo[i].note20;
  var moyenne = Math.round((somme / histo.length) * 2) / 2;

  var html = '<div class="histo-resume">🎓 ' + histo.length + ' examen(s) — moyenne générale : ' + exaNoteTexte(moyenne) + ' / 20</div>';
  var debut = Math.max(0, histo.length - 10);
  for (i = histo.length - 1; i >= debut; i--) {
    var e = histo[i];
    html += '<div class="histo-item">';
    html += '<div class="histo-tete"><span>' + e.matiereIcone + ' ' + e.matiereNom + ' — ' + exaNoteTexte(e.note20) + ' / 20</span><span class="histo-date">' + exaDateTexte(e.date) + '</span></div>';
    html += '<div class="mini-barre"><div class="mini-remplie" style="width:' + e.pct + '%"></div></div>';
    if (e.aRevoir && e.aRevoir.length) {
      html += '<div class="histo-detail">À revoir : ' + e.aRevoir.join(', ') + '</div>';
    }
    html += '</div>';
  }
  html += '<div class="exa-actions"><button class="btn-danger" onclick="exaEffacerHisto()">🗑️ Effacer l\'historique des examens</button></div>';
  zone.innerHTML = html;
}

function exaEffacerHisto() {
  if (!confirm("Effacer tout l'historique de tes examens ? Cette action est irréversible.")) return;
  localStorage.removeItem(EXA_CLE_HISTO);
  afficherHistoriqueExamens('notes-examens');
}
// === FIN examen.js ===
```

---

## ✅ Ce que tu fais

1. Remplace `css/style.css`
2. Remplace `js/app.js`
3. Crée `js/examen.js` (dans le dossier **js/**)
4. Rituel : **3 min → fermer Chrome complètement → rouvrir → tirer vers le bas 2 fois**

## 🔎 Vérifications

- **Réglages → À propos** : `Moteur : v3.7 | Données : v3.21` + « Contenu chargé : 1 matière(s), 16 chapitre(s) »
- **Accueil** : rectangle ombré des classes à gauche → touche **6e** → icônes 📐⚗️🌱 en bas → touche 📐 → les 16 chapitres s'ouvrent **dans la fenêtre suivante**
- **Bannière 📲** en haut de l'accueil (✕ la fait disparaître 7 jours)
- **🎓 Examen** → Maths 6e → ▶️ Lancer → chrono **1:59:59**, 5 exercices → essaie les autres onglets : **🔒 bloqués** → ✅ J'ai terminé → corrigé + auto-évaluation → 📊 bilan **/20**
- **📒 Notes** : bloc-notes personnel + ton bilan d'examen
- **⚙️ Réglages** : interrupteur 🌙 mode sombre

Si un bandeau rouge ⚠️ apparaît, copie-moi son message. Bon test !
