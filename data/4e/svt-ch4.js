// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 4 : Les vaisseaux sanguins et le trajet du sang

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-vaisseaux-sanguins",
    titre: "Chapitre 4 : Les vaisseaux sanguins et le trajet du sang",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-vaisseaux-types",
        titre: "Trois types de vaisseaux sanguins",
        blocs: [
          {
            type: "definition",
            titre: "Les artères",
            texte: "Les artères sont des vaisseaux qui conduisent le sang du cœur vers les organes.\nElles ont des parois relativement épaisses et élastiques."
          },
          {
            type: "definition",
            titre: "Les veines",
            texte: "Les veines sont des vaisseaux qui ramènent le sang des organes vers le cœur.\nCertaines veines possèdent des valvules qui facilitent la circulation du sang vers le cœur."
          },
          {
            type: "definition",
            titre: "Les capillaires",
            texte: "Les capillaires sont de très petits vaisseaux dont la paroi est très fine. Ils forment des réseaux dans les organes.\nLeur paroi fine permet des échanges entre le sang et le milieu qui entoure les cellules."
          },
          {
            type: "tableau",
            titre: "Comparer les vaisseaux",
            entetes: ["Vaisseau", "Rôle principal", "Caractéristique"],
            lignes: [
              ["Artère", "Conduit le sang du cœur vers les organes", "Paroi relativement épaisse et élastique"],
              ["Veine", "Ramène le sang vers le cœur", "Certaines possèdent des valvules"],
              ["Capillaire", "Permet des échanges avec le milieu des cellules", "Très petit ; paroi très fine"]
            ]
          }
        ]
      },
      {
        id: "svt4-vaisseaux-trajet",
        titre: "Le trajet du sang dans un organe",
        blocs: [
          {
            type: "texte",
            titre: "Du cœur à l'organe, puis retour",
            texte: "Le sang quitte le cœur par une artère. Dans l'organe, les vaisseaux se ramifient en conduits de plus en plus fins jusqu'aux capillaires.\nAprès son passage dans les capillaires, le sang rejoint des vaisseaux qui se rassemblent en veines et le ramènent vers le cœur."
          },
          {
            type: "schema",
            titre: "Artère, capillaires et veine",
            svg: "<svg viewBox='0 0 360 220' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='80' width='65' height='50' rx='10' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='40' y='110' text-anchor='middle' font-size='13' fill='#991b1b'>Cœur</text><line x1='73' y1='105' x2='120' y2='105' stroke='#dc2626' stroke-width='6'/><polygon points='112,99 122,105 112,111' fill='#dc2626'/><text x='98' y='80' text-anchor='middle' font-size='12' fill='#b91c1c'>Artère</text><path d='M120 105 L150 70 L205 70 L235 105 M120 105 L150 105 L205 105 L235 105 M120 105 L150 140 L205 140 L235 105' fill='none' stroke='#7c3aed' stroke-width='2'/><line x1='165' y1='70' x2='165' y2='140' stroke='#7c3aed' stroke-width='2'/><line x1='190' y1='70' x2='190' y2='140' stroke='#7c3aed' stroke-width='2'/><text x='178' y='45' text-anchor='middle' font-size='12' fill='#6d28d9'>Réseau de capillaires</text><text x='178' y='165' text-anchor='middle' font-size='11' fill='#374151'>Dans un organe</text><line x1='235' y1='105' x2='285' y2='105' stroke='#2563eb' stroke-width='6'/><polygon points='277,99 287,105 277,111' fill='#2563eb'/><text x='260' y='80' text-anchor='middle' font-size='12' fill='#1d4ed8'>Veine</text><rect x='287' y='80' width='65' height='50' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='319' y='110' text-anchor='middle' font-size='13' fill='#1e40af'>Cœur</text><text x='180' y='200' text-anchor='middle' font-size='10' fill='#4b5563'>Le cœur est représenté deux fois pour montrer le départ et le retour</text></svg>",
            legende: "Le sang part du cœur, traverse un réseau de capillaires dans l'organe, puis revient au cœur. Schéma simplifié."
          },
          {
            type: "remarque",
            titre: "Un circuit fermé",
            texte: "Le sang circule normalement à l'intérieur du cœur et des vaisseaux : la circulation sanguine forme un circuit fermé."
          }
        ]
      },
      {
        id: "svt4-vaisseaux-echanges",
        titre: "Les échanges au niveau des capillaires",
        blocs: [
          {
            type: "texte",
            titre: "Dans les organes",
            texte: "Au niveau des capillaires des organes, le dioxygène et des nutriments quittent le sang et rejoignent le milieu qui entoure les cellules. Les cellules peuvent ainsi les utiliser.\nLe dioxyde de carbone produit par les cellules passe vers le sang."
          },
          {
            type: "texte",
            titre: "Dans les poumons",
            texte: "Dans les poumons, les capillaires entourent les alvéoles : le dioxygène passe de l'air alvéolaire vers le sang, tandis que le dioxyde de carbone passe du sang vers l'air."
          },
          {
            type: "exemple",
            titre: "Dans un muscle",
            texte: "Le sang apporte du dioxygène et des nutriments au muscle. Les cellules musculaires les utilisent pour fonctionner et produisent notamment du dioxyde de carbone, qui rejoint le sang."
          }
        ]
      },
      {
        id: "svt4-vaisseaux-arteres-veines",
        titre: "Artère ou veine : comment les reconnaître ?",
        blocs: [
          {
            type: "methode",
            titre: "Observer le sens de circulation",
            texte: "Pour savoir si un vaisseau est une artère ou une veine, regarde le sens dans lequel le sang circule par rapport au cœur :\n• s'il part du cœur, c'est une artère ;\n• s'il revient vers le cœur, c'est une veine."
          },
          {
            type: "exemple",
            titre: "Les vaisseaux pulmonaires",
            texte: "L'artère pulmonaire conduit le sang du cœur vers les poumons : c'est donc une artère, même si son sang est relativement pauvre en dioxygène.\nLes veines pulmonaires ramènent le sang des poumons vers le cœur : ce sont des veines, même si leur sang est riche en dioxygène."
          },
          {
            type: "remarque",
            titre: "Attention aux couleurs des schémas",
            texte: "Dans les schémas, le rouge représente souvent un sang riche en dioxygène et le bleu un sang moins riche en dioxygène. Ce sont des couleurs de convention : le sang reste rouge dans les vaisseaux."
          }
        ]
      },
      {
        id: "svt4-vaisseaux-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan",
            texte: "• Les artères conduisent le sang du cœur vers les organes.\n• Les veines ramènent le sang vers le cœur.\n• Les capillaires sont de très petits vaisseaux à paroi fine, où se font des échanges.\n• Le nom d'un vaisseau dépend du sens de circulation par rapport au cœur, pas de la quantité de dioxygène dans le sang."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel type de vaisseau conduit le sang du cœur vers les organes ?",
        correction: "Ce sont les artères."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel type de vaisseau ramène le sang vers le cœur ?",
        correction: "Ce sont les veines."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi les capillaires sont-ils importants dans les organes ?",
        correction: "Les capillaires ont une paroi très fine. Ils permettent des échanges entre le sang et le milieu qui entoure les cellules : par exemple, le dioxygène quitte le sang et le dioxyde de carbone y entre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Remets dans l'ordre les éléments suivants pour suivre le sang du cœur vers un organe puis son retour : veine, cœur, capillaires, artère, cœur.",
        correction: "Cœur → artère → capillaires de l'organe → veine → cœur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L'artère pulmonaire transporte un sang relativement pauvre en dioxygène. Pourquoi est-elle quand même appelée artère ?",
        correction: "Elle est appelée artère parce qu'elle conduit le sang du cœur vers les poumons. Le nom « artère » dépend du sens du trajet par rapport au cœur, et non de la richesse du sang en dioxygène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle est la différence entre les échanges dans les capillaires des poumons et ceux d'un muscle ?",
        correction: "Dans les poumons, le dioxygène passe de l'air des alvéoles vers le sang et le dioxyde de carbone passe du sang vers l'air. Dans le muscle, le dioxygène passe du sang vers le milieu des cellules, tandis que le dioxyde de carbone produit par les cellules rejoint le sang."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un camarade dit : « Les veines transportent toujours du sang pauvre en dioxygène. » Donne un contre-exemple et explique.",
        correction: "Les veines pulmonaires sont un contre-exemple : elles ramènent des poumons vers le cœur un sang riche en dioxygène. Elles sont appelées veines parce qu'elles conduisent le sang vers le cœur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique comment le sang apporte du dioxygène à un muscle depuis le cœur, puis revient vers le cœur. Nomme les trois types de vaisseaux.",
        correction: "Le sang quitte le cœur par des artères qui le conduisent vers le muscle. Dans les capillaires du muscle, le dioxygène passe du sang vers le milieu qui entoure les cellules. Le sang rejoint ensuite des veines qui le ramènent au cœur."
      }
    ]
  }
]);
