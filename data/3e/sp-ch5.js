enregistrerChapitres("3e", "sp", [
  {
    id: 5,
    titre: "Chapitre 5 : Hydrocarbures et combustions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les hydrocarbures",
        blocs: [
          {
            type: "introduction",
            titre: "Des combustibles courants",
            texte: "Le gaz utilisé pour la cuisson, l’essence et certains autres combustibles contiennent des hydrocarbures. Leur combustion fournit de l’énergie, mais elle peut aussi produire des substances dangereuses ou polluantes."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Un hydrocarbure est une espèce chimique constituée uniquement d’atomes de carbone C et d’hydrogène H.\n\nExemples : méthane CH₄, propane C₃H₈ et butane C₄H₁₀."
          },
          {
            type: "tableau",
            titre: "Quelques hydrocarbures",
            entetes: ["Nom", "Formule", "Nombre d’atomes dans une molécule"],
            lignes: [
              ["Méthane", "CH₄", "1 carbone et 4 hydrogènes"],
              ["Éthane", "C₂H₆", "2 carbones et 6 hydrogènes"],
              ["Propane", "C₃H₈", "3 carbones et 8 hydrogènes"],
              ["Butane", "C₄H₁₀", "4 carbones et 10 hydrogènes"]
            ]
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Une espèce contenant du carbone et de l’hydrogène n’est pas forcément un hydrocarbure : elle ne doit contenir aucun autre élément. Par exemple, l’éthanol C₂H₆O contient aussi de l’oxygène : ce n’est donc pas un hydrocarbure."
          }
        ]
      },

      {
        id: 8,
        titre: "Les alcanes et leurs noms",
        blocs: [
          {
            type: "definition",
            titre: "Qu’est-ce qu’un alcane ?",
            texte: "Un alcane est un hydrocarbure saturé : il ne contient que du carbone et de l’hydrogène, et les liaisons entre ses atomes de carbone sont simples.\n\nDans cette leçon, nous étudions les alcanes non cycliques, dont la chaîne ne forme pas de cycle."
          },
          {
            type: "regle",
            titre: "Formule générale",
            texte: "La formule générale d’un alcane non cyclique est :\n\nCₙH₂ₙ₊₂\n\noù n est un entier naturel supérieur ou égal à 1. Il représente le nombre d’atomes de carbone. Le nombre d’atomes d’hydrogène est donc 2n + 2."
          },
          {
            type: "exemple",
            titre: "Trouver une formule",
            texte: "Un alcane non cyclique possède 5 atomes de carbone. On a donc n = 5.\n\nNombre d’atomes d’hydrogène : 2n + 2 = 2 × 5 + 2 = 12.\n\nSa formule est C₅H₁₂."
          },
          {
            type: "tableau",
            titre: "Premiers alcanes à chaîne non ramifiée",
            entetes: ["Nombre de carbones", "Nom", "Formule"],
            lignes: [
              ["1", "Méthane", "CH₄"],
              ["2", "Éthane", "C₂H₆"],
              ["3", "Propane", "C₃H₈"],
              ["4", "Butane", "C₄H₁₀"],
              ["5", "Pentane", "C₅H₁₂"],
              ["6", "Hexane", "C₆H₁₄"]
            ]
          },
          {
            type: "methode",
            titre: "Nommer un alcane à chaîne non ramifiée",
            texte: "1. Compter les atomes de carbone de la chaîne.\n2. Choisir le début du nom : méth- pour 1, éth- pour 2, prop- pour 3, but- pour 4, pent- pour 5 et hex- pour 6.\n3. Ajouter la terminaison « -ane ».\n\nExemple : une chaîne non ramifiée de 5 atomes de carbone correspond au pentane."
          },
          {
            type: "remarque",
            titre: "Formule brute et structure",
            texte: "La formule brute indique le nombre d’atomes de chaque élément, mais pas leur disposition. À partir de 4 atomes de carbone, des alcanes non cycliques peuvent avoir la même formule brute et des structures différentes : ce sont des isomères.\n\nPar exemple, C₄H₁₀ correspond au butane à chaîne non ramifiée ou au 2-méthylpropane, qui est ramifié."
          },
          {
            type: "schema",
            titre: "Deux structures pour la formule C₄H₁₀",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210' role='img' aria-label='Formules semi-développées du butane et du 2-méthylpropane'><rect width='320' height='210' fill='white'/><text x='160' y='26' text-anchor='middle' font-size='16' fill='#0f172a'>Même formule brute : C₄H₁₀</text><text x='160' y='53' text-anchor='middle' font-size='15' fill='#334155'>Butane : chaîne non ramifiée</text><text x='160' y='80' text-anchor='middle' font-size='17' fill='#1d4ed8'>CH₃ — CH₂ — CH₂ — CH₃</text><line x1='35' y1='98' x2='285' y2='98' stroke='#cbd5e1'/><text x='160' y='122' text-anchor='middle' font-size='15' fill='#334155'>2-méthylpropane : chaîne ramifiée</text><text x='160' y='153' text-anchor='middle' font-size='17' fill='#047857'>CH₃ — CH — CH₃</text><line x1='160' y1='158' x2='160' y2='174' stroke='#047857' stroke-width='2'/><text x='160' y='194' text-anchor='middle' font-size='17' fill='#047857'>CH₃</text></svg>",
            legende: "Ces formules semi-développées montrent deux dispositions différentes des atomes. Chaque molécule contient 4 atomes de carbone et 10 atomes d’hydrogène : ce sont deux isomères."
          },
          {
            type: "remarque",
            titre: "Attention à la formule générale",
            texte: "CₙH₂ₙ₊₂ s’applique aux alcanes non cycliques. Tous les hydrocarbures ne sont pas des alcanes et ne vérifient donc pas nécessairement cette formule."
          }
        ]
      },

      {
        id: 2,
        titre: "Les conditions d’une combustion",
        blocs: [
          {
            type: "definition",
            titre: "Combustible et comburant",
            texte: "Une combustion est une transformation chimique entre un combustible et un comburant.\n\n• Le combustible est la substance qui brûle : par exemple, le butane.\n• Le comburant est la substance qui permet la combustion : dans les exemples étudiés ici, c’est le dioxygène O₂ de l’air."
          },
          {
            type: "definition",
            titre: "Le triangle du feu",
            texte: "Pour qu’un feu démarre et se maintienne, il faut réunir :\n\n• un combustible ;\n• un comburant, généralement le dioxygène de l’air ;\n• une énergie d’activation, par exemple une étincelle ou une source de chaleur.\n\nSupprimer l’un de ces éléments peut permettre d’interrompre la combustion."
          },
          {
            type: "schema",
            titre: "Le triangle du feu",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 230' role='img' aria-label='Triangle du feu : combustible, comburant et énergie d’activation'><rect width='320' height='230' fill='white'/><path d='M160 57 L65 176 L255 176 Z' fill='#fff7ed' stroke='#ea580c' stroke-width='3'/><circle cx='160' cy='57' r='5' fill='#ea580c'/><circle cx='65' cy='176' r='5' fill='#ea580c'/><circle cx='255' cy='176' r='5' fill='#ea580c'/><text x='160' y='22' text-anchor='middle' font-size='15' fill='#0f172a'>Énergie d’activation</text><text x='160' y='41' text-anchor='middle' font-size='13' fill='#475569'>étincelle, chaleur…</text><text x='63' y='199' text-anchor='middle' font-size='15' fill='#0f172a'>Combustible</text><text x='63' y='217' text-anchor='middle' font-size='13' fill='#475569'>ex. : butane</text><text x='257' y='199' text-anchor='middle' font-size='15' fill='#0f172a'>Comburant</text><text x='257' y='217' text-anchor='middle' font-size='13' fill='#475569'>ex. : dioxygène</text><text x='160' y='143' text-anchor='middle' font-size='16' fill='#9a3412'>Combustion</text></svg>",
            legende: "La combustion nécessite un combustible, un comburant et une énergie d’activation. Supprimer l’un de ces éléments peut interrompre le feu. Ne tente pas d’éteindre un feu si cela te met en danger : éloigne-toi et préviens un adulte ou les secours."
          },
          {
            type: "remarque",
            titre: "La combustion libère de l’énergie",
            texte: "La combustion libère de l’énergie, notamment sous forme de chaleur et parfois de lumière. Il faut apporter une énergie au départ pour l’amorcer ; la chaleur produite peut ensuite contribuer à son maintien."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne manipule pas une flamme ou un combustible sans l’autorisation et la surveillance d’un adulte responsable. En cas d’odeur de gaz, ne produis aucune flamme ni étincelle, ne manipule pas les interrupteurs et préviens immédiatement un adulte. Éloigne-toi et, si possible sans danger, aère les lieux."
          }
        ]
      },

      {
        id: 3,
        titre: "La combustion complète",
        blocs: [
          {
            type: "definition",
            titre: "Produits formés",
            texte: "Lorsque la quantité de dioxygène est suffisante et que la combustion est complète, un hydrocarbure forme du dioxyde de carbone CO₂ et de l’eau H₂O.\n\nBilan en mots :\nhydrocarbure + dioxygène → dioxyde de carbone + eau."
          },
          {
            type: "exemple",
            titre: "Combustion complète du méthane",
            texte: "Le méthane a pour formule CH₄.\n\nCH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nVérification :\n• Carbone : 1 atome de chaque côté.\n• Hydrogène : 4 atomes de chaque côté.\n• Oxygène : 4 atomes de chaque côté."
          },
          {
            type: "exemple",
            titre: "Combustion complète du propane",
            texte: "Le propane a pour formule C₃H₈.\n\nC₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n\nVérification :\n• C : 3 à gauche et 3 à droite.\n• H : 8 à gauche et 4 × 2 = 8 à droite.\n• O : 5 × 2 = 10 à gauche et 3 × 2 + 4 = 10 à droite."
          },
          {
            type: "exemple",
            titre: "Combustion complète du butane",
            texte: "Le butane a pour formule C₄H₁₀.\n\n2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.\n\nVérification :\n• C : 8 à gauche et 8 à droite.\n• H : 20 à gauche et 20 à droite.\n• O : 26 à gauche et 26 à droite."
          },
          {
            type: "methode",
            titre: "Équilibrer une combustion",
            texte: "1. Écrire les formules : hydrocarbure + O₂ → CO₂ + H₂O.\n2. Équilibrer les atomes de carbone.\n3. Équilibrer les atomes d’hydrogène.\n4. Équilibrer les atomes d’oxygène en dernier.\n5. Vérifier tous les atomes. Si nécessaire, multiplier tous les coefficients pour obtenir les plus petits nombres entiers possibles.\n\nNe jamais modifier les indices des formules."
          }
        ]
      },

      {
        id: 4,
        titre: "Identifier les produits",
        blocs: [
          {
            type: "definition",
            titre: "Test du dioxyde de carbone",
            texte: "Le dioxyde de carbone peut être mis en évidence avec de l’eau de chaux : celle-ci se trouble en présence de CO₂.\n\nL’eau de chaux est une solution qui doit être manipulée avec précaution, selon les consignes de l’enseignant."
          },
          {
            type: "definition",
            titre: "Test de l’eau",
            texte: "Le sulfate de cuivre anhydre est blanc. Il devient bleu en présence d’eau.\n\nLe papier au chlorure de cobalt est un autre indicateur : il passe du bleu au rose en présence d’eau. Ces tests sont réalisés au laboratoire avec les précautions adaptées."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les gaz",
            texte: "• Le dioxygène O₂ est le comburant étudié ici.\n• Le dioxyde de carbone CO₂ trouble l’eau de chaux.\n• Le monoxyde de carbone CO est un gaz très toxique, différent du CO₂.\n• Le dihydrogène H₂ est un gaz inflammable."
          }
        ]
      },

      {
        id: 5,
        titre: "La combustion incomplète et ses dangers",
        blocs: [
          {
            type: "definition",
            titre: "Quand le dioxygène manque",
            texte: "Lorsque le dioxygène est insuffisant, la combustion d’un hydrocarbure peut être incomplète. Elle peut alors produire, en plus d’autres substances, du monoxyde de carbone CO et de la suie, constituée notamment de carbone."
          },
          {
            type: "remarque",
            titre: "Danger du monoxyde de carbone",
            texte: "Le monoxyde de carbone est un gaz très toxique, incolore et inodore. Il peut provoquer une intoxication grave, voire mortelle, sans qu’on remarque sa présence.\n\nIl ne faut jamais utiliser un appareil à combustion dans un lieu fermé et mal aéré. Les appareils doivent être entretenus et utilisés selon les consignes de sécurité."
          },
          {
            type: "methode",
            titre: "En cas de suspicion d’intoxication",
            texte: "Éloigne-toi rapidement de la zone et préviens immédiatement un adulte et les secours. N’entre pas à nouveau dans le lieu dangereux pour chercher une personne ou un objet. L’intervention doit être laissée aux personnes formées et équipées."
          },
          {
            type: "remarque",
            titre: "Effets sur l’environnement",
            texte: "Le dioxyde de carbone est un gaz à effet de serre : son accumulation dans l’atmosphère contribue au réchauffement climatique. Une combustion incomplète peut aussi produire des polluants, notamment des particules de suie."
          }
        ]
      },

      {
        id: 6,
        titre: "Calculs à partir d’une équation",
        blocs: [
          {
            type: "regle",
            titre: "Lire les proportions",
            texte: "Pour la combustion du méthane :\n\nCH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\n1 mol de méthane réagit avec 2 mol de dioxygène et forme 1 mol de dioxyde de carbone et 2 mol d’eau, si la combustion est complète et les réactifs sont en proportions adaptées."
          },
          {
            type: "methode",
            titre: "Calculer une quantité de matière",
            texte: "1. Écrire l’équation équilibrée.\n2. Repérer la quantité connue et celle recherchée.\n3. Lire les coefficients correspondants.\n4. Utiliser leur proportion.\n5. Vérifier les conditions : réaction complète, quantité de dioxygène suffisante ou réactif en excès.\n6. Donner le résultat en mol."
          },
          {
            type: "exemple",
            titre: "Exemple avec le propane",
            texte: "On brûle complètement 0,20 mol de propane avec suffisamment de dioxygène.\n\nC₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n\nPour 1 mol de propane, il faut 5 mol de O₂ et il se forme 3 mol de CO₂.\n\nPour 0,20 mol de propane :\n• n(O₂) consommée = 5 × 0,20 = 1,0 mol ;\n• n(CO₂) formée = 3 × 0,20 = 0,60 mol."
          },
          {
            type: "methode",
            titre: "Si une masse est donnée",
            texte: "1. Calculer la masse molaire M du combustible si nécessaire.\n2. Convertir la masse m en quantité de matière : n = m / M.\n3. Utiliser les proportions de l’équation équilibrée.\n4. Si une masse de produit est demandée, calculer m = n × M.\n\nUtiliser m en g, M en g/mol et n en mol."
          },
          {
            type: "exemple",
            titre: "Du méthane au dioxyde de carbone",
            texte: "On brûle complètement 16 g de méthane avec suffisamment de dioxygène. Données : M(CH₄) = 16 g/mol et M(CO₂) = 44 g/mol.\n\nn(CH₄) = 16 / 16 = 1 mol.\n\nD’après CH₄ + 2 O₂ → CO₂ + 2 H₂O, 1 mol de CH₄ forme 1 mol de CO₂.\n\nm(CO₂) = n × M = 1 × 44 = 44 g.\n\nLes 44 g de CO₂ ne proviennent pas seulement du méthane : le dioxygène consommé apporte aussi de la masse."
          }
        ]
      },

      {
        id: 7,
        titre: "Bilan pour l’examen",
        blocs: [
          {
            type: "tableau",
            titre: "Les points essentiels",
            entetes: ["Notion", "À retenir"],
            lignes: [
              ["Hydrocarbure", "Contient uniquement du carbone et de l’hydrogène."],
              ["Alcane non cyclique", "Sa formule générale est CₙH₂ₙ₊₂."],
              ["Combustion complète", "Produit du dioxyde de carbone et de l’eau."],
              ["Combustion incomplète", "Peut produire du monoxyde de carbone et de la suie."],
              ["Test du CO₂", "L’eau de chaux se trouble."],
              ["Test de l’eau", "Le sulfate de cuivre anhydre blanc devient bleu."]
            ]
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Confondre CO et CO₂.\n• Oublier l’eau parmi les produits d’une combustion complète.\n• Modifier les indices au lieu d’ajouter des coefficients.\n• Oublier de vérifier les atomes d’oxygène.\n• Utiliser les coefficients d’une équation non équilibrée pour faire un calcul.\n• Ignorer les dangers d’une combustion incomplète."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Parmi les espèces suivantes, lesquelles sont des hydrocarbures : CH₄, H₂O, C₄H₁₀ et C₂H₆O ? Justifier.",
        correction: "CH₄ et C₄H₁₀ sont des hydrocarbures : ils contiennent uniquement du carbone et de l’hydrogène.\n\nH₂O ne contient pas de carbone. C₂H₆O contient de l’oxygène en plus du carbone et de l’hydrogène : ce n’est pas un hydrocarbure."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Nommer les trois éléments du triangle du feu.",
        correction: "Les trois éléments sont : un combustible, un comburant et une énergie d’activation."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quels sont les produits de la combustion complète d’un hydrocarbure ? Donner leurs formules.",
        correction: "Les produits sont le dioxyde de carbone CO₂ et l’eau H₂O."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un alcane non cyclique possède 6 atomes de carbone. 1. Écrire la formule générale des alcanes non cycliques. 2. Déterminer sa formule brute. 3. Donner son nom si sa chaîne est non ramifiée.",
        correction: "1. La formule générale est CₙH₂ₙ₊₂.\n\n2. Ici n = 6. Le nombre d’atomes d’hydrogène vaut 2 × 6 + 2 = 14. La formule brute est donc C₆H₁₄.\n\n3. Si sa chaîne est non ramifiée, cet alcane est l’hexane."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Comment mettre en évidence le dioxyde de carbone et l’eau au laboratoire ?",
        correction: "Le dioxyde de carbone trouble l’eau de chaux.\n\nLe sulfate de cuivre anhydre blanc devient bleu en présence d’eau. Ces tests sont réalisés en suivant les consignes de sécurité."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Équilibrer la combustion complète du méthane : CH₄ + O₂ → CO₂ + H₂O.",
        correction: "On équilibre d’abord l’hydrogène en plaçant 2 devant H₂O, puis l’oxygène en plaçant 2 devant O₂ :\n\nCH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nVérification : C : 1 et 1 ; H : 4 et 4 ; O : 4 et 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi une combustion incomplète dans une pièce mal aérée est-elle dangereuse ?",
        correction: "Elle peut produire du monoxyde de carbone CO, un gaz très toxique, incolore et inodore. Il peut provoquer une intoxication grave ou mortelle. Il faut utiliser les appareils à combustion dans des conditions adaptées et maintenir une bonne aération."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La combustion complète du propane est : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Pour 0,50 mol de propane brûlé complètement, calculer les quantités de O₂ consommée et de CO₂ formée.",
        correction: "Pour 1 mol de propane, l’équation indique 5 mol de O₂ consommées et 3 mol de CO₂ formées.\n\nPour 0,50 mol de propane :\n\nn(O₂) = 5 × 0,50 = 2,5 mol.\n\nn(CO₂) = 3 × 0,50 = 1,5 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On brûle complètement 8 g de méthane avec suffisamment de dioxygène. Données : M(CH₄) = 16 g/mol. Calculer la quantité de matière de méthane, puis celle de CO₂ formée.",
        correction: "n(CH₄) = m / M = 8 / 16 = 0,50 mol.\n\nÉquation : CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\n1 mol de méthane forme 1 mol de CO₂. Donc 0,50 mol de méthane forme 0,50 mol de CO₂."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Équilibrer la combustion complète de l’éthane : C₂H₆ + O₂ → CO₂ + H₂O.",
        correction: "On peut d’abord écrire : C₂H₆ + O₂ → 2 CO₂ + 3 H₂O.\n\nÀ droite, il y a 4 + 3 = 7 atomes d’oxygène. Pour obtenir des coefficients entiers, on multiplie toute l’équation par 2 :\n\n2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O.\n\nVérification : C : 4 et 4 ; H : 12 et 12 ; O : 14 et 14."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. On brûle complètement 5,8 g de butane C₄H₁₀ avec suffisamment de dioxygène. Données : M(C₄H₁₀) = 58 g/mol ; M(CO₂) = 44 g/mol.\n\n1. Écrire l’équation équilibrée de la combustion.\n2. Calculer la quantité de matière de butane brûlé.\n3. Calculer les quantités de matière de dioxygène consommé et de dioxyde de carbone formé.\n4. Calculer la masse de CO₂ formé.\n5. Indiquer un test du CO₂.",
        correction: "1. 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.\n\n2. n(C₄H₁₀) = m / M = 5,8 / 58 = 0,10 mol.\n\n3. Pour 2 mol de butane, il faut 13 mol de O₂ et il se forme 8 mol de CO₂.\n\nPour 0,10 mol de butane :\nn(O₂) = 0,10 × 13 / 2 = 0,65 mol.\nn(CO₂) = 0,10 × 8 / 2 = 0,40 mol.\n\n4. m(CO₂) = n × M = 0,40 × 44 = 17,6 g.\n\n5. Le dioxyde de carbone trouble l’eau de chaux."
      }
    ]
  }
]);
