// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 14 : Les seismes

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-seismes",
    titre: "Chapitre 14 : Les séismes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-seismes-definition",
        titre: "Qu'est-ce qu'un séisme ?",
        blocs: [
          {
            type: "texte",
            titre: "Quand le sol tremble",
            texte: "Parfois, le sol se met à trembler pendant quelques secondes ou plus. Ces secousses peuvent être faibles ou provoquer des dégâts : on parle de séisme."
          },
          {
            type: "definition",
            titre: "Un séisme",
            texte: "Un séisme, ou tremblement de terre, est une secousse du sol provoquée par une libération rapide d'énergie en profondeur."
          },
          {
            type: "remarque",
            titre: "Des séismes de tailles différentes",
            texte: "Certains séismes ne sont détectés que par des appareils. D'autres sont ressentis par la population et peuvent endommager des constructions."
          }
        ]
      },

      {
        id: "svt5-seismes-origine",
        titre: "L'origine d'un séisme",
        blocs: [
          {
            type: "texte",
            titre: "Des roches sous pression",
            texte: "En profondeur, les roches subissent des forces et se déforment lentement. Lorsque les contraintes deviennent trop importantes, elles peuvent rompre ou glisser brusquement le long d'une faille."
          },
          {
            type: "definition",
            titre: "Une faille",
            texte: "Une faille est une fracture des roches le long de laquelle des blocs rocheux peuvent se déplacer."
          },
          {
            type: "definition",
            titre: "Le foyer",
            texte: "Le foyer d'un séisme est le lieu en profondeur où commence la rupture des roches. Il est aussi appelé hypocentre."
          },
          {
            type: "definition",
            titre: "L'épicentre",
            texte: "L'épicentre est le point situé à la surface de la Terre, à la verticale du foyer."
          },
          {
            type: "schema",
            titre: "Foyer et épicentre",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='55' width='340' height='175' fill='#fef3c7'/><line x1='0' y1='55' x2='340' y2='55' stroke='#15803d' stroke-width='3'/><path d='M100 215 L215 66' stroke='#92400e' stroke-width='4'/><circle cx='170' cy='125' r='7' fill='#dc2626'/><circle cx='170' cy='55' r='6' fill='#2563eb'/><line x1='170' y1='61' x2='170' y2='118' stroke='#6b7280' stroke-width='2' stroke-dasharray='5 4'/><path d='M155 110 Q170 95 185 110' fill='none' stroke='#f97316' stroke-width='2'/><path d='M145 100 Q170 75 195 100' fill='none' stroke='#f97316' stroke-width='2'/><line x1='176' y1='55' x2='250' y2='30' stroke='#6b7280' stroke-width='1'/><text x='253' y='31' font-size='12' fill='#1e3a8a'>Épicentre</text><line x1='176' y1='125' x2='245' y2='125' stroke='#6b7280' stroke-width='1'/><text x='248' y='129' font-size='12' fill='#991b1b'>Foyer</text><line x1='120' y1='190' x2='48' y2='180' stroke='#6b7280' stroke-width='1'/><text x='8' y='177' font-size='12' fill='#78350f'>Faille</text><text x='12' y='45' font-size='11' fill='#166534'>Surface du sol</text><text x='170' y='220' font-size='10' fill='#6b7280' text-anchor='middle'>Coupe simplifiée, non à l'échelle</text></svg>",
            legende: "La rupture commence au foyer. L'épicentre se trouve à la surface, à la verticale du foyer."
          }
        ]
      },

      {
        id: "svt5-seismes-ondes",
        titre: "La propagation des secousses",
        blocs: [
          {
            type: "definition",
            titre: "Les ondes sismiques",
            texte: "Les ondes sismiques sont des vibrations qui se propagent à partir du foyer dans la Terre et peuvent atteindre la surface."
          },
          {
            type: "texte",
            titre: "Des vibrations dans toutes les directions",
            texte: "Lorsque les roches rompent ou glissent brusquement, l'énergie libérée se propage sous forme d'ondes sismiques. Ces ondes font vibrer le sol lorsqu'elles arrivent en surface."
          },
          {
            type: "exemple",
            titre: "Une comparaison",
            texte: "Lorsqu'on laisse tomber un caillou dans une mare, des rides s'éloignent du point d'impact. Les ondes sismiques se propagent elles aussi à partir d'une source, mais elles traversent les matériaux de la Terre."
          },
          {
            type: "remarque",
            titre: "Tous les lieux ne tremblent pas de la même façon",
            texte: "L'intensité des secousses ressenties dépend notamment de la distance au foyer, de la nature du sol et des caractéristiques du séisme."
          }
        ]
      },

      {
        id: "svt5-seismes-mesure",
        titre: "Mesurer et décrire un séisme",
        blocs: [
          {
            type: "definition",
            titre: "Le sismographe",
            texte: "Un sismographe est un appareil qui détecte et enregistre les mouvements du sol."
          },
          {
            type: "definition",
            titre: "Le sismogramme",
            texte: "Un sismogramme est l'enregistrement des vibrations du sol réalisé par un appareil de mesure."
          },
          {
            type: "tableau",
            titre: "Magnitude et intensité",
            entetes: ["Magnitude", "Intensité"],
            lignes: [
              [
                "Elle indique la taille du séisme à partir des ondes enregistrées.",
                "Elle décrit les effets et les secousses observés en un lieu."
              ],
              [
                "Un séisme a une magnitude déterminée.",
                "L'intensité peut varier d'un lieu à l'autre."
              ]
            ]
          },
          {
            type: "exemple",
            titre: "Un même séisme, des effets différents",
            texte: "Pour un même séisme, une personne peut ressentir une forte secousse dans une ville et une secousse plus faible dans une autre. L'intensité observée n'est donc pas forcément la même partout."
          }
        ]
      },

      {
        id: "svt5-seismes-consequences",
        titre: "Les conséquences possibles",
        blocs: [
          {
            type: "texte",
            titre: "À la surface",
            texte: "Un séisme peut fissurer des murs, endommager ou faire s'effondrer des bâtiments, couper des routes et provoquer des glissements de terrain."
          },
          {
            type: "texte",
            titre: "En mer",
            texte: "Certains séismes sous-marins peuvent déplacer brusquement le fond de la mer et provoquer un tsunami : une série de vagues qui peut être dangereuse sur les côtes."
          },
          {
            type: "remarque",
            titre: "Tous les séismes ne provoquent pas un tsunami",
            texte: "Un tsunami dépend notamment du déplacement du fond marin. Un séisme sous-marin n'en provoque donc pas nécessairement un."
          },
          {
            type: "definition",
            titre: "Le risque sismique",
            texte: "Le risque sismique dépend de la possibilité de secousses et de leurs effets sur les personnes, les bâtiments et les activités exposés."
          }
        ]
      },

      {
        id: "svt5-seismes-protection",
        titre: "Comment se protéger ?",
        blocs: [
          {
            type: "texte",
            titre: "Avant un séisme",
            texte: "Il est utile de connaître les consignes locales, de repérer des endroits où se protéger et de fixer les meubles lourds pour éviter leur chute."
          },
          {
            type: "methode",
            titre: "Pendant les secousses",
            texte: "À l'intérieur, baisse-toi, protège ta tête et ton cou, et abrite-toi si possible sous une table solide en t'y tenant. Éloigne-toi des fenêtres. Ne te précipite pas dehors pendant les secousses.\nÀ l'extérieur, éloigne-toi si possible des bâtiments, poteaux et autres objets qui peuvent tomber."
          },
          {
            type: "methode",
            titre: "Après les secousses",
            texte: "Reste attentif aux consignes des autorités et prépare-toi à d'éventuelles nouvelles secousses, appelées répliques. Si le bâtiment est endommagé, sors prudemment lorsque les secousses sont terminées, sans utiliser l'ascenseur."
          },
          {
            type: "remarque",
            titre: "Près de la mer",
            texte: "Après une forte ou longue secousse près de la côte, éloigne-toi rapidement du rivage vers un endroit élevé, dès que tu peux te déplacer en sécurité. Suis les consignes des autorités : un tsunami peut arriver sans attendre une alerte."
          }
        ]
      },

      {
        id: "svt5-seismes-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Un séisme est une secousse liée à une libération rapide d'énergie en profondeur.\n2. La rupture commence au foyer ; l'épicentre est à la surface, à sa verticale.\n3. Les ondes sismiques se propagent depuis le foyer.\n4. La magnitude indique la taille du séisme ; l'intensité décrit ses effets en un lieu.\n5. Pendant et après un séisme, il faut appliquer les consignes de sécurité."
          },
          {
            type: "methode",
            titre: "Pour ne pas confondre",
            texte: "Foyer : en profondeur, là où commence la rupture.\nÉpicentre : à la surface, à la verticale du foyer.\nSismographe : appareil.\nSismogramme : enregistrement."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous étudierons les plaques terrestres et leurs mouvements."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un séisme ?",
        correction: "C'est une secousse du sol provoquée par une libération rapide d'énergie en profondeur."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que le foyer d'un séisme ?",
        correction: "C'est le lieu en profondeur où commence la rupture des roches."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Où se trouve l'épicentre par rapport au foyer ?",
        correction: "Il se trouve à la surface de la Terre, à la verticale du foyer."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'une faille ?",
        correction: "C'est une fracture des roches le long de laquelle des blocs rocheux peuvent se déplacer."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Que sont les ondes sismiques ?",
        correction: "Ce sont des vibrations qui se propagent à partir du foyer dans la Terre et peuvent atteindre la surface."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle est la différence entre un sismographe et un sismogramme ?",
        correction: "Le sismographe est l'appareil qui détecte et enregistre les mouvements du sol. Le sismogramme est l'enregistrement obtenu."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique la différence entre magnitude et intensité.",
        correction: "La magnitude indique la taille du séisme à partir des ondes enregistrées. L'intensité décrit les effets et les secousses observés en un lieu ; elle peut varier d'un lieu à l'autre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le foyer se trouve à la surface de la Terre.\n2. Un même séisme peut être ressenti différemment selon les lieux.\n3. Tous les séismes sous-marins provoquent un tsunami.",
        correction: "1. Faux : le foyer se trouve en profondeur. L'épicentre est à la surface, à sa verticale.\n2. Vrai.\n3. Faux : un séisme sous-marin ne provoque pas nécessairement un tsunami."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite deux conséquences possibles d'un séisme.",
        correction: "Par exemple : des bâtiments peuvent être endommagés et des routes peuvent être coupées. Un séisme peut aussi provoquer des glissements de terrain."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Tu es à l'intérieur d'une salle de classe lorsque le sol se met à trembler. Quels gestes peux-tu faire pendant les secousses ?",
        correction: "Je me baisse, je protège ma tête et mon cou et, si possible, je m'abrite sous une table solide en m'y tenant. Je m'éloigne des fenêtres et je ne me précipite pas dehors pendant les secousses."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Après un séisme, un élève affirme : « L'épicentre est le lieu où la rupture a commencé en profondeur. » Corrige son explication.",
        correction: "Le lieu où la rupture commence en profondeur est le foyer. L'épicentre est le point situé à la surface, à la verticale du foyer."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pourquoi deux villages peuvent-ils ressentir différemment un même séisme ?",
        correction: "Ils peuvent être situés à des distances différentes du foyer et reposer sur des sols différents. L'intensité des secousses et les effets observés peuvent donc varier."
      }
    ]
  }
]);
