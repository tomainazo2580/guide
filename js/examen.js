// ===== GUIDE - Mode examen (minuteur, verrou, tirage, auto-notation) =====

var examenTimer = null;
var examenEtat = null;

// ---------- Persistance ----------
function sauverExamens(enCours) {
  try {
    var t = JSON.parse(localStorage.getItem('guide_examens') || '{}');
    if (enCours) t.enCours = enCours; else delete t.enCours;
    localStorage.setItem('guide_examens', JSON.stringify(t));
  } catch (e) {}
}

function examenEnCours() {
  try {
    var t = JSON.parse(localStorage.getItem('guide_examens') || '{}');
    return t.enCours || null;
  } catch (e) { return null; }
}

function examensUtilises(classeId, matiereId) {
  var n = 0;
  var notes = toutesLesNotes();
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].classe === classeId && notes[i].matiere === matiereId) n++;
  }
  var enc = examenEnCours();
  if (enc && enc.termine && enc.classe === classeId && enc.matiere === matiereId) n++;
  return n;
}

function toutesLesNotes() {
  try { return JSON.parse(localStorage.getItem('guide_notes') || '[]'); }
  catch (e) { return []; }
}

// ---------- Lancement ----------
function demarrerExamen() {
  var enc = examenEnCours();
  if (enc && !enc.termine) { toast('⚠️ Un examen est déjà en cours.'); retournerExamen(); return; }

  var restants = examensAutorises(classeActive, matiereActive) - examensUtilises(classeActive, matiereActive);
  if (restants <= 0) {
    toast('🔒 Examens épuisés. Passe en Premium pour des examens illimités.');
    ouvrirAPropos();
    return;
  }

  var exos = banqueExercices(classeActive, matiereActive);
  if (exos.length < 4) { toast('⚠️ Pas assez d\'exercices pour un examen complet.'); return; }

  var tirage = melanger(exos.slice());
  var choix = [trouverNiveau(tirage, 1), trouverNiveau(tirage, 2), trouverNiveau(tirage, 3), trouverNiveau(tirage, 4)];
  var examens = [];
  var total = 0;
  for (var i = 0; i < choix.length; i++) {
    if (choix[i]) {
      examens.push(choix[i]);
      total += choix[i].points;
    }
  }

  examenEtat = {
    classe: classeActive,
    matiere: matiereActive,
    debut: Date.now(),
    dureeMin: DUREE_EXAMEN_MIN,
    exercices: examens,
    total: total,
    auto: {},
    termine: false
  };
  sauverExamens(examenEtat);
  afficherEpreuve();
  lancerMinuteur();
  majVerrouExamen();
  toast('📝 Examen lancé ! ' + (DUREE_EXAMEN_MIN / 60) + ' heures. Bon courage !');
}

function banqueExercices(classeId, matiereId) {
  var exos = [];
  var chapitres = contenuDe(classeId, matiereId);
  for (var i = 0; i < chapitres.length; i++) {
    var liste = chapitres[i].exercices || [];
    for (var j = 0; j < liste.length; j++) {
      exos.push({
        chapitre: chapitres[i].titre,
        niveau: liste[j].niveau,
        enonce: liste[j].enonce,
        correction: liste[j].correction,
        points: liste[j].points
      });
    }
  }
  return exos;
}

function melanger(tab) {
  for (var i = tab.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = tab[i]; tab[i] = tab[j]; tab[j] = tmp;
  }
  return tab;
}

function trouverNiveau(tab, n) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].niveau === n) return tab.splice(i, 1)[0];
  }
  return null;
}

// ---------- Épreuve ----------
function afficherEpreuve() {
  var e = examenEtat;
  var html = '<div class="examen-tete">'
    + '<div class="minuteur" id="examen-minuteur">--:--:--</div>'
    + '<div class="petit">Réponds sur une feuille, comme au vrai examen. La correction arrive à la fin.</div>'
    + '</div>';
  for (var i = 0; i < e.exercices.length; i++) {
    var ex = e.exercices[i];
    html += '<div class="examen-exercice">'
      + '<div class="num">Exercice ' + (i + 1) + ' — ' + ex.points + ' point' + (ex.points > 1 ? 's' : '') + '</div>'
      + '<div class="petit" style="margin-bottom:6px">' + ex.chapitre + '</div>'
      + '<div class="enonce">' + ex.enonce + '</div>'
      + '</div>';
  }
  html += '<button class="btn-danger" onclick="terminerEpreuve()">🏁 Terminer l\'épreuve et voir la correction</button>';
  document.getElementById('zone-examen').innerHTML = html;
  afficherVue('vue-examen');
}

function lancerMinuteur() {
  if (examenTimer) clearInterval(examenTimer);
  examenTimer = setInterval(majMinuteur, 1000);
  majMinuteur();
}

function tempsRestant() {
  if (!examenEtat) return 0;
  var ecoule = Math.floor((Date.now() - examenEtat.debut) / 1000);
  var reste = examenEtat.dureeMin * 60 - ecoule;
  return reste > 0 ? reste : 0;
}

function formatTemps(s) {
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var ss = s % 60;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
}

function majMinuteur() {
  if (!examenEtat || examenEtat.termine) { clearInterval(examenTimer); return; }
  var reste = tempsRestant();
  var el = document.getElementById('examen-minuteur');
  if (el) {
    el.textContent = formatTemps(reste);
    el.classList.toggle('alerte', reste < 600);
  }
  var v = document.getElementById('verrou-temps');
  if (v) v.textContent = formatTemps(reste);
  if (reste <= 0) {
    clearInterval(examenTimer);
    toast('⏰ Temps écoulé ! L\'épreuve est terminée.');
    terminerEpreuve();
  }
}

