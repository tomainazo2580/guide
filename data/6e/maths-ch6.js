enregistrerChapitres("6e", "maths", [
  {
    id: "ch6",
    titre: "Chapitre 6 : Initiation aux équations",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch6-lecon1",
        titre: "Leçon 1 : La balance et l'égalité",
        blocs: [
          { type: "texte", texte: "Imagine la balance d'un vendeur de riz au marché. Elle est en équilibre quand les deux plateaux portent exactement le même poids.\n\nEn mathématiques, une égalité fonctionne comme une balance en équilibre : ce qui se trouve à gauche du signe = a exactement la même valeur que ce qui se trouve à droite." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='170' viewBox='0 0 320 170'><rect x='120' y='140' width='80' height='8' fill='#607D8B'/><rect x='155' y='52' width='10' height='88' fill='#607D8B'/><rect x='40' y='44' width='240' height='8' fill='#455A64'/><line x1='55' y1='52' x2='40' y2='80' stroke='#455A64' stroke-width='2'/><line x1='55' y1='52' x2='70' y2='80' stroke='#455A64' stroke-width='2'/><rect x='30' y='80' width='50' height='7' fill='#8D6E63'/><circle cx='55' cy='66' r='13' fill='#F4B400'/><text x='55' y='71' font-size='14' font-weight='bold' text-anchor='middle' fill='#FFFFFF'>x</text><line x1='265' y1='52' x2='250' y2='80' stroke='#455A64' stroke-width='2'/><line x1='265' y1='52' x2='280' y2='80' stroke='#455A64' stroke-width='2'/><rect x='240' y='80' width='50' height='7' fill='#8D6E63'/><rect x='248' y='59' width='34' height='21' fill='#1E88E5'/><text x='265' y='74' font-size='12' text-anchor='middle' fill='#FFFFFF'>5 kg</text><text x='160' y='165' font-size='14' text-anchor='middle' fill='#333333'>équilibre : x = 5 kg</text></svg>", legende: "La balance est en équilibre : le sac x pèse le même poids que le poids de 5 kg. On peut écrire : x = 5 kg." },
          { type: "definition", texte: "Une égalité est une phrase mathématique qui contient le signe =. Elle affirme que deux quantités ont la même valeur.\nExemple : 3 + 4 = 7." },
          { type: "definition", texte: "Une équation est une égalité qui contient un nombre inconnu. On remplace ce nombre par une lettre, le plus souvent la lettre x. Cette lettre s'appelle l'inconnue.\nExemple : x + 7 = 15 est une équation. L'inconnue est x." },
          { type: "definition", texte: "Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie." },
          { type: "remarque", texte: "Une balance reste en équilibre si on ajoute le même poids sur chaque plateau, ou si on enlève le même poids de chaque côté.\nUne égalité fonctionne pareil : elle reste vraie si on fait exactement la même opération des deux côtés du signe =." }
        ]
      },
      {
        id: "ch6-lecon2",
        titre: "Leçon 2 : Résoudre par déduction (addition et soustraction)",
        blocs: [
          { type: "texte", texte: "Pour résoudre une équation simple, on peut raisonner directement : c'est la méthode par déduction. On se pose une question très simple." },
          { type: "methode", texte: "Pour résoudre x + 7 = 15, on se demande :\n« Quel nombre ajouté à 7 donne 15 ? »\nLa réponse est 8, parce que 15 − 7 = 8.\nDonc x = 8." },
          { type: "exemple", texte: "Exemple 1 : x + 7 = 15\nOn calcule : x = 15 − 7 = 8\nVérification : 8 + 7 = 15. C'est juste ✓\n\nExemple 2 : 26 + x = 40\nOn calcule : x = 40 − 26 = 14\nVérification : 26 + 14 = 40. C'est juste ✓" },
          { type: "methode", texte: "Pour résoudre x − 5 = 12, on se demande :\n« Quel nombre diminué de 5 donne 12 ? »\nLa réponse est 17, parce que 12 + 5 = 17.\nDonc x = 17." },
          { type: "exemple", texte: "Exemple : x − 5 = 12\nOn calcule : x = 12 + 5 = 17\nVérification : 17 − 5 = 12. C'est juste ✓" },
          { type: "regle", texte: "L'addition et la soustraction sont des opérations inverses :\n• si l'équation contient une addition, on résout avec une soustraction ;\n• si l'équation contient une soustraction, on résout avec une addition." },
          { type: "remarque", texte: "Prends l'habitude de toujours vérifier ta réponse : remplace x par la valeur trouvée dans l'équation de départ et calcule. Si l'égalité est vraie, ta réponse est bonne." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch6-lecon3",
        titre: "Leçon 3 : Résoudre par déduction (multiplication et division)",
        blocs: [
          { type: "texte", texte: "Quand l'équation contient une multiplication ou une division, on raisonne de la même façon : avec l'opération inverse.\n\nAttention à l'écriture : 4x veut dire 4 × x. En mathématiques, on ne met jamais le signe × entre un nombre et une lettre." },
          { type: "methode", texte: "Pour résoudre 4x = 24, on se demande :\n« 4 multiplié par quel nombre donne 24 ? »\nLa réponse est 6, parce que 24 ÷ 4 = 6.\nDonc x = 6." },
          { type: "exemple", texte: "Exemple 1 : 4x = 24\nOn calcule : x = 24 ÷ 4 = 6\nVérification : 4 × 6 = 24. C'est juste ✓\n\nExemple 2 : 7x = 56\nOn calcule : x = 56 ÷ 7 = 8\nVérification : 7 × 8 = 56. C'est juste ✓" },
          { type: "methode", texte: "Pour résoudre x ÷ 3 = 5, on se demande :\n« Quel nombre divisé par 3 donne 5 ? »\nLa réponse est 15, parce que 5 × 3 = 15.\nDonc x = 15." },
          { type: "exemple", texte: "Exemple : x ÷ 3 = 5\nOn calcule : x = 5 × 3 = 15\nVérification : 15 ÷ 3 = 5. C'est juste ✓" },
          { type: "regle", texte: "La multiplication et la division sont des opérations inverses :\n• si l'équation contient une multiplication, on résout avec une division ;\n• si l'équation contient une division, on résout avec une multiplication." }
        ]
      },
      {
        id: "ch6-lecon4",
        titre: "Leçon 4 : Résoudre par essais systématiques",
        blocs: [
          { type: "texte", texte: "Certaines équations contiennent deux opérations en même temps, par exemple : 3x + 2 = 17.\nQuand on ne voit pas tout de suite la réponse, on peut essayer plusieurs valeurs de x, l'une après l'autre, en commençant par 1. C'est la méthode des essais systématiques." },
          { type: "methode", texte: "Méthode en 5 étapes :\n1. Essaie x = 1 et calcule.\n2. Compare le résultat avec le nombre attendu.\n3. Si c'est trop petit, essaie le nombre suivant (x = 2, puis 3, puis 4...).\n4. Si c'est trop grand, la réponse était avant.\n5. Quand le résultat est exactement le nombre attendu, tu as trouvé x." },
          { type: "exemple", texte: "Résolvons ensemble : 3x + 2 = 17\nOn cherche la valeur de x qui donne exactement 17. Voici les essais, organisés dans un tableau :" },
          { type: "tableau", entetes: ["Essai", "Valeur de x", "Calcul de 3x + 2", "Résultat"], lignes: [["1er essai", "1", "3 × 1 + 2 = 5", "Trop petit"], ["2e essai", "2", "3 × 2 + 2 = 8", "Trop petit"], ["3e essai", "3", "3 × 3 + 2 = 11", "Trop petit"], ["4e essai", "4", "3 × 4 + 2 = 14", "Trop petit"], ["5e essai", "5", "3 × 5 + 2 = 17", "C'est bon ✓"]] },
          { type: "texte", texte: "Le 5e essai donne exactement 17. Donc x = 5.\nVérification : 3 × 5 + 2 = 15 + 2 = 17. C'est juste ✓" },
          { type: "remarque", texte: "Cette méthode demande un peu de patience, mais elle fonctionne toujours pour les équations de la classe de 6e. Organise tes essais dans un tableau pour ne pas te perdre." }
        ]
      },
      {
        id: "ch6-lecon5",
        titre: "Leçon 5 : Résoudre un problème avec une équation",
        blocs: [
          { type: "texte", texte: "Beaucoup de problèmes de la vie quotidienne peuvent s'écrire sous forme d'équation. L'équation est un outil qui transforme un problème en calcul." },
          { type: "methode", texte: "Méthode en 4 étapes :\n1. Lis bien le problème et choisis l'inconnue x : c'est ce que tu cherches.\n2. Écris l'équation qui traduit le problème.\n3. Résous l'équation.\n4. Vérifie ta réponse et réponds par une phrase." },
          { type: "exemple", texte: "Problème 1 : Koto achète 3 paquets de biscuits. Il paie en tout 4 500 Ar. Quel est le prix d'un paquet ?\n\n1. Inconnue : x = le prix d'un paquet, en ariary\n2. Équation : 3x = 4 500\n3. Résolution : x = 4 500 ÷ 3 = 1 500\n4. Vérification : 3 × 1 500 = 4 500 ✓\nRéponse : un paquet de biscuits coûte 1 500 Ar." },
          { type: "exemple", texte: "Problème 2 : Je pense à un nombre. Je lui ajoute 6 et je trouve 14. Quel est ce nombre ?\n\n1. Inconnue : x = le nombre pensé\n2. Équation : x + 6 = 14\n3. Résolution : x = 14 − 6 = 8\n4. Vérification : 8 + 6 = 14 ✓\nRéponse : le nombre pensé est 8." },
          { type: "remarque", texte: "L'étape la plus importante est l'étape 2 : écrire l'équation. Prends le temps de bien traduire le problème, mot par mot." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nDans l'équation x + 9 = 14 :\na) Quelle est l'inconnue ?\nb) Trouve la valeur de x.", correction: "a) L'inconnue est x, la lettre qui remplace le nombre inconnu.\nb) x = 14 − 9 = 5\nVérification : 5 + 9 = 14. C'est juste ✓" },
      { niveau: 1, points: 2, enonce: "Exercice 2\nRésous l'équation : 5x = 45", correction: "5x = 45 veut dire 5 × x = 45.\nx = 45 ÷ 5 = 9\nVérification : 5 × 9 = 45. C'est juste ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 3\nRésous par déduction : x + 25 = 60\nN'oublie pas de vérifier ta réponse.", correction: "x = 60 − 25 = 35\nVérification : 35 + 25 = 60. C'est juste ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 4\nRésous par déduction : x ÷ 4 = 12", correction: "x = 12 × 4 = 48\nVérification : 48 ÷ 4 = 12. C'est juste ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nRésous par essais systématiques : 2x + 3 = 15\n(Essaie x = 1, puis x = 2, puis x = 3... et organise tes essais dans un tableau.)", correction: "x = 1 → 2 × 1 + 3 = 5 (trop petit)\nx = 2 → 2 × 2 + 3 = 7 (trop petit)\nx = 3 → 2 × 3 + 3 = 9 (trop petit)\nx = 4 → 2 × 4 + 3 = 11 (trop petit)\nx = 5 → 2 × 5 + 3 = 13 (trop petit)\nx = 6 → 2 × 6 + 3 = 15 (c'est bon ✓)\nDonc x = 6.\nVérification : 2 × 6 + 3 = 12 + 3 = 15 ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 6\nVoahangy achète 4 kg de mangues. Elle paie en tout 10 000 Ar.\na) Écris l'équation qui traduit ce problème (appelle x le prix d'un kilo de mangues).\nb) Résous l'équation et réponds par une phrase.", correction: "a) 4x = 10 000\nb) x = 10 000 ÷ 4 = 2 500\nVérification : 4 × 2 500 = 10 000 ✓\nRéponse : un kilo de mangues coûte 2 500 Ar." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nJe pense à un nombre. Je le multiplie par 3, puis j'ajoute 7, et je trouve 31.\nQuel est ce nombre ?", correction: "Inconnue : x = le nombre pensé.\nÉquation : 3x + 7 = 31\nPar déduction, en deux temps :\n• 3x = 31 − 7 = 24\n• x = 24 ÷ 3 = 8\nVérification : 3 × 8 + 7 = 24 + 7 = 31. C'est juste ✓\nRéponse : le nombre pensé est 8." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nUne place de taxi-brousse coûte x Ar. Une famille paie 3 places, plus 2 000 Ar pour les bagages. Elle paie en tout 17 000 Ar.\na) Écris l'équation qui traduit ce problème.\nb) Trouve le prix d'une place.", correction: "a) 3x + 2 000 = 17 000\nb) En deux temps :\n• 3x = 17 000 − 2 000 = 15 000\n• x = 15 000 ÷ 3 = 5 000\nVérification : 3 × 5 000 + 2 000 = 15 000 + 2 000 = 17 000. C'est juste ✓\nRéponse : une place de taxi-brousse coûte 5 000 Ar." }
    ]
  }
]);
