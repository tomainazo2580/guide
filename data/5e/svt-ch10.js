// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 10 : Les etres vivants dans leur milieu

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-etres-vivants-milieu",
    titre: "Chapitre 10 : Les êtres vivants dans leur milieu",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-milieu-observation",
        titre: "Observer un milieu de vie",
        blocs: [
          {
            type: "texte",
            titre: "Autour d'une mare",
            texte: "Près d'une mare, on peut observer de l'eau, de la terre, des pierres, des plantes et des animaux.\nTous ces éléments font partie du milieu que l'on observe."
          },
          {
            type: "definition",
            titre: "Un milieu de vie",
            texte: "Un milieu de vie est un endroit où vivent des êtres vivants. Il possède des caractéristiques comme la présence d'eau, de lumière, d'air ou un certain type de sol."
          },
          {
            type: "exemple",
            titre: "Différents milieux",
            texte: "Une forêt, une mare, une rizière, une rivière ou le bord de la mer sont des milieux de vie. Ils n'abritent pas nécessairement les mêmes êtres vivants."
          },
          {
            type: "remarque",
            titre: "Regarder sans abîmer",
            texte: "Pour étudier un milieu, on peut observer et noter ce que l'on voit sans arracher les plantes ni déranger les animaux."
          }
        ]
      },

      {
        id: "svt5-milieu-composantes",
        titre: "Les éléments d'un milieu",
        blocs: [
          {
            type: "tableau",
            titre: "Deux types d'éléments",
            entetes: ["Éléments vivants", "Éléments non vivants"],
            lignes: [
              ["Plantes", "Eau"],
              ["Animaux", "Air"],
              ["Champignons", "Roches et sol"],
              ["Micro-organismes", "Lumière et température"]
            ]
          },
          {
            type: "texte",
            titre: "Les êtres vivants",
            texte: "Les êtres vivants naissent, se développent et se reproduisent. Ils ont besoin de conditions favorables pour vivre."
          },
          {
            type: "texte",
            titre: "Les éléments non vivants",
            texte: "L'eau, la lumière, la température, l'air et le sol influencent la vie des organismes. Ces éléments ne sont pas des êtres vivants."
          },
          {
            type: "remarque",
            titre: "Le sol contient aussi des êtres vivants",
            texte: "Le sol comprend des éléments non vivants, comme des fragments de roches et de l'eau. Il abrite aussi des êtres vivants, comme des vers de terre et des micro-organismes."
          }
        ]
      },

      {
        id: "svt5-milieu-faune-flore",
        titre: "La faune et la flore",
        blocs: [
          {
            type: "definition",
            titre: "La faune",
            texte: "La faune est l'ensemble des espèces animales présentes dans un milieu ou une région."
          },
          {
            type: "definition",
            titre: "La flore",
            texte: "La flore est l'ensemble des espèces végétales présentes dans un milieu ou une région."
          },
          {
            type: "exemple",
            titre: "Dans une forêt de Madagascar",
            texte: "Les lémuriens, les oiseaux et les insectes font partie de la faune. Les arbres, les fougères et les herbes font partie de la flore."
          },
          {
            type: "remarque",
            titre: "Et les champignons ?",
            texte: "Les champignons ne sont ni des animaux ni des plantes. Ils font partie des êtres vivants du milieu, mais ne sont pas classés dans la faune ou la flore."
          }
        ]
      },

      {
        id: "svt5-milieu-ecosysteme",
        titre: "Qu'est-ce qu'un écosystème ?",
        blocs: [
          {
            type: "definition",
            titre: "Un écosystème",
            texte: "Un écosystème est formé par un milieu et les êtres vivants qui y vivent, ainsi que par les relations entre eux et avec leur milieu."
          },
          {
            type: "texte",
            titre: "Les relations dans le milieu",
            texte: "Dans une mare, les plantes utilisent notamment l'eau et la lumière. Des animaux peuvent se nourrir de plantes ou d'autres animaux. Les êtres vivants et leur milieu sont donc liés."
          },
          {
            type: "schema",
            titre: "Les éléments d'un écosystème",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='35' width='130' height='85' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='85' y='58' font-size='13' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>MILIEU</text><text x='85' y='79' font-size='11' fill='#1e3a8a' text-anchor='middle'>Eau, air, sol, lumière</text><text x='85' y='98' font-size='11' fill='#1e3a8a' text-anchor='middle'>et température</text><rect x='190' y='35' width='130' height='85' rx='10' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><text x='255' y='58' font-size='13' font-weight='bold' fill='#14532d' text-anchor='middle'>ÊTRES VIVANTS</text><text x='255' y='79' font-size='11' fill='#14532d' text-anchor='middle'>Animaux, plantes,</text><text x='255' y='98' font-size='11' fill='#14532d' text-anchor='middle'>champignons, microbes</text><line x1='150' y1='76' x2='190' y2='76' stroke='#6b7280' stroke-width='2'/><polygon points='155,71 145,76 155,81' fill='#6b7280'/><polygon points='185,71 195,76 185,81' fill='#6b7280'/><text x='170' y='145' font-size='12' fill='#374151' text-anchor='middle'>Ils sont en relation les uns avec les autres</text><text x='170' y='174' font-size='13' font-weight='bold' fill='#374151' text-anchor='middle'>MILIEU + ÊTRES VIVANTS + RELATIONS</text><text x='170' y='199' font-size='13' font-weight='bold' fill='#047857' text-anchor='middle'>= ÉCOSYSTÈME</text><text x='170' y='222' font-size='10' fill='#6b7280' text-anchor='middle'>Schéma simplifié</text></svg>",
            legende: "Un écosystème comprend un milieu, les êtres vivants qui y vivent et leurs relations."
          },
          {
            type: "remarque",
            titre: "Les relations entre êtres vivants",
            texte: "Les êtres vivants peuvent aussi avoir des relations entre eux, par exemple lorsqu'un animal se nourrit d'un autre. Nous les étudierons au chapitre suivant."
          }
        ]
      },

      {
        id: "svt5-milieu-repartition",
        titre: "Pourquoi les êtres vivants ne sont-ils pas partout les mêmes ?",
        blocs: [
          {
            type: "texte",
            titre: "Des besoins différents",
            texte: "Les êtres vivants n'ont pas tous les mêmes besoins. La présence d'eau, la température, la lumière, les abris et la nourriture influencent les endroits où ils peuvent vivre."
          },
          {
            type: "exemple",
            titre: "Un exemple simple",
            texte: "Les poissons vivent dans l'eau, tandis qu'un lémurien vit sur terre et dans les arbres. Une mare et une forêt offrent donc des conditions de vie différentes."
          },
          {
            type: "definition",
            titre: "L'habitat",
            texte: "L'habitat est le lieu où vit habituellement un être vivant et où il trouve les conditions nécessaires à sa vie."
          },
          {
            type: "remarque",
            titre: "Un habitat peut changer",
            texte: "Une sécheresse, une pollution ou une destruction de la végétation peut modifier un habitat. Ces changements peuvent rendre la vie difficile à certains êtres vivants."
          }
        ]
      },

      {
        id: "svt5-milieu-observer",
        titre: "Comment étudier un milieu ?",
        blocs: [
          {
            type: "methode",
            titre: "Une petite enquête",
            texte: "1. Choisis un milieu proche : jardin, cour, rizière ou bord de mare.\n2. Note les éléments non vivants : eau, sol, lumière et température ressentie.\n3. Observe les êtres vivants sans les déranger.\n4. Classe tes observations : animaux, plantes et autres êtres vivants.\n5. Cherche quelques relations, par exemple un insecte sur une fleur."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Ne goûte pas les plantes ou les animaux observés. Ne touche pas les espèces inconnues et demande l'aide d'un adulte si nécessaire."
          }
        ]
      },

      {
        id: "svt5-milieu-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Un milieu comprend des éléments vivants et non vivants.\n2. La faune désigne les animaux d'un milieu ; la flore désigne ses végétaux.\n3. Un écosystème comprend un milieu, ses êtres vivants et leurs relations.\n4. Les conditions du milieu influencent la répartition des êtres vivants."
          },
          {
            type: "methode",
            titre: "Pour décrire un écosystème",
            texte: "Présente d'abord le milieu et ses éléments non vivants. Cite ensuite quelques êtres vivants, puis une ou deux relations entre eux ou avec leur milieu."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un milieu de vie ?",
        correction: "C'est un endroit où vivent des êtres vivants et qui possède certaines caractéristiques, comme la présence d'eau, de lumière ou un type de sol."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux éléments non vivants d'un milieu.",
        correction: "Par exemple : l'eau et les roches. L'air, la lumière et la température sont d'autres exemples."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'appelle-t-on la faune ?",
        correction: "La faune est l'ensemble des espèces animales présentes dans un milieu ou une région."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle est la différence entre la faune et la flore ?",
        correction: "La faune désigne les espèces animales d'un milieu ou d'une région. La flore désigne les espèces végétales."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un habitat ?",
        correction: "C'est le lieu où vit habituellement un être vivant et où il trouve les conditions nécessaires à sa vie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Classe ces éléments : eau, grenouille, roche, plante, champignon.",
        correction: "Éléments vivants : grenouille, plante et champignon. Éléments non vivants : eau et roche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Qu'est-ce qu'un écosystème ?",
        correction: "C'est un milieu, les êtres vivants qui y vivent et les relations entre eux et avec leur milieu."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi le sol n'est-il pas constitué uniquement d'éléments non vivants ?",
        correction: "Le sol contient des éléments non vivants, comme des fragments de roches et de l'eau, mais il abrite aussi des êtres vivants, comme des vers de terre et des micro-organismes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Les animaux d'une forêt font partie de sa faune.\n2. La lumière est un être vivant.\n3. Un écosystème comprend des relations entre les êtres vivants et leur milieu.",
        correction: "1. Vrai.\n2. Faux : la lumière est un élément non vivant.\n3. Vrai."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une mare, on observe de l'eau, des pierres, des plantes aquatiques et des grenouilles. Classe ces éléments et explique pourquoi la mare peut être étudiée comme un écosystème.",
        correction: "L'eau et les pierres sont des éléments non vivants. Les plantes aquatiques et les grenouilles sont des êtres vivants. La mare peut être étudiée comme un écosystème car elle comprend un milieu, des êtres vivants et des relations entre eux et avec leur milieu."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une mare s'assèche pendant une longue période. Explique une conséquence possible pour les êtres vivants qui y vivent.",
        correction: "Certains êtres vivants qui ont besoin d'eau, comme les poissons, peuvent ne plus trouver les conditions nécessaires à leur vie. Ils peuvent mourir ou, selon l'espèce et les possibilités, rejoindre un autre milieu."
      }
    ]
  }
]);
