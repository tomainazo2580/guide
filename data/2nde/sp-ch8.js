enregistrerChapitres("2nde", "sp", [
  {
    id: 8,
    titre: "Chapitre 8 : L’électrolyse des solutions aqueuses",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le courant électrique dans une solution",
        blocs: [
          {
            type: "introduction",
            titre: "Des porteurs de charge différents",
            texte: "Dans un fil métallique, le courant électrique est lié au déplacement d’électrons. Dans une solution ionique, il est lié au déplacement des ions. Pour comprendre l’électrolyse, il faut distinguer ces deux types de porteurs de charge."
          },
          {
            type: "rappel",
            titre: "Cations et anions",
            texte: "Un cation est un ion chargé positivement, comme Na⁺ ou Cu²⁺. Un anion est un ion chargé négativement, comme Cl⁻ ou SO₄²⁻."
          },
          {
            type: "definition",
            titre: "Solution électrolytique",
            texte: "Une solution électrolytique est une solution qui conduit le courant électrique grâce aux ions mobiles qu’elle contient. Sa conductivité dépend notamment de la nature et de la concentration des ions."
          },
          {
            type: "exemple",
            titre: "Solution de chlorure de sodium",
            texte: "Une solution aqueuse de chlorure de sodium contient notamment des ions Na⁺ et Cl⁻. Ces ions peuvent se déplacer dans la solution et participer au passage du courant."
          },
          {
            type: "remarque",
            titre: "La solution reste globalement neutre",
            texte: "Une solution ionique contient des charges positives et négatives. Elle est globalement électriquement neutre, même si ses ions se déplacent dans des directions opposées lorsque le courant passe."
          },
          {
            type: "regle",
            titre: "Sens du courant et déplacement des charges",
            texte: "Par convention, le sens du courant électrique est celui du déplacement des charges positives. Dans un fil métallique, les électrons se déplacent en sens opposé au courant conventionnel."
          }
        ]
      },

      {
        id: 2,
        titre: "La cellule d’électrolyse",
        blocs: [
          {
            type: "definition",
            titre: "Électrolyse",
            texte: "Une électrolyse est une transformation chimique provoquée par le passage d’un courant électrique, grâce à un générateur. Elle convertit une partie de l’énergie électrique reçue en énergie chimique."
          },
          {
            type: "definition",
            titre: "Électrodes",
            texte: "Les électrodes sont des conducteurs en contact avec la solution et reliés au circuit extérieur. Les transformations chimiques se produisent à leur surface."
          },
          {
            type: "definition",
            titre: "Cathode et anode",
            texte: "Dans une cellule d’électrolyse, la cathode est l’électrode où a lieu une réduction : une espèce y gagne des électrons. L’anode est l’électrode où a lieu une oxydation : une espèce y perd des électrons."
          },
          {
            type: "regle",
            titre: "Polarité en électrolyse",
            texte: "Pour une électrolyse alimentée par un générateur à courant continu, la cathode est reliée à la borne négative du générateur et l’anode à sa borne positive. Cette règle de polarité concerne l’électrolyse ; elle ne doit pas être généralisée sans précaution à une pile."
          },
          {
            type: "schema",
            titre: "Schéma de principe",
            texte: "Borne négative du générateur ── cathode (−)\n                                  │\n                         solution ionique\n                                  │\nBorne positive du générateur ─── anode (+)\n\nDans la solution : les cations se dirigent vers la cathode et les anions vers l’anode."
          },
          {
            type: "remarque",
            titre: "Que devient une espèce à l’électrode ?",
            texte: "Le déplacement d’un ion vers une électrode ne garantit pas à lui seul qu’il y réagira. Les espèces effectivement transformées dépendent notamment de la solution, des électrodes et des conditions de l’électrolyse. Elles seront précisées dans les exercices."
          },
          {
            type: "remarque",
            titre: "Électrodes inertes",
            texte: "Dans les modèles simples de ce chapitre, les électrodes sont dites inertes lorsqu’on suppose qu’elles ne sont pas consommées et ne fournissent pas elles-mêmes de produit. Certaines électrodes réelles peuvent au contraire participer à la transformation."
          }
        ]
      },

      {
        id: 3,
        titre: "Réduction et oxydation",
        blocs: [
          {
            type: "definition",
            titre: "Réduction",
            texte: "Une réduction est un gain d’électrons par une espèce chimique. En électrolyse, elle a lieu à la cathode."
          },
          {
            type: "exemple",
            titre: "Formation de cuivre",
            texte: "À la cathode, des ions cuivre(II) peuvent gagner des électrons et former du cuivre métallique :\n\nCu²⁺(aq) + 2 e⁻ → Cu(s).\n\nChaque ion Cu²⁺ gagne deux électrons."
          },
          {
            type: "definition",
            titre: "Oxydation",
            texte: "Une oxydation est une perte d’électrons par une espèce chimique. En électrolyse, elle a lieu à l’anode."
          },
          {
            type: "exemple",
            titre: "Oxydation d’ions chlorure",
            texte: "Dans certaines conditions, des ions chlorure peuvent perdre des électrons à l’anode :\n\n2 Cl⁻(aq) → Cl₂(g) + 2 e⁻.\n\nLe dichlore Cl₂ est un gaz toxique. Cet exemple est théorique et ne doit pas être réalisé chez soi."
          },
          {
            type: "methode",
            titre: "Vérifier une demi-équation",
            texte: "1. Compter les atomes de chaque élément à gauche et à droite.\n2. Calculer la charge totale de chaque côté en tenant compte de la charge −1 de chaque électron.\n3. Vérifier que les atomes et la charge totale sont conservés.\n4. Repérer les électrons : à gauche pour une réduction, à droite pour une oxydation."
          },
          {
            type: "exemple",
            titre: "Vérification des charges",
            texte: "Dans Cu²⁺ + 2 e⁻ → Cu :\n\nÀ gauche : charge totale +2 + 2 × (−1) = 0.\nÀ droite : le cuivre métallique est neutre, donc la charge vaut 0.\n\nIl y a aussi un atome de cuivre de chaque côté."
          },
          {
            type: "schema",
            titre: "Mémo",
            texte: "CATHODE : réduction, gain d’électrons\nEspèce + électrons → produit\n\nANODE : oxydation, perte d’électrons\nEspèce → produit + électrons"
          }
        ]
      },

      {
        id: 4,
        titre: "Du modèle aux équations",
        blocs: [
          {
            type: "introduction",
            titre: "Deux transformations simultanées",
            texte: "Pendant l’électrolyse, une réduction a lieu à la cathode et une oxydation à l’anode. On peut additionner les deux demi-équations pour obtenir le bilan global, après avoir égalisé les nombres d’électrons échangés."
          },
          {
            type: "methode",
            titre: "Établir un bilan global",
            texte: "1. Écrire la demi-équation de réduction et celle d’oxydation données ou déduites de l’énoncé.\n2. Multiplier si nécessaire une ou les deux demi-équations pour obtenir le même nombre d’électrons de chaque côté.\n3. Additionner les deux équations.\n4. Supprimer les électrons qui apparaissent des deux côtés.\n5. Vérifier les atomes et la charge totale."
          },
          {
            type: "exemple",
            titre: "Un bilan d’électrolyse",
            texte: "Dans un modèle où les réactions suivantes sont imposées :\n\nCathode : Cu²⁺ + 2 e⁻ → Cu.\nAnode : 2 Cl⁻ → Cl₂ + 2 e⁻.\n\nLes deux demi-équations échangent déjà 2 électrons. Leur addition donne :\n\nCu²⁺(aq) + 2 Cl⁻(aq) → Cu(s) + Cl₂(g).\n\nLa charge vaut 0 de chaque côté et les atomes sont conservés. Le dichlore est toxique : il ne faut pas chercher à produire ce gaz."
          },
          {
            type: "remarque",
            titre: "Ne pas inventer les produits",
            texte: "Dans une solution aqueuse, l’eau peut également intervenir dans les réactions aux électrodes. On ne peut donc pas déterminer systématiquement les produits en regardant seulement les ions présents : il faut connaître les conditions ou utiliser les réactions données dans l’énoncé."
          },
          {
            type: "remarque",
            titre: "Les électrons dans le bilan",
            texte: "Les électrons apparaissent dans les demi-équations, mais ils se simplifient dans le bilan global. Ils ne sont pas un produit final accumulé dans la solution."
          }
        ]
      },

      {
        id: 5,
        titre: "Exemple : électrolyse de l’eau",
        blocs: [
          {
            type: "introduction",
            titre: "Un modèle de bilan",
            texte: "Dans certaines conditions et avec un dispositif adapté, l’électrolyse de l’eau peut produire du dihydrogène et du dioxygène. Le bilan ci-dessous est un modèle utilisé pour les calculs ; il ne constitue pas un protocole expérimental."
          },
          {
            type: "regle",
            titre: "Équation-bilan",
            texte: "2 H₂O(l) → 2 H₂(g) + O₂(g).\n\nVérification : 4 atomes H et 2 atomes O de chaque côté."
          },
          {
            type: "exemple",
            titre: "Proportions en moles",
            texte: "D’après l’équation, si 2 mol d’eau sont consommées, 2 mol de dihydrogène et 1 mol de dioxygène sont formées. Si 0,40 mol d’eau est consommée, il se forme 0,40 mol de H₂ et 0,20 mol de O₂."
          },
          {
            type: "remarque",
            titre: "Comparer des volumes de gaz",
            texte: "Dans le modèle des gaz parfaits, à la même température et à la même pression, des quantités de matière égales de gaz occupent des volumes égaux. Dans ces conditions, le volume de H₂ formé est donc le double de celui de O₂."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Le dihydrogène est inflammable et un mélange de dihydrogène et de dioxygène peut être explosif. Il ne faut pas réaliser cette électrolyse à la maison, ni recueillir ou tester ces gaz. Les manipulations sont réservées à un cadre pédagogique équipé et encadré."
          }
        ]
      },

      {
        id: 6,
        titre: "Quantité de matière et charge électrique",
        blocs: [
          {
            type: "introduction",
            titre: "Relier courant et électrons",
            texte: "Si l’intensité du courant est constante, la charge électrique transférée pendant une durée donnée peut être calculée. Elle permet ensuite de déterminer la quantité de matière d’électrons échangés."
          },
          {
            type: "regle",
            titre: "Charge transférée",
            texte: "Q = I × t.\n\nQ est la charge électrique en coulombs (C), I l’intensité constante en ampères (A) et t la durée en secondes (s)."
          },
          {
            type: "rappel",
            titre: "Conversion de durée",
            texte: "1 minute = 60 secondes. Par exemple, 5 min = 5 × 60 = 300 s."
          },
          {
            type: "regle",
            titre: "Quantité d’électrons",
            texte: "n(e⁻) = Q / F.\n\nn(e⁻) est la quantité de matière d’électrons en mol. F est la constante de Faraday : on utilisera ici F ≈ 96 500 C·mol⁻¹."
          },
          {
            type: "exemple",
            titre: "Calcul de charge",
            texte: "Pour un courant constant I = 0,50 A pendant t = 200 s :\n\nQ = I × t = 0,50 × 200 = 100 C.\n\nLa quantité d’électrons transférés est : n(e⁻) = 100 / 96 500 ≈ 1,04 × 10⁻³ mol."
          },
          {
            type: "methode",
            titre: "Calculer une quantité de produit",
            texte: "1. Calculer Q = I × t avec t en secondes.\n2. Calculer n(e⁻) = Q / F.\n3. Utiliser les coefficients de la demi-équation pour relier n(e⁻) à la quantité de produit.\n4. Si une masse est demandée, utiliser m = n × M.\n\nCes calculs supposent notamment que tout le courant sert à la réaction étudiée et que le réactif nécessaire est disponible en quantité suffisante."
          },
          {
            type: "exemple",
            titre: "Dépôt de cuivre",
            texte: "Pour Cu²⁺ + 2 e⁻ → Cu, il faut 2 mol d’électrons pour former 1 mol de cuivre. Si 0,020 mol d’électrons sert entièrement à cette réaction, alors n(Cu) = 0,020 / 2 = 0,010 mol."
          }
        ]
      },

      {
        id: 7,
        titre: "Erreurs à éviter et sécurité",
        blocs: [
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : dire que les électrons circulent dans la solution comme dans le fil métallique.\nÀ faire : dans la solution, le courant est notamment lié au déplacement des ions.\n\nErreur : placer l’oxydation à la cathode.\nÀ faire : cathode = réduction ; anode = oxydation.\n\nErreur : oublier que la polarité indiquée ici concerne une électrolyse.\nÀ faire : ne pas la généraliser à une pile.\n\nErreur : additionner les demi-équations sans égaliser les électrons.\nÀ faire : égaliser puis simplifier les électrons.\n\nErreur : utiliser une durée en minutes dans Q = I × t.\nÀ faire : convertir la durée en secondes.\n\nErreur : prévoir les produits d’une solution aqueuse sans information sur les réactions.\nÀ faire : utiliser les conditions et demi-équations données."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Générateur → passage du courant → transformation chimique\n\nCathode : réduction, gain d’électrons\nAnode : oxydation, perte d’électrons\n\nQ = I × t\nn(e⁻) = Q / F"
          },
          {
            type: "remarque",
            titre: "Cadre sécurisé",
            texte: "Certaines électrolyses peuvent produire des gaz toxiques, inflammables ou explosifs et mettre en jeu des solutions dangereuses. Les exemples sont étudiés sur papier. Ne pas fabriquer de dispositif d’électrolyse ni chercher à identifier des gaz chez soi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une solution aqueuse contient des ions sodium Na⁺ et chlorure Cl⁻. Indique lequel est un cation et lequel est un anion.",
        correction: "Na⁺ porte une charge positive : c’est un cation. Cl⁻ porte une charge négative : c’est un anion."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une cellule d’électrolyse, une réduction se produit à une électrode et une oxydation à l’autre. Nomme l’électrode où se produit chaque transformation.",
        correction: "La réduction a lieu à la cathode. L’oxydation a lieu à l’anode."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère la demi-équation Cu²⁺ + 2 e⁻ → Cu. L’ion cuivre gagne-t-il ou perd-il des électrons ? Est-ce une réduction ou une oxydation ?",
        correction: "Les électrons sont à gauche : l’ion Cu²⁺ gagne deux électrons. Il s’agit donc d’une réduction."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une cellule d’électrolyse est reliée à un générateur à courant continu. Précise la polarité de la cathode et de l’anode, puis indique vers quelle électrode se dirigent les cations et les anions dans la solution.",
        correction: "La cathode est reliée à la borne négative et l’anode à la borne positive du générateur. Les cations se dirigent vers la cathode ; les anions se dirigent vers l’anode."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Vérifie la conservation des atomes et de la charge dans la demi-équation 2 Cl⁻ → Cl₂ + 2 e⁻. Indique s’il s’agit d’une oxydation ou d’une réduction.",
        correction: "Il y a 2 atomes de chlore de chaque côté. À gauche, la charge totale vaut 2 × (−1) = −2. À droite, Cl₂ est neutre et les deux électrons portent une charge totale de −2. La charge est conservée.\n\nLes électrons sont des produits : les ions chlorure perdent des électrons. C’est une oxydation."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un courant constant de 0,20 A traverse une cellule d’électrolyse pendant 5 min. Calcule la charge transférée. On donne Q = I × t, avec Q en C, I en A et t en s.",
        correction: "Durée : t = 5 × 60 = 300 s.\n\nQ = I × t = 0,20 × 300 = 60 C."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une électrolyse est modélisée par les deux demi-équations suivantes : cathode : Cu²⁺ + 2 e⁻ → Cu ; anode : 2 Cl⁻ → Cl₂ + 2 e⁻. Écris le bilan global et vérifie la conservation des atomes et de la charge. Le dichlore Cl₂ est toxique : cet exercice est uniquement théorique.",
        correction: "Les deux demi-équations échangent 2 électrons. On les additionne puis on simplifie les électrons :\n\nCu²⁺ + 2 Cl⁻ → Cu + Cl₂.\n\nIl y a 1 atome Cu et 2 atomes Cl de chaque côté. La charge totale vaut +2 − 2 = 0 à gauche et 0 à droite. Les atomes et la charge sont conservés."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une électrolyse de l’eau est modélisée par 2 H₂O → 2 H₂ + O₂. Si 0,60 mol d’eau est consommée selon cette seule réaction, calcule les quantités de matière de H₂ et de O₂ formées. Compare leurs volumes en supposant les deux gaz parfaits, à la même température et à la même pression.",
        correction: "Les coefficients indiquent que 2 mol de H₂O consommées forment 2 mol de H₂ et 1 mol de O₂.\n\nPour 0,60 mol de H₂O : n(H₂) = 0,60 mol et n(O₂) = 0,30 mol.\n\nÀ la même température et à la même pression, dans le modèle des gaz parfaits, le volume est proportionnel à la quantité de matière. Le volume de H₂ est donc le double de celui de O₂."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un courant constant de 0,965 A traverse une cellule pendant 1 000 s. On donne Q = I × t, n(e⁻) = Q / F et F = 96 500 C·mol⁻¹. Calcule la charge transférée puis la quantité de matière d’électrons correspondante.",
        correction: "Q = I × t = 0,965 × 1 000 = 965 C.\n\nn(e⁻) = Q / F = 965 / 96 500 = 0,0100 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À la cathode d’une cellule d’électrolyse, la réaction étudiée est Cu²⁺ + 2 e⁻ → Cu. Une quantité de 0,030 mol d’électrons sert entièrement à cette réaction ; les ions Cu²⁺ sont en quantité suffisante. Calcule la quantité de matière et la masse de cuivre formé. On donne M(Cu) = 63,5 g·mol⁻¹.",
        correction: "Il faut 2 mol d’électrons pour former 1 mol de cuivre.\n\nn(Cu) = 0,030 / 2 = 0,015 mol.\n\nm(Cu) = n × M = 0,015 × 63,5 = 0,9525 g, soit environ 0,95 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un modèle d’électrolyse, les réactions sont : cathode : Ag⁺ + e⁻ → Ag ; anode : 2 Cl⁻ → Cl₂ + 2 e⁻. Les réactifs sont disponibles en quantité suffisante. On suppose que 0,040 mol d’électrons est échangée et que tout le courant sert aux réactions indiquées. 1. Établis le bilan global. 2. Calcule les quantités de matière de Ag et de Cl₂ formées. 3. Calcule la masse d’argent formée. Donnée : M(Ag) = 108 g·mol⁻¹. Le dichlore est toxique : il s’agit d’un exercice théorique.",
        correction: "1. On multiplie la demi-équation de réduction par 2 : 2 Ag⁺ + 2 e⁻ → 2 Ag. On l’additionne à l’oxydation, puis on simplifie les électrons :\n\n2 Ag⁺ + 2 Cl⁻ → 2 Ag + Cl₂.\n\n2. Une mole d’électrons forme une mole de Ag : n(Ag) = 0,040 mol. Deux moles d’électrons correspondent à une mole de Cl₂ : n(Cl₂) = 0,040 / 2 = 0,020 mol.\n\n3. m(Ag) = 0,040 × 108 = 4,32 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une cellule d’électrolyse fonctionne pendant 20 min avec un courant constant de 1,93 A. À la cathode, la seule réaction utilisant le courant est Cu²⁺ + 2 e⁻ → Cu. Les ions Cu²⁺ sont en quantité suffisante. On donne Q = I × t, n(e⁻) = Q / F, F = 96 500 C·mol⁻¹ et M(Cu) = 63,5 g·mol⁻¹. Calcule : 1. la charge transférée ; 2. la quantité d’électrons ; 3. la quantité puis la masse de cuivre déposée.",
        correction: "1. t = 20 × 60 = 1 200 s. Donc Q = 1,93 × 1 200 = 2 316 C.\n\n2. n(e⁻) = 2 316 / 96 500 = 0,0240 mol.\n\n3. Il faut 2 mol d’électrons pour former 1 mol de Cu : n(Cu) = 0,0240 / 2 = 0,0120 mol.\n\nm(Cu) = 0,0120 × 63,5 = 0,762 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une électrolyse est modélisée par 2 H₂O → 2 H₂ + O₂. On suppose que cette réaction consomme exactement 3,6 g d’eau et qu’aucune autre réaction ne se produit. Données : M(H) = 1,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹. 1. Calcule la quantité d’eau consommée. 2. Calcule les quantités puis les masses de H₂ et de O₂ formés. 3. Vérifie la conservation de la masse. Cet exercice ne demande aucune manipulation.",
        correction: "1. M(H₂O) = 2 × 1,0 + 16,0 = 18,0 g·mol⁻¹. Donc n(H₂O) = 3,6 / 18,0 = 0,20 mol.\n\n2. D’après l’équation : n(H₂) = 0,20 mol et n(O₂) = 0,10 mol.\n\nM(H₂) = 2,0 g·mol⁻¹, donc m(H₂) = 0,20 × 2,0 = 0,40 g.\nM(O₂) = 32,0 g·mol⁻¹, donc m(O₂) = 0,10 × 32,0 = 3,2 g.\n\n3. Masse totale des gaz formés : 0,40 + 3,2 = 3,6 g. Elle est égale à la masse d’eau consommée."
      }
    ]
  }
]);
