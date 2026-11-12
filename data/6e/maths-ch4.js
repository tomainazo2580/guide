// ===== GUIDE - Mathematiques 6eme (T6) =====
// Chapitre 4 : Priorite des operations et calcul par 10, 100, 1 000
// Base sur le programme officiel de Madagascar (FRP Maths T6), complete par Guide.

enregistrerChapitres("6e", "maths", [
  {
    id: "m6-priorites",
    titre: "Chapitre 4 : Priorité des opérations et calcul par 10, 100, 1 000",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "m6-prio-sans",
        titre: "La priorité sans parenthèses",
        blocs: [
          {
            type: "regle",
            titre: "Qui passe en premier ?",
            texte: "Dans une suite de calculs SANS parenthèses :\n1. On fait d'abord les multiplications × et les divisions ÷.\n2. Ensuite seulement les additions + et les soustractions −.\n3. Quand deux opérations ont la même importance (× et ÷, ou + et −), on calcule de gauche à droite."
          },
          {
            type: "exemple",
            titre: "Le piège classique",
            texte: "Calcule : 3 + 4 × 5.\nOn fait la multiplication D'ABORD : 3 + 20 = 23.\nLe piège : si tu calcules 3 + 4 = 7 puis 7 × 5 = 35, c'est FAUX.\nLa multiplication est prioritaire, même si elle est écrite après."
          },
          {
            type: "exemple",
            titre: "Avec une division",
            texte: "Calcule : 20 − 8 ÷ 2.\nLa division d'abord : 8 ÷ 2 = 4.\nPuis : 20 − 4 = 16."
          },
          {
            type: "remarque",
            titre: "De gauche à droite",
            texte: "Quand il n'y a que des + et des − (ou que des × et des ÷), personne n'est prioritaire : on calcule simplement de gauche à droite.\nExemple : 10 − 3 + 5 = 7 + 5 = 12."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Calcule : 2 + 3 × 4 − 10 ÷ 5.\nRéponse : × et ÷ d'abord : 2 + 12 − 2. Puis de gauche à droite : 14 − 2 = 12."
          }
        ]
      },
      {
        id: "m6-prio-avec",
        titre: "La priorité avec parenthèses",
        blocs: [
          {
            type: "regle",
            titre: "Les parenthèses commandent",
            texte: "Dans une suite de calculs AVEC parenthèses :\n1. On fait d'abord ce qui est ENTRE parenthèses.\n2. Puis les multiplications × et divisions ÷.\n3. Puis les additions + et soustractions −.\n4. À égalité, de gauche à droite."
          },
          {
            type: "schema",
            titre: "L'ordre des calculs en 4 étapes",
            svg: "<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg'><circle cx='22' cy='24' r='12' fill='#dc2626'/><text x='22' y='29' font-size='14' text-anchor='middle' fill='#ffffff'>1</text><rect x='42' y='11' width='268' height='26' rx='6' fill='#dbeafe' stroke='#1e3a5f'/><text x='56' y='29' font-size='13' fill='#1e3a5f'>Les parenthèses ( ... )</text><line x1='22' y1='37' x2='22' y2='51' stroke='#6b7280' stroke-width='2'/><circle cx='22' cy='64' r='12' fill='#ea580c'/><text x='22' y='69' font-size='14' text-anchor='middle' fill='#ffffff'>2</text><rect x='42' y='51' width='268' height='26' rx='6' fill='#fef3c7' stroke='#854d0e'/><text x='56' y='69' font-size='13' fill='#854d0e'>Les multiplications × et divisions ÷</text><line x1='22' y1='77' x2='22' y2='91' stroke='#6b7280' stroke-width='2'/><circle cx='22' cy='104' r='12' fill='#166534'/><text x='22' y='109' font-size='14' text-anchor='middle' fill='#ffffff'>3</text><rect x='42' y='91' width='268' height='26' rx='6' fill='#dcfce7' stroke='#166534'/><text x='56' y='109' font-size='13' fill='#166534'>Les additions + et soustractions −</text><line x1='22' y1='117' x2='22' y2='131' stroke='#6b7280' stroke-width='2'/><circle cx='22' cy='144' r='12' fill='#1e3a5f'/><text x='22' y='149' font-size='14' text-anchor='middle' fill='#ffffff'>4</text><rect x='42' y='131' width='268' height='26' rx='6' fill='#f3f4f6' stroke='#1e3a5f'/><text x='56' y='149' font-size='13' fill='#1e3a5f'>À égalité : de gauche à droite</text></svg>",
            legende: "Retiens l'ordre : parenthèses, puis × ÷, puis + −, et de gauche à droite."
          },
          {
            type: "exemple",
            titre: "Les parenthèses changent tout",
            texte: "Compare bien :\n3 + 4 × 5 = 3 + 20 = 23 (multiplication d'abord).\n(3 + 4) × 5 = 7 × 5 = 35 (parenthèses d'abord).\nDeux calculs presque identiques, deux résultats différents !"
          },
          {
            type: "exemple",
            titre: "Un deuxième exemple",
            texte: "20 − 8 ÷ 2 = 20 − 4 = 16.\n(20 − 8) ÷ 2 = 12 ÷ 2 = 6."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Calcule : 3 × (12 − 7) + 20 ÷ 5.\nRéponse : parenthèses : (12 − 7) = 5. Puis 3 × 5 = 15 et 20 ÷ 5 = 4. Donc 15 + 4 = 19."
          }
        ]
      },
// === FIN MORCEAU 1 ===
            {
        id: "m6-prio-fois10",
        titre: "Multiplier par 10, 100, 1 000",
        blocs: [
          {
            type: "regle",
            titre: "La virgule voyage vers la droite",
            texte: "Multiplier un nombre décimal par 10, 100 ou 1 000 revient à déplacer la virgule de 1, 2 ou 3 rangs vers la DROITE. On complète par des zéros si nécessaire.\nMultiplier un nombre entier par 10, 100 ou 1 000 revient à ajouter 1, 2 ou 3 zéros à droite."
          },
          {
            type: "tableau",
            titre: "Exemples à observer",
            entetes: ["Nombre", "× 10", "× 100", "× 1 000"],
            lignes: [
              ["5,276", "52,76", "527,6", "5 276"],
              ["0,45", "4,5", "45", "450"],
              ["23", "230", "2 300", "23 000"],
              ["628,45", "6 284,5", "62 845", "628 450"]
            ]
          },
          {
            type: "remarque",
            titre: "Comprendre au lieu de réciter",
            texte: "Multiplier par 10 rend le nombre 10 fois plus grand : chaque chiffre monte d'un rang dans le tableau de numération. C'est pour cela que la virgule semble « sauter » vers la droite."
          },
          {
            type: "exemple",
            titre: "Le kapoaka de riz",
            texte: "Au marché, un kapoaka de riz coûte 850 Ar.\n10 kapoaka coûtent : 850 × 10 = 8 500 Ar.\n100 kapoaka coûteraient : 850 × 100 = 85 000 Ar."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Calcule mentalement : 0,08 × 10 et 628,45 × 1 000.\nRéponses : 0,08 × 10 = 0,8. 628,45 × 1 000 = 628 450."
          }
        ]
      },
      {
        id: "m6-prio-div10",
        titre: "Diviser par 10, 100, 1 000",
        blocs: [
          {
            type: "regle",
            titre: "La virgule voyage vers la gauche",
            texte: "Diviser un nombre par 10, 100 ou 1 000 revient à déplacer la virgule de 1, 2 ou 3 rangs vers la GAUCHE. On complète par des zéros si nécessaire, et la partie entière peut devenir 0."
          },
          {
            type: "tableau",
            titre: "Exemples à observer",
            entetes: ["Nombre", "÷ 10", "÷ 100", "÷ 1 000"],
            lignes: [
              ["527", "52,7", "5,27", "0,527"],
              ["5,27", "0,527", "0,0527", "0,00527"],
              ["8", "0,8", "0,08", "0,008"]
            ]
          },
          {
            type: "remarque",
            titre: "Le zéro de la partie entière",
            texte: "Quand la virgule passe devant tous les chiffres, on écrit 0 dans la partie entière : 527 ÷ 1 000 = 0,527.\nDiviser par 10 rend le nombre 10 fois plus petit."
          },
          {
            type: "exemple",
            titre: "La récompense partagée",
            texte: "10 élèves se partagent 25 000 Ar de récompense en parts égales.\nChacun reçoit : 25 000 ÷ 10 = 2 500 Ar."
          },
          {
            type: "exemple",
            titre: "Le lien avec les conversions",
            texte: "Diviser par 100 sert à convertir : 275 cm = 275 ÷ 100 = 2,75 m.\nTu retrouveras cela dans le chapitre sur les grandeurs."
          }
        ]
      }
    ],
// === FIN MORCEAU 2 ===
        exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. 3 + 4 × 5\n2. (3 + 4) × 5\n3. Pourquoi les résultats sont-ils différents ?",
        correction: "1. 3 + 4 × 5 = 3 + 20 = 23 (la multiplication d'abord).\n2. (3 + 4) × 5 = 7 × 5 = 35 (les parenthèses d'abord).\n3. Parce que les parenthèses changent l'ordre des calculs."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule mentalement :\n1. 7 × 10\n2. 45 × 100\n3. 90 ÷ 10\n4. 300 ÷ 100",
        correction: "1. 70 (on ajoute un zéro).\n2. 4 500 (deux zéros).\n3. 9 (on enlève un zéro).\n4. 3 (on enlève deux zéros)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule en respectant les priorités :\n1. 20 − 8 ÷ 2\n2. 2 + 3 × 4 − 10 ÷ 5",
        correction: "1. La division d'abord : 20 − 8 ÷ 2 = 20 − 4 = 16.\n2. × et ÷ d'abord : 2 + 12 − 2 = 12."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n1. 5,276 × 10\n2. 5,276 × 100\n3. 0,45 × 1 000\n4. 0,08 × 10",
        correction: "1. 52,76 (virgule d'un rang à droite).\n2. 527,6 (deux rangs à droite).\n3. 450 (trois rangs à droite : 0,45 devient 450).\n4. 0,8."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule :\n1. 527 ÷ 10\n2. 5,27 ÷ 100\n3. 527 ÷ 1 000\n4. 8 ÷ 100",
        correction: "1. 52,7 (virgule d'un rang à gauche).\n2. 0,0527 (deux rangs à gauche, on ajoute des zéros).\n3. 0,527 (trois rangs à gauche).\n4. 0,08."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Au marché, Mbola achète 3 mangues à 1 500 Ar l'une et 2 avocats à 2 000 Ar l'un.\n1. Écris la dépense totale en une seule suite de calculs.\n2. Calcule le total en respectant les priorités.",
        correction: "1. 3 × 1 500 + 2 × 2 000.\n2. Les multiplications d'abord : 4 500 + 4 000 = 8 500 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Calcule en détaillant les étapes :\n1. 100 − (15 + 5) × 4\n2. 3 × (12 − 7) + 20 ÷ 5",
        correction: "1. Parenthèses : (15 + 5) = 20. Puis 20 × 4 = 80. Donc 100 − 80 = 20.\n2. Parenthèses : (12 − 7) = 5. Puis 3 × 5 = 15 et 20 ÷ 5 = 4. Donc 15 + 4 = 19."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Le lamba coûte 4 000 Ar le mètre. Maman veut acheter un morceau de 275 cm.\n1. Convertis 275 cm en mètres (÷ 100).\n2. Calcule le prix du morceau.",
        correction: "1. 275 ÷ 100 = 2,75 m (virgule de deux rangs à gauche).\n2. 2,75 × 4 000 = 11 000 Ar.\nVérification : 2,75 × 4 = 11, puis × 1 000 = 11 000."
      }
    ]
  }
]);
