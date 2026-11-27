enregistrerChapitres("1ere", "svt", [
  {
    id: 19,
    titre: "Chapitre 19 : Le magmatisme volcanique et plutonique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. Magma et magmatisme",
        blocs: [
          {
            type: "texte",
            titre: "Qu’est-ce qu’un magma ?",
            texte: "Un magma est un mélange de roche fondue, de cristaux déjà formés et de gaz dissous. Il se forme en profondeur par fusion partielle de roches. Sa composition dépend notamment de la roche qui fond et des conditions de fusion. Le magmatisme comprend la formation, la remontée, le stockage et le refroidissement des magmas."
          },
          {
            type: "texte",
            titre: "Fusion partielle",
            texte: "Lors d’une fusion partielle, seule une partie de la roche fond. Le liquide produit n’a pas nécessairement la même composition que la roche initiale, car tous les minéraux ne fondent pas dans les mêmes conditions. Le résidu solide et le liquide peuvent ensuite évoluer séparément."
          },
          {
            type: "texte",
            titre: "Magma, lave et roche magmatique",
            texte: "En profondeur, on parle de magma. Lorsque le magma atteint la surface, le matériau émis est appelé lave ; une partie des gaz s’échappe lors de l’éruption. Le refroidissement et la solidification du magma ou de la lave donnent des roches magmatiques."
          }
        ]
      },

      {
        id: 2,
        titre: "2. Comment les roches fondent-elles partiellement ?",
        blocs: [
          {
            type: "texte",
            titre: "L’effet de la température et de la pression",
            texte: "Une roche commence à fondre lorsque les conditions de température et de pression franchissent sa limite de fusion, appelée solidus. Cette limite varie selon la composition de la roche et la présence de fluides. Une hausse de température peut provoquer la fusion partielle. Une baisse de pression peut également la provoquer : une roche chaude qui remonte peut franchir son solidus sans apport important de chaleur."
          },
          {
            type: "texte",
            titre: "Le rôle de l’eau",
            texte: "L’eau peut abaisser la température de début de fusion de certaines roches. Dans une zone de subduction, des minéraux hydratés de la plaque plongeante libèrent de l’eau en profondeur. Cette eau favorise la fusion partielle du manteau situé au-dessus de la plaque."
          },
          {
            type: "tableau",
            titre: "Trois façons de favoriser la fusion partielle",
            entetes: ["Changement", "Principe", "Exemple de contexte"],
            lignes: [
              ["Augmentation de température", "La roche atteint une température suffisante pour commencer à fondre", "Certaines roches de la croûte chauffées en profondeur"],
              ["Diminution de pression", "Une roche chaude remonte et franchit sa limite de fusion", "Remontée du manteau sous une dorsale"],
              ["Ajout d’eau", "L’eau abaisse le solidus de certaines roches", "Manteau au-dessus d’une plaque en subduction"]
            ]
          },
          {
            type: "texte",
            titre: "À ne pas confondre",
            texte: "L’augmentation de température seule ne résume pas tous les cas de fusion. À une dorsale, la décompression du manteau chaud joue un rôle majeur. En subduction, l’apport d’eau joue un rôle important. Il faut toujours considérer les conditions et la composition de la roche."
          }
        ]
      },

      {
        id: 3,
        titre: "3. Magmatisme volcanique et plutonique",
        blocs: [
          {
            type: "texte",
            titre: "Le magmatisme volcanique",
            texte: "Si le magma atteint la surface, une éruption peut émettre de la lave, des gaz et des fragments de roche. La lave refroidit généralement rapidement au contact de l’air ou de l’eau. Elle forme une roche volcanique, par exemple le basalte ou l’andésite."
          },
          {
            type: "texte",
            titre: "Le magmatisme plutonique",
            texte: "Si le magma refroidit et cristallise en profondeur, il forme une roche plutonique. Le refroidissement y est généralement plus lent qu’en surface, ce qui laisse davantage de temps aux cristaux pour grandir. Une masse de roche magmatique formée en profondeur est une intrusion ; le granite et le gabbro sont des exemples de roches plutoniques."
          },
          {
            type: "schema",
            titre: "Deux devenirs possibles d’un magma",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 360" role="img" aria-labelledby="ch19s1titre ch19s1desc">
              <title id="ch19s1titre">Magmatisme volcanique et plutonique</title>
              <desc id="ch19s1desc">Une partie du magma atteint la surface et forme une roche volcanique ; une autre cristallise lentement en profondeur et forme une roche plutonique.</desc>
              <defs>
                <marker id="ch19fleche1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="0" y="145" width="780" height="215" fill="#e7dac4"/>
              <path d="M0 145 L215 145 L270 75 L325 145 L780 145" fill="none" stroke="#73583e" stroke-width="4"/>
              <path d="M261 92 L270 75 L280 92" fill="#e55335"/>
              <path d="M270 145 L270 105" stroke="#d94c31" stroke-width="12"/>
              <path d="M270 145 Q275 200 350 240" fill="none" stroke="#d94c31" stroke-width="12"/>
              <ellipse cx="390" cy="265" rx="105" ry="50" fill="#e27042" stroke="#9e3c24" stroke-width="3"/>
              <path d="M470 245 Q550 195 625 225 Q665 245 650 285 Q610 320 515 300 Q475 285 470 245 Z" fill="#b9aec3" stroke="#65556f" stroke-width="3"/>
              <text x="390" y="271" text-anchor="middle" font-size="18">Magma</text>
              <text x="605" y="259" text-anchor="middle" font-size="17">Intrusion</text>
              <text x="605" y="280" text-anchor="middle" font-size="17">plutonique</text>
              <text x="90" y="45" font-size="17">Lave en surface</text>
              <line x1="195" y1="49" x2="260" y2="77" stroke="#333" stroke-width="2" marker-end="url(#ch19fleche1)"/>
              <text x="35" y="183" font-size="16">Refroidissement rapide</text>
              <text x="35" y="205" font-size="16">→ roche volcanique</text>
              <text x="545" y="98" font-size="16">Refroidissement lent</text>
              <text x="545" y="120" font-size="16">→ roche plutonique</text>
              <line x1="625" y1="128" x2="620" y2="220" stroke="#333" stroke-width="2" marker-end="url(#ch19fleche1)"/>
            </svg>`,
            legende: "Schéma simplifié, sans échelle. Un même système magmatique peut alimenter une éruption et des intrusions en profondeur."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Texture et identification des roches magmatiques",
        blocs: [
          {
            type: "texte",
            titre: "La texture d’une roche",
            texte: "La texture décrit la taille, la forme et l’organisation des constituants d’une roche. Elle renseigne sur les conditions de refroidissement. La composition minéralogique et chimique fournit d’autres indices nécessaires à l’identification."
          },
          {
            type: "texte",
            titre: "Texture grenue",
            texte: "Une roche à texture grenue est entièrement cristallisée et présente des cristaux généralement visibles à l’œil nu. Cette texture est caractéristique d’un refroidissement lent en profondeur. Le granite et le gabbro présentent habituellement une texture grenue."
          },
          {
            type: "texte",
            titre: "Texture microlitique et verre",
            texte: "Une roche à texture microlitique contient de très petits cristaux, appelés microlites, souvent inclus dans une pâte pouvant comporter du verre volcanique. Elle peut aussi contenir de plus gros cristaux formés avant l’éruption. Le verre correspond à une matière solidifiée sans organisation cristalline complète. Le basalte et l’andésite présentent fréquemment une texture microlitique."
          },
          {
            type: "schema",
            titre: "Comparer deux textures",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 270" role="img" aria-labelledby="ch19s2titre ch19s2desc">
              <title id="ch19s2titre">Textures grenue et microlitique</title>
              <desc id="ch19s2desc">La texture grenue présente de gros cristaux jointifs ; la texture microlitique montre de petits cristaux dans une pâte, avec parfois un gros cristal.</desc>
              <text x="190" y="28" text-anchor="middle" font-size="19">Texture grenue</text>
              <rect x="35" y="45" width="310" height="170" fill="#ddd" stroke="#333" stroke-width="2"/>
              <path d="M35 45 L125 45 L145 100 L90 135 L35 115 Z" fill="#efdfc2" stroke="#555"/>
              <path d="M125 45 L230 45 L210 110 L145 100 Z" fill="#bbb" stroke="#555"/>
              <path d="M230 45 L345 45 L345 120 L270 130 L210 110 Z" fill="#f4f1eb" stroke="#555"/>
              <path d="M35 115 L90 135 L115 215 L35 215 Z" fill="#777" stroke="#555"/>
              <path d="M90 135 L145 100 L210 110 L225 170 L180 215 L115 215 Z" fill="#f7f2e8" stroke="#555"/>
              <path d="M210 110 L270 130 L345 120 L345 215 L180 215 L225 170 Z" fill="#c9b9aa" stroke="#555"/>
              <text x="190" y="248" text-anchor="middle" font-size="16">Cristaux visibles et jointifs</text>

              <text x="570" y="28" text-anchor="middle" font-size="19">Texture microlitique</text>
              <rect x="415" y="45" width="310" height="170" fill="#777c80" stroke="#333" stroke-width="2"/>
              <g stroke="#eee" stroke-width="4">
                <line x1="440" y1="75" x2="460" y2="68"/>
                <line x1="485" y1="95" x2="504" y2="102"/>
                <line x1="540" y1="72" x2="559" y2="80"/>
                <line x1="620" y1="80" x2="642" y2="73"/>
                <line x1="675" y1="105" x2="696" y2="113"/>
                <line x1="448" y1="170" x2="469" y2="160"/>
                <line x1="505" y1="190" x2="525" y2="195"/>
                <line x1="620" y1="174" x2="641" y2="181"/>
                <line x1="670" y1="185" x2="691" y2="176"/>
              </g>
              <polygon points="535,120 570,105 600,127 590,158 550,162" fill="#ded4be" stroke="#333" stroke-width="2"/>
              <text x="570" y="248" text-anchor="middle" font-size="16">Microlites, pâte et parfois gros cristal</text>
            </svg>`,
            legende: "Les tailles sont volontairement grossies. Une texture renseigne sur le refroidissement, mais l’identification exige aussi l’étude des minéraux."
          },
          {
            type: "tableau",
            titre: "Quelques roches magmatiques",
            entetes: ["Roche", "Type", "Texture habituelle", "Minéraux ou caractères fréquents"],
            lignes: [
              ["Basalte", "Volcanique", "Microlitique", "Plagioclases et pyroxènes ; parfois olivine"],
              ["Gabbro", "Plutonique", "Grenue", "Plagioclases et pyroxènes ; parfois olivine"],
              ["Andésite", "Volcanique", "Souvent microlitique", "Plagioclases et autres minéraux variables"],
              ["Granite", "Plutonique", "Grenue", "Quartz, feldspaths et micas"]
            ]
          },
          {
            type: "texte",
            titre: "Basalte et gabbro",
            texte: "Le basalte et le gabbro ont souvent des compositions minéralogiques proches, mais des textures différentes. Le basalte refroidit rapidement en surface ou près de celle-ci ; le gabbro cristallise plus lentement en profondeur. La texture ne doit donc pas être confondue avec la composition."
          }
        ]
      },

      {
        id: 5,
        titre: "5. Éruptions et évolution des magmas",
        blocs: [
          {
            type: "texte",
            titre: "Éruptions effusives et explosives",
            texte: "Une éruption effusive est dominée par l’émission de lave relativement fluide, qui peut former des coulées. Une éruption explosive projette des fragments et des cendres, avec parfois des nuées ardentes : mélanges brûlants de gaz et de particules se déplaçant rapidement. Un même volcan peut connaître différents types d’activité."
          },
          {
            type: "texte",
            titre: "Viscosité et gaz",
            texte: "La viscosité mesure la résistance d’un liquide à l’écoulement. Un magma visqueux s’écoule difficilement et peut retenir les gaz plus facilement ; leur accumulation favorise une activité explosive. La viscosité dépend notamment de la composition, de la température et de la quantité de cristaux. La quantité de gaz et les conditions de remontée comptent aussi : on ne peut pas prévoir le style d’une éruption à partir d’un seul facteur."
          },
          {
            type: "texte",
            titre: "Évolution pendant la remontée et le stockage",
            texte: "Un magma peut évoluer avant sa solidification. Certains minéraux cristallisent en premier et peuvent se séparer du liquide : la composition du liquide restant change. Des mélanges entre magmas ou des interactions avec les roches traversées peuvent également modifier sa composition."
          },
          {
            type: "texte",
            titre: "Bilan",
            texte: "Les magmas proviennent de la fusion partielle de roches. Leur solidification en surface produit des roches volcaniques ; leur cristallisation en profondeur produit des roches plutoniques. Les textures, les minéraux et le contexte géologique permettent de reconstituer une partie de leur histoire."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Application",
        points: 4,
        enonce: "Définis les termes « magma », « lave » et « fusion partielle ».",
        correction: "Un magma est un mélange en profondeur de liquide silicaté, de cristaux et de gaz dissous. La lave est le matériau magmatique émis à la surface, dont une partie des gaz s’échappe. La fusion partielle est la fusion d’une partie seulement d’une roche ; elle produit un liquide et laisse un résidu solide."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Cite trois changements capables de favoriser la fusion partielle d’une roche et donne un exemple de contexte pour chacun.",
        correction: "Une hausse de température peut favoriser la fusion de roches de la croûte en profondeur. Une diminution de pression lors de la remontée du manteau favorise la fusion sous une dorsale. L’ajout d’eau abaisse le solidus de certaines roches et favorise la fusion du manteau au-dessus d’une plaque en subduction."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Compare la formation d’une roche volcanique et celle d’une roche plutonique.",
        correction: "Une roche volcanique se forme lorsque du magma atteint la surface et que la lave refroidit généralement rapidement. Une roche plutonique se forme par refroidissement et cristallisation du magma en profondeur, généralement plus lentement. Leurs textures sont donc souvent différentes."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une roche contient des cristaux tous visibles et jointifs. Une autre contient de nombreux microlites dans une pâte. Nomme les deux textures et propose pour chacune une vitesse relative de refroidissement.",
        correction: "La première présente une texture grenue, associée généralement à un refroidissement lent en profondeur. La seconde présente une texture microlitique, associée généralement à un refroidissement rapide de la lave. Ces textures seules ne suffisent pas à nommer précisément chaque roche."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Un basalte et un gabbro possèdent des minéraux de composition proche. Le premier montre de très petits cristaux ; le second présente des cristaux visibles à l’œil nu. Explique cette différence.",
        correction: "Leurs compositions peuvent être proches mais leurs histoires de refroidissement diffèrent. Le basalte provient d’une lave refroidie rapidement, ce qui limite généralement la croissance des cristaux. Le gabbro cristallise plus lentement en profondeur, ce qui permet le développement de cristaux visibles."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Une roche volcanique contient quelques gros cristaux dans une pâte comprenant de très petits cristaux et du verre. Propose une histoire de refroidissement.",
        correction: "Les gros cristaux ont pu commencer à se former lorsque le magma refroidissait relativement lentement en profondeur. Après l’éruption, le reste du liquide a refroidi rapidement : de petits cristaux se sont formés et une partie a pu se solidifier en verre. Cette interprétation correspond à au moins deux étapes de refroidissement."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Un magma visqueux contient beaucoup de gaz. Explique pourquoi une éruption explosive est possible, sans affirmer qu’elle est certaine.",
        correction: "La forte viscosité freine l’écoulement du magma et peut limiter l’échappement des gaz. Leur accumulation et leur expansion lors de la remontée peuvent fragmenter le magma et provoquer des projections explosives. Le résultat dépend aussi de la quantité réelle de gaz, de la vitesse de remontée et des possibilités de dégazage : l’explosion n’est donc pas certaine à partir de ces seules informations."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Sous une dorsale, du manteau chaud remonte. Sa température change peu, mais une partie fond. Explique ce résultat.",
        correction: "Pendant la remontée, la pression diminue. Or la limite de début de fusion dépend de la pression : le manteau chaud peut franchir son solidus par décompression et fondre partiellement, même sans forte augmentation de température. Le liquide formé peut ensuite alimenter un magmatisme."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Décris le trajet possible de la matière depuis une roche du manteau jusqu’à la formation d’un basalte. Précise les changements d’état et les limites de ton interprétation.",
        correction: "Une roche du manteau peut subir une fusion partielle : une partie solide devient liquide et forme un magma, tandis qu’un résidu reste solide. Le magma remonte ; s’il atteint la surface, il est émis sous forme de lave. La lave refroidit et se solidifie, formant notamment des cristaux et parfois du verre : une roche volcanique comme le basalte apparaît. La composition exacte et le trajet dépendent du contexte ; toute roche du manteau ne produit pas automatiquement un basalte dans n’importe quelles conditions."
      }
    ]
  }
]);
