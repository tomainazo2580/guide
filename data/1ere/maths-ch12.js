// ===== GUIDE - Mathématiques Première =====
// Chapitre 12 : dérivation et tangentes.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-derivation-tangentes",
    titre: "Chapitre 12 : Dérivation et tangentes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-taux-variation",
        titre: "Du taux de variation au nombre dérivé",
        blocs: [
          {
            type: "introduction",
            titre: "Observer une variation",
            texte: "Une distance parcourue est donnée par une fonction d du temps. Entre les instants 2 et 3 secondes, la distance passe de 4 à 9 mètres.\n\nLa vitesse moyenne sur cet intervalle est :\n\n(9 - 4)/(3 - 2) = 5 m/s.\n\nPour étudier la vitesse à un instant précis, on fait se rapprocher les deux instants. Cette idée conduit au nombre dérivé."
          },
          {
            type: "definition",
            titre: "Taux de variation",
            texte: "Soit f une fonction définie en a et en a + h, avec h ≠ 0.\n\nLe taux de variation de f entre a et a + h est :\n\n[f(a + h) - f(a)]/h.\n\nIl mesure la variation moyenne de f lorsque x passe de a à a + h."
          },
          {
            type: "exemple",
            titre: "Avec la fonction carré",
            texte: "Soit f(x) = x². Calculons son taux de variation entre 1 et 1 + h, avec h ≠ 0.\n\n[f(1 + h) - f(1)]/h\n= [(1 + h)² - 1]/h\n= [1 + 2h + h² - 1]/h\n= (2h + h²)/h\n= 2 + h.\n\nLorsque h se rapproche de 0, ce taux se rapproche de 2."
          },
          {
            type: "remarque",
            titre: "Pourquoi h ne peut pas être nul ?",
            texte: "Dans le taux de variation, on divise par h. Il faut donc h ≠ 0.\n\nPour calculer une limite lorsque h tend vers 0, on étudie des valeurs de h proches de 0, mais différentes de 0."
          }
        ]
      },

      {
        id: "m1-nombre-derive",
        titre: "Définir et calculer un nombre dérivé",
        blocs: [
          {
            type: "definition",
            titre: "Nombre dérivé en a",
            texte: "On suppose que f est définie sur un intervalle contenant a à l'intérieur.\n\nSi le taux de variation [f(a + h) - f(a)]/h admet une limite finie lorsque h tend vers 0, on dit que f est dérivable en a.\n\nCette limite est le nombre dérivé de f en a, noté f'(a) :\n\nf'(a) = lim(h → 0) [f(a + h) - f(a)]/h."
          },
          {
            type: "methode",
            titre: "Calculer avec la définition",
            texte: "1. Calcule f(a + h) et f(a).\n2. Forme le quotient [f(a + h) - f(a)]/h, pour h ≠ 0.\n3. Simplifie le quotient si possible.\n4. Cherche sa limite lorsque h tend vers 0.\n5. Si cette limite est finie, elle vaut f'(a)."
          },
          {
            type: "exemple",
            titre: "Dérivée de x² en 1",
            texte: "Pour f(x) = x², nous avons trouvé :\n\n[f(1 + h) - f(1)]/h = 2 + h.\n\nLorsque h tend vers 0, 2 + h tend vers 2.\n\nDonc f est dérivable en 1 et f'(1) = 2."
          },
          {
            type: "exemple",
            titre: "Une fonction affine",
            texte: "Soit f(x) = 3x - 2. Pour tout réel a et h ≠ 0 :\n\n[f(a + h) - f(a)]/h\n= [3(a + h) - 2 - (3a - 2)]/h\n= 3h/h = 3.\n\nLa limite vaut 3. Donc f'(a) = 3 pour tout réel a."
          },
          {
            type: "remarque",
            titre: "Dérivabilité et continuité",
            texte: "Si f est dérivable en a, alors f est continue en a.\n\nLa réciproque est fausse : une fonction peut être continue en un point sans y être dérivable."
          }
        ]
      },

      {
        id: "m1-fonction-derivee",
        titre: "Passer du nombre dérivé à la fonction dérivée",
        blocs: [
          {
            type: "definition",
            titre: "Fonction dérivée",
            texte: "Si f est dérivable en chaque point d'un intervalle I, on peut associer à chaque x de I son nombre dérivé f'(x).\n\nOn obtient ainsi une nouvelle fonction, appelée fonction dérivée de f et notée f'."
          },
          {
            type: "exemple",
            titre: "La dérivée de la fonction carré",
            texte: "Soit f(x) = x². Pour un réel x et h ≠ 0 :\n\n[f(x + h) - f(x)]/h\n= [(x + h)² - x²]/h\n= (2xh + h²)/h\n= 2x + h.\n\nLorsque h tend vers 0, cette expression tend vers 2x.\n\nDonc f'(x) = 2x pour tout réel x.\n\nEn particulier, f'(1) = 2 et f'(-1) = -2."
          },
          {
            type: "tableau",
            titre: "Premières dérivées à connaître",
            entetes: ["Fonction f", "Dérivée f'", "Ensemble"],
            lignes: [
              ["f(x) = c, où c est constant", "f'(x) = 0", "ℝ"],
              ["f(x) = ax + b", "f'(x) = a", "ℝ"],
              ["f(x) = x²", "f'(x) = 2x", "ℝ"]
            ]
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les deux fonctions",
            texte: "Pour f(x) = x², la valeur f(2) est 4, tandis que le nombre dérivé f'(2) est également 4. Cette égalité est particulière à ce point.\n\nEn 1, par exemple, f(1) = 1 mais f'(1) = 2."
          }
        ]
      },

      {
        id: "m1-tangente",
        titre: "Déterminer une tangente",
        blocs: [
          {
            type: "definition",
            titre: "Interprétation géométrique",
            texte: "Si f est dérivable en a, sa courbe admet au point A(a ; f(a)) une tangente de coefficient directeur f'(a).\n\nLe nombre dérivé indique donc la pente de cette tangente."
          },
          {
            type: "regle",
            titre: "Équation de la tangente",
            texte: "La tangente à la courbe de f au point d'abscisse a a pour équation :\n\ny = f'(a)(x - a) + f(a).\n\nElle passe bien par A(a ; f(a)), car lorsque x = a, le terme f'(a)(x - a) vaut 0."
          },
          {
            type: "methode",
            titre: "Trouver une équation",
            texte: "1. Calcule f(a), l'ordonnée du point de contact.\n2. Calcule f'(a), le coefficient directeur.\n3. Remplace dans y = f'(a)(x - a) + f(a).\n4. Simplifie si nécessaire.\n5. Vérifie que la droite passe par A(a ; f(a))."
          },
          {
            type: "exemple",
            titre: "Tangente à la parabole",
            texte: "Soit f(x) = x². Cherchons la tangente en a = 1.\n\nf(1) = 1 et f'(x) = 2x, donc f'(1) = 2.\n\nLa tangente a pour équation :\n\ny = 2(x - 1) + 1 = 2x - 1.\n\nElle passe par A(1 ; 1) : pour x = 1, on obtient y = 1."
          },
          {
            type: "schema",
            titre: "Parabole et tangente en A(1 ; 1)",
            svg: "<svg viewBox='0 0 300 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Parabole y égale x carré et droite tangente y égale deux x moins un au point A de coordonnées un un'><rect width='300' height='260' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 40 20 V 240 M 80 20 V 240 M 120 20 V 240 M 160 20 V 240 M 200 20 V 240'/><path d='M 20 40 H 260 M 20 80 H 260 M 20 120 H 260 M 20 160 H 260 M 20 200 H 260 M 20 240 H 260'/></g><g stroke='#475569' stroke-width='2'><line x1='20' y1='200' x2='270' y2='200'/><line x1='80' y1='245' x2='80' y2='15'/></g><path d='M 40 160 Q 100 280 160 40' fill='none' stroke='#2563eb' stroke-width='3'/><line x1='80' y1='240' x2='200' y2='0' stroke='#dc2626' stroke-width='2.5'/><circle cx='120' cy='160' r='5' fill='#7c3aed'/><text x='127' y='158' font-size='13' fill='#6d28d9'>A(1 ; 1)</text><text x='75' y='217' font-size='13'>0</text><text x='116' y='217' font-size='13'>1</text><text x='62' y='164' font-size='13'>1</text><text x='170' y='55' font-size='13' fill='#1d4ed8'>y = x²</text><text x='185' y='115' font-size='13' fill='#b91c1c'>y = 2x - 1</text><text x='260' y='194' font-size='13'>x</text><text x='87' y='25' font-size='13'>y</text></svg>",
            legende: "La tangente rouge passe par A(1 ; 1) et a pour pente 2. La courbe bleue représente f(x) = x²."
          },
          {
            type: "remarque",
            titre: "Une tangente peut couper la courbe",
            texte: "Une tangente n'est pas nécessairement une droite qui reste d'un seul côté de la courbe. Selon la fonction, elle peut traverser la courbe au point de contact."
          }
        ]
      },

      {
        id: "m1-approximation-locale",
        titre: "Utiliser une approximation locale",
        blocs: [
          {
            type: "regle",
            titre: "Près du point de contact",
            texte: "Si f est dérivable en a, pour h proche de 0, on peut approcher f(a + h) par :\n\nf(a + h) ≈ f(a) + f'(a)h.\n\nLe membre de droite est la valeur de la tangente à l'abscisse a + h. C'est une approximation locale : elle est destinée aux valeurs proches de a."
          },
          {
            type: "exemple",
            titre: "Approcher un carré",
            texte: "Soit f(x) = x². Près de a = 1, on a f(1) = 1 et f'(1) = 2.\n\nPour h = 0,02 :\n\nf(1,02) ≈ 1 + 2 × 0,02 = 1,04.\n\nLa valeur exacte est 1,02² = 1,0404. L'approximation est proche, mais elle n'est pas exacte."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre ≈ et =",
            texte: "Une approximation par la tangente n'est pas, en général, une égalité. Sa précision dépend notamment de la fonction et de la distance au point a."
          }
        ]
      },

      {
        id: "m1-non-derivable",
        titre: "Reconnaître un point non dérivable",
        blocs: [
          {
            type: "exemple",
            titre: "La valeur absolue en 0",
            texte: "Soit f(x) = |x|. La fonction est continue en 0 et f(0) = 0.\n\nSon taux de variation en 0 est, pour h ≠ 0 :\n\n[f(h) - f(0)]/h = |h|/h.\n\n• Si h > 0, ce quotient vaut 1.\n• Si h < 0, il vaut -1.\n\nLes limites à droite et à gauche sont différentes. La limite du quotient n'existe donc pas : f n'est pas dérivable en 0."
          },
          {
            type: "remarque",
            titre: "Continuité ne garantit pas dérivabilité",
            texte: "La courbe de la valeur absolue présente un point anguleux en 0. Cet exemple montre qu'une fonction peut être continue en un point sans y être dérivable."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une fonction f vérifie f(2) = 5 et f(4) = 11.\n\nCalcule son taux de variation entre 2 et 4.",
        correction: "Le taux de variation est :\n\n[f(4) - f(2)]/(4 - 2) = (11 - 5)/2 = 3.\n\nLa fonction varie en moyenne de 3 unités lorsque x augmente d'une unité entre 2 et 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = x².\n\n1. Calcule f(3).\n2. Sachant que f'(x) = 2x, calcule f'(3).",
        correction: "1. f(3) = 3² = 9.\n\n2. f'(3) = 2 × 3 = 6.\n\nLa valeur de la fonction en 3 est 9 ; son nombre dérivé en 3 est 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = 4x + 1.\n\n1. Calcule son taux de variation entre a et a + h, avec h ≠ 0.\n2. Déduis-en f'(a).",
        correction: "1. On a f(a + h) = 4a + 4h + 1 et f(a) = 4a + 1.\n\nDonc :\n\n[f(a + h) - f(a)]/h = 4h/h = 4.\n\n2. La limite lorsque h tend vers 0 est 4. Donc f'(a) = 4 pour tout réel a."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = x². Détermine l'équation de sa tangente au point d'abscisse 2.",
        correction: "f(2) = 4. Comme f'(x) = 2x, on a f'(2) = 4.\n\nLa tangente a pour équation :\n\ny = 4(x - 2) + 4 = 4x - 4.\n\nVérification : elle passe par (2 ; 4), car 4 × 2 - 4 = 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x².\n\n1. Calcule son taux de variation entre -1 et -1 + h, avec h ≠ 0.\n2. Déduis-en f'(-1).\n3. Détermine l'équation de la tangente en ce point.",
        correction: "1. f(-1 + h) = (-1 + h)² = 1 - 2h + h² et f(-1) = 1.\n\nLe taux de variation est :\n\n[-2h + h²]/h = -2 + h.\n\n2. Sa limite lorsque h tend vers 0 est -2. Donc f'(-1) = -2.\n\n3. Le point de contact est (-1 ; 1). La tangente est :\n\ny = -2(x + 1) + 1 = -2x - 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fonction f est dérivable en 3. On sait que f(3) = 7 et f'(3) = -2.\n\n1. Donne l'équation de sa tangente au point d'abscisse 3.\n2. Utilise cette tangente pour approcher f(3,1).",
        correction: "1. La tangente est :\n\ny = -2(x - 3) + 7 = -2x + 13.\n\n2. Ici h = 0,1. L'approximation locale donne :\n\nf(3,1) ≈ f(3) + f'(3) × 0,1\n≈ 7 - 0,2 = 6,8.\n\nIl s'agit d'une approximation, pas nécessairement de la valeur exacte."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = x². On cherche les tangentes à sa courbe qui passent par le point B(0 ; -4).\n\n1. Exprime, en fonction de a, l'équation de la tangente au point d'abscisse a.\n2. Détermine les valeurs de a pour lesquelles cette tangente passe par B.\n3. Donne les équations des tangentes obtenues.",
        correction: "1. f(a) = a² et f'(a) = 2a. La tangente est :\n\ny = 2a(x - a) + a² = 2ax - a².\n\n2. Pour qu'elle passe par B(0 ; -4), il faut et il suffit que :\n\n-4 = 2a × 0 - a²,\nsoit a² = 4.\n\nDonc a = -2 ou a = 2.\n\n3. Pour a = -2 : y = -4x - 4.\n\nPour a = 2 : y = 4x - 4.\n\nCes deux droites passent bien par B."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = |x - 2|, définie sur ℝ.\n\n1. Calcule f(2).\n2. Pour h ≠ 0, écris le taux de variation de f entre 2 et 2 + h.\n3. Étudie ce quotient lorsque h tend vers 0 par la droite puis par la gauche.\n4. f est-elle dérivable en 2 ?",
        correction: "1. f(2) = |2 - 2| = 0.\n\n2. f(2 + h) = |h|, donc le taux de variation est |h|/h.\n\n3. Si h > 0, |h|/h = 1 : la limite à droite vaut 1.\n\nSi h < 0, |h|/h = -1 : la limite à gauche vaut -1.\n\n4. Les deux limites sont différentes. Le taux de variation n'a donc pas de limite en 0 et f n'est pas dérivable en 2."
      }
    ]
  }
]);
