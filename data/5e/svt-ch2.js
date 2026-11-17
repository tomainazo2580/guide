// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 2 : La digestion des aliments

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-digestion",
    titre: "Chapitre 2 : La digestion des aliments",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-digestion-transformations",
        titre: "Les aliments se transforment",
        blocs: [
          {
            type: "texte",
            titre: "Que devient un morceau de pain ?",
            texte: "Quand tu manges un morceau de pain, tu le mâches avant de l'avaler. Il est ensuite brassé et mélangé à des liquides dans le tube digestif.\nAu cours de ce trajet, les aliments sont transformés : c'est la digestion."
          },
          {
            type: "definition",
            titre: "La digestion",
            texte: "La digestion est l'ensemble des transformations que subissent les aliments dans le tube digestif.\nElle permet d'obtenir notamment des substances simples appelées nutriments."
          },
          {
            type: "regle",
            titre: "Deux types de transformations",
            texte: "Les aliments subissent :\n- des transformations mécaniques : ils sont coupés, écrasés et brassés ;\n- des transformations chimiques : certains de leurs constituants sont transformés en substances plus simples sous l'action des sucs digestifs."
          }
        ]
      },
      {
        id: "svt5-digestion-mecanique",
        titre: "Les transformations mécaniques",
        blocs: [
          {
            type: "definition",
            titre: "La mastication",
            texte: "La mastication est l'action de mâcher les aliments.\nDans la bouche, les dents coupent et écrasent les aliments. La langue les mélange à la salive et aide à les avaler."
          },
          {
            type: "definition",
            titre: "Le brassage",
            texte: "Le brassage est le mouvement qui mélange les aliments dans le tube digestif.\nDans l'estomac, les contractions de la paroi brassent les aliments et les mélangent au suc gastrique."
          },
          {
            type: "exemple",
            titre: "Une bouchée de riz",
            texte: "Dans la bouche, les dents écrasent les grains de riz et la langue les mélange à la salive.\nAprès avoir été avalés, ils arrivent dans l'estomac où ils sont brassés."
          },
          {
            type: "remarque",
            titre: "Mécanique ne veut pas dire chimique",
            texte: "Couper ou écraser un aliment le réduit en morceaux, mais cela ne suffit pas à expliquer toutes les transformations de la digestion.\nLes sucs digestifs agissent aussi sur certains constituants des aliments."
          }
        ]
      },
      {
        id: "svt5-digestion-chimique",
        titre: "Les transformations chimiques",
        blocs: [
          {
            type: "definition",
            titre: "Les sucs digestifs",
            texte: "Les sucs digestifs sont des liquides qui interviennent dans la digestion.\nIls contiennent des substances appelées enzymes digestives."
          },
          {
            type: "definition",
            titre: "Les enzymes digestives",
            texte: "Les enzymes digestives aident à transformer certains constituants des aliments en substances plus simples.\nChaque enzyme agit sur certains constituants."
          },
          {
            type: "exemple",
            titre: "La salive et l'amidon",
            texte: "Le riz, le pain et le manioc contiennent de l'amidon.\nDans la bouche, une enzyme de la salive commence à transformer l'amidon en substances plus simples.\nLa transformation se poursuit ensuite dans l'intestin grêle."
          },
          {
            type: "remarque",
            titre: "Le rôle de la bile",
            texte: "La bile aide à la digestion des matières grasses en les dispersant en petites gouttes.\nElle ne contient pas d'enzymes digestives."
          }
        ]
      },
      {
        id: "svt5-digestion-lieux",
        titre: "Où se déroule la digestion ?",
        blocs: [
          {
            type: "tableau",
            titre: "Les principales étapes",
            entetes: ["Lieu", "Transformations mécaniques", "Action des liquides"],
            lignes: [
              [
                "Bouche",
                "Les dents coupent et écrasent les aliments.",
                "La salive humidifie les aliments et commence la digestion de l'amidon."
              ],
              [
                "Estomac",
                "Les aliments sont brassés.",
                "Le suc gastrique commence notamment la digestion des protéines."
              ],
              [
                "Intestin grêle",
                "Les aliments continuent d'être mélangés et avancent.",
                "La bile aide à disperser les matières grasses. Les sucs pancréatique et intestinal poursuivent la digestion."
              ]
            ]
          },
          {
            type: "texte",
            titre: "Et dans l'œsophage ?",
            texte: "L'œsophage conduit les aliments de la bouche à l'estomac grâce aux contractions de sa paroi.\nIl ne produit pas de suc digestif pour transformer les aliments."
          },
          {
            type: "schema",
            titre: "Les grandes étapes de la digestion",
            svg: "<svg viewBox='0 0 340 290' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='10' width='260' height='58' rx='10' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='32' font-size='14' font-weight='bold' fill='#78350f' text-anchor='middle'>BOUCHE</text><text x='170' y='52' font-size='12' fill='#78350f' text-anchor='middle'>Mastication et action de la salive</text><line x1='170' y1='68' x2='170' y2='91' stroke='#6b7280' stroke-width='2'/><polygon points='165,86 170,96 175,86' fill='#6b7280'/><rect x='40' y='97' width='260' height='58' rx='10' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='170' y='119' font-size='14' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>ESTOMAC</text><text x='170' y='139' font-size='12' fill='#7f1d1d' text-anchor='middle'>Brassage et action du suc gastrique</text><line x1='170' y1='155' x2='170' y2='178' stroke='#6b7280' stroke-width='2'/><polygon points='165,173 170,183 175,173' fill='#6b7280'/><rect x='40' y='184' width='260' height='68' rx='10' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><text x='170' y='206' font-size='14' font-weight='bold' fill='#7c2d12' text-anchor='middle'>INTESTIN GRELE</text><text x='170' y='225' font-size='12' fill='#7c2d12' text-anchor='middle'>La digestion se poursuit</text><text x='170' y='242' font-size='12' fill='#7c2d12' text-anchor='middle'>Les nutriments peuvent passer dans le sang</text><text x='170' y='278' font-size='11' fill='#6b7280' text-anchor='middle'>Schema simplifie des principales etapes</text></svg>",
            legende: "Les aliments sont transformés tout au long de leur trajet. Le passage des nutriments dans le sang sera étudié au chapitre suivant."
          }
        ]
      },
      {
        id: "svt5-digestion-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. La digestion transforme les aliments dans le tube digestif.\n2. Les dents et les mouvements du tube digestif réalisent des transformations mécaniques.\n3. Les enzymes des sucs digestifs réalisent des transformations chimiques.\n4. La digestion permet notamment d'obtenir des nutriments."
          },
          {
            type: "methode",
            titre: "Comment reconnaître une transformation ?",
            texte: "Demande-toi ce qui agit :\n- si les aliments sont coupés, écrasés ou brassés, il s'agit d'une transformation mécanique ;\n- si une enzyme transforme un constituant de l'aliment en substances plus simples, il s'agit d'une transformation chimique."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous verrons ce que sont les nutriments et comment ils passent de l'intestin grêle vers le sang."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la digestion ?",
        correction: "La digestion est l'ensemble des transformations que subissent les aliments dans le tube digestif. Elle permet notamment d'obtenir des nutriments."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quels organes coupent et écrasent les aliments dans la bouche ?",
        correction: "Ce sont les dents."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on l'action de mâcher les aliments ?",
        correction: "On l'appelle la mastication."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite une transformation mécanique qui a lieu dans la bouche et une autre qui a lieu dans l'estomac.",
        correction: "Dans la bouche, les aliments sont coupés et écrasés par les dents. Dans l'estomac, ils sont brassés par les mouvements de la paroi."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel est le rôle des enzymes digestives ?",
        correction: "Elles aident à transformer certains constituants des aliments en substances plus simples."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La salive agit sur l'amidon. Cite deux aliments qui contiennent de l'amidon.",
        correction: "Par exemple : le riz et le pain. Le manioc contient aussi de l'amidon."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Classe ces actions en transformations mécaniques ou chimiques :\n1. Les dents écrasent le pain.\n2. Une enzyme de la salive transforme l'amidon.\n3. L'estomac brasse les aliments.",
        correction: "1. Mécanique : les dents écrasent le pain.\n2. Chimique : une enzyme transforme l'amidon.\n3. Mécanique : l'estomac brasse les aliments."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. La digestion commence dans la bouche.\n2. Le brassage dans l'estomac est une transformation chimique.\n3. La bile contient des enzymes digestives.",
        correction: "1. Vrai : la digestion commence dans la bouche.\n2. Faux : le brassage est une transformation mécanique.\n3. Faux : la bile aide à disperser les matières grasses, mais elle ne contient pas d'enzymes digestives."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Lala mange du pain. Explique deux actions différentes qui commencent dans sa bouche.",
        correction: "Les dents de Lala coupent et écrasent le pain : c'est une action mécanique. En même temps, une enzyme de la salive commence à transformer l'amidon du pain : c'est une action chimique."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Fara dit : « Pour digérer, il suffit d'écraser les aliments. » Explique pourquoi sa réponse est incomplète.",
        correction: "Écraser les aliments est une transformation mécanique utile, mais ce n'est pas suffisant pour expliquer la digestion. Les enzymes des sucs digestifs transforment aussi certains constituants des aliments en substances plus simples : ce sont des transformations chimiques."
      }
    ]
  }
]);
