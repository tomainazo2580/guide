// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 3 : Les nutriments et leur absorption

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-nutriments",
    titre: "Chapitre 3 : Les nutriments et leur absorption",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-nutriments-definition",
        titre: "Qu'est-ce qu'un nutriment ?",
        blocs: [
          {
            type: "texte",
            titre: "Après la digestion",
            texte: "Le riz, les légumes, la viande ou les fruits que nous mangeons contiennent différentes substances.\nPendant la digestion, certains constituants des aliments sont transformés en substances plus simples : les nutriments."
          },
          {
            type: "definition",
            titre: "Les nutriments",
            texte: "Les nutriments sont des substances utilisables par le corps.\nCertains sont obtenus grâce à la digestion. D'autres, comme l'eau, les sels minéraux et les vitamines, peuvent être absorbés sans être digérés."
          },
          {
            type: "exemple",
            titre: "De l'amidon au glucose",
            texte: "Le riz et le manioc contiennent de l'amidon.\nPendant la digestion, l'amidon est transformé en substances plus simples, notamment en glucose.\nLe glucose est un nutriment utilisable par le corps."
          },
          {
            type: "remarque",
            titre: "Aliment et nutriment",
            texte: "Un aliment est ce que nous mangeons, par exemple du riz.\nUn nutriment est une substance que le corps peut absorber et utiliser, par exemple le glucose."
          }
        ]
      },
      {
        id: "svt5-nutriments-origine",
        titre: "D'où viennent les nutriments ?",
        blocs: [
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: [
              "Dans les aliments",
              "Pendant la digestion",
              "Nutriments obtenus"
            ],
            lignes: [
              [
                "Amidon du riz, du pain ou du manioc",
                "L'amidon est transformé",
                "Glucose"
              ],
              [
                "Protéines de la viande, du poisson ou des haricots",
                "Les protéines sont transformées",
                "Acides aminés"
              ],
              [
                "Matières grasses de l'huile ou de la viande",
                "Les matières grasses sont transformées",
                "Notamment des acides gras"
              ]
            ]
          },
          {
            type: "texte",
            titre: "Des substances absorbées sans digestion",
            texte: "L'eau, les sels minéraux et les vitamines présents dans les aliments n'ont pas besoin d'être découpés par les enzymes digestives avant d'être absorbés."
          },
          {
            type: "remarque",
            titre: "À retenir",
            texte: "Tous les nutriments ne proviennent donc pas d'une transformation par les enzymes : certains sont déjà présents dans les aliments sous une forme absorbable."
          }
        ]
      },
      {
        id: "svt5-nutriments-absorption",
        titre: "Le passage des nutriments dans le corps",
        blocs: [
          {
            type: "definition",
            titre: "L'absorption intestinale",
            texte: "L'absorption intestinale est le passage des nutriments à travers la paroi de l'intestin vers le milieu intérieur de l'organisme.\nElle se déroule principalement dans l'intestin grêle."
          },
          {
            type: "texte",
            titre: "Où vont les nutriments ?",
            texte: "La plupart des nutriments, comme le glucose et les acides aminés, passent dans le sang.\nLes produits de la digestion des matières grasses passent surtout d'abord dans un autre liquide, la lymphe, avant de rejoindre le sang."
          },
          {
            type: "definition",
            titre: "La lymphe",
            texte: "La lymphe est un liquide qui circule dans des vaisseaux du corps. Elle finit par rejoindre le sang."
          },
          {
            type: "schema",
            titre: "Le passage des nutriments",
            svg: "<svg viewBox='0 0 340 245' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='12' width='270' height='52' rx='10' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='34' font-size='14' font-weight='bold' fill='#78350f' text-anchor='middle'>INTESTIN GRÊLE</text><text x='170' y='53' font-size='12' fill='#78350f' text-anchor='middle'>Nutriments issus de la digestion</text><line x1='170' y1='64' x2='170' y2='89' stroke='#6b7280' stroke-width='2'/><polygon points='165,84 170,94 175,84' fill='#6b7280'/><rect x='35' y='95' width='270' height='42' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='170' y='121' font-size='13' fill='#075985' text-anchor='middle'>Passage à travers la paroi intestinale</text><line x1='105' y1='137' x2='105' y2='160' stroke='#6b7280' stroke-width='2'/><polygon points='100,155 105,165 110,155' fill='#6b7280'/><line x1='235' y1='137' x2='235' y2='160' stroke='#6b7280' stroke-width='2'/><polygon points='230,155 235,165 240,155' fill='#6b7280'/><rect x='25' y='166' width='160' height='52' rx='8' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='105' y='188' font-size='13' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>SANG</text><text x='105' y='206' font-size='10' fill='#7f1d1d' text-anchor='middle'>Glucose, acides aminés...</text><rect x='195' y='166' width='120' height='52' rx='8' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><text x='255' y='188' font-size='13' font-weight='bold' fill='#14532d' text-anchor='middle'>LYMPHE</text><text x='255' y='205' font-size='10' fill='#14532d' text-anchor='middle'>La plupart des graisses</text><text x='170' y='238' font-size='11' fill='#6b7280' text-anchor='middle'>La lymphe rejoint ensuite le sang</text></svg>",
            legende: "La plupart des nutriments passent dans le sang. Les produits de la digestion des matières grasses passent surtout d'abord dans la lymphe."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La digestion transforme certains constituants des aliments.\nL'absorption est leur passage, sous forme de nutriments, à travers la paroi intestinale."
          }
        ]
      },
      {
        id: "svt5-nutriments-villosites",
        titre: "Une paroi adaptée à l'absorption",
        blocs: [
          {
            type: "texte",
            titre: "La paroi de l'intestin grêle",
            texte: "La face intérieure de l'intestin grêle n'est pas lisse. Elle porte de nombreux petits replis et de petites avancées appelées villosités intestinales."
          },
          {
            type: "definition",
            titre: "Une villosité intestinale",
            texte: "Une villosité intestinale est une petite avancée de la paroi intérieure de l'intestin grêle.\nLes nombreuses villosités augmentent la surface de contact avec les nutriments."
          },
          {
            type: "texte",
            titre: "Pourquoi les villosités sont-elles utiles ?",
            texte: "La grande surface offerte par les villosités facilite l'absorption des nutriments.\nDans les villosités se trouvent de petits vaisseaux sanguins et un vaisseau lymphatique qui recueillent les substances absorbées."
          },
          {
            type: "schema",
            titre: "Une villosité intestinale simplifiée",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg'><text x='170' y='22' font-size='13' fill='#374151' text-anchor='middle'>Intérieur de l'intestin grêle</text><circle cx='72' cy='55' r='5' fill='#f59e0b'/><circle cx='112' cy='45' r='5' fill='#f59e0b'/><circle cx='230' cy='48' r='5' fill='#f59e0b'/><circle cx='275' cy='58' r='5' fill='#f59e0b'/><text x='48' y='83' font-size='11' fill='#92400e'>Nutriments</text><path d='M105 205 L105 113 C105 70 130 45 170 45 C210 45 235 70 235 113 L235 205 Z' fill='#ffedd5' stroke='#c2410c' stroke-width='3'/><path d='M135 200 L135 120 C135 95 145 79 158 72' fill='none' stroke='#dc2626' stroke-width='4'/><path d='M205 200 L205 120 C205 95 195 79 182 72' fill='none' stroke='#dc2626' stroke-width='4'/><path d='M170 202 L170 90' fill='none' stroke='#16a34a' stroke-width='6'/><line x1='170' y1='28' x2='170' y2='41' stroke='#6b7280' stroke-width='2'/><polygon points='165,37 170,45 175,37' fill='#6b7280'/><line x1='205' y1='125' x2='285' y2='112' stroke='#6b7280' stroke-width='1'/><text x='287' y='109' font-size='10' fill='#b91c1c'>Vaisseaux</text><text x='287' y='122' font-size='10' fill='#b91c1c'>sanguins</text><line x1='170' y1='165' x2='75' y2='150' stroke='#6b7280' stroke-width='1'/><text x='5' y='145' font-size='10' fill='#15803d'>Vaisseau</text><text x='5' y='158' font-size='10' fill='#15803d'>lymphatique</text><line x1='65' y1='205' x2='275' y2='205' stroke='#9a3412' stroke-width='4'/><text x='170' y='230' font-size='11' fill='#6b7280' text-anchor='middle'>Schéma très simplifié, non à l'échelle</text></svg>",
            legende: "Les villosités augmentent la surface d'absorption. Elles contiennent de petits vaisseaux sanguins et un vaisseau lymphatique."
          }
        ]
      },
      {
        id: "svt5-nutriments-utilisation",
        titre: "À quoi servent les nutriments ?",
        blocs: [
          {
            type: "texte",
            titre: "Le transport vers les organes",
            texte: "Après leur absorption, les nutriments sont transportés par le sang vers les organes du corps.\nLes organes les utilisent pour fonctionner, grandir et se renouveler."
          },
          {
            type: "exemple",
            titre: "Quelques rôles",
            texte: "Le glucose fournit de l'énergie aux organes.\nLes acides aminés servent notamment à fabriquer et à renouveler des éléments du corps.\nL'eau est nécessaire au fonctionnement de l'organisme."
          },
          {
            type: "remarque",
            titre: "Et ce qui n'est pas absorbé ?",
            texte: "Les matières non digérées ou non absorbées continuent leur trajet vers le gros intestin.\nUne partie de l'eau y est absorbée. Les matières restantes participent à la formation des selles, qui seront évacuées."
          }
        ]
      },
      {
        id: "svt5-nutriments-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Les nutriments sont des substances utilisables par le corps.\n2. Certains sont obtenus grâce à la digestion ; d'autres sont absorbés sans digestion.\n3. L'absorption se déroule surtout dans l'intestin grêle.\n4. Les villosités facilitent l'absorption en augmentant la surface de contact.\n5. Les nutriments sont ensuite transportés vers les organes."
          },
          {
            type: "methode",
            titre: "Pour ne pas confondre",
            texte: "Retiens ces trois étapes :\n1. Digestion : certains aliments sont transformés en nutriments.\n2. Absorption : les nutriments traversent la paroi intestinale.\n3. Transport : ils sont acheminés vers les organes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un nutriment ?",
        correction: "Un nutriment est une substance que le corps peut absorber et utiliser."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel nutriment est obtenu notamment grâce à la digestion de l'amidon ?",
        correction: "Le glucose."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans quel organe l'absorption des nutriments se déroule-t-elle principalement ?",
        correction: "Elle se déroule principalement dans l'intestin grêle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que l'absorption intestinale ?",
        correction: "C'est le passage des nutriments à travers la paroi de l'intestin vers le milieu intérieur de l'organisme."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux substances qui peuvent être absorbées sans être digérées.",
        correction: "Par exemple : l'eau et les sels minéraux. On pouvait aussi citer les vitamines."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Que sont les villosités intestinales ?",
        correction: "Ce sont de petites avancées de la paroi intérieure de l'intestin grêle. Elles augmentent la surface de contact avec les nutriments."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique la différence entre digestion et absorption.",
        correction: "La digestion transforme certains constituants des aliments en substances plus simples. L'absorption est le passage des nutriments à travers la paroi intestinale."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le glucose peut passer dans le sang après son absorption.\n2. L'absorption des nutriments se fait principalement dans l'estomac.\n3. Les villosités réduisent la surface d'absorption.",
        correction: "1. Vrai.\n2. Faux : elle se fait principalement dans l'intestin grêle.\n3. Faux : les villosités augmentent la surface d'absorption."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quel trajet suivent principalement les produits de la digestion des matières grasses après avoir traversé la paroi de l'intestin grêle ?",
        correction: "Ils passent surtout d'abord dans la lymphe, qui rejoint ensuite le sang."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soa mange du riz. Explique ce que devient l'amidon du riz et comment le corps peut utiliser le glucose obtenu.",
        correction: "Pendant la digestion, l'amidon est transformé notamment en glucose. Le glucose traverse ensuite la paroi de l'intestin grêle et passe dans le sang. Le sang le transporte vers les organes, qui peuvent l'utiliser pour obtenir de l'énergie."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pourquoi les nombreuses villosités de l'intestin grêle facilitent-elles l'absorption des nutriments ?",
        correction: "Elles augmentent la surface de contact entre le contenu de l'intestin et sa paroi. Les nutriments disposent ainsi d'une plus grande surface pour traverser la paroi et rejoindre les vaisseaux."
      }
    ]
  }
]);
