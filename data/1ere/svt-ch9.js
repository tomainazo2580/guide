enregistrerChapitres("1ere", "svt", [
  {
    id: 9,
    titre: "Chapitre 9 : Les productions végétales et animales et les fermentations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Produire de la matière pour l’alimentation",
        blocs: [
          {
            type: "introduction",
            titre: "De la matière vivante aux aliments",
            texte: "L’agriculture et l’élevage fournissent une partie des aliments consommés par l’être humain. Les cultures produisent notamment des grains, des fruits, des feuilles et des tubercules. Les animaux d’élevage fournissent notamment du lait, des œufs, de la viande et du miel. Ces productions dépendent des êtres vivants, de leurs besoins et des conditions du milieu."
          },
          {
            type: "definition",
            titre: "Production végétale",
            texte: "La production végétale correspond ici à l’obtention de matière végétale utile par la culture. Elle repose sur la croissance des plantes, qui fabriquent de la matière organique grâce à la photosynthèse et utilisent l’eau et les éléments minéraux disponibles."
          },
          {
            type: "definition",
            titre: "Production animale",
            texte: "La production animale correspond ici à l’obtention de produits issus d’animaux élevés. Les animaux utilisent leur alimentation pour fonctionner, grandir et produire notamment du lait, des œufs ou de nouveaux tissus."
          },
          {
            type: "definition",
            titre: "Rendement agricole",
            texte: "Le rendement d’une culture est la quantité récoltée rapportée à une surface cultivée. Il peut être exprimé en kilogrammes par hectare ou en tonnes par hectare. Pour comparer deux rendements, il faut utiliser les mêmes unités et préciser le produit mesuré."
          },
          {
            type: "exemple",
            titre: "Calcul d’un rendement",
            texte: "Une parcelle de 2 hectares produit 6 tonnes de riz récolté. Son rendement est de 6 ÷ 2 = 3 tonnes par hectare. Ce résultat ne renseigne pas à lui seul sur la qualité du sol, les coûts ou les effets environnementaux."
          },
          {
            type: "schema",
            titre: "Des ressources aux productions",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" role="img" aria-labelledby="svt9s1t svt9s1d">
  <title id="svt9s1t">Productions végétales et animales</title>
  <desc id="svt9s1d">Les plantes utilisent notamment lumière, eau, dioxyde de carbone et éléments minéraux. Une partie des végétaux nourrit les animaux, dont l'élevage fournit différents produits.</desc>
  <defs><marker id="svt9a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="700" height="300" fill="#fff"/>
  <rect x="20" y="20" width="195" height="75" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="117" y="48" text-anchor="middle" font-size="15">Lumière, eau, CO₂</text>
  <text x="117" y="71" text-anchor="middle" font-size="15">et ions minéraux</text>
  <rect x="265" y="20" width="170" height="75" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="350" y="52" text-anchor="middle" font-size="17">Cultures</text>
  <text x="350" y="75" text-anchor="middle" font-size="14">matière végétale</text>
  <rect x="490" y="20" width="185" height="75" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="582" y="52" text-anchor="middle" font-size="17">Aliments végétaux</text>
  <text x="582" y="75" text-anchor="middle" font-size="14">riz, fruits, légumes</text>
  <rect x="265" y="185" width="170" height="75" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="350" y="217" text-anchor="middle" font-size="17">Élevage</text>
  <text x="350" y="240" text-anchor="middle" font-size="14">animaux nourris</text>
  <rect x="490" y="185" width="185" height="75" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="582" y="215" text-anchor="middle" font-size="16">Produits animaux</text>
  <text x="582" y="239" text-anchor="middle" font-size="14">lait, œufs, viande</text>
  <path d="M215 58 L260 58 M435 58 L485 58 M350 95 L350 180 M435 223 L485 223" stroke="#444" stroke-width="2" marker-end="url(#svt9a1)"/>
  <text x="360" y="145" font-size="14">Alimentation animale</text>
</svg>`,
            legende: "Schéma simplifié : les animaux ont aussi besoin d’eau et de conditions d’élevage adaptées."
          }
        ]
      },

      {
        id: 2,
        titre: "Améliorer une production végétale",
        blocs: [
          {
            type: "introduction",
            titre: "Des plantes aux besoins variés",
            texte: "La croissance et le rendement d’une culture dépendent à la fois de la variété cultivée et des conditions du milieu. Une plante a notamment besoin de lumière, d’eau, de dioxyde de carbone et d’éléments minéraux. Les besoins et la résistance aux contraintes varient selon les espèces et les variétés."
          },
          {
            type: "tableau",
            titre: "Facteurs et pratiques possibles",
            entetes: ["Facteur", "Pratique possible", "Point de vigilance"],
            lignes: [
              ["Eau", "Adapter l’irrigation aux besoins de la culture.", "Un manque d’eau limite la croissance ; un excès peut réduire l’aération du sol ou favoriser certaines maladies."],
              ["Éléments minéraux", "Apporter un engrais ou une matière organique adaptée après évaluation des besoins.", "Un excès peut polluer l’eau et ne garantit pas une meilleure récolte."],
              ["Variété", "Choisir une variété adaptée au climat, au sol et à l’objectif de production.", "Une variété productive dans un milieu ne l’est pas nécessairement dans un autre."],
              ["Ravageurs et maladies", "Surveiller les cultures et utiliser des méthodes de prévention ou de lutte adaptées.", "Les traitements doivent être utilisés selon les consignes afin de limiter les risques pour la santé et l’environnement."],
              ["Sol", "Limiter l’érosion, entretenir la matière organique et pratiquer des rotations.", "Les effets dépendent des pratiques et des conditions locales."]
            ]
          },
          {
            type: "definition",
            titre: "Sélection variétale",
            texte: "La sélection variétale consiste à choisir et multiplier des plantes présentant des caractères recherchés, par exemple une bonne production ou une résistance à une maladie. Ces caractères sont évalués dans différentes conditions avant de recommander une variété."
          },
          {
            type: "remarque",
            titre: "Un facteur peut être limitant",
            texte: "Si une culture manque fortement d’eau, ajouter davantage d’engrais ne suffit pas nécessairement à augmenter son rendement. Le facteur qui limite la croissance doit être identifié, sans oublier les autres besoins de la plante."
          },
          {
            type: "methode",
            titre: "Comparer deux pratiques",
            texte: "Pour comparer deux apports d’engrais, utiliser des parcelles aussi semblables que possible, avec la même variété, la même période de culture et des conditions d’eau comparables. Faire varier l’apport étudié, répéter l’essai sur plusieurs parcelles puis mesurer les récoltes de la même façon. Comparer les résultats en tenant aussi compte des coûts et des effets possibles sur le sol et l’eau."
          }
        ]
      },

      {
        id: 3,
        titre: "Conduire une production animale",
        blocs: [
          {
            type: "introduction",
            titre: "Les besoins des animaux",
            texte: "Pour rester en bonne santé et produire, un animal d’élevage a besoin d’une alimentation et d’une quantité d’eau adaptées. Il a aussi besoin d’un milieu convenable : abri, espace, hygiène et prévention des maladies. Les besoins varient selon l’espèce, l’âge et la production attendue."
          },
          {
            type: "definition",
            titre: "Ration d’un animal d’élevage",
            texte: "La ration est l’ensemble des aliments et de l’eau donnés à un animal pendant une période donnée. Elle doit couvrir ses besoins d’entretien et, selon sa situation, les besoins liés à la croissance, à la reproduction ou à la production de lait ou d’œufs."
          },
          {
            type: "tableau",
            titre: "Quelques facteurs de production",
            entetes: ["Facteur", "Importance"],
            lignes: [
              ["Alimentation", "Elle apporte l’énergie et les nutriments nécessaires à l’entretien et à la production."],
              ["Eau", "Une eau de qualité et disponible en quantité suffisante est indispensable."],
              ["Santé et hygiène", "La prévention et la prise en charge des maladies contribuent au bien-être et à la production."],
              ["Milieu d’élevage", "L’abri, l’espace, la température et la propreté influencent l’état des animaux."],
              ["Choix des reproducteurs", "La sélection peut favoriser certains caractères, tout en tenant compte de la santé et de l’adaptation au milieu."]
            ]
          },
          {
            type: "exemple",
            titre: "Une vache laitière",
            texte: "Une vache laitière utilise les nutriments de son alimentation pour son propre fonctionnement et pour fabriquer du lait. Une ration insuffisante, un manque d’eau ou une maladie peuvent réduire sa production. Donner plus d’un seul aliment sans tenir compte de l’équilibre de la ration ne garantit pas une amélioration."
          },
          {
            type: "remarque",
            titre: "Transformation et pertes",
            texte: "Toute la matière consommée par un animal ne devient pas un produit récoltable. Une partie est utilisée pour son fonctionnement et sa respiration ; une autre est rejetée sous forme de déchets. La proportion transformée en produit varie selon l’espèce, l’âge, l’alimentation et le produit considéré."
          }
        ]
      },

      {
        id: 4,
        titre: "Les fermentations dans la fabrication des aliments",
        blocs: [
          {
            type: "definition",
            titre: "Fermentation et transformation alimentaire",
            texte: "Certaines fermentations utilisent l’activité de micro-organismes pour transformer des sucres en d’autres substances. Ces transformations peuvent modifier le goût, la texture et parfois la conservation d’un aliment. Les produits obtenus dépendent des micro-organismes et des conditions du milieu."
          },
          {
            type: "tableau",
            titre: "Exemples de fermentations alimentaires",
            entetes: ["Production", "Micro-organismes et transformation", "Résultat recherché"],
            lignes: [
              ["Pain", "Des levures fermentent des sucres et produisent notamment du CO₂ et de l’éthanol.", "Le CO₂ contribue au gonflement de la pâte ; la cuisson transforme ensuite la pâte."],
              ["Yaourt", "Des bactéries lactiques transforment une partie du lactose en acide lactique.", "L’acidification contribue à la coagulation des protéines du lait et à la texture du yaourt."],
              ["Boissons fermentées", "Des levures transforment des sucres notamment en éthanol et en CO₂.", "La composition et les propriétés de la boisson changent."]
            ]
          },
          {
            type: "schema",
            titre: "Deux exemples de transformation",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 245" role="img" aria-labelledby="svt9s2t svt9s2d">
  <title id="svt9s2t">Fermentations du pain et du yaourt</title>
  <desc id="svt9s2d">Dans une pâte, les levures transforment des sucres et produisent du dioxyde de carbone. Dans le lait, des bactéries lactiques transforment une partie du lactose en acide lactique.</desc>
  <defs><marker id="svt9a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="700" height="245" fill="#fff"/>
  <rect x="20" y="30" width="180" height="70" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="110" y="58" text-anchor="middle" font-size="16">Sucres de la pâte</text>
  <text x="110" y="80" text-anchor="middle" font-size="14">+ levures</text>
  <path d="M200 65 L300 65" stroke="#444" stroke-width="2" marker-end="url(#svt9a2)"/>
  <rect x="305" y="30" width="365" height="70" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="487" y="58" text-anchor="middle" font-size="16">CO₂ + éthanol</text>
  <text x="487" y="80" text-anchor="middle" font-size="14">Le gaz contribue à faire lever la pâte</text>
  <rect x="20" y="145" width="180" height="70" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="110" y="173" text-anchor="middle" font-size="16">Lactose du lait</text>
  <text x="110" y="195" text-anchor="middle" font-size="14">+ bactéries lactiques</text>
  <path d="M200 180 L300 180" stroke="#444" stroke-width="2" marker-end="url(#svt9a2)"/>
  <rect x="305" y="145" width="365" height="70" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="487" y="173" text-anchor="middle" font-size="16">Acide lactique</text>
  <text x="487" y="195" text-anchor="middle" font-size="14">Acidification et modification de la texture</text>
</svg>`,
            legende: "Les flèches résument plusieurs réactions. Les micro-organismes agissent dans des conditions adaptées à leur activité."
          },
          {
            type: "remarque",
            titre: "Fermentation et sécurité",
            texte: "Une fermentation ne rend pas automatiquement un aliment sûr. Il faut utiliser des matières premières adaptées, respecter l’hygiène et maîtriser les conditions de préparation et de conservation. Certains micro-organismes ou leurs toxines peuvent rendre les aliments dangereux."
          }
        ]
      },

      {
        id: 5,
        titre: "Applications industrielles et maîtrise des conditions",
        blocs: [
          {
            type: "introduction",
            titre: "Produire à plus grande échelle",
            texte: "Dans l’industrie, des micro-organismes sélectionnés peuvent être cultivés pour fabriquer des aliments ou d’autres substances utiles. Le procédé doit être surveillé afin d’obtenir une production régulière et de limiter les contaminations."
          },
          {
            type: "definition",
            titre: "Fermenteur",
            texte: "Un fermenteur est une cuve dans laquelle on cultive des micro-organismes dans des conditions contrôlées. Selon le procédé, on surveille notamment la température, le pH, la disponibilité des nutriments et l’aération."
          },
          {
            type: "tableau",
            titre: "Quelques applications",
            entetes: ["Produit ou secteur", "Rôle de micro-organismes", "Utilisation"],
            lignes: [
              ["Industrie alimentaire", "Levures ou bactéries participent à la transformation des aliments.", "Fabrication de pain, de yaourts ou d’autres aliments fermentés."],
              ["Éthanol", "Certaines levures transforment des sucres en éthanol.", "L’éthanol peut servir notamment de matière première industrielle ou de carburant après traitement adapté."],
              ["Acides organiques", "Certains micro-organismes produisent des acides au cours de transformations contrôlées.", "Utilisations alimentaires ou industrielles selon le produit."],
              ["Biogaz", "Des ensembles de micro-organismes dégradent de la matière organique en absence de dioxygène.", "Le gaz obtenu, contenant notamment du méthane et du CO₂, peut servir de source d’énergie."]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas du biogaz",
            texte: "La production de biogaz résulte de plusieurs étapes réalisées par différents micro-organismes. Elle ne se réduit pas à la seule fermentation alcoolique. Sa mise en œuvre exige des installations adaptées et des précautions, car le méthane est inflammable."
          },
          {
            type: "methode",
            titre: "Suivre une production",
            texte: "Pour étudier l’effet de la température sur une fermentation, préparer plusieurs mélanges identiques contenant les mêmes quantités de micro-organismes et de sucre. Les maintenir à différentes températures pendant la même durée et mesurer un résultat comparable, par exemple le volume de CO₂ recueilli. Répéter les mesures et contrôler les autres facteurs. Le CO₂ seul ne suffit pas à prouver qu’il s’agit d’une fermentation alcoolique : la respiration peut également en produire."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les productions végétales et animales dépendent des besoins des organismes et des conditions du milieu. Le rendement rapporte une récolte à une surface. Les micro-organismes sont utilisés dans diverses transformations, notamment pour fabriquer du pain, du yaourt ou de l’éthanol. Une production maîtrisée exige des conditions adaptées, de l’hygiène et une attention aux effets sur l’environnement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Citer deux produits végétaux et deux produits animaux. Indiquer une ressource nécessaire à la production végétale et une ressource nécessaire à l’élevage.",
        correction: "Le riz et les haricots sont des produits végétaux ; le lait et les œufs sont des produits animaux. Les plantes ont notamment besoin d’eau, de lumière, de CO₂ et d’éléments minéraux. Les animaux d’élevage ont notamment besoin d’aliments et d’eau."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Une parcelle de 1,5 hectare produit 4,5 tonnes de riz. Calculer le rendement en tonnes par hectare.",
        correction: "Rendement = quantité récoltée ÷ surface. Donc 4,5 ÷ 1,5 = 3 tonnes par hectare. Il faut préciser qu’il s’agit du rendement en riz récolté dans les conditions de cette parcelle."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une culture manque fortement d’eau. Un élève propose d’ajouter beaucoup d’engrais pour augmenter immédiatement la récolte. Pourquoi cette solution peut-elle être insuffisante ?",
        correction: "L’eau peut être le facteur limitant : si la plante ne dispose pas de suffisamment d’eau, un apport supplémentaire d’engrais ne corrige pas ce manque. Un excès d’engrais peut en outre entraîner des pertes d’ions et polluer l’eau. Il faut examiner les besoins de la culture et les conditions du sol."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Citer trois facteurs à prendre en compte pour une production laitière respectueuse des besoins de l’animal.",
        correction: "On peut citer une ration adaptée, une eau de qualité disponible en quantité suffisante et la prévention des maladies. Il faut également tenir compte de l’hygiène, de l’abri et de l’espace mis à disposition."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pourquoi toute la matière consommée par un animal d’élevage ne se retrouve-t-elle pas dans la viande ou le lait ?",
        correction: "L’animal utilise une partie des nutriments pour son entretien, ses activités et sa respiration. Une autre partie est rejetée sous forme de déchets. Seule une partie de la matière consommée contribue à la croissance ou aux produits récoltés comme le lait."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Quel micro-organisme participe à la levée d’une pâte à pain ? Quel gaz contribue à son gonflement ?",
        correction: "Les levures participent à la transformation des sucres disponibles dans la pâte. Elles produisent notamment du dioxyde de carbone, CO₂, qui forme des bulles et contribue au gonflement de la pâte."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer comment des bactéries lactiques participent à la fabrication du yaourt.",
        correction: "Les bactéries lactiques transforment une partie du lactose du lait en acide lactique. L’acidification contribue à la coagulation des protéines du lait et à la formation de la texture du yaourt. La fabrication doit être réalisée dans des conditions d’hygiène et de température adaptées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "On compare deux mélanges de levures et de sucre. Le premier est placé à 20 °C et le second à 35 °C, mais ils ne contiennent pas la même quantité de sucre. Peut-on attribuer une différence de production de gaz à la température seule ?",
        correction: "Non. Deux facteurs varient : la température et la quantité de sucre. La différence observée peut dépendre de l’un ou de l’autre, ou des deux. Pour étudier l’effet de la température, il faut préparer des mélanges identiques et ne faire varier que la température, puis répéter les mesures."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un flacon contenant des levures et du sucre produit du CO₂. Cela suffit-il à prouver que les levures réalisent une fermentation alcoolique ?",
        correction: "Non. Les levures peuvent produire du CO₂ par fermentation alcoolique mais aussi par respiration. Pour mieux soutenir l’hypothèse de fermentation alcoolique, il faut contrôler les conditions d’accès au dioxygène et rechercher également l’éthanol avec une méthode adaptée."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un aliment fermenté a été préparé sans respect des règles d’hygiène. Un élève affirme qu’il est forcément sans danger parce qu’il est fermenté. Expliquer pourquoi cette affirmation est incorrecte.",
        correction: "La fermentation ne garantit pas à elle seule la sécurité d’un aliment. Des micro-organismes indésirables peuvent contaminer la préparation et certains peuvent produire des toxines. Il faut utiliser des matières premières adaptées et respecter les règles d’hygiène, de préparation et de conservation."
      }
    ]
  }
]);
