// ===== GUIDE - Moteur de l'application =====
// v3.8 - accueil couverture, partage QR, 8 matieres, nav flottante

var APP_VERSION = 'v3.8';

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

// ---------- Barre du bas : visible sauf sur l'accueil ----------
function majBarreBas(cacher) {
  var nav = document.querySelector('.barre-bas');
  if (nav) nav.classList.toggle('cachee', !!cacher);
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

// ---------- Accueil (couverture facon croquis) ----------
var classeAccueil = null;

function afficherAccueil() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majOnglets('accueil');
  majBarreBas(true);

  if (!classeAccueil) {
    classeAccueil = CLASSES[0].id;
    for (var i = 0; i < CLASSES.length; i++) {
      if (CLASSES[i].dispo) { classeAccueil = CLASSES[i].id; break; }
    }
  }

  var html = '<div class="accueil-fond">';
  html += '<div class="acc-titre">GUIDE</div>';
  html += '<div class="acc-livres">📚📖📚</div>';
  html += '<div class="acc-slogan">Réussis ton année scolaire 🇲🇬</div>';

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

  html += '<button class="acc-partager" onclick="afficherPartage()">📤 Partager<br>Guide</button>';

  html += '</div>';
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
      html += '<button class="acc-mat" onclick="afficherChapitres(\'' + classeAccueil + '\',\'' + m.id + '\')">' + (m.court || m.nom) + '</button>';
    } else {
      html += '<span class="acc-mat off">' + (m.court || m.nom) + '</span>';
    }
  }
  if (!html) html = '<span class="acc-vide">Bientôt…</span>';
  zone.innerHTML = html;
}

// ---------- Partager Guide (QR code + lien) ----------
var GUIDE_URL = 'https://tomainazo2580.github.io/guide/';

var QR_MATRICE = [
'111111101010101111111',
'100000101010100100001',
'101110100110100101101',
'101110101111100101101',
'101110100011100101101',
'100000100010100100001',
'111111101010101111111',
'000000000011000000000',
'101101011010111111001',
'010111100011000110010',
'111011010100001101110',
'000111011000111101010',
'101010101010100001111',
'000000001110000011110',
'111111101001010101101',
'100000101110001010000',
'101110100101111011111',
'101110100011101001001',
'101110101010100001111',
'100000100110001110101',
'111111100011010101011'
];

function qrSvg() {
  var taille = QR_MATRICE.length;
  var cellule = 9;
  var marge = 4;
  var total = (taille + 2 * marge) * cellule;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + total + ' ' + total + '" width="190" height="190">';
  svg += '<rect width="' + total + '" height="' + total + '" fill="#ffffff" rx="12"/>';
  svg += '<g fill="#1e3a5f">';
  for (var y = 0; y < taille; y++) {
    for (var x = 0; x < taille; x++) {
      if (QR_MATRICE[y].charAt(x) === '1') {
        svg += '<rect x="' + ((x + marge) * cellule) + '" y="' + ((y + marge) * cellule) + '" width="' + cellule + '" height="' + cellule + '"/>';
      }
    }
  }
  svg += '</g></svg>';
  return svg;
}

function afficherPartage() {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majOnglets('accueil');
  majBarreBas(false);

  var html = '<button class="retour" onclick="afficherAccueil()">← Retour</button>';
  html += '<div class="partage-carte">';
  html += '<div class="partage-titre">📤 Partager Guide</div>';
  html += '<div class="partage-texte">Ton ami scanne ce code avec l\'appareil photo de son téléphone : Guide s\'ouvre dans son navigateur. Tu peux aussi lui envoyer le lien par message.</div>';
  html += '<div class="partage-qr">' + qrSvg() + '</div>';
  html += '<div class="partage-lien">' + GUIDE_URL + '</div>';
  html += '<div class="partage-boutons">';
  html += '<button class="btn-vert" onclick="partagerGuide()">📤 Envoyer le lien</button>';
  html += '<button class="btn-secondaire" onclick="copierGuide()">📋 Copier le lien</button>';
  html += '</div></div>';
  afficher(html);
}

function partagerGuide() {
  if (navigator.share) {
    navigator.share({ title: 'Guide', text: 'Guide — Révisions scolaires de la 6e à la Terminale (programme de Madagascar) :', url: GUIDE_URL });
  } else {
    copierGuide();
  }
}

