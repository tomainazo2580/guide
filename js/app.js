// ===== GUIDE - Application principale =====

var classeActive = null;
var matiereActive = null;
var chapitreActif = null;

var VUES = ['vue-classes', 'vue-matieres', 'vue-chapitres', 'vue-chapitre', 'vue-examen', 'vue-notes', 'vue-apropos'];
var TITRES = {
  'vue-classes': '📘 Guide',
  'vue-matieres': '📘 Guide',
  'vue-chapitres': '📘 Guide',
  'vue-chapitre': '📘 Guide',
  'vue-examen': '📝 Examen',
  'vue-notes': '📊 Mes notes',
  'vue-apropos': 'ℹ️ À propos'
};

// ---------- Navigation ----------
function afficherVue(id) {
  for (var i = 0; i < VUES.length; i++) {
    document.getElementById(VUES[i]).classList.toggle('cache', VUES[i] !== id);
  }
  document.getElementById('entete-titre').textContent = TITRES[id] || '📘 Guide';
  document.getElementById('btn-retour').style.visibility = (id === 'vue-classes') ? 'hidden' : 'visible';
  window.scrollTo(0, 0);
}

function retourArriere() {
  var vue = VUES.find(function(v) { return !document.getElementById(v).classList.contains('cache'); });
  if (vue === 'vue-matieres') allerAccueil();
  else if (vue === 'vue-chapitres') { classeActive && allerMatieres(classeActive); }
  else if (vue === 'vue-chapitre') allerChapitres(classeActive, matiereActive);
  else if (vue === 'vue-examen') { /* bloqué par le verrou */ }
  else if (vue === 'vue-notes') allerAccueil();
  else if (vue === 'vue-apropos') allerAccueil();
}

function allerAccueil() {
  classeActive = null; matiereActive = null; chapitreActif = null;
  afficherVue('vue-classes');
}

function allerMatieres(classeId) {
  classeActive = classeId;
  var c = classeDe(classeId);
  document.getElementById('titre-classe').textContent = '🎓 ' + c.nom;
  construireMatieres();
  afficherVue('vue-matieres');
}

function allerChapitres(classeId, matiereId) {
  classeActive = classeId; matiereActive = matiereId;
  var m = matiereDe(classeId, matiereId);
  document.getElementById('titre-matiere').textContent = m.icone + ' ' + m.nom + ' — ' + classeDe(classeId).nom;
  construireBandeauPremium();
  construireChapitres();
  afficherVue('vue-chapitres');
}

function allerChapitre(chapitreId) {
  var chapitres = contenuDe(classeActive, matiereActive);
  chapitreActif = null;
  for (var i = 0; i < chapitres.length; i++) {
    if (chapitres[i].id === chapitreId) { chapitreActif = chapitres[i]; break; }
  }
  if (!chapitreActif) return;
  document.getElementById('titre-chapitre').textContent = chapitreActif.titre;
  construireLecons();
  construireExercices();
  afficherOnglet('lecons');
  afficherVue('vue-chapitre');
  marquerChapitreLu(chapitreActif.id);
}

function afficherOnglet(nom) {
  document.getElementById('zone-lecons').classList.toggle('cache', nom !== 'lecons');
  document.getElementById('zone-exercices').classList.toggle('cache', nom !== 'exercices');
  document.getElementById('onglet-lecons').classList.toggle('actif', nom === 'lecons');
  document.getElementById('onglet-exercices').classList.toggle('actif', nom === 'exercices');
}

// ---------- Accueil : classes ----------
function construireClasses() {
  var html = '';
  for (var i = 0; i < CLASSES.length; i++) {
    var c = CLASSES[i];
    if (c.dispo) {
      html += '<button class="carte-classe" onclick="allerMatieres(\'' + c.id + '\')">'
        + '<span>🎓 ' + c.nom + '</span>'
        + '<span class="badge badge-dispo">Disponible</span>'
        + '</button>';
    } else {
      html += '<div class="carte-classe verrouillee">'
        + '<span>🎓 ' + c.nom + '</span>'
        + '<span class="badge badge-bientot">Bientôt</span>'
        + '</div>';
    }
  }
  document.getElementById('liste-classes').innerHTML = html;
}

