enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch20",
    titre: "Chapitre 20 : Introduction à la chimie organique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch20-matiere",
        titre: "1. La chimie organique et le carbone",
        blocs: [
          {
            type: "introduction",
            titre: "Des molécules très variées",
            texte: "Les carburants, les huiles, les sucres et de nombreux médicaments contiennent des composés organiques. Leur diversité vient notamment de la capacité des atomes de carbone à former des chaînes et des cycles."
          },
          {
            type: "definition",
            titre: "Chimie organique",
            texte: "La chimie organique étudie les composés du carbone, en particulier ceux dont les molécules possèdent des liaisons entre le carbone et l’hydrogène. Certains composés du carbone, comme le dioxyde de carbone CO₂ et les carbonates, sont habituellement étudiés en chimie minérale."
          },
          {
            type: "definition",
            titre: "Hydrocarbure",
            texte: "Un hydrocarbure est un composé dont les molécules contiennent uniquement des atomes de carbone et d’hydrogène. Le méthane CH₄ et l’éthène C₂H₄ sont des hydrocarbures."
          },
          {
            type: "regle",
            titre: "Valences usuelles",
            texte: "Dans les structures usuelles étudiées ici, le carbone forme quatre liaisons, l’hydrogène une, l’oxygène deux et l’azote trois. Une liaison double compte pour deux liaisons et une liaison triple pour trois."
          },
          {
            type: "schema",
            titre: "Liaisons simples, doubles et triples",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 220' role='img' aria-label='Trois exemples de liaisons entre carbones : simple dans l’éthane H3C-CH3, double dans l’éthène H2C=CH2 et triple dans l’éthyne HC≡CH.'><text x='105' y='40' text-anchor='middle' font-size='18'>Liaison simple</text><text x='105' y='105' text-anchor='middle' font-size='22'>H₃C—CH₃</text><text x='105' y='155' text-anchor='middle' font-size='16'>éthane</text><text x='310' y='40' text-anchor='middle' font-size='18'>Liaison double</text><text x='310' y='105' text-anchor='middle' font-size='22'>H₂C=CH₂</text><text x='310' y='155' text-anchor='middle' font-size='16'>éthène</text><text x='515' y='40' text-anchor='middle' font-size='18'>Liaison triple</text><text x='515' y='105' text-anchor='middle' font-size='22'>HC≡CH</text><text x='515' y='155' text-anchor='middle' font-size='16'>éthyne</text><text x='310' y='200' text-anchor='middle' font-size='15'>Chaque carbone respecte ici quatre liaisons.</text></svg>",
            legende: "Une double liaison compte deux fois et une triple liaison trois fois dans le décompte des liaisons d’un carbone."
          },
          {
            type: "remarque",
            titre: "Organique ne signifie pas naturel",
            texte: "Un composé organique peut être présent dans la nature ou fabriqué par synthèse. Le terme « organique » ne garantit ni son origine naturelle ni son innocuité."
          }
        ]
      },

      {
        id: "sp1-ch20-formules",
        titre: "2. Représenter une molécule",
        blocs: [
          {
            type: "definition",
            titre: "Formule brute",
            texte: "La formule brute indique la nature et le nombre des atomes d’une molécule, mais ne précise pas leur enchaînement. Par exemple, C₂H₆O indique deux atomes de carbone, six d’hydrogène et un d’oxygène."
          },
          {
            type: "definition",
            titre: "Formule développée et semi-développée",
            texte: "Une formule développée représente les atomes et toutes les liaisons. Une formule semi-développée regroupe les hydrogènes avec les atomes auxquels ils sont liés, tout en faisant apparaître les liaisons importantes entre les autres atomes."
          },
          {
            type: "schema",
            titre: "Deux représentations de l’éthanol",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 245' role='img' aria-label='Formule développée de l’éthanol : deux carbones liés, le premier porte trois hydrogènes, le second deux hydrogènes et un groupe O-H. Sa formule semi-développée est CH3-CH2-OH.'><text x='160' y='30' text-anchor='middle' font-size='18'>Formule développée</text><text x='105' y='130' font-size='22'>H</text><text x='160' y='130' font-size='22'>C</text><text x='220' y='130' font-size='22'>C</text><text x='280' y='130' font-size='22'>O</text><text x='340' y='130' font-size='22'>H</text><line x1='125' y1='123' x2='155' y2='123' stroke='#222' stroke-width='2'/><line x1='180' y1='123' x2='215' y2='123' stroke='#222' stroke-width='2'/><line x1='240' y1='123' x2='275' y2='123' stroke='#222' stroke-width='2'/><line x1='300' y1='123' x2='335' y2='123' stroke='#222' stroke-width='2'/><text x='160' y='65' font-size='22'>H</text><text x='220' y='65' font-size='22'>H</text><text x='160' y='200' font-size='22'>H</text><text x='220' y='200' font-size='22'>H</text><line x1='168' y1='72' x2='168' y2='110' stroke='#222' stroke-width='2'/><line x1='228' y1='72' x2='228' y2='110' stroke='#222' stroke-width='2'/><line x1='168' y1='138' x2='168' y2='180' stroke='#222' stroke-width='2'/><line x1='228' y1='138' x2='228' y2='180' stroke='#222' stroke-width='2'/><text x='480' y='75' text-anchor='middle' font-size='18'>Formule semi-développée</text><text x='480' y='130' text-anchor='middle' font-size='22'>CH₃—CH₂—OH</text><text x='480' y='180' text-anchor='middle' font-size='17'>Formule brute : C₂H₆O</text></svg>",
            legende: "Les trois écritures décrivent la même molécule. La formule brute ne montre pas les liaisons."
          },
          {
            type: "methode",
            titre: "Passer d’une formule semi-développée à la formule brute",
            texte: "Compter tous les atomes de chaque élément, puis écrire leur nombre en indice. Pour CH₃–CH₂–OH : deux C, trois plus deux plus un H, et un O ; la formule brute est C₂H₆O."
          },
          {
            type: "remarque",
            titre: "Vérifier une structure",
            texte: "Après avoir dessiné une molécule, vérifier les valences usuelles : quatre liaisons pour chaque carbone, une pour chaque hydrogène et deux pour chaque oxygène."
          }
        ]
      },

      {
        id: "sp1-ch20-squelette",
        titre: "3. Chaînes carbonées et familles",
        blocs: [
          {
            type: "definition",
            titre: "Squelette carboné",
            texte: "Le squelette carboné est l’ensemble des atomes de carbone et des liaisons qui les relient. Il peut être linéaire, ramifié ou cyclique."
          },
          {
            type: "tableau",
            titre: "Exemples de squelettes",
            entetes: ["Type", "Exemple", "Description"],
            lignes: [
              ["Linéaire", "CH₃–CH₂–CH₂–CH₃", "Les quatre carbones forment une seule chaîne."],
              ["Ramifié", "CH₃–CH(CH₃)–CH₃", "Un groupe carboné est relié à la chaîne principale."],
              ["Cyclique", "Cyclopropane : C₃H₆", "Les trois carbones forment un cycle."]
            ]
          },
          {
            type: "definition",
            titre: "Groupe caractéristique",
            texte: "Un groupe caractéristique est un groupe d’atomes qui contribue aux propriétés chimiques d’une famille de composés. Par exemple, le groupe hydroxyle –OH caractérise les alcools dans les situations étudiées ici."
          },
          {
            type: "tableau",
            titre: "Quelques familles",
            entetes: ["Famille", "Élément à reconnaître", "Exemple"],
            lignes: [
              ["Alcane", "Hydrocarbure à liaisons simples", "Éthane : CH₃–CH₃"],
              ["Alcène", "Hydrocarbure contenant une liaison C=C", "Éthène : CH₂=CH₂"],
              ["Alcool", "Groupe hydroxyle –OH lié à un carbone saturé", "Éthanol : CH₃–CH₂–OH"],
              ["Acide carboxylique", "Groupe carboxyle –COOH", "Acide éthanoïque : CH₃–COOH"]
            ]
          },
          {
            type: "remarque",
            titre: "Identifier sans confondre",
            texte: "La liaison C=C caractérise une insaturation ; le groupe –OH de l’éthanol appartient à la famille des alcools. Les familles et leurs règles de nomenclature seront approfondies dans les chapitres suivants."
          }
        ]
      },

      {
        id: "sp1-ch20-isomerie",
        titre: "4. Isomérie de constitution",
        blocs: [
          {
            type: "definition",
            titre: "Isomères de constitution",
            texte: "Des isomères de constitution ont la même formule brute mais des enchaînements d’atomes différents. Ils peuvent présenter des propriétés physiques et chimiques différentes."
          },
          {
            type: "exemple",
            titre: "Même formule, structures différentes",
            texte: "CH₃–CH₂–OH et CH₃–O–CH₃ ont tous deux pour formule brute C₂H₆O. Dans le premier, l’oxygène appartient au groupe –OH ; dans le second, il est lié aux deux carbones. Ce sont deux isomères de constitution."
          },
          {
            type: "methode",
            titre: "Vérifier une isomérie",
            texte: "1. Compter les atomes pour trouver la formule brute de chaque molécule. 2. Vérifier que les formules brutes sont identiques. 3. Comparer les liaisons et l’enchaînement des atomes. Un simple retournement du dessin ne crée pas une nouvelle molécule."
          },
          {
            type: "exemple",
            titre: "Chaîne linéaire et chaîne ramifiée",
            texte: "CH₃–CH₂–CH₂–CH₃ et CH₃–CH(CH₃)–CH₃ ont tous deux pour formule brute C₄H₁₀. Le premier possède une chaîne linéaire ; le second une chaîne ramifiée. Ce sont des isomères de constitution."
          }
        ]
      },

      {
        id: "sp1-ch20-masse",
        titre: "5. Masse molaire et quantité de matière",
        blocs: [
          {
            type: "regle",
            titre: "Masse molaire moléculaire",
            texte: "La masse molaire M d’une molécule est la somme des masses molaires atomiques de tous ses atomes. Elle s’exprime en g·mol⁻¹ lorsque les masses molaires atomiques sont données dans cette unité."
          },
          {
            type: "exemple",
            titre: "Masse molaire de l’éthanol",
            texte: "Pour C₂H₆O, avec M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹ : M = 2 × 12 + 6 × 1 + 16 = 46 g·mol⁻¹."
          },
          {
            type: "regle",
            titre: "Relation entre masse et quantité de matière",
            texte: "La quantité de matière n, en moles, est donnée par n = m/M. Si M est en g·mol⁻¹, utiliser la masse m en grammes."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Certains composés organiques sont inflammables, toxiques ou irritants. Les transformations chimiques du cours sont étudiées sur le papier : ne chauffe et ne mélange pas de produits sans encadrement adapté."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Parmi les composés suivants, lesquels sont des hydrocarbures : CH₄, C₂H₆O et C₃H₈ ? Justifie.",
        correction: "CH₄ et C₃H₈ sont des hydrocarbures : ils ne contiennent que du carbone et de l’hydrogène. C₂H₆O contient aussi de l’oxygène."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans les structures usuelles étudiées au chapitre, combien de liaisons forme généralement un atome de carbone ? Une liaison double compte pour combien dans ce décompte ?",
        correction: "Un carbone forme généralement quatre liaisons. Une liaison double compte pour deux dans ce décompte."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine la formule brute de la molécule CH₃–CH₂–CH₂–OH.",
        correction: "Il y a trois carbones, 3 + 2 + 2 + 1 = 8 hydrogènes et un oxygène. La formule brute est C₃H₈O."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne M(C) = 12 g·mol⁻¹ et M(H) = 1 g·mol⁻¹. Calcule la masse molaire du propane C₃H₈.",
        correction: "M(C₃H₈) = 3 × 12 + 8 × 1 = 44 g·mol⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les molécules CH₃–CH₂–OH et CH₃–O–CH₃ sont-elles des isomères de constitution ? Justifie en indiquant leurs formules brutes et en comparant leurs liaisons.",
        correction: "Les deux molécules ont pour formule brute C₂H₆O. Leurs enchaînements diffèrent : la première possède le groupe –OH, tandis que l’oxygène de la seconde est lié aux deux carbones. Ce sont donc des isomères de constitution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère CH₃–CH₂–CH₂–CH₃ et CH₃–CH(CH₃)–CH₃. Détermine leur formule brute, décris leur squelette carboné et précise si elles sont isomères.",
        correction: "Chacune a pour formule brute C₄H₁₀. La première possède une chaîne linéaire ; la seconde est ramifiée. Leurs enchaînements étant différents, ce sont des isomères de constitution."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une molécule a pour formule semi-développée CH₃–CH₂–OH. On dispose d’un échantillon de masse m = 9,2 g. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹. Détermine sa formule brute, sa famille, sa masse molaire et la quantité de matière de l’échantillon.",
        correction: "La formule brute est C₂H₆O. Le groupe –OH est lié à un carbone saturé : la molécule est un alcool. Sa masse molaire est M = 2 × 12 + 6 × 1 + 16 = 46 g·mol⁻¹. La quantité de matière vaut n = m/M = 9,2/46 = 0,20 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On propose pour une molécule la formule CH₃–CH₂–CH₃ et pour une autre CH₃–CH=CH₂. Données : M(C) = 12 g·mol⁻¹ et M(H) = 1 g·mol⁻¹. Pour chacune, détermine la formule brute et la masse molaire. Ces molécules sont-elles des isomères ? Justifie.",
        correction: "Pour CH₃–CH₂–CH₃ : formule C₃H₈ et masse molaire M = 3 × 12 + 8 = 44 g·mol⁻¹. Pour CH₃–CH=CH₂ : formule C₃H₆ et masse molaire M = 3 × 12 + 6 = 42 g·mol⁻¹. Elles ne sont pas isomères : leurs formules brutes sont différentes. La seconde possède une liaison double C=C."
      }
    ]
  }
]);
