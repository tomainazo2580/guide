// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 5 : Le sang et ses constituants

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-sang-constituants",
    titre: "Chapitre 5 : Le sang et ses constituants",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-sang-composition",
        titre: "De quoi le sang est-il composé ?",
        blocs: [
          {
            type: "texte",
            titre: "Un liquide qui circule",
            texte: "Le sang circule dans le cœur et les vaisseaux sanguins. Il transporte différentes substances et participe à la défense de l'organisme."
          },
          {
            type: "texte",
            titre: "Les principaux constituants",
            texte: "Le sang comprend :\n• une partie liquide appelée plasma ;\n• des cellules : les globules rouges et les globules blancs ;\n• de petits fragments appelés plaquettes."
          },
          {
            type: "schema",
            titre: "Les constituants du sang",
            svg: "<svg viewBox='0 0 360 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='25' width='135' height='185' rx='16' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='87' y='48' text-anchor='middle' font-size='12' fill='#92400e'>Plasma</text><ellipse cx='53' cy='78' rx='13' ry='9' fill='#ef4444' stroke='#b91c1c'/><ellipse cx='105' cy='70' rx='13' ry='9' fill='#ef4444' stroke='#b91c1c'/><ellipse cx='78' cy='118' rx='13' ry='9' fill='#ef4444' stroke='#b91c1c'/><ellipse cx='120' cy='160' rx='13' ry='9' fill='#ef4444' stroke='#b91c1c'/><ellipse cx='49' cy='175' rx='13' ry='9' fill='#ef4444' stroke='#b91c1c'/><circle cx='110' cy='112' r='14' fill='#e9d5ff' stroke='#7e22ce' stroke-width='2'/><circle cx='110' cy='112' r='6' fill='#a855f7'/><circle cx='54' cy='140' r='3' fill='#2563eb'/><circle cx='64' cy='145' r='3' fill='#2563eb'/><line x1='125' y1='70' x2='175' y2='65' stroke='#b91c1c'/><text x='180' y='69' font-size='12' fill='#991b1b'>Globule rouge</text><line x1='124' y1='112' x2='175' y2='108' stroke='#7e22ce'/><text x='180' y='112' font-size='12' fill='#6b21a8'>Globule blanc</text><line x1='65' y1='145' x2='175' y2='150' stroke='#2563eb'/><text x='180' y='154' font-size='12' fill='#1d4ed8'>Plaquettes</text><line x1='140' y1='185' x2='175' y2='190' stroke='#b45309'/><text x='180' y='194' font-size='12' fill='#92400e'>Plasma : partie liquide</text><text x='180' y='235' text-anchor='middle' font-size='11' fill='#4b5563'>Schéma simplifié, proportions non respectées</text></svg>",
            legende: "Les globules rouges, les globules blancs et les plaquettes circulent dans le plasma. Leurs tailles et leurs nombres ne sont pas représentés à l'échelle."
          },
          {
            type: "remarque",
            titre: "À propos des plaquettes",
            texte: "Les plaquettes ne sont pas des cellules complètes : ce sont de petits fragments issus de grandes cellules de la moelle osseuse."
          }
        ]
      },
      {
        id: "svt4-sang-plasma",
        titre: "Le plasma : la partie liquide",
        blocs: [
          {
            type: "definition",
            titre: "Le plasma",
            texte: "Le plasma est la partie liquide du sang. Il est composé en grande partie d'eau et contient de nombreuses substances dissoutes."
          },
          {
            type: "exemple",
            titre: "Des substances transportées",
            texte: "Le plasma transporte notamment des nutriments, des hormones et des déchets. Il transporte aussi une partie des gaz respiratoires, en particulier une grande partie du dioxyde de carbone sous différentes formes."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Le sang entier comprend le plasma ainsi que les cellules sanguines et les plaquettes. Le plasma n'est donc qu'une partie du sang."
          }
        ]
      },
      {
        id: "svt4-sang-globules-rouges",
        titre: "Les globules rouges et le transport du dioxygène",
        blocs: [
          {
            type: "definition",
            titre: "Les globules rouges",
            texte: "Les globules rouges sont les cellules sanguines les plus nombreuses. Ils contiennent une substance appelée hémoglobine."
          },
          {
            type: "texte",
            titre: "Le rôle de l'hémoglobine",
            texte: "Dans les poumons, le dioxygène se fixe en grande partie sur l'hémoglobine des globules rouges. Le sang le transporte ensuite vers les organes, où il est libéré et peut rejoindre les cellules."
          },
          {
            type: "remarque",
            titre: "Le sang est rouge",
            texte: "L'hémoglobine contribue à la couleur rouge du sang. Dans les schémas, on utilise parfois le bleu pour représenter un sang moins riche en dioxygène, mais ce sang est lui aussi rouge."
          }
        ]
      },
      {
        id: "svt4-sang-defense",
        titre: "Les globules blancs et les plaquettes",
        blocs: [
          {
            type: "definition",
            titre: "Les globules blancs",
            texte: "Les globules blancs sont des cellules qui participent à la défense de l'organisme. Différents types de globules blancs interviennent notamment contre les microbes."
          },
          {
            type: "definition",
            titre: "Les plaquettes",
            texte: "Les plaquettes participent à l'arrêt d'un saignement. Lorsqu'un vaisseau est abîmé, elles s'accumulent au niveau de la blessure et contribuent à former un bouchon."
          },
          {
            type: "texte",
            titre: "La coagulation",
            texte: "Les plaquettes agissent avec des substances présentes dans le sang. Ensemble, elles participent à la formation d'un caillot qui aide à arrêter le saignement."
          },
          {
            type: "exemple",
            titre: "Une petite coupure",
            texte: "Lors d'une petite coupure, le saignement finit généralement par s'arrêter grâce à plusieurs mécanismes, auxquels participent les plaquettes et la coagulation."
          },
          {
            type: "remarque",
            titre: "En cas de saignement important",
            texte: "Un saignement abondant ou qui ne s'arrête pas nécessite une aide médicale rapide."
          }
        ]
      },
      {
        id: "svt4-sang-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "tableau",
            titre: "Les constituants et leurs rôles",
            entetes: ["Constituant", "Rôle principal"],
            lignes: [
              ["Plasma", "Partie liquide qui transporte de nombreuses substances"],
              ["Globules rouges", "Transportent une grande partie du dioxygène grâce à l'hémoglobine"],
              ["Globules blancs", "Participent à la défense de l'organisme"],
              ["Plaquettes", "Participent à l'arrêt des saignements et à la formation du caillot"]
            ]
          },
          {
            type: "regle",
            titre: "Bilan",
            texte: "Le sang est constitué de plasma, de globules rouges, de globules blancs et de plaquettes. Chacun de ces constituants participe au fonctionnement et à la protection de l'organisme."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Comment s'appelle la partie liquide du sang ?",
        correction: "La partie liquide du sang s'appelle le plasma."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quels constituants sanguins participent principalement au transport du dioxygène ?",
        correction: "Les globules rouges transportent une grande partie du dioxygène grâce à l'hémoglobine qu'ils contiennent."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite les quatre principaux constituants du sang.",
        correction: "Ce sont le plasma, les globules rouges, les globules blancs et les plaquettes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel est le rôle des globules blancs ?",
        correction: "Les globules blancs participent à la défense de l'organisme, notamment contre les microbes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique le rôle des plaquettes lorsqu'un petit vaisseau est blessé.",
        correction: "Les plaquettes s'accumulent au niveau de la blessure et contribuent à former un bouchon. Avec d'autres substances du sang, elles participent à la formation d'un caillot qui aide à arrêter le saignement."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève dit : « Le sang est composé uniquement de globules rouges. » Corrige son affirmation.",
        correction: "Les globules rouges ne sont qu'un constituant du sang. Le sang comprend aussi le plasma, les globules blancs et les plaquettes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris le rôle des globules rouges dans le trajet du dioxygène entre les poumons et les muscles.",
        correction: "Dans les poumons, le dioxygène se fixe en grande partie sur l'hémoglobine des globules rouges. Le sang transporte ces globules rouges jusqu'aux muscles. Le dioxygène est ensuite libéré et rejoint les cellules musculaires."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Associe chaque rôle au bon constituant : défense contre les microbes ; transport de nombreuses substances dissoutes ; participation à l'arrêt d'un saignement ; transport d'une grande partie du dioxygène.",
        correction: "Défense contre les microbes : globules blancs.\nTransport de nombreuses substances dissoutes : plasma.\nParticipation à l'arrêt d'un saignement : plaquettes.\nTransport d'une grande partie du dioxygène : globules rouges, grâce à l'hémoglobine."
      }
    ]
  }
]);
