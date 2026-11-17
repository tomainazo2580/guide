// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 16 : La structure interne de la Terre

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-structure-terre",
    titre: "Chapitre 16 : La structure interne de la Terre",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-terre-interieur",
        titre: "Que trouve-t-on sous nos pieds ?",
        blocs: [
          {
            type: "texte",
            titre: "Un intérieur organisé",
            texte: "Lorsque nous marchons sur le sol, nous ne voyons que la surface de la Terre. En dessous se trouvent des couches de matériaux différentes, jusqu'au centre de la planète."
          },
          {
            type: "regle",
            titre: "Les grandes parties",
            texte: "De la surface vers le centre, on distingue :\n1. la croûte terrestre ;\n2. le manteau ;\n3. le noyau, composé d'une partie externe et d'une partie interne."
          },
          {
            type: "remarque",
            titre: "Une représentation simplifiée",
            texte: "Les limites entre les grandes parties ne sont pas toutes visibles comme les couches d'un gâteau. Les scientifiques les étudient à l'aide de plusieurs indices."
          }
        ]
      },

      {
        id: "svt5-terre-croute",
        titre: "La croûte terrestre",
        blocs: [
          {
            type: "definition",
            titre: "La croûte",
            texte: "La croûte terrestre est la couche rocheuse la plus externe de la Terre. Elle est solide."
          },
          {
            type: "tableau",
            titre: "Deux grands types de croûte",
            entetes: ["Type", "Où ?", "Caractéristique"],
            lignes: [
              [
                "Croûte continentale",
                "Elle forme les continents et s'étend aussi sous certaines zones marines proches des côtes.",
                "Elle est généralement plus épaisse."
              ],
              [
                "Croûte océanique",
                "Elle se trouve sous une grande partie des océans.",
                "Elle est généralement plus mince."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Croûte et plaque",
            texte: "Une plaque terrestre ne se limite pas à la croûte. Elle comprend la croûte et une partie rigide du manteau supérieur."
          }
        ]
      },

      {
        id: "svt5-terre-manteau",
        titre: "Le manteau",
        blocs: [
          {
            type: "definition",
            titre: "Le manteau",
            texte: "Le manteau est la couche située sous la croûte et au-dessus du noyau. Il représente la plus grande partie du volume de la Terre."
          },
          {
            type: "texte",
            titre: "Des roches très chaudes",
            texte: "Le manteau est constitué de roches très chaudes, principalement solides. Sur de très longues durées, certaines de ces roches peuvent se déformer lentement."
          },
          {
            type: "remarque",
            titre: "Le manteau n'est pas un océan de lave",
            texte: "Même si les roches du manteau sont très chaudes, elles sont principalement solides. Dans certaines zones, une partie des roches peut fondre et produire du magma."
          }
        ]
      },

      {
        id: "svt5-terre-noyau",
        titre: "Le noyau",
        blocs: [
          {
            type: "definition",
            titre: "Le noyau",
            texte: "Le noyau est la partie centrale de la Terre. Il est constitué principalement de métaux, notamment de fer et de nickel."
          },
          {
            type: "tableau",
            titre: "Deux parties",
            entetes: ["Partie", "État"],
            lignes: [
              [
                "Noyau externe",
                "Il est liquide."
              ],
              [
                "Noyau interne",
                "Il est solide, malgré sa température très élevée."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Pourquoi le noyau interne est-il solide ?",
            texte: "Au centre de la Terre, la pression est très forte. Elle contribue à maintenir le noyau interne à l'état solide malgré sa température élevée."
          }
        ]
      },

      {
        id: "svt5-terre-schema",
        titre: "La Terre en coupe",
        blocs: [
          {
            type: "schema",
            titre: "Les grandes parties de la Terre",
            svg: "<svg viewBox='0 0 340 280' xmlns='http://www.w3.org/2000/svg'><circle cx='132' cy='132' r='110' fill='#fb923c' stroke='#475569' stroke-width='5'/><circle cx='132' cy='132' r='65' fill='#ef4444' stroke='#b91c1c' stroke-width='2'/><circle cx='132' cy='132' r='32' fill='#facc15' stroke='#a16207' stroke-width='2'/><line x1='208' y1='53' x2='251' y2='35' stroke='#475569' stroke-width='1'/><text x='254' y='38' font-size='11' fill='#334155'>Croûte</text><line x1='210' y1='94' x2='251' y2='83' stroke='#9a3412' stroke-width='1'/><text x='254' y='87' font-size='11' fill='#9a3412'>Manteau</text><line x1='190' y1='132' x2='251' y2='132' stroke='#991b1b' stroke-width='1'/><text x='254' y='130' font-size='11' fill='#991b1b'>Noyau</text><text x='254' y='143' font-size='11' fill='#991b1b'>externe</text><line x1='158' y1='158' x2='251' y2='177' stroke='#a16207' stroke-width='1'/><text x='254' y='175' font-size='11' fill='#854d0e'>Noyau</text><text x='254' y='188' font-size='11' fill='#854d0e'>interne</text><text x='170' y='260' font-size='11' fill='#6b7280' text-anchor='middle'>Coupe simplifiée, épaisseurs non à l'échelle</text></svg>",
            legende: "De l'extérieur vers le centre : croûte, manteau, noyau externe puis noyau interne. La croûte est beaucoup plus mince que sur ce schéma."
          },
          {
            type: "methode",
            titre: "Comment lire la coupe ?",
            texte: "Pars du bord extérieur du cercle et avance vers son centre. Nomme les parties dans l'ordre : croûte, manteau, noyau externe, noyau interne."
          }
        ]
      },

      {
        id: "svt5-terre-ondes",
        titre: "Comment connaît-on l'intérieur de la Terre ?",
        blocs: [
          {
            type: "texte",
            titre: "Les ondes sismiques",
            texte: "Les scientifiques ne peuvent pas creuser jusqu'au centre de la Terre. Ils utilisent notamment les ondes produites par les séismes.\nCes ondes traversent la Terre et changent de comportement selon les matériaux rencontrés."
          },
          {
            type: "tableau",
            titre: "Deux types d'ondes",
            entetes: ["Type", "Propagation"],
            lignes: [
              [
                "Ondes P",
                "Elles peuvent se propager dans les solides et dans les liquides."
              ],
              [
                "Ondes S",
                "Elles se propagent dans les solides, mais pas dans les liquides."
              ]
            ]
          },
          {
            type: "texte",
            titre: "Un indice sur le noyau",
            texte: "Les ondes S ne traversent pas le noyau externe. Cela fournit un indice important indiquant que cette partie du noyau est liquide."
          },
          {
            type: "remarque",
            titre: "Un modèle construit avec des indices",
            texte: "En étudiant les trajets et les vitesses des ondes sismiques, ainsi que d'autres indices, les scientifiques construisent et améliorent leurs modèles de l'intérieur de la Terre."
          }
        ]
      },

      {
        id: "svt5-terre-plaques",
        titre: "Le lien avec les plaques terrestres",
        blocs: [
          {
            type: "definition",
            titre: "La lithosphère",
            texte: "La lithosphère est l'enveloppe externe rigide de la Terre. Elle comprend la croûte et la partie la plus superficielle rigide du manteau."
          },
          {
            type: "texte",
            titre: "Des plaques en mouvement",
            texte: "La lithosphère est découpée en plaques terrestres. Sous celles-ci se trouve une zone du manteau où les roches peuvent se déformer lentement sur de longues durées. Les plaques se déplacent les unes par rapport aux autres."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Cette zone du manteau n'est pas un grand océan de magma liquide. Ses roches restent principalement solides, même si elles peuvent se déformer lentement."
          }
        ]
      },

      {
        id: "svt5-terre-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. De la surface vers le centre : croûte, manteau, noyau externe et noyau interne.\n2. Le manteau est constitué de roches très chaudes, principalement solides.\n3. Le noyau externe est liquide ; le noyau interne est solide.\n4. Les ondes sismiques aident à étudier l'intérieur de la Terre.\n5. Les plaques sont des morceaux de lithosphère."
          },
          {
            type: "methode",
            titre: "Pour apprendre l'ordre",
            texte: "Pars de la surface et récite : croûte → manteau → noyau externe → noyau interne.\nRetiens ensuite les états : manteau principalement solide, noyau externe liquide, noyau interne solide."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la couche rocheuse la plus externe de la Terre ?",
        correction: "C'est la croûte terrestre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle couche se trouve entre la croûte et le noyau ?",
        correction: "C'est le manteau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle partie du noyau est liquide ?",
        correction: "Le noyau externe est liquide."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Remets dans l'ordre, de la surface vers le centre : noyau interne, manteau, croûte, noyau externe.",
        correction: "Croûte → manteau → noyau externe → noyau interne."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le manteau est-il un grand océan de lave ?",
        correction: "Non. Il est constitué de roches très chaudes, mais principalement solides. Certaines de ces roches peuvent se déformer lentement."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "De quoi est constituée une plaque terrestre ?",
        correction: "Une plaque est une portion de lithosphère. Elle comprend la croûte et une partie rigide du manteau supérieur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle différence existe-t-il entre les ondes P et les ondes S ?",
        correction: "Les ondes P peuvent se propager dans les solides et dans les liquides. Les ondes S se propagent dans les solides, mais pas dans les liquides."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le noyau externe est liquide.\n2. Les ondes S se propagent dans les liquides.\n3. Une plaque terrestre comprend seulement la croûte.",
        correction: "1. Vrai.\n2. Faux : les ondes S se propagent dans les solides, mais pas dans les liquides.\n3. Faux : une plaque comprend la croûte et une partie rigide du manteau supérieur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi les scientifiques utilisent-ils les ondes sismiques pour étudier l'intérieur de la Terre ?",
        correction: "Ils ne peuvent pas creuser jusqu'au centre de la Terre. Les ondes sismiques traversent la Terre et changent de comportement selon les matériaux rencontrés : elles fournissent donc des indices sur les couches internes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Les ondes S ne traversent pas le noyau externe. Quel indice cela donne-t-il sur son état ? Explique.",
        correction: "Les ondes S ne se propagent pas dans les liquides. Le fait qu'elles ne traversent pas le noyau externe fournit donc un indice indiquant que celui-ci est liquide."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une élève affirme : « Les plaques terrestres flottent sur un immense océan de lave. » Corrige sa phrase.",
        correction: "Les plaques sont des morceaux rigides de lithosphère. Sous elles se trouve une zone du manteau dont les roches sont principalement solides, mais peuvent se déformer lentement sur de longues durées. Il ne s'agit pas d'un immense océan de lave."
      }
    ]
  }
]);
