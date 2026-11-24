enregistrerChapitres("2nde", "svt", [
  {
    id: 4,
    titre: "Chapitre 4 : Les échanges d’eau et l’osmose",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. L’eau et les cellules",
        blocs: [
          {
            type: "introduction",
            titre: "Des échanges permanents",
            texte: "Les cellules contiennent de l’eau et vivent dans un milieu qui en contient également. De l’eau peut traverser leur membrane plasmique dans les deux sens. Selon les conditions, le bilan de ces échanges peut entraîner une entrée nette ou une sortie nette d’eau."
          },
          {
            type: "definition",
            titre: "Solvant, soluté et solution",
            texte: "Une solution est un mélange homogène. Le solvant est le liquide qui dissout une substance ; la substance dissoute est le soluté. Dans une solution aqueuse de sucre, l’eau est le solvant et le sucre est le soluté."
          },
          {
            type: "definition",
            titre: "Concentration",
            texte: "La concentration indique la quantité de soluté présente dans un volume donné de solution. Pour comparer des effets osmotiques, il faut tenir compte des particules dissoutes qui ne traversent pas librement la membrane considérée."
          },
          {
            type: "remarque",
            titre: "Entrée nette ne signifie pas sens unique",
            texte: "Une entrée nette d’eau signifie que, pendant la période considérée, la quantité d’eau entrant est supérieure à la quantité sortant. Des molécules d’eau peuvent néanmoins traverser la membrane dans les deux sens."
          }
        ]
      },

      {
        id: 2,
        titre: "2. Comprendre l’osmose",
        blocs: [
          {
            type: "definition",
            titre: "Osmose",
            texte: "L’osmose est le passage net de l’eau à travers une membrane perméable à l’eau, mais peu ou pas perméable à certains solutés. En l’absence d’autres effets importants, l’eau passe globalement du milieu le moins concentré vers le milieu le plus concentré en particules de soluté ne traversant pas librement la membrane."
          },
          {
            type: "exemple",
            titre: "Deux solutions séparées",
            texte: "Deux compartiments sont séparés par une membrane qui laisse passer l’eau, mais pas le sucre. Le compartiment A contient moins de sucre dissous par litre que le compartiment B. Au départ, si les pressions sont comparables, le passage net d’eau se fait de A vers B."
          },
          {
            type: "regle",
            titre: "Ce qui traverse",
            texte: "Dans l’exemple précédent, c’est l’eau qui traverse la membrane. Le sucre ne traverse pas la membrane choisie. Il ne faut donc pas dire que le sucre passe de B vers A dans cette situation."
          },
          {
            type: "remarque",
            titre: "Conditions à préciser",
            texte: "Le sens du bilan dépend des solutés qui traversent ou non la membrane, mais aussi des différences de pression. La règle du milieu le moins concentré vers le plus concentré est une simplification utile lorsque les autres effets sont négligeables."
          },
          {
            type: "remarque",
            titre: "Équilibre",
            texte: "À l’équilibre, le passage net d’eau est nul : des molécules peuvent encore traverser dans les deux sens, mais les passages se compensent."
          }
        ]
      },

      {
        id: 3,
        titre: "3. L’expérience de Dutrochet",
        blocs: [
          {
            type: "introduction",
            titre: "Un modèle historique",
            texte: "L’expérience de Dutrochet illustre le passage d’eau à travers une membrane séparant deux milieux de concentrations différentes. Elle permet de comprendre le principe de l’osmose sans représenter exactement tous les mécanismes d’une cellule."
          },
          {
            type: "exemple",
            titre: "Montage simplifié",
            texte: "Un récipient fermé à sa base par une membrane perméable à l’eau mais non au sucre contient une solution sucrée. Il est prolongé par un tube étroit et placé dans de l’eau moins concentrée en sucre. L’eau entre globalement dans le récipient et le niveau du liquide monte dans le tube."
          },
          {
            type: "methode",
            titre: "Interpréter les résultats",
            texte: "1. Identifier les deux milieux et la membrane. 2. Vérifier ce qui peut traverser la membrane. 3. Comparer les concentrations en soluté non traversant. 4. Relier le passage net d’eau à la montée du niveau dans le tube. 5. Tenir compte du fait que la montée du liquide crée une différence de pression qui s’oppose progressivement à l’entrée d’eau."
          },
          {
            type: "remarque",
            titre: "Un modèle, pas une cellule",
            texte: "Le montage met en évidence un passage d’eau et une différence de pression. Il ne reproduit pas toutes les structures ni toutes les fonctions d’une cellule vivante."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Milieux hypo-, hyper- et isotoniques",
        blocs: [
          {
            type: "introduction",
            titre: "Comparer le milieu à la cellule",
            texte: "Les termes suivants décrivent l’effet d’un milieu sur le volume d’une cellule. Ils tiennent compte des solutés qui ne traversent pas librement sa membrane pendant la durée considérée."
          },
          {
            type: "tableau",
            titre: "Effet sur une cellule",
            entetes: ["Milieu extérieur", "Effet attendu", "Bilan d’eau"],
            lignes: [
              ["Hypotonique", "Tend à faire augmenter le volume de la cellule", "Entrée nette d’eau"],
              ["Hypertonique", "Tend à faire diminuer le volume de la cellule", "Sortie nette d’eau"],
              ["Isotonique", "Ne provoque pas de variation nette durable du volume", "Pas de bilan net d’eau à l’équilibre"]
            ]
          },
          {
            type: "exemple",
            titre: "Une comparaison relative",
            texte: "Si l’intérieur d’une cellule contient davantage de particules non traversantes que le milieu extérieur, et si les autres effets sont négligeables, le milieu extérieur est hypotonique par rapport à la cellule : une entrée nette d’eau est attendue."
          },
          {
            type: "remarque",
            titre: "Attention au point de vue",
            texte: "On dit qu’un milieu est hypotonique ou hypertonique par rapport à un autre. Il faut préciser la comparaison et les conditions : tous les solutés ne traversent pas une membrane de la même façon."
          }
        ]
      },

      {
        id: 5,
        titre: "5. Cellules animales et végétales",
        blocs: [
          {
            type: "introduction",
            titre: "Des réactions différentes",
            texte: "Une cellule animale et une cellule végétale peuvent toutes deux échanger de l’eau par osmose. La présence d’une paroi autour de la cellule végétale modifie toutefois sa réaction."
          },
          {
            type: "tableau",
            titre: "Réponses simplifiées",
            entetes: ["Milieu extérieur", "Cellule animale", "Cellule végétale"],
            lignes: [
              ["Hypotonique", "Elle gonfle ; certaines cellules peuvent éclater si l’entrée d’eau est importante.", "L’eau entre ; la cellule devient turgescente. La paroi résiste à l’expansion."],
              ["Hypertonique", "Elle perd de l’eau et se rétracte.", "Elle perd de l’eau ; le contenu cellulaire peut se rétracter et la membrane se décoller localement de la paroi."],
              ["Isotonique", "Son volume reste globalement stable à l’équilibre.", "Il n’y a pas de bilan net d’eau à l’équilibre ; la cellule n’est pas nécessairement turgescente."]
            ]
          },
          {
            type: "definition",
            titre: "Turgescence",
            texte: "La turgescence est l’état d’une cellule végétale dont le contenu, riche en eau, exerce une pression contre la paroi. Cette pression contribue à la rigidité des tissus végétaux."
          },
          {
            type: "remarque",
            titre: "La paroi ne remplace pas la membrane",
            texte: "La paroi végétale entoure la membrane plasmique. Elle apporte une résistance mécanique, tandis que la membrane participe au contrôle des échanges."
          }
        ]
      },

      {
        id: 6,
        titre: "6. Plasmolyse et déplasmolyse",
        blocs: [
          {
            type: "definition",
            titre: "Plasmolyse",
            texte: "La plasmolyse est la rétraction du contenu d’une cellule végétale après une sortie importante d’eau. La membrane plasmique peut alors se décoller localement de la paroi, qui conserve généralement sa forme."
          },
          {
            type: "exemple",
            titre: "Cellule dans une solution concentrée",
            texte: "Si l’on place une cellule végétale dans un milieu hypertonique, l’eau sort globalement de la cellule. La vacuole diminue de volume et le contenu cellulaire se rétracte : une plasmolyse peut apparaître."
          },
          {
            type: "definition",
            titre: "Déplasmolyse",
            texte: "La déplasmolyse est le retour d’eau dans une cellule plasmolysée, accompagné d’une augmentation du volume de son contenu. La membrane peut alors se rapprocher de nouveau de la paroi."
          },
          {
            type: "exemple",
            titre: "Retour dans un milieu moins concentré",
            texte: "Si une cellule végétale plasmolysée et encore viable est placée dans un milieu suffisamment moins concentré, l’eau peut entrer et provoquer une déplasmolyse."
          },
          {
            type: "remarque",
            titre: "Déplasmolyse spontanée",
            texte: "Dans certaines conditions, une cellule peut se déplasmolyser sans changement apparent du milieu extérieur, par exemple si des solutés du milieu pénètrent progressivement dans la cellule et modifient la différence osmotique. Ce phénomène dépend du soluté, de la membrane et de l’état de la cellule : il n’est pas systématique."
          },
          {
            type: "regle",
            titre: "Sens des échanges",
            texte: "Plasmolyse : sortie nette d’eau et rétraction du contenu cellulaire. Déplasmolyse : entrée nette d’eau et augmentation du volume du contenu cellulaire."
          }
        ]
      },

      {
        id: 7,
        titre: "7. La pression osmotique",
        blocs: [
          {
            type: "definition",
            titre: "Pression osmotique",
            texte: "La pression osmotique d’une solution correspond à la différence de pression qu’il faudrait appliquer, dans un dispositif adapté, pour empêcher le passage net d’eau vers cette solution à travers une membrane idéale laissant passer l’eau mais pas le soluté."
          },
          {
            type: "regle",
            titre: "Formule pour une solution diluée idéale",
            texte: "Pour une solution diluée idéale, on utilise π = i × C × R × T. π est la pression osmotique en pascals ; i représente le nombre effectif de particules formées par unité de soluté ; C est la concentration molaire en mol/m³ ; R = 8,31 J/(mol·K) ; T est la température absolue en kelvins."
          },
          {
            type: "remarque",
            titre: "Cas du sucre et conversion",
            texte: "Pour un soluté comme le saccharose, qui ne se dissocie pas en solution, on prend i = 1 dans ce modèle. Attention : 1 mol/L = 1 000 mol/m³. La température en kelvins se calcule approximativement par T = température en °C + 273."
          },
          {
            type: "exemple",
            titre: "Calcul",
            texte: "Une solution idéale de saccharose a une concentration de 0,01 mol/L à 27 °C. On prend i = 1. Conversion : C = 10 mol/m³ et T = 300 K. Alors π = 1 × 10 × 8,31 × 300 = 24 930 Pa, soit environ 2,49 × 10⁴ Pa."
          },
          {
            type: "remarque",
            titre: "Limites du modèle",
            texte: "Cette formule est une approximation pour les solutions diluées idéales. Dans une cellule réelle, plusieurs solutés, leur capacité à traverser la membrane et d’autres pressions influencent les échanges d’eau. La pression osmotique calculée ne suffit pas à décrire toute la situation."
          }
        ]
      },

      {
        id: 8,
        titre: "8. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Bilan",
            texte: "L’osmose est un passage net d’eau à travers une membrane sélective. Dans des conditions simples, l’eau passe globalement vers le milieu le plus concentré en particules qui ne traversent pas librement. Un milieu hypertonique provoque une sortie nette d’eau ; un milieu hypotonique provoque une entrée nette d’eau."
          },
          {
            type: "rappel",
            titre: "Cellule végétale",
            texte: "Une perte d’eau importante peut provoquer une plasmolyse. Une entrée d’eau dans une cellule plasmolysée et viable peut provoquer une déplasmolyse. La turgescence correspond à une pression du contenu cellulaire contre la paroi."
          },
          {
            type: "rappel",
            titre: "Méthode",
            texte: "Pour résoudre un exercice : repérer les deux milieux, identifier les substances qui traversent la membrane, comparer les concentrations utiles, déterminer le bilan d’eau et prévoir la conséquence sur la cellule."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis l’osmose. Dans un modèle simple où seule l’eau traverse la membrane, vers quel milieu se fait le passage net d’eau : le moins concentré ou le plus concentré en soluté non traversant ?",
        correction: "L’osmose est le passage net d’eau à travers une membrane perméable à l’eau mais peu ou pas perméable à certains solutés. Dans les conditions simples indiquées, l’eau passe globalement vers le milieu le plus concentré en soluté non traversant."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Associe chaque phénomène à la description correspondante : 1. plasmolyse ; 2. déplasmolyse. Descriptions : a. entrée nette d’eau dans une cellule végétale plasmolysée ; b. rétraction du contenu d’une cellule végétale après une sortie importante d’eau.",
        correction: "1-b : la plasmolyse correspond à une rétraction du contenu cellulaire après une perte d’eau. 2-a : la déplasmolyse correspond à un retour d’eau dans la cellule plasmolysée."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux compartiments A et B sont séparés par une membrane qui laisse passer l’eau mais pas le sucre. A contient moins de sucre par litre que B. Les pressions initiales sont comparables. Indique le sens initial du passage net d’eau et explique si le sucre traverse la membrane.",
        correction: "L’eau passe globalement de A vers B, le milieu le plus concentré en sucre non traversant. Le sucre ne traverse pas : la membrane décrite ne le laisse pas passer."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une cellule végétale viable est placée dans un milieu hypertonique. Elle perd beaucoup d’eau et son contenu se rétracte. Nomme le phénomène et explique ce qui peut arriver à la membrane par rapport à la paroi.",
        correction: "Le phénomène est la plasmolyse. L’eau sort globalement de la cellule et son contenu se rétracte ; la membrane plasmique peut se décoller localement de la paroi."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une cellule végétale viable est d’abord placée dans une solution hypertonique : son contenu se rétracte et sa membrane se décolle localement de sa paroi. Elle est ensuite placée dans un milieu suffisamment moins concentré et reprend de l’eau. 1. Nomme les deux phénomènes successifs. 2. Indique le sens du bilan d’eau à chaque étape. 3. Précise le rôle de la paroi dans cette observation.",
        correction: "1. La première étape est une plasmolyse ; la seconde est une déplasmolyse. 2. D’abord, l’eau sort globalement de la cellule ; ensuite, elle entre globalement. 3. La paroi, située à l’extérieur de la membrane, résiste aux variations de forme et conserve généralement son contour pendant la plasmolyse. La membrane peut s’en décoller puis s’en rapprocher."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un modèle de l’expérience de Dutrochet, une solution sucrée est séparée d’eau moins concentrée par une membrane qui laisse passer l’eau mais pas le sucre. La solution sucrée est reliée à un tube vertical. On observe une montée du liquide dans le tube. 1. Explique cette montée. 2. Quelle substance traverse la membrane ? 3. Pourquoi la montée ne se poursuit-elle pas nécessairement indéfiniment ?",
        correction: "1. L’eau entre globalement dans la solution sucrée par osmose, ce qui augmente le volume de liquide et fait monter son niveau dans le tube. 2. Dans le modèle donné, l’eau traverse la membrane, pas le sucre. 3. La colonne de liquide crée une différence de pression qui s’oppose progressivement à l’entrée d’eau ; un équilibre peut être atteint."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution idéale diluée de saccharose a une concentration C = 0,02 mol/L et une température de 27 °C. On donne π = i × C × R × T, avec i = 1, R = 8,31 J/(mol·K), C exprimée en mol/m³ et T en K. On rappelle que 1 mol/L = 1 000 mol/m³ et T = température en °C + 273. Calcule la pression osmotique π en pascals.",
        correction: "Conversion : C = 0,02 × 1 000 = 20 mol/m³ et T = 27 + 273 = 300 K. Donc π = 1 × 20 × 8,31 × 300 = 49 860 Pa, soit environ 4,99 × 10⁴ Pa."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une cellule animale et une cellule végétale sont placées séparément dans un même milieu hypotonique. Pour cet exercice, on suppose que l’eau peut traverser leur membrane, que les solutés responsables ne la traversent pas et que les autres effets sont négligeables. 1. Indique le sens du bilan d’eau. 2. Prévois l’effet sur la cellule animale. 3. Prévois l’effet sur la cellule végétale et nomme son état possible. 4. Explique pourquoi les deux réponses peuvent être différentes.",
        correction: "1. L’eau entre globalement dans les deux cellules. 2. La cellule animale gonfle ; si l’entrée d’eau est importante, certaines cellules animales peuvent éclater. 3. La cellule végétale peut devenir turgescente : son contenu appuie sur la paroi. 4. La cellule végétale possède une paroi qui résiste à l’expansion, contrairement à la cellule animale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une cellule végétale viable est placée dans une solution qui provoque d’abord une plasmolyse. Sans changement apparent du milieu extérieur, on observe ensuite une déplasmolyse. On suppose que le soluté de la solution peut pénétrer lentement dans la cellule. 1. Quel était le bilan initial d’eau ? 2. Propose une explication au retour d’eau. 3. Pourquoi ne peut-on pas affirmer que toutes les cellules plasmolysées se déplasmolyseront spontanément ? 4. Un élève affirme que la paroi et la membrane sont la même structure. Corrige-le.",
        correction: "1. Initialement, l’eau sortait globalement de la cellule, provoquant la plasmolyse. 2. La pénétration progressive du soluté peut modifier la différence osmotique et favoriser ensuite une entrée nette d’eau : c’est une explication possible de la déplasmolyse spontanée. 3. Le résultat dépend notamment du soluté, de sa capacité à traverser la membrane et de la viabilité de la cellule. 4. La membrane plasmique délimite le contenu cellulaire et participe aux échanges ; la paroi est située à l’extérieur et apporte notamment un soutien mécanique."
      }
    ]
  }
]);
