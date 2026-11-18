// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch5",
    titre: "Chapitre 5 : Le volume molaire des gaz",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch5-lecon1",
        titre: "Le volume d'un gaz",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel sur les gaz",
            texte: "Un gaz occupe tout le volume qui lui est offert dans son récipient. Contrairement à un solide ou à un liquide, il est facilement compressible : on peut réduire son volume en le comprimant."
          },
          {
            type: "definition",
            titre: "Le volume",
            texte: "Le volume est l'espace occupé par une substance. On le note souvent V. Pour les gaz, on utilise notamment le litre, de symbole L, et le mètre cube, de symbole m³."
          },
          {
            type: "regle",
            titre: "Conversions utiles",
            texte: "1 m³ = 1 000 L.\n1 L = 1 000 mL.\nAinsi, 1 m³ = 1 000 000 mL."
          },
          {
            type: "remarque",
            titre: "Des conditions à préciser",
            texte: "Le volume d'une quantité donnée de gaz dépend de sa température et de sa pression. Pour comparer des volumes de gaz ou utiliser un volume molaire, il faut connaître les conditions considérées."
          }
        ]
      },
      {
        id: "sp4-ch5-lecon2",
        titre: "Définir le volume molaire",
        blocs: [
          {
            type: "definition",
            titre: "Volume molaire d'un gaz",
            texte: "Le volume molaire d'un gaz, noté Vₘ, est le volume occupé par une mole de ce gaz dans des conditions données de température et de pression. On l'exprime souvent en litres par mole, de symbole L/mol."
          },
          {
            type: "exemple",
            titre: "Comprendre l'unité",
            texte: "Si, dans certaines conditions, le volume molaire vaut 24 L/mol, alors une mole de gaz occupe un volume de 24 L dans ces conditions."
          },
          {
            type: "regle",
            titre: "Une valeur qui dépend des conditions",
            texte: "Le volume molaire d'un gaz change avec la température et la pression. Il ne faut donc pas utiliser une valeur sans vérifier à quelles conditions elle correspond."
          },
          {
            type: "remarque",
            titre: "Même nombre de moles, même volume ?",
            texte: "Dans les mêmes conditions de température et de pression, des gaz assimilés à des gaz parfaits occupent le même volume s'ils ont la même quantité de matière. Leurs masses peuvent cependant être différentes."
          }
        ]
      },
      {
        id: "sp4-ch5-lecon3",
        titre: "Les valeurs courantes du volume molaire",
        blocs: [
          {
            type: "tableau",
            titre: "Valeurs approchées pour un gaz assimilé à un gaz parfait",
            entetes: ["Température", "Pression", "Volume molaire approché"],
            lignes: [
              ["0 °C", "1 atm, soit environ 101 300 Pa", "22,4 L/mol"],
              ["20 °C", "1 atm, soit environ 101 300 Pa", "24,0 L/mol"]
            ]
          },
          {
            type: "exemple",
            titre: "Une mole à 0 °C",
            texte: "À 0 °C et sous une pression de 1 atm, une mole d'un gaz assimilé à un gaz parfait occupe environ 22,4 L."
          },
          {
            type: "remarque",
            titre: "Ne pas mélanger les conditions",
            texte: "La valeur 22,4 L/mol correspond ici à 0 °C et 1 atm. À 20 °C et 1 atm, on utilise plutôt environ 24,0 L/mol. Dans un exercice, utilise en priorité la valeur donnée par l'énoncé."
          },
          {
            type: "remarque",
            titre: "Des valeurs approchées",
            texte: "Ces valeurs sont calculées pour un modèle de gaz parfait. Les gaz réels peuvent s'en écarter, notamment dans certaines conditions de pression et de température."
          }
        ]
      },
      {
        id: "sp4-ch5-lecon4",
        titre: "Relier volume et quantité de matière",
        blocs: [
          {
            type: "regle",
            titre: "Les relations utiles",
            texte: "Si V est le volume du gaz en litres, n sa quantité de matière en moles et Vₘ le volume molaire en L/mol :\nV = n × Vₘ\nn = V ÷ Vₘ\nVₘ = V ÷ n."
          },
          {
            type: "exemple",
            titre: "Calculer un volume",
            texte: "Dans des conditions où Vₘ = 24 L/mol, quel volume occupent 2 mol de gaz ?\nV = n × Vₘ = 2 × 24 = 48 L."
          },
          {
            type: "exemple",
            titre: "Calculer une quantité de matière",
            texte: "Dans des conditions où Vₘ = 24 L/mol, quelle quantité de matière correspond à 12 L de gaz ?\nn = V ÷ Vₘ = 12 ÷ 24 = 0,5 mol."
          },
          {
            type: "methode",
            titre: "Résoudre un exercice",
            texte: "1. Repère le volume V, la quantité de matière n et le volume molaire Vₘ.\n2. Vérifie que Vₘ correspond aux conditions de l'exercice.\n3. Convertis les unités si nécessaire.\n4. Choisis V = n × Vₘ ou n = V ÷ Vₘ.\n5. Effectue le calcul et indique l'unité."
          }
        ]
      },
      {
        id: "sp4-ch5-lecon5",
        titre: "Relier volume, quantité de matière et masse",
        blocs: [
          {
            type: "texte",
            titre: "Deux étapes",
            texte: "Pour relier le volume d'un gaz à sa masse, on peut passer par la quantité de matière n. On utilise le volume molaire Vₘ et la masse molaire M."
          },
          {
            type: "regle",
            titre: "Les deux relations",
            texte: "Pour le volume : V = n × Vₘ.\nPour la masse : m = n × M.\nIl faut utiliser des unités compatibles : V en L, Vₘ en L/mol, m en g et M en g/mol."
          },
          {
            type: "exemple",
            titre: "De la masse au volume",
            texte: "On considère 32 g de dioxygène O₂. Sa masse molaire est M(O₂) = 32 g/mol. Dans les conditions de l'exercice, Vₘ = 24 L/mol.\nD'abord : n = m ÷ M = 32 ÷ 32 = 1 mol.\nEnsuite : V = n × Vₘ = 1 × 24 = 24 L.\nLe dioxygène occupe 24 L dans ces conditions."
          },
          {
            type: "methode",
            titre: "Passer de V à m",
            texte: "1. Calcule la quantité de matière : n = V ÷ Vₘ.\n2. Calcule ou relève la masse molaire M du gaz.\n3. Calcule la masse : m = n × M.\n4. Donne la réponse en grammes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que le volume molaire d'un gaz ? Donne une unité utilisée pour l'exprimer.",
        correction: "Le volume molaire d'un gaz est le volume occupé par une mole de ce gaz dans des conditions données de température et de pression. Il peut s'exprimer en L/mol."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis :\n1. 2 L en mL.\n2. 0,5 m³ en L.",
        correction: "1. 1 L = 1 000 mL, donc 2 L = 2 000 mL.\n2. 1 m³ = 1 000 L, donc 0,5 m³ = 500 L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans des conditions où Vₘ = 24 L/mol, calcule le volume occupé par 0,5 mol d'un gaz.",
        correction: "V = n × Vₘ = 0,5 × 24 = 12 L.\nLe gaz occupe 12 L dans ces conditions."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans des conditions où Vₘ = 22,4 L/mol, quelle quantité de matière correspond à 44,8 L de gaz ?",
        correction: "n = V ÷ Vₘ = 44,8 ÷ 22,4 = 2 mol.\nLe gaz correspond à une quantité de matière de 2 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux récipients contiennent chacun 1 mol de gaz assimilé à un gaz parfait : l'un contient du dioxygène, l'autre du dioxyde de carbone. Ils sont à la même température et à la même pression.\n1. Leurs volumes sont-ils égaux ?\n2. Leurs masses sont-elles nécessairement égales ?",
        correction: "1. Oui. Dans les mêmes conditions de température et de pression, deux quantités égales de gaz assimilés à des gaz parfaits occupent le même volume.\n2. Non. Les masses molaires de O₂ et de CO₂ sont différentes ; une mole de chaque gaz n'a donc pas la même masse."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère 48 L d'un gaz dans des conditions où Vₘ = 24 L/mol.\n1. Calcule la quantité de matière du gaz.\n2. Estime le nombre de molécules. Donnée : Nₐ ≈ 6,02 × 10²³ mol⁻¹.",
        correction: "1. n = V ÷ Vₘ = 48 ÷ 24 = 2 mol.\n2. N = n × Nₐ = 2 × 6,02 × 10²³ = 1,204 × 10²⁴.\nIl y a environ 1,204 × 10²⁴ molécules."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On dispose de 16 g de dioxygène O₂. Dans les conditions de l'exercice, Vₘ = 24 L/mol. Donnée : M(O₂) = 32 g/mol.\n1. Calcule la quantité de matière de dioxygène.\n2. Calcule son volume.",
        correction: "1. n = m ÷ M = 16 ÷ 32 = 0,5 mol.\n2. V = n × Vₘ = 0,5 × 24 = 12 L.\nLes 16 g de dioxygène occupent 12 L dans les conditions indiquées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de dioxyde de carbone CO₂ occupe 4,8 L dans des conditions où Vₘ = 24 L/mol. Donnée : M(CO₂) = 44 g/mol.\n1. Calcule la quantité de matière.\n2. Calcule la masse de l'échantillon.",
        correction: "1. n = V ÷ Vₘ = 4,8 ÷ 24 = 0,2 mol.\n2. m = n × M = 0,2 × 44 = 8,8 g.\nLa masse de l'échantillon est 8,8 g."
      }
    ]
  }
]);