function copierGuide() {
  var fini = function(ok) {
    alert(ok ? '✅ Lien copié ! Colle-le dans un message.' : 'Voici le lien à copier :\n' + GUIDE_URL);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(GUIDE_URL).then(function() { fini(true); }, function() { fini(false); });
  } else {
    fini(false);
  }
  function fini(ok) { fini2(ok); }
  function fini2(ok) { fini3(ok); }
  function fini3(ok) {
    if (ok) { alert('✅ Lien copié ! Colle-le dans un message.'); }
    else { prompt('Copie ce lien :', GUIDE_URL); }
  }
}

// ---------- Matieres ----------
function afficherMatieres(classeId) {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majBarreBas(false);
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
  majBarreBas(false);
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
  majBarreBas(false);
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

// ---------- Une lecon (navigation flottante) ----------
function afficherLecon(classeId, matiereId, indexChapitre, indexLecon) {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majBarreBas(false);
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

  html += '<div style="height:110px"></div>';
  afficher(html);

  var nav = document.createElement('div');
  nav.className = 'nav-flottant';
  var bPrec, bSuite;

  if (indexLecon > 0) {
    bPrec = document.createElement('button');
    bPrec.textContent = '‹';
    bPrec.onclick = function() { afficherLecon(classeId, matiereId, indexChapitre, indexLecon - 1); };
  } else {
    bPrec = document.createElement('button');
    bPrec.className = 'nf-vide';
    bPrec.tabIndex = -1;
  }
  nav.appendChild(bPrec);

  var bMenu = document.createElement('button');
  bMenu.className = 'nf-maison';
  bMenu.textContent = '🏠';
  bMenu.onclick = function() { afficherMenuChapitre(classeId, matiereId, indexChapitre); };
  nav.appendChild(bMenu);

  if (indexLecon < ch.lecons.length - 1) {
    bSuite = document.createElement('button');
    bSuite.textContent = '›';
    bSuite.onclick = function() { afficherLecon(classeId, matiereId, indexChapitre, indexLecon + 1); };
  } else {
    bSuite = document.createElement('button');
    bSuite.className = 'nf-exos';
    bSuite.textContent = '✏️';
    bSuite.onclick = function() { afficherExercices(classeId, matiereId, indexChapitre); };
  }
  nav.appendChild(bSuite);

  document.body.appendChild(nav);
}

// ---------- Exercices ----------
function afficherExercices(classeId, matiereId, index) {
  if (verrouExamen()) { afficherVerrouillage(); return; }
  majBarreBas(false);
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
  majBarreBas(false);

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
  majBarreBas(false);

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
  majBarreBas(false);

  var sombre = localStorage.getItem('guide-theme') === 'sombre';
  var nb = 0;
  var cles = Object.keys(CONTENU);
  for (var i = 0; i < cles.length; i++) {
    nb += CONTENU[cles[i]].length;
  }

  var html = '<h2 class="titre-page">⚙️ Réglages</h2>';

  html += '<div class="reglage-ligne"><span>🌙 Mode sombre</span>' +
    '<button class="switch' + (sombre ? ' on' : '') + '" onclick="basculerTheme()"><span class="switch-pastille"></span></button></div>';

  html += '<div class="reglage-ligne"><span>📤 Partager Guide</span>' +
    '<button class="btn-nav" onclick="afficherPartage()">Ouvrir ›</button></div>';

  html += '<h3 class="titre-section">ℹ️ À propos</h3>';
  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-texte">';
  html += '<strong>Guide</strong> t\'accompagne de la 6ème à la Terminale : leçons claires, exercices corrigés en 4 niveaux.<br><br>';
  html += '🇲🇬 Basée sur le programme officiel de Madagascar, complétée par Guide.<br><br>';
  html += '<strong>Moteur : ' + APP_VERSION + ' | Données : ' + VERSION + '</strong><br>';
  html += '📶 Connexion Internet nécessaire pour le moment (le hors-ligne viendra à la fin).<br><br>';
  html += '✓ Contenu chargé : ' + cles.length + ' matière(s), ' + nb + ' chapitre(s)<br><br>';
  html += '💬 Une idée, un souci ? Écris-nous sur <a href="https://tomainazo2580.github.io/tsiky/" target="_blank" rel="noopener"><strong>Tsiky</strong></a> (gratuit) : 034 39 949 07';
  html += '</div></div>';

  afficher(html);
}

// ---------- Utilitaires ----------
function afficher(html) {
  var ancien = document.querySelector('.nav-flottant');
  if (ancien) ancien.remove();
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
