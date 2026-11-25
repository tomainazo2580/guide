// ===== GUIDE - Mathématiques Première =====
// Chapitre 15 : fonctions rationnelles et asymptotes.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-fonctions-rationnelles",
    titre: "Chapitre 15 : Fonctions rationnelles et asymptotes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-rationnelles-domaine",
        titre: "Définir une fonction rationnelle",
        blocs: [
          {
            type: "introduction",
            titre: "Un quotient de polynômes",
            texte: "Une fonction comme f(x) = (x + 1)/(x - 2) associe à x un quotient. Elle ressemble à une fonction polynôme, mais une difficulté apparaît : on ne peut pas diviser par zéro.\n\nCe chapitre réunit les outils nécessaires pour étudier ce type de fonction et sa courbe."
          },
          {
            type: "definition",
            titre: "Fonction rationnelle",
            texte: "Une fonction rationnelle est définie par un quotient de deux polynômes :\n\nf(x) = P(x)/Q(x),\n\noù Q n'est pas le polynôme nul.\n\nSon domaine comprend les réels pour lesquels Q(x) ≠ 0."
          },
          {
            type: "exemple",
            titre: "Déterminer le domaine",
            texte: "Pour f(x) = (2x + 1)/(x - 3), le dénominateur s'annule en 3.\n\nDonc Df = ℝ privé de {3}, soit ]-∞ ; 3[ ∪ ]3 ; +∞[.\n\nLa courbe n'a aucun point d'abscisse 3."
          },
          {
            type: "remarque",
            titre: "Un facteur simplifié reste une valeur interdite",
            texte: "Pour g(x) = (x² - 1)/(x - 1), le domaine exclut 1.\n\nPour x ≠ 1, g(x) = x + 1. La courbe est donc la droite y = x + 1 privée du point (1 ; 2).\n\nLa simplification ne rend pas la fonction initiale définie en 1."
          }
        ]
      },

      {
        id: "m1-rationnelles-asymptotes",
        titre: "Comprendre les asymptotes",
        blocs: [
          {
            type: "definition",
            titre: "Asymptote verticale",
            texte: "Si f(x) tend vers +∞ ou -∞ lorsque x tend vers un réel a par au moins un côté, la droite x = a est une asymptote verticale à la courbe.\n\nIl faut étudier les limites : une valeur interdite ne donne pas automatiquement une asymptote verticale."
          },
          {
            type: "exemple",
            titre: "Valeur interdite et asymptote",
            texte: "Pour f(x) = 1/(x - 2) :\n\n• lorsque x → 2⁻, x - 2 tend vers 0 par valeurs négatives, donc f(x) → -∞ ;\n• lorsque x → 2⁺, x - 2 tend vers 0 par valeurs positives, donc f(x) → +∞.\n\nLa droite x = 2 est une asymptote verticale."
          },
          {
            type: "exemple",
            titre: "Valeur interdite sans asymptote",
            texte: "Pour g(x) = (x² - 1)/(x - 1), définie pour x ≠ 1, on a g(x) = x + 1 sur son domaine.\n\nLorsque x tend vers 1, g(x) tend vers 2. La droite x = 1 n'est donc pas une asymptote verticale : la courbe présente un point manquant."
          },
          {
            type: "definition",
            titre: "Asymptotes horizontale et oblique",
            texte: "Si f(x) tend vers L lorsque x tend vers +∞ ou vers -∞, la droite y = L est une asymptote horizontale dans la direction considérée.\n\nSi f(x) - (mx + p) tend vers 0 lorsque x tend vers +∞ ou vers -∞, la droite y = mx + p est une asymptote à la courbe dans cette direction. Elle est dite oblique si m ≠ 0."
          },
          {
            type: "remarque",
            titre: "La courbe peut rencontrer une asymptote",
            texte: "Une asymptote décrit un comportement près d'une valeur interdite ou à l'infini. Une courbe peut, dans certains cas, couper son asymptote horizontale ou oblique : il ne faut pas supposer que cela est toujours impossible."
          }
        ]
      },

      {
        id: "m1-rationnelles-affine",
        titre: "Étudier un quotient de deux expressions affines",
        blocs: [
          {
            type: "methode",
            titre: "Une écriture utile",
            texte: "Pour étudier une fonction de la forme (ax + b)/(cx + d), avec c ≠ 0, il est souvent utile de l'écrire :\n\nf(x) = k + r/(cx + d).\n\nOn détermine k et r en mettant au même dénominateur, puis en identifiant les coefficients."
          },
          {
            type: "exemple",
            titre: "Décomposition et limites",
            texte: "Étudions f(x) = (2x + 1)/(x - 1), définie pour x ≠ 1.\n\nComme 2x + 1 = 2(x - 1) + 3 :\n\nf(x) = 2 + 3/(x - 1).\n\nQuand x → 1⁻, f(x) → -∞ ; quand x → 1⁺, f(x) → +∞. Donc x = 1 est une asymptote verticale.\n\nQuand x → +∞ ou x → -∞, 3/(x - 1) → 0. Donc y = 2 est une asymptote horizontale dans les deux directions."
          },
          {
            type: "exemple",
            titre: "Variations et points",
            texte: "Pour f(x) = (2x + 1)/(x - 1) :\n\nf'(x) = [2(x - 1) - (2x + 1)]/(x - 1)²\n= -3/(x - 1)².\n\nLa dérivée est strictement négative pour x ≠ 1. La fonction est donc décroissante sur ]-∞ ; 1[ et sur ]1 ; +∞[.\n\nElle coupe l'axe des abscisses en (-1/2 ; 0), car 2x + 1 = 0. Elle coupe l'axe des ordonnées en (0 ; -1)."
          },
          {
            type: "schema",
            titre: "Courbe et asymptotes",
            svg: "<svg viewBox='0 0 380 280' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Schéma de la courbe de deux x plus un sur x moins un : deux branches décroissantes, asymptote verticale x égale un et asymptote horizontale y égale deux'><rect width='380' height='280' fill='white'/><g stroke='#64748b' stroke-width='1.5'><line x1='20' y1='190' x2='355' y2='190'/><line x1='110' y1='265' x2='110' y2='15'/></g><g stroke='#dc2626' stroke-width='1.5' stroke-dasharray='6 5'><line x1='150' y1='15' x2='150' y2='265'/><line x1='20' y1='110' x2='355' y2='110'/></g><path d='M 20 147 C 70 158 105 175 123 205 C 132 222 138 243 141 265' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M 159 15 C 163 40 169 61 180 78 C 200 98 250 107 355 109' fill='none' stroke='#2563eb' stroke-width='3'/><text x='154' y='205' font-size='13' fill='#b91c1c'>x = 1</text><text x='280' y='103' font-size='13' fill='#b91c1c'>y = 2</text><text x='112' y='207' font-size='13'>0</text><text x='343' y='183' font-size='13'>x</text><text x='117' y='25' font-size='13'>y</text></svg>",
            legende: "Schéma qualitatif de f(x) = (2x + 1)/(x - 1). Les pointillés rouges représentent les asymptotes. La courbe bleue est décroissante sur chacun des deux intervalles de son domaine."
          },
          {
            type: "remarque",
            titre: "Comparer la courbe à son asymptote",
            texte: "Ici, f(x) - 2 = 3/(x - 1).\n\nCette différence est négative pour x < 1 : la courbe est sous la droite y = 2. Elle est positive pour x > 1 : la courbe est au-dessus."
          }
        ]
      },

      {
        id: "m1-rationnelles-quotient-degre-deux",
        titre: "Étudier un quotient de degré 2 par degré 1",
        blocs: [
          {
            type: "methode",
            titre: "Faire apparaître une asymptote oblique",
            texte: "Pour une fonction de la forme :\n\nf(x) = (ax² + bx + c)/(dx + e), avec d ≠ 0,\n\non peut chercher une décomposition :\n\nf(x) = mx + p + r/(dx + e).\n\nOn la trouve par division de polynômes ou en multipliant par dx + e puis en identifiant les coefficients.\n\nÀ l'infini, r/(dx + e) tend vers 0. Si m ≠ 0, la droite y = mx + p est donc une asymptote oblique."
          },
          {
            type: "exemple",
            titre: "Décomposition",
            texte: "Soit f(x) = (x² + 1)/(x - 1), définie pour x ≠ 1.\n\nOn remarque que :\n\nx² + 1 = (x - 1)(x + 1) + 2.\n\nDonc :\n\nf(x) = x + 1 + 2/(x - 1).\n\nComme 2/(x - 1) tend vers 0 en +∞ et en -∞, la droite y = x + 1 est une asymptote oblique dans les deux directions."
          },
          {
            type: "exemple",
            titre: "Asymptote verticale et position relative",
            texte: "Pour la même fonction :\n\nf(x) = x + 1 + 2/(x - 1).\n\nQuand x → 1⁻, f(x) → -∞ ; quand x → 1⁺, f(x) → +∞. La droite x = 1 est donc une asymptote verticale.\n\nDe plus, f(x) - (x + 1) = 2/(x - 1). La courbe est sous l'asymptote oblique si x < 1, et au-dessus si x > 1."
          },
          {
            type: "remarque",
            titre: "Comparer avec une différence",
            texte: "Pour comparer la courbe de f à une droite y = mx + p, étudie le signe de f(x) - (mx + p).\n\n• Différence positive : la courbe est au-dessus.\n• Différence négative : elle est en dessous.\n• Différence nulle : elles se rencontrent."
          }
        ]
      },

      {
        id: "m1-rationnelles-methode",
        titre: "Organiser une étude complète",
        blocs: [
          {
            type: "methode",
            titre: "Plan d'étude",
            texte: "Pour étudier une fonction rationnelle :\n\n1. Détermine son domaine et les valeurs interdites.\n2. Cherche si une décomposition simplifie l'étude.\n3. Calcule les limites près des valeurs interdites et à l'infini ; identifie les asymptotes éventuelles.\n4. Calcule la dérivée, puis étudie son signe sur chaque intervalle du domaine.\n5. Déduis les variations et calcule les valeurs utiles.\n6. Cherche les intersections avec les axes ou avec une autre courbe.\n7. Trace la courbe en respectant les limites, les variations et les asymptotes."
          },
          {
            type: "exemple",
            titre: "Résoudre une équation graphiquement",
            texte: "Pour résoudre f(x) = k, on cherche les points communs entre la courbe de f et la droite horizontale y = k.\n\nPar exemple, pour f(x) = (2x + 1)/(x - 1), résoudre f(x) = 0 revient à résoudre 2x + 1 = 0, avec x ≠ 1.\n\nOn obtient x = -1/2. Le point correspondant est (-1/2 ; 0).\n\nUne lecture graphique peut donner une approximation ; le calcul permet ici d'obtenir la valeur exacte."
          },
          {
            type: "remarque",
            titre: "Signe et domaine",
            texte: "Pour étudier le signe d'un quotient, on étudie les signes du numérateur et du dénominateur.\n\nLe quotient est nul lorsque son numérateur est nul et son dénominateur non nul. Une valeur qui annule le dénominateur reste exclue, même si le numérateur s'y annule aussi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Détermine le domaine de définition de chacune des fonctions :\n\n1. f(x) = (x + 2)/(x - 4)\n2. g(x) = 1/(2x + 6)",
        correction: "1. Il faut x - 4 ≠ 0, donc x ≠ 4. Df = ℝ privé de {4}.\n\n2. Il faut 2x + 6 ≠ 0, donc x ≠ -3. Dg = ℝ privé de {-3}."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = 1/(x - 3).\n\n1. Détermine ses limites lorsque x tend vers 3 par la gauche et par la droite.\n2. Quelle droite est une asymptote verticale ?",
        correction: "1. À gauche de 3, x - 3 est négatif et tend vers 0 : f(x) tend vers -∞. À droite de 3, il est positif et tend vers 0 : f(x) tend vers +∞.\n\n2. La droite x = 3 est une asymptote verticale."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = (3x + 2)/(x + 1).\n\n1. Montre que f(x) = 3 - 1/(x + 1) sur son domaine.\n2. Détermine la limite de f en +∞ et en -∞.\n3. Donne une asymptote horizontale.",
        correction: "1. Pour x ≠ -1 :\n\n3 - 1/(x + 1) = [3(x + 1) - 1]/(x + 1) = (3x + 2)/(x + 1).\n\n2. Le terme 1/(x + 1) tend vers 0 aux deux infinis. La limite de f est donc 3 dans les deux directions.\n\n3. La droite y = 3 est une asymptote horizontale."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = (x - 2)/(x + 1).\n\n1. Donne son domaine.\n2. Résous f(x) = 0.\n3. Détermine l'intersection de sa courbe avec l'axe des ordonnées.",
        correction: "1. Df = ℝ privé de {-1}.\n\n2. Le quotient est nul lorsque x - 2 = 0 et x + 1 ≠ 0. La solution est x = 2.\n\n3. Comme 0 appartient au domaine, f(0) = -2. La courbe coupe l'axe des ordonnées en (0 ; -2)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (x + 2)/(x - 1).\n\n1. Calcule f'(x).\n2. Étudie les variations de f sur son domaine.\n3. Détermine les limites de f aux deux côtés de 1.",
        correction: "Le domaine est ℝ privé de {1}.\n\n1. f'(x) = [(x - 1) - (x + 2)]/(x - 1)² = -3/(x - 1)².\n\n2. La dérivée est strictement négative sur le domaine. f est donc décroissante sur ]-∞ ; 1[ et sur ]1 ; +∞[.\n\n3. On écrit f(x) = 1 + 3/(x - 1). Lorsque x → 1⁻, f(x) → -∞. Lorsque x → 1⁺, f(x) → +∞. La droite x = 1 est une asymptote verticale."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (x² - 4)/(x - 2).\n\n1. Donne son domaine et simplifie f sur ce domaine.\n2. Calcule sa limite en 2.\n3. La droite x = 2 est-elle une asymptote verticale ?",
        correction: "1. Le domaine est ℝ privé de {2}. Pour x ≠ 2 :\n\nf(x) = (x - 2)(x + 2)/(x - 2) = x + 2.\n\n2. La limite en 2 vaut 4.\n\n3. Non : la limite est finie. La courbe est la droite y = x + 2 privée du point (2 ; 4)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = (x² + 1)/(x - 1).\n\n1. Donne son domaine et montre que f(x) = x + 1 + 2/(x - 1).\n2. Détermine ses asymptotes verticale et oblique.\n3. Calcule f'(x), puis étudie les variations de f.\n4. Détermine la position de la courbe par rapport à son asymptote oblique.",
        correction: "1. Df = ℝ privé de {1}. Comme x² + 1 = (x - 1)(x + 1) + 2, la décomposition demandée est valable pour x ≠ 1.\n\n2. Lorsque x → 1⁻, f(x) → -∞ ; lorsque x → 1⁺, f(x) → +∞. Donc x = 1 est une asymptote verticale.\n\nÀ l'infini, f(x) - (x + 1) = 2/(x - 1) → 0. Donc y = x + 1 est une asymptote oblique aux deux infinis.\n\n3. Pour x ≠ 1 :\n\nf'(x) = 1 - 2/(x - 1)²\n= [(x - 1)² - 2]/(x - 1)².\n\nLa dérivée s'annule en 1 - √2 et 1 + √2. Son dénominateur est positif ; son numérateur est positif à l'extérieur des racines et négatif entre elles.\n\nAinsi f croît sur ]-∞ ; 1 - √2], décroît sur [1 - √2 ; 1[, décroît sur ]1 ; 1 + √2], puis croît sur [1 + √2 ; +∞[.\n\n4. f(x) - (x + 1) = 2/(x - 1). La courbe est sous la droite si x < 1 et au-dessus si x > 1."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = (2x + 1)/(x - 1).\n\n1. Détermine le domaine de f.\n2. Résous f(x) = 3 et donne le point d'intersection correspondant avec la droite y = 3.\n3. Résous f(x) ≥ 3 dans ℝ.",
        correction: "1. Le dénominateur doit être non nul : Df = ℝ privé de {1}.\n\n2. Pour x ≠ 1 :\n\n(2x + 1)/(x - 1) = 3\néquivaut à 2x + 1 = 3x - 3,\ndonc x = 4. Cette valeur est admise. Le point d'intersection est (4 ; 3).\n\n3. On étudie :\n\nf(x) - 3 = [2x + 1 - 3(x - 1)]/(x - 1)\n= (4 - x)/(x - 1).\n\nPour x < 1, le numérateur est positif et le dénominateur négatif : le quotient est négatif.\n\nPour 1 < x < 4, les deux sont positifs : le quotient est positif.\n\nEn x = 4, le quotient est nul. Pour x > 4, il est négatif.\n\nDonc S = ]1 ; 4]. La valeur 1 est exclue du domaine."
      }
    ]
  }
]);
