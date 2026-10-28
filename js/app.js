// ============================================
// GUIDE — app.js
// Application de révision offline — classe mémorisée
// ============================================

const SEL_SECRET = "BEPC2026MDG";

// ---------- DONNÉES DE STRUCTURE ----------

const CLASSES = [
  { id: '6e',   nom: '6ème',      disponible: false },
  { id: '5e',   nom: '5ème',      disponible: false },
  { id: '4e',   nom: '4ème',      disponible: false },
  { id: '3e',   nom: 'Troisième', disponible: true  },
  { id: '2nd',  nom: 'Seconde',   disponible: false },
  { id: '1ere', nom: 'Première',  disponible: false },
  { id: 'tle',  nom: 'Terminale', disponible: false }
];

const MATIERES_PAR_CLASSE = {
  '3e': [
    { id: 'malagasy',           code: 'MALG', nom: 'Malagasy',           icone: '📚', disponible: false, fichier: './data/3e/malagasy.json' },
    { id: 'francais',           code: 'FRAN', nom: 'Français',           icone: '📖', disponible: false, fichier: './data/3e/francais.json' },
    { id: 'anglais',            code: 'ANGL', nom: 'Anglais',            icone: '🌍', disponible: false, fichier: './data/3e/anglais.json' },
    { id: 'mathematiques',      code: 'MATH', nom: 'Mathématiques',      icone: '📐', disponible: true,  fichier: './data/3e/mathematiques.json' },
    { id: 'svt',                code: 'SVT',  nom: 'SVT',                icone: '🔬', disponible: false, fichier: './data/3e/svt.json' },
    { id: 'sciences-physiques', code: 'SPHY', nom: 'Sciences Physiques', icone: '⚛️', disponible: false, fichier: './data/3e/sciences-physiques.json' },
    { id: 'histoire',           code: 'HIST', nom: 'Histoire',           icone: '🏛️', disponible: false, fichier: './data/3e/histoire.json' },
    { id: 'geographie',         code: 'GEOG', nom: 'Géographie',         icone: '🗺️', disponible: false, fichier: './data/3e/geographie.json' }
  ],
  'tle': [
    { id: 'malagasy',        code: 'MALG', nom: 'Malagasy',            icone: '📚', disponible: false, fichier: './data/tle/malagasy.json' },
    { id: 'francais',        code: 'FRAN', nom: 'Français',            icone: '📖', disponible: false, fichier: './data/tle/francais.json' },
    { id: 'anglais',         code: 'ANGL', nom: 'Anglais',             icone: '🌍', disponible: false, fichier: './data/tle/anglais.json' },
    { id: 'mathematiques',   code: 'MATH', nom: 'Mathématiques',       icone: '📐', disponible: false, fichier: './data/tle/mathematiques.json' },
    { id: 'svt',             code: 'SVT',  nom: 'SVT',                 icone: '🔬', disponible: false, fichier: './data/tle/svt.json' },
    { id: 'physique-chimie', code: 'PCHI', nom: 'Physique / Chimie',   icone: '⚛️', disponible: false, fichier: './data/tle/physique-chimie.json' },
    { id: 'histoire-geo',    code: 'HGEO', nom: 'Histoire-Géographie', icone: '🗺️', disponible: false, fichier: './data/tle/histoire-geographie.json' },
    { id: 'philosophie',     code: 'PHIL', nom: 'Philosophie',         icone: '🧠', disponible: false, fichier: './data/tle/philosophie.json' }
  ]
};

const LABELS_TYPE = {
  definition: { label: '📘 Définition', classe: 'bloc-definition' },
  formule:    { label: '🧮 Formule',    classe: 'bloc-formule' },
  exemple:    { label: '✏️ Exemple',    classe: 'bloc-exemple' },
  regle:      { label: '📏 Règle',      classe: 'bloc-regle' },
  remarque:   { label: '💡 Remarque',   classe: 'bloc-remarque' },
  theoreme:   { label: '🔺 Théorème',   classe: 'bloc-theoreme' },
  methode:    { label: '🛠️ Méthode',    classe: 'bloc-methode' }
};

