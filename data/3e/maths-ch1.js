// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 1 : nombres rationnels et irrationnels.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-nombres-rationnels-irrationnels",
    titre: "Chapitre 1 : Nombres rationnels et irrationnels",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-nombres-ensembles",
        titre: "Reconnaître les ensembles de nombres",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi classer les nombres ?",
            texte: "Depuis les petites classes, tu as rencontré plusieurs sortes de nombres : 5, -3, 2,5 ou encore 1/3.\n\nIls ne s'écrivent pas tous de la même façon et ne servent pas toujours aux mêmes situations. Pour mieux les étudier, on les range dans des ensembles.\n\nUn ensemble est simplement une collection d'éléments. Ici, les éléments sont des nombres."
          },
          {
            type: "definition",
            titre: "Les nombres naturels : ℕ",
            texte: "Les nombres naturels sont les nombres entiers qui servent notamment à compter :\n\nℕ = {0 ; 1 ; 2 ; 3 ; 4 ; …}\n\nLes points de suspension signifient que la liste continue sans fin.\n\nExemples : 0, 7 et 1 250 sont des nombres naturels. En revanche, -2 et 3,5 ne sont pas dans ℕ."
          },
          {
            type: "definition",
            titre: "Les nombres entiers relatifs : ℤ",
            texte: "Les entiers relatifs comprennent les nombres naturels et les entiers négatifs :\n\nℤ = {… ; -3 ; -2 ; -1 ; 0 ; 1 ; 2 ; 3 ; …}\n\nExemples : -5, 0 et 12 sont des entiers relatifs.\n\nAttention : -2,5 n'est pas un entier, car il possède une partie décimale non nulle."
          },
          {
            type: "definition",
            titre: "Les nombres décimaux : D",
            texte: "Un nombre décimal peut s'écrire avec un nombre fini de chiffres après la virgule.\n\nExemples : 2,5 ; -0,75 ; 4,125 sont décimaux.\n\nUn entier est aussi décimal : 7 peut s'écrire 7,0 et -3 peut s'écrire -3,0.\n\nOn peut aussi définir un nombre décimal comme un nombre qui peut s'écrire sous la forme a/10ⁿ, où a est un entier relatif et n un entier naturel.\n\nPar exemple : 2,5 = 25/10 et -0,75 = -75/100."
          },
          {
            type: "definition",
            titre: "Les nombres rationnels : ℚ",
            texte: "Un nombre rationnel est un nombre qui peut s'écrire sous la forme a/b, où a et b sont des entiers relatifs et où b est différent de 0.\n\nExemples : 2/3, -5/4 et 7 sont rationnels. En effet, 7 = 7/1.\n\nTout nombre décimal est rationnel : par exemple, 0,25 = 25/100 = 1/4.\n\nMais un nombre rationnel n'est pas toujours décimal. Par exemple, 1/3 = 0,333… : les 3 continuent sans fin."
          },
          {
            type: "schema",
            titre: "Des ensembles emboîtés",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Ensembles emboîtés : les naturels dans les entiers relatifs, puis dans les décimaux, les rationnels et les réels'><rect x='5' y='5' width='330' height='210' rx='12' fill='#f1f5f9' stroke='#475569'/><text x='18' y='26' font-size='15' fill='#334155'>ℝ : réels</text><rect x='25' y='38' width='290' height='162' rx='10' fill='#ede9fe' stroke='#7c3aed'/><text x='38' y='58' font-size='15' fill='#5b21b6'>ℚ : rationnels</text><rect x='45' y='70' width='250' height='115' rx='10' fill='#dbeafe' stroke='#2563eb'/><text x='58' y='90' font-size='15' fill='#1e40af'>D : décimaux</text><rect x='65' y='102' width='210' height='68' rx='10' fill='#dcfce7' stroke='#16a34a'/><text x='78' y='121' font-size='15' fill='#166534'>ℤ : entiers relatifs</text><rect x='155' y='130' width='100' height='28' rx='8' fill='#fef3c7' stroke='#d97706'/><text x='165' y='149' font-size='14' fill='#92400e'>ℕ : naturels</text></svg>",
            legende: "Chaque ensemble est contenu dans celui qui l'entoure : ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ. Les nombres réels seront présentés dans la leçon suivante."
          },
          {
            type: "methode",
            titre: "Trouver le plus petit ensemble",
            texte: "Pour classer un nombre, demande-toi dans quel ensemble de la liste ℕ, ℤ, D, ℚ il apparaît en premier.\n\nExemples :\n• 8 est naturel : son plus petit ensemble dans cette liste est ℕ.\n• -8 est entier relatif, mais pas naturel : c'est ℤ.\n• 1,5 est décimal, mais pas entier : c'est D.\n• 1/3 est rationnel, mais pas décimal : c'est ℚ.\n\nUn nombre appartient aussi à tous les ensembles qui contiennent son plus petit ensemble."
          },
          {
            type: "remarque",
            titre: "La barre de fraction ne fait pas tout",
            texte: "Une écriture avec une barre de fraction ne signifie pas forcément que le nombre est seulement rationnel.\n\nPar exemple, 8/4 = 2. Son plus petit ensemble dans notre liste est donc ℕ.\n\nIl faut regarder la valeur du nombre, pas seulement la manière dont il est écrit."
          }
        ]
      },
      {
        id: "m3-nombres-rationnels",
        titre: "Comprendre les nombres rationnels",
        blocs: [
          {
            type: "definition",
            titre: "Une fraction comme quotient",
            texte: "Dans a/b, la barre de fraction signifie « divisé par » :\n\na/b = a ÷ b, avec b ≠ 0.\n\nPar exemple, 3/4 = 3 ÷ 4 = 0,75.\n\nLe dénominateur ne peut pas être égal à 0 : la division par 0 n'est pas définie."
          },
          {
            type: "exemple",
            titre: "Des écritures différentes pour le même nombre",
            texte: "On peut écrire un même nombre de plusieurs façons :\n\n1/2 = 2/4 = 5/10 = 0,5.\n\nPour obtenir une fraction équivalente, on multiplie ou on divise son numérateur et son dénominateur par un même nombre non nul.\n\nPar exemple : 12/18 = (12 ÷ 6)/(18 ÷ 6) = 2/3."
          },
          {
            type: "methode",
            titre: "Transformer un décimal en fraction",
            texte: "Regarde combien il y a de chiffres après la virgule.\n\n• Un chiffre après la virgule : on peut utiliser 10 au dénominateur.\n• Deux chiffres : on peut utiliser 100.\n• Trois chiffres : on peut utiliser 1 000.\n\nExemple : -1,25 = -125/100.\nOn simplifie par 25 : -125/100 = -5/4.\n\nAinsi, -1,25 est bien rationnel."
          },
          {
            type: "exemple",
            titre: "Quand l'écriture décimale continue",
            texte: "Effectuons 1 ÷ 3 :\n\n1/3 = 0,3333…\n\nLes 3 se répètent sans fin. Ce nombre est rationnel parce qu'il s'écrit 1/3, mais il n'est pas décimal : son écriture décimale ne s'arrête pas.\n\nAutre exemple : 2/11 = 0,181818… Le groupe 18 se répète sans fin."
          },
          {
            type: "regle",
            titre: "Écriture décimale d'un rationnel",
            texte: "L'écriture décimale d'un nombre rationnel est :\n\n• soit finie, comme 3/4 = 0,75 ;\n• soit infinie et périodique : à partir d'un certain rang, un chiffre ou un groupe de chiffres se répète sans fin, comme 1/6 = 0,1666…\n\nDans 0,1666…, seul le chiffre 6 se répète après le premier chiffre décimal."
          },
          {
            type: "remarque",
            titre: "Ne confonds pas les deux idées",
            texte: "« Décimal » et « écrit avec une virgule » ne veulent pas dire exactement la même chose.\n\n0,5 est un nombre décimal : son écriture s'arrête.\n\n0,333… est une écriture décimale infinie du nombre 1/3. Le nombre 1/3 n'est pas un nombre décimal, même si on peut en donner une valeur approchée avec une virgule : 0,33."
          },
          {
            type: "exemple",
            titre: "À toi de vérifier",
            texte: "1. Écris 0,8 sous forme de fraction simplifiée.\n2. Le nombre -6 est-il rationnel ?\n3. Le nombre 1/3 est-il décimal ?\n\nRéponses :\n1. 0,8 = 8/10 = 4/5.\n2. Oui : -6 = -6/1.\n3. Non. Il est rationnel, mais son écriture décimale est infinie."
          }
        ]
      },
      {
        id: "m3-racines-carrees",
        titre: "Découvrir les racines carrées",
        blocs: [
          {
            type: "introduction",
            titre: "Le problème du carré",
            texte: "Un carré a une aire de 25 cm². Quelle est la longueur de son côté ?\n\nL'aire d'un carré est côté × côté. On cherche donc un nombre positif qui, multiplié par lui-même, donne 25.\n\nComme 5 × 5 = 25, le côté mesure 5 cm. On écrit : √25 = 5."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Pour un nombre a positif ou nul, √a est le nombre positif ou nul dont le carré est a.\n\nAinsi :\n• √25 = 5, car 5² = 25 ;\n• √9 = 3, car 3² = 9 ;\n• √0 = 0, car 0² = 0.\n\nLe symbole √ se lit « racine carrée de »."
          },
          {
            type: "schema",
            titre: "Pourquoi √25 = 5 ?",
            svg: "<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un carré de côté 5 centimètres et d’aire 25 centimètres carrés'><rect x='85' y='20' width='130' height='130' fill='#dbeafe' stroke='#1d4ed8' stroke-width='3'/><text x='150' y='80' text-anchor='middle' font-size='16' fill='#1e3a8a'>Aire</text><text x='150' y='105' text-anchor='middle' font-size='18' fill='#1e3a8a'>25 cm²</text><text x='150' y='174' text-anchor='middle' font-size='15' fill='#334155'>5 cm</text><text x='55' y='90' text-anchor='middle' font-size='15' fill='#334155'>5 cm</text></svg>",
            legende: "Un carré de côté 5 cm a pour aire 5 × 5 = 25 cm². Donc √25 = 5."
          },
          {
            type: "tableau",
            titre: "Quelques carrés à connaître",
            entetes: ["Nombre", "Son carré"],
            lignes: [
              ["1", "1² = 1"],
              ["2", "2² = 4"],
              ["3", "3² = 9"],
              ["4", "4² = 16"],
              ["5", "5² = 25"],
              ["6", "6² = 36"],
              ["7", "7² = 49"],
              ["8", "8² = 64"],
              ["9", "9² = 81"],
              ["10", "10² = 100"]
            ]
          },
          {
            type: "methode",
            titre: "Calculer une racine carrée exacte",
            texte: "Cherche dans ta table des carrés le nombre dont le carré est celui placé sous le symbole √.\n\nExemple : calculer √49.\n1. Je cherche quel nombre positif multiplié par lui-même donne 49.\n2. Je sais que 7 × 7 = 49.\n3. Donc √49 = 7.\n\nVérification : 7² = 49."
          },
          {
            type: "remarque",
            titre: "Attention au signe !",
            texte: "√25 désigne le nombre positif 5, et non -5.\n\nPourtant, 5² = 25 et (-5)² = 25. Ainsi, l'équation x² = 25 possède deux solutions : 5 et -5.\n\nNe confonds pas la valeur de √25, qui est 5, avec les deux solutions de x² = 25."
          },
          {
            type: "methode",
            titre: "Encadrer une racine",
            texte: "Toutes les racines ne donnent pas un entier. Pour situer √20, cherchons deux carrés connus autour de 20 :\n\n16 < 20 < 25.\nOr 16 = 4² et 25 = 5².\nDonc 4 < √20 < 5.\n\nLa calculatrice donne environ 4,47. On écrit √20 ≈ 4,47 : le signe ≈ signifie « est approximativement égal à »."
          },
          {
            type: "remarque",
            titre: "Valeur exacte et valeur approchée",
            texte: "√20 est une valeur exacte. 4,47 est une valeur approchée au centième.\n\nOn écrit donc √20 ≈ 4,47 et non √20 = 4,47.\n\nDans les nombres réels étudiés ici, on ne prend pas la racine carrée d'un nombre strictement négatif : par exemple, √(-4) n'est pas un nombre réel."
          }
        ]
      },
      {
        id: "m3-nombres-irrationnels",
        titre: "Nombres irrationnels et nombres réels",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'un irrationnel ?",
            texte: "Un nombre irrationnel est un nombre réel qui ne peut pas s'écrire sous la forme a/b, avec a et b entiers relatifs et b ≠ 0.\n\nSon écriture décimale est infinie et non périodique : aucun groupe de chiffres ne se répète indéfiniment à partir d'un certain rang."
          },
          {
            type: "exemple",
            titre: "Deux exemples importants",
            texte: "• √2 est irrationnel. Son écriture commence par 1,41421356… et continue sans devenir périodique.\n• π est irrationnel. Son écriture commence par 3,14159265…\n\nLe nombre π intervient notamment dans les calculs sur les cercles. La valeur 3,14 est une approximation de π, pas sa valeur exacte."
          },
          {
            type: "remarque",
            titre: "Toutes les racines ne sont pas irrationnelles",
            texte: "La présence du symbole √ ne suffit pas pour dire qu'un nombre est irrationnel.\n\n• √9 = 3 : c'est un entier naturel, donc aussi un rationnel.\n• √2 est irrationnel.\n\nIl faut donc examiner le nombre : ne classe pas automatiquement toutes les racines dans les irrationnels."
          },
          {
            type: "regle",
            titre: "Une règle utile avec les entiers",
            texte: "Si un entier naturel est un carré parfait, sa racine carrée est un entier.\n\nExemple : 36 = 6², donc √36 = 6.\n\nSi un entier naturel n'est pas un carré parfait, sa racine carrée est irrationnelle.\n\nExemple : 10 est entre 9 = 3² et 16 = 4². Il n'est donc pas un carré parfait : √10 est irrationnel.\n\nCette règle concerne la racine carrée d'un entier naturel."
          },
          {
            type: "definition",
            titre: "L'ensemble des nombres réels : ℝ",
            texte: "Les nombres réels regroupent les nombres rationnels et les nombres irrationnels.\n\nTout nombre réel est donc soit rationnel, soit irrationnel ; il ne peut pas être les deux à la fois.\n\nOn peut représenter les nombres réels par des points sur une droite graduée."
          },
          {
            type: "schema",
            titre: "Rationnels et irrationnels sur une droite",
            svg: "<svg viewBox='0 0 340 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite graduée montrant 0, 1, racine de 2 approximativement, 2 et 3'><line x1='25' y1='48' x2='315' y2='48' stroke='#334155' stroke-width='2'/><line x1='35' y1='40' x2='35' y2='56' stroke='#334155' stroke-width='2'/><line x1='120' y1='40' x2='120' y2='56' stroke='#334155' stroke-width='2'/><line x1='205' y1='40' x2='205' y2='56' stroke='#334155' stroke-width='2'/><line x1='290' y1='40' x2='290' y2='56' stroke='#334155' stroke-width='2'/><text x='35' y='76' text-anchor='middle' font-size='14' fill='#334155'>0</text><text x='120' y='76' text-anchor='middle' font-size='14' fill='#334155'>1</text><text x='205' y='76' text-anchor='middle' font-size='14' fill='#334155'>2</text><text x='290' y='76' text-anchor='middle' font-size='14' fill='#334155'>3</text><circle cx='155' cy='48' r='5' fill='#dc2626'/><text x='155' y='25' text-anchor='middle' font-size='14' fill='#b91c1c'>√2 ≈ 1,41</text></svg>",
            legende: "√2 est placé approximativement entre 1 et 2. Les entiers 0, 1, 2 et 3 sont rationnels ; √2 est irrationnel."
          },
          {
            type: "methode",
            titre: "Comment classer un nombre ?",
            texte: "1. Simplifie son écriture quand c'est possible.\n2. Cherche d'abord s'il est naturel, entier relatif ou décimal.\n3. Sinon, regarde s'il peut être écrit comme quotient de deux entiers, avec un dénominateur non nul : il est alors rationnel.\n4. Certains nombres connus, comme √2 et π, sont irrationnels.\n\nExemples :\n• √16 = 4 : le plus petit ensemble de notre liste est ℕ.\n• -7 : le plus petit est ℤ.\n• 3/4 = 0,75 : le plus petit est D.\n• 1/3 : le plus petit est ℚ.\n• √5 : irrationnel, donc dans ℝ mais pas dans ℚ."
          },
          {
            type: "remarque",
            titre: "Attention aux approximations",
            texte: "√2 ≈ 1,41, mais cela ne signifie pas que √2 = 1,41.\n\n1,41 est décimal et donc rationnel. √2 est irrationnel. Une approximation n'a pas nécessairement les mêmes propriétés que le nombre exact."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque nombre, indique le plus petit ensemble auquel il appartient parmi ℕ, ℤ, D et ℚ :\n\n1. 6\n2. -4\n3. 2,5\n4. 1/3",
        correction: "1. 6 est naturel : ℕ.\n2. -4 est un entier relatif négatif : ℤ. Il n'est pas dans ℕ.\n3. 2,5 est décimal mais n'est pas entier : D.\n4. 1/3 est le quotient de deux entiers. Il est rationnel, mais son écriture 0,333… ne s'arrête pas : le plus petit ensemble de la liste est ℚ."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule les valeurs exactes :\n\n1. √9\n2. √36\n3. √81\n4. √0",
        correction: "1. √9 = 3, car 3² = 9.\n2. √36 = 6, car 6² = 36.\n3. √81 = 9, car 9² = 81.\n4. √0 = 0, car 0² = 0.\n\nLa racine carrée désigne toujours un nombre positif ou nul."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris chaque nombre sous forme d'une fraction simplifiée :\n\n1. 0,6\n2. -1,25\n3. 2,04",
        correction: "1. 0,6 = 6/10 = 3/5. On a divisé le numérateur et le dénominateur par 2.\n\n2. -1,25 = -125/100 = -5/4. On a divisé le numérateur et le dénominateur par 25.\n\n3. 2,04 = 204/100 = 51/25. On a divisé le numérateur et le dénominateur par 4.\n\nCes trois nombres sont donc rationnels."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour chaque affirmation, réponds vrai ou faux et explique :\n\n1. Tout entier relatif est rationnel.\n2. Tout rationnel est décimal.\n3. √25 = -5.\n4. √2 est irrationnel.",
        correction: "1. Vrai. Un entier relatif peut être écrit sur 1 : par exemple, -4 = -4/1.\n\n2. Faux. 1/3 est rationnel, mais son écriture décimale 0,333… ne s'arrête pas : il n'est pas décimal.\n\n3. Faux. √25 = 5 : la racine carrée est positive ou nulle. Il est vrai que (-5)² = 25, mais cela ne change pas la valeur de √25.\n\n4. Vrai. √2 est un nombre irrationnel : il ne peut pas s'écrire comme quotient de deux entiers."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour chaque nombre, indique s'il est rationnel ou irrationnel. Justifie.\n\n1. √49\n2. √7\n3. 15/6\n4. π\n5. √100",
        correction: "1. √49 = 7 : c'est un entier, donc un rationnel.\n\n2. 7 n'est pas un carré parfait : √7 est irrationnel.\n\n3. 15/6 est le quotient de deux entiers avec un dénominateur non nul : il est rationnel. On peut aussi simplifier : 15/6 = 5/2 = 2,5.\n\n4. π est un nombre irrationnel connu.\n\n5. √100 = 10 : c'est un entier, donc un rationnel."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Encadre chaque racine entre deux entiers naturels consécutifs :\n\n1. √12\n2. √30\n3. √70",
        correction: "1. 9 < 12 < 16, soit 3² < 12 < 4². Donc 3 < √12 < 4.\n\n2. 25 < 30 < 36, soit 5² < 30 < 6². Donc 5 < √30 < 6.\n\n3. 64 < 70 < 81, soit 8² < 70 < 9². Donc 8 < √70 < 9.\n\nMéthode : on repère les deux carrés parfaits consécutifs entre lesquels se trouve le nombre sous la racine."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une cour carrée a une aire de 50 m². On note c la longueur de son côté, en mètres.\n\n1. Explique pourquoi c² = 50.\n2. Donne la valeur exacte de c.\n3. Encadre c entre deux entiers consécutifs.\n4. La longueur c est-elle rationnelle ou irrationnelle ?\n5. Une calculatrice donne environ 7,071 m. Donne c arrondi au centième de mètre.",
        correction: "1. L'aire d'un carré est côté × côté. Avec un côté de c mètres, son aire est c² m². Donc c² = 50.\n\n2. Une longueur est positive : c = √50 m. C'est la valeur exacte.\n\n3. 49 < 50 < 64. Comme 49 = 7² et 64 = 8², on obtient 7 < √50 < 8. Le côté mesure donc entre 7 m et 8 m.\n\n4. 50 est un entier naturel qui n'est pas un carré parfait. Donc √50 est irrationnel.\n\n5. 7,071 arrondi au centième donne 7,07. On écrit c ≈ 7,07 m.\n\nAttention : 7,07 est une approximation décimale ; la longueur exacte √50 reste irrationnelle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère les nombres suivants :\n\nA = 18/6 ; B = -9/4 ; C = 2/3 ; D = √16 ; E = √11.\n\n1. Calcule ou simplifie A, B et D.\n2. Pour A, B, C et D, donne le plus petit ensemble auquel chacun appartient parmi ℕ, ℤ, D et ℚ.\n3. E est-il rationnel ou irrationnel ? Justifie.\n4. Range A, B, C et D du plus petit au plus grand.",
        correction: "1. A = 18/6 = 3. B = -9/4 = -2,25. D = √16 = 4.\n\n2. A = 3 appartient à ℕ. B = -2,25 appartient à D et n'est pas entier. C = 2/3 appartient à ℚ et n'est pas décimal : 2/3 = 0,666… D = 4 appartient à ℕ.\n\n3. 11 n'est pas un carré parfait : √11 est irrationnel.\n\n4. B est négatif. C = 2/3 est positif et inférieur à 1. A = 3 et D = 4. Donc :\nB < C < A < D,\nc'est-à-dire -2,25 < 2/3 < 3 < 4."
      }
    ]
  }
]);
