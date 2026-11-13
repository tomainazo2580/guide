// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-aimants",
    titre: "Chapitre 9 : Les aimants et le magnétisme",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-aimants-decouverte",
        titre: "Découvrir les aimants",
        blocs: [
          {
            type: "exemple",
            titre: "L'aimant du frigo",
            texte: "Sur la porte du réfrigérateur, un petit aimant retient la liste des courses. Dans l'atelier du ferblantier, un aimant ramasse les clous tombés par terre. Ces objets sont des aimants."
          },
          {
            type: "definition",
            titre: "L'aimant",
            texte: "Un aimant est un objet qui attire le fer et certains métaux. Cette propriété s'appelle le magnétisme."
          },
          {
            type: "regle",
            titre: "Naturels ou artificiels",
            texte: "Il existe des aimants naturels : des pierres appelées magnétites, connues depuis l'Antiquité.\nLes aimants que tu utilises sont des aimants artificiels, fabriqués par l'homme : aimant droit (barreau) et aimant en U."
          },
          {
            type: "schema",
            titre: "Les formes d'aimants",
            svg: "<svg viewBox='0 0 340 140' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='45' width='65' height='34' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='95' y='45' width='65' height='34' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='62' y='67' text-anchor='middle' font-size='16' font-weight='bold' fill='#ffffff'>N</text><text x='127' y='67' text-anchor='middle' font-size='16' font-weight='bold' fill='#ffffff'>S</text><text x='95' y='105' text-anchor='middle' font-size='12' fill='#1e3a5f'>Aimant droit (barreau)</text><path d='M230 80 V45 H290 V80' fill='none' stroke='#94a3b8' stroke-width='16'/><rect x='222' y='72' width='16' height='16' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='282' y='72' width='16' height='16' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='230' y='104' text-anchor='middle' font-size='11' font-weight='bold' fill='#1e3a5f'>N</text><text x='290' y='104' text-anchor='middle' font-size='11' font-weight='bold' fill='#1e3a5f'>S</text><text x='260' y='130' text-anchor='middle' font-size='12' fill='#1e3a5f'>Aimant en U</text></svg>",
            legende: "Chaque aimant a deux pôles : le pôle N (nord) et le pôle S (sud)."
          },
          {
            type: "remarque",
            titre: "Chapitre complété par Guide",
            texte: "Le programme officiel annonce le magnétisme dans la thématique « Électricité et Magnétisme ». Ce chapitre est rédigé par Guide dans l'esprit du programme."
          }
        ]
      },
      {
        id: "sp6-aimants-attire",
        titre: "Ce que l'aimant attire",
        blocs: [
          {
            type: "definition",
            titre: "Matériaux magnétiques",
            texte: "L'aimant attire le fer et l'acier (l'acier est un métal qui contient du fer). On dit que ces matériaux sont magnétiques."
          },
          {
            type: "tableau",
            titre: "Attiré ou pas ?",
            entetes: ["Objet ou matériau", "Attiré par l'aimant ?"],
            lignes: [
              ["Clou en fer", "Oui"],
              ["Lame de couteau (acier)", "Oui"],
              ["Limaille de fer", "Oui"],
              ["Morceau de bois", "Non"],
              ["Règle en plastique", "Non"],
              ["Feuille d'aluminium", "Non"],
              ["Fil de cuivre", "Non"],
              ["Verre", "Non"]
            ]
          },
          {
            type: "schema",
            titre: "L'aimant attire le fer",
            svg: "<svg viewBox='0 0 340 120' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='40' width='45' height='28' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='65' y='40' width='45' height='28' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='42' y='59' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='87' y='59' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><line x1='122' y1='34' x2='136' y2='48' stroke='#475569' stroke-width='3'/><line x1='125' y1='56' x2='139' y2='70' stroke='#475569' stroke-width='3'/><text x='80' y='100' text-anchor='middle' font-size='12' fill='#1e3a5f'>Les clous en fer se collent a l'aimant</text><rect x='210' y='40' width='45' height='28' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='255' y='40' width='45' height='28' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='232' y='59' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='277' y='59' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><rect x='312' y='42' width='22' height='24' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='265' y='100' text-anchor='middle' font-size='12' fill='#1e3a5f'>Le bois reste a sa place</text></svg>",
            legende: "L'aimant attire les objets en fer, mais pas le bois ni le plastique."
          },
          {
            type: "exemple",
            titre: "L'astuce du ferblantier",
            texte: "Pour ramasser les clous mélangés à la sciure de bois, le ferblantier passe un aimant au-dessus du tas : les clous en fer se collent à l'aimant, la sciure reste par terre."
          },
          {
            type: "remarque",
            titre: "Attention aux pièces",
            texte: "Toutes les pièces de monnaie ne sont pas attirées par l'aimant : cela dépend du métal dont elles sont faites."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-aimants-poles",
        titre: "Les pôles d'un aimant",
        blocs: [
          {
            type: "definition",
            titre: "Les deux pôles",
            texte: "Tout aimant possède deux pôles : le pôle nord (N) et le pôle sud (S). C'est aux pôles que l'attraction est la plus forte."
          },
          {
            type: "regle",
            titre: "La règle des pôles",
            texte: "Deux pôles contraires (N et S) s'attirent.\nDeux pôles de même nom (N et N, ou S et S) se repoussent."
          },
          {
            type: "schema",
            titre: "Attraction et répulsion",
            svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><rect x='25' y='30' width='60' height='26' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='85' y='30' width='60' height='26' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='55' y='48' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='115' y='48' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><line x1='150' y1='43' x2='180' y2='43' stroke='#166534' stroke-width='3'/><polygon points='180,43 170,37 170,49' fill='#166534'/><line x1='220' y1='43' x2='190' y2='43' stroke='#166534' stroke-width='3'/><polygon points='190,43 200,37 200,49' fill='#166534'/><rect x='225' y='30' width='60' height='26' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='285' y='30' width='60' height='26' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='255' y='48' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='315' y='48' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><text x='185' y='80' text-anchor='middle' font-size='12' fill='#166534'>S face a N : ils s'attirent</text><rect x='25' y='120' width='60' height='26' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><rect x='85' y='120' width='60' height='26' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><text x='55' y='138' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='115' y='138' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><line x1='180' y1='133' x2='155' y2='133' stroke='#dc2626' stroke-width='3'/><polygon points='155,133 165,127 165,139' fill='#dc2626'/><line x1='190' y1='133' x2='215' y2='133' stroke='#dc2626' stroke-width='3'/><polygon points='215,133 205,127 205,139' fill='#dc2626'/><rect x='225' y='120' width='60' height='26' fill='#3b82f6' stroke='#1e3a5f' stroke-width='2'/><rect x='285' y='120' width='60' height='26' fill='#dc2626' stroke='#1e3a5f' stroke-width='2'/><text x='255' y='138' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>S</text><text x='315' y='138' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>N</text><text x='185' y='175' text-anchor='middle' font-size='12' fill='#dc2626'>S face a S : ils se repoussent</text></svg>",
            legende: "En haut : pôles contraires, attraction. En bas : mêmes pôles, répulsion."
          },
          {
            type: "exemple",
            titre: "L'expérience des deux barreaux",
            texte: "Approche le pôle N d'un premier aimant du pôle S d'un deuxième aimant : ils se collent. Retourne le deuxième aimant (N face à N) : tu sens une force qui les écarte, impossible de les coller."
          },
          {
            type: "remarque",
            titre: "Impossible d'isoler un pôle",
            texte: "Si tu casses un aimant en deux, chaque morceau a à nouveau un pôle N et un pôle S. On ne peut jamais obtenir un pôle tout seul."
          }
        ]
      },
      {
        id: "sp6-aimants-boussole",
        titre: "La boussole",
        blocs: [
          {
            type: "definition",
            titre: "La boussole",
            texte: "Une boussole est un instrument qui contient une petite aiguille aimantée, libre de tourner. Elle sert à s'orienter : l'aiguille indique toujours le nord."
          },
          {
            type: "schema",
            titre: "La boussole",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><circle cx='170' cy='105' r='70' fill='#f8fafc' stroke='#1e3a5f' stroke-width='3'/><circle cx='170' cy='105' r='58' fill='none' stroke='#94a3b8' stroke-width='1'/><text x='170' y='52' text-anchor='middle' font-size='15' font-weight='bold' fill='#dc2626'>N</text><text x='170' y='172' text-anchor='middle' font-size='15' font-weight='bold' fill='#1e3a5f'>S</text><text x='228' y='110' text-anchor='middle' font-size='13' fill='#1e3a5f'>E</text><text x='112' y='110' text-anchor='middle' font-size='13' fill='#1e3a5f'>O</text><polygon points='170,60 160,105 180,105' fill='#dc2626' stroke='#1e3a5f' stroke-width='1'/><polygon points='170,150 160,105 180,105' fill='#3b82f6' stroke='#1e3a5f' stroke-width='1'/><circle cx='170' cy='105' r='5' fill='#1e3a5f'/><text x='170' y='205' text-anchor='middle' font-size='12' fill='#1e3a5f'>L'aiguille rouge pointe vers le nord</text></svg>",
            legende: "N = nord, S = sud, E = est, O = ouest. L'extrémité rouge indique le nord."
          },
          {
            type: "regle",
            titre: "Pourquoi elle indique le nord",
            texte: "La Terre se comporte comme un énorme aimant. L'aiguille aimantée de la boussole s'aligne avec ce magnétisme : son pôle nord est attiré vers le nord."
          },
          {
            type: "exemple",
            titre: "À quoi ça sert ?",
            texte: "Le marin en mer, le randonneur dans la forêt, le chauffeur de taxi-brousse sur une piste inconnue : avec une boussole, ils retrouvent le nord, puis toutes les autres directions."
          },
          {
            type: "methode",
            titre: "S'orienter avec une boussole",
            texte: "1. Pose la boussole à plat, loin de tout aimant ou objet en fer.\n2. Attends que l'aiguille s'immobilise.\n3. Lis la direction : l'extrémité qui pointe le nord te donne toutes les autres directions (le sud derrière, l'est à droite, l'ouest à gauche)."
          },
          {
            type: "remarque",
            titre: "Une invention ancienne",
            texte: "Les marins utilisent la boussole depuis des siècles pour traverser les océans, bien avant les téléphones et le GPS."
          }
        ]
      }
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un aimant ? Cite deux objets attirés par un aimant.",
        correction: "Un aimant est un objet qui attire le fer et certains métaux (cette propriété s'appelle le magnétisme).\nObjets attirés : le clou en fer, la lame de couteau en acier, la limaille de fer."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment s'appellent les deux pôles d'un aimant ? Où l'attraction est-elle la plus forte ?",
        correction: "Les deux pôles sont le pôle nord (N) et le pôle sud (S).\nC'est aux pôles que l'attraction est la plus forte."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Voici six objets : un clou en fer, une règle en plastique, une lame de couteau en acier, un morceau de bois, un fil de cuivre, de la limaille de fer.\nLesquels sont attirés par l'aimant ? Justifie ta réponse.",
        correction: "Attirés : le clou en fer, la lame de couteau en acier et la limaille de fer, car l'aimant attire le fer et l'acier (qui contient du fer).\nPas attirés : la règle en plastique, le morceau de bois et le fil de cuivre : ces matériaux ne sont pas magnétiques."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Deux pôles contraires s'attirent.\n2. Deux pôles de même nom s'attirent.\n3. L'aimant attire le bois.\n4. En cassant un aimant en deux, on obtient un pôle nord tout seul.",
        correction: "1. Vrai : N et S s'attirent.\n2. Faux : deux pôles de même nom (N et N, ou S et S) se REPOUSSENT.\n3. Faux : l'aimant n'attire pas le bois (ni le plastique, ni le verre, ni le cuivre).\n4. Faux : chaque morceau a à nouveau un pôle N et un pôle S. On ne peut jamais isoler un pôle."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On approche deux aimants.\n1. Le pôle S du premier aimant fait face au pôle N du deuxième : que se passe-t-il ?\n2. On retourne le deuxième aimant : maintenant deux pôles N se font face. Que se passe-t-il ?\n3. Énonce la règle des pôles.",
        correction: "1. Les deux aimants s'attirent (pôles contraires).\n2. Les deux aimants se repoussent : on sent une force qui les écarte (pôles de même nom).\n3. Règle : deux pôles contraires s'attirent, deux pôles de même nom se repoussent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un randonneur s'est perdu dans la forêt. Il sort sa boussole.\n1. Qu'est-ce qu'une boussole ? Décris-la.\n2. Comment s'en sert-il pour retrouver sa direction ?\n3. Pourquoi l'aiguille indique-t-elle toujours le nord ?",
        correction: "1. Une boussole est un instrument qui contient une petite aiguille aimantée, libre de tourner.\n2. Il la pose à plat, attend que l'aiguille s'immobilise : l'extrémité qui indique le nord lui donne toutes les autres directions (sud derrière, est à droite, ouest à gauche).\n3. Parce que la Terre se comporte comme un énorme aimant : le pôle nord de l'aiguille est attiré vers le nord."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans son atelier, le ferblantier a renversé une boîte : des clous en fer sont mélangés à de la sciure de bois.\n1. Propose une méthode pour séparer les clous de la sciure, sans trier à la main.\n2. Explique pourquoi cette méthode fonctionne.\n3. Cette méthode marcherait-elle pour séparer du sable et des copeaux de cuivre ? Pourquoi ?",
        correction: "1. On passe un aimant au-dessus du mélange (ou on le promène dedans) : les clous se collent à l'aimant, on les retire, et on recommence.\n2. L'aimant attire le fer des clous, mais pas le bois de la sciure : seuls les clous sont magnétiques.\n3. Non : le cuivre n'est pas attiré par l'aimant, pas plus que le sable. L'aimant ne permet de séparer que les matériaux magnétiques (fer, acier) des autres."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici quatre affirmations sur les aimants et la boussole. Pour chacune, dis si elle est vraie ou fausse et justifie.\n1. « Un aimant possède toujours deux pôles. »\n2. « La boussole sert à mesurer la température. »\n3. « Deux aimants placés pôle N contre pôle S se repoussent. »\n4. « La Terre se comporte comme un aimant. »",
        correction: "1. Vrai : tout aimant a un pôle N et un pôle S, et même cassé en deux, chaque morceau garde ses deux pôles.\n2. Faux : la boussole sert à s'orienter (indiquer le nord). La température se mesure avec un thermomètre (chapitre 10).\n3. Faux : pôle N contre pôle S, ce sont des pôles contraires : ils s'ATTIRENT. Ce sont les pôles de même nom qui se repoussent.\n4. Vrai : c'est pour cela que l'aiguille aimantée de la boussole s'aligne et indique le nord."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch9.js =====
