// ===== GUIDE - Mathématiques Première =====
// Chapitre 19 : angles orientés et cercle trigonométrique.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-angles-cercle-trigonometrique",
    titre: "Chapitre 19 : Angles orientés et cercle trigonométrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-angles-orientation",
        titre: "Orienter et mesurer un angle",
        blocs: [
          {
            type: "introduction",
            titre: "Un angle décrit une rotation",
            texte: "Imagine une flèche qui tourne autour de son origine. Pour décrire sa rotation, il ne suffit pas de connaître son ouverture : il faut aussi préciser son sens.\n\nEn trigonométrie, on convient que le sens inverse des aiguilles d'une montre est le sens positif. Le sens des aiguilles d'une montre est le sens négatif."
          },
          {
            type: "definition",
            titre: "Angle orienté",
            texte: "Un angle orienté de deux vecteurs non nuls u et v décrit la rotation qui mène de la direction de u à celle de v.\n\nOn le note (u ; v). Son sens positif est le sens inverse des aiguilles d'une montre.\n\nEn inversant l'ordre des vecteurs, on change le signe de l'angle : une mesure de (v ; u) est l'opposée d'une mesure de (u ; v)."
          },
          {
            type: "remarque",
            titre: "Plusieurs mesures pour un même angle",
            texte: "Effectuer un tour complet supplémentaire ramène la flèche dans la même direction.\n\nAinsi, 30° et 390° représentent le même angle orienté, car 390° = 30° + 360°.\n\nDe même, -330° représente cet angle : -330° = 30° - 360°."
          },
          {
            type: "definition",
            titre: "Le radian",
            texte: "Sur un cercle de rayon 1, un angle au centre d'un radian intercepte un arc de longueur 1.\n\nUn tour complet correspond à une longueur d'arc 2π sur ce cercle. Ainsi :\n\n360° = 2π radians ;\n180° = π radians.\n\nOn écrit souvent simplement π/2 au lieu de π/2 radian."
          },
          {
            type: "methode",
            titre: "Convertir des degrés en radians",
            texte: "Pour convertir une mesure en degrés en radians, on multiplie par π/180.\n\nExemple : 60° = 60 × π/180 = π/3.\n\nPour convertir des radians en degrés, on multiplie par 180/π.\n\nExemple : 3π/4 = (3π/4) × 180/π = 135°."
          },
          {
            type: "tableau",
            titre: "Mesures usuelles",
            entetes: ["Degrés", "Radians"],
            lignes: [
              ["0°", "0"],
              ["30°", "π/6"],
              ["45°", "π/4"],
              ["60°", "π/3"],
              ["90°", "π/2"],
              ["180°", "π"],
              ["360°", "2π"]
            ]
          }
        ]
      },

      {
        id: "m1-cercle-trigo",
        titre: "Se repérer sur le cercle trigonométrique",
        blocs: [
          {
            type: "definition",
            titre: "Le cercle de référence",
            texte: "Dans un repère orthonormé, le cercle trigonométrique est le cercle de centre O et de rayon 1, orienté dans le sens positif.\n\nOn part du point I(1 ; 0). À chaque réel t exprimé en radians correspond un point M du cercle : on tourne depuis I d'un angle orienté de mesure t.\n\nLe point M a pour coordonnées (cos t ; sin t)."
          },
          {
            type: "schema",
            titre: "Cercle trigonométrique",
            svg: "<svg viewBox='0 0 360 300' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Cercle trigonométrique de centre O et de rayon un. Le point I est à droite, le sens positif est inverse des aiguilles d’une montre. Le point M correspondant à t a pour coordonnées cosinus t et sinus t'><rect width='360' height='300' fill='white'/><circle cx='165' cy='150' r='100' fill='none' stroke='#2563eb' stroke-width='2.5'/><g stroke='#475569' stroke-width='1.5'><line x1='35' y1='150' x2='300' y2='150'/><line x1='165' y1='275' x2='165' y2='25'/></g><line x1='165' y1='150' x2='225' y2='70' stroke='#7c3aed' stroke-width='2.5'/><path d='M195 150 A30 30 0 0 0 183 126' fill='none' stroke='#7c3aed' stroke-width='2'/><path d='M225 70 V150 M165 70 H225' fill='none' stroke='#94a3b8' stroke-dasharray='4 4'/><circle cx='225' cy='70' r='5' fill='#7c3aed'/><circle cx='265' cy='150' r='4' fill='#2563eb'/><path d='M 115 63 A 100 100 0 0 0 79 99' fill='none' stroke='#16a34a' stroke-width='3'/><path d='M 78 91 L 79 99 L 87 96' fill='none' stroke='#16a34a' stroke-width='3'/><text x='230' y='65' font-size='14' fill='#6d28d9'>M(cos t ; sin t)</text><text x='188' y='137' font-size='14' fill='#6d28d9'>t</text><text x='269' y='168' font-size='14' fill='#1d4ed8'>I(1 ; 0)</text><text x='171' y='168' font-size='14'>O</text><text x='151' y='43' font-size='13'>π/2</text><text x='47' y='168' font-size='13'>π</text><text x='151' y='268' font-size='13'>3π/2</text><text x='73' y='50' font-size='13' fill='#166534'>sens positif</text></svg>",
            legende: "On part de I. Une rotation positive suit le sens indiqué en vert. Pour le point M associé à t, l'abscisse est cos t et l'ordonnée est sin t."
          },
          {
            type: "exemple",
            titre: "Quatre positions importantes",
            texte: "En partant de I(1 ; 0) :\n\n• à l'angle 0 correspond (1 ; 0) ;\n• à π/2 correspond (0 ; 1) ;\n• à π correspond (-1 ; 0) ;\n• à 3π/2 correspond (0 ; -1) ;\n• à 2π, on revient à (1 ; 0)."
          },
          {
            type: "regle",
            titre: "Tours complets",
            texte: "Pour tout entier relatif k, les mesures t et t + 2kπ correspondent au même point du cercle.\n\nOn écrit : t + 2kπ ≡ t [2π].\n\nPar exemple, 7π/3 = π/3 + 2π : les deux mesures correspondent au même point."
          },
          {
            type: "remarque",
            titre: "Une mesure négative",
            texte: "Un angle négatif se parcourt dans le sens des aiguilles d'une montre.\n\nPar exemple, -π/2 correspond au même point que 3π/2 : ce sont deux façons d'atteindre (0 ; -1)."
          }
        ]
      },

      {
        id: "m1-mesure-principale",
        titre: "Réduire une mesure modulo 2π",
        blocs: [
          {
            type: "definition",
            titre: "Mesure principale",
            texte: "Dans ce cours, la mesure principale d'un angle orienté est son unique mesure appartenant à l'intervalle ]-π ; π].\n\nOn l'obtient en ajoutant ou en retranchant un nombre entier de tours complets, c'est-à-dire un multiple entier de 2π."
          },
          {
            type: "methode",
            titre: "Procéder étape par étape",
            texte: "1. Écris l'angle donné en radians.\n2. Ajoute ou retranche un multiple de 2π.\n3. Arrête-toi lorsque la mesure obtenue appartient à ]-π ; π].\n4. Vérifie que la différence entre les deux mesures est un multiple entier de 2π."
          },
          {
            type: "exemple",
            titre: "Deux réductions",
            texte: "Pour 7π/4 :\n\n7π/4 - 2π = 7π/4 - 8π/4 = -π/4.\n\nComme -π < -π/4 ≤ π, la mesure principale est -π/4.\n\nPour -5π/3 :\n\n-5π/3 + 2π = -5π/3 + 6π/3 = π/3.\n\nLa mesure principale est π/3."
          },
          {
            type: "remarque",
            titre: "La borne -π est exclue",
            texte: "Avec la convention ]-π ; π], la mesure principale de -π est π, car -π + 2π = π.\n\nD'autres ouvrages peuvent choisir l'intervalle [-π ; π[. Il faut suivre la convention annoncée."
          }
        ]
      },

      {
        id: "m1-cosinus-sinus",
        titre: "Lire sinus et cosinus sur le cercle",
        blocs: [
          {
            type: "definition",
            titre: "Coordonnées et signes",
            texte: "Le point associé à l'angle t a pour coordonnées M(cos t ; sin t).\n\nLe cosinus est donc l'abscisse du point et le sinus son ordonnée.\n\nComme le rayon vaut 1, on a toujours :\n\n-1 ≤ cos t ≤ 1 et -1 ≤ sin t ≤ 1."
          },
          {
            type: "tableau",
            titre: "Valeurs usuelles",
            entetes: ["t", "0", "π/6", "π/4", "π/3", "π/2"],
            lignes: [
              ["cos t", "1", "√3/2", "√2/2", "1/2", "0"],
              ["sin t", "0", "1/2", "√2/2", "√3/2", "1"]
            ]
          },
          {
            type: "tableau",
            titre: "Signe selon la position de M",
            entetes: ["Position de M", "Signe de cos t", "Signe de sin t"],
            lignes: [
              ["En haut à droite", "+", "+"],
              ["En haut à gauche", "−", "+"],
              ["En bas à gauche", "−", "−"],
              ["En bas à droite", "+", "−"]
            ]
          },
          {
            type: "remarque",
            titre: "Sur les axes",
            texte: "Le tableau précédent concerne les points situés strictement dans les quatre régions. Sur un axe, l'une des coordonnées est nulle.\n\nPar exemple, pour t = π/2, cos t = 0 et sin t = 1."
          },
          {
            type: "exemple",
            titre: "Lire un angle usuel",
            texte: "Pour t = π/3, le point du cercle a pour coordonnées :\n\nM(1/2 ; √3/2).\n\nDonc cos(π/3) = 1/2 et sin(π/3) = √3/2."
          }
        ]
      },

      {
        id: "m1-relations-cercle",
        titre: "Utiliser les symétries du cercle",
        blocs: [
          {
            type: "regle",
            titre: "Relations fondamentales",
            texte: "Pour tout réel t :\n\ncos² t + sin² t = 1 ;\ncos(-t) = cos t ;\nsin(-t) = -sin t ;\ncos(t + 2π) = cos t ;\nsin(t + 2π) = sin t.\n\nLa première relation vient du cercle de rayon 1 : les coordonnées de M vérifient x² + y² = 1."
          },
          {
            type: "regle",
            titre: "Angles associés à π",
            texte: "Pour tout réel t :\n\ncos(π - t) = -cos t ;\nsin(π - t) = sin t ;\ncos(π + t) = -cos t ;\nsin(π + t) = -sin t.\n\nCes relations se lisent grâce aux symétries du cercle."
          },
          {
            type: "exemple",
            titre: "Calculer avec un angle associé",
            texte: "Comme 2π/3 = π - π/3 :\n\ncos(2π/3) = -cos(π/3) = -1/2 ;\nsin(2π/3) = sin(π/3) = √3/2.\n\nLe point est bien en haut à gauche : son cosinus est négatif et son sinus positif."
          },
          {
            type: "exemple",
            titre: "Retrouver une coordonnée",
            texte: "On sait que cos t = 3/5 et que le point associé à t est situé au-dessus de l'axe des abscisses.\n\nAlors :\n\nsin² t = 1 - cos² t = 1 - 9/25 = 16/25.\n\nDonc sin t = 4/5 ou sin t = -4/5. Le point étant au-dessus de l'axe, son ordonnée est positive : sin t = 4/5."
          },
          {
            type: "remarque",
            titre: "Le signe est indispensable",
            texte: "L'égalité sin² t = 16/25 ne suffit pas à choisir entre 4/5 et -4/5. Il faut une information sur la position du point ou sur le signe du sinus."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis en radians :\n\n1. 90°\n2. 120°\n3. -45°",
        correction: "On multiplie chaque mesure par π/180.\n\n1. 90° = π/2.\n2. 120° = 2π/3.\n3. -45° = -π/4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis en degrés :\n\n1. π/3\n2. 3π/2\n3. -π/6",
        correction: "On multiplie chaque mesure par 180/π.\n\n1. π/3 = 60°.\n2. 3π/2 = 270°.\n3. -π/6 = -30°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donne la mesure principale de chacun des angles suivants, avec la convention ]-π ; π] :\n\n1. 5π/4\n2. -7π/4\n3. 3π",
        correction: "1. 5π/4 - 2π = -3π/4, qui appartient à ]-π ; π].\n\n2. -7π/4 + 2π = π/4.\n\n3. 3π - 2π = π. La mesure principale est π."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur le cercle trigonométrique, donne les coordonnées du point associé à chacun des angles suivants :\n\n1. 0\n2. π/2\n3. π\n4. -π/2",
        correction: "1. Pour 0 : (1 ; 0).\n2. Pour π/2 : (0 ; 1).\n3. Pour π : (-1 ; 0).\n4. Pour -π/2 : (0 ; -1).\n\nLes coordonnées sont toujours (cos t ; sin t)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "En utilisant les angles associés et les valeurs usuelles, calcule exactement :\n\n1. cos(-π/3) et sin(-π/3)\n2. cos(2π/3) et sin(2π/3)",
        correction: "1. cos(-π/3) = cos(π/3) = 1/2.\n\nsin(-π/3) = -sin(π/3) = -√3/2.\n\n2. Comme 2π/3 = π - π/3 :\n\ncos(2π/3) = -cos(π/3) = -1/2 ;\nsin(2π/3) = sin(π/3) = √3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un angle t vérifie sin t = 5/13 et son point sur le cercle trigonométrique est situé à gauche de l'axe des ordonnées.\n\nDétermine cos t.",
        correction: "La relation cos² t + sin² t = 1 donne :\n\ncos² t = 1 - (5/13)² = 1 - 25/169 = 144/169.\n\nDonc cos t = 12/13 ou cos t = -12/13.\n\nLe point est à gauche de l'axe des ordonnées : son abscisse est négative. Ainsi cos t = -12/13."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère l'angle t = 17π/6.\n\n1. Donne sa mesure principale dans ]-π ; π].\n2. Détermine exactement cos t et sin t.\n3. Dans quelle région du cercle se trouve le point associé ?",
        correction: "1. On retranche un tour :\n\n17π/6 - 2π = 17π/6 - 12π/6 = 5π/6.\n\nCette valeur appartient à ]-π ; π] : c'est la mesure principale.\n\n2. Comme 5π/6 = π - π/6 :\n\ncos t = -cos(π/6) = -√3/2 ;\nsin t = sin(π/6) = 1/2.\n\n3. L'abscisse est négative et l'ordonnée positive : le point est en haut à gauche."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur un cercle de centre O et de rayon 6 cm, un angle au centre mesure 2π/3 radians.\n\n1. Exprime cet angle en degrés.\n2. Calcule la longueur de l'arc correspondant, en prenant l'arc parcouru dans le sens positif.\n3. Calcule l'aire du secteur correspondant.\n\nOn rappelle que la circonférence du cercle est 2πR et son aire πR².",
        correction: "1. (2π/3) × 180/π = 120°.\n\n2. L'angle représente 120/360 = 1/3 d'un tour. La circonférence vaut 2π × 6 = 12π cm. La longueur de l'arc est donc 12π/3 = 4π cm.\n\n3. L'aire du disque vaut π × 6² = 36π cm². Le secteur représente un tiers du disque : son aire vaut 12π cm²."
      }
    ]
  }
]);
