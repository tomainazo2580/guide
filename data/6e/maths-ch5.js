// ===== GUIDE - Mathematiques 6eme (T6) =====
// Chapitre 5 : La proportionnalite
// Base sur le programme officiel de Madagascar (FRP Maths T6), complete par Guide.

enregistrerChapitres("6e", "maths", [
  {
    id: "m6-proportionnalite",
    titre: "Chapitre 5 : La proportionnalité",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "m6-prop-reconnaitre",
        titre: "Reconnaître une situation de proportionnalité",
        blocs: [
          {
            type: "definition",
            titre: "Grandeurs proportionnelles",
            texte: "Deux grandeurs sont proportionnelles lorsqu'on peut passer de l'une à l'autre en multipliant toujours par le même nombre.\nCe nombre s'appelle le coefficient de proportionnalité.\nOn peut écrire : y = a × x, où x est la première quantité, y la deuxième, et a le coefficient."
          },
          {
            type: "exemple",
            titre: "Les cahiers à 2 000 Ar",
            texte: "Un cahier coûte 2 000 Ar.\n2 cahiers coûtent 4 000 Ar, 3 cahiers coûtent 6 000 Ar...\nOn multiplie toujours par 2 000 : le prix est proportionnel au nombre de cahiers.\nLa relation est : prix = 2 000 × nombre de cahiers, c'est-à-dire y = 2 000x."
          },
          {
            type: "tableau",
            titre: "Le tableau des cahiers",
            entetes: ["Nombre de cahiers (x)", "1", "2", "3", "4", "5"],
            lignes: [
              ["Prix en Ar (y)", "2 000", "4 000", "6 000", "8 000", "10 000"]
            ]
          },
          {
            type: "remarque",
            titre: "Tout n'est pas proportionnel !",
            texte: "Ton âge et ta taille : à 6 ans tu mesures 1,20 m, mais à 12 ans tu ne mesures pas 2,40 m ! Ce n'est PAS proportionnel.\nUn pantalon à 20 000 Ar avec « le 2ème à moitié prix » : 2 pantalons coûtent 30 000 Ar, pas 40 000 Ar. Ce n'est PAS proportionnel.\nPour être proportionnel, il faut multiplier TOUJOURS par le même nombre, sans exception."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Le kapoaka de riz coûte 1 000 Ar. Le prix est-il proportionnel au nombre de kapoaka ? Quel est le coefficient ?\nRéponse : oui, car on multiplie toujours par 1 000. Le coefficient est 1 000, et y = 1 000x."
          }
        ]
      },
      {
        id: "m6-prop-tableau",
        titre: "Le tableau de proportionnalité",
        blocs: [
          {
            type: "definition",
            titre: "À quoi sert le tableau ?",
            texte: "Le tableau de valeurs permet d'organiser les couples de valeurs : la première ligne contient une grandeur, la deuxième ligne l'autre grandeur.\nDans un tableau de proportionnalité, on passe toujours de la 1ère ligne à la 2ème en multipliant par le même coefficient."
          },
          {
            type: "methode",
            titre: "Vérifier qu'un tableau est proportionnel",
            texte: "On divise chaque nombre de la 2ème ligne par le nombre correspondant de la 1ère ligne.\nSi on trouve TOUJOURS le même résultat, le tableau est proportionnel et ce résultat est le coefficient.\nExemple : 4 000 ÷ 2 = 2 000 ; 6 000 ÷ 3 = 2 000 ; 10 000 ÷ 5 = 2 000. Toujours 2 000 : c'est proportionnel."
          },
          {
            type: "exemple",
            titre: "Le riz à 3 000 Ar le kilo",
            texte: "3 kg de riz coûtent 9 000 Ar.\nLe prix d'un kilogramme est : 9 000 ÷ 3 = 3 000 Ar.\nLe coefficient de proportionnalité est 3 000.\nLa relation est : prix = 3 000 × masse, c'est-à-dire y = 3 000x."
          },
          {
            type: "tableau",
            titre: "Exemple : les stylos à 1 000 Ar",
            entetes: ["Nombre de stylos (x)", "1", "2", "3", "4", "5"],
            lignes: [
              ["Prix en Ar (y)", "1 000", "2 000", "3 000", "4 000", "5 000"]
            ]
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Ce tableau est-il proportionnel ? 2 → 6 ; 3 → 9 ; 5 → 15.\nRéponse : 6 ÷ 2 = 3 ; 9 ÷ 3 = 3 ; 15 ÷ 5 = 3. Toujours 3 : oui, c'est proportionnel, le coefficient est 3."
          }
        ]
      },
// === FIN MORCEAU 1 ===
            {
        id: "m6-prop-graphique",
        titre: "Le graphique de la proportionnalité",
        blocs: [
          {
            type: "definition",
            titre: "Abscisse et ordonnée",
            texte: "Sur un graphique, chaque couple de valeurs correspond à un point :\nLa valeur de la 1ère grandeur se lit sur l'axe horizontal : c'est l'abscisse.\nLa valeur de la 2ème grandeur se lit sur l'axe vertical : c'est l'ordonnée."
          },
          {
            type: "regle",
            titre: "La signature de la proportionnalité",
            texte: "Dans une situation de proportionnalité, les points sont alignés sur une droite qui passe par l'origine (le point 0).\nC'est la façon de reconnaître la proportionnalité d'un coup d'œil sur un graphique."
          },
          {
            type: "schema",
            titre: "Le prix des cahiers en graphique",
            svg: "<svg viewBox='0 0 320 195' xmlns='http://www.w3.org/2000/svg'><text x='46' y='14' font-size='11' fill='#1e3a5f'>Prix (Ar)</text><line x1='40' y1='132' x2='305' y2='132' stroke='#e5e7eb'/><line x1='40' y1='104' x2='305' y2='104' stroke='#e5e7eb'/><line x1='40' y1='76' x2='305' y2='76' stroke='#e5e7eb'/><line x1='40' y1='48' x2='305' y2='48' stroke='#e5e7eb'/><line x1='40' y1='160' x2='305' y2='160' stroke='#1e3a5f' stroke-width='2'/><line x1='40' y1='160' x2='40' y2='18' stroke='#1e3a5f' stroke-width='2'/><line x1='40' y1='160' x2='265' y2='34' stroke='#1e3a5f' stroke-width='2'/><circle cx='90' cy='132' r='4' fill='#dc2626'/><circle cx='140' cy='104' r='4' fill='#dc2626'/><circle cx='190' cy='76' r='4' fill='#dc2626'/><circle cx='240' cy='48' r='4' fill='#dc2626'/><text x='34' y='136' font-size='10' text-anchor='end' fill='#6b7280'>2 000</text><text x='34' y='108' font-size='10' text-anchor='end' fill='#6b7280'>4 000</text><text x='34' y='80' font-size='10' text-anchor='end' fill='#6b7280'>6 000</text><text x='34' y='52' font-size='10' text-anchor='end' fill='#6b7280'>8 000</text><text x='36' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>0</text><text x='90' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>1</text><text x='140' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>2</text><text x='190' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>3</text><text x='240' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>4</text><text x='290' y='176' font-size='10' text-anchor='middle' fill='#6b7280'>5</text><text x='165' y='192' font-size='11' text-anchor='middle' fill='#1e3a5f'>Nombre de cahiers</text></svg>",
            legende: "Les points sont alignés sur une droite qui passe par l'origine : le prix est proportionnel au nombre de cahiers."
          },
          {
            type: "methode",
            titre: "Construire le graphique",
            texte: "1. Place la première grandeur sur l'axe horizontal (x).\n2. Place la deuxième grandeur sur l'axe vertical (y).\n3. Pour chaque couple de valeurs, place le point correspondant.\n4. Observe : si les points sont alignés avec l'origine, c'est bien de la proportionnalité."
          },
          {
            type: "remarque",
            titre: "Lire un graphique",
            texte: "Pour trouver le prix de 3 cahiers : pars de 3 sur l'axe horizontal, monte jusqu'à la droite, puis lis la valeur sur l'axe vertical : 6 000 Ar."
          }
        ]
      },
      {
        id: "m6-prop-inter-extra",
        titre: "Interpolation et extrapolation",
        blocs: [
          {
            type: "definition",
            titre: "L'interpolation",
            texte: "L'interpolation consiste à rechercher une valeur située ENTRE deux valeurs connues.\nExemple : on connaît le prix de 4 kg (8 000 Ar) et de 6 kg (12 000 Ar). Quel est le prix de 5 kg ?\n5 kg est entre 4 kg et 6 kg : c'est une interpolation.\nRéponse : 5 × 2 000 = 10 000 Ar (on peut aussi faire la moyenne entre 8 000 et 12 000)."
          },
          {
            type: "definition",
            titre: "L'extrapolation",
            texte: "L'extrapolation consiste à rechercher une valeur située AU-DELÀ des valeurs connues.\nExemple : on connaît les valeurs pour x = 2, 4 et 6 (y = 6, 12, 18). Quelle est la valeur de y pour x = 10 ?\nLe coefficient est 3 (car 6 ÷ 2 = 3), donc y = 3 × 10 = 30."
          },
          {
            type: "methode",
            titre: "La méthode en 4 étapes",
            texte: "Étape 1 : identifier les deux grandeurs.\nÉtape 2 : construire le tableau de valeurs.\nÉtape 3 : chercher le coefficient de proportionnalité.\nÉtape 4 : écrire la relation y = ax, puis calculer la valeur demandée."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Interpolation et extrapolation ne fonctionnent QUE si la situation est vraiment proportionnelle. Vérifie toujours le coefficient avant de calculer."
          }
        ]
      },
      {
        id: "m6-prop-problemes",
        titre: "Problèmes de la vie quotidienne",
        blocs: [
          {
            type: "methode",
            titre: "La stratégie face à un problème",
            texte: "1. Repère les deux grandeurs (exemple : la masse et le prix).\n2. Trouve le coefficient (souvent le prix ou la valeur POUR 1 : prix unitaire, consommation par km...).\n3. Écris la relation y = ax.\n4. Calcule la valeur demandée."
          },
          {
            type: "exemple",
            titre: "Au marché",
            texte: "Le kapoaka de riz coûte 1 000 Ar. Maman en achète 12.\nCoefficient : 1 000 Ar par kapoaka.\nPrix : 12 × 1 000 = 12 000 Ar."
          },
          {
            type: "exemple",
            titre: "En cuisine",
            texte: "Pour cuire le vary, il faut 2 verres d'eau pour 1 verre de riz.\nPour 4 verres de riz : 4 × 2 = 8 verres d'eau.\nLa quantité d'eau est proportionnelle à la quantité de riz, le coefficient est 2."
          },
          {
            type: "exemple",
            titre: "Sur la route",
            texte: "Un taxi-brousse roule à vitesse constante : 60 km en 1 heure.\nEn 2 heures : 2 × 60 = 120 km. En 3 heures : 180 km.\nLa distance est proportionnelle au temps, le coefficient est 60."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Un ouvrier gagne 15 000 Ar par jour de travail. Combien gagne-t-il pour 6 jours ? Pour 20 jours ?\nRéponses : 6 × 15 000 = 90 000 Ar ; 20 × 15 000 = 300 000 Ar."
          }
        ]
      }
    ],
// === FIN MORCEAU 2 ===
        exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un cahier coûte 2 000 Ar.\n1. Quel est le prix de 5 cahiers ?\n2. Quel est le prix de 8 cahiers ?\n3. Quel est le coefficient de proportionnalité ?",
        correction: "1. 5 × 2 000 = 10 000 Ar.\n2. 8 × 2 000 = 16 000 Ar.\n3. Le coefficient est 2 000 (le prix d'un cahier)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Ces situations sont-elles proportionnelles ? Réponds par oui ou non.\n1. Le prix des kapoaka de riz selon le nombre de kapoaka.\n2. La taille d'un enfant selon son âge.\n3. Le salaire selon le nombre de jours travaillés (même salaire chaque jour).",
        correction: "1. Oui : on multiplie toujours par le prix d'un kapoaka.\n2. Non : à 6 ans on mesure environ 1,20 m, mais à 12 ans on ne mesure pas 2,40 m.\n3. Oui : on multiplie le nombre de jours par le salaire d'un jour."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "3 kg de riz coûtent 9 000 Ar.\n1. Quel est le prix d'un kilogramme ?\n2. Écris la relation entre le prix y et la masse x.\n3. Complète : 5 kg coûtent ... Ar ; 10 kg coûtent ... Ar.",
        correction: "1. 9 000 ÷ 3 = 3 000 Ar le kilogramme.\n2. y = 3 000x (prix = 3 000 × masse).\n3. 5 × 3 000 = 15 000 Ar ; 10 × 3 000 = 30 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Ces tableaux sont-ils proportionnels ? Justifie.\nTableau A : 2 → 6 ; 3 → 9 ; 5 → 15.\nTableau B : 2 → 6 ; 3 → 10 ; 4 → 14.",
        correction: "Tableau A : 6 ÷ 2 = 3 ; 9 ÷ 3 = 3 ; 15 ÷ 5 = 3. Toujours 3 : proportionnel (coefficient 3).\nTableau B : 6 ÷ 2 = 3 mais 10 ÷ 3 = 3,33... Ce n'est pas le même nombre : NON proportionnel."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Voici les prix du riz au marché : 2 kg → 4 000 Ar ; 4 kg → 8 000 Ar ; 6 kg → 12 000 Ar.\n1. Quel est le prix de 5 kg ? (interpolation)\n2. Quel est le prix de 10 kg ? (extrapolation)",
        correction: "1. 5 kg est entre 4 et 6 kg. Le coefficient est 2 000 (4 000 ÷ 2), donc 5 × 2 000 = 10 000 Ar.\n2. 10 kg est au-delà des valeurs connues : 10 × 2 000 = 20 000 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur un graphique de proportionnalité, le point correspondant à 2 cahiers est à 4 000 Ar sur l'axe vertical.\n1. Quel est le coefficient de proportionnalité ?\n2. Où se trouve le point pour 3 cahiers ?\n3. Les points du graphique sont-ils alignés avec l'origine ?",
        correction: "1. 4 000 ÷ 2 = 2 000. Le coefficient est 2 000 Ar par cahier.\n2. 3 × 2 000 = 6 000 Ar : le point est à la hauteur 6 000 au-dessus de 3.\n3. Oui : dans toute situation de proportionnalité, les points sont alignés sur une droite qui passe par l'origine."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un taxi-brousse roule à vitesse constante et parcourt 60 km en 1 heure.\n1. Quelle distance parcourt-il en 2 h 30 min (2,5 h) ?\n2. Combien de temps lui faut-il pour parcourir 210 km ?",
        correction: "1. La distance est proportionnelle au temps : 2,5 × 60 = 150 km.\n2. On cherche le temps : 210 ÷ 60 = 3,5 h, c'est-à-dire 3 h 30 min."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une boutique vend le cahier à 2 000 Ar. Elle affiche une promotion : « le lot de 10 cahiers à 18 000 Ar ».\n1. Sans promotion, combien coûteraient 10 cahiers ?\n2. Avec la promotion, quel est le prix d'un cahier dans le lot ?\n3. Le prix du lot est-il proportionnel au nombre de cahiers ?\n4. Combien économise-t-on en achetant le lot ?",
        correction: "1. 10 × 2 000 = 20 000 Ar.\n2. 18 000 ÷ 10 = 1 800 Ar le cahier.\n3. Non : 10 × 2 000 = 20 000, or le lot coûte 18 000. On ne multiplie plus par le même nombre.\n4. 20 000 − 18 000 = 2 000 Ar économisés (le prix d'un cahier !)."
      }
    ]
  }
]);
