// ===== GUIDE - Mode Examen =====
// Sujet aleatoire : 1 exo n1 + 1 n2 + 2 n3 + 1 n4 (note ramenee sur 20)

var EXA_CLE_SESSION = 'guide-examen-session';
var EXA_CLE_HISTO = 'guide-examen-historique';
var EXA_DUREE_MS = 2 * 60 * 60 * 1000; // 2 h
var exaMinuteur = null;

// ---------- Stockage ----------
function exaLireSession() {
  try {
    var brut = localStorage.getItem(EXA_CLE_SESSION);
    return brut ? JSON.parse(brut) : null;
  } catch (e) { return null; }
}

function exaEcrireSession(s) {
  localStorage.setItem(EXA_CLE_SESSION, JSON.stringify(s));
}

function exaEffacerSession() {
  localStorage.removeItem(EXA_CLE_SESSION);
}

function exaLireHisto() {
  try {
    var brut = localStorage.getItem(EXA_CLE_HISTO);
    var liste = brut ? JSON.parse(brut) : [];
    return Array.isArray(liste) ? liste : [];
  } catch (e) { return []; }
}

function exaEcrireHisto(liste) {
  localStorage.setItem(EXA_CLE_HISTO, JSON.stringify(liste));
}

// ---------- Verrou (utilise par app.js) ----------
function examenVerrouille() {
  var s = exaLireSession();
  return !!(s && s.phase === 'en-cours' && Date.now() < s.fin);
}

// ---------- Outils ----------
function exaPad(n) { return String(n).padStart(2, '0'); }

function exaChronoTexte(ms) {
  var t = Math.max(0, Math.floor(ms / 1000));
  return Math.floor(t / 3600) + ':' + exaPad(Math.floor((t % 3600) / 60)) + ':' + exaPad(t % 60);
}

function exaNoteTexte(n) {
  return String(n).replace('.', ',');
}

function exaDateTexte(ts) {
  return new Date(ts).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function exaExercice(s, item) {
  var chs = CONTENU[s.classeId + '|' + s.matiereId] || [];
  var ch = chs[item.chIndex];
  return (ch && ch.exercices) ? ch.exercices[item.exIndex] : null;
}

function exaMatieresDispos() {
  var liste = [];
  for (var i = 0; i < CLASSES.length; i++) {
    var c = CLASSES[i];
    var mats = MATIERES[c.id] || [];
    for (var j = 0; j < mats.length; j++) {
      var m = mats[j];
      if (!m.dispo) continue;
      var chs = CONTENU[c.id + '|' + m.id] || [];
      var nb = 0;
      for (var k = 0; k < chs.length; k++) nb += (chs[k].exercices || []).length;
      if (nb >= 5) {
        liste.push({ classeId: c.id, classeNom: c.nom, id: m.id, nom: m.nom, icone: m.icone, nbExos: nb });
      }
    }
  }
  return liste;
}

// ---------- Composition du sujet ----------
function exaComposer(classeId, matiereId) {
  var chapitres = CONTENU[classeId + '|' + matiereId] || [];
  var parNiveau = { 1: [], 2: [], 3: [], 4: [] };
  for (var ci = 0; ci < chapitres.length; ci++) {
    var ch = chapitres[ci];
    for (var ei = 0; ei < (ch.exercices || []).length; ei++) {
      var ex = ch.exercices[ei];
      var n = ex.niveau;
      if (!parNiveau[n]) parNiveau[n] = [];
      parNiveau[n].push({ chIndex: ci, exIndex: ei, chapTitre: ch.titre, niveau: ex.niveau, points: ex.points });
    }
  }
  var plan = [1, 2, 3, 3, 4];
  var items = [];
  for (var p = 0; p < plan.length; p++) {
    var pool = parNiveau[plan[p]];
    if (pool && pool.length) {
      var i = Math.floor(Math.random() * pool.length);
      items.push(pool.splice(i, 1)[0]);
    }
  }
  // Secours : complete avec ce qui reste
  if (items.length < 5) {
    var reste = [];
    for (var n2 = 1; n2 <= 4; n2++) reste = reste.concat(parNiveau[n2] || []);
    while (items.length < 5 && reste.length) {
      var j = Math.floor(Math.random() * reste.length);
      items.push(reste.splice(j, 1)[0]);
    }
  }
  return items;
}

// ---------- Point d'entree (onglet Examen) ----------
function afficherExamen() {
  majOnglets('examen');
  exaStopMinuteur();
  var s = exaLireSession();
  if (s && s.phase === 'en-cours') { exaEpreuve(s); return; }
  if (s && s.phase === 'corrige') { exaCorrige(s); return; }
  exaIntro();
}

// ---------- Ecran 1 : presentation ----------
function exaIntro() {
  var mats = exaMatieresDispos();
  var html = '<h2 class="titre-page">🎓 Mode Examen</h2>';
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
