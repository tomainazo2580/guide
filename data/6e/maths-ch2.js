// ===== GUIDE - Mathematiques 6eme (T6) =====
// Chapitre 2 : Les nombres decimaux
// Base sur le programme officiel de Madagascar (FRP Maths T6), complete par Guide.

enregistrerChapitres("6e", "maths", [
  {
    id: "m6-decimaux",
    titre: "Chapitre 2 : Les nombres décimaux",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "m6-dec-fractions",
        titre: "Les fractions décimales",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'une fraction décimale ?",
            texte: "Une fraction décimale est une fraction dont le dénominateur est 10, 100 ou 1000.\nSi le dénominateur est 10, on a des dixièmes.\nSi le dénominateur est 100, on a des centièmes.\nSi le dénominateur est 1000, on a des millièmes.\nExemples : 3/10 se lit « trois dixièmes ». 5/100 se lit « cinq centièmes »."
          },
          {
            type: "schema",
            titre: "De l'unité au centième",
            svg: "<svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'><text x='10' y='14' font-size='11' fill='#1e3a5f'>1 unité :</text><rect x='10' y='20' width='300' height='22' fill='#dbeafe' stroke='#1e3a5f'/><text x='10' y='58' font-size='11' fill='#166534'>L'unité partagée en 10 parts :</text><rect x='10' y='66' width='300' height='22' fill='#dcfce7' stroke='#166534'/><rect x='10' y='66' width='30' height='22' fill='#4ade80' stroke='#166534'/><line x1='40' y1='66' x2='40' y2='88' stroke='#166534'/><line x1='70' y1='66' x2='70' y2='88' stroke='#166534'/><line x1='100' y1='66' x2='100' y2='88' stroke='#166534'/><line x1='130' y1='66' x2='130' y2='88' stroke='#166534'/><line x1='160' y1='66' x2='160' y2='88' stroke='#166534'/><line x1='190' y1='66' x2='190' y2='88' stroke='#166534'/><line x1='220' y1='66' x2='220' y2='88' stroke='#166534'/><line x1='250' y1='66' x2='250' y2='88' stroke='#166534'/><line x1='280' y1='66' x2='280' y2='88' stroke='#166534'/><text x='25' y='81' font-size='11' text-anchor='middle' fill='#14532d'>1/10</text><text x='10' y='106' font-size='11' fill='#854d0e'>Zoom : 1 dixième partagé en 10 :</text><rect x='10' y='112' width='300' height='22' fill='#fef9c3' stroke='#854d0e'/><rect x='10' y='112' width='30' height='22' fill='#fde047' stroke='#854d0e'/><line x1='40' y1='112' x2='40' y2='134' stroke='#854d0e'/><line x1='70' y1='112' x2='70' y2='134' stroke='#854d0e'/><line x1='100' y1='112' x2='100' y2='134' stroke='#854d0e'/><line x1='130' y1='112' x2='130' y2='134' stroke='#854d0e'/><line x1='160' y1='112' x2='160' y2='134' stroke='#854d0e'/><line x1='190' y1='112' x2='190' y2='134' stroke='#854d0e'/><line x1='220' y1='112' x2='220' y2='134' stroke='#854d0e'/><line x1='250' y1='112' x2='250' y2='134' stroke='#854d0e'/><line x1='280' y1='112' x2='280' y2='134' stroke='#854d0e'/><text x='25' y='127' font-size='11' text-anchor='middle' fill='#854d0e'>1/100</text></svg>",
            legende: "1 unité = 10 dixièmes. 1 dixième = 10 centièmes, donc 1 unité = 100 centièmes."
          },
          {
            type: "regle",
            titre: "Une unité, combien de dixièmes ?",
            texte: "1 = 10/10 = 100/100 = 1000/1000.\nUne unité = 10 dixièmes = 100 centièmes = 1 000 millièmes."
          },
          {
            type: "exemple",
            titre: "La bande de Koto",
            texte: "Koto partage une bande en 10 parts égales et colorie 3 parts : il a colorié 3/10 de la bande.\nS'il colorie une bande entière puis 8 parts d'une deuxième bande, il a colorié 18/10, c'est-à-dire 1 + 8/10 = 1,8.\n(Tu comprendras cette écriture à virgule dans la leçon suivante.)"
          },
          {
            type: "tableau",
            titre: "Les mots à retenir",
            entetes: ["Fraction", "On dit", "Dans 1 unité, il y en a"],
            lignes: [
              ["1/10", "Un dixième", "10"],
              ["1/100", "Un centième", "100"],
              ["1/1000", "Un millième", "1 000"]
            ]
          }
        ]
      },
      {
        id: "m6-dec-nombre",
        titre: "Le nombre décimal",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'un nombre décimal ?",
            texte: "Un nombre décimal est un nombre qui peut s'écrire sous la forme d'une fraction décimale.\nSon écriture décimale comporte une virgule : à gauche la partie entière, à droite la partie décimale.\nExemple : 35,961 = 35961/1000, donc 35,961 est un nombre décimal."
          },
          {
            type: "regle",
            titre: "Partie entière et partie décimale",
            texte: "Dans le nombre 4 732,625 :\nLa partie entière est 4 732 (à gauche de la virgule).\nLa partie décimale est 0,625 (à droite de la virgule).\nLa virgule sépare les deux parties."
          },
          {
            type: "tableau",
            titre: "Le tableau de numération (4 732,625)",
            entetes: ["Milliers", "Centaines", "Dizaines", "Unités", ",", "Dixièmes", "Centièmes", "Millièmes"],
            lignes: [
              ["4", "7", "3", "2", ",", "6", "2", "5"]
            ]
          },
          {
            type: "remarque",
            titre: "Les entiers sont aussi des décimaux",
            texte: "Tous les nombres entiers sont des nombres décimaux : 27 = 27/1 et on peut écrire 27 = 27,00.\nLes zéros placés tout à droite de la partie décimale ne changent pas la valeur : 2,5 = 2,50 = 2,500."
          },
          {
            type: "exemple",
            titre: "Décomposer un nombre décimal",
            texte: "0,32 = 32/100 = 3/10 + 2/100\n1,75 = 175/100 = 1 + 7/10 + 5/100\nRetiens : le 1er chiffre après la virgule est le chiffre des dixièmes, le 2ème celui des centièmes, le 3ème celui des millièmes."
          }
        ]
      },
