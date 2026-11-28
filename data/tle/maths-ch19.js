enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch19",
    titre: "Chapitre 19 : Numération et changements de base",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch19-l1",
        titre: "Leçon 1 : Comprendre l’écriture en base",
        blocs: [
          {
            type: "introduction",
            titre: "La valeur d’un chiffre dépend de sa position",
            texte: "En écriture décimale, 347 signifie 3 centaines, 4 dizaines et 7 unités. D’autres systèmes utilisent le même principe de position, mais avec une base différente de 10."
          },
          {
            type: "definition",
            titre: "Écriture en base b",
            texte: "Soit b un entier supérieur ou égal à 2. En base b, les chiffres autorisés représentent les valeurs de 0 à b − 1.\n\nL’écriture (aₙ...a₁a₀) en base b représente :\naₙbⁿ + ... + a₁b + a₀.\n\nPour une base supérieure à 10, on peut utiliser des lettres pour représenter les valeurs à partir de 10."
          },
          {
            type: "exemple",
            titre: "En base 10 et en base 2",
            texte: "En base 10 : 347 = 3 × 10² + 4 × 10 + 7.\n\nEn base 2, seuls les chiffres 0 et 1 sont autorisés :\n(1011)₂ = 1 × 2³ + 0 × 2² + 1 × 2 + 1 = 11 en base 10."
          },
          {
            type: "tableau",
            titre: "Quelques bases",
            entetes: ["Base", "Nom courant", "Chiffres ou symboles autorisés"],
            lignes: [
              ["2", "Binaire", "0 et 1"],
              ["5", "Base cinq", "0, 1, 2, 3 et 4"],
              ["10", "Décimale", "0 à 9"],
              ["16", "Hexadécimale", "0 à 9, puis A à F pour les valeurs 10 à 15"]
            ]
          },
          {
            type: "remarque",
            titre: "Une écriture peut être invalide",
            texte: "Le chiffre 5 n’est pas autorisé en base 5. L’écriture (152)₅ n’est donc pas valide."
          }
        ]
      },

      {
        id: "tle-maths-ch19-l2",
        titre: "Leçon 2 : Passer d’une base à la base 10",
        blocs: [
          {
            type: "methode",
            titre: "Développer selon les puissances de la base",
            texte: "1. Partir du chiffre des unités, à droite : son poids est b⁰ = 1.\n2. En allant vers la gauche, multiplier successivement le poids par b.\n3. Additionner les produits « chiffre × poids »."
          },
          {
            type: "exemple",
            titre: "De la base 2 à la base 10",
            texte: "(1101)₂ = 1 × 2³ + 1 × 2² + 0 × 2 + 1\n= 8 + 4 + 0 + 1 = 13.\n\nDonc (1101)₂ = (13)₁₀."
          },
          {
            type: "exemple",
            titre: "De la base 5 à la base 10",
            texte: "(243)₅ = 2 × 5² + 4 × 5 + 3\n= 50 + 20 + 3 = 73.\n\nDonc (243)₅ = (73)₁₀."
          },
          {
            type: "exemple",
            titre: "Un exemple hexadécimal",
            texte: "En base 16, A représente 10 et F représente 15.\n\n(2A)₁₆ = 2 × 16 + 10 = 42 en base 10."
          },
          {
            type: "remarque",
            titre: "Préciser la base",
            texte: "Les écritures (10)₂ et (10)₁₀ ne représentent pas le même nombre : (10)₂ = 2, tandis que (10)₁₀ = 10."
          }
        ]
      },

      {
        id: "tle-maths-ch19-l3",
        titre: "Leçon 3 : Passer de la base 10 à une autre base",
        blocs: [
          {
            type: "methode",
            titre: "Divisions successives",
            texte: "Pour écrire un entier naturel non nul N en base b :\n1. Diviser N par b et noter le reste.\n2. Diviser le quotient obtenu par b et noter le nouveau reste.\n3. Continuer jusqu’à obtenir un quotient nul.\n4. Lire les restes du dernier au premier.\n\nLe nombre 0 s’écrit 0 dans toute base."
          },
          {
            type: "exemple",
            titre: "Convertir 13 en base 2",
            texte: "13 = 2 × 6 + 1\n6 = 2 × 3 + 0\n3 = 2 × 1 + 1\n1 = 2 × 0 + 1.\n\nEn lisant les restes de bas en haut, on obtient (1101)₂. Donc (13)₁₀ = (1101)₂."
          },
          {
            type: "exemple",
            titre: "Convertir 73 en base 5",
            texte: "73 = 5 × 14 + 3\n14 = 5 × 2 + 4\n2 = 5 × 0 + 2.\n\nEn lisant les restes de bas en haut : (73)₁₀ = (243)₅."
          },
          {
            type: "methode",
            titre: "Vérifier une conversion",
            texte: "Après avoir obtenu l’écriture dans la nouvelle base, développer ses chiffres avec les puissances de cette base. On doit retrouver le nombre initial."
          },
          {
            type: "exemple",
            titre: "Vérification",
            texte: "Pour vérifier (13)₁₀ = (1101)₂ :\n1 × 8 + 1 × 4 + 0 × 2 + 1 = 13."
          }
        ]
      },

      {
        id: "tle-maths-ch19-l4",
        titre: "Leçon 4 : Calculs et applications",
        blocs: [
          {
            type: "methode",
            titre: "Additionner en base 2",
            texte: "On additionne de droite à gauche. En base 2 :\n0 + 0 = 0 ;\n0 + 1 = 1 ;\n1 + 1 = (10)₂ : on écrit 0 et on retient 1 ;\n1 + 1 + 1 = (11)₂ : on écrit 1 et on retient 1."
          },
          {
            type: "exemple",
            titre: "Addition binaire",
            texte: "Calculons (101)₂ + (11)₂.\n\nÀ droite, 1 + 1 = (10)₂ : on écrit 0 et on retient 1.\nAu rang suivant, 0 + 1 + 1 = (10)₂ : on écrit 0 et on retient 1.\nAu rang suivant, 1 + 1 = (10)₂ : on écrit 0 et on retient 1.\n\nLe résultat est (1000)₂. Vérification en base 10 : 5 + 3 = 8."
          },
          {
            type: "methode",
            titre: "Relier base 2 et base 16",
            texte: "Comme 16 = 2⁴, un chiffre hexadécimal correspond à un groupe de quatre chiffres binaires. Pour convertir du binaire vers l’hexadécimal, on regroupe les chiffres par quatre à partir de la droite, en ajoutant si nécessaire des zéros à gauche."
          },
          {
            type: "exemple",
            titre: "Du binaire à l’hexadécimal",
            texte: "(10110110)₂ se regroupe en 1011 et 0110.\n\n(1011)₂ = 11, représenté par B en base 16 ; (0110)₂ = 6.\nDonc (10110110)₂ = (B6)₁₆."
          },
          {
            type: "remarque",
            titre: "Lien avec l’informatique",
            texte: "Le système binaire utilise deux chiffres et sert notamment à représenter des informations dans les systèmes numériques. Le système hexadécimal fournit une écriture plus compacte de suites de chiffres binaires."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quels chiffres sont autorisés en base 3 ?",
        correction: "En base 3, les chiffres autorisés représentent les valeurs de 0 à 2 : ce sont 0, 1 et 2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir (101)₂ en base 10.",
        correction: "(101)₂ = 1 × 2² + 0 × 2 + 1 = 4 + 1 = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "L’écriture (304)₄ est-elle valide ?",
        correction: "Non. En base 4, seuls 0, 1, 2 et 3 sont autorisés. Le chiffre 4 n’est pas permis."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertir (112)₃ en base 10.",
        correction: "(112)₃ = 1 × 3² + 1 × 3 + 2 = 9 + 3 + 2 = 14."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertir (24)₅ en base 10.",
        correction: "(24)₅ = 2 × 5 + 4 = 14."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écrire 10 en base 2.",
        correction: "10 = 2 × 5 + 0 ; 5 = 2 × 2 + 1 ; 2 = 2 × 1 + 0 ; 1 = 2 × 0 + 1.\nEn lisant les restes de bas en haut : (10)₁₀ = (1010)₂."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écrire 20 en base 3.",
        correction: "20 = 3 × 6 + 2 ; 6 = 3 × 2 + 0 ; 2 = 3 × 0 + 2.\nDonc (20)₁₀ = (202)₃. Vérification : 2 × 9 + 2 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer (11)₂ + (1)₂.",
        correction: "À droite, 1 + 1 = (10)₂ : on écrit 0 et on retient 1. Au rang suivant, 1 + 1 = (10)₂.\nLe résultat est (100)₂. Vérification : 3 + 1 = 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertir (1F)₁₆ en base 10.",
        correction: "En base 16, F représente 15. Donc (1F)₁₆ = 1 × 16 + 15 = 31."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Convertir (101101)₂ en base 10.",
        correction: "(101101)₂ = 1 × 32 + 0 × 16 + 1 × 8 + 1 × 4 + 0 × 2 + 1 = 45."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Écrire 47 en base 5.",
        correction: "47 = 5 × 9 + 2 ; 9 = 5 × 1 + 4 ; 1 = 5 × 0 + 1.\nDonc (47)₁₀ = (142)₅.\nVérification : 1 × 25 + 4 × 5 + 2 = 47."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer (1101)₂ + (1011)₂.",
        correction: "En base 10, (1101)₂ = 13 et (1011)₂ = 11. Leur somme est 24.\nOr 24 = 16 + 8, donc 24 = (11000)₂.\nAinsi (1101)₂ + (1011)₂ = (11000)₂."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Convertir (11101010)₂ en base 16.",
        correction: "On regroupe par quatre chiffres : 1110 et 1010.\n(1110)₂ = 14, représenté par E ; (1010)₂ = 10, représenté par A.\nDonc (11101010)₂ = (EA)₁₆."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer la base entière b ≥ 2 pour laquelle (21) en base b représente 11 en base 10.",
        correction: "L’écriture (21) en base b représente 2b + 1. On résout 2b + 1 = 11, d’où b = 5.\nLes chiffres 2 et 1 sont autorisés en base 5. La base cherchée est donc 5."
      }
    ]
  }
]);