// ---------- Matières ----------
function construireMatieres() {
  var ms = matieresDe(classeActive);
  var html = '';
  for (var i = 0; i < ms.length; i++) {
    var m = ms[i];
    if (!m.dispo) {
      html += '<div class="tuile-matiere verrouillee">'
        + '<div class="icone-matiere">' + m.icone + '</div>'
        + '<div class="nom-matiere">' + m.nom
        + '<span class="statut-matiere">Bientôt disponible</span></div>'
        + '</div>';
      continue;
    }
    var statut = estPremium(classeActive, m.id)
      ? '<span class="statut-matiere premium">💎 Premium</span>'
      : '<span class="statut-matiere">Gratuit · Premium ' + formatPrix(prixDe(classeActive)) + '</span>';
    html += '<button class="tuile-matiere" onclick="allerChapitres(\'' + classeActive + '\',\'' + m.id + '\')">'
      + '<div class="icone-matiere">' + m.icone + '</div>'
      + '<div class="nom-matiere">' + m.nom + statut + '</div>'
      + '</button>';
  }
  document.getElementById('liste-matieres').innerHTML = html;
}

// ---------- Bandeau premium ----------
function construireBandeauPremium() {
  var el = document.getElementById('bandeau-premium');
  var prix = formatPrix(prixDe(classeActive));
  if (estPremium(classeActive, matiereActive)) {
    el.className = 'bandeau-premium premium-actif';
    el.innerHTML = '<h3>💎 Premium actif</h3>'
      + '<p>Exercices niveau 4, chapitres stratégiques et examens illimités sont débloqués.</p>'
      + '<button class="btn-secondaire" onclick="demarrerExamen()">📝 Lancer un examen</button>';
  } else {
    var nb = examensAutorises(classeActive, matiereActive) - examensUtilises(classeActive, matiereActive);
    if (nb < 0) nb = 0;
    el.className = 'bandeau-premium';
    el.innerHTML = '<h3>🔒 Passe en Premium — ' + prix + '</h3>'
      + '<p>Débloque les exercices niveau 4, les 2 chapitres stratégiques et le mode examen illimité.</p>'
      + (nb > 0
          ? '<button class="btn-principal" onclick="demarrerExamen()">📝 Examen gratuit (' + nb + ' restant)</button>'
          : '<button class="btn-secondaire" onclick="ouvrirAPropos()">💎 Débloquer le Premium</button>');
  }
}

// ---------- Chapitres ----------
function construireChapitres() {
  var chapitres = contenuDe(classeActive, matiereActive);
  var premium = estPremium(classeActive, matiereActive);
  var lus = chapitresLus();
  var html = '';
  for (var i = 0; i < chapitres.length; i++) {
    var ch = chapitres[i];
    var verrouille = ch.premium && !premium;
    var badges = '';
    if (ch.guide) badges += '<span class="badge badge-guide">✚ Complété par Guide</span>';
    if (ch.premium) badges += '<span class="badge badge-premium">🔒 Stratégique</span>';
    var prog = lus.indexOf(ch.id) >= 0 ? '<span class="progression-chapitre">✓ Déjà lu</span>' : '';
    if (verrouille) {
      html += '<button class="item-chapitre verrouille" onclick="toast(\'🔒 Chapitre stratégique : passe en Premium pour le débloquer.\')">'
        + '<div class="num-chapitre">🔒</div>'
        + '<div class="titre-item">' + ch.titre + '<span class="badges">' + badges + '</span></div>'
        + '</button>';
    } else {
      html += '<button class="item-chapitre" onclick="allerChapitre(\'' + ch.id + '\')">'
        + '<div class="num-chapitre">' + (i + 1) + '</div>'
        + '<div class="titre-item">' + ch.titre + '<span class="badges">' + badges + '</span>' + prog + '</div>'
        + '</button>';
    }
  }
  document.getElementById('liste-chapitres').innerHTML = html;
}

