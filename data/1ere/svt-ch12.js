enregistrerChapitres("1ere", "svt", [
  {
    id: 12,
    titre: "Chapitre 12 : Les déformations tectoniques : plis et failles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les roches peuvent se déformer",
        blocs: [
          {
            type: "introduction",
            titre: "Des couches qui ne sont plus horizontales",
            texte: "Dans un paysage géologique, des couches sédimentaires peuvent être inclinées, courbées ou coupées par des fractures. Ces dispositions témoignent souvent de déformations intervenues après leur dépôt. La tectonique étudie notamment ces déformations et les mouvements qui les produisent."
          },
          {
            type: "definition",
            titre: "Contrainte et déformation",
            texte: "Une contrainte est une action mécanique exercée sur un matériau. Une déformation est le changement de forme, de volume ou de position qui en résulte. Dans la croûte terrestre, les roches peuvent notamment être soumises à des contraintes de compression, d’extension ou de cisaillement."
          },
          {
            type: "tableau",
            titre: "Trois types de contraintes simplifiées",
            entetes: ["Contrainte", "Action générale", "Structure possible"],
            lignes: [
              ["Compression", "Rapprochement de parties de la croûte : raccourcissement.", "Plis ou failles inverses."],
              ["Extension", "Éloignement de parties de la croûte : étirement.", "Failles normales."],
              ["Cisaillement", "Déplacement relatif de parties voisines dans des sens différents.", "Décrochements et autres déformations."]
            ]
          },
          {
            type: "definition",
            titre: "Comportement cassant et comportement ductile",
            texte: "Une roche a un comportement cassant lorsqu’elle se fracture. Elle a un comportement ductile lorsqu’elle se déforme de manière durable sans rupture visible à l’échelle considérée. Ce comportement dépend notamment de la température, de la pression, de la nature de la roche et de la durée de la déformation."
          },
          {
            type: "remarque",
            titre: "Une simplification utile",
            texte: "Les failles sont associées à des ruptures et les plis à une courbure des couches. Dans la nature, une même région peut présenter à la fois des plis et des fractures. La présence d’un pli ne signifie pas que toutes les roches se sont comportées de manière parfaitement ductile."
          }
        ]
      },

      {
        id: 2,
        titre: "Les plis",
        blocs: [
          {
            type: "definition",
            titre: "Pli",
            texte: "Un pli est une courbure de couches rocheuses initialement plus ou moins planes. Les plis se forment souvent dans un contexte de raccourcissement, lorsque les roches se déforment progressivement sous l’effet de contraintes."
          },
          {
            type: "definition",
            titre: "Éléments d’un pli",
            texte: "La charnière est la zone où la courbure d’une couche est la plus marquée. Les flancs sont les parties situées de part et d’autre de la charnière. Le plan axial est une surface idéale passant approximativement par les charnières des différentes couches d’un même pli."
          },
          {
            type: "definition",
            titre: "Anticlinal et synclinal",
            texte: "Dans une série sédimentaire dont l’ordre est connu, un anticlinal présente les couches les plus anciennes au cœur du pli. Un synclinal présente les couches les plus récentes au cœur. Dans le cas simple d’une série non renversée, l’anticlinal forme souvent une voûte et le synclinal un creux."
          },
          {
            type: "schema",
            titre: "Anticlinal et synclinal simples",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 290" role="img" aria-labelledby="svt12s1t svt12s1d">
  <title id="svt12s1t">Pli anticlinal et pli synclinal</title>
  <desc id="svt12s1d">À gauche, des couches forment une voûte anticlinale. À droite, elles forment un creux synclinal. Les zones de courbure maximale sont les charnières.</desc>
  <defs><marker id="svt12a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="720" height="290" fill="#fff"/>
  <text x="180" y="30" text-anchor="middle" font-size="18">Anticlinal simple</text>
  <text x="540" y="30" text-anchor="middle" font-size="18">Synclinal simple</text>
  <path d="M30 200 Q180 30 330 200 M30 225 Q180 55 330 225 M30 250 Q180 80 330 250" fill="none" stroke="#8b654b" stroke-width="5"/>
  <path d="M390 90 Q540 260 690 90 M390 115 Q540 285 690 115 M390 140 Q540 310 690 140" fill="none" stroke="#527b95" stroke-width="5"/>
  <path d="M180 50 L180 100" stroke="#444" stroke-width="2" marker-end="url(#svt12a1)"/>
  <text x="200" y="65" font-size="14">Charnière</text>
  <text x="68" y="155" font-size="14">Flanc</text>
  <text x="257" y="155" font-size="14">Flanc</text>
  <text x="540" y="275" text-anchor="middle" font-size="14">Charnière au fond du pli</text>
</svg>`,
            legende: "Schémas simplifiés de couches non renversées. L’âge des couches au cœur reste le critère pour distinguer anticlinal et synclinal."
          },
          {
            type: "remarque",
            titre: "Forme et âge des couches",
            texte: "Un pli peut être incliné ou renversé. Dans une structure complexe, une forme qui ressemble à une voûte ou à un creux ne suffit donc pas toujours à identifier un anticlinal ou un synclinal. Il faut déterminer l’ordre et l’âge relatif des couches."
          },
          {
            type: "definition",
            titre: "Quelques formes de plis",
            texte: "Un pli droit possède un plan axial approximativement vertical. Un pli déjeté possède un plan axial incliné. Dans un pli renversé, un flanc a basculé au point que l’ordre initial des couches y est inversé. Ces termes décrivent la géométrie du pli."
          }
        ]
      },

      {
        id: 3,
        titre: "Les failles",
        blocs: [
          {
            type: "definition",
            titre: "Faille",
            texte: "Une faille est une fracture des roches accompagnée d’un déplacement relatif des deux compartiments situés de part et d’autre. La surface sur laquelle s’effectue le déplacement est appelée plan de faille."
          },
          {
            type: "definition",
            titre: "Toit et mur",
            texte: "Pour une faille inclinée, le compartiment situé au-dessus du plan de faille est appelé le toit. Celui situé au-dessous est appelé le mur. Ces termes décrivent leur position par rapport au plan, et non leur altitude dans le paysage."
          },
          {
            type: "definition",
            titre: "Faille normale",
            texte: "Dans une faille normale, le toit s’est abaissé par rapport au mur. Ce type de faille est généralement associé à une extension de la croûte."
          },
          {
            type: "definition",
            titre: "Faille inverse",
            texte: "Dans une faille inverse, le toit s’est élevé par rapport au mur. Ce type de faille est généralement associé à une compression et à un raccourcissement."
          },
          {
            type: "definition",
            titre: "Décrochement",
            texte: "Un décrochement est une faille dont le déplacement est principalement horizontal. Selon le sens du mouvement relatif observé, on distingue des décrochements dextres et sénestres."
          },
          {
            type: "schema",
            titre: "Mouvement relatif sur une faille inclinée",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" role="img" aria-labelledby="svt12s2t svt12s2d">
  <title id="svt12s2t">Faille normale et faille inverse</title>
  <desc id="svt12s2d">Dans les deux dessins, le plan de faille descend vers la droite. Le toit est à droite du plan. Il s'abaisse dans la faille normale et s'élève dans la faille inverse, par rapport au mur.</desc>
  <defs><marker id="svt12a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="300" fill="#fff"/>
  <text x="180" y="30" text-anchor="middle" font-size="18">Faille normale</text>
  <text x="540" y="30" text-anchor="middle" font-size="18">Faille inverse</text>
  <rect x="30" y="60" width="300" height="185" fill="#f3ead8" stroke="#765"/>
  <path d="M130 60 L230 245" stroke="#333" stroke-width="4"/>
  <path d="M30 120 L162 120 M30 155 L181 155 M182 155 L330 155 M201 190 L330 190" stroke="#527b95" stroke-width="4"/>
  <text x="70" y="85" font-size="15">Mur</text>
  <text x="265" y="85" font-size="15">Toit</text>
  <path d="M285 105 L285 145" stroke="#a33" stroke-width="3" marker-end="url(#svt12a2)"/>
  <rect x="390" y="60" width="300" height="185" fill="#f3ead8" stroke="#765"/>
  <path d="M490 60 L590 245" stroke="#333" stroke-width="4"/>
  <path d="M390 155 L541 155 M390 190 L560 190 M522 120 L690 120 M541 155 L690 155" stroke="#527b95" stroke-width="4"/>
  <text x="430" y="85" font-size="15">Mur</text>
  <text x="625" y="85" font-size="15">Toit</text>
  <path d="M645 145 L645 105" stroke="#a33" stroke-width="3" marker-end="url(#svt12a2)"/>
  <text x="360" y="280" text-anchor="middle" font-size="14">Les flèches indiquent le mouvement du toit par rapport au mur.</text>
</svg>`,
            legende: "Les traits bleus représentent des couches décalées. Les dessins montrent seulement la composante verticale simplifiée du mouvement."
          },
          {
            type: "remarque",
            titre: "Fracture et faille",
            texte: "Une fracture sans déplacement observable est souvent appelée diaclase. Pour identifier une faille, on recherche un déplacement relatif, par exemple le décalage d’une couche ou d’un filon de part et d’autre de la fracture."
          }
        ]
      },

      {
        id: 4,
        titre: "Systèmes de failles et styles tectoniques",
        blocs: [
          {
            type: "definition",
            titre: "Système de failles",
            texte: "Un système de failles est un ensemble de failles associées dans une région. Leur disposition et leurs déplacements permettent d’étudier la manière dont la région s’est déformée."
          },
          {
            type: "definition",
            titre: "Horst et graben",
            texte: "Dans un contexte d’extension, plusieurs failles normales peuvent délimiter des compartiments. Un graben est un compartiment relativement abaissé entre des failles ; un horst est un compartiment relativement surélevé par rapport aux compartiments voisins."
          },
          {
            type: "schema",
            titre: "Compartiment abaissé entre deux failles",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 280" role="img" aria-labelledby="svt12s3t svt12s3d">
  <title id="svt12s3t">Graben simplifié</title>
  <desc id="svt12s3d">Deux failles normales délimitent un compartiment central abaissé par rapport aux côtés. Ce compartiment forme un graben.</desc>
  <defs><marker id="svt12a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="700" height="280" fill="#fff"/>
  <path d="M30 100 L240 100 L280 145 L420 145 L460 100 L670 100 L670 230 L30 230 Z" fill="#e8dba9" stroke="#765" stroke-width="2"/>
  <path d="M240 100 L340 230 M460 100 L360 230" stroke="#333" stroke-width="4"/>
  <path d="M30 145 L275 145 M425 145 L670 145 M30 180 L302 180 M398 180 L670 180" stroke="#527b95" stroke-width="4"/>
  <path d="M70 60 L25 60 M630 60 L675 60" stroke="#a33" stroke-width="3" marker-end="url(#svt12a3)"/>
  <text x="350" y="175" text-anchor="middle" font-size="17">Graben</text>
  <text x="350" y="197" text-anchor="middle" font-size="14">compartiment abaissé</text>
  <text x="350" y="265" text-anchor="middle" font-size="14">Extension représentée par les flèches rouges</text>
</svg>`,
            legende: "Schéma simplifié en coupe : le graben est abaissé relativement aux compartiments qui l’encadrent."
          },
          {
            type: "definition",
            titre: "Style tectonique",
            texte: "Le style tectonique désigne l’aspect général des structures d’une région et leur association : plis, failles, chevauchements ou autres déformations. Il dépend notamment des contraintes, de la nature des roches et des conditions de leur déformation."
          },
          {
            type: "exemple",
            titre: "Deux styles simplifiés",
            texte: "Une région en extension peut présenter de nombreuses failles normales et des compartiments abaissés. Une région en compression peut présenter des plis, des failles inverses et des chevauchements. Dans une région réelle, plusieurs épisodes de déformation peuvent se superposer."
          },
          {
            type: "definition",
            titre: "Chevauchement",
            texte: "Un chevauchement est une faille inverse généralement peu inclinée, sur laquelle un ensemble de roches se déplace au-dessus d’un autre. Il peut placer des roches anciennes au-dessus de roches plus récentes et compliquer l’application directe du principe de superposition."
          }
        ]
      },

      {
        id: 5,
        titre: "La microtectonique : de petits indices de déformation",
        blocs: [
          {
            type: "definition",
            titre: "Microtectonique",
            texte: "La microtectonique étudie les petites structures de déformation visibles dans une roche, sur un affleurement ou parfois au microscope. Ces structures complètent l’étude des grands plis et des grandes failles."
          },
          {
            type: "tableau",
            titre: "Exemples d’indices",
            entetes: ["Indice", "Observation", "Information possible"],
            lignes: [
              ["Petite faille", "Décalage d’un petit niveau ou d’un filon.", "Indique un déplacement relatif local."],
              ["Stries sur un plan de faille", "Lignes ou traces sur une surface de glissement.", "Renseignent sur la direction du glissement ; d’autres indices sont nécessaires pour son sens."],
              ["Plis de petite taille", "Courbure de niveaux minces.", "Témoignent d’une déformation locale."],
              ["Fissures et veines", "Fractures parfois remplies de minéraux.", "Peuvent renseigner sur la fracturation et la circulation de fluides."]
            ]
          },
          {
            type: "methode",
            titre: "Étudier un affleurement",
            texte: "1. Décrire les couches et les fractures sans interpréter trop vite. 2. Repérer les décalages et les éventuelles stries. 3. Mesurer ou noter l’orientation des structures si le matériel est disponible. 4. Comparer plusieurs observations. 5. Proposer une histoire et préciser les incertitudes."
          },
          {
            type: "remarque",
            titre: "Direction et sens",
            texte: "Une strie peut indiquer la direction d’un déplacement sur un plan de faille, mais elle ne permet pas toujours, à elle seule, de savoir dans quel sens un compartiment s’est déplacé. Des marqueurs décalés ou d’autres indices sont nécessaires."
          }
        ]
      },

      {
        id: 6,
        titre: "Établir la chronologie des déformations",
        blocs: [
          {
            type: "regle",
            titre: "Principe de recoupement",
            texte: "Une faille est plus récente que les structures qu’elle recoupe. De même, une surface d’érosion est postérieure aux roches qu’elle coupe et antérieure aux dépôts qui la recouvrent."
          },
          {
            type: "exemple",
            titre: "Couches plissées puis recouvertes",
            texte: "Des couches A et B sont plissées, puis coupées par une surface d’érosion. Une couche C horizontale repose sur cette surface. L’ordre proposé est : dépôt de A et B, plissement, érosion, puis dépôt de C."
          },
          {
            type: "exemple",
            titre: "Une faille qui s’arrête sous une couche",
            texte: "Si une faille coupe A et B mais s’arrête à une surface d’érosion sur laquelle repose C, on peut proposer l’ordre suivant : dépôt de A et B, mouvement sur la faille, érosion, puis dépôt de C. Cette interprétation suppose que les relations sont clairement observées."
          },
          {
            type: "remarque",
            titre: "Une faille peut rejouer",
            texte: "Une faille peut connaître plusieurs épisodes de mouvement. Une couche qui recouvre une ancienne faille peut elle-même être coupée si cette faille se réactive plus tard. L’histoire doit être construite à partir des observations de l’affleurement étudié."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les contraintes tectoniques déforment les roches. Les plis courbent les couches ; les failles les fracturent avec déplacement. Les failles normales sont généralement associées à l’extension, les failles inverses à la compression et les décrochements à un déplacement surtout horizontal. L’étude des structures, grandes et petites, permet de proposer une chronologie et un style tectonique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir une faille. Quelle différence fait-on entre une faille et une fracture sans déplacement observable ?",
        correction: "Une faille est une fracture accompagnée d’un déplacement relatif des compartiments situés de part et d’autre. Une fracture sans déplacement observable est souvent appelée diaclase. Le décalage d’une couche peut aider à reconnaître une faille."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Dans une faille inclinée, le toit s’est abaissé par rapport au mur. Quel est le type de faille ? À quel contexte est-il généralement associé ?",
        correction: "Il s’agit d’une faille normale. Elle est généralement associée à une extension de la croûte. Le toit est le compartiment situé au-dessus du plan de faille ; le mur est situé au-dessous."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Le toit d’une faille s’est élevé par rapport au mur. Nommer le type de faille et le contexte général de déformation.",
        correction: "Il s’agit d’une faille inverse. Elle est généralement associée à une compression et à un raccourcissement."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Qu’est-ce qu’un décrochement ? En quoi son déplacement principal diffère-t-il de celui représenté dans les schémas simplifiés de failles normales et inverses ?",
        correction: "Un décrochement est une faille dont le déplacement est principalement horizontal. Dans les schémas simplifiés de failles normales et inverses, on insiste sur le mouvement vertical relatif du toit par rapport au mur."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Au cœur d’un pli, on trouve les couches les plus anciennes de la série. S’agit-il d’un anticlinal ou d’un synclinal ? Pourquoi la seule forme de la courbure peut-elle être trompeuse ?",
        correction: "Il s’agit d’un anticlinal : les couches les plus anciennes se trouvent au cœur. La forme seule peut être trompeuse car le pli peut être incliné ou renversé. Il faut donc connaître l’ordre et l’âge relatif des couches."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Définir la charnière et les flancs d’un pli.",
        correction: "La charnière est la zone où la courbure d’une couche est la plus marquée. Les flancs sont les parties du pli situées de part et d’autre de cette charnière."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une région présente plusieurs failles normales délimitant un compartiment central abaissé. Comment appelle-t-on ce compartiment ? Quel contexte tectonique peut-on proposer ?",
        correction: "Le compartiment central abaissé est un graben. L’association de failles normales et d’un graben suggère un contexte d’extension. Il faut toutefois examiner d’autres indices pour reconstituer l’histoire complète de la région."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un géologue observe des stries sur un plan de faille. Peut-il toujours déterminer le sens du déplacement avec les seules stries ?",
        correction: "Non. Les stries peuvent renseigner sur la direction du glissement, mais elles ne donnent pas toujours son sens à elles seules. Le géologue doit rechercher d’autres indices, par exemple le décalage d’une couche ou d’un filon."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Les couches A et B sont plissées puis coupées par une surface d’érosion. La couche C, horizontale, repose sur cette surface. Établir un ordre des événements, en supposant A plus ancienne que B.",
        correction: "D’abord, A se dépose, puis B. Les deux couches sont ensuite plissées. Une érosion coupe les couches plissées et forme une surface. Enfin, C se dépose sur cette surface. L’ordre est donc : A, B, plissement, érosion, C."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève observe des plis et affirme qu’aucune fracture ne peut exister dans la région. Expliquer pourquoi cette conclusion est trop rapide.",
        correction: "Une même région peut présenter à la fois des plis et des fractures. Les roches n’ont pas toutes la même composition et peuvent se déformer différemment selon les conditions et les épisodes tectoniques. Il faut observer l’ensemble des structures avant de conclure."
      }
    ]
  }
]);
