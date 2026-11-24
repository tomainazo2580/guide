enregistrerChapitres("2nde", "svt", [
  {
    id: 14,
    titre: "Chapitre 14 : Les roches magmatiques",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. Du magma à la roche",
        blocs: [
          {
            type: "introduction",
            titre: "Une origine commune",
            texte: "Le granite et le basalte ont des aspects différents, mais ils appartiennent tous deux à la famille des roches magmatiques. Ils se forment à partir d’un magma qui refroidit et se solidifie."
          },
          {
            type: "definition",
            titre: "Magma",
            texte: "Un magma est un mélange de matière rocheuse fondue, de cristaux éventuels et de gaz dissous, présent en profondeur. Sa composition et sa température varient selon son origine."
          },
          {
            type: "definition",
            titre: "Roche magmatique",
            texte: "Une roche magmatique est une roche formée par le refroidissement et la solidification d’un magma ou d’une lave."
          },
          {
            type: "definition",
            titre: "Lave",
            texte: "La lave est le matériau magmatique émis à la surface lors d’une éruption. Une partie des gaz peut s’échapper pendant la remontée et l’émission."
          },
          {
            type: "remarque",
            titre: "Refroidissement et cristallisation",
            texte: "Lors du refroidissement, des minéraux peuvent cristalliser. La taille et l’organisation des cristaux dépendent notamment de la durée et des conditions du refroidissement."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Roches plutoniques et volcaniques",
        blocs: [
          {
            type: "definition",
            titre: "Roche plutonique",
            texte: "Une roche plutonique se forme par refroidissement d’un magma en profondeur. Le refroidissement est généralement assez lent pour permettre la croissance de cristaux visibles."
          },
          {
            type: "definition",
            titre: "Roche volcanique",
            texte: "Une roche volcanique se forme à partir d’un magma émis à la surface ou très près de celle-ci. Le refroidissement est généralement rapide ; la roche peut contenir de petits cristaux et parfois du verre."
          },
          {
            type: "tableau",
            titre: "Comparaison générale",
            entetes: ["Critère", "Roche plutonique", "Roche volcanique"],
            lignes: [
              ["Lieu de solidification", "En profondeur", "À la surface ou très près de la surface"],
              ["Refroidissement", "Généralement lent", "Généralement rapide"],
              ["Aspect fréquent", "Cristaux visibles et jointifs", "Petits cristaux, parfois dans une pâte vitreuse"],
              ["Exemple", "Granite", "Basalte"]
            ]
          },
          {
            type: "schema",
            titre: "Deux conditions de refroidissement",
            svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 355' role='img' aria-label='Schéma comparant le refroidissement lent d’un magma en profondeur, formant un granite à cristaux visibles, et le refroidissement rapide d’une lave en surface, formant un basalte à petits cristaux.'>
              <rect width='360' height='355' fill='#f8fbff'/>

              <text x='90' y='25' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#2c4d6d'>En profondeur</text>
              <text x='270' y='25' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#2c4d6d'>En surface</text>

              <rect x='12' y='37' width='155' height='125' rx='8' fill='#efe3cf' stroke='#a58a6b' stroke-width='2'/>
              <rect x='193' y='37' width='155' height='125' rx='8' fill='#e5f3fb' stroke='#8aabc0' stroke-width='2'/>

              <text x='89' y='62' text-anchor='middle' font-family='sans-serif' font-size='15' fill='#3d3229'>Magma</text>
              <text x='89' y='91' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#3d3229'>Refroidissement</text>
              <text x='89' y='111' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='#3d3229'>généralement lent</text>
              <text x='89' y='145' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#805b36'>↓</text>

              <text x='270' y='62' text-anchor='middle' font-family='sans-serif' font-size='15' fill='#2d475c'>Lave</text>
              <text x='270' y='91' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#2d475c'>Refroidissement</text>
              <text x='270' y='111' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='#2d475c'>généralement rapide</text>
              <text x='270' y='145' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#456d8a'>↓</text>

              <text x='90' y='185' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#493728'>Granite</text>
              <text x='270' y='185' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#303b45'>Basalte</text>

              <rect x='28' y='198' width='124' height='90' rx='5' fill='#f1e5d0' stroke='#8f7965' stroke-width='2'/>
              <path d='M 28 222 L 59 198 L 78 218 L 64 244 L 28 248 Z' fill='#dedbd3' stroke='#8f7965'/>
              <path d='M 59 198 L 105 198 L 112 224 L 78 218 Z' fill='#e8bcb3' stroke='#8f7965'/>
              <path d='M 105 198 L 152 198 L 152 232 L 112 224 Z' fill='#e4e0d5' stroke='#8f7965'/>
              <path d='M 28 248 L 64 244 L 79 268 L 59 288 L 28 288 Z' fill='#d8b5a0' stroke='#8f7965'/>
              <path d='M 64 244 L 78 218 L 112 224 L 118 257 L 79 268 Z' fill='#f3eee4' stroke='#8f7965'/>
              <path d='M 112 224 L 152 232 L 152 265 L 118 257 Z' fill='#c9c2b6' stroke='#8f7965'/>
              <path d='M 59 288 L 79 268 L 118 257 L 152 265 L 152 288 Z' fill='#e5c7b2' stroke='#8f7965'/>
              <path d='M 48 259 L 54 255 M 91 237 L 97 232 M 130 278 L 136 273' stroke='#3c3631' stroke-width='3'/>

              <rect x='208' y='198' width='124' height='90' rx='5' fill='#555c61' stroke='#343a3e' stroke-width='2'/>
              <g stroke='#e2e5df' stroke-width='2' stroke-linecap='round'>
                <line x1='220' y1='214' x2='229' y2='210'/><line x1='245' y1='216' x2='253' y2='220'/>
                <line x1='276' y1='210' x2='284' y2='213'/><line x1='310' y1='214' x2='320' y2='210'/>
                <line x1='230' y1='237' x2='239' y2='233'/><line x1='260' y1='239' x2='269' y2='243'/>
                <line x1='293' y1='234' x2='302' y2='230'/><line x1='316' y1='242' x2='324' y2='245'/>
                <line x1='219' y1='263' x2='228' y2='267'/><line x1='249' y1='262' x2='258' y2='258'/>
                <line x1='280' y1='269' x2='289' y2='264'/><line x1='307' y1='270' x2='316' y2='273'/>
              </g>

              <text x='90' y='311' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#493728'>Cristaux visibles</text>
              <text x='90' y='330' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#493728'>Texture grenue</text>
              <text x='270' y='311' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#303b45'>Très petits cristaux</text>
              <text x='270' y='330' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#303b45'>Texture microlitique</text>
            </svg>`,
            legende: "Le granite se forme généralement par refroidissement lent en profondeur : ses cristaux sont visibles. Le basalte se forme généralement par refroidissement rapide d’une lave : il contient souvent de très petits cristaux, parfois accompagnés de verre. Les dessins des textures sont simplifiés et ne sont pas à la même échelle."
          },
          {
            type: "remarque",
            titre: "Des cas variés",
            texte: "Cette comparaison est simplifiée. Un magma peut commencer à cristalliser en profondeur puis refroidir rapidement après son émission : la roche peut alors présenter des cristaux de tailles différentes."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Les textures des roches magmatiques",
        blocs: [
          {
            type: "definition",
            titre: "Texture",
            texte: "La texture d’une roche décrit la taille, la forme et l’organisation de ses constituants, notamment des cristaux et de la matière vitreuse."
          },
          {
            type: "definition",
            titre: "Texture grenue",
            texte: "Une texture grenue est constituée de cristaux visibles à l’œil nu et généralement jointifs. Elle est fréquente dans les roches plutoniques comme le granite."
          },
          {
            type: "definition",
            titre: "Texture microlitique",
            texte: "Une texture microlitique contient de nombreux très petits cristaux appelés microlites, souvent dans une pâte qui peut être partiellement vitreuse. Des cristaux plus grands peuvent aussi être présents."
          },
          {
            type: "definition",
            titre: "Texture vitreuse",
            texte: "Une texture vitreuse comprend une grande proportion de matière amorphe, formée lorsque le refroidissement est si rapide que la cristallisation reste limitée."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre cristal et verre",
            texte: "Un cristal possède une organisation ordonnée de ses constituants. Le verre est amorphe : il ne présente pas une organisation cristalline ordonnée à grande distance."
          }
        ]
      },
      {
        id: 4,
        titre: "4. Le granite",
        blocs: [
          {
            type: "definition",
            titre: "Granite",
            texte: "Le granite est une roche magmatique plutonique généralement claire, à texture grenue. Il contient notamment du quartz, des feldspaths et souvent des micas."
          },
          {
            type: "tableau",
            titre: "Minéraux fréquents du granite",
            entetes: ["Minéral", "Aspect possible"],
            lignes: [
              ["Quartz", "Grains souvent grisâtres et à éclat vitreux"],
              ["Feldspath", "Grains souvent blancs, gris ou rosés"],
              ["Mica", "Petites paillettes sombres ou claires"]
            ]
          },
          {
            type: "remarque",
            titre: "Des aspects variables",
            texte: "La couleur d’un granite dépend de sa composition et de l’aspect de ses minéraux. Une observation à l’œil nu permet une première description, mais ne remplace pas toujours une identification précise."
          },
          {
            type: "exemple",
            titre: "Pourquoi voit-on le granite en surface ?",
            texte: "Le granite se forme en profondeur. Il peut ensuite être mis à l’affleurement lorsque les mouvements géologiques et l’érosion enlèvent les roches qui le recouvraient."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Le basalte",
        blocs: [
          {
            type: "definition",
            titre: "Basalte",
            texte: "Le basalte est une roche magmatique volcanique généralement sombre. Il est souvent constitué de très petits cristaux, parfois accompagnés de cristaux plus grands et de verre."
          },
          {
            type: "exemple",
            titre: "Composition",
            texte: "Le basalte contient notamment des feldspaths plagioclases et des minéraux riches en fer et en magnésium, comme des pyroxènes. Certains basaltes contiennent aussi de l’olivine."
          },
          {
            type: "exemple",
            titre: "Formation",
            texte: "Une lave basaltique émise à la surface refroidit relativement vite. De nombreux cristaux restent très petits, ce qui donne souvent une texture microlitique."
          },
          {
            type: "remarque",
            titre: "Des cavités possibles",
            texte: "Certains basaltes présentent des cavités liées à des bulles de gaz présentes dans la lave. Leur présence et leur quantité varient selon les conditions de formation."
          }
        ]
      },
      {
        id: 6,
        titre: "6. Classer et comparer",
        blocs: [
          {
            type: "methode",
            titre: "Identifier une roche magmatique",
            texte: "1. Décrire la couleur et l’aspect général. 2. Observer si les cristaux sont visibles ou très petits. 3. Rechercher une éventuelle matière vitreuse ou des cavités. 4. Identifier les minéraux lorsque les données le permettent. 5. Relier la texture au refroidissement, puis proposer un nom avec prudence."
          },
          {
            type: "tableau",
            titre: "Granite et basalte",
            entetes: ["Critère", "Granite", "Basalte"],
            lignes: [
              ["Famille", "Magmatique plutonique", "Magmatique volcanique"],
              ["Texture fréquente", "Grenue", "Microlitique"],
              ["Refroidissement", "Généralement lent en profondeur", "Généralement rapide en surface"],
              ["Minéraux caractéristiques", "Quartz, feldspaths, souvent micas", "Plagioclases, pyroxènes, parfois olivine"]
            ]
          },
          {
            type: "remarque",
            titre: "La texture ne dit pas tout",
            texte: "La taille des cristaux renseigne sur le refroidissement, mais elle ne suffit pas toujours à nommer précisément une roche. La composition doit aussi être prise en compte."
          },
          {
            type: "remarque",
            titre: "La couleur seule ne suffit pas",
            texte: "Un granite est souvent clair et un basalte souvent sombre, mais la couleur peut varier. Pour identifier une roche, il faut croiser plusieurs critères."
          }
        ]
      },
      {
        id: 7,
        titre: "7. Répartition et utilisations à Madagascar",
        blocs: [
          {
            type: "introduction",
            titre: "Des roches présentes dans plusieurs régions",
            texte: "À Madagascar, des roches granitiques sont présentes dans différentes parties du socle ancien, notamment sur les Hautes Terres. Des roches volcaniques, dont des basaltes, se rencontrent également dans plusieurs régions."
          },
          {
            type: "exemple",
            titre: "Exemples de régions volcaniques",
            texte: "Des formations volcaniques sont présentes notamment dans la région de l’Itasy et dans le massif de l’Ankaratra. Leur histoire et leurs roches sont variées : tous les affleurements de ces régions ne sont pas nécessairement des basaltes."
          },
          {
            type: "tableau",
            titre: "Utilisations possibles",
            entetes: ["Roche", "Exemples d’utilisation", "Condition"],
            lignes: [
              ["Granite", "Construction, revêtement, pierre décorative", "Dépend de la qualité et des propriétés du matériau."],
              ["Basalte", "Granulats, routes ou construction", "Dépend de la résistance, de l’état et des caractéristiques de la roche."]
            ]
          },
          {
            type: "regle",
            titre: "Sécurité",
            texte: "Les carrières et affleurements peuvent présenter des chutes de pierres ou des terrains instables. Ne prélève pas de roche et n’entre pas dans une carrière sans autorisation ni encadrement."
          }
        ]
      },
      {
        id: 8,
        titre: "8. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Formation",
            texte: "Une roche magmatique se forme par refroidissement et solidification d’un magma ou d’une lave. En profondeur, un refroidissement généralement lent favorise la croissance de cristaux visibles ; en surface, un refroidissement souvent rapide donne de petits cristaux et parfois du verre."
          },
          {
            type: "rappel",
            titre: "Exemples",
            texte: "Le granite est une roche plutonique généralement grenue, contenant notamment quartz, feldspaths et micas. Le basalte est une roche volcanique souvent sombre et microlitique."
          },
          {
            type: "rappel",
            titre: "Méthode",
            texte: "Pour identifier une roche, il faut croiser la texture, la composition et l’aspect général. La couleur seule ne suffit pas."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis une roche magmatique et indique la différence générale entre magma et lave.",
        correction: "Une roche magmatique se forme par refroidissement et solidification d’un magma ou d’une lave. Le magma est présent en profondeur ; la lave est le matériau magmatique émis à la surface."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Classe le granite et le basalte parmi les roches plutoniques ou volcaniques.",
        correction: "Le granite est une roche magmatique plutonique. Le basalte est une roche magmatique volcanique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une roche présente de nombreux cristaux visibles et jointifs. Une autre présente de très petits cristaux dans une pâte partiellement vitreuse. Nomme la texture de chacune.",
        correction: "La première présente une texture grenue. La seconde présente une texture microlitique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite trois minéraux fréquents dans le granite et explique pourquoi leurs cristaux peuvent être visibles à l’œil nu.",
        correction: "Le granite contient notamment du quartz, des feldspaths et souvent des micas. Son refroidissement généralement lent en profondeur favorise la croissance de cristaux visibles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On compare deux roches. A contient des cristaux visibles de quartz, de feldspath et de mica. B est sombre et contient de très petits cristaux, notamment des plagioclases et des pyroxènes. 1. Propose un nom pour A et B. 2. Identifie leur type de formation. 3. Relie leur texture à leur refroidissement.",
        correction: "1. A évoque un granite ; B évoque un basalte. 2. Le granite est plutonique, le basalte volcanique. 3. Les cristaux visibles du granite sont compatibles avec un refroidissement lent en profondeur. Les très petits cristaux du basalte sont compatibles avec un refroidissement rapide de la lave."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Une roche volcanique ne peut contenir aucun cristal, car elle refroidit vite. » Explique son erreur en utilisant les notions de microlite et de verre.",
        correction: "Une roche volcanique peut contenir de nombreux petits cristaux appelés microlites, et parfois des cristaux plus grands formés avant l’émission. Elle peut aussi contenir du verre si une partie de la matière n’a pas cristallisé. Un refroidissement rapide ne signifie donc pas absence totale de cristaux."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Du granite, roche formée en profondeur, est aujourd’hui visible sur une colline. Propose une explication de sa présence à la surface et indique pourquoi cela ne signifie pas qu’il s’est formé à l’air libre.",
        correction: "Des mouvements géologiques et l’érosion ont pu enlever les roches qui recouvraient le granite, le mettant à l’affleurement. Sa présence actuelle en surface résulte de cette mise à nu ; elle ne change pas son origine plutonique en profondeur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un magma commence à refroidir lentement en profondeur et forme quelques grands cristaux. Il est ensuite émis sous forme de lave et refroidit rapidement en surface. 1. Prévois deux tailles de cristaux possibles dans la roche finale. 2. Explique l’origine de chacune. 3. La roche obtenue est-elle plutonique ou volcanique dans cette situation ? 4. Pourquoi une seule observation de couleur ne permet-elle pas de la nommer précisément ?",
        correction: "1 et 2. Les grands cristaux peuvent s’être formés lors du refroidissement lent en profondeur ; de petits cristaux peuvent se former lors du refroidissement rapide en surface, éventuellement avec du verre. 3. La roche est volcanique puisqu’elle se solidifie après l’émission de la lave à la surface. 4. Plusieurs roches peuvent avoir une couleur proche ; il faut aussi étudier leur texture et leur composition minéralogique."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une classe étudie deux échantillons : A est une roche claire à cristaux visibles contenant quartz et feldspath ; B est une roche sombre à très petits cristaux contenant plagioclase et pyroxène. Un élève affirme : « A et B sont deux minéraux, et leur différence de taille de cristaux ne donne aucune information. » 1. Corrige sa première erreur. 2. Propose une identification pour chaque roche. 3. Explique ce que leur texture suggère sur le refroidissement. 4. Cite une limite de cette interprétation.",
        correction: "1. A et B sont des roches constituées de minéraux, pas des minéraux uniques. 2. A évoque un granite ; B évoque un basalte. 3. Les cristaux visibles de A suggèrent un refroidissement relativement lent en profondeur ; les très petits cristaux de B suggèrent un refroidissement plus rapide en surface. 4. La texture seule ne suffit pas toujours à identifier précisément la roche ni à reconstituer toute son histoire ; la composition et d’autres indices doivent aussi être étudiés."
      }
    ]
  }
]);
