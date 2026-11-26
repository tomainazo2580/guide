enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch25",
    titre: "Chapitre 25 : Acides carboxyliques et esters",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch25-acides",
        titre: "1. Les acides carboxyliques",
        blocs: [
          {
            type: "introduction",
            titre: "Deux familles oxygénées",
            texte: "L’acide éthanoïque est l’un des composés présents dans le vinaigre. Les esters constituent une autre famille de composés oxygénés ; certains contribuent à des odeurs fruitées. Pour les reconnaître, on examine leurs groupes caractéristiques."
          },
          {
            type: "definition",
            titre: "Groupe carboxyle",
            texte: "Un acide carboxylique possède le groupe carboxyle –COOH, qui réunit un groupe carbonyle C=O et un groupe hydroxyle –OH sur le même carbone. On peut écrire sa formule générale R–COOH ; R peut être un groupe carboné ou un hydrogène."
          },
          {
            type: "schema",
            titre: "Structure du groupe carboxyle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 200' role='img' aria-label='Groupe carboxyle R-C-OH : le carbone est lié à R, à OH et par une double liaison à un oxygène.'><text x='240' y='115' text-anchor='middle' font-size='24'>R</text><text x='310' y='115' text-anchor='middle' font-size='24'>C</text><text x='390' y='115' text-anchor='middle' font-size='24'>OH</text><text x='310' y='45' text-anchor='middle' font-size='24'>O</text><line x1='255' y1='108' x2='295' y2='108' stroke='#222' stroke-width='2'/><line x1='325' y1='108' x2='365' y2='108' stroke='#222' stroke-width='2'/><line x1='306' y1='55' x2='306' y2='90' stroke='#222' stroke-width='2'/><line x1='314' y1='55' x2='314' y2='90' stroke='#222' stroke-width='2'/><text x='310' y='175' text-anchor='middle' font-size='17'>R—C(=O)—OH</text></svg>",
            legende: "Le carbone du carboxyle appartient à la chaîne carbonée. Pour l’acide méthanoïque, R est un hydrogène."
          },
          {
            type: "regle",
            titre: "Nommer un acide simple",
            texte: "On choisit la plus longue chaîne contenant le carbone du groupe –COOH. Le nom comporte le mot « acide » suivi du nom de la chaîne avec le suffixe -oïque. Le carbone du groupe –COOH porte le numéro 1."
          },
          {
            type: "tableau",
            titre: "Quelques acides carboxyliques",
            entetes: ["Formule semi-développée", "Nombre de carbones", "Nom"],
            lignes: [
              ["H–COOH", "1", "Acide méthanoïque"],
              ["CH₃–COOH", "2", "Acide éthanoïque"],
              ["CH₃–CH₂–COOH", "3", "Acide propanoïque"]
            ]
          },
          {
            type: "remarque",
            titre: "Compter le carbone du groupe –COOH",
            texte: "Dans CH₃–COOH, il y a deux carbones : l’un dans CH₃ et l’autre dans COOH. Le nom est donc acide éthanoïque et non acide méthanoïque."
          }
        ]
      },

      {
        id: "sp1-ch25-acidite",
        titre: "2. Propriété acide",
        blocs: [
          {
            type: "definition",
            titre: "Acide et base conjuguée",
            texte: "Un acide carboxylique peut céder un ion hydrogène H⁺. Sa base conjuguée est l’ion carboxylate R–COO⁻, obtenu lorsque le groupe –COOH perd H⁺."
          },
          {
            type: "regle",
            titre: "Réaction avec l’eau",
            texte: "Dans l’eau, on modélise l’équilibre par : R–COOH + H₂O ⇌ R–COO⁻ + H₃O⁺. Cette transformation n’est généralement pas totale pour les acides carboxyliques usuels : ce sont des acides faibles en solution aqueuse."
          },
          {
            type: "exemple",
            titre: "Acide éthanoïque",
            texte: "CH₃–COOH + H₂O ⇌ CH₃–COO⁻ + H₃O⁺. L’ion CH₃–COO⁻ est appelé ion éthanoate."
          },
          {
            type: "remarque",
            titre: "Faible ne veut pas dire sans danger",
            texte: "Le mot « faible » décrit une réaction acido-basique non totale avec l’eau. Il ne signifie pas qu’un produit concentré est sans danger."
          }
        ]
      },

      {
        id: "sp1-ch25-esters",
        titre: "3. Les esters",
        blocs: [
          {
            type: "definition",
            titre: "Groupe ester",
            texte: "Un ester possède le groupe –COO–. Sa formule générale peut s’écrire R–COO–R′ : le carbone du carbonyle est lié à un oxygène lui-même lié au groupe carboné R′. R peut être un hydrogène ou un groupe carboné."
          },
          {
            type: "schema",
            titre: "Structure d’un ester",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 205' role='img' aria-label='Structure d’un ester : R est lié à un carbone doublement lié à O, puis ce carbone est lié à un oxygène lui-même lié à R prime.'><text x='175' y='115' text-anchor='middle' font-size='23'>R</text><text x='245' y='115' text-anchor='middle' font-size='23'>C</text><text x='315' y='115' text-anchor='middle' font-size='23'>O</text><text x='390' y='115' text-anchor='middle' font-size='23'>R′</text><text x='245' y='45' text-anchor='middle' font-size='23'>O</text><line x1='190' y1='108' x2='230' y2='108' stroke='#222' stroke-width='2'/><line x1='260' y1='108' x2='300' y2='108' stroke='#222' stroke-width='2'/><line x1='330' y1='108' x2='370' y2='108' stroke='#222' stroke-width='2'/><line x1='241' y1='55' x2='241' y2='90' stroke='#222' stroke-width='2'/><line x1='249' y1='55' x2='249' y2='90' stroke='#222' stroke-width='2'/><text x='310' y='180' text-anchor='middle' font-size='17'>R—C(=O)—O—R′</text></svg>",
            legende: "Le groupe R′ est lié à l’oxygène, tandis que R est lié au carbone du carbonyle."
          },
          {
            type: "regle",
            titre: "Nommer un ester simple",
            texte: "Le nom comporte deux parties : le nom de la partie R–COO, terminé en -oate, suivi de « de » et du nom du groupe alkyle R′. Par exemple, CH₃–COO–CH₂–CH₃ est l’éthanoate d’éthyle."
          },
          {
            type: "methode",
            titre: "Identifier les deux parties",
            texte: "1. Repérer le groupe –COO–. 2. Compter les carbones du côté contenant le carbonyle, en incluant le carbone C=O : cela donne la partie en -oate. 3. Nommer le groupe carboné lié à l’autre oxygène : méthyle, éthyle, etc. 4. Assembler les deux noms."
          },
          {
            type: "exemple",
            titre: "Deux esters",
            texte: "H–COO–CH₃ est le méthanoate de méthyle. CH₃–CH₂–COO–CH₃ est le propanoate de méthyle : la partie contenant le carbonyle comporte trois carbones et le groupe lié à l’oxygène est méthyle."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre avec un acide",
            texte: "Un acide carboxylique se termine par –COOH. Dans un ester R–COO–R′, l’oxygène est lié à un groupe carboné R′ et non à l’hydrogène du groupe –COOH."
          }
        ]
      },

      {
        id: "sp1-ch25-isomerie",
        titre: "4. Isomérie et calculs",
        blocs: [
          {
            type: "definition",
            titre: "Isomérie de fonction",
            texte: "Un acide carboxylique et un ester peuvent avoir la même formule brute tout en possédant des groupes caractéristiques différents. Ce sont alors des isomères de constitution, dits isomères de fonction."
          },
          {
            type: "exemple",
            titre: "Même formule brute",
            texte: "L’acide éthanoïque CH₃–COOH et le méthanoate de méthyle H–COO–CH₃ ont tous deux pour formule brute C₂H₄O₂. Le premier est un acide carboxylique ; le second est un ester."
          },
          {
            type: "methode",
            titre: "Calculer une masse molaire",
            texte: "Établir la formule brute en comptant les atomes, puis additionner leurs masses molaires atomiques. Pour C₂H₄O₂, avec M(C) = 12, M(H) = 1 et M(O) = 16 g·mol⁻¹ : M = 2 × 12 + 4 × 1 + 2 × 16 = 60 g·mol⁻¹."
          },
          {
            type: "remarque",
            titre: "Propriétés et sécurité",
            texte: "Certains esters ont des odeurs utilisées en parfumerie ou comme arômes, mais cela ne signifie pas qu’ils sont tous sans danger. Ne goûte et ne sens jamais un produit inconnu. Les réactions de formation et d’hydrolyse des esters seront étudiées au chapitre suivant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Identifie la famille de chacune des molécules suivantes : a) CH₃–COOH ; b) CH₃–COO–CH₃.",
        correction: "a) CH₃–COOH possède un groupe carboxyle : c’est un acide carboxylique. b) CH₃–COO–CH₃ possède le groupe ester –COO– : c’est un ester."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Nomme l’acide carboxylique de formule CH₃–CH₂–COOH.",
        correction: "La chaîne, en incluant le carbone du groupe –COOH, comporte trois carbones. Il s’agit de l’acide propanoïque."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Nomme l’ester CH₃–COO–CH₂–CH₃.",
        correction: "La partie contenant le carbonyle a deux carbones : éthanoate. Le groupe lié à l’oxygène est éthyle. Le nom est éthanoate d’éthyle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris l’équation de la réaction de l’acide éthanoïque CH₃–COOH avec l’eau et nomme sa base conjuguée.",
        correction: "CH₃–COOH + H₂O ⇌ CH₃–COO⁻ + H₃O⁺. La base conjuguée CH₃–COO⁻ est l’ion éthanoate."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Détermine la formule brute et la masse molaire de l’éthanoate de méthyle CH₃–COO–CH₃. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹.",
        correction: "On compte trois carbones, six hydrogènes et deux oxygènes : C₃H₆O₂. Sa masse molaire vaut M = 3 × 12 + 6 × 1 + 2 × 16 = 74 g·mol⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L’acide éthanoïque CH₃–COOH et le méthanoate de méthyle H–COO–CH₃ sont-ils des isomères ? Justifie en donnant leur formule brute et leur famille.",
        correction: "Ils ont tous deux pour formule brute C₂H₄O₂. Le premier est un acide carboxylique et le second un ester. Leurs enchaînements diffèrent : ce sont des isomères de constitution, dits isomères de fonction."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de 15 g d’acide éthanoïque CH₃–COOH est étudié. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹. Détermine sa formule brute, sa masse molaire et la quantité de matière correspondante.",
        correction: "La formule brute est C₂H₄O₂. M = 2 × 12 + 4 × 1 + 2 × 16 = 60 g·mol⁻¹. Donc n = m/M = 15/60 = 0,25 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère les molécules A = CH₃–CH₂–COOH et B = CH₃–COO–CH₃. Donne leur nom, leur famille et leur formule brute. Sont-elles isomères ? Justifie.",
        correction: "A est l’acide propanoïque, un acide carboxylique. B est l’éthanoate de méthyle, un ester. Les deux formules brutes sont C₃H₆O₂. Leurs groupes caractéristiques et leurs enchaînements diffèrent : ce sont des isomères de constitution, dits isomères de fonction."
      }
    ]
  }
]);
