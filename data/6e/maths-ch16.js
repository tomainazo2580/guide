enregistrerChapitres("6e", "maths", [
  {
    id: "ch16",
    titre: "Chapitre 16 : Les nombres entiers et la division euclidienne",
    premium: false,
    guide: true,
    lecons: [
      {
        id: "ch16-lecon1",
        titre: "Leçon 1 : Les nombres entiers",
        blocs: [
          { type: "texte", texte: "Compter ses frères et sœurs, compter les zébus du troupeau, compter les sacs de riz à la récolte... Depuis toujours, les hommes comptent avec des nombres entiers." },
          { type: "definition", texte: "Un nombre entier est un nombre sans virgule : 0, 1, 2, 3, 4, 5...\nIl y en a une infinité : on peut toujours en trouver un plus grand." },
          { type: "regle", texte: "Pour lire et écrire un grand nombre entier, on groupe les chiffres par trois à partir de la droite :\n• la classe des unités simples ;\n• la classe des mille ;\n• la classe des millions...\nExemple : 2 345 678" },
          { type: "tableau", entetes: ["Classe des millions", "Classe des mille", "Classe des unités simples"], lignes: [["2", "345", "678"]] },
          { type: "texte", texte: "Le nombre 2 345 678 se lit : « deux millions trois cent quarante-cinq mille six cent soixante-dix-huit »." },
          { type: "definition", texte: "Comparer deux entiers :\n1. Celui qui a le plus de chiffres est le plus grand.\n2. À nombre de chiffres égal, on compare de gauche à droite, chiffre par chiffre." },
          { type: "exemple", texte: "Exemple 1 : 1 234 > 987 car 1 234 a 4 chiffres et 987 n'en a que 3.\n\nExemple 2 : 45 672 < 45 689 car les chiffres sont identiques jusqu'aux dizaines, puis 7 < 8." },
          { type: "remarque", texte: "Sur la droite graduée, les entiers sont rangés dans l'ordre croissant : plus on va vers la droite, plus les nombres sont grands. L'entier qui suit n est n + 1 : c'est son successeur. Celui qui vient juste avant est son prédécesseur : n − 1." }
        ]
      },
      {
        id: "ch16-lecon2",
        titre: "Leçon 2 : Additionner et soustraire les entiers",
        blocs: [
          { type: "texte", texte: "Tu sais poser une addition depuis longtemps. Mais avec les grands nombres, une erreur de retenue arrive vite ! Voici la méthode propre, étape par étape." },
          { type: "methode", texte: "Pour poser une addition :\n1. Écris les nombres les uns sous les autres, en alignant les chiffres des unités à droite.\n2. Additionne colonne par colonne, en commençant par les unités.\n3. Si une colonne dépasse 9, écris le chiffre des unités et retiens 1 sur la colonne suivante." },
          { type: "tableau", entetes: ["", "milliers", "centaines", "dizaines", "unités"], lignes: [["retenues", "1", "1", "1", ""], ["premier nombre", "", "2", "4", "7"], ["deuxième nombre", "", "3", "6", "8"], ["résultat", "", "6", "1", "5"]] },
          { type: "texte", texte: "Lecture : 247 + 368 = 615.\nUnités : 7 + 8 = 15, j'écris 5 et je retiens 1.\nDizaines : 4 + 6 + 1 = 11, j'écris 1 et je retiens 1.\nCentaines : 2 + 3 + 1 = 6." },
          { type: "methode", texte: "Pour poser une soustraction, même alignement à droite. Quand le chiffre du haut est trop petit, on emprunte 1 à la colonne de gauche, ce qui ajoute 10 au chiffre du haut." },
          { type: "regle", texte: "Les vérifications à connaître par cœur :\n• La soustraction est l'opération inverse de l'addition : si a − b = c, alors b + c = a.\n• Pour vérifier une addition : change l'ordre des nombres et recalcule.\n• Pour vérifier une soustraction : ajoute le résultat au nombre soustrait, tu dois retrouver le nombre de départ." },
          { type: "exemple", texte: "Exemple : 615 − 368 = 247\nVérification : 368 + 247 = 615 ✓" },
          { type: "remarque", texte: "Astuce de calcul mental : pour ajouter 9, ajoute 10 puis enlève 1. Pour ajouter 98, ajoute 100 puis enlève 2. Ça va beaucoup plus vite !" }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch16-lecon3",
        titre: "Leçon 3 : Multiplier les entiers",
        blocs: [
          { type: "texte", texte: "La multiplication est une addition répétée : 24 × 3, c'est 24 + 24 + 24. Pour les grands nombres, on la pose en colonnes." },
          { type: "methode", texte: "Pour poser 24 × 3 :\n1. Multiplie 3 par les unités : 3 × 4 = 12, j'écris 2 et je retiens 1.\n2. Multiplie 3 par les dizaines : 3 × 2 = 6, plus la retenue 1 : 7.\n3. Résultat : 24 × 3 = 72." },
          { type: "tableau", entetes: ["", "centaines", "dizaines", "unités"], lignes: [["retenue", "", "1", ""], ["premier nombre", "", "2", "4"], ["multiplié par", "", "", "3"], ["résultat", "", "7", "2"]] },
          { type: "methode", texte: "Pour multiplier par un nombre à deux chiffres, comme 36 × 12 :\n1. Calcule 36 × 2 = 72 (ligne des unités).\n2. Calcule 36 × 10 = 360, c'est-à-dire 36 × 1 avec un zéro décalé (ligne des dizaines).\n3. Additionne : 72 + 360 = 432." },
          { type: "exemple", texte: "Exemple : 36 × 12 = 36 × 2 + 36 × 10 = 72 + 360 = 432" },
          { type: "regle", texte: "Vérification : la division est l'opération inverse de la multiplication. Si a × b = c, alors c ÷ b = a.\nExemple : 36 × 12 = 432, donc 432 ÷ 12 = 36 ✓" },
          { type: "remarque", texte: "Astuces de calcul mental :\n• × 4 = × 2 puis encore × 2 ;\n• × 5 = × 10 puis ÷ 2 ;\n• × 9 = × 10 puis soustraire le nombre une fois." }
        ]
      },
      {
        id: "ch16-lecon4",
        titre: "Leçon 4 : La division euclidienne",
        blocs: [
          { type: "texte", texte: "La maman de Koto veut partager équitablement 26 bonbons entre ses 4 enfants. Chacun aura 6 bonbons... et il en restera 2 !\n\nCe partage avec un reste s'appelle la division euclidienne : on divise avec des nombres entiers, sans virgule." },
          { type: "definition", texte: "La division euclidienne de a par b, c'est trouver deux nombres entiers :\n• le quotient q : le nombre de parts ;\n• le reste r : ce qui reste.\nOn écrit l'égalité : a = b × q + r, avec r < b (le reste est toujours plus petit que le diviseur)." },
          { type: "definition", texte: "Les quatre nombres ont des noms :\n• a est le dividende (le nombre qu'on partage) ;\n• b est le diviseur (le nombre de parts) ;\n• q est le quotient (le résultat du partage) ;\n• r est le reste." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='165' viewBox='0 0 320 165'><circle cx='30' cy='45' r='8' fill='#1E88E5'/><circle cx='55' cy='45' r='8' fill='#1E88E5'/><circle cx='80' cy='45' r='8' fill='#1E88E5'/><circle cx='105' cy='45' r='8' fill='#1E88E5'/><circle cx='130' cy='45' r='8' fill='#1E88E5'/><circle cx='155' cy='45' r='8' fill='#1E88E5'/><circle cx='30' cy='75' r='8' fill='#43A047'/><circle cx='55' cy='75' r='8' fill='#43A047'/><circle cx='80' cy='75' r='8' fill='#43A047'/><circle cx='105' cy='75' r='8' fill='#43A047'/><circle cx='130' cy='75' r='8' fill='#43A047'/><circle cx='155' cy='75' r='8' fill='#43A047'/><circle cx='30' cy='105' r='8' fill='#F4B400'/><circle cx='55' cy='105' r='8' fill='#F4B400'/><circle cx='80' cy='105' r='8' fill='#F4B400'/><circle cx='105' cy='105' r='8' fill='#F4B400'/><circle cx='130' cy='105' r='8' fill='#F4B400'/><circle cx='155' cy='105' r='8' fill='#F4B400'/><circle cx='30' cy='135' r='8' fill='#8E24AA'/><circle cx='55' cy='135' r='8' fill='#8E24AA'/><circle cx='80' cy='135' r='8' fill='#8E24AA'/><circle cx='105' cy='135' r='8' fill='#8E24AA'/><circle cx='130' cy='135' r='8' fill='#8E24AA'/><circle cx='155' cy='135' r='8' fill='#8E24AA'/><circle cx='220' cy='90' r='8' fill='#E53935'/><circle cx='248' cy='90' r='8' fill='#E53935'/><text x='300' y='95' font-size='13' fill='#E53935'>reste</text><text x='80' y='22' font-size='12' fill='#333333'>26 bonbons : 4 parts de 6</text></svg>", legende: "26 bonbons partagés entre 4 enfants : chacun reçoit 6 bonbons (une rangée par enfant), et il en reste 2 (en rouge)." },
          { type: "exemple", texte: "Exemple : la division euclidienne de 26 par 4.\n26 = 4 × 6 + 2\n• dividende : 26, diviseur : 4\n• quotient : 6, reste : 2\nVérification : 4 × 6 + 2 = 24 + 2 = 26 ✓ et le reste 2 est bien plus petit que 4 ✓" },
          { type: "remarque", texte: "Le reste doit TOUJOURS être plus petit que le diviseur. Si tu trouves un reste plus grand ou égal au diviseur, c'est que tu peux encore partager : le quotient est trop petit !" }
        ]
      },
      {
        id: "ch16-lecon5",
        titre: "Leçon 5 : Poser la division et l'utiliser dans les problèmes",
        blocs: [
          { type: "texte", texte: "Pour les grands nombres, on pose la division. Voici la méthode complète avec l'exemple 95 ÷ 7." },
          { type: "methode", texte: "Poser la division euclidienne de 95 par 7 :\n1. Combien de fois 7 dans 9 ? 1 fois. J'écris 1 au quotient.\n2. 1 × 7 = 7. Je calcule 9 − 7 = 2.\n3. J'abaisse le 5 : il reste 25.\n4. Combien de fois 7 dans 25 ? 3 fois (car 3 × 7 = 21, et 4 × 7 = 28 serait trop grand). J'écris 3 au quotient.\n5. 3 × 7 = 21. Je calcule 25 − 21 = 4. C'est le reste.\nRésultat : 95 = 7 × 13 + 4. Quotient : 13, reste : 4." },
          { type: "regle", texte: "La vérification est OBLIGATOIRE :\n(diviseur × quotient) + reste = dividende\nET le reste doit être plus petit que le diviseur.\nVérification de l'exemple : 7 × 13 + 4 = 91 + 4 = 95 ✓ et 4 < 7 ✓" },
          { type: "definition", texte: "Cas particulier : quand le reste vaut 0, on dit que la division est exacte, ou que le dividende est un multiple du diviseur.\nExemple : 24 = 4 × 6 + 0, donc 24 est un multiple de 4 (et 4 est un diviseur de 24 : tu retrouves le chapitre 3 !)." },
          { type: "exemple", texte: "Problème : le marchand emballe 95 mangues dans des caisses de 12.\n95 = 12 × 7 + 11\n• Il remplit 7 caisses complètes de 12 mangues.\n• Il reste 11 mangues, non emballées.\nVérification : 12 × 7 + 11 = 84 + 11 = 95 ✓" },
          { type: "remarque", texte: "Dans les problèmes, fais attention à la question posée :\n• « Combien de caisses COMPLÈTES ? » → réponse : le quotient.\n• « Combien de caisses FAUT-IL pour tout emballer ? » → réponse : quotient + 1, car il faut une caisse de plus pour le reste !" }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nLis ce nombre, puis décompose-le en classes :\n2 345 678", correction: "2 345 678 se lit : « deux millions trois cent quarante-cinq mille six cent soixante-dix-huit ».\nDécomposition en classes :\n• 2 millions\n• 345 mille\n• 678 unités simples" },
      { niveau: 1, points: 2, enonce: "Exercice 2\nPose et calcule : 247 + 368", correction: "  247\n+ 368\n= 615\nDétail : unités 7 + 8 = 15, j'écris 5 et je retiens 1 ; dizaines 4 + 6 + 1 = 11, j'écris 1 et je retiens 1 ; centaines 2 + 3 + 1 = 6.\nVérification : 368 + 247 = 615 ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 3\nEffectue la division euclidienne de 26 par 4. Donne le quotient et le reste, puis écris l'égalité a = b × q + r.", correction: "26 = 4 × 6 + 2\n• quotient : 6\n• reste : 2\nVérification : 4 × 6 + 2 = 26 ✓ et le reste 2 est plus petit que le diviseur 4 ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 4\nPose la division euclidienne de 95 par 7. Donne le quotient et le reste, puis vérifie.", correction: "95 = 7 × 13 + 4\nDétail : 7 entre 1 fois dans 9 (reste 2), j'abaisse le 5 → 25 ; 7 entre 3 fois dans 25 (3 × 7 = 21), reste 4.\n• quotient : 13\n• reste : 4\nVérification : 7 × 13 + 4 = 91 + 4 = 95 ✓ et 4 < 7 ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nUn fermier veut ranger 137 œufs dans des boîtes de 12 œufs.\na) Combien de boîtes complètes pourra-t-il remplir ?\nb) Combien d'œufs resteront ?", correction: "Division euclidienne de 137 par 12 :\n137 = 12 × 11 + 5\na) Il remplira 11 boîtes complètes (le quotient).\nb) Il restera 5 œufs (le reste).\nVérification : 12 × 11 + 5 = 132 + 5 = 137 ✓ et 5 < 12 ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 6\nUne école organise une excursion pour 125 élèves. Chaque bus peut transporter 40 élèves.\na) Combien de bus faut-il réserver pour que TOUS les élèves partent ?\nb) Attention, ce n'est pas seulement le quotient : explique pourquoi.", correction: "Division euclidienne de 125 par 40 :\n125 = 40 × 3 + 5\n• 3 bus complets transporteraient 120 élèves, mais il resterait 5 élèves à la gare !\na) Il faut donc réserver 4 bus : 3 bus complets + 1 bus pour les 5 élèves restants.\nb) Le quotient (3) ne suffit pas car le reste (5 élèves) a aussi besoin de partir. Dans ce type de problème, on prend toujours le quotient + 1 quand il y a un reste.\nVérification : 4 bus × 40 places = 160 places ≥ 125 élèves ✓" },
      { niveau: 4, points: 5, enonce: "Exercice 7\nHery effectue la division de 100 par 9 et écrit : « 100 = 9 × 10 + 10, donc le quotient est 10 et le reste est 10. »\na) Son résultat est-il correct ?\nb) Corrige son erreur et donne la bonne division euclidienne.", correction: "a) Non ! Le reste (10) est PLUS GRAND que le diviseur (9). C'est interdit dans une division euclidienne : on peut encore partager.\nb) Correction : dans le reste de 10, il y a encore une fois 9 (10 = 9 + 1).\nDonc 100 = 9 × 10 + 10 = 9 × 10 + 9 + 1 = 9 × 11 + 1\nLa bonne réponse : 100 = 9 × 11 + 1, quotient 11, reste 1.\nVérification : 9 × 11 + 1 = 99 + 1 = 100 ✓ et 1 < 9 ✓" },
      { niveau: 4, points: 5, enonce: "Exercice 8\nUne coopérative agricole a récolté 2 540 kg de riz. Elle veut remplir des sacs de 50 kg.\na) Combien de sacs complets pourra-t-elle remplir ?\nb) Combien de kilos de riz resteront-ils ?\nc) Le président de la coopérative dit : « Il nous faut 51 sacs pour tout stocker. » A-t-il raison ?", correction: "Division euclidienne de 2 540 par 50 :\n2 540 = 50 × 50 + 40\na) Elle remplira 50 sacs complets de 50 kg.\nb) Il restera 40 kg de riz.\nc) Oui, le président a raison : 50 sacs complets ne suffisent pas, car les 40 kg restants ont besoin d'un 51e sac (même s'il ne sera pas plein).\nVérification : 50 × 50 + 40 = 2 500 + 40 = 2 540 ✓ et 40 < 50 ✓" }
    ]
  }
]);
