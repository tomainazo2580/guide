// ===== GUIDE - Mode Examen =====
// Sujet habituel : 1 exo n1 + 1 n2 + 2 n3 + 1 n4.
// Sciences physiques 3e : 2 exercices de chimie et 3 de physique.
// Mathématiques 3e : 2 nombres et algèbre, 2 géométrie,
// 1 statistiques ou probabilités.
// La note est ramenée sur 20.

var EXA_CLE_SESSION = 'guide-examen-session';
var EXA_CLE_HISTO = 'guide-examen-historique';
var EXA_DUREE_MS = 2 * 60 * 60 * 1000; // 2 h
var exaMinuteur = null;

// ---------- Stockage ----------

function exaLireSession() {
  try {
    var brut = localStorage.getItem(EXA_CLE_SESSION);
    return brut ? JSON.parse(brut) : null;
  } catch (e) {
    return null;
  }
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
  } catch (e) {
    return [];
  }
}

function exaEcrireHisto(liste) {
  localStorage.setItem(EXA_CLE_HISTO, JSON.stringify(liste));
}

// ---------- Verrou utilisé par app.js ----------

function examenVerrouille() {
  var s = exaLireSession();
  return !!(s && s.phase === 'en-cours' && Date.now() < s.fin);
}

// ---------- Outils ----------

function exaPad(n) {
  return String(n).padStart(2, '0');
}

function exaChronoTexte(ms) {
  var t = Math.max(0, Math.floor(ms / 1000));

  return Math.floor(t / 3600) + ':' +
    exaPad(Math.floor((t % 3600) / 60)) + ':' +
    exaPad(t % 60);
}

function exaNoteTexte(n) {
  return String(n).replace('.', ',');
}

function exaDateTexte(ts) {
  return new Date(ts).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function exaExercice(s, item) {
  var chs = CONTENU[s.classeId + '|' + s.matiereId] || [];
  var ch = chs[item.chIndex];

  return (ch && ch.exercices) ? ch.exercices[item.exIndex] : null;
}

function exaTitrePartie(partie) {
  var titres = {
    chimie: 'Partie chimie',
    physique: 'Partie physique',
    algebre: 'Partie nombres et algèbre',
    geometrie: 'Partie géométrie et grandeurs',
    donnees: 'Partie statistiques et probabilités'
  };

  return titres[partie] || '';
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

      for (var k = 0; k < chs.length; k++) {
        nb += (chs[k].exercices || []).length;
      }

      if (nb >= 5) {
        liste.push({
          classeId: c.id,
          classeNom: c.nom,
          id: m.id,
          nom: m.nom,
          icone: m.icone,
          nbExos: nb
        });
      }
    }
  }

  return liste;
}

// ---------- Composition du sujet ----------

