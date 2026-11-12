enregistrerChapitres("6e", "maths", [
  {
    id: "ch15",
    titre: "Chapitre 15 : Les probabilités",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch15-lecon1",
        titre: "Leçon 1 : Expérience aléatoire et événements",
        blocs: [
          { type: "texte", texte: "Koto lance une pièce de monnaie pour décider qui commence au jeu. Pile ou face ? Impossible de savoir à l'avance !\n\nQuand le résultat dépend du hasard, on parle d'expérience aléatoire. « Aléatoire » vient du latin « alea » : le dé, le jeu de hasard." },
          { type: "definition", texte: "Une expérience aléatoire est une expérience dont on connaît tous les résultats possibles, mais dont on ne peut pas prévoir le résultat à l'avance.\nExemples : lancer une pièce, lancer un dé, tirer une bille dans un sac sans regarder." },
          { type: "definition", texte: "Les résultats possibles d'une expérience aléatoire s'appellent les issues.\nExemple : en lançant un dé, les issues sont : 1, 2, 3, 4, 5 et 6. Il y a 6 issues." },
          { type: "definition", texte: "Un événement est un ensemble d'issues : c'est ce qu'on cherche à observer.\nExemple : « obtenir un nombre pair » avec un dé est un événement. Il est réalisé si on obtient 2, 4 ou 6." },
          { type: "definition", texte: "Un événement est :\n• CERTAIN s'il se produit à tous les coups. Exemple : « obtenir un nombre entre 1 et 6 » avec un dé.\n• IMPOSSIBLE s'il ne peut jamais se produire. Exemple : « obtenir 7 » avec un dé classique.\n• ni certain ni impossible : on ne sait pas s'il va se produire. Exemple : « obtenir 5 »." },
          { type: "remarque", texte: "Vocabulaire à retenir :\n• expérience aléatoire = l'expérience avec le hasard ;\n• issue = un résultat possible ;\n• événement = ce qu'on cherche (une ou plusieurs issues)." }
        ]
      },
      {
        id: "ch15-lecon2",
        titre: "Leçon 2 : L'échelle de probabilité",
        blocs: [
          { type: "texte", texte: "« Impossible », « peu probable », « probable », « certain » : tu utilises déjà ces mots dans la vie courante ! En mathématiques, on les range sur une échelle graduée de 0 à 1." },
          { type: "definition", texte: "La probabilité d'un événement est un nombre entre 0 et 1 qui mesure ses chances de se produire :\n• probabilité = 0 : l'événement est IMPOSSIBLE ;\n• probabilité = 0,5 (un demi) : autant de chances d'arriver que de ne pas arriver ;\n• probabilité = 1 : l'événement est CERTAIN." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='150' viewBox='0 0 320 150'><line x1='30' y1='75' x2='290' y2='75' stroke='#333333' stroke-width='2.5'/><line x1='30' y1='68' x2='30' y2='82' stroke='#333333' stroke-width='2'/><line x1='95' y1='68' x2='95' y2='82' stroke='#333333' stroke-width='2'/><line x1='160' y1='68' x2='160' y2='82' stroke='#333333' stroke-width='2'/><line x1='225' y1='68' x2='225' y2='82' stroke='#333333' stroke-width='2'/><line x1='290' y1='68' x2='290' y2='82' stroke='#333333' stroke-width='2'/><text x='30' y='55' font-size='13' text-anchor='middle' fill='#333333'>0</text><text x='95' y='55' font-size='13' text-anchor='middle' fill='#333333'>0,25</text><text x='160' y='55' font-size='13' text-anchor='middle' fill='#333333'>0,5</text><text x='225' y='55' font-size='13' text-anchor='middle' fill='#333333'>0,75</text><text x='290' y='55' font-size='13' text-anchor='middle' fill='#333333'>1</text><text x='30' y='102' font-size='11' text-anchor='middle' fill='#E53935'>impossible</text><text x='95' y='102' font-size='11' text-anchor='middle' fill='#F4B400'>peu probable</text><text x='160' y='102' font-size='11' text-anchor='middle' fill='#8E24AA'>une chance sur deux</text><text x='225' y='102' font-size='11' text-anchor='middle' fill='#43A047'>probable</text><text x='290' y='102' font-size='11' text-anchor='middle' fill='#1E88E5'>certain</text><text x='160' y='132' font-size='12' text-anchor='middle' fill='#777777'>plus on va vers la droite, plus l'événement a de chances d'arriver</text></svg>", legende: "L'échelle de probabilité va de 0 (impossible) à 1 (certain)." },
          { type: "exemple", texte: "Exemples :\n• « Obtenir 7 avec un dé classique » : probabilité 0 (impossible).\n• « Obtenir pile avec une pièce » : probabilité 0,5 (une chance sur deux).\n• « Obtenir un nombre entre 1 et 6 avec un dé » : probabilité 1 (certain)." },
          { type: "remarque", texte: "Une probabilité peut s'écrire de trois façons équivalentes :\n• une fraction : 1/2\n• un nombre décimal : 0,5\n• un pourcentage : 50 %\nLes trois écritures disent la même chose !" }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch15-lecon3",
        titre: "Leçon 3 : La probabilité théorique",
        blocs: [
          { type: "texte", texte: "Sans même lancer le dé, on peut CALCULER les chances d'un événement. C'est la probabilité théorique : on raisonne sur les issues possibles." },
          { type: "regle", texte: "Quand toutes les issues ont les mêmes chances (on dit qu'elles sont équiprobables) :\n\nProbabilité = (nombre d'issues favorables) ÷ (nombre d'issues possibles)\n\n« Favorables » = les issues qui réalisent l'événement.\n« Possibles » = toutes les issues de l'expérience." },
          { type: "exemple", texte: "Exemple 1 : on lance une pièce. Quelle est la probabilité d'obtenir pile ?\n• Issues possibles : pile ou face → 2 issues\n• Issues favorables : pile → 1 issue\n• Probabilité = 1/2 = 0,5\n\nExemple 2 : on lance un dé. Probabilité d'obtenir un nombre pair ?\n• Issues possibles : 1, 2, 3, 4, 5, 6 → 6 issues\n• Issues favorables : 2, 4, 6 → 3 issues\n• Probabilité = 3/6 = 1/2 = 0,5" },
          { type: "exemple", texte: "Exemple 3 : un sac contient 5 billes rouges, 3 billes vertes et 2 billes bleues. On tire une bille sans regarder. Probabilité de tirer une bille verte ?\n• Issues possibles : 5 + 3 + 2 = 10 billes\n• Issues favorables : 3 billes vertes\n• Probabilité = 3/10 = 0,3" },
          { type: "methode", texte: "Méthode en 3 questions :\n1. Combien y a-t-il d'issues possibles en tout ?\n2. Combien d'issues réalisent mon événement ?\n3. J'écris la fraction : favorables ÷ possibles." },
          { type: "remarque", texte: "La probabilité théorique fonctionne quand toutes les issues ont les mêmes chances : pièce non truquée, dé bien équilibré, billes identiques mélangées dans le sac." }
        ]
      },
      {
        id: "ch15-lecon4",
        titre: "Leçon 4 : L'arbre pondéré",
        blocs: [
          { type: "texte", texte: "Koto lance une pièce DEUX fois de suite. Quelle est la probabilité d'obtenir pile puis pile ?\n\nQuand l'expérience se déroule en plusieurs étapes, on dessine un arbre pondéré : un arbre dont chaque branche porte sa probabilité (on dit que les branches sont « pondérées »)." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200' viewBox='0 0 320 200'><circle cx='35' cy='100' r='4' fill='#333333'/><line x1='35' y1='100' x2='105' y2='50' stroke='#1E88E5' stroke-width='2'/><line x1='35' y1='100' x2='105' y2='150' stroke='#1E88E5' stroke-width='2'/><text x='62' y='64' font-size='12' fill='#E53935'>1/2</text><text x='62' y='142' font-size='12' fill='#E53935'>1/2</text><text x='105' y='42' font-size='13' text-anchor='middle' fill='#333333'>Pile</text><text x='105' y='163' font-size='13' text-anchor='middle' fill='#333333'>Face</text><line x1='115' y1='50' x2='195' y2='22' stroke='#43A047' stroke-width='2'/><line x1='115' y1='50' x2='195' y2='78' stroke='#43A047' stroke-width='2'/><line x1='115' y1='150' x2='195' y2='122' stroke='#43A047' stroke-width='2'/><line x1='115' y1='150' x2='195' y2='178' stroke='#43A047' stroke-width='2'/><text x='150' y='26' font-size='12' fill='#E53935'>1/2</text><text x='150' y='76' font-size='12' fill='#E53935'>1/2</text><text x='150' y='126' font-size='12' fill='#E53935'>1/2</text><text x='150' y='176' font-size='12' fill='#E53935'>1/2</text><text x='240' y='26' font-size='12' fill='#333333'>(Pile ; Pile)</text><text x='240' y='82' font-size='12' fill='#333333'>(Pile ; Face)</text><text x='240' y='126' font-size='12' fill='#333333'>(Face ; Pile)</text><text x='240' y='182' font-size='12' fill='#333333'>(Face ; Face)</text></svg>", legende: "L'arbre des deux lancers : 4 chemins possibles, chaque branche porte la probabilité 1/2." },
          { type: "regle", texte: "Règle de l'arbre pondéré : pour trouver la probabilité d'un chemin, on MULTIPLIE les probabilités rencontrées le long du chemin." },
          { type: "exemple", texte: "Probabilité d'obtenir (Pile ; Pile) ?\nOn suit le chemin : Pile (1/2) puis Pile (1/2).\nP(Pile ; Pile) = 1/2 × 1/2 = 1/4 = 0,25\nIl y a une chance sur quatre d'obtenir deux fois pile." },
          { type: "remarque", texte: "Contrôle : la somme des probabilités de TOUS les chemins doit être égale à 1.\nIci : 1/4 + 1/4 + 1/4 + 1/4 = 4/4 = 1 ✓" }
        ]
      },
      {
        id: "ch15-lecon5",
        titre: "Leçon 5 : Probabilité expérimentale et tableau des probabilités",
        blocs: [
          { type: "texte", texte: "Koto lance une pièce 100 fois pour tester la théorie. Résultat : 52 fois pile, 48 fois face.\n\nQuand on RÉPÈTE l'expérience et qu'on compte les résultats, on calcule une probabilité expérimentale." },
          { type: "definition", texte: "La probabilité expérimentale d'un événement est :\n(nombre de fois où l'événement s'est produit) ÷ (nombre total d'essais)\nExemple : Koto a obtenu 52 piles sur 100 lancers : probabilité expérimentale = 52/100 = 0,52." },
          { type: "regle", texte: "Plus on répète l'expérience, plus la probabilité expérimentale se rapproche de la probabilité théorique.\nPour la pièce : plus on lance, plus le résultat s'approche de 0,5. C'est pour cela qu'on dit « sur le long terme, le hasard s'équilibre »." },
          { type: "definition", texte: "Le tableau des probabilités résume toutes les issues d'une expérience avec leurs probabilités. Règle d'or : la somme de toutes les probabilités est toujours égale à 1 (soit 100 %)." },
          { type: "tableau", entetes: ["Couleur de la bille", "Nombre de billes", "Probabilité"], lignes: [["Rouge", "5", "5/10 = 0,5"], ["Verte", "3", "3/10 = 0,3"], ["Bleue", "2", "2/10 = 0,2"], ["Total", "10", "1"]] },
          { type: "remarque", texte: "Ce tableau permet de répondre vite à toutes les questions : probabilité de tirer une bille rouge ? 0,5. Une bille verte ou bleue ? 0,3 + 0,2 = 0,5. Et le total 1 permet de vérifier qu'on n'a rien oublié." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nOn lance un dé classique à 6 faces.\na) Cite toutes les issues possibles.\nb) L'événement « obtenir 7 » est-il certain ou impossible ?", correction: "a) Les issues possibles sont : 1, 2, 3, 4, 5 et 6.\nb) « Obtenir 7 » est un événement IMPOSSIBLE : un dé classique n'a pas de face 7. Sa probabilité est 0." },
      { niveau: 1, points: 2, enonce: "Exercice 2\nUn sac contient 5 billes rouges, 3 billes vertes et 2 billes bleues.\nCombien y a-t-il de billes en tout dans le sac ?", correction: "5 + 3 + 2 = 10\nIl y a 10 billes en tout dans le sac. C'est le nombre d'issues possibles." },
      { niveau: 2, points: 3, enonce: "Exercice 3\nOn lance une pièce de monnaie équilibrée.\nQuelle est la probabilité d'obtenir face ? Donne la réponse sous forme de fraction, puis de nombre décimal.", correction: "• Issues possibles : pile ou face → 2 issues\n• Issues favorables : face → 1 issue\n• Probabilité = 1/2 = 0,5\nLa probabilité d'obtenir face est 1/2, soit 0,5 (une chance sur deux)." },
      { niveau: 2, points: 3, enonce: "Exercice 4\nOn lance un dé classique.\nQuelle est la probabilité d'obtenir un nombre pair ?", correction: "• Issues possibles : 1, 2, 3, 4, 5, 6 → 6 issues\n• Issues favorables (nombres pairs) : 2, 4, 6 → 3 issues\n• Probabilité = 3/6 = 1/2 = 0,5" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nUn sac contient 5 billes rouges, 3 billes vertes et 2 billes bleues. On tire une bille sans regarder.\na) Quelle est la probabilité de tirer une bille rouge ?\nb) Quelle est la probabilité de tirer une bille bleue ?", correction: "Il y a 10 billes en tout (issues possibles).\na) Billes rouges (favorables) : 5 → P(rouge) = 5/10 = 0,5\nb) Billes bleues (favorables) : 2 → P(bleue) = 2/10 = 0,2" },
      { niveau: 3, points: 4, enonce: "Exercice 6\nSarah lance une pièce 50 fois. Elle obtient 27 fois pile.\na) Quelle est la probabilité expérimentale d'obtenir pile dans son expérience ?\nb) Quelle est la probabilité théorique d'obtenir pile ?\nc) Les deux sont-elles très différentes ? Que se passerait-il avec 1 000 lancers ?", correction: "a) Probabilité expérimentale : 27/50 = 0,54\nb) Probabilité théorique : 1/2 = 0,5\nc) Non, 0,54 est proche de 0,5. Avec 1 000 lancers, la probabilité expérimentale se rapprocherait encore plus de 0,5 : plus on répète, plus on s'approche de la valeur théorique." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nKoto lance une pièce deux fois de suite.\na) Dessine l'arbre pondéré de cette expérience (avec les probabilités sur les branches).\nb) Calcule la probabilité d'obtenir (Pile ; Pile).\nc) Calcule la probabilité d'obtenir (Face ; Pile).", correction: "a) L'arbre a 2 étapes. Étape 1 : deux branches Pile (1/2) et Face (1/2). Étape 2 : de chaque branche repartent deux branches Pile (1/2) et Face (1/2). Il y a 4 chemins : (Pile ; Pile), (Pile ; Face), (Face ; Pile), (Face ; Face).\nb) P(Pile ; Pile) = 1/2 × 1/2 = 1/4 = 0,25\nc) P(Face ; Pile) = 1/2 × 1/2 = 1/4 = 0,25\nVérification : 1/4 + 1/4 + 1/4 + 1/4 = 1 ✓" },
      { niveau: 4, points: 5, enonce: "Exercice 8\nVoici le tableau des probabilités pour le tirage d'une bille dans un sac :\n• Rouge : 0,5\n• Verte : 0,3\n• Bleue : 0,2\n\na) Vérifie que la somme des probabilités est égale à 1.\nb) Quelle est la probabilité de tirer une bille rouge OU verte ?\nc) Quelle est la probabilité de NE PAS tirer une bille bleue ?", correction: "a) 0,5 + 0,3 + 0,2 = 1 ✓ La règle d'or est respectée.\nb) P(rouge ou verte) = 0,5 + 0,3 = 0,8\nc) Ne pas tirer de bleue, c'est tirer rouge ou verte : P = 0,8.\nAutre méthode : P = 1 − 0,2 = 0,8. Les deux méthodes donnent le même résultat ✓" }
    ]
  }
]);
