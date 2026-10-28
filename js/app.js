// ===== CONFIGURATION DES MATIERES =====
const MATIERES = {
  maths: { nom: "Mathématiques", fichier: "./data/maths-t9.json", disponible: true },
  francais: { nom: "Français", fichier: null, disponible: false },
  malagasy: { nom: "Malagasy", fichier: null, disponible: false },
  histoiregeo: { nom: "Histoire-Géo", fichier: null, disponible: false },
  sciences: { nom: "Sciences", fichier: null, disponible: false },
  anglais: { nom: "Anglais", fichier: null, disponible: false }
};

const LABELS_TYPE = {
  definition: "📘 Définition",
  formule: "🧮 Formule",
  exemple: "✏️ Exemple",
  regle: "📏 Règle",
  remarque: "💡 Remarque",
  theoreme: "⭐ Théorème",
  methode: "🛠️ Méthode"
};

let etatNav = { matiere: null, composante: null, lecon: null, data: null };

// ===== PROGRESSION (stockage local) =====
function chargerProgression() {
  return JSON.parse(localStorage.getItem('guide-progression') || '{}');
}
function sauvegarderProgression(prog) {
  localStorage.setItem('guide-progression', JSON.stringify(prog));
}
function marquerLeconVue(matiereId, leconId) {
  const prog = chargerProgression();
  if (!prog[matiereId]) prog[matiereId] = [];
  if (!prog[matiereId].includes(leconId)) {
    prog[matiereId].push(leconId);
    sauvegarderProgression(prog);
  }
}
function leconEstVue(matiereId, leconId) {
  const prog = chargerProgression();
  return !!(prog[matiereId] && prog[matiereId].includes(leconId));
}
function compterLeconsVues(matiereId, idsLecons) {
  const prog = chargerProgression();
  const vues = prog[matiereId] || [];
  return idsLecons.filter(id => vues.includes(id)).length;
}
function reinitialiserProgression() {
  localStorage.removeItem('guide-progression');
}

function barreProgressionHTML(vues, total) {
  const pourcentage = total > 0 ? Math.round((vues / total) * 100) : 0;
  return `
    <div class="progression-wrapper">
      <div class="progression-texte">${vues}/${total} leçons vues</div>
      <div class="barre-progression">
        <div class="barre-progression-fill" style="width:${pourcentage}%"></div>
      </div>
    </div>`;
}

// ===== THEME JOUR/NUIT =====
const themeToggle = document.getElementById('theme-toggle');
function appliquerTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('guide-theme', theme);
}
const themeSauve = localStorage.getItem('guide-theme') || 'light';
appliquerTheme(themeSauve);
themeToggle.addEventListener('click', () => {
  const actuel = document.documentElement.getAttribute('data-theme');
  appliquerTheme(actuel === 'dark' ? 'light' : 'dark');
});

