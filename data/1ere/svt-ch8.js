enregistrerChapitres("1ere", "svt", [
  {
    id: 8,
    titre: "Chapitre 8 : Les cycles du carbone et de l’azote",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "La matière circule dans les écosystèmes",
        blocs: [
          {
            type: "introduction",
            titre: "Une circulation permanente",
            texte: "Dans un écosystème, les êtres vivants échangent de la matière entre eux et avec leur environnement. Les éléments chimiques comme le carbone et l’azote passent successivement dans l’air, l’eau, le sol et les organismes. Ils sont transformés et réutilisés : on parle de cycles de la matière."
          },
          {
            type: "definition",
            titre: "Écosystème",
            texte: "Un écosystème est formé par un milieu de vie et l’ensemble des êtres vivants qui y vivent, ainsi que par les interactions entre eux et avec ce milieu. Une forêt, une rizière ou un lac sont des exemples d’écosystèmes."
          },
          {
            type: "definition",
            titre: "Producteurs, consommateurs et décomposeurs",
            texte: "Les producteurs primaires, comme les plantes vertes, fabriquent de la matière organique à partir de matière minérale grâce notamment à la photosynthèse. Les consommateurs obtiennent de la matière organique en mangeant d’autres êtres vivants ou leurs produits. Les décomposeurs utilisent et transforment la matière organique morte ou les déchets."
          },
          {
            type: "remarque",
            titre: "Cycle de la matière et énergie",
            texte: "Les éléments chimiques peuvent être recyclés dans un écosystème. L’énergie, elle, ne suit pas le même cycle : une partie de l’énergie reçue par les êtres vivants est dissipée sous forme de chaleur lors de leurs activités."
          },
          {
            type: "schema",
            titre: "Transferts de matière dans un écosystème",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" role="img" aria-labelledby="svt8s1t svt8s1d">
  <title id="svt8s1t">Circulation simplifiée de la matière</title>
  <desc id="svt8s1d">La matière minérale est utilisée par les producteurs. Les consommateurs se nourrissent des producteurs. Les restes sont transformés par les décomposeurs, ce qui contribue au retour de matière minérale dans le milieu.</desc>
  <defs>
    <marker id="svt8a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="700" height="300" fill="#fff"/>
  <rect x="20" y="35" width="180" height="70" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="110" y="65" text-anchor="middle" font-size="16">Matière minérale</text>
  <text x="110" y="87" text-anchor="middle" font-size="14">air, eau, sol</text>
  <rect x="260" y="35" width="180" height="70" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="350" y="65" text-anchor="middle" font-size="16">Producteurs</text>
  <text x="350" y="87" text-anchor="middle" font-size="14">plantes vertes</text>
  <rect x="500" y="35" width="180" height="70" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="590" y="65" text-anchor="middle" font-size="16">Consommateurs</text>
  <text x="590" y="87" text-anchor="middle" font-size="14">animaux</text>
  <rect x="260" y="200" width="180" height="70" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="350" y="230" text-anchor="middle" font-size="16">Décomposeurs</text>
  <text x="350" y="252" text-anchor="middle" font-size="14">micro-organismes</text>
  <path d="M200 70 L255 70 M440 70 L495 70 M590 105 L440 210 M350 105 L350 195 M260 235 L110 110" fill="none" stroke="#444" stroke-width="2" marker-end="url(#svt8a1)"/>
</svg>`,
            legende: "Schéma simplifié : les déchets et les organismes morts alimentent les réseaux de décomposition."
          }
        ]
      },

      {
        id: 2,
        titre: "Le cycle du carbone",
        blocs: [
          {
            type: "definition",
            titre: "Réservoirs de carbone",
            texte: "Le carbone est présent dans plusieurs réservoirs : l’atmosphère sous forme de CO₂, les êtres vivants et leurs débris sous forme de molécules organiques, les océans sous plusieurs formes dissoutes, ainsi que certaines roches et combustibles fossiles."
          },
          {
            type: "definition",
            titre: "De l’air aux êtres vivants",
            texte: "Les organismes photosynthétiques prélèvent du CO₂ et incorporent son carbone dans de la matière organique. Ce carbone peut ensuite passer aux animaux et à d’autres organismes par l’alimentation."
          },
          {
            type: "definition",
            titre: "Retour du carbone vers le milieu",
            texte: "La respiration des êtres vivants rejette du CO₂. La décomposition de matière organique par des organismes décomposeurs libère également du carbone vers le milieu, notamment sous forme de CO₂ lorsque la respiration aérobie domine. La combustion du bois et des combustibles fossiles libère aussi du CO₂."
          },
          {
            type: "remarque",
            titre: "Des transformations et des durées différentes",
            texte: "Une partie du carbone organique peut être stockée longtemps dans les sols ou les sédiments. À des échelles de temps géologiques, certains dépôts peuvent contribuer à la formation de combustibles fossiles ou de roches riches en carbone. Les échanges entre l’atmosphère et les océans se produisent dans les deux sens."
          },
          {
            type: "schema",
            titre: "Cycle simplifié du carbone",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 380" role="img" aria-labelledby="svt8s2t svt8s2d">
  <title id="svt8s2t">Cycle simplifié du carbone</title>
  <desc id="svt8s2d">Le dioxyde de carbone de l'air est utilisé par les plantes. Le carbone passe aux animaux par l'alimentation. La respiration, la décomposition et la combustion renvoient du dioxyde de carbone vers l'air.</desc>
  <defs>
    <marker id="svt8a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="720" height="380" fill="#fff"/>
  <rect x="260" y="20" width="200" height="55" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="360" y="53" text-anchor="middle" font-size="17">CO₂ atmosphérique</text>
  <rect x="30" y="145" width="180" height="65" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="120" y="173" text-anchor="middle" font-size="16">Plantes</text>
  <text x="120" y="195" text-anchor="middle" font-size="14">matière organique</text>
  <rect x="270" y="145" width="180" height="65" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="360" y="182" text-anchor="middle" font-size="16">Animaux</text>
  <rect x="510" y="145" width="180" height="65" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="600" y="173" text-anchor="middle" font-size="16">Décomposeurs</text>
  <text x="600" y="195" text-anchor="middle" font-size="14">et débris</text>
  <rect x="270" y="285" width="180" height="65" rx="8" fill="#e7ded5" stroke="#806b55"/>
  <text x="360" y="313" text-anchor="middle" font-size="15">Stockage dans les sols</text>
  <text x="360" y="335" text-anchor="middle" font-size="15">et certains sédiments</text>
  <path d="M300 75 L150 140" stroke="#444" stroke-width="2" marker-end="url(#svt8a2)"/>
  <text x="75" y="105" font-size="13">Photosynthèse</text>
  <path d="M210 177 L265 177 M450 177 L505 177" stroke="#444" stroke-width="2" marker-end="url(#svt8a2)"/>
  <text x="210" y="160" font-size="13">Alimentation</text>
  <path d="M115 145 Q100 55 255 48 M360 145 L360 80 M600 145 Q610 55 465 48" fill="none" stroke="#8a4f4f" stroke-width="2" marker-end="url(#svt8a2)"/>
  <text x="470" y="105" font-size="13">Respiration</text>
  <path d="M600 210 L450 285" stroke="#444" stroke-width="2" marker-end="url(#svt8a2)"/>
</svg>`,
            legende: "La combustion et les échanges avec les océans, décrits dans le texte, ne sont pas représentés sur ce schéma simplifié."
          },
          {
            type: "remarque",
            titre: "Activités humaines",
            texte: "La combustion de charbon, de pétrole et de gaz fossile transfère vers l’atmosphère du carbone stocké depuis très longtemps. La déforestation et les changements d’usage des sols peuvent aussi modifier les stocks et les flux de carbone. L’augmentation du CO₂ atmosphérique contribue au réchauffement climatique."
          }
        ]
      },

      {
        id: 3,
        titre: "Le cycle de l’azote",
        blocs: [
          {
            type: "introduction",
            titre: "Un élément indispensable",
            texte: "L’azote entre notamment dans la composition des acides aminés et des protéines. Il est abondant dans l’atmosphère sous forme de diazote N₂, mais la plupart des plantes ne peuvent pas utiliser directement ce diazote atmosphérique."
          },
          {
            type: "definition",
            titre: "Fixation du diazote",
            texte: "Certains micro-organismes transforment le diazote N₂ en composés azotés utilisables dans le milieu vivant : c’est la fixation biologique de l’azote. Certains vivent en association avec des légumineuses, dans des nodosités présentes sur leurs racines."
          },
          {
            type: "definition",
            titre: "Absorption par les plantes",
            texte: "Les plantes absorbent principalement l’azote minéral du sol sous forme d’ions nitrate NO₃⁻ et d’ions ammonium NH₄⁺, selon les espèces et les conditions. Elles utilisent cet azote pour fabriquer leurs molécules organiques, notamment les acides aminés."
          },
          {
            type: "definition",
            titre: "Transfert aux animaux",
            texte: "Les animaux obtiennent l’azote nécessaire à leur organisme en consommant des aliments contenant des molécules organiques azotées, notamment des protéines. Ils utilisent ensuite les produits de leur digestion pour fabriquer leurs propres molécules."
          },
          {
            type: "definition",
            titre: "Minéralisation",
            texte: "Les déchets et les organismes morts contiennent de l’azote organique. Des décomposeurs transforment une partie de cet azote en azote minéral, notamment sous forme d’ammonium : c’est une étape de la minéralisation."
          },
          {
            type: "definition",
            titre: "Nitrification et dénitrification",
            texte: "La nitrification est la transformation de l’ammonium en nitrites puis en nitrates par certains micro-organismes, généralement en présence de dioxygène. La dénitrification est la transformation de nitrates en gaz azotés, notamment N₂, par certains micro-organismes dans des conditions pauvres en dioxygène."
          },
          {
            type: "schema",
            titre: "Cycle simplifié de l’azote",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 410" role="img" aria-labelledby="svt8s3t svt8s3d">
  <title id="svt8s3t">Cycle simplifié de l'azote</title>
  <desc id="svt8s3d">Certains micro-organismes fixent le diazote atmosphérique. Les plantes absorbent des ions azotés du sol, puis l'azote passe aux animaux. La décomposition et la nitrification renouvellent les ions du sol ; la dénitrification renvoie du diazote vers l'atmosphère.</desc>
  <defs>
    <marker id="svt8a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="740" height="410" fill="#fff"/>
  <rect x="260" y="15" width="220" height="50" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="370" y="46" text-anchor="middle" font-size="17">Diazote N₂ de l'air</text>
  <rect x="25" y="155" width="190" height="65" rx="8" fill="#e7ded5" stroke="#806b55"/>
  <text x="120" y="183" text-anchor="middle" font-size="15">Ions du sol</text>
  <text x="120" y="204" text-anchor="middle" font-size="15">NH₄⁺ et NO₃⁻</text>
  <rect x="275" y="155" width="190" height="65" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="370" y="183" text-anchor="middle" font-size="16">Plantes</text>
  <text x="370" y="204" text-anchor="middle" font-size="14">matière organique azotée</text>
  <rect x="525" y="155" width="190" height="65" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="620" y="190" text-anchor="middle" font-size="16">Animaux</text>
  <rect x="265" y="315" width="210" height="65" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="370" y="344" text-anchor="middle" font-size="16">Déchets et débris</text>
  <text x="370" y="365" text-anchor="middle" font-size="14">décomposition</text>
  <path d="M285 65 L125 150" stroke="#444" stroke-width="2" marker-end="url(#svt8a3)"/>
  <text x="35" y="95" font-size="13">Fixation biologique</text>
  <path d="M215 175 L270 175 M465 185 L520 185" stroke="#444" stroke-width="2" marker-end="url(#svt8a3)"/>
  <text x="220" y="160" font-size="13">Absorption</text>
  <path d="M370 220 L370 310 M620 220 L475 325" stroke="#444" stroke-width="2" marker-end="url(#svt8a3)"/>
  <path d="M265 345 Q110 345 110 225" fill="none" stroke="#444" stroke-width="2" marker-end="url(#svt8a3)"/>
  <text x="80" y="300" font-size="13">Minéralisation</text>
  <path d="M70 155 Q35 45 255 38" fill="none" stroke="#8a4f4f" stroke-width="2" marker-end="url(#svt8a3)"/>
  <text x="75" y="125" font-size="13">Dénitrification</text>
</svg>`,
            legende: "Schéma simplifié. La nitrification transforme notamment l’ammonium en nitrates ; elle n’est pas détaillée ici. La fixation biologique passe par des micro-organismes."
          }
        ]
      },

      {
        id: 4,
        titre: "La décomposition et le renouvellement des ressources minérales",
        blocs: [
          {
            type: "definition",
            titre: "Décomposition de la matière organique",
            texte: "La décomposition est la transformation progressive des restes d’êtres vivants et des déchets organiques. Elle fait intervenir de nombreux organismes du sol. Des animaux fragmentent et mélangent les débris ; des bactéries et des champignons les transforment par leurs activités."
          },
          {
            type: "tableau",
            titre: "Quelques acteurs du sol",
            entetes: ["Acteurs", "Rôle possible"],
            lignes: [
              ["Vers de terre et autres animaux du sol", "Fragmentent, déplacent ou mélangent les débris organiques ; ils contribuent à l’aération et à la structure du sol."],
              ["Champignons", "Dégradent diverses matières organiques grâce à des enzymes et participent à leur transformation."],
              ["Bactéries et autres micro-organismes", "Participent à la décomposition, à la minéralisation et à plusieurs transformations de l’azote."]
            ]
          },
          {
            type: "definition",
            titre: "Ressources minérales",
            texte: "Les ressources minérales nécessaires aux plantes comprennent l’eau et les ions disponibles dans leur milieu. Une partie des ions du sol est renouvelée par la transformation de matière organique et par l’altération des roches. Les ions peuvent aussi être perdus par prélèvement, lessivage ou récolte."
          },
          {
            type: "remarque",
            titre: "Un renouvellement qui dépend des conditions",
            texte: "La décomposition dépend notamment de la température, de l’humidité, de l’aération et de la nature des débris. Elle ne se déroule pas à la même vitesse dans tous les sols. Un sol durablement inondé ou très sec peut présenter des transformations différentes d’un sol humide et aéré."
          },
          {
            type: "exemple",
            titre: "Compost",
            texte: "Le compostage permet la transformation de déchets organiques par des organismes décomposeurs. Un compost mûr peut contribuer à apporter de la matière organique et des éléments minéraux au sol. Sa préparation nécessite notamment une humidité et une aération adaptées."
          }
        ]
      },

      {
        id: 5,
        titre: "Agriculture et cycles de la matière",
        blocs: [
          {
            type: "introduction",
            titre: "Les récoltes exportent de la matière",
            texte: "Lorsqu’on récolte du riz, des légumes ou d’autres produits, on retire du champ une partie des éléments minéraux incorporés aux plantes. Sans renouvellement suffisant, certains éléments disponibles dans le sol peuvent diminuer."
          },
          {
            type: "tableau",
            titre: "Pratiques et effets possibles",
            entetes: ["Pratique", "Effet possible"],
            lignes: [
              ["Apport de compost ou de fumier bien préparé", "Ajoute de la matière organique et des éléments au sol ; leurs effets dépendent du produit et des conditions."],
              ["Culture de légumineuses", "Certaines associations avec des micro-organismes fixateurs contribuent à l’entrée d’azote dans le système."],
              ["Rotation des cultures", "Diversifie les plantes cultivées et peut contribuer à la gestion de la fertilité et de certains ravageurs."],
              ["Apport raisonné d’engrais", "Peut corriger une insuffisance en éléments minéraux si les doses et les périodes sont adaptées."]
            ]
          },
          {
            type: "remarque",
            titre: "Limiter les pertes",
            texte: "Un excès d’engrais azoté peut entraîner des pertes de nitrates par lessivage et contribuer à la pollution de l’eau. Une fertilisation adaptée aux besoins des cultures et aux conditions du sol permet de limiter les excès."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Le carbone et l’azote circulent entre les êtres vivants et leur environnement. La photosynthèse incorpore du carbone provenant du CO₂ ; la respiration et la décomposition contribuent à son retour vers le milieu. L’azote passe notamment par la fixation biologique, l’absorption des ions par les plantes, l’alimentation, la minéralisation et d’autres transformations microbiennes. Les décomposeurs participent au renouvellement des ressources minérales."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir un producteur primaire, un consommateur et un décomposeur. Donner un exemple de chacun.",
        correction: "Un producteur primaire fabrique de la matière organique à partir de matière minérale, par exemple une plante verte grâce à la photosynthèse. Un consommateur obtient de la matière organique en consommant d’autres organismes ou leurs produits, par exemple un zébu. Un décomposeur transforme de la matière organique morte ou des déchets, par exemple un champignon du sol."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Décrire un trajet possible d’un atome de carbone depuis le CO₂ de l’air jusqu’à un animal, puis son retour vers l’atmosphère.",
        correction: "Une plante prélève le CO₂ de l’air et incorpore son carbone dans de la matière organique par photosynthèse. Un animal mange la plante et absorbe une partie de cette matière. Lors de la respiration cellulaire, une partie de ce carbone peut être rejetée sous forme de CO₂, qui retourne vers l’atmosphère."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Sous quelles formes les plantes absorbent-elles principalement l’azote minéral du sol ? Pourquoi en ont-elles besoin ?",
        correction: "Les plantes absorbent principalement des ions nitrate NO₃⁻ et ammonium NH₄⁺, selon les espèces et les conditions. Elles utilisent cet azote notamment pour fabriquer des acides aminés, puis des protéines et d’autres molécules azotées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "L’atmosphère contient beaucoup de diazote N₂. Pourquoi une plante ne peut-elle pas nécessairement satisfaire ses besoins en azote directement à partir de cet air ?",
        correction: "La plupart des plantes ne peuvent pas utiliser directement le diazote atmosphérique. Elles absorbent surtout de l’azote minéral du sol. Certains micro-organismes fixent le N₂ et le transforment en composés azotés ; quelques-uns vivent en association avec des légumineuses."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associer les transformations suivantes à leur nom : a) ammonium transformé en nitrates en plusieurs étapes ; b) nitrates transformés notamment en N₂ ; c) azote organique des débris transformé notamment en ammonium.",
        correction: "a) Nitrification : l’ammonium est transformé en nitrites puis en nitrates par certains micro-organismes. b) Dénitrification : certains micro-organismes transforment des nitrates en gaz azotés, notamment N₂. c) Minéralisation : des décomposeurs transforment une partie de l’azote organique en azote minéral, notamment en ammonium."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Des feuilles mortes s’accumulent sur un sol. Expliquer le rôle possible des animaux du sol et des micro-organismes dans leur transformation.",
        correction: "Des animaux du sol peuvent fragmenter, déplacer et mélanger les feuilles mortes. Des bactéries et des champignons poursuivent leur dégradation grâce à leurs activités et à leurs enzymes. Une partie de la matière organique est ainsi transformée, notamment en substances minérales pouvant redevenir disponibles pour les plantes."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un agriculteur récolte chaque année les plantes d’un champ et ne restitue aucun résidu ni apport au sol. Pourquoi certains éléments minéraux disponibles peuvent-ils diminuer au fil du temps ?",
        correction: "Les plantes absorbent des éléments minéraux du sol et les incorporent à leur matière. La récolte exporte une partie de ces éléments hors du champ. Si les entrées et le renouvellement ne compensent pas les exportations et les pertes, la disponibilité de certains éléments peut diminuer."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un champ reçoit un excès d’engrais riche en nitrates avant de fortes pluies. Quel risque existe pour les eaux voisines ? Expliquer.",
        correction: "Les nitrates en excès peuvent être entraînés par l’eau qui traverse le sol : c’est le lessivage. Ils peuvent atteindre les eaux souterraines ou les cours d’eau et contribuer à leur pollution. Un apport adapté aux besoins des cultures et aux conditions du sol limite ce risque."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « Dans un écosystème, l’énergie et la matière sont toutes deux recyclées exactement de la même façon. » Corriger.",
        correction: "Les éléments chimiques de la matière peuvent être réutilisés et circuler entre les organismes et le milieu. L’énergie, en revanche, est transférée et transformée ; une partie est dissipée sous forme de chaleur lors des activités des êtres vivants. Elle ne suit donc pas un cycle identique à celui de la matière."
      }
    ]
  }
]);
