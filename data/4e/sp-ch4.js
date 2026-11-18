// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch4",
    titre: "Chapitre 4 : La mole et la masse molaire",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch4-lecon1",
        titre: "Pourquoi utiliser la mole ?",
        blocs: [
          {
            type: "texte",
            titre: "Un très grand nombre d'entités",
            texte: "Un échantillon de matière contient un très grand nombre d'atomes, de molécules ou d'ions. Les compter un par un serait impossible en pratique. Les chimistes utilisent donc une unité adaptée : la mole."
          },
          {
            type: "exemple",
            titre: "Une comparaison",
            texte: "Une douzaine d'œufs contient 12 œufs. De la même façon, une mole indique un nombre d'entités, mais ce nombre est beaucoup plus grand. On peut parler d'une mole d'atomes, d'une mole de molécules ou d'une mole d'ions."
          },
          {
            type: "definition",
            titre: "La mole",
            texte: "Une mole contient exactement 6,02214076 × 10²³ entités. Pour les calculs de ce chapitre, nous utiliserons la valeur approchée 6,02 × 10²³."
          },
          {
            type: "definition",
            titre: "La constante d'Avogadro",
            texte: "La constante d'Avogadro, notée Nₐ, vaut exactement 6,02214076 × 10²³ par mole. Nous utiliserons Nₐ ≈ 6,02 × 10²³ mol⁻¹."
          },
          {
            type: "remarque",
            titre: "Préciser les entités",
            texte: "Il faut préciser ce que l'on compte : une mole d'atomes d'oxygène et une mole de molécules de dioxygène contiennent le même nombre d'entités, mais ces entités ne sont pas identiques."
          }
        ]
      },
      {
        id: "sp4-ch4-lecon2",
        titre: "Quantité de matière et nombre d'entités",
        blocs: [
          {
            type: "definition",
            titre: "Quantité de matière",
            texte: "La quantité de matière est une grandeur notée n. Son unité est la mole, de symbole mol."
          },
          {
            type: "regle",
            titre: "Relier n et N",
            texte: "Si N est le nombre d'entités et n la quantité de matière en moles :\nN = n × Nₐ\nn = N ÷ Nₐ\navec Nₐ ≈ 6,02 × 10²³ mol⁻¹."
          },
          {
            type: "exemple",
            titre: "De la quantité au nombre d'entités",
            texte: "Pour n = 2 mol de molécules d'eau :\nN = n × Nₐ = 2 × 6,02 × 10²³.\nN ≈ 1,204 × 10²⁴ molécules d'eau."
          },
          {
            type: "exemple",
            titre: "Du nombre d'entités à la quantité",
            texte: "Un échantillon contient environ 3,01 × 10²³ atomes de fer.\nn = N ÷ Nₐ = (3,01 × 10²³) ÷ (6,02 × 10²³).\nn ≈ 0,5 mol d'atomes de fer."
          },
          {
            type: "methode",
            titre: "Choisir la bonne relation",
            texte: "1. Identifie l'entité étudiée et la grandeur donnée : N ou n.\n2. Pour trouver N à partir de n, multiplie par Nₐ.\n3. Pour trouver n à partir de N, divise par Nₐ.\n4. Donne l'unité mol pour n et précise les entités comptées."
          }
        ]
      },
      {
        id: "sp4-ch4-lecon3",
        titre: "La masse molaire",
        blocs: [
          {
            type: "definition",
            titre: "Masse molaire",
            texte: "La masse molaire d'une espèce chimique est la masse d'une mole de ses entités. Elle se note M. Dans ce chapitre, nous l'exprimerons en grammes par mole, de symbole g/mol."
          },
          {
            type: "exemple",
            titre: "Masse molaire du carbone",
            texte: "La masse molaire des atomes de carbone est environ M(C) = 12 g/mol. Cela signifie qu'une mole d'atomes de carbone a une masse d'environ 12 g."
          },
          {
            type: "tableau",
            titre: "Quelques masses molaires atomiques arrondies",
            entetes: ["Élément", "Symbole", "Masse molaire"],
            lignes: [
              ["Hydrogène", "H", "1 g/mol"],
              ["Carbone", "C", "12 g/mol"],
              ["Azote", "N", "14 g/mol"],
              ["Oxygène", "O", "16 g/mol"],
              ["Sodium", "Na", "23 g/mol"],
              ["Chlore", "Cl", "35,5 g/mol"],
              ["Fer", "Fe", "56 g/mol"]
            ]
          },
          {
            type: "remarque",
            titre: "Lire l'unité",
            texte: "L'unité g/mol se lit « gramme par mole ». Elle ne doit pas être confondue avec le gramme, unité de masse, ni avec la mole, unité de quantité de matière."
          }
        ]
      },
      {
        id: "sp4-ch4-lecon4",
        titre: "Calculer une masse molaire moléculaire",
        blocs: [
          {
            type: "regle",
            titre: "Additionner les contributions",
            texte: "Pour calculer la masse molaire d'une molécule, on additionne les masses molaires des atomes indiqués par sa formule, en tenant compte des indices."
          },
          {
            type: "exemple",
            titre: "La masse molaire de l'eau",
            texte: "Une molécule d'eau a pour formule H₂O. Elle contient 2 atomes H et 1 atome O.\nAvec M(H) = 1 g/mol et M(O) = 16 g/mol :\nM(H₂O) = 2 × 1 + 1 × 16 = 18 g/mol."
          },
          {
            type: "exemple",
            titre: "La masse molaire du dioxyde de carbone",
            texte: "La formule est CO₂ : il y a 1 atome C et 2 atomes O.\nM(CO₂) = 1 × 12 + 2 × 16 = 44 g/mol."
          },
          {
            type: "methode",
            titre: "Calculer M à partir d'une formule",
            texte: "1. Lis la formule et compte les atomes de chaque élément dans une molécule.\n2. Cherche les masses molaires atomiques données dans l'énoncé ou dans un tableau.\n3. Multiplie chaque masse molaire atomique par le nombre d'atomes correspondant.\n4. Additionne et écris le résultat en g/mol."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre avec un coefficient",
            texte: "La masse molaire M(H₂O) concerne une mole de molécules H₂O. Un coefficient écrit devant une formule indique un nombre de molécules ou une proportion dans une équation : il ne modifie pas la masse molaire de H₂O."
          }
        ]
      },
      {
        id: "sp4-ch4-lecon5",
        titre: "Relier masse et quantité de matière",
        blocs: [
          {
            type: "regle",
            titre: "Les relations utiles",
            texte: "Si m est la masse en grammes, n la quantité de matière en moles et M la masse molaire en g/mol :\nm = n × M\nn = m ÷ M\nM = m ÷ n."
          },
          {
            type: "exemple",
            titre: "Calculer une masse",
            texte: "Quelle est la masse de 2 mol d'eau ?\nM(H₂O) = 18 g/mol.\nm = n × M = 2 × 18 = 36 g.\nLa masse de 2 mol d'eau est donc 36 g."
          },
          {
            type: "exemple",
            titre: "Calculer une quantité de matière",
            texte: "Quelle quantité de matière correspond à 44 g de dioxyde de carbone ?\nM(CO₂) = 44 g/mol.\nn = m ÷ M = 44 ÷ 44 = 1 mol."
          },
          {
            type: "methode",
            titre: "Résoudre un problème de masse",
            texte: "1. Note la masse m, la quantité n et la masse molaire M connues ou recherchées.\n2. Si nécessaire, calcule M à partir de la formule chimique.\n3. Utilise m = n × M ou n = m ÷ M selon la grandeur cherchée.\n4. Vérifie les unités : g, mol et g/mol."
          },
          {
            type: "remarque",
            titre: "Attention aux unités",
            texte: "Si M est donnée en g/mol, la masse doit être en grammes. Par exemple, 0,036 kg = 36 g. Il faut convertir avant d'utiliser les relations de cette leçon."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est l'unité de la quantité de matière ? Combien d'entités trouve-t-on approximativement dans une mole ?",
        correction: "L'unité de la quantité de matière est la mole, de symbole mol. Une mole contient environ 6,02 × 10²³ entités."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La masse molaire du fer est M(Fe) = 56 g/mol. Quelle est la masse d'une mole d'atomes de fer ?",
        correction: "La masse molaire indique la masse d'une mole. Une mole d'atomes de fer a donc une masse de 56 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule le nombre de molécules dans 2 mol de dioxygène. Utilise Nₐ ≈ 6,02 × 10²³ mol⁻¹.",
        correction: "N = n × Nₐ.\nN = 2 × 6,02 × 10²³ = 1,204 × 10²⁴.\nIl y a environ 1,204 × 10²⁴ molécules de dioxygène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule la masse molaire de O₂. Donnée : M(O) = 16 g/mol.",
        correction: "Une molécule O₂ contient 2 atomes d'oxygène.\nM(O₂) = 2 × M(O) = 2 × 16 = 32 g/mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule la masse de 0,5 mol de dioxyde de carbone CO₂. Données : M(C) = 12 g/mol et M(O) = 16 g/mol.",
        correction: "M(CO₂) = 12 + 2 × 16 = 44 g/mol.\nPuis m = n × M = 0,5 × 44 = 22 g.\nLa masse cherchée est 22 g."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dispose de 36 g d'eau H₂O. Calcule la quantité de matière correspondante. Données : M(H) = 1 g/mol et M(O) = 16 g/mol.",
        correction: "M(H₂O) = 2 × 1 + 16 = 18 g/mol.\nn = m ÷ M = 36 ÷ 18 = 2 mol.\nLes 36 g d'eau correspondent à 2 mol de molécules d'eau."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de méthane CH₄ a une masse de 8 g.\n1. Calcule M(CH₄).\n2. Calcule la quantité de matière de méthane.\n3. Estime le nombre de molécules.\nDonnées : M(C) = 12 g/mol ; M(H) = 1 g/mol ; Nₐ ≈ 6,02 × 10²³ mol⁻¹.",
        correction: "1. M(CH₄) = 12 + 4 × 1 = 16 g/mol.\n2. n = m ÷ M = 8 ÷ 16 = 0,5 mol.\n3. N = n × Nₐ = 0,5 × 6,02 × 10²³ = 3,01 × 10²³.\nL'échantillon contient environ 3,01 × 10²³ molécules de méthane."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon contient environ 1,204 × 10²⁴ molécules d'eau.\n1. Calcule la quantité de matière d'eau.\n2. Calcule la masse de l'échantillon.\nDonnées : Nₐ ≈ 6,02 × 10²³ mol⁻¹ ; M(H₂O) = 18 g/mol.",
        correction: "1. n = N ÷ Nₐ = (1,204 × 10²⁴) ÷ (6,02 × 10²³) = 2 mol.\n2. m = n × M = 2 × 18 = 36 g.\nL'échantillon contient environ 2 mol d'eau et sa masse est d'environ 36 g."
      }
    ]
  }
]);
