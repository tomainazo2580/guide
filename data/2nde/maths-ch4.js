// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 4 : forme canonique et équations du second degré.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-second-degre-equations",
    titre: "Chapitre 4 : Forme canonique et équations du second degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch4-polynomes",
        titre: "Reconnaître une expression du second degré",
        blocs: [
          {
            type: "introduction",
            titre: "Une nouvelle famille d'expressions",
            texte: "En 3e, tu as rencontré des expressions comme x² - 9 ou (x - 2)(x + 3).\n\nEn Seconde, nous allons étudier plus systématiquement les expressions du second degré et apprendre à résoudre les équations qui leur sont associées."
          },
          {
            type: "definition",
            titre: "Expression du second degré",
            texte: "Une expression du second degré en x peut s'écrire :\n\nP(x) = ax² + bx + c,\n\navec a, b et c réels et a ≠ 0.\n\n• a est le coefficient de x² ;\n• b est le coefficient de x ;\n• c est le terme constant.\n\nLe coefficient a doit être non nul : sinon, le terme en x² disparaît."
          },
          {
            type: "exemple",
            titre: "Identifier les coefficients",
            texte: "Pour P(x) = 2x² - 5x + 3 : a = 2, b = -5 et c = 3.\n\nPour Q(x) = -x² + 4 : a = -1, b = 0 et c = 4.\n\nPour R(x) = 3x² - x : a = 3, b = -1 et c = 0.\n\nAttention au signe : dans -5x, le coefficient de x est -5."
          },
          {
            type: "remarque",
            titre: "Simplifier avant de conclure",
            texte: "Une expression qui contient x² n'est pas toujours du second degré après simplification.\n\nPar exemple : x² + 2x - x² + 1 = 2x + 1.\n\nLes termes en x² s'annulent : l'expression obtenue est du premier degré."
          },
          {
            type: "definition",
            titre: "Racine et équation",
            texte: "Une racine de P est un réel r tel que P(r) = 0.\n\nRésoudre l'équation P(x) = 0 dans ℝ consiste à trouver toutes les racines réelles de P.\n\nExemple : pour P(x) = x² - 9, on a P(3) = 0 et P(-3) = 0. Les nombres 3 et -3 sont des racines."
          }
        ]
      },

      {
        id: "m2-ch4-rappels",
        titre: "Premières méthodes de résolution",
        blocs: [
          {
            type: "rappel",
            titre: "Identités remarquables",
            texte: "Pour tous réels u et v :\n\n(u + v)² = u² + 2uv + v² ;\n(u - v)² = u² - 2uv + v² ;\nu² - v² = (u - v)(u + v).\n\nCes identités permettent de développer ou de factoriser une expression."
          },
          {
            type: "regle",
            titre: "Produit nul",
            texte: "Un produit de réels est nul si et seulement si au moins l'un de ses facteurs est nul.\n\nAinsi : A × B = 0 équivaut à A = 0 ou B = 0."
          },
          {
            type: "methode",
            titre: "Résoudre après factorisation",
            texte: "Résolvons x² - x - 6 = 0.\n\nOn reconnaît ou on vérifie que :\nx² - x - 6 = (x - 3)(x + 2).\n\nDonc (x - 3)(x + 2) = 0 équivaut à :\nx - 3 = 0 ou x + 2 = 0.\n\nLes solutions sont x = 3 et x = -2.\n\nOn écrit S = {-2 ; 3}."
          },
          {
            type: "methode",
            titre: "Une équation de la forme x² = k",
            texte: "• Si k > 0, x² = k a deux solutions : x = -√k et x = √k.\n• Si k = 0, la seule solution est x = 0.\n• Si k < 0, il n'y a pas de solution dans ℝ, car un carré ne peut pas être négatif.\n\nExemples :\nx² = 16 donne S = {-4 ; 4}.\nx² = -2 donne S = ∅."
          },
          {
            type: "remarque",
            titre: "Ne pas diviser trop vite par x",
            texte: "Pour résoudre x² - 3x = 0, on factorise : x(x - 3) = 0.\n\nLes solutions sont 0 et 3.\n\nSi on divise directement par x, on suppose x ≠ 0 et on perd la solution x = 0."
          }
        ]
      },

      {
        id: "m2-ch4-canonique",
        titre: "Construire la forme canonique",
        blocs: [
          {
            type: "definition",
            titre: "Forme canonique",
            texte: "Toute expression P(x) = ax² + bx + c, avec a ≠ 0, peut s'écrire :\n\nP(x) = a(x - α)² + β,\n\navec α = -b/(2a) et β = P(α).\n\nCette écriture s'appelle la forme canonique."
          },
          {
            type: "methode",
            titre: "Compléter le carré",
            texte: "Cherchons la forme canonique de P(x) = x² - 6x + 5.\n\nOn reconnaît le début de (x - 3)² :\n(x - 3)² = x² - 6x + 9.\n\nIl faut donc retirer 9 puis ajouter 5 :\nP(x) = (x - 3)² - 9 + 5.\n\nAinsi : P(x) = (x - 3)² - 4.\n\nIci α = 3 et β = -4."
          },
          {
            type: "methode",
            titre: "Quand le coefficient de x² n'est pas 1",
            texte: "Cherchons la forme canonique de P(x) = 2x² + 8x + 3.\n\nOn met 2 en facteur devant les termes contenant x :\nP(x) = 2(x² + 4x) + 3.\n\nOr x² + 4x = (x + 2)² - 4.\n\nDonc P(x) = 2[(x + 2)² - 4] + 3\n= 2(x + 2)² - 5.\n\nOn peut vérifier en développant : 2(x² + 4x + 4) - 5 = 2x² + 8x + 3."
          },
          {
            type: "methode",
            titre: "Utiliser les formules",
            texte: "Pour P(x) = ax² + bx + c :\n\n1. Calcule α = -b/(2a).\n2. Calcule β = P(α).\n3. Écris P(x) = a(x - α)² + β.\n4. Si nécessaire, développe pour vérifier.\n\nExemple : P(x) = -x² + 2x + 3.\n\nα = -2/(2 × (-1)) = 1.\nβ = P(1) = -1 + 2 + 3 = 4.\n\nDonc P(x) = -(x - 1)² + 4."
          },
          {
            type: "remarque",
            titre: "Attention au signe dans la parenthèse",
            texte: "Dans 2(x + 2)² - 5, on écrit x + 2 = x - (-2).\n\nAinsi α = -2 et non 2 ; β = -5."
          }
        ]
      },

      {
        id: "m2-ch4-extremum",
        titre: "Forme canonique et extremum",
        blocs: [
          {
            type: "regle",
            titre: "Minimum ou maximum",
            texte: "Un carré est toujours positif ou nul : (x - α)² ≥ 0.\n\nPour P(x) = a(x - α)² + β :\n\n• si a > 0, P(x) ≥ β. Le minimum est β, atteint pour x = α ;\n• si a < 0, P(x) ≤ β. Le maximum est β, atteint pour x = α.\n\nCes conclusions concernent tous les réels x."
          },
          {
            type: "exemple",
            titre: "Lire un extremum",
            texte: "Pour P(x) = 2(x + 2)² - 5, le coefficient 2 est positif.\n\nDonc P(x) ≥ -5 pour tout réel x. Le minimum est -5, atteint lorsque x + 2 = 0, c'est-à-dire pour x = -2.\n\nPour Q(x) = -(x - 1)² + 4, le maximum est 4, atteint pour x = 1."
          },
          {
            type: "schema",
            titre: "Deux formes de paraboles",
            svg: "<svg viewBox='0 0 360 180' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux paraboles : la première possède un minimum, la seconde un maximum'><rect x='5' y='5' width='350' height='170' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><path d='M30 30 Q85 165 140 30' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='85' cy='97.5' r='4' fill='#2563eb'/><text x='85' y='125' text-anchor='middle' font-size='14' fill='#1e40af'>minimum</text><text x='85' y='150' text-anchor='middle' font-size='14' fill='#334155'>a &gt; 0</text><path d='M220 140 Q275 5 330 140' fill='none' stroke='#dc2626' stroke-width='3'/><circle cx='275' cy='72.5' r='4' fill='#dc2626'/><text x='275' y='42' text-anchor='middle' font-size='14' fill='#b91c1c'>maximum</text><text x='275' y='165' text-anchor='middle' font-size='14' fill='#334155'>a &lt; 0</text></svg>",
            legende: "Illustration qualitative : la courbe d'une fonction du second degré est une parabole. Son sommet correspond au minimum si a > 0, au maximum si a < 0."
          },
          {
            type: "remarque",
            titre: "Valeur et position",
            texte: "Dans P(x) = 2(x + 2)² - 5, le minimum est -5. Il est atteint pour x = -2.\n\nNe confonds pas la valeur minimale -5 avec le nombre -2 auquel elle est atteinte."
          }
        ]
      },

      {
        id: "m2-ch4-discriminant",
        titre: "Résoudre avec le discriminant",
        blocs: [
          {
            type: "definition",
            titre: "Le discriminant",
            texte: "Pour l'équation ax² + bx + c = 0, avec a ≠ 0, on calcule le discriminant :\n\nΔ = b² - 4ac.\n\nLa lettre Δ se lit « delta ». Le signe de Δ indique le nombre de solutions réelles."
          },
          {
            type: "regle",
            titre: "Les trois cas",
            texte: "• Si Δ > 0, il y a deux solutions réelles distinctes :\nx₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a).\n\n• Si Δ = 0, il y a une seule solution réelle, appelée racine double :\nx₀ = -b/(2a).\n\n• Si Δ < 0, il n'y a aucune solution dans ℝ.\n\nLes noms x₁ et x₂ ne garantissent pas leur ordre : si a est négatif, x₁ peut être supérieur à x₂."
          },
          {
            type: "methode",
            titre: "Exemple : deux solutions",
            texte: "Résolvons 2x² - 5x + 2 = 0.\n\n1. a = 2, b = -5, c = 2.\n2. Δ = (-5)² - 4 × 2 × 2 = 25 - 16 = 9.\n3. Δ > 0, donc il y a deux solutions.\n4. x₁ = (5 - 3)/4 = 1/2.\n5. x₂ = (5 + 3)/4 = 2.\n\nDonc S = {1/2 ; 2}."
          },
          {
            type: "exemple",
            titre: "Exemple : une racine double",
            texte: "Résolvons x² - 6x + 9 = 0.\n\nΔ = (-6)² - 4 × 1 × 9 = 36 - 36 = 0.\n\nL'unique solution est x₀ = 6/2 = 3.\n\nOn pouvait aussi écrire (x - 3)² = 0."
          },
          {
            type: "exemple",
            titre: "Exemple : aucune solution réelle",
            texte: "Résolvons x² + 2x + 5 = 0.\n\nΔ = 2² - 4 × 1 × 5 = 4 - 20 = -16.\n\nComme Δ < 0, l'équation n'a aucune solution dans ℝ : S = ∅.\n\nVérification par la forme canonique : x² + 2x + 5 = (x + 1)² + 4, qui est toujours supérieur ou égal à 4."
          },
          {
            type: "methode",
            titre: "Organiser sa résolution",
            texte: "1. Ramène l'équation à la forme ax² + bx + c = 0.\n2. Identifie a, b et c avec leurs signes.\n3. Calcule Δ en utilisant des parenthèses.\n4. Choisis la formule correspondant au signe de Δ.\n5. Simplifie et écris l'ensemble des solutions.\n6. Vérifie en remplaçant x dans l'équation de départ si possible."
          }
        ]
      },

      {
        id: "m2-ch4-factorisation",
        titre: "Racines et factorisation",
        blocs: [
          {
            type: "regle",
            titre: "Factoriser grâce aux racines",
            texte: "Pour P(x) = ax² + bx + c, avec a ≠ 0 :\n\n• si Δ > 0 et si les racines sont r₁ et r₂ :\nP(x) = a(x - r₁)(x - r₂) ;\n\n• si Δ = 0 et si la racine double est r :\nP(x) = a(x - r)² ;\n\n• si Δ < 0, P ne se factorise pas en un produit de facteurs du premier degré à coefficients réels."
          },
          {
            type: "exemple",
            titre: "Ne pas oublier le coefficient a",
            texte: "Pour P(x) = 2x² - 5x + 2, les racines sont 1/2 et 2.\n\nDonc P(x) = 2(x - 1/2)(x - 2).\n\nOn peut aussi écrire P(x) = (2x - 1)(x - 2).\n\nSans le facteur 2 dans la première écriture, on n'obtiendrait pas l'expression de départ."
          },
          {
            type: "exemple",
            titre: "Utiliser la forme canonique",
            texte: "Résolvons x² - 6x + 5 = 0.\n\nLa forme canonique est (x - 3)² - 4 = 0.\n\nDonc (x - 3)² = 4, d'où x - 3 = -2 ou x - 3 = 2.\n\nLes solutions sont 1 et 5.\n\nOn retrouve la factorisation : x² - 6x + 5 = (x - 1)(x - 5)."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque expression, indique les coefficients a, b et c lorsqu'elle est du second degré :\n\n1. 3x² - 2x + 7\n2. -x² + 5\n3. 4x² - x\n4. 2x + 3",
        correction: "1. a = 3, b = -2, c = 7.\n\n2. a = -1, b = 0, c = 5.\n\n3. a = 4, b = -1, c = 0.\n\n4. 2x + 3 n'est pas du second degré : son coefficient de x² est nul."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résous dans ℝ :\n\n1. x² = 25\n2. x² = 0\n3. x² = -4",
        correction: "1. x² = 25 donne x = -5 ou x = 5. Donc S = {-5 ; 5}.\n\n2. x² = 0 donne x = 0. Donc S = {0}.\n\n3. Aucun carré réel n'est négatif. Donc S = ∅."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. x² - 16 = 0\n2. x² + 3x = 0",
        correction: "1. x² - 16 = (x - 4)(x + 4). Un produit est nul si l'un de ses facteurs est nul. Donc x = 4 ou x = -4 : S = {-4 ; 4}.\n\n2. x² + 3x = x(x + 3). Donc x = 0 ou x + 3 = 0. Ainsi S = {-3 ; 0}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Mets P(x) = x² + 4x + 1 sous forme canonique, puis détermine son minimum sur ℝ.",
        correction: "On utilise (x + 2)² = x² + 4x + 4.\n\nDonc P(x) = (x + 2)² - 4 + 1 = (x + 2)² - 3.\n\nComme (x + 2)² ≥ 0, on a P(x) ≥ -3. L'égalité est atteinte pour x = -2.\n\nLe minimum de P sur ℝ est donc -3, atteint pour x = -2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ à l'aide du discriminant :\n\n1. x² - 5x + 6 = 0\n2. x² + 4x + 4 = 0\n3. x² + x + 1 = 0",
        correction: "1. a = 1, b = -5, c = 6. Δ = 25 - 24 = 1. Il y a deux solutions : (5 - 1)/2 = 2 et (5 + 1)/2 = 3. Donc S = {2 ; 3}.\n\n2. Δ = 4² - 4 × 1 × 4 = 0. L'unique solution est -4/2 = -2. Donc S = {-2}.\n\n3. Δ = 1 - 4 = -3 < 0. Il n'y a aucune solution réelle : S = ∅."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit P(x) = 2x² + 8x + 3.\n\n1. Écris P sous forme canonique.\n2. Détermine son minimum sur ℝ et la valeur de x pour laquelle il est atteint.\n3. Calcule P(0) pour vérifier ton écriture.",
        correction: "1. P(x) = 2(x² + 4x) + 3 = 2[(x + 2)² - 4] + 3 = 2(x + 2)² - 5.\n\n2. Comme 2 > 0 et (x + 2)² ≥ 0, P(x) ≥ -5. Le minimum est -5, atteint pour x = -2.\n\n3. Avec l'expression initiale, P(0) = 3. Avec la forme canonique, P(0) = 2 × 2² - 5 = 3. Les résultats concordent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit P(x) = 2x² - 5x + 2.\n\n1. Calcule son discriminant.\n2. Détermine ses racines.\n3. Factorise P(x) et vérifie par développement.",
        correction: "1. Δ = (-5)² - 4 × 2 × 2 = 25 - 16 = 9.\n\n2. Les racines sont (5 - 3)/4 = 1/2 et (5 + 3)/4 = 2.\n\n3. P(x) = 2(x - 1/2)(x - 2) = (2x - 1)(x - 2).\n\nVérification : (2x - 1)(x - 2) = 2x² - 4x - x + 2 = 2x² - 5x + 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a un périmètre de 20 m. On note x sa largeur en mètres et on suppose 0 < x < 10.\n\n1. Exprime sa longueur en fonction de x.\n2. Montre que son aire A(x) vaut -x² + 10x.\n3. Écris A(x) sous forme canonique et détermine l'aire maximale.\n4. Détermine les dimensions possibles lorsque l'aire vaut 21 m².",
        correction: "1. Si la longueur est L, alors 2(x + L) = 20. Donc x + L = 10 et L = 10 - x.\n\n2. A(x) = x(10 - x) = -x² + 10x.\n\n3. A(x) = -(x² - 10x) = -[(x - 5)² - 25] = -(x - 5)² + 25.\n\nLe carré étant positif ou nul, A(x) ≤ 25. L'égalité est atteinte pour x = 5, qui vérifie bien 0 < x < 10. L'aire maximale est 25 m² ; le rectangle est alors un carré de côté 5 m.\n\n4. -x² + 10x = 21 équivaut à x² - 10x + 21 = 0. Δ = 100 - 84 = 16. Les solutions sont (10 - 4)/2 = 3 et (10 + 4)/2 = 7.\n\nLes deux valeurs vérifient 0 < x < 10. Elles donnent les dimensions 3 m et 7 m, dans un ordre ou dans l'autre."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère P(x) = -x² + 4x + 5.\n\n1. Écris P sous forme canonique.\n2. Détermine le maximum de P sur ℝ et la valeur de x où il est atteint.\n3. Résous P(x) = 0.\n4. Factorise P(x), puis vérifie la factorisation.",
        correction: "1. P(x) = -(x² - 4x) + 5 = -[(x - 2)² - 4] + 5 = -(x - 2)² + 9.\n\n2. Puisque -(x - 2)² ≤ 0, P(x) ≤ 9. Le maximum est 9, atteint pour x = 2.\n\n3. P(x) = 0 équivaut à (x - 2)² = 9. Donc x - 2 = -3 ou x - 2 = 3. Les solutions sont -1 et 5.\n\n4. Le coefficient de x² est -1, donc P(x) = -(x + 1)(x - 5).\n\nVérification : -(x² - 4x - 5) = -x² + 4x + 5."
      }
    ]
  }
]);