function exaComposer(classeId, matiereId) {
  var chapitres = CONTENU[classeId + '|' + matiereId] || [];

  // Composition particulière pour les sciences physiques de 3e.
  if (classeId === '3e' && matiereId === 'sp') {
    var domaines = {
      chimie: { 1: [], 2: [], 3: [], 4: [] },
      physique: { 1: [], 2: [], 3: [], 4: [] }
    };

    for (var ci = 0; ci < chapitres.length; ci++) {
      var ch = chapitres[ci];
      var partieChapitre = null;

      // Chapitres de cours : 1 à 11 en chimie, 12 à 22 en physique.
      if (typeof ch.id === 'number') {
        if (ch.id >= 1 && ch.id <= 11) {
          partieChapitre = 'chimie';
        } else if (ch.id >= 12 && ch.id <= 22) {
          partieChapitre = 'physique';
        }
      }

      for (var ei = 0; ei < (ch.exercices || []).length; ei++) {
        var ex = ch.exercices[ei];
        var partie = partieChapitre;

        // La révision générale contient les deux domaines.
        if (ch.id === 'sp3-revision-generale') {
          var enonce = ex.enonce || '';

          if (
            /^Chimie\./i.test(enonce) ||
            /^Type BEPC\s*—\s*chimie\./i.test(enonce)
          ) {
            partie = 'chimie';
          } else if (
            /^Physique\./i.test(enonce) ||
            /^Type BEPC\s*—\s*physique\./i.test(enonce)
          ) {
            partie = 'physique';
          }
        }

        if (!partie || !domaines[partie][ex.niveau]) continue;

        domaines[partie][ex.niveau].push({
          chIndex: ci,
          exIndex: ei,
          chapTitre: ch.titre,
          niveau: ex.niveau,
          points: ex.points,
          partie: partie
        });
      }
    }

    // Deux exercices de chimie, puis trois de physique.
    var planSP = [
      { partie: 'chimie', niveau: 1 },
      { partie: 'chimie', niveau: 3 },
      { partie: 'physique', niveau: 2 },
      { partie: 'physique', niveau: 3 },
      { partie: 'physique', niveau: 4 }
    ];

    var sujetSP = [];

    for (var p = 0; p < planSP.length; p++) {
      var demande = planSP[p];
      var pool = domaines[demande.partie][demande.niveau];

      // Si le niveau prévu est vide, chercher dans le même domaine.
      if (!pool.length) {
        for (var niveauSecours = 1; niveauSecours <= 4; niveauSecours++) {
          if (domaines[demande.partie][niveauSecours].length) {
            pool = domaines[demande.partie][niveauSecours];
            break;
          }
        }
      }

      // Ne pas lancer un sujet incomplet ou sans les deux parties.
      if (!pool.length) return [];

      var choix = Math.floor(Math.random() * pool.length);
      sujetSP.push(pool.splice(choix, 1)[0]);
    }

    return sujetSP;
  }

  // Composition particulière pour les mathématiques de 3e.
  if (classeId === '3e' && matiereId === 'maths') {
    var domainesMaths = {
      algebre: { 1: [], 2: [], 3: [], 4: [] },
      geometrie: { 1: [], 2: [], 3: [], 4: [] },
      donnees: { 1: [], 2: [], 3: [], 4: [] }
    };

    for (var cm = 0; cm < chapitres.length; cm++) {
      var chapitreMaths = chapitres[cm];
      var partieMaths = null;

      // Classement selon l'ordre actuel des chapitres :
      // 1 à 7 : nombres et algèbre ;
      // 8 à 12 : géométrie et grandeurs ;
      // 13 et 14 : statistiques et probabilités.
      if (cm >= 0 && cm <= 6) {
        partieMaths = 'algebre';
      } else if (cm >= 7 && cm <= 11) {
        partieMaths = 'geometrie';
      } else if (cm >= 12 && cm <= 13) {
        partieMaths = 'donnees';
      }

      for (
        var em = 0;
        em < (chapitreMaths.exercices || []).length;
        em++
      ) {
        var exerciceMaths = chapitreMaths.exercices[em];
        var domaineMaths = partieMaths;

        // Révision générale : classement selon l'ordre actuel
        // des huit exercices du chapitre 15.
        if (chapitreMaths.id === 'm3-revision-generale') {
          domaineMaths = null;

          if (em >= 0 && em <= 4) {
            domaineMaths = 'algebre';
          } else if (em >= 5 && em <= 6) {
            domaineMaths = 'geometrie';
          } else if (em === 7) {
            domaineMaths = 'donnees';
          }
        }

        if (
          !domaineMaths ||
          !domainesMaths[domaineMaths][exerciceMaths.niveau]
        ) {
          continue;
        }

        domainesMaths[domaineMaths][exerciceMaths.niveau].push({
          chIndex: cm,
          exIndex: em,
          chapTitre: chapitreMaths.titre,
          niveau: exerciceMaths.niveau,
          points: exerciceMaths.points,
          partie: domaineMaths
        });
      }
    }

    // Deux exercices d'algèbre, deux de géométrie et un de données.
    // Les niveaux prévus sont 1, 2, 3, 3 et 4 sur l'ensemble.
    var planMaths = [
      { partie: 'algebre', niveau: 1 },
      { partie: 'algebre', niveau: 3 },
      { partie: 'geometrie', niveau: 2 },
      { partie: 'geometrie', niveau: 3 },
      { partie: 'donnees', niveau: 4 }
    ];

    var sujetMaths = [];

    for (var pm = 0; pm < planMaths.length; pm++) {
      var demandeMaths = planMaths[pm];
      var poolMaths =
        domainesMaths[demandeMaths.partie][demandeMaths.niveau];

      // Si le niveau prévu est vide, chercher dans le même domaine.
      if (!poolMaths.length) {
        for (var secoursMaths = 1; secoursMaths <= 4; secoursMaths++) {
          if (domainesMaths[demandeMaths.partie][secoursMaths].length) {
            poolMaths = domainesMaths[demandeMaths.partie][secoursMaths];
            break;
          }
        }
      }

      // Ne pas lancer un sujet incomplet.
      if (!poolMaths.length) return [];

      var choixMaths = Math.floor(Math.random() * poolMaths.length);
      sujetMaths.push(poolMaths.splice(choixMaths, 1)[0]);
    }

    return sujetMaths;
  }

  // Composition existante pour toutes les autres matières.
  var parNiveau = { 1: [], 2: [], 3: [], 4: [] };

  for (var ci2 = 0; ci2 < chapitres.length; ci2++) {
    var ch2 = chapitres[ci2];

    for (var ei2 = 0; ei2 < (ch2.exercices || []).length; ei2++) {
      var ex2 = ch2.exercices[ei2];
      var n = ex2.niveau;

      if (!parNiveau[n]) parNiveau[n] = [];

      parNiveau[n].push({
        chIndex: ci2,
        exIndex: ei2,
        chapTitre: ch2.titre,
        niveau: ex2.niveau,
        points: ex2.points
      });
    }
  }

  var plan = [1, 2, 3, 3, 4];
  var items = [];

  for (var p2 = 0; p2 < plan.length; p2++) {
    var pool2 = parNiveau[plan[p2]];

    if (pool2 && pool2.length) {
      var i = Math.floor(Math.random() * pool2.length);
      items.push(pool2.splice(i, 1)[0]);
    }
  }

  // Secours : complète avec ce qui reste.
  if (items.length < 5) {
    var reste = [];

    for (var n2 = 1; n2 <= 4; n2++) {
      reste = reste.concat(parNiveau[n2] || []);
    }

    while (items.length < 5 && reste.length) {
      var j = Math.floor(Math.random() * reste.length);
      items.push(reste.splice(j, 1)[0]);
    }
  }

  return items;
}

