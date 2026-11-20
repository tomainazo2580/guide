enregistrerChapitres("3e", "sp", [
  {
    id: 7,
    titre: "Chapitre 7 : L’électrolyse de l’eau",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce qu’une électrolyse ?",
        blocs: [
          {
            type: "introduction",
            titre: "Une transformation provoquée par l’électricité",
            texte: "Certaines transformations chimiques ne se produisent pas spontanément dans les conditions de l’expérience. On peut les provoquer en fournissant de l’énergie électrique.\n\nL’électrolyse de l’eau permet d’obtenir deux gaz : le dihydrogène et le dioxygène."
          },
          {
            type: "definition",
            titre: "Électrolyse",
            texte: "Une électrolyse est une transformation chimique provoquée par le passage d’un courant électrique dans un milieu adapté.\n\nL’appareil dans lequel on réalise cette transformation est appelé électrolyseur."
          },
          {
            type: "definition",
            titre: "Les électrodes",
            texte: "Les électrodes sont des conducteurs qui permettent le passage du courant entre le circuit électrique et la solution.\n\nDans l’électrolyseur :\n• l’électrode reliée à la borne négative du générateur est la cathode ;\n• l’électrode reliée à la borne positive du générateur est l’anode."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Cette expérience est réalisée uniquement au laboratoire, sous la surveillance de l’enseignant, avec un matériel adapté et un générateur approprié.\n\nL’eau et l’électricité présentent des risques. Le dihydrogène produit est inflammable : il ne faut pas approcher de flamme du montage."
          }
        ]
      },

      {
        id: 2,
        titre: "Décomposer l’eau",
        blocs: [
          {
            type: "definition",
            titre: "Principe",
            texte: "Lors de l’électrolyse de l’eau, l’eau est consommée et deux gaz se forment : le dihydrogène H₂ et le dioxygène O₂.\n\nBilan en mots :\neau → dihydrogène + dioxygène.\n\nCette transformation nécessite un apport d’énergie électrique."
          },
          {
            type: "remarque",
            titre: "Pourquoi ajoute-t-on un électrolyte ?",
            texte: "L’eau pure conduit très faiblement le courant électrique. Pour réaliser l’expérience, on utilise généralement une solution contenant un électrolyte adapté, c’est-à-dire des ions qui facilitent le passage du courant.\n\nLe choix de la solution et sa manipulation relèvent de l’enseignant. Il ne faut pas remplacer l’électrolyte par un produit pris au hasard : certaines solutions peuvent produire des gaz dangereux."
          },
          {
            type: "regle",
            titre: "Où se forment les gaz ?",
            texte: "Dans le montage habituel avec des électrodes adaptées :\n\n• le dihydrogène H₂ se forme à la cathode, reliée à la borne négative ;\n• le dioxygène O₂ se forme à l’anode, reliée à la borne positive."
          },
          {
            type: "schema",
            titre: "Schéma simplifié de l’électrolyse de l’eau",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 285' role='img' aria-label='Électrolyseur avec production de dihydrogène à la cathode et de dioxygène à l’anode'><rect width='320' height='285' fill='white'/><rect x='110' y='12' width='100' height='36' rx='6' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><text x='160' y='35' text-anchor='middle' font-size='14' fill='#0f172a'>Générateur</text><text x='122' y='35' font-size='18' fill='#1d4ed8'>−</text><text x='188' y='35' font-size='18' fill='#b91c1c'>+</text><path d='M121 48 L121 58 L50 58 L50 216 L92 216' fill='none' stroke='#475569' stroke-width='2'/><path d='M199 48 L199 58 L270 58 L270 216 L228 216' fill='none' stroke='#475569' stroke-width='2'/><path d='M32 120 L32 222 Q32 239 49 239 L271 239 Q288 239 288 222 L288 120' fill='#dbeafe' stroke='#475569' stroke-width='2'/><path d='M72 197 L72 92 Q72 78 86 78 L98 78 Q112 78 112 92 L112 197' fill='#dbeafe' stroke='#475569' stroke-width='2'/><path d='M74 94 Q74 80 86 80 L98 80 Q110 80 110 94 L110 129 L74 129 Z' fill='#fff7ed'/><path d='M208 197 L208 92 Q208 78 222 78 L234 78 Q248 78 248 92 L248 197' fill='#dbeafe' stroke='#475569' stroke-width='2'/><path d='M210 94 Q210 80 222 80 L234 80 Q246 80 246 94 L246 105 L210 105 Z' fill='#fff7ed'/><line x1='92' y1='216' x2='92' y2='173' stroke='#1d4ed8' stroke-width='5'/><line x1='228' y1='216' x2='228' y2='173' stroke='#b91c1c' stroke-width='5'/><circle cx='86' cy='165' r='3' fill='white' stroke='#64748b'/><circle cx='98' cy='153' r='3' fill='white' stroke='#64748b'/><circle cx='90' cy='141' r='3' fill='white' stroke='#64748b'/><circle cx='222' cy='164' r='3' fill='white' stroke='#64748b'/><circle cx='234' cy='150' r='3' fill='white' stroke='#64748b'/><circle cx='225' cy='137' r='3' fill='white' stroke='#64748b'/><text x='92' y='110' text-anchor='middle' font-size='15' fill='#0f172a'>H₂</text><text x='228' y='99' text-anchor='middle' font-size='15' fill='#0f172a'>O₂</text><text x='92' y='260' text-anchor='middle' font-size='14' fill='#1d4ed8'>Cathode (−)</text><text x='228' y='260' text-anchor='middle' font-size='14' fill='#b91c1c'>Anode (+)</text><text x='160' y='279' text-anchor='middle' font-size='13' fill='#475569'>Solution contenant un électrolyte adapté</text></svg>",
            legende: "Schéma de principe : les gaz sont recueillis séparément. Le dihydrogène se forme à la cathode et le dioxygène à l’anode. À température et pression égales, le volume théorique de H₂ est deux fois celui de O₂. Les quantités représentées sont schématiques. Expérience réservée au laboratoire."
          },
          {
            type: "exemple",
            titre: "Observer l’expérience",
            texte: "Pendant l’électrolyse, des bulles apparaissent au voisinage des deux électrodes. On peut recueillir séparément les gaz dans un dispositif approprié.\n\nDans des conditions comparables, le volume de dihydrogène recueilli est approximativement deux fois plus grand que le volume de dioxygène."
          },
          {
            type: "remarque",
            titre: "Les bulles ne suffisent pas à identifier un gaz",
            texte: "Observer des bulles montre qu’un gaz se forme, mais ne permet pas, à lui seul, de savoir lequel. Il faut utiliser un test adapté et tenir compte des conditions de l’expérience."
          }
        ]
      },

      {
        id: 3,
        titre: "Équation-bilan et conservation des atomes",
        blocs: [
          {
            type: "regle",
            titre: "Équation-bilan",
            texte: "L’équation équilibrée de l’électrolyse de l’eau est :\n\n2 H₂O → 2 H₂ + O₂.\n\nL’eau est le réactif. Le dihydrogène et le dioxygène sont les produits."
          },
          {
            type: "methode",
            titre: "Vérifier l’équation",
            texte: "À gauche, dans 2 H₂O :\n• hydrogène : 2 × 2 = 4 atomes ;\n• oxygène : 2 × 1 = 2 atomes.\n\nÀ droite :\n• dans 2 H₂ : 4 atomes d’hydrogène ;\n• dans O₂ : 2 atomes d’oxygène.\n\nIl y a donc le même nombre d’atomes de chaque élément des deux côtés."
          },
          {
            type: "regle",
            titre: "Lire les proportions",
            texte: "L’équation 2 H₂O → 2 H₂ + O₂ indique que :\n\n• 2 molécules d’eau donnent 2 molécules de dihydrogène et 1 molécule de dioxygène ;\n• 2 mol d’eau consommées donnent 2 mol de H₂ et 1 mol de O₂.\n\nCes proportions correspondent à la transformation représentée par l’équation."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les symboles",
            texte: "H₂ est le dihydrogène. O₂ est le dioxygène. H₂O est l’eau.\n\nDans H₂O, l’indice 2 concerne les atomes d’hydrogène. Dans 2 H₂O, le coefficient 2 multiplie toute la formule."
          }
        ]
      },

      {
        id: 4,
        titre: "Identifier les gaz formés",
        blocs: [
          {
            type: "definition",
            titre: "Test du dihydrogène",
            texte: "Le dihydrogène est inflammable. Lors d’un test adapté, une petite quantité peut produire une légère détonation, souvent décrite comme un « pop », au contact d’une flamme.\n\nCe test est réalisé uniquement par l’enseignant avec les précautions nécessaires."
          },
          {
            type: "definition",
            titre: "Test du dioxygène",
            texte: "Le dioxygène favorise la combustion. Une bûchette présentant un point incandescent se rallume lorsqu’elle est placée dans un récipient contenant suffisamment de dioxygène.\n\nCe test est également réalisé par l’enseignant dans des conditions de sécurité adaptées."
          },
          {
            type: "tableau",
            titre: "Comparer les deux gaz",
            entetes: ["Gaz", "Formule", "Test caractéristique"],
            lignes: [
              ["Dihydrogène", "H₂", "Petite détonation lors d’un test adapté à la flamme"],
              ["Dioxygène", "O₂", "Rallume une bûchette incandescente"]
            ]
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Ne confonds pas le dioxygène O₂ et le dioxyde de carbone CO₂. Le CO₂ est mis en évidence par l’eau de chaux, qui se trouble ; le dioxygène peut rallumer une bûchette incandescente."
          }
        ]
      },

      {
        id: 5,
        titre: "Quantités de matière et volumes",
        blocs: [
          {
            type: "regle",
            titre: "Proportions en moles",
            texte: "D’après l’équation :\n\n2 H₂O → 2 H₂ + O₂.\n\nLa quantité de matière de dihydrogène formée est deux fois celle de dioxygène formé :\n\nn(H₂) = 2 × n(O₂)."
          },
          {
            type: "exemple",
            titre: "Calcul avec les moles",
            texte: "Une électrolyse produit 0,15 mol de dioxygène.\n\nD’après l’équation, n(H₂) = 2 × n(O₂).\n\nn(H₂) = 2 × 0,15 = 0,30 mol.\n\nIl se forme 0,30 mol de dihydrogène."
          },
          {
            type: "regle",
            titre: "Proportions des volumes de gaz",
            texte: "À la même température et à la même pression, des quantités égales de gaz occupent le même volume. On en déduit, pour les gaz produits :\n\nV(H₂) = 2 × V(O₂).\n\nCette relation suppose que les volumes sont comparés dans les mêmes conditions et que les gaz sont correctement recueillis."
          },
          {
            type: "exemple",
            titre: "Calcul avec les volumes",
            texte: "On recueille 20 mL de dioxygène. Les deux gaz sont mesurés à la même température et à la même pression.\n\nV(H₂) = 2 × V(O₂)\nV(H₂) = 2 × 20 = 40 mL.\n\nLe volume théorique de dihydrogène est 40 mL."
          },
          {
            type: "remarque",
            titre: "Valeurs théoriques et expérience",
            texte: "Dans une expérience réelle, les volumes mesurés peuvent s’écarter des valeurs théoriques, par exemple si une partie du gaz s’échappe ou reste dissoute dans la solution."
          }
        ]
      },

      {
        id: 6,
        titre: "Synthèse de l’eau et bilan",
        blocs: [
          {
            type: "definition",
            titre: "La transformation inverse",
            texte: "Le dihydrogène peut réagir avec le dioxygène pour former de l’eau. Cette transformation est appelée synthèse de l’eau.\n\nSon équation-bilan est :\n\n2 H₂ + O₂ → 2 H₂O.\n\nCette réaction libère de l’énergie. Un mélange de dihydrogène et de dioxygène peut être explosif : on ne le prépare et on ne l’enflamme jamais soi-même."
          },
          {
            type: "tableau",
            titre: "Comparer les deux transformations",
            entetes: ["Transformation", "Réactifs et produits", "Énergie"],
            lignes: [
              ["Électrolyse de l’eau", "L’eau donne H₂ et O₂", "Nécessite un apport d’énergie électrique"],
              ["Synthèse de l’eau", "H₂ et O₂ donnent de l’eau", "Libère de l’énergie"]
            ]
          },
          {
            type: "methode",
            titre: "Pour répondre à l’examen",
            texte: "1. Identifier la transformation demandée : électrolyse ou synthèse.\n2. Nommer les réactifs et les produits.\n3. Écrire l’équation équilibrée.\n4. Vérifier la conservation des atomes.\n5. Pour un calcul, lire les coefficients et préciser les unités.\n6. Pour les volumes de gaz, vérifier que la température et la pression sont les mêmes."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Inverser les gaz formés aux électrodes.\n• Écrire H au lieu de H₂ ou O au lieu de O₂.\n• Oublier d’équilibrer l’équation.\n• Affirmer que les deux volumes de gaz sont égaux.\n• Confondre électrolyse et synthèse de l’eau.\n• Oublier que le dihydrogène est inflammable."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définir une électrolyse et nommer les deux gaz produits lors de l’électrolyse de l’eau.",
        correction: "Une électrolyse est une transformation chimique provoquée par le passage d’un courant électrique dans un milieu adapté.\n\nL’électrolyse de l’eau produit du dihydrogène H₂ et du dioxygène O₂."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel gaz se forme à la cathode ? Quel gaz se forme à l’anode ?",
        correction: "Le dihydrogène H₂ se forme à la cathode, reliée à la borne négative.\n\nLe dioxygène O₂ se forme à l’anode, reliée à la borne positive."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écrire l’équation-bilan équilibrée de l’électrolyse de l’eau.",
        correction: "2 H₂O → 2 H₂ + O₂.\n\nIl y a 4 atomes d’hydrogène et 2 atomes d’oxygène de chaque côté."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décrire les tests qui permettent d’identifier le dihydrogène et le dioxygène.",
        correction: "Le dihydrogène peut produire une légère détonation lors d’un test adapté à la flamme.\n\nLe dioxygène peut rallumer une bûchette incandescente.\n\nCes tests sont réalisés uniquement par l’enseignant, avec les précautions adaptées."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On recueille 15 mL de dioxygène lors d’une électrolyse. Quel volume théorique de dihydrogène obtient-on, si les deux gaz sont mesurés à la même température et à la même pression ?",
        correction: "À la même température et à la même pression :\n\nV(H₂) = 2 × V(O₂).\n\nV(H₂) = 2 × 15 = 30 mL.\n\nLe volume théorique de dihydrogène est 30 mL."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On recueille théoriquement 80 mL de dihydrogène. Quel volume de dioxygène est produit dans les mêmes conditions de température et de pression ?",
        correction: "V(H₂) = 2 × V(O₂).\n\nDonc V(O₂) = V(H₂) / 2 = 80 / 2 = 40 mL.\n\nLe volume théorique de dioxygène est 40 mL."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L’électrolyse d’une certaine quantité d’eau forme 0,20 mol de dihydrogène. Calculer la quantité de dioxygène formée et la quantité d’eau consommée.",
        correction: "Équation : 2 H₂O → 2 H₂ + O₂.\n\nPour 2 mol de H₂ formées, il se forme 1 mol de O₂ et 2 mol de H₂O sont consommées.\n\nn(O₂) = 0,20 / 2 = 0,10 mol.\n\nn(H₂O) consommée = 0,20 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Écrire l’équation de la synthèse de l’eau. En quoi diffère-t-elle de l’électrolyse de l’eau ?",
        correction: "Synthèse : 2 H₂ + O₂ → 2 H₂O.\n\nDans la synthèse, le dihydrogène et le dioxygène réagissent pour former de l’eau et de l’énergie est libérée.\n\nDans l’électrolyse, de l’énergie électrique est fournie pour transformer de l’eau en dihydrogène et en dioxygène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une électrolyse consomme 3,6 g d’eau. Donnée : M(H₂O) = 18 g/mol. Calculer la quantité d’eau consommée, puis les quantités de H₂ et de O₂ formées.",
        correction: "n(H₂O) = m / M = 3,6 / 18 = 0,20 mol.\n\nÉquation : 2 H₂O → 2 H₂ + O₂.\n\nPour 2 mol d’eau consommées, on forme 2 mol de H₂ et 1 mol de O₂.\n\nDonc n(H₂) = 0,20 mol et n(O₂) = 0,10 mol."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. Lors d’une électrolyse de l’eau, on recueille deux gaz séparément. Dans les mêmes conditions de température et de pression, le volume du premier gaz est 60 mL et celui du second est 30 mL.\n\n1. Identifier chaque gaz en utilisant les proportions théoriques.\n2. Indiquer à quelle électrode chaque gaz se forme.\n3. Écrire l’équation-bilan et vérifier les atomes.\n4. Donner un test d’identification pour chaque gaz.",
        correction: "1. Le volume de dihydrogène est théoriquement deux fois celui du dioxygène. Le gaz de 60 mL est donc H₂ et celui de 30 mL est O₂, dans les conditions indiquées.\n\n2. H₂ se forme à la cathode, reliée à la borne négative. O₂ se forme à l’anode, reliée à la borne positive.\n\n3. 2 H₂O → 2 H₂ + O₂.\n\nHydrogène : 4 atomes de chaque côté. Oxygène : 2 atomes de chaque côté.\n\n4. H₂ peut produire une légère détonation lors d’un test adapté à la flamme. O₂ peut rallumer une bûchette incandescente. Ces tests sont réservés à l’enseignant."
      }
    ]
  }
]);
