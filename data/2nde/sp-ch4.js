// ===== GUIDE - Sciences physiques 2nde =====
// Chimie — Chapitre 4 : molécules et liaisons covalentes.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "sp", [
  {
    id: 4,
    titre: "Chapitre 4 : Molécules et liaisons covalentes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les molécules",
        blocs: [
          {
            type: "introduction",
            titre: "Des atomes assemblés",
            texte: "Certains atomes s'associent pour former des molécules. L'eau, le dioxygène et le dioxyde de carbone sont des exemples de substances constituées de molécules."
          },
          {
            type: "definition",
            titre: "Molécule",
            texte: "Une molécule est une entité électriquement neutre constituée d'atomes liés entre eux.\n\nElle peut contenir des atomes d'un même élément, comme O₂, ou des atomes d'éléments différents, comme H₂O."
          },
          {
            type: "exemple",
            titre: "Quelques molécules",
            texte: "• H₂ : une molécule de dihydrogène contient deux atomes d'hydrogène.\n• O₂ : une molécule de dioxygène contient deux atomes d'oxygène.\n• H₂O : une molécule d'eau contient deux atomes d'hydrogène et un atome d'oxygène.\n• CO₂ : une molécule de dioxyde de carbone contient un atome de carbone et deux atomes d'oxygène."
          },
          {
            type: "remarque",
            titre: "Élément et corps simple",
            texte: "L'oxygène O désigne un élément chimique. Le dioxygène O₂ est un corps simple constitué de molécules contenant chacune deux atomes de cet élément.\n\nIl ne faut pas confondre le symbole O et la formule O₂."
          },
          {
            type: "remarque",
            titre: "Molécule ou ion ?",
            texte: "Une molécule est neutre. Un ion porte une charge électrique.\n\nH₂O est une molécule ; NH₄⁺ est un ion polyatomique. Un solide ionique comme NaCl est neutre dans son ensemble, mais sa formule n'indique pas une molécule isolée."
          }
        ]
      },
      {
        id: 2,
        titre: "Lire et écrire une formule brute",
        blocs: [
          {
            type: "definition",
            titre: "Formule brute",
            texte: "La formule brute indique la nature des éléments présents dans une molécule et le nombre d'atomes de chaque élément.\n\nUn indice écrit après un symbole indique le nombre d'atomes correspondants. Sans indice, il y a un seul atome de cet élément."
          },
          {
            type: "exemple",
            titre: "Lire une formule",
            texte: "Dans C₂H₆O, une molécule contient :\n\n• 2 atomes de carbone ;\n• 6 atomes d'hydrogène ;\n• 1 atome d'oxygène.\n\nElle contient donc 2 + 6 + 1 = 9 atomes au total."
          },
          {
            type: "methode",
            titre: "Compter les atomes",
            texte: "1. Repère chaque symbole chimique : une majuscule, éventuellement suivie d'une minuscule.\n2. Lis l'indice placé juste après le symbole.\n3. S'il n'y a pas d'indice, compte un atome.\n4. Additionne les nombres si l'on demande le total d'atomes dans la molécule."
          },
          {
            type: "exemple",
            titre: "Coefficient et indice",
            texte: "Dans 3 H₂O, le coefficient 3 signifie qu'il y a trois molécules d'eau.\n\nChaque molécule contient 2 atomes H et 1 atome O. Au total, les trois molécules contiennent donc 3 × 2 = 6 atomes H et 3 × 1 = 3 atomes O."
          },
          {
            type: "remarque",
            titre: "Attention aux majuscules",
            texte: "CO est une formule contenant du carbone C et de l'oxygène O. Co est le symbole d'un seul élément : le cobalt.\n\nLes majuscules et les minuscules sont importantes."
          }
        ]
      },
      {
        id: 3,
        titre: "La liaison covalente",
        blocs: [
          {
            type: "definition",
            titre: "Mise en commun d'électrons",
            texte: "Dans le modèle simple étudié ici, une liaison covalente correspond à la mise en commun d'une paire d'électrons entre deux atomes.\n\nCette paire est appelée doublet liant. On représente souvent une liaison covalente simple par un trait entre les symboles des deux atomes."
          },
          {
            type: "exemple",
            titre: "La molécule de dihydrogène",
            texte: "Chaque atome d'hydrogène possède un électron. Dans H₂, les deux atomes mettent en commun une paire d'électrons.\n\nOn représente cette liaison par H—H. Dans ce modèle, chaque hydrogène est entouré de deux électrons : il respecte la règle du duet."
          },
          {
            type: "definition",
            titre: "Doublet non liant",
            texte: "Un doublet non liant est une paire d'électrons de valence qui n'est pas engagée dans une liaison. Dans une représentation de Lewis, on peut le dessiner par un trait ou deux points près de l'atome."
          },
          {
            type: "regle",
            titre: "Liaisons multiples",
            texte: "Deux atomes peuvent partager plusieurs doublets :\n\n• une liaison simple correspond à un doublet liant ;\n• une liaison double correspond à deux doublets liants ;\n• une liaison triple correspond à trois doublets liants.\n\nOn les représente respectivement par un, deux ou trois traits."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre partage et transfert",
            texte: "Dans une liaison covalente, les atomes mettent en commun des électrons. Lors de la formation d'un ion monoatomique, l'atome gagne ou perd des électrons.\n\nCes deux descriptions ne doivent pas être confondues."
          }
        ]
      },
      {
        id: 4,
        titre: "Duet, octet et représentations de Lewis",
        blocs: [
          {
            type: "rappel",
            titre: "Électrons de valence",
            texte: "Pour les éléments étudiés ici, les électrons de valence sont ceux de la couche externe de l'atome. Ils interviennent dans la formation des liaisons et des doublets non liants."
          },
          {
            type: "regle",
            titre: "Règles du duet et de l'octet",
            texte: "Dans les molécules simples étudiées ici, on recherche généralement :\n\n• 2 électrons autour de chaque hydrogène : règle du duet ;\n• 8 électrons autour de chaque atome de carbone, d'azote, d'oxygène ou de chlore : règle de l'octet.\n\nPour compter autour d'un atome, on compte les électrons de ses doublets non liants et ceux des doublets liants qui le relient aux autres atomes."
          },
          {
            type: "remarque",
            titre: "Des règles utiles mais limitées",
            texte: "Les règles du duet et de l'octet permettent d'étudier de nombreuses molécules simples. Elles ne décrivent pas toutes les molécules : il existe des exceptions. On ne doit donc pas les appliquer sans vérification à toutes les espèces chimiques."
          },
          {
            type: "methode",
            titre: "Construire une représentation simple",
            texte: "Pour les exemples neutres étudiés dans ce chapitre :\n\n1. Compter les électrons de valence de tous les atomes.\n2. Choisir un arrangement des atomes : l'hydrogène est toujours en extrémité.\n3. Relier les atomes par des liaisons simples, chacune utilisant deux électrons.\n4. Répartir les électrons restants en doublets non liants.\n5. Vérifier le duet des hydrogènes, l'octet des autres atomes et le nombre total d'électrons.\n6. Si nécessaire, remplacer des doublets par des liaisons multiples, puis vérifier à nouveau."
          },
          {
            type: "exemple",
            titre: "La molécule d'eau H₂O",
            texte: "L'oxygène possède 6 électrons de valence et chaque hydrogène en possède 1 : cela fait 8 électrons de valence au total.\n\nOn relie l'oxygène à chaque hydrogène : H—O—H. Les deux liaisons utilisent 4 électrons. Il reste 4 électrons, soit deux doublets non liants sur O.\n\nChaque H est entouré de 2 électrons. O est entouré de 8 électrons : 4 dans les liaisons et 4 dans ses deux doublets non liants."
          },
          {
            type: "schema",
            titre: "Représentation de Lewis de l'eau",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 180' role='img' aria-label='Représentation de Lewis de l’eau : H lié à O lié à H, avec deux doublets non liants sur O'><rect width='340' height='180' fill='#f8fafc'/><g fill='#1e293b' font-family='sans-serif' font-size='26' text-anchor='middle'><text x='70' y='100'>H</text><text x='155' y='100'>O</text><text x='240' y='100'>H</text></g><g stroke='#2563eb' stroke-width='3'><line x1='90' y1='91' x2='135' y2='91'/><line x1='175' y1='91' x2='220' y2='91'/></g><g stroke='#dc2626' stroke-width='3'><line x1='145' y1='60' x2='165' y2='60'/><line x1='145' y1='120' x2='165' y2='120'/></g><text x='170' y='155' text-anchor='middle' font-family='sans-serif' font-size='13' fill='#334155'>Deux liaisons et deux doublets non liants</text></svg>",
            legende: "Les traits bleus représentent les liaisons O—H ; les traits rouges représentent les doublets non liants de l'oxygène. Le dessin sert à compter les électrons et ne représente pas la forme réelle de la molécule."
          }
        ]
      },
      {
        id: 5,
        titre: "Quelques molécules usuelles",
        blocs: [
          {
            type: "exemple",
            titre: "Le méthane CH₄",
            texte: "Le carbone possède 4 électrons de valence et les quatre hydrogènes en apportent 4 : il y a 8 électrons de valence au total.\n\nLe carbone forme quatre liaisons simples C—H. Chaque hydrogène respecte le duet et le carbone est entouré de 8 électrons. Il n'y a pas de doublet non liant sur le carbone dans cette représentation."
          },
          {
            type: "exemple",
            titre: "L'ammoniac NH₃",
            texte: "L'azote possède 5 électrons de valence et les trois hydrogènes en apportent 3 : il y a 8 électrons de valence.\n\nL'azote forme trois liaisons simples N—H et conserve un doublet non liant. Chaque hydrogène respecte le duet ; l'azote est entouré de 8 électrons."
          },
          {
            type: "exemple",
            titre: "Le dioxyde de carbone CO₂",
            texte: "Le carbone apporte 4 électrons de valence et les deux oxygènes en apportent 12 : il y a 16 électrons de valence au total.\n\nUne représentation est O=C=O : le carbone forme une liaison double avec chaque oxygène. Chaque oxygène porte deux doublets non liants.\n\nLe carbone et les deux oxygènes respectent l'octet."
          },
          {
            type: "exemple",
            titre: "Le dichlore Cl₂",
            texte: "Chaque atome de chlore possède 7 électrons de valence. Les deux atomes forment une liaison simple : Cl—Cl.\n\nChaque chlore possède aussi trois doublets non liants. Il est ainsi entouré de 8 électrons dans cette représentation."
          },
          {
            type: "tableau",
            titre: "Bilan de quelques représentations",
            entetes: ["Molécule", "Liaisons", "Doublets non liants indiqués"],
            lignes: [
              ["H₂", "Une liaison H—H", "Aucun sur H"],
              ["H₂O", "Deux liaisons O—H", "Deux sur O"],
              ["CH₄", "Quatre liaisons C—H", "Aucun sur C"],
              ["NH₃", "Trois liaisons N—H", "Un sur N"],
              ["CO₂", "Deux liaisons doubles C=O", "Deux sur chaque O"],
              ["Cl₂", "Une liaison Cl—Cl", "Trois sur chaque Cl"]
            ]
          }
        ]
      },
      {
        id: 6,
        titre: "Formules développées et masse molaire",
        blocs: [
          {
            type: "definition",
            titre: "Formule développée",
            texte: "Une formule développée montre les atomes et les liaisons qui les relient. La formule brute donne uniquement le nombre d'atomes de chaque élément.\n\nUne formule développée ne montre pas nécessairement les doublets non liants ni la forme réelle de la molécule dans l'espace."
          },
          {
            type: "exemple",
            titre: "Deux représentations",
            texte: "Pour l'eau :\n\n• formule brute : H₂O ;\n• formule développée : H—O—H.\n\nLa formule développée indique que chaque hydrogène est lié à l'oxygène. Pour obtenir la représentation de Lewis complète, on ajoute les deux doublets non liants sur O."
          },
          {
            type: "rappel",
            titre: "Masse molaire moléculaire",
            texte: "La masse molaire d'une molécule est la masse d'une mole de ces molécules. Elle s'exprime généralement en g/mol.\n\nOn la calcule en additionnant les masses molaires atomiques, en tenant compte des indices de la formule."
          },
          {
            type: "exemple",
            titre: "Masse molaire de l'eau",
            texte: "Avec M(H) = 1 g/mol et M(O) = 16 g/mol :\n\nM(H₂O) = 2 × M(H) + M(O)\n= 2 × 1 + 16\n= 18 g/mol."
          },
          {
            type: "methode",
            titre: "Vérifier son travail",
            texte: "Pour une formule ou une représentation de Lewis :\n\n1. Vérifie les symboles et les indices.\n2. Compte les atomes.\n3. Si tu représentes les liaisons, vérifie le nombre total d'électrons de valence.\n4. Vérifie le duet et l'octet lorsqu'ils s'appliquent.\n5. Pour une masse molaire, multiplie chaque masse atomique par le nombre d'atomes correspondant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une molécule de dioxyde de carbone a pour formule CO₂. Quels éléments contient-elle ? Combien d'atomes de chaque élément contient une molécule ?",
        correction: "Elle contient du carbone et de l'oxygène.\n\nUne molécule contient 1 atome de carbone et 2 atomes d'oxygène, soit 3 atomes au total."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Distingue la signification du coefficient 2 et de l'indice 2 dans l'écriture 2 H₂O.",
        correction: "Le coefficient 2 indique deux molécules d'eau.\n\nL'indice 2 indique que chaque molécule contient deux atomes d'hydrogène. Les deux molécules contiennent donc au total 4 atomes d'hydrogène et 2 atomes d'oxygène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une molécule a pour formule C₃H₈.\n\n1. Combien contient-elle d'atomes de carbone et d'hydrogène ?\n2. Combien contient-elle d'atomes au total ?\n3. Combien d'atomes d'hydrogène y a-t-il dans 2 molécules de C₃H₈ ?",
        correction: "1. Elle contient 3 atomes de carbone et 8 atomes d'hydrogène.\n\n2. Elle contient 3 + 8 = 11 atomes au total.\n\n3. Deux molécules contiennent 2 × 8 = 16 atomes d'hydrogène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans la molécule H₂ représentée par H—H, que représente le trait ? Combien d'électrons chaque atome d'hydrogène compte-t-il autour de lui dans ce modèle ?",
        correction: "Le trait représente une liaison covalente simple, c'est-à-dire un doublet liant de 2 électrons partagé par les deux atomes.\n\nChaque hydrogène compte les 2 électrons de la liaison autour de lui : il respecte le duet."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule la masse molaire de CO₂. Données : M(C) = 12 g/mol et M(O) = 16 g/mol.",
        correction: "Une molécule de CO₂ contient un atome C et deux atomes O.\n\nM(CO₂) = M(C) + 2 × M(O)\n= 12 + 2 × 16\n= 44 g/mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On étudie la molécule d'eau H₂O. L'hydrogène possède 1 électron de valence et l'oxygène en possède 6.\n\n1. Calcule le nombre total d'électrons de valence.\n2. Combien de liaisons simples O—H la molécule possède-t-elle ?\n3. Combien de doublets non liants reste-t-il sur l'oxygène ?",
        correction: "1. Le total est 2 × 1 + 6 = 8 électrons de valence.\n\n2. La molécule possède deux liaisons simples O—H. Elles utilisent 2 × 2 = 4 électrons.\n\n3. Il reste 8 − 4 = 4 électrons, soit deux doublets non liants sur l'oxygène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une représentation de Lewis du méthane CH₄, le carbone est lié par une liaison simple à chacun des quatre hydrogènes.\n\n1. Combien y a-t-il de doublets liants ?\n2. Combien d'électrons le carbone compte-t-il autour de lui ?\n3. Les règles du duet et de l'octet sont-elles respectées ?",
        correction: "1. Les quatre liaisons simples correspondent à quatre doublets liants.\n\n2. Le carbone compte 4 × 2 = 8 électrons autour de lui.\n\n3. Chaque hydrogène compte les 2 électrons de sa liaison : il respecte le duet. Le carbone est entouré de 8 électrons : il respecte l'octet."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le dichlore est représenté par une liaison simple Cl—Cl. Chaque atome de chlore possède 7 électrons de valence.\n\n1. Combien y a-t-il d'électrons de valence au total ?\n2. Combien de doublets non liants sont placés sur chaque chlore ?\n3. Vérifie l'octet d'un atome de chlore.",
        correction: "1. Le total est 2 × 7 = 14 électrons de valence.\n\n2. La liaison utilise 2 électrons. Il reste 12 électrons, répartis en 6 doublets non liants : 3 sur chaque chlore.\n\n3. Autour d'un chlore, on compte 6 électrons dans ses trois doublets non liants et 2 électrons dans la liaison, soit 8 électrons."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La formule brute de l'éthanol est C₂H₆O. Calcule sa masse molaire. Données : M(C) = 12 g/mol, M(H) = 1 g/mol et M(O) = 16 g/mol.",
        correction: "M(C₂H₆O) = 2 × M(C) + 6 × M(H) + M(O).\n\nM(C₂H₆O) = 2 × 12 + 6 × 1 + 16\n= 24 + 6 + 16\n= 46 g/mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie l'ammoniac NH₃. Données : l'azote possède 5 électrons de valence ; l'hydrogène en possède 1.\n\n1. Calcule le nombre total d'électrons de valence.\n2. Place l'azote au centre et relie-le aux trois hydrogènes par des liaisons simples. Combien d'électrons sont utilisés dans ces liaisons ?\n3. Combien d'électrons restent-ils ? Comment les placer ?\n4. Vérifie le duet et l'octet.",
        correction: "1. Le total est 5 + 3 × 1 = 8 électrons de valence.\n\n2. Les trois liaisons simples utilisent 3 × 2 = 6 électrons.\n\n3. Il reste 8 − 6 = 2 électrons : ils forment un doublet non liant sur l'azote.\n\n4. Chaque H compte 2 électrons dans sa liaison et respecte le duet. L'azote compte 6 électrons dans les trois liaisons et 2 dans son doublet non liant : il respecte l'octet."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice de type examen. On étudie le dioxyde de carbone CO₂. Données : le carbone possède 4 électrons de valence, l'oxygène en possède 6 ; M(C) = 12 g/mol et M(O) = 16 g/mol.\n\n1. Calcule le nombre total d'électrons de valence de la molécule.\n2. Dans la représentation O=C=O, combien d'électrons sont engagés dans les deux liaisons doubles ?\n3. Les électrons restants forment deux doublets non liants sur chaque oxygène. Vérifie l'octet de chaque atome et le nombre total d'électrons.\n4. Calcule M(CO₂).",
        correction: "1. Le total est 4 + 2 × 6 = 16 électrons de valence.\n\n2. Une liaison double comprend deux doublets, soit 4 électrons. Les deux liaisons doubles utilisent donc 8 électrons.\n\n3. Il reste 16 − 8 = 8 électrons, soit quatre doublets non liants : deux sur chaque oxygène. Chaque O compte 4 électrons dans sa liaison double et 4 dans ses doublets non liants, soit 8. Le carbone compte 4 électrons dans chaque liaison double, soit 8. Le total de la représentation est bien 8 électrons liants + 8 électrons non liants = 16.\n\n4. M(CO₂) = 12 + 2 × 16 = 44 g/mol."
      }
    ]
  }
]);
