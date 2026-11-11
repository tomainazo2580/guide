// ===== GUIDE - Système de clés (ID appareil + classe + matière) =====

var GUIDE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

function obtenirIdAppareil() {
  var id = localStorage.getItem('guide_appareil_id');
  if (!id) {
    id = 'GID-';
    var i;
    for (i = 0; i < 4; i++) id += GUIDE_ALPHABET.charAt(Math.floor(Math.random() * GUIDE_ALPHABET.length));
    id += '-';
    for (i = 0; i < 4; i++) id += GUIDE_ALPHABET.charAt(Math.floor(Math.random() * GUIDE_ALPHABET.length));
    localStorage.setItem('guide_appareil_id', id);
  }
  return id;
}

// ⚠️ Cet algorithme doit rester STRICTEMENT IDENTIQUE dans generateur-cles.html
function clePour(idAppareil, classeId, matiereId, type) {
  var chaine = idAppareil + '|' + classeId + '|' + matiereId + '|' + type;
  var h = 13;
  for (var i = 0; i < chaine.length; i++) {
    h = (h * 33 + chaine.charCodeAt(i)) % 1000000;
  }
  h = (h * 7 + 20260) % 1000000;
  var s = String(h);
  while (s.length < 6) s = '0' + s;
  return s.substr(0, 3) + '-' + s.substr(3, 3);
}

function normaliserCle(entree) {
  return String(entree || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
}

function clesStockees() {
  try { return JSON.parse(localStorage.getItem('guide_cles') || '{}'); }
  catch (e) { return {}; }
}

function statutMatiere(classeId, matiereId) {
  var c = clesStockees();
  return c[classeId + '|' + matiereId] || 'gratuit';
}

function estPremium(classeId, matiereId) {
  return statutMatiere(classeId, matiereId) === 'premium';
}

// Nombre d'examens autorisés : premium = illimité, sinon 1 gratuit + 1 par clé essai
function examensAutorises(classeId, matiereId) {
  if (estPremium(classeId, matiereId)) return 9999;
  var n = 1;
  if (statutMatiere(classeId, matiereId) === 'essai') n = 2;
  return n;
}

function verifierCle(entree) {
  var saisie = normaliserCle(entree);
  if (saisie.length !== 6) return null;
  var id = obtenirIdAppareil();
  var combos = combosDisponibles();
  var types = ['premium', 'essai'];
  for (var i = 0; i < combos.length; i++) {
    for (var t = 0; t < types.length; t++) {
      var attendue = normaliserCle(clePour(id, combos[i].classe, combos[i].matiere, types[t]));
      if (saisie === attendue) {
        return { classe: combos[i].classe, matiere: combos[i].matiere, type: types[t] };
      }
    }
  }
  return null;
}

function activerCleSaisie(entree) {
  var res = verifierCle(entree);
  if (!res) return { ok: false };
  var c = clesStockees();
  var k = res.classe + '|' + res.matiere;
  if (c[k] === res.type) return { ok: false, deja: true, res: res };
  if (c[k] === 'premium') return { ok: false, deja: true, res: res };
  c[k] = res.type;
  localStorage.setItem('guide_cles', JSON.stringify(c));
  return { ok: true, res: res };
}
