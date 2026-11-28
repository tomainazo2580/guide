enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch3",
    titre: "Chapitre 3 : Continuité et théorème des valeurs intermédiaires",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch3-l1",
        titre: "Leçon 1 : Continuité en un point et sur un intervalle",
        blocs: [
          {
            type: "introduction",
            titre: "De la limite à la continuité",
            texte: "Dans le chapitre précédent, nous avons étudié le comportement de f(x) lorsque x se rapproche d’un nombre a. La continuité compare cette limite à la valeur de la fonction au point a."
          },
          {
            type: "definition",
            titre: "Continuité en un point",
            texte: "Une fonction f est continue en a si elle est définie en a et si f(x) tend vers f(a) lorsque x tend vers a.\n\nAutrement dit : lim lorsque x → a de f(x) = f(a).\n\nPour une fonction définie d’un seul côté de a, on utilise la limite du côté accessible."
          },
          {
            type: "methode",
            titre: "Vérifier la continuité en a",
            texte: "1. Vérifier que f(a) existe et calculer sa valeur.\n2. Calculer la limite de f(x) lorsque x tend vers a. Si nécessaire, étudier séparément les limites à gauche et à droite.\n3. Comparer la limite obtenue à f(a).\n\nSi la limite n’existe pas ou si elle est différente de f(a), la fonction n’est pas continue en a."
          },
          {
            type: "exemple",
            titre: "Une fonction non continue",
            texte: "On définit f(x) = x + 1 si x ≠ 2, et f(2) = 5.\n\nLorsque x tend vers 2, f(x) = x + 1 pour x ≠ 2, donc la limite est 3. Or f(2) = 5.\n\nLa limite est différente de la valeur en 2 : f n’est pas continue en 2."
          },
          {
            type: "definition",
            titre: "Continuité sur un intervalle",
            texte: "Une fonction est continue sur un intervalle si elle est continue en chacun de ses points. Aux bornes de l’intervalle qui appartiennent à celui-ci, on considère la limite du côté situé dans l’intervalle."
          },
          {
            type: "remarque",
            titre: "Une image à retenir",
            texte: "Sur un intervalle, on représente souvent une fonction continue par une courbe que l’on peut tracer sans lever le crayon. Cette image aide à comprendre, mais la définition précise repose sur les limites."
          },
          {
            type: "schema",
            titre: "Une valeur qui ne rejoint pas la limite",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='25' y1='170' x2='300' y2='170' stroke='black' stroke-width='2'/><line x1='70' y1='190' x2='70' y2='20' stroke='black' stroke-width='2'/><line x1='30' y1='155' x2='275' y2='55' stroke='#1769aa' stroke-width='3'/><circle cx='150' cy='106' r='6' fill='white' stroke='#1769aa' stroke-width='2'/><circle cx='150' cy='55' r='5' fill='#c62828'/><line x1='150' y1='55' x2='150' y2='170' stroke='#777' stroke-dasharray='4 4'/><text x='145' y='187' font-size='14'>a</text><text x='160' y='58' font-size='13' fill='#c62828'>f(a)</text><text x='160' y='110' font-size='13' fill='#1769aa'>limite L</text><text x='292' y='187' font-size='14'>x</text><text x='78' y='28' font-size='14'>y</text></svg>",
            legende: "Le cercle vide indique la limite L sur la droite ; le point plein donne f(a). Comme f(a) ≠ L, la fonction représentée n’est pas continue en a."
          }
        ]
      },

      {
        id: "tle-maths-ch3-l2",
        titre: "Leçon 2 : Fonctions continues et prolongement",
        blocs: [
          {
            type: "tableau",
            titre: "Continuité des fonctions usuelles",
            entetes: ["Fonction", "Ensemble sur lequel elle est continue"],
            lignes: [
              ["Fonction polynôme", "ℝ"],
              ["Fonction rationnelle P/Q", "Tout intervalle où Q ne s’annule pas"],
              ["Fonction racine carrée x ↦ √x", "[0 ; +∞["],
              ["Fonctions sinus et cosinus", "ℝ"]
            ]
          },
          {
            type: "texte",
            titre: "Opérations et composition",
            texte: "La somme et le produit de fonctions continues en un point sont continus en ce point. Leur quotient est continu si le dénominateur ne s’y annule pas.\n\nUne composée de fonctions continues est continue, à condition que toutes les expressions soient définies."
          },
          {
            type: "exemple",
            titre: "Justifier une continuité",
            texte: "Soit f(x) = (x² + 1)/(x − 2).\n\nLe numérateur et le dénominateur sont des polynômes, donc continus sur ℝ. Le dénominateur ne s’annule pas sur ]−∞ ; 2[ ni sur ]2 ; +∞[.\n\nAinsi f est continue sur chacun de ces deux intervalles."
          },
          {
            type: "exemple",
            titre: "Une composition",
            texte: "La fonction x ↦ x² + 1 est continue sur ℝ et prend des valeurs positives. La fonction racine carrée est continue sur [0 ; +∞[.\n\nPar composition, x ↦ √(x² + 1) est continue sur ℝ."
          },
          {
            type: "definition",
            titre: "Prolongement par continuité",
            texte: "Si f n’est pas définie en a mais si f(x) tend vers une limite réelle L lorsque x tend vers a, on peut définir une nouvelle fonction qui coïncide avec f ailleurs et qui vaut L en a. Cette nouvelle fonction est alors continue en a : c’est le prolongement par continuité."
          },
          {
            type: "exemple",
            titre: "Prolonger une fonction",
            texte: "Pour x ≠ 1, soit f(x) = (x² − 1)/(x − 1). Comme f(x) = x + 1 pour x ≠ 1, sa limite en 1 vaut 2.\n\nOn définit F(x) = f(x) si x ≠ 1 et F(1) = 2. Alors F est continue en 1. Ici, F(x) = x + 1 pour tout réel x."
          },
          {
            type: "remarque",
            titre: "Une limite infinie ne convient pas",
            texte: "Si f(x) tend vers +∞ ou −∞ en a, on ne peut pas obtenir un prolongement continu à valeurs réelles en attribuant une valeur réelle à f(a)."
          }
        ]
      },

      {
        id: "tle-maths-ch3-l3",
        titre: "Leçon 3 : Théorème des valeurs intermédiaires",
        blocs: [
          {
            type: "definition",
            titre: "Théorème des valeurs intermédiaires",
            texte: "Si f est continue sur un intervalle [a ; b], alors elle prend au moins une fois toute valeur comprise entre f(a) et f(b).\n\nPrécisément, pour tout nombre k compris entre f(a) et f(b), il existe au moins un nombre c dans [a ; b] tel que f(c) = k."
          },
          {
            type: "schema",
            titre: "Une valeur intermédiaire atteinte",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='30' y1='185' x2='300' y2='185' stroke='black' stroke-width='2'/><line x1='50' y1='200' x2='50' y2='20' stroke='black' stroke-width='2'/><path d='M80 155 C115 160 120 90 160 112 S215 88 270 45' fill='none' stroke='#1769aa' stroke-width='3'/><line x1='50' y1='110' x2='290' y2='110' stroke='#c62828' stroke-dasharray='5 4'/><circle cx='160' cy='110' r='4' fill='#c62828'/><line x1='160' y1='110' x2='160' y2='185' stroke='#777' stroke-dasharray='4 4'/><circle cx='80' cy='155' r='4' fill='#1769aa'/><circle cx='270' cy='45' r='4' fill='#1769aa'/><text x='35' y='115' font-size='13'>k</text><text x='76' y='202' font-size='13'>a</text><text x='156' y='202' font-size='13'>c</text><text x='266' y='202' font-size='13'>b</text><text x='280' y='42' font-size='13'>f(b)</text><text x='83' y='151' font-size='13'>f(a)</text></svg>",
            legende: "La courbe continue part d’une valeur inférieure à k et arrive à une valeur supérieure à k : elle atteint k au moins une fois. Schéma qualitatif."
          },
          {
            type: "methode",
            titre: "Prouver l’existence d’une solution",
            texte: "Pour montrer que f(x) = k possède une solution dans [a ; b] :\n1. Justifier que f est continue sur [a ; b].\n2. Calculer f(a) et f(b).\n3. Vérifier que k est compris entre ces deux valeurs.\n4. Conclure par le théorème des valeurs intermédiaires.\n\nSi k est strictement compris entre f(a) et f(b), la solution obtenue appartient à ]a ; b[."
          },
          {
            type: "exemple",
            titre: "Existence d’une racine",
            texte: "Soit f(x) = x³ + x − 1. Cette fonction polynôme est continue sur [0 ; 1].\n\nf(0) = −1 et f(1) = 1. Comme 0 est compris entre −1 et 1, le théorème des valeurs intermédiaires assure qu’il existe au moins un nombre c dans ]0 ; 1[ tel que f(c) = 0."
          },
          {
            type: "remarque",
            titre: "Existence ne signifie pas unicité",
            texte: "Le théorème des valeurs intermédiaires garantit au moins une solution, mais ne dit pas qu’elle est unique. Pour prouver l’unicité, on peut utiliser la stricte monotonie."
          }
        ]
      },

      {
        id: "tle-maths-ch3-l4",
        titre: "Leçon 4 : Unicité et encadrement d’une solution",
        blocs: [
          {
            type: "definition",
            titre: "Stricte monotonie",
            texte: "Une fonction est strictement croissante sur un intervalle si, pour tous a < b dans cet intervalle, f(a) < f(b). Elle est strictement décroissante si, pour tous a < b, f(a) > f(b).\n\nUne fonction strictement monotone ne peut pas prendre deux fois la même valeur sur cet intervalle."
          },
          {
            type: "methode",
            titre: "Prouver existence et unicité",
            texte: "Pour prouver que f(x) = k possède une unique solution sur [a ; b] :\n1. Justifier que f est continue sur [a ; b].\n2. Vérifier que k est compris entre f(a) et f(b] : le théorème des valeurs intermédiaires donne l’existence.\n3. Justifier que f est strictement monotone sur [a ; b] : cela donne l’unicité.\n\nLes dérivées, étudiées ensuite, seront un outil fréquent pour justifier la monotonie."
          },
          {
            type: "exemple",
            titre: "Une unique racine",
            texte: "Reprenons f(x) = x³ + x − 1 sur [0 ; 1]. La fonction est continue et f(0) = −1, f(1) = 1 : il existe donc une solution de f(x) = 0 dans ]0 ; 1[.\n\nSi 0 ≤ a < b ≤ 1, alors a³ < b³ et a < b, donc a³ + a − 1 < b³ + b − 1. Ainsi f est strictement croissante sur [0 ; 1]. La solution y est donc unique."
          },
          {
            type: "methode",
            titre: "Encadrer par dichotomie",
            texte: "Supposons f continue sur [a ; b], avec f(a) et f(b) de signes opposés.\n1. Calculer le milieu m = (a + b)/2 et f(m).\n2. Si f(m) = 0, une solution est trouvée.\n3. Sinon, conserver la moitié de l’intervalle dont les extrémités ont des images de signes opposés.\n4. Répéter pour obtenir un encadrement plus précis.\n\nÀ chaque étape, le nouvel intervalle contient au moins une solution."
          },
          {
            type: "exemple",
            titre: "Deux étapes de dichotomie",
            texte: "Pour f(x) = x³ + x − 1, on sait que l’unique solution de [0 ; 1] est entre 0 et 1.\n\nMilieu : 0,5. On calcule f(0,5) = 0,125 + 0,5 − 1 = −0,375. Comme f(1) = 1 > 0, la solution est dans [0,5 ; 1].\n\nNouveau milieu : 0,75. On calcule f(0,75) = 0,421875 + 0,75 − 1 = 0,171875. Comme f(0,5) < 0, la solution est dans [0,5 ; 0,75]."
          },
          {
            type: "remarque",
            titre: "Longueur de l’encadrement",
            texte: "Après n étapes de dichotomie, la longueur de l’intervalle initial [a ; b] est divisée par 2ⁿ. Si l’on prend le milieu du dernier intervalle comme approximation, son erreur est au plus égale à la moitié de la longueur de cet intervalle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "La fonction f(x) = 2x + 3 est-elle continue en 1 ? Justifier.",
        correction: "f est un polynôme, donc elle est continue sur ℝ, en particulier en 1. On peut vérifier : f(1) = 5 et lim lorsque x → 1 de f(x) = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sur quels intervalles la fonction f(x) = 1/(x + 2) est-elle continue ?",
        correction: "Le dénominateur s’annule en −2. Un quotient de polynômes est continu là où son dénominateur est non nul.\nLa fonction est donc continue sur ]−∞ ; −2[ et sur ]−2 ; +∞[."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une fonction est continue sur [1 ; 4], avec f(1) = 2 et f(4) = 7. Peut-on affirmer qu’elle prend la valeur 5 sur cet intervalle ?",
        correction: "Oui. Le nombre 5 est compris entre 2 et 7. D’après le théorème des valeurs intermédiaires, il existe au moins un c dans ]1 ; 4[ tel que f(c) = 5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On définit f(x) = x² si x ≠ 2 et f(2) = 3. Étudier la continuité de f en 2.",
        correction: "Pour x ≠ 2, f(x) = x², donc lim lorsque x → 2 de f(x) = 4.\nOr f(2) = 3. La limite est différente de f(2), donc f n’est pas continue en 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour x ≠ 3, on pose f(x) = (x² − 9)/(x − 3). Comment prolonger f par continuité en 3 ?",
        correction: "Pour x ≠ 3, f(x) = (x − 3)(x + 3)/(x − 3) = x + 3.\nLa limite en 3 vaut donc 6. On définit F(x) = f(x) pour x ≠ 3 et F(3) = 6. La fonction F est alors continue en 3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Justifier que f(x) = √(x + 2) est continue sur [−2 ; +∞[.",
        correction: "La fonction x ↦ x + 2 est continue sur ℝ. Pour x ≥ −2, elle prend ses valeurs dans [0 ; +∞[, où la fonction racine carrée est continue.\nPar composition, f est continue sur [−2 ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Montrer que l’équation x² = 2 possède au moins une solution dans ]1 ; 2[.",
        correction: "Posons f(x) = x² − 2. C’est un polynôme, donc f est continue sur [1 ; 2].\nOn a f(1) = −1 et f(2) = 2. Le nombre 0 est strictement compris entre ces valeurs.\nD’après le théorème des valeurs intermédiaires, il existe c dans ]1 ; 2[ tel que f(c) = 0, donc c² = 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une fonction f est continue et strictement croissante sur [0 ; 3], avec f(0) = −2 et f(3) = 4. Combien de solutions l’équation f(x) = 1 possède-t-elle dans [0 ; 3] ?",
        correction: "Comme 1 est compris entre −2 et 4, la continuité et le théorème des valeurs intermédiaires garantissent au moins une solution. La stricte croissance garantit qu’il ne peut pas y en avoir deux. Il y a donc une unique solution dans [0 ; 3]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On définit f(x) = 2x + 1 si x < 1 et f(x) = x² + 2 si x ≥ 1. Étudier la continuité de f en 1.",
        correction: "f(1) = 1² + 2 = 3.\nÀ gauche de 1, 2x + 1 tend vers 3. À droite de 1, x² + 2 tend aussi vers 3.\nLes deux limites sont égales à f(1). Donc f est continue en 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On définit f(x) = x + 2 si x < 1 et f(x) = 4 − x si x ≥ 1. Montrer que f est continue en 1, puis expliquer pourquoi elle n’est pas strictement monotone sur [0 ; 2].",
        correction: "f(1) = 4 − 1 = 3. La limite à gauche vaut 1 + 2 = 3 et la limite à droite vaut 4 − 1 = 3. Elles sont égales à f(1), donc f est continue en 1.\n\nSur [0 ; 1], f est strictement croissante : f(0) = 2 < f(1) = 3. Sur [1 ; 2], elle est strictement décroissante : f(1) = 3 > f(2) = 2. Elle n’est donc ni strictement croissante ni strictement décroissante sur [0 ; 2]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Montrer que l’équation x³ + x − 1 = 0 possède une unique solution dans [0 ; 1], puis l’encadrer entre deux dixièmes consécutifs.",
        correction: "Posons f(x) = x³ + x − 1. Elle est continue sur [0 ; 1], f(0) = −1 et f(1) = 1 : le théorème des valeurs intermédiaires donne une solution.\n\nSi 0 ≤ a < b ≤ 1, alors a³ < b³ et a < b, donc f(a) < f(b). La fonction est strictement croissante : la solution est unique sur [0 ; 1].\n\nf(0,6) = 0,216 + 0,6 − 1 = −0,184 et f(0,7) = 0,343 + 0,7 − 1 = 0,043. Par continuité, la solution est donc dans ]0,6 ; 0,7[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fonction continue f vérifie f(2) < 0 et f(4) > 0. Après trois étapes de dichotomie à partir de [2 ; 4], quelle est la longueur de l’intervalle obtenu ? Que peut-on dire de son milieu comme approximation d’une solution ?",
        correction: "La longueur initiale est 4 − 2 = 2. Après trois étapes, elle est divisée par 2³ = 8 : la nouvelle longueur est 2/8 = 0,25.\n\nL’intervalle obtenu contient au moins une solution. Son milieu est à une distance au plus égale à 0,25/2 = 0,125 de toute solution contenue dans cet intervalle."
      }
    ]
  }
]);
