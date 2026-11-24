enregistrerChapitres("2nde", "sp", [
  {
    id: 5,
    titre: "Chapitre 5 : Les réactions chimiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Reconnaître une transformation chimique",
        blocs: [
          {
            type: "introduction",
            titre: "Des substances qui se transforment",
            texte: "Lorsqu’un morceau de fer rouille ou lorsqu’un combustible brûle, les substances présentes au départ se transforment. Une transformation chimique correspond au passage d’un état initial à un état final dans lequel de nouvelles espèces chimiques sont apparues."
          },
          {
            type: "definition",
            titre: "Espèce chimique",
            texte: "Une espèce chimique est un ensemble d’entités chimiques identiques : atomes, molécules ou ions. Par exemple, le dioxygène est une espèce chimique constituée de molécules O₂."
          },
          {
            type: "definition",
            titre: "Réactifs et produits",
            texte: "Les réactifs sont les espèces chimiques consommées au cours de la transformation. Les produits sont les espèces chimiques formées. Un réactif peut ne pas être entièrement consommé : il en reste alors à la fin."
          },
          {
            type: "schema",
            titre: "Lecture d’une transformation",
            texte: "État initial : réactifs présents\n        ↓ transformation chimique\nÉtat final : produits formés et éventuellement réactifs restants"
          },
          {
            type: "exemple",
            titre: "Formation de l’eau",
            texte: "Lors de la réaction entre le dihydrogène et le dioxygène, le dihydrogène H₂ et le dioxygène O₂ sont les réactifs. L’eau H₂O est le produit. Cette réaction peut être dangereuse : elle ne doit pas être réalisée à la maison."
          },
          {
            type: "remarque",
            titre: "Quels indices peut-on observer ?",
            texte: "Un changement de couleur, l’apparition d’un gaz, la formation d’un solide, une émission de lumière ou une variation de température peuvent signaler une transformation chimique. Toutefois, un indice seul ne suffit pas toujours : par exemple, l’ébullition produit aussi des bulles sans former une nouvelle espèce chimique."
          },
          {
            type: "regle",
            titre: "Transformation physique ou chimique ?",
            texte: "Dans une transformation physique, les espèces chimiques restent les mêmes : la glace qui fond devient de l’eau liquide, toujours constituée de H₂O. Dans une transformation chimique, des réactifs sont consommés et de nouvelles espèces, les produits, se forment."
          }
        ]
      },

      {
        id: 2,
        titre: "Du bilan en mots à l’équation chimique",
        blocs: [
          {
            type: "definition",
            titre: "Bilan en mots",
            texte: "Un bilan en mots indique les noms des réactifs à gauche et les noms des produits à droite. Une flèche sépare les deux côtés. Le signe + sépare les espèces présentes d’un même côté."
          },
          {
            type: "exemple",
            titre: "Combustion du carbone",
            texte: "Lorsque le carbone réagit avec suffisamment de dioxygène, il peut former du dioxyde de carbone.\n\nBilan en mots : carbone + dioxygène → dioxyde de carbone.\n\nAvec les formules : C + O₂ → CO₂."
          },
          {
            type: "definition",
            titre: "Équation chimique",
            texte: "Une équation chimique représente une réaction à l’aide des formules des réactifs et des produits. Elle doit respecter la conservation des éléments chimiques et, lorsque des ions interviennent, la conservation de la charge électrique."
          },
          {
            type: "rappel",
            titre: "Lire une formule",
            texte: "Dans H₂O, l’indice 2 indique que chaque molécule contient deux atomes d’hydrogène. L’absence d’indice après O signifie qu’elle contient un atome d’oxygène. Dans O₂, chaque molécule contient deux atomes d’oxygène."
          },
          {
            type: "methode",
            titre: "Écrire une équation",
            texte: "1. Identifier les réactifs et les produits dans l’énoncé.\n2. Écrire le bilan en mots : réactifs → produits.\n3. Remplacer les noms par les formules chimiques correctes.\n4. Ajuster les coefficients devant les formules si nécessaire.\n5. Vérifier les nombres d’atomes et, pour une équation ionique, la charge totale."
          },
          {
            type: "remarque",
            titre: "La flèche et le signe +",
            texte: "La flèche se lit « se transforme en » ou « produit ». Le signe + signifie « réagit avec » à gauche ou « et » à droite. Il ne signifie pas que les espèces sont forcément mélangées en quantités égales."
          },
          {
            type: "remarque",
            titre: "État physique",
            texte: "On peut préciser l’état d’une espèce : (s) solide, (l) liquide, (g) gaz et (aq) espèce dissoute dans l’eau. Par exemple : C(s) + O₂(g) → CO₂(g). Ces indications complètent l’équation, mais ne modifient pas le comptage des atomes."
          }
        ]
      },

      {
        id: 3,
        titre: "Conservation des atomes et de la charge",
        blocs: [
          {
            type: "regle",
            titre: "Conservation des éléments",
            texte: "Lors d’une réaction chimique, les atomes se réarrangent : aucun élément chimique ne disparaît et aucun nouvel élément n’apparaît. Pour chaque élément, le nombre total d’atomes doit être le même dans les réactifs et dans les produits."
          },
          {
            type: "exemple",
            titre: "Une équation à vérifier",
            texte: "C + O₂ → CO₂\n\nÀ gauche : 1 atome de carbone et 2 atomes d’oxygène.\nÀ droite : 1 atome de carbone et 2 atomes d’oxygène.\n\nL’équation respecte la conservation des atomes."
          },
          {
            type: "regle",
            titre: "Conservation de la masse",
            texte: "Dans un système fermé, la masse totale des substances est la même avant et après la réaction. Si un gaz s’échappe d’un récipient ouvert, la masse mesurée dans ce récipient peut diminuer, sans que la masse totale de toutes les substances ait disparu."
          },
          {
            type: "exemple",
            titre: "Calcul de masse",
            texte: "Dans un système fermé, 12 g de carbone réagissent entièrement avec 32 g de dioxygène pour former uniquement du dioxyde de carbone. La masse de dioxyde de carbone formée est 12 + 32 = 44 g."
          },
          {
            type: "regle",
            titre: "Conservation de la charge",
            texte: "La somme des charges électriques doit être la même des deux côtés d’une équation chimique. Pour une espèce neutre, la charge vaut 0. Pour un ion, elle est indiquée par son exposant : + pour Na⁺, − pour Cl⁻, 2+ pour Ca²⁺."
          },
          {
            type: "exemple",
            titre: "Équation avec des ions",
            texte: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)\n\nIl y a un atome d’argent et un atome de chlore de chaque côté. À gauche, la charge totale est (+1) + (−1) = 0 ; à droite, AgCl est neutre. Les atomes et la charge sont conservés."
          },
          {
            type: "remarque",
            titre: "Masse et quantités de matière",
            texte: "La masse totale se conserve, mais le nombre total de molécules n’est pas nécessairement le même avant et après une réaction. Les calculs en moles seront étudiés dans un prochain chapitre."
          }
        ]
      },

      {
        id: 4,
        titre: "Ajuster les coefficients d’une équation",
        blocs: [
          {
            type: "definition",
            titre: "Coefficient stœchiométrique",
            texte: "Un coefficient stœchiométrique est un nombre placé devant une formule chimique. Il multiplie toute la formule. Ainsi, 2 H₂O représente deux molécules d’eau : au total, 4 atomes d’hydrogène et 2 atomes d’oxygène. Le coefficient 1 n’est généralement pas écrit."
          },
          {
            type: "regle",
            titre: "Ne pas changer les formules",
            texte: "Pour ajuster une équation, on modifie les coefficients placés devant les formules, jamais les indices à l’intérieur des formules. Par exemple, H₂O et H₂O₂ désignent deux espèces différentes."
          },
          {
            type: "methode",
            titre: "Méthode d’ajustement",
            texte: "1. Écrire les formules correctes des réactifs et des produits.\n2. Compter les atomes de chaque élément des deux côtés.\n3. Placer des coefficients devant les formules pour égaliser les nombres d’atomes.\n4. Recompter tous les éléments, car un nouveau coefficient peut modifier plusieurs nombres à la fois.\n5. Utiliser les plus petits coefficients entiers possibles et vérifier aussi la charge si des ions sont présents."
          },
          {
            type: "exemple",
            titre: "Formation de l’eau",
            texte: "Équation de départ : H₂ + O₂ → H₂O.\n\nL’oxygène n’est pas équilibré : il y a 2 atomes à gauche et 1 à droite. On place 2 devant H₂O :\nH₂ + O₂ → 2 H₂O.\n\nIl y a maintenant 4 atomes d’hydrogène à droite. On place 2 devant H₂ :\n2 H₂ + O₂ → 2 H₂O.\n\nVérification : 4 H et 2 O de chaque côté."
          },
          {
            type: "exemple",
            titre: "Formation de l’oxyde de magnésium",
            texte: "Le magnésium Mg réagit avec le dioxygène O₂ pour former MgO.\n\nDépart : Mg + O₂ → MgO.\nOn équilibre O : Mg + O₂ → 2 MgO.\nOn équilibre Mg : 2 Mg + O₂ → 2 MgO.\n\nVérification : 2 atomes de Mg et 2 atomes de O de chaque côté."
          },
          {
            type: "remarque",
            titre: "Sens des coefficients",
            texte: "Dans 2 H₂ + O₂ → 2 H₂O, les coefficients indiquent les proportions de réaction : deux molécules de H₂ réagissent avec une molécule de O₂ pour former deux molécules de H₂O. À une autre échelle, ces mêmes nombres donnent les proportions en quantités de matière."
          }
        ]
      },

      {
        id: 5,
        titre: "Quelques transformations chimiques courantes",
        blocs: [
          {
            type: "definition",
            titre: "Combustion",
            texte: "Une combustion est une réaction chimique dans laquelle un combustible réagit avec un comburant. Dans les exemples de ce chapitre, le comburant est le dioxygène. Une combustion libère généralement de l’énergie sous forme de chaleur et parfois de lumière."
          },
          {
            type: "exemple",
            titre: "Combustion complète du méthane",
            texte: "Le méthane CH₄ réagit avec suffisamment de dioxygène pour former du dioxyde de carbone et de l’eau :\nCH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nVérification : 1 C, 4 H et 4 O de chaque côté."
          },
          {
            type: "remarque",
            titre: "Attention aux combustions incomplètes",
            texte: "Lorsque le dioxygène est insuffisant, la combustion d’un combustible carboné peut notamment produire du monoxyde de carbone CO, gaz incolore et très toxique. Il ne faut pas réaliser de combustion dans un lieu mal ventilé ni chercher à produire ce gaz."
          },
          {
            type: "definition",
            titre: "Précipitation",
            texte: "Une précipitation est une transformation au cours de laquelle un solide peu soluble, appelé précipité, apparaît dans une solution."
          },
          {
            type: "exemple",
            titre: "Formation d’un précipité",
            texte: "Des ions argent Ag⁺ et des ions chlorure Cl⁻ présents en solution peuvent former le solide chlorure d’argent :\nAg⁺(aq) + Cl⁻(aq) → AgCl(s).\n\nCette équation ne montre que les ions qui participent directement à la formation du précipité."
          },
          {
            type: "definition",
            titre: "Ions spectateurs",
            texte: "Les ions spectateurs sont présents dans le mélange mais ne sont pas transformés dans la réaction considérée. Ils ne figurent pas dans l’équation ionique simplifiée."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les exemples de ce chapitre servent à comprendre les réactions. Ils ne constituent pas des protocoles à réaliser chez soi. Les combustions et la manipulation de solutions chimiques doivent être réservées à un cadre adapté, sous la responsabilité d’un adulte compétent."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une réaction dans un énoncé",
            texte: "1. Relever les espèces consommées : ce sont les réactifs.\n2. Relever les espèces formées : ce sont les produits.\n3. Écrire leurs formules en respectant les indices et les charges.\n4. Écrire puis ajuster l’équation.\n5. Contrôler chaque élément et la charge totale.\n6. Si une masse est demandée, vérifier si le système est fermé et tenir compte de toutes les substances présentes."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : modifier H₂O en H₂O₂ pour équilibrer.\nÀ faire : garder H₂O et placer un coefficient devant la formule.\n\nErreur : compter 2 H₂O comme 2 H et 1 O.\nÀ faire : compter 4 H et 2 O.\n\nErreur : supposer qu’un réactif a totalement disparu.\nÀ faire : vérifier si l’énoncé indique qu’il est entièrement consommé.\n\nErreur : oublier la charge dans une équation ionique.\nÀ faire : vérifier la charge totale des deux côtés.\n\nErreur : conclure qu’une réaction chimique a eu lieu dès qu’il y a des bulles.\nÀ faire : rechercher si de nouvelles espèces se sont formées."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Réactifs → produits\n\nFormules correctes → coefficients ajustés → vérification\n\nMême nombre d’atomes de chaque élément\nMême charge totale\nMême masse totale dans un système fermé"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le carbone réagit avec le dioxygène pour former du dioxyde de carbone. Indique les réactifs et le produit, puis écris le bilan de la réaction en mots.",
        correction: "Les réactifs sont le carbone et le dioxygène. Le produit est le dioxyde de carbone.\n\nBilan : carbone + dioxygène → dioxyde de carbone."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La glace fond et devient de l’eau liquide. La glace et l’eau liquide sont toutes deux constituées de molécules H₂O. S’agit-il d’une transformation physique ou chimique ? Justifie.",
        correction: "Il s’agit d’une transformation physique : l’espèce chimique reste l’eau H₂O. Seul son état physique change."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien y a-t-il d’atomes de chaque élément dans 3 molécules de dioxyde de carbone, notées 3 CO₂ ?",
        correction: "Une molécule CO₂ contient 1 atome de carbone et 2 atomes d’oxygène. Dans 3 CO₂, il y a donc 3 atomes de carbone et 6 atomes d’oxygène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Vérifie si l’équation H₂ + O₂ → H₂O respecte la conservation des atomes. Si ce n’est pas le cas, ajuste-la sans modifier les formules.",
        correction: "Au départ, il y a 2 H et 2 O à gauche, contre 2 H et 1 O à droite : l’oxygène n’est pas conservé.\n\nÉquation ajustée : 2 H₂ + O₂ → 2 H₂O.\n\nVérification : 4 H et 2 O de chaque côté."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un récipient fermé, 12 g de carbone réagissent entièrement avec 32 g de dioxygène. Le seul produit formé est le dioxyde de carbone. Calcule la masse de dioxyde de carbone obtenue.",
        correction: "La masse totale se conserve dans le récipient fermé. Les deux réactifs sont entièrement consommés et il n’y a qu’un produit.\n\nMasse de dioxyde de carbone = 12 + 32 = 44 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le magnésium Mg réagit avec le dioxygène O₂ et forme de l’oxyde de magnésium MgO. Ajuste l’équation Mg + O₂ → MgO, puis vérifie les atomes.",
        correction: "Équation ajustée : 2 Mg + O₂ → 2 MgO.\n\nÀ gauche : 2 Mg et 2 O. À droite : 2 Mg et 2 O. Chaque élément est conservé."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le méthane CH₄ brûle dans le dioxygène O₂. Dans les conditions étudiées, les seuls produits sont le dioxyde de carbone CO₂ et l’eau H₂O. Écris le bilan en mots, puis ajuste l’équation chimique. Vérifie le nombre d’atomes de chaque élément.",
        correction: "Bilan : méthane + dioxygène → dioxyde de carbone + eau.\n\nÉquation de départ : CH₄ + O₂ → CO₂ + H₂O.\n\nIl faut 2 H₂O pour obtenir 4 H à droite. On compte alors 4 O à droite : il faut donc 2 O₂ à gauche.\n\nÉquation ajustée : CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nVérification : 1 C, 4 H et 4 O de chaque côté."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L’aluminium Al réagit avec le dioxygène O₂ pour former de l’oxyde d’aluminium Al₂O₃. Ajuste l’équation Al + O₂ → Al₂O₃ avec les plus petits coefficients entiers possibles. Vérifie le résultat.",
        correction: "Pour obtenir le même nombre d’atomes d’oxygène, on utilise 3 O₂ et 2 Al₂O₃ : cela donne 6 atomes O de chaque côté. Les 2 Al₂O₃ contiennent alors 4 atomes Al ; on place donc 4 devant Al.\n\nÉquation : 4 Al + 3 O₂ → 2 Al₂O₃.\n\nVérification : 4 Al et 6 O de chaque côté."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On mélange une solution contenant des ions argent Ag⁺ et nitrate NO₃⁻ avec une solution contenant des ions sodium Na⁺ et chlorure Cl⁻. Un solide de chlorure d’argent AgCl se forme. Les ions sodium et nitrate restent dissous et ne sont pas transformés. Écris l’équation ionique simplifiée, nomme les ions spectateurs et vérifie la conservation des atomes et de la charge.",
        correction: "Les ions qui forment le solide sont Ag⁺ et Cl⁻.\n\nÉquation ionique simplifiée : Ag⁺(aq) + Cl⁻(aq) → AgCl(s).\n\nLes ions spectateurs sont Na⁺ et NO₃⁻. Il y a 1 Ag et 1 Cl de chaque côté. La charge totale vaut (+1) + (−1) = 0 à gauche et 0 à droite : elle est conservée."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un récipient fermé, on introduit 10 g de substance A et 12 g de substance B. Après réaction, il reste 3 g de A et 4 g de B. Le seul produit formé est C. Calcule la masse de C obtenue et les masses de A et B consommées.",
        correction: "Masse initiale totale : 10 + 12 = 22 g.\n\nMasse des réactifs restants : 3 + 4 = 7 g. Comme le récipient est fermé et que C est le seul produit, sa masse est 22 − 7 = 15 g.\n\nMasse de A consommée : 10 − 3 = 7 g. Masse de B consommée : 12 − 4 = 8 g. Leur somme vaut 15 g, ce qui confirme le résultat."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Le propane C₃H₈ réagit avec le dioxygène O₂. Lors d’une combustion complète, les seuls produits sont le dioxyde de carbone CO₂ et l’eau H₂O. 1. Écris l’équation non ajustée. 2. Ajuste-la avec les plus petits coefficients entiers possibles. 3. Vérifie chaque élément. 4. Explique pourquoi il serait incorrect de remplacer CO₂ par CO₃ pour ajuster l’équation.",
        correction: "1. Équation de départ : C₃H₈ + O₂ → CO₂ + H₂O.\n\n2. On place 3 devant CO₂ pour équilibrer le carbone, puis 4 devant H₂O pour équilibrer l’hydrogène : C₃H₈ + O₂ → 3 CO₂ + 4 H₂O. À droite, il y a 6 + 4 = 10 atomes O ; on place donc 5 devant O₂.\n\nÉquation ajustée : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n\n3. À gauche et à droite : 3 C, 8 H et 10 O.\n\n4. Changer CO₂ en CO₃ modifierait la formule de l’espèce chimique. Pour ajuster, on change uniquement les coefficients devant les formules."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un récipient fermé, 5,6 g de fer Fe réagissent entièrement avec 3,2 g de soufre S pour former uniquement du sulfure de fer FeS. 1. Écris l’équation chimique ajustée. 2. Calcule la masse de FeS formée. 3. Dans une autre situation, on introduit 5,6 g de fer et 4,0 g de soufre ; après réaction complète du fer, il reste 0,8 g de soufre et aucun autre produit que FeS ne se forme. Calcule la masse de FeS et explique pourquoi elle n’est pas égale à la masse totale initiale.",
        correction: "1. Équation : Fe + S → FeS. Il y a 1 Fe et 1 S de chaque côté.\n\n2. Les deux réactifs sont entièrement consommés : masse de FeS = 5,6 + 3,2 = 8,8 g.\n\n3. Masse initiale totale : 5,6 + 4,0 = 9,6 g. Il reste 0,8 g de soufre ; donc masse de FeS = 9,6 − 0,8 = 8,8 g. Elle n’est pas égale à la masse totale initiale car une partie du soufre reste dans le récipient. La masse totale finale est bien 8,8 + 0,8 = 9,6 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une réaction en solution est représentée par l’équation à compléter : ... Al³⁺(aq) + ... OH⁻(aq) → ... Al(OH)₃(s). L’ion hydroxyde est OH⁻ et le solide Al(OH)₃ est électriquement neutre. 1. Ajuste les coefficients entiers les plus simples. 2. Vérifie les nombres d’atomes et la charge totale. 3. Comment appelle-t-on la formation de ce solide dans la solution ?",
        correction: "1. La formule Al(OH)₃ contient 1 Al, 3 O et 3 H. Il faut donc 1 ion Al³⁺ et 3 ions OH⁻ :\nAl³⁺(aq) + 3 OH⁻(aq) → Al(OH)₃(s).\n\n2. De chaque côté : 1 Al, 3 O et 3 H. À gauche, la charge totale vaut (+3) + 3 × (−1) = 0. À droite, le solide est neutre : la charge totale vaut 0.\n\n3. La formation du solide est une précipitation ; le solide formé est un précipité."
      }
    ]
  }
]);