// ---------- Leçons ----------
function construireLecons() {
  var html = '';
  for (var i = 0; i < chapitreActif.lecons.length; i++) {
    var lecon = chapitreActif.lecons[i];
    html += '<h3 style="color:var(--marine);margin:14px 0 10px">📖 ' + lecon.titre + '</h3>';
    for (var j = 0; j < lecon.blocs.length; j++) {
      html += rendreBloc(lecon.blocs[j]);
    }
  }
  document.getElementById('zone-lecons').innerHTML = html;
}

function rendreBloc(b) {
  if (b.type === 'definition' || b.type === 'regle' || b.type === 'formule' || b.type === 'methode' || b.type === 'remarque' || b.type === 'exemple') {
    return '<div class="bloc bloc-' + b.type + '"><h4>' + (b.titre || '') + '</h4><p>' + (b.texte || '') + '</p></div>';
  }
  if (b.type === 'schema') {
    return '<div class="bloc bloc-schema"><h4>' + (b.titre || '') + '</h4>' + (b.svg || '')
      + (b.legende ? '<div class="legende">' + b.legende + '</div>' : '') + '</div>';
  }
  if (b.type === 'tableau') {
    var h = '<div class="bloc"><h4>' + (b.titre || '') + '</h4><div class="tableau-defile"><table><tr>';
    for (var i = 0; i < b.entetes.length; i++) h += '<th>' + b.entetes[i] + '</th>';
    h += '</tr>';
    for (var r = 0; r < b.lignes.length; r++) {
      h += '<tr>';
      for (var c = 0; c < b.lignes[r].length; c++) h += '<td>' + b.lignes[r][c] + '</td>';
      h += '</tr>';
    }
    return h + '</table></div></div>';
  }
  return '';
}

// ---------- Exercices ----------
var NOMS_NIVEAUX = { 1: '⭐ Niveau 1', 2: '⭐⭐ Niveau 2', 3: '⭐⭐⭐ Niveau 3', 4: '💎 Niveau 4 — Premium' };

function construireExercices() {
  var premium = estPremium(classeActive, matiereActive);
  var exos = chapitreActif.exercices || [];
  var html = '';
  if (exos.length === 0) {
    html = '<p class="petit" style="text-align:center;margin-top:20px">Exercices en préparation pour ce chapitre.</p>';
  }
  for (var i = 0; i < exos.length; i++) {
    var ex = exos[i];
    if (ex.niveau === 4 && !premium) {
      html += '<div class="exercice exercice-verrouille">'
        + '<span class="badge badge-niveau n4">' + NOMS_NIVEAUX[4] + '</span>'
        + '<p>🔒 ' + (exos.length > 1 ? 'Cet exercice difficile est' : 'Cet exercice est') + ' réservé aux élèves Premium.</p>'
        + '<button class="btn-premium" onclick="ouvrirAPropos()">Débloquer pour ' + formatPrix(prixDe(classeActive)) + '</button>'
        + '</div>';
      continue;
    }
    html += '<div class="exercice">'
      + '<span class="badge badge-niveau n' + ex.niveau + '">' + NOMS_NIVEAUX[ex.niveau] + '</span>'
      + '<div class="enonce">' + ex.enonce + '</div>'
      + '<button class="btn-mini" onclick="basculerCorrection(this)">👁️ Voir la correction</button>'
      + '<div class="correction cache"><h5>✅ Correction</h5>' + ex.correction + '</div>'
      + '</div>';
  }
  document.getElementById('zone-exercices').innerHTML = html;
}

function basculerCorrection(btn) {
  var corr = btn.nextElementSibling;
  var visible = !corr.classList.contains('cache');
  corr.classList.toggle('cache');
  btn.textContent = visible ? '👁️ Voir la correction' : '🙈 Masquer la correction';
}

// ---------- Progression (chapitres lus) ----------
function chapitresLus() {
  try { return JSON.parse(localStorage.getItem('guide_lus') || '[]'); }
  catch (e) { return []; }
}

function marquerChapitreLu(id) {
  var lus = chapitresLus();
  if (lus.indexOf(id) < 0) {
    lus.push(id);
    localStorage.setItem('guide_lus', JSON.stringify(lus));
  }
}