// === FIN MORCEAU 1 ===
            {
        id: "m6-dec-comparer",
        titre: "Comparer et ranger",
        blocs: [
          {
            type: "regle",
            titre: "La règle pour comparer",
            texte: "Pour comparer deux nombres décimaux :\n1. On compare les parties entières.\n2. Si elles sont égales, on compare les chiffres des dixièmes.\n3. S'ils sont égaux, on compare les chiffres des centièmes.\n4. Et ainsi de suite jusqu'à trouver deux chiffres différents.\nOn utilise les symboles < (plus petit que) et > (plus grand que)."
          },
          {
            type: "exemple",
            titre: "Comparer 81,357 et 81,36",
            texte: "Les parties entières sont égales : 81 = 81.\nLes chiffres des dixièmes sont égaux : 3 = 3.\nOn compare alors les centièmes : 5 < 6.\nDonc 81,357 < 81,36."
          },
          {
            type: "remarque",
            titre: "Attention au piège",
            texte: "Le nombre qui a le plus de chiffres après la virgule n'est pas forcément le plus grand !\n81,357 a 3 chiffres après la virgule, 81,36 en a 2, et pourtant 81,357 < 81,36.\nAstuce : complète avec des zéros pour avoir la même longueur : 81,360 et 81,357. Comme 360 > 357, on retrouve 81,357 < 81,36."
          },
          {
            type: "schema",
            titre: "La droite numérique",
            svg: "<svg viewBox='0 0 320 90' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='45' x2='305' y2='45' stroke='#1e3a5f' stroke-width='2'/><line x1='20' y1='38' x2='20' y2='52' stroke='#1e3a5f' stroke-width='2'/><line x1='76' y1='38' x2='76' y2='52' stroke='#1e3a5f' stroke-width='2'/><line x1='132' y1='38' x2='132' y2='52' stroke='#1e3a5f' stroke-width='2'/><line x1='188' y1='38' x2='188' y2='52' stroke='#1e3a5f' stroke-width='2'/><line x1='244' y1='38' x2='244' y2='52' stroke='#1e3a5f' stroke-width='2'/><line x1='300' y1='38' x2='300' y2='52' stroke='#1e3a5f' stroke-width='2'/><text x='20' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>0</text><text x='76' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>1</text><text x='132' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>2</text><text x='188' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>3</text><text x='244' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>4</text><text x='300' y='68' font-size='12' text-anchor='middle' fill='#1e3a5f'>5</text><circle cx='110' cy='45' r='4' fill='#dc2626'/><text x='110' y='30' font-size='12' text-anchor='middle' fill='#dc2626'>1,6</text><circle cx='216' cy='45' r='4' fill='#166534'/><text x='216' y='30' font-size='12' text-anchor='middle' fill='#166534'>3,5</text></svg>",
            legende: "Plus un nombre est placé à droite, plus il est grand : 1,6 < 3,5."
          },
          {
            type: "methode",
            titre: "Ranger une liste de nombres",
            texte: "Ranger dans l'ordre croissant = du plus petit au plus grand (avec <).\nRanger dans l'ordre décroissant = du plus grand au plus petit (avec >).\nExemple : ranger 3 - 3,82 - 4 - 4,9 - 1,9 - 5 - 10 - 1,6.\nCroissant : 1,6 < 1,9 < 3 < 3,82 < 4 < 4,9 < 5 < 10.\nDécroissant : 10 > 5 > 4,9 > 4 > 3,82 > 3 > 1,9 > 1,6."
          }
        ]
      },
      {
        id: "m6-dec-passage",
        titre: "Fraction décimale et écriture décimale",
        blocs: [
          {
            type: "methode",
            titre: "De la fraction au nombre décimal",
            texte: "1. On place une virgule à droite du dernier chiffre du numérateur.\n2. On déplace cette virgule vers la gauche d'autant de rangs qu'il y a de zéros au dénominateur, en ajoutant des zéros si nécessaire.\nExemple 1 : 2653/1000. Le dénominateur a 3 zéros : 2653, devient 2,653.\nExemple 2 : 53/1000. On décale de 3 rangs en ajoutant des zéros : 0,053."
          },
          {
            type: "methode",
            titre: "Du nombre décimal à la fraction",
            texte: "1. Au numérateur : le nombre sans virgule.\n2. Au dénominateur : 1 suivi d'autant de zéros qu'il y a de chiffres après la virgule.\nExemple : 2,653 a 3 chiffres après la virgule, donc 2,653 = 2653/1000."
          },
          {
            type: "remarque",
            titre: "Supprime d'abord les zéros inutiles",
            texte: "Avant de compter les chiffres après la virgule, enlève les zéros tout à droite : 2,650 = 2,65, donc 2,650 = 265/100 (même si 2650/1000 a la même valeur)."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "1. Écris en nombre décimal : 47/10 et 9/100.\n2. Écris en fraction décimale : 0,6 et 3,04.\nRéponses : 1. 47/10 = 4,7 et 9/100 = 0,09. 2. 0,6 = 6/10 et 3,04 = 304/100."
          }
        ]
      },
      {
        id: "m6-dec-addition",
        titre: "Additionner et soustraire",
        blocs: [
          {
            type: "methode",
            titre: "La règle d'or : aligner les virgules",
            texte: "Pour additionner ou soustraire des nombres décimaux :\n1. On écrit les nombres l'un sous l'autre en alignant les virgules.\n2. On complète avec des zéros pour avoir la même longueur.\n3. On calcule comme avec des nombres entiers.\n4. La virgule du résultat se place sous les autres virgules."
          },
          {
            type: "tableau",
            titre: "Exemple : 12,5 + 3,75 = 16,25",
            entetes: ["", "Dizaines", "Unités", ",", "Dixièmes", "Centièmes"],
            lignes: [
              ["", "1", "2", ",", "5", "0"],
              ["+", "", "3", ",", "7", "5"],
              ["=", "1", "6", ",", "2", "5"]
            ]
          },
          {
            type: "remarque",
            titre: "Le piège à éviter",
            texte: "N'aligne jamais les nombres par la droite comme avec les entiers !\nAvec les décimaux, c'est la virgule qui commande : les virgules doivent être exactement l'une sous l'autre."
          },
          {
            type: "exemple",
            titre: "Les lambas de maman",
            texte: "Maman achète 2,5 m de lamba rouge et 1,75 m de lamba vert.\nLongueur totale : 2,50 + 1,75 = 4,25 m.\nD'une pièce de 10 m, le tailleur a coupé ces 4,25 m. Il reste : 10,00 - 4,25 = 5,75 m."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "1. Calcule : 7,25 + 2,5.\n2. Calcule : 9 - 3,4.\nRéponses : 1. 7,25 + 2,50 = 9,75. 2. 9,0 - 3,4 = 5,6."
          }
        ]
      }
    ],
