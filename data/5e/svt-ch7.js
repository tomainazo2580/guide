// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 7 : Les micro-organismes

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-microorganismes",
    titre: "Chapitre 7 : Les micro-organismes utiles et pathogènes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-micro-definition",
        titre: "Un monde invisible à l'œil nu",
        blocs: [
          {
            type: "texte",
            titre: "Une observation",
            texte: "Une moisissure peut apparaître sur un aliment oublié. Du lait peut aussi se transformer en yaourt.\nDans ces deux situations, de très petits organismes interviennent : les micro-organismes."
          },
          {
            type: "definition",
            titre: "Les micro-organismes",
            texte: "Les micro-organismes sont des organismes généralement trop petits pour être vus à l'œil nu. On utilise souvent un microscope pour les observer.\nOn les appelle aussi couramment des microbes."
          },
          {
            type: "remarque",
            titre: "Une précision",
            texte: "Une moisissure visible est formée d'un ensemble de filaments. Ce que l'on voit à l'œil nu n'est donc pas un seul micro-organisme."
          },
          {
            type: "texte",
            titre: "Où les trouve-t-on ?",
            texte: "On trouve des micro-organismes dans l'eau, l'air, le sol, sur les aliments et sur les êtres vivants ou à l'intérieur de leur corps."
          }
        ]
      },

      {
        id: "svt5-micro-diversite",
        titre: "Différents types de microbes",
        blocs: [
          {
            type: "tableau",
            titre: "Quelques groupes à connaître",
            entetes: ["Groupe", "Description simple", "Exemple"],
            lignes: [
              [
                "Bactéries",
                "Êtres vivants formés d'une seule cellule.",
                "Certaines bactéries sont utilisées pour fabriquer du yaourt."
              ],
              [
                "Champignons microscopiques",
                "Ils comprennent notamment des levures et des moisissures.",
                "La levure de boulanger aide la pâte à lever."
              ],
              [
                "Protozoaires",
                "Organismes microscopiques formés d'une seule cellule.",
                "Le parasite responsable du paludisme appartient à ce groupe."
              ],
              [
                "Virus",
                "Agents infectieux très petits qui se multiplient à l'intérieur de cellules.",
                "Le virus de la grippe."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas des virus",
            texte: "Les virus sont souvent étudiés avec les microbes, mais ils ne sont pas constitués d'une cellule et ne peuvent pas se multiplier seuls."
          },
          {
            type: "remarque",
            titre: "Levures et moisissures",
            texte: "Les levures sont des champignons microscopiques généralement formés d'une seule cellule. Les moisissures sont constituées de filaments."
          }
        ]
      },

      {
        id: "svt5-micro-utiles",
        titre: "Des micro-organismes utiles",
        blocs: [
          {
            type: "texte",
            titre: "Tous les microbes ne rendent pas malades",
            texte: "Beaucoup de micro-organismes sont utiles. Certains participent à la fabrication d'aliments, d'autres vivent dans notre corps ou aident à décomposer les matières dans la nature."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Micro-organisme", "Utilité"],
            lignes: [
              [
                "Certaines bactéries",
                "Elles transforment le lait et permettent la fabrication du yaourt."
              ],
              [
                "Levure de boulanger",
                "Elle produit un gaz qui fait gonfler la pâte à pain."
              ],
              [
                "Certains microbes du sol",
                "Ils participent à la décomposition des restes d'êtres vivants."
              ],
              [
                "Certaines bactéries de notre intestin",
                "Elles participent au bon fonctionnement de notre organisme."
              ]
            ]
          },
          {
            type: "definition",
            titre: "La fermentation",
            texte: "La fermentation est une transformation réalisée par certains micro-organismes.\nElle est utilisée notamment dans la fabrication du yaourt et du pain."
          },
          {
            type: "exemple",
            titre: "La pâte à pain",
            texte: "La levure de boulanger utilise une partie des sucres de la pâte et produit un gaz : le dioxyde de carbone.\nCe gaz forme des bulles qui font gonfler la pâte."
          }
        ]
      },

      {
        id: "svt5-micro-pathogenes",
        titre: "Des microbes qui peuvent rendre malades",
        blocs: [
          {
            type: "definition",
            titre: "Un microbe pathogène",
            texte: "Un microbe pathogène est un microbe capable de provoquer une maladie."
          },
          {
            type: "tableau",
            titre: "Quelques exemples de maladies",
            entetes: ["Maladie", "Agent responsable"],
            lignes: [
              ["Tuberculose", "Une bactérie"],
              ["Grippe", "Un virus"],
              ["Paludisme", "Un parasite microscopique appelé Plasmodium"]
            ]
          },
          {
            type: "texte",
            titre: "La contamination et l'infection",
            texte: "La contamination correspond à l'entrée d'un microbe dans l'organisme.\nUne infection peut se produire lorsque le microbe se multiplie dans l'organisme et y provoque des troubles."
          },
          {
            type: "exemple",
            titre: "Une plaie",
            texte: "Si une plaie est souillée, des microbes peuvent entrer dans le corps. Certains peuvent ensuite se multiplier et provoquer une infection.\nNettoyer une plaie aide à réduire ce risque."
          },
          {
            type: "remarque",
            titre: "Tous les microbes ne sont pas pathogènes",
            texte: "La présence d'un microbe ne signifie pas automatiquement qu'une personne est malade. De nombreux microbes sont inoffensifs ou utiles."
          }
        ]
      },

      {
        id: "svt5-micro-developpement",
        titre: "Le développement des micro-organismes",
        blocs: [
          {
            type: "texte",
            titre: "Des conditions favorables",
            texte: "De nombreux micro-organismes se développent mieux lorsqu'ils trouvent de l'eau, des substances nutritives et une température favorable.\nLeurs besoins varient selon le micro-organisme."
          },
          {
            type: "exemple",
            titre: "Un aliment laissé trop longtemps",
            texte: "Sur un aliment humide laissé à température ambiante, certains microbes peuvent se multiplier et contribuer à le gâter.\nLe froid ralentit généralement leur multiplication, mais ne les détruit pas tous."
          },
          {
            type: "schema",
            titre: "Des microbes peuvent se multiplier",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='65' r='14' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><text x='50' y='112' font-size='12' fill='#374151' text-anchor='middle'>Au début</text><line x1='78' y1='65' x2='115' y2='65' stroke='#6b7280' stroke-width='2'/><polygon points='110,60 120,65 110,70' fill='#6b7280'/><circle cx='155' cy='53' r='12' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><circle cx='180' cy='78' r='12' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><text x='168' y='112' font-size='12' fill='#374151' text-anchor='middle'>Ils se multiplient</text><line x1='205' y1='65' x2='235' y2='65' stroke='#6b7280' stroke-width='2'/><polygon points='230,60 240,65 230,70' fill='#6b7280'/><circle cx='268' cy='47' r='10' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><circle cx='293' cy='49' r='10' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><circle cx='268' cy='78' r='10' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><circle cx='293' cy='80' r='10' fill='#a7f3d0' stroke='#047857' stroke-width='2'/><text x='281' y='112' font-size='12' fill='#374151' text-anchor='middle'>Ils sont plus nombreux</text><text x='170' y='150' font-size='11' fill='#6b7280' text-anchor='middle'>Schéma simplifié : exemple de multiplication</text></svg>",
            legende: "Lorsque les conditions sont favorables, certains micro-organismes peuvent se multiplier."
          }
        ]
      },

      {
        id: "svt5-micro-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Les micro-organismes sont généralement invisibles à l'œil nu.\n2. Ils comprennent notamment des bactéries et des champignons microscopiques. Les virus sont aussi étudiés avec les microbes.\n3. Certains microbes sont utiles ; d'autres sont pathogènes.\n4. Leurs besoins et leurs conditions de développement varient."
          },
          {
            type: "methode",
            titre: "Pour classer un exemple",
            texte: "Demande-toi d'abord de quel microbe il s'agit, puis quel est son rôle dans la situation étudiée :\n- aide-t-il à fabriquer un aliment ou à décomposer des matières ?\n- peut-il provoquer une maladie ?"
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous étudierons comment certains microbes pathogènes peuvent se transmettre et provoquer des maladies infectieuses."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un micro-organisme ?",
        correction: "C'est un organisme généralement trop petit pour être vu à l'œil nu. On utilise souvent un microscope pour l'observer."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux endroits où l'on peut trouver des micro-organismes.",
        correction: "Par exemple : dans l'eau et dans le sol. On en trouve aussi dans l'air, sur les aliments et sur ou dans les êtres vivants."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Tous les microbes provoquent-ils des maladies ?",
        correction: "Non. Beaucoup sont inoffensifs ou utiles. Certains seulement peuvent provoquer des maladies : ils sont dits pathogènes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel micro-organisme aide la pâte à pain à gonfler ?",
        correction: "La levure de boulanger. Elle produit un gaz, le dioxyde de carbone, qui forme des bulles dans la pâte."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un microbe pathogène ?",
        correction: "C'est un microbe capable de provoquer une maladie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel type de microbe provoque la grippe ?",
        correction: "La grippe est provoquée par un virus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite deux utilisations ou rôles utiles des micro-organismes.",
        correction: "Par exemple : certaines bactéries permettent de fabriquer du yaourt et la levure de boulanger aide la pâte à pain à lever. Certains microbes participent aussi à la décomposition des matières dans le sol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique la différence entre contamination et infection.",
        correction: "La contamination est l'entrée d'un microbe dans l'organisme. Une infection peut se produire lorsque le microbe se multiplie dans l'organisme et y provoque des troubles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. La levure de boulanger est utile pour fabriquer du pain.\n2. Tous les microbes rendent malades.\n3. Le virus de la grippe peut se multiplier seul, sans cellule.",
        correction: "1. Vrai.\n2. Faux : certains microbes sont utiles ou inoffensifs ; d'autres peuvent rendre malades.\n3. Faux : un virus se multiplie à l'intérieur de cellules."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Tovo dit : « Tous les microbes sont dangereux. » Donne deux exemples pour lui montrer que ce n'est pas exact.",
        correction: "Certaines bactéries sont utiles pour fabriquer du yaourt. La levure de boulanger est utilisée pour faire lever la pâte à pain. Ces microbes ont donc une utilité et ne sont pas tous dangereux."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un aliment humide reste longtemps à température ambiante et finit par se gâter. Explique ce qui a pu se passer et indique l'effet général du froid.",
        correction: "Certains micro-organismes ont pu se multiplier sur l'aliment et contribuer à le gâter. Le froid ralentit généralement leur multiplication, mais ne les détruit pas tous."
      }
    ]
  }
]);
