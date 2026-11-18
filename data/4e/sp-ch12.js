// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch12",
    titre: "Chapitre 12 : La diode et le redressement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch12-lecon1",
        titre: "Le rôle d'une diode",
        blocs: [
          {
            type: "definition",
            titre: "Diode",
            texte: "Une diode est un composant électrique qui laisse passer le courant principalement dans un sens et le bloque principalement dans l'autre."
          },
          {
            type: "texte",
            titre: "Les deux sens",
            texte: "Dans le sens passant, la diode peut laisser circuler un courant. Dans le sens bloquant, elle s'oppose fortement au passage du courant."
          },
          {
            type: "schema",
            titre: "Symbole d'une diode",
            svg: "<svg viewBox='0 0 320 125' xmlns='http://www.w3.org/2000/svg'><rect width='320' height='125' fill='#f8fafc'/><line x1='35' y1='55' x2='120' y2='55' stroke='#334155' stroke-width='3'/><polygon points='120,30 120,80 170,55' fill='none' stroke='#334155' stroke-width='3'/><line x1='170' y1='30' x2='170' y2='80' stroke='#334155' stroke-width='3'/><line x1='170' y1='55' x2='285' y2='55' stroke='#334155' stroke-width='3'/><text x='90' y='105' text-anchor='middle' font-size='13' fill='#0f172a'>Anode</text><text x='205' y='105' text-anchor='middle' font-size='13' fill='#0f172a'>Cathode</text></svg>",
            legende: "La barre indique le côté de la cathode. Dans le modèle idéal, le courant passe dans le sens de l'anode vers la cathode."
          },
          {
            type: "remarque",
            titre: "Un modèle simplifié",
            texte: "Une diode réelle ne se comporte pas comme un interrupteur parfait. Son fonctionnement dépend notamment de la tension appliquée et de ses caractéristiques."
          },
          {
            type: "remarque",
            titre: "Sens du courant",
            texte: "Dans ce cours, on utilise le sens conventionnel du courant. Il ne faut pas le confondre avec le déplacement des électrons dans un conducteur métallique."
          }
        ]
      },
      {
        id: "sp4-ch12-lecon2",
        titre: "Redresser une tension alternative",
        blocs: [
          {
            type: "definition",
            titre: "Redressement",
            texte: "Le redressement consiste à transformer une tension alternative en une tension qui garde le même signe, mais qui peut encore varier au cours du temps."
          },
          {
            type: "texte",
            titre: "Redressement simple alternance",
            texte: "Dans un montage adapté, une diode peut laisser passer une alternance d'une tension et bloquer l'autre. On obtient alors une tension redressée simple alternance."
          },
          {
            type: "schema",
            titre: "Principe du redressement simple alternance",
            svg: "<svg viewBox='0 0 360 225' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='225' fill='#f8fafc'/><text x='18' y='20' font-size='13' fill='#0f172a'>Tension alternative</text><line x1='35' y1='70' x2='340' y2='70' stroke='#475569' stroke-width='2'/><line x1='35' y1='30' x2='35' y2='110' stroke='#475569' stroke-width='2'/><path d='M 35 70 C 55 25, 85 25, 105 70 S 155 115, 175 70 S 225 25, 245 70 S 295 115, 315 70' fill='none' stroke='#2563eb' stroke-width='3'/><text x='18' y='135' font-size='13' fill='#0f172a'>Tension redressée : modèle idéal</text><line x1='35' y1='185' x2='340' y2='185' stroke='#475569' stroke-width='2'/><line x1='35' y1='145' x2='35' y2='215' stroke='#475569' stroke-width='2'/><path d='M 35 185 C 55 140, 85 140, 105 185 L 175 185 C 195 140, 225 140, 245 185 L 315 185' fill='none' stroke='#dc2626' stroke-width='3'/></svg>",
            legende: "Dans ce modèle, l'alternance négative est bloquée. La tension obtenue reste positive ou nulle, mais elle varie."
          },
          {
            type: "remarque",
            titre: "Positive ou négative",
            texte: "Selon le sens de la diode et la façon de mesurer la tension, le montage peut conserver l'alternance positive ou l'alternance négative."
          }
        ]
      },
      {
        id: "sp4-ch12-lecon3",
        titre: "Le redressement double alternance",
        blocs: [
          {
            type: "definition",
            titre: "Double alternance",
            texte: "Un redressement double alternance utilise les deux alternances de la tension d'entrée pour obtenir, à la sortie, une tension de même signe."
          },
          {
            type: "texte",
            titre: "Le pont de diodes",
            texte: "Un dispositif appelé pont de diodes peut réaliser un redressement double alternance. Il contient généralement quatre diodes."
          },
          {
            type: "schema",
            titre: "Comparer les tensions",
            svg: "<svg viewBox='0 0 360 215' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='215' fill='#f8fafc'/><text x='18' y='20' font-size='13' fill='#0f172a'>Entrée alternative</text><line x1='35' y1='65' x2='340' y2='65' stroke='#475569' stroke-width='2'/><path d='M 35 65 C 55 25, 85 25, 105 65 S 155 105, 175 65 S 225 25, 245 65 S 295 105, 315 65' fill='none' stroke='#2563eb' stroke-width='3'/><text x='18' y='130' font-size='13' fill='#0f172a'>Sortie redressée : modèle idéal</text><line x1='35' y1='190' x2='340' y2='190' stroke='#475569' stroke-width='2'/><path d='M 35 190 C 55 150, 85 150, 105 190 C 125 150, 155 150, 175 190 C 195 150, 225 150, 245 190 C 265 150, 295 150, 315 190' fill='none' stroke='#dc2626' stroke-width='3'/></svg>",
            legende: "Dans le modèle idéal, les deux alternances donnent des portions positives à la sortie."
          },
          {
            type: "remarque",
            titre: "La tension n'est pas encore constante",
            texte: "Après redressement, la tension garde le même signe, mais elle varie encore. Une tension de même signe n'est pas forcément une tension constante."
          }
        ]
      },
      {
        id: "sp4-ch12-lecon4",
        titre: "Filtrage et alimentation",
        blocs: [
          {
            type: "definition",
            titre: "Filtrage",
            texte: "Le filtrage permet de réduire les variations d'une tension redressée. Dans certains circuits, un condensateur est utilisé pour rendre la tension plus régulière."
          },
          {
            type: "definition",
            titre: "Condensateur",
            texte: "Un condensateur est un composant capable de stocker temporairement de l'énergie électrique. Il peut contribuer à maintenir la tension lorsque la tension redressée diminue."
          },
          {
            type: "texte",
            titre: "Une chaîne d'alimentation simplifiée",
            texte: "Une alimentation peut comporter plusieurs étapes : adaptation de la tension alternative, redressement, filtrage et éventuellement régulation. Les appareils réels peuvent utiliser d'autres organisations."
          },
          {
            type: "schema",
            titre: "Étapes simplifiées d'une alimentation",
            svg: "<svg viewBox='0 0 360 175' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='175' fill='#f8fafc'/><rect x='8' y='35' width='100' height='45' rx='5' fill='#dbeafe' stroke='#2563eb'/><text x='58' y='55' text-anchor='middle' font-size='12' fill='#1e3a5f'>Adaptation</text><text x='58' y='71' text-anchor='middle' font-size='12' fill='#1e3a5f'>de tension</text><line x1='109' y1='57' x2='123' y2='57' stroke='#334155' stroke-width='2'/><polygon points='123,57 117,53 117,61' fill='#334155'/><rect x='124' y='35' width='100' height='45' rx='5' fill='#fef3c7' stroke='#d97706'/><text x='174' y='62' text-anchor='middle' font-size='12' fill='#78350f'>Redressement</text><line x1='225' y1='57' x2='239' y2='57' stroke='#334155' stroke-width='2'/><polygon points='239,57 233,53 233,61' fill='#334155'/><rect x='240' y='35' width='100' height='45' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='290' y='62' text-anchor='middle' font-size='12' fill='#14532d'>Filtrage</text><text x='180' y='115' text-anchor='middle' font-size='12' fill='#475569'>Une régulation peut être ajoutée selon l'appareil.</text></svg>",
            legende: "Schéma de principe uniquement : ce n'est pas un montage à réaliser."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "N'ouvre pas une alimentation ou un chargeur et ne réalise aucun montage sur une prise. Un condensateur peut conserver une charge dangereuse même après débranchement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le rôle principal d'une diode dans un circuit ?",
        correction: "Une diode laisse passer le courant principalement dans un sens et le bloque principalement dans l'autre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien de diodes trouve-t-on généralement dans un pont de diodes ?",
        correction: "Un pont de diodes comporte généralement quatre diodes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Après un redressement simple alternance idéal, que devient l'alternance bloquée ?",
        correction: "Dans le modèle idéal, l'alternance bloquée ne produit pas de tension aux bornes de la charge : la tension de sortie est nulle pendant cette partie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension redressée reste positive ou nulle, mais sa valeur change au cours du temps. Est-elle constante ?",
        correction: "Non. Elle garde le même signe, mais elle n'est pas constante puisque sa valeur varie."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique la différence entre un redressement simple alternance et un redressement double alternance.",
        correction: "Dans un redressement simple alternance, une alternance est conservée et l'autre est bloquée. Dans un redressement double alternance, les deux alternances sont utilisées pour obtenir une tension de même signe à la sortie."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quel est le rôle du filtrage après le redressement ? Quel composant peut être utilisé dans certains circuits ?",
        correction: "Le filtrage réduit les variations de la tension redressée pour la rendre plus régulière. Un condensateur peut être utilisé dans certains circuits."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une tension alternative entre dans une alimentation simplifiée. Elle est d'abord redressée, puis filtrée.\n1. Quel changement produit le redressement ?\n2. Quel changement apporte le filtrage ?\n3. La tension filtrée est-elle forcément parfaitement constante ?",
        correction: "1. Le redressement produit une tension qui garde le même signe, mais qui peut encore varier.\n2. Le filtrage réduit les variations de cette tension.\n3. Non. La tension peut encore présenter des variations après filtrage ; une régulation peut être ajoutée selon les besoins."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève affirme : « Dès qu'une tension ne change plus de signe, elle est forcément constante. » Explique son erreur en prenant l'exemple d'une tension redressée.",
        correction: "Une tension peut rester positive ou nulle tout en variant. Après redressement, par exemple, la tension garde le même signe mais peut passer de zéro à une valeur positive puis revenir vers zéro. Elle n'est donc pas nécessairement constante."
      }
    ]
  }
]);