// === FIN MORCEAU 2 ===
        exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le nombre 345,67 :\n1. Quelle est la partie entière ?\n2. Quelle est la partie décimale ?\n3. Quel est le chiffre des dixièmes ? Et celui des centièmes ?",
        correction: "1. La partie entière est 345 (à gauche de la virgule).\n2. La partie décimale est 0,67 (à droite de la virgule).\n3. Le chiffre des dixièmes est 6, celui des centièmes est 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "1. Écris sous forme de fraction : cinq dixièmes ; vingt-trois centièmes.\n2. Comment se lit la fraction 7/1000 ?",
        correction: "1. Cinq dixièmes = 5/10 ; vingt-trois centièmes = 23/100.\n2. 7/1000 se lit « sept millièmes »."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "1. Écris sous forme décimale : 47/10 ; 9/100 ; 205/1000.\n2. Écris sous forme de fraction décimale : 0,6 ; 3,04.",
        correction: "1. 47/10 = 4,7 ; 9/100 = 0,09 ; 205/1000 = 0,205.\n2. 0,6 = 6/10 ; 3,04 = 304/100."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Compare avec < , > ou = :\n1. 7,5 ... 7,42\n2. 12,9 ... 12,09\n3. 0,8 ... 0,80",
        correction: "1. 7,5 > 7,42 (dixièmes : 5 > 4).\n2. 12,9 > 12,09 (dixièmes : 9 > 0).\n3. 0,8 = 0,80 (les zéros à droite ne changent rien)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Range dans l'ordre croissant :\n5,3 - 5,03 - 5,33 - 3,5 - 5,305.",
        correction: "On complète avec des zéros : 5,300 - 5,030 - 5,330 - 3,500 - 5,305.\nOrdre croissant : 3,5 < 5,03 < 5,3 < 5,305 < 5,33."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule en posant les opérations (virgules alignées) :\n1. 14,6 + 2,35\n2. 8 - 3,75\n3. 10,05 + 0,95",
        correction: "1. 14,60 + 2,35 = 16,95.\n2. 8,00 - 3,75 = 4,25.\n3. 10,05 + 0,95 = 11,00 = 11."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un tailleur a une pièce de tissu de 10 m. Il coupe 2,5 m pour une chemise, puis 3,75 m pour un pantalon.\n1. Quelle longueur a-t-il coupée en tout ?\n2. Quelle longueur reste-t-il ?\n3. Peut-il encore coudre une robe qui demande 4 m ?",
        correction: "1. 2,50 + 3,75 = 6,25 m coupés.\n2. 10,00 - 6,25 = 3,75 m restants.\n3. Non : 3,75 < 4. Il manque 0,25 m, c'est-à-dire 25 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Au concours de saut en longueur, Koto saute 3,05 m, Hery saute 3,5 m et Nirina saute 3,15 m.\n1. Range leurs sauts du meilleur au moins bon.\n2. Qui gagne le concours ?\n3. De combien de centimètres Hery dépasse-t-il Koto ?",
        correction: "1. On complète : 3,50 > 3,15 > 3,05.\n2. C'est Hery qui gagne, avec 3,5 m.\n3. 3,50 - 3,05 = 0,45 m, soit 45 centimètres."
      }
    ]
  }
]);