// ---------- À propos / clés ----------
function ouvrirAPropos() {
  document.getElementById('apropos-id').textContent = obtenirIdAppareil();
  document.getElementById('apropos-version').textContent = 'Guide ' + VERSION + ' — fonctionne hors ligne 📴';
  var combos = combosDisponibles();
  var html = '';
  for (var i = 0; i < combos.length; i++) {
    var cl = classeDe(combos[i].classe);
    var m = matiereDe(combos[i].classe, combos[i].matiere);
    var s = statutMatiere(combos[i].classe, combos[i].matiere);
    var txt = s === 'premium' ? '💎 Premium' : (s === 'essai' ? '🎁 Essai (+1 examen)' : '🆓 Gratuit');
    html += '<div class="statut-ligne"><span>' + m.icone + ' ' + m.nom + ' ' + cl.nom + '</span><b>' + txt + '</b></div>';
  }
  document.getElementById('apropos-statut').innerHTML = html;
  document.getElementById('msg-cle').textContent = '';
  document.getElementById('champ-cle').value = '';
  afficherVue('vue-apropos');
}

function copierId() {
  var id = obtenirIdAppareil();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(id).then(function() { toast('📋 Identifiant copié : ' + id); });
  } else {
    toast('Ton identifiant : ' + id);
  }
}

function activerCle() {
  var champ = document.getElementById('champ-cle');
  var msg = document.getElementById('msg-cle');
  var res = activerCleSaisie(champ.value);
  if (!res.ok) {
    msg.className = 'erreur';
    msg.textContent = res.deja ? '⚠️ Cette clé est déjà activée sur cet appareil.' : '❌ Clé invalide. Vérifie les 6 chiffres.';
    return;
  }
  var cl = classeDe(res.res.classe);
  var m = matiereDe(res.res.classe, res.res.matiere);
  msg.className = 'ok';
  msg.textContent = res.res.type === 'premium'
    ? '✅ Premium activé : ' + m.nom + ' ' + cl.nom + ' !'
    : '✅ 1 examen supplémentaire débloqué : ' + m.nom + ' ' + cl.nom + ' !';
  champ.value = '';
  toast('🎉 Merci et bonne réussite !');
}

// ---------- Notes ----------
function allerNotes() {
  var notes = toutesLesNotes();
  var html = '';
  if (notes.length === 0) {
    html = '<p class="petit" style="text-align:center;margin-top:20px">Aucun examen terminé pour le moment.<br>Lance ton premier examen depuis une matière ! 📝</p>';
  }
  for (var i = notes.length - 1; i >= 0; i--) {
    var n = notes[i];
    var cl = classeDe(n.classe);
    var m = matiereDe(n.classe, n.matiere);
    var pc = Math.round(n.note / n.total * 100);
    var mention = pc >= 50 ? 'bonne' : (pc >= 30 ? 'moyenne' : 'faible');
    html += '<div class="item-note">'
      + '<div class="infos"><b>' + (m ? m.icone + ' ' + m.nom : n.matiere) + '</b> — ' + (cl ? cl.nom : n.classe)
      + '<span>' + n.date + '</span></div>'
      + '<span class="badge badge-note ' + mention + '">' + n.note + '/' + n.total + '</span>'
      + '</div>';
  }
  document.getElementById('liste-notes').innerHTML = html;
  afficherVue('vue-notes');
}

// ---------- Réinitialisation ----------
function reinitialiser() {
  if (!confirm('Effacer toute ta progression (chapitres lus, notes, clés) ?')) return;
  var id = obtenirIdAppareil();
  localStorage.clear();
  localStorage.setItem('guide_appareil_id', id);
  toast('🗑️ Progression réinitialisée.');
  allerAccueil();
}

// ---------- Toast ----------
var toastTimer = null;
function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('cache');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { t.classList.add('cache'); }, 3000);
}

// ---------- Démarrage ----------
function demarrer() {
  construireClasses();
  afficherVue('vue-classes');
  majVerrouExamen();
}
demarrer();