// ---------- ÉTAT DE NAVIGATION ----------

const etat = {
  niveau: 'classes',
  classe: null,
  matiere: null,
  dataMatiere: null,
  composante: null,
  lecon: null,
  compPaywall: null,
  cache: {}
};

// ---------- OUTILS DOM ----------

function $(id) { return document.getElementById(id); }

function afficherVue(nom) {
  document.querySelectorAll('.view').forEach(v => v.hidden = true);
  $('view-' + nom).hidden = false;
}

function majBoutonRetour(visible) {
  $('btn-retour').hidden = !visible;
}

// ============================================
// NIVEAU 1 — CHOIX DE LA CLASSE (une seule fois)
// ============================================

function renderClasses() {
  const grille = $('grille-classes');
  grille.innerHTML = '';
  CLASSES.forEach(c => {
    const carte = document.createElement('div');
    carte.className = 'carte-classe' + (c.disponible ? '' : ' indisponible');
    carte.innerHTML = `
      <div class="carte-classe-nom">${c.nom}</div>
      <div class="carte-classe-statut">${c.disponible ? 'Disponible' : 'Bientôt disponible'}</div>
    `;
    if (c.disponible) {
      carte.addEventListener('click', () => selectionnerClasse(c.id));
    }
    grille.appendChild(carte);
  });
}

function selectionnerClasse(classeId) {
  etat.classe = classeId;
  localStorage.setItem('guide-classe-choisie', classeId);
  etat.niveau = 'matieres';
  afficherVue('matieres');
  majBoutonRetour(false);
  renderMatieres();
}

// ============================================
// NIVEAU 2 — MATIÈRES (c'est maintenant l'écran d'accueil habituel)
// ============================================

function renderMatieres() {
  const classeObj = CLASSES.find(c => c.id === etat.classe);
  $('sous-titre-matieres').textContent = classeObj ? classeObj.nom : 'Choisis ta matière';

  const grille = $('grille-matieres');
  grille.innerHTML = '';

  const matieres = MATIERES_PAR_CLASSE[etat.classe] || [];
  matieres.forEach(m => {
    const carte = document.createElement('div');
    carte.className = 'carte-matiere' + (m.disponible ? '' : ' indisponible');
    carte.innerHTML = `
      <div class="carte-matiere-icone">${m.icone}</div>
      <div class="carte-matiere-nom">${m.nom}</div>
      <div class="carte-matiere-statut">${m.disponible ? '' : 'Bientôt disponible'}</div>
    `;
    if (m.disponible) {
      carte.addEventListener('click', () => selectionnerMatiere(m));
    }
    grille.appendChild(carte);
  });
}

async function selectionnerMatiere(matiere) {
  etat.matiere = matiere;
  const cleCache = etat.classe + '-' + matiere.id;

  if (etat.cache[cleCache]) {
    etat.dataMatiere = etat.cache[cleCache];
    ouvrirMatiere();
    return;
  }

  try {
    const reponse = await fetch(matiere.fichier);
    const data = await reponse.json();
    etat.cache[cleCache] = data;
    etat.dataMatiere = data;
    ouvrirMatiere();
  } catch (e) {
    alert("Impossible de charger cette matière pour le moment.");
  }
}

function ouvrirMatiere() {
  etat.niveau = 'composantes';
  afficherVue('matiere');
  majBoutonRetour(true);
  afficherListeComposantes();
}

// ============================================
// NIVEAU 3 — LISTE DES COMPOSANTES
// ============================================

