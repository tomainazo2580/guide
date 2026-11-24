// ===== GUIDE - Sciences physiques 2nde =====
// Chimie — Chapitre 2 : classification périodique.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "sp", [
  {
    id: 2,
    titre: "Chapitre 2 : Classification périodique des éléments",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Pourquoi classer les éléments ?",
        blocs: [
          {
            type: "introduction",
            titre: "Une organisation de la matière",
            texte: "Il existe de nombreux éléments chimiques. La classification périodique les organise dans un tableau afin de faciliter leur étude.\n\nElle permet de repérer des ressemblances entre éléments et de prévoir certaines de leurs propriétés chimiques."
          },
          {
            type: "rappel",
            titre: "Élément chimique",
            texte: "Un élément chimique est caractérisé par son numéro atomique Z, c'est-à-dire par le nombre de protons de son noyau.\n\nTous les atomes de carbone possèdent 6 protons : ils appartiennent donc à l'élément carbone, de symbole C et de numéro atomique Z = 6."
          },
          {
            type: "regle",
            titre: "Ordre de classement",
            texte: "Dans la classification périodique moderne, les éléments sont rangés par numéro atomique Z croissant.\n\nLe tableau comporte des lignes, appelées périodes, et des colonnes, appelées groupes."
          },
          {
            type: "remarque",
            titre: "Des propriétés qui se répètent",
            texte: "Certaines propriétés chimiques se retrouvent à intervalles réguliers lorsque Z augmente. Cette répétition explique le mot « périodique »."
          },
          {
            type: "remarque",
            titre: "Un peu d'histoire",
            texte: "Au XIXᵉ siècle, Mendeleïev a proposé une classification fondée sur les propriétés des éléments et leurs masses atomiques. Il a laissé des cases vides et prédit les propriétés d'éléments qui n'étaient pas encore découverts.\n\nLa classification actuelle est fondée sur le numéro atomique."
          }
        ]
      },
      {
        id: 2,
        titre: "Lire les premières lignes du tableau",
        blocs: [
          {
            type: "tableau",
            titre: "Les 18 premiers éléments",
            entetes: ["Z", "Symbole", "Nom"],
            lignes: [
              ["1", "H", "Hydrogène"],
              ["2", "He", "Hélium"],
              ["3", "Li", "Lithium"],
              ["4", "Be", "Béryllium"],
              ["5", "B", "Bore"],
              ["6", "C", "Carbone"],
              ["7", "N", "Azote"],
              ["8", "O", "Oxygène"],
              ["9", "F", "Fluor"],
              ["10", "Ne", "Néon"],
              ["11", "Na", "Sodium"],
              ["12", "Mg", "Magnésium"],
              ["13", "Al", "Aluminium"],
              ["14", "Si", "Silicium"],
              ["15", "P", "Phosphore"],
              ["16", "S", "Soufre"],
              ["17", "Cl", "Chlore"],
              ["18", "Ar", "Argon"]
            ]
          },
          {
            type: "tableau",
            titre: "Position des 18 premiers éléments",
            entetes: ["Période", "Groupe 1", "2", "13", "14", "15", "16", "17", "18"],
            lignes: [
              ["1", "H", "—", "—", "—", "—", "—", "—", "He"],
              ["2", "Li", "Be", "B", "C", "N", "O", "F", "Ne"],
              ["3", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"]
            ]
          },
          {
            type: "remarque",
            titre: "Comment lire ce tableau simplifié ?",
            texte: "Les éléments d'une même ligne appartiennent à une même période. Ceux qui sont placés dans une même colonne appartiennent à un même groupe.\n\nLes groupes 3 à 12 ne sont pas représentés ici : aucun des 18 premiers éléments ne s'y trouve."
          },
          {
            type: "exemple",
            titre: "Lire une position",
            texte: "Le sodium Na se trouve dans la troisième période et le groupe 1. Il est placé sous le lithium Li.\n\nLe chlore Cl se trouve dans la troisième période et le groupe 17. Il est placé sous le fluor F."
          },
          {
            type: "remarque",
            titre: "Attention aux symboles",
            texte: "La première lettre d'un symbole chimique est une majuscule. Lorsqu'il y a une deuxième lettre, elle est minuscule.\n\nAinsi, Co est le symbole du cobalt, tandis que CO désigne une molécule contenant un atome de carbone et un atome d'oxygène."
          }
        ]
      },
      {
        id: 3,
        titre: "Périodes et couches électroniques",
        blocs: [
          {
            type: "rappel",
            titre: "Répartition électronique",
            texte: "Pour les 18 premiers éléments, nous utilisons les couches K, L et M.\n\nDans ce modèle : K reçoit jusqu'à 2 électrons, L jusqu'à 8 et M jusqu'à 8 pour les éléments étudiés ici."
          },
          {
            type: "regle",
            titre: "Trouver la période",
            texte: "Pour les 18 premiers éléments, le numéro de la période correspond au nombre de couches occupées par les électrons de l'atome neutre.\n\n• Une couche occupée : période 1.\n• Deux couches occupées : période 2.\n• Trois couches occupées : période 3."
          },
          {
            type: "exemple",
            titre: "Le carbone",
            texte: "Le carbone a pour numéro atomique Z = 6. Son atome neutre possède 6 électrons, répartis ainsi : K² L⁴.\n\nDeux couches sont occupées : le carbone appartient à la période 2."
          },
          {
            type: "exemple",
            titre: "Le magnésium",
            texte: "Le magnésium a Z = 12. Sa répartition électronique est K² L⁸ M².\n\nTrois couches sont occupées : le magnésium appartient à la période 3."
          },
          {
            type: "methode",
            titre: "Déterminer une période",
            texte: "1. Relève le numéro atomique Z.\n2. Pour un atome neutre, répartis les Z électrons dans les couches.\n3. Compte les couches occupées.\n4. Le nombre trouvé donne la période pour les éléments étudiés ici."
          }
        ]
      },
      {
        id: 4,
        titre: "Groupes et électrons externes",
        blocs: [
          {
            type: "definition",
            titre: "Électrons de la couche externe",
            texte: "La couche externe est la dernière couche occupée d'un atome. Les électrons qui s'y trouvent sont appelés électrons externes ou électrons de valence dans le modèle étudié ici.\n\nIls jouent un rôle important dans les propriétés chimiques."
          },
          {
            type: "regle",
            titre: "Éléments d'un même groupe",
            texte: "Pour les groupes principaux étudiés ici, les atomes des éléments d'une même colonne possèdent généralement le même nombre d'électrons externes. Cela contribue à expliquer leurs propriétés chimiques voisines.\n\nPour les 18 premiers éléments, l'hélium est une exception à retenir : il possède 2 électrons externes, alors que les autres gaz nobles de ces premières périodes en possèdent 8."
          },
          {
            type: "tableau",
            titre: "Groupes principaux des 18 premiers éléments",
            entetes: ["Groupe", "Électrons externes", "Exemples"],
            lignes: [
              ["1", "1", "H, Li, Na"],
              ["2", "2", "Be, Mg"],
              ["13", "3", "B, Al"],
              ["14", "4", "C, Si"],
              ["15", "5", "N, P"],
              ["16", "6", "O, S"],
              ["17", "7", "F, Cl"],
              ["18", "8, sauf He qui en possède 2", "He, Ne, Ar"]
            ]
          },
          {
            type: "exemple",
            titre: "Comparer deux éléments",
            texte: "Le fluor a pour répartition K² L⁷. Le chlore a pour répartition K² L⁸ M⁷.\n\nChacun possède 7 électrons sur sa couche externe. Ils appartiennent tous deux au groupe 17."
          },
          {
            type: "methode",
            titre: "Trouver le groupe parmi les 18 premiers éléments",
            texte: "1. Écris la répartition électronique de l'atome neutre.\n2. Compte les électrons de la couche externe.\n3. Utilise le tableau des groupes principaux.\n4. Pense à l'exception de l'hélium : ses 2 électrons occupent sa seule couche et il se trouve dans le groupe 18."
          }
        ]
      },
      {
        id: 5,
        titre: "Quelques familles chimiques",
        blocs: [
          {
            type: "definition",
            titre: "Famille chimique",
            texte: "Une famille chimique rassemble des éléments présentant des propriétés voisines. Dans les exemples étudiés ici, ces éléments se trouvent dans une même colonne du tableau."
          },
          {
            type: "regle",
            titre: "Les métaux alcalins",
            texte: "Le lithium Li et le sodium Na appartiennent à la famille des métaux alcalins, dans le groupe 1. Leurs atomes possèdent un électron externe.\n\nCes métaux peuvent réagir vivement avec l'eau. Leur manipulation est réservée à des conditions de laboratoire adaptées ; il ne faut jamais essayer de les tester chez soi."
          },
          {
            type: "remarque",
            titre: "L'hydrogène : une exception",
            texte: "L'hydrogène est placé dans le groupe 1 et possède un électron. Il n'est cependant pas un métal alcalin : ses propriétés sont particulières."
          },
          {
            type: "regle",
            titre: "Les halogènes",
            texte: "Le fluor F et le chlore Cl appartiennent à la famille des halogènes, dans le groupe 17. Leurs atomes possèdent 7 électrons externes.\n\nLes corps simples correspondants, comme le dichlore Cl₂, peuvent être dangereux. Aucune manipulation ne doit être tentée hors d'un cadre de laboratoire sécurisé."
          },
          {
            type: "regle",
            titre: "Les gaz nobles",
            texte: "L'hélium He, le néon Ne et l'argon Ar appartiennent au groupe 18, appelé famille des gaz nobles.\n\nLeur couche externe est remplie dans le modèle étudié : 2 électrons pour l'hélium ; 8 pour le néon et l'argon. Ces gaz sont généralement peu réactifs."
          },
          {
            type: "remarque",
            titre: "Des ressemblances, pas une identité",
            texte: "Des éléments d'une même famille ont des propriétés voisines, mais pas nécessairement identiques. Il ne faut pas supposer qu'ils réagissent tous exactement de la même manière."
          }
        ]
      },
      {
        id: 6,
        titre: "Utiliser la classification",
        blocs: [
          {
            type: "methode",
            titre: "De Z à la position",
            texte: "Pour un atome neutre parmi les 18 premiers éléments :\n\n1. Z donne le nombre d'électrons.\n2. Répartis ces électrons sur K, L et éventuellement M.\n3. Le nombre de couches occupées donne la période.\n4. Le nombre d'électrons externes permet de trouver le groupe à l'aide du tableau, en tenant compte du cas particulier de l'hélium."
          },
          {
            type: "exemple",
            titre: "Étude de l'aluminium",
            texte: "L'aluminium Al a Z = 13.\n\nSon atome neutre possède 13 électrons : K² L⁸ M³.\n\nIl possède trois couches occupées : il est dans la période 3. Sa couche externe contient 3 électrons : il est dans le groupe 13."
          },
          {
            type: "exemple",
            titre: "Étude du néon",
            texte: "Le néon Ne a Z = 10. Sa répartition est K² L⁸.\n\nIl possède deux couches occupées : il est dans la période 2. Sa couche externe contient 8 électrons : il appartient au groupe 18, celui des gaz nobles."
          },
          {
            type: "remarque",
            titre: "Ce que la position ne dit pas à elle seule",
            texte: "La position d'un élément indique son numéro atomique et aide à prévoir des propriétés. Elle ne donne pas à elle seule le nombre de neutrons d'un atome : il faut aussi connaître son nombre de nucléons A.\n\nDes isotopes d'un même élément occupent la même place, car ils ont le même Z."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Ne pas confondre une période, qui est une ligne, avec un groupe, qui est une colonne.\n• Ne pas confondre le nombre total d'électrons avec le nombre d'électrons externes.\n• Ne pas oublier l'exception de l'hélium.\n• Ne pas classer les éléments par nombre de neutrons."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la classification périodique, comment appelle-t-on une ligne et comment appelle-t-on une colonne ? Selon quelle grandeur les éléments sont-ils rangés ?",
        correction: "Une ligne est une période et une colonne est un groupe.\n\nLes éléments sont rangés par numéro atomique Z croissant."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un atome neutre a la répartition électronique K² L⁶.\n\n1. Combien possède-t-il d'électrons au total ?\n2. Combien possède-t-il d'électrons externes ?",
        correction: "1. Il possède 2 + 6 = 8 électrons.\n\n2. Sa couche externe est L. Elle contient 6 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le carbone a pour numéro atomique Z = 6.\n\n1. Écris la répartition électronique de son atome neutre.\n2. Détermine sa période.\n3. Combien possède-t-il d'électrons externes ?",
        correction: "1. L'atome neutre possède 6 électrons : K² L⁴.\n\n2. Deux couches sont occupées : le carbone appartient à la période 2.\n\n3. Sa couche externe L contient 4 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le sodium a pour répartition K² L⁸ M¹. Indique sa période, son groupe et le nom de sa famille chimique.",
        correction: "Trois couches sont occupées : le sodium appartient à la période 3.\n\nIl possède un électron externe : il se trouve dans le groupe 1.\n\nLe sodium est un métal alcalin."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le néon a pour répartition K² L⁸ et l'argon K² L⁸ M⁸.\n\n1. Combien chacun possède-t-il d'électrons externes ?\n2. À quelle famille appartiennent-ils ?",
        correction: "1. La couche externe du néon contient 8 électrons. Celle de l'argon en contient aussi 8.\n\n2. Ils appartiennent à la famille des gaz nobles, dans le groupe 18."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le phosphore a pour numéro atomique Z = 15.\n\n1. Donne le nombre d'électrons de son atome neutre.\n2. Écris sa répartition électronique.\n3. Détermine sa période et son groupe.",
        correction: "1. L'atome neutre possède Z = 15 électrons.\n\n2. Sa répartition est K² L⁸ M⁵ : 2 + 8 + 5 = 15.\n\n3. Trois couches sont occupées : il appartient à la période 3. Il possède 5 électrons externes : il se trouve dans le groupe 15."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le fluor F a Z = 9 et le chlore Cl a Z = 17.\n\n1. Écris la répartition électronique de leurs atomes neutres.\n2. Compare leurs électrons externes.\n3. Indique leur groupe et leur famille.",
        correction: "1. Fluor : K² L⁷. Chlore : K² L⁸ M⁷.\n\n2. Chacun possède 7 électrons sur sa couche externe.\n\n3. Ils appartiennent au groupe 17 et à la famille des halogènes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un atome neutre possède 12 électrons.\n\n1. Quel est son numéro atomique ?\n2. Écris sa répartition électronique.\n3. Indique sa période et son groupe.\n4. À l'aide de la donnée suivante, nomme l'élément : Z = 12 correspond au magnésium Mg.",
        correction: "1. L'atome est neutre : il possède 12 protons. Son numéro atomique est donc Z = 12.\n\n2. Sa répartition est K² L⁸ M².\n\n3. Il possède trois couches occupées : période 3. Il possède deux électrons externes : groupe 2.\n\n4. L'élément est le magnésium, de symbole Mg."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Les noyaux ¹²₆C et ¹⁴₆C occupent deux cases différentes du tableau périodique parce qu'ils n'ont pas le même nombre de neutrons. » Son affirmation est-elle correcte ? Justifie.",
        correction: "Non. Les deux noyaux ont le même numéro atomique Z = 6 : ils appartiennent tous deux à l'élément carbone et occupent la même case.\n\nIls diffèrent par leur nombre de neutrons : 6 pour ¹²₆C et 8 pour ¹⁴₆C. Ce sont deux isotopes du carbone."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie deux atomes neutres X et Y.\n\n• X possède 8 protons.\n• Y possède 16 protons.\n\nDonnées : Z = 8 correspond à l'oxygène O et Z = 16 au soufre S.\n\n1. Donne leur nombre d'électrons et leur répartition électronique.\n2. Détermine la période et le groupe de chaque élément.\n3. Explique pourquoi ces éléments sont placés dans la même colonne.",
        correction: "1. X possède 8 électrons : K² L⁶. Y possède 16 électrons : K² L⁸ M⁶.\n\n2. X, l'oxygène, possède deux couches occupées : période 2. Y, le soufre, en possède trois : période 3.\n\nChacun possède 6 électrons externes : ils sont dans le groupe 16.\n\n3. Ils ont le même nombre d'électrons externes, ce qui contribue à leurs propriétés chimiques voisines. Ils sont placés dans la même colonne."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice de type examen. Un atome neutre appartient à la période 3 et au groupe 17.\n\n1. Combien de couches occupées possède-t-il ?\n2. Combien d'électrons possède-t-il sur sa couche externe ?\n3. Écris sa répartition électronique et déduis son numéro atomique.\n4. L'élément de numéro atomique 17 est le chlore Cl. À quelle famille appartient-il ?\n5. Son noyau contient 18 neutrons. Écris sa notation.",
        correction: "1. L'atome appartient à la période 3 : il possède trois couches occupées.\n\n2. Il appartient au groupe 17 : il possède 7 électrons externes.\n\n3. Sa répartition est K² L⁸ M⁷. Il possède 2 + 8 + 7 = 17 électrons. Comme il est neutre, il possède 17 protons : Z = 17.\n\n4. Le chlore appartient à la famille des halogènes.\n\n5. Son nombre de nucléons est A = 17 + 18 = 35. Le noyau se note ³⁵₁₇Cl."
      }
    ]
  }
]);
