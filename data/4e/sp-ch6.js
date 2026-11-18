// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch6",
    titre: "Chapitre 6 : Les solutions aqueuses",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch6-lecon1",
        titre: "Solvant, soluté et solution",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel de 5e",
            texte: "Lorsqu'on mélange une petite quantité de sucre avec de l'eau et que le sucre se dissout entièrement, on obtient un mélange homogène : on ne distingue plus le sucre à l'œil nu."
          },
          {
            type: "definition",
            titre: "La dissolution",
            texte: "La dissolution est le processus par lequel une substance, appelée soluté, se répartit dans un solvant pour former une solution homogène."
          },
          {
            type: "definition",
            titre: "Soluté, solvant et solution",
            texte: "Le soluté est la substance dissoute. Le solvant est le liquide qui dissout le soluté. Le mélange homogène obtenu s'appelle la solution."
          },
          {
            type: "definition",
            titre: "Solution aqueuse",
            texte: "Une solution aqueuse est une solution dont le solvant est l'eau."
          },
          {
            type: "exemple",
            titre: "L'eau sucrée",
            texte: "Dans une solution obtenue en dissolvant du sucre dans de l'eau : le sucre est le soluté, l'eau est le solvant et le mélange homogène est une solution aqueuse."
          },
          {
            type: "remarque",
            titre: "Le sucre n'a pas disparu",
            texte: "Le sucre dissous ne se voit plus, mais il est toujours présent dans la solution. Sa matière s'est répartie dans l'eau."
          }
        ]
      },
      {
        id: "sp4-ch6-lecon2",
        titre: "Dissolution et saturation",
        blocs: [
          {
            type: "definition",
            titre: "Solubilité",
            texte: "Pour un soluté donné, la solubilité indique la quantité maximale de ce soluté que l'on peut dissoudre dans une quantité donnée de solvant, dans des conditions précisées, notamment à une température donnée."
          },
          {
            type: "definition",
            titre: "Solution saturée",
            texte: "Une solution est saturée lorsqu'elle contient la quantité maximale de soluté dissous possible dans les conditions considérées. Si l'on ajoute encore du soluté, celui-ci ne se dissout pas entièrement."
          },
          {
            type: "exemple",
            titre: "Ajouter du sel",
            texte: "Si l'on ajoute progressivement du sel à de l'eau et qu'on mélange, une partie du sel peut se dissoudre. Si la solution devient saturée, le sel ajouté en plus reste non dissous au fond du récipient."
          },
          {
            type: "remarque",
            titre: "La température compte",
            texte: "La solubilité peut varier avec la température. Il faut donc tenir compte des conditions indiquées dans un exercice et éviter de généraliser le comportement d'un soluté à tous les autres."
          },
          {
            type: "remarque",
            titre: "Mélange homogène et dépôt",
            texte: "La solution elle-même est homogène. Si du soluté non dissous reste au fond, l'ensemble constitué de la solution et du dépôt est un mélange hétérogène."
          }
        ]
      },
      {
        id: "sp4-ch6-lecon3",
        titre: "La concentration massique",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La concentration massique d'un soluté est la masse de soluté dissous par unité de volume de solution. Elle se note ici Cₘ."
          },
          {
            type: "regle",
            titre: "La formule",
            texte: "Cₘ = m ÷ V\navec Cₘ en g/L, m la masse de soluté dissous en g et V le volume de solution en L."
          },
          {
            type: "exemple",
            titre: "Une solution sucrée",
            texte: "Une solution de volume 0,5 L contient 10 g de sucre dissous.\nCₘ = m ÷ V = 10 ÷ 0,5 = 20 g/L.\nSa concentration massique en sucre est 20 g/L."
          },
          {
            type: "methode",
            titre: "Calculer une concentration massique",
            texte: "1. Repère la masse de soluté réellement dissous et le volume final de solution.\n2. Convertis la masse en grammes et le volume en litres si nécessaire.\n3. Calcule Cₘ = m ÷ V.\n4. Donne le résultat en g/L."
          },
          {
            type: "remarque",
            titre: "Volume de solution, pas volume d'eau",
            texte: "Dans la formule, V est le volume final de la solution, et non automatiquement le volume d'eau utilisé au départ. Lis attentivement les données de l'énoncé."
          }
        ]
      },
      {
        id: "sp4-ch6-lecon4",
        titre: "Utiliser la concentration massique",
        blocs: [
          {
            type: "regle",
            titre: "Trois relations",
            texte: "À partir de Cₘ = m ÷ V, on obtient :\nm = Cₘ × V\nV = m ÷ Cₘ.\nAvec Cₘ en g/L, V en L et m en g."
          },
          {
            type: "exemple",
            titre: "Trouver une masse",
            texte: "Une solution a une concentration massique de 8 g/L. Quelle masse de soluté dissous y a-t-il dans 0,25 L de cette solution ?\nm = Cₘ × V = 8 × 0,25 = 2 g."
          },
          {
            type: "exemple",
            titre: "Trouver un volume",
            texte: "Une solution contient 6 g de soluté dissous à la concentration de 12 g/L.\nV = m ÷ Cₘ = 6 ÷ 12 = 0,5 L."
          },
          {
            type: "remarque",
            titre: "Comparer deux concentrations",
            texte: "À volume de solution égal, la solution qui contient la plus grande masse de soluté dissous est la plus concentrée en ce soluté."
          }
        ]
      },
      {
        id: "sp4-ch6-lecon5",
        titre: "Comprendre la dilution",
        blocs: [
          {
            type: "definition",
            titre: "Dilution",
            texte: "Diluer une solution consiste à ajouter du solvant pour obtenir une solution moins concentrée."
          },
          {
            type: "regle",
            titre: "Ce qui change et ce qui reste",
            texte: "Lors d'une dilution sans perte de soluté, la masse de soluté dissous reste la même. Le volume de solution augmente et la concentration massique diminue."
          },
          {
            type: "exemple",
            titre: "Doubler le volume",
            texte: "Une solution contient 10 g de sucre dissous dans un volume de 0,5 L : sa concentration est 20 g/L. On ajoute de l'eau jusqu'à obtenir 1 L de solution, sans perdre de sucre.\nLa masse de sucre reste 10 g. La nouvelle concentration vaut 10 ÷ 1 = 10 g/L : elle a été divisée par deux."
          },
          {
            type: "remarque",
            titre: "Des exemples sans danger",
            texte: "Les exercices de ce chapitre utilisent des situations simples comme l'eau sucrée. Ne goûte jamais une solution inconnue et ne manipule pas de produits chimiques sans encadrement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On dissout du sucre dans de l'eau. Identifie le soluté et le solvant. Pourquoi la solution est-elle dite aqueuse ?",
        correction: "Le sucre est le soluté et l'eau est le solvant. La solution est dite aqueuse parce que son solvant est l'eau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une solution saturée de sel contient encore du sel non dissous au fond du récipient. L'ensemble est-il homogène ou hétérogène ?",
        correction: "La solution elle-même est homogène, mais l'ensemble formé de la solution et du dépôt de sel est hétérogène : on distingue le dépôt de la solution."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution de volume 2 L contient 30 g de soluté dissous. Calcule sa concentration massique.",
        correction: "Cₘ = m ÷ V = 30 ÷ 2 = 15 g/L.\nLa concentration massique est 15 g/L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution a une concentration massique de 12 g/L. Quelle masse de soluté dissous contient un volume de 0,5 L de cette solution ?",
        correction: "m = Cₘ × V = 12 × 0,5 = 6 g.\nLe volume de 0,5 L contient 6 g de soluté dissous."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution de volume 250 mL contient 5 g de sucre dissous. Calcule sa concentration massique en g/L.",
        correction: "Il faut convertir le volume : 250 mL = 0,250 L.\nCₘ = m ÷ V = 5 ÷ 0,250 = 20 g/L.\nLa concentration massique est 20 g/L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution A contient 8 g de sel dissous dans 0,5 L. Une solution B contient 12 g de sel dissous dans 1 L. Quelle solution est la plus concentrée en sel ?",
        correction: "Pour A : Cₘ = 8 ÷ 0,5 = 16 g/L.\nPour B : Cₘ = 12 ÷ 1 = 12 g/L.\nComme 16 g/L est supérieur à 12 g/L, la solution A est la plus concentrée en sel."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une solution contient 6 g de sucre dissous dans 300 mL. On ajoute de l'eau jusqu'à obtenir 600 mL de solution, sans perte de sucre.\n1. Calcule la concentration initiale.\n2. Quelle est la masse de sucre après dilution ?\n3. Calcule la concentration finale.",
        correction: "1. 300 mL = 0,300 L. La concentration initiale est Cₘ = 6 ÷ 0,300 = 20 g/L.\n2. La dilution se fait sans perte : la masse de sucre reste 6 g.\n3. 600 mL = 0,600 L. La concentration finale est Cₘ = 6 ÷ 0,600 = 10 g/L. Elle a diminué de moitié."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On prépare 0,4 L d'une solution contenant 8 g de sel dissous.\n1. Calcule sa concentration massique.\n2. Quelle masse de sel dissous se trouve dans 0,1 L de cette solution homogène ?\n3. Explique pourquoi ce n'est pas 8 g.",
        correction: "1. Cₘ = 8 ÷ 0,4 = 20 g/L.\n2. Dans 0,1 L : m = Cₘ × V = 20 × 0,1 = 2 g.\n3. Les 8 g sont répartis dans toute la solution, de volume 0,4 L. Le prélèvement de 0,1 L ne représente qu'une partie de la solution et contient donc une partie du sel."
      }
    ]
  }
]);
