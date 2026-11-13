// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-derivation",
    titre: "Chapitre 7 : Le montage en dérivation",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-derivation-def",
        titre: "Qu'est-ce qu'un montage en dérivation ?",
        blocs: [
          {
            type: "exemple",
            titre: "Deux pièces, deux lampes",
            texte: "Chez Naina, la lampe du salon et la lampe de la cuisine sont branchées sur la même batterie. Pourtant, quand la lampe du salon grille, la cuisine reste éclairée. C'est un montage en dérivation."
          },
          {
            type: "definition",
            titre: "Le montage en dérivation",
            texte: "Dans un montage en dérivation (aussi appelé montage en parallèle), les dipôles sont branchés sur des boucles différentes. Le circuit comporte plusieurs boucles."
          },
          {
            type: "schema",
            titre: "Un circuit en dérivation",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='30' width='210' height='170' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='60' x2='170' y2='170' stroke='#1e3a5f' stroke-width='2'/><line x1='56' y1='100' x2='56' y2='130' stroke='#1e3a5f' stroke-width='2'/><line x1='62' y1='88' x2='62' y2='112' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='100' x2='70' y2='100' stroke='#1e3a5f' stroke-width='2'/><line x1='62' y1='100' x2='70' y2='100' stroke='#1e3a5f' stroke-width='2'/><line x1='62' y1='130' x2='70' y2='130' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='94' x2='70' y2='118' stroke='#1e3a5f' stroke-width='4'/><line x1='70' y1='100' x2='70' y2='30' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='130' x2='70' y2='200' stroke='#1e3a5f' stroke-width='2'/><circle cx='170' cy='115' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='106' x2='179' y2='124' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='124' x2='179' y2='106' stroke='#1e3a5f' stroke-width='2'/><text x='135' y='150' font-size='12' fill='#1e3a5f'>Lampe 1</text><circle cx='280' cy='115' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='271' y1='106' x2='289' y2='124' stroke='#1e3a5f' stroke-width='2'/><line x1='271' y1='124' x2='289' y2='106' stroke='#1e3a5f' stroke-width='2'/><text x='252' y='150' font-size='12' fill='#1e3a5f'>Lampe 2</text><circle cx='170' cy='60' r='5' fill='#1e3a5f'/><circle cx='170' cy='170' r='5' fill='#1e3a5f'/><text x='185' y='56' font-size='13' font-weight='bold' fill='#b45309'>M</text><text x='185' y='182' font-size='13' font-weight='bold' fill='#b45309'>N</text><text x='48' y='98' font-size='13' fill='#1e3a5f'>+</text><text x='48' y='140' font-size='13' fill='#1e3a5f'>-</text></svg>",
            legende: "Deux boucles : le courant peut passer par la lampe 1 OU par la lampe 2."
          },
          {
            type: "regle",
            titre: "Le critère pour reconnaître ce montage",
            texte: "Suis le circuit du doigt en partant de la pile : si à un moment tu as le choix entre plusieurs chemins pour traverser les lampes, c'est un montage en dérivation. Il y a plusieurs boucles."
          },
          {
            type: "remarque",
            titre: "Deux noms, une seule idée",
            texte: "Montage en dérivation et montage en parallèle sont deux noms pour la même chose. Ton professeur peut utiliser les deux mots."
          }
        ]
      },
      {
        id: "sp6-derivation-noeuds",
        titre: "Nœuds et branches",
        blocs: [
          {
            type: "definition",
            titre: "Le nœud",
            texte: "Un nœud est un point commun à plusieurs boucles. C'est là que le courant se sépare ou se rassemble. Sur les schémas, on note souvent les nœuds M et N."
          },
          {
            type: "definition",
            titre: "Les branches",
            texte: "La branche principale est celle qui contient le générateur (la pile).\nLes branches dérivées sont les autres boucles : chacune contient un dipôle (une lampe, par exemple)."
          },
          {
            type: "schema",
            titre: "Branche principale et branches dérivées",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg'><line x1='70' y1='30' x2='70' y2='200' stroke='#dc2626' stroke-width='3'/><line x1='70' y1='30' x2='170' y2='30' stroke='#dc2626' stroke-width='3'/><line x1='70' y1='200' x2='170' y2='200' stroke='#dc2626' stroke-width='3'/><line x1='170' y1='30' x2='280' y2='30' stroke='#1e88e5' stroke-width='2'/><line x1='170' y1='200' x2='280' y2='200' stroke='#1e88e5' stroke-width='2'/><line x1='170' y1='30' x2='170' y2='200' stroke='#22c55e' stroke-width='3'/><line x1='280' y1='30' x2='280' y2='200' stroke='#1e88e5' stroke-width='2'/><circle cx='170' cy='30' r='5' fill='#b45309'/><circle cx='170' cy='200' r='5' fill='#b45309'/><text x='183' y='27' font-size='13' font-weight='bold' fill='#b45309'>M</text><text x='183' y='212' font-size='13' font-weight='bold' fill='#b45309'>N</text><text x='80' y='22' font-size='12' fill='#dc2626'>Branche principale (pile)</text><text x='178' y='120' font-size='12' fill='#16a34a'>Branche</text><text x='178' y='136' font-size='12' fill='#16a34a'>derivee 1</text><text x='288' y='120' font-size='12' fill='#1e88e5'>Branche</text><text x='288' y='136' font-size='12' fill='#1e88e5'>derivee 2</text></svg>",
            legende: "Rouge : la branche principale. Vert et bleu : les branches dérivées."
          },
          {
            type: "exemple",
            titre: "Le fleuve qui se divise",
            texte: "Imagine un fleuve qui arrive à un embranchement : l'eau se partage entre deux bras, puis les bras se rejoignent plus loin. Le courant fait pareil au nœud M : une partie va vers la lampe 1, une autre vers la lampe 2. Au nœud N, les deux courants se rassemblent."
          },
          {
            type: "remarque",
            titre: "Repère sur le schéma",
            texte: "Sur un schéma, le nœud est marqué par un point bien visible (souvent un gros point noir) : il montre que les fils sont vraiment connectés à cet endroit."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-derivation-avantages",
        titre: "Les avantages du montage en dérivation",
        blocs: [
          {
            type: "regle",
            titre: "Premier avantage : l'indépendance",
            texte: "Dans un montage en dérivation, chaque dipôle fonctionne indépendamment des autres. Si on dévisse une lampe, ou si elle grille, les autres continuent de briller."
          },
          {
            type: "regle",
            titre: "Deuxième avantage : l'éclat ne change pas",
            texte: "Qu'on ajoute ou qu'on enlève des lampes en dérivation, l'éclat de chaque lampe ne change pas : chacune reçoit directement l'énergie de la pile sur sa propre boucle."
          },
          {
            type: "schema",
            titre: "Une lampe dévissée : l'autre brille toujours",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='30' width='210' height='160' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='55' x2='170' y2='165' stroke='#1e3a5f' stroke-width='2'/><circle cx='170' cy='110' r='13' fill='#fde047' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='101' x2='179' y2='119' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='119' x2='179' y2='101' stroke='#1e3a5f' stroke-width='2'/><text x='130' y='145' font-size='12' fill='#166534'>Lampe 1 :</text><text x='130' y='160' font-size='12' fill='#166534'>brille</text><circle cx='280' cy='110' r='13' fill='#e2e8f0' stroke='#dc2626' stroke-width='2' stroke-dasharray='4 3'/><text x='240' y='145' font-size='12' fill='#dc2626'>Lampe 2 :</text><text x='240' y='160' font-size='12' fill='#dc2626'>grillee</text><circle cx='170' cy='55' r='5' fill='#1e3a5f'/><circle cx='170' cy='165' r='5' fill='#1e3a5f'/><text x='150' y='212' text-anchor='middle' font-size='13' fill='#1e3a5f'>La boucle de la lampe 1 reste fermee</text></svg>",
            legende: "La lampe 2 est grillée, mais la boucle de la lampe 1 est intacte : elle brille toujours."
          },
          {
            type: "tableau",
            titre: "Série ou dérivation ?",
            entetes: ["Situation", "En série", "En dérivation"],
            lignes: [
              ["Une lampe grille", "Tout s'éteint", "Les autres brillent"],
              ["On ajoute une lampe", "Toutes éclairent moins", "L'éclat ne change pas"],
              ["Nombre de boucles", "Une seule", "Plusieurs"],
              ["Indépendance", "Non", "Oui"]
            ]
          },
          {
            type: "exemple",
            titre: "L'expérience en classe",
            texte: "Monte une pile et deux lampes en dérivation. Dévisse la lampe 1 : la lampe 2 continue de briller, avec le même éclat. Revisse la lampe 1 : elle se rallume, et la lampe 2 n'a jamais changé."
          },
          {
            type: "remarque",
            titre: "Le prix à payer",
            texte: "Le montage en dérivation demande plus de fils (plusieurs boucles) et la pile s'use plus vite quand on ajoute des lampes. Mais pour l'éclairage, ses avantages gagnent."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-derivation-maison",
        titre: "L'installation de la maison",
        blocs: [
          {
            type: "regle",
            titre: "La règle à retenir",
            texte: "Dans une maison, tous les appareils électriques sont montés en dérivation : les lampes, la télévision, la radio, le fer à repasser, la prise du téléphone..."
          },
          {
            type: "texte",
            titre: "Pourquoi ?",
            texte: "Grâce au montage en dérivation :\n1. Tu peux allumer la télé sans allumer la lampe : chaque appareil est indépendant.\n2. Si le fer à repasser grille, la télé continue de fonctionner.\n3. Chaque appareil reçoit toute la tension du réseau : la lampe éclaire pareil, seule ou avec dix appareils allumés."
          },
          {
            type: "schema",
            titre: "La maison en dérivation",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='250' height='140' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='120' y1='40' x2='120' y2='180' stroke='#1e3a5f' stroke-width='2'/><line x1='190' y1='40' x2='190' y2='180' stroke='#1e3a5f' stroke-width='2'/><line x1='260' y1='40' x2='260' y2='180' stroke='#1e3a5f' stroke-width='2'/><text x='30' y='115' font-size='13' fill='#1e3a5f'>JIRAMA</text><text x='30' y='130' font-size='11' fill='#1e3a5f'>ou batterie</text><circle cx='120' cy='100' r='12' fill='#fde047' stroke='#1e3a5f' stroke-width='2'/><line x1='112' y1='92' x2='128' y2='108' stroke='#1e3a5f' stroke-width='2'/><line x1='112' y1='108' x2='128' y2='92' stroke='#1e3a5f' stroke-width='2'/><text x='92' y='80' font-size='11' fill='#1e3a5f'>Lampe salon</text><rect x='180' y='92' width='20' height='16' fill='none' stroke='#1e3a5f' stroke-width='2'/><text x='168' y='80' font-size='11' fill='#1e3a5f'>Tele</text><rect x='252' y='92' width='16' height='14' fill='none' stroke='#1e3a5f' stroke-width='2'/><text x='238' y='80' font-size='11' fill='#1e3a5f'>Radio</text><circle cx='120' cy='40' r='4' fill='#1e3a5f'/><circle cx='190' cy='40' r='4' fill='#1e3a5f'/><circle cx='260' cy='40' r='4' fill='#1e3a5f'/><circle cx='120' cy='180' r='4' fill='#1e3a5f'/><circle cx='190' cy='180' r='4' fill='#1e3a5f'/><circle cx='260' cy='180' r='4' fill='#1e3a5f'/></svg>",
            legende: "Chaque appareil a sa propre branche entre les deux fils principaux."
          },
          {
            type: "exemple",
            titre: "Le soir chez toi",
            texte: "Le soir, mama allume la lampe de la salle à manger pendant que la radio joue dans la cuisine et que le téléphone charge dans la chambre. Trois appareils, trois boucles indépendantes, une seule source d'électricité."
          },
          {
            type: "remarque",
            titre: "Et l'interrupteur ?",
            texte: "Chaque appareil a son propre interrupteur sur sa propre branche : tu commandes la lampe sans toucher à la télé. C'est l'indépendance complète."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un montage en dérivation ? Combien de boucles comporte-t-il ?",
        correction: "Dans un montage en dérivation (ou en parallèle), les dipôles sont branchés sur des boucles différentes. Le circuit comporte plusieurs boucles."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un nœud dans un circuit électrique ?",
        correction: "Un nœud est un point commun à plusieurs boucles. C'est là que le courant se sépare ou se rassemble. Sur les schémas, on les note souvent M et N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un circuit en dérivation avec deux lampes, on dévisse la lampe 1.\n1. La lampe 1 s'éteint-elle ?\n2. La lampe 2 s'éteint-elle ?\n3. Explique pourquoi.",
        correction: "1. Oui, la lampe 1 s'éteint : sa branche est ouverte.\n2. Non, la lampe 2 continue de briller.\n3. En dérivation, chaque lampe a sa propre boucle. La boucle de la lampe 2 reste fermée : le courant continue d'y circuler."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Recopie et complète :\nLa branche principale est celle qui contient le ........\nLes branches ........ sont les autres boucles.\nDans la maison, tous les appareils sont montés en ........",
        correction: "La branche principale est celle qui contient le générateur (la pile).\nLes branches dérivées sont les autres boucles.\nDans la maison, tous les appareils sont montés en dérivation."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Voici deux circuits alimentés par la même pile : un circuit série avec deux lampes, et un circuit en dérivation avec deux lampes.\nPour chaque circuit, dis ce qui se passe quand on dévisse une lampe, puis conclus : quel montage est le plus pratique pour éclairer une maison ?",
        correction: "Circuit série : si on dévisse une lampe, le circuit s'ouvre et les deux lampes s'éteignent (une seule boucle).\nCircuit en dérivation : si on dévisse une lampe, l'autre continue de briller (chaque lampe a sa boucle).\nConclusion : le montage en dérivation est le plus pratique pour une maison, car les lampes sont indépendantes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur le schéma d'un circuit en dérivation, repère :\n1. Les deux nœuds M et N.\n2. La branche principale.\n3. Les branches dérivées.\n4. Décris le trajet du courant, de la borne + de la pile à la borne −.",
        correction: "1. Les nœuds M et N sont les deux points où les fils se séparent puis se rejoignent (points noirs sur le schéma).\n2. La branche principale est celle qui contient la pile.\n3. Les branches dérivées sont les boucles qui contiennent chacune une lampe.\n4. Le courant part de la borne +, arrive au nœud M, se partage entre les branches dérivées (une partie dans chaque lampe), se rassemble au nœud N, et revient à la borne − de la pile."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici l'installation électrique d'une maison : une batterie, trois lampes (salon, cuisine, chambre) et une radio.\n1. Explique pourquoi ces appareils doivent être montés en dérivation et pas en série. Donne deux raisons.\n2. Dessine le schéma simplifié : la batterie, deux lampes et la radio en dérivation.\n3. La lampe du salon grille. Que se passe-t-il dans les autres pièces ?",
        correction: "1. En dérivation car : chaque appareil est indépendant (on peut allumer la radio sans la lampe) et une panne sur un appareil n'arrête pas les autres. De plus, chaque appareil éclaire ou fonctionne avec la même force.\n2. Schéma : deux fils principaux verticaux (ou horizontaux), avec trois branches en parallèle entre eux : lampe salon, lampe cuisine, radio. La batterie sur la branche principale. Nœuds bien marqués par des points.\n3. Rien ne change : la lampe de la cuisine et la radio continuent de fonctionner normalement, car leurs boucles restent fermées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici quatre affirmations. Pour chacune, dis si elle est vraie ou fausse et justifie.\n1. « En dérivation, plus on ajoute de lampes, plus elles éclairent faiblement. »\n2. « Un nœud est un point commun à plusieurs boucles. »\n3. « En dérivation, chaque dipôle fonctionne indépendamment. »\n4. « Chez toi, la télé et la lampe sont montées en série. »",
        correction: "1. Faux : c'est en série que l'éclat diminue. En dérivation, chaque lampe garde le même éclat quand on en ajoute.\n2. Vrai : c'est la définition du nœud (points M et N).\n3. Vrai : chaque dipôle a sa propre boucle, il ne dépend pas des autres.\n4. Faux : dans une maison, tous les appareils sont montés en dérivation, sinon éteindre la lampe couperait la télé !"
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch7.js =====
