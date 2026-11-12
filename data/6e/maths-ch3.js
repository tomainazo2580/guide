// ===== GUIDE - Mathematiques 6eme (T6) =====
// Chapitre 3 : Multiples, diviseurs, PGCD et PPCM
// Base sur le programme officiel de Madagascar (FRP Maths T6), complete par Guide.

enregistrerChapitres("6e", "maths", [
  {
    id: "m6-multiples-diviseurs",
    titre: "Chapitre 3 : Multiples, diviseurs, PGCD et PPCM",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "m6-md-notions",
        titre: "Multiples et diviseurs",
        blocs: [
          {
            type: "definition",
            titre: "Diviseur (ou facteur)",
            texte: "Un diviseur d'un nombre est un nombre qui le divise de façon exacte : le reste de la division est 0.\nSi a × b = c, alors a et b sont des diviseurs (ou facteurs) de c. On dit aussi que c est divisible par a et par b.\nExemple : 3 × 4 = 12, donc 3 et 4 sont des diviseurs de 12."
          },
          {
            type: "methode",
            titre: "Trouver tous les diviseurs d'un nombre",
            texte: "On cherche toutes les paires de nombres dont le produit donne ce nombre.\nExemple avec 12 : 1 × 12 = 12 ; 2 × 6 = 12 ; 3 × 4 = 12.\nLes diviseurs de 12 sont : 1, 2, 3, 4, 6 et 12."
          },
          {
            type: "definition",
            titre: "Multiple",
            texte: "Un multiple d'un nombre est le résultat de la multiplication de ce nombre par un nombre entier.\nExemple : les multiples de 4 sont 0, 4, 8, 12, 16, 20...\n(car 4 × 0 = 0, 4 × 1 = 4, 4 × 2 = 8...)."
          },
          {
            type: "remarque",
            titre: "À retenir",
            texte: "1 est le diviseur de tous les nombres.\nTout nombre est son propre diviseur.\nLa liste des diviseurs d'un nombre est finie (limitée).\n0 est un multiple de tous les nombres.\nTout nombre est un multiple de lui-même.\nLa liste des multiples d'un nombre est infinie (sans fin)."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "1. Trouve tous les diviseurs de 20.\n2. Écris les multiples de 6 jusqu'à 30.\nRéponses : 1. 1, 2, 4, 5, 10, 20 (car 1 × 20, 2 × 10, 4 × 5). 2. 0, 6, 12, 18, 24, 30."
          }
        ]
      },
      {
        id: "m6-md-criteres",
        titre: "Les critères de divisibilité",
        blocs: [
          {
            type: "regle",
            titre: "Les critères à connaître par cœur",
            texte: "Un nombre est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou 8.\nUn nombre est divisible par 5 si son chiffre des unités est 0 ou 5.\nUn nombre est divisible par 4 si le nombre formé par ses deux derniers chiffres est un multiple de 4.\nUn nombre est divisible par 3 si la somme de ses chiffres est un multiple de 3.\nUn nombre est divisible par 9 si la somme de ses chiffres est un multiple de 9."
          },
          {
            type: "tableau",
            titre: "Tableau résumé",
            entetes: ["Divisible par", "Il faut regarder", "Exemple"],
            lignes: [
              ["2", "Le dernier chiffre : 0, 2, 4, 6, 8", "23 928 finit par 8 → oui"],
              ["5", "Le dernier chiffre : 0 ou 5", "345 finit par 5 → oui"],
              ["4", "Les 2 derniers chiffres", "2 316 : 16 est un multiple de 4 → oui"],
              ["3", "La somme des chiffres", "432 : 4 + 3 + 2 = 9 → oui"],
              ["9", "La somme des chiffres", "738 : 7 + 3 + 8 = 18 → oui"]
            ]
          },
          {
            type: "exemple",
            titre: "L'exemple complet : 23 928",
            texte: "Divisible par 2 ? Oui, il finit par 8.\nDivisible par 5 ? Non, il ne finit ni par 0 ni par 5.\nDivisible par 4 ? Les deux derniers chiffres forment 28, et 28 est un multiple de 4 : oui.\nDivisible par 3 ? 2 + 3 + 9 + 2 + 8 = 24, et 24 est un multiple de 3 : oui.\nDivisible par 9 ? 24 n'est pas un multiple de 9 : non."
          },
          {
            type: "remarque",
            titre: "Le lien entre 3 et 9",
            texte: "Si un nombre est divisible par 9, il est toujours divisible par 3.\nMais l'inverse est faux : par exemple 24 est un multiple de 3, mais pas de 9."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Le nombre 7 350 est-il divisible par 2, par 3, par 5, par 9 ?\nRéponse : par 2 oui (il finit par 0) ; par 5 oui (il finit par 0) ; par 3 : 7 + 3 + 5 + 0 = 15, oui ; par 9 : 15 n'est pas un multiple de 9, non."
          }
        ]
      },
// === FIN MORCEAU 1 ===
            {
        id: "m6-md-pgcd",
        titre: "Le PGCD",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce que le PGCD ?",
            texte: "Le PGCD de deux nombres est leur Plus Grand Commun Diviseur : le plus grand nombre qui divise exactement chacun des deux.\nIl sert souvent à simplifier les fractions au maximum (revois le chapitre 1)."
          },
          {
            type: "definition",
            titre: "Les nombres premiers (complété par Guide)",
            texte: "Un nombre premier est un nombre qui n'a que deux diviseurs : 1 et lui-même.\nLes premiers à connaître : 2, 3, 5, 7, 11, 13, 17, 19...\nAttention : 1 n'est pas premier, il n'a qu'un seul diviseur."
          },
          {
            type: "methode",
            titre: "Méthode 1 : la liste des diviseurs (petits nombres)",
            texte: "On écrit les diviseurs de chaque nombre, on repère les diviseurs communs, et on prend le plus grand.\nExemple : le PGCD de 12 et 18.\nDiviseurs de 12 : 1, 2, 3, 4, 6, 12.\nDiviseurs de 18 : 1, 2, 3, 6, 9, 18.\nDiviseurs communs : 1, 2, 3, 6. Le plus grand est 6.\nPGCD(12, 18) = 6."
          },
          {
            type: "methode",
            titre: "Méthode 2 : la décomposition en facteurs premiers",
            texte: "1. On décompose chaque nombre en produit de nombres premiers.\n2. On prend uniquement les facteurs communs, avec leur plus petit exposant.\n3. On les multiplie entre eux.\nExemple : 24 = 2 × 2 × 2 × 3 et 36 = 2 × 2 × 3 × 3.\nFacteurs communs : deux fois le 2 et une fois le 3.\nPGCD(24, 36) = 2 × 2 × 3 = 12."
          },
          {
            type: "schema",
            titre: "Le diagramme de Venn",
            svg: "<svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'><text x='75' y='16' font-size='12' text-anchor='middle' fill='#1e3a5f'>Facteurs de 24</text><text x='245' y='16' font-size='12' text-anchor='middle' fill='#dc2626'>Facteurs de 36</text><ellipse cx='110' cy='85' rx='80' ry='55' fill='#dbeafe' fill-opacity='0.5' stroke='#1e3a5f' stroke-width='2'/><ellipse cx='210' cy='85' rx='80' ry='55' fill='#fecaca' fill-opacity='0.5' stroke='#dc2626' stroke-width='2'/><text x='70' y='90' font-size='16' text-anchor='middle' fill='#1e3a5f'>2</text><text x='160' y='90' font-size='14' text-anchor='middle' fill='#1e3a5f'>2 , 2 , 3</text><text x='252' y='90' font-size='16' text-anchor='middle' fill='#dc2626'>3</text><text x='160' y='132' font-size='11' text-anchor='middle' fill='#14532d'>zone commune = PGCD</text></svg>",
            legende: "Le PGCD est le produit des facteurs communs (au milieu) : 2 × 2 × 3 = 12."
          },
          {
            type: "exemple",
            titre: "Le PGCD et les fractions",
            texte: "Pour simplifier 12/18 au maximum, on divise le haut et le bas par le PGCD de 12 et 18, c'est-à-dire 6 :\n12/18 = (12 ÷ 6)/(18 ÷ 6) = 2/3.\nLa fraction est alors irréductible."
          }
        ]
      },
      {
        id: "m6-md-ppcm",
        titre: "Le PPCM",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce que le PPCM ?",
            texte: "Le PPCM de deux nombres est leur Plus Petit Commun Multiple non nul : le plus petit nombre qui est un multiple des deux à la fois.\nIl sert principalement à mettre des fractions au même dénominateur (revois le chapitre 1)."
          },
          {
            type: "methode",
            titre: "Méthode 1 : la liste des multiples",
            texte: "Exemple : le PPCM de 6 et 8.\nMultiples de 6 : 6, 12, 18, 24, 30, 36...\nMultiples de 8 : 8, 16, 24, 32, 40...\nLe plus petit multiple commun est 24.\nPPCM(6, 8) = 24."
          },
          {
            type: "methode",
            titre: "Méthode 2 : la décomposition en facteurs premiers",
            texte: "1. On décompose chaque nombre en facteurs premiers.\n2. On prend tous les facteurs présents (communs ou non), avec leur plus grand exposant.\n3. On les multiplie entre eux.\nExemple : 12 = 2 × 2 × 3 et 15 = 3 × 5.\nTous les facteurs : 2 (deux fois), 3 (une fois), 5 (une fois).\nPPCM(12, 15) = 2 × 2 × 3 × 5 = 60."
          },
          {
            type: "remarque",
            titre: "PGCD ou PPCM ? Ne pas confondre",
            texte: "PGCD : on prend les facteurs COMMUNS avec le plus PETIT exposant. Le résultat est plus petit que les deux nombres.\nPPCM : on prend TOUS les facteurs avec le plus GRAND exposant. Le résultat est plus grand que les deux nombres."
          },
          {
            type: "exemple",
            titre: "Le PPCM et les fractions",
            texte: "Pour comparer 1/6 et 1/8, on cherche le même dénominateur : PPCM(6, 8) = 24.\n1/6 = 4/24 et 1/8 = 3/24.\nComme 4/24 > 3/24, on conclut : 1/6 > 1/8."
          }
        ]
      },
      {
        id: "m6-md-problemes",
        titre: "PGCD et PPCM dans les problèmes",
        blocs: [
          {
            type: "methode",
            titre: "Comment choisir entre PGCD et PPCM ?",
            texte: "Le problème parle de PARTAGER en parts égales, de GROUPER, ou cherche le plus GRAND possible ? → utilise le PGCD.\nLe problème parle d'événements qui se RÉPÈTENT, de se RETROUVER au même moment, ou cherche le plus PETIT possible ? → utilise le PPCM."
          },
          {
            type: "exemple",
            titre: "Les bouquets d'Analakely (PGCD)",
            texte: "Une fleuriste a 24 roses et 36 œillets. Elle veut faire des bouquets tous identiques, en utilisant toutes les fleurs.\nOn cherche un diviseur commun, le plus grand possible : PGCD(24, 36) = 12.\nElle fera 12 bouquets, chacun avec 2 roses (24 ÷ 12) et 3 œillets (36 ÷ 12)."
          },
          {
            type: "exemple",
            titre: "Les taxi-brousses (PPCM)",
            texte: "Un taxi-brousse part pour Antsirabe toutes les 12 minutes, un autre pour Toamasina toutes les 18 minutes. Ils partent ensemble à 6 h.\nOn cherche un multiple commun, le plus petit : PPCM(12, 18) = 36.\nIls repartiront ensemble 36 minutes plus tard, c'est-à-dire à 6 h 36."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Pour la fête de l'école, on partage 30 cahiers et 42 stylos en kits tous identiques.\n1. Combien de kits peut-on faire au maximum ?\n2. Que contient chaque kit ?\nRéponses : 1. PGCD(30, 42) = 6 kits. 2. Chaque kit contient 5 cahiers (30 ÷ 6) et 7 stylos (42 ÷ 6)."
          }
        ]
      }
    ],