// ---------- Point d'entrée : onglet Examen ----------

function afficherExamen() {
  majOnglets('examen');
  exaStopMinuteur();

  var s = exaLireSession();

  if (s && s.phase === 'en-cours') {
    exaEpreuve(s);
    return;
  }

  if (s && s.phase === 'corrige') {
    exaCorrige(s);
    return;
  }

  exaIntro();
}

// ---------- Écran 1 : présentation ----------

function exaIntro() {
  var mats = exaMatieresDispos();
  var html = '<h2 class="titre-page">🎓 Mode Examen</h2>';

  html += '<div class="bloc bloc-regle">';
  html += '<div class="bloc-titre">ℹ️ Comment ça marche</div>';
  html += '<div class="bloc-texte">';
  html += '• Choisis une matière : Guide compose un sujet de 5 exercices, différent à chaque essai.\n';
  html += '• Tu as 2 h. Pendant l’épreuve, les leçons et les corrections sont verrouillés.\n';
  html += '• Écris tes réponses sur une feuille.\n';
  html += '• À la fin, tu compares avec le corrigé et tu t’auto-évalues honnêtement.\n';
  html += '• Ta note sur 20 est gardée dans 📒 Notes.';
  html += '</div></div>';

  if (!mats.length) {
    html += '<div class="vide">Aucune matière disponible pour le moment.</div>';
  }

  for (var i = 0; i < mats.length; i++) {
    var m = mats[i];

    html += '<button class="carte" onclick="exaConfirmation(\'' +
      m.classeId + '\',\'' + m.id + '\')">' +
      '<span class="carte-icone">' + m.icone + '</span>' +
      '<span class="carte-texte">' + m.nom + ' — ' + m.classeNom +
      '\n<span class="carte-sous">' + m.nbExos +
      ' exercices dans la banque</span></span>' +
      '<span class="carte-fleche">›</span></button>';
  }

  afficher(html);
}

