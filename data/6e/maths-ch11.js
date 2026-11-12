enregistrerChapitres("6e", "maths", [
  {
    id: "ch11",
    titre: "Chapitre 11 : Les solides",
    premium: false,
    guide: true,
    lecons: [
      {
        id: "ch11-lecon1",
        titre: "Leçon 1 : Les solides autour de nous",
        blocs: [
          { type: "texte", texte: "Jusqu'ici, tu as étudié des figures plates : triangles, rectangles, angles... Elles ont deux dimensions : la longueur et la largeur.\n\nMais les objets qui t'entourent ne sont pas plats : ils occupent de l'espace. Ce sont des solides." },
          { type: "definition", texte: "Un solide est un objet qui a trois dimensions : la longueur, la largeur et la hauteur.\nExemples : un dé, une boîte de conserve, une brique, un ballon." },
          { type: "definition", texte: "Pour décrire un solide, on utilise trois mots :\n• une face est une surface plane du solide ;\n• une arête est un segment où deux faces se rencontrent ;\n• un sommet est un point où plusieurs arêtes se rencontrent." },
          { type: "tableau", entetes: ["Objet de la vie courante", "Solide"], lignes: [["Un carton d'emballage, une brique", "Pavé droit"], ["Un dé à jouer, un morceau de sucre", "Cube"], ["Une boîte de conserve, une kapoaka, un tuyau", "Cylindre"], ["Un ballon, une orange", "Sphère"]] },
          { type: "remarque", texte: "Pour dessiner un solide sur une feuille plate, on utilise des ruses : les faces visibles sont dessinées en traits pleins, et les arêtes cachées en pointillés. Ce dessin s'appelle une représentation en perspective." }
        ]
      },
      {
        id: "ch11-lecon2",
        titre: "Leçon 2 : Le pavé droit",
        blocs: [
          { type: "texte", texte: "Prends un carton d'emballage ou une brique entre tes mains. Tu tiens un pavé droit, le solide le plus courant de la vie quotidienne." },
          { type: "definition", texte: "Le pavé droit est un solide dont les 6 faces sont des rectangles. On l'appelle aussi parallélépipède rectangle." },
          { type: "regle", texte: "Le pavé droit possède :\n• 6 faces rectangulaires ;\n• 12 arêtes ;\n• 8 sommets.\nLes faces opposées sont identiques (mêmes dimensions), deux à deux." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='185' viewBox='0 0 320 185'><polygon points='60,140 200,140 200,60 60,60' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polygon points='200,140 235,115 235,35 200,60' fill='#BBDEFB' stroke='#1E88E5' stroke-width='2'/><polygon points='60,60 95,35 235,35 200,60' fill='#90CAF9' stroke='#1E88E5' stroke-width='2'/><line x1='60' y1='140' x2='95' y2='115' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='95' y1='115' x2='235' y2='115' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='95' y1='115' x2='95' y2='35' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><circle cx='60' cy='60' r='3.5' fill='#E53935'/><text x='44' y='56' font-size='12' fill='#E53935'>sommet</text><line x1='130' y1='60' x2='130' y2='52' stroke='#43A047' stroke-width='1.5'/><text x='130' y='47' font-size='12' text-anchor='middle' fill='#43A047'>arête</text><text x='130' y='105' font-size='12' text-anchor='middle' fill='#1E88E5'>face</text><text x='160' y='172' font-size='11' text-anchor='middle' fill='#777777'>les arêtes cachées sont en pointillés</text></svg>", legende: "Le pavé droit : 6 faces, 12 arêtes, 8 sommets. Trois arêtes sont cachées : elles sont en pointillés." },
          { type: "definition", texte: "Un pavé droit a trois dimensions : la longueur, la largeur et la hauteur." },
          { type: "exemple", texte: "Exemple : un carton mesure 30 cm de long, 20 cm de large et 15 cm de haut.\nSes 6 faces sont :\n• 2 faces de 30 cm sur 20 cm (le dessus et le dessous) ;\n• 2 faces de 30 cm sur 15 cm (devant et derrière) ;\n• 2 faces de 20 cm sur 15 cm (à gauche et à droite)." },
          { type: "remarque", texte: "Truc pour compter les arêtes : 4 arêtes pour la longueur, 4 pour la largeur, 4 pour la hauteur. Total : 12 arêtes." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch11-lecon3",
        titre: "Leçon 3 : Le cube",
        blocs: [
          { type: "texte", texte: "Le cube est un pavé droit très particulier : toutes ses faces sont des carrés identiques. Pense à un dé à jouer ou à un morceau de sucre." },
          { type: "definition", texte: "Le cube est un pavé droit dont les 6 faces sont des carrés de même taille. Ses 12 arêtes ont toutes la même longueur." },
          { type: "regle", texte: "Le cube possède :\n• 6 faces carrées identiques ;\n• 12 arêtes de même longueur ;\n• 8 sommets.\nC'est le solide le plus régulier de tous." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='185' viewBox='0 0 320 185'><polygon points='85,145 185,145 185,45 85,45' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polygon points='185,145 220,120 220,20 185,45' fill='#BBDEFB' stroke='#1E88E5' stroke-width='2'/><polygon points='85,45 120,20 220,20 185,45' fill='#90CAF9' stroke='#1E88E5' stroke-width='2'/><line x1='85' y1='145' x2='120' y2='120' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='120' y1='120' x2='220' y2='120' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='120' y1='120' x2='120' y2='20' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><text x='135' y='168' font-size='12' text-anchor='middle' fill='#333333'>toutes les arêtes ont la même longueur</text></svg>", legende: "Le cube : 6 faces carrées, toutes identiques." },
          { type: "exemple", texte: "Exemple : un dé à jouer a des arêtes de 2 cm.\nIl a 6 faces carrées de 2 cm de côté, 12 arêtes de 2 cm et 8 sommets.\nLa longueur totale de ses arêtes est : 12 × 2 = 24 cm." },
          { type: "remarque", texte: "Le cube est au pavé droit ce que le carré est au rectangle : un cas particulier où tout est égal. Tous les cubes sont des pavés droits, mais tous les pavés droits ne sont pas des cubes." }
        ]
      },
      {
        id: "ch11-lecon4",
        titre: "Leçon 4 : Le cylindre",
        blocs: [
          { type: "texte", texte: "Une boîte de conserve, une kapoaka, un tuyau d'eau : ces objets ont la même forme. Ce sont des cylindres." },
          { type: "definition", texte: "Le cylindre est un solide formé de :\n• 2 faces planes, appelées bases : ce sont deux disques identiques et parallèles ;\n• 1 surface courbe qui relie les deux bases." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='185' viewBox='0 0 320 185'><ellipse cx='160' cy='45' rx='55' ry='16' fill='#90CAF9' stroke='#1E88E5' stroke-width='2'/><line x1='105' y1='45' x2='105' y2='125' stroke='#1E88E5' stroke-width='2'/><line x1='215' y1='45' x2='215' y2='125' stroke='#1E88E5' stroke-width='2'/><path d='M 105 125 A 55 16 0 0 0 215 125' fill='#BBDEFB' stroke='#1E88E5' stroke-width='2'/><path d='M 105 125 A 55 16 0 0 1 215 125' fill='none' stroke='#1E88E5' stroke-width='1.5' stroke-dasharray='4,3'/><text x='250' y='42' font-size='12' fill='#333333'>base</text><text x='250' y='90' font-size='12' fill='#333333'>surface courbe</text><text x='160' y='172' font-size='11' text-anchor='middle' fill='#777777'>la partie cachée de la base est en pointillés</text></svg>", legende: "Le cylindre : deux bases circulaires (en haut et en bas) reliées par une surface courbe." },
          { type: "remarque", texte: "Attention, question piège classique : le cylindre n'a NI arête NI sommet ! Ses bases sont des disques, et un cercle n'a pas de coins.\nIl n'a que 2 faces planes et 1 surface courbe." },
          { type: "exemple", texte: "Exemples de cylindres autour de toi : la boîte de conserve, la kapoaka, le tuyau d'eau, la bougie, le rouleau à pâtisserie de maman." }
        ]
      },
      {
        id: "ch11-lecon5",
        titre: "Leçon 5 : Les patrons des solides",
        blocs: [
          { type: "texte", texte: "Quand un carton d'emballage est vide, on peut l'ouvrir et l'aplatir complètement. La figure plate obtenue s'appelle le patron du solide." },
          { type: "definition", texte: "Le patron d'un solide est une figure plane qui permet de fabriquer le solide par pliage.\nC'est le solide « déplié » à plat." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='150' viewBox='0 0 320 150'><rect x='58' y='30' width='28' height='28' fill='#BBDEFB' stroke='#1E88E5' stroke-width='1.5'/><rect x='30' y='58' width='28' height='28' fill='#E3F2FD' stroke='#1E88E5' stroke-width='1.5'/><rect x='58' y='58' width='28' height='28' fill='#E3F2FD' stroke='#1E88E5' stroke-width='1.5'/><rect x='86' y='58' width='28' height='28' fill='#E3F2FD' stroke='#1E88E5' stroke-width='1.5'/><rect x='114' y='58' width='28' height='28' fill='#E3F2FD' stroke='#1E88E5' stroke-width='1.5'/><rect x='58' y='86' width='28' height='28' fill='#BBDEFB' stroke='#1E88E5' stroke-width='1.5'/><text x='86' y='138' font-size='12' text-anchor='middle' fill='#333333'>un patron du cube</text><circle cx='230' cy='32' r='16' fill='#90CAF9' stroke='#1E88E5' stroke-width='1.5'/><rect x='198' y='58' width='64' height='32' fill='#BBDEFB' stroke='#1E88E5' stroke-width='1.5'/><circle cx='230' cy='114' r='16' fill='#90CAF9' stroke='#1E88E5' stroke-width='1.5'/><text x='230' y='138' font-size='12' text-anchor='middle' fill='#333333'>un patron du cylindre</text></svg>", legende: "À gauche : un patron du cube (6 carrés). À droite : un patron du cylindre (un rectangle et deux disques)." },
          { type: "regle", texte: "• Le patron d'un cube est formé de 6 carrés identiques.\n• Le patron d'un pavé droit est formé de 6 rectangles (identiques deux à deux).\n• Le patron d'un cylindre est formé d'un rectangle et de 2 disques identiques : le rectangle s'enroule pour former la surface courbe, et les disques ferment les deux bases." },
          { type: "remarque", texte: "Attention : on ne peut pas disposer les 6 carrés n'importe comment ! Il existe exactement 11 patrons différents du cube. Par exemple, 6 carrés alignés en une seule ligne ne forment PAS un patron : pliés, ils ne ferment jamais le cube.\nPour vérifier un patron, imagine le pliage... ou découpe-le et essaie !" }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nCombien un cube possède-t-il :\na) de faces ?\nb) d'arêtes ?\nc) de sommets ?", correction: "a) 6 faces (des carrés identiques)\nb) 12 arêtes (toutes de même longueur)\nc) 8 sommets" },
      { niveau: 1, points: 2, enonce: "Exercice 2\nAssocie chaque objet au bon solide (pavé droit, cube ou cylindre) :\na) une boîte de conserve\nb) un dé à jouer\nc) une brique", correction: "a) Une boîte de conserve : un cylindre (2 bases circulaires et une surface courbe).\nb) Un dé à jouer : un cube (6 faces carrées identiques).\nc) Une brique : un pavé droit (6 faces rectangulaires)." },
      { niveau: 2, points: 3, enonce: "Exercice 3\na) Qu'est-ce qu'une arête ?\nb) Qu'est-ce qu'un sommet ?\nc) Pourquoi, sur le dessin d'un pavé droit, certaines arêtes sont-elles en pointillés ?", correction: "a) Une arête est un segment où deux faces se rencontrent.\nb) Un sommet est un point où plusieurs arêtes se rencontrent.\nc) Les pointillés représentent les arêtes cachées : celles qui sont derrière le solide et qu'on ne peut pas voir. C'est une ruse du dessin en perspective." },
      { niveau: 2, points: 3, enonce: "Exercice 4\nUn carton a la forme d'un pavé droit de 40 cm de long, 30 cm de large et 20 cm de haut.\nDécris les 6 faces du carton (donne les dimensions de chacune).", correction: "Les faces opposées sont identiques deux à deux :\n• 2 faces de 40 cm sur 30 cm (le dessus et le dessous) ;\n• 2 faces de 40 cm sur 20 cm (devant et derrière) ;\n• 2 faces de 30 cm sur 20 cm (à gauche et à droite).\nTotal : 6 faces rectangulaires." },
      { niveau: 3, points: 4, enonce: "Exercice 5\nVoahangy dit : « Le cylindre a 2 arêtes et 2 sommets, un en haut et un en bas. »\nA-t-elle raison ? Corrige sa réponse.", correction: "Non, Voahangy a tort.\nLe cylindre n'a NI arête NI sommet :\n• ses 2 bases sont des disques, et un cercle n'a pas de coins ;\n• sa surface courbe est lisse, sans segment.\nLe cylindre possède seulement 2 faces planes (les bases) et 1 surface courbe." },
      { niveau: 3, points: 4, enonce: "Exercice 6\nKoto dessine 6 carrés identiques alignés en une seule ligne. Il dit : « C'est un patron du cube. »\na) A-t-il raison ?\nb) Explique comment fabriquer un vrai patron de cube.", correction: "a) Non. Si on plie 6 carrés alignés en ligne, on obtient un tube sans fin, jamais un cube fermé : il manque le dessus et le dessous, et le dernier carré se superpose au premier.\nb) Un vrai patron du cube : par exemple 4 carrés en ligne, avec 1 carré au-dessus du deuxième et 1 carré en dessous du deuxième. En pliant, les 4 carrés forment les côtés et les 2 autres ferment le dessus et le dessous.\nIl existe exactement 11 patrons différents du cube." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nUn dé à jouer est un cube dont les arêtes mesurent 3 cm.\na) Combien le cube a-t-il d'arêtes ?\nb) Calcule la longueur totale de toutes les arêtes du dé.", correction: "a) Un cube a 12 arêtes, toutes de même longueur.\nb) Longueur totale : 12 × 3 = 36 cm.\nLa longueur totale des arêtes du dé est 36 cm." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nUne mallette en bois a la forme d'un pavé droit : 50 cm de long, 30 cm de large et 20 cm de haut. Le menuisier veut entourer TOUTES les arêtes d'un ruban de fer décoratif.\na) Combien d'arêtes mesurent 50 cm ? Et 30 cm ? Et 20 cm ?\nb) Quelle longueur totale de ruban de fer faut-il ?", correction: "a) Un pavé droit a 4 arêtes pour chaque dimension :\n• 4 arêtes de 50 cm (la longueur) ;\n• 4 arêtes de 30 cm (la largeur) ;\n• 4 arêtes de 20 cm (la hauteur).\nb) Longueur totale :\n4 × 50 = 200 cm\n4 × 30 = 120 cm\n4 × 20 = 80 cm\n200 + 120 + 80 = 400 cm\nIl faut 400 cm de ruban de fer, soit 4 mètres." }
    ]
  }
]);
