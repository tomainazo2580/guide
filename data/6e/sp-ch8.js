// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-intensite-tension",
    titre: "Chapitre 8 : Intensité et tension",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-intensite-def",
        titre: "L'intensité du courant",
        blocs: [
          {
            type: "exemple",
            titre: "Le débit de la rivière",
            texte: "Une rivière a un débit : beaucoup d'eau ou peu d'eau qui passe chaque seconde. Le courant électrique, lui aussi, a une « force » : beaucoup ou peu de courant qui passe dans les fils. Cette force s'appelle l'intensité."
          },
          {
            type: "definition",
            titre: "L'intensité",
            texte: "L'intensité du courant électrique mesure la quantité de courant qui circule dans le circuit. On la note I."
          },
          {
            type: "regle",
            titre: "L'unité et l'appareil",
            texte: "L'unité d'intensité est l'ampère, de symbole A.\nOn mesure l'intensité avec un ampèremètre.\nOn utilise aussi le milliampère : 1 A = 1000 mA et 1 mA = 0,001 A."
          },
          {
            type: "schema",
            titre: "Le symbole de l'ampèremètre",
            svg: "<svg viewBox='0 0 340 110' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='55' x2='120' y2='55' stroke='#1e3a5f' stroke-width='2'/><circle cx='150' cy='55' r='28' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><text x='150' y='64' text-anchor='middle' font-size='24' font-weight='bold' fill='#1e3a5f'>A</text><line x1='180' y1='55' x2='260' y2='55' stroke='#1e3a5f' stroke-width='2'/><text x='150' y='103' text-anchor='middle' font-size='13' fill='#1e3a5f'>Amperemetre</text></svg>",
            legende: "Sur les schémas, l'ampèremètre est un cercle avec la lettre A."
          },
          {
            type: "exemple",
            titre: "Des intensités autour de toi",
            texte: "Une DEL de téléphone : quelques milliampères (mA).\nUne lampe de la maison : quelques centaines de mA.\nUn fer à repasser : plusieurs ampères (A)."
          },
          {
            type: "remarque",
            titre: "Le sens du courant",
            texte: "Souviens-toi du chapitre 5 : par convention, le courant circule de la borne + vers la borne − du générateur, à l'extérieur. L'intensité mesure ce courant."
          }
        ]
      },
      {
        id: "sp6-intensite-mesure",
        titre: "Mesurer l'intensité : l'ampèremètre en série",
        blocs: [
          {
            type: "regle",
            titre: "La règle d'or",
            texte: "L'ampèremètre se branche TOUJOURS en série dans le circuit. On l'insère dans la boucle, comme un dipôle de plus, pour que le courant le traverse."
          },
          {
            type: "schema",
            titre: "L'ampèremètre dans le circuit",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='30' width='200' height='150' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='62' y1='95' x2='62' y2='120' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='83' x2='66' y2='107' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='89' x2='74' y2='101' stroke='#1e3a5f' stroke-width='4'/><line x1='70' y1='95' x2='74' y2='95' stroke='#1e3a5f' stroke-width='2'/><text x='45' y='90' font-size='13' fill='#1e3a5f'>+</text><text x='45' y='125' font-size='13' fill='#1e3a5f'>-</text><circle cx='170' cy='30' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='21' x2='179' y2='39' stroke='#1e3a5f' stroke-width='2'/><line x1='161' y1='39' x2='179' y2='21' stroke='#1e3a5f' stroke-width='2'/><text x='195' y='26' font-size='12' fill='#1e3a5f'>Lampe</text><circle cx='170' cy='180' r='20' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><text x='170' y='188' text-anchor='middle' font-size='18' font-weight='bold' fill='#1e3a5f'>A</text><text x='205' y='185' font-size='12' fill='#dc2626'>En serie :</text><text x='205' y='200' font-size='12' fill='#dc2626'>dans la boucle</text></svg>",
            legende: "L'ampèremètre est inséré dans la boucle : le même courant le traverse."
          },
          {
            type: "methode",
            titre: "Comment brancher l'ampèremètre",
            texte: "1. Ouvre le circuit à l'endroit où tu veux mesurer (débranche un fil).\n2. Insère l'ampèremètre à cet endroit, comme un maillon de la chaîne.\n3. Referme la boucle : le courant traverse maintenant l'ampèremètre.\n4. Lis la valeur affichée."
          },
          {
            type: "exemple",
            titre: "La mesure en classe",
            texte: "Dans un circuit pile + lampe, on ouvre la boucle entre la lampe et la pile, on insère l'ampèremètre : il affiche I = 0,15 A, soit 150 mA. C'est l'intensité qui traverse la lampe."
          },
          {
            type: "remarque",
            titre: "Pourquoi en série ?",
            texte: "En série, le même courant passe partout dans la boucle : en traversant l'ampèremètre, il lui montre exactement sa valeur."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-tension-def",
        titre: "La tension électrique",
        blocs: [
          {
            type: "exemple",
            titre: "Sur la pile",
            texte: "Regarde une pile : elle porte une inscription comme 1,5 V ou 4,5 V. Sur une batterie de voiture : 12 V. Ce V, c'est le volt : l'unité de la tension."
          },
          {
            type: "definition",
            titre: "La tension",
            texte: "La tension électrique est ce qui pousse le courant dans le circuit. Elle existe entre les deux bornes d'un dipôle. On la note U."
          },
          {
            type: "regle",
            titre: "L'unité et l'appareil",
            texte: "L'unité de tension est le volt, de symbole V.\nOn mesure la tension avec un voltmètre."
          },
          {
            type: "schema",
            titre: "Le symbole du voltmètre",
            svg: "<svg viewBox='0 0 340 110' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='55' x2='120' y2='55' stroke='#1e3a5f' stroke-width='2'/><circle cx='150' cy='55' r='28' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><text x='150' y='64' text-anchor='middle' font-size='24' font-weight='bold' fill='#1e3a5f'>V</text><line x1='180' y1='55' x2='260' y2='55' stroke='#1e3a5f' stroke-width='2'/><text x='150' y='103' text-anchor='middle' font-size='13' fill='#1e3a5f'>Voltmetre</text></svg>",
            legende: "Sur les schémas, le voltmètre est un cercle avec la lettre V."
          },
          {
            type: "tableau",
            titre: "Des tensions autour de toi",
            entetes: ["Source", "Tension"],
            lignes: [
              ["Pile plate (télécommande)", "4,5 V"],
              ["Pile ronde (torche)", "1,5 V"],
              ["Batterie de voiture", "12 V"],
              ["Prise de la maison", "220 V"]
            ]
          },
          {
            type: "remarque",
            titre: "Deux grandeurs, deux rôles",
            texte: "Ne confonds pas : la tension pousse le courant (elle existe même circuit ouvert, entre les bornes de la pile). L'intensité mesure le courant qui circule (il faut un circuit fermé)."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-tension-mesure",
        titre: "Mesurer la tension : le voltmètre en parallèle",
        blocs: [
          {
            type: "regle",
            titre: "La règle d'or",
            texte: "Le voltmètre se branche TOUJOURS en parallèle (en dérivation) aux bornes du dipôle dont on veut mesurer la tension. Sa borne COM se branche du côté du pôle négatif (−) du générateur."
          },
          {
            type: "schema",
            titre: "Le voltmètre aux bornes de la lampe",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='40' width='200' height='150' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='62' y1='105' x2='62' y2='130' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='93' x2='66' y2='117' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='99' x2='74' y2='111' stroke='#1e3a5f' stroke-width='4'/><text x='45' y='100' font-size='13' fill='#1e3a5f'>+</text><text x='45' y='135' font-size='13' fill='#1e3a5f'>-</text><circle cx='270' cy='115' r='13' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='261' y1='106' x2='279' y2='124' stroke='#1e3a5f' stroke-width='2'/><line x1='261' y1='124' x2='279' y2='106' stroke='#1e3a5f' stroke-width='2'/><text x='292' y='112' font-size='12' fill='#1e3a5f'>Lampe</text><line x1='150' y1='102' x2='150' y2='128' stroke='#1e88e5' stroke-width='2'/><circle cx='150' cy='115' r='18' fill='#ffffff' stroke='#1e88e5' stroke-width='2'/><text x='150' y='122' text-anchor='middle' font-size='16' font-weight='bold' fill='#1e88e5'>V</text><line x1='150' y1='97' x2='150' y2='40' stroke='#1e88e5' stroke-width='2'/><line x1='150' y1='133' x2='150' y2='190' stroke='#1e88e5' stroke-width='2'/><line x1='150' y1='102' x2='150' y2='102' stroke='#1e88e5' stroke-width='2'/><text x='100' y='220' font-size='12' fill='#1e88e5'>COM du cote du pole - de la pile</text></svg>",
            legende: "Le voltmètre est branché sur une boucle à part, aux bornes de la lampe."
          },
          {
            type: "methode",
            titre: "Comment brancher le voltmètre",
            texte: "1. Laisse le circuit fermé : on n'ouvre rien.\n2. Relie une borne du voltmètre à chaque borne du dipôle (la lampe, par exemple).\n3. La borne COM du voltmètre va du côté du pôle − du générateur.\n4. Lis la tension affichée."
          },
          {
            type: "tableau",
            titre: "Ampèremètre ou voltmètre ?",
            entetes: ["Question", "Ampèremètre", "Voltmètre"],
            lignes: [
              ["Que mesure-t-il ?", "L'intensité I (en A)", "La tension U (en V)"],
              ["Comment se branche-t-il ?", "En série", "En parallèle"],
              ["Faut-il ouvrir le circuit ?", "Oui", "Non"],
              ["Borne COM", "-", "Du côté du pôle − de la pile"]
            ]
          },
          {
            type: "remarque",
            titre: "L'astuce pour ne pas confondre",
            texte: "Ampèremètre : le courant doit le TRAVERSER → en série. Voltmètre : il regarde la tension AUX BORNES → en parallèle, comme un témoin."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète :\nL'intensité du courant se mesure avec un ........ et son unité est l'........, de symbole ........",
        correction: "L'intensité du courant se mesure avec un ampèremètre et son unité est l'ampère, de symbole A."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis :\n1. 2 A en mA\n2. 500 mA en A\n3. 0,25 A en mA",
        correction: "1. 2 A = 2 000 mA (on multiplie par 1 000).\n2. 500 mA = 0,5 A (on divise par 1 000).\n3. 0,25 A = 250 mA.\nRappel : 1 A = 1 000 mA et 1 mA = 0,001 A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Comment branche-t-on un ampèremètre dans un circuit ? Explique la méthode et dis pourquoi on procède ainsi.",
        correction: "On branche l'ampèremètre en série : on ouvre le circuit à l'endroit choisi, on insère l'ampèremètre comme un maillon de la chaîne, puis on referme la boucle.\nAinsi, le courant traverse l'ampèremètre : en série, le même courant passe partout dans la boucle, donc l'appareil mesure exactement l'intensité du circuit."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur une pile ronde, on lit « 1,5 V ».\n1. Que représente cette inscription ?\n2. Quel est le nom de cette unité ?\n3. Avec quel appareil mesure-t-on cette grandeur ?",
        correction: "1. C'est la tension entre les bornes de la pile.\n2. Le volt, de symbole V.\n3. On la mesure avec un voltmètre, branché en parallèle aux bornes de la pile."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On veut mesurer la tension aux bornes d'une lampe dans un circuit fermé.\n1. Comment branche-t-on le voltmètre ?\n2. Où place-t-on la borne COM ?\n3. Faut-il ouvrir le circuit ? Pourquoi ?",
        correction: "1. On branche le voltmètre en parallèle : une borne de l'appareil sur chaque borne de la lampe.\n2. La borne COM se branche du côté du pôle négatif (−) du générateur.\n3. Non, on n'ouvre pas le circuit : le voltmètre se contente de « regarder » la tension aux bornes de la lampe pendant que le courant continue de circuler."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Voici quatre affirmations. Dis si chacune est vraie ou fausse, et corrige les fausses.\n1. L'ampèremètre se branche en parallèle.\n2. Le voltmètre se branche en parallèle.\n3. 1 V = 1 000 mV.\n4. L'unité de tension est l'ampère.",
        correction: "1. Faux : l'ampèremètre se branche en SÉRIE (le courant doit le traverser).\n2. Vrai : le voltmètre se branche en parallèle aux bornes du dipôle.\n3. Vrai : 1 V = 1 000 mV.\n4. Faux : l'unité de tension est le VOLT (V). L'ampère (A) est l'unité d'intensité."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un circuit (pile 4,5 V, interrupteur, lampe), on veut mesurer l'intensité qui traverse la lampe ET la tension à ses bornes.\n1. Dessine le schéma du circuit avec l'ampèremètre bien placé.\n2. Ajoute le voltmètre au bon endroit sur le schéma.\n3. L'ampèremètre affiche 0,2 A : donne cette valeur en mA.\n4. Le voltmètre affiche 4,4 V : que représente cette valeur ?",
        correction: "1. Schéma : rectangle avec la pile, l'interrupteur, la lampe, et l'ampèremètre (cercle avec A) inséré en série dans la boucle.\n2. Le voltmètre (cercle avec V) est branché en parallèle : deux fils partent des bornes de la lampe vers le voltmètre. Borne COM du côté du pôle − de la pile.\n3. 0,2 A = 200 mA.\n4. 4,4 V est la tension aux bornes de la lampe (presque égale à celle de la pile, 4,5 V)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Rado et Voahangy font des mesures sur le même circuit (pile + lampe).\nRado branche son ampèremètre en parallèle aux bornes de la lampe. Voahangy branche son voltmètre en série dans la boucle.\n1. Qui a raison ? Qui s'est trompé ?\n2. Pour chacun, dis ce qu'il faut faire pour mesurer correctement.\n3. Complète : un ampèremètre se branche en ........, un voltmètre se branche en ........",
        correction: "1. Aucun des deux n'a raison : ils se sont trompés tous les deux.\n2. Rado doit brancher son ampèremètre en SÉRIE : ouvrir la boucle et insérer l'appareil pour que le courant le traverse. Voahangy doit brancher son voltmètre en PARALLÈLE : deux fils aux bornes de la lampe, sans ouvrir le circuit, borne COM du côté du pôle − de la pile.\n3. Un ampèremètre se branche en série, un voltmètre se branche en parallèle."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch8.js =====
