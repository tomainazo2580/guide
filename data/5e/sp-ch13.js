enregistrerChapitres("5e", "sp", [
  {
    id: 13,
    titre: "Chapitre 13 : Révision générale",
    premium: false,
    guide: true,

    lecons: [
      {
        id: 1,
        titre: "Masse et volume",
        blocs: [
          {
            type: "regle",
            texte: "La masse se mesure avec une balance. Le volume d’un liquide se mesure notamment avec une éprouvette graduée."
          },
          {
            type: "regle",
            texte: "1 kg = 1 000 g ; 1 L = 1 000 mL ; 1 mL = 1 cm³ ; 1 dm³ = 1 L."
          },
          {
            type: "methode",
            texte: "Pour mesurer la masse d’un liquide sans utiliser la tare : masse du liquide = masse du récipient rempli − masse du récipient vide."
          },
          {
            type: "methode",
            texte: "Pour mesurer le volume d’un solide qui coule, ne se dissout pas et ne réagit pas avec l’eau : l’immerger complètement dans une éprouvette sans débordement ni bulles. Son volume est égal au volume final moins le volume initial."
          },
          {
            type: "exemple",
            texte: "Une éprouvette indique 40 mL avant immersion et 55 mL après immersion complète d’un caillou. Le volume du caillou est de 15 mL, soit 15 cm³."
          }
        ]
      },
      {
        id: 2,
        titre: "Masse volumique, densité et flottaison",
        blocs: [
          {
            type: "regle",
            texte: "Masse volumique : ρ = m / V. On peut aussi calculer la masse avec m = ρ × V ou le volume avec V = m / ρ."
          },
          {
            type: "regle",
            texte: "La densité d’un solide ou d’un liquide par rapport à l’eau est : d = ρ de la substance / ρ de l’eau. Elle n’a pas d’unité."
          },
          {
            type: "texte",
            texte: "Pour les calculs simples, on utilise environ 1 g/cm³ pour la masse volumique de l’eau, soit 1 000 kg/m³."
          },
          {
            type: "regle",
            texte: "Un objet flotte si sa masse volumique moyenne est inférieure à celle du liquide. Si elle est supérieure, il coule. Si les deux sont égales, il peut rester en équilibre entièrement immergé."
          },
          {
            type: "exemple",
            texte: "Un objet de masse 60 g et de volume 80 cm³ a une masse volumique de 60 ÷ 80 = 0,75 g/cm³. Elle est inférieure à celle de l’eau : il flotte."
          }
        ]
      },
      {
        id: 3,
        titre: "Mélanges et dissolution",
        blocs: [
          {
            type: "regle",
            texte: "Un mélange homogène présente un aspect uniforme à l’œil nu. Dans un mélange hétérogène, on distingue au moins deux parties ou constituants."
          },
          {
            type: "regle",
            texte: "Deux liquides miscibles forment ensemble un mélange homogène. Un solide qui peut se dissoudre dans un liquide est dit soluble dans ce liquide."
          },
          {
            type: "definition",
            texte: "Dans une solution, le soluté est la substance dissoute et le solvant est le liquide qui la dissout. Lorsque le solvant est l’eau, la solution est aqueuse."
          },
          {
            type: "regle",
            texte: "Si rien n’est perdu lors d’une dissolution, la masse de la solution est égale à la somme des masses du solvant et du soluté dissous."
          },
          {
            type: "remarque",
            texte: "Un soluté dissous ne disparaît pas. Un mélange clair n’est pas forcément pur ni potable."
          }
        ]
      },
      {
        id: 4,
        titre: "Séparation des mélanges",
        blocs: [
          {
            type: "tableau",
            entetes: ["Méthode", "Utilisation possible"],
            lignes: [
              ["Décantation", "Laisser des parties d’un mélange hétérogène se séparer au repos"],
              ["Filtration", "Retenir certaines particules solides non dissoutes"],
              ["Tamisage", "Séparer des solides de tailles différentes"],
              ["Évaporation", "Récupérer un solide dissous lorsque le liquide s’évapore"],
              ["Distillation", "Vaporiser puis condenser pour recueillir un liquide"],
              ["Pressage", "Extraire un liquide en exerçant une pression"]
            ]
          },
          {
            type: "remarque",
            texte: "Un filtre ordinaire ne retient pas le sel dissous et ne garantit pas que l’eau recueillie soit potable."
          }
        ]
      },
      {
        id: 5,
        titre: "Circuits électriques",
        blocs: [
          {
            type: "regle",
            texte: "Un circuit en série forme une seule boucle. Des dipôles en dérivation sont reliés aux mêmes deux points du circuit."
          },
          {
            type: "regle",
            texte: "Dans une boucle en série, ouvrir le circuit en un point interrompt le courant dans toute la boucle. Dans un montage en dérivation, une autre branche peut continuer à fonctionner si son chemin avec la pile reste fermé."
          },
          {
            type: "remarque",
            texte: "Ne réalise jamais de montage sur une prise électrique et ne relie jamais directement les bornes d’une pile par un fil."
          }
        ]
      },
      {
        id: 6,
        titre: "Intensité et tension",
        blocs: [
          {
            type: "tableau",
            entetes: ["Grandeur", "Unité", "Appareil", "Branchement"],
            lignes: [
              ["Intensité I", "ampère (A)", "Ampèremètre", "En série"],
              ["Tension U", "volt (V)", "Voltmètre", "En dérivation"]
            ]
          },
          {
            type: "regle",
            texte: "En série, l’intensité est la même en tout point. Au niveau d’un nœud, la somme des intensités entrantes est égale à la somme des intensités sortantes."
          },
          {
            type: "regle",
            texte: "Dans une boucle simple, les tensions des récepteurs en série s’additionnent pour donner celle du générateur, si la tension des fils est négligeable. Deux dipôles reliés aux mêmes deux points ont la même tension entre leurs bornes."
          },
          {
            type: "remarque",
            texte: "1 A = 1 000 mA et 1 V = 1 000 mV. Avant un calcul, exprime les grandeurs dans la même unité."
          }
        ]
      },
      {
        id: 7,
        titre: "Sources, formes et transformations d’énergie",
        blocs: [
          {
            type: "regle",
            texte: "Le Soleil, le vent et l’eau en mouvement sont des sources renouvelables. Le pétrole, le charbon et le gaz naturel sont des sources non renouvelables."
          },
          {
            type: "remarque",
            texte: "Le bois peut être une source renouvelable si la ressource est bien gérée. Renouvelable ne signifie pas sans effet sur l’environnement."
          },
          {
            type: "exemple",
            texte: "Une lampe transforme de l’énergie électrique en énergie lumineuse et thermique. Un panneau photovoltaïque transforme une partie de l’énergie lumineuse reçue en énergie électrique."
          },
          {
            type: "regle",
            texte: "Une batterie rechargeable stocke de l’énergie sous forme chimique. De l’eau retenue en hauteur possède une énergie de position."
          },
          {
            type: "remarque",
            texte: "L’énergie ne disparaît pas lors d’une transformation. Une partie peut être transférée à l’environnement, notamment sous forme de chaleur."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis : a) 2,5 kg en g ; b) 750 mL en L.",
        correction: "a) 2,5 kg = 2 500 g.\nb) 750 mL = 0,75 L."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un récipient vide a une masse de 120 g. Avec de l’eau, il a une masse de 370 g. Quelle est la masse de l’eau ?",
        correction: "Masse de l’eau = 370 − 120 = 250 g."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Une éprouvette indique 45 mL. Après immersion complète d’un caillou, elle indique 60 mL. Calcule le volume du caillou en cm³.",
        correction: "Volume du caillou = 60 − 45 = 15 mL. Comme 1 mL = 1 cm³, son volume est de 15 cm³."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un objet a une masse de 80 g et un volume de 100 cm³. Calcule sa masse volumique. Flotte-t-il dans l’eau de masse volumique 1 g/cm³ ?",
        correction: "ρ = 80 ÷ 100 = 0,8 g/cm³.\nComme 0,8 est inférieur à 1, l’objet flotte dans l’eau."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Classe ces mélanges : a) eau et sel entièrement dissous ; b) eau et sable ; c) eau et huile au repos.",
        correction: "a) Homogène.\nb) Hétérogène : le sable est visible.\nc) Hétérogène : deux couches sont visibles au repos."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Dans une solution d’eau sucrée, identifie le soluté et le solvant.",
        correction: "Le sucre est le soluté et l’eau est le solvant."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un mélange contient de l’eau, du sable et du sel entièrement dissous. Comment retirer le sable, puis récupérer le sel ?",
        correction: "On filtre d’abord le mélange : le sable est retenu par le filtre et le sel dissous passe avec l’eau. On laisse ensuite l’eau du filtrat s’évaporer pour récupérer le sel."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Deux lampes sont en série avec une pile. On retire l’une des lampes. Que se passe-t-il pour l’autre ?",
        correction: "La boucle est ouverte : le courant ne circule plus et l’autre lampe s’éteint."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Comment branche-t-on un ampèremètre ? Et un voltmètre ?",
        correction: "L’ampèremètre se branche en série dans la branche étudiée. Le voltmètre se branche en dérivation entre les deux points étudiés."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un courant de 0,8 A arrive à un nœud et se répartit dans deux branches. L’une est parcourue par 300 mA. Calcule l’intensité dans l’autre branche.",
        correction: "300 mA = 0,3 A.\nD’après la loi des nœuds, l’intensité cherchée est 0,8 − 0,3 = 0,5 A, soit 500 mA."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une pile fournit 6 V à deux lampes en série. La tension de la première est de 2,5 V. Calcule celle de la seconde, en négligeant la tension des fils.",
        correction: "Les tensions s’additionnent : 6 = 2,5 + U.\nDonc U = 6 − 2,5 = 3,5 V."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Deux lampes sont en dérivation directement aux bornes d’une pile de tension 4,5 V. Quelle est la tension aux bornes de chacune ?",
        correction: "Chaque lampe est reliée aux mêmes bornes que la pile : la tension aux bornes de chacune est de 4,5 V."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Classe les sources suivantes en renouvelables ou non renouvelables : Soleil, pétrole, vent, charbon.",
        correction: "Le Soleil et le vent sont renouvelables. Le pétrole et le charbon sont non renouvelables."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Décris les transformations principales dans une lampe alimentée par une pile.",
        correction: "La pile transforme de l’énergie chimique et fournit de l’énergie électrique au circuit. La lampe transforme l’énergie reçue notamment en lumière et en chaleur."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un caillou a une masse de 54 g. Son immersion complète fait passer le volume d’eau dans une éprouvette de 30 mL à 50 mL. Calcule son volume et sa masse volumique, puis indique s’il coule dans l’eau. Prends ρ de l’eau = 1 g/cm³.",
        correction: "Volume : 50 − 30 = 20 mL = 20 cm³.\nMasse volumique : ρ = 54 ÷ 20 = 2,7 g/cm³.\nComme 2,7 est supérieur à 1, le caillou coule dans l’eau."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un panneau photovoltaïque charge une batterie rechargeable, qui alimente ensuite une lampe. Décris les principales formes d’énergie de cette chaîne.",
        correction: "Le panneau reçoit de l’énergie lumineuse et fournit de l’énergie électrique. La batterie stocke une partie de l’énergie sous forme chimique, puis fournit de l’énergie électrique à la lampe. Celle-ci produit de l’énergie lumineuse et thermique."
      }
    ]
  }
]);
