enregistrerChapitres("5e", "sp", [
  {
    id: 9,
    titre: "Chapitre 9 : L’intensité du courant électrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce que l’intensité ?",
        blocs: [
          {
            type: "texte",
            texte: "Dans un circuit fermé, le courant électrique correspond à un déplacement ordonné de charges électriques. Son intensité indique la quantité de charge qui traverse une section du circuit pendant une durée donnée."
          },
          {
            type: "definition",
            texte: "L’intensité du courant électrique est une grandeur physique notée I. Elle s’exprime en ampères, de symbole A."
          },
          {
            type: "exemple",
            texte: "Dans une branche, l’intensité peut par exemple être de 0,2 A. On peut aussi l’écrire 200 mA."
          }
        ]
      },
      {
        id: 2,
        titre: "L’ampère et le milliampère",
        blocs: [
          {
            type: "texte",
            texte: "Pour les faibles intensités, on utilise souvent le milliampère, de symbole mA."
          },
          {
            type: "regle",
            texte: "1 A = 1 000 mA. Pour passer de A à mA, on multiplie par 1 000. Pour passer de mA à A, on divise par 1 000."
          },
          {
            type: "exemple",
            texte: "0,3 A = 300 mA. Inversement, 75 mA = 0,075 A."
          },
          {
            type: "remarque",
            texte: "Avant d’additionner ou de comparer des intensités, il faut les exprimer dans la même unité."
          }
        ]
      },
      {
        id: 3,
        titre: "Mesurer une intensité",
        blocs: [
          {
            type: "definition",
            texte: "L’ampèremètre est l’appareil qui mesure l’intensité du courant. Sur un schéma électrique, on le représente par un cercle contenant la lettre A."
          },
          {
            type: "regle",
            texte: "Un ampèremètre se branche en série dans la branche où l’on veut mesurer l’intensité."
          },
          {
            type: "methode",
            texte: "Pour mesurer une intensité dans un circuit à pile :\n1. Ouvrir le circuit et débrancher la pile.\n2. Insérer l’ampèremètre en série dans la branche choisie.\n3. Choisir le réglage de courant continu et un calibre suffisamment grand.\n4. Respecter les bornes et les indications de l’appareil.\n5. Refermer le circuit et lire la valeur avec son unité."
          },
          {
            type: "remarque",
            texte: "Avec un multimètre, les prises et les réglages dépendent de l’appareil. Demande l’aide d’un adulte et consulte sa notice avant le branchement."
          },
          {
            type: "regle",
            texte: "Ne branche jamais un ampèremètre directement aux bornes d’une pile : cela peut provoquer un court-circuit. Ne réalise aucun montage sur une prise électrique."
          }
        ]
      },
      {
        id: 4,
        titre: "L’intensité dans un circuit en série",
        blocs: [
          {
            type: "regle",
            texte: "Dans un circuit en série, l’intensité du courant est la même en tout point de la boucle."
          },
          {
            type: "exemple",
            texte: "Dans un circuit en série composé d’une pile et de deux lampes, si l’intensité mesurée près de la pile est de 0,2 A, elle est aussi de 0,2 A dans chacune des lampes."
          },
          {
            type: "remarque",
            texte: "L’ordre des dipôles dans une même boucle en série ne change pas l’intensité qui les traverse, si les composants et leurs conditions de fonctionnement restent les mêmes."
          }
        ]
      },
      {
        id: 5,
        titre: "L’intensité dans un circuit en dérivation",
        blocs: [
          {
            type: "texte",
            texte: "Dans un circuit en dérivation, le courant se répartit entre les branches au niveau d’un nœud."
          },
          {
            type: "regle",
            texte: "Loi des nœuds : la somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent."
          },
          {
            type: "exemple",
            texte: "Si un courant de 0,5 A arrive à un nœud et se répartit dans deux branches parcourues par 0,2 A et 0,3 A, alors 0,5 A = 0,2 A + 0,3 A."
          },
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 240" role="img" aria-label="Répartition du courant à un nœud">
              <line x1="35" y1="120" x2="200" y2="120" stroke="#334155" stroke-width="3"/>
              <line x1="200" y1="120" x2="380" y2="45" stroke="#334155" stroke-width="3"/>
              <line x1="200" y1="120" x2="380" y2="195" stroke="#334155" stroke-width="3"/>
              <circle cx="200" cy="120" r="6" fill="#334155"/>
              <path d="M125 120 l-12 -7 v14 z" fill="#2563eb"/>
              <path d="M300 78 l-14 -1 l6 13 z" fill="#2563eb"/>
              <path d="M300 162 l-8 -12 l-6 13 z" fill="#2563eb"/>
              <text x="55" y="102" font-size="16" fill="#334155">I = 0,5 A</text>
              <text x="270" y="45" font-size="16" fill="#334155">I1 = 0,2 A</text>
              <text x="270" y="220" font-size="16" fill="#334155">I2 = 0,3 A</text>
              <text x="185" y="105" font-size="15" fill="#334155">Nœud</text>
            </svg>`,
            legende: "Au nœud, 0,5 A arrive et se répartit en 0,2 A et 0,3 A."
          },
          {
            type: "remarque",
            texte: "Les intensités dans les différentes branches ne sont pas forcément égales : elles dépendent des composants de chaque branche."
          }
        ]
      },
      {
        id: 6,
        titre: "Calculer une intensité inconnue",
        blocs: [
          {
            type: "methode",
            texte: "1. Repérer le nœud et le sens des courants.\n2. Écrire la loi des nœuds.\n3. Mettre toutes les intensités dans la même unité.\n4. Calculer l’intensité inconnue."
          },
          {
            type: "exemple",
            texte: "Un courant de 0,7 A arrive à un nœud. Une branche est parcourue par 0,25 A et l’autre par une intensité inconnue I. Alors 0,7 = 0,25 + I, donc I = 0,7 − 0,25 = 0,45 A."
          },
          {
            type: "exemple",
            texte: "Un courant de 600 mA arrive à un nœud. Si 0,2 A part dans une branche, l’autre branche reçoit 600 mA − 200 mA = 400 mA."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Quel est le symbole de l’intensité du courant ?",
        correction: "L’intensité du courant se note I."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel appareil mesure l’intensité ? Comment se branche-t-il ?",
        correction: "L’ampèremètre mesure l’intensité. Il se branche en série dans la branche étudiée."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Complète : 1 A = … mA.",
        correction: "1 A = 1 000 mA."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis : a) 0,4 A en mA ; b) 250 mA en A.",
        correction: "a) 0,4 A = 400 mA.\nb) 250 mA = 0,25 A."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Dans un circuit en série, une intensité de 0,15 A traverse la première lampe. Quelle intensité traverse la seconde ?",
        correction: "L’intensité est la même en tout point de la boucle : la seconde lampe est traversée par 0,15 A."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Pourquoi ne faut-il pas brancher un ampèremètre directement aux bornes d’une pile ?",
        correction: "Cela peut provoquer un court-circuit et un échauffement dangereux. L’ampèremètre se branche en série dans la branche étudiée."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Au niveau d’un nœud, 0,6 A arrive et se répartit dans deux branches. La première est parcourue par 0,2 A. Quelle est l’intensité dans la seconde ?",
        correction: "D’après la loi des nœuds : 0,6 = 0,2 + I.\nDonc I = 0,6 − 0,2 = 0,4 A."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Deux courants de 120 mA et 80 mA se rejoignent à un nœud. Quelle intensité repart si aucune autre branche n’est reliée à ce nœud ?",
        correction: "La somme des intensités entrantes est égale à l’intensité sortante : 120 + 80 = 200 mA."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une intensité de 0,5 A arrive à un nœud. Elle se répartit dans deux branches, dont l’une est parcourue par 150 mA. Calcule l’intensité dans l’autre branche en mA.",
        correction: "0,5 A = 500 mA.\nL’intensité cherchée est donc 500 − 150 = 350 mA."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un courant de 0,9 A arrive à un nœud et se répartit dans trois branches. Les deux premières sont parcourues par 0,2 A et 350 mA. Calcule l’intensité dans la troisième branche.",
        correction: "350 mA = 0,35 A.\nLa troisième intensité vaut donc 0,9 − 0,2 − 0,35 = 0,35 A, soit 350 mA."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Dans un circuit en série, un élève mesure 0,3 A avant une lampe et affirme que l’intensité après la lampe doit être plus faible parce que la lampe utilise le courant. A-t-il raison ?",
        correction: "Non. Dans une même boucle en série, l’intensité est la même en tout point : elle est aussi de 0,3 A après la lampe. La lampe transforme de l’énergie électrique, mais ne consomme pas le courant."
      }
    ]
  }
]);
