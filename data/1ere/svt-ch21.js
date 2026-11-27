enregistrerChapitres("1ere", "svt", [
  {
    id: 21,
    titre: "Chapitre 21 : Orogenèse et cycle de la matière du globe",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. Qu’est-ce que l’orogenèse ?",
        blocs: [
          {
            type: "texte",
            titre: "La formation des chaînes de montagnes",
            texte: "L’orogenèse désigne l’ensemble des processus qui conduisent à la formation et à l’évolution d’une chaîne de montagnes. Elle associe notamment des mouvements tectoniques, des déformations, des transformations de roches, des soulèvements et de l’érosion. Une chaîne se construit sur une longue durée et son histoire peut comporter plusieurs étapes."
          },
          {
            type: "texte",
            titre: "Des chaînes de différentes origines",
            texte: "De nombreuses chaînes sont liées à la convergence de plaques. Certaines se développent au-dessus d’une zone de subduction ; d’autres résultent d’une collision continentale après la fermeture d’un océan. Une chaîne de montagnes n’est donc pas définie par un seul type de roche ou une seule structure."
          },
          {
            type: "texte",
            titre: "Relief et structure profonde",
            texte: "Le relief visible ne représente qu’une partie de la chaîne. Sous certaines grandes chaînes de collision, la croûte continentale est épaissie et forme une racine crustale qui s’enfonce en profondeur. L’altitude dépend notamment de cet épaississement, de la densité des roches et de l’évolution de la chaîne."
          }
        ]
      },

      {
        id: 2,
        titre: "2. De la convergence à la collision continentale",
        blocs: [
          {
            type: "texte",
            titre: "Une succession possible d’événements",
            texte: "Dans un scénario simplifié, un domaine océanique sépare d’abord deux continents. Une lithosphère océanique peut ensuite entrer en subduction : l’océan se rétrécit. Si la convergence se poursuit jusqu’à la rencontre des continents, une collision continentale peut se produire. Cette succession n’est pas obligatoire dans tous les contextes de convergence."
          },
          {
            type: "texte",
            titre: "Raccourcissement et épaississement",
            texte: "Lors d’une collision, les roches de la croûte continentale sont comprimées et déformées. Elles peuvent se plisser, se fracturer et se chevaucher. Un chevauchement est une structure dans laquelle un ensemble de terrains se déplace au-dessus d’un autre le long d’une faille généralement peu inclinée. L’empilement et le raccourcissement contribuent à épaissir la croûte."
          },
          {
            type: "texte",
            titre: "Transformations en profondeur",
            texte: "Les roches enfouies dans la chaîne peuvent subir un métamorphisme. Si les conditions le permettent, certaines roches peuvent aussi fondre partiellement et produire des magmas qui cristallisent notamment en profondeur. Métamorphisme et fusion sont distincts : le premier se produit essentiellement à l’état solide, tandis que la fusion produit un liquide."
          },
          {
            type: "schema",
            titre: "Un scénario simplifié de collision",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 330" role="img" aria-labelledby="ch21s1titre ch21s1desc">
              <title id="ch21s1titre">De la subduction à la collision</title>
              <desc id="ch21s1desc">Deux coupes montrent successivement la subduction d’une lithosphère océanique puis la collision de deux continents avec épaississement crustal.</desc>
              <defs>
                <marker id="ch21fleche1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <text x="200" y="25" text-anchor="middle" font-size="18">1. Subduction</text>
              <rect x="15" y="45" width="370" height="240" fill="#edd2a9"/>
              <rect x="15" y="45" width="180" height="38" fill="#cceaf5"/>
              <path d="M15 83 L180 83 Q205 90 225 115 L330 245 L305 245 L205 135 Q190 110 175 108 L15 108 Z" fill="#657d8d"/>
              <path d="M195 83 L260 83 L280 55 L300 83 L385 83 L385 110 L225 110 Z" fill="#b59e83"/>
              <text x="45" y="70" font-size="15">Océan</text>
              <text x="275" y="75" font-size="13">Volcan</text>
              <text x="185" y="280" text-anchor="middle" font-size="14">Une plaque océanique plonge</text>
              <line x1="95" y1="125" x2="150" y2="125" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche1)"/>

              <text x="600" y="25" text-anchor="middle" font-size="18">2. Collision</text>
              <rect x="415" y="45" width="370" height="240" fill="#edd2a9"/>
              <path d="M415 110 L500 110 L540 85 L565 100 L600 50 L635 100 L660 85 L700 110 L785 110 L785 150 L680 150 L650 205 L600 245 L550 205 L520 150 L415 150 Z" fill="#b59e83" stroke="#6b5947" stroke-width="2"/>
              <path d="M530 145 Q565 115 600 145 T670 145" fill="none" stroke="#6b5947" stroke-width="3"/>
              <line x1="465" y1="73" x2="515" y2="73" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche1)"/>
              <line x1="735" y1="73" x2="685" y2="73" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche1)"/>
              <text x="600" y="175" text-anchor="middle" font-size="15">Croûte épaissie</text>
              <text x="600" y="195" text-anchor="middle" font-size="15">et racine crustale</text>
              <text x="600" y="280" text-anchor="middle" font-size="14">Raccourcissement et empilement</text>
              <text x="400" y="315" text-anchor="middle" font-size="14">Coupes schématiques, sans échelle</text>
            </svg>`,
            legende: "Dans ce scénario, la fermeture d’un domaine océanique précède la collision. Les flèches indiquent le sens général de convergence."
          }
        ]
      },

      {
        id: 3,
        titre: "3. Les indices de l’histoire d’une chaîne",
        blocs: [
          {
            type: "texte",
            titre: "Indices de déformation",
            texte: "Les plis témoignent d’une déformation des couches. Les failles inverses et les chevauchements sont des indices possibles de raccourcissement. Pour les interpréter, il faut observer la géométrie des terrains et les relations entre les couches, puis les replacer dans leur contexte."
          },
          {
            type: "texte",
            titre: "Indices d’enfouissement et de température",
            texte: "Des roches métamorphiques peuvent témoigner de conditions de pression et de température différentes de celles de la surface. Certains assemblages minéraux indiquent un enfouissement important. Des roches plutoniques révèlent quant à elles la cristallisation de magmas en profondeur."
          },
          {
            type: "texte",
            titre: "Vestiges d’un ancien océan",
            texte: "Dans certaines chaînes, des ensembles de roches appelés ophiolites sont interprétés comme des fragments d’ancienne lithosphère océanique mis en place sur un continent ou intégrés à la chaîne. Ils peuvent comprendre des péridotites, des gabbros et des basaltes. Leur étude, associée à celle des autres terrains, peut contribuer à reconstituer la fermeture d’un ancien océan."
          },
          {
            type: "tableau",
            titre: "Quelques indices et leurs interprétations possibles",
            entetes: ["Observation", "Interprétation possible", "Précaution"],
            lignes: [
              ["Plis, failles inverses, chevauchements", "Déformation et raccourcissement", "Étudier la géométrie et l’âge des structures"],
              ["Roches métamorphiques", "Transformations sous certaines pressions et températures", "Analyser les assemblages minéraux"],
              ["Roches plutoniques", "Cristallisation d’un magma en profondeur", "Déterminer leur âge et leurs relations avec les terrains voisins"],
              ["Ophiolites", "Vestiges possibles d’une ancienne lithosphère océanique", "Ne pas déduire toute l’histoire de la chaîne d’un seul échantillon"]
            ]
          },
          {
            type: "texte",
            titre: "Exhumation",
            texte: "Des roches formées ou transformées en profondeur peuvent être observées en surface après leur exhumation. Celle-ci résulte de mouvements des roches vers des niveaux moins profonds, ainsi que de l’enlèvement des terrains situés au-dessus par l’érosion. Leur présence en surface ne signifie donc pas qu’elles s’y sont formées."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Érosion et évolution d’une chaîne",
        blocs: [
          {
            type: "texte",
            titre: "Altération, érosion et transport",
            texte: "À la surface, les roches de la chaîne subissent l’altération physique et chimique. L’eau, le vent, la glace et la gravité peuvent ensuite enlever et transporter les produits de cette altération : c’est l’érosion. Les matériaux transportés se déposent lorsque les conditions le permettent et forment des sédiments."
          },
          {
            type: "texte",
            titre: "Des sédiments aux roches sédimentaires",
            texte: "Les sédiments s’accumulent dans des bassins, parfois au pied des montagnes ou en mer. Au cours de leur enfouissement, la compaction et la cimentation peuvent les transformer en roches sédimentaires : cet ensemble de transformations constitue une partie de la diagenèse."
          },
          {
            type: "texte",
            titre: "L’évolution du relief",
            texte: "Une chaîne évolue par l’action conjointe des mouvements tectoniques et de l’érosion. L’érosion enlève de la matière et tend à abaisser le relief. Des ajustements de la lithosphère peuvent accompagner cette perte de charge et contribuer à l’exhumation de roches profondes. L’histoire réelle dépend du contexte et ne se réduit pas à un simple effacement uniforme."
          },
          {
            type: "texte",
            titre: "Chaînes anciennes",
            texte: "Une chaîne ancienne peut présenter des reliefs moins élevés et exposer des roches autrefois profondes. Les boucliers sont de vastes domaines continentaux où affleurent notamment des roches anciennes magmatiques et métamorphiques ; dans les plateformes, un socle ancien est recouvert par des terrains sédimentaires. Leur histoire doit être établie à partir d’observations et de datations."
          }
        ]
      },

      {
        id: 5,
        titre: "5. Le cycle de la matière du globe",
        blocs: [
          {
            type: "texte",
            titre: "Des transformations et des transferts",
            texte: "Le cycle de la matière du globe décrit les transferts et les transformations de matériaux entre la surface et l’intérieur de la Terre. Il relie les processus sédimentaires, métamorphiques et magmatiques à la tectonique. Ce cycle ne suit pas un trajet unique : une même roche peut connaître plusieurs devenirs."
          },
          {
            type: "texte",
            titre: "Quelques parcours possibles",
            texte: "Une roche exposée peut être altérée et érodée ; les sédiments produits peuvent former une roche sédimentaire. Enfouie, celle-ci peut subir un métamorphisme. Si les conditions conduisent à une fusion partielle, un magma peut se former puis cristalliser en roche magmatique. Une roche magmatique peut elle-même être érodée ou métamorphisée : les chemins sont multiples."
          },
          {
            type: "texte",
            titre: "Le rôle de la tectonique",
            texte: "Aux dorsales, le magmatisme participe à la formation de lithosphère océanique. En subduction, de la lithosphère océanique et des matériaux de surface sont transférés en profondeur ; de l’eau et certains éléments peuvent être libérés. La convergence, les collisions, les soulèvements et l’érosion participent aussi aux transferts de matière."
          },
          {
            type: "schema",
            titre: "Un parcours possible dans le cycle des roches",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 390" role="img" aria-labelledby="ch21s2titre ch21s2desc">
              <title id="ch21s2titre">Cycle simplifié des roches</title>
              <desc id="ch21s2desc">Une roche exposée produit des sédiments par altération et érosion. Ceux-ci deviennent une roche sédimentaire, puis éventuellement métamorphique. Une fusion partielle peut produire un magma qui cristallise en roche magmatique.</desc>
              <defs>
                <marker id="ch21fleche2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="285" y="15" width="230" height="48" rx="8" fill="#d8d1c6" stroke="#555"/>
              <text x="400" y="45" text-anchor="middle" font-size="17">Roche exposée</text>
              <line x1="400" y1="63" x2="400" y2="105" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="420" y="88" font-size="14">Altération, érosion, transport</text>
              <rect x="285" y="110" width="230" height="48" rx="8" fill="#eddbb7" stroke="#705b3d"/>
              <text x="400" y="140" text-anchor="middle" font-size="17">Sédiments</text>
              <line x1="400" y1="158" x2="400" y2="195" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="420" y="181" font-size="14">Enfouissement et diagenèse</text>
              <rect x="285" y="200" width="230" height="48" rx="8" fill="#dbc49e" stroke="#705b3d"/>
              <text x="400" y="230" text-anchor="middle" font-size="17">Roche sédimentaire</text>
              <line x1="285" y1="224" x2="190" y2="285" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="25" y="245" font-size="14">Métamorphisme</text>
              <rect x="25" y="290" width="230" height="48" rx="8" fill="#c8dce8" stroke="#45677d"/>
              <text x="140" y="320" text-anchor="middle" font-size="17">Roche métamorphique</text>
              <line x1="255" y1="314" x2="330" y2="314" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="265" y="300" font-size="13">Fusion partielle</text>
              <rect x="335" y="290" width="130" height="48" rx="8" fill="#efaa79" stroke="#a34f2e"/>
              <text x="400" y="320" text-anchor="middle" font-size="17">Magma</text>
              <line x1="465" y1="314" x2="545" y2="314" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="470" y="300" font-size="13">Cristallisation</text>
              <rect x="550" y="290" width="225" height="48" rx="8" fill="#c9bed0" stroke="#65556f"/>
              <text x="662" y="320" text-anchor="middle" font-size="17">Roche magmatique</text>
              <path d="M700 290 L745 100 L520 40" fill="none" stroke="#333" stroke-width="2" marker-end="url(#ch21fleche2)"/>
              <text x="650" y="195" font-size="14">Exhumation</text>
              <text x="400" y="375" text-anchor="middle" font-size="14">D’autres parcours sont possibles : ce cycle n’est pas une succession obligatoire.</text>
            </svg>`,
            legende: "Ce parcours illustre quelques transformations possibles. Il ne signifie pas que toutes les roches passent par toutes ces étapes."
          }
        ]
      },

      {
        id: 6,
        titre: "6. Reconstituer une histoire géologique",
        blocs: [
          {
            type: "texte",
            titre: "Observer avant d’interpréter",
            texte: "On commence par décrire les roches, les fossiles et les structures observés. On établit ensuite les relations entre les terrains : superposition, recoupement, déformation ou contact. Ces observations permettent de proposer un ordre relatif des événements."
          },
          {
            type: "texte",
            titre: "Confronter les indices",
            texte: "Les assemblages minéraux renseignent sur les conditions subies par les roches ; les fossiles et les faciès peuvent apporter des informations sur l’âge relatif et les milieux de dépôt ; les datations absolues permettent, lorsque les conditions sont réunies, d’estimer l’âge de certains événements. Une histoire géologique solide utilise plusieurs indices cohérents."
          },
          {
            type: "texte",
            titre: "Bilan",
            texte: "L’orogenèse construit et transforme des chaînes de montagnes, souvent dans un contexte de convergence. La déformation, le métamorphisme, le magmatisme et l’érosion y laissent des traces. À l’échelle du globe, ces processus contribuent à un cycle de transferts et de transformations de matière aux parcours variés."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Application",
        points: 4,
        enonce: "Définis l’orogenèse et cite quatre processus qui peuvent intervenir dans l’évolution d’une chaîne de montagnes.",
        correction: "L’orogenèse est l’ensemble des processus de formation et d’évolution d’une chaîne de montagnes. Parmi ces processus figurent la déformation tectonique, le métamorphisme, le magmatisme, le soulèvement et l’érosion."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Explique ce qu’est un chevauchement et indique son lien possible avec l’épaississement de la croûte.",
        correction: "Un chevauchement est le déplacement d’un ensemble de terrains au-dessus d’un autre le long d’une faille généralement peu inclinée. Lors d’une convergence, plusieurs chevauchements peuvent empiler des terrains : cet empilement contribue au raccourcissement et à l’épaississement de la croûte."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Dans une chaîne, on observe des plis, des chevauchements et des roches métamorphiques. Que suggèrent ces observations ? Pourquoi faut-il rechercher d’autres indices ?",
        correction: "Les plis et chevauchements suggèrent une déformation avec raccourcissement. Les roches métamorphiques indiquent des transformations sous des conditions de pression et de température particulières, compatibles notamment avec un enfouissement. Ces observations ne suffisent pas à dater tous les événements ni à établir seules l’histoire complète : il faut étudier les relations entre les terrains, les minéraux et, si possible, obtenir des datations."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Des péridotites, des gabbros et des basaltes sont associés dans une chaîne continentale. Propose une interprétation et précise sa limite.",
        correction: "Cet ensemble peut correspondre à une ophiolite, c’est-à-dire à un fragment d’ancienne lithosphère océanique intégré à la chaîne. Il peut donc constituer un indice d’un ancien domaine océanique. Cependant, il faut vérifier l’organisation des roches, leurs contacts et leur âge : la présence de ces noms de roches ne permet pas, à elle seule, de reconstituer toute l’histoire géologique."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Une roche métamorphique qui s’est transformée en profondeur affleure aujourd’hui au sommet d’une montagne. Explique comment cela est possible.",
        correction: "Après sa transformation en profondeur, la roche a pu être exhumée : des mouvements tectoniques l’ont amenée vers des niveaux moins profonds et l’érosion a enlevé une partie des roches situées au-dessus. Son affleurement actuel ne signifie pas que le métamorphisme a eu lieu à la surface."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Décris le devenir possible de fragments de roche arrachés à une montagne jusqu’à leur transformation en roche sédimentaire.",
        correction: "Les fragments sont produits par altération et enlevés par érosion. Ils peuvent être transportés par l’eau, la glace, le vent ou la gravité, puis déposés sous forme de sédiments. Après accumulation et enfouissement, la compaction et la cimentation peuvent former une roche sédimentaire."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Un élève affirme : « Toute roche sédimentaire devient d’abord métamorphique, puis fond et devient magmatique. » Corrige cette affirmation.",
        correction: "Ce trajet est possible dans certaines conditions, mais il n’est pas obligatoire. Une roche sédimentaire peut rester peu transformée, être soulevée puis érodée, ou subir un métamorphisme sans fondre. Les parcours du cycle des roches dépendent de l’histoire et des conditions rencontrées."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Compare le rôle d’une dorsale et celui d’une zone de subduction dans les transferts de matière du globe.",
        correction: "À une dorsale, la remontée et la fusion partielle du manteau alimentent des magmas qui participent à la formation d’une nouvelle croûte océanique. En subduction, une lithosphère océanique s’enfonce et transfère des matériaux en profondeur. Elle peut libérer de l’eau et certains éléments, favorisant notamment la formation de magmas au-dessus de la plaque plongeante."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Propose une succession possible reliant un océan ancien, une chaîne de collision et des sédiments déposés au pied de cette chaîne.",
        correction: "Un océan sépare d’abord deux continents. Une lithosphère océanique entre en subduction et le domaine océanique se rétrécit. La convergence peut ensuite conduire à la collision des continents : plis, chevauchements et épaississement crustal participent à la formation d’une chaîne. Les roches du relief sont altérées et érodées ; les produits sont transportés puis déposés au pied de la chaîne. Cette succession est un modèle possible, à vérifier par des indices et des datations."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Explique comment une roche sédimentaire peut contribuer à la formation d’une roche magmatique, puis redevenir une source de sédiments.",
        correction: "La roche sédimentaire peut être enfouie et subir un métamorphisme. Si les conditions de pression, de température et de composition permettent ensuite une fusion partielle, un magma peut se former. Sa cristallisation donne une roche magmatique. Si celle-ci est exhumée puis exposée, elle peut être altérée et érodée ; les matériaux produits pourront être transportés et déposés sous forme de nouveaux sédiments. Ce trajet est possible, mais non obligatoire."
      }
    ]
  }
]);
