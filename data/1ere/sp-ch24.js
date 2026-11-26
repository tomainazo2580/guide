enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch24",
    titre: "Chapitre 24 : Composés organiques oxygénés : alcools, aldéhydes et cétones",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch24-familles",
        titre: "1. Reconnaître les groupes caractéristiques",
        blocs: [
          {
            type: "introduction",
            titre: "Des molécules contenant de l’oxygène",
            texte: "Les alcools, les aldéhydes et les cétones sont des composés organiques oxygénés. Pour identifier leur famille, il faut examiner la manière dont les atomes sont liés, et pas seulement leur formule brute."
          },
          {
            type: "definition",
            titre: "Alcool",
            texte: "Un alcool possède un groupe hydroxyle –OH lié à un carbone saturé, c’est-à-dire un carbone engagé uniquement dans des liaisons simples. Exemple : l’éthanol CH₃–CH₂–OH."
          },
          {
            type: "definition",
            titre: "Groupe carbonyle",
            texte: "Le groupe carbonyle est constitué d’un atome de carbone doublement lié à un atome d’oxygène : C=O. Il est présent notamment dans les aldéhydes et les cétones."
          },
          {
            type: "definition",
            titre: "Aldéhyde et cétone",
            texte: "Dans un aldéhyde, le carbone du groupe carbonyle porte au moins un hydrogène : le groupe caractéristique est –CHO. Dans une cétone, le carbone du groupe carbonyle est lié à deux autres carbones : on écrit R–CO–R′."
          },
          {
            type: "schema",
            titre: "Comparer les groupes caractéristiques",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 220' role='img' aria-label='Trois formules : un alcool R-CH2-OH, un aldéhyde R-C double liaison O et liaison H, et une cétone R-C double liaison O et liaison R prime.'><text x='120' y='30' text-anchor='middle' font-size='18'>Alcool</text><text x='120' y='110' text-anchor='middle' font-size='21'>R—CH₂—OH</text><text x='120' y='160' text-anchor='middle' font-size='15'>groupe hydroxyle</text><text x='360' y='30' text-anchor='middle' font-size='18'>Aldéhyde</text><text x='360' y='110' text-anchor='middle' font-size='21'>R—C—H</text><text x='360' y='65' text-anchor='middle' font-size='20'>O</text><line x1='356' y1='72' x2='356' y2='90' stroke='#222' stroke-width='2'/><line x1='364' y1='72' x2='364' y2='90' stroke='#222' stroke-width='2'/><text x='360' y='160' text-anchor='middle' font-size='15'>groupe —CHO</text><text x='600' y='30' text-anchor='middle' font-size='18'>Cétone</text><text x='600' y='110' text-anchor='middle' font-size='21'>R—C—R′</text><text x='600' y='65' text-anchor='middle' font-size='20'>O</text><line x1='596' y1='72' x2='596' y2='90' stroke='#222' stroke-width='2'/><line x1='604' y1='72' x2='604' y2='90' stroke='#222' stroke-width='2'/><text x='600' y='160' text-anchor='middle' font-size='15'>carbonyle entre deux carbones</text><text x='360' y='205' text-anchor='middle' font-size='15'>R et R′ représentent ici des groupes carbonés.</text></svg>",
            legende: "Dans l’aldéhyde, le carbone du carbonyle est lié à H ; dans la cétone, il est lié à deux carbones. Le méthanal H–CHO est aussi un aldéhyde."
          },
          {
            type: "tableau",
            titre: "Exemples",
            entetes: ["Famille", "Nom", "Formule semi-développée", "Formule brute"],
            lignes: [
              ["Alcool", "Éthanol", "CH₃–CH₂–OH", "C₂H₆O"],
              ["Aldéhyde", "Éthanal", "CH₃–CHO", "C₂H₄O"],
              ["Cétone", "Propanone", "CH₃–CO–CH₃", "C₃H₆O"]
            ]
          }
        ]
      },

      {
        id: "sp1-ch24-alcools",
        titre: "2. Noms et classes des alcools",
        blocs: [
          {
            type: "methode",
            titre: "Nommer un alcool simple",
            texte: "1. Choisir la plus longue chaîne contenant le carbone lié à –OH. 2. Numéroter la chaîne pour donner au groupe –OH le plus petit indice possible. 3. Utiliser le suffixe -ol et indiquer sa position si nécessaire."
          },
          {
            type: "exemple",
            titre: "Deux alcools à trois carbones",
            texte: "CH₃–CH₂–CH₂–OH est le propan-1-ol. CH₃–CH(OH)–CH₃ est le propan-2-ol. Ils ont la même formule brute C₃H₈O, mais le groupe –OH n’est pas au même endroit : ce sont des isomères de constitution."
          },
          {
            type: "definition",
            titre: "Classe d’un alcool",
            texte: "On classe un alcool selon le nombre de carbones directement liés au carbone qui porte –OH : un carbone pour un alcool primaire, deux pour un alcool secondaire et trois pour un alcool tertiaire. Le méthanol CH₃OH est également classé parmi les alcools primaires."
          },
          {
            type: "tableau",
            titre: "Trois classes",
            entetes: ["Classe", "Exemple", "Carbones liés au carbone portant –OH"],
            lignes: [
              ["Primaire", "CH₃–CH₂–OH", "Un"],
              ["Secondaire", "CH₃–CH(OH)–CH₃", "Deux"],
              ["Tertiaire", "(CH₃)₃C–OH", "Trois"]
            ]
          },
          {
            type: "methode",
            titre: "Déterminer la classe",
            texte: "Repérer le carbone directement lié au groupe –OH, puis compter les carbones directement attachés à ce carbone. Ne pas compter les hydrogènes ni l’oxygène."
          },
          {
            type: "remarque",
            titre: "Attention à l’isomérie",
            texte: "Deux alcools peuvent avoir la même formule brute et appartenir à des classes différentes. La formule brute seule ne suffit donc pas pour déterminer la classe."
          }
        ]
      },

      {
        id: "sp1-ch24-noms-carbonyles",
        titre: "3. Nommer les aldéhydes et les cétones",
        blocs: [
          {
            type: "regle",
            titre: "Aldéhydes",
            texte: "Pour un aldéhyde simple, le nom dérive de celui de l’alcane correspondant avec le suffixe -al. Le carbone du groupe –CHO est à l’extrémité de la chaîne et porte le numéro 1."
          },
          {
            type: "exemple",
            titre: "Éthanal et propanal",
            texte: "CH₃–CHO est l’éthanal : il possède deux carbones. CH₃–CH₂–CHO est le propanal : il en possède trois."
          },
          {
            type: "regle",
            titre: "Cétones",
            texte: "Pour une cétone simple, on choisit la plus longue chaîne contenant le carbonyle et on la numérote pour donner au carbone C=O le plus petit indice possible. Le nom prend le suffixe -one, avec l’indice lorsque nécessaire."
          },
          {
            type: "exemple",
            titre: "Propanone et butanone",
            texte: "CH₃–CO–CH₃ est la propanone. CH₃–CO–CH₂–CH₃ est la butan-2-one. Le carbone du carbonyle est lié à deux carbones dans les deux molécules."
          },
          {
            type: "exemple",
            titre: "Deux familles, une même formule brute",
            texte: "Le propanal CH₃–CH₂–CHO et la propanone CH₃–CO–CH₃ ont tous deux pour formule brute C₃H₆O. Leur enchaînement diffère : ce sont des isomères de constitution appartenant à deux familles différentes."
          }
        ]
      },

      {
        id: "sp1-ch24-oxydation",
        titre: "4. Oxydation des alcools",
        blocs: [
          {
            type: "introduction",
            titre: "Une transformation dépendant de la classe",
            texte: "Une oxydation ménagée transforme certaines fonctions organiques sans détruire le squelette carboné. Le résultat dépend notamment de la classe de l’alcool et des conditions de réaction."
          },
          {
            type: "regle",
            titre: "Alcool primaire",
            texte: "Un alcool primaire peut être oxydé en aldéhyde. L’aldéhyde peut ensuite être oxydé en acide carboxylique. Pour obtenir l’aldéhyde, il faut des conditions qui limitent son oxydation ultérieure."
          },
          {
            type: "regle",
            titre: "Alcool secondaire ou tertiaire",
            texte: "Un alcool secondaire peut être oxydé en cétone. Dans les conditions usuelles d’oxydation ménagée étudiées ici, un alcool tertiaire ne donne pas de composé carbonylé sans modification de son squelette carboné."
          },
          {
            type: "schema",
            titre: "Bilan qualitatif des oxydations",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 230' role='img' aria-label='Un alcool primaire peut donner un aldéhyde puis un acide carboxylique par oxydations successives. Un alcool secondaire peut donner une cétone. Un alcool tertiaire ne donne pas de composé carbonylé par oxydation ménagée dans les conditions usuelles.'><text x='25' y='45' font-size='17'>Alcool primaire</text><line x1='160' y1='40' x2='245' y2='40' stroke='#222' stroke-width='2'/><polygon points='245,40 233,33 233,47' fill='#222'/><text x='255' y='45' font-size='17'>Aldéhyde</text><line x1='355' y1='40' x2='440' y2='40' stroke='#222' stroke-width='2'/><polygon points='440,40 428,33 428,47' fill='#222'/><text x='450' y='45' font-size='17'>Acide carboxylique</text><text x='25' y='110' font-size='17'>Alcool secondaire</text><line x1='180' y1='105' x2='265' y2='105' stroke='#222' stroke-width='2'/><polygon points='265,105 253,98 253,112' fill='#222'/><text x='275' y='110' font-size='17'>Cétone</text><text x='25' y='175' font-size='17'>Alcool tertiaire</text><text x='180' y='175' font-size='16'>Pas de carbonyle par oxydation ménagée usuelle</text><text x='360' y='215' text-anchor='middle' font-size='15'>Les flèches représentent des oxydations dans des conditions adaptées.</text></svg>",
            legende: "Le produit dépend de la classe de l’alcool et des conditions de transformation."
          },
          {
            type: "exemple",
            titre: "Oxydation de l’éthanol",
            texte: "L’éthanol CH₃–CH₂–OH peut donner l’éthanal CH₃–CHO, puis l’acide éthanoïque CH₃–COOH. En utilisant [O] comme écriture simplifiée d’un agent oxydant : CH₃–CH₂–OH + [O] → CH₃–CHO + H₂O ; puis CH₃–CHO + [O] → CH₃–COOH."
          },
          {
            type: "exemple",
            titre: "Oxydation du propan-2-ol",
            texte: "Le propan-2-ol est un alcool secondaire. Son oxydation ménagée peut donner la propanone : CH₃–CH(OH)–CH₃ + [O] → CH₃–CO–CH₃ + H₂O. Le symbole [O] représente ici l’oxydant de façon simplifiée ; ce n’est pas une espèce chimique isolée à manipuler."
          }
        ]
      },

      {
        id: "sp1-ch24-tests",
        titre: "5. Identifier une fonction et calculer une quantité",
        blocs: [
          {
            type: "definition",
            titre: "Tests d’identification",
            texte: "La 2,4-DNPH peut donner un précipité jaune à orange en présence d’un aldéhyde ou d’une cétone. Ce test indique la présence d’un groupe carbonyle dans ces familles, mais ne permet pas à lui seul de distinguer aldéhyde et cétone."
          },
          {
            type: "regle",
            titre: "Distinguer un aldéhyde",
            texte: "Dans les conditions adaptées, un aldéhyde peut donner un test positif avec la liqueur de Fehling ou le réactif de Tollens. Les cétones simples étudiées ici ne donnent généralement pas ces tests positifs. L’interprétation doit tenir compte des conditions et des éventuelles autres espèces présentes."
          },
          {
            type: "methode",
            titre: "Raisonner à partir de tests",
            texte: "Si une substance est connue comme étant soit un aldéhyde soit une cétone, un test positif à la 2,4-DNPH est compatible avec les deux. Un test de Fehling positif, dans les conditions prévues, permet alors de retenir l’aldéhyde."
          },
          {
            type: "exemple",
            titre: "Masse et quantité de matière",
            texte: "Pour la propanone C₃H₆O, avec M(C) = 12, M(H) = 1 et M(O) = 16 g·mol⁻¹ : M = 3 × 12 + 6 × 1 + 16 = 58 g·mol⁻¹. Un échantillon de 5,8 g contient n = m/M = 5,8/58 = 0,10 mol."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les réactifs de laboratoire et certains composés organiques peuvent être inflammables, toxiques ou irritants. Les tests sont décrits pour apprendre à interpréter des résultats : ne les réalise pas chez toi et ne sens pas les produits."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Classe chacune de ces molécules dans la famille alcool, aldéhyde ou cétone : a) CH₃–CH₂–OH ; b) CH₃–CHO ; c) CH₃–CO–CH₃.",
        correction: "a) CH₃–CH₂–OH est un alcool. b) CH₃–CHO est un aldéhyde. c) CH₃–CO–CH₃ est une cétone."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le groupe carbonyle est noté C=O. Dans un aldéhyde, le carbone de ce groupe est lié à au moins un hydrogène. À combien de carbones ce même carbone est-il lié dans une cétone ?",
        correction: "Dans une cétone, le carbone du groupe carbonyle est lié à deux autres carbones."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Nomme les deux alcools suivants et indique leur classe : a) CH₃–CH₂–CH₂–OH ; b) CH₃–CH(OH)–CH₃.",
        correction: "a) Le propan-1-ol est primaire : le carbone portant –OH est lié à un autre carbone. b) Le propan-2-ol est secondaire : le carbone portant –OH est lié à deux autres carbones."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine la formule brute et la masse molaire de la propanone CH₃–CO–CH₃. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹.",
        correction: "La formule brute est C₃H₆O. Sa masse molaire vaut M = 3 × 12 + 6 × 1 + 16 = 58 g·mol⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On oxyde de manière ménagée le propan-2-ol CH₃–CH(OH)–CH₃. Donne sa classe, puis le nom et la formule semi-développée du produit carbonylé attendu.",
        correction: "Le carbone portant –OH est lié à deux carbones : le propan-2-ol est un alcool secondaire. Son oxydation ménagée donne la propanone CH₃–CO–CH₃."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une substance est connue comme étant soit l’éthanal, soit la propanone. Dans les conditions adaptées, elle donne un test positif à la 2,4-DNPH et un test positif à la liqueur de Fehling. Identifie-la et explique le rôle de chaque test.",
        correction: "Le test à la 2,4-DNPH est compatible avec un aldéhyde comme avec une cétone : il ne les distingue pas à lui seul. Dans ce choix limité, le test de Fehling positif indique l’aldéhyde. La substance est donc l’éthanal."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère le propanal CH₃–CH₂–CHO et la propanone CH₃–CO–CH₃. Détermine leur formule brute, leur famille et leur relation d’isomérie. Indique un test qui, dans des conditions adaptées et en l’absence d’espèces gênantes, permet de les distinguer.",
        correction: "Les deux molécules ont pour formule brute C₃H₆O. Le propanal possède le groupe –CHO : c’est un aldéhyde. La propanone possède un carbonyle lié à deux carbones : c’est une cétone. Leurs enchaînements diffèrent : ce sont des isomères de constitution. Un test à la liqueur de Fehling est positif pour le propanal, mais pas pour la propanone dans les conditions usuelles."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une quantité de 9,2 g d’éthanol CH₃–CH₂–OH est oxydée en éthanal CH₃–CHO. On suppose la transformation complète et limitée à cette étape : une mole d’éthanol donne une mole d’éthanal. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹. Calcule la quantité d’éthanol initiale, puis la masse d’éthanal obtenue.",
        correction: "M(C₂H₆O) = 2 × 12 + 6 × 1 + 16 = 46 g·mol⁻¹. Donc n(éthanol) = 9,2/46 = 0,20 mol. Le rapport est 1:1, donc n(éthanal) = 0,20 mol. L’éthanal a pour formule C₂H₄O et pour masse molaire M = 2 × 12 + 4 × 1 + 16 = 44 g·mol⁻¹. Sa masse est m = 0,20 × 44 = 8,8 g."
      }
    ]
  }
]);