function terminerEpreuve() {
  if (!examenEtat) return;
  if (examenTimer) clearInterval(examenTimer);
  examenEtat.termine = true;
  sauverExamens(examenEtat);
  afficherCorrection();
  majVerrouExamen();
}

// ---------- Correction + auto-notation ----------
function afficherCorrection() {
  var e = examenEtat;
  var html = '<div class="examen-tete">'
    + '<div style="font-size:1.3rem;font-weight:700">🏁 Épreuve terminée</div>'
    + '<div class="petit">Compare tes réponses, puis note-toi honnêtement pour chaque exercice.</div>'
    + '</div>';
  for (var i = 0; i < e.exercices.length; i++) {
    var ex = e.exercices[i];
    html += '<div class="examen-exercice">'
      + '<div class="num">Exercice ' + (i + 1) + ' — ' + ex.points + ' point' + (ex.points > 1 ? 's' : '') + '</div>'
      + '<div class="enonce">' + ex.enonce + '</div>'
      + '<div class="correction"><h5>✅ Correction</h5>' + ex.correction + '</div>'
      + '<div style="display:flex;gap:8px;margin-top:10px">'
      + '<button class="btn-mini" style="flex:1;border-color:var(--vert);color:var(--vert)" onclick="noterExercice(' + i + ',' + ex.points + ')">✔️ Réussi (' + ex.points + ')</button>'
      + '<button class="btn-mini" style="flex:1;border-color:var(--rouge);color:var(--rouge)" onclick="noterExercice(' + i + ',0)">❌ Raté (0)</button>'
      + '</div>'
      + '<div id="note-exo-' + i + '" class="petit" style="text-align:center;margin-top:6px"></div>'
      + '</div>';
  }
  html += '<button class="btn-principal" onclick="validerBilan()">📊 Voir mon bilan</button>';
  document.getElementById('zone-examen').innerHTML = html;
  afficherVue('vue-examen');
}

function noterExercice(i, note) {
  examenEtat.auto[i] = note;
  sauverExamens(examenEtat);
  var el = document.getElementById('note-exo-' + i);
  if (el) el.textContent = note > 0 ? '✔️ ' + note + ' point(s) comptés' : '❌ 0 point compté';
}

function validerBilan() {
  var e = examenEtat;
  var note = 0;
  for (var i = 0; i < e.exercices.length; i++) {
    if (e.auto[i] === undefined) { toast('⚠️ Note-toi d\'abord pour chaque exercice.'); return; }
    note += e.auto[i];
  }
  var notes = toutesLesNotes();
  var date = new Date();
  notes.push({
    classe: e.classe,
    matiere: e.matiere,
    note: note,
    total: e.total,
    date: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  });
  localStorage.setItem('guide_notes', JSON.stringify(notes));
  sauverExamens(null);
  examenEtat = null;
  majVerrouExamen();

  var pc = Math.round(note / e.total * 100);
  var mention = pc >= 50 ? 'bonne' : (pc >= 30 ? 'moyenne' : 'faible');
  var msg = pc >= 80 ? '🏆 Excellent !' : (pc >= 50 ? '👍 Bien, continue !' : (pc >= 30 ? '💪 Encore un effort !' : '📚 Reprends les leçons et réessaie !'));
  var html = '<div class="centrer" style="margin-top:20px">'
    + '<h2 style="color:var(--marine)">📊 Ton bilan</h2>'
    + '<div class="bilan-note ' + mention + '">' + note + '/' + e.total + '</div>'
    + '<div style="font-size:1.2rem;font-weight:700;margin-bottom:16px">' + msg + '</div>'
    + '<button class="btn-principal" onclick="allerNotes()">📈 Voir toutes mes notes</button>'
    + '<button class="btn-secondaire" onclick="allerChapitres(\'' + e.classe + '\',\'' + e.matiere + '\')">📖 Retour aux chapitres</button>'
    + '</div>';
  document.getElementById('zone-examen').innerHTML = html;
  afficherVue('vue-examen');
}

// ---------- Verrou plein écran ----------
function majVerrouExamen() {
  var enc = examenEnCours();
  var verrou = document.getElementById('verrou-examen');
  var vueExamenVisible = !document.getElementById('vue-examen').classList.contains('cache');
  if (enc && !enc.termine && !vueExamenVisible) {
    if (examenEtat !== enc) { examenEtat = enc; lancerMinuteur(); }
    verrou.classList.remove('cache');
  } else {
    verrou.classList.add('cache');
  }
}

function retournerExamen() {
  var enc = examenEnCours();
  if (!enc) { allerAccueil(); return; }
  examenEtat = enc;
  if (enc.termine) afficherCorrection();
  else { afficherEpreuve(); lancerMinuteur(); }
  majVerrouExamen();
}

// ---------- Verrou activé à chaque navigation ----------
var _afficherVueOriginale = afficherVue;
afficherVue = function(id) {
  _afficherVueOriginale(id);
  setTimeout(majVerrouExamen, 50);
};

// ---------- Restauration à la réouverture de l'app ----------
window.addEventListener('load', function() {
  var enc = examenEnCours();
  if (!enc) return;
  examenEtat = enc;
  if (enc.termine) {
    afficherCorrection();
  } else {
    lancerMinuteur();
    majVerrouExamen();
  }
});
