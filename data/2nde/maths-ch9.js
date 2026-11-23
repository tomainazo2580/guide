// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 9 : fonctions affines.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-fonctions-affines",
    titre: "Chapitre 9 : Les fonctions affines",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch9-definition",
        titre: "Reconnaître une fonction affine",
        blocs: [
          {
            type: "introduction",
            titre: "Une quantité qui varie régulièrement",
            texte: "Un service peut comporter des frais fixes auxquels s'ajoute un prix pour chaque unité consommée.\n\nPar exemple, si les frais fixes sont de 2 000 Ar et que chaque unité coûte 500 Ar, le montant pour x unités est :\n\nf(x) = 500x + 2 000.\n\nCette formule est celle d'une fonction affine."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Une fonction affine est une fonction qui peut s'écrire :\n\nf(x) = ax + b,\n\noù a et b sont des nombres réels fixés.\n\nLorsqu'aucune restriction n'est imposée, elle est définie sur ℝ.\n\nLe nombre a est appelé coefficient directeur et b ordonnée à l'origine."
          },
          {
            type: "exemple",
            titre: "Identifier a et b",
            texte: "• f(x) = 3x - 2 : a = 3 et b = -2.\n• g(x) = -5x + 4 : a = -5 et b = 4.\n• h(x) = x + 7 : a = 1 et b = 7.\n• k(x) = -x : a = -1 et b = 0."
          },
          {
            type: "definition",
            titre: "Deux cas particuliers",
            texte: "Si b = 0, la fonction f(x) = ax est appelée fonction linéaire. Sa représentation graphique passe par l'origine du repère.\n\nSi a = 0, la fonction f(x) = b est constante. Sa représentation graphique est une droite horizontale.\n\nUne fonction linéaire et une fonction constante sont des cas particuliers de fonctions affines."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les expressions",
            texte: "f(x) = x + 4 est affine.\n\nf(x) = 2x² + 4 n'est pas affine : le terme en x² ne disparaît pas.\n\nIl faut simplifier une expression avant de conclure. Par exemple, x² - x² + 3x + 1 = 3x + 1 est affine."
          }
        ]
      },

      {
        id: "m2-ch9-coefficient",
        titre: "Coefficient directeur et taux de variation",
        blocs: [
          {
            type: "definition",
            titre: "Variation de l'image",
            texte: "Pour f(x) = ax + b et pour deux réels u et v :\n\nf(v) - f(u) = a(v - u).\n\nAinsi, lorsque x varie de v - u, son image varie de a(v - u)."
          },
          {
            type: "regle",
            titre: "Calculer le coefficient directeur",
            texte: "Si u ≠ v, le coefficient directeur est :\n\na = [f(v) - f(u)]/(v - u).\n\nCe quotient est le taux de variation de la fonction entre u et v. Pour une fonction affine, il est le même pour tous les couples de nombres distincts."
          },
          {
            type: "exemple",
            titre: "À partir de deux images",
            texte: "Une fonction affine vérifie f(1) = 3 et f(3) = 7.\n\nSon coefficient directeur vaut :\n\na = (7 - 3)/(3 - 1) = 4/2 = 2.\n\nDonc f(x) = 2x + b.\n\nComme f(1) = 3, on obtient 2 + b = 3, soit b = 1.\n\nLa fonction est donc f(x) = 2x + 1."
          },
          {
            type: "remarque",
            titre: "Garder le même ordre",
            texte: "Si l'on calcule le taux de variation avec deux points A(xA ; yA) et B(xB ; yB), on peut écrire :\n\n a = (yB - yA)/(xB - xA).\n\nIl faut utiliser le même ordre au numérateur et au dénominateur. On peut aussi écrire (yA - yB)/(xA - xB).\n\nLes deux abscisses doivent être distinctes."
          }
        ]
      },

      {
        id: "m2-ch9-droite",
        titre: "Représenter une fonction affine",
        blocs: [
          {
            type: "definition",
            titre: "Une droite",
            texte: "La représentation graphique de f(x) = ax + b sur ℝ est une droite d'équation y = ax + b.\n\nElle coupe l'axe des ordonnées au point de coordonnées (0 ; b), car f(0) = b."
          },
          {
            type: "methode",
            titre: "Tracer à partir de deux points",
            texte: "Pour tracer la représentation de f(x) = 2x + 1 :\n\n1. Calcule f(0) = 1 : le point A(0 ; 1) appartient à la droite.\n2. Calcule f(1) = 3 : le point B(1 ; 3) appartient à la droite.\n3. Place A et B dans le repère.\n4. Trace la droite passant par ces deux points distincts.\n\nDeux points distincts suffisent pour déterminer une droite."
          },
          {
            type: "schema",
            titre: "La droite de f(x) = 2x + 1",
            svg: "<svg viewBox='0 0 360 240' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite y égal deux x plus un, passant par zéro un et un trois'><rect x='5' y='5' width='350' height='230' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='25' y1='190' x2='335' y2='190' stroke='#334155' stroke-width='2'/><line x1='100' y1='220' x2='100' y2='20' stroke='#334155' stroke-width='2'/><path d='M335 190 l-8 -4 M335 190 l-8 4 M100 20 l-4 8 M100 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><line x1='70' y1='220' x2='170' y2='20' stroke='#2563eb' stroke-width='3'/><circle cx='100' cy='160' r='5' fill='#dc2626'/><circle cx='130' cy='100' r='5' fill='#dc2626'/><path d='M100 160 L130 160 L130 100' fill='none' stroke='#64748b' stroke-width='2' stroke-dasharray='4 4'/><text x='53' y='157' font-size='13' fill='#b91c1c'>A(0 ; 1)</text><text x='140' y='96' font-size='13' fill='#b91c1c'>B(1 ; 3)</text><text x='113' y='177' font-size='12' fill='#334155'>+1</text><text x='137' y='135' font-size='12' fill='#334155'>+2</text><text x='86' y='207' font-size='13' fill='#334155'>0</text><text x='319' y='210' font-size='14' fill='#334155'>x</text><text x='110' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La droite passe par A(0 ; 1) et B(1 ; 3). Quand x augmente de 1, y augmente de 2 : le coefficient directeur vaut 2."
          },
          {
            type: "remarque",
            titre: "Repère et échelles",
            texte: "Sur un graphique, lis bien les unités indiquées sur chaque axe. Les échelles horizontale et verticale ne sont pas obligatoirement les mêmes.\n\nUne lecture graphique peut être approximative ; un calcul permet de vérifier une valeur exacte."
          }
        ]
      },

      {
        id: "m2-ch9-variations",
        titre: "Variations d'une fonction affine",
        blocs: [
          {
            type: "regle",
            titre: "Le rôle du coefficient a",
            texte: "Pour f(x) = ax + b sur ℝ :\n\n• si a > 0, f est strictement croissante ;\n• si a < 0, f est strictement décroissante ;\n• si a = 0, f est constante."
          },
          {
            type: "methode",
            titre: "Justifier par le calcul",
            texte: "Soient u et v deux réels tels que u < v. Alors v - u > 0 et :\n\nf(v) - f(u) = a(v - u).\n\nSi a > 0, cette différence est positive : f(v) > f(u).\n\nSi a < 0, elle est négative : f(v) < f(u).\n\nSi a = 0, la différence est nulle : f(v) = f(u)."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "• f(x) = 4x - 7 est strictement croissante car 4 > 0.\n• g(x) = -2x + 5 est strictement décroissante car -2 < 0.\n• h(x) = 3 est constante car son coefficient directeur est 0."
          },
          {
            type: "methode",
            titre: "Minimum et maximum sur un intervalle",
            texte: "Sur un intervalle fermé [p ; q] :\n\n• si f est croissante, son minimum est f(p) et son maximum est f(q) ;\n• si f est décroissante, son minimum est f(q) et son maximum est f(p).\n\nExemple : f(x) = -2x + 5 sur [0 ; 3] est décroissante. Son maximum est f(0) = 5 et son minimum est f(3) = -1."
          }
        ]
      },

      {
        id: "m2-ch9-signe",
        titre: "Zéro, signe et inéquations",
        blocs: [
          {
            type: "methode",
            titre: "Chercher le zéro",
            texte: "Un zéro de f est une valeur de x pour laquelle f(x) = 0.\n\nSi f(x) = ax + b avec a ≠ 0 :\n\nax + b = 0 équivaut à x = -b/a.\n\nExemple : pour f(x) = 2x - 6, le zéro est x = 6/2 = 3."
          },
          {
            type: "regle",
            titre: "Signe lorsque a est non nul",
            texte: "Soit r = -b/a le zéro de f(x) = ax + b.\n\n• Si a > 0 : f(x) < 0 pour x < r et f(x) > 0 pour x > r.\n• Si a < 0 : f(x) > 0 pour x < r et f(x) < 0 pour x > r.\n• Dans les deux cas, f(r) = 0.\n\nOn peut aussi écrire f(x) = a(x - r) pour comprendre cette règle."
          },
          {
            type: "tableau",
            titre: "Exemple : f(x) = -2x + 6",
            entetes: ["Valeurs de x", "x < 3", "x = 3", "x > 3"],
            lignes: [
              ["Signe de f(x)", "+", "0", "−"]
            ]
          },
          {
            type: "methode",
            titre: "Résoudre une inéquation",
            texte: "Résolvons -2x + 6 ≥ 0.\n\n-2x ≥ -6.\n\nEn divisant par -2, on inverse le sens de l'inégalité :\n\nx ≤ 3.\n\nL'ensemble des solutions est ]-∞ ; 3]. La borne 3 est incluse car l'inégalité est large."
          },
          {
            type: "remarque",
            titre: "Cas d'une fonction constante",
            texte: "Si a = 0, f(x) = b.\n\n• Si b = 0, tous les réels sont des zéros.\n• Si b ≠ 0, la fonction n'a aucun zéro.\n\nSon signe est toujours celui de b lorsque b ≠ 0. On ne peut pas utiliser la formule -b/a avec a = 0."
          }
        ]
      },

      {
        id: "m2-ch9-intersection",
        titre: "Comparer deux fonctions affines",
        blocs: [
          {
            type: "methode",
            titre: "Chercher une intersection",
            texte: "Les points communs aux courbes de f et g ont une abscisse x vérifiant f(x) = g(x).\n\nOn résout cette équation, puis on calcule l'ordonnée commune.\n\nExemple : f(x) = 2x + 1 et g(x) = -x + 7.\n\n2x + 1 = -x + 7 donne 3x = 6, donc x = 2.\n\nL'ordonnée vaut f(2) = 5. Les droites se coupent en M(2 ; 5)."
          },
          {
            type: "regle",
            titre: "Comparer les coefficients directeurs",
            texte: "Pour deux droites d'équations y = ax + b et y = a'x + b' :\n\n• si a ≠ a', elles sont sécantes ;\n• si a = a' et b ≠ b', elles sont parallèles et distinctes ;\n• si a = a' et b = b', elles sont confondues."
          },
          {
            type: "methode",
            titre: "Déterminer quand une fonction dépasse l'autre",
            texte: "Pour savoir quand f(x) ≥ g(x), on résout l'inéquation f(x) - g(x) ≥ 0.\n\nAvec f(x) = 2x + 1 et g(x) = -x + 7 :\n\nf(x) ≥ g(x) équivaut à 3x - 6 ≥ 0, donc à x ≥ 2.\n\nGraphiquement, la droite de f est au-dessus de celle de g pour x > 2 ; les deux droites se rencontrent pour x = 2."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque fonction affine, indique son coefficient directeur et son ordonnée à l'origine :\n\n1. f(x) = 4x - 3\n2. g(x) = -x + 2\n3. h(x) = 7",
        correction: "1. Pour f : a = 4 et b = -3.\n\n2. Pour g : a = -1 et b = 2.\n\n3. h(x) = 0x + 7, donc a = 0 et b = 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = 3x + 2 sur ℝ.\n\n1. Calcule f(0) et f(2).\n2. Donne deux points distincts de sa représentation graphique.\n3. La fonction est-elle croissante ou décroissante ?",
        correction: "1. f(0) = 2 et f(2) = 3 × 2 + 2 = 8.\n\n2. Les points (0 ; 2) et (2 ; 8) appartiennent à la droite.\n\n3. Le coefficient directeur 3 est positif : f est strictement croissante sur ℝ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère f(x) = -2x + 6.\n\n1. Détermine le zéro de f.\n2. Étudie son signe.\n3. Résous f(x) ≥ 0.",
        correction: "1. -2x + 6 = 0 donne -2x = -6, donc x = 3.\n\n2. Le coefficient directeur est négatif. f(x) > 0 pour x < 3, f(3) = 0 et f(x) < 0 pour x > 3.\n\n3. On inclut le zéro puisque l'inégalité est large : S = ]-∞ ; 3]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une fonction affine f vérifie f(0) = -1 et f(2) = 5.\n\n1. Calcule son coefficient directeur.\n2. Détermine son expression.",
        correction: "1. a = [f(2) - f(0)]/(2 - 0) = [5 - (-1)]/2 = 3.\n\n2. Comme f(0) = b = -1, on obtient f(x) = 3x - 1.\n\nVérification : f(2) = 6 - 1 = 5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fonction affine f vérifie f(-1) = 5 et f(2) = -1.\n\n1. Détermine son expression.\n2. Précise ses variations.\n3. Calcule son zéro.",
        correction: "1. Le coefficient directeur est a = (-1 - 5)/(2 - (-1)) = -6/3 = -2.\n\nDonc f(x) = -2x + b. Comme f(2) = -1, on a -4 + b = -1, d'où b = 3.\n\nAinsi f(x) = -2x + 3.\n\n2. Son coefficient directeur est négatif : f est strictement décroissante sur ℝ.\n\n3. -2x + 3 = 0 donne x = 3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient f(x) = 3x - 1 et g(x) = -x + 7.\n\n1. Détermine le point d'intersection de leurs droites.\n2. Résous f(x) > g(x).",
        correction: "1. On résout 3x - 1 = -x + 7. Donc 4x = 8 et x = 2.\n\nL'ordonnée commune est f(2) = 3 × 2 - 1 = 5. Le point d'intersection est M(2 ; 5).\n\n2. 3x - 1 > -x + 7 équivaut à 4x > 8, puis à x > 2.\n\nL'ensemble des solutions est ]2 ; +∞[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On étudie f(x) = -3x + 4 sur [-2 ; 5].\n\n1. Justifie son sens de variation.\n2. Détermine son minimum et son maximum sur cet intervalle.\n3. Encadre f(x) pour x ∈ [-2 ; 5].",
        correction: "1. Le coefficient directeur -3 est négatif : f est strictement décroissante.\n\n2. Son maximum est atteint à l'extrémité gauche : f(-2) = -3 × (-2) + 4 = 10.\n\nSon minimum est atteint à l'extrémité droite : f(5) = -15 + 4 = -11.\n\n3. Pour tout x ∈ [-2 ; 5], -11 ≤ f(x) ≤ 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les droites d'équations :\n\nD₁ : y = 2x + 1\nD₂ : y = 2x - 3\nD₃ : y = -x + 4.\n\n1. Compare les positions de D₁ et D₂.\n2. Détermine le point d'intersection de D₁ et D₃.",
        correction: "1. D₁ et D₂ ont le même coefficient directeur 2, mais des ordonnées à l'origine différentes. Elles sont parallèles et distinctes.\n\n2. On résout 2x + 1 = -x + 4. Donc 3x = 3 et x = 1.\n\nPour x = 1, y = 2 × 1 + 1 = 3. Leur point d'intersection est (1 ; 3)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux formules de transport fictives sont proposées pour un trajet de x kilomètres, avec x ≥ 0.\n\n• Formule A : 2 000 Ar de frais fixes puis 600 Ar par kilomètre.\n• Formule B : 3 500 Ar de frais fixes puis 300 Ar par kilomètre.\n\n1. Exprime les prix A(x) et B(x).\n2. Pour quelle distance les prix sont-ils égaux ?\n3. Détermine la formule la moins chère avant et après cette distance.\n4. Compare les prix pour 8 km.",
        correction: "1. A(x) = 600x + 2 000 et B(x) = 300x + 3 500, pour x ≥ 0.\n\n2. A(x) = B(x) équivaut à 600x + 2 000 = 300x + 3 500. Donc 300x = 1 500 et x = 5.\n\n3. A(x) - B(x) = 300x - 1 500 = 300(x - 5).\n\nPour 0 ≤ x < 5, cette différence est négative : A est moins chère. À 5 km, les prix sont égaux. Pour x > 5, la différence est positive : B est moins chère.\n\n4. A(8) = 6 800 Ar et B(8) = 5 900 Ar. La formule B coûte 900 Ar de moins."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une droite D représente une fonction affine f et passe par A(-2 ; 7) et B(4 ; -5).\n\n1. Détermine f(x).\n2. Trouve son point d'intersection avec l'axe des ordonnées et celui avec l'axe des abscisses.\n3. Détermine le minimum et le maximum de f sur [-2 ; 4].\n4. Résous f(x) ≥ 1 sur [-2 ; 4].",
        correction: "1. Le coefficient directeur vaut a = (-5 - 7)/(4 - (-2)) = -12/6 = -2.\n\nOn écrit f(x) = -2x + b. Comme A appartient à D : 7 = -2 × (-2) + b, donc b = 3.\n\nAinsi f(x) = -2x + 3.\n\n2. Sur l'axe des ordonnées, x = 0 : le point est (0 ; 3).\n\nSur l'axe des abscisses, y = 0. L'équation -2x + 3 = 0 donne x = 3/2. Le point est (3/2 ; 0).\n\n3. f est strictement décroissante. Sur [-2 ; 4], son maximum est f(-2) = 7 et son minimum est f(4) = -5.\n\n4. -2x + 3 ≥ 1 équivaut à -2x ≥ -2, puis à x ≤ 1 : le sens change lorsqu'on divise par -2.\n\nOn conserve les solutions dans [-2 ; 4]. L'ensemble demandé est donc [-2 ; 1]."
      }
    ]
  }
]);
