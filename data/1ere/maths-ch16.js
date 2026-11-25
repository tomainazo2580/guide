// ===== GUIDE - Mathématiques Première =====
// Chapitre 16 : suites, calcul de termes et représentation.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-suites-definition",
    titre: "Chapitre 16 : Suites : définition, calcul de termes et représentation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-suite-notion",
        titre: "Comprendre ce qu'est une suite",
        blocs: [
          {
            type: "introduction",
            titre: "Une liste organisée",
            texte: "On dépose 2 graines dans un premier pot, 4 dans un deuxième, 6 dans un troisième, puis on continue en ajoutant 2 graines à chaque pot.\n\nLes nombres 2, 4, 6, 8… forment une suite. Leur ordre est important : chaque nombre occupe un rang."
          },
          {
            type: "definition",
            titre: "Suite numérique",
            texte: "Une suite numérique associe un nombre réel à chaque entier naturel d'un ensemble de rangs.\n\nOn la note souvent (uₙ). Le nombre uₙ se lit « u indice n » : c'est le terme de rang n.\n\nSelon la situation, la suite peut commencer au rang 0, au rang 1 ou à un autre rang précisé."
          },
          {
            type: "exemple",
            titre: "Rang et valeur",
            texte: "Si uₙ = 2n pour n ≥ 1 :\n\nu₁ = 2 ; u₂ = 4 ; u₃ = 6 ; u₄ = 8.\n\nLe rang est l'indice n. La valeur est le nombre uₙ associé à ce rang.\n\nPar exemple, u₃ = 6 : le rang est 3 et le terme vaut 6."
          },
          {
            type: "remarque",
            titre: "Attention au premier rang",
            texte: "Pour la suite uₙ = 2n, si l'on commence à n = 0, le premier terme est u₀ = 0. Si l'on commence à n = 1, le premier terme est u₁ = 2.\n\nIl faut toujours regarder l'indice initial."
          }
        ]
      },

      {
        id: "m1-suite-explicite",
        titre: "Calculer avec une formule explicite",
        blocs: [
          {
            type: "definition",
            titre: "Formule explicite",
            texte: "Une suite est définie explicitement lorsque l'on peut calculer uₙ directement à partir de n.\n\nPar exemple, uₙ = 3n + 1 pour n ≥ 0 est une formule explicite."
          },
          {
            type: "methode",
            titre: "Calculer un terme",
            texte: "1. Vérifie que le rang demandé appartient aux rangs de la suite.\n2. Remplace chaque n par ce rang.\n3. Effectue les calculs en respectant les priorités.\n\nOn peut calculer un terme éloigné sans calculer tous les termes précédents."
          },
          {
            type: "exemple",
            titre: "Une suite explicite",
            texte: "Soit uₙ = n² - 2n pour n ≥ 0.\n\nu₀ = 0² - 2 × 0 = 0.\nu₁ = 1² - 2 × 1 = -1.\nu₂ = 2² - 2 × 2 = 0.\nu₅ = 5² - 2 × 5 = 15.\n\nPour calculer u₅, il n'était pas nécessaire de calculer u₃ et u₄."
          },
          {
            type: "remarque",
            titre: "Un rang doit être entier",
            texte: "Dans une suite numérique indexée par les entiers naturels, n est un entier. L'écriture u₂,₅ n'a donc pas de sens pour cette suite, même si la formule qui définit uₙ pourrait être calculée en 2,5."
          }
        ]
      },

      {
        id: "m1-suite-recurrence",
        titre: "Calculer avec une relation de récurrence",
        blocs: [
          {
            type: "definition",
            titre: "Définition par récurrence",
            texte: "Une suite peut être définie par son premier terme et une règle qui permet de calculer un terme à partir du précédent.\n\nPar exemple :\n\nu₀ = 1 et uₙ₊₁ = 2uₙ + 1 pour n ≥ 0.\n\nPour obtenir u₁, on utilise u₀ ; pour obtenir u₂, on utilise u₁, et ainsi de suite."
          },
          {
            type: "exemple",
            titre: "Calculer les premiers termes",
            texte: "Avec u₀ = 1 et uₙ₊₁ = 2uₙ + 1 :\n\nu₁ = 2u₀ + 1 = 2 × 1 + 1 = 3.\nu₂ = 2u₁ + 1 = 2 × 3 + 1 = 7.\nu₃ = 2u₂ + 1 = 2 × 7 + 1 = 15.\n\nLa suite commence donc par 1, 3, 7, 15…"
          },
          {
            type: "methode",
            titre: "Bien utiliser l'indice",
            texte: "Pour calculer uₙ₊₁, remplace uₙ par la valeur du terme précédent.\n\nPar exemple, pour n = 2, la relation uₙ₊₁ = 2uₙ + 1 devient u₃ = 2u₂ + 1.\n\nUne valeur initiale est nécessaire pour commencer les calculs."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les formules",
            texte: "La formule uₙ = 2n + 1 permet de calculer directement uₙ à partir de n.\n\nLa relation uₙ₊₁ = 2uₙ + 1 utilise le terme précédent. Ce ne sont pas les mêmes règles."
          }
        ]
      },

      {
        id: "m1-suite-representation",
        titre: "Représenter une suite",
        blocs: [
          {
            type: "definition",
            titre: "Points d'une suite",
            texte: "Dans un repère, on représente une suite par les points de coordonnées (n ; uₙ).\n\nLes rangs n étant entiers, on place des points séparés. On ne les relie pas automatiquement par une courbe continue."
          },
          {
            type: "exemple",
            titre: "Placer les premiers termes",
            texte: "Pour uₙ = n + 1, définie pour n ≥ 0 :\n\nu₀ = 1, u₁ = 2, u₂ = 3 et u₃ = 4.\n\nOn place les points (0 ; 1), (1 ; 2), (2 ; 3) et (3 ; 4)."
          },
          {
            type: "schema",
            titre: "Les premiers points de uₙ = n + 1",
            svg: "<svg viewBox='0 0 340 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Quatre points isolés représentant la suite u indice n égale n plus un : zéro un, un deux, deux trois et trois quatre'><rect width='340' height='260' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 80 25 V 220 M 120 25 V 220 M 160 25 V 220 M 200 25 V 220 M 240 25 V 220'/><path d='M 40 50 H 290 M 40 90 H 290 M 40 130 H 290 M 40 170 H 290 M 40 210 H 290'/></g><g stroke='#475569' stroke-width='2'><line x1='40' y1='210' x2='300' y2='210'/><line x1='80' y1='230' x2='80' y2='15'/></g><g fill='#2563eb'><circle cx='80' cy='170' r='5'/><circle cx='120' cy='130' r='5'/><circle cx='160' cy='90' r='5'/><circle cx='200' cy='50' r='5'/></g><g font-size='13' fill='#334155'><text x='75' y='228'>0</text><text x='116' y='228'>1</text><text x='156' y='228'>2</text><text x='196' y='228'>3</text><text x='63' y='175'>1</text><text x='63' y='135'>2</text><text x='63' y='95'>3</text><text x='63' y='55'>4</text><text x='289' y='203'>n</text><text x='87' y='25'>uₙ</text></g></svg>",
            legende: "Les quatre points sont isolés : seuls les rangs entiers sont représentés. La suite continue pour les rangs suivants."
          },
          {
            type: "remarque",
            titre: "Représentation et formule",
            texte: "Même si les points de l'exemple sont alignés, la suite ne contient pas de terme pour chaque abscisse réelle. Une éventuelle droite passant par les points peut aider à visualiser, mais elle ne remplace pas les points de la suite."
          }
        ]
      },

      {
        id: "m1-suite-variations",
        titre: "Étudier les variations d'une suite",
        blocs: [
          {
            type: "definition",
            titre: "Croissance et décroissance",
            texte: "Une suite (uₙ) est croissante si, pour tout rang concerné :\n\nuₙ₊₁ ≥ uₙ.\n\nElle est décroissante si uₙ₊₁ ≤ uₙ pour tout rang concerné.\n\nElle est strictement croissante ou strictement décroissante si les inégalités sont strictes."
          },
          {
            type: "methode",
            titre: "Étudier la différence",
            texte: "Pour comparer deux termes consécutifs, calcule uₙ₊₁ - uₙ.\n\n• Si cette différence est toujours positive ou nulle, la suite est croissante.\n• Si elle est toujours négative ou nulle, la suite est décroissante.\n\nIl faut justifier le signe pour tous les rangs considérés, pas seulement pour quelques premiers termes."
          },
          {
            type: "exemple",
            titre: "Une suite croissante",
            texte: "Soit uₙ = n² pour n ≥ 0.\n\nuₙ₊₁ - uₙ = (n + 1)² - n² = 2n + 1.\n\nPour tout n ≥ 0, 2n + 1 > 0. Donc la suite est strictement croissante."
          },
          {
            type: "remarque",
            titre: "Quelques termes ne suffisent pas",
            texte: "Observer les premiers termes peut aider à formuler une conjecture, mais ne prouve pas le comportement de tous les termes. Il faut une justification valable pour chaque rang."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit uₙ = 2n + 3 pour n ≥ 0. Calcule u₀, u₁, u₂ et u₅.",
        correction: "u₀ = 2 × 0 + 3 = 3.\n\nu₁ = 2 × 1 + 3 = 5.\n\nu₂ = 2 × 2 + 3 = 7.\n\nu₅ = 2 × 5 + 3 = 13."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite est définie par u₀ = 4 et uₙ₊₁ = uₙ + 3 pour n ≥ 0. Calcule u₁, u₂ et u₃.",
        correction: "u₁ = u₀ + 3 = 7.\n\nu₂ = u₁ + 3 = 10.\n\nu₃ = u₂ + 3 = 13."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit uₙ = n² + 1 pour n ≥ 0.\n\n1. Calcule les termes de u₀ à u₃.\n2. Donne les coordonnées des points correspondants dans un repère.",
        correction: "1. u₀ = 1, u₁ = 2, u₂ = 5 et u₃ = 10.\n\n2. Les points sont (0 ; 1), (1 ; 2), (2 ; 5) et (3 ; 10). Ce sont des points isolés."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit u₁ = 2 et uₙ₊₁ = 3uₙ - 1 pour n ≥ 1.\n\nCalcule u₂, u₃ et u₄.",
        correction: "u₂ = 3u₁ - 1 = 3 × 2 - 1 = 5.\n\nu₃ = 3u₂ - 1 = 3 × 5 - 1 = 14.\n\nu₄ = 3u₃ - 1 = 3 × 14 - 1 = 41."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit uₙ = 3n - 5 pour n ≥ 0.\n\n1. Calcule uₙ₊₁ - uₙ.\n2. Étudie le sens de variation de la suite.\n3. À partir de quel rang a-t-on uₙ ≥ 10 ?",
        correction: "1. uₙ₊₁ - uₙ = [3(n + 1) - 5] - (3n - 5) = 3.\n\n2. La différence est strictement positive pour tout n ≥ 0 : la suite est strictement croissante.\n\n3. 3n - 5 ≥ 10 équivaut à 3n ≥ 15, donc n ≥ 5. Ainsi uₙ ≥ 10 à partir du rang 5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit u₀ = 10 et uₙ₊₁ = uₙ - 2 pour n ≥ 0.\n\n1. Calcule u₁, u₂ et u₃.\n2. Calcule uₙ₊₁ - uₙ pour tout n ≥ 0.\n3. Déduis le sens de variation de la suite.",
        correction: "1. u₁ = 8, u₂ = 6 et u₃ = 4.\n\n2. La relation donne directement uₙ₊₁ - uₙ = -2.\n\n3. Cette différence est strictement négative pour tout rang : la suite est strictement décroissante."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit uₙ = n² - 4n + 3 pour n ≥ 0.\n\n1. Calcule u₀, u₁, u₂ et u₃.\n2. Calcule uₙ₊₁ - uₙ.\n3. Détermine le sens de variation de la suite et son minimum.",
        correction: "1. u₀ = 3 ; u₁ = 0 ; u₂ = -1 ; u₃ = 0.\n\n2. uₙ₊₁ - uₙ = [(n + 1)² - 4(n + 1) + 3] - [n² - 4n + 3] = 2n - 3.\n\n3. Pour les rangs entiers n = 0 et n = 1, 2n - 3 < 0 : u₀ > u₁ > u₂.\n\nPour tout entier n ≥ 2, 2n - 3 > 0 : la suite croît à partir de u₂.\n\nSon minimum est donc u₂ = -1."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une quantité initiale est de 1 000 unités. Chaque mois, elle augmente de 10 % par rapport à sa valeur du mois précédent. On note u₀ la quantité initiale et uₙ la quantité après n mois.\n\n1. Donne u₀ et une relation entre uₙ₊₁ et uₙ.\n2. Calcule u₁, u₂ et u₃.\n3. Explique pourquoi la suite est strictement croissante.\n4. Écris une formule explicite pour uₙ.",
        correction: "1. u₀ = 1 000. Augmenter de 10 % revient à multiplier par 1,1 : uₙ₊₁ = 1,1uₙ.\n\n2. u₁ = 1 100 ; u₂ = 1 210 ; u₃ = 1 331.\n\n3. Tous les termes sont strictement positifs : le premier l'est, et multiplier un terme positif par 1,1 donne encore un terme positif. Ainsi uₙ₊₁ - uₙ = 0,1uₙ > 0 pour tout n. La suite est strictement croissante.\n\n4. Chaque mois apporte un facteur 1,1. Après n mois : uₙ = 1 000 × 1,1ⁿ."
      }
    ]
  }
]);
