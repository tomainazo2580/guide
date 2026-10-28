// ===== CONFIGURATION DES MATIERES =====
const MATIERES = {
  maths: { nom: "Mathématiques", fichier: "./data/maths-t9.json", disponible: true, codeMatiere: "MATH" },
  francais: { nom: "Français", fichier: null, disponible: false, codeMatiere: "FRAN" },
  malagasy: { nom: "Malagasy", fichier: null, disponible: false, codeMatiere: "MALG" },
  histoiregeo: { nom: "Histoire-Géo", fichier: null, disponible: false, codeMatiere: "HGEO" },
  sciences: { nom: "Sciences", fichier: null, disponible: false, codeMatiere: "SCIE" },
  anglais: { nom: "Anglais", fichier: null, disponible: false, codeMatiere: "ANGL" }
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

let etatNav = { matiere: null, composante: null, lecon: null, data: null, enPaywall: false };

// ===== SYSTEME DE CODES (déblocage premium) =====
// ATTENTION : ce sel secret doit être IDENTIQUE dans outil-codes.html
const SEL_SECRET = "BEPC2026MDG";

function calculerChecksum(matiereCode, serial) {
  const chaine = matiereCode + serial + SEL_SECRET;
  let somme = 0;
  for (let i = 0; i < chaine.length; i++) {
    somme += chaine.charCodeAt(i) * (i + 1);
  }
  return String(somme % 10000).padStart(4, '0');
}

function verifierCode(saisie, matiereCode) {
  const nettoye = saisie.trim().toUpperCase();
  const parts = nettoye.split('-');
  if (parts.length !== 4) return false;
  if (parts[0] !== 'GUIDE') return false;
  if (parts[1] !== matiereCode) return false;
  const serial = parts[2];
  const checksumSaisi = parts[3];
  if (!/^\d{4}$/.test(serial) || !/^\d{4}$/.test(checksumSaisi)) return false;
  return checksumSaisi === calculerChecksum(matiereCode, serial);
}

function chargerDeblocages() {
  return JSON.parse(localStorage.getItem('guide-deblocages') || '{}');
}
function estMatiereDebloquee(matiereId) {
  const deb = chargerDeblocages();
  return !!deb[matiereId];
}
function debloquerMatiere(matiereId) {
  const deb = chargerDeblocages();
  deb[matiereId] = true;
  localStorage.setItem('guide-deblocages', JSON.stringify(deb));
}

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
  etatNav = { matiere: id, composante: null, lecon: null, data: null, enPaywall: false };

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
  etatNav.enPaywall = false;
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
    const verrouille = comp.premium && !estMatiereDebloquee(etatNav.matiere);
    const cadenas = verrouille ? ' 🔒' : '';
    const idsLecons = comp.lecons.map(l => l.id);
    const vues = compterLeconsVues(etatNav.matiere, idsLecons);
    const total = idsLecons.length;
    html += `
      <div class="carte-liste ${verrouille ? 'verrouille' : ''}" data-composante="${comp.id}" data-verrouille="${verrouille}">
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
    el.addEventListener('click', () => {
      const verrouille = el.dataset.verrouille === 'true';
      if (verrouille) {
        const comp = etatNav.data.composantes.find(c => c.id === el.dataset.composante);
        afficherPaywall(comp.titre);
      } else {
        afficherListeLecons(el.dataset.composante);
      }
    });
  });
}

// ===== ECRAN DE DEBLOCAGE (PAYWALL) =====
function afficherPaywall(compTitre) {
  etatNav.enPaywall = true;
  const matiere = MATIERES[etatNav.matiere];
  const zone = document.getElementById('matiere-content');

  document.getElementById('matiere-titre').textContent = "Contenu Premium";
  document.getElementById('btn-back').style.display = 'inline-block';

  zone.innerHTML = `
    <div class="paywall">
      <div class="paywall-icone">🔒</div>
      <h3 class="paywall-titre">${compTitre}</h3>
      <p class="paywall-texte">Débloque tout le programme premium de <strong>${matiere.nom}</strong> pour :</p>
      <div class="paywall-prix">3000 Ar</div>

      <div class="etape">
        <div class="etape-numero">1</div>
        <div class="etape-texte">Envoie 3000 Ar via Mobile Money à l'un de ces numéros :</div>
      </div>
      <div class="mobile-money-liste">
        <div class="mm-item"><span class="mm-operateur">Mvola</span><span class="mm-numero">034 399 49 07</span></div>
        <div class="mm-item"><span class="mm-operateur">Airtel Money</span><span class="mm-numero">033 164 43 49</span></div>
        <div class="mm-item"><span class="mm-operateur">Orange Money</span><span class="mm-numero">032 241 59 98</span></div>
      </div>

      <div class="etape">
        <div class="etape-numero">2</div>
        <div class="etape-texte">Envoie une capture de la transaction par SMS ou WhatsApp au même numéro, avec ton nom.</div>
      </div>

      <div class="etape">
        <div class="etape-numero">3</div>
        <div class="etape-texte">Tu recevras ton code personnel. Entre-le ci-dessous :</div>
      </div>

      <input type="text" id="input-code" class="input-code" placeholder="GUIDE-XXXX-0000-0000" autocapitalize="characters">
      <button id="btn-valider-code" class="btn-valider">Valider le code</button>
      <div id="message-code" class="message-code"></div>
    </div>
  `;

  document.getElementById('btn-valider-code').addEventListener('click', () => {
    const saisie = document.getElementById('input-code').value;
    const msgZone = document.getElementById('message-code');
    if (verifierCode(saisie, matiere.codeMatiere)) {
      debloquerMatiere(etatNav.matiere);
      msgZone.textContent = "✅ Contenu débloqué ! Retourne à la liste des chapitres.";
      msgZone.className = "message-code succes";
    } else {
      msgZone.textContent = "❌ Code invalide. Vérifie et réessaie.";
      msgZone.className = "message-code erreur";
    }
  });
}

// ===== NIVEAU 2 : LISTE DES LECONS D'UNE COMPOSANTE =====
function afficherListeLecons(composanteId) {
  etatNav.composante = composanteId;
  etatNav.lecon = null;
  etatNav.enPaywall = false;

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
  if (etatNav.enPaywall) {
    afficherListeComposantes();
  } else if (etatNav.lecon) {
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
