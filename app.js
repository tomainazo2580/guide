// ===================================
// GESTION DU THEME JOUR / NUIT
// ===================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeSwitch = document.getElementById('theme-switch');
const htmlRoot = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
    themeSwitch.checked = true;
  } else {
    htmlRoot.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
    themeSwitch.checked = false;
  }
  localStorage.setItem('guide-theme', theme);
}

function toggleTheme() {
  const current = localStorage.getItem('guide-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Au chargement : on applique le thème sauvegardé
const savedTheme = localStorage.getItem('guide-theme') || 'light';
applyTheme(savedTheme);

themeToggleBtn.addEventListener('click', toggleTheme);
themeSwitch.addEventListener('change', toggleTheme);


// ===================================
// NAVIGATION ENTRE LES VUES
// ===================================
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('.nav-btn');

function showView(viewId) {
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');

  navButtons.forEach(btn => btn.classList.remove('active'));
  const matchingNav = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
  if (matchingNav) matchingNav.classList.add('active');
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    showView(btn.dataset.view);
  });
});


// ===================================
// CLIC SUR UNE MATIERE
// ===================================
// Noms affichés pour chaque matière (sera relié au vrai contenu à l'Étape 3)
const nomsMatieres = {
  mathematiques: 'Mathématiques',
  francais: 'Français',
  malagasy: 'Malagasy',
  'histoire-geo': 'Histoire-Géographie',
  sciences: 'Sciences',
  anglais: 'Anglais'
};

document.querySelectorAll('.matiere-card').forEach(card => {
  card.addEventListener('click', () => {
    const matiereId = card.dataset.matiere;
    document.getElementById('matiere-titre').textContent = nomsMatieres[matiereId];
    showView('view-matiere');
  });
});

document.getElementById('back-to-accueil').addEventListener('click', () => {
  showView('view-accueil');
});