// === FIN MORCEAU 2 ===
        exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "1. Écris tous les diviseurs de 12.\n2. Écris les cinq premiers multiples de 7 (sans compter 0).",
        correction: "1. Diviseurs de 12 : 1, 2, 3, 4, 6, 12 (car 1 × 12, 2 × 6, 3 × 4).\n2. Multiples de 7 : 7, 14, 21, 28, 35."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Réponds par Vrai ou Faux, avec le critère :\n1. 48 est divisible par 2.\n2. 135 est divisible par 5.\n3. 53 est divisible par 3.\n4. 200 est divisible par 4.",
        correction: "1. Vrai : 48 finit par 8.\n2. Vrai : 135 finit par 5.\n3. Faux : 5 + 3 = 8, et 8 n'est pas un multiple de 3.\n4. Vrai : les deux derniers chiffres forment 00, et 0 est un multiple de 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le nombre 23 928 est-il divisible par 2 ? par 3 ? par 4 ? par 5 ? par 9 ?\nJustifie chaque réponse avec le critère.",
        correction: "Par 2 : oui, il finit par 8.\nPar 5 : non, il ne finit ni par 0 ni par 5.\nPar 4 : oui, les deux derniers chiffres forment 28, multiple de 4.\nPar 3 : oui, 2 + 3 + 9 + 2 + 8 = 24, multiple de 3.\nPar 9 : non, 24 n'est pas un multiple de 9."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "1. Trouve le PGCD de 12 et 18 avec la liste des diviseurs.\n2. Trouve le PPCM de 6 et 8 avec la liste des multiples.",
        correction: "1. Diviseurs de 12 : 1, 2, 3, 4, 6, 12. Diviseurs de 18 : 1, 2, 3, 6, 9, 18. Communs : 1, 2, 3, 6. PGCD(12, 18) = 6.\n2. Multiples de 6 : 6, 12, 18, 24, 30... Multiples de 8 : 8, 16, 24, 32... PPCM(6, 8) = 24."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "1. Décompose 24 et 36 en facteurs premiers.\n2. Calcule PGCD(24, 36).\n3. Calcule PPCM(24, 36).",
        correction: "1. 24 = 2 × 2 × 2 × 3 et 36 = 2 × 2 × 3 × 3.\n2. PGCD : facteurs communs = 2 × 2 × 3 = 12.\n3. PPCM : tous les facteurs = 2 × 2 × 2 × 3 × 3 = 72.\nVérification : 72 est bien un multiple de 24 (24 × 3) et de 36 (36 × 2)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fleuriste d'Analakely a 24 roses et 36 œillets. Elle veut des bouquets tous identiques, en utilisant toutes les fleurs.\n1. Quel est le plus grand nombre de bouquets possible ?\n2. Quelle est la composition de chaque bouquet ?",
        correction: "1. On cherche le plus grand diviseur commun : PGCD(24, 36) = 12 bouquets.\n2. Chaque bouquet : 24 ÷ 12 = 2 roses et 36 ÷ 12 = 3 œillets.\nVérification : 12 × 2 = 24 roses et 12 × 3 = 36 œillets, tout est utilisé."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "1. Simplifie la fraction 36/48 au maximum en utilisant le PGCD.\n2. Calcule 1/4 + 1/6 en utilisant le PPCM pour trouver le dénominateur commun.",
        correction: "1. Diviseurs de 36 : 1, 2, 3, 4, 6, 9, 12, 18, 36. Diviseurs de 48 : 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. PGCD(36, 48) = 12. Donc 36/48 = (36 ÷ 12)/(48 ÷ 12) = 3/4.\n2. PPCM(4, 6) = 12. Alors 1/4 = 3/12 et 1/6 = 2/12. Donc 1/4 + 1/6 = 3/12 + 2/12 = 5/12."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "À la gare routière, un taxi-brousse part pour Antsirabe toutes les 12 minutes et un autre pour Toamasina toutes les 18 minutes. Ils partent ensemble à 6 h 00.\n1. Au bout de combien de minutes repartent-ils ensemble pour la première fois ?\n2. À quelle heure ?\n3. Combien de fois seront-ils partis ensemble entre 6 h et 9 h ?",
        correction: "1. Multiples de 12 : 12, 24, 36, 48... Multiples de 18 : 18, 36, 54... PPCM(12, 18) = 36 minutes.\n2. 6 h 00 + 36 min = 6 h 36.\n3. Ils partent ensemble toutes les 36 min : 6 h 00, 6 h 36, 7 h 12, 7 h 12 + 36 = 7 h 48, 8 h 24, 9 h 00. Cela fait 6 départs communs (en comptant celui de 6 h)."
      }
    ]
  }
]);
