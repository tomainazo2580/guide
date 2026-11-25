// ===== GUIDE - Mathématiques Première =====
// Chapitre 1 : trinôme du second degré, racines et factorisation.
// Conçu à partir des répartitions annuelles 2024 de Première C et D.
// Les répartitions sont à utiliser avec le programme détaillé.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-trinome-racines-factorisation",
    titre: "Chapitre 1 : Trinôme du second degré : racines et factorisation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-trinome-reconnaitre",
        titre: "Reconnaître un trinôme du second degré",
        blocs: [
          {
            type: "introduction",
            titre: "Une question pour commencer",
            texte: "On considère un rectangle dont la longueur mesure x + 3 mètres et la largeur x mètres. Son aire est :\n\nA(x) = x(x + 3) = x² + 3x.\n\nSi l'aire vaut 10 m², on obtient :\n\nx² + 3x = 10, soit x² + 3x - 10 = 0.\n\nCette équation contient un terme en x² : c'est une équation du second degré. Dans ce chapitre, tu vas apprendre à la résoudre et à interpréter ses solutions."
          },
          {
            type: "definition",
            titre: "Forme générale",
            texte: "Un trinôme du second degré est une expression de la forme :\n\nP(x) = ax² + bx + c,\n\navec a, b et c réels et a ≠ 0.\n\nLes nombres a, b et c sont les coefficients. La condition a ≠ 0 est indispensable : sinon, le terme en x² disparaît et l'expression n'est plus du second degré."
          },
          {
            type: "exemple",
            titre: "Repérer les coefficients",
            texte: "Pour P(x) = 2x² - 5x + 3 :\n\na = 2 ; b = -5 ; c = 3.\n\nPour Q(x) = -x² + 4 :\n\na = -1 ; b = 0 ; c = 4.\n\nPour R(x) = 3x² - x :\n\na = 3 ; b = -1 ; c = 0.\n\nUn coefficient peut être nul, sauf a."
          },
          {
            type: "definition",
            titre: "Racine et équation",
            texte: "Une racine de P est un nombre réel r tel que P(r) = 0.\n\nRésoudre l'équation P(x) = 0, c'est chercher toutes les racines réelles de P.\n\nPar exemple, pour P(x) = x² - 5x + 6 :\n\nP(2) = 2² - 5 × 2 + 6 = 0.\n\nDonc 2 est une racine. De même, P(3) = 0 : 3 est aussi une racine."
          },
          {
            type: "remarque",
            titre: "Vérifier n'est pas toujours résoudre",
            texte: "Calculer P(2) et trouver 0 prouve que 2 est une racine. Mais cela ne prouve pas qu'il n'existe aucune autre racine.\n\nPour résoudre entièrement l'équation, il faut une méthode qui permette de trouver toutes les solutions."
          }
        ]
      },

      {
        id: "m1-trinome-discriminant",
        titre: "Résoudre avec le discriminant",
        blocs: [
          {
            type: "definition",
            titre: "Le discriminant",
            texte: "Pour l'équation ax² + bx + c = 0, avec a ≠ 0, on calcule le discriminant :\n\nΔ = b² - 4ac.\n\nLa lettre Δ se lit « delta ». Son signe permet de connaître le nombre de solutions réelles."
          },
          {
            type: "tableau",
            titre: "Les trois cas",
            entetes: ["Signe de Δ", "Solutions réelles"],
            lignes: [
              [
                "Δ > 0",
                "Deux racines distinctes : x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a)."
              ],
              [
                "Δ = 0",
                "Une racine réelle, dite double : x₀ = -b/(2a)."
              ],
              [
                "Δ < 0",
                "Aucune racine réelle."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "L'ordre des racines",
            texte: "Les formules avec -√Δ et +√Δ donnent les deux racines lorsque Δ > 0.\n\nAttention : si a est négatif, la racine écrite avec -√Δ n'est pas nécessairement la plus petite. Pour les ranger, compare les valeurs obtenues."
          },
          {
            type: "methode",
            titre: "Résoudre pas à pas",
            texte: "1. Ramène l'équation sous la forme ax² + bx + c = 0.\n2. Identifie a, b et c avec leurs signes.\n3. Calcule Δ = b² - 4ac.\n4. Selon le signe de Δ, applique la formule adaptée.\n5. Simplifie les résultats et annonce l'ensemble des solutions.\n6. Si possible, vérifie en remplaçant x par chaque solution dans l'équation de départ."
          },
          {
            type: "exemple",
            titre: "Cas Δ > 0 : deux solutions",
            texte: "Résolvons 2x² - 5x + 2 = 0.\n\nOn a a = 2, b = -5 et c = 2.\n\nΔ = (-5)² - 4 × 2 × 2 = 25 - 16 = 9.\n\nComme Δ > 0, il y a deux racines :\n\nx₁ = (5 - 3)/4 = 1/2 ;\nx₂ = (5 + 3)/4 = 2.\n\nL'ensemble des solutions est S = {1/2 ; 2}.\n\nVérification pour x = 2 : 2 × 2² - 5 × 2 + 2 = 8 - 10 + 2 = 0."
          },
          {
            type: "exemple",
            titre: "Cas Δ = 0 : une racine double",
            texte: "Résolvons x² - 6x + 9 = 0.\n\nIci a = 1, b = -6 et c = 9.\n\nΔ = (-6)² - 4 × 1 × 9 = 36 - 36 = 0.\n\nLa racine double est :\n\nx₀ = -(-6)/(2 × 1) = 3.\n\nDonc S = {3}. En effet, x² - 6x + 9 = (x - 3)²."
          },
          {
            type: "exemple",
            titre: "Cas Δ < 0 : aucune solution réelle",
            texte: "Résolvons x² + 2x + 5 = 0.\n\nΔ = 2² - 4 × 1 × 5 = 4 - 20 = -16.\n\nComme Δ < 0, l'équation n'a aucune solution dans ℝ. On écrit S = ∅.\n\nOn peut aussi remarquer que x² + 2x + 5 = (x + 1)² + 4, expression strictement positive pour tout réel x."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Si b = -5, alors b² = (-5)² = 25 et -b = 5.\n• Le dénominateur de la formule est 2a, et non 2.\n• Si Δ < 0, on ne calcule pas √Δ dans ℝ.\n• Avant de relever les coefficients, il faut avoir 0 d'un côté de l'équation."
          }
        ]
      },

      {
        id: "m1-trinome-factorisation",
        titre: "Factoriser et utiliser les racines",
        blocs: [
          {
            type: "definition",
            titre: "Que signifie factoriser ?",
            texte: "Factoriser une expression, c'est l'écrire sous forme d'un produit.\n\nPar exemple : x² - 5x + 6 = (x - 2)(x - 3).\n\nCette écriture permet de résoudre facilement l'équation : un produit est nul si et seulement si au moins l'un de ses facteurs est nul."
          },
          {
            type: "regle",
            titre: "Factorisation selon les racines",
            texte: "Pour P(x) = ax² + bx + c, avec a ≠ 0 :\n\n• Si Δ > 0 et si x₁ et x₂ sont les deux racines, alors P(x) = a(x - x₁)(x - x₂).\n\n• Si Δ = 0 et si x₀ est la racine double, alors P(x) = a(x - x₀)².\n\n• Si Δ < 0, P ne peut pas être factorisé en produit de deux expressions du premier degré à coefficients réels."
          },
          {
            type: "exemple",
            titre: "Deux racines",
            texte: "Nous avons trouvé que les racines de P(x) = 2x² - 5x + 2 sont 1/2 et 2.\n\nDonc :\n\nP(x) = 2(x - 1/2)(x - 2).\n\nOn peut aussi écrire :\n\nP(x) = (2x - 1)(x - 2).\n\nVérification par développement :\n(2x - 1)(x - 2) = 2x² - 4x - x + 2 = 2x² - 5x + 2."
          },
          {
            type: "exemple",
            titre: "Une racine double",
            texte: "Pour P(x) = -2x² + 8x - 8 :\n\na = -2, b = 8, c = -8.\n\nΔ = 8² - 4 × (-2) × (-8) = 64 - 64 = 0.\n\nLa racine double est x₀ = -8/(2 × (-2)) = 2.\n\nAinsi : P(x) = -2(x - 2)².\n\nVérification : -2(x² - 4x + 4) = -2x² + 8x - 8."
          },
          {
            type: "methode",
            titre: "Résoudre grâce à une factorisation",
            texte: "Résolvons (2x - 1)(x - 2) = 0.\n\nUn produit est nul si et seulement si l'un de ses facteurs est nul. Donc :\n\n2x - 1 = 0 ou x - 2 = 0.\n\nOn obtient x = 1/2 ou x = 2.\n\nAinsi S = {1/2 ; 2}."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier le coefficient a",
            texte: "Si les racines sont r et s, la factorisation de ax² + bx + c est a(x - r)(x - s), et pas toujours simplement (x - r)(x - s).\n\nPar exemple, 2x² - 5x + 2 = 2(x - 1/2)(x - 2). Le coefficient 2 est indispensable."
          }
        ]
      },

      {
        id: "m1-trinome-somme-produit",
        titre: "Somme et produit des racines",
        blocs: [
          {
            type: "regle",
            titre: "Relations entre racines et coefficients",
            texte: "Si ax² + bx + c possède deux racines réelles x₁ et x₂, distinctes ou confondues, alors :\n\nx₁ + x₂ = -b/a ;\nx₁x₂ = c/a.\n\nEn cas de racine double x₀, on compte cette racine deux fois : x₁ = x₂ = x₀."
          },
          {
            type: "methode",
            titre: "Pourquoi ces relations ?",
            texte: "Lorsque les racines existent, on peut écrire :\n\nax² + bx + c = a(x - x₁)(x - x₂).\n\nEn développant :\n\na(x - x₁)(x - x₂) = ax² - a(x₁ + x₂)x + ax₁x₂.\n\nEn comparant les coefficients :\n\nb = -a(x₁ + x₂), donc x₁ + x₂ = -b/a ;\nc = ax₁x₂, donc x₁x₂ = c/a."
          },
          {
            type: "exemple",
            titre: "Vérifier deux racines",
            texte: "Pour 2x² - 5x + 2, les racines trouvées sont 1/2 et 2.\n\nLeur somme vaut 1/2 + 2 = 5/2. Or -b/a = -(-5)/2 = 5/2.\n\nLeur produit vaut (1/2) × 2 = 1. Or c/a = 2/2 = 1.\n\nLes deux relations sont vérifiées."
          },
          {
            type: "exemple",
            titre: "Construire un trinôme",
            texte: "Cherchons un trinôme de coefficient dominant 1 dont les racines sont 3 et -2.\n\nOn écrit :\n\nP(x) = (x - 3)(x - (-2))\n= (x - 3)(x + 2)\n= x² - x - 6.\n\nVérification : la somme des racines vaut 1, et -b/a = -(-1)/1 = 1. Leur produit vaut -6, et c/a = -6."
          },
          {
            type: "remarque",
            titre: "Une condition à ne pas oublier",
            texte: "Les relations de somme et de produit ci-dessus concernent les racines réelles lorsqu'elles existent.\n\nPar exemple, x² + 1 = 0 n'a pas de racine réelle : on ne peut pas lui attribuer deux racines dans ℝ simplement en utilisant une somme et un produit."
          }
        ]
      },

      {
        id: "m1-trinome-parabole",
        titre: "Interpréter les racines graphiquement",
        blocs: [
          {
            type: "definition",
            titre: "La courbe d'un trinôme",
            texte: "La courbe représentative de la fonction P définie par P(x) = ax² + bx + c est une parabole.\n\nUne racine r vérifie P(r) = 0. Sur le graphique, elle correspond donc à l'abscisse d'un point où la parabole rencontre l'axe des abscisses."
          },
          {
            type: "schema",
            titre: "Trois positions possibles",
            svg: "<svg viewBox='0 0 600 225' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Trois paraboles : la première coupe l’axe des abscisses en deux points, la deuxième le touche en un point, la troisième reste au-dessus de lui'><rect width='600' height='225' fill='white'/><g stroke='#64748b' stroke-width='1.5'><line x1='15' y1='145' x2='185' y2='145'/><line x1='100' y1='25' x2='100' y2='190'/><line x1='215' y1='145' x2='385' y2='145'/><line x1='300' y1='25' x2='300' y2='190'/><line x1='415' y1='145' x2='585' y2='145'/><line x1='500' y1='25' x2='500' y2='190'/></g><path d='M 25 40 Q 100 242 175 40' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M 225 35 Q 300 255 375 35' fill='none' stroke='#16a34a' stroke-width='3'/><path d='M 425 20 Q 500 210 575 20' fill='none' stroke='#dc2626' stroke-width='3'/><circle cx='70' cy='145' r='4' fill='#2563eb'/><circle cx='130' cy='145' r='4' fill='#2563eb'/><circle cx='300' cy='145' r='4' fill='#16a34a'/><text x='100' y='210' text-anchor='middle' font-size='14' fill='#1e40af'>Δ &gt; 0 : deux racines</text><text x='300' y='210' text-anchor='middle' font-size='14' fill='#166534'>Δ = 0 : une racine double</text><text x='500' y='210' text-anchor='middle' font-size='14' fill='#991b1b'>Δ &lt; 0 : aucune racine</text><text x='178' y='138' font-size='12' fill='#475569'>x</text><text x='378' y='138' font-size='12' fill='#475569'>x</text><text x='578' y='138' font-size='12' fill='#475569'>x</text></svg>",
            legende: "Exemples de paraboles ouvertes vers le haut : deux intersections, un seul point de contact ou aucune intersection avec l'axe des abscisses. Les mêmes nombres d'intersections sont possibles pour des paraboles ouvertes vers le bas."
          },
          {
            type: "remarque",
            titre: "Lire un graphique avec prudence",
            texte: "Un graphique aide à comprendre et à estimer les racines, mais une lecture sur un dessin ne donne pas toujours leur valeur exacte.\n\nPour obtenir une valeur exacte, on utilise une factorisation ou le discriminant. Le signe de P(x), lui, sera étudié dans le chapitre suivant."
          },
          {
            type: "exemple",
            titre: "Retour au rectangle",
            texte: "Au début du chapitre, l'aire du rectangle conduisait à x² + 3x - 10 = 0.\n\nOn factorise :\n\nx² + 3x - 10 = (x + 5)(x - 2).\n\nLes solutions de l'équation sont -5 et 2. Mais x représente une longueur en mètres : x doit être strictement positif. On garde donc seulement x = 2.\n\nLa largeur vaut 2 m et la longueur vaut 5 m. Vérification : 2 × 5 = 10 m²."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque expression, indique si elle est un trinôme du second degré. Si oui, donne a, b et c dans la forme ax² + bx + c.\n\n1. 3x² - 2x + 7\n2. -x² + 5\n3. 4x - 1\n4. 2x² + x",
        correction: "1. Oui : a = 3, b = -2 et c = 7.\n\n2. Oui : a = -1, b = 0 et c = 5.\n\n3. Non : il n'y a pas de terme en x². L'expression est du premier degré.\n\n4. Oui : a = 2, b = 1 et c = 0."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère P(x) = x² - 4x + 3.\n\n1. Calcule P(1) et P(2).\n2. Parmi 1 et 2, lequel est une racine de P ? Explique.",
        correction: "1. P(1) = 1² - 4 × 1 + 3 = 0.\n\nP(2) = 2² - 4 × 2 + 3 = 4 - 8 + 3 = -1.\n\n2. 1 est une racine car P(1) = 0. En revanche, 2 n'est pas une racine car P(2) ≠ 0.\n\nCette vérification seule ne permet pas d'affirmer que 1 est l'unique racine."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ l'équation x² - 5x + 6 = 0 en utilisant le discriminant.",
        correction: "On a a = 1, b = -5 et c = 6.\n\nΔ = (-5)² - 4 × 1 × 6 = 25 - 24 = 1.\n\nComme Δ > 0, il existe deux racines :\n\nx₁ = (5 - 1)/2 = 2 ;\nx₂ = (5 + 1)/2 = 3.\n\nL'ensemble des solutions est S = {2 ; 3}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. x² + 4x + 4 = 0\n2. x² + x + 1 = 0",
        correction: "1. a = 1, b = 4, c = 4.\n\nΔ = 4² - 4 × 1 × 4 = 0. Il y a une racine double : x₀ = -4/2 = -2.\n\nDonc S = {-2}. On retrouve ce résultat avec (x + 2)² = 0.\n\n2. a = 1, b = 1, c = 1.\n\nΔ = 1² - 4 × 1 × 1 = -3 < 0. Il n'y a aucune solution réelle : S = ∅."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère P(x) = 3x² - 12x + 9.\n\n1. Détermine ses racines réelles.\n2. Factorise P(x).\n3. Vérifie les relations entre la somme et le produit des racines et les coefficients.",
        correction: "1. a = 3, b = -12, c = 9.\n\nΔ = (-12)² - 4 × 3 × 9 = 144 - 108 = 36.\n\nLes racines sont :\n\nx₁ = (12 - 6)/6 = 1 ;\nx₂ = (12 + 6)/6 = 3.\n\n2. P(x) = 3(x - 1)(x - 3).\n\n3. La somme est 1 + 3 = 4. Or -b/a = 12/3 = 4.\n\nLe produit est 1 × 3 = 3. Or c/a = 9/3 = 3. Les relations sont vérifiées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère P(x) = -x² + 2x + 3.\n\n1. Résous P(x) = 0 dans ℝ.\n2. Factorise P(x).\n3. Donne les coordonnées des points où la courbe de P rencontre l'axe des abscisses.",
        correction: "1. a = -1, b = 2, c = 3.\n\nΔ = 2² - 4 × (-1) × 3 = 4 + 12 = 16.\n\nLes racines sont :\n\n(-2 - 4)/(-2) = 3 ;\n(-2 + 4)/(-2) = -1.\n\nDonc S = {-1 ; 3}.\n\n2. P(x) = -(x + 1)(x - 3).\n\n3. Les racines sont les abscisses des points d'intersection avec l'axe des abscisses. Leurs coordonnées sont (-1 ; 0) et (3 ; 0)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a une largeur x mètres et une longueur x + 4 mètres. Son aire est de 45 m².\n\n1. Écris une équation vérifiée par x.\n2. Résous cette équation dans ℝ.\n3. Détermine les dimensions du rectangle en expliquant ton choix.\n4. Vérifie l'aire obtenue.",
        correction: "1. L'aire vaut x(x + 4). Donc :\n\nx(x + 4) = 45, soit x² + 4x - 45 = 0.\n\n2. a = 1, b = 4, c = -45.\n\nΔ = 4² - 4 × 1 × (-45) = 16 + 180 = 196.\n\nComme √196 = 14, les solutions sont :\n\nx₁ = (-4 - 14)/2 = -9 ;\nx₂ = (-4 + 14)/2 = 5.\n\n3. Une largeur est strictement positive : -9 ne convient pas. La largeur est donc 5 m et la longueur est 5 + 4 = 9 m.\n\n4. Vérification : 5 × 9 = 45 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On cherche deux nombres réels u et v dont la somme vaut 7 et le produit vaut 10.\n\n1. Montre que u et v sont solutions de l'équation x² - 7x + 10 = 0.\n2. Résous cette équation.\n3. Détermine u et v, puis vérifie la somme et le produit.\n4. Donne un trinôme de coefficient dominant 2 ayant u et v pour racines.",
        correction: "1. Comme u + v = 7 et uv = 10 :\n\n(x - u)(x - v) = x² - (u + v)x + uv = x² - 7x + 10.\n\nPour x = u ou x = v, le produit est nul : u et v sont donc solutions de x² - 7x + 10 = 0.\n\n2. Δ = (-7)² - 4 × 1 × 10 = 49 - 40 = 9.\n\nLes racines sont (7 - 3)/2 = 2 et (7 + 3)/2 = 5.\n\n3. Les deux nombres sont 2 et 5, dans l'un ou l'autre ordre. Vérification : 2 + 5 = 7 et 2 × 5 = 10.\n\n4. Un tel trinôme est :\n\n2(x - 2)(x - 5) = 2x² - 14x + 20."
      }
    ]
  }
]);
