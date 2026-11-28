enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch13",
    titre: "Chapitre 13 : Suites numériques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch13-l1",
        titre: "Leçon 1 : Définir et calculer les termes d’une suite",
        blocs: [
          {
            type: "introduction",
            titre: "Une liste ordonnée de nombres",
            texte: "Une suite numérique associe un nombre réel à chaque entier naturel à partir d’un certain rang. Elle permet par exemple de suivre l’évolution d’une quantité d’année en année."
          },
          {
            type: "definition",
            titre: "Vocabulaire",
            texte: "On note généralement une suite (uₙ). Le nombre uₙ est son terme de rang n.\n\nAttention : l’indice n indique la position du terme ; ce n’est pas une multiplication. La suite peut commencer à u₀ ou à un autre rang précisé dans l’énoncé."
          },
          {
            type: "definition",
            titre: "Formule explicite",
            texte: "Une suite est définie explicitement lorsque son terme uₙ est donné directement en fonction de n. On peut alors calculer un terme sans calculer tous les précédents."
          },
          {
            type: "exemple",
            titre: "Calcul direct",
            texte: "Pour uₙ = n² − 2n, définie pour n ≥ 0 :\nu₀ = 0² − 2 × 0 = 0 ;\nu₁ = 1² − 2 × 1 = −1 ;\nu₃ = 3² − 2 × 3 = 3."
          },
          {
            type: "definition",
            titre: "Définition par récurrence",
            texte: "Une suite peut être définie par un premier terme et une relation qui permet de calculer chaque terme à partir du précédent. Par exemple : u₀ = 1 et uₙ₊₁ = 2uₙ + 3 pour n ≥ 0."
          },
          {
            type: "exemple",
            titre: "Calcul de proche en proche",
            texte: "Avec u₀ = 1 et uₙ₊₁ = 2uₙ + 3 :\nu₁ = 2u₀ + 3 = 5 ;\nu₂ = 2u₁ + 3 = 13 ;\nu₃ = 2u₂ + 3 = 29.\n\nPour obtenir u₃, on a d’abord calculé u₁ et u₂."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les rangs",
            texte: "Si une suite commence à u₀, les termes de u₀ à uₙ inclus sont au nombre de n + 1. Par exemple, de u₀ à u₃, il y a quatre termes."
          }
        ]
      },

      {
        id: "tle-maths-ch13-l2",
        titre: "Leçon 2 : Sens de variation et bornes",
        blocs: [
          {
            type: "definition",
            titre: "Croissance et décroissance",
            texte: "Une suite (uₙ) est croissante si uₙ₊₁ ≥ uₙ pour tout rang considéré. Elle est décroissante si uₙ₊₁ ≤ uₙ pour tout rang considéré.\n\nSi les inégalités sont strictes, on parle de suite strictement croissante ou strictement décroissante."
          },
          {
            type: "methode",
            titre: "Étudier la différence",
            texte: "Pour étudier les variations :\n1. Calculer uₙ₊₁ − uₙ.\n2. Étudier son signe pour tous les rangs concernés.\n3. Si la différence est positive ou nulle, la suite est croissante ; si elle est négative ou nulle, elle est décroissante."
          },
          {
            type: "exemple",
            titre: "Une suite explicite",
            texte: "Soit uₙ = n² pour n ≥ 0.\n\nuₙ₊₁ − uₙ = (n + 1)² − n² = 2n + 1.\nComme 2n + 1 > 0 pour tout n ≥ 0, la suite est strictement croissante."
          },
          {
            type: "definition",
            titre: "Suites majorées et minorées",
            texte: "Une suite est majorée s’il existe un réel M tel que uₙ ≤ M pour tout rang n. Elle est minorée s’il existe un réel m tel que uₙ ≥ m pour tout rang n.\n\nElle est bornée si elle est à la fois majorée et minorée."
          },
          {
            type: "exemple",
            titre: "Une suite bornée",
            texte: "Pour uₙ = 1/(n + 1), avec n ≥ 0, on a 0 < uₙ ≤ 1. La suite est donc minorée par 0 et majorée par 1."
          },
          {
            type: "remarque",
            titre: "Un quotient avec précaution",
            texte: "Lorsque tous les termes sont strictement positifs, on peut aussi comparer uₙ₊₁/uₙ à 1. Mais si un terme est nul ou négatif, cette méthode demande des précautions ; la différence reste souvent plus simple."
          }
        ]
      },

      {
        id: "tle-maths-ch13-l3",
        titre: "Leçon 3 : Limites de suites",
        blocs: [
          {
            type: "definition",
            titre: "Suite convergente",
            texte: "Une suite (uₙ) converge vers un réel L si, lorsque n devient suffisamment grand, ses termes sont aussi proches de L que l’on veut. On écrit : lim lorsque n → +∞ de uₙ = L.\n\nSi une suite ne converge pas vers un réel, on dit qu’elle diverge."
          },
          {
            type: "tableau",
            titre: "Limites de référence",
            entetes: ["Suite", "Limite quand n → +∞"],
            lignes: [
              ["n", "+∞"],
              ["1/n, pour n ≥ 1", "0"],
              ["1/n², pour n ≥ 1", "0"],
              ["qⁿ si |q| < 1", "0"],
              ["qⁿ si q > 1", "+∞"],
              ["(−1)ⁿ", "Pas de limite"]
            ]
          },
          {
            type: "exemple",
            titre: "Une limite par simplification",
            texte: "Soit uₙ = (2n + 1)/(n + 3).\n\nEn divisant le numérateur et le dénominateur par n, pour n ≥ 1 :\nuₙ = (2 + 1/n)/(1 + 3/n).\n\nLes termes 1/n et 3/n tendent vers 0. Donc uₙ tend vers 2."
          },
          {
            type: "exemple",
            titre: "Une suite sans limite",
            texte: "Pour uₙ = (−1)ⁿ, les termes de rang pair valent 1 et les termes de rang impair valent −1. Ils ne se rapprochent pas tous d’un même nombre : la suite ne converge pas."
          },
          {
            type: "methode",
            titre: "Utiliser un encadrement",
            texte: "Si, à partir d’un certain rang, aₙ ≤ uₙ ≤ bₙ et si aₙ et bₙ tendent vers la même limite L, alors uₙ tend vers L."
          },
          {
            type: "exemple",
            titre: "Théorème des gendarmes",
            texte: "Pour n ≥ 1, on a −1 ≤ (−1)ⁿ ≤ 1. En divisant par n > 0 :\n−1/n ≤ (−1)ⁿ/n ≤ 1/n.\n\nLes deux bornes tendent vers 0. Donc (−1)ⁿ/n tend vers 0."
          }
        ]
      },

      {
        id: "tle-maths-ch13-l4",
        titre: "Leçon 4 : Convergence et suites définies par récurrence",
        blocs: [
          {
            type: "definition",
            titre: "Théorème de convergence monotone",
            texte: "Toute suite croissante et majorée converge vers un réel. Toute suite décroissante et minorée converge vers un réel.\n\nCes résultats garantissent l’existence d’une limite, mais ne donnent pas toujours sa valeur."
          },
          {
            type: "methode",
            titre: "Chercher une limite possible",
            texte: "Si uₙ₊₁ = f(uₙ), si (uₙ) converge vers L et si f est continue en L, alors L = f(L).\n\nAttention : résoudre L = f(L) ne prouve pas que la suite converge. Il faut établir la convergence séparément, par exemple avec le théorème de convergence monotone."
          },
          {
            type: "exemple",
            titre: "Une suite qui converge",
            texte: "Soit u₀ = 0 et uₙ₊₁ = (uₙ + 2)/2.\n\nMontrons que 0 ≤ uₙ ≤ 2 pour tout n. C’est vrai au rang 0. Si 0 ≤ uₙ ≤ 2, alors 1 ≤ (uₙ + 2)/2 ≤ 2 : la propriété reste vraie au rang suivant.\n\nDe plus, uₙ₊₁ − uₙ = (2 − uₙ)/2 ≥ 0. La suite est donc croissante et majorée par 2 : elle converge.\n\nSi L est sa limite, la continuité de x ↦ (x + 2)/2 donne L = (L + 2)/2, donc L = 2."
          },
          {
            type: "schema",
            titre: "Les premiers termes de la suite",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='45' y1='175' x2='300' y2='175' stroke='black' stroke-width='2'/><line x1='55' y1='190' x2='55' y2='20' stroke='black' stroke-width='2'/><line x1='55' y1='55' x2='295' y2='55' stroke='#c62828' stroke-dasharray='5 4'/><circle cx='55' cy='175' r='4' fill='#1769aa'/><circle cx='105' cy='115' r='4' fill='#1769aa'/><circle cx='155' cy='85' r='4' fill='#1769aa'/><circle cx='205' cy='70' r='4' fill='#1769aa'/><circle cx='255' cy='62.5' r='4' fill='#1769aa'/><text x='35' y='59' font-size='13'>2</text><text x='51' y='195' font-size='13'>0</text><text x='101' y='195' font-size='13'>1</text><text x='151' y='195' font-size='13'>2</text><text x='201' y='195' font-size='13'>3</text><text x='251' y='195' font-size='13'>4</text><text x='285' y='195' font-size='13'>n</text><text x='62' y='32' font-size='13'>uₙ</text></svg>",
            legende: "Les points représentent u₀ = 0, u₁ = 1, u₂ = 1,5, u₃ = 1,75 et u₄ = 1,875. Ils se rapprochent de 2."
          },
          {
            type: "remarque",
            titre: "La récurrence",
            texte: "Le raisonnement utilisé pour montrer 0 ≤ uₙ ≤ 2 est une démonstration par récurrence : on vérifie le premier rang, puis on montre que la propriété se transmet d’un rang au suivant. Cette méthode sera reprise dans le chapitre suivant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour uₙ = 2n + 1, calculer u₀, u₁ et u₄.",
        correction: "u₀ = 2 × 0 + 1 = 1.\nu₁ = 2 × 1 + 1 = 3.\nu₄ = 2 × 4 + 1 = 9."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La suite est définie par u₀ = 2 et uₙ₊₁ = uₙ + 3. Calculer u₁, u₂ et u₃.",
        correction: "u₁ = 2 + 3 = 5 ; u₂ = 5 + 3 = 8 ; u₃ = 8 + 3 = 11."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner la limite de uₙ = 1/n lorsque n tend vers +∞.",
        correction: "Pour n ≥ 1, la suite 1/n tend vers 0 lorsque n tend vers +∞."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudier le sens de variation de uₙ = 3n − 2 pour n ≥ 0.",
        correction: "uₙ₊₁ − uₙ = [3(n + 1) − 2] − (3n − 2) = 3.\nCette différence est strictement positive : la suite est strictement croissante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudier le sens de variation de uₙ = 1/(n + 1) pour n ≥ 0.",
        correction: "uₙ₊₁ − uₙ = 1/(n + 2) − 1/(n + 1) = −1/[(n + 2)(n + 1)].\nLe dénominateur est positif, donc la différence est strictement négative. La suite est strictement décroissante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Montrer que uₙ = n/(n + 1) est bornée pour n ≥ 0.",
        correction: "Pour n ≥ 0, n et n + 1 sont positifs ou nuls, avec n + 1 > 0. Ainsi uₙ ≥ 0.\nDe plus, n < n + 1, donc uₙ < 1.\nLa suite est donc bornée : 0 ≤ uₙ < 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la limite de uₙ = (5n − 1)/(n + 2).",
        correction: "Pour n ≥ 1, on divise par n : uₙ = (5 − 1/n)/(1 + 2/n).\nLe numérateur tend vers 5 et le dénominateur vers 1. Donc uₙ tend vers 5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La suite uₙ = (−1)ⁿ converge-t-elle ?",
        correction: "Non. Les termes de rang pair valent 1 et ceux de rang impair valent −1. Ils ne tendent pas vers une même limite, donc la suite diverge."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Que peut-on affirmer d’une suite croissante majorée par 10 ?",
        correction: "D’après le théorème de convergence monotone, elle converge vers un réel. Sa limite est inférieure ou égale à 10, mais elle n’est pas nécessairement égale à 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer la limite de uₙ = (3n² + 2n)/(n² + 1).",
        correction: "Pour n ≥ 1, on divise le numérateur et le dénominateur par n² :\nuₙ = (3 + 2/n)/(1 + 1/n²).\nLes fractions 2/n et 1/n² tendent vers 0. Donc uₙ tend vers 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Montrer que uₙ = (−1)ⁿ/(n + 1) tend vers 0.",
        correction: "Pour tout n ≥ 0 : −1/(n + 1) ≤ (−1)ⁿ/(n + 1) ≤ 1/(n + 1).\nLes deux bornes tendent vers 0. Par le théorème des gendarmes, uₙ tend vers 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On pose u₀ = 1 et uₙ₊₁ = (uₙ + 3)/2. Montrer que 1 ≤ uₙ ≤ 3, puis déterminer la limite de la suite.",
        correction: "Au rang 0, 1 ≤ u₀ = 1 ≤ 3. Si 1 ≤ uₙ ≤ 3, alors 2 ≤ (uₙ + 3)/2 ≤ 3 ; la propriété est donc vraie au rang suivant. Par récurrence, 1 ≤ uₙ ≤ 3 pour tout n.\n\nDe plus, uₙ₊₁ − uₙ = (3 − uₙ)/2 ≥ 0. La suite est croissante et majorée par 3, donc elle converge.\n\nSi L est sa limite, le passage à la limite donne L = (L + 3)/2, d’où L = 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une suite converge vers L et vérifie uₙ₊₁ = 0,4uₙ + 6. Déterminer L.",
        correction: "La fonction x ↦ 0,4x + 6 est continue. Puisque la convergence est donnée, on peut passer à la limite : L = 0,4L + 6.\nAinsi 0,6L = 6, donc L = 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On définit u₀ = 2 et uₙ₊₁ = −uₙ. La relation L = −L suffit-elle à prouver la convergence ? Étudier la suite.",
        correction: "Non. L’égalité L = −L donne seulement une limite possible : L = 0.\nOr u₀ = 2, u₁ = −2, u₂ = 2, u₃ = −2, et ces valeurs alternent. Les termes pairs valent 2 et les termes impairs valent −2 : la suite ne converge pas."
      }
    ]
  }
]);
