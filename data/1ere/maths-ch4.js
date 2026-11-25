// ===== GUIDE - Mathématiques Première =====
// Chapitre 4 : systèmes linéaires dans ℝ² et ℝ³.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-systemes-lineaires",
    titre: "Chapitre 4 : Systèmes linéaires dans ℝ² et ℝ³",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-systemes-comprendre",
        titre: "Comprendre un système linéaire",
        blocs: [
          {
            type: "introduction",
            titre: "Deux informations pour deux inconnues",
            texte: "Dans une boutique, un cahier et un stylo coûtent ensemble 3 000 Ar. Deux cahiers et un stylo coûtent ensemble 5 000 Ar.\n\nSi x désigne le prix d'un cahier et y celui d'un stylo, les deux informations donnent :\n\nx + y = 3 000\n2x + y = 5 000.\n\nLes deux égalités doivent être vraies en même temps. Elles forment un système."
          },
          {
            type: "definition",
            titre: "Système à deux inconnues",
            texte: "Un système linéaire de deux équations à deux inconnues peut s'écrire :\n\nax + by = c\n a'x + b'y = c',\n\noù les coefficients sont des nombres réels.\n\nUne solution est un couple (x ; y) qui vérifie simultanément les deux équations. L'ensemble de tous les couples solutions est noté S."
          },
          {
            type: "exemple",
            titre: "Vérifier un couple",
            texte: "Pour le système :\n\nx + y = 3 000\n2x + y = 5 000,\n\nle couple (2 000 ; 1 000) convient :\n\n2 000 + 1 000 = 3 000 ;\n2 × 2 000 + 1 000 = 5 000.\n\nIl vérifie bien les deux équations."
          },
          {
            type: "remarque",
            titre: "L'ordre compte",
            texte: "Dans le couple (x ; y), le premier nombre est la valeur de x et le second celle de y.\n\nLe couple (2 000 ; 1 000) n'est pas le même que (1 000 ; 2 000). Pour vérifier une solution, remplace toujours les deux inconnues dans les deux équations."
          }
        ]
      },

      {
        id: "m1-systemes-substitution",
        titre: "Résoudre par substitution",
        blocs: [
          {
            type: "methode",
            titre: "Principe",
            texte: "La substitution consiste à exprimer une inconnue en fonction de l'autre, puis à remplacer cette expression dans la deuxième équation.\n\n1. Isole une inconnue dans l'une des équations.\n2. Remplace-la dans l'autre équation.\n3. Résous l'équation obtenue.\n4. Calcule la deuxième inconnue.\n5. Vérifie le couple dans les deux équations."
          },
          {
            type: "exemple",
            titre: "Un système résolu pas à pas",
            texte: "Résolvons :\n\nx + y = 7\n2x - y = 2.\n\nLa première équation donne y = 7 - x.\n\nOn remplace y dans la seconde :\n\n2x - (7 - x) = 2\n2x - 7 + x = 2\n3x = 9\nx = 3.\n\nAlors y = 7 - 3 = 4.\n\nVérification : 3 + 4 = 7 et 2 × 3 - 4 = 2.\n\nDonc S = {(3 ; 4)}."
          },
          {
            type: "remarque",
            titre: "Attention aux parenthèses",
            texte: "Dans l'exemple précédent, -y devient -(7 - x), et non -7 - x.\n\nEn développant : -(7 - x) = -7 + x."
          }
        ]
      },

      {
        id: "m1-systemes-elimination",
        titre: "Résoudre par élimination",
        blocs: [
          {
            type: "methode",
            titre: "Additionner ou soustraire les équations",
            texte: "On peut multiplier une équation par un nombre non nul, puis l'ajouter à l'autre pour supprimer une inconnue.\n\nMéthode :\n\n1. Choisis l'inconnue à éliminer.\n2. Si nécessaire, multiplie une ou les deux équations par des nombres non nuls pour obtenir des coefficients opposés.\n3. Additionne les équations obtenues.\n4. Calcule une inconnue, puis l'autre.\n5. Vérifie dans les équations initiales.\n\nPour conserver un système équivalent, on peut remplacer une équation par sa somme avec un multiple de l'autre, tout en conservant cette autre équation."
          },
          {
            type: "exemple",
            titre: "Éliminer y",
            texte: "Résolvons :\n\n2x + 3y = 13\n4x - 3y = 5.\n\nEn additionnant les deux équations, les termes en y disparaissent :\n\n6x = 18, donc x = 3.\n\nDans la première équation :\n\n2 × 3 + 3y = 13\n3y = 7\ny = 7/3.\n\nVérification dans la seconde : 4 × 3 - 3 × (7/3) = 12 - 7 = 5.\n\nDonc S = {(3 ; 7/3)}."
          },
          {
            type: "exemple",
            titre: "Multiplier avant d'éliminer",
            texte: "Résolvons :\n\nx + 2y = 8\n3x + y = 9.\n\nMultiplions la seconde équation par -2 :\n\n-6x - 2y = -18.\n\nEn l'ajoutant à la première :\n\n-5x = -10, donc x = 2.\n\nPuis 2 + 2y = 8, donc y = 3.\n\nVérification : 2 + 2 × 3 = 8 et 3 × 2 + 3 = 9.\n\nAinsi S = {(2 ; 3)}."
          }
        ]
      },

      {
        id: "m1-systemes-graphique",
        titre: "Interpréter un système dans le plan",
        blocs: [
          {
            type: "definition",
            titre: "Équations de droites",
            texte: "Si les coefficients de x et de y ne sont pas tous les deux nuls, une équation ax + by = c représente une droite dans un repère.\n\nLa solution d'un système de deux telles équations correspond à un point appartenant aux deux droites."
          },
          {
            type: "schema",
            titre: "Deux droites sécantes",
            svg: "<svg viewBox='0 0 360 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux droites se coupent au point de coordonnées 2 et 1, solution du système x plus y égale 3 et x moins y égale 1'><rect width='360' height='260' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 80 20 V 220 M 120 20 V 220 M 160 20 V 220 M 200 20 V 220 M 240 20 V 220 M 280 20 V 220'/><path d='M 40 60 H 320 M 40 100 H 320 M 40 140 H 320 M 40 180 H 320'/></g><g stroke='#475569' stroke-width='2'><line x1='40' y1='180' x2='325' y2='180'/><line x1='120' y1='225' x2='120' y2='15'/></g><path d='M 80 20 L 240 180' stroke='#2563eb' stroke-width='3' fill='none'/><path d='M 80 260 L 280 60' stroke='#dc2626' stroke-width='3' fill='none'/><circle cx='200' cy='140' r='5' fill='#7c3aed'/><text x='209' y='132' font-size='14' fill='#6d28d9'>A(2 ; 1)</text><text x='116' y='198' font-size='13' fill='#334155'>0</text><text x='156' y='198' font-size='13' fill='#334155'>1</text><text x='196' y='198' font-size='13' fill='#334155'>2</text><text x='101' y='145' font-size='13' fill='#334155'>1</text><text x='310' y='175' font-size='13' fill='#334155'>x</text><text x='127' y='27' font-size='13' fill='#334155'>y</text><text x='40' y='242' font-size='13' fill='#1d4ed8'>Bleu : x + y = 3</text><text x='190' y='242' font-size='13' fill='#b91c1c'>Rouge : x - y = 1</text></svg>",
            legende: "Les deux droites se coupent en A(2 ; 1). Le couple (2 ; 1) vérifie les deux équations : c'est l'unique solution du système."
          },
          {
            type: "tableau",
            titre: "Nombre de solutions selon les droites",
            entetes: ["Position des droites", "Solutions du système"],
            lignes: [
              ["Sécantes", "Une solution : les coordonnées du point d'intersection."],
              ["Parallèles et distinctes", "Aucune solution : elles ne se rencontrent pas."],
              ["Confondues", "Une infinité de solutions : tous les points de la droite commune."]
            ]
          },
          {
            type: "remarque",
            titre: "Une hypothèse importante",
            texte: "Ce bilan graphique suppose que chaque équation représente bien une droite, c'est-à-dire que ses coefficients de x et de y ne sont pas tous deux nuls.\n\nUne égalité comme 0x + 0y = 1 est impossible ; 0x + 0y = 0 est vraie pour tous les couples. On les traite directement."
          }
        ]
      },

      {
        id: "m1-systemes-cas-particuliers",
        titre: "Reconnaître les systèmes sans solution ou à plusieurs solutions",
        blocs: [
          {
            type: "exemple",
            titre: "Aucune solution",
            texte: "Considérons :\n\nx + y = 2\n2x + 2y = 5.\n\nEn multipliant la première équation par 2, on obtient 2x + 2y = 4. La seconde exige pourtant que cette même expression vaille 5.\n\nC'est impossible. Donc S = ∅."
          },
          {
            type: "exemple",
            titre: "Une infinité de solutions",
            texte: "Considérons :\n\nx + y = 2\n2x + 2y = 4.\n\nLa seconde équation est le double de la première. Elle n'ajoute aucune nouvelle condition.\n\nOn peut choisir librement x = t, où t est un réel. Alors y = 2 - t.\n\nL'ensemble des solutions est :\n\nS = {(t ; 2 - t) | t ∈ ℝ}.\n\nPar exemple, (0 ; 2), (1 ; 1) et (3 ; -1) sont des solutions."
          },
          {
            type: "remarque",
            titre: "Interpréter une égalité obtenue",
            texte: "Lors d'une élimination :\n\n• une égalité impossible, comme 0 = 3, montre que le système n'a pas de solution ;\n• une égalité toujours vraie, comme 0 = 0, ne suffit pas à elle seule pour décrire les solutions : il faut encore examiner les équations restantes."
          }
        ]
      },

      {
        id: "m1-systemes-trois-inconnues",
        titre: "Résoudre un exemple dans ℝ³",
        blocs: [
          {
            type: "definition",
            titre: "Trois inconnues",
            texte: "Une solution d'un système à trois inconnues x, y et z est un triplet (x ; y ; z) qui vérifie simultanément toutes les équations du système.\n\nOn peut utiliser l'élimination pour ramener le problème à un système de deux équations à deux inconnues."
          },
          {
            type: "methode",
            titre: "Éliminer une inconnue",
            texte: "Pour un système de trois équations :\n\n1. Choisis une inconnue à éliminer, par exemple z.\n2. Combine les équations pour obtenir deux équations ne contenant plus z.\n3. Résous le système à deux inconnues ainsi obtenu.\n4. Remplace les valeurs trouvées dans une équation initiale pour calculer z.\n5. Vérifie le triplet dans les trois équations initiales."
          },
          {
            type: "exemple",
            titre: "Résolution détaillée",
            texte: "Résolvons :\n\n(1) x + y + z = 6\n(2) 2x - y + z = 3\n(3) x + 2y - z = 2.\n\nSoustrayons (1) de (2) :\n\n(4) x - 2y = -3.\n\nAdditionnons (1) et (3) :\n\n(5) 2x + 3y = 8.\n\nD'après (4), x = 2y - 3. Remplaçons dans (5) :\n\n2(2y - 3) + 3y = 8\n7y = 14, donc y = 2.\n\nAlors x = 2 × 2 - 3 = 1.\n\nAvec (1) : 1 + 2 + z = 6, donc z = 3.\n\nVérification :\n(1) 1 + 2 + 3 = 6 ;\n(2) 2 - 2 + 3 = 3 ;\n(3) 1 + 4 - 3 = 2.\n\nDonc S = {(1 ; 2 ; 3)}."
          },
          {
            type: "remarque",
            titre: "Ne pas généraliser trop vite",
            texte: "Un système à trois inconnues n'a pas toujours une solution unique. Selon les équations, il peut n'avoir aucune solution ou en avoir une infinité.\n\nLa vérification dans toutes les équations est indispensable."
          }
        ]
      },

      {
        id: "m1-systemes-probleme",
        titre: "Mettre un problème en système",
        blocs: [
          {
            type: "methode",
            titre: "Du texte aux équations",
            texte: "1. Choisis les inconnues et indique ce qu'elles représentent, avec leurs unités.\n2. Traduis chaque information par une équation.\n3. Résous le système.\n4. Vérifie les résultats dans le contexte et dans les équations.\n5. Réponds par une phrase."
          },
          {
            type: "exemple",
            titre: "Prix de deux articles",
            texte: "Un cahier et un stylo coûtent ensemble 3 000 Ar. Deux cahiers et un stylo coûtent ensemble 5 000 Ar. Quels sont leurs prix ?\n\nSoit x le prix d'un cahier et y celui d'un stylo, en ariary.\n\nx + y = 3 000\n2x + y = 5 000.\n\nEn soustrayant la première équation de la seconde : x = 2 000.\n\nPuis 2 000 + y = 3 000, donc y = 1 000.\n\nUn cahier coûte 2 000 Ar et un stylo 1 000 Ar. Vérification : 2 × 2 000 + 1 000 = 5 000 Ar."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le couple (2 ; 3) est-il solution du système suivant ? Justifie en vérifiant les deux équations.\n\nx + y = 5\n2x - y = 1",
        correction: "Pour x = 2 et y = 3 :\n\nx + y = 2 + 3 = 5 ;\n2x - y = 2 × 2 - 3 = 1.\n\nLes deux équations sont vérifiées. Le couple (2 ; 3) est donc solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résous par substitution :\n\nx + y = 5\nx = 2.",
        correction: "La seconde équation donne x = 2.\n\nDans la première : 2 + y = 5, donc y = 3.\n\nVérification : 2 + 3 = 5. Ainsi S = {(2 ; 3)}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ² :\n\nx + y = 8\nx - y = 2.",
        correction: "En additionnant les deux équations :\n\n2x = 10, donc x = 5.\n\nPuis 5 + y = 8, donc y = 3.\n\nVérification : 5 + 3 = 8 et 5 - 3 = 2.\n\nS = {(5 ; 3)}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ² :\n\n2x + y = 7\nx - y = 2.",
        correction: "En additionnant les équations :\n\n3x = 9, donc x = 3.\n\nDans x - y = 2 : 3 - y = 2, donc y = 1.\n\nVérification : 2 × 3 + 1 = 7 et 3 - 1 = 2.\n\nS = {(3 ; 1)}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ² et précise si le système a une solution, aucune solution ou une infinité de solutions :\n\n1. x + 2y = 4 et 2x + 4y = 8.\n2. x + 2y = 4 et 2x + 4y = 9.",
        correction: "1. La deuxième équation est le double de la première. Elle n'ajoute aucune condition.\n\nOn pose y = t, avec t ∈ ℝ. Alors x = 4 - 2t.\n\nS = {(4 - 2t ; t) | t ∈ ℝ}. Il y a une infinité de solutions.\n\n2. Le double de la première équation donne 2x + 4y = 8, tandis que la seconde impose 2x + 4y = 9. C'est impossible.\n\nS = ∅ : il n'y a aucune solution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ³ :\n\nx + y + z = 6\nx - y + z = 2\nx + y - z = 0.",
        correction: "Soustrayons la deuxième équation de la première :\n\n2y = 4, donc y = 2.\n\nSoustrayons la troisième de la première :\n\n2z = 6, donc z = 3.\n\nDans la première équation : x + 2 + 3 = 6, donc x = 1.\n\nVérification :\n1 + 2 + 3 = 6 ;\n1 - 2 + 3 = 2 ;\n1 + 2 - 3 = 0.\n\nDonc S = {(1 ; 2 ; 3)}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une librairie, 2 cahiers et 3 stylos coûtent 8 500 Ar. Trois cahiers et un stylo coûtent 9 250 Ar.\n\n1. Choisis deux inconnues et écris un système.\n2. Détermine le prix d'un cahier et celui d'un stylo.\n3. Vérifie les deux montants.",
        correction: "1. Soit x le prix d'un cahier et y celui d'un stylo, en ariary.\n\nLe système est :\n2x + 3y = 8 500\n3x + y = 9 250.\n\n2. La seconde équation donne y = 9 250 - 3x. On remplace dans la première :\n\n2x + 3(9 250 - 3x) = 8 500\n2x + 27 750 - 9x = 8 500\n-7x = -19 250\nx = 2 750.\n\nAlors y = 9 250 - 3 × 2 750 = 1 000.\n\nUn cahier coûte 2 750 Ar et un stylo 1 000 Ar.\n\n3. Vérification : 2 × 2 750 + 3 × 1 000 = 8 500 Ar ; 3 × 2 750 + 1 000 = 9 250 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Résous le système dans ℝ³ :\n\nx + y + z = 9\n2x + y - z = 2\nx - y + 2z = 10.\n\nDétaille les éliminations et vérifie le triplet obtenu.",
        correction: "Notons les équations (1), (2) et (3).\n\nAdditionnons (1) et (2) pour éliminer z :\n\n(4) 3x + 2y = 11.\n\nAdditionnons (1) et (3) pour éliminer y :\n\n(5) 2x + 3z = 19.\n\nPour obtenir une seconde équation en x et y, on peut soustraire (2) de (3) :\n\n-x - 2y + 3z = 8.\n\nUne autre méthode est de tirer z = 9 - x - y de (1), puis de remplacer dans (3) :\n\nx - y + 2(9 - x - y) = 10\n-x - 3y = -8,\nsoit (6) x + 3y = 8.\n\nRésolvons (4) et (6). De (6), x = 8 - 3y. Donc :\n\n3(8 - 3y) + 2y = 11\n24 - 7y = 11\ny = 13/7.\n\nAlors x = 8 - 39/7 = 17/7.\n\nAvec (1) : z = 9 - 17/7 - 13/7 = 33/7.\n\nVérification :\n(1) (17 + 13 + 33)/7 = 63/7 = 9 ;\n(2) (34 + 13 - 33)/7 = 14/7 = 2 ;\n(3) (17 - 13 + 66)/7 = 70/7 = 10.\n\nAinsi S = {(17/7 ; 13/7 ; 33/7)}."
      }
    ]
  }
]);
