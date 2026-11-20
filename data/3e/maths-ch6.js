// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 6 : calcul littéral et identités remarquables.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-calcul-litteral",
    titre: "Chapitre 6 : Calcul littéral et identités remarquables",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-litteral-expressions",
        titre: "Comprendre une expression littérale",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi utiliser des lettres ?",
            texte: "Une lettre peut représenter un nombre qui varie ou que l'on ne connaît pas encore.\n\nPar exemple, si un cahier coûte 2 000 Ar, le prix de x cahiers est 2 000 × x Ar. On écrit plus simplement 2 000x.\n\nAvec une seule expression, on peut calculer le prix pour 2, 3 ou 10 cahiers."
          },
          {
            type: "definition",
            titre: "Expression littérale",
            texte: "Une expression littérale est une expression de calcul contenant une ou plusieurs lettres.\n\nExemples : 3x + 2, 5a - 4 et x² + 3x.\n\nLa lettre peut prendre différentes valeurs. Pour calculer l'expression, on remplace chaque lettre par la valeur choisie."
          },
          {
            type: "regle",
            titre: "Écritures simplifiées",
            texte: "On peut supprimer le signe × entre un nombre et une lettre, ou devant une parenthèse :\n\n3 × x = 3x ;\n5 × (x + 2) = 5(x + 2).\n\nOn écrit aussi x × x = x² et x × x × x = x³.\n\nAttention : x² signifie x × x, pas 2 × x."
          },
          {
            type: "methode",
            titre: "Calculer une valeur",
            texte: "Calculons A = 2x² - 3x + 1 pour x = -2.\n\nOn remplace x par (-2) :\nA = 2 × (-2)² - 3 × (-2) + 1.\n\nOn calcule d'abord le carré : (-2)² = 4.\nA = 2 × 4 + 6 + 1 = 15.\n\nLes parenthèses autour de -2 évitent une erreur de signe."
          },
          {
            type: "remarque",
            titre: "Deux écritures à distinguer",
            texte: "(-2)² = (-2) × (-2) = 4.\n\nEn revanche, -2² signifie -(2²), donc -4.\n\nLes parenthèses indiquent si le signe moins fait partie du nombre que l'on élève au carré."
          },
          {
            type: "exemple",
            titre: "À toi de vérifier",
            texte: "Pour x = 3, calcule B = x² + 2x.\n\nB = 3² + 2 × 3 = 9 + 6 = 15."
          }
        ]
      },
      {
        id: "m3-litteral-reduire",
        titre: "Réduire une expression",
        blocs: [
          {
            type: "definition",
            titre: "Regrouper les termes semblables",
            texte: "Réduire une expression, c'est regrouper les termes de même nature.\n\nPar exemple, 3x + 2x = 5x : trois fois x plus deux fois x font cinq fois x.\n\nDe même, 4x² - x² = 3x²."
          },
          {
            type: "methode",
            titre: "Réduire étape par étape",
            texte: "Réduisons A = 3x + 5 - 2x + 4.\n\n1. On regroupe les termes en x : 3x - 2x = x.\n2. On regroupe les nombres : 5 + 4 = 9.\n\nDonc A = x + 9."
          },
          {
            type: "exemple",
            titre: "Avec plusieurs sortes de termes",
            texte: "Réduisons B = 2x² + 3x - 5 + x² - 7x + 2.\n\nTermes en x² : 2x² + x² = 3x².\nTermes en x : 3x - 7x = -4x.\nNombres : -5 + 2 = -3.\n\nDonc B = 3x² - 4x - 3."
          },
          {
            type: "remarque",
            titre: "Ce qu'on ne peut pas regrouper",
            texte: "2x et 3 ne sont pas des termes semblables : 2x + 3 ne se réduit pas davantage.\n\nDe même, x² + x ne donne pas 2x² : x² et x ne sont pas de même nature."
          },
          {
            type: "definition",
            titre: "Polynôme",
            texte: "Une expression comme 3x² - 4x + 2 est un polynôme en x : elle est formée d'une somme de termes faisant intervenir des puissances entières positives ou nulles de x.\n\nAprès réduction, le plus grand exposant de x dont le coefficient est non nul donne son degré. Par exemple, 3x² - 4x + 2 est de degré 2."
          }
        ]
      },
      {
        id: "m3-litteral-developper",
        titre: "Développer avec la distributivité",
        blocs: [
          {
            type: "introduction",
            titre: "Que signifie développer ?",
            texte: "Développer, c'est transformer un produit en une somme ou une différence.\n\nPar exemple, 3(x + 2) est un produit. Nous allons le transformer en une expression sans ces parenthèses."
          },
          {
            type: "regle",
            titre: "Distributivité simple",
            texte: "Pour tous nombres a, b et c :\n\na(b + c) = ab + ac ;\na(b - c) = ab - ac.\n\nLe facteur placé devant la parenthèse multiplie chaque terme à l'intérieur.\n\nExemple : 3(x + 2) = 3x + 6."
          },
          {
            type: "schema",
            titre: "Pourquoi 3(x + 2) = 3x + 6 ?",
            svg: "<svg viewBox='0 0 340 160' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un rectangle de hauteur 3 est partagé en deux rectangles de largeurs x et 2'><rect x='45' y='35' width='160' height='80' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><rect x='205' y='35' width='80' height='80' fill='#dcfce7' stroke='#166534' stroke-width='2'/><text x='125' y='27' text-anchor='middle' font-size='15' fill='#334155'>x</text><text x='245' y='27' text-anchor='middle' font-size='15' fill='#334155'>2</text><text x='28' y='80' text-anchor='middle' font-size='15' fill='#334155'>3</text><text x='125' y='80' text-anchor='middle' font-size='16' fill='#1e3a8a'>3x</text><text x='245' y='80' text-anchor='middle' font-size='16' fill='#166534'>6</text><text x='165' y='145' text-anchor='middle' font-size='15' fill='#334155'>Aire totale : 3(x + 2) = 3x + 6</text></svg>",
            legende: "Pour x positif, l'aire du grand rectangle est la somme des aires des deux petits rectangles. La règle algébrique reste valable pour tous les nombres x."
          },
          {
            type: "methode",
            titre: "Attention au signe négatif",
            texte: "Développons -2(x - 3).\n\nOn multiplie chaque terme par -2 :\n-2 × x = -2x ;\n-2 × (-3) = +6.\n\nDonc -2(x - 3) = -2x + 6."
          },
          {
            type: "regle",
            titre: "Double distributivité",
            texte: "Pour développer (a + b)(c + d), chaque terme de la première parenthèse multiplie chaque terme de la seconde :\n\n(a + b)(c + d) = ac + ad + bc + bd.\n\nExemple :\n(x + 2)(x + 3)\n= x × x + x × 3 + 2 × x + 2 × 3\n= x² + 3x + 2x + 6\n= x² + 5x + 6."
          },
          {
            type: "methode",
            titre: "Vérifier avec une valeur",
            texte: "Pour vérifier (x + 2)(x + 3) = x² + 5x + 6, essayons x = 1.\n\nÀ gauche : (1 + 2)(1 + 3) = 3 × 4 = 12.\nÀ droite : 1² + 5 × 1 + 6 = 12.\n\nLes résultats correspondent pour x = 1. C'est une vérification utile, mais elle ne prouve pas à elle seule que l'égalité est vraie pour toutes les valeurs de x."
          }
        ]
      },
      {
        id: "m3-litteral-factoriser",
        titre: "Factoriser avec un facteur commun",
        blocs: [
          {
            type: "definition",
            titre: "L'opération inverse du développement",
            texte: "Factoriser, c'est transformer une somme ou une différence en un produit.\n\nPar exemple, 3x + 6 = 3(x + 2).\n\nÀ gauche, on voit une somme ; à droite, un produit. Les deux expressions ont la même valeur."
          },
          {
            type: "regle",
            titre: "Mettre un facteur commun en évidence",
            texte: "La distributivité peut s'utiliser dans l'autre sens :\n\nab + ac = a(b + c).\n\nLe nombre ou l'expression a est le facteur commun aux deux termes."
          },
          {
            type: "methode",
            titre: "Trouver le facteur commun",
            texte: "Factorisons 6x + 12.\n\n1. Les deux termes contiennent le facteur 6 : 6x = 6 × x et 12 = 6 × 2.\n2. On met 6 devant la parenthèse : 6x + 12 = 6(x + 2).\n3. On vérifie en développant : 6(x + 2) = 6x + 12."
          },
          {
            type: "exemple",
            titre: "Un facteur contenant une lettre",
            texte: "Factorisons 5x² - 10x.\n\n5x² = 5x × x et -10x = 5x × (-2).\n\nDonc 5x² - 10x = 5x(x - 2).\n\nVérification : 5x × x - 5x × 2 = 5x² - 10x."
          },
          {
            type: "remarque",
            titre: "Ne pas perdre un terme",
            texte: "Dans 3x + 3, le facteur commun est 3 :\n\n3x + 3 = 3(x + 1).\n\nLe 1 est nécessaire, car 3 × 1 = 3. Écrire seulement 3x ferait disparaître le second terme."
          }
        ]
      },
      {
        id: "m3-identites-remarquables",
        titre: "Découvrir les identités remarquables",
        blocs: [
          {
            type: "introduction",
            titre: "Des égalités utiles",
            texte: "Certaines expressions apparaissent très souvent. Les identités remarquables permettent de les développer ou de les factoriser plus rapidement.\n\nUne identité est une égalité vraie pour toutes les valeurs autorisées des lettres."
          },
          {
            type: "regle",
            titre: "Carré d'une somme",
            texte: "(a + b)² = a² + 2ab + b².\n\nPourquoi ?\n(a + b)² = (a + b)(a + b).\nEn développant : a² + ab + ab + b² = a² + 2ab + b²."
          },
          {
            type: "schema",
            titre: "Les quatre parties de (a + b)²",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un carré de côté a plus b est partagé en quatre parties d’aires a carré, ab, ab et b carré'><rect x='55' y='30' width='120' height='120' fill='#dbeafe' stroke='#334155'/><rect x='175' y='30' width='60' height='120' fill='#dcfce7' stroke='#334155'/><rect x='55' y='150' width='120' height='60' fill='#dcfce7' stroke='#334155'/><rect x='175' y='150' width='60' height='60' fill='#fef3c7' stroke='#334155'/><text x='115' y='18' text-anchor='middle' font-size='14' fill='#334155'>a</text><text x='205' y='18' text-anchor='middle' font-size='14' fill='#334155'>b</text><text x='38' y='95' text-anchor='middle' font-size='14' fill='#334155'>a</text><text x='38' y='185' text-anchor='middle' font-size='14' fill='#334155'>b</text><text x='115' y='95' text-anchor='middle' font-size='17' fill='#1e3a8a'>a²</text><text x='205' y='95' text-anchor='middle' font-size='17' fill='#166534'>ab</text><text x='115' y='185' text-anchor='middle' font-size='17' fill='#166534'>ab</text><text x='205' y='185' text-anchor='middle' font-size='17' fill='#92400e'>b²</text></svg>",
            legende: "Pour a et b positifs, les quatre aires donnent a² + ab + ab + b². L'identité reste valable pour tous les nombres a et b."
          },
          {
            type: "regle",
            titre: "Carré d'une différence",
            texte: "(a - b)² = a² - 2ab + b².\n\nExemple :\n(x - 3)² = x² - 2 × x × 3 + 3²\n= x² - 6x + 9.\n\nLe dernier terme est positif : (-3) × (-3) = 9."
          },
          {
            type: "regle",
            titre: "Somme multipliée par différence",
            texte: "(a + b)(a - b) = a² - b².\n\nEn développant : a² - ab + ab - b². Les deux termes du milieu s'annulent.\n\nExemple : (x + 4)(x - 4) = x² - 16."
          },
          {
            type: "remarque",
            titre: "Le piège du terme du milieu",
            texte: "(a + b)² n'est pas égal à a² + b² : il manque 2ab.\n\nPar exemple, (2 + 3)² = 25, alors que 2² + 3² = 13.\n\nLa bonne formule donne 4 + 12 + 9 = 25."
          }
        ]
      },
      {
        id: "m3-identites-utiliser",
        titre: "Utiliser les identités dans les deux sens",
        blocs: [
          {
            type: "methode",
            titre: "Développer",
            texte: "Développons (2x + 3)².\n\nOn reconnaît (a + b)² avec a = 2x et b = 3 :\n\n(2x + 3)² = (2x)² + 2 × 2x × 3 + 3²\n= 4x² + 12x + 9.\n\nAttention : (2x)² = 4x², car on élève aussi 2 au carré."
          },
          {
            type: "methode",
            titre: "Factoriser un carré",
            texte: "Factorisons x² - 10x + 25.\n\n1. x² est le carré de x et 25 est le carré de 5.\n2. Le terme du milieu vaut -2 × x × 5 = -10x.\n3. On reconnaît a² - 2ab + b².\n\nDonc x² - 10x + 25 = (x - 5)²."
          },
          {
            type: "methode",
            titre: "Factoriser une différence de carrés",
            texte: "Factorisons 9x² - 16.\n\n9x² = (3x)² et 16 = 4².\nOn utilise a² - b² = (a + b)(a - b).\n\nDonc 9x² - 16 = (3x + 4)(3x - 4).\n\nVérification : en développant, les termes +12x et -12x s'annulent."
          },
          {
            type: "remarque",
            titre: "Choisir la bonne forme",
            texte: "La forme développée peut faciliter une réduction. La forme factorisée fait apparaître un produit et peut être utile pour résoudre certaines équations.\n\nPar exemple, x² - 9 et (x + 3)(x - 3) sont deux formes d'une même expression."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit A = 2x² + 3x - 1.\n\n1. Calcule A pour x = 2.\n2. Calcule A pour x = -1.",
        correction: "1. Pour x = 2 :\nA = 2 × 2² + 3 × 2 - 1\n= 2 × 4 + 6 - 1 = 13.\n\n2. Pour x = -1 :\nA = 2 × (-1)² + 3 × (-1) - 1\n= 2 × 1 - 3 - 1 = -2.\n\nLes parenthèses montrent que l'on élève -1 au carré."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Réduis les expressions :\n\n1. 3x + 5x\n2. 7x - 2x + 4\n3. 2x² + 3x + x² - x",
        correction: "1. 3x + 5x = 8x.\n\n2. 7x - 2x + 4 = 5x + 4.\n\n3. On regroupe les termes de même nature :\n2x² + x² = 3x² et 3x - x = 2x.\nDonc l'expression vaut 3x² + 2x."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Développe et réduis :\n\n1. 4(x + 3)\n2. -3(x - 2)\n3. 2(x + 5) - x",
        correction: "1. 4(x + 3) = 4x + 12.\n\n2. -3(x - 2) = -3x + 6 : le produit de deux nombres négatifs est positif.\n\n3. 2(x + 5) - x = 2x + 10 - x = x + 10."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Factorise en mettant un facteur commun en évidence :\n\n1. 5x + 15\n2. 4x² - 8x\n3. 7x - 7",
        correction: "1. 5x + 15 = 5(x + 3).\nVérification : 5 × x + 5 × 3 = 5x + 15.\n\n2. 4x² - 8x = 4x(x - 2).\nVérification : 4x × x - 4x × 2 = 4x² - 8x.\n\n3. 7x - 7 = 7(x - 1). Le 1 est nécessaire pour retrouver -7."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Développe et réduis :\n\n1. (x + 3)(x + 4)\n2. (x - 2)(x + 5)\n3. (2x + 1)(x - 3)",
        correction: "1. (x + 3)(x + 4)\n= x² + 4x + 3x + 12\n= x² + 7x + 12.\n\n2. (x - 2)(x + 5)\n= x² + 5x - 2x - 10\n= x² + 3x - 10.\n\n3. (2x + 1)(x - 3)\n= 2x² - 6x + x - 3\n= 2x² - 5x - 3.\n\nDans chaque cas, chaque terme de la première parenthèse multiplie chaque terme de la seconde."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Utilise une identité remarquable pour développer :\n\n1. (x + 5)²\n2. (x - 4)²\n3. (3x + 2)(3x - 2)",
        correction: "1. (x + 5)² = x² + 2 × x × 5 + 5² = x² + 10x + 25.\n\n2. (x - 4)² = x² - 2 × x × 4 + 4² = x² - 8x + 16.\n\n3. On utilise (a + b)(a - b) = a² - b² avec a = 3x et b = 2 :\n(3x + 2)(3x - 2) = (3x)² - 2² = 9x² - 4."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Factorise les expressions suivantes, puis vérifie en développant :\n\n1. x² + 8x + 16\n2. x² - 25\n3. 4x² - 12x + 9",
        correction: "1. 16 = 4² et 8x = 2 × x × 4. Donc :\nx² + 8x + 16 = (x + 4)².\nVérification : (x + 4)² = x² + 8x + 16.\n\n2. x² - 25 = x² - 5². Donc :\nx² - 25 = (x + 5)(x - 5).\nVérification : les termes +5x et -5x s'annulent.\n\n3. 4x² = (2x)², 9 = 3² et -12x = -2 × 2x × 3. Donc :\n4x² - 12x + 9 = (2x - 3)².\nVérification : (2x - 3)² = 4x² - 12x + 9."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un jardin rectangulaire mesure (x + 3) mètres de long et (x + 2) mètres de large, avec x positif.\n\n1. Écris son aire sous forme d'un produit.\n2. Développe et réduis cette expression.\n3. Calcule l'aire pour x = 4 en utilisant les deux formes.",
        correction: "1. L'aire d'un rectangle est longueur × largeur. Donc :\nA = (x + 3)(x + 2) m².\n\n2. Par double distributivité :\nA = x² + 2x + 3x + 6\nA = x² + 5x + 6.\n\n3. Pour x = 4, avec la forme produit :\nA = (4 + 3)(4 + 2) = 7 × 6 = 42 m².\n\nAvec la forme développée :\nA = 4² + 5 × 4 + 6 = 16 + 20 + 6 = 42 m².\n\nLes deux formes donnent la même aire."
      }
    ]
  }
]);
