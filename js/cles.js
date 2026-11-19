// ===== GUIDE - Déblocage par appareil, classe et matière =====
// Accès premium : un an à partir de l'activation.

var GUIDE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

// L'identifiant reste enregistré dans le navigateur.
function obtenirIdAppareil() {
  var id = localStorage.getItem('guide_appareil_id');
  if (id) return id;

  var caracteres = '';
  var nombres = new Uint32Array(8);

  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(nombres);

    for (var i = 0; i < nombres.length; i++) {
      caracteres += GUIDE_ALPHABET.charAt(
        nombres[i] % GUIDE_ALPHABET.length
      );
    }
  } else {
    for (var j = 0; j < 8; j++) {
      caracteres += GUIDE_ALPHABET.charAt(
        Math.floor(Math.random() * GUIDE_ALPHABET.length)
      );
    }
  }

  id = 'GID-' + caracteres.slice(0, 4) + '-' + caracteres.slice(4);
  localStorage.setItem('guide_appareil_id', id);
  return id;
}

// Le calcul reste identique à celui du générateur actuel.
function calculerCodeGuide(id, classeId, matiereId) {
  var texte = id + '|' + classeId + '|' + matiereId + '|premium';
  var h = 13;

  for (var i = 0; i < texte.length; i++) {
    h = (h * 33 + texte.charCodeAt(i)) % 1000000;
  }

  h = (h * 7 + 20260) % 1000000;

  var code = String(h).padStart(6, '0');
  return code.slice(0, 3) + '-' + code.slice(3);
}

function normaliserCodeGuide(code) {
  return String(code || '').replace(/[\s-]/g, '');
}

function lireAccesGuide() {
  try {
    var acces = JSON.parse(localStorage.getItem('guide_cles') || '{}');
    return acces && typeof acces === 'object' ? acces : {};
  } catch (e) {
    return {};
  }
}

// Vérifie si l'accès à cette matière est encore valable.
function estPremium(classeId, matiereId) {
  var acces = lireAccesGuide();
  var cle = classeId + '|' + matiereId;
  var entree = acces[cle];

  // Les anciens accès de test ne contiennent pas de date.
  // Leur année commence lors de leur première vérification
  // après cette mise à jour.
  if (entree === 'premium') {
    var expiration = new Date();
    expiration.setFullYear(expiration.getFullYear() + 1);

    entree = { expiration: expiration.getTime() };
    acces[cle] = entree;
    localStorage.setItem('guide_cles', JSON.stringify(acces));
  }

  return !!(
    entree &&
    typeof entree === 'object' &&
    typeof entree.expiration === 'number' &&
    Date.now() < entree.expiration
  );
}

// Vérifie et active le code pour la classe et la matière choisies.
function activerCodeGuide(code, classeId, matiereId) {
  var saisie = normaliserCodeGuide(code);

  if (!/^\d{6}$/.test(saisie)) {
    return { ok: false, message: 'Le code doit contenir 6 chiffres.' };
  }

  var attendu = normaliserCodeGuide(
    calculerCodeGuide(obtenirIdAppareil(), classeId, matiereId)
  );

  if (saisie !== attendu) {
    return { ok: false, message: 'Code incorrect pour cette matière.' };
  }

  // Ne prolonge pas l'accès si l'élève ressaisit le code
  // alors que son année est encore en cours.
  if (estPremium(classeId, matiereId)) {
    return { ok: true };
  }

  var expiration = new Date();
  expiration.setFullYear(expiration.getFullYear() + 1);

  var acces = lireAccesGuide();
  acces[classeId + '|' + matiereId] = {
    expiration: expiration.getTime()
  };

  localStorage.setItem('guide_cles', JSON.stringify(acces));
  return { ok: true };
}
