enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch22",
    titre: "Chapitre 22 : Alcènes, alcynes et isomérie Z/E",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch22-insaturation",
        titre: "1. Reconnaître les alcènes et les alcynes",
        blocs: [
          {
            type: "introduction",
            titre: "Des hydrocarbures insaturés",
            texte: "Contrairement aux alcanes à chaîne ouverte, les alcènes et les alcynes possèdent une liaison multiple entre deux atomes de carbone. Cette liaison intervient dans leurs propriétés et leurs réactions."
          },
          {
            type: "definition",
            titre: "Alcène",
            texte: "Un alcène est un hydrocarbure contenant une liaison double carbone-carbone C=C. Pour un alcène à chaîne ouverte possédant une seule double liaison, la formule générale est CnH₂n, avec n ≥ 2."
          },
          {
            type: "definition",
            titre: "Alcyne",
            texte: "Un alcyne est un hydrocarbure contenant une liaison triple carbone-carbone C≡C. Pour un alcyne à chaîne ouverte possédant une seule triple liaison, la formule générale est CnH₂n₋₂, avec n ≥ 2."
          },
          {
            type: "tableau",
            titre: "Exemples",
            entetes: ["Famille", "Nom", "Formule semi-développée", "Formule brute"],
            lignes: [
              ["Alcène", "Éthène", "CH₂=CH₂", "C₂H₄"],
              ["Alcène", "Propène", "CH₂=CH–CH₃", "C₃H₆"],
              ["Alcyne", "Éthyne", "HC≡CH", "C₂H₂"],
              ["Alcyne", "Propyne", "HC≡C–CH₃", "C₃H₄"]
            ]
          },
          {
            type: "remarque",
            titre: "Vérifier les valences",
            texte: "Une double liaison compte pour deux liaisons et une triple liaison pour trois. Dans les exemples du tableau, chaque carbone respecte ainsi sa valence usuelle de quatre."
          }
        ]
      },

      {
        id: "sp1-ch22-nomenclature",
        titre: "2. Nommer quelques molécules",
        blocs: [
          {
            type: "methode",
            titre: "Nomenclature simple",
            texte: "1. Choisir la plus longue chaîne carbonée contenant la liaison multiple. 2. La numéroter depuis l’extrémité qui donne le plus petit indice à cette liaison. 3. Utiliser le suffixe -ène pour une double liaison ou -yne pour une triple liaison. 4. Indiquer la position du premier carbone de la liaison multiple."
          },
          {
            type: "exemple",
            titre: "Position de la double liaison",
            texte: "CH₂=CH–CH₂–CH₃ se nomme but-1-ène. CH₃–CH=CH–CH₃ se nomme but-2-ène. Ces molécules ont toutes deux pour formule brute C₄H₈, mais leur double liaison n’occupe pas la même position : ce sont des isomères de constitution."
          },
          {
            type: "exemple",
            titre: "Position de la triple liaison",
            texte: "HC≡C–CH₂–CH₃ se nomme but-1-yne. CH₃–C≡C–CH₃ se nomme but-2-yne."
          },
          {
            type: "remarque",
            titre: "Chaîne principale",
            texte: "La chaîne retenue doit contenir la liaison multiple, même si une autre chaîne du dessin semble plus longue sans la contenir."
          }
        ]
      },

      {
        id: "sp1-ch22-ze",
        titre: "3. Isomérie Z/E des alcènes",
        blocs: [
          {
            type: "definition",
            titre: "Une disposition dans l’espace",
            texte: "La rotation autour d’une double liaison C=C est empêchée dans les conditions ordinaires. Certains alcènes peuvent donc exister sous deux dispositions spatiales différentes, appelées isomères Z et E."
          },
          {
            type: "regle",
            titre: "Condition d’existence",
            texte: "Pour qu’une double liaison présente une isomérie Z/E, chacun de ses deux carbones doit porter deux groupes différents. Si l’un des carbones porte deux groupes identiques, il n’y a pas d’isomérie Z/E pour cette double liaison."
          },
          {
            type: "regle",
            titre: "Distinguer Z et E",
            texte: "Sur chacun des carbones de la double liaison, on détermine le groupe prioritaire. Si les deux groupes prioritaires sont du même côté de la double liaison, l’isomère est Z ; s’ils sont de côtés opposés, il est E."
          },
          {
            type: "definition",
            titre: "Priorité : premier atome",
            texte: "On compare d’abord les atomes directement liés au carbone de la double liaison. Celui dont le numéro atomique est le plus élevé est prioritaire : par exemple O est prioritaire sur C, lui-même prioritaire sur H. Si ces premiers atomes sont identiques, on compare les atomes suivants selon les règles de priorité."
          },
          {
            type: "schema",
            titre: "Isomères du but-2-ène",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 255' role='img' aria-label='Deux représentations du but-2-ène. Dans l’isomère Z, les deux groupes CH3 sont du même côté de la double liaison. Dans l’isomère E, ils sont de côtés opposés.'><text x='155' y='28' text-anchor='middle' font-size='18'>Z-but-2-ène</text><text x='110' y='125' text-anchor='middle' font-size='22'>C</text><text x='200' y='125' text-anchor='middle' font-size='22'>C</text><line x1='125' y1='113' x2='185' y2='113' stroke='#222' stroke-width='2'/><line x1='125' y1='120' x2='185' y2='120' stroke='#222' stroke-width='2'/><text x='65' y='65' text-anchor='middle' font-size='18'>CH₃</text><text x='245' y='65' text-anchor='middle' font-size='18'>CH₃</text><text x='65' y='195' text-anchor='middle' font-size='18'>H</text><text x='245' y='195' text-anchor='middle' font-size='18'>H</text><line x1='99' y1='105' x2='75' y2='72' stroke='#222' stroke-width='2'/><line x1='211' y1='105' x2='235' y2='72' stroke='#222' stroke-width='2'/><line x1='99' y1='130' x2='75' y2='180' stroke='#222' stroke-width='2'/><line x1='211' y1='130' x2='235' y2='180' stroke='#222' stroke-width='2'/><text x='465' y='28' text-anchor='middle' font-size='18'>E-but-2-ène</text><text x='420' y='125' text-anchor='middle' font-size='22'>C</text><text x='510' y='125' text-anchor='middle' font-size='22'>C</text><line x1='435' y1='113' x2='495' y2='113' stroke='#222' stroke-width='2'/><line x1='435' y1='120' x2='495' y2='120' stroke='#222' stroke-width='2'/><text x='375' y='65' text-anchor='middle' font-size='18'>CH₃</text><text x='555' y='65' text-anchor='middle' font-size='18'>H</text><text x='375' y='195' text-anchor='middle' font-size='18'>H</text><text x='555' y='195' text-anchor='middle' font-size='18'>CH₃</text><line x1='409' y1='105' x2='385' y2='72' stroke='#222' stroke-width='2'/><line x1='521' y1='105' x2='545' y2='72' stroke='#222' stroke-width='2'/><line x1='409' y1='130' x2='385' y2='180' stroke='#222' stroke-width='2'/><line x1='521' y1='130' x2='545' y2='180' stroke='#222' stroke-width='2'/></svg>",
            legende: "Sur chaque carbone, CH₃ est prioritaire sur H. Les groupes CH₃ sont du même côté pour Z et de côtés opposés pour E."
          },
          {
            type: "exemple",
            titre: "Cas sans isomérie Z/E",
            texte: "Le propène CH₂=CH–CH₃ ne présente pas d’isomérie Z/E : l’un des carbones de la double liaison porte deux hydrogènes identiques."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Les isomères Z et E ont le même enchaînement d’atomes mais une disposition spatiale différente. Le but-1-ène et le but-2-ène diffèrent, eux, par l’emplacement de la double liaison : ce sont des isomères de constitution."
          }
        ]
      },

      {
        id: "sp1-ch22-reactions",
        titre: "4. Réactions d’addition",
        blocs: [
          {
            type: "definition",
            titre: "Addition sur une liaison multiple",
            texte: "Lors d’une réaction d’addition, des atomes ou groupes d’atomes se fixent sur les carbones d’une liaison multiple. La liaison double ou triple perd une partie de son caractère multiple."
          },
          {
            type: "exemple",
            titre: "Hydrogénation d’un alcène",
            texte: "L’éthène peut réagir avec le dihydrogène pour donner l’éthane : CH₂=CH₂ + H₂ → CH₃–CH₃. Cette transformation nécessite des conditions adaptées, notamment un catalyseur."
          },
          {
            type: "exemple",
            titre: "Addition de dibrome",
            texte: "L’éthène réagit avec le dibrome selon : CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br. Cette équation décrit une addition sur la double liaison."
          },
          {
            type: "exemple",
            titre: "Hydrogénation d’un alcyne",
            texte: "L’hydrogénation complète de l’éthyne donne l’éthane : HC≡CH + 2 H₂ → CH₃–CH₃. Deux molécules de dihydrogène sont nécessaires par molécule d’éthyne."
          },
          {
            type: "definition",
            titre: "Polymérisation par addition",
            texte: "Des molécules d’alcène peuvent s’assembler en une longue chaîne appelée polymère. Par exemple, l’éthène donne du polyéthylène : n CH₂=CH₂ → [–CH₂–CH₂–]n."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Le dibrome est dangereux et de nombreux hydrocarbures sont inflammables. Ces réactions sont des modèles à étudier sur le papier ; ne les réalise pas chez toi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Classe les molécules suivantes en alcène ou alcyne : a) CH₂=CH₂ ; b) HC≡CH.",
        correction: "a) CH₂=CH₂ possède une double liaison : c’est un alcène. b) HC≡CH possède une triple liaison : c’est un alcyne."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un alcène à chaîne ouverte possède une seule double liaison et quatre atomes de carbone. Quelle est sa formule brute ?",
        correction: "La formule générale est CnH₂n. Pour n = 4, la formule brute est C₄H₈."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Nomme les molécules suivantes : a) CH₂=CH–CH₂–CH₃ ; b) CH₃–C≡C–CH₃.",
        correction: "a) La chaîne possède quatre carbones et la double liaison commence au carbone 1 : but-1-ène. b) La chaîne possède quatre carbones et la triple liaison commence au carbone 2 : but-2-yne."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le propène CH₂=CH–CH₃ présente-t-il une isomérie Z/E ? Justifie.",
        correction: "Non. Le premier carbone de la double liaison porte deux groupes identiques, ici deux hydrogènes. La condition d’existence de l’isomérie Z/E n’est donc pas satisfaite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un isomère du but-2-ène, chacun des carbones de la double liaison porte un groupe CH₃ et un H. Les deux groupes CH₃ sont du même côté de la double liaison. L’isomère est-il Z ou E ? Justifie.",
        correction: "Sur chaque carbone, CH₃ est prioritaire sur H car l’atome directement lié est C pour CH₃ et H pour l’autre groupe. Les deux groupes prioritaires sont du même côté : l’isomère est Z."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Écris l’équation de l’hydrogénation complète du propène CH₂=CH–CH₃. Nomme le produit et donne sa formule brute.",
        correction: "CH₂=CH–CH₃ + H₂ → CH₃–CH₂–CH₃. Le produit est le propane, de formule brute C₃H₈."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une quantité de 0,30 mol d’éthyne HC≡CH subit une hydrogénation complète selon l’équation HC≡CH + 2 H₂ → CH₃–CH₃. Le dihydrogène est en excès. Calcule les quantités de H₂ consommé et d’éthane formé. On donne M(C) = 12 g·mol⁻¹ et M(H) = 1 g·mol⁻¹ : calcule aussi la masse d’éthane obtenue.",
        correction: "Pour 1 mol d’éthyne, il faut 2 mol de H₂ et on forme 1 mol d’éthane. Donc n(H₂) = 0,60 mol et n(C₂H₆) = 0,30 mol. M(C₂H₆) = 2 × 12 + 6 × 1 = 30 g·mol⁻¹. La masse formée est m = nM = 0,30 × 30 = 9,0 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie deux alcènes : A = CH₂=CH–CH₂–CH₃ et B = CH₃–CH=CH–CH₃. Donne leur nom et leur formule brute. Sont-ils isomères de constitution ? Lequel peut présenter une isomérie Z/E ? Justifie.",
        correction: "A est le but-1-ène et B le but-2-ène. Tous deux ont pour formule brute C₄H₈, mais la double liaison n’a pas la même position : ce sont des isomères de constitution. B peut présenter une isomérie Z/E, car chaque carbone de sa double liaison porte H et CH₃, deux groupes différents. A ne le peut pas : l’un des carbones de sa double liaison porte deux H."
      }
    ]
  }
]);
