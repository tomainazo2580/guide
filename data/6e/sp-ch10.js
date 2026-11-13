// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-temperature",
    titre: "Chapitre 10 : La température et la chaleur",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-temperature-def",
        titre: "Qu'est-ce que la température ?",
        blocs: [
          {
            type: "exemple",
            titre: "Chaud ou froid ?",
            texte: "Le matin à Antsirabe, l'air est froid. À midi à Mahajanga, le sable brûle les pieds. Pour comparer le chaud et le froid, on ne se contente pas de mots : on mesure une grandeur, la température."
          },
          {
            type: "definition",
            titre: "La température",
            texte: "La température est la grandeur qui permet de dire si un objet ou un lieu est chaud ou froid, et de comparer. On la mesure avec un thermomètre."
          },
          {
            type: "regle",
            titre: "L'unité",
            texte: "L'unité de température est le degré Celsius, de symbole °C.\nExemples : l'eau gèle à 0 °C, l'eau bout à 100 °C, le corps humain est à environ 37 °C."
          },
          {
            type: "tableau",
            titre: "Des températures autour de toi",
            entetes: ["Situation", "Température"],
            lignes: [
              ["L'eau qui gèle (glace)", "0 °C"],
              ["Un matin frais à Antsirabe", "Environ 10 °C"],
              ["L'air à Tana en journée", "Environ 25 °C"],
              ["Le corps humain", "37 °C"],
              ["L'eau qui bout", "100 °C"]
            ]
          },
          {
            type: "remarque",
            titre: "Chapitre complété par Guide",
            texte: "Le programme officiel annonce la température dans la thématique « Chaleur et Température ». Ce chapitre est rédigé par Guide dans l'esprit du programme."
          }
        ]
      },
      {
        id: "sp6-temperature-thermometre",
        titre: "Le thermomètre",
        blocs: [
          {
            type: "definition",
            titre: "Le thermomètre",
            texte: "Le thermomètre est l'appareil qui mesure la température. Il existe des thermomètres médicaux (pour la fièvre) et des thermomètres d'ambiance (pour l'air)."
          },
          {
            type: "schema",
            titre: "Le thermomètre",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg'><rect x='130' y='20' width='26' height='170' rx='13' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><circle cx='143' cy='200' r='22' fill='#ef4444' stroke='#1e3a5f' stroke-width='2'/><rect x='138' y='60' width='10' height='145' fill='#ef4444'/><line x1='156' y1='40' x2='172' y2='40' stroke='#475569' stroke-width='2'/><line x1='156' y1='80' x2='172' y2='80' stroke='#475569' stroke-width='2'/><line x1='156' y1='120' x2='172' y2='120' stroke='#475569' stroke-width='2'/><line x1='156' y1='160' x2='172' y2='160' stroke='#475569' stroke-width='2'/><text x='180' y='45' font-size='12' fill='#1e3a5f'>100 deg C</text><text x='180' y='85' font-size='12' fill='#1e3a5f'>75 deg C</text><text x='180' y='125' font-size='12' fill='#1e3a5f'>50 deg C</text><text x='180' y='165' font-size='12' fill='#1e3a5f'>25 deg C</text><line x1='200' y1='62' x2='240' y2='62' stroke='#dc2626' stroke-width='2'/><polygon points='150,62 160,58 160,66' fill='#dc2626'/><text x='215' y='58' font-size='11' fill='#dc2626'>Niveau rouge :</text><text x='215' y='72' font-size='11' fill='#dc2626'>la temperature lue</text></svg>",
            legende: "Plus il fait chaud, plus la colonne rouge monte dans le tube."
          },
          {
            type: "methode",
            titre: "Comment ça marche ?",
            texte: "Le thermomètre contient un liquide coloré dans un tube fin. Quand il fait chaud, le liquide prend plus de place : il monte. Quand il fait froid, il descend. On lit la température en face du haut de la colonne."
          },
          {
            type: "exemple",
            titre: "Au dispensaire",
            texte: "Au CSB, le médecin place le thermomètre sous le bras de l'enfant. Si la colonne monte au-dessus de 37,5 °C, l'enfant a de la fièvre : sa température est trop élevée."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Le thermomètre médical est fragile : on le tient avec précaution et on ne le laisse jamais traîner près du feu ou au soleil."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-temperature-chaleur",
        titre: "La chaleur",
        blocs: [
          {
            type: "definition",
            titre: "La chaleur",
            texte: "La chaleur est une forme d'énergie. Quand un corps chaud et un corps froid se touchent, la chaleur passe du corps chaud vers le corps froid."
          },
          {
            type: "schema",
            titre: "La chaleur se déplace",
            svg: "<svg viewBox='0 0 340 150' xmlns='http://www.w3.org/2000/svg'><rect x='25' y='45' width='90' height='60' rx='8' fill='#ef4444' stroke='#1e3a5f' stroke-width='2'/><text x='70' y='80' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>Corps chaud</text><rect x='225' y='45' width='90' height='60' rx='8' fill='#60a5fa' stroke='#1e3a5f' stroke-width='2'/><text x='270' y='80' text-anchor='middle' font-size='13' font-weight='bold' fill='#ffffff'>Corps froid</text><line x1='125' y1='75' x2='215' y2='75' stroke='#f59e0b' stroke-width='4'/><polygon points='215,75 200,68 200,82' fill='#f59e0b'/><text x='170' y='62' text-anchor='middle' font-size='12' font-weight='bold' fill='#b45309'>Chaleur</text><text x='170' y='130' text-anchor='middle' font-size='12' fill='#1e3a5f'>La chaleur va toujours du chaud vers le froid</text></svg>",
            legende: "Jamais l'inverse : le froid ne « voyage » pas."
          },
          {
            type: "regle",
            titre: "Le sens unique de la chaleur",
            texte: "La chaleur se déplace toujours du corps le plus chaud vers le corps le plus froid, jamais dans l'autre sens. Elle s'arrête quand les deux corps ont la même température."
          },
          {
            type: "exemple",
            titre: "La marmite et la cuillère",
            texte: "Laisse une cuillère en métal dans la marmite de riz chaude : le manche devient chaud. La chaleur de la marmite a voyagé le long de la cuillère, du chaud vers le froid."
          },
          {
            type: "exemple",
            titre: "La glace dans le verre",
            texte: "Mets un glaçon dans un verre d'eau : l'eau se refroidit et le glaçon fond. La chaleur de l'eau (plus chaude) est passée au glaçon (plus froid)."
          },
          {
            type: "remarque",
            titre: "Chaleur et température : pas pareil !",
            texte: "La température dit si un corps est chaud ou froid (en °C). La chaleur est l'énergie qui se déplace entre les corps. Une goutte d'eau brûlante a une haute température, mais une marmite tiède contient plus de chaleur."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-temperature-sources",
        titre: "Sources de chaleur et vie quotidienne",
        blocs: [
          {
            type: "regle",
            titre: "Les sources de chaleur",
            texte: "Les principales sources de chaleur : le Soleil (la plus importante), le feu (bois, charbon, gaz), l'électricité (fer à repasser, chauffe-eau), et le corps humain."
          },
          {
            type: "tableau",
            titre: "Qui donne la chaleur ?",
            entetes: ["Source", "Exemple d'utilisation"],
            lignes: [
              ["Le Soleil", "Sécher le riz et le linge, réchauffer la Terre"],
              ["Le feu de bois et le charbon", "Cuire le riz, chauffer l'eau du thé"],
              ["Le gaz", "La cuisinière à bouteille de gaz"],
              ["L'électricité", "Le fer à repasser, le chauffe-eau"],
              ["Le corps humain", "Se réchauffer les mains"]
            ]
          },
          {
            type: "schema",
            titre: "Le Soleil, source de vie",
            svg: "<svg viewBox='0 0 340 160' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='55' r='26' fill='#fde047' stroke='#f59e0b' stroke-width='3'/><line x1='70' y1='12' x2='70' y2='24' stroke='#f59e0b' stroke-width='3'/><line x1='70' y1='86' x2='70' y2='98' stroke='#f59e0b' stroke-width='3'/><line x1='27' y1='55' x2='39' y2='55' stroke='#f59e0b' stroke-width='3'/><line x1='101' y1='55' x2='113' y2='55' stroke='#f59e0b' stroke-width='3'/><line x1='40' y1='25' x2='48' y2='33' stroke='#f59e0b' stroke-width='3'/><line x1='92' y1='77' x2='100' y2='85' stroke='#f59e0b' stroke-width='3'/><line x1='100' y1='25' x2='92' y2='33' stroke='#f59e0b' stroke-width='3'/><line x1='48' y1='77' x2='40' y2='85' stroke='#f59e0b' stroke-width='3'/><line x1='120' y1='60' x2='180' y2='90' stroke='#f59e0b' stroke-width='3'/><polygon points='180,90 166,86 172,98' fill='#f59e0b'/><rect x='190' y='88' width='110' height='50' rx='8' fill='#dcfce7' stroke='#166534' stroke-width='2'/><text x='245' y='112' text-anchor='middle' font-size='12' fill='#166534'>Le riz seche</text><text x='245' y='128' text-anchor='middle' font-size='12' fill='#166534'>sur la natte</text></svg>",
            legende: "La chaleur du Soleil sèche le riz après la récolte."
          },
          {
            type: "exemple",
            titre: "Se protéger du chaud et du froid",
            texte: "Sous le soleil de midi, on cherche l'ombre du manguier. Le matin froid à Antsirabe, on met un lamba épais. Le corps garde sa température à 37 °C : on l'aide avec les vêtements et l'abri."
          },
          {
            type: "remarque",
            titre: "Le lien avec le prochain chapitre",
            texte: "La chaleur voyage mieux dans certains matériaux que dans d'autres : c'est la conductivité thermique, notre chapitre 11, celui du fascicule."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la température ? Avec quel appareil la mesure-t-on ?",
        correction: "La température est la grandeur qui permet de dire si un objet ou un lieu est chaud ou froid, et de comparer.\nOn la mesure avec un thermomètre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète :\nL'unité de température est le ........, de symbole ........\nL'eau gèle à ........ °C et bout à ........ °C.",
        correction: "L'unité de température est le degré Celsius, de symbole °C.\nL'eau gèle à 0 °C et bout à 100 °C."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Range ces températures de la plus froide à la plus chaude :\n37 °C (corps humain) ; 0 °C (glace) ; 100 °C (eau qui bout) ; 25 °C (air à Tana).",
        correction: "0 °C (glace) < 25 °C (air à Tana) < 37 °C (corps humain) < 100 °C (eau qui bout)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décris comment fonctionne un thermomètre à liquide :\n1. Que contient-il ?\n2. Que se passe-t-il quand il fait chaud ?\n3. Et quand il fait froid ?",
        correction: "1. Il contient un liquide coloré dans un tube fin.\n2. Quand il fait chaud, le liquide prend plus de place : il monte dans le tube.\n3. Quand il fait froid, le liquide descend. On lit la température en face du haut de la colonne."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On met un glaçon dans un verre d'eau tiède.\n1. Dans quel sens la chaleur se déplace-t-elle ?\n2. Que devient l'eau ? Que devient le glaçon ?\n3. Énonce la règle du déplacement de la chaleur.",
        correction: "1. La chaleur passe de l'eau tiède (corps chaud) vers le glaçon (corps froid).\n2. L'eau se refroidit, et le glaçon fond en recevant la chaleur.\n3. La chaleur se déplace toujours du corps le plus chaud vers le corps le plus froid, jamais dans l'autre sens, jusqu'à ce que les deux corps aient la même température."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite quatre sources de chaleur et donne pour chacune un exemple d'utilisation à Madagascar.",
        correction: "Le Soleil : sécher le riz ou le linge.\nLe feu de bois ou le charbon : cuire le riz, chauffer l'eau du thé.\nLe gaz : la cuisinière à bouteille de gaz.\nL'électricité : le fer à repasser, le chauffe-eau.\n(Accepté aussi : le corps humain, pour se réchauffer.)"
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici deux phrases entendues au marché. Pour chacune, dis si elle est correcte et explique pourquoi.\n1. « Ferme la porte, le froid va entrer dans la maison ! »\n2. « Ce thermomètre indique 38,5 °C : cet enfant a de la fièvre. »",
        correction: "1. La phrase est pratique mais pas scientifique : ce n'est pas le froid qui « entre », c'est la chaleur de la maison qui sort vers l'extérieur plus froid. La chaleur se déplace toujours du chaud vers le froid. Fermer la porte garde la chaleur à l'intérieur.\n2. Correcte : le corps humain est normalement à environ 37 °C. À 38,5 °C, la température est trop élevée : c'est bien de la fièvre."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Mamy laisse une cuillère en métal dans la marmite de riz qui chauffe sur le feu. Cinq minutes plus tard, il veut la prendre : le manche est brûlant.\n1. Explique, avec le mot « chaleur », ce qui s'est passé.\n2. Pourquoi le manche en bois d'une autre cuillère, posée au même endroit, n'est-il pas brûlant ? (Réponds avec ce que tu sais déjà, le détail viendra au chapitre 11.)\n3. Cite la règle générale que cet exemple illustre.",
        correction: "1. La chaleur du feu a chauffé la marmite, puis elle a voyagé le long de la cuillère en métal, du chaud vers le froid : le manche est devenu chaud.\n2. Le bois transmet très mal la chaleur, contrairement au métal : c'est un mauvais conducteur de chaleur (on le verra au chapitre 11).\n3. Règle : la chaleur se déplace toujours du corps le plus chaud vers le corps le plus froid."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch10.js =====
