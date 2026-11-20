enregistrerChapitres("3e", "sp", [
  {
    id: 6,
    titre: "Chapitre 6 : Les ions et leur identification",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Comprendre les ions",
        blocs: [
          {
            type: "introduction",
            titre: "Dans une solution",
            texte: "Certaines substances dissoutes dans l’eau donnent des particules chargées appelées ions. On ne les voit pas à l’œil nu, mais on peut parfois les identifier grâce à des tests chimiques."
          },
          {
            type: "definition",
            titre: "Atome et ion",
            texte: "Un atome possède un noyau chargé positivement et des électrons chargés négativement. Un atome est électriquement neutre : ses charges positives et négatives se compensent.\n\nUn ion est une particule chargée électriquement. Il peut provenir d’un atome qui a perdu ou gagné un ou plusieurs électrons."
          },
          {
            type: "definition",
            titre: "Cation et anion",
            texte: "• Un cation est un ion positif. Il peut se former lorsqu’un atome perd un ou plusieurs électrons.\n\n• Un anion est un ion négatif. Il peut se former lorsqu’un atome gagne un ou plusieurs électrons.\n\nUn ion peut aussi être formé de plusieurs atomes, comme l’ion hydroxyde OH⁻."
          },
          {
            type: "exemple",
            titre: "Formation de quelques ions",
            texte: "Un atome de sodium Na perd un électron et devient l’ion sodium Na⁺ :\n\nNa → Na⁺ + e⁻.\n\nUn atome de chlore Cl gagne un électron et devient l’ion chlorure Cl⁻ :\n\nCl + e⁻ → Cl⁻.\n\nLe symbole e⁻ désigne un électron."
          },
          {
            type: "schema",
            titre: "Perte ou gain d’un électron",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 205' role='img' aria-label='Formation des ions sodium et chlorure'><rect width='320' height='205' fill='white'/><text x='160' y='25' text-anchor='middle' font-size='16' fill='#0f172a'>Formation d’un cation</text><rect x='18' y='39' width='82' height='42' rx='8' fill='#e2e8f0'/><text x='59' y='66' text-anchor='middle' font-size='19' fill='#0f172a'>Na</text><path d='M110 60 L205 60 M195 54 L205 60 L195 66' fill='none' stroke='#475569' stroke-width='2'/><text x='158' y='52' text-anchor='middle' font-size='12' fill='#475569'>perte de e⁻</text><rect x='218' y='39' width='82' height='42' rx='8' fill='#dbeafe'/><text x='259' y='66' text-anchor='middle' font-size='19' fill='#1d4ed8'>Na⁺</text><text x='160' y='116' text-anchor='middle' font-size='16' fill='#0f172a'>Formation d’un anion</text><rect x='18' y='130' width='82' height='42' rx='8' fill='#e2e8f0'/><text x='59' y='157' text-anchor='middle' font-size='19' fill='#0f172a'>Cl</text><path d='M110 151 L205 151 M195 145 L205 151 L195 157' fill='none' stroke='#475569' stroke-width='2'/><text x='158' y='143' text-anchor='middle' font-size='12' fill='#475569'>gain de e⁻</text><rect x='218' y='130' width='82' height='42' rx='8' fill='#dcfce7'/><text x='259' y='157' text-anchor='middle' font-size='19' fill='#047857'>Cl⁻</text><text x='160' y='194' text-anchor='middle' font-size='13' fill='#475569'>e⁻ représente un électron</text></svg>",
            legende: "Un atome qui perd un électron négatif devient ici un cation positif. Un atome qui gagne un électron devient ici un anion négatif. Le schéma montre deux exemples distincts."
          },
          {
            type: "remarque",
            titre: "À ne pas confondre",
            texte: "Na est un atome neutre ; Na⁺ est un ion positif. Cl est un atome neutre ; Cl⁻ est un ion négatif.\n\nLe symbole Cl désigne l’élément chlore ou un atome de chlore selon le contexte. La molécule de dichlore, elle, a pour formule Cl₂."
          }
        ]
      },

      {
        id: 2,
        titre: "Quelques ions courants",
        blocs: [
          {
            type: "tableau",
            titre: "Noms, formules et charges",
            entetes: ["Nom de l’ion", "Formule", "Charge"],
            lignes: [
              ["Ion sodium", "Na⁺", "Positive"],
              ["Ion cuivre(II)", "Cu²⁺", "Positive"],
              ["Ion fer(II)", "Fe²⁺", "Positive"],
              ["Ion fer(III)", "Fe³⁺", "Positive"],
              ["Ion zinc", "Zn²⁺", "Positive"],
              ["Ion chlorure", "Cl⁻", "Négative"],
              ["Ion hydroxyde", "OH⁻", "Négative"],
              ["Ion oxonium", "H₃O⁺", "Positive"]
            ]
          },
          {
            type: "regle",
            titre: "Lire la charge",
            texte: "Le signe et le nombre écrits en haut à droite indiquent la charge de l’ion.\n\n• Na⁺ porte une charge positive élémentaire.\n• Cu²⁺ porte deux charges positives élémentaires.\n• Cl⁻ porte une charge négative élémentaire.\n\nLorsque le nombre vaut 1, on ne l’écrit généralement pas."
          },
          {
            type: "exemple",
            titre: "Fer(II) et fer(III)",
            texte: "L’ion fer(II) Fe²⁺ et l’ion fer(III) Fe³⁺ sont deux ions différents du fer. Leurs charges ne sont pas les mêmes et leurs tests peuvent donner des précipités de couleurs différentes."
          },
          {
            type: "remarque",
            titre: "Solution électriquement neutre",
            texte: "Une solution contenant des ions est globalement électriquement neutre : la somme des charges positives compense la somme des charges négatives.\n\nCela ne signifie pas qu’elle ne contient aucun ion."
          }
        ]
      },

      {
        id: 3,
        titre: "Les ions en solution aqueuse",
        blocs: [
          {
            type: "definition",
            titre: "Dissolution d’un solide ionique",
            texte: "Certains solides, comme le chlorure de sodium, sont constitués d’ions. Lorsqu’ils se dissolvent dans l’eau, leurs ions se dispersent dans la solution."
          },
          {
            type: "exemple",
            titre: "Chlorure de sodium",
            texte: "Le chlorure de sodium solide a pour formule NaCl. Dans l’eau, il donne des ions sodium Na⁺ et des ions chlorure Cl⁻.\n\nOn peut écrire :\nNaCl → Na⁺ + Cl⁻.\n\nPour chaque ion Na⁺, on obtient un ion Cl⁻. Leurs charges se compensent."
          },
          {
            type: "exemple",
            titre: "Chlorure de cuivre(II)",
            texte: "Le chlorure de cuivre(II) a pour formule CuCl₂. Dans l’eau, il donne des ions Cu²⁺ et Cl⁻ :\n\nCuCl₂ → Cu²⁺ + 2 Cl⁻.\n\nLa charge +2 de Cu²⁺ est compensée par les charges −1 des deux ions Cl⁻."
          },
          {
            type: "remarque",
            titre: "Indices et coefficients",
            texte: "Dans CuCl₂, l’indice 2 indique la proportion des ions dans le solide. Dans 2 Cl⁻, le coefficient 2 indique deux ions chlorure. Il ne faut pas écrire Cl₂⁻ à la place de 2 Cl⁻."
          }
        ]
      },

      {
        id: 4,
        titre: "Identifier des ions avec une solution de soude",
        blocs: [
          {
            type: "definition",
            titre: "Précipité",
            texte: "Un précipité est un solide qui apparaît dans une solution lors d’une réaction chimique. Sa formation et sa couleur peuvent aider à identifier certains ions."
          },
          {
            type: "definition",
            titre: "La solution de soude",
            texte: "La solution de soude est une solution d’hydroxyde de sodium. Elle contient notamment des ions sodium Na⁺ et des ions hydroxyde OH⁻.\n\nLes ions OH⁻ peuvent réagir avec certains ions métalliques pour former un précipité."
          },
          {
            type: "tableau",
            titre: "Quelques tests à la soude",
            entetes: ["Ion recherché", "Précipité observé", "Formule du solide"],
            lignes: [
              ["Cu²⁺", "Bleu", "Cu(OH)₂"],
              ["Fe²⁺", "Vert, pouvant brunir à l’air", "Fe(OH)₂"],
              ["Fe³⁺", "Brun-rouille", "Fe(OH)₃"],
              ["Zn²⁺", "Blanc", "Zn(OH)₂"]
            ]
          },
          {
            type: "schema",
            titre: "Couleurs de quelques précipités",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210' role='img' aria-label='Couleurs schématiques des précipités obtenus avec la soude'><rect width='320' height='210' fill='white'/><text x='160' y='23' text-anchor='middle' font-size='15' fill='#0f172a'>Après ajout de solution de soude</text><g fill='none' stroke='#475569' stroke-width='2'><path d='M29 55 L29 132 Q29 146 43 146 L56 146 Q70 146 70 132 L70 55'/><path d='M99 55 L99 132 Q99 146 113 146 L126 146 Q140 146 140 132 L140 55'/><path d='M169 55 L169 132 Q169 146 183 146 L196 146 Q210 146 210 132 L210 55'/><path d='M239 55 L239 132 Q239 146 253 146 L266 146 Q280 146 280 132 L280 55'/></g><path d='M31 126 L68 126 L68 132 Q68 144 56 144 L43 144 Q31 144 31 132 Z' fill='#3b82f6'/><path d='M101 126 L138 126 L138 132 Q138 144 126 144 L113 144 Q101 144 101 132 Z' fill='#22c55e'/><path d='M171 126 L208 126 L208 132 Q208 144 196 144 L183 144 Q171 144 171 132 Z' fill='#b45309'/><path d='M241 126 L278 126 L278 132 Q278 144 266 144 L253 144 Q241 144 241 132 Z' fill='#f1f5f9' stroke='#94a3b8'/><text x='49' y='169' text-anchor='middle' font-size='14' fill='#0f172a'>Cu²⁺</text><text x='119' y='169' text-anchor='middle' font-size='14' fill='#0f172a'>Fe²⁺</text><text x='189' y='169' text-anchor='middle' font-size='14' fill='#0f172a'>Fe³⁺</text><text x='259' y='169' text-anchor='middle' font-size='14' fill='#0f172a'>Zn²⁺</text><text x='49' y='189' text-anchor='middle' font-size='12' fill='#334155'>bleu</text><text x='119' y='189' text-anchor='middle' font-size='12' fill='#334155'>vert</text><text x='189' y='189' text-anchor='middle' font-size='12' fill='#334155'>brun</text><text x='259' y='189' text-anchor='middle' font-size='12' fill='#334155'>blanc</text></svg>",
            legende: "Représentation simplifiée des précipités attendus dans les tests du cours. Les couleurs peuvent varier à l’écran. Le précipité vert de Fe(OH)₂ peut brunir à l’air ; celui de Zn(OH)₂ peut se dissoudre dans un excès de soude."
          },
          {
            type: "exemple",
            titre: "Test de l’ion cuivre(II)",
            texte: "Si l’on ajoute quelques gouttes de solution de soude à une solution contenant des ions Cu²⁺, un précipité bleu d’hydroxyde de cuivre(II) peut apparaître.\n\nÉquation ionique :\nCu²⁺ + 2 OH⁻ → Cu(OH)₂.\n\nLa charge totale est nulle des deux côtés : +2 et deux fois −1 à gauche ; le solide est neutre à droite."
          },
          {
            type: "remarque",
            titre: "Interpréter avec prudence",
            texte: "Une couleur ne suffit pas toujours à identifier un ion dans une solution inconnue : d’autres espèces peuvent gêner le test ou former un précipité semblable. En particulier, plusieurs ions peuvent donner un précipité blanc avec la soude.\n\nAvec un excès de soude, certains précipités, notamment celui de Zn(OH)₂, peuvent se dissoudre."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "La solution de soude peut provoquer de graves brûlures. Les tests sont réalisés au laboratoire, sous la surveillance de l’enseignant et avec les protections adaptées. Ne touche pas et ne goûte pas les solutions."
          }
        ]
      },

      {
        id: 5,
        titre: "Identifier l’ion chlorure",
        blocs: [
          {
            type: "definition",
            titre: "Test au nitrate d’argent",
            texte: "Une solution de nitrate d’argent contient notamment des ions argent Ag⁺. En présence d’ions chlorure Cl⁻, elle peut former un précipité blanc de chlorure d’argent AgCl."
          },
          {
            type: "regle",
            titre: "Équation du test",
            texte: "Ag⁺ + Cl⁻ → AgCl.\n\nÀ gauche, les charges +1 et −1 se compensent. À droite, le solide AgCl est neutre."
          },
          {
            type: "remarque",
            titre: "Observation et précautions",
            texte: "Le précipité de chlorure d’argent peut noircir à la lumière. D’autres ions peuvent aussi réagir avec les ions argent : le test doit donc être interprété dans le contexte de l’exercice.\n\nLe nitrate d’argent doit être manipulé avec précaution, sous la surveillance de l’enseignant."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et bilan pour l’examen",
        blocs: [
          {
            type: "methode",
            titre: "Exploiter un test d’identification",
            texte: "1. Relever le réactif ajouté à la solution.\n2. Décrire l’observation : précipité ou absence de précipité, couleur.\n3. Comparer avec les résultats connus.\n4. Proposer l’ion correspondant, en tenant compte des autres informations de l’énoncé.\n5. Si elle est demandée, écrire l’équation ionique et vérifier les atomes et les charges."
          },
          {
            type: "exemple",
            titre: "Rédiger une conclusion",
            texte: "Observation : l’ajout de soude à une solution étudiée donne un précipité bleu.\n\nConclusion, dans le cadre des tests du cours : la solution contient des ions cuivre(II) Cu²⁺.\n\nJustification : les ions Cu²⁺ réagissent avec les ions OH⁻ pour former le précipité bleu Cu(OH)₂."
          },
          {
            type: "tableau",
            titre: "À mémoriser",
            entetes: ["Ion recherché", "Réactif", "Résultat attendu"],
            lignes: [
              ["Cu²⁺", "Soude", "Précipité bleu"],
              ["Fe²⁺", "Soude", "Précipité vert"],
              ["Fe³⁺", "Soude", "Précipité brun-rouille"],
              ["Cl⁻", "Nitrate d’argent", "Précipité blanc de AgCl"]
            ]
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Confondre un atome neutre et un ion chargé.\n• Oublier la charge dans la formule d’un ion.\n• Confondre Fe²⁺ et Fe³⁺.\n• Dire qu’une solution neutre ne contient pas d’ions.\n• Confondre le réactif ajouté avec l’ion que l’on cherche.\n• Oublier de vérifier les charges dans une équation ionique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu’est-ce qu’un ion ? Quelle différence y a-t-il entre un cation et un anion ?",
        correction: "Un ion est une particule chargée électriquement.\n\nUn cation est un ion positif ; un anion est un ion négatif."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Classer les ions suivants en cations et anions : Na⁺, Cl⁻, Cu²⁺ et OH⁻.",
        correction: "Cations : Na⁺ et Cu²⁺, car leur charge est positive.\n\nAnions : Cl⁻ et OH⁻, car leur charge est négative."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un atome de sodium perd un électron. Quel ion forme-t-il ? Écrire le bilan.",
        correction: "Il forme l’ion sodium Na⁺.\n\nBilan : Na → Na⁺ + e⁻.\n\nLa perte d’un électron négatif donne à l’ion une charge positive."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le chlorure de cuivre(II) CuCl₂ se dissout dans l’eau. Quels ions obtient-on et dans quelles proportions ?",
        correction: "On obtient des ions cuivre(II) Cu²⁺ et des ions chlorure Cl⁻.\n\nCuCl₂ → Cu²⁺ + 2 Cl⁻.\n\nPour un ion Cu²⁺, on obtient deux ions Cl⁻. La charge +2 est compensée par les deux charges −1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On ajoute quelques gouttes de soude à une solution. Un précipité bleu apparaît. Quel ion peut-on identifier dans le cadre des tests du cours ?",
        correction: "Le précipité bleu indique la présence d’ions cuivre(II) Cu²⁺ dans le cadre des tests étudiés.\n\nL’équation est : Cu²⁺ + 2 OH⁻ → Cu(OH)₂."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel réactif utilise-t-on pour rechercher des ions chlorure ? Quelle observation attend-on ?",
        correction: "On utilise une solution de nitrate d’argent.\n\nEn présence d’ions chlorure, un précipité blanc de chlorure d’argent peut apparaître.\n\nÉquation : Ag⁺ + Cl⁻ → AgCl."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On ajoute de la soude à deux solutions. La première donne un précipité vert ; la seconde donne un précipité brun-rouille. Quels ions métalliques propose-t-on d’identifier ?",
        correction: "Le précipité vert correspond aux ions fer(II) Fe²⁺.\n\nLe précipité brun-rouille correspond aux ions fer(III) Fe³⁺.\n\nLes conclusions s’appuient sur les tests du cours et sur le contexte de l’exercice."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Compléter et équilibrer : Fe³⁺ + … OH⁻ → Fe(OH)₃. Vérifier la charge et les atomes.",
        correction: "Fe³⁺ + 3 OH⁻ → Fe(OH)₃.\n\nAtomes : 1 Fe, 3 O et 3 H de chaque côté.\n\nCharge à gauche : +3 + 3 × (−1) = 0. Le solide à droite est neutre. La charge est conservée."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution contient des ions Zn²⁺ et Cl⁻ provenant de la dissolution de chlorure de zinc. Combien d’ions chlorure faut-il pour compenser la charge d’un ion zinc ? Donner la formule du chlorure de zinc.",
        correction: "Un ion Zn²⁺ porte la charge +2. Un ion Cl⁻ porte la charge −1. Il faut donc deux ions chlorure pour compenser un ion zinc.\n\nLa formule du chlorure de zinc est ZnCl₂.\n\nDissolution : ZnCl₂ → Zn²⁺ + 2 Cl⁻."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. On étudie une solution contenant un seul type d’ion métallique parmi Cu²⁺, Fe²⁺ et Fe³⁺. On prélève deux échantillons.\n\n• Dans le premier, l’ajout de soude donne un précipité vert.\n• Dans le second, l’ajout de nitrate d’argent donne un précipité blanc de chlorure d’argent.\n\n1. Identifier l’ion métallique en justifiant.\n2. Identifier l’autre ion mis en évidence.\n3. Donner la formule du composé formé par ces deux ions.\n4. Écrire l’équation de formation du précipité blanc.",
        correction: "1. Le précipité vert obtenu avec la soude indique la présence d’ions fer(II) Fe²⁺.\n\n2. Le précipité blanc de chlorure d’argent indique la présence d’ions chlorure Cl⁻.\n\n3. Il faut deux ions Cl⁻ pour compenser la charge d’un ion Fe²⁺. La formule du chlorure de fer(II) est FeCl₂.\n\n4. Ag⁺ + Cl⁻ → AgCl."
      }
    ]
  }
]);
