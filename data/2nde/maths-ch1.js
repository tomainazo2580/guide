// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 1 : les nombres réels et les intervalles.
// Inspiré de la répartition annuelle ministérielle,
// avec des explications et exercices complémentaires Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-nombres-reels-intervalles",
    titre: "Chapitre 1 : Les nombres réels et les intervalles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch1-ensembles",
        titre: "Les ensembles de nombres",
        blocs: [
          {
            type: "introduction",
            titre: "De la 3e à la Seconde",
            texte: "Tu connais déjà les entiers, les fractions et les racines carrées. En Seconde, nous allons organiser ces nombres dans des ensembles et utiliser la droite réelle pour les comparer.\n\nCe chapitre reprend les bases nécessaires avant de présenter les intervalles et les opérations sur ceux-ci."
          },
          {
            type: "definition",
            titre: "Les entiers naturels : ℕ",
            texte: "L'ensemble ℕ contient les entiers naturels :\n\nℕ = {0 ; 1 ; 2 ; 3 ; …}\n\nExemples : 0, 8 et 1 025 appartiennent à ℕ.\n\nOn écrit 8 ∈ ℕ et -3 ∉ ℕ.\n\nLe symbole ∈ signifie « appartient à » ; ∉ signifie « n'appartient pas à »."
          },
          {
            type: "definition",
            titre: "Les entiers relatifs : ℤ",
            texte: "L'ensemble ℤ contient les entiers naturels et les entiers négatifs :\n\nℤ = {… ; -3 ; -2 ; -1 ; 0 ; 1 ; 2 ; 3 ; …}\n\nPar exemple : -5 ∈ ℤ et 2,5 ∉ ℤ.\n\nTout entier naturel est aussi un entier relatif. On écrit : ℕ ⊂ ℤ.\n\nLe symbole ⊂ signifie ici « est inclus dans » : chaque élément de ℕ appartient aussi à ℤ."
          },
          {
            type: "definition",
            titre: "Les nombres décimaux : D",
            texte: "Un nombre décimal peut s'écrire sous la forme a/10ⁿ, où a est un entier relatif et n un entier naturel.\n\nIl possède une écriture décimale finie.\n\nExemples :\n• 2,75 = 275/100 ;\n• -0,4 = -4/10 ;\n• 7 = 7/1 = 7/10⁰.\n\nTout entier relatif est décimal : ℤ ⊂ D.\n\nAttention : 1/3 n'est pas décimal, même si on peut l'approcher par 0,33."
          },
          {
            type: "definition",
            titre: "Les nombres rationnels : ℚ",
            texte: "Un nombre rationnel peut s'écrire a/b, avec a et b entiers relatifs et b ≠ 0.\n\nExemples : 2/3, -7/4 et 5 sont rationnels. En effet, 5 = 5/1.\n\nTout décimal est rationnel, donc D ⊂ ℚ.\n\nL'écriture décimale d'un rationnel est finie ou devient périodique : à partir d'un certain rang, un groupe de chiffres se répète.\n\nExemples : 3/4 = 0,75 et 1/6 = 0,1666…"
          },
          {
            type: "definition",
            titre: "Irrationnels et réels",
            texte: "Un nombre irrationnel est un nombre réel qui ne peut pas s'écrire comme quotient de deux entiers.\n\nSon écriture décimale est infinie et ne devient pas périodique.\n\nExemples : √2 et π sont irrationnels.\n\nL'ensemble ℝ des nombres réels comprend tous les rationnels et tous les irrationnels. Un réel est soit rationnel, soit irrationnel, mais pas les deux."
          },
          {
            type: "schema",
            titre: "Les ensembles emboîtés",
            svg: "<svg viewBox='0 0 350 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Les ensembles naturels, entiers, décimaux et rationnels sont inclus les uns dans les autres et dans les réels'><rect x='5' y='5' width='340' height='220' rx='10' fill='#f1f5f9' stroke='#475569'/><text x='17' y='26' font-size='15' fill='#334155'>ℝ : réels</text><text x='240' y='26' font-size='13' fill='#334155'>√2, π</text><rect x='22' y='38' width='305' height='175' rx='10' fill='#ede9fe' stroke='#7c3aed'/><text x='34' y='58' font-size='15' fill='#5b21b6'>ℚ : rationnels</text><text x='250' y='58' font-size='13' fill='#5b21b6'>1/3</text><rect x='40' y='70' width='270' height='130' rx='10' fill='#dbeafe' stroke='#2563eb'/><text x='52' y='90' font-size='15' fill='#1e40af'>D : décimaux</text><text x='250' y='90' font-size='13' fill='#1e40af'>2,5</text><rect x='58' y='102' width='234' height='85' rx='10' fill='#dcfce7' stroke='#16a34a'/><text x='70' y='122' font-size='15' fill='#166534'>ℤ : entiers relatifs</text><text x='245' y='122' font-size='13' fill='#166534'>-3</text><rect x='78' y='135' width='195' height='39' rx='8' fill='#fef3c7' stroke='#d97706'/><text x='90' y='160' font-size='15' fill='#92400e'>ℕ : naturels</text><text x='240' y='160' font-size='13' fill='#92400e'>5</text></svg>",
            legende: "ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ. Les exemples √2 et π sont dans ℝ mais hors de ℚ."
          },
          {
            type: "methode",
            titre: "Chercher le plus petit ensemble",
            texte: "Simplifie d'abord le nombre, puis cherche le premier ensemble qui le contient dans la liste ℕ, ℤ, D, ℚ, ℝ.\n\n• 12/4 = 3 : le plus petit est ℕ.\n• -7 : le plus petit est ℤ.\n• 3/8 = 0,375 : le plus petit est D.\n• 2/3 = 0,666… : le plus petit est ℚ.\n• √2 est irrationnel : parmi ces ensembles, le plus petit est ℝ.\n\nUn nombre appartient aussi à tous les ensembles qui contiennent ce plus petit ensemble."
          },
          {
            type: "remarque",
            titre: "Ne juge pas seulement l'écriture",
            texte: "Une fraction n'est pas forcément non décimale : 6/4 = 1,5 est décimal.\n\nUne racine n'est pas forcément irrationnelle : √49 = 7 est naturel.\n\nEnfin, √2 ≈ 1,41 ne signifie pas √2 = 1,41. Le nombre exact √2 est irrationnel, alors que son approximation 1,41 est décimale."
          }
        ]
      },

      {
        id: "m2-ch1-ecritures",
        titre: "Écritures et calculs avec les réels",
        blocs: [
          {
            type: "definition",
            titre: "Valeur exacte et valeur approchée",
            texte: "Une valeur exacte désigne le nombre sans approximation : 1/3, √2 et π sont des écritures exactes.\n\nUne valeur approchée donne un nombre voisin :\n\n1/3 ≈ 0,333 ; √2 ≈ 1,414 ; π ≈ 3,14.\n\nLe signe = exprime une égalité exacte ; le signe ≈ indique une approximation."
          },
          {
            type: "methode",
            titre: "Reconnaître une fraction décimale",
            texte: "Pour savoir si une fraction est décimale, simplifie-la d'abord jusqu'à obtenir une fraction irréductible.\n\nSon quotient est décimal si et seulement si son dénominateur positif ne possède pas de facteur premier autre que 2 ou 5.\n\nExemples :\n• 21/60 = 7/20 et 20 = 2² × 5 : 7/20 = 0,35 est décimal.\n• 14/45 est irréductible et 45 = 3² × 5 : il n'est pas décimal.\n• 12/18 = 2/3 : le facteur 3 reste au dénominateur, donc ce n'est pas un décimal."
          },
          {
            type: "rappel",
            titre: "Calculer avec des fractions",
            texte: "Les dénominateurs doivent être non nuls.\n\n• Addition : a/b + c/d = (ad + bc)/(bd).\n• Multiplication : (a/b) × (c/d) = ac/bd.\n• Division : (a/b) ÷ (c/d) = (a/b) × (d/c), à condition que c ≠ 0.\n\nExemples :\n2/3 + 1/4 = 8/12 + 3/12 = 11/12.\n\n(-3/5) × (10/9) = -30/45 = -2/3.\n\n2/3 ÷ 5/4 = 2/3 × 4/5 = 8/15."
          },
          {
            type: "definition",
            titre: "Racine carrée",
            texte: "Si a ≥ 0, √a désigne l'unique nombre positif ou nul dont le carré vaut a.\n\nAinsi, √25 = 5 et √0 = 0.\n\nAttention : l'équation x² = 25 a deux solutions, -5 et 5, mais √25 = 5 uniquement.\n\nDans ℝ, √(-4) n'est pas défini."
          },
          {
            type: "regle",
            titre: "Quelques règles sur les racines",
            texte: "Pour a ≥ 0 et b ≥ 0 :\n\n√(ab) = √a × √b.\n\nSi de plus b > 0 : √(a/b) = √a/√b.\n\nPour tout réel x : √(x²) est égal à x si x ≥ 0 et à -x si x < 0.\n\nExemples :\n√50 = √(25 × 2) = 5√2.\n√((-3)²) = √9 = 3, et non -3."
          },
          {
            type: "remarque",
            titre: "Une erreur fréquente",
            texte: "En général, √(a + b) n'est pas égal à √a + √b.\n\nPar exemple : √(9 + 16) = √25 = 5, tandis que √9 + √16 = 3 + 4 = 7."
          },
          {
            type: "regle",
            titre: "Carrés parfaits et irrationalité",
            texte: "La racine carrée d'un entier naturel est entière si cet entier est un carré parfait. Sinon, elle est irrationnelle.\n\nPar exemple, 36 = 6² donc √36 = 6 ; 7 n'est pas un carré parfait donc √7 est irrationnel.\n\nCette règle porte sur la racine carrée d'un entier naturel. Elle ne doit pas être appliquée sans précaution à une expression quelconque."
          }
        ]
      },

      {
        id: "m2-ch1-droite-ordre",
        titre: "La droite réelle et l'ordre",
        blocs: [
          {
            type: "definition",
            titre: "Représenter un réel",
            texte: "Une droite graduée est munie d'une origine O et d'une unité de longueur.\n\nÀ chaque nombre réel correspond un point unique de la droite, et à chaque point correspond un réel unique appelé son abscisse.\n\nLes nombres augmentent lorsqu'on se déplace vers la droite."
          },
          {
            type: "schema",
            titre: "Lire une droite graduée",
            svg: "<svg viewBox='0 0 360 125' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite graduée de moins deux à trois, avec les points moins un demi et racine de deux placés approximativement'><line x1='18' y1='55' x2='343' y2='55' stroke='#334155' stroke-width='2'/><path d='M343 55 L335 51 M343 55 L335 59' fill='none' stroke='#334155' stroke-width='2'/><g stroke='#334155' stroke-width='2'><line x1='35' y1='48' x2='35' y2='62'/><line x1='95' y1='48' x2='95' y2='62'/><line x1='155' y1='48' x2='155' y2='62'/><line x1='215' y1='48' x2='215' y2='62'/><line x1='275' y1='48' x2='275' y2='62'/><line x1='335' y1='48' x2='335' y2='62'/></g><g fill='#334155' font-size='14' text-anchor='middle'><text x='35' y='83'>-2</text><text x='95' y='83'>-1</text><text x='155' y='83'>0</text><text x='215' y='83'>1</text><text x='275' y='83'>2</text><text x='335' y='83'>3</text></g><circle cx='125' cy='55' r='4' fill='#dc2626'/><text x='125' y='31' text-anchor='middle' font-size='13' fill='#b91c1c'>-1/2</text><circle cx='240' cy='55' r='4' fill='#1d4ed8'/><text x='250' y='31' text-anchor='middle' font-size='13' fill='#1d4ed8'>√2 ≈ 1,41</text></svg>",
            legende: "-1/2 se situe exactement à mi-chemin entre -1 et 0. Le point de √2 est placé approximativement entre 1 et 2."
          },
          {
            type: "definition",
            titre: "Comparer deux nombres",
            texte: "Sur la droite réelle :\n\n• a < b signifie que le point d'abscisse a est strictement à gauche de celui d'abscisse b.\n• a ≤ b signifie que a est inférieur ou égal à b.\n• a > b et a ≥ b se lisent dans l'autre sens.\n\nExemples : -4 < -1 ; -1 < 0 ; 2 ≤ 2."
          },
          {
            type: "regle",
            titre: "Transformer une inégalité",
            texte: "Si a < b :\n\n• ajouter un même réel c conserve le sens : a + c < b + c ;\n• multiplier par un réel c > 0 conserve le sens : ac < bc ;\n• multiplier par un réel c < 0 inverse le sens : ac > bc.\n\nLes mêmes règles s'appliquent à ≤ et ≥.\n\nExemple : -3 < 2. En multipliant par -2, on obtient 6 > -4."
          },
          {
            type: "methode",
            titre: "Comparer des fractions",
            texte: "Si les dénominateurs sont positifs, on peut comparer les produits en croix.\n\nPour comparer 5/6 et 7/9 :\n5 × 9 = 45 et 7 × 6 = 42.\nComme 45 > 42, alors 5/6 > 7/9.\n\nAutre méthode : mettre les fractions au même dénominateur. Ici, 5/6 = 15/18 et 7/9 = 14/18."
          },
          {
            type: "remarque",
            titre: "Attention aux nombres négatifs",
            texte: "Parmi deux nombres négatifs, celui qui est le plus éloigné de zéro vers la gauche est le plus petit.\n\nAinsi -8 < -3, même si 8 > 3.\n\nOn peut le vérifier sur une droite graduée."
          }
        ]
      },

      {
        id: "m2-ch1-intervalles",
        titre: "Comprendre et écrire les intervalles",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'un intervalle ?",
            texte: "Un intervalle est un ensemble de réels qui, dès qu'il contient deux nombres, contient aussi tous les réels situés entre eux.\n\nPar exemple, les nombres x tels que 2 ≤ x ≤ 5 forment l'intervalle [2 ; 5]. Les deux bornes sont incluses."
          },
          {
            type: "tableau",
            titre: "Intervalles bornés",
            entetes: ["Écriture", "Inégalité", "Bornes"],
            lignes: [
              ["[a ; b]", "a ≤ x ≤ b", "a et b inclus"],
              ["]a ; b[", "a < x < b", "a et b exclus"],
              ["[a ; b[", "a ≤ x < b", "a inclus, b exclu"],
              ["]a ; b]", "a < x ≤ b", "a exclu, b inclus"]
            ]
          },
          {
            type: "schema",
            titre: "Une borne incluse et une borne exclue",
            svg: "<svg viewBox='0 0 350 110' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Intervalle de moins un inclus à trois exclu sur une droite graduée'><line x1='20' y1='50' x2='330' y2='50' stroke='#94a3b8' stroke-width='2'/><line x1='80' y1='50' x2='270' y2='50' stroke='#2563eb' stroke-width='5'/><circle cx='80' cy='50' r='6' fill='#2563eb'/><circle cx='270' cy='50' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><text x='80' y='80' text-anchor='middle' font-size='15' fill='#334155'>-1</text><text x='270' y='80' text-anchor='middle' font-size='15' fill='#334155'>3</text><text x='175' y='25' text-anchor='middle' font-size='15' fill='#1d4ed8'>[-1 ; 3[</text></svg>",
            legende: "Point plein : -1 est inclus. Point creux : 3 est exclu. L'intervalle correspond à -1 ≤ x < 3."
          },
          {
            type: "definition",
            titre: "Intervalles non bornés",
            texte: "Certains intervalles se prolongent sans limite :\n\n• [a ; +∞[ signifie x ≥ a.\n• ]a ; +∞[ signifie x > a.\n• ]-∞ ; b] signifie x ≤ b.\n• ]-∞ ; b[ signifie x < b.\n• ]-∞ ; +∞[ désigne ℝ.\n\nLes symboles -∞ et +∞ ne sont pas des nombres réels. Le crochet est toujours ouvert du côté de l'infini."
          },
          {
            type: "methode",
            titre: "Passer d'une inégalité à un intervalle",
            texte: "Exemple 1 : -2 < x ≤ 4.\n\n-2 est exclu et 4 est inclus. Donc x ∈ ]-2 ; 4].\n\nExemple 2 : x ≥ 3.\n\n3 est inclus et les nombres continuent vers la droite. Donc x ∈ [3 ; +∞[.\n\nExemple 3 : x < -1.\n\n-1 est exclu et les nombres continuent vers la gauche. Donc x ∈ ]-∞ ; -1[."
          },
          {
            type: "remarque",
            titre: "Appartenance ou inclusion ?",
            texte: "On écrit 2 ∈ [1 ; 3] : 2 est un élément de l'intervalle.\n\nOn écrit [1 ; 2] ⊂ [1 ; 3] : le premier intervalle est inclus dans le second.\n\nLe nombre 3 appartient à [1 ; 3], mais n'appartient pas à [1 ; 3[."
          }
        ]
      },

      {
        id: "m2-ch1-operations",
        titre: "Intersection, réunion et encadrement",
        blocs: [
          {
            type: "definition",
            titre: "Intersection",
            texte: "L'intersection de deux ensembles A et B, notée A ∩ B, contient les éléments qui appartiennent à la fois à A et à B.\n\nExemple : A = [-2 ; 3] et B = [1 ; 5[.\n\nLa partie commune va de 1 à 3. Les deux bornes sont incluses, donc A ∩ B = [1 ; 3]."
          },
          {
            type: "definition",
            titre: "Réunion",
            texte: "La réunion de A et B, notée A ∪ B, contient les éléments qui appartiennent à A ou à B, éventuellement aux deux.\n\nAvec A = [-2 ; 3] et B = [1 ; 5[, la réunion va de -2 inclus à 5 exclu :\n\nA ∪ B = [-2 ; 5[."
          },
          {
            type: "methode",
            titre: "Utiliser une droite pour les ensembles",
            texte: "1. Représente chaque intervalle sur une même droite.\n2. Pour l'intersection, conserve seulement la partie commune.\n3. Pour la réunion, conserve tous les points appartenant à au moins un des deux intervalles.\n4. Vérifie si chaque borne appartient au résultat.\n\nExemple : ]-∞ ; 2[ ∩ [2 ; 5] = ∅. Le nombre 2 est exclu du premier intervalle : aucun réel n'appartient aux deux.\n\nLe symbole ∅ désigne l'ensemble vide."
          },
          {
            type: "remarque",
            titre: "Une réunion n'est pas toujours un intervalle",
            texte: "Si A = [0 ; 1] et B = [3 ; 4], leur réunion s'écrit [0 ; 1] ∪ [3 ; 4].\n\nElle ne contient aucun nombre strictement compris entre 1 et 3 : ce n'est donc pas un seul intervalle."
          },
          {
            type: "definition",
            titre: "Encadrer un nombre",
            texte: "Encadrer un nombre x, c'est trouver une borne inférieure et une borne supérieure.\n\nPar exemple, 3 < √10 < 4, car 9 < 10 < 16 et 3² = 9, 4² = 16.\n\nOn dit que √10 est encadré par 3 et 4. Cet encadrement donne un intervalle qui contient √10 : ]3 ; 4[."
          },
          {
            type: "methode",
            titre: "Résoudre une inégalité simple",
            texte: "Résolvons -2x + 3 ≤ 7.\n\nOn soustrait 3 : -2x ≤ 4.\n\nOn divise par -2. Comme ce nombre est négatif, on inverse le sens : x ≥ -2.\n\nL'ensemble des solutions est [-2 ; +∞[.\n\nVérification : x = 0 appartient à cet ensemble et donne 3 ≤ 7, ce qui est vrai."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque nombre, indique le plus petit ensemble auquel il appartient parmi ℕ, ℤ, D, ℚ et ℝ :\n\n1. 0\n2. -6\n3. 7/4\n4. 1/3\n5. √2",
        correction: "1. 0 ∈ ℕ.\n2. -6 est entier relatif mais pas naturel : ℤ.\n3. 7/4 = 1,75 est décimal mais pas entier : D.\n4. 1/3 est rationnel et son écriture 0,333… n'est pas finie : ℚ.\n5. √2 est irrationnel : parmi les ensembles proposés, le plus petit qui le contient est ℝ."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme d'intervalle :\n\n1. -3 ≤ x ≤ 2\n2. 1 < x ≤ 5\n3. x > 4\n4. x ≤ -2",
        correction: "1. [-3 ; 2] : les deux bornes sont incluses.\n2. ]1 ; 5] : 1 est exclu et 5 est inclus.\n3. ]4 ; +∞[ : 4 est exclu.\n4. ]-∞ ; -2] : -2 est inclus."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère A = [-1 ; 4[.\n\n1. Traduis l'appartenance x ∈ A par une double inégalité.\n2. Parmi -1, 0, 4 et 3,9, quels nombres appartiennent à A ?\n3. L'intervalle [0 ; 2] est-il inclus dans A ?",
        correction: "1. x ∈ A signifie -1 ≤ x < 4.\n2. -1, 0 et 3,9 appartiennent à A. Le nombre 4 n'y appartient pas car il est exclu.\n3. Oui. Tous les nombres de [0 ; 2] vérifient -1 ≤ x < 4, donc [0 ; 2] ⊂ A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule et simplifie :\n\n1. 2/3 + 1/6\n2. (3/5) × (-10/9)\n3. √72\n4. √((-4)²)",
        correction: "1. 2/3 + 1/6 = 4/6 + 1/6 = 5/6.\n2. (3/5) × (-10/9) = -30/45 = -2/3.\n3. √72 = √(36 × 2) = 6√2.\n4. (-4)² = 16, donc √((-4)²) = √16 = 4. La racine carrée est positive ou nulle."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne A = ]-3 ; 2] et B = [1 ; 5[.\n\n1. Détermine A ∩ B.\n2. Détermine A ∪ B.\n3. Le nombre 2 appartient-il aux deux intervalles ? Le nombre 5 appartient-il à leur réunion ? Justifie.",
        correction: "1. La partie commune commence à 1, inclus dans les deux intervalles, et finit à 2, lui aussi inclus dans les deux. Donc A ∩ B = [1 ; 2].\n\n2. Les intervalles se recouvrent. Ensemble, ils vont de -3 exclu à 5 exclu : A ∪ B = ]-3 ; 5[.\n\n3. Oui, 2 ∈ A et 2 ∈ B. En revanche, 5 ∉ A et 5 ∉ B : il n'appartient donc pas à la réunion."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous les inégalités suivantes et écris chaque ensemble de solutions sous forme d'intervalle :\n\n1. 3x - 5 < 7\n2. -2x + 1 ≥ 5\n3. -3 ≤ 2x + 1 < 7",
        correction: "1. 3x - 5 < 7 équivaut à 3x < 12, puis à x < 4. Solution : ]-∞ ; 4[.\n\n2. -2x + 1 ≥ 5 équivaut à -2x ≥ 4. En divisant par -2, on inverse le sens : x ≤ -2. Solution : ]-∞ ; -2].\n\n3. On soustrait 1 aux trois membres : -4 ≤ 2x < 6. On divise par 2, positif : -2 ≤ x < 3. Solution : [-2 ; 3[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère A = 21/60, B = 14/45 et C = √50 - 5√2.\n\n1. Simplifie A et indique si ce nombre est décimal.\n2. Explique pourquoi B n'est pas décimal.\n3. Calcule C et donne son plus petit ensemble parmi ℕ, ℤ, D, ℚ et ℝ.",
        correction: "1. A = 21/60 = 7/20 = 35/100 = 0,35. A est décimal ; comme il n'est pas entier, son plus petit ensemble est D.\n\n2. La fraction 14/45 est irréductible et 45 = 3² × 5. Le facteur 3 reste au dénominateur : B n'est pas décimal. Il est néanmoins rationnel.\n\n3. √50 = √(25 × 2) = 5√2. Donc C = 5√2 - 5√2 = 0. Son plus petit ensemble est ℕ."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un carré a une aire de 50 m². On note c la longueur de son côté en mètres.\n\n1. Donne une écriture exacte simplifiée de c.\n2. Justifie que c est irrationnel.\n3. Encadre c entre deux entiers naturels consécutifs.\n4. On souhaite placer une longueur de c mètres sur une règle représentée par l'intervalle [0 ; 7,1]. Est-ce possible ? Justifie sans utiliser d'approximation de c.",
        correction: "1. Comme l'aire vaut c² et que c est positif, c = √50 = 5√2 m.\n\n2. 50 est un entier naturel qui n'est pas un carré parfait : sa racine carrée √50 est donc irrationnelle.\n\n3. 49 < 50 < 64, donc 7 < √50 < 8. Ainsi 7 < c < 8.\n\n4. Les nombres c et 7,1 sont positifs. Or 7,1² = 50,41 > 50 = c². Donc c < 7,1. De plus c > 0. Ainsi c ∈ [0 ; 7,1] : cette longueur peut être placée sur la règle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On cherche les réels x vérifiant simultanément :\n\n2x - 3 ≥ -5 et 4 - 3x > -2.\n\n1. Résous séparément chaque inégalité.\n2. Écris chaque ensemble de solutions sous forme d'intervalle.\n3. Détermine l'ensemble des solutions communes.\n4. Les nombres -1 et 2 sont-ils des solutions communes ? Vérifie.",
        correction: "1. Première inégalité : 2x - 3 ≥ -5 équivaut à 2x ≥ -2, donc x ≥ -1.\n\nDeuxième inégalité : 4 - 3x > -2 équivaut à -3x > -6. En divisant par -3, on inverse le sens : x < 2.\n\n2. Les ensembles respectifs sont [-1 ; +∞[ et ]-∞ ; 2[.\n\n3. Les solutions communes forment leur intersection : [-1 ; 2[.\n\n4. -1 appartient à l'intervalle. Vérification : 2(-1) - 3 = -5 ≥ -5 et 4 - 3(-1) = 7 > -2.\n\n2 n'appartient pas à l'intervalle. Dans la deuxième inégalité, 4 - 3 × 2 = -2, qui n'est pas strictement supérieur à -2."
      }
    ]
  }
]);
