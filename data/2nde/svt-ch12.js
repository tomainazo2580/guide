enregistrerChapitres("2nde", "svt", [
  {
    id: 12,
    titre: "Chapitre 12 : La forme et la structure du globe terrestre",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. La Terre dans son ensemble",
        blocs: [
          {
            type: "introduction",
            titre: "Une planète organisée en couches",
            texte: "La Terre est une planète dont la surface comprend des continents et des océans. Son intérieur n’est pas uniforme : il est organisé en plusieurs grandes enveloppes aux propriétés différentes."
          },
          {
            type: "definition",
            titre: "Forme de la Terre",
            texte: "À grande échelle, la Terre est proche d’un ellipsoïde légèrement aplati aux pôles et renflé à l’équateur. Sa surface réelle présente aussi des irrégularités, notamment les reliefs et les profondeurs océaniques."
          },
          {
            type: "rappel",
            titre: "Quelques valeurs",
            texte: "Le rayon moyen de la Terre est d’environ 6 371 km. Son rayon équatorial est légèrement supérieur à son rayon polaire. L’âge de la Terre est estimé à environ 4,54 milliards d’années."
          },
          {
            type: "remarque",
            titre: "Une approximation utile",
            texte: "On représente souvent la Terre par une sphère dans les schémas et les calculs simples. C’est une approximation pratique, mais sa forme exacte n’est pas une sphère parfaite."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Comment connaître l’intérieur de la Terre ?",
        blocs: [
          {
            type: "introduction",
            titre: "Des observations directes limitées",
            texte: "Les mines, les forages et certains matériaux remontés par le volcanisme donnent des informations sur les parties superficielles de la Terre et sur certaines roches profondes. Ils ne permettent pas d’atteindre directement la majeure partie de l’intérieur terrestre."
          },
          {
            type: "definition",
            titre: "Méthode indirecte",
            texte: "Une méthode indirecte permet de déduire des propriétés d’une région inaccessible à partir de phénomènes mesurables. L’étude des ondes sismiques est une méthode essentielle pour connaître l’intérieur de la Terre."
          },
          {
            type: "definition",
            titre: "Séisme",
            texte: "Un séisme est une vibration du sol due à une libération rapide d’énergie en profondeur. Cette énergie se propage notamment sous forme d’ondes sismiques."
          },
          {
            type: "remarque",
            titre: "Construire un modèle",
            texte: "Les scientifiques croisent plusieurs indices : propagation des ondes, propriétés des roches, mesures de gravité, champ magnétique et étude de matériaux naturels. Les connaissances obtenues forment un modèle qui peut être précisé avec de nouvelles données."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Les ondes sismiques",
        blocs: [
          {
            type: "definition",
            titre: "Onde sismique",
            texte: "Une onde sismique est une vibration qui transporte de l’énergie à travers la Terre ou le long de sa surface à la suite d’un séisme ou d’une autre source."
          },
          {
            type: "tableau",
            titre: "Deux types d’ondes internes",
            entetes: ["Onde", "Caractéristique", "Milieux traversés"],
            lignes: [
              ["Onde P", "Onde de compression, généralement plus rapide que l’onde S.", "Solides et liquides"],
              ["Onde S", "Onde de cisaillement, généralement plus lente que l’onde P.", "Solides ; elle ne se propage pas dans les liquides"]
            ]
          },
          {
            type: "definition",
            titre: "Discontinuité",
            texte: "Une discontinuité est une limite interne où les propriétés des matériaux changent nettement. Les ondes sismiques peuvent y changer de vitesse ou de direction."
          },
          {
            type: "exemple",
            titre: "Un indice sur le noyau externe",
            texte: "Les ondes S ne traversent pas les liquides. Leur absence dans certaines zones d’enregistrement, associée à l’étude des ondes P, indique l’existence d’un noyau externe liquide."
          },
          {
            type: "remarque",
            titre: "Vitesse et propriétés",
            texte: "La vitesse des ondes dépend des propriétés des matériaux traversés. Un changement de vitesse peut signaler une modification de composition, d’état ou d’autres propriétés, mais il doit être interprété avec l’ensemble des observations."
          }
        ]
      },
      {
        id: 4,
        titre: "4. Les grandes enveloppes internes",
        blocs: [
          {
            type: "tableau",
            titre: "Structure simplifiée",
            entetes: ["Enveloppe", "Profondeur approximative", "Caractéristiques"],
            lignes: [
              ["Croûte", "De la surface à une profondeur variable", "Enveloppe rocheuse externe ; elle est plus épaisse sous les continents que sous les océans."],
              ["Manteau supérieur", "De la base de la croûte à environ 660 km", "Principalement solide, constitué de roches riches en silicates."],
              ["Manteau inférieur", "D’environ 660 km à 2 900 km", "Principalement solide malgré les températures élevées."],
              ["Noyau externe", "D’environ 2 900 km à 5 150 km", "Liquide, constitué principalement de fer et de nickel avec d’autres éléments."],
              ["Noyau interne", "D’environ 5 150 km au centre, vers 6 371 km", "Solide, constitué principalement de fer et de nickel."]
            ]
          },
          {
            type: "schema",
            titre: "Coupe simplifiée du globe terrestre",
            svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 340' role='img' aria-label='Coupe simplifiée de la Terre montrant la croûte, le manteau supérieur, le manteau inférieur, le noyau externe liquide et le noyau interne solide.'>
              <rect width='360' height='340' fill='#f8fbff'/>

              <circle cx='180' cy='125' r='105' fill='#6c563d'/>
              <circle cx='180' cy='125' r='100' fill='#f5b65b'/>
              <circle cx='180' cy='125' r='88' fill='#e77c45'/>
              <circle cx='180' cy='125' r='55' fill='#d74d3c'/>
              <circle cx='180' cy='125' r='20' fill='#f8dc80'/>

              <circle cx='180' cy='125' r='105' fill='none' stroke='#493724' stroke-width='2'/>
              <circle cx='180' cy='125' r='88' fill='none' stroke='#b75c34' stroke-width='1'/>
              <circle cx='180' cy='125' r='55' fill='none' stroke='#a63229' stroke-width='1'/>
              <circle cx='180' cy='125' r='20' fill='none' stroke='#b18b32' stroke-width='1'/>

              <text x='180' y='130' text-anchor='middle' font-family='sans-serif' font-size='12' font-weight='bold' fill='#402900'>Centre</text>

              <rect x='20' y='248' width='14' height='14' fill='#6c563d'/>
              <text x='41' y='260' font-family='sans-serif' font-size='14' fill='#222'>Croûte</text>

              <rect x='20' y='273' width='14' height='14' fill='#f5b65b'/>
              <text x='41' y='285' font-family='sans-serif' font-size='14' fill='#222'>Manteau supérieur</text>

              <rect x='20' y='298' width='14' height='14' fill='#e77c45'/>
              <text x='41' y='310' font-family='sans-serif' font-size='14' fill='#222'>Manteau inférieur</text>

              <rect x='200' y='248' width='14' height='14' fill='#d74d3c'/>
              <text x='221' y='260' font-family='sans-serif' font-size='14' fill='#222'>Noyau externe</text>
              <text x='221' y='277' font-family='sans-serif' font-size='13' fill='#444'>liquide</text>

              <rect x='200' y='292' width='14' height='14' fill='#f8dc80' stroke='#b18b32'/>
              <text x='221' y='304' font-family='sans-serif' font-size='14' fill='#222'>Noyau interne</text>
              <text x='221' y='321' font-family='sans-serif' font-size='13' fill='#444'>solide</text>
            </svg>`,
            legende: "De la surface vers le centre : croûte, manteau supérieur, manteau inférieur, noyau externe liquide et noyau interne solide. Les épaisseurs sont approximatives ; la croûte est volontairement épaissie pour être visible."
          },
          {
            type: "definition",
            titre: "Croûte continentale et croûte océanique",
            texte: "La croûte continentale forme notamment les continents ; elle est généralement plus épaisse et moins dense que la croûte océanique. La croûte océanique, située sous les océans, est généralement plus mince et plus dense."
          },
          {
            type: "definition",
            titre: "Barysphère",
            texte: "La barysphère est un terme employé pour désigner le noyau terrestre. Dans le vocabulaire actuel, on distingue généralement le noyau externe liquide et le noyau interne solide."
          },
          {
            type: "remarque",
            titre: "Le manteau n’est pas un océan de lave",
            texte: "Le manteau est constitué principalement de roches solides. Sur de très longues durées, certaines de ces roches peuvent se déformer lentement. Des zones de fusion partielle existent, mais elles ne rendent pas tout le manteau liquide."
          },
          {
            type: "remarque",
            titre: "Le terme « pyrosphère »",
            texte: "Le mot ancien « pyrosphère » a été employé dans certains modèles historiques pour désigner une région interne chaude. Il est préférable d’utiliser les termes actuels : croûte, manteau et noyau, en précisant leurs subdivisions."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Composition des enveloppes",
        blocs: [
          {
            type: "definition",
            titre: "Minéral et roche",
            texte: "Un minéral est une substance naturelle solide, généralement caractérisée par une composition chimique définie dans certaines limites et une organisation cristalline. Une roche est un matériau naturel constitué d’un ou plusieurs minéraux, et parfois d’autres composants."
          },
          {
            type: "tableau",
            titre: "Exemples de composition",
            entetes: ["Enveloppe", "Composition ou roches caractéristiques"],
            lignes: [
              ["Croûte continentale", "Roches variées ; les roches de type granitique sont fréquentes dans certaines parties."],
              ["Croûte océanique", "Roches principalement basaltiques et gabbroïques."],
              ["Manteau", "Roches riches en minéraux silicatés contenant notamment du magnésium et du fer ; la péridotite est un exemple important."],
              ["Noyau", "Principalement fer et nickel, avec d’autres éléments."]
            ]
          },
          {
            type: "remarque",
            titre: "Éléments et minéraux",
            texte: "Le fer, le magnésium et le silicium sont des éléments chimiques. Ils peuvent entrer dans la composition de minéraux différents. Une roche, un minéral et un élément chimique ne sont donc pas synonymes."
          }
        ]
      },
      {
        id: 6,
        titre: "6. Radioactivité naturelle et âge de la Terre",
        blocs: [
          {
            type: "definition",
            titre: "Radioactivité naturelle",
            texte: "La radioactivité naturelle est la transformation spontanée de certains noyaux atomiques instables. Ces transformations s’accompagnent d’émissions et se produisent selon des lois mesurables."
          },
          {
            type: "definition",
            titre: "Datation radiométrique",
            texte: "La datation radiométrique utilise la transformation radioactive de certains éléments pour estimer l’âge de matériaux, sous réserve que les conditions nécessaires à la méthode soient respectées."
          },
          {
            type: "exemple",
            titre: "Estimer l’âge de la Terre",
            texte: "L’âge d’environ 4,54 milliards d’années est établi notamment grâce à la datation de météorites et à l’étude de matériaux terrestres très anciens. Il ne résulte pas d’une simple mesure directe de l’âge de toutes les roches actuelles."
          },
          {
            type: "remarque",
            titre: "Une source de chaleur",
            texte: "La désintégration de certains éléments radioactifs contribue à la chaleur interne de la Terre. Cette chaleur a aussi d’autres origines, notamment une partie de la chaleur conservée depuis sa formation."
          },
          {
            type: "regle",
            titre: "Sécurité",
            texte: "L’étude de la radioactivité utilise des instruments et des règles de protection adaptés. Ne manipule pas de source radioactive inconnue."
          }
        ]
      },
      {
        id: 7,
        titre: "7. Lire un modèle de la Terre",
        blocs: [
          {
            type: "methode",
            titre: "Se repérer en profondeur",
            texte: "1. Partir de la surface et repérer la profondeur donnée. 2. Comparer cette profondeur aux limites approximatives des enveloppes. 3. Identifier l’enveloppe correspondante. 4. Préciser que les limites sont des valeurs approximatives dans ce modèle simplifié."
          },
          {
            type: "exemple",
            titre: "Application",
            texte: "À environ 1 000 km de profondeur, on se situe dans le manteau inférieur du modèle présenté. À environ 4 000 km, on se situe dans le noyau externe liquide."
          },
          {
            type: "remarque",
            titre: "Profondeur et distance au centre",
            texte: "La profondeur est mesurée depuis la surface vers l’intérieur. Dans un modèle sphérique simple, la distance au centre est approximativement égale au rayon terrestre moins la profondeur."
          }
        ]
      },
      {
        id: 8,
        titre: "8. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Valeurs et forme",
            texte: "La Terre est légèrement aplatie aux pôles. Son rayon moyen est d’environ 6 371 km et son âge d’environ 4,54 milliards d’années."
          },
          {
            type: "rappel",
            titre: "Structure",
            texte: "De la surface vers le centre, on distingue la croûte, le manteau supérieur, le manteau inférieur, le noyau externe liquide et le noyau interne solide."
          },
          {
            type: "rappel",
            titre: "Indices",
            texte: "Les ondes sismiques renseignent sur les propriétés des enveloppes internes. La radioactivité naturelle contribue notamment à la datation de matériaux et à la chaleur interne."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Indique la forme générale de la Terre, son rayon moyen approximatif et son âge approximatif.",
        correction: "La Terre est proche d’un ellipsoïde légèrement aplati aux pôles. Son rayon moyen est d’environ 6 371 km et son âge d’environ 4,54 milliards d’années."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Range les enveloppes suivantes de la surface vers le centre : noyau interne, manteau, croûte, noyau externe.",
        correction: "De la surface vers le centre : croûte → manteau → noyau externe → noyau interne."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les ondes P traversent les solides et les liquides. Les ondes S traversent les solides mais pas les liquides. Quel type d’onde peut traverser le noyau externe liquide ?",
        correction: "Les ondes P peuvent traverser le noyau externe liquide. Les ondes S ne se propagent pas dans les liquides."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un modèle simplifié, le manteau inférieur s’étend de 660 km à 2 900 km de profondeur et le noyau externe de 2 900 km à 5 150 km. Identifie l’enveloppe située à 1 200 km et celle située à 4 000 km.",
        correction: "À 1 200 km, on se situe dans le manteau inférieur. À 4 000 km, on se situe dans le noyau externe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne les informations suivantes : les ondes S ne traversent pas les liquides ; les ondes P traversent les solides et les liquides ; le noyau externe est liquide. 1. Quelle onde ne traverse pas le noyau externe ? 2. Pourquoi l’étude de ces ondes renseigne-t-elle sur l’intérieur de la Terre ? 3. Pourquoi s’agit-il d’une méthode indirecte ?",
        correction: "1. L’onde S ne traverse pas le noyau externe liquide. 2. La présence, l’absence ou le changement de vitesse et de direction des ondes fournissent des indices sur les matériaux traversés. 3. On déduit des propriétés d’une région profonde à partir d’ondes enregistrées, sans observer directement cette région."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Le manteau est entièrement liquide, car il est très chaud. » Le modèle étudié indique que le manteau est principalement solide, même si certaines roches peuvent se déformer lentement et si des zones de fusion partielle existent. Corrige son affirmation et explique pourquoi chaleur et état liquide ne doivent pas être confondus.",
        correction: "Le manteau est principalement constitué de roches solides : il n’est pas entièrement liquide. Une température élevée ne suffit pas à déterminer l’état d’un matériau ; la pression et la nature du matériau comptent aussi. Des roches solides peuvent se déformer lentement sur de longues durées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un modèle sphérique, on prend un rayon terrestre de 6 371 km. Une limite interne est située à 2 900 km de profondeur. 1. Calcule sa distance approximative au centre. 2. Dans le modèle du cours, quelles grandes enveloppes sépare cette limite ?",
        correction: "1. Distance au centre = 6 371 − 2 900 = 3 471 km. 2. Cette limite sépare le manteau du noyau externe."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie un modèle dans lequel la croûte et le manteau sont principalement solides, le noyau externe est liquide et le noyau interne est solide. Les ondes P traversent solides et liquides ; les ondes S ne traversent pas les liquides. 1. Range les enveloppes de la surface au centre. 2. Quel changement important une onde S rencontre-t-elle à l’entrée du noyau externe ? 3. Explique pourquoi les ondes sismiques constituent un indice sur l’état des matériaux. 4. Pourquoi faut-il croiser plusieurs observations pour construire le modèle ?",
        correction: "1. Croûte → manteau → noyau externe → noyau interne. 2. L’onde S ne peut pas se propager dans le noyau externe liquide. 3. Les ondes ne se propagent pas de la même façon selon les propriétés des matériaux : leur présence, leur absence et leurs vitesses fournissent des indices. 4. Un indice isolé ne décrit pas toute la structure. Croiser les ondes P et S avec d’autres mesures permet de construire et de vérifier un modèle plus solide."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une élève lit que la Terre a environ 4,54 milliards d’années. Elle conclut : « Toutes les roches actuelles ont exactement cet âge, et les scientifiques ont directement observé le centre de la Terre. » 1. Corrige les deux erreurs. 2. Indique comment la radioactivité naturelle aide à estimer des âges. 3. Donne une méthode indirecte utilisée pour étudier l’intérieur du globe. 4. Explique pourquoi les modèles scientifiques peuvent être précisés au cours du temps.",
        correction: "1. Les roches actuelles ont des âges variés : beaucoup se sont formées ou transformées bien après la formation de la Terre. Le centre de la Terre n’a pas été observé directement. 2. La datation radiométrique utilise la transformation de certains éléments radioactifs pour estimer l’âge de matériaux adaptés. 3. L’étude des ondes sismiques est une méthode indirecte. 4. De nouvelles mesures et de nouveaux indices peuvent améliorer ou corriger les interprétations précédentes."
      }
    ]
  }
]);