// ---------- Écran 2 : confirmation ----------

function exaConfirmation(classeId, matiereId) {
  var html = '<h2 class="titre-page">' +
    iconeMatiere(classeId, matiereId) + ' Examen — ' +
    nomMatiere(classeId, matiereId) + ' ' +
    nomClasse(classeId) + '</h2>';

  html += '<div class="bloc bloc-methode">';
  html += '<div class="bloc-titre">⏱ Conditions de l’épreuve</div>';
  html += '<div class="bloc-texte">';
  html += '• 5 exercices tirés au hasard — note sur 20\n';

  if (classeId === '3e' && matiereId === 'sp') {
    html += '• 2 exercices de chimie et 3 exercices de physique\n';
  }

  if (classeId === '3e' && matiereId === 'maths') {
    html += '• 2 exercices de nombres et algèbre\n';
    html += '• 2 exercices de géométrie et grandeurs\n';
    html += '• 1 exercice de statistiques ou probabilités\n';
  }

  html += '• Durée : 2 h\n';
  html += '• Leçons et corrections verrouillés jusqu’à la fin\n';
  html += '• Prévois une feuille et un stylo\n';
  html += '• Si tu fermes l’app, le temps continue de s’écouler';
  html += '</div></div>';

  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaLancer(\'' +
    classeId + '\',\'' + matiereId +
    '\')">▶️ Lancer l’examen</button>';
  html += '<button class="btn-secondaire" onclick="exaIntro()">' +
    '← Choisir une autre matière</button>';
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

// ---------- Écran 3 : l'épreuve ----------

function exaEpreuve(s) {
  majOnglets('examen');

  var html = '<div class="exa-chrono">';
  html += '<div class="exa-chrono-label">⏱ Temps restant</div>';
  html += '<div id="exa-temps" class="exa-temps">' +
    exaChronoTexte(s.fin - Date.now()) + '</div>';
  html += '<div class="exa-chrono-sous">' +
    iconeMatiere(s.classeId, s.matiereId) + ' ' +
    nomMatiere(s.classeId, s.matiereId) + ' — ' +
    nomClasse(s.classeId) + '</div>';
  html += '</div>';

  html += '<div id="exa-alerte" class="exa-alerte cache">';
  html += '⏰ Temps écoulé ! Termine ta réponse, puis touche ';
  html += '« J’ai terminé » pour voir le corrigé.</div>';

  html += '<div class="bloc bloc-regle">';
  html += '<div class="bloc-titre">✍️ Consigne</div>';
  html += '<div class="bloc-texte">';
  html += 'Écris tes réponses sur une feuille, comme au vrai examen. ';
  html += 'Quand tu as fini, touche « J’ai terminé ».';
  html += '</div></div>';

  for (var i = 0; i < s.items.length; i++) {
    var it = s.items[i];
    var ex = exaExercice(s, it);
    if (!ex) continue;

    if (
      it.partie &&
      (i === 0 || it.partie !== s.items[i - 1].partie)
    ) {
      var titrePartie = exaTitrePartie(it.partie);

      if (titrePartie) {
        html += '<h3>' + titrePartie + '</h3>';
      }
    }

    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Exercice ' + (i + 1) +
      ' — ' + it.points + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '</div>';
  }

  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaTerminer()">';
  html += '✅ J’ai terminé — voir le corrigé</button>';
  html += '<button class="btn-danger" onclick="exaAbandonner()">';
  html += 'Abandonner l’examen</button>';
  html += '</div>';

  afficher(html);
  exaDemarrerMinuteur();
}

// ---------- Minuteur ----------

function exaStopMinuteur() {
  if (exaMinuteur) {
    clearInterval(exaMinuteur);
    exaMinuteur = null;
  }
}

function exaDemarrerMinuteur() {
  exaStopMinuteur();
  exaMinuteur = setInterval(exaTick, 1000);
  exaTick();
}

function exaTick() {
  var s = exaLireSession();
  var el = document.getElementById('exa-temps');

  if (!s || s.phase !== 'en-cours' || !el) {
    exaStopMinuteur();
    return;
  }

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

  if (!confirm(
    "Terminer l'examen et voir le corrigé ?\n" +
    "Tu ne pourras plus revenir à l'épreuve."
  )) return;

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

// ---------- Écran 4 : corrigé et autoévaluation ----------

function exaCorrige(s) {
  majOnglets('examen');
  exaStopMinuteur();

  var html = '<h2 class="titre-page">📖 Corrigé et auto-évaluation</h2>';

  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-titre">💡 Comment faire</div>';
  html += '<div class="bloc-texte">';
  html += 'Compare ta feuille avec la correction, puis évalue-toi ';
  html += 'honnêtement pour chaque exercice.';
  html += '</div></div>';

  for (var i = 0; i < s.items.length; i++) {
    var it = s.items[i];
    var ex = exaExercice(s, it);
    if (!ex) continue;

    var cur = (s.evals && s.evals[i]) || '';

    if (
      it.partie &&
      (i === 0 || it.partie !== s.items[i - 1].partie)
    ) {
      var titrePartie = exaTitrePartie(it.partie);

      if (titrePartie) {
        html += '<h3>' + titrePartie + '</h3>';
      }
    }

    html += '<div class="bloc-exercice">';
    html += '<div class="exercice-niveau">Exercice ' + (i + 1) +
      ' — ' + it.chapTitre + ' — ' +
      exaNoteTexte(it.points) + ' pts</div>';
    html += '<div class="exercice-enonce">' + nl2br(ex.enonce) + '</div>';
    html += '<div class="correction">' + nl2br(ex.correction) + '</div>';

    html += '<div class="exa-eval">';
    html += '<div class="exa-eval-q">Comment as-tu réussi cet exercice ?</div>';
    html += '<div class="exa-eval-btns">';

    html += '<button class="exa-eval-btn' +
      (cur === 'reussi' ? ' actif' : '') +
      '" onclick="exaEval(' + i + ',\'reussi\',this)">✅ Réussi</button>';

    html += '<button class="exa-eval-btn' +
      (cur === 'partie' ? ' actif' : '') +
      '" onclick="exaEval(' + i + ',\'partie\',this)">🟡 En partie</button>';

    html += '<button class="exa-eval-btn' +
      (cur === 'revoir' ? ' actif' : '') +
      '" onclick="exaEval(' + i + ',\'revoir\',this)">❌ À revoir</button>';

    html += '</div></div></div>';
  }

  html += '<div id="exa-msg" class="exa-alerte cache"></div>';

  html += '<div class="exa-actions">';
  html += '<button class="btn-principal" onclick="exaBilan()">';
  html += '📊 Voir mon bilan</button>';
  html += '<button class="btn-danger" onclick="exaAbandonner()">';
  html += 'Quitter sans enregistrer</button>';
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

  for (var k = 0; k < freres.length; k++) {
    freres[k].classList.remove('actif');
  }

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
      msg.textContent = '⚠️ Évalue chaque exercice avant de voir le bilan (' +
        manquants + ' restant(s)).';
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

    if (res === 'reussi') {
      points += it.points;
    } else if (res === 'partie') {
      points += it.points / 2;
    }

    details.push({
      chapTitre: it.chapTitre,
      points: it.points,
      res: res
    });

    if (
      res !== 'reussi' &&
      aRevoir.indexOf(it.chapTitre) === -1
    ) {
      aRevoir.push(it.chapTitre);
    }
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

  if (e.note20 >= 16) {
    message = 'Excellent travail ! 🎉';
  } else if (e.note20 >= 14) {
    message = 'Très bien ! Continue comme ça.';
  } else if (e.note20 >= 10) {
    message = 'Bien ! Quelques points à consolider.';
  } else if (e.note20 >= 8) {
    message = 'Passable : revois les chapitres ci-dessous.';
  } else {
    message = 'Courage ! Reprends les leçons, puis refais un examen.';
  }

  var html = '<h2 class="titre-page">📊 Bilan — ' +
    e.matiereIcone + ' ' + e.matiereNom + '</h2>';

  html += '<div class="exa-score">';
  html += '<div class="exa-note">' + exaNoteTexte(e.note20) + ' / 20</div>';
  html += '<div class="exa-pct">' + e.pct + ' %</div>';
  html += '<div class="exa-msg">' + message + '</div>';
  html += '</div>';

  html += '<div class="bloc bloc-definition">';
  html += '<div class="bloc-titre">🧾 Détail</div>';
  html += '<div class="bloc-texte">';

  for (var i = 0; i < e.details.length; i++) {
    var d = e.details[i];
    var lib = d.res === 'reussi' ? '✅' :
      (d.res === 'partie' ? '🟡' : '❌');

    html += lib + ' Ex. ' + (i + 1) + ' — ' + d.chapTitre +
      ' (' + exaNoteTexte(d.points) + ' pts)\n';
  }

  html += '</div></div>';

  if (e.aRevoir.length) {
    html += '<div class="bloc bloc-methode">';
    html += '<div class="bloc-titre">📚 À revoir</div>';
    html += '<div class="bloc-texte">';

    for (i = 0; i < e.aRevoir.length; i++) {
      html += '• ' + e.aRevoir[i] + '\n';
    }

    html += '</div></div>';
  }

  html += '<div class="exa-actions">';

  if (e.aRevoir.length) {
    html += '<button class="btn-principal" onclick="afficherChapitres(\'' +
      e.classeId + '\',\'' + e.matiereId + '\')">';
    html += '📖 Revoir les leçons</button>';
  }

  html += '<button class="btn-secondaire" onclick="exaIntro()">';
  html += '🎓 Passer un autre examen</button>';
  html += '</div>';

  html += '<p class="histo-detail" style="text-align:center;margin-top:12px">';
  html += 'Ce bilan est gardé dans 📒 Notes.</p>';

  afficher(html);
}

// ---------- Historique : onglet Notes ----------

function afficherHistoriqueExamens(zoneId) {
  var zone = document.getElementById(zoneId);
  if (!zone) return;

  var histo = exaLireHisto();

  if (!histo.length) {
    zone.innerHTML = '<div class="vide">Aucun examen passé pour le moment.\n' +
      'Va dans 🎓 Examen pour t’entraîner !</div>';
    return;
  }

  var somme = 0;

  for (var i = 0; i < histo.length; i++) {
    somme += histo[i].note20;
  }

  var moyenne = Math.round((somme / histo.length) * 2) / 2;

  var html = '<div class="histo-resume">🎓 ' + histo.length +
    ' examen(s) — moyenne générale : ' +
    exaNoteTexte(moyenne) + ' / 20</div>';

  var debut = Math.max(0, histo.length - 10);

  for (i = histo.length - 1; i >= debut; i--) {
    var e = histo[i];

    html += '<div class="histo-item">';
    html += '<div class="histo-tete"><span>' +
      e.matiereIcone + ' ' + e.matiereNom + ' — ' +
      exaNoteTexte(e.note20) + ' / 20</span>';
    html += '<span class="histo-date">' + exaDateTexte(e.date) +
      '</span></div>';

    html += '<div class="mini-barre"><div class="mini-remplie" style="width:' +
      e.pct + '%"></div></div>';

    if (e.aRevoir && e.aRevoir.length) {
      html += '<div class="histo-detail">À revoir : ' +
        e.aRevoir.join(', ') + '</div>';
    }

    html += '</div>';
  }

  html += '<div class="exa-actions">';
  html += '<button class="btn-danger" onclick="exaEffacerHisto()">';
  html += '🗑️ Effacer l’historique des examens</button>';
  html += '</div>';

  zone.innerHTML = html;
}

function exaEffacerHisto() {
  if (!confirm(
    "Effacer tout l'historique de tes examens ? Cette action est irréversible."
  )) return;

  localStorage.removeItem(EXA_CLE_HISTO);
  afficherHistoriqueExamens('notes-examens');
}

// === FIN examen.js ===
