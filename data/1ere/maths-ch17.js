// ===== GUIDE - Mathématiques Première =====
// Chapitre 17 : suites arithmétiques et géométriques.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-suites-arithmetiques-geometriques",
    titre: "Chapitre 17 : Suites arithmétiques et géométriques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-suite-arithmetique",
        titre: "Reconnaître une suite arithmétique",
        blocs: [
          {
            type: "introduction",
            titre: "Ajouter toujours la même quantité",
            texte: "Une personne épargne 5 000 Ar le premier mois, puis 2 000 Ar de plus que le mois précédent. Les montants mensuels sont :\n\n5 000 ; 7 000 ; 9 000 ; 11 000 ; …\n\nOn passe d'un terme au suivant en ajoutant toujours 2 000. Ces montants forment une suite arithmétique."
          },
          {
            type: "definition",
            titre: "Suite arithmétique et raison",
            texte: "Une suite (uₙ) est arithmétique s'il existe un réel r tel que, pour tout rang concerné :\n\nuₙ₊₁ = uₙ + r.\n\nLe nombre constant r est la raison. Ainsi, uₙ₊₁ - uₙ = r."
          },
          {
            type: "exemple",
            titre: "Calculer les termes",
            texte: "Soit u₀ = 7 et uₙ₊₁ = uₙ - 3.\n\nLa suite est arithmétique de raison r = -3 :\n\nu₁ = 4 ; u₂ = 1 ; u₃ = -2.\n\nUne raison peut être négative ou nulle."
          },
          {
            type: "regle",
            titre: "Formule explicite",
            texte: "Si une suite arithmétique de raison r commence au rang 0, alors :\n\nuₙ = u₀ + nr.\n\nPlus généralement, pour deux rangs p et n de la suite :\n\nuₙ = uₚ + (n - p)r.\n\nLa formule compte les pas entre les deux rangs."
          },
          {
            type: "exemple",
            titre: "Attention au rang initial",
            texte: "Soit u₁ = 5 et r = 2. Pour atteindre le rang 6 depuis le rang 1, il faut 6 - 1 = 5 pas.\n\nu₆ = u₁ + (6 - 1)r = 5 + 5 × 2 = 15.\n\nCe n'est pas 5 + 6 × 2."
          },
          {
            type: "regle",
            titre: "Variations",
            texte: "Pour une suite arithmétique de raison r :\n\n• si r > 0, elle est strictement croissante ;\n• si r < 0, elle est strictement décroissante ;\n• si r = 0, elle est constante.\n\nCela découle de uₙ₊₁ - uₙ = r."
          },
          {
            type: "schema",
            titre: "Points d'une suite arithmétique",
            svg: "<svg viewBox='0 0 320 240' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Points isolés de la suite u indice n égale un plus n : zéro un, un deux, deux trois et trois quatre'><rect width='320' height='240' fill='white'/><g stroke='#e2e8f0'><path d='M60 30 V200 M100 30 V200 M140 30 V200 M180 30 V200 M220 30 V200'/><path d='M30 40 H270 M30 80 H270 M30 120 H270 M30 160 H270 M30 200 H270'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='200' x2='280' y2='200'/><line x1='60' y1='215' x2='60' y2='20'/></g><g fill='#2563eb'><circle cx='60' cy='160' r='5'/><circle cx='100' cy='120' r='5'/><circle cx='140' cy='80' r='5'/><circle cx='180' cy='40' r='5'/></g><g font-size='13' fill='#334155'><text x='55' y='218'>0</text><text x='96' y='218'>1</text><text x='136' y='218'>2</text><text x='176' y='218'>3</text><text x='43' y='165'>1</text><text x='43' y='125'>2</text><text x='43' y='85'>3</text><text x='43' y='45'>4</text><text x='270' y='194'>n</text><text x='67' y='25'>uₙ</text></g></svg>",
            legende: "Pour uₙ = 1 + n, les points (n ; uₙ) sont alignés, mais restent isolés : les rangs sont entiers."
          }
        ]
      },

      {
        id: "m1-somme-arithmetique",
        titre: "Additionner des termes arithmétiques",
        blocs: [
          {
            type: "regle",
            titre: "Somme de termes consécutifs",
            texte: "La somme de termes consécutifs d'une suite arithmétique est :\n\nS = nombre de termes × (premier terme + dernier terme)/2.\n\nDe uₚ à uₙ, avec p ≤ n, il y a n - p + 1 termes. Donc :\n\nuₚ + uₚ₊₁ + … + uₙ = (n - p + 1)(uₚ + uₙ)/2."
          },
          {
            type: "exemple",
            titre: "Comprendre par regroupement",
            texte: "Calculons 2 + 5 + 8 + 11 + 14.\n\nIl y a 5 termes. En associant le premier et le dernier, puis le deuxième et l'avant-dernier, on obtient chaque fois 16 :\n\n2 + 14 = 16 ; 5 + 11 = 16.\n\nLa formule donne :\n\nS = 5 × (2 + 14)/2 = 40."
          },
          {
            type: "remarque",
            titre: "Compter les termes",
            texte: "De u₀ à u₁₀, il y a 11 termes, et non 10. De u₁ à u₁₀, il y en a 10."
          }
        ]
      },

      {
        id: "m1-suite-geometrique",
        titre: "Reconnaître une suite géométrique",
        blocs: [
          {
            type: "introduction",
            titre: "Multiplier toujours par le même nombre",
            texte: "Une quantité initiale vaut 100. Elle augmente de 10 % à chaque étape :\n\n100 ; 110 ; 121 ; 133,1 ; …\n\nÀ chaque étape, on multiplie par 1,1. Ces nombres forment une suite géométrique."
          },
          {
            type: "definition",
            titre: "Suite géométrique et raison",
            texte: "Une suite (vₙ) est géométrique s'il existe un réel q tel que, pour tout rang concerné :\n\nvₙ₊₁ = qvₙ.\n\nLe nombre constant q est la raison."
          },
          {
            type: "regle",
            titre: "Formule explicite",
            texte: "Si une suite géométrique de raison q commence au rang 0, alors :\n\nvₙ = v₀qⁿ.\n\nPlus généralement, pour n ≥ p :\n\nvₙ = vₚqⁿ⁻ᵖ.\n\nL'exposant est le nombre de multiplications entre les deux rangs. Pour n = p, on retrouve vₚ."
          },
          {
            type: "exemple",
            titre: "Calculer un terme",
            texte: "Soit v₁ = 3 et q = 2.\n\nv₂ = 6 ; v₃ = 12 ; v₄ = 24.\n\nDirectement : v₄ = v₁ × 2⁴⁻¹ = 3 × 2³ = 24."
          },
          {
            type: "remarque",
            titre: "Le quotient n'est pas toujours possible",
            texte: "Si vₙ ≠ 0, on peut calculer q = vₙ₊₁/vₙ. Mais on ne divise jamais par un terme nul.\n\nLa définition vₙ₊₁ = qvₙ reste valable même lorsqu'un terme est nul."
          }
        ]
      },

      {
        id: "m1-geometrique-variations",
        titre: "Étudier les variations d'une suite géométrique",
        blocs: [
          {
            type: "regle",
            titre: "Cas d'un premier terme strictement positif",
            texte: "Supposons v₀ > 0.\n\n• Si q > 1, tous les termes sont positifs et la suite est strictement croissante.\n• Si 0 < q < 1, tous les termes sont positifs et la suite est strictement décroissante.\n• Si q = 1, la suite est constante.\n\nEn effet, vₙ₊₁ - vₙ = (q - 1)vₙ."
          },
          {
            type: "exemple",
            titre: "Une diminution de 20 %",
            texte: "Une quantité vaut 200 au départ et diminue de 20 % à chaque étape. Elle est multipliée par 1 - 0,20 = 0,8.\n\nv₀ = 200 et vₙ = 200 × 0,8ⁿ.\n\nComme v₀ > 0 et 0 < 0,8 < 1, la suite est strictement décroissante."
          },
          {
            type: "remarque",
            titre: "Raison négative ou nulle",
            texte: "Si q < 0 et v₀ ≠ 0, les signes alternent : la suite n'est pas monotone en général.\n\nSi q = 0, tous les termes à partir de v₁ sont nuls. Si v₀ est négatif ou nul, il faut étudier le cas considéré : on ne peut pas appliquer sans précaution les règles données pour v₀ > 0."
          }
        ]
      },

      {
        id: "m1-somme-geometrique",
        titre: "Additionner des termes géométriques",
        blocs: [
          {
            type: "regle",
            titre: "Somme de puissances",
            texte: "Pour q ≠ 1 et un entier N ≥ 0 :\n\n1 + q + q² + … + qᴺ = (1 - qᴺ⁺¹)/(1 - q).\n\nIl y a N + 1 termes dans cette somme.\n\nSi q = 1, tous les termes valent 1 et la somme vaut N + 1."
          },
          {
            type: "methode",
            titre: "Somme d'une suite géométrique",
            texte: "Si v₀ est le premier terme et q la raison, pour q ≠ 1 :\n\nv₀ + v₁ + … + vₙ = v₀(1 - qⁿ⁺¹)/(1 - q).\n\nPour q = 1, les n + 1 termes valent v₀ : la somme est (n + 1)v₀."
          },
          {
            type: "exemple",
            titre: "Calculer une somme",
            texte: "Soit v₀ = 2 et q = 3. Alors v₁ = 6, v₂ = 18 et v₃ = 54.\n\nLa somme des quatre premiers termes est :\n\nS = 2 + 6 + 18 + 54 = 80.\n\nAvec la formule :\n\nS = 2(1 - 3⁴)/(1 - 3) = 2 × (-80)/(-2) = 80."
          },
          {
            type: "methode",
            titre: "D'où vient la formule ?",
            texte: "Posons S = 1 + q + … + qᴺ. Alors :\n\nqS = q + q² + … + qᴺ⁺¹.\n\nEn soustrayant, les termes intermédiaires s'annulent :\n\nS - qS = 1 - qᴺ⁺¹.\n\nDonc (1 - q)S = 1 - qᴺ⁺¹. Si q ≠ 1, on divise par 1 - q."
          }
        ]
      },

      {
        id: "m1-comparer-suites",
        titre: "Choisir la bonne méthode",
        blocs: [
          {
            type: "tableau",
            titre: "Arithmétique ou géométrique ?",
            entetes: ["Question", "Suite arithmétique", "Suite géométrique"],
            lignes: [
              ["Passage au terme suivant", "On ajoute r", "On multiplie par q"],
              ["Relation", "uₙ₊₁ = uₙ + r", "vₙ₊₁ = qvₙ"],
              ["Depuis le rang 0", "uₙ = u₀ + nr", "vₙ = v₀qⁿ"],
              ["Exemple", "3 ; 5 ; 7 ; 9", "3 ; 6 ; 12 ; 24"]
            ]
          },
          {
            type: "methode",
            titre: "Dans un problème",
            texte: "1. Définis la quantité et son rang initial.\n2. Traduis l'évolution : ajout fixe ou multiplication fixe.\n3. Écris la relation de récurrence et identifie la raison.\n4. Utilise la formule explicite ou une somme selon la question.\n5. Vérifie les unités et interprète le résultat."
          },
          {
            type: "remarque",
            titre: "Pourcentage ou ajout fixe ?",
            texte: "Ajouter 10 unités à chaque étape donne une suite arithmétique.\n\nAugmenter de 10 % de la valeur précédente donne une suite géométrique de raison 1,10 : l'augmentation en unités n'est alors pas forcément constante."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite arithmétique vérifie u₀ = 4 et a pour raison r = 3. Calcule u₁, u₂ et u₃.",
        correction: "On ajoute 3 à chaque étape :\n\nu₁ = 7 ; u₂ = 10 ; u₃ = 13."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite géométrique vérifie v₀ = 5 et a pour raison q = 2. Calcule v₁, v₂ et v₃.",
        correction: "On multiplie par 2 à chaque étape :\n\nv₁ = 10 ; v₂ = 20 ; v₃ = 40."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit (uₙ) une suite arithmétique telle que u₁ = 8 et r = -2.\n\n1. Calcule u₄.\n2. Exprime uₙ en fonction de n pour n ≥ 1.\n3. Donne le sens de variation.",
        correction: "1. u₄ = u₁ + (4 - 1)r = 8 + 3 × (-2) = 2.\n\n2. uₙ = 8 - 2(n - 1).\n\n3. La raison est négative : la suite est strictement décroissante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit (vₙ) une suite géométrique telle que v₀ = 80 et q = 0,5.\n\n1. Exprime vₙ en fonction de n.\n2. Calcule v₃.\n3. Donne le sens de variation.",
        correction: "1. vₙ = 80 × 0,5ⁿ.\n\n2. v₃ = 80 × 0,5³ = 10.\n\n3. Le premier terme est positif et 0 < q < 1 : la suite est strictement décroissante."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une suite arithmétique (uₙ), définie pour n ≥ 0, vérifie u₂ = 11 et u₇ = 26.\n\n1. Détermine sa raison.\n2. Calcule u₀ et donne uₙ.\n3. Calcule u₀ + u₁ + … + u₇.",
        correction: "1. Entre les rangs 2 et 7, il y a 5 pas :\n\nu₇ - u₂ = 5r, donc r = (26 - 11)/5 = 3.\n\n2. u₂ = u₀ + 2r, donc u₀ = 11 - 6 = 5. Ainsi uₙ = 5 + 3n.\n\n3. De u₀ à u₇, il y a 8 termes. Leur somme vaut :\n\n8 × (5 + 26)/2 = 124."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit v₀ = 3 et vₙ₊₁ = -2vₙ pour n ≥ 0.\n\n1. Calcule v₁, v₂ et v₃.\n2. Exprime vₙ en fonction de n.\n3. La suite est-elle croissante ou décroissante ? Justifie.",
        correction: "1. v₁ = -6 ; v₂ = 12 ; v₃ = -24.\n\n2. La suite est géométrique de raison -2 : vₙ = 3 × (-2)ⁿ.\n\n3. Elle n'est ni croissante ni décroissante : v₁ < v₀ mais v₂ > v₁. Les signes alternent."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une personne verse 5 000 Ar dans une caisse le premier mois. Chaque mois suivant, elle verse 2 000 Ar de plus que le mois précédent. On note u₁ le premier versement et uₙ le versement du mois n.\n\n1. Détermine la nature et la raison de la suite.\n2. Calcule le versement du 12e mois.\n3. Calcule le montant total versé pendant les 12 premiers mois.",
        correction: "1. On ajoute une quantité fixe : la suite est arithmétique de raison 2 000, avec u₁ = 5 000.\n\n2. u₁₂ = 5 000 + (12 - 1) × 2 000 = 27 000 Ar.\n\n3. Il y a 12 versements. Leur somme vaut :\n\n12 × (5 000 + 27 000)/2 = 192 000 Ar.\n\nLe total versé est donc 192 000 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une machine perd 10 % de sa valeur chaque année par rapport à sa valeur de l'année précédente. Sa valeur initiale est 2 000 000 Ar. On note vₙ sa valeur après n années.\n\n1. Donne v₀, la raison et une formule pour vₙ.\n2. Calcule sa valeur après 3 ans.\n3. Calcule v₀ + v₁ + v₂ + v₃ et précise ce que représente cette somme.",
        correction: "1. Une baisse de 10 % revient à multiplier par 0,9. Donc v₀ = 2 000 000, q = 0,9 et vₙ = 2 000 000 × 0,9ⁿ.\n\n2. v₃ = 2 000 000 × 0,9³ = 1 458 000 Ar.\n\n3. La somme de ces quatre valeurs est :\n\nS = 2 000 000 × (1 - 0,9⁴)/(1 - 0,9)\n= 2 000 000 × 3,439 = 6 878 000 Ar.\n\nCette somme additionne les valeurs estimées à quatre dates ; ce n'est pas la valeur de la machine après 3 ans."
      }
    ]
  }
]);