function afficherListeComposantes() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom;

  const debloque = estMatiereDebloquee(etat.classe, etat.matiere.code);
  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = '<div class="liste-cartes" id="liste-composantes"></div>';
  const liste = $('liste-composantes');

  etat.dataMatiere.composantes.forEach(comp => {
    const verrouille = comp.premium && !debloque;
    const pourcentage = calculerPourcentageComposante(etat.classe, etat.matiere.id, comp);

    const carte = document.createElement('div');
    carte.className = 'carte-liste' + (verrouille ? ' verrouille' : '');
    carte.innerHTML = `
      <div class="carte-liste-titre">${comp.titre} ${verrouille ? '🔒' : ''}</div>
      ${!verrouille ? `
        <div class="mini-progression">
          <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${pourcentage}%"></div></div>
          <span class="mini-progression-texte">${pourcentage}%</span>
        </div>` : '<div class="carte-liste-souscription">Chapitre premium — 3000 Ar</div>'}
    `;
    carte.addEventListener('click', () => {
      if (verrouille) {
        afficherPaywall(comp);
      } else {
        selectionnerComposante(comp);
      }
    });
    liste.appendChild(carte);
  });
}

function selectionnerComposante(comp) {
  etat.composante = comp;
  etat.niveau = 'lecons';
  afficherListeLecons();
}

// ============================================
// NIVEAU 4 — LISTE DES LEÇONS
// ============================================

function afficherListeLecons() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › ' + etat.composante.titre;

  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = '<div class="liste-cartes" id="liste-lecons"></div>';
  const liste = $('liste-lecons');

  etat.composante.lecons.forEach(lecon => {
    const vue = estLeconVue(etat.classe, etat.matiere.id, lecon.id);
    const carte = document.createElement('div');
    carte.className = 'carte-liste';
    carte.innerHTML = `<div class="carte-liste-titre">${lecon.titre} ${vue ? '✅' : ''}</div>`;
    carte.addEventListener('click', () => selectionnerLecon(lecon));
    liste.appendChild(carte);
  });
}

function selectionnerLecon(lecon) {
  etat.lecon = lecon;
  etat.niveau = 'contenu';
  marquerLeconVue(etat.classe, etat.matiere.id, lecon.id);
  afficherContenuLecon();
}

// ============================================
// NIVEAU 5 — CONTENU D'UNE LEÇON
// ============================================

function afficherContenuLecon() {
  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › ' + etat.composante.titre + ' › ' + etat.lecon.titre;

  const conteneur = $('matiere-contenu');
  let html = `<h2 class="titre-lecon">${etat.lecon.titre}</h2>`;

  etat.lecon.contenu.forEach(bloc => {
    html += renderBloc(bloc);
  });

  if (etat.lecon.lexique && etat.lecon.lexique.length > 0) {
    html += renderLexique(etat.lecon.lexique);
  }

  conteneur.innerHTML = html;
}

