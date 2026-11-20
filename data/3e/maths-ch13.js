// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 13 : statistiques.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-statistiques",
    titre: "Chapitre 13 : Statistiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-statistiques-vocabulaire",
        titre: "Comprendre une étude statistique",
        blocs: [
          {
            type: "introduction",
            titre: "Une question sur une classe",
            texte: "On demande à chaque élève d'une classe combien de livres il a lus pendant les vacances.\n\nLes réponses sont des données. Les statistiques permettent de les organiser et de les résumer pour mieux comprendre la situation."
          },
          {
            type: "definition",
            titre: "Les mots à connaître",
            texte: "• La population est l'ensemble étudié : ici, les élèves de la classe.\n• Un individu est un élément de cette population : ici, un élève.\n• Le caractère étudié est l'information recherchée : ici, le nombre de livres lus.\n• Une valeur est une réponse possible : 0, 1, 2 livres, etc."
          },
          {
            type: "definition",
            titre: "Effectif",
            texte: "L'effectif d'une valeur est le nombre d'individus qui présentent cette valeur.\n\nPar exemple, si 4 élèves ont lu 2 livres, l'effectif de la valeur 2 est 4.\n\nL'effectif total est le nombre total d'individus étudiés. On le trouve en additionnant tous les effectifs."
          },
          {
            type: "tableau",
            titre: "Livres lus par 10 élèves",
            entetes: ["Nombre de livres", "0", "1", "2", "3", "Total"],
            lignes: [
              ["Nombre d'élèves", "2", "3", "4", "1", "10"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire le tableau",
            texte: "La valeur 1 a pour effectif 3 : trois élèves ont lu un livre chacun.\n\nL'effectif total est 2 + 3 + 4 + 1 = 10 élèves.\n\nAttention : la valeur étudiée est un nombre de livres ; son effectif est un nombre d'élèves."
          }
        ]
      },
      {
        id: "m3-statistiques-frequences",
        titre: "Calculer une fréquence",
        blocs: [
          {
            type: "definition",
            titre: "Une part du total",
            texte: "La fréquence d'une valeur indique quelle part de l'effectif total correspond à cette valeur.\n\nFréquence = effectif de la valeur ÷ effectif total.\n\nElle peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage."
          },
          {
            type: "exemple",
            titre: "La fréquence de 2 livres",
            texte: "Dans le tableau précédent, 4 élèves sur 10 ont lu 2 livres.\n\nFréquence = 4/10 = 0,4 = 40 %.\n\nCela signifie que 40 % des élèves de cette classe ont lu 2 livres."
          },
          {
            type: "tableau",
            titre: "Effectifs et fréquences",
            entetes: ["Livres lus", "0", "1", "2", "3", "Total"],
            lignes: [
              ["Effectif", "2", "3", "4", "1", "10"],
              ["Fréquence", "20 %", "30 %", "40 %", "10 %", "100 %"]
            ]
          },
          {
            type: "methode",
            titre: "Vérifier son tableau",
            texte: "1. Additionne les effectifs : tu dois obtenir l'effectif total.\n2. Additionne les fréquences exactes : tu dois obtenir 1, soit 100 %.\n\nSi les fréquences ont été arrondies, leur somme peut être légèrement différente de 100 %."
          },
          {
            type: "remarque",
            titre: "Choisir le bon total",
            texte: "Une fréquence dépend du groupe étudié. Ici, le total est 10 élèves, et non le nombre de livres lus.\n\nAvant de diviser, demande-toi toujours : « Une part de quel ensemble ? »"
          }
        ]
      },
      {
        id: "m3-statistiques-cumules",
        titre: "Comprendre les effectifs cumulés",
        blocs: [
          {
            type: "introduction",
            titre: "Combien ont lu au plus 2 livres ?",
            texte: "« Au plus 2 livres » signifie 2 livres ou moins : il faut compter les élèves qui ont lu 0, 1 ou 2 livres.\n\nOn additionne leurs effectifs : 2 + 3 + 4 = 9 élèves."
          },
          {
            type: "definition",
            titre: "Effectif cumulé croissant",
            texte: "Pour une valeur donnée, l'effectif cumulé croissant est le nombre d'individus dont la valeur est inférieure ou égale à cette valeur.\n\nPour le calculer, on range d'abord les valeurs dans l'ordre croissant, puis on additionne progressivement les effectifs."
          },
          {
            type: "tableau",
            titre: "Cumul des effectifs",
            entetes: ["Livres lus", "0", "1", "2", "3"],
            lignes: [
              ["Effectif", "2", "3", "4", "1"],
              ["Effectif cumulé croissant", "2", "5", "9", "10"],
              ["Fréquence cumulée croissante", "20 %", "50 %", "90 %", "100 %"]
            ]
          },
          {
            type: "methode",
            titre: "Remplir le tableau",
            texte: "À 0 livre : 2 élèves.\nÀ 1 livre : 2 + 3 = 5 élèves ont lu au plus 1 livre.\nÀ 2 livres : 5 + 4 = 9 élèves ont lu au plus 2 livres.\nÀ 3 livres : 9 + 1 = 10 élèves ont lu au plus 3 livres.\n\nOn obtient une fréquence cumulée en divisant l'effectif cumulé par l'effectif total. Par exemple, 9/10 = 90 %."
          },
          {
            type: "remarque",
            titre: "Au plus et au moins",
            texte: "« Au plus 2 » signifie inférieur ou égal à 2.\n« Au moins 2 » signifie supérieur ou égal à 2.\n\nDans notre tableau, 9 élèves ont lu au plus 2 livres, mais 4 + 1 = 5 élèves ont lu au moins 2 livres."
          }
        ]
      },
      {
        id: "m3-statistiques-moyenne",
        titre: "Calculer une moyenne",
        blocs: [
          {
            type: "definition",
            titre: "Partager également",
            texte: "La moyenne d'une série de nombres est la somme des valeurs divisée par le nombre de valeurs.\n\nElle indique ce que chacun aurait si l'on répartissait également le total entre tous."
          },
          {
            type: "exemple",
            titre: "Une liste de notes",
            texte: "Trois élèves ont obtenu 8, 12 et 16.\n\nSomme : 8 + 12 + 16 = 36.\nMoyenne : 36 ÷ 3 = 12.\n\nLa moyenne est 12. Aucun des trois élèves n'a besoin d'avoir cette note pour que la moyenne existe."
          },
          {
            type: "methode",
            titre: "Avec un tableau d'effectifs",
            texte: "Reprenons les livres lus :\n• 2 élèves ont lu 0 livre ;\n• 3 élèves ont lu 1 livre ;\n• 4 élèves ont lu 2 livres ;\n• 1 élève a lu 3 livres.\n\nNombre total de livres :\n0 × 2 + 1 × 3 + 2 × 4 + 3 × 1 = 14.\n\nIl y a 10 élèves. La moyenne est donc 14 ÷ 10 = 1,4 livre par élève."
          },
          {
            type: "remarque",
            titre: "Une moyenne peut ne pas être une valeur observée",
            texte: "La moyenne de 1,4 livre ne signifie pas qu'un élève a lu exactement 1,4 livre. C'est un résumé obtenu en répartissant le total entre les 10 élèves.\n\nDans un tableau d'effectifs, n'oublie pas de multiplier chaque valeur par son effectif avant d'additionner."
          }
        ]
      },
      {
        id: "m3-statistiques-mediane-mode",
        titre: "Médiane, mode et étendue",
        blocs: [
          {
            type: "definition",
            titre: "La médiane",
            texte: "Après avoir rangé les valeurs dans l'ordre croissant, une médiane partage la série en deux groupes : au moins la moitié des valeurs sont inférieures ou égales à elle et au moins la moitié sont supérieures ou égales à elle.\n\nPour la déterminer, il faut donc d'abord ranger les données."
          },
          {
            type: "methode",
            titre: "Un nombre impair de valeurs",
            texte: "Série rangée : 3 ; 5 ; 7 ; 8 ; 12.\n\nIl y a 5 valeurs. Celle du milieu est la 3e : la médiane est 7.\n\nIl y a deux valeurs avant 7 et deux valeurs après."
          },
          {
            type: "methode",
            titre: "Un nombre pair de valeurs",
            texte: "Série rangée : 2 ; 4 ; 6 ; 10.\n\nIl y a 4 valeurs. Les deux valeurs centrales sont 4 et 6. On prend habituellement leur moyenne :\n(4 + 6) ÷ 2 = 5.\n\nLa médiane retenue est 5. Elle n'est pas nécessairement une valeur observée."
          },
          {
            type: "definition",
            titre: "Le mode",
            texte: "Un mode est une valeur dont l'effectif est le plus élevé.\n\nDans la série 1 ; 1 ; 2 ; 2 ; 2 ; 3, le mode est 2 : cette valeur apparaît trois fois.\n\nPlusieurs valeurs peuvent avoir le même effectif maximal : il peut donc y avoir plusieurs modes."
          },
          {
            type: "definition",
            titre: "L'étendue",
            texte: "L'étendue mesure l'écart entre la plus grande et la plus petite valeur :\n\nétendue = valeur maximale - valeur minimale.\n\nPour 3 ; 5 ; 7 ; 8 ; 12, l'étendue vaut 12 - 3 = 9."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "• La moyenne utilise toutes les valeurs.\n• La médiane repère le milieu de la série rangée.\n• Le mode est une valeur la plus fréquente.\n• L'étendue mesure l'écart entre les extrêmes.\n\nCes nombres répondent à des questions différentes."
          }
        ]
      },
      {
        id: "m3-statistiques-graphiques",
        titre: "Lire et construire un diagramme",
        blocs: [
          {
            type: "definition",
            titre: "Le diagramme en bâtons",
            texte: "Un diagramme en bâtons permet de représenter les effectifs de différentes valeurs.\n\nSur l'axe horizontal, on place les valeurs étudiées. Sur l'axe vertical, on indique les effectifs. La hauteur de chaque bâton correspond à l'effectif de la valeur."
          },
          {
            type: "schema",
            titre: "Livres lus par les 10 élèves",
            svg: "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Diagramme en bâtons : 0 livre, 2 élèves ; 1 livre, 3 élèves ; 2 livres, 4 élèves ; 3 livres, 1 élève'><line x1='45' y1='170' x2='295' y2='170' stroke='#334155' stroke-width='2'/><line x1='45' y1='170' x2='45' y2='30' stroke='#334155' stroke-width='2'/><text x='20' y='174' font-size='13'>0</text><text x='20' y='144' font-size='13'>1</text><text x='20' y='114' font-size='13'>2</text><text x='20' y='84' font-size='13'>3</text><text x='20' y='54' font-size='13'>4</text><line x1='90' y1='170' x2='90' y2='110' stroke='#2563eb' stroke-width='8'/><line x1='145' y1='170' x2='145' y2='80' stroke='#2563eb' stroke-width='8'/><line x1='200' y1='170' x2='200' y2='50' stroke='#2563eb' stroke-width='8'/><line x1='255' y1='170' x2='255' y2='140' stroke='#2563eb' stroke-width='8'/><text x='90' y='190' text-anchor='middle' font-size='13'>0</text><text x='145' y='190' text-anchor='middle' font-size='13'>1</text><text x='200' y='190' text-anchor='middle' font-size='13'>2</text><text x='255' y='190' text-anchor='middle' font-size='13'>3</text><text x='170' y='212' text-anchor='middle' font-size='13'>Nombre de livres</text><text x='50' y='20' font-size='13'>Nombre d'élèves</text></svg>",
            legende: "Par exemple, le bâton au-dessus de 2 atteint 4 : quatre élèves ont lu deux livres."
          },
          {
            type: "methode",
            titre: "Construire un diagramme",
            texte: "1. Trace deux axes et indique ce qu'ils représentent.\n2. Choisis une graduation régulière pour les effectifs.\n3. Place les valeurs sur l'axe horizontal.\n4. Trace un bâton pour chaque valeur, jusqu'à la hauteur de son effectif.\n5. Donne un titre au diagramme."
          },
          {
            type: "remarque",
            titre: "Bien lire la graduation",
            texte: "Avant de lire un graphique, regarde les unités et la graduation des axes.\n\nUn dessin peut donner une impression trompeuse si l'on ne vérifie pas les nombres qu'il représente."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On demande à 20 élèves leur moyen de transport pour venir à l'école.\n\n1. Quelle est la population étudiée ?\n2. Quel est le caractère étudié ?\n3. Si 8 élèves viennent à pied, quel est l'effectif correspondant ?",
        correction: "1. La population est le groupe des 20 élèves interrogés.\n\n2. Le caractère étudié est le moyen de transport utilisé pour venir à l'école.\n\n3. L'effectif de la réponse « à pied » est 8 élèves."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Voici les notes de cinq élèves : 6 ; 8 ; 8 ; 10 ; 13.\n\n1. Quel est le mode ?\n2. Quelle est l'étendue ?",
        correction: "1. La note 8 apparaît deux fois ; les autres apparaissent une fois. Le mode est donc 8.\n\n2. La note maximale est 13 et la minimale est 6.\nÉtendue = 13 - 6 = 7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une classe de 40 élèves, 10 viennent à pied.\n\n1. Calcule la fréquence des élèves qui viennent à pied sous forme de fraction.\n2. Exprime-la en pourcentage.",
        correction: "1. Fréquence = effectif concerné ÷ effectif total = 10/40 = 1/4.\n\n2. 1/4 = 0,25 = 25 %.\n\nUn quart de la classe vient à pied."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule la moyenne des quatre notes suivantes : 9 ; 11 ; 12 ; 16.",
        correction: "On additionne les quatre notes :\n9 + 11 + 12 + 16 = 48.\n\nOn divise par le nombre de notes :\n48 ÷ 4 = 12.\n\nLa moyenne est 12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les nombres de frères et sœurs de huit élèves sont :\n\n0 ; 1 ; 1 ; 1 ; 2 ; 2 ; 3 ; 4.\n\n1. Calcule la médiane en prenant la moyenne des deux valeurs centrales.\n2. Donne le mode.\n3. Calcule l'étendue.",
        correction: "La série est déjà rangée dans l'ordre croissant.\n\n1. Il y a 8 valeurs. Les deux valeurs centrales sont la 4e et la 5e : 1 et 2.\nMédiane = (1 + 2) ÷ 2 = 1,5.\n\n2. La valeur 1 apparaît trois fois : le mode est 1.\n\n3. Étendue = 4 - 0 = 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On observe le nombre de buts marqués lors de 10 matchs :\n\n• 0 but : 2 matchs ;\n• 1 but : 3 matchs ;\n• 2 buts : 4 matchs ;\n• 3 buts : 1 match.\n\n1. Combien de matchs ont eu au plus 1 but ?\n2. Combien ont eu au plus 2 buts ?\n3. Quelle est la fréquence cumulée des matchs ayant eu au plus 2 buts ?",
        correction: "1. Au plus 1 but signifie 0 ou 1 but : 2 + 3 = 5 matchs.\n\n2. Au plus 2 buts signifie 0, 1 ou 2 buts : 2 + 3 + 4 = 9 matchs.\n\n3. Il y a 10 matchs au total. La fréquence cumulée est donc 9/10 = 0,9 = 90 %."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un groupe de 12 élèves, on relève le nombre de trajets à pied vers l'école pendant une semaine :\n\n• 0 trajet : 2 élèves ;\n• 1 trajet : 4 élèves ;\n• 2 trajets : 3 élèves ;\n• 3 trajets : 3 élèves.\n\n1. Vérifie l'effectif total.\n2. Calcule le nombre total de trajets, puis la moyenne par élève.\n3. Calcule la fréquence des élèves ayant effectué 3 trajets.\n4. Détermine le mode et la médiane.",
        correction: "1. Effectif total : 2 + 4 + 3 + 3 = 12 élèves.\n\n2. Nombre total de trajets :\n0 × 2 + 1 × 4 + 2 × 3 + 3 × 3\n= 0 + 4 + 6 + 9 = 19.\n\nMoyenne : 19/12 ≈ 1,58 trajet par élève.\n\n3. Fréquence de 3 trajets : 3/12 = 1/4 = 25 %.\n\n4. Le mode est 1 trajet : son effectif, 4, est le plus grand.\n\nPour la médiane, il y a 12 valeurs. Les deux valeurs centrales sont les 6e et 7e. En cumulant les effectifs, les valeurs 0 occupent les rangs 1 et 2 ; les valeurs 1 occupent les rangs 3 à 6 ; les valeurs 2 occupent les rangs 7 à 9. Les valeurs centrales sont donc 1 et 2.\n\nMédiane = (1 + 2) ÷ 2 = 1,5 trajet."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici les notes de deux groupes :\n\nGroupe A : 8 ; 10 ; 10 ; 12 ; 20.\nGroupe B : 10 ; 11 ; 12 ; 13 ; 14.\n\n1. Calcule la moyenne de chaque groupe.\n2. Trouve la médiane et l'étendue de chaque groupe.\n3. Les deux groupes ont-ils exactement les mêmes résultats ? Explique.",
        correction: "1. Groupe A :\n(8 + 10 + 10 + 12 + 20) ÷ 5 = 60 ÷ 5 = 12.\n\nGroupe B :\n(10 + 11 + 12 + 13 + 14) ÷ 5 = 60 ÷ 5 = 12.\n\nLes deux moyennes sont égales à 12.\n\n2. Les séries sont rangées et comptent chacune 5 notes. La médiane est donc la 3e valeur :\n• groupe A : médiane 10 ;\n• groupe B : médiane 12.\n\nÉtendue de A : 20 - 8 = 12.\nÉtendue de B : 14 - 10 = 4.\n\n3. Non. Les groupes ont la même moyenne, mais leurs notes ne sont pas les mêmes. Leur médiane et leur étendue sont différentes : les notes du groupe A sont plus étalées entre les deux extrêmes."
      }
    ]
  }
]);
