enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch30",
    titre: "Chapitre 30 : Piles électrochimiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch30-principe",
        titre: "1. Principe d’une pile",
        blocs: [
          {
            type: "introduction",
            titre: "Transformer une énergie chimique",
            texte: "Une pile électrochimique transforme une partie de l’énergie libérée par une réaction chimique spontanée en énergie électrique. Elle peut alimenter un circuit extérieur tant que les conditions de fonctionnement sont réunies."
          },
          {
            type: "definition",
            titre: "Deux demi-piles",
            texte: "Une pile comporte deux électrodes associées à des espèces chimiques. Dans une pile à solutions séparées, les deux compartiments sont reliés par un pont salin et les électrodes sont reliées par un circuit extérieur."
          },
          {
            type: "definition",
            titre: "Anode et cathode",
            texte: "L’anode est l’électrode où se produit l’oxydation. La cathode est l’électrode où se produit la réduction. Pour une pile qui débite, l’anode est la borne négative et la cathode la borne positive."
          },
          {
            type: "regle",
            titre: "Circulation des électrons",
            texte: "Dans le circuit extérieur d’une pile qui débite, les électrons circulent de l’anode vers la cathode. Le courant conventionnel circule en sens opposé."
          },
          {
            type: "remarque",
            titre: "Bien distinguer les sens",
            texte: "Les électrons circulent dans les conducteurs métalliques du circuit extérieur. Dans les solutions et le pont salin, le transport de charge est assuré par des ions."
          }
        ]
      },

      {
        id: "sp1-ch30-daniell",
        titre: "2. Exemple : la pile zinc-cuivre",
        blocs: [
          {
            type: "definition",
            titre: "Constitution",
            texte: "La pile zinc-cuivre, ou pile Daniell, peut être constituée d’une électrode de zinc plongée dans une solution contenant Zn²⁺ et d’une électrode de cuivre plongée dans une solution contenant Cu²⁺. Un pont salin relie les solutions."
          },
          {
            type: "schema",
            titre: "Fonctionnement de la pile Daniell",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 330' role='img' aria-label='Pile Daniell en fonctionnement : à gauche, électrode de zinc négative dans une solution de Zn2+ ; à droite, électrode de cuivre positive dans une solution de Cu2+. Les électrons circulent dans le circuit extérieur du zinc vers le cuivre. Un pont salin relie les solutions.'><path d='M100 125 V250 H280 V125 M440 125 V250 H620 V125' fill='#eaf5ff' stroke='#555' stroke-width='3'/><rect x='155' y='80' width='20' height='130' fill='#999' stroke='#333'/><rect x='535' y='80' width='20' height='130' fill='#c87a45' stroke='#333'/><path d='M165 80 V35 H545 V80' fill='none' stroke='#222' stroke-width='3'/><line x1='270' y1='35' x2='420' y2='35' stroke='#267' stroke-width='3'/><polygon points='420,35 408,28 408,42' fill='#267'/><text x='345' y='22' text-anchor='middle' font-size='16'>électrons e⁻</text><path d='M240 155 V105 Q240 90 255 90 H465 Q480 90 480 105 V155' fill='none' stroke='#7b8b65' stroke-width='12'/><text x='360' y='78' text-anchor='middle' font-size='16'>pont salin</text><text x='190' y='280' text-anchor='middle' font-size='17'>Zn / Zn²⁺</text><text x='530' y='280' text-anchor='middle' font-size='17'>Cu²⁺ / Cu</text><text x='165' y='115' text-anchor='middle' font-size='17'>−</text><text x='545' y='115' text-anchor='middle' font-size='17'>+</text><text x='190' y='305' text-anchor='middle' font-size='15'>anode : oxydation</text><text x='530' y='305' text-anchor='middle' font-size='15'>cathode : réduction</text></svg>",
            legende: "En fonctionnement, le zinc s’oxyde à l’anode et les ions Cu²⁺ se réduisent à la cathode. Le pont salin permet le passage d’ions et maintient l’électroneutralité des solutions."
          },
          {
            type: "regle",
            titre: "Demi-équations et bilan",
            texte: "À l’anode : Zn → Zn²⁺ + 2 e⁻. À la cathode : Cu²⁺ + 2 e⁻ → Cu. L’équation globale est Zn + Cu²⁺ → Zn²⁺ + Cu."
          },
          {
            type: "regle",
            titre: "Rôle du pont salin",
            texte: "Le pont salin permet la migration d’ions entre les compartiments et limite l’accumulation de charges. Dans la pile Daniell, des anions du pont migrent vers le compartiment du zinc et des cations vers celui du cuivre."
          },
          {
            type: "remarque",
            titre: "Évolution des électrodes",
            texte: "Si l’on néglige les transformations parasites, l’électrode de zinc perd de la masse tandis que du cuivre se dépose sur l’électrode de cuivre. Les ions Cu²⁺ sont consommés et des ions Zn²⁺ sont formés."
          }
        ]
      },

      {
        id: "sp1-ch30-tension",
        titre: "3. Tension et potentiels standards",
        blocs: [
          {
            type: "regle",
            titre: "Force électromotrice standard",
            texte: "Pour une pile fonctionnant dans le sens spontané standard, la force électromotrice standard vaut E°pile = E°cathode − E°anode. Les deux potentiels standards sont ceux des couples écrits dans le sens de la réduction."
          },
          {
            type: "exemple",
            titre: "Pile zinc-cuivre",
            texte: "Avec E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = −0,76 V : E°pile = 0,34 − (−0,76) = 1,10 V."
          },
          {
            type: "remarque",
            titre: "Conditions réelles",
            texte: "La tension réelle dépend des conditions, notamment des concentrations, et peut évoluer pendant le fonctionnement. Lorsqu’une pile débite, sa tension aux bornes peut aussi être inférieure à sa force électromotrice à cause de ses effets internes."
          }
        ]
      },

      {
        id: "sp1-ch30-quantites",
        titre: "4. Quantité d’électricité et bilan",
        blocs: [
          {
            type: "definition",
            titre: "Charge et courant",
            texte: "Si l’intensité I est constante pendant une durée Δt, la valeur de la charge électrique transférée dans le circuit est Q = IΔt, avec Q en coulombs, I en ampères et Δt en secondes."
          },
          {
            type: "definition",
            titre: "Constante de Faraday",
            texte: "La constante de Faraday F représente la valeur absolue de la charge portée par une mole d’électrons. On utilise F ≈ 96 500 C·mol⁻¹. La quantité de matière d’électrons transférés est ne = Q/F."
          },
          {
            type: "exemple",
            titre: "Relier électrons et réaction",
            texte: "Dans la pile Daniell, Zn → Zn²⁺ + 2 e⁻. Si 0,10 mol de Zn est oxydée, 0,20 mol d’électrons est transférée. La charge correspondante vaut Q = neF = 0,20 × 96 500 = 19 300 C."
          },
          {
            type: "methode",
            titre: "Résoudre un problème de pile",
            texte: "1. Écrire l’équation de la pile et les demi-équations. 2. Identifier le réactif limitant si les quantités initiales sont données. 3. Relier la quantité de matière consommée à celle des électrons. 4. Utiliser Q = neF, puis Q = IΔt si le courant est constant. 5. Préciser les hypothèses : réaction complète, absence de réactions parasites et courant constant si nécessaire."
          },
          {
            type: "remarque",
            titre: "Sécurité et environnement",
            texte: "Ne démonte pas une pile et ne la court-circuite pas. Les piles usagées doivent être déposées dans une filière de collecte adaptée, et non jetées dans la nature."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une pile qui débite, à quelle électrode se produit l’oxydation ? Cette électrode est-elle la borne positive ou négative ?",
        correction: "L’oxydation se produit à l’anode. Dans une pile qui débite, l’anode est la borne négative."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le circuit extérieur d’une pile qui débite, les électrons circulent-ils de l’anode vers la cathode ou de la cathode vers l’anode ?",
        correction: "Ils circulent de l’anode vers la cathode. Le courant conventionnel circule en sens opposé."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une pile zinc-cuivre, les couples sont Zn²⁺/Zn et Cu²⁺/Cu. Le zinc s’oxyde et Cu²⁺ se réduit. Écris les deux demi-équations et l’équation globale.",
        correction: "Anode : Zn → Zn²⁺ + 2 e⁻. Cathode : Cu²⁺ + 2 e⁻ → Cu. Bilan : Zn + Cu²⁺ → Zn²⁺ + Cu."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pile a pour cathode le couple Cu²⁺/Cu de potentiel standard +0,34 V et pour anode le couple Zn²⁺/Zn de potentiel standard −0,76 V. Calcule sa force électromotrice standard.",
        correction: "E°pile = E°cathode − E°anode = 0,34 − (−0,76) = 1,10 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une pile débite un courant constant de 0,20 A pendant 30 minutes. Calcule la charge transférée, puis la quantité de matière d’électrons. On donne F = 96 500 C·mol⁻¹.",
        correction: "Δt = 30 × 60 = 1 800 s. Q = IΔt = 0,20 × 1 800 = 360 C. Donc ne = Q/F = 360/96 500 ≈ 3,73 × 10⁻³ mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une pile Daniell, la réaction est Zn + Cu²⁺ → Zn²⁺ + Cu. On suppose que 0,050 mol de zinc réagit sans transformation parasite. Détermine la quantité de cuivre déposée et la quantité d’électrons transférés.",
        correction: "L’équation globale donne 1 mol de cuivre pour 1 mol de zinc : n(Cu) = 0,050 mol. La demi-équation Zn → Zn²⁺ + 2 e⁻ montre que ne = 2 × 0,050 = 0,100 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pile Daniell fonctionne selon Zn + Cu²⁺ → Zn²⁺ + Cu. Elle contient initialement 0,15 mol de Zn et 0,10 mol de Cu²⁺ disponibles. On suppose la réaction complète, sans réaction parasite. Détermine le réactif limitant, la quantité d’électrons transférés et la charge totale. On donne F = 96 500 C·mol⁻¹.",
        correction: "Le rapport Zn/Cu²⁺ est 1:1 : Cu²⁺ est limitant. L’avancement maximal est 0,10 mol. Chaque mole de Zn oxydée libère 2 mol d’électrons : ne = 0,20 mol. La charge totale est Q = neF = 0,20 × 96 500 = 19 300 C."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pile Daniell débite un courant constant I = 0,50 A pendant 1,0 h. On suppose que toute la charge correspond à la réaction Zn → Zn²⁺ + 2 e⁻, sans réaction parasite. Données : F = 96 500 C·mol⁻¹ et M(Zn) = 65,4 g·mol⁻¹. Calcule la charge transférée, puis la masse de zinc consommée.",
        correction: "Δt = 3 600 s. Q = IΔt = 0,50 × 3 600 = 1 800 C. ne = Q/F = 1 800/96 500 ≈ 0,01865 mol. Comme 1 mol de Zn libère 2 mol d’électrons, n(Zn) ≈ 0,00933 mol. La masse consommée est m = nM ≈ 0,00933 × 65,4 ≈ 0,61 g."
      }
    ]
  }
]);
