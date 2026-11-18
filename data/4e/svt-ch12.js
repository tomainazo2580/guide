// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 12 : Le cycle des roches

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-cycle-roches",
    titre: "Chapitre 12 : Le cycle des roches",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-cycle-definition",
        titre: "Les roches se transforment au cours du temps",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel",
            texte: "Nous avons étudié trois grandes familles de roches : les roches magmatiques, les roches sédimentaires et les roches métamorphiques. Elles se distinguent notamment par leur mode de formation."
          },
          {
            type: "definition",
            titre: "Le cycle des roches",
            texte: "Le cycle des roches décrit les transformations possibles entre les roches, les sédiments et les matières fondues. Ces transformations se produisent généralement sur de très longues durées."
          },
          {
            type: "remarque",
            titre: "Pas un trajet unique",
            texte: "Le mot « cycle » ne signifie pas qu'une roche doit suivre toutes les étapes dans un ordre imposé. Selon les conditions qu'elle rencontre, elle peut suivre différents chemins."
          }
        ]
      },
      {
        id: "svt4-cycle-magma",
        titre: "Du magma aux roches magmatiques",
        blocs: [
          {
            type: "texte",
            titre: "Le refroidissement",
            texte: "Un magma qui refroidit et se solidifie peut former une roche magmatique. Si le refroidissement est lent en profondeur, une roche comme le granite peut se former."
          },
          {
            type: "texte",
            titre: "À la surface",
            texte: "Lorsqu'une lave refroidit rapidement en surface ou près de la surface, elle peut former une roche volcanique comme le basalte."
          },
          {
            type: "regle",
            titre: "À retenir",
            texte: "Magma ou lave → refroidissement et solidification → roche magmatique."
          }
        ]
      },
      {
        id: "svt4-cycle-sediments",
        titre: "Des roches aux sédiments",
        blocs: [
          {
            type: "texte",
            titre: "Altération, érosion et dépôt",
            texte: "Une roche exposée à la surface peut être altérée et fragmentée. Des matériaux sont ensuite enlevés par l'érosion, transportés par l'eau, le vent ou la glace, puis déposés."
          },
          {
            type: "texte",
            titre: "La formation d'une roche sédimentaire",
            texte: "Des sédiments peuvent s'accumuler et être enfouis. Dans de nombreux cas, leur compaction et leur cimentation contribuent à former une roche sédimentaire."
          },
          {
            type: "exemple",
            titre: "Du granite au grès : un trajet possible",
            texte: "Un granite exposé en surface peut être altéré. Certains fragments et grains sont transportés puis déposés. Des grains de sable accumulés et cimentés peuvent former un grès."
          },
          {
            type: "remarque",
            titre: "D'autres origines",
            texte: "Les sédiments ont des origines variées : certains proviennent aussi de restes d'êtres vivants ou de substances dissoutes dans l'eau."
          }
        ]
      },
      {
        id: "svt4-cycle-metamorphisme",
        titre: "La transformation en profondeur",
        blocs: [
          {
            type: "texte",
            titre: "Le métamorphisme",
            texte: "Une roche enfouie peut être soumise à de nouvelles conditions de température et de pression. Elle peut alors se transformer, généralement à l'état solide : c'est le métamorphisme."
          },
          {
            type: "exemple",
            titre: "Un exemple",
            texte: "Un granite peut se transformer en gneiss sous l'effet du métamorphisme. La transformation en gneiss ne nécessite pas obligatoirement la fusion de la roche."
          },
          {
            type: "texte",
            titre: "La fusion",
            texte: "Dans certaines conditions, une roche peut fondre partiellement ou totalement. La matière fondue produite peut contribuer à former un magma. Si ce magma refroidit et se solidifie, une nouvelle roche magmatique peut se former."
          },
          {
            type: "remarque",
            titre: "Deux transformations différentes",
            texte: "Le métamorphisme transforme généralement la roche à l'état solide. La fusion, elle, produit de la matière fondue. Il ne faut pas confondre ces deux phénomènes."
          }
        ]
      },
      {
        id: "svt4-cycle-schema",
        titre: "Lire un exemple de cycle",
        blocs: [
          {
            type: "schema",
            titre: "Un trajet possible dans le cycle des roches",
            svg: "<svg viewBox='0 0 360 470' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='8' width='220' height='38' rx='8' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='180' y='32' text-anchor='middle' font-size='14' fill='#991b1b'>Magma</text><line x1='180' y1='46' x2='180' y2='78' stroke='#374151' stroke-width='2'/><polygon points='175,74 180,82 185,74' fill='#374151'/><text x='185' y='65' font-size='10' fill='#374151'>Refroidissement</text><rect x='70' y='84' width='220' height='38' rx='8' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='180' y='108' text-anchor='middle' font-size='14' fill='#92400e'>Roche magmatique</text><line x1='180' y1='122' x2='180' y2='168' stroke='#374151' stroke-width='2'/><polygon points='175,164 180,172 185,164' fill='#374151'/><text x='185' y='139' font-size='10' fill='#374151'>Altération, érosion,</text><text x='185' y='152' font-size='10' fill='#374151'>transport et dépôt</text><rect x='70' y='174' width='220' height='38' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='180' y='198' text-anchor='middle' font-size='14' fill='#075985'>Sédiments</text><line x1='180' y1='212' x2='180' y2='258' stroke='#374151' stroke-width='2'/><polygon points='175,254 180,262 185,254' fill='#374151'/><text x='185' y='229' font-size='10' fill='#374151'>Compaction et</text><text x='185' y='242' font-size='10' fill='#374151'>cimentation</text><rect x='70' y='264' width='220' height='38' rx='8' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='180' y='288' text-anchor='middle' font-size='14' fill='#92400e'>Roche sédimentaire</text><line x1='180' y1='302' x2='180' y2='348' stroke='#374151' stroke-width='2'/><polygon points='175,344 180,352 185,344' fill='#374151'/><text x='185' y='329' font-size='10' fill='#374151'>Métamorphisme</text><rect x='70' y='354' width='220' height='38' rx='8' fill='#ede9fe' stroke='#7c3aed' stroke-width='2'/><text x='180' y='378' text-anchor='middle' font-size='14' fill='#5b21b6'>Roche métamorphique</text><path d='M70 373 L32 373 L32 27 L64 27' fill='none' stroke='#b91c1c' stroke-width='2'/><polygon points='60,22 68,27 60,32' fill='#b91c1c'/><text x='35' y='410' font-size='11' fill='#991b1b'>Retour possible vers du magma par fusion</text><text x='180' y='445' text-anchor='middle' font-size='10' fill='#4b5563'>Un trajet possible parmi d'autres</text></svg>",
            legende: "Ce schéma montre un trajet possible. Une roche magmatique peut aussi devenir métamorphique directement ; différentes roches peuvent être altérées ou subir une fusion."
          },
          {
            type: "methode",
            titre: "Suivre les flèches",
            texte: "Pour lire le schéma :\n1. Repère la matière ou la roche de départ.\n2. Suis une flèche dans son sens.\n3. Lis le nom de la transformation.\n4. Identifie la matière ou la roche obtenue."
          },
          {
            type: "exemple",
            titre: "Un autre chemin",
            texte: "Granite → métamorphisme → gneiss. Ce chemin ne passe pas obligatoirement par des sédiments."
          }
        ]
      },
      {
        id: "svt4-cycle-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan",
            texte: "• Le refroidissement d'un magma ou d'une lave peut former une roche magmatique.\n• L'altération et l'érosion peuvent produire des matériaux qui sont transportés puis déposés.\n• Certains sédiments accumulés, compactés et cimentés forment une roche sédimentaire.\n• Le métamorphisme transforme une roche préexistante, généralement à l'état solide.\n• Une fusion peut produire de la matière fondue qui contribue à former un magma.\n• Le cycle des roches comporte plusieurs chemins possibles."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que le cycle des roches ?",
        correction: "Le cycle des roches décrit les transformations possibles entre les roches, les sédiments et les matières fondues au cours du temps."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle transformation permet à un magma de former une roche magmatique ?",
        correction: "Le magma refroidit et se solidifie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux agents capables de transporter des matériaux issus de l'érosion.",
        correction: "L'eau et le vent peuvent transporter ces matériaux. La glace peut également les transporter."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète : granite → ... → gneiss.",
        correction: "Granite → métamorphisme → gneiss. Le granite se transforme sous de nouvelles conditions, notamment de température et de pression."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle est la différence entre le métamorphisme et la fusion ?",
        correction: "Le métamorphisme transforme généralement une roche à l'état solide, sous de nouvelles conditions. La fusion produit de la matière fondue à partir d'une partie ou de la totalité de la roche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roche magmatique doit-elle obligatoirement devenir une roche sédimentaire avant de devenir métamorphique ?",
        correction: "Non. Une roche magmatique peut être transformée directement par métamorphisme si elle rencontre les conditions nécessaires. Par exemple, un granite peut se transformer en gneiss."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris un trajet possible entre un granite exposé en surface et un grès.",
        correction: "Le granite est altéré et des matériaux sont enlevés par l'érosion. Certains grains sont transportés puis déposés. Le sable s'accumule et peut être enfoui ; sa compaction et sa cimentation peuvent ensuite former un grès."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roche sédimentaire est enfouie, transformée en gneiss, puis subit une fusion partielle. Explique les étapes et indique ce qui peut se produire si la matière fondue refroidit.",
        correction: "Lors de l'enfouissement, la roche sédimentaire subit de nouvelles conditions de température et de pression. Le métamorphisme peut la transformer en gneiss, généralement à l'état solide. Une fusion partielle signifie qu'une partie de la roche fond tandis qu'une autre reste solide. La matière fondue peut contribuer à former un magma qui, en refroidissant et en se solidifiant, peut donner une roche magmatique."
      }
    ]
  }
]);
