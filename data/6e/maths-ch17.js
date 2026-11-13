// ===== GUIDE - Mathematiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.
// Chapitre 17 : Revision generale

enregistrerChapitres("6e", "maths", [
  {
    id: "maths6-revision",
    titre: "Chapitre 17 : Révision générale",
    premium: false,
    guide: true,
    lecons: [
      {
        id: "maths6-rev-vue",
        titre: "Vue d'ensemble de l'année",
        blocs: [
          { type: "remarque", titre: "Chapitre complété par Guide", texte: "Ce chapitre n'est pas un nouveau cours.\nIl reprend l'essentiel de tout ce que tu as appris cette année en mathématiques, pour bien préparer les contrôles et les examens." },
          { type: "texte", titre: "Les trois grandes parties de l'année", texte: "1. Les nombres et le calcul : fractions, nombres décimaux, multiples et diviseurs, priorités des opérations, proportionnalité, équations, division euclidienne.\n2. La géométrie : droites et angles, triangles et quadrilatères, symétrie axiale, plan cartésien, solides.\n3. Grandeurs et données : les grandeurs, les périmètres et les aires, les statistiques, les probabilités." },
          { type: "schema", titre: "Toute l'année en un coup d'œil", svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='300' height='50' rx='10' fill='#dbeafe' stroke='#1e88e5' stroke-width='2'/><text x='170' y='42' font-size='14' fill='#1e3a8a' font-weight='bold' text-anchor='middle'>LES NOMBRES ET LE CALCUL</text><text x='170' y='60' font-size='11' fill='#1e3a8a' text-anchor='middle'>fractions, decimaux, proportionnalite, equations</text><rect x='20' y='85' width='300' height='50' rx='10' fill='#fef3c7' stroke='#f59e0b' stroke-width='2'/><text x='170' y='107' font-size='14' fill='#92400e' font-weight='bold' text-anchor='middle'>LA GEOMETRIE</text><text x='170' y='125' font-size='11' fill='#92400e' text-anchor='middle'>droites, angles, triangles, symetrie, solides</text><rect x='20' y='150' width='300' height='50' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='170' y='172' font-size='14' fill='#7f1d1d' font-weight='bold' text-anchor='middle'>GRANDEURS ET DONNEES</text><text x='170' y='190' font-size='11' fill='#7f1d1d' text-anchor='middle'>mesures, aires, statistiques, probabilites</text></svg>", legende: "Les trois grandes parties du programme de 6e." },
          { type: "methode", titre: "Comment utiliser ce chapitre", texte: "Lis chaque résumé, un par un.\nSi un point n'est pas clair, retourne relire la leçon du chapitre correspondant.\nTermine par les exercices de synthèse, qui mélangent toutes les notions." }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "maths6-rev-nombres",
        titre: "Résumé : les nombres et les calculs",
        blocs: [
          { type: "regle", titre: "Les fractions", texte: "Une fraction s'écrit a/b : a est le numérateur, b est le dénominateur.\nPour ajouter des fractions de même dénominateur, on ajoute les numérateurs.\nPrendre une fraction d'une quantité : les 3/4 de 100 kg, c'est 75 kg." },
          { type: "regle", titre: "Les nombres décimaux", texte: "Un nombre décimal a une partie entière et une partie décimale, séparées par une virgule.\nPour additionner ou soustraire : aligne les virgules.\nPour multiplier par 10, 100, 1000 : déplace la virgule vers la droite." },
          { type: "texte", titre: "Multiples, diviseurs, PGCD et PPCM", texte: "Des multiples de 6 : 6, 12, 18, 24...\nLes diviseurs de 12 : 1, 2, 3, 4, 6 et 12.\nLe PGCD est le plus grand diviseur commun à deux nombres.\nLe PPCM est le plus petit multiple commun à deux nombres." },
          { type: "regle", titre: "Les priorités des opérations", texte: "On calcule d'abord les parenthèses.\nEnsuite les multiplications et les divisions.\nEnfin les additions et les soustractions.\nExemple : 5 + 3 × 2 = 5 + 6 = 11." },
          { type: "methode", titre: "La division euclidienne", texte: "Dans la division euclidienne de a par b : a = b × q + r, avec r plus petit que b.\nExemple : 47 = 6 × 7 + 5. Le quotient est 7, le reste est 5." }
        ]
      },
      {
        id: "maths6-rev-proportionnalite",
        titre: "Résumé : proportionnalité et équations",
        blocs: [
          { type: "definition", titre: "La proportionnalité", texte: "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre.\nCe nombre s'appelle le coefficient de proportionnalité." },
          { type: "exemple", titre: "Au marché", texte: "1 kapoaka de riz coûte 500 Ar.\n2 kapoaka coûtent 1000 Ar, 3 kapoaka coûtent 1500 Ar.\nLe prix est proportionnel à la quantité : le coefficient est 500." },
          { type: "methode", titre: "Calculer avec la proportionnalité", texte: "Méthode du prix unitaire : on calcule d'abord le prix d'une seule unité, puis on multiplie.\nExemple : 4 cahiers coûtent 6000 Ar.\nUn cahier coûte 6000 ÷ 4 = 1500 Ar.\nSept cahiers coûtent 1500 × 7 = 10 500 Ar." },
          { type: "definition", titre: "Une équation", texte: "Une équation est une égalité avec un nombre inconnu, noté x.\nRésoudre l'équation, c'est trouver la valeur de x." },
          { type: "methode", titre: "Résoudre une équation simple", texte: "Pour x + 7 = 15 : on enlève 7 des deux côtés, donc x = 8.\nPour 4 × x = 36 : on divise les deux côtés par 4, donc x = 9.\nVérifie toujours ta réponse en remplaçant x par sa valeur." }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "maths6-rev-geometrie",
        titre: "Résumé : la géométrie",
        blocs: [
          { type: "texte", titre: "Droites, segments et angles", texte: "Une droite (d) est illimitée. Un segment [AB] a deux extrémités.\nUn angle se mesure en degrés (°) avec un rapporteur.\nUn angle droit mesure 90°." },
          { type: "texte", titre: "Les triangles", texte: "Triangle équilatéral : 3 côtés égaux.\nTriangle isocèle : 2 côtés égaux.\nTriangle rectangle : un angle droit." },
          { type: "tableau", titre: "Les quadrilatères", entetes: ["Quadrilatère", "Ses particularités"], lignes: [["Carré", "4 côtés égaux et 4 angles droits"], ["Rectangle", "Côtés opposés égaux et 4 angles droits"], ["Losange", "4 côtés égaux"], ["Parallélogramme", "Côtés opposés parallèles et égaux"]] },
          { type: "schema", titre: "La symétrie axiale", svg: "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><line x1='170' y1='12' x2='170' y2='150' stroke='#dc2626' stroke-width='2' stroke-dasharray='6,4'/><polygon points='60,40 120,70 70,120' fill='#dbeafe' stroke='#1e88e5' stroke-width='2'/><polygon points='280,40 220,70 270,120' fill='#fef3c7' stroke='#f59e0b' stroke-width='2'/><line x1='60' y1='40' x2='280' y2='40' stroke='#6b7280' stroke-width='1' stroke-dasharray='3,3'/><circle cx='60' cy='40' r='3' fill='#1e3a8a'/><text x='44' y='34' font-size='12' fill='#1e3a8a' font-weight='bold'>A</text><circle cx='280' cy='40' r='3' fill='#92400e'/><text x='288' y='34' font-size='12' fill='#92400e' font-weight='bold'>A'</text><text x='176' y='166' font-size='11' fill='#dc2626'>axe de symetrie</text></svg>", legende: "La figure bleue et la figure dorée sont symétriques par rapport à l'axe rouge : A et A' sont à la même distance de l'axe." },
          { type: "schema", titre: "Le plan cartésien", svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='20' x2='50' y2='160' stroke='#e5e7eb'/><line x1='85' y1='20' x2='85' y2='160' stroke='#e5e7eb'/><line x1='120' y1='20' x2='120' y2='160' stroke='#e5e7eb'/><line x1='155' y1='20' x2='155' y2='160' stroke='#e5e7eb'/><line x1='190' y1='20' x2='190' y2='160' stroke='#e5e7eb'/><line x1='225' y1='20' x2='225' y2='160' stroke='#e5e7eb'/><line x1='260' y1='20' x2='260' y2='160' stroke='#e5e7eb'/><line x1='295' y1='20' x2='295' y2='160' stroke='#e5e7eb'/><line x1='40' y1='20' x2='305' y2='20' stroke='#e5e7eb'/><line x1='40' y1='55' x2='305' y2='55' stroke='#e5e7eb'/><line x1='40' y1='90' x2='305' y2='90' stroke='#e5e7eb'/><line x1='40' y1='125' x2='305' y2='125' stroke='#e5e7eb'/><line x1='40' y1='160' x2='308' y2='160' stroke='#374151' stroke-width='2'/><polygon points='308,154 320,160 308,166' fill='#374151'/><line x1='50' y1='168' x2='50' y2='16' stroke='#374151' stroke-width='2'/><polygon points='44,16 50,6 56,16' fill='#374151'/><line x1='155' y1='90' x2='155' y2='160' stroke='#dc2626' stroke-width='1' stroke-dasharray='4,3'/><line x1='50' y1='90' x2='155' y2='90' stroke='#dc2626' stroke-width='1' stroke-dasharray='4,3'/><circle cx='155' cy='90' r='5' fill='#dc2626'/><text x='163' y='84' font-size='12' fill='#dc2626' font-weight='bold'>A(3 ; 2)</text><text x='34' y='174' font-size='12' fill='#374151' font-weight='bold'>O</text><text x='150' y='176' font-size='10' fill='#6b7280'>3</text><text x='38' y='94' font-size='10' fill='#6b7280'>2</text><text x='240' y='182' font-size='11' fill='#374151'>abscisse</text><text x='56' y='30' font-size='11' fill='#374151'>ordonnee</text></svg>", legende: "Le point A a pour abscisse 3 et pour ordonnée 2 : on écrit A(3 ; 2)." },
          { type: "texte", titre: "Les solides", texte: "Le cube : 6 faces carrées, 12 arêtes, 8 sommets.\nLe pavé droit : 6 faces rectangulaires.\nLe cylindre : 2 disques et une surface courbe.\nLe patron est le solide déplié à plat." }
        ]
      },
      {
        id: "maths6-rev-grandeurs",
        titre: "Résumé : grandeurs, aires et données",
        blocs: [
          { type: "regle", titre: "Les grandeurs", texte: "Longueurs : km, hm, dam, m, dm, cm, mm (de 10 en 10).\nMasses : 1 kg = 1000 g.\nDurées : 1 h = 60 min et 1 min = 60 s." },
          { type: "tableau", titre: "Périmètres et aires", entetes: ["Figure", "Périmètre", "Aire"], lignes: [["Carré", "4 × c", "c × c"], ["Rectangle", "2 × (L + l)", "L × l"], ["Disque", "2 × π × r", "π × r × r"]] },
          { type: "remarque", titre: "Le nombre π", texte: "On prend π ≈ 3,14.\nLe périmètre du disque s'appelle aussi la circonférence." },
          { type: "definition", titre: "Les statistiques", texte: "L'effectif d'une donnée est le nombre de fois où elle apparaît.\nLa fréquence = effectif de la donnée ÷ effectif total." },
          { type: "definition", titre: "Les probabilités", texte: "Un événement certain se produit toujours ; un événement impossible ne se produit jamais.\nProbabilité d'un événement = nombre de cas favorables ÷ nombre de cas possibles." },
          { type: "exemple", titre: "Les billes de Rado", texte: "Dans un sac : 4 billes rouges, 3 billes vertes et 3 billes bleues, soit 10 billes.\nProbabilité de tirer une bille rouge : 4/10 = 2/5." }
        ]
      }
    ],
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
        exercices: [
      { niveau: 1, points: 2, enonce: "Calcule : 5 + 3 × 2. Quelle opération fais-tu en premier ?", correction: "On fait la multiplication d'abord : 3 × 2 = 6. Puis l'addition : 5 + 6 = 11." },
      { niveau: 1, points: 2, enonce: "Dans la division euclidienne de 47 par 6, donne le quotient et le reste.", correction: "47 = 6 × 7 + 5. Le quotient est 7 et le reste est 5 (5 est bien plus petit que 6)." },
      { niveau: 2, points: 3, enonce: "Convertis : a) 2,5 km en mètres ; b) 4500 g en kilogrammes ; c) 2 h 30 min en minutes.", correction: "a) 2,5 km = 2500 m. b) 4500 g = 4,5 kg. c) 2 h 30 min = 120 + 30 = 150 min." },
      { niveau: 2, points: 3, enonce: "Au marché, 3 kapoaka de riz coûtent 1500 Ar. Combien coûtent 5 kapoaka ?", correction: "Prix d'un kapoaka : 1500 ÷ 3 = 500 Ar. Prix de 5 kapoaka : 500 × 5 = 2500 Ar." },
      { niveau: 3, points: 4, enonce: "Résous les équations : a) x + 7 = 15 ; b) 4 × x = 36 ; c) x − 5 = 12.", correction: "a) x = 15 − 7 = 8. b) x = 36 ÷ 4 = 9. c) x = 12 + 5 = 17." },
      { niveau: 3, points: 4, enonce: "Le champ de Mamy est un rectangle de 20 m de long et 15 m de large. Calcule son périmètre et son aire.", correction: "Périmètre : 2 × (20 + 15) = 2 × 35 = 70 m. Aire : 20 × 15 = 300 m²." },
      { niveau: 4, points: 5, enonce: "Au marché d'Anosibe, Mamy achète 2,5 kg de riz à 4000 Ar le kilogramme et 3 kapoaka de haricots à 600 Ar le kapoaka. a) Combien paie-t-elle en tout ? b) Elle donne un billet de 20 000 Ar : combien lui rend-on ?", correction: "a) Riz : 2,5 × 4000 = 10 000 Ar. Haricots : 3 × 600 = 1800 Ar. Total : 10 000 + 1800 = 11 800 Ar. b) Monnaie : 20 000 − 11 800 = 8200 Ar." },
      { niveau: 4, points: 5, enonce: "Dans un sac, Rado met 4 billes rouges, 3 billes vertes et 3 billes bleues. Il tire une bille sans regarder. a) Quelle est la probabilité de tirer une bille rouge ? b) Quelle couleur a la plus grande probabilité ? c) S'il répète 50 tirages en remettant la bille à chaque fois, environ combien de billes rouges peut-il espérer tirer ?", correction: "a) Il y a 10 billes en tout : probabilité = 4/10 = 2/5. b) Le rouge, car il y en a le plus (4 contre 3). c) Environ 50 × 4/10 = 20 billes rouges." }
    ]
  }
]);

// ===== FIN DU FICHIER maths-ch17.js =====
