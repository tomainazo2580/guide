// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-serie",
    titre: "Chapitre 6 : Le montage en série",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-serie-def",
        titre: "Qu'est-ce qu'un montage en série ?",
        blocs: [
          {
            type: "exemple",
            titre: "La guirlande de fête",
            texte: "Pendant les fêtes, certaines guirlandes s'éteignent entièrement quand une seule ampoule grille. Pourquoi ? Parce que leurs lampes sont montées en série."
          },
          {
            type: "definition",
            titre: "Le montage en série",
            texte: "Dans un montage en série, les dipôles sont branchés à la suite les uns des autres, sur une seule boucle. Le courant traverse les dipôles l'un après l'autre."
          },
          {
            type: "schema",
            titre: "Un circuit série avec deux lampes",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><rect x='80' y='30' width='200' height='160' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='95' x2='66' y2='120' stroke='#1e3a5f' stroke-width='2'/><line x1='60' y1='95' x2='72' y2='95' stroke='#1e3a5f' stroke-width='2'/><line x1='68' y1='120' x2='68' y2='120' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='95' x2='80' y2='30' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='120' x2='80' y2='190' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='83' x2='66' y2='107' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='89' x2='74' y2='101' stroke='#1e3a5f' stroke-width='4'/><line x1='74' y1='95' x2='80' y2='95' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='120' x2='80' y2='120' stroke='#1e3a5f' stroke-width='2'/><circle cx='130' cy='30' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='121' y1='21' x2='139' y2='39' stroke='#1e3a5f' stroke-width='2'/><line x1='121' y1='39' x2='139' y2='21' stroke='#1e3a5f' stroke-width='2'/><text x='145' y='26' font-size='12' fill='#1e3a5f'>Lampe 1</text><circle cx='230' cy='30' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='221' y1='21' x2='239' y2='39' stroke='#1e3a5f' stroke-width='2'/><line x1='221' y1='39' x2='239' y2='21' stroke='#1e3a5f' stroke-width='2'/><text x='245' y='26' font-size='12' fill='#1e3a5f'>Lampe 2</text><circle cx='235' cy='190' r='3' fill='#1e3a5f'/><circle cx='200' cy='190' r='3' fill='#1e3a5f'/><line x1='200' y1='190' x2='155' y2='190' stroke='#1e3a5f' stroke-width='2'/><line x1='203' y1='190' x2='233' y2='178' stroke='#1e3a5f' stroke-width='2'/><text x='245' y='195' font-size='12' fill='#1e3a5f'>Interrupteur</text><text x='52' y='90' font-size='13' fill='#1e3a5f'>+</text><text x='52' y='135' font-size='13' fill='#1e3a5f'>-</text></svg>",
            legende: "Une seule boucle : pile, lampe 1, lampe 2, interrupteur, l'un après l'autre."
          },
          {
            type: "regle",
            titre: "Le critère pour reconnaître un circuit série",
            texte: "Suis le circuit du doigt en partant de la pile : si tu traverses tous les dipôles sans jamais avoir le choix du chemin, c'est un montage en série. Une seule boucle, pas de croisement."
          },
          {
            type: "remarque",
            titre: "L'ordre n'a pas d'importance",
            texte: "Pile - lampe - interrupteur ou pile - interrupteur - lampe : c'est le même circuit série. L'ordre des dipôles sur la boucle ne change rien au fonctionnement."
          }
        ]
      },
      {
        id: "sp6-serie-inconvenients",
        titre: "Les inconvénients du montage série",
        blocs: [
          {
            type: "regle",
            titre: "Premier inconvénient : tout ou rien",
            texte: "Si on dévisse une lampe (ou si elle grille), le circuit s'ouvre : TOUTES les lampes s'éteignent. Dans un circuit série, une seule panne arrête tout."
          },
          {
            type: "regle",
            titre: "Deuxième inconvénient : l'éclat diminue",
            texte: "Plus on ajoute de lampes en série, plus elles éclairent faiblement. Le courant produit par la pile doit se partager entre toutes les lampes."
          },
          {
            type: "schema",
            titre: "L'éclat diminue",
            svg: "<svg viewBox='0 0 340 130' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='55' r='16' fill='#fde047' stroke='#1e3a5f' stroke-width='2'/><line x1='52' y1='47' x2='68' y2='63' stroke='#1e3a5f' stroke-width='2'/><line x1='52' y1='63' x2='68' y2='47' stroke='#1e3a5f' stroke-width='2'/><text x='60' y='100' text-anchor='middle' font-size='12' fill='#1e3a5f'>1 lampe :</text><text x='60' y='116' text-anchor='middle' font-size='12' fill='#1e3a5f'>eclat vif</text><circle cx='185' cy='55' r='16' fill='#fef08a' stroke='#1e3a5f' stroke-width='2'/><line x1='177' y1='47' x2='193' y2='63' stroke='#1e3a5f' stroke-width='2'/><line x1='177' y1='63' x2='193' y2='47' stroke='#1e3a5f' stroke-width='2'/><circle cx='235' cy='55' r='16' fill='#fef08a' stroke='#1e3a5f' stroke-width='2'/><line x1='227' y1='47' x2='243' y2='63' stroke='#1e3a5f' stroke-width='2'/><line x1='227' y1='63' x2='243' y2='47' stroke='#1e3a5f' stroke-width='2'/><text x='210' y='100' text-anchor='middle' font-size='12' fill='#1e3a5f'>2 lampes :</text><text x='210' y='116' text-anchor='middle' font-size='12' fill='#1e3a5f'>eclat faible</text><circle cx='305' cy='55' r='16' fill='#fefce8' stroke='#1e3a5f' stroke-width='2'/><line x1='297' y1='47' x2='313' y2='63' stroke='#1e3a5f' stroke-width='2'/><line x1='297' y1='63' x2='313' y2='47' stroke='#1e3a5f' stroke-width='2'/><text x='305' y='100' text-anchor='middle' font-size='12' fill='#1e3a5f'>3 lampes :</text><text x='305' y='116' text-anchor='middle' font-size='12' fill='#1e3a5f'>tres faible</text></svg>",
            legende: "Avec la même pile, chaque lampe ajoutée rend toutes les lampes plus faibles."
          },
          {
            type: "tableau",
            titre: "Résumé des inconvénients",
            entetes: ["Situation", "Conséquence"],
            lignes: [
              ["On dévisse une lampe", "Toutes les lampes s'éteignent"],
              ["Une lampe grille", "Toutes les lampes s'éteignent"],
              ["Un dipôle est détérioré", "Il agit comme un interrupteur ouvert, quelle que soit sa position"],
              ["On ajoute une lampe", "Toutes les lampes éclairent moins"]
            ]
          },
          {
            type: "exemple",
            titre: "L'expérience en classe",
            texte: "Monte une pile et deux lampes en série : les lampes brillent faiblement. Dévisse l'une d'elles : l'autre s'éteint aussitôt, alors qu'elle n'est pas grillée."
          },
          {
            type: "remarque",
            titre: "C'est pour cela que...",
            texte: "...on n'installe jamais les lampes d'une maison en série. Sinon, une ampoule grillée plongerait toute la maison dans le noir !"
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-serie-lampe-devisee",
        titre: "Lampe dévissée, lampe grillée",
        blocs: [
          {
            type: "definition",
            titre: "Dévisser une lampe",
            texte: "Dévisser une lampe, c'est la sortir de sa douille : le contact est rompu à cet endroit. C'est comme si on ouvrait un interrupteur à cet endroit précis."
          },
          {
            type: "definition",
            titre: "Lampe grillée",
            texte: "Une lampe est grillée quand son filament est coupé à l'intérieur. Le courant ne peut plus la traverser : c'est aussi une coupure du circuit."
          },
          {
            type: "regle",
            titre: "La règle en série",
            texte: "Dans un montage en série, un dipôle détérioré agit comme un interrupteur ouvert, quelle que soit sa position dans le circuit."
          },
          {
            type: "schema",
            titre: "Une lampe dévissée",
            svg: "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='30' width='200' height='140' fill='none' stroke='#1e3a5f' stroke-width='2'/><circle cx='140' cy='30' r='13' fill='#e2e8f0' stroke='#1e3a5f' stroke-width='2'/><line x1='131' y1='21' x2='149' y2='39' stroke='#1e3a5f' stroke-width='2'/><line x1='131' y1='39' x2='149' y2='21' stroke='#1e3a5f' stroke-width='2'/><circle cx='220' cy='30' r='13' fill='#e2e8f0' stroke='#dc2626' stroke-width='2' stroke-dasharray='4 3'/><line x1='211' y1='21' x2='229' y2='39' stroke='#dc2626' stroke-width='2'/><line x1='211' y1='39' x2='229' y2='21' stroke='#dc2626' stroke-width='2'/><text x='243' y='26' font-size='12' fill='#dc2626'>Grillee</text><line x1='262' y1='15' x2='276' y2='5' stroke='#dc2626' stroke-width='2'/><line x1='264' y1='10' x2='280' y2='10' stroke='#dc2626' stroke-width='2'/><text x='170' y='196' text-anchor='middle' font-size='13' fill='#1e3a5f'>Les deux lampes sont eteintes</text></svg>",
            legende: "Une seule lampe grillée suffit : le circuit est ouvert, tout s'éteint."
          },
          {
            type: "exemple",
            titre: "Chercher la panne",
            texte: "Sur une guirlande en série qui ne s'allume plus, on teste les lampes une par une pour trouver celle qui est grillée : c'est elle qui a ouvert le circuit."
          },
          {
            type: "remarque",
            titre: "Bonne nouvelle quand même",
            texte: "Quand on remplace la lampe grillée (ou qu'on revisse la lampe dévissée), le circuit se referme : toutes les lampes se rallument."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-serie-court-circuit",
        titre: "Le court-circuit",
        blocs: [
          {
            type: "definition",
            titre: "Court-circuiter une lampe",
            texte: "Court-circuiter une lampe, c'est brancher un fil directement entre ses deux bornes. Le courant préfère passer par ce fil plutôt que par la lampe."
          },
          {
            type: "regle",
            titre: "Ce qui se passe",
            texte: "Dans un circuit série à deux lampes, si on court-circuite l'une des lampes :\n1. La lampe court-circuitée s'éteint.\n2. L'autre lampe brille plus fort qu'avant.\nLe courant passe par le fil de dérivation au lieu de traverser la lampe."
          },
          {
            type: "schema",
            titre: "Le court-circuit",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='60' width='220' height='130' fill='none' stroke='#1e3a5f' stroke-width='2'/><circle cx='130' cy='60' r='13' fill='#fde047' stroke='#1e3a5f' stroke-width='2'/><line x1='131' y1='51' x2='149' y2='69' stroke='#1e3a5f' stroke-width='2'/><line x1='131' y1='69' x2='149' y2='51' stroke='#1e3a5f' stroke-width='2'/><text x='160' y='56' font-size='12' fill='#1e3a5f'>Lampe 1 : brille fort</text><circle cx='230' cy='60' r='13' fill='#e2e8f0' stroke='#1e3a5f' stroke-width='2'/><line x1='221' y1='51' x2='239' y2='69' stroke='#1e3a5f' stroke-width='2'/><line x1='221' y1='69' x2='239' y2='51' stroke='#1e3a5f' stroke-width='2'/><text x='250' y='56' font-size='12' fill='#1e3a5f'>Lampe 2 : eteinte</text><line x1='217' y1='60' x2='217' y2='20' stroke='#dc2626' stroke-width='3'/><line x1='243' y1='60' x2='243' y2='20' stroke='#dc2626' stroke-width='3'/><line x1='217' y1='20' x2='243' y2='20' stroke='#dc2626' stroke-width='3'/><text x='230' y='13' text-anchor='middle' font-size='12' fill='#dc2626'>Fil de derivation</text><line x1='230' y1='20' x2='230' y2='34' stroke='#dc2626' stroke-width='3'/><polygon points='230,38 226,28 234,28' fill='#dc2626'/></svg>",
            legende: "Le fil rouge offre un chemin plus facile : le courant passe par lui, la lampe 2 est court-circuitée."
          },
          {
            type: "exemple",
            titre: "L'expérience",
            texte: "Monte une pile et deux lampes en série : les deux brillent faiblement. Relie les deux bornes de la lampe 2 avec un fil : la lampe 2 s'éteint et la lampe 1 brille plus fort, presque comme si elle était seule."
          },
          {
            type: "remarque",
            titre: "Pourquoi la lampe 1 brille plus fort ?",
            texte: "Le courant ne traverse plus qu'une seule lampe au lieu de deux : il circule plus facilement, il est plus fort, et la lampe 1 reçoit toute l'énergie."
          },
          {
            type: "remarque",
            titre: "Danger",
            texte: "Attention : ne court-circuite jamais la pile elle-même (un fil direct entre + et −) ! La pile chauffe, s'use très vite, et peut être abîmée. Le court-circuit ne se fait que sur une lampe, le temps d'une expérience."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un montage en série ? Combien de boucles comporte-t-il ?",
        correction: "Dans un montage en série, les dipôles sont branchés à la suite les uns des autres. Il ne comporte qu'une seule boucle : le courant traverse les dipôles l'un après l'autre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un circuit série avec deux lampes, on dévisse l'une des lampes.\nQue se passe-t-il ? Pourquoi ?",
        correction: "Les deux lampes s'éteignent.\nDévisser une lampe ouvre le circuit (comme un interrupteur ouvert). Dans un circuit série, il n'y a qu'une seule boucle : plus de courant nulle part."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On monte une pile et une lampe : la lampe brille normalement. On ajoute une deuxième lampe en série, puis une troisième.\nDécris l'éclat des lampes et explique pourquoi.",
        correction: "Avec deux lampes, l'éclat devient faible. Avec trois lampes, il devient très faible.\nExplication : plus on ajoute de lampes en série, plus elles éclairent faiblement, car le courant produit par la pile doit se partager entre toutes les lampes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Vrai ou faux ? Justifie chaque réponse.\n1. Dans un circuit série, l'ordre des dipôles change le fonctionnement du circuit.\n2. Une lampe grillée dans un circuit série arrête tout le circuit.\n3. Un dipôle détérioré agit comme un interrupteur fermé.",
        correction: "1. Faux : l'ordre des dipôles sur la boucle ne change rien, c'est le même circuit série.\n2. Vrai : la lampe grillée a son filament coupé, le circuit est ouvert, tout s'éteint.\n3. Faux : il agit comme un interrupteur OUVERT, quelle que soit sa position."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une guirlande de 12 petites lampes en série ne s'allume plus.\n1. Quelle est la cause la plus probable ?\n2. Comment retrouver la lampe en panne ?\n3. Pourquoi les 11 autres lampes sont-elles éteintes alors qu'elles ne sont pas grillées ?",
        correction: "1. Une des 12 lampes est grillée (ou dévissée) : elle a ouvert le circuit.\n2. On teste les lampes une par une (ou on les resserre une par une) jusqu'à trouver celle qui est en panne.\n3. Dans un circuit série, il n'y a qu'une boucle. La panne coupe cette boucle unique : le courant ne circule plus nulle part, donc toutes les lampes s'éteignent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un circuit série (pile + deux lampes), on court-circuite la lampe 2 avec un fil branché entre ses deux bornes.\n1. Que devient la lampe 2 ?\n2. Que devient la lampe 1 ?\n3. Explique pourquoi.",
        correction: "1. La lampe 2 s'éteint : le courant passe par le fil de dérivation au lieu de la traverser.\n2. La lampe 1 brille plus fort qu'avant.\n3. Le courant ne traverse plus qu'une seule lampe au lieu de deux : il circule plus facilement dans la boucle, il est plus fort, et la lampe 1 reçoit toute l'énergie de la pile."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Bako veut éclairer deux pièces de la maison avec une batterie et deux lampes. Son petit frère propose un montage en série.\n1. Dessine le schéma du montage série (batterie, interrupteur, deux lampes).\n2. Cite deux inconvénients de ce montage pour une maison.\n3. Boni, le voisin électricien, déconseille ce montage. A-t-il raison ? Justifie.",
        correction: "1. Schéma : un rectangle avec la pile (grand trait fin = +), l'interrupteur et les deux lampes à la suite, une seule boucle, fils horizontaux et verticaux.\n2. Inconvénients : si une lampe grille, les deux pièces sont dans le noir ; et les deux lampes éclairent plus faiblement qu'une lampe seule.\n3. Oui, Boni a raison : pour une maison, le montage série n'est pas pratique (tout s'éteint à la première panne). On verra au chapitre 7 que dans les maisons, on utilise le montage en dérivation."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici trois affirmations de l'expérience du court-circuit. Pour chacune, dis si elle est vraie ou fausse et justifie.\n1. « Court-circuiter une lampe, c'est brancher un fil entre ses deux bornes. »\n2. « Dans un circuit série à deux lampes, si on court-circuite la lampe 1, la lampe 2 brille plus fort. »\n3. « On peut court-circuiter la pile elle-même sans danger. »",
        correction: "1. Vrai : le fil branché entre les deux bornes offre un chemin plus facile au courant, qui ne traverse plus la lampe.\n2. Vrai : la lampe 1 s'éteint et la lampe 2 brille plus fort, car le courant ne traverse plus qu'une seule lampe.\n3. Faux : c'est dangereux ! Un fil direct entre le + et le − de la pile la fait chauffer, l'use très vite et peut l'abîmer. On ne court-circuite qu'une lampe, le temps d'une expérience."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch6.js =====
