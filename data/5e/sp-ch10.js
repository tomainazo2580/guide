enregistrerChapitres("5e", "sp", [
  {
    id: 10,
    titre: "La tension électrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce que la tension électrique ?",
        blocs: [
          {
            type: "texte",
            contenu: "Une pile possède deux bornes. On peut mesurer une tension électrique entre ces deux bornes. On peut aussi mesurer une tension entre les bornes d’une lampe ou d’un autre dipôle."
          },
          {
            type: "definition",
            contenu: "La tension électrique est une grandeur mesurée entre deux points d’un circuit. Elle se note généralement U et son unité est le volt, de symbole V."
          },
          {
            type: "exemple",
            contenu: "Une pile porte par exemple l’indication 1,5 V. Cette valeur indique sa tension nominale."
          },
          {
            type: "remarque",
            contenu: "La tension et l’intensité sont deux grandeurs différentes : la tension se mesure entre deux points, tandis que l’intensité caractérise le courant dans une branche."
          }
        ]
      },
      {
        id: 2,
        titre: "Les unités de tension",
        blocs: [
          {
            type: "texte",
            contenu: "En plus du volt, on utilise parfois le millivolt, de symbole mV."
          },
          {
            type: "regle",
            contenu: "1 V = 1 000 mV. Pour passer de V à mV, on multiplie par 1 000. Pour passer de mV à V, on divise par 1 000."
          },
          {
            type: "exemple",
            contenu: "2,5 V = 2 500 mV. Inversement, 750 mV = 0,75 V."
          },
          {
            type: "remarque",
            contenu: "Avant d’additionner ou de comparer des tensions, il faut les exprimer dans la même unité."
          }
        ]
      },
      {
        id: 3,
        titre: "Mesurer une tension",
        blocs: [
          {
            type: "definition",
            contenu: "Le voltmètre est l’appareil qui mesure une tension électrique. Sur un schéma, on le représente par un cercle contenant la lettre V."
          },
          {
            type: "regle",
            contenu: "Un voltmètre se branche en dérivation, c’est-à-dire entre les deux points entre lesquels on veut mesurer la tension."
          },
          {
            type: "methode",
            contenu: "Pour mesurer la tension aux bornes d’une lampe dans un circuit à pile : 1. Régler l’appareil sur la mesure de tension continue avec un calibre suffisamment grand. 2. Brancher le voltmètre en dérivation aux bornes de la lampe. 3. Mettre le circuit en fonctionnement et lire la valeur avec son unité."
          },
          {
            type: "remarque",
            contenu: "Avec un multimètre, les prises et les réglages dépendent de l’appareil. Respecte sa notice et demande l’aide d’un adulte. Pour une pile, on utilise le réglage de tension continue."
          },
          {
            type: "remarque",
            contenu: "Si l’appareil affiche une valeur négative, ses bornes sont peut-être inversées par rapport au sens de mesure choisi."
          },
          {
            type: "regle",
            contenu: "Ne réalise jamais de mesure sur une prise électrique. Utilise uniquement une pile adaptée et du matériel en bon état."
          }
        ]
      },
      {
        id: 4,
        titre: "La tension dans un circuit en série",
        blocs: [
          {
            type: "texte",
            contenu: "Dans un circuit simple comprenant une pile et plusieurs dipôles en série, la tension fournie par la pile se répartit entre ces dipôles."
          },
          {
            type: "regle",
            contenu: "Loi d’additivité des tensions : dans une boucle simple, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs en série."
          },
          {
            type: "exemple",
            contenu: "Une pile fournit une tension de 6 V. Deux lampes sont en série. Si la tension aux bornes de la première lampe est de 2 V et celle aux bornes de la seconde est de 4 V, alors 6 V = 2 V + 4 V."
          },
          {
            type: "remarque",
            contenu: "Les tensions aux bornes de deux lampes en série ne sont pas forcément égales. Elles dépendent des caractéristiques des lampes et de leur fonctionnement."
          },
          {
            type: "remarque",
            contenu: "Dans ces exemples, on considère que la tension aux bornes des fils et de l’interrupteur fermé est négligeable."
          }
        ]
      },
      {
        id: 5,
        titre: "La tension dans un circuit en dérivation",
        blocs: [
          {
            type: "regle",
            contenu: "Des dipôles reliés aux mêmes deux points d’un circuit ont la même tension entre leurs bornes."
          },
          {
            type: "exemple",
            contenu: "Deux lampes sont branchées en dérivation directement aux bornes d’une pile dont la tension mesurée est de 4,5 V. La tension aux bornes de chaque lampe est alors de 4,5 V."
          },
          {
            type: "remarque",
            contenu: "Des lampes en dérivation ont la même tension entre leurs bornes, mais les intensités qui les traversent ne sont pas nécessairement égales."
          }
        ]
      },
      {
        id: 6,
        titre: "Calculer une tension inconnue",
        blocs: [
          {
            type: "methode",
            contenu: "Dans une boucle simple en série : 1. Repérer la tension du générateur et les tensions des récepteurs. 2. Écrire la relation d’additivité. 3. Exprimer toutes les tensions dans la même unité. 4. Calculer la tension inconnue."
          },
          {
            type: "exemple",
            contenu: "Une pile fournit 9 V à deux lampes en série. La tension aux bornes de L1 est de 3 V. Celle aux bornes de L2 vaut : 9 − 3 = 6 V."
          },
          {
            type: "exemple",
            contenu: "Deux lampes sont reliées en dérivation aux mêmes bornes. Si la tension aux bornes de L1 est de 2,5 V, alors celle aux bornes de L2 est aussi de 2,5 V."
          }
        ]
      },
      {
        id: 7,
        titre: "Ne pas confondre tension et intensité",
        blocs: [
          {
            type: "tableau",
            entetes: ["Grandeur", "Symbole", "Unité", "Appareil", "Branchement"],
            lignes: [
              ["Intensité du courant", "I", "ampère (A)", "Ampèremètre", "En série dans la branche"],
              ["Tension électrique", "U", "volt (V)", "Voltmètre", "En dérivation entre deux points"]
            ]
          },
          {
            type: "remarque",
            contenu: "En série, l’intensité est la même dans toute la boucle et les tensions s’additionnent. En dérivation, la tension est la même aux bornes des branches reliées aux mêmes deux points et les intensités respectent la loi des nœuds."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Quelle est l’unité de la tension électrique et son symbole ?",
        correction: "L’unité est le volt, de symbole V."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel appareil mesure la tension et comment se branche-t-il ?",
        correction: "Le voltmètre mesure la tension. Il se branche en dérivation entre les deux points étudiés."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Complète : 1 V = … mV.",
        correction: "1 V = 1 000 mV."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis : a) 3 V en mV ; b) 500 mV en V.",
        correction: "a) 3 V = 3 000 mV. b) 500 mV = 0,5 V."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont branchées en dérivation aux bornes d’une pile. La tension mesurée aux bornes de la pile est de 4,5 V. Quelle est la tension aux bornes de chaque lampe ?",
        correction: "Les lampes sont reliées aux mêmes bornes que la pile : la tension aux bornes de chacune est de 4,5 V."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont en série avec une pile de 6 V. La tension aux bornes de L1 est de 2 V. Calcule la tension aux bornes de L2. On néglige la tension aux bornes des fils.",
        correction: "Les tensions s’additionnent : 6 = 2 + U de L2. Donc U de L2 = 6 − 2 = 4 V."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un élève branche un voltmètre en série dans une boucle pour mesurer la tension d’une lampe. Son branchement est-il correct ?",
        correction: "Non. Le voltmètre doit être branché en dérivation entre les deux bornes de la lampe."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Deux lampes sont en série. La tension aux bornes de L1 est de 1,5 V et celle aux bornes de L2 est de 3 V. Quelle est la tension de la pile si celle des fils est négligeable ?",
        correction: "La tension de la pile est la somme des tensions : 1,5 + 3 = 4,5 V."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Deux lampes sont reliées aux mêmes deux points d’un circuit. La tension aux bornes de la première est de 2 V. Quelle est celle aux bornes de la seconde ?",
        correction: "Les lampes sont en dérivation entre les mêmes deux points : la tension aux bornes de la seconde est aussi de 2 V."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une pile fournit 6 V à deux lampes en série. La tension de L1 est de 2 500 mV. Calcule la tension de L2 en volts, en négligeant celle des fils.",
        correction: "2 500 mV = 2,5 V. Donc la tension de L2 est 6 − 2,5 = 3,5 V."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Deux lampes sont en dérivation directement aux bornes d’une pile. Un élève dit que la tension de la pile se partage entre les deux lampes. Est-ce exact ?",
        correction: "Non. Les deux lampes sont reliées aux mêmes bornes que la pile : la tension aux bornes de chacune est égale à celle de la pile."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Dans une boucle simple, une pile fournit 9 V à trois dipôles en série. Les tensions aux bornes des deux premiers sont de 2 V et 3,5 V. Calcule la tension du troisième, en négligeant celle des fils.",
        correction: "La somme des tensions des trois dipôles est égale à 9 V. La tension du troisième est donc 9 − 2 − 3,5 = 3,5 V."
      }
    ]
  }
]);
