enregistrerChapitres("1ere", "svt", [
  {
    id: 4,
    titre: "Chapitre 4 : La production de matière organique par les végétaux",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les végétaux chlorophylliens, producteurs primaires",
        blocs: [
          {
            type: "introduction",
            titre: "Produire sa matière",
            texte: "Une plante verte grandit en fabriquant sa propre matière organique. À la lumière, ses organes chlorophylliens utilisent notamment le dioxyde de carbone de l’air et l’eau absorbée par les racines. Les éléments minéraux prélevés dans le sol sont également nécessaires à la fabrication et au fonctionnement des cellules."
          },
          {
            type: "definition",
            titre: "Production primaire",
            texte: "La production primaire est la fabrication de matière organique à partir de matière minérale par des organismes producteurs primaires. Les végétaux chlorophylliens réalisent cette production grâce à la photosynthèse. D’autres organismes, comme les algues et certaines bactéries, sont aussi capables de photosynthèse."
          },
          {
            type: "definition",
            titre: "Photosynthèse",
            texte: "La photosynthèse est un ensemble de réactions qui permet aux organismes photosynthétiques d’utiliser l’énergie lumineuse pour fabriquer de la matière organique à partir notamment de dioxyde de carbone et d’eau. Chez les plantes et les algues, elle s’accompagne d’un dégagement de dioxygène."
          },
          {
            type: "schema",
            titre: "Entrées et sorties d’une feuille éclairée",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" role="img" aria-labelledby="svt4s1t svt4s1d">
  <title id="svt4s1t">Photosynthèse dans une feuille</title>
  <desc id="svt4s1d">La feuille reçoit la lumière, du dioxyde de carbone et de l'eau. Elle produit de la matière organique et rejette du dioxygène.</desc>
  <defs>
    <marker id="svt4a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#345"/></marker>
  </defs>
  <rect width="680" height="300" fill="#fff"/>
  <path d="M225 150 Q320 45 455 145 Q330 245 225 150 Z" fill="#9ad18b" stroke="#39733a" stroke-width="3"/>
  <path d="M230 150 L440 150" stroke="#39733a" stroke-width="2"/>
  <text x="340" y="145" text-anchor="middle" font-size="17">Feuille</text>
  <text x="340" y="168" text-anchor="middle" font-size="14">chlorophyllienne</text>
  <text x="26" y="83" font-size="17">CO₂ de l'air</text>
  <path d="M145 88 L235 130" stroke="#345" stroke-width="3" marker-end="url(#svt4a1)"/>
  <text x="30" y="247" font-size="17">Eau des racines</text>
  <path d="M170 238 L240 176" stroke="#345" stroke-width="3" marker-end="url(#svt4a1)"/>
  <text x="292" y="28" font-size="17">Lumière</text>
  <path d="M335 35 L335 85" stroke="#345" stroke-width="3" marker-end="url(#svt4a1)"/>
  <text x="500" y="92" font-size="17">Dioxygène</text>
  <path d="M445 125 L525 100" stroke="#345" stroke-width="3" marker-end="url(#svt4a1)"/>
  <text x="485" y="233" font-size="17">Matière organique</text>
  <path d="M435 175 L505 210" stroke="#345" stroke-width="3" marker-end="url(#svt4a1)"/>
</svg>`,
            legende: "Bilan simplifié des échanges liés à la photosynthèse. La feuille respire aussi, de jour comme de nuit."
          },
          {
            type: "regle",
            titre: "Bilan global simplifié",
            texte: "Pour une production simplifiée de glucose : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, en présence de lumière et d’un appareil photosynthétique fonctionnel. Ce bilan résume un ensemble de réactions : la plante peut ensuite transformer les produits obtenus en de nombreuses autres molécules organiques."
          }
        ]
      },

      {
        id: 2,
        titre: "La chlorophylle et l’énergie lumineuse",
        blocs: [
          {
            type: "definition",
            titre: "Chlorophylle et chloroplastes",
            texte: "La chlorophylle est un pigment capable d’absorber une partie de la lumière. Chez les végétaux verts, elle se trouve dans les chloroplastes, organites présents dans les cellules des organes chlorophylliens. Les chloroplastes contiennent aussi d’autres pigments qui participent à la capture de la lumière."
          },
          {
            type: "definition",
            titre: "Conversion d’énergie",
            texte: "Les pigments photosynthétiques captent une partie de l’énergie lumineuse. Cette énergie est convertie en énergie chimique utilisable dans les réactions qui conduisent notamment à la production de matière organique à partir du CO₂."
          },
          {
            type: "remarque",
            titre: "Pourquoi une feuille paraît-elle verte ?",
            texte: "Les chlorophylles absorbent notamment des lumières bleue et rouge. Une partie de la lumière verte est davantage réfléchie ou transmise : la feuille paraît donc généralement verte. La quantité de lumière absorbée dépend aussi des autres pigments et de l’organisation de la feuille."
          },
          {
            type: "schema",
            titre: "De la feuille au chloroplaste",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 255" role="img" aria-labelledby="svt4s2t svt4s2d">
  <title id="svt4s2t">Localisation des chloroplastes</title>
  <desc id="svt4s2d">Une feuille contient des cellules chlorophylliennes qui renferment des chloroplastes ; ceux-ci contiennent des pigments capables de capter la lumière.</desc>
  <defs>
    <marker id="svt4a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="255" fill="#fff"/>
  <path d="M35 125 Q85 40 160 125 Q85 205 35 125 Z" fill="#9ad18b" stroke="#39733a" stroke-width="3"/>
  <text x="95" y="225" text-anchor="middle" font-size="16">Feuille</text>
  <rect x="235" y="55" width="155" height="140" rx="14" fill="#f2f8ed" stroke="#39733a" stroke-width="3"/>
  <ellipse cx="270" cy="90" rx="19" ry="11" fill="#60a650"/>
  <ellipse cx="340" cy="85" rx="19" ry="11" fill="#60a650"/>
  <ellipse cx="275" cy="155" rx="19" ry="11" fill="#60a650"/>
  <ellipse cx="345" cy="155" rx="19" ry="11" fill="#60a650"/>
  <circle cx="310" cy="125" r="17" fill="#d9c5e8" stroke="#765"/>
  <text x="312" y="225" text-anchor="middle" font-size="16">Cellule végétale</text>
  <ellipse cx="550" cy="125" rx="83" ry="48" fill="#a8d69b" stroke="#39733a" stroke-width="3"/>
  <path d="M500 112 L600 112 M500 123 L600 123 M500 134 L600 134" stroke="#39733a" stroke-width="5"/>
  <text x="550" y="225" text-anchor="middle" font-size="16">Chloroplaste</text>
  <path d="M170 125 L225 125 M400 125 L455 125" stroke="#444" stroke-width="2" marker-end="url(#svt4a2)"/>
  <text x="550" y="30" text-anchor="middle" font-size="15">Pigments dans des membranes</text>
</svg>`,
            legende: "Schéma simplifié et non à l’échelle. Les pigments se trouvent dans des membranes internes du chloroplaste."
          },
          {
            type: "methode",
            titre: "Mettre en évidence le rôle des zones vertes",
            texte: "Après une période d’obscurité destinée à diminuer les réserves d’amidon, éclairer une plante à feuilles panachées. Prélever une feuille et rechercher l’amidon avec de l’eau iodée après une préparation adaptée. Si les zones vertes deviennent bleu-noir et les zones non vertes ne se colorent pas ainsi, le résultat relie la production d’amidon aux zones chlorophylliennes éclairées. La préparation et le chauffage doivent être encadrés."
          }
        ]
      },

      {
        id: 3,
        titre: "Les molécules produites et leurs rôles",
        blocs: [
          {
            type: "introduction",
            titre: "Une production diversifiée",
            texte: "La photosynthèse fournit des molécules carbonées qui servent à fabriquer d’autres substances. Selon les besoins de la plante, elles sont utilisées, transportées, stockées ou intégrées aux structures cellulaires."
          },
          {
            type: "tableau",
            titre: "Principales substances organiques végétales",
            entetes: ["Substance", "Nature et rôle"],
            lignes: [
              ["Glucose", "Glucide simple pouvant servir de source d’énergie et de matière première pour d’autres synthèses."],
              ["Saccharose", "Glucide souvent transporté dans le phloème des feuilles vers d’autres organes."],
              ["Amidon", "Glucide de réserve formé de nombreuses unités de glucose ; il peut s’accumuler dans des organes de réserve."],
              ["Cellulose", "Glucide formé de nombreuses unités de glucose ; elle participe à la structure des parois végétales."],
              ["Lipides", "Substances participant aux membranes et pouvant constituer des réserves, notamment dans certaines graines."],
              ["Acides aminés", "Petites molécules contenant notamment de l’azote, utilisées pour fabriquer des peptides et des protéines."],
              ["Peptides et protéines", "Chaînes d’acides aminés ; les protéines assurent de nombreuses fonctions, notamment structurales et enzymatiques."]
            ]
          },
          {
            type: "definition",
            titre: "De l’azote minéral aux protéines",
            texte: "Pour fabriquer des acides aminés et des protéines, la plante a besoin d’azote. Elle peut l’obtenir notamment à partir des ions nitrate absorbés par ses racines, puis transformés dans ses cellules. Les molécules carbonées issues de la photosynthèse fournissent une partie de la matière nécessaire à ces synthèses."
          },
          {
            type: "remarque",
            titre: "Amidon et cellulose",
            texte: "L’amidon et la cellulose sont tous deux constitués d’unités de glucose, mais leurs liaisons et leurs structures diffèrent. L’amidon est une réserve ; la cellulose joue un rôle structural dans la paroi. L’être humain digère l’amidon, mais pas la cellulose avec ses propres enzymes."
          },
          {
            type: "schema",
            titre: "Quelques devenirs des produits de la photosynthèse",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 330" role="img" aria-labelledby="svt4s3t svt4s3d">
  <title id="svt4s3t">Diversité des matières organiques végétales</title>
  <desc id="svt4s3d">Les produits carbonés de la photosynthèse contribuent à la production de sucres, d'amidon, de cellulose, de lipides et, avec de l'azote minéral, de protéines.</desc>
  <defs>
    <marker id="svt4a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="700" height="330" fill="#fff"/>
  <rect x="225" y="20" width="250" height="65" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="350" y="47" text-anchor="middle" font-size="16">Produits carbonés</text>
  <text x="350" y="68" text-anchor="middle" font-size="16">de la photosynthèse</text>
  <path d="M250 85 L105 150 M300 85 L260 150 M400 85 L440 150 M450 85 L595 150" fill="none" stroke="#444" stroke-width="2" marker-end="url(#svt4a3)"/>
  <rect x="20" y="155" width="170" height="75" rx="8" fill="#f7ecd2" stroke="#98783a"/>
  <text x="105" y="184" text-anchor="middle" font-size="15">Saccharose</text>
  <text x="105" y="207" text-anchor="middle" font-size="14">transport</text>
  <rect x="205" y="155" width="125" height="75" rx="8" fill="#f7ecd2" stroke="#98783a"/>
  <text x="267" y="184" text-anchor="middle" font-size="15">Amidon</text>
  <text x="267" y="207" text-anchor="middle" font-size="14">réserve</text>
  <rect x="350" y="155" width="170" height="75" rx="8" fill="#f7ecd2" stroke="#98783a"/>
  <text x="435" y="184" text-anchor="middle" font-size="15">Cellulose</text>
  <text x="435" y="207" text-anchor="middle" font-size="14">paroi</text>
  <rect x="535" y="155" width="145" height="75" rx="8" fill="#f7ecd2" stroke="#98783a"/>
  <text x="607" y="184" text-anchor="middle" font-size="15">Lipides</text>
  <text x="607" y="207" text-anchor="middle" font-size="14">réserve, membrane</text>
  <rect x="205" y="270" width="315" height="45" rx="8" fill="#e4e8f7" stroke="#58678e"/>
  <text x="362" y="298" text-anchor="middle" font-size="15">Avec azote minéral : acides aminés, protéines</text>
  <path d="M350 85 L350 262" stroke="#444" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#svt4a3)"/>
</svg>`,
            legende: "Les flèches représentent des transformations impliquant plusieurs étapes, et non une transformation directe en une seule réaction."
          }
        ]
      },

      {
        id: 4,
        titre: "Mesurer l’intensité de la photosynthèse",
        blocs: [
          {
            type: "definition",
            titre: "Intensité photosynthétique",
            texte: "L’intensité photosynthétique exprime la vitesse de la photosynthèse dans des conditions données. Elle peut être estimée par la quantité de CO₂ consommée, d’O₂ dégagée ou de matière organique produite pendant une durée donnée, rapportée si possible à une quantité de végétal ou à une surface foliaire."
          },
          {
            type: "methode",
            titre: "Suivre le dioxygène dégagé",
            texte: "Placer une plante aquatique éclairée dans un dispositif permettant de mesurer la quantité de dioxygène dégagée pendant un temps donné. Répéter la mesure dans différentes conditions en ne faisant varier qu’un facteur à la fois. Exprimer le résultat, par exemple, en millilitres d’O₂ par heure. Compter les bulles donne seulement une estimation grossière, car leurs volumes peuvent varier."
          },
          {
            type: "methode",
            titre: "Suivre le CO₂",
            texte: "On peut utiliser un capteur de CO₂ dans une enceinte adaptée contenant une feuille ou une plante. On suit l’évolution de la concentration pendant une durée connue, avec un témoin sans végétal. Le résultat dépend notamment du volume de l’enceinte et des échanges avec l’extérieur."
          },
          {
            type: "remarque",
            titre: "Photosynthèse nette et respiration",
            texte: "La plante respire aussi à la lumière : elle consomme de l’O₂ et rejette du CO₂. Une mesure des échanges gazeux observés à la lumière donne donc généralement une estimation nette, résultant de la photosynthèse et de la respiration. Elle ne correspond pas directement à la photosynthèse totale."
          },
          {
            type: "exemple",
            titre: "Calculer une vitesse moyenne",
            texte: "Un dispositif recueille 12 mL de dioxygène en 30 minutes. La vitesse moyenne de dégagement observé est de 12 ÷ 0,5 = 24 mL/h, dans les conditions de l’expérience. Pour comparer deux plantes de tailles différentes, il faut aussi tenir compte de la quantité de végétal ou de la surface foliaire."
          }
        ]
      },

      {
        id: 5,
        titre: "Les facteurs de la photosynthèse",
        blocs: [
          {
            type: "tableau",
            titre: "Effets possibles des facteurs du milieu",
            entetes: ["Facteur", "Effet sur la photosynthèse"],
            lignes: [
              ["Éclairement", "Quand la lumière augmente, l’intensité photosynthétique augmente souvent jusqu’à atteindre un plateau, si les autres conditions restent constantes."],
              ["Concentration en CO₂", "Une augmentation du CO₂ peut stimuler la photosynthèse jusqu’à ce qu’un autre facteur limite la vitesse."],
              ["Température", "Elle influence les réactions enzymatiques. L’intensité augmente souvent jusqu’à une valeur favorable, puis diminue si la température devient excessive."],
              ["Disponibilité en eau", "Un manque d’eau peut provoquer la fermeture des stomates et limiter l’entrée du CO₂."],
              ["État de la plante et éléments minéraux", "Une carence ou une atteinte des feuilles peut réduire la production de chlorophylle, la croissance ou l’activité photosynthétique."]
            ]
          },
          {
            type: "definition",
            titre: "Facteur limitant",
            texte: "Un facteur est limitant lorsque sa valeur restreint la vitesse d’un phénomène dans les conditions considérées. Si l’on augmente ce facteur et que les autres restent favorables, la vitesse peut augmenter. Lorsqu’un autre facteur devient limitant, l’effet de la première augmentation peut cesser."
          },
          {
            type: "exemple",
            titre: "Lumière et CO₂",
            texte: "À faible éclairement, augmenter la lumière peut accroître la photosynthèse : la lumière est alors limitante. À fort éclairement, la vitesse peut atteindre un plateau parce que la quantité de CO₂ ou un autre facteur devient limitant. Augmenter encore la lumière ne suffit alors pas nécessairement à accroître la vitesse."
          },
          {
            type: "schema",
            titre: "Effet possible de l’éclairement",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 300" role="img" aria-labelledby="svt4s4t svt4s4d">
  <title id="svt4s4t">Intensité photosynthétique et éclairement</title>
  <desc id="svt4s4d">Une courbe augmente lorsque l'éclairement augmente puis atteint un plateau, dans des conditions données.</desc>
  <defs>
    <marker id="svt4a4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#333"/></marker>
  </defs>
  <rect width="650" height="300" fill="#fff"/>
  <path d="M85 245 L590 245 M85 245 L85 35" stroke="#333" stroke-width="2" marker-end="url(#svt4a4)"/>
  <path d="M85 235 Q130 155 210 110 Q290 75 370 72 L555 72" fill="none" stroke="#39804a" stroke-width="4"/>
  <text x="325" y="282" text-anchor="middle" font-size="16">Éclairement croissant</text>
  <text x="12" y="30" font-size="15">Intensité</text>
  <text x="12" y="49" font-size="15">photosynthétique</text>
  <text x="140" y="150" font-size="14">Augmentation</text>
  <text x="400" y="60" font-size="14">Plateau</text>
</svg>`,
            legende: "Courbe qualitative : sa forme exacte dépend de l’espèce et des conditions. Au plateau, augmenter encore la lumière n’augmente plus sensiblement la vitesse."
          },
          {
            type: "methode",
            titre: "Étudier un facteur",
            texte: "Préparer plusieurs mesures avec la même plante ou des plantes comparables. Faire varier uniquement le facteur étudié, par exemple l’éclairement, et maintenir autant que possible la température, le CO₂ disponible, la durée et la quantité de végétal constants. Mesurer les échanges gazeux, répéter les mesures puis comparer les vitesses obtenues."
          }
        ]
      },

      {
        id: 6,
        titre: "Photosynthèse et respiration : bilan",
        blocs: [
          {
            type: "tableau",
            titre: "Deux phénomènes complémentaires",
            entetes: ["", "Photosynthèse", "Respiration cellulaire"],
            lignes: [
              ["Quand ?", "Lorsque les conditions nécessaires sont réunies, notamment en présence de lumière.", "De jour comme de nuit dans les cellules vivantes."],
              ["Échanges gazeux habituels", "Consommation de CO₂ et dégagement d’O₂.", "Consommation d’O₂ et dégagement de CO₂."],
              ["Matière et énergie", "Production de matière organique grâce à l’énergie lumineuse.", "Utilisation de matière organique avec libération d’énergie utilisable par la cellule."]
            ]
          },
          {
            type: "remarque",
            titre: "Échanges observés",
            texte: "À la lumière, les deux phénomènes se produisent en même temps. Si la photosynthèse dépasse la respiration pour les échanges considérés, on observe globalement une consommation de CO₂ et un dégagement d’O₂. Dans l’obscurité, la photosynthèse cesse faute de lumière, mais la respiration continue."
          },
          {
            type: "rappel",
            titre: "L’essentiel",
            texte: "Les végétaux chlorophylliens produisent de la matière organique à partir notamment du CO₂ et de l’eau grâce à l’énergie lumineuse captée par des pigments. Ils fabriquent et transforment des glucides, des lipides et des protéines. L’intensité photosynthétique peut être estimée à partir des échanges gazeux. Elle dépend notamment de la lumière, du CO₂, de la température et de l’eau ; un facteur peut limiter sa vitesse."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Compléter le bilan simplifié : dioxyde de carbone + eau → ... + dioxygène. Quelle source d’énergie est nécessaire ? Où se trouvent les pigments chlorophylliens dans la cellule végétale ?",
        correction: "Le bilan simplifié peut s’écrire : dioxyde de carbone + eau → glucose + dioxygène. L’énergie lumineuse est nécessaire. Les pigments chlorophylliens se trouvent dans les chloroplastes, notamment dans leurs membranes internes."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associer chaque substance à son rôle principal parmi les propositions : transport, réserve, paroi. Substances : saccharose, amidon, cellulose.",
        correction: "Le saccharose est fréquemment transporté dans le phloème. L’amidon est une substance de réserve. La cellulose participe à la structure de la paroi végétale. Ces rôles sont indiqués de manière simplifiée."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Pourquoi une plante a-t-elle besoin d’azote minéral pour fabriquer ses protéines ? Donner un exemple d’ion absorbé qui peut lui fournir cet élément.",
        correction: "Les protéines sont constituées d’acides aminés, qui contiennent notamment de l’azote. La plante doit donc disposer d’une source d’azote pour les fabriquer. Les ions nitrate NO₃⁻ absorbés par les racines sont une source possible ; ils sont transformés dans les cellules avant l’incorporation de l’azote dans les molécules organiques."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Une plante aquatique dégage 18 mL de dioxygène en 45 minutes dans un dispositif éclairé. Calculer la vitesse moyenne observée en mL/h.",
        correction: "45 minutes correspondent à 45 ÷ 60 = 0,75 heure. La vitesse moyenne est donc 18 ÷ 0,75 = 24 mL/h. Il s’agit du dégagement observé dans les conditions de l’expérience ; il ne représente pas nécessairement la photosynthèse totale, car la plante respire aussi."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "À température et concentration en CO₂ constantes, une plante présente les vitesses photosynthétiques suivantes : faible lumière : 3 unités ; lumière moyenne : 7 unités ; forte lumière : 7 unités. Interpréter ces résultats.",
        correction: "Lorsque la lumière passe de faible à moyenne, la vitesse augmente de 3 à 7 unités : la lumière limitait probablement la photosynthèse à faible éclairement. Lorsqu’elle passe de moyenne à forte, la vitesse reste à 7 unités : on observe un plateau dans ces conditions. Un autre facteur peut alors limiter la vitesse, mais ces seules données ne permettent pas de déterminer lequel."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une feuille est éclairée mais une partie est recouverte d’un cache opaque. Après diminution préalable des réserves d’amidon et recherche à l’eau iodée, seule la partie éclairée devient bleu-noir. Que montre ce résultat ? Citer une précaution.",
        correction: "La coloration indique que de l’amidon s’est accumulé dans la partie éclairée. La partie cachée n’en a pas accumulé de manière détectable dans les conditions du test. Le résultat soutient le rôle de la lumière dans la production de matière organique. Il faut notamment diminuer au préalable les réserves d’amidon et garder les autres conditions comparables ; la préparation de la feuille doit être encadrée."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « À la lumière, une plante photosynthétise mais ne respire pas. » Corriger cette affirmation.",
        correction: "La plante respire aussi à la lumière : les cellules vivantes consomment du dioxygène et rejettent du CO₂ par respiration. Dans ses organes chlorophylliens éclairés, la photosynthèse se produit en parallèle et entraîne des échanges de sens opposé. Les échanges observés correspondent au bilan des deux phénomènes."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux plantes comparables sont placées à la même température et sous le même éclairage. La première reçoit suffisamment d’eau ; la seconde subit un fort manque d’eau. La photosynthèse de la seconde diminue. Proposer une explication.",
        correction: "Le manque d’eau peut provoquer la fermeture des stomates, ce qui réduit la perte d’eau mais limite aussi l’entrée du CO₂ dans la feuille. La quantité de CO₂ disponible pour la photosynthèse diminue alors, ce qui peut réduire sa vitesse. Un déficit important peut également perturber le fonctionnement des cellules."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un expérimentateur compte 20 bulles de gaz produites en une minute par une plante aquatique éclairée. Pourquoi ce nombre ne permet-il pas à lui seul de connaître précisément le volume de dioxygène produit ?",
        correction: "Les bulles n’ont pas nécessairement toutes le même volume. De plus, le nombre de bulles ne donne pas à lui seul la composition exacte du gaz et une partie du dioxygène peut rester dissoute dans l’eau. Pour une mesure plus précise, il faut utiliser un dispositif adapté de mesure du dioxygène et tenir compte des conditions expérimentales."
      }
    ]
  }
]);
