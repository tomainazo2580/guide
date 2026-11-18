// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 3 : Le cœur et la circulation sanguine

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-coeur-circulation",
    titre: "Chapitre 3 : Le cœur et la circulation sanguine",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-coeur-role",
        titre: "Le cœur : une pompe musculaire",
        blocs: [
          {
            type: "texte",
            titre: "Une observation",
            texte: "Place deux doigts sur ton poignet, du côté du pouce. Tu peux sentir des pulsations : c'est le pouls.\nAprès un effort, le pouls est généralement plus rapide qu'au repos."
          },
          {
            type: "definition",
            titre: "Le cœur",
            texte: "Le cœur est un organe musculaire situé dans la poitrine, entre les poumons. Il se contracte et se relâche régulièrement.\nIl agit comme une pompe qui met le sang en mouvement dans les vaisseaux sanguins."
          },
          {
            type: "remarque",
            titre: "Le pouls",
            texte: "Le pouls correspond à une pulsation ressentie dans une artère, produite par l'arrivée du sang propulsé par le cœur. On peut notamment le sentir au poignet."
          }
        ]
      },
      {
        id: "svt4-coeur-cavites",
        titre: "Les quatre cavités du cœur",
        blocs: [
          {
            type: "texte",
            titre: "Oreillettes et ventricules",
            texte: "Le cœur possède quatre cavités :\n• deux oreillettes : une droite et une gauche ;\n• deux ventricules : un droit et un gauche.\nChaque oreillette reçoit du sang et le fait passer dans le ventricule situé du même côté."
          },
          {
            type: "texte",
            titre: "Deux côtés séparés",
            texte: "Le côté droit et le côté gauche du cœur sont séparés par une cloison. Normalement, le sang des deux côtés ne se mélange pas.\nLe côté droit envoie le sang vers les poumons ; le côté gauche l'envoie vers les autres organes."
          },
          {
            type: "schema",
            titre: "Les quatre cavités du cœur",
            svg: "<svg viewBox='0 0 360 280' xmlns='http://www.w3.org/2000/svg'><text x='90' y='20' text-anchor='middle' font-size='13' font-weight='bold' fill='#1d4ed8'>Côté droit du cœur</text><text x='270' y='20' text-anchor='middle' font-size='13' font-weight='bold' fill='#b91c1c'>Côté gauche du cœur</text><rect x='20' y='35' width='140' height='70' rx='14' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><rect x='20' y='145' width='140' height='70' rx='14' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><rect x='200' y='35' width='140' height='70' rx='14' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><rect x='200' y='145' width='140' height='70' rx='14' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='90' y='65' text-anchor='middle' font-size='13' fill='#1e40af'>Oreillette</text><text x='90' y='83' text-anchor='middle' font-size='13' fill='#1e40af'>droite</text><text x='90' y='175' text-anchor='middle' font-size='13' fill='#1e40af'>Ventricule</text><text x='90' y='193' text-anchor='middle' font-size='13' fill='#1e40af'>droit</text><text x='270' y='65' text-anchor='middle' font-size='13' fill='#991b1b'>Oreillette</text><text x='270' y='83' text-anchor='middle' font-size='13' fill='#991b1b'>gauche</text><text x='270' y='175' text-anchor='middle' font-size='13' fill='#991b1b'>Ventricule</text><text x='270' y='193' text-anchor='middle' font-size='13' fill='#991b1b'>gauche</text><line x1='90' y1='108' x2='90' y2='137' stroke='#2563eb' stroke-width='3'/><polygon points='84,132 90,142 96,132' fill='#2563eb'/><line x1='270' y1='108' x2='270' y2='137' stroke='#dc2626' stroke-width='3'/><polygon points='264,132 270,142 276,132' fill='#dc2626'/><line x1='180' y1='35' x2='180' y2='215' stroke='#6b7280' stroke-width='3' stroke-dasharray='5 4'/><text x='180' y='240' text-anchor='middle' font-size='11' fill='#4b5563'>Cloison entre les deux côtés</text><text x='180' y='260' text-anchor='middle' font-size='10' fill='#4b5563'>Schéma fonctionnel simplifié</text></svg>",
            legende: "Dans chaque côté du cœur, le sang passe de l'oreillette au ventricule. Les deux côtés sont séparés par une cloison."
          },
          {
            type: "remarque",
            titre: "Droite et gauche",
            texte: "Sur un dessin du cœur vu de face, le côté droit du cœur apparaît généralement à gauche du dessin : c'est la droite de la personne représentée."
          }
        ]
      },
      {
        id: "svt4-coeur-double-circulation",
        titre: "Deux circuits reliés au cœur",
        blocs: [
          {
            type: "definition",
            titre: "La circulation pulmonaire",
            texte: "La circulation pulmonaire relie le cœur aux poumons.\nLe sang part du ventricule droit vers les poumons. Il revient ensuite des poumons à l'oreillette gauche."
          },
          {
            type: "definition",
            titre: "La circulation générale",
            texte: "La circulation générale relie le cœur aux autres organes.\nLe sang part du ventricule gauche vers les organes. Il revient ensuite des organes à l'oreillette droite."
          },
          {
            type: "schema",
            titre: "Le trajet du sang dans les deux circulations",
            svg: "<svg viewBox='0 0 360 375' xmlns='http://www.w3.org/2000/svg'><rect x='85' y='12' width='190' height='42' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='180' y='38' text-anchor='middle' font-size='14' font-weight='bold' fill='#075985'>Poumons</text><line x1='180' y1='54' x2='180' y2='76' stroke='#374151' stroke-width='2'/><polygon points='175,72 180,80 185,72' fill='#374151'/><rect x='85' y='82' width='190' height='42' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='180' y='108' text-anchor='middle' font-size='13' fill='#991b1b'>Oreillette gauche</text><line x1='180' y1='124' x2='180' y2='146' stroke='#374151' stroke-width='2'/><polygon points='175,142 180,150 185,142' fill='#374151'/><rect x='85' y='152' width='190' height='42' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='180' y='178' text-anchor='middle' font-size='13' fill='#991b1b'>Ventricule gauche</text><line x1='180' y1='194' x2='180' y2='216' stroke='#374151' stroke-width='2'/><polygon points='175,212 180,220 185,212' fill='#374151'/><rect x='85' y='222' width='190' height='42' rx='10' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='180' y='248' text-anchor='middle' font-size='14' fill='#92400e'>Autres organes</text><line x1='180' y1='264' x2='180' y2='286' stroke='#374151' stroke-width='2'/><polygon points='175,282 180,290 185,282' fill='#374151'/><rect x='85' y='292' width='190' height='35' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='180' y='314' text-anchor='middle' font-size='13' fill='#1e40af'>Oreillette droite</text><line x1='180' y1='327' x2='180' y2='338' stroke='#374151' stroke-width='2'/><polygon points='175,334 180,342 185,334' fill='#374151'/><rect x='85' y='344' width='190' height='27' rx='8' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='180' y='362' text-anchor='middle' font-size='13' fill='#1e40af'>Ventricule droit</text><path d='M85 357 L40 357 L40 33 L77 33' fill='none' stroke='#2563eb' stroke-width='2'/><polygon points='72,28 81,33 72,38' fill='#2563eb'/></svg>",
            legende: "Le sang suit une boucle : poumons → cœur gauche → organes → cœur droit → poumons. Les cases représentent les étapes du trajet, et non la forme réelle des organes."
          },
          {
            type: "methode",
            titre: "Pour retenir le trajet",
            texte: "Suis cette boucle :\nventricule droit → poumons → oreillette gauche → ventricule gauche → organes → oreillette droite → ventricule droit."
          }
        ]
      },
      {
        id: "svt4-coeur-echanges",
        titre: "Ce qui change dans les poumons et les organes",
        blocs: [
          {
            type: "texte",
            titre: "Dans les poumons",
            texte: "Le sang arrivant aux poumons est relativement pauvre en dioxygène. Au niveau des alvéoles, il reçoit du dioxygène et libère du dioxyde de carbone.\nIl repart vers le cœur gauche plus riche en dioxygène."
          },
          {
            type: "texte",
            titre: "Dans les autres organes",
            texte: "Le sang apporte du dioxygène aux cellules des organes. Il récupère une partie du dioxyde de carbone produit par ces cellules.\nIl revient vers le cœur droit relativement pauvre en dioxygène."
          },
          {
            type: "remarque",
            titre: "Un vocabulaire précis",
            texte: "On parle de sang plus ou moins riche en dioxygène, plutôt que de sang « pur » ou « sale » : le sang qui revient des organes joue lui aussi un rôle indispensable."
          }
        ]
      },
      {
        id: "svt4-coeur-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan",
            texte: "• Le cœur est une pompe musculaire qui met le sang en mouvement.\n• Il possède deux oreillettes et deux ventricules.\n• Le côté droit envoie le sang vers les poumons.\n• Le côté gauche envoie le sang vers les autres organes.\n• Dans les poumons, le sang reçoit du dioxygène et libère du dioxyde de carbone."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le rôle du cœur dans la circulation sanguine ?",
        correction: "Le cœur est une pompe musculaire : ses contractions mettent le sang en mouvement dans les vaisseaux."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien le cœur possède-t-il de cavités ? Nomme les deux types de cavités.",
        correction: "Le cœur possède quatre cavités : deux oreillettes et deux ventricules."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle cavité envoie le sang vers les poumons ? Dans quelle cavité le sang revient-il ensuite ?",
        correction: "Le ventricule droit envoie le sang vers les poumons. Après son passage dans les poumons, le sang revient dans l'oreillette gauche."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle cavité envoie le sang vers les autres organes ? Dans quelle cavité le sang revient-il ensuite ?",
        correction: "Le ventricule gauche envoie le sang vers les organes. Après son passage dans les organes, le sang revient dans l'oreillette droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Complète le trajet : ventricule droit → ... → oreillette gauche → ventricule gauche → ... → oreillette droite.",
        correction: "Ventricule droit → poumons → oreillette gauche → ventricule gauche → organes → oreillette droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Que devient le sang lorsqu'il passe dans les poumons ?",
        correction: "Au niveau des alvéoles pulmonaires, le sang reçoit du dioxygène et libère du dioxyde de carbone. Il repart des poumons plus riche en dioxygène."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève affirme : « Le côté droit du cœur envoie le sang directement aux muscles. » Explique son erreur.",
        correction: "Le côté droit du cœur envoie le sang vers les poumons. Après son passage dans les poumons, le sang revient au côté gauche du cœur. C'est le ventricule gauche qui l'envoie vers les organes, notamment les muscles."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris une boucle complète du sang à partir du ventricule gauche. Indique ce qui se passe dans les organes et dans les poumons.",
        correction: "Le sang part du ventricule gauche vers les organes. Il leur apporte du dioxygène et récupère du dioxyde de carbone. Il revient ensuite à l'oreillette droite, puis passe dans le ventricule droit. Celui-ci l'envoie vers les poumons, où le sang reçoit du dioxygène et libère du dioxyde de carbone. Le sang revient à l'oreillette gauche, puis au ventricule gauche : la boucle est complète."
      }
    ]
  }
]);
