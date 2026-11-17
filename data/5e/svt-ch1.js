// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 1 : L'appareil digestif

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-appareil-digestif",
    titre: "Chapitre 1 : L'appareil digestif",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-digestif-besoin",
        titre: "Que deviennent les aliments que nous mangeons ?",
        blocs: [
          {
            type: "texte",
            titre: "Une question de tous les jours",
            texte: "Quand nous mangeons du riz, de la viande ou des légumes, les aliments entrent dans notre bouche.\nMais que deviennent-ils ensuite ?\nIls parcourent un ensemble d'organes appelé l'appareil digestif."
          },
          {
            type: "definition",
            titre: "L'appareil digestif",
            texte: "L'appareil digestif est l'ensemble des organes qui permettent la digestion des aliments.\nIl comprend le tube digestif et des organes qui produisent des liquides utiles à la digestion."
          },
          {
            type: "remarque",
            titre: "Pourquoi digérer ?",
            texte: "La digestion transforme les aliments en substances plus simples, appelées nutriments.\nCes nutriments peuvent ensuite passer dans le sang et être utilisés par le corps."
          }
        ]
      },
      {
        id: "svt5-digestif-tube",
        titre: "Le tube digestif",
        blocs: [
          {
            type: "definition",
            titre: "Un long tube",
            texte: "Le tube digestif est un long passage qui commence à la bouche et se termine à l'anus.\nLes aliments le parcourent en traversant plusieurs organes."
          },
          {
            type: "regle",
            titre: "Le trajet des aliments",
            texte: "Bouche → œsophage → estomac → intestin grêle → gros intestin → rectum → anus."
          },
          {
            type: "tableau",
            titre: "Les principales parties du tube digestif",
            entetes: ["Organe", "Ce qui s'y passe"],
            lignes: [
              ["Bouche", "Les aliments sont mâchés et mélangés à la salive."],
              ["Œsophage", "Il conduit les aliments vers l'estomac."],
              ["Estomac", "Les aliments y sont brassés et mélangés à un liquide digestif."],
              ["Intestin grêle", "La digestion se poursuit et les nutriments passent dans le sang."],
              ["Gros intestin", "Une partie de l'eau y est absorbée et les selles se forment."],
              ["Rectum et anus", "Les selles sont stockées dans le rectum puis évacuées par l'anus."]
            ]
          },
          {
            type: "schema",
            titre: "Le trajet des aliments dans le tube digestif",
            svg: "<svg viewBox='0 0 340 390' xmlns='http://www.w3.org/2000/svg'><rect x='95' y='10' width='150' height='38' rx='10' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='34' font-size='14' fill='#78350f' text-anchor='middle'>Bouche</text><line x1='170' y1='48' x2='170' y2='67' stroke='#6b7280' stroke-width='2'/><polygon points='165,63 170,72 175,63' fill='#6b7280'/><rect x='95' y='73' width='150' height='38' rx='10' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='170' y='97' font-size='14' fill='#7f1d1d' text-anchor='middle'>Œsophage</text><line x1='170' y1='111' x2='170' y2='130' stroke='#6b7280' stroke-width='2'/><polygon points='165,126 170,135 175,126' fill='#6b7280'/><rect x='95' y='136' width='150' height='38' rx='10' fill='#fecaca' stroke='#b91c1c' stroke-width='2'/><text x='170' y='160' font-size='14' fill='#7f1d1d' text-anchor='middle'>Estomac</text><line x1='170' y1='174' x2='170' y2='193' stroke='#6b7280' stroke-width='2'/><polygon points='165,189 170,198 175,189' fill='#6b7280'/><rect x='95' y='199' width='150' height='38' rx='10' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='170' y='223' font-size='14' fill='#7c2d12' text-anchor='middle'>Intestin grêle</text><line x1='170' y1='237' x2='170' y2='256' stroke='#6b7280' stroke-width='2'/><polygon points='165,252 170,261 175,252' fill='#6b7280'/><rect x='95' y='262' width='150' height='38' rx='10' fill='#fde68a' stroke='#a16207' stroke-width='2'/><text x='170' y='286' font-size='14' fill='#713f12' text-anchor='middle'>Gros intestin</text><line x1='170' y1='300' x2='170' y2='319' stroke='#6b7280' stroke-width='2'/><polygon points='165,315 170,324 175,315' fill='#6b7280'/><rect x='95' y='325' width='150' height='38' rx='10' fill='#e5e7eb' stroke='#4b5563' stroke-width='2'/><text x='170' y='349' font-size='14' fill='#374151' text-anchor='middle'>Rectum puis anus</text><text x='170' y='382' font-size='11' fill='#6b7280' text-anchor='middle'>Les flèches indiquent le sens du trajet</text></svg>",
            legende: "Ce schéma simplifié montre l'ordre des organes traversés. Il ne représente pas leur forme réelle."
          }
        ]
      },
      {
        id: "svt5-digestif-organes",
        titre: "Des organes qui aident à la digestion",
        blocs: [
          {
            type: "texte",
            titre: "Les aliments ne traversent pas tous les organes digestifs",
            texte: "Certains organes aident à digérer sans être traversés par les aliments.\nIls produisent des liquides qui rejoignent le tube digestif."
          },
          {
            type: "tableau",
            titre: "Des organes et leurs liquides",
            entetes: ["Organe", "Liquide produit", "Où arrive-t-il ?"],
            lignes: [
              ["Glandes salivaires", "Salive", "Dans la bouche"],
              ["Foie", "Bile", "Dans l'intestin grêle"],
              ["Pancréas", "Suc pancréatique", "Dans l'intestin grêle"]
            ]
          },
          {
            type: "remarque",
            titre: "Le rôle de la bile",
            texte: "La bile aide à la digestion des matières grasses.\nElle est produite par le foie et peut être stockée dans la vésicule biliaire avant d'arriver dans l'intestin grêle."
          },
          {
            type: "exemple",
            titre: "Le trajet du riz",
            texte: "Quand tu manges du riz, il passe par la bouche, l'œsophage et l'estomac, puis par les intestins.\nIl ne passe pas par le foie ni par le pancréas : ces organes produisent des liquides qui aident à la digestion."
          }
        ]
      },
      {
        id: "svt5-digestif-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les trois idées importantes",
            texte: "1. Le tube digestif va de la bouche à l'anus.\n2. Les aliments traversent la bouche, l'œsophage, l'estomac, l'intestin grêle et le gros intestin.\n3. D'autres organes, comme le foie et le pancréas, produisent des liquides utiles à la digestion."
          },
          {
            type: "methode",
            titre: "Comment apprendre le trajet ?",
            texte: "Commence par retenir les deux extrémités : la bouche et l'anus.\nPuis récite les organes dans l'ordre : œsophage, estomac, intestin grêle, gros intestin et rectum.\nEntraîne-toi ensuite à les écrire sans regarder la leçon."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous découvrirons comment les aliments sont transformés pendant leur trajet dans l'appareil digestif."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que l'appareil digestif ?",
        correction: "C'est l'ensemble des organes qui permettent la digestion des aliments. Il comprend le tube digestif et des organes qui produisent des liquides utiles à la digestion."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Par quel organe le tube digestif commence-t-il ? Par où se termine-t-il ?",
        correction: "Il commence par la bouche et se termine par l'anus."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel organe conduit les aliments de la bouche vers l'estomac ?",
        correction: "C'est l'œsophage."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Remets dans l'ordre : estomac, bouche, intestin grêle, œsophage, gros intestin.",
        correction: "Bouche → œsophage → estomac → intestin grêle → gros intestin."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux organes qui produisent des liquides utiles à la digestion, mais que les aliments ne traversent pas.",
        correction: "Par exemple : le foie et le pancréas. On pouvait aussi citer les glandes salivaires."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel organe produit la bile ? À quoi sert-elle ?",
        correction: "Le foie produit la bile. Elle aide à la digestion des matières grasses."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Les aliments passent par le foie.\n2. L'intestin grêle se trouve après l'estomac dans le trajet des aliments.\n3. La salive arrive dans la bouche.",
        correction: "1. Faux : les aliments ne passent pas par le foie. Le foie produit la bile, qui arrive dans l'intestin grêle.\n2. Vrai.\n3. Vrai : les glandes salivaires produisent la salive qui arrive dans la bouche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Rabe affirme : « Le gros intestin vient avant l'intestin grêle. » A-t-il raison ? Explique.",
        correction: "Non. Dans le trajet des aliments, l'intestin grêle vient avant le gros intestin : estomac → intestin grêle → gros intestin."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Après avoir mangé du riz, Soa veut décrire son trajet dans le tube digestif. Aide-la à nommer les organes dans l'ordre, de la bouche jusqu'à l'anus.",
        correction: "Bouche → œsophage → estomac → intestin grêle → gros intestin → rectum → anus."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique la différence entre le trajet des aliments et le rôle du foie pendant la digestion.",
        correction: "Les aliments parcourent le tube digestif : ils passent notamment par la bouche, l'œsophage, l'estomac et les intestins. Ils ne traversent pas le foie. Le foie aide à la digestion en produisant la bile, qui arrive dans l'intestin grêle."
      }
    ]
  }
]);
