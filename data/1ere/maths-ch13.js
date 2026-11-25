// ===== GUIDE - Mathématiques Première =====
// Chapitre 13 : règles de dérivation, variations et extrema.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-derivation-variations-extrema",
    titre: "Chapitre 13 : Dérivation : règles de calcul, variations et extrema",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-derivees-usuelles",
        titre: "Connaître les dérivées usuelles",
        blocs: [
          {
            type: "introduction",
            titre: "Calculer plus rapidement",
            texte: "Au chapitre précédent, nous avons calculé une dérivée à partir du taux de variation. Cette méthode permet de comprendre la définition, mais elle peut devenir longue.\n\nDes règles permettent de calculer directement les dérivées de nombreuses fonctions."
          },
          {
            type: "tableau",
            titre: "Dérivées usuelles",
            entetes: ["Fonction f", "Dérivée f'", "Domaine de dérivabilité"],
            lignes: [
              ["f(x) = c, constante", "f'(x) = 0", "ℝ"],
              ["f(x) = x", "f'(x) = 1", "ℝ"],
              ["f(x) = xⁿ, n entier naturel non nul", "f'(x) = nxⁿ⁻¹", "ℝ"],
              ["f(x) = 1/x", "f'(x) = -1/x²", "ℝ privé de 0"],
              ["f(x) = √x", "f'(x) = 1/(2√x)", "]0 ; +∞["]
            ]
          },
          {
            type: "exemple",
            titre: "Puissances",
            texte: "Pour f(x) = x³, on obtient f'(x) = 3x².\n\nPour g(x) = x⁴, on obtient g'(x) = 4x³.\n\nLe coefficient de la dérivée est l'exposant initial, puis l'exposant diminue de 1."
          },
          {
            type: "remarque",
            titre: "Le domaine compte",
            texte: "La fonction racine carrée est définie en 0, mais elle n'est pas dérivable en 0 au sens d'une dérivée finie.\n\nEn effet, pour h > 0, son taux de variation entre 0 et h vaut √h/h = 1/√h, qui tend vers +∞ quand h tend vers 0 par la droite."
          }
        ]
      },

      {
        id: "m1-regles-derivation",
        titre: "Dériver une somme, un produit ou un quotient",
        blocs: [
          {
            type: "regle",
            titre: "Somme et multiple",
            texte: "Si u et v sont dérivables sur un intervalle et si k est une constante réelle :\n\n(u + v)' = u' + v' ;\n(u - v)' = u' - v' ;\n(ku)' = ku'."
          },
          {
            type: "exemple",
            titre: "Dériver un polynôme",
            texte: "Soit f(x) = 3x³ - 2x² + 5x - 7.\n\nOn dérive chaque terme :\n\nf'(x) = 3 × 3x² - 2 × 2x + 5 - 0\n= 9x² - 4x + 5."
          },
          {
            type: "regle",
            titre: "Produit",
            texte: "Si u et v sont dérivables, alors :\n\n(uv)' = u'v + uv'.\n\nLa dérivée d'un produit n'est donc pas, en général, le produit des dérivées."
          },
          {
            type: "exemple",
            titre: "Un produit",
            texte: "Soit f(x) = (x² + 1)(x - 3).\n\nPosons u(x) = x² + 1 et v(x) = x - 3. Alors u'(x) = 2x et v'(x) = 1.\n\nf'(x) = 2x(x - 3) + (x² + 1)\n= 3x² - 6x + 1."
          },
          {
            type: "regle",
            titre: "Quotient",
            texte: "Si u et v sont dérivables et si v(x) ≠ 0, alors :\n\n(u/v)' = (u'v - uv')/v².\n\nLe quotient et sa dérivée sont étudiés seulement là où le dénominateur n'est pas nul."
          },
          {
            type: "exemple",
            titre: "Un quotient",
            texte: "Soit f(x) = (x + 1)/(x - 2), définie pour x ≠ 2.\n\nAvec u(x) = x + 1 et v(x) = x - 2, on a u'(x) = 1 et v'(x) = 1.\n\nDonc :\n\nf'(x) = [(x - 2) - (x + 1)]/(x - 2)²\n= -3/(x - 2)²."
          },
          {
            type: "remarque",
            titre: "Attention à l'ordre",
            texte: "Dans la formule du quotient, le numérateur est u'v - uv', et non uv' - u'v. Inverser cet ordre change le signe du résultat."
          }
        ]
      },

      {
        id: "m1-derivee-composee",
        titre: "Dériver une expression composée",
        blocs: [
          {
            type: "regle",
            titre: "Composition",
            texte: "Si u est dérivable en x et si g est dérivable en u(x), alors la composée g ∘ u est dérivable en x et :\n\n(g ∘ u)'(x) = g'(u(x)) × u'(x).\n\nOn dérive la fonction extérieure, puis on multiplie par la dérivée de l'expression intérieure."
          },
          {
            type: "exemple",
            titre: "Un carré",
            texte: "Soit f(x) = (2x + 1)².\n\nLa fonction extérieure est le carré et l'expression intérieure est u(x) = 2x + 1, de dérivée 2.\n\nDonc :\n\nf'(x) = 2(2x + 1) × 2 = 4(2x + 1).\n\nVérification : f(x) = 4x² + 4x + 1, donc f'(x) = 8x + 4, ce qui est bien le même résultat."
          },
          {
            type: "exemple",
            titre: "Une racine",
            texte: "Soit g(x) = √(3x + 1).\n\nLa fonction est définie si 3x + 1 ≥ 0, soit x ≥ -1/3.\n\nPour x > -1/3, sa dérivée est :\n\ng'(x) = 3/(2√(3x + 1)).\n\nCette formule ne s'applique pas en -1/3, où le dénominateur serait nul."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier la dérivée intérieure",
            texte: "La dérivée de (2x + 1)² n'est pas seulement 2(2x + 1) : il faut encore multiplier par la dérivée de 2x + 1, qui vaut 2."
          }
        ]
      },

      {
        id: "m1-signe-derivee-variations",
        titre: "Relier la dérivée aux variations",
        blocs: [
          {
            type: "regle",
            titre: "Signe de la dérivée sur un intervalle",
            texte: "Soit f dérivable sur un intervalle I.\n\n• Si f'(x) ≥ 0 pour tout x de I, f est croissante sur I.\n• Si f'(x) ≤ 0 pour tout x de I, f est décroissante sur I.\n• Si f'(x) > 0 pour tout x de I, f est strictement croissante sur I.\n• Si f'(x) < 0 pour tout x de I, f est strictement décroissante sur I.\n• Si f'(x) = 0 pour tout x de I, f est constante sur I."
          },
          {
            type: "methode",
            titre: "Étudier les variations",
            texte: "1. Détermine le domaine de la fonction et les intervalles où elle est dérivable.\n2. Calcule f'(x).\n3. Cherche les valeurs où f'(x) s'annule et étudie son signe.\n4. Déduis les intervalles de croissance et de décroissance.\n5. Calcule les valeurs utiles pour présenter les variations.\n\nSi le domaine est séparé en plusieurs intervalles, étudie chacun d'eux séparément."
          },
          {
            type: "exemple",
            titre: "Une parabole",
            texte: "Soit f(x) = x² - 4x + 3, définie sur ℝ.\n\nf'(x) = 2x - 4 = 2(x - 2).\n\n• Si x < 2, f'(x) < 0.\n• Si x = 2, f'(x) = 0.\n• Si x > 2, f'(x) > 0.\n\nAinsi f est décroissante sur ]-∞ ; 2] puis croissante sur [2 ; +∞[.\n\nf(2) = 4 - 8 + 3 = -1. La fonction atteint donc son minimum -1 en x = 2."
          },
          {
            type: "tableau",
            titre: "Signe de la dérivée de f(x) = x² - 4x + 3",
            entetes: ["Valeurs de x", "]-∞ ; 2[", "2", "]2 ; +∞["],
            lignes: [
              ["Signe de f'(x)", "−", "0", "+"],
              ["Variation de f", "décroît", "minimum : -1", "croît"]
            ]
          },
          {
            type: "schema",
            titre: "Du signe de f' aux variations de f",
            svg: "<svg viewBox='0 0 320 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Parabole de y égale x carré moins quatre x plus trois, décroissante jusqu’au sommet de coordonnées deux moins un, puis croissante'><rect width='320' height='260' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 70 20 V 225 M 110 20 V 225 M 150 20 V 225 M 190 20 V 225 M 230 20 V 225'/><path d='M 30 30 H 270 M 30 70 H 270 M 30 110 H 270 M 30 150 H 270 M 30 190 H 270'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='150' x2='280' y2='150'/><line x1='70' y1='230' x2='70' y2='15'/></g><path d='M 70 30 Q 150 350 230 30' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='150' cy='190' r='5' fill='#dc2626'/><text x='158' y='208' font-size='14' fill='#b91c1c'>S(2 ; -1)</text><text x='64' y='168' font-size='13'>0</text><text x='145' y='168' font-size='13'>2</text><text x='45' y='195' font-size='13'>-1</text><text x='85' y='240' font-size='13' fill='#1d4ed8'>décroît</text><text x='200' y='240' font-size='13' fill='#1d4ed8'>croît</text><text x='270' y='144' font-size='13'>x</text><text x='77' y='26' font-size='13'>y</text></svg>",
            legende: "La dérivée est négative avant 2, nulle en 2 et positive après 2. La courbe descend jusqu'au minimum S, puis remonte."
          },
          {
            type: "remarque",
            titre: "Un domaine coupé en deux",
            texte: "Pour f(x) = 1/x, la dérivée -1/x² est négative sur ]-∞ ; 0[ et sur ]0 ; +∞[.\n\nLa fonction est décroissante sur chacun de ces deux intervalles. On ne peut pas conclure qu'elle est décroissante sur tout ℝ privé de 0 : ce domaine n'est pas un intervalle."
          }
        ]
      },

      {
        id: "m1-extrema",
        titre: "Déterminer un extremum",
        blocs: [
          {
            type: "definition",
            titre: "Maximum et minimum",
            texte: "Un extremum est un maximum ou un minimum.\n\nSur un ensemble I, f(a) est un minimum si f(a) ≤ f(x) pour tout x ∈ I. C'est un maximum si f(a) ≥ f(x) pour tout x ∈ I.\n\nLa valeur de l'extremum est f(a) ; a est une abscisse où il est atteint."
          },
          {
            type: "regle",
            titre: "Changement de signe",
            texte: "Si f est continue en a et dérivable de part et d'autre de a :\n\n• si f' passe de négative à positive en a, f admet un minimum local en a ;\n• si f' passe de positive à négative en a, f admet un maximum local en a.\n\n« Local » signifie que la comparaison est assurée près de a. Pour conclure sur tout le domaine, il faut examiner toutes les variations."
          },
          {
            type: "exemple",
            titre: "Un maximum",
            texte: "Soit f(x) = -x² + 6x - 5 sur ℝ.\n\nf'(x) = -2x + 6 = -2(x - 3).\n\nLa dérivée est positive pour x < 3 et négative pour x > 3. La fonction croît puis décroît : elle atteint un maximum en x = 3.\n\nf(3) = -9 + 18 - 5 = 4.\n\nSon maximum sur ℝ est donc 4."
          },
          {
            type: "remarque",
            titre: "Une dérivée nulle ne suffit pas",
            texte: "Pour f(x) = x³, on a f'(x) = 3x². En 0, f'(0) = 0, mais f reste strictement croissante : elle n'a ni maximum ni minimum local en 0.\n\nIl faut étudier le signe de la dérivée autour du point."
          },
          {
            type: "methode",
            titre: "Sur un intervalle fermé",
            texte: "Pour chercher un maximum ou un minimum sur [a ; b], étudie les variations sur tout l'intervalle et compare les valeurs utiles, notamment celles aux bornes.\n\nUn extremum peut être atteint à une borne, même si la dérivée n'y est pas nulle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule les dérivées des fonctions définies sur ℝ :\n\n1. f(x) = x³\n2. g(x) = 4x² - 3x + 2",
        correction: "1. f'(x) = 3x².\n\n2. On dérive terme à terme : g'(x) = 8x - 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une fonction f est dérivable sur ℝ et vérifie f'(x) = 2x - 6.\n\n1. Pour quelle valeur de x la dérivée s'annule-t-elle ?\n2. Donne son signe de part et d'autre.",
        correction: "1. 2x - 6 = 0 équivaut à x = 3.\n\n2. f'(x) < 0 si x < 3 et f'(x) > 0 si x > 3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = (x + 2)(x² - 1).\n\n1. Calcule f'(x) avec la formule du produit.\n2. Simplifie le résultat.",
        correction: "Posons u(x) = x + 2 et v(x) = x² - 1. Alors u'(x) = 1 et v'(x) = 2x.\n\nf'(x) = 1 × (x² - 1) + (x + 2) × 2x\n= x² - 1 + 2x² + 4x\n= 3x² + 4x - 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = (3x - 1)/(x + 2).\n\n1. Donne son domaine.\n2. Calcule f'(x).",
        correction: "1. Il faut x + 2 ≠ 0. Le domaine est ℝ privé de {-2}.\n\n2. Par la formule du quotient :\n\nf'(x) = [3(x + 2) - (3x - 1) × 1]/(x + 2)²\n= (3x + 6 - 3x + 1)/(x + 2)²\n= 7/(x + 2)², pour x ≠ -2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x² - 6x + 5 sur ℝ.\n\n1. Calcule f'(x).\n2. Étudie son signe et les variations de f.\n3. Détermine le minimum de f sur ℝ.",
        correction: "1. f'(x) = 2x - 6 = 2(x - 3).\n\n2. f'(x) < 0 si x < 3, f'(3) = 0 et f'(x) > 0 si x > 3.\n\nDonc f est décroissante sur ]-∞ ; 3] puis croissante sur [3 ; +∞[.\n\n3. Le minimum est atteint en 3 et vaut f(3) = 9 - 18 + 5 = -4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (3x - 2)², définie sur ℝ.\n\n1. Calcule f'(x) en utilisant la dérivée d'une composée.\n2. Détermine l'équation de la tangente à sa courbe au point d'abscisse 1.",
        correction: "1. La dérivée de l'expression intérieure 3x - 2 vaut 3. Donc :\n\nf'(x) = 2(3x - 2) × 3 = 6(3x - 2).\n\n2. f(1) = 1 et f'(1) = 6.\n\nLa tangente est y = 6(x - 1) + 1, soit y = 6x - 5."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On dispose de 20 mètres de clôture pour entourer entièrement un rectangle. On note x sa largeur et y sa longueur, en mètres.\n\n1. Exprime y puis l'aire A en fonction de x. Précise les valeurs possibles de x pour obtenir un rectangle de dimensions strictement positives.\n2. Calcule A'(x) et étudie son signe.\n3. Détermine les dimensions donnant l'aire maximale et cette aire.",
        correction: "1. Le périmètre vérifie 2x + 2y = 20, donc y = 10 - x.\n\nPour que les deux dimensions soient strictement positives, il faut 0 < x < 10.\n\nA(x) = x(10 - x) = 10x - x².\n\n2. A'(x) = 10 - 2x. Elle est positive pour x < 5, nulle en 5 et négative pour x > 5.\n\n3. Sur ]0 ; 10[, l'aire croît jusqu'à x = 5 puis décroît. Son maximum est atteint pour x = 5, qui appartient au domaine.\n\nAlors y = 10 - 5 = 5. Le rectangle est un carré de côté 5 m et son aire maximale est 25 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = x³ - 3x sur l'intervalle [-2 ; 2].\n\n1. Calcule f'(x) et factorise-la.\n2. Étudie les variations de f sur [-2 ; 2].\n3. Calcule f aux bornes et aux points où f' s'annule, puis détermine le maximum et le minimum de f sur l'intervalle.",
        correction: "1. f'(x) = 3x² - 3 = 3(x - 1)(x + 1).\n\n2. La dérivée est positive sur [-2 ; -1[, négative sur ]-1 ; 1[, puis positive sur ]1 ; 2]. Elle s'annule en -1 et 1.\n\nAinsi f croît sur [-2 ; -1], décroît sur [-1 ; 1], puis croît sur [1 ; 2].\n\n3. f(-2) = -8 + 6 = -2 ; f(-1) = -1 + 3 = 2 ; f(1) = 1 - 3 = -2 ; f(2) = 8 - 6 = 2.\n\nLe maximum sur [-2 ; 2] est 2, atteint en -1 et en 2. Le minimum est -2, atteint en -2 et en 1."
      }
    ]
  }
]);
