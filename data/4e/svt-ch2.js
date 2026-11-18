// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 2 : La ventilation et les échanges gazeux

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-ventilation-echanges",
    titre: "Chapitre 2 : La ventilation et les échanges gazeux",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-ventilation-definition",
        titre: "L'entrée et la sortie de l'air",
        blocs: [
          {
            type: "definition",
            titre: "La ventilation pulmonaire",
            texte: "La ventilation pulmonaire correspond aux mouvements qui font entrer et sortir l'air des poumons.\nElle comprend deux phases : l'inspiration et l'expiration."
          },
          {
            type: "texte",
            titre: "Les deux phases",
            texte: "À l'inspiration, l'air entre dans les poumons.\nÀ l'expiration, une partie de l'air sort des poumons.\nCes mouvements se répètent toute la vie."
          },
          {
            type: "exemple",
            titre: "Une observation simple",
            texte: "Pose une main sur ta poitrine et respire calmement. Tu peux sentir la poitrine se soulever à l'inspiration et s'abaisser à l'expiration."
          }
        ]
      },
      {
        id: "svt4-ventilation-mouvements",
        titre: "Le rôle du diaphragme et de la cage thoracique",
        blocs: [
          {
            type: "texte",
            titre: "À l'inspiration",
            texte: "Le diaphragme se contracte et s'abaisse. Les côtes se soulèvent : la cage thoracique augmente de volume.\nLes poumons se dilatent et l'air y entre."
          },
          {
            type: "texte",
            titre: "À l'expiration calme",
            texte: "Le diaphragme se relâche et remonte. Les côtes s'abaissent : la cage thoracique diminue de volume.\nLes poumons reviennent vers leur volume de repos et une partie de l'air en sort."
          },
          {
            type: "schema",
            titre: "Les mouvements respiratoires",
            svg: "<svg viewBox='0 0 360 260' xmlns='http://www.w3.org/2000/svg'><text x='90' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='#1d4ed8'>INSPIRATION</text><text x='270' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='#b45309'>EXPIRATION</text><line x1='90' y1='35' x2='90' y2='75' stroke='#374151' stroke-width='6'/><line x1='270' y1='35' x2='270' y2='75' stroke='#374151' stroke-width='6'/><path d='M90 75 L68 100 M90 75 L112 100' fill='none' stroke='#374151' stroke-width='4'/><path d='M270 75 L252 100 M270 75 L288 100' fill='none' stroke='#374151' stroke-width='4'/><ellipse cx='59' cy='142' rx='30' ry='58' fill='#fecaca' stroke='#b91c1c' stroke-width='2'/><ellipse cx='121' cy='142' rx='30' ry='58' fill='#fecaca' stroke='#b91c1c' stroke-width='2'/><ellipse cx='244' cy='142' rx='24' ry='48' fill='#fecaca' stroke='#b91c1c' stroke-width='2'/><ellipse cx='296' cy='142' rx='24' ry='48' fill='#fecaca' stroke='#b91c1c' stroke-width='2'/><path d='M25 211 Q90 201 155 211' fill='none' stroke='#2563eb' stroke-width='4'/><path d='M218 211 Q270 176 322 211' fill='none' stroke='#2563eb' stroke-width='4'/><line x1='165' y1='45' x2='165' y2='76' stroke='#1d4ed8' stroke-width='2'/><polygon points='160,72 165,80 170,72' fill='#1d4ed8'/><text x='145' y='42' font-size='11' fill='#1d4ed8'>Air</text><line x1='340' y1='76' x2='340' y2='45' stroke='#b45309' stroke-width='2'/><polygon points='335,49 340,41 345,49' fill='#b45309'/><text x='324' y='38' font-size='11' fill='#b45309'>Air</text><text x='90' y='235' text-anchor='middle' font-size='11' fill='#2563eb'>Diaphragme abaissé</text><text x='270' y='235' text-anchor='middle' font-size='11' fill='#2563eb'>Diaphragme remonté</text><text x='180' y='253' text-anchor='middle' font-size='10' fill='#4b5563'>Schéma simplifié, non à l'échelle</text></svg>",
            legende: "À l'inspiration, le diaphragme s'abaisse et les poumons se dilatent. À l'expiration calme, il remonte et les poumons reviennent vers leur volume de repos."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Le diaphragme ne pousse pas directement l'air dans les poumons. En se contractant, il modifie le volume de la cage thoracique, ce qui favorise l'entrée de l'air."
          }
        ]
      },
      {
        id: "svt4-echanges-alveoles",
        titre: "Les échanges gazeux dans les alvéoles",
        blocs: [
          {
            type: "texte",
            titre: "Entre l'air et le sang",
            texte: "Les alvéoles pulmonaires sont entourées de capillaires sanguins. À travers leurs parois très fines :\n• le dioxygène, noté O₂, passe de l'air des alvéoles vers le sang ;\n• le dioxyde de carbone, noté CO₂, passe du sang vers l'air des alvéoles."
          },
          {
            type: "schema",
            titre: "Échanges entre une alvéole et le sang",
            svg: "<svg viewBox='0 0 360 210' xmlns='http://www.w3.org/2000/svg'><ellipse cx='95' cy='100' rx='72' ry='70' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='95' y='89' text-anchor='middle' font-size='15' font-weight='bold' fill='#1e40af'>Alvéole</text><text x='95' y='109' text-anchor='middle' font-size='12' fill='#1e40af'>Air</text><rect x='240' y='30' width='92' height='140' rx='35' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='286' y='88' text-anchor='middle' font-size='14' font-weight='bold' fill='#991b1b'>Capillaire</text><text x='286' y='108' text-anchor='middle' font-size='12' fill='#991b1b'>Sang</text><line x1='165' y1='75' x2='233' y2='75' stroke='#2563eb' stroke-width='3'/><polygon points='228,69 239,75 228,81' fill='#2563eb'/><text x='199' y='64' text-anchor='middle' font-size='13' fill='#1d4ed8'>O₂</text><line x1='240' y1='132' x2='172' y2='132' stroke='#b45309' stroke-width='3'/><polygon points='177,126 166,132 177,138' fill='#b45309'/><text x='203' y='153' text-anchor='middle' font-size='13' fill='#92400e'>CO₂</text><text x='180' y='195' text-anchor='middle' font-size='11' fill='#4b5563'>Échanges à travers des parois très fines</text></svg>",
            legende: "Le dioxygène passe de l'alvéole vers le sang ; le dioxyde de carbone passe du sang vers l'alvéole."
          },
          {
            type: "remarque",
            titre: "Des échanges continus",
            texte: "Les échanges gazeux se poursuivent pendant l'inspiration et pendant l'expiration. Ils ne se limitent pas à une seule des deux phases."
          }
        ]
      },
      {
        id: "svt4-air-inspire-expire",
        titre: "Comparer l'air inspiré et l'air expiré",
        blocs: [
          {
            type: "tableau",
            titre: "Composition approximative de l'air",
            entetes: ["Gaz", "Air inspiré", "Air expiré"],
            lignes: [
              ["Dioxygène (O₂)", "Environ 21 %", "Environ 16 %"],
              ["Dioxyde de carbone (CO₂)", "Environ 0,04 %", "Environ 4 %"]
            ]
          },
          {
            type: "texte",
            titre: "Comment interpréter ces valeurs ?",
            texte: "L'air expiré contient moins de dioxygène et plus de dioxyde de carbone que l'air inspiré. Ces valeurs sont approximatives et peuvent varier selon les conditions.\nL'air expiré contient encore du dioxygène ; l'air inspiré contient aussi une petite quantité de dioxyde de carbone."
          },
          {
            type: "methode",
            titre: "Comparer deux valeurs",
            texte: "Pour comparer, observe le pourcentage d'un même gaz dans les deux colonnes.\nExemple : environ 21 % de dioxygène dans l'air inspiré contre environ 16 % dans l'air expiré. L'air expiré est donc moins riche en dioxygène."
          }
        ]
      },
      {
        id: "svt4-resp-organes",
        titre: "Du sang aux organes",
        blocs: [
          {
            type: "texte",
            titre: "Le transport par le sang",
            texte: "Après avoir reçu du dioxygène dans les poumons, le sang l'achemine vers les organes.\nDans les organes, le dioxygène passe du sang vers les cellules. Le dioxyde de carbone produit par les cellules passe vers le sang, qui le transporte jusqu'aux poumons."
          },
          {
            type: "exemple",
            titre: "Pendant une activité physique",
            texte: "Quand les muscles travaillent davantage, ils ont généralement besoin de plus de dioxygène et produisent davantage de dioxyde de carbone. La ventilation s'accélère pour contribuer à répondre à ces besoins."
          },
          {
            type: "regle",
            titre: "À retenir",
            texte: "Poumons : O₂ de l'air vers le sang ; CO₂ du sang vers l'air.\nOrganes : O₂ du sang vers les cellules ; CO₂ des cellules vers le sang."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelles sont les deux phases de la ventilation pulmonaire ?",
        correction: "Ce sont l'inspiration, pendant laquelle l'air entre dans les poumons, et l'expiration, pendant laquelle une partie de l'air en sort."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que fait le diaphragme pendant l'inspiration ?",
        correction: "Il se contracte et s'abaisse."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décris les mouvements de la cage thoracique et du diaphragme lors d'une expiration calme.",
        correction: "Le diaphragme se relâche et remonte. Les côtes s'abaissent et le volume de la cage thoracique diminue. Une partie de l'air sort alors des poumons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans quel sens le dioxygène et le dioxyde de carbone traversent-ils la paroi au niveau des alvéoles ?",
        correction: "Le dioxygène passe de l'air des alvéoles vers le sang. Le dioxyde de carbone passe du sang vers l'air des alvéoles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L'air inspiré contient environ 21 % de dioxygène et l'air expiré environ 16 %. Que peux-tu en conclure ?",
        correction: "L'air expiré est moins riche en dioxygène que l'air inspiré : une partie du dioxygène est passée dans le sang au niveau des alvéoles. Cependant, l'air expiré contient encore du dioxygène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Le dioxygène passe dans le sang uniquement pendant l'inspiration. » Corrige son affirmation.",
        correction: "Cette affirmation est fausse. Les échanges gazeux entre l'air des alvéoles et le sang se poursuivent pendant l'inspiration comme pendant l'expiration."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris le trajet du dioxygène depuis l'air des alvéoles jusqu'aux muscles.",
        correction: "Le dioxygène passe de l'air des alvéoles dans les capillaires sanguins, à travers des parois très fines. Il est ensuite transporté par le sang vers les muscles, où il passe du sang vers les cellules musculaires."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Après avoir couru, Lala respire plus vite. Explique ce changement en reliant le travail des muscles aux échanges gazeux.",
        correction: "Pendant la course, les muscles travaillent davantage. Ils ont généralement besoin de plus de dioxygène et produisent davantage de dioxyde de carbone. Une ventilation plus rapide contribue à apporter du dioxygène aux poumons et à évacuer davantage de dioxyde de carbone. Le sang transporte ces gaz entre les poumons et les muscles."
      }
    ]
  }
]);
