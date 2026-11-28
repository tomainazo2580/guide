enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch21",
    titre: "Chapitre 21 : Nombres complexes — module et argument",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch21-l1",
        titre: "Leçon 1 : Module d’un nombre complexe",
        blocs: [
          {
            type: "introduction",
            titre: "Associer un nombre à une distance",
            texte: "Dans le plan complexe, un nombre z = a + bi est représenté par le point M(a ; b). Son module permet de mesurer la distance entre l’origine O et M."
          },
          {
            type: "definition",
            titre: "Définition du module",
            texte: "Pour z = a + bi, le module de z est le réel positif ou nul :\n\n|z| = √(a² + b²).\n\nGéométriquement, |z| est la distance OM, où M est le point d’affixe z."
          },
          {
            type: "exemple",
            titre: "Calculer un module",
            texte: "Pour z = 3 + 4i :\n|z| = √(3² + 4²) = √25 = 5."
          },
          {
            type: "tableau",
            titre: "Propriétés du module",
            entetes: ["Propriété", "Formule"],
            lignes: [
              ["Produit avec le conjugué", "z z̄ = |z|²"],
              ["Conjugué", "|z̄| = |z|"],
              ["Produit", "|zw| = |z||w|"],
              ["Quotient, si w ≠ 0", "|z/w| = |z|/|w|"],
              ["Cas nul", "|z| = 0 si et seulement si z = 0"]
            ]
          },
          {
            type: "exemple",
            titre: "Module d’un produit",
            texte: "Si |z| = 2 et |w| = 3, alors |zw| = |z||w| = 6. Si w ≠ 0, |z/w| = 2/3."
          },
          {
            type: "remarque",
            titre: "Inverse et conjugué",
            texte: "Pour z ≠ 0, on a 1/z = z̄/|z|². En effet, z z̄ = |z|²."
          }
        ]
      },

      {
        id: "tle-maths-ch21-l2",
        titre: "Leçon 2 : Distance et ensembles de points",
        blocs: [
          {
            type: "definition",
            titre: "Distance entre deux points",
            texte: "Si A et B ont pour affixes zA et zB, alors :\n\nAB = |zB − zA|."
          },
          {
            type: "exemple",
            titre: "Calculer une distance",
            texte: "Soient zA = 1 + i et zB = 4 + 5i.\n\nzB − zA = 3 + 4i, donc AB = |3 + 4i| = 5."
          },
          {
            type: "definition",
            titre: "Cercle et disque",
            texte: "Soit A le point d’affixe a et r un réel strictement positif.\n\n• |z − a| = r représente le cercle de centre A et de rayon r.\n• |z − a| ≤ r représente le disque fermé de centre A et de rayon r.\n• |z − a| < r représente l’intérieur du disque, sans son cercle."
          },
          {
            type: "schema",
            titre: "Un cercle de centre A",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='25' y1='170' x2='300' y2='170' stroke='black' stroke-width='2'/><line x1='65' y1='195' x2='65' y2='20' stroke='black' stroke-width='2'/><circle cx='165' cy='100' r='55' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='165' cy='100' r='4' fill='#222'/><circle cx='220' cy='100' r='4' fill='#c62828'/><line x1='165' y1='100' x2='220' y2='100' stroke='#c62828' stroke-width='2'/><text x='152' y='94' font-size='14'>A</text><text x='225' y='104' font-size='14'>M</text><text x='188' y='92' font-size='14'>r</text><text x='287' y='188' font-size='13'>Re</text><text x='72' y='27' font-size='13'>Im</text></svg>",
            legende: "Tous les points M du cercle vérifient AM = |z − a| = r."
          },
          {
            type: "methode",
            titre: "Lire une égalité de distances",
            texte: "L’égalité |z − a| = |z − b| signifie que le point M d’affixe z est à égale distance des points A et B d’affixes a et b.\n\nSi A et B sont distincts, l’ensemble est la médiatrice du segment [AB]."
          },
          {
            type: "exemple",
            titre: "Une médiatrice",
            texte: "L’ensemble |z − 2| = |z + 2| est l’ensemble des points équidistants de A(2 ; 0) et B(−2 ; 0).\n\nC’est la médiatrice de [AB], donc l’axe imaginaire : Re(z) = 0."
          }
        ]
      },

      {
        id: "tle-maths-ch21-l3",
        titre: "Leçon 3 : Argument d’un complexe non nul",
        blocs: [
          {
            type: "definition",
            titre: "Définition géométrique",
            texte: "Soit z ≠ 0 et M son point image. Un argument de z est une mesure en radians de l’angle orienté entre l’axe réel positif et le vecteur OM.\n\nOn le note arg(z). Deux arguments d’un même complexe diffèrent d’un multiple de 2π. Le complexe 0 n’a pas d’argument."
          },
          {
            type: "definition",
            titre: "Module et angle",
            texte: "Si z = a + bi ≠ 0, de module r et d’argument θ, alors :\n\ncos(θ) = a/r et sin(θ) = b/r.\n\nInversement, ces deux égalités permettent d’identifier θ modulo 2π."
          },
          {
            type: "schema",
            titre: "Module et argument",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='25' y1='175' x2='300' y2='175' stroke='black' stroke-width='2'/><line x1='70' y1='200' x2='70' y2='20' stroke='black' stroke-width='2'/><line x1='70' y1='175' x2='220' y2='65' stroke='#1769aa' stroke-width='3'/><circle cx='220' cy='65' r='4' fill='#1769aa'/><path d='M115 175 A45 45 0 0 0 106 148' fill='none' stroke='#c62828' stroke-width='2'/><text x='112' y='160' font-size='14' fill='#c62828'>θ</text><text x='130' y='107' font-size='14' fill='#1769aa'>r</text><text x='225' y='65' font-size='13'>M(a ; b)</text><text x='53' y='193' font-size='13'>O</text></svg>",
            legende: "Le module r est la longueur OM. L’argument θ mesure l’angle orienté depuis l’axe réel positif jusqu’au vecteur OM."
          },
          {
            type: "tableau",
            titre: "Arguments usuels",
            entetes: ["Complexe non nul", "Un argument"],
            lignes: [
              ["1", "0"],
              ["i", "π/2"],
              ["−1", "π"],
              ["−i", "−π/2"],
              ["1 + i", "π/4"],
              ["−1 + i", "3π/4"]
            ]
          },
          {
            type: "exemple",
            titre: "Déterminer un argument",
            texte: "Pour z = −1 + i, le module vaut √2.\n\nOn a cos(θ) = −1/√2 et sin(θ) = 1/√2. Le point est dans le deuxième quadrant, donc un argument est 3π/4."
          },
          {
            type: "remarque",
            titre: "Tenir compte du quadrant",
            texte: "La seule valeur de la tangente ne suffit pas à déterminer un argument : deux directions opposées ont la même tangente. Il faut tenir compte des signes des parties réelle et imaginaire."
          }
        ]
      },

      {
        id: "tle-maths-ch21-l4",
        titre: "Leçon 4 : Arguments d’un produit et d’un quotient",
        blocs: [
          {
            type: "definition",
            titre: "Règles de calcul",
            texte: "Pour deux complexes non nuls z et w :\n\narg(zw) ≡ arg(z) + arg(w) (mod 2π).\narg(z/w) ≡ arg(z) − arg(w) (mod 2π).\n\nDe plus, pour tout entier n : arg(zⁿ) ≡ n arg(z) (mod 2π)."
          },
          {
            type: "exemple",
            titre: "Argument d’un produit",
            texte: "Soit z = 1 + i. Son module est √2 et un argument est π/4.\n\nPour z², le module vaut (√2)² = 2 et un argument vaut 2 × π/4 = π/2. On vérifie que z² = 2i."
          },
          {
            type: "exemple",
            titre: "Argument d’un quotient",
            texte: "Le complexe i a pour argument π/2 et −1 a pour argument π. Ainsi un argument de i/(−1) est π/2 − π = −π/2.\n\nOn retrouve bien i/(−1) = −i."
          },
          {
            type: "methode",
            titre: "Comparer des directions",
            texte: "Si A, B et C sont des points d’affixes a, b et c, avec A ≠ B et A ≠ C, un argument de (c − a)/(b − a) mesure l’angle orienté entre les vecteurs AB et AC.\n\nCe résultat permet notamment de reconnaître un angle droit ou un alignement."
          },
          {
            type: "exemple",
            titre: "Reconnaître un angle droit",
            texte: "Si (c − a)/(b − a) = 2i, son argument est π/2. Les vecteurs AB et AC sont donc perpendiculaires, avec un angle orienté de π/2 de AB vers AC."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer le module de z = 3 − 4i.",
        correction: "|z| = √(3² + (−4)²) = √25 = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner un argument de i et un argument de −1.",
        correction: "Un argument de i est π/2. Un argument de −1 est π."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le nombre 0 possède-t-il un argument ?",
        correction: "Non. Le vecteur associé à 0 est nul et n’a pas de direction : 0 n’a pas d’argument."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer le module de z = −2 + 2i.",
        correction: "|z| = √((-2)² + 2²) = √8 = 2√2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer un argument de z = −1 − i.",
        correction: "Le module vaut √2. Les parties réelle et imaginaire sont toutes deux négatives : le point est dans le troisième quadrant. Un argument est −3π/4 ; 5π/4 convient aussi."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si |z| = 4 et |w| = 2, calculer |zw| et |z/w|.",
        correction: "Comme |w| = 2, w ≠ 0. Ainsi |zw| = 4 × 2 = 8 et |z/w| = 4/2 = 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décrire l’ensemble des points M d’affixe z tels que |z − (1 + 2i)| = 3.",
        correction: "C’est le cercle de centre A(1 ; 2), d’affixe 1 + 2i, et de rayon 3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la distance entre A d’affixe 1 + i et B d’affixe 4 + 5i.",
        correction: "zB − zA = 3 + 4i. Donc AB = |3 + 4i| = √(9 + 16) = 5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si un argument de z est π/3 et un argument de w est π/4, donner un argument de zw.",
        correction: "Un argument du produit est π/3 + π/4 = 4π/12 + 3π/12 = 7π/12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer le module et un argument de z = √3 + i.",
        correction: "|z| = √(3 + 1) = 2. Donc cos(θ) = √3/2 et sin(θ) = 1/2.\nUn argument est θ = π/6."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Décrire l’ensemble des points M d’affixe z tels que |z − 1| = |z + 1|.",
        correction: "Les points d’affixes 1 et −1 ont pour coordonnées (1 ; 0) et (−1 ; 0). L’ensemble des points équidistants de ces deux points est la médiatrice du segment qui les relie : l’axe imaginaire, d’équation Re(z) = 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit z = 1 + i. Déterminer le module et un argument de z⁴.",
        correction: "|z| = √2 et un argument de z est π/4.\nDonc |z⁴| = (√2)⁴ = 4 et un argument de z⁴ est 4 × π/4 = π.\nOn peut vérifier que z² = 2i, puis z⁴ = −4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer l’inverse de z = 1 + i sous forme algébrique.",
        correction: "On utilise 1/z = z̄/|z|². Ici z̄ = 1 − i et |z|² = 2.\nDonc 1/(1 + i) = (1 − i)/2 = 1/2 − i/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient A, B et C d’affixes a = 0, b = 1 et c = i. Déterminer l’angle orienté de AB vers AC.",
        correction: "On calcule (c − a)/(b − a) = i/1 = i. Un argument de i est π/2.\nL’angle orienté de AB vers AC vaut donc π/2 modulo 2π."
      }
    ]
  }
]);