// ===== NAVIGATION ENTRE VUES PRINCIPALES =====
function afficherVue(nomVue) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + nomVue).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-view="${nomVue}"]`);
  if (btn) btn.classList.add('active');
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => afficherVue(btn.dataset.view));
});

// ===== CLIC SUR UNE CARTE MATIERE =====
document.querySelectorAll('.carte-matiere').forEach(carte => {
  carte.addEventListener('click', () => {
    const id = carte.dataset.matiere;
    ouvrirMatiere(id);
  });
});

async function ouvrirMatiere(id) {
  const matiere = MATIERES[id];
  etatNav = { matiere: id, composante: null, lecon: null, data: null };

  document.getElementById('matiere-titre').textContent = matiere.nom;
  document.getElementById('btn-back').style.display = 'none';

  afficherVue('matiere');

  const zone = document.getElementById('matiere-content');

  if (!matiere.disponible) {
    zone.innerHTML = `<p class="placeholder-text">📚 Cours bientôt disponible pour cette matière.</p>`;
    return;
  }

  zone.innerHTML = `<p class="placeholder-text">Chargement...</p>`;

  try {
    const reponse = await fetch(matiere.fichier);
    const data = await reponse.json();
    etatNav.data = data;
    afficherListeComposantes();
  } catch (erreur) {
    zone.innerHTML = `<p class="placeholder-text">⚠️ Erreur de chargement du cours.</p>`;
    console.error(erreur);
  }
}

// ===== NIVEAU 1 : LISTE DES COMPOSANTES =====
function afficherListeComposantes() {
  const zone = document.getElementById('matiere-content');
  document.getElementById('matiere-titre').textContent = etatNav.data.matiere;
  document.getElementById('btn-back').style.display = 'none';

  let idsToutesLecons = [];
  etatNav.data.composantes.forEach(comp => {
    comp.lecons.forEach(l => idsToutesLecons.push(l.id));
  });
  const totalLeconsMatiere = idsToutesLecons.length;
  const vuesMatiere = compterLeconsVues(etatNav.matiere, idsToutesLecons);

  let html = barreProgressionHTML(vuesMatiere, totalLeconsMatiere);
  html += '<div class="liste-cartes">';

  etatNav.data.composantes.forEach(comp => {
    const cadenas = comp.premium ? ' 🔒' : '';
    const idsLecons = comp.lecons.map(l => l.id);
    const vues = compterLeconsVues(etatNav.matiere, idsLecons);
    const total = idsLecons.length;
    html += `
      <div class="carte-liste" data-composante="${comp.id}">
        <div class="carte-liste-texte">
          <span>${comp.titre}${cadenas}</span>
          <span class="mini-progression">${vues}/${total}</span>
        </div>
        <span class="fleche">›</span>
      </div>`;
  });
  html += '</div>';
  zone.innerHTML = html;

  document.querySelectorAll('.carte-liste[data-composante]').forEach(el => {
    el.addEventListener('click', () => afficherListeLecons(el.dataset.composante));
  });
}

// ===== NIVEAU 2 : LISTE DES LECONS D'UNE COMPOSANTE =====
function afficherListeLecons(composanteId) {
  etatNav.composante = composanteId;
  etatNav.lecon = null;

  const composante = etatNav.data.composantes.find(c => c.id === composanteId);
  const zone = document.getElementById('matiere-content');

  document.getElementById('matiere-titre').textContent = composante.titre;
  document.getElementById('btn-back').style.display = 'inline-block';

  const idsLecons = composante.lecons.map(l => l.id);
  const vues = compterLeconsVues(etatNav.matiere, idsLecons);

  let html = barreProgressionHTML(vues, idsLecons.length);
  html += '<div class="liste-cartes">';

  composante.lecons.forEach(lecon => {
    const vu = leconEstVue(etatNav.matiere, lecon.id);
    const coche = vu ? '<span class="coche-vue">✅</span>' : '';
    html += `
      <div class="carte-liste" data-lecon="${lecon.id}">
        <div class="carte-liste-texte">
          <span>${lecon.titre}</span>
        </div>
        ${coche}
        <span class="fleche">›</span>
      </div>`;
  });
  html += '</div>';
  zone.innerHTML = html;

  document.querySelectorAll('.carte-liste[data-lecon]').forEach(el => {
    el.addEventListener('click', () => afficherLecon(el.dataset.lecon));
  });
}

// ===== NIVEAU 3 : CONTENU D'UNE LECON =====
function afficherLecon(leconId) {
  etatNav.lecon = leconId;

  marquerLeconVue(etatNav.matiere, leconId);

  const composante = etatNav.data.composantes.find(c => c.id === etatNav.composante);
  const lecon = composante.lecons.find(l => l.id === leconId);
  const zone = document.getElementById('matiere-content');

  document.getElementById('matiere-titre').textContent = lecon.titre;
  document.getElementById('btn-back').style.display = 'inline-block';

  let html = '';
  lecon.contenu.forEach(bloc => {
    if (bloc.type === 'tableau') {
      html += `<div class="bloc bloc-tableau">`;
      if (bloc.titre) html += `<div class="tableau-titre">📊 ${bloc.titre}</div>`;
      html += `<table>`;
      bloc.lignes.forEach(ligne => {
        const valeurs = Object.values(ligne);
        html += `<tr><td>${valeurs[0]}</td><td>${valeurs[1]}</td></tr>`;
      });
      html += `</table></div>`;
    } else if (bloc.type === 'schema') {
      html += `<div class="bloc bloc-schema">
        <div class="schema-svg">${bloc.svg}</div>
        ${bloc.legende ? `<div class="schema-legende">${bloc.legende}</div>` : ''}
      </div>`;
    } else {
      const label = LABELS_TYPE[bloc.type] || bloc.type;
      const texte = bloc.texte.replace(/\n/g, '<br>');
      html += `
        <div class="bloc bloc-${bloc.type}">
          <div class="bloc-label">${label}</div>
          <div class="bloc-texte">${texte}</div>
        </div>`;
    }
  });

  if (lecon.lexique && lecon.lexique.length > 0) {
    html += `<details class="lexique-wrapper">
      <summary class="lexique-titre">📖 Mots difficiles de cette leçon</summary>
      <div class="lexique-liste">`;
    lecon.lexique.forEach(item => {
      html += `
        <div class="lexique-item">
          <span class="lexique-mot">${item.mot}</span> : ${item.definition}
        </div>`;
    });
    html += `</div></details>`;
  }

  zone.innerHTML = html;
}

// ===== BOUTON RETOUR =====
document.getElementById('btn-back').addEventListener('click', () => {
  if (etatNav.lecon) {
    afficherListeLecons(etatNav.composante);
  } else if (etatNav.composante) {
    afficherListeComposantes();
  } else {
    afficherVue('accueil');
  }
});

// ===== REINITIALISATION PROGRESSION (Réglages) =====
const btnReset = document.getElementById('btn-reset-progression');
if (btnReset) {
  btnReset.addEventListener('click', () => {
    const confirmation = confirm("Es-tu sûr de vouloir réinitialiser toute ta progression ? Cette action est irréversible.");
    if (confirmation) {
      reinitialiserProgression();
      alert("Progression réinitialisée !");
    }
  });
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker enregistré', reg.scope))
      .catch(err => console.error('Erreur Service Worker', err));
  });
}