function renderBloc(bloc) {
  if (bloc.type === 'schema') {
    return `
      <div class="bloc-schema">
        ${bloc.titre ? `<div class="bloc-schema-titre">${bloc.titre}</div>` : ''}
        <div class="schema-svg">${bloc.svg}</div>
      </div>`;
  }

  if (bloc.type === 'tableau') {
    let html = `<div class="bloc-tableau">`;
    if (bloc.titre) html += `<div class="bloc-tableau-titre">${bloc.titre}</div>`;
    html += `<table class="tableau-donnees"><thead><tr>`;
    bloc.entetes.forEach(e => html += `<th>${e}</th>`);
    html += `</tr></thead><tbody>`;
    bloc.lignes.forEach(ligne => {
      html += '<tr>';
      ligne.forEach(cell => html += `<td>${cell}</td>`);
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
  }

  const info = LABELS_TYPE[bloc.type];
  if (info) {
    return `
      <div class="bloc-pedagogique ${info.classe}">
        <div class="bloc-label">${info.label}</div>
        <div class="bloc-texte">${bloc.texte}</div>
      </div>`;
  }

  return `<p class="bloc-texte-simple">${bloc.texte || ''}</p>`;
}

function renderLexique(lexique) {
  let html = `<details class="lexique"><summary>📖 Mots difficiles</summary><ul class="lexique-liste">`;
  lexique.forEach(item => {
    html += `<li><strong>${item.mot}</strong> — ${item.definition}</li>`;
  });
  html += '</ul></details>';
  return html;
}

// ============================================
// PAYWALL — DÉBLOCAGE MOBILE MONEY
// ============================================

function afficherPaywall(comp) {
  etat.compPaywall = comp;
  etat.niveau = 'paywall';

  const classeNom = CLASSES.find(c => c.id === etat.classe).nom;
  $('fil-ariane').textContent = classeNom + ' › ' + etat.matiere.nom + ' › Débloquer';

  const conteneur = $('matiere-contenu');
  conteneur.innerHTML = `
    <div class="paywall">
      <div class="paywall-icone">🔒</div>
      <div class="paywall-titre">${comp.titre}</div>
      <p class="paywall-texte">Débloque toutes les leçons premium de ${etat.matiere.nom} (${classeNom}) pour :</p>
      <div class="paywall-prix">3000 Ar</div>

      <div class="etape">
        <div class="etape-numero">1</div>
        <div class="etape-texte">Envoie 3000 Ar à l'un de ces numéros (nom : Tiana Stephan)</div>
      </div>

      <div class="mobile-money-liste">
        <div class="mm-item"><span class="mm-operateur">Mvola</span><span class="mm-numero">034 39 949 07</span></div>
        <div class="mm-item"><span class="mm-operateur">Airtel Money</span><span class="mm-numero">033 16 443 49</span></div>
        <div class="mm-item"><span class="mm-operateur">Orange Money</span><span class="mm-numero">032 24 159 98</span></div>
      </div>

      <div class="etape">
        <div class="etape-numero">2</div>
        <div class="etape-texte">Envoie une capture d'écran de la preuve de paiement (WhatsApp, SMS...)</div>
      </div>

      <div class="etape">
        <div class="etape-numero">3</div>
        <div class="etape-texte">Reçois ton code personnel et colle-le ci-dessous</div>
      </div>

      <input type="text" id="input-code" class="input-code" placeholder="GUIDE-CLASSE-MATIERE-0000-0000" maxlength="40">
      <button id="btn-valider-code" class="btn-valider">Valider le code</button>
      <div id="message-code" class="message-code"></div>
    </div>
  `;

  $('btn-valider-code').addEventListener('click', traiterValidationCode);
}

function traiterValidationCode() {
  const saisie = $('input-code').value;
  const resultat = verifierCode(saisie, etat.classe, etat.matiere.code);
  const messageEl = $('message-code');

  if (resultat) {
    debloquerMatiere(etat.classe, etat.matiere.code);
    messageEl.textContent = '✅ Code valide ! Matière débloquée.';
    messageEl.className = 'message-code succes';
    setTimeout(() => {
      etat.niveau = 'composantes';
      afficherListeComposantes();
    }, 1500);
  } else {
    messageEl.textContent = '❌ Code invalide. Vérifie et réessaie.';
    messageEl.className = 'message-code erreur';
  }
}

// ---------- ALGORITHME DE CODE ----------

function calculerChecksum(classeId, matiereCode, serial) {
  const texte = classeId.toUpperCase() + matiereCode + serial + SEL_SECRET;
  let somme = 0;
  for (let i = 0; i < texte.length; i++) {
    somme += texte.charCodeAt(i) * (i + 1);
  }
  const checksum = somme % 10000;
  return String(checksum).padStart(4, '0');
}

function verifierCode(saisie, classeId, matiereCode) {
  if (!saisie) return false;
  const parties = saisie.trim().toUpperCase().split('-');
  if (parties.length !== 5) return false;
  const [prefixe, classePart, matierePart, serial, checksum] = parties;

  if (prefixe !== 'GUIDE') return false;
  if (classePart !== classeId.toUpperCase()) return false;
  if (matierePart !== matiereCode) return false;
  if (!/^\d{4}$/.test(serial)) return false;
  if (!/^\d{4}$/.test(checksum)) return false;

  const checksumAttendu = calculerChecksum(classeId, matiereCode, serial);
  return checksum === checksumAttendu;
}

// ---------- STOCKAGE DES DÉBLOCAGES ----------

function chargerDeblocages() {
  const brut = localStorage.getItem('guide-deblocages');
  return brut ? JSON.parse(brut) : {};
}

function sauvegarderDeblocages(deblocages) {
  localStorage.setItem('guide-deblocages', JSON.stringify(deblocages));
}

function cleDeblocage(classeId, matiereCode) {
  return classeId + '-' + matiereCode;
}

function estMatiereDebloquee(classeId, matiereCode) {
  const deblocages = chargerDeblocages();
  return !!deblocages[cleDeblocage(classeId, matiereCode)];
}

function debloquerMatiere(classeId, matiereCode) {
  const deblocages = chargerDeblocages();
  deblocages[cleDeblocage(classeId, matiereCode)] = true;
  sauvegarderDeblocages(deblocages);
}

// ============================================
// PROGRESSION
// ============================================

function chargerProgression() {
  const brut = localStorage.getItem('guide-progression');
  return brut ? JSON.parse(brut) : {};
}

function sauvegarderProgression(prog) {
  localStorage.setItem('guide-progression', JSON.stringify(prog));
}

function marquerLeconVue(classeId, matiereId, leconId) {
  const prog = chargerProgression();
  if (!prog[classeId]) prog[classeId] = {};
  if (!prog[classeId][matiereId]) prog[classeId][matiereId] = {};
  prog[classeId][matiereId][leconId] = true;
  sauvegarderProgression(prog);
}

function estLeconVue(classeId, matiereId, leconId) {
  const prog = chargerProgression();
  return !!(prog[classeId] && prog[classeId][matiereId] && prog[classeId][matiereId][leconId]);
}

function calculerPourcentageComposante(classeId, matiereId, composante) {
  const total = composante.lecons.length;
  if (total === 0) return 0;
  let vues = 0;
  composante.lecons.forEach(l => {
    if (estLeconVue(classeId, matiereId, l.id)) vues++;
  });
  return Math.round((vues / total) * 100);
}

function calculerPourcentageMatiere(classeId, matiereId, dataMatiere) {
  let total = 0;
  let vues = 0;
  dataMatiere.composantes.forEach(comp => {
    comp.lecons.forEach(l => {
      total++;
      if (estLeconVue(classeId, matiereId, l.id)) vues++;
    });
  });
  if (total === 0) return 0;
  return Math.round((vues / total) * 100);
}

// ============================================
// VUE "MES NOTES"
// ============================================

async function afficherNotes() {
  const conteneur = $('notes-contenu');
  conteneur.innerHTML = '<p class="texte-chargement">Chargement...</p>';

  let html = '';
  let auMoinsUne = false;

  for (const classeObj of CLASSES) {
    if (!classeObj.disponible) continue;
    const matieres = MATIERES_PAR_CLASSE[classeObj.id] || [];
    const matieresDisponibles = matieres.filter(m => m.disponible);
    if (matieresDisponibles.length === 0) continue;

    let blocClasse = `<h3 class="notes-classe-titre">${classeObj.nom}</h3>`;
    let auMoinsUneMatiere = false;

    for (const m of matieresDisponibles) {
      const cleCache = classeObj.id + '-' + m.id;
      let data = etat.cache[cleCache];
      if (!data) {
        try {
          const reponse = await fetch(m.fichier);
          data = await reponse.json();
          etat.cache[cleCache] = data;
        } catch (e) {
          continue;
        }
      }
      const pourcentage = calculerPourcentageMatiere(classeObj.id, m.id, data);
      blocClasse += `
        <div class="notes-matiere">
          <div class="notes-matiere-nom">${m.icone} ${m.nom}</div>
          <div class="mini-progression">
            <div class="mini-progression-barre"><div class="mini-progression-remplie" style="width:${pourcentage}%"></div></div>
            <span class="mini-progression-texte">${pourcentage}%</span>
          </div>
        </div>`;
      auMoinsUneMatiere = true;
      auMoinsUne = true;
    }

    if (auMoinsUneMatiere) html += blocClasse;
  }

  if (!auMoinsUne) {
    html = '<p class="texte-vide">Aucune matière disponible pour le moment.</p>';
  }

  conteneur.innerHTML = html;
}

// ============================================
// NAVIGATION — BOUTON RETOUR
// ============================================

function gererRetour() {
  if (etat.niveau === 'composantes') {
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else if (etat.niveau === 'lecons') {
    etat.niveau = 'composantes';
    afficherListeComposantes();
  } else if (etat.niveau === 'contenu') {
    etat.niveau = 'lecons';
    afficherListeLecons();
  } else if (etat.niveau === 'paywall') {
    etat.niveau = 'composantes';
    afficherListeComposantes();
  }
}

// ============================================
// NAVIGATION BASSE
// ============================================

function allerAccueil() {
  if (etat.classe) {
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else {
    etat.niveau = 'classes';
    afficherVue('classes');
    majBoutonRetour(false);
  }
}

function allerNotes() {
  afficherVue('notes');
  majBoutonRetour(false);
  afficherNotes();
}

function allerParametres() {
  afficherVue('parametres');
  majBoutonRetour(false);
  const classeObj = CLASSES.find(c => c.id === etat.classe);
  $('texte-classe-actuelle').textContent = classeObj
    ? ('Classe actuelle : ' + classeObj.nom)
    : 'Aucune classe sélectionnée';
}

function changerDeClasse() {
  if (confirm("Veux-tu changer de classe ? Tu devras choisir à nouveau ta classe au prochain écran.")) {
    localStorage.removeItem('guide-classe-choisie');
    etat.classe = null;
    renderClasses();
    afficherVue('classes');
    majBoutonRetour(false);
  }
}

// ============================================
// THÈME
// ============================================

function appliquerTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  $('btn-theme').textContent = theme === 'sombre' ? '☀️' : '🌙';
  localStorage.setItem('guide-theme', theme);
}

function basculerTheme() {
  const actuel = document.body.getAttribute('data-theme');
  appliquerTheme(actuel === 'sombre' ? 'clair' : 'sombre');
}

// ============================================
// INITIALISATION
// ============================================

function initialiser() {
  const themeSauvegarde = localStorage.getItem('guide-theme') || 'clair';
  appliquerTheme(themeSauvegarde);

  const classeSauvegardee = localStorage.getItem('guide-classe-choisie');
  const classeValide = CLASSES.find(c => c.id === classeSauvegardee && c.disponible);

  if (classeValide) {
    etat.classe = classeValide.id;
    etat.niveau = 'matieres';
    afficherVue('matieres');
    majBoutonRetour(false);
    renderMatieres();
  } else {
    renderClasses();
    afficherVue('classes');
    majBoutonRetour(false);
  }

  $('btn-retour').addEventListener('click', gererRetour);
  $('btn-theme').addEventListener('click', basculerTheme);

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cible = btn.getAttribute('data-nav');
      if (cible === 'accueil') allerAccueil();
      if (cible === 'notes') allerNotes();
      if (cible === 'parametres') allerParametres();
    });
  });

  $('btn-reset-progression').addEventListener('click', () => {
    if (confirm('Veux-tu vraiment réinitialiser toute ta progression ? Cette action est irréversible.')) {
      localStorage.removeItem('guide-progression');
      alert('Progression réinitialisée.');
    }
  });

  $('btn-changer-classe').addEventListener('click', changerDeClasse);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
}

document.addEventListener('DOMContentLoaded', initialiser);
