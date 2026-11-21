// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 1 : Les aliments et les nutriments

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-aliments-nutriments",
    titre: "Chapitre 1 : Les aliments et les nutriments",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt3-alim-introduction",
        titre: "Pourquoi mangeons-nous ?",
        blocs: [
          {
            type: "introduction",
            titre: "Une situation de la vie quotidienne",
            texte: "Du riz, des haricots, du poisson et des légumes peuvent composer un repas. Ces aliments n'ont pas tous la même composition : ils apportent différentes substances utiles au corps."
          },
          {
            type: "definition",
            titre: "Un aliment",
            texte: "Un aliment est une substance que l'on consomme pour nourrir l'organisme. Il peut être d'origine végétale, comme le riz et les haricots, ou animale, comme le poisson et les œufs."
          },
          {
            type: "texte",
            titre: "Les besoins de l'organisme",
            texte: "Le corps a besoin de matière pour grandir, renouveler ses cellules et entretenir ses organes. Il a aussi besoin d'énergie pour fonctionner, maintenir sa température et effectuer des activités. L'eau, les vitamines et les sels minéraux participent également au bon fonctionnement de l'organisme."
          },
          {
            type: "remarque",
            titre: "Aliment et nutriment",
            texte: "Un aliment est ce que l'on mange ou boit. Les nutriments sont des substances utilisables par l'organisme, notamment après la digestion. Il ne faut donc pas confondre un morceau de pain avec le glucose qui peut résulter de la digestion de son amidon."
          }
        ]
      },
      {
        id: "svt3-alim-constituants",
        titre: "Les principaux constituants des aliments",
        blocs: [
          {
            type: "texte",
            titre: "Des aliments composés",
            texte: "La plupart des aliments contiennent plusieurs constituants en proportions variables. On peut y trouver des glucides, des lipides, des protéines, de l'eau, des sels minéraux et des vitamines."
          },
          {
            type: "tableau",
            titre: "Constituants et exemples",
            entetes: ["Constituant", "Exemples d'aliments qui en apportent", "Rôles principaux"],
            lignes: [
              ["Glucides", "Riz, manioc, maïs, pain, fruits", "Fournissent notamment de l'énergie."],
              ["Lipides", "Huiles, arachides, beurre, poissons gras", "Fournissent de l'énergie et participent à la constitution des cellules."],
              ["Protéines", "Viande, poisson, œufs, haricots, lait", "Participent à la croissance et au renouvellement des tissus."],
              ["Eau", "Eau de boisson, fruits, légumes", "Indispensable au fonctionnement de l'organisme et au transport de substances."],
              ["Sels minéraux", "Lait, légumes, poissons, aliments variés", "Interviennent dans plusieurs fonctions ; par exemple, le calcium participe à la solidité des os."],
              ["Vitamines", "Fruits, légumes et autres aliments variés", "Nécessaires en petites quantités au bon fonctionnement de l'organisme."]
            ]
          },
          {
            type: "remarque",
            titre: "Une classification simplifiée",
            texte: "Un même aliment peut apporter plusieurs constituants : les arachides apportent par exemple des lipides et des protéines. Les rôles indiqués sont les rôles principaux, mais un constituant peut avoir plusieurs fonctions."
          },
          {
            type: "rappel",
            titre: "Les fibres alimentaires",
            texte: "Les légumes, les fruits et certains produits céréaliers apportent aussi des fibres. Elles ne sont pas toutes digérées par l'être humain, mais elles contribuent notamment au bon fonctionnement du transit intestinal."
          }
        ]
      },
      {
        id: "svt3-alim-digestion",
        titre: "De l'aliment au nutriment",
        blocs: [
          {
            type: "definition",
            titre: "La digestion",
            texte: "La digestion est l'ensemble des transformations que subissent les aliments dans le tube digestif. Des actions mécaniques, comme la mastication et le brassage, et l'action des sucs digestifs permettent de transformer une partie des aliments en substances absorbables."
          },
          {
            type: "texte",
            titre: "Quelques transformations",
            texte: "L'amidon, un glucide présent notamment dans le riz et le manioc, est progressivement transformé en sucres simples dont le glucose. Les protéines sont transformées en acides aminés. Les lipides sont décomposés notamment en acides gras et en d'autres petites molécules."
          },
          {
            type: "schema",
            titre: "Du repas aux organes",
            svg: "<svg viewBox='0 0 360 300' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='10' width='250' height='42' rx='8' fill='#fef3c7' stroke='#92400e'/><text x='180' y='36' text-anchor='middle' font-size='15' fill='#1f2937'>Aliments consommés</text><path d='M180 52 L180 75' stroke='#374151' stroke-width='2'/><path d='M175 69 L180 76 L185 69' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='78' width='250' height='48' rx='8' fill='#dbeafe' stroke='#2563eb'/><text x='180' y='98' text-anchor='middle' font-size='14' fill='#1f2937'>Digestion dans le tube digestif</text><text x='180' y='116' text-anchor='middle' font-size='12' fill='#1f2937'>Transformations des aliments</text><path d='M180 126 L180 149' stroke='#374151' stroke-width='2'/><path d='M175 143 L180 150 L185 143' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='152' width='250' height='48' rx='8' fill='#dcfce7' stroke='#15803d'/><text x='180' y='172' text-anchor='middle' font-size='14' fill='#1f2937'>Nutriments dans l'intestin grêle</text><text x='180' y='190' text-anchor='middle' font-size='12' fill='#1f2937'>Absorption à travers sa paroi</text><path d='M180 200 L180 223' stroke='#374151' stroke-width='2'/><path d='M175 217 L180 224 L185 217' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='226' width='250' height='54' rx='8' fill='#fce7f3' stroke='#be185d'/><text x='180' y='247' text-anchor='middle' font-size='14' fill='#1f2937'>Transport vers les organes</text><text x='180' y='266' text-anchor='middle' font-size='12' fill='#1f2937'>Sang et, pour certains lipides, lymphe</text></svg>",
            legende: "Schéma simplifié : la digestion transforme une partie des aliments ; les nutriments sont ensuite absorbés et transportés vers les organes."
          },
          {
            type: "definition",
            titre: "L'absorption intestinale",
            texte: "L'absorption intestinale est le passage des nutriments à travers la paroi de l'intestin grêle vers le milieu intérieur. Le glucose et les acides aminés rejoignent le sang. Une grande partie des produits de la digestion des lipides passe d'abord par la lymphe avant de rejoindre la circulation sanguine."
          },
          {
            type: "remarque",
            titre: "Toutes les substances ne sont pas transformées",
            texte: "L'eau, les vitamines et les sels minéraux n'ont pas besoin d'être découpés en molécules plus petites par la digestion pour être absorbés. Une partie des résidus non digérés poursuit son trajet dans le gros intestin puis est éliminée."
          }
        ]
      },
      {
        id: "svt3-alim-roles",
        titre: "Les rôles des nutriments",
        blocs: [
          {
            type: "texte",
            titre: "Construire et renouveler",
            texte: "Les acides aminés issus de la digestion des protéines servent notamment à fabriquer les protéines de l'organisme. Celles-ci participent à la construction, à l'entretien et à la réparation des tissus. Le calcium participe notamment à la constitution des os et des dents."
          },
          {
            type: "texte",
            titre: "Fournir de l'énergie",
            texte: "Les cellules peuvent utiliser des nutriments, notamment le glucose, pour obtenir de l'énergie. Lors de la respiration cellulaire, elles utilisent du dioxygène et des nutriments et produisent notamment du dioxyde de carbone et de l'eau."
          },
          {
            type: "regle",
            titre: "Un bilan simplifié",
            texte: "Nutriments comme le glucose + dioxygène → dioxyde de carbone + eau + énergie utilisable par les cellules.\nCe bilan simplifié décrit la respiration cellulaire ; il ne faut pas la confondre avec les seuls mouvements d'entrée et de sortie de l'air."
          },
          {
            type: "texte",
            titre: "Participer au fonctionnement du corps",
            texte: "L'eau permet notamment le transport de substances et participe à la régulation de la température. Les vitamines et les sels minéraux interviennent dans de nombreuses fonctions. Ils sont nécessaires en quantités adaptées, même s'ils ne fournissent pas eux-mêmes d'énergie."
          },
          {
            type: "remarque",
            titre: "Une confusion à éviter",
            texte: "Les protéines peuvent aussi fournir de l'énergie, mais elles ont notamment un rôle important dans la construction et le renouvellement des tissus. Classer les aliments selon un seul rôle est donc une simplification."
          }
        ]
      },
      {
        id: "svt3-alim-documents",
        titre: "Analyser un document sur les aliments",
        blocs: [
          {
            type: "methode",
            titre: "Lire et comparer",
            texte: "1. Lis le titre du document et repère les aliments étudiés.\n2. Vérifie les unités et la quantité de référence : par exemple, pour 100 g d'aliment.\n3. Compare les valeurs correspondant au constituant demandé.\n4. Justifie ta réponse avec des données chiffrées.\n5. Ne conclus pas qu'un aliment contient un seul constituant parce qu'il en est riche."
          },
          {
            type: "exemple",
            titre: "Exemple de comparaison",
            texte: "Un document indique, pour 100 g de deux aliments fictifs : aliment A, 60 g de glucides et 5 g de protéines ; aliment B, 20 g de glucides et 15 g de protéines.\nA apporte davantage de glucides pour la même masse : 60 g contre 20 g. B apporte davantage de protéines : 15 g contre 5 g. Ces données ne suffisent pas à connaître tous leurs autres constituants."
          },
          {
            type: "remarque",
            titre: "Comparer des quantités identiques",
            texte: "Il faut tenir compte de la masse réellement consommée. Un aliment plus riche en protéines pour 100 g n'en apporte pas forcément davantage si on en mange une portion beaucoup plus petite."
          }
        ]
      },
      {
        id: "svt3-alim-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan du chapitre",
            texte: "• Un aliment peut contenir plusieurs constituants : glucides, lipides, protéines, eau, sels minéraux et vitamines.\n• La digestion transforme une partie des aliments en nutriments absorbables.\n• L'absorption se fait principalement au niveau de l'intestin grêle. Les nutriments sont ensuite transportés vers les organes.\n• Les nutriments participent à la construction et à l'entretien du corps, à son fonctionnement et, pour certains, à l'apport d'énergie.\n• L'eau, les vitamines et les sels minéraux ne fournissent pas d'énergie, mais restent indispensables."
          },
          {
            type: "rappel",
            titre: "Pour la suite",
            texte: "Les besoins énergétiques et l'équilibre alimentaire seront étudiés dans la suite du cours. Les besoins varient selon les personnes et leurs conditions de vie."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite quatre constituants que l'on peut trouver dans les aliments.",
        correction: "On peut citer par exemple les glucides, les lipides, les protéines et l'eau. Les vitamines et les sels minéraux sont également des constituants possibles."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le principal lieu d'absorption des nutriments dans le tube digestif ?",
        correction: "Les nutriments sont principalement absorbés à travers la paroi de l'intestin grêle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Explique la différence entre un aliment et un nutriment, en donnant un exemple de chaque.",
        correction: "Un aliment est consommé pour nourrir l'organisme : par exemple, le riz. Un nutriment est une substance utilisable par l'organisme : par exemple, le glucose obtenu notamment après digestion de l'amidon."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel rôle les protéines alimentaires jouent-elles dans l'entretien du corps ?",
        correction: "La digestion des protéines fournit notamment des acides aminés. Ceux-ci servent à fabriquer des protéines de l'organisme, utiles à la croissance, à l'entretien et à la réparation des tissus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « L'eau ne sert à rien puisqu'elle ne fournit pas d'énergie. » Explique son erreur et donne deux rôles de l'eau.",
        correction: "L'affirmation est fausse. Une substance peut être indispensable sans fournir d'énergie. L'eau participe notamment au transport de substances dans l'organisme et à la régulation de la température. Elle est nécessaire au bon fonctionnement du corps."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le riz contient de l'amidon. Décris les étapes qui permettent à une partie de cet amidon de contribuer au fonctionnement d'un muscle.",
        correction: "Pendant la digestion, l'amidon est transformé progressivement en sucres simples, notamment en glucose. Le glucose traverse la paroi de l'intestin grêle et rejoint le sang. Le sang le transporte jusqu'au muscle. Les cellules musculaires peuvent utiliser ce glucose avec du dioxygène pour obtenir de l'énergie."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour 100 g d'aliment, un document fictif indique : aliment A, 55 g de glucides et 6 g de protéines ; aliment B, 30 g de glucides et 12 g de protéines. Compare les deux aliments pour chacun de ces constituants et justifie avec les données.",
        correction: "Pour 100 g, A contient plus de glucides que B : 55 g contre 30 g, soit 25 g de plus. B contient plus de protéines que A : 12 g contre 6 g, soit 6 g de plus. Les deux aliments contiennent ici à la fois des glucides et des protéines."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un document fictif indique que 100 g d'un aliment A contiennent 8 g de protéines et que 100 g d'un aliment B en contiennent 16 g. On consomme 200 g de A et 50 g de B. Quel aliment apporte le plus de protéines dans ces portions ? Montre ton calcul et explique pourquoi il faut tenir compte de la portion.",
        correction: "Pour A : 200 g correspondent à deux portions de 100 g, donc 2 × 8 = 16 g de protéines.\nPour B : 50 g correspondent à une demi-portion de 100 g, donc 16 ÷ 2 = 8 g de protéines.\nDans les portions consommées, A apporte donc plus de protéines : 16 g contre 8 g. Pourtant, B est plus riche en protéines pour 100 g. Il faut considérer à la fois la composition et la quantité réellement consommée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un camarade écrit : « Tous les aliments traversent directement la paroi intestinale. Le sang transporte uniquement l'énergie jusqu'aux muscles. » Repère deux erreurs et réécris une explication correcte en reliant digestion, absorption et fonctionnement du muscle.",
        correction: "Première erreur : ce ne sont pas les aliments entiers qui traversent directement la paroi intestinale. Une partie est d'abord transformée par la digestion en nutriments absorbables.\nDeuxième erreur : le sang ne transporte pas uniquement de l'énergie ; il transporte notamment des nutriments comme le glucose et du dioxygène.\nExplication correcte : après la digestion, le glucose est absorbé au niveau de l'intestin grêle et rejoint le sang. Le sang le transporte vers les muscles, ainsi que le dioxygène. Les cellules musculaires peuvent les utiliser pour obtenir de l'énergie et produisent notamment du dioxyde de carbone et de l'eau."
      }
    ]
  }
]);
