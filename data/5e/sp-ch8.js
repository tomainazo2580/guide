enregistrerChapitres("5e", "sp", [
  {
    id: 8,
    titre: "Chapitre 8 : Les circuits en série et en dérivation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le circuit en série",
        blocs: [
          {
            type: "definition",
            texte: "Dans un circuit en série, les dipôles sont placés les uns à la suite des autres dans une seule boucle."
          },
          {
            type: "texte",
            texte: "Le courant traverse successivement les différents dipôles de la boucle."
          },
          {
            type: "exemple",
            texte: "Une pile, un interrupteur fermé et deux lampes reliés les uns à la suite des autres forment un circuit en série."
          },
          {
            type: "remarque",
            texte: "Si l’on ouvre le circuit en un point, le courant ne circule plus dans la boucle : toutes les lampes du circuit en série s’éteignent."
          }
        ]
      },
      {
        id: 2,
        titre: "Schéma d’un circuit en série",
        blocs: [
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 240" role="img" aria-label="Circuit en série avec une pile et deux lampes">
              <path d="M70 65 H145 M175 65 H275 M305 65 H390 V175 H70 V65" fill="none" stroke="#334155" stroke-width="3"/>
              <circle cx="160" cy="65" r="15" fill="#fff" stroke="#334155" stroke-width="3"/>
              <line x1="150" y1="55" x2="170" y2="75" stroke="#334155" stroke-width="2"/>
              <line x1="170" y1="55" x2="150" y2="75" stroke="#334155" stroke-width="2"/>
              <circle cx="290" cy="65" r="15" fill="#fff" stroke="#334155" stroke-width="3"/>
              <line x1="280" y1="55" x2="300" y2="75" stroke="#334155" stroke-width="2"/>
              <line x1="300" y1="55" x2="280" y2="75" stroke="#334155" stroke-width="2"/>
              <rect x="60" y="105" width="20" height="40" fill="#fff"/>
              <line x1="56" y1="115" x2="84" y2="115" stroke="#334155" stroke-width="3"/>
              <line x1="62" y1="135" x2="78" y2="135" stroke="#334155" stroke-width="3"/>
              <text x="39" y="119" font-size="16" fill="#334155">+</text>
              <text x="39" y="141" font-size="16" fill="#334155">−</text>
              <text x="151" y="38" font-size="15" fill="#334155">L1</text>
              <text x="281" y="38" font-size="15" fill="#334155">L2</text>
              <text x="49" y="205" font-size="15" fill="#334155">Pile</text>
            </svg>`,
            legende: "Les deux lampes L1 et L2 sont placées dans une seule boucle : elles sont en série."
          },
          {
            type: "methode",
            texte: "Pour reconnaître une association en série, suivre les connexions : les dipôles sont traversés successivement dans une même branche, sans nœud entre eux."
          },
          {
            type: "remarque",
            texte: "Dans une boucle en série, si une lampe est retirée ou si son filament est coupé, la boucle est ouverte et les autres lampes s’éteignent."
          }
        ]
      },
      {
        id: 3,
        titre: "Nœuds et branches",
        blocs: [
          {
            type: "definition",
            texte: "Un nœud est un point d’un circuit où se rejoignent au moins trois conducteurs ou branches."
          },
          {
            type: "definition",
            texte: "Une branche est une partie du circuit comprise entre deux nœuds successifs."
          },
          {
            type: "texte",
            texte: "Dans un circuit comportant plusieurs branches, le courant peut emprunter différents chemins entre deux nœuds."
          },
          {
            type: "remarque",
            texte: "Sur un schéma, un point marqué à une jonction indique que les fils sont reliés électriquement."
          }
        ]
      },
      {
        id: 4,
        titre: "Le circuit en dérivation",
        blocs: [
          {
            type: "definition",
            texte: "Des dipôles sont en dérivation lorsqu’ils sont reliés aux mêmes deux points du circuit. Ils se trouvent alors sur des branches différentes."
          },
          {
            type: "texte",
            texte: "Dans un circuit comportant deux lampes en dérivation, chaque lampe possède sa propre branche entre les deux nœuds."
          },
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 285" role="img" aria-label="Circuit avec deux lampes en dérivation">
              <path d="M70 55 H180 M210 55 H390 V215 H70 V55" fill="none" stroke="#334155" stroke-width="3"/>
              <path d="M70 135 H180 M210 135 H390" fill="none" stroke="#334155" stroke-width="3"/>
              <circle cx="195" cy="55" r="15" fill="#fff" stroke="#334155" stroke-width="3"/>
              <line x1="185" y1="45" x2="205" y2="65" stroke="#334155" stroke-width="2"/>
              <line x1="205" y1="45" x2="185" y2="65" stroke="#334155" stroke-width="2"/>
              <circle cx="195" cy="135" r="15" fill="#fff" stroke="#334155" stroke-width="3"/>
              <line x1="185" y1="125" x2="205" y2="145" stroke="#334155" stroke-width="2"/>
              <line x1="205" y1="125" x2="185" y2="145" stroke="#334155" stroke-width="2"/>
              <circle cx="70" cy="135" r="5" fill="#334155"/>
              <circle cx="390" cy="135" r="5" fill="#334155"/>
              <rect x="145" y="205" width="40" height="20" fill="#fff"/>
              <line x1="155" y1="201" x2="155" y2="229" stroke="#334155" stroke-width="3"/>
              <line x1="175" y1="207" x2="175" y2="223" stroke="#334155" stroke-width="3"/>
              <text x="145" y="251" font-size="16" fill="#334155">+</text>
              <text x="174" y="251" font-size="16" fill="#334155">−</text>
              <text x="185" y="28" font-size="15" fill="#334155">L1</text>
              <text x="185" y="112" font-size="15" fill="#334155">L2</text>
              <text x="45" y="137" font-size="15" fill="#334155">A</text>
              <text x="402" y="139" font-size="15" fill="#334155">B</text>
            </svg>`,
            legende: "Les lampes L1 et L2 sont branchées entre les mêmes nœuds A et B : elles sont en dérivation."
          },
          {
            type: "remarque",
            texte: "Dans ce montage, si une lampe est retirée et que seule sa branche est ouverte, l’autre lampe peut rester allumée : sa branche possède encore un chemin fermé avec la pile."
          }
        ]
      },
      {
        id: 5,
        titre: "Comparer les deux montages",
        blocs: [
          {
            type: "tableau",
            entetes: ["Caractéristique", "Circuit en série", "Deux lampes en dérivation"],
            lignes: [
              ["Organisation", "Une seule boucle", "Lampes sur deux branches différentes"],
              ["Chemin du courant", "Il traverse successivement les dipôles", "Il peut emprunter plusieurs branches"],
              ["Une lampe retirée", "La boucle est ouverte : l’autre s’éteint", "L’autre peut rester allumée si sa boucle reste fermée"]
            ]
          },
          {
            type: "remarque",
            texte: "L’éclat des lampes dépend notamment de la pile et des caractéristiques des lampes. On ne peut pas comparer tous les montages sans préciser ces conditions."
          }
        ]
      },
      {
        id: 6,
        titre: "L’interrupteur dans un circuit en dérivation",
        blocs: [
          {
            type: "texte",
            texte: "Dans un circuit en dérivation, l’effet d’un interrupteur dépend de l’endroit où il est placé."
          },
          {
            type: "exemple",
            texte: "Un interrupteur placé sur une branche contenant une lampe peut commander cette lampe sans nécessairement éteindre celle d’une autre branche."
          },
          {
            type: "exemple",
            texte: "Un interrupteur placé dans la branche qui contient la pile peut ouvrir le circuit de toutes les lampes et les éteindre."
          },
          {
            type: "remarque",
            texte: "Pour prévoir l’effet d’un interrupteur, il faut regarder quels chemins fermés restent entre les bornes de la pile."
          }
        ]
      },
      {
        id: 7,
        titre: "Les circuits mixtes",
        blocs: [
          {
            type: "definition",
            texte: "Un circuit mixte comporte à la fois des associations en série et des associations en dérivation."
          },
          {
            type: "exemple",
            texte: "Une lampe L1 peut être en série avec un ensemble formé de deux lampes L2 et L3 en dérivation. Le courant traverse L1 avant de se répartir dans les branches de L2 et L3."
          },
          {
            type: "methode",
            texte: "Pour analyser un circuit mixte :\n1. Repérer les nœuds.\n2. Identifier les branches entre ces nœuds.\n3. Chercher les dipôles reliés aux mêmes deux points : ils sont en dérivation.\n4. Repérer les dipôles placés successivement dans une même branche, sans nœud entre eux."
          },
          {
            type: "remarque",
            texte: "Pour les expériences, utilise uniquement une pile adaptée. Ne relie jamais directement ses deux bornes par un fil et ne réalise jamais de montage sur une prise électrique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Combien de boucles comporte un circuit simple en série ?",
        correction: "Un circuit simple en série comporte une seule boucle."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu’est-ce qu’un nœud dans un circuit électrique ?",
        correction: "Un nœud est un point où se rejoignent au moins trois conducteurs ou branches."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quand dit-on que deux dipôles sont en dérivation ?",
        correction: "Ils sont en dérivation lorsqu’ils sont reliés aux mêmes deux points du circuit."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont en série avec une pile. On retire l’une des lampes. Que devient l’autre ?",
        correction: "La boucle est ouverte : le courant ne circule plus dans cette boucle et l’autre lampe s’éteint."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont en dérivation avec une pile. On retire l’une des lampes sans modifier les autres connexions. Que peut-il arriver à l’autre lampe ?",
        correction: "Elle peut rester allumée, car sa branche conserve un chemin fermé avec la pile."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont reliées l’une à la suite de l’autre, sans nœud entre elles. Sont-elles en série ou en dérivation ?",
        correction: "Elles sont en série : elles sont placées successivement dans une même branche, sans nœud entre elles."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Dans un circuit en dérivation, un interrupteur est placé uniquement sur la branche de L1. On l’ouvre. Quel est l’effet sur L1 et L2, située sur une autre branche ?",
        correction: "La branche de L1 est ouverte : L1 s’éteint. L2 peut rester allumée si sa propre boucle avec la pile reste fermée."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un interrupteur est placé dans la branche contenant la pile. Il commande un montage de deux lampes en dérivation. Que se passe-t-il lorsqu’on l’ouvre ?",
        correction: "Les chemins reliant les lampes à la pile sont interrompus : les deux lampes s’éteignent."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Peut-on affirmer que toutes les lampes de tous les circuits en dérivation ont le même éclat ?",
        correction: "Non. L’éclat dépend notamment des caractéristiques des lampes et de l’alimentation. Il faut connaître les conditions du montage pour conclure."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Dans un circuit mixte, L1 est en série avec un ensemble de deux lampes L2 et L3 en dérivation. Si L1 est retirée, que se passe-t-il ?",
        correction: "Retirer L1 ouvre la partie du circuit commune aux deux branches. Le courant ne peut plus circuler dans les boucles des lampes : L2 et L3 s’éteignent."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Dans le même circuit, L1 est en série avec l’ensemble de L2 et L3 en dérivation. Si L2 est retirée sans modifier les autres connexions, quelles lampes peuvent rester allumées ?",
        correction: "La branche de L2 est ouverte, mais un chemin fermé peut subsister à travers la pile, L1 et L3. L1 et L3 peuvent donc rester allumées."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un élève dit : « Deux lampes sont en dérivation simplement parce qu’elles sont dessinées à des hauteurs différentes. » Pourquoi cette affirmation est-elle insuffisante ?",
        correction: "La position sur le dessin ne suffit pas. Pour être en dérivation, les deux lampes doivent être reliées aux mêmes deux points du circuit."
      }
    ]
  }
]);
