enregistrerChapitres("2nde", "svt", [
  {
    id: 15,
    titre: "Chapitre 15 : Les roches sédimentaires",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. Des sédiments aux roches",
        blocs: [
          {
            type: "introduction",
            titre: "Une histoire enregistrée dans les roches",
            texte: "Certaines roches se forment à partir de matériaux déposés à la surface de la Terre ou dans l’eau. Leur étude permet de retrouver des indices sur les milieux et les événements du passé."
          },
          {
            type: "definition",
            titre: "Sédiment",
            texte: "Un sédiment est un ensemble de particules, de substances précipitées ou de restes d’organismes qui s’accumulent dans un milieu de dépôt."
          },
          {
            type: "definition",
            titre: "Roche sédimentaire",
            texte: "Une roche sédimentaire se forme par accumulation puis transformation de sédiments, ou par précipitation de substances dissoutes et accumulation de matière d’origine biologique."
          },
          {
            type: "remarque",
            titre: "Des origines diverses",
            texte: "Toutes les roches sédimentaires ne proviennent pas uniquement de grains de roches transportés. Certaines se forment surtout à partir de restes d’organismes ou de substances dissoutes dans l’eau."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Altération, érosion et transport",
        blocs: [
          {
            type: "definition",
            titre: "Altération",
            texte: "L’altération est la transformation ou la désagrégation des roches sous l’action notamment de l’eau, des variations de température et de processus chimiques ou biologiques."
          },
          {
            type: "definition",
            titre: "Érosion",
            texte: "L’érosion comprend l’usure et l’enlèvement de matériaux par des agents tels que l’eau, le vent ou la glace."
          },
          {
            type: "definition",
            titre: "Transport",
            texte: "Le transport est le déplacement des particules produites ou libérées, par exemple par une rivière, le vent, les courants marins ou la glace."
          },
          {
            type: "exemple",
            titre: "Une montagne et une rivière",
            texte: "Une roche en montagne s’altère et se fragmente. Des particules sont emportées par l’eau, transportées dans une rivière, puis déposées lorsque les conditions ne permettent plus leur transport."
          },
          {
            type: "remarque",
            titre: "Des étapes à distinguer",
            texte: "L’altération transforme ou désagrège la roche ; l’érosion enlève des matériaux ; le transport les déplace. Dans la nature, ces processus peuvent se produire ensemble."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Dépôt et diagenèse",
        blocs: [
          {
            type: "definition",
            titre: "Sédimentation",
            texte: "La sédimentation est l’accumulation de sédiments dans un milieu de dépôt, comme une rivière, un lac, un delta ou le fond d’une mer."
          },
          {
            type: "definition",
            titre: "Diagenèse",
            texte: "La diagenèse est l’ensemble des transformations qui affectent les sédiments après leur dépôt et peuvent les transformer en roche, sans qu’ils soient fondus."
          },
          {
            type: "definition",
            titre: "Compaction et cimentation",
            texte: "La compaction rapproche les grains sous le poids des dépôts sus-jacents. La cimentation correspond au dépôt de minéraux entre les grains, qui les relie et consolide le matériau."
          },
          {
            type: "exemple",
            titre: "Du sable au grès",
            texte: "Des grains de sable se déposent, puis sont recouverts par d’autres sédiments. Avec le temps, leur compaction et leur cimentation peuvent former un grès."
          },
          {
            type: "schema",
            titre: "Un exemple de formation : du sable au grès",
            svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 350' role='img' aria-label='Étapes simplifiées de formation d’un grès : altération et érosion d’une roche, transport de grains, dépôt de sable, puis compaction et cimentation.'>
              <defs>
                <marker id='fleche-ch15' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
                  <path d='M 0 0 L 10 5 L 0 10 z' fill='#49677f'/>
                </marker>
              </defs>
              <rect width='360' height='350' fill='#f8fbff'/>

              <rect x='22' y='12' width='316' height='57' rx='8' fill='#e9edf0' stroke='#718394' stroke-width='2'/>
              <text x='180' y='34' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#283e50'>Roche préexistante</text>
              <text x='180' y='55' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#283e50'>Altération et érosion</text>

              <line x1='180' y1='70' x2='180' y2='88' stroke='#49677f' stroke-width='3' marker-end='url(#fleche-ch15)'/>

              <rect x='22' y='92' width='316' height='57' rx='8' fill='#e0f1fb' stroke='#6497b7' stroke-width='2'/>
              <text x='180' y='114' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#214e6a'>Transport des particules</text>
              <text x='180' y='135' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#214e6a'>Par exemple, par une rivière</text>

              <line x1='180' y1='150' x2='180' y2='168' stroke='#49677f' stroke-width='3' marker-end='url(#fleche-ch15)'/>

              <rect x='22' y='172' width='316' height='57' rx='8' fill='#fff1cf' stroke='#b69a58' stroke-width='2'/>
              <text x='180' y='194' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#68501f'>Dépôt de sable</text>
              <text x='180' y='215' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#68501f'>Accumulation des grains</text>

              <line x1='180' y1='230' x2='180' y2='248' stroke='#49677f' stroke-width='3' marker-end='url(#fleche-ch15)'/>

              <rect x='22' y='252' width='316' height='76' rx='8' fill='#f4dfbf' stroke='#a77b4c' stroke-width='2'/>
              <text x='180' y='275' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#61401f'>Diagenèse</text>
              <text x='180' y='296' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#61401f'>Compaction et cimentation</text>
              <text x='180' y='317' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#61401f'>Grès</text>
            </svg>`,
            legende: "Ce schéma présente un exemple simplifié de formation d’une roche sédimentaire détritique. Les grains de sable déposés peuvent être compactés et cimentés pour former un grès. D’autres roches sédimentaires ont des origines différentes."
          },
          {
            type: "remarque",
            titre: "Pas toujours toutes les étapes",
            texte: "Les conditions de formation varient selon les roches. La compaction et la cimentation sont particulièrement utiles pour comprendre la consolidation de nombreux sédiments détritiques."
          }
        ]
      },
      {
        id: 4,
        titre: "4. Les grandes origines des roches sédimentaires",
        blocs: [
          {
            type: "tableau",
            titre: "Classification selon l’origine",
            entetes: ["Origine", "Formation générale", "Exemple"],
            lignes: [
              ["Détritique", "Accumulation de fragments issus de roches préexistantes.", "Grès"],
              ["Biologique ou biochimique", "Accumulation de restes d’organismes ou formation liée à leur activité.", "Certains calcaires coquilliers"],
              ["Chimique", "Précipitation de substances dissoutes dans l’eau.", "Certains dépôts de sel"]
            ]
          },
          {
            type: "remarque",
            titre: "Des situations parfois mixtes",
            texte: "Une roche peut contenir des éléments de plusieurs origines. Les classifications sont des outils pour décrire le composant ou le processus dominant."
          },
          {
            type: "exemple",
            titre: "Des calcaires variés",
            texte: "Certains calcaires contiennent de nombreux débris de coquilles ; d’autres se forment par précipitation de carbonate dans des conditions particulières. Le nom « calcaire » ne désigne donc pas une seule histoire de formation."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Les roches détritiques et la granulométrie",
        blocs: [
          {
            type: "definition",
            titre: "Granulométrie",
            texte: "La granulométrie est l’étude de la taille des particules d’un sédiment ou d’une roche détritique."
          },
          {
            type: "tableau",
            titre: "Exemples selon la taille des grains",
            entetes: ["Sédiment dominant", "Exemple de roche consolidée", "Observation générale"],
            lignes: [
              ["Gros fragments : graviers ou galets", "Conglomérat", "Fragments grossiers liés par un ciment ou une matrice."],
              ["Grains de sable", "Grès", "Grains de taille sableuse consolidés."],
              ["Particules très fines, notamment argileuses", "Roche argileuse", "Grains généralement trop petits pour être distingués à l’œil nu."]
            ]
          },
          {
            type: "remarque",
            titre: "Taille et transport",
            texte: "La taille des particules déposées dépend notamment de la capacité de transport de l’eau ou du vent. Lorsque le courant ralentit, les particules les plus grossières transportées ont souvent tendance à se déposer avant les plus fines, mais la forme et la densité des grains comptent aussi."
          },
          {
            type: "remarque",
            titre: "Conglomérat et brèche",
            texte: "Un conglomérat peut contenir des galets arrondis. Une brèche contient surtout des fragments anguleux. Leur forme fournit un indice à interpréter avec les autres observations."
          }
        ]
      },
      {
        id: 6,
        titre: "6. Quelques familles de roches sédimentaires",
        blocs: [
          {
            type: "tableau",
            titre: "Exemples à connaître",
            entetes: ["Famille", "Caractéristique générale", "Exemple ou usage"],
            lignes: [
              ["Argileuse", "Riche en particules ou minéraux argileux.", "Certaines argiles sont utilisées en poterie ou en briqueterie."],
              ["Calcaire", "Riche en carbonate de calcium, souvent sous forme de calcite.", "Construction ou fabrication de ciment selon la qualité."],
              ["Siliceuse", "Riche en silice.", "Le silex est un exemple de matériau siliceux."],
              ["Saline", "Issue notamment de la précipitation de sels dissous.", "Le sel gemme peut provenir de dépôts évaporitiques."],
              ["Carbonée", "Riche en matière contenant du carbone, souvent issue de matière organique transformée.", "Le charbon est utilisé comme combustible."]
            ]
          },
          {
            type: "remarque",
            titre: "Des tests encadrés",
            texte: "Certains calcaires riches en calcite réagissent avec un acide adapté. Ce test est réservé à un cadre scolaire ou de laboratoire sous responsabilité de l’enseignant ; il ne doit pas être réalisé chez soi."
          },
          {
            type: "remarque",
            titre: "Origine et composition",
            texte: "Une classification par composition, comme « calcaire » ou « siliceuse », ne remplace pas une classification par origine. Une roche peut être décrite selon plusieurs critères."
          }
        ]
      },
      {
        id: 7,
        titre: "7. Couches, fossiles et milieux de dépôt",
        blocs: [
          {
            type: "definition",
            titre: "Strate",
            texte: "Une strate est une couche de sédiment ou de roche sédimentaire délimitée par des surfaces qui la séparent des couches voisines."
          },
          {
            type: "definition",
            titre: "Fossile",
            texte: "Un fossile est un reste d’organisme ancien ou une trace de son activité conservé dans des matériaux géologiques."
          },
          {
            type: "exemple",
            titre: "Un indice de milieu",
            texte: "La présence de fossiles d’organismes marins dans une roche peut indiquer qu’un milieu marin existait à cet endroit lors du dépôt. L’interprétation dépend toutefois de l’état des fossiles et de leur contexte."
          },
          {
            type: "remarque",
            titre: "Une histoire à reconstituer",
            texte: "L’ordre des couches, la taille des grains et les fossiles sont des indices. Ils doivent être étudiés ensemble, car les couches peuvent avoir été déplacées ou déformées après leur formation."
          }
        ]
      },
      {
        id: 8,
        titre: "8. Madagascar : répartition et utilisations",
        blocs: [
          {
            type: "introduction",
            titre: "Des bassins sédimentaires",
            texte: "À Madagascar, des roches sédimentaires se rencontrent notamment dans les grands bassins de l’ouest de l’île. Elles témoignent d’histoires de dépôt différentes selon les régions et les périodes."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "Des formations calcaires sont présentes notamment dans l’ouest de Madagascar, comme dans la région du Bemaraha. Des formations gréseuses et argileuses existent également dans différentes zones des bassins sédimentaires."
          },
          {
            type: "exemple",
            titre: "Utilisations",
            texte: "Selon leur qualité, leur accessibilité et les techniques disponibles, des roches ou matériaux sédimentaires peuvent servir à la construction, à la fabrication de briques ou de ciment, ou à d’autres usages."
          },
          {
            type: "regle",
            titre: "Sécurité et protection",
            texte: "Les carrières, falaises et grottes peuvent être dangereuses et certains sites sont protégés. Ne prélève pas de roche ou de fossile sans autorisation et ne visite pas ces lieux sans encadrement adapté."
          }
        ]
      },
      {
        id: 9,
        titre: "9. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Formation",
            texte: "L’altération produit ou libère des matériaux ; l’érosion les enlève ; le transport les déplace ; la sédimentation les accumule. La diagenèse peut ensuite transformer les dépôts en roche."
          },
          {
            type: "rappel",
            titre: "Diversité",
            texte: "Les roches sédimentaires peuvent être détritiques, biologiques ou biochimiques, ou chimiques. On peut aussi les décrire par leur composition ou la taille de leurs grains."
          },
          {
            type: "rappel",
            titre: "Indices",
            texte: "Les strates, les fossiles et les caractéristiques des grains fournissent des indices sur les anciens milieux de dépôt."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis une roche sédimentaire et cite un exemple.",
        correction: "Une roche sédimentaire se forme par accumulation et transformation de sédiments, ou par des processus de précipitation et d’accumulation biologique. Le grès est un exemple."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Range les étapes suivantes dans un ordre général de formation d’une roche détritique : dépôt, transport, altération de la roche, diagenèse, érosion.",
        correction: "Un ordre général est : altération de la roche → érosion et enlèvement → transport → dépôt ou sédimentation → diagenèse."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Des grains de sable sont déposés, recouverts par d’autres sédiments, puis consolidés par compaction et cimentation. Quelle roche peuvent-ils former ? Explique le rôle du ciment.",
        correction: "Ils peuvent former un grès. Le ciment correspond à des minéraux déposés entre les grains ; il les relie et consolide le matériau."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une roche contient de nombreux débris de coquilles d’organismes anciens. Une autre est formée surtout de grains issus de roches préexistantes. Indique l’origine générale de chacune.",
        correction: "La première a une origine biologique ou biochimique dominante. La seconde a une origine détritique."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une rivière transporte des graviers, du sable et des particules fines. Dans une zone où le courant ralentit fortement, une partie des matériaux se dépose. 1. Quel phénomène est observé ? 2. Quelles particules ont souvent tendance à se déposer en premier ? 3. Cite deux facteurs autres que la taille qui peuvent influencer le dépôt.",
        correction: "1. Il s’agit de la sédimentation. 2. Les particules les plus grossières transportées ont souvent tendance à se déposer avant les plus fines lorsque le courant ralentit. 3. La forme et la densité des particules, ainsi que les conditions du courant, influencent aussi le dépôt."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roche contient des fossiles d’organismes marins. Elle se trouve aujourd’hui loin de la mer. 1. Que suggèrent ces fossiles sur le milieu de dépôt ? 2. Pourquoi la position actuelle ne suffit-elle pas à connaître le milieu ancien ? 3. Donne un autre indice géologique utile.",
        correction: "1. Ils suggèrent qu’un milieu marin existait lors du dépôt, sous réserve d’étudier leur contexte. 2. Les milieux et les terrains ont pu changer depuis la formation de la roche ; la position actuelle ne correspond pas nécessairement au milieu ancien. 3. Les strates, la taille des grains ou la composition de la roche sont d’autres indices utiles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Toutes les roches sédimentaires sont des grès formés à partir de sable. » Corrige cette affirmation en donnant deux exemples de roches ou dépôts sédimentaires d’origine différente.",
        correction: "Les grès ne représentent qu’une partie des roches sédimentaires. Par exemple, un calcaire coquillier peut se former à partir de restes d’organismes, et certains dépôts de sel se forment par précipitation de substances dissoutes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roche A contient des grains de sable cimentés. Une roche B contient de nombreux fragments de coquilles. Une roche C provient de la précipitation de sels dissous lors de l’évaporation d’une eau. 1. Classe les trois roches selon leur origine dominante. 2. Propose un nom pour A. 3. Explique pourquoi une classification par origine et une classification par composition peuvent se compléter.",
        correction: "1. A est détritique ; B est biologique ou biochimique ; C est chimique. 2. A est un grès. 3. L’origine décrit le processus principal de formation, tandis que la composition indique la nature des constituants. Une même roche peut être décrite selon les deux critères."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une classe observe des couches de grès et de calcaire contenant des fossiles marins dans une région aujourd’hui continentale. Un élève affirme : « Ces roches se sont forcément formées par solidification d’une lave, et les fossiles prouvent que la mer est encore présente sous le sol. » 1. Corrige ses deux erreurs. 2. Explique une formation possible du grès. 3. Indique ce que les fossiles peuvent suggérer. 4. Cite une précaution à prendre dans l’interprétation.",
        correction: "1. Le grès et le calcaire sont des roches sédimentaires, pas nécessairement issues d’une lave. Les fossiles ne prouvent pas qu’une mer est actuellement présente sous le sol. 2. Des grains de sable ont pu être déposés puis compactés et cimentés. 3. Les fossiles peuvent indiquer un ancien milieu marin lors du dépôt. 4. Il faut étudier leur contexte, l’état des fossiles et l’organisation des couches, qui ont pu être déformées ou déplacées."
      }
    ]
  }
]);
