enregistrerChapitres("6e", "maths", [
  {
    id: "ch14",
    titre: "Chapitre 14 : Les statistiques",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch14-lecon1",
        titre: "Leçon 1 : L'enquête et les données",
        blocs: [
          { type: "texte", texte: "Le directeur de l'école veut savoir combien d'élèves viennent à pied, en pousse-pousse ou en taxi-brousse. Le vendeur du marché veut savoir quel fruit se vend le mieux.\n\nPour répondre à ces questions, on pose des questions et on compte les réponses : c'est une enquête statistique." },
          { type: "definition", texte: "Une enquête statistique permet de recueillir des données sur un groupe appelé la population (les élèves d'une école, les clients d'un marché...)." },
          { type: "definition", texte: "Une donnée est quantitative quand la réponse est un NOMBRE : l'âge, la taille, le nombre de frères et sœurs, le prix du riz...\nUne donnée est qualitative quand la réponse n'est pas un nombre : la couleur préférée, le sport pratiqué, le moyen de transport..." },
          { type: "definition", texte: "L'effectif d'une valeur est le nombre de fois où cette valeur apparaît dans les réponses.\nExemple : si 12 élèves répondent « je viens à pied », l'effectif de « à pied » est 12." },
          { type: "tableau", entetes: ["Moyen de transport", "Nombre d'élèves (effectif)"], lignes: [["À pied", "12"], ["En pousse-pousse", "5"], ["En taxi-brousse", "8"], ["Total", "25"]] },
          { type: "remarque", texte: "Pour bien mener une enquête, la question doit être claire et avoir une seule réponse possible à la fois. « Quel est ton âge ? » est une bonne question quantitative. « Tu aimes l'école ? » est une mauvaise question : trop floue !" }
        ]
      },
      {
        id: "ch14-lecon2",
        titre: "Leçon 2 : Le diagramme en bandes et le pictogramme",
        blocs: [
          { type: "texte", texte: "Un tableau de nombres, c'est précis, mais pas très parlant. Pour VOIR les résultats d'un coup d'œil, on dessine un diagramme." },
          { type: "definition", texte: "Le diagramme en bandes représente chaque donnée par un rectangle vertical (une bande). Plus la bande est haute, plus l'effectif est grand.\nLes bandes ont toutes la même largeur et sont séparées les unes des autres." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200' viewBox='0 0 320 200'><line x1='40' y1='160' x2='300' y2='160' stroke='#333333' stroke-width='2'/><line x1='40' y1='160' x2='40' y2='15' stroke='#333333' stroke-width='2'/><rect x='65' y='70' width='40' height='90' fill='#1E88E5'/><text x='85' y='62' font-size='12' text-anchor='middle' fill='#1E88E5'>6</text><rect x='125' y='40' width='40' height='120' fill='#43A047'/><text x='145' y='32' font-size='12' text-anchor='middle' fill='#43A047'>8</text><rect x='185' y='100' width='40' height='60' fill='#F4B400'/><text x='205' y='92' font-size='12' text-anchor='middle' fill='#B8860B'>4</text><rect x='245' y='115' width='40' height='45' fill='#E53935'/><text x='265' y='107' font-size='12' text-anchor='middle' fill='#E53935'>3</text><text x='85' y='177' font-size='11' text-anchor='middle' fill='#333333'>Mangues</text><text x='145' y='177' font-size='11' text-anchor='middle' fill='#333333'>Bananes</text><text x='205' y='177' font-size='11' text-anchor='middle' fill='#333333'>Oranges</text><text x='265' y='177' font-size='11' text-anchor='middle' fill='#333333'>Ananas</text><text x='160' y='196' font-size='11' text-anchor='middle' fill='#777777'>Fruits vendus ce matin au marché</text></svg>", legende: "Diagramme en bandes : on voit tout de suite que les bananes (8) se vendent le mieux, et les ananas (3) le moins bien." },
          { type: "definition", texte: "Le pictogramme représente les effectifs avec des petits dessins identiques. Chaque dessin vaut une certaine quantité, indiquée dans une légende.\nExemple : 🐔 = 5 poulets." },
          { type: "tableau", entetes: ["Élevage de la famille", "Pictogramme (🐔 = 5 poulets)"], lignes: [["Famille de Koto", "🐔 🐔 (10 poulets)"], ["Famille d'Hery", "🐔 🐔 🐔 (15 poulets)"], ["Famille de Sarah", "🐔 (5 poulets)"]] },
          { type: "remarque", texte: "Toujours regarder la légende du pictogramme AVANT de lire les nombres ! Si un dessin vaut 5, trois dessins valent 15." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch14-lecon3",
        titre: "Leçon 3 : Le diagramme en ligne brisée",
        blocs: [
          { type: "texte", texte: "La maîtresse note la température à Antsirabe chaque matin à 7 h pendant une semaine. Elle veut voir comment la température ÉVOLUE jour après jour.\n\nPour suivre une évolution dans le temps, le meilleur diagramme est la ligne brisée." },
          { type: "definition", texte: "Le diagramme en ligne brisée est formé de points reliés par des segments. Chaque point correspond à une mesure.\nIl sert à montrer comment une grandeur évolue : les températures, les notes, le prix du riz, la taille d'un enfant..." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='210' viewBox='0 0 320 210'><line x1='40' y1='165' x2='300' y2='165' stroke='#333333' stroke-width='2'/><line x1='40' y1='165' x2='40' y2='15' stroke='#333333' stroke-width='2'/><text x='30' y='49' font-size='10' text-anchor='middle' fill='#666666'>14</text><text x='30' y='79' font-size='10' text-anchor='middle' fill='#666666'>13</text><text x='30' y='109' font-size='10' text-anchor='middle' fill='#666666'>12</text><text x='30' y='139' font-size='10' text-anchor='middle' fill='#666666'>11</text><polyline points='75,120 115,90 155,105 195,60 235,75 275,45' fill='none' stroke='#1E88E5' stroke-width='2.5'/><circle cx='75' cy='120' r='4' fill='#E53935'/><circle cx='115' cy='90' r='4' fill='#E53935'/><circle cx='155' cy='105' r='4' fill='#E53935'/><circle cx='195' cy='60' r='4' fill='#E53935'/><circle cx='235' cy='75' r='4' fill='#E53935'/><circle cx='275' cy='45' r='4' fill='#E53935'/><text x='75' y='182' font-size='11' text-anchor='middle' fill='#333333'>Lun</text><text x='115' y='182' font-size='11' text-anchor='middle' fill='#333333'>Mar</text><text x='155' y='182' font-size='11' text-anchor='middle' fill='#333333'>Mer</text><text x='195' y='182' font-size='11' text-anchor='middle' fill='#333333'>Jeu</text><text x='235' y='182' font-size='11' text-anchor='middle' fill='#333333'>Ven</text><text x='275' y='182' font-size='11' text-anchor='middle' fill='#333333'>Sam</text><text x='160' y='201' font-size='11' text-anchor='middle' fill='#777777'>Température à 7 h à Antsirabe (en °C)</text></svg>", legende: "La ligne brisée montre que la température monte, descend, puis remonte fortement jeudi et samedi." },
          { type: "methode", texte: "Pour lire une ligne brisée :\n1. Quand la ligne MONTE, la grandeur augmente.\n2. Quand la ligne DESCEND, la grandeur diminue.\n3. Le point le plus haut est le maximum, le point le plus bas est le minimum." },
          { type: "remarque", texte: "Choisir le bon diagramme :\n• Comparer des catégories (fruits, sports, transports) → diagramme en bandes.\n• Suivre une évolution dans le temps → ligne brisée." }
        ]
      },
      {
        id: "ch14-lecon4",
        titre: "Leçon 4 : Tige et feuilles, mode et médiane",
        blocs: [
          { type: "texte", texte: "Voici les notes de maths d'une classe de 6e : 12, 7, 15, 9, 12, 8, 12, 14, 7, 10. Comment organiser ces données pour les comprendre ?" },
          { type: "definition", texte: "Le diagramme tige et feuilles organise les nombres par dizaines :\n• la tige est le chiffre des dizaines ;\n• les feuilles sont les chiffres des unités, rangés dans l'ordre.\nExemple : la note 12 devient tige 1, feuille 2." },
          { type: "tableau", entetes: ["Tige (dizaines)", "Feuilles (unités)"], lignes: [["0", "7 7 8 9"], ["1", "0 2 2 2 4 5"]] },
          { type: "texte", texte: "Lecture : la ligne « 0 | 7 7 8 9 » signifie les notes 7, 7, 8, 9. La ligne « 1 | 0 2 2 2 4 5 » signifie 10, 12, 12, 12, 14, 15. Toutes les notes sont rangées, et on les voit toutes !" },
          { type: "definition", texte: "Le mode est la valeur qui apparaît le plus souvent dans la série.\nExemple : dans les notes ci-dessus, 12 apparaît 3 fois. Le mode est 12." },
          { type: "definition", texte: "La médiane est la valeur qui partage la série rangée en deux groupes de même effectif : il y a autant de valeurs avant qu'après.\nPour la trouver : range les valeurs dans l'ordre croissant, puis prends celle du milieu." },
          { type: "exemple", texte: "Exemple : notes rangées de 5 élèves : 6, 9, 11, 13, 16.\nLa valeur du milieu est 9 (deux valeurs avant, deux après).\nLa médiane est 9.\n\nSi la série a un nombre PAIR de valeurs, on prend la moyenne des deux valeurs du milieu :\n4, 7, 8, 12 → médiane = (7 + 8) ÷ 2 = 7,5." },
          { type: "remarque", texte: "Le mode et la médiane sont deux façons différentes de résumer une série :\n• le mode = la valeur la plus fréquente ;\n• la médiane = la valeur du milieu, une fois rangée." }
        ]
      },
      {
        id: "ch14-lecon5",
        titre: "Leçon 5 : La moyenne",
        blocs: [
          { type: "texte", texte: "Koto a eu trois notes en maths ce trimestre : 12, 15 et 9. Son père demande : « Alors, globalement, comment ça se passe en maths ? »\n\nPour résumer plusieurs notes en UN seul nombre, on calcule la moyenne." },
          { type: "regle", texte: "Moyenne = (somme de toutes les valeurs) ÷ (nombre de valeurs)" },
          { type: "exemple", texte: "Exemple 1 : les notes de Koto sont 12, 15 et 9.\n1. Somme : 12 + 15 + 9 = 36\n2. Nombre de notes : 3\n3. Moyenne : M = 36 ÷ 3 = 12\nKoto a 12 de moyenne en maths." },
          { type: "exemple", texte: "Exemple 2 : une vendeuse a vendu 10, 14, 12, 16 et 18 kg de riz sur 5 jours.\n1. Somme : 10 + 14 + 12 + 16 + 18 = 70\n2. Moyenne : M = 70 ÷ 5 = 14\nElle vend en moyenne 14 kg de riz par jour." },
          { type: "methode", texte: "Méthode en 3 étapes :\n1. ADDITIONNE toutes les valeurs.\n2. COMPTE combien il y a de valeurs.\n3. DIVISE la somme par le nombre de valeurs." },
          { type: "remarque", texte: "La moyenne n'est pas forcément une des valeurs de la série ! Koto n'a jamais eu exactement 12 : il a eu 12, 15 et 9... si, dans son cas la moyenne 12 égale sa première note, mais c'est un hasard. Pour la vendeuse, la moyenne est 14, et elle a bien vendu 14 kg un jour. Mais souvent, la moyenne est un nombre « entre » les valeurs, qui ne figure pas dans la liste." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nPour chaque question de sondage, dis si la donnée recueillie est quantitative ou qualitative :\na) « Quel est ton âge ? »\nb) « Quel est ton sport préféré ? »\nc) « Combien de frères et sœurs as-tu ? »", correction: "a) Quantitative : la réponse est un nombre (12 ans, 13 ans...).\nb) Qualitative : la réponse n'est pas un nombre (football, basket...).\nc) Quantitative : la réponse est un nombre (0, 1, 2, 3...)." },
      { niveau: 1, points: 2, enonce: "Exercice 2\nDans un pictogramme, un dessin 🐔 vaut 5 poulets.\na) La famille de Koto est représentée par 3 dessins. Combien a-t-elle de poulets ?\nb) La famille d'Hery a 20 poulets. Combien de dessins faut-il pour la représenter ?", correction: "a) 3 × 5 = 15 poulets.\nb) 20 ÷ 5 = 4 dessins." },
      { niveau: 2, points: 3, enonce: "Exercice 3\nVoici les notes d'une élève : 8, 12, 10.\nCalcule sa moyenne en détaillant les 3 étapes.", correction: "1. Somme : 8 + 12 + 10 = 30\n2. Nombre de notes : 3\n3. Moyenne : M = 30 ÷ 3 = 10\nL'élève a 10 de moyenne." },
      { niveau: 2, points: 3, enonce: "Exercice 4\nVoici les âges des enfants d'une famille : 4, 7, 9, 12, 15.\na) Quelle est la médiane de cette série ?\nb) Explique ta réponse.", correction: "a) La médiane est 9.\nb) La série est déjà rangée dans l'ordre croissant et contient 5 valeurs. La valeur du milieu est la 3e : 9. Il y a bien 2 valeurs avant (4 et 7) et 2 valeurs après (12 et 15)." },
      { niveau: 3, points: 4, enonce: "Exercice 5\nVoici les pointures des chaussures vendues aujourd'hui au marché : 38, 40, 38, 42, 38, 41, 40, 38, 39.\na) Quel est le mode de cette série ?\nb) À quoi cette information peut-elle servir au vendeur ?", correction: "a) Comptons : 38 apparaît 4 fois, 40 apparaît 2 fois, 39, 41 et 42 apparaissent 1 fois.\nLe mode est 38.\nb) Le vendeur sait que la pointure 38 est la plus demandée : il doit en commander beaucoup pour ne pas être en rupture de stock." },
      { niveau: 3, points: 4, enonce: "Exercice 6\nVoici les notes d'un devoir : 11, 6, 14, 9, 13, 8, 15.\na) Range ces notes dans l'ordre croissant.\nb) Quelle est la médiane ?\nc) Construis le diagramme tige et feuilles de ces notes.", correction: "a) Ordre croissant : 6, 8, 9, 11, 13, 14, 15\nb) Il y a 7 notes. La valeur du milieu est la 4e : 11. La médiane est 11.\nc) Tige et feuilles :\n0 | 6 8 9\n1 | 1 3 4 5" },
      { niveau: 4, points: 5, enonce: "Exercice 7\nUne vendeuse de riz note ses ventes de la semaine (en kg) :\nLundi 12, mardi 15, mercredi 9, jeudi 18, vendredi 16.\na) Calcule la moyenne de ses ventes par jour.\nb) Samedi, elle vend 22 kg. La moyenne de la semaine complète (6 jours) monte-t-elle ou descend-elle ? Calcule la nouvelle moyenne pour vérifier.", correction: "a) Somme : 12 + 15 + 9 + 18 + 16 = 70\nMoyenne : 70 ÷ 5 = 14 kg par jour.\nb) Nouvelle somme : 70 + 22 = 92\nNouvelle moyenne : 92 ÷ 6 ≈ 15,3 kg par jour.\nComme 22 est supérieur à l'ancienne moyenne (14), la moyenne monte : elle passe de 14 à environ 15,3 kg." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nVoici les températures relevées à 7 h du matin à Antsirabe pendant 6 jours (en °C) : 11, 13, 12, 14, 13, 15.\na) Calcule la température moyenne.\nb) Quelle est la médiane ?\nc) Quel est le mode ?\nd) Si tu devais dessiner ces données, quel diagramme choisirais-tu et pourquoi ?", correction: "a) Somme : 11 + 13 + 12 + 14 + 13 + 15 = 78\nMoyenne : 78 ÷ 6 = 13 °C.\nb) Série rangée : 11, 12, 13, 13, 14, 15. Il y a 6 valeurs (nombre pair) : la médiane est la moyenne des deux valeurs du milieu (3e et 4e) : (13 + 13) ÷ 2 = 13 °C.\nc) Le mode est 13 °C (il apparaît 2 fois, les autres 1 seule fois).\nd) Une ligne brisée : on suit l'évolution de la température jour après jour." }
    ]
  }
]);
