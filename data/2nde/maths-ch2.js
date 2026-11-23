// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 2 : valeur absolue, distance et approximations.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-valeur-absolue-distance-approximations",
    titre: "Chapitre 2 : Valeur absolue, distance et approximations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch2-valeur-absolue",
        titre: "Comprendre la valeur absolue",
        blocs: [
          {
            type: "introduction",
            titre: "Une distance à zéro",
            texte: "Sur une droite graduée, les nombres 4 et -4 sont situés de part et d'autre de zéro. Pourtant, ils sont tous les deux à 4 unités de zéro.\n\nLa valeur absolue permet d'exprimer cette distance."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "La valeur absolue d'un réel x est sa distance à zéro sur la droite réelle. Elle se note |x|.\n\nAinsi :\n• |4| = 4 ;\n• |-4| = 4 ;\n• |0| = 0.\n\nUne distance ne peut pas être négative : pour tout réel x, |x| ≥ 0."
          },
          {
            type: "schema",
            titre: "Deux nombres à la même distance de zéro",
            svg: "<svg viewBox='0 0 350 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Moins quatre et quatre sont chacun à quatre unités de zéro'><line x1='20' y1='70' x2='330' y2='70' stroke='#334155' stroke-width='2'/><path d='M330 70 l-8 -4 M330 70 l-8 4' fill='none' stroke='#334155' stroke-width='2'/><g stroke='#334155' stroke-width='2'><line x1='55' y1='63' x2='55' y2='77'/><line x1='175' y1='63' x2='175' y2='77'/><line x1='295' y1='63' x2='295' y2='77'/></g><g fill='#334155' font-size='15' text-anchor='middle'><text x='55' y='101'>-4</text><text x='175' y='101'>0</text><text x='295' y='101'>4</text></g><path d='M55 55 L55 43 L175 43 L175 55' fill='none' stroke='#2563eb' stroke-width='2'/><path d='M175 55 L175 43 L295 43 L295 55' fill='none' stroke='#dc2626' stroke-width='2'/><text x='115' y='33' text-anchor='middle' font-size='14' fill='#1d4ed8'>4 unités</text><text x='235' y='33' text-anchor='middle' font-size='14' fill='#b91c1c'>4 unités</text></svg>",
            legende: "La distance de -4 à 0 vaut 4 et celle de 4 à 0 vaut aussi 4. Donc |-4| = |4| = 4."
          },
          {
            type: "regle",
            titre: "Calculer selon le signe",
            texte: "Pour tout réel x :\n\n• si x ≥ 0, alors |x| = x ;\n• si x < 0, alors |x| = -x.\n\nExemples :\n• |7| = 7 ;\n• |-7| = -(-7) = 7 ;\n• |-2,5| = 2,5.\n\nAttention : -x n'est pas forcément négatif. Si x = -7, alors -x = 7."
          },
          {
            type: "regle",
            titre: "Propriétés utiles",
            texte: "Pour tous réels x et y :\n\n• |x| ≥ 0 ;\n• |x| = 0 si et seulement si x = 0 ;\n• |-x| = |x| ;\n• |xy| = |x| × |y| ;\n• si y ≠ 0, |x/y| = |x|/|y|.\n\nExemple : |(-3) × 5| = |-15| = 15 et |-3| × |5| = 3 × 5 = 15."
          },
          {
            type: "remarque",
            titre: "Attention à l'addition",
            texte: "En général, |x + y| n'est pas égal à |x| + |y|.\n\nPar exemple : |3 + (-5)| = |-2| = 2, alors que |3| + |-5| = 8.\n\nOn a cependant toujours l'inégalité : |x + y| ≤ |x| + |y|."
          },
          {
            type: "methode",
            titre: "Simplifier une expression",
            texte: "Pour simplifier |x - 3|, on étudie le signe de x - 3.\n\n• Si x ≥ 3, alors x - 3 ≥ 0 et |x - 3| = x - 3.\n• Si x < 3, alors x - 3 < 0 et |x - 3| = -(x - 3) = 3 - x.\n\nExemples :\n• pour x = 5 : |5 - 3| = 2 ;\n• pour x = 1 : |1 - 3| = |-2| = 2."
          }
        ]
      },

      {
        id: "m2-ch2-distance",
        titre: "Distance entre deux réels",
        blocs: [
          {
            type: "definition",
            titre: "Distance sur une droite",
            texte: "Sur une droite graduée, la distance entre les points d'abscisses a et b vaut :\n\nd(a ; b) = |b - a| = |a - b|.\n\nL'ordre des points ne change pas la distance."
          },
          {
            type: "schema",
            titre: "Distance entre -2 et 3",
            svg: "<svg viewBox='0 0 350 125' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Distance de cinq unités entre les points moins deux et trois'><line x1='20' y1='65' x2='330' y2='65' stroke='#334155' stroke-width='2'/><path d='M330 65 l-8 -4 M330 65 l-8 4' fill='none' stroke='#334155' stroke-width='2'/><line x1='65' y1='65' x2='275' y2='65' stroke='#2563eb' stroke-width='5'/><circle cx='65' cy='65' r='5' fill='#1d4ed8'/><circle cx='275' cy='65' r='5' fill='#1d4ed8'/><line x1='149' y1='58' x2='149' y2='72' stroke='#334155' stroke-width='2'/><g fill='#334155' font-size='15' text-anchor='middle'><text x='65' y='93'>-2</text><text x='149' y='93'>0</text><text x='275' y='93'>3</text></g><text x='170' y='35' text-anchor='middle' font-size='15' fill='#1d4ed8'>distance : 5 unités</text></svg>",
            legende: "De -2 à 0, il y a 2 unités ; de 0 à 3, il y en a 3. La distance totale est 5 : |3 - (-2)| = 5."
          },
          {
            type: "exemple",
            titre: "Calculer une distance",
            texte: "Entre les points d'abscisses 1,5 et -2 :\n\nd = |1,5 - (-2)| = |3,5| = 3,5.\n\nOn peut aussi calculer :\n\nd = |-2 - 1,5| = |-3,5| = 3,5."
          },
          {
            type: "methode",
            titre: "Interpréter |x - a|",
            texte: "|x - a| représente la distance entre x et a.\n\nPar exemple, |x - 3| = 2 signifie que x est situé à 2 unités de 3.\n\nIl y a deux possibilités :\n• x = 3 - 2 = 1 ;\n• x = 3 + 2 = 5.\n\nLes solutions sont donc 1 et 5."
          },
          {
            type: "remarque",
            titre: "Une distance n'est jamais négative",
            texte: "L'équation |x - 3| = -2 n'a aucune solution, car une distance ne peut pas être négative.\n\nEn revanche, |x - 3| = 0 possède une seule solution : x = 3."
          }
        ]
      },

      {
        id: "m2-ch2-inegalites",
        titre: "Équations et inégalités avec une valeur absolue",
        blocs: [
          {
            type: "regle",
            titre: "Égalité à une distance positive",
            texte: "Si r > 0 :\n\n|x - a| = r équivaut à x = a - r ou x = a + r.\n\nExemple : |x + 2| = 3 s'écrit |x - (-2)| = 3.\n\nLes solutions sont -2 - 3 = -5 et -2 + 3 = 1.\n\nPour r = 0, l'unique solution est x = a. Pour r < 0, il n'y a aucune solution."
          },
          {
            type: "regle",
            titre: "Distance inférieure à r",
            texte: "Si r > 0 :\n\n|x - a| < r équivaut à a - r < x < a + r.\n\nL'ensemble des solutions est ]a - r ; a + r[.\n\nDe même : |x - a| ≤ r équivaut à a - r ≤ x ≤ a + r, soit [a - r ; a + r]."
          },
          {
            type: "schema",
            titre: "Les nombres à moins de 2 unités de 3",
            svg: "<svg viewBox='0 0 350 125' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Intervalle ouvert entre un et cinq : nombres dont la distance à trois est strictement inférieure à deux'><line x1='20' y1='65' x2='330' y2='65' stroke='#94a3b8' stroke-width='2'/><line x1='70' y1='65' x2='280' y2='65' stroke='#2563eb' stroke-width='5'/><circle cx='70' cy='65' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><circle cx='280' cy='65' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><circle cx='175' cy='65' r='4' fill='#dc2626'/><g fill='#334155' font-size='15' text-anchor='middle'><text x='70' y='96'>1</text><text x='175' y='96'>3</text><text x='280' y='96'>5</text></g><text x='175' y='32' text-anchor='middle' font-size='15' fill='#1d4ed8'>|x - 3| &lt; 2</text></svg>",
            legende: "La distance à 3 est strictement inférieure à 2 pour x ∈ ]1 ; 5[. Les bornes sont exclues car leur distance à 3 vaut exactement 2."
          },
          {
            type: "regle",
            titre: "Distance supérieure à r",
            texte: "Si r > 0 :\n\n|x - a| > r équivaut à x < a - r ou x > a + r.\n\nLes solutions sont à l'extérieur de l'intervalle :\n]-∞ ; a - r[ ∪ ]a + r ; +∞[.\n\nPour |x - a| ≥ r, les deux bornes sont incluses."
          },
          {
            type: "methode",
            titre: "Exemple avec un coefficient",
            texte: "Résolvons |2x - 4| ≤ 6.\n\nMéthode par double inégalité :\n\n-6 ≤ 2x - 4 ≤ 6.\nOn ajoute 4 : -2 ≤ 2x ≤ 10.\nOn divise par 2 : -1 ≤ x ≤ 5.\n\nL'ensemble des solutions est [-1 ; 5].\n\nVérification d'une borne : pour x = -1, |2(-1) - 4| = |-6| = 6. La borne est incluse grâce au signe ≤."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier le signe de r",
            texte: "Les formules précédentes supposent r > 0.\n\nPour r = 0 : |x - a| < 0 n'a aucune solution, tandis que |x - a| ≤ 0 donne x = a.\n\nSi r < 0, les inégalités |x - a| < r et |x - a| ≤ r n'ont aucune solution, car une valeur absolue est toujours positive ou nulle."
          }
        ]
      },

      {
        id: "m2-ch2-encadrements",
        titre: "Encadrer et approcher un nombre",
        blocs: [
          {
            type: "definition",
            titre: "Encadrement",
            texte: "Encadrer un nombre x consiste à trouver deux nombres a et b tels que a ≤ x ≤ b, ou avec des inégalités strictes si les bornes ne sont pas atteintes.\n\nL'amplitude de l'encadrement est b - a.\n\nExemple : 1,4 < √2 < 1,5. L'amplitude est 1,5 - 1,4 = 0,1."
          },
          {
            type: "methode",
            titre: "Encadrer une racine carrée",
            texte: "Pour encadrer √2 au dixième, comparons les carrés de 1,4 et 1,5 à 2 :\n\n1,4² = 1,96 et 1,5² = 2,25.\n\nComme 1,96 < 2 < 2,25 et que ces nombres sont positifs :\n\n1,4 < √2 < 1,5.\n\nPour affiner : 1,41² = 1,9881 et 1,42² = 2,0164. Donc 1,41 < √2 < 1,42."
          },
          {
            type: "definition",
            titre: "Valeurs approchées par défaut et par excès",
            texte: "Une valeur approchée par défaut de x est inférieure ou égale à x.\n\nUne valeur approchée par excès de x est supérieure ou égale à x.\n\nPour 1/3 : 0,33 < 1/3 < 0,34.\n\nAinsi 0,33 est une valeur approchée par défaut et 0,34 une valeur approchée par excès, au centième."
          },
          {
            type: "remarque",
            titre: "Attention aux nombres négatifs",
            texte: "Pour x = -2,347 :\n\n-2,35 < -2,347 < -2,34.\n\nAu centième, -2,35 est une valeur approchée par défaut et -2,34 une valeur approchée par excès.\n\nSur la droite réelle, -2,35 est à gauche de -2,347. Le signe négatif demande donc de bien vérifier l'ordre."
          },
          {
            type: "definition",
            titre: "Erreur absolue",
            texte: "Si v est une valeur approchée de x, l'erreur absolue est la distance entre x et v :\n\nErreur absolue = |x - v|.\n\nPar exemple, si x = 2,347 et v = 2,35 :\n\n|2,347 - 2,35| = |-0,003| = 0,003.\n\nPlus cette erreur est petite, plus v est proche de x."
          },
          {
            type: "exemple",
            titre: "Utiliser un encadrement pour majorer une erreur",
            texte: "Si 1,41 < √2 < 1,42, alors 0 < √2 - 1,41 < 0,01.\n\nDonc |√2 - 1,41| < 0,01.\n\nOn sait ainsi que 1,41 approche √2 avec une erreur absolue inférieure à 0,01, même sans connaître exactement l'écriture décimale de √2."
          }
        ]
      },

      {
        id: "m2-ch2-arrondis",
        titre: "Arrondir un nombre",
        blocs: [
          {
            type: "definition",
            titre: "Principe de l'arrondi",
            texte: "Arrondir à une précision donnée consiste à choisir une valeur proche du nombre, avec le nombre de décimales demandé.\n\nPour arrondir au dixième, on garde un chiffre après la virgule.\nPour arrondir au centième, on en garde deux.\nPour arrondir au millième, on en garde trois."
          },
          {
            type: "methode",
            titre: "Méthode pratique",
            texte: "1. Repère le chiffre correspondant à la précision demandée.\n2. Regarde le chiffre immédiatement suivant.\n3. S'il est 0, 1, 2, 3 ou 4, conserve le chiffre retenu.\n4. S'il est 5, 6, 7, 8 ou 9, augmente d'une unité le chiffre retenu.\n\nExemple : 12,374 arrondi au centième donne 12,37 : le chiffre suivant est 4.\n\n12,376 arrondi au centième donne 12,38 : le chiffre suivant est 6."
          },
          {
            type: "exemple",
            titre: "Arrondir un nombre négatif",
            texte: "Pour -2,347 au centième, on regarde d'abord 2,347 : son arrondi au centième est 2,35. On remet le signe négatif :\n\n-2,347 ≈ -2,35.\n\nCela est cohérent avec l'encadrement -2,35 < -2,347 < -2,34 : -2,35 est la borne la plus proche."
          },
          {
            type: "remarque",
            titre: "Ne pas arrondir trop tôt",
            texte: "Dans un calcul comportant plusieurs étapes, il est préférable de garder les valeurs exactes ou suffisamment de chiffres intermédiaires, puis d'arrondir le résultat final.\n\nExemple : 3 × (1/3) = 1 exactement. Si on remplace trop tôt 1/3 par 0,33, on obtient 3 × 0,33 = 0,99 : l'erreur s'est propagée."
          },
          {
            type: "rappel",
            titre: "Symboles à utiliser",
            texte: "On écrit π ≈ 3,14 et non π = 3,14.\n\nSi une grandeur mesurée vaut approximativement 2,35 m, il faut conserver l'unité dans la réponse.\n\nUne valeur approchée n'est pas nécessairement égale à la valeur exacte."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. |8|\n2. |-5|\n3. |0|\n4. |3 - 7|\n5. |-2| + |4|",
        correction: "1. |8| = 8.\n2. |-5| = 5.\n3. |0| = 0.\n4. |3 - 7| = |-4| = 4.\n5. |-2| + |4| = 2 + 4 = 6."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne la distance entre les points d'abscisses :\n\n1. 0 et -6\n2. 2 et 7\n3. -3 et 4",
        correction: "1. |0 - (-6)| = 6 : la distance est 6 unités.\n2. |7 - 2| = 5 : la distance est 5 unités.\n3. |4 - (-3)| = 7 : la distance est 7 unités."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. |x| = 5\n2. |x - 2| = 3\n3. |x + 1| = 0\n4. |x - 4| = -2",
        correction: "1. Les réels situés à 5 unités de 0 sont -5 et 5. Solutions : {-5 ; 5}.\n\n2. Les réels situés à 3 unités de 2 sont 2 - 3 = -1 et 2 + 3 = 5. Solutions : {-1 ; 5}.\n\n3. |x + 1| = 0 équivaut à x + 1 = 0. Solution : x = -1.\n\n4. Une valeur absolue ne peut pas être négative. Il n'y a aucune solution : ∅."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour x = -3, signale si chaque affirmation est vraie ou fausse et justifie :\n\n1. |x| = -x\n2. -x < 0\n3. |x + 1| = |x| + 1",
        correction: "1. Vrai : |x| = |-3| = 3 et -x = -(-3) = 3.\n\n2. Faux : -x = 3 > 0.\n\n3. Faux : |x + 1| = |-2| = 2, tandis que |x| + 1 = 3 + 1 = 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Arrondis :\n\n1. 7,364 au centième.\n2. 12,587 au dixième.\n3. -3,146 au centième.\n4. 0,999 au centième.",
        correction: "1. 7,364 ≈ 7,36 : le chiffre suivant le centième est 4.\n2. 12,587 ≈ 12,6 : le chiffre suivant le dixième est 8.\n3. -3,146 ≈ -3,15 : le chiffre suivant le centième est 6.\n4. 0,999 ≈ 1,00 : l'arrondi entraîne une retenue jusque dans la partie entière."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ et écris les solutions sous forme d'intervalle ou de réunion d'intervalles :\n\n1. |x - 4| < 3\n2. |x + 2| ≥ 1\n3. |x - 5| ≤ 0",
        correction: "1. |x - 4| < 3 équivaut à 4 - 3 < x < 4 + 3, soit 1 < x < 7. Solution : ]1 ; 7[.\n\n2. |x + 2| = |x - (-2)|. La distance à -2 est au moins 1 si x ≤ -3 ou x ≥ -1. Solution : ]-∞ ; -3] ∪ [-1 ; +∞[.\n\n3. Une valeur absolue est positive ou nulle. Elle est donc inférieure ou égale à 0 seulement si elle vaut 0 : x - 5 = 0, donc x = 5. Solution : {5}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère le nombre √7.\n\n1. Vérifie que 2,6² < 7 < 2,7².\n2. Déduis-en un encadrement de √7 au dixième.\n3. Montre que l'erreur absolue commise en approchant √7 par 2,6 est inférieure à 0,1.",
        correction: "1. 2,6² = 6,76 et 2,7² = 7,29. Donc 6,76 < 7 < 7,29.\n\n2. Les nombres considérés sont positifs : 2,6 < √7 < 2,7.\n\n3. En soustrayant 2,6 : 0 < √7 - 2,6 < 0,1. Cette différence étant positive, |√7 - 2,6| = √7 - 2,6 < 0,1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous :\n\n1. |2x - 4| ≤ 6\n2. |3x + 3| = 6",
        correction: "1. |2x - 4| ≤ 6 équivaut à -6 ≤ 2x - 4 ≤ 6. En ajoutant 4 : -2 ≤ 2x ≤ 10. En divisant par 2 : -1 ≤ x ≤ 5. Solution : [-1 ; 5].\n\n2. |3x + 3| = 6 équivaut à 3x + 3 = 6 ou 3x + 3 = -6.\n\nDans le premier cas, 3x = 3 donc x = 1. Dans le second, 3x = -9 donc x = -3. Solutions : {-3 ; 1}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pièce doit mesurer exactement 12 cm de longueur. Elle est acceptée si l'écart entre sa longueur réelle x et 12 cm ne dépasse pas 0,05 cm.\n\n1. Traduis la condition d'acceptation à l'aide d'une valeur absolue.\n2. Écris l'ensemble des longueurs acceptées sous forme d'intervalle.\n3. Les pièces de longueurs 11,95 cm, 12,04 cm et 12,06 cm sont-elles acceptées ? Justifie.",
        correction: "1. L'écart entre x et 12 est |x - 12|. Il ne doit pas dépasser 0,05 : |x - 12| ≤ 0,05.\n\n2. Cette inégalité équivaut à 12 - 0,05 ≤ x ≤ 12 + 0,05, soit 11,95 ≤ x ≤ 12,05. L'intervalle est [11,95 ; 12,05], en centimètres.\n\n3. 11,95 cm est accepté : il se trouve à la borne incluse. 12,04 cm est accepté car il est dans l'intervalle. 12,06 cm est refusé car 12,06 > 12,05 ; son écart à 12 vaut 0,06 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère les réels x vérifiant simultanément :\n\n|x - 2| < 3 et |x + 1| ≥ 2.\n\n1. Résous séparément les deux inégalités.\n2. Détermine l'ensemble des solutions communes.\n3. Les nombres -1, 1 et 5 sont-ils des solutions communes ? Justifie.",
        correction: "1. |x - 2| < 3 équivaut à -1 < x < 5. Son ensemble de solutions est ]-1 ; 5[.\n\n|x + 1| ≥ 2 signifie que la distance à -1 est au moins 2. Donc x ≤ -3 ou x ≥ 1. Son ensemble de solutions est ]-∞ ; -3] ∪ [1 ; +∞[.\n\n2. On cherche l'intersection avec ]-1 ; 5[. La partie x ≤ -3 n'a aucun élément commun avec ]-1 ; 5[. La partie x ≥ 1 donne [1 ; 5[. L'ensemble des solutions communes est donc [1 ; 5[.\n\n3. -1 n'est pas solution car il est exclu de ]-1 ; 5[. Le nombre 1 est solution : |1 - 2| = 1 < 3 et |1 + 1| = 2 ≥ 2. Le nombre 5 n'est pas solution car |5 - 2| = 3 n'est pas strictement inférieur à 3."
      }
    ]
  }
]);
