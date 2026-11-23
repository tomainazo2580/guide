enregistrerChapitres("2nde", "maths", [{
  id: "m2-statistiques-descriptives",
  titre: "Chapitre 22 : Statistiques descriptives",
  premium: false,
  guide: false,

  lecons: [
    {
      id: "m2-ch22-vocabulaire",
      titre: "1. Vocabulaire des statistiques",
      blocs: [
        {
          type: "introduction",
          titre: "Étudier une série statistique",
          texte: "Les statistiques permettent de recueillir, d'organiser et de résumer des données. Dans ce chapitre, les séries numériques utilisées comme exemples sont fictives."
        },
        {
          type: "definition",
          titre: "Population et caractère",
          texte: "La population est l'ensemble des individus étudiés. Le caractère est la propriété observée sur chaque individu. Il peut être qualitatif, comme une couleur, ou quantitatif, comme une taille ou une note."
        },
        {
          type: "definition",
          titre: "Caractère quantitatif",
          texte: "Un caractère quantitatif discret prend des valeurs isolées, par exemple le nombre d'enfants d'une famille. Un caractère quantitatif continu peut prendre toute valeur d'un intervalle, par exemple une durée ou une longueur mesurée."
        },
        {
          type: "definition",
          titre: "Effectif et fréquence",
          texte: "L'effectif d'une valeur est le nombre d'individus qui présentent cette valeur. L'effectif total N est la somme des effectifs. La fréquence d'une valeur est son effectif divisé par N. Pour l'exprimer en pourcentage, on multiplie cette fréquence par 100."
        },
        {
          type: "exemple",
          titre: "Lire un effectif",
          texte: "Dans un groupe fictif de 20 élèves, 5 ont choisi le football. L'effectif correspondant est 5 et sa fréquence est 5/20 = 0,25, soit 25 %."
        },
        {
          type: "remarque",
          titre: "Vérification",
          texte: "La somme des effectifs est N. La somme des fréquences est 1, soit 100 %. Avec des fréquences arrondies, la somme affichée peut être légèrement différente de 1."
        }
      ]
    },

    {
      id: "m2-ch22-tableaux",
      titre: "2. Tableaux et fréquences cumulées",
      blocs: [
        {
          type: "tableau",
          titre: "Exemple de série ordonnée",
          entetes: ["Note", "8", "10", "12", "14", "Total"],
          lignes: [
            ["Effectif", "2", "3", "4", "1", "10"],
            ["Fréquence", "0,2", "0,3", "0,4", "0,1", "1"],
            ["Effectif cumulé croissant", "2", "5", "9", "10", "—"],
            ["Fréquence cumulée croissante", "0,2", "0,5", "0,9", "1", "—"]
          ]
        },
        {
          type: "definition",
          titre: "Effectif cumulé croissant",
          texte: "Après avoir rangé les valeurs dans l'ordre croissant, l'effectif cumulé croissant associé à une valeur est le nombre d'individus dont la valeur est inférieure ou égale à celle-ci."
        },
        {
          type: "exemple",
          titre: "Interpréter un cumul",
          texte: "Dans le tableau précédent, l'effectif cumulé associé à 12 est 2 + 3 + 4 = 9. Cela signifie que 9 élèves sur 10 ont une note inférieure ou égale à 12."
        },
        {
          type: "definition",
          titre: "Fréquence cumulée croissante",
          texte: "La fréquence cumulée croissante est l'effectif cumulé croissant divisé par l'effectif total. Elle indique la proportion d'individus dont la valeur est inférieure ou égale à la valeur considérée."
        },
        {
          type: "exemple",
          titre: "Passer au pourcentage",
          texte: "Dans le tableau, la fréquence cumulée associée à 10 vaut 5/10 = 0,5, soit 50 %. Ainsi, 50 % des élèves ont une note inférieure ou égale à 10."
        },
        {
          type: "remarque",
          titre: "Dernier cumul",
          texte: "Le dernier effectif cumulé croissant est égal à l'effectif total N. La dernière fréquence cumulée croissante vaut 1, soit 100 %."
        },
        {
          type: "definition",
          titre: "Cumul décroissant",
          texte: "L'effectif cumulé décroissant associé à une valeur est le nombre d'individus dont la valeur est supérieure ou égale à celle-ci. La fréquence cumulée décroissante est cet effectif divisé par N."
        },
        {
          type: "exemple",
          titre: "Lire un cumul décroissant",
          texte: "Dans le tableau précédent, les notes supérieures ou égales à 12 ont pour effectifs 4 et 1. L'effectif cumulé décroissant associé à 12 est donc 5 et la fréquence correspondante est 5/10 = 0,5."
        }
      ]
    },

    {
      id: "m2-ch22-position",
      titre: "3. Mode, moyenne et médiane",
      blocs: [
        {
          type: "definition",
          titre: "Mode",
          texte: "Pour une série à valeurs isolées, un mode est une valeur dont l'effectif est maximal. Une série peut avoir plusieurs modes si plusieurs valeurs ont le même effectif maximal."
        },
        {
          type: "exemple",
          titre: "Trouver le mode",
          texte: "Pour les notes 8, 10, 12 et 14 d'effectifs respectifs 2, 3, 4 et 1, l'effectif maximal est 4. Le mode est donc 12."
        },
        {
          type: "definition",
          titre: "Moyenne pondérée",
          texte: "Si les valeurs sont x₁, x₂, …, xₚ, avec les effectifs n₁, n₂, …, nₚ, la moyenne est : x̄ = (n₁x₁ + n₂x₂ + … + nₚxₚ)/N, où N = n₁ + n₂ + … + nₚ."
        },
        {
          type: "exemple",
          titre: "Calcul de la moyenne",
          texte: "Pour les notes 8, 10, 12 et 14 d'effectifs 2, 3, 4 et 1 : x̄ = (2 × 8 + 3 × 10 + 4 × 12 + 1 × 14)/10 = 108/10 = 10,8."
        },
        {
          type: "definition",
          titre: "Médiane",
          texte: "On range les N valeurs dans l'ordre croissant, en tenant compte des répétitions. Si N est impair, la médiane est la valeur centrale, de rang (N + 1)/2. Si N est pair, on prend ici la moyenne des valeurs de rangs N/2 et N/2 + 1."
        },
        {
          type: "exemple",
          titre: "Une médiane avec un effectif pair",
          texte: "Dans la série du tableau, N = 10. Les valeurs de rangs 5 et 6 sont respectivement 10 et 12 : le cumul atteint 5 à la note 10, puis 9 à la note 12. La médiane est donc (10 + 12)/2 = 11."
        },
        {
          type: "remarque",
          titre: "Moyenne et médiane",
          texte: "La moyenne utilise toutes les valeurs et peut être fortement influencée par une valeur extrême. La médiane partage la série ordonnée : au moins la moitié des valeurs lui sont inférieures ou égales et au moins la moitié lui sont supérieures ou égales."
        }
      ]
    },

    {
      id: "m2-ch22-dispersion",
      titre: "4. Étendue, variance et écart-type",
      blocs: [
        {
          type: "definition",
          titre: "Étendue",
          texte: "L'étendue d'une série est la différence entre sa plus grande valeur et sa plus petite valeur : étendue = maximum − minimum. Elle donne une première indication sur la dispersion."
        },
        {
          type: "exemple",
          titre: "Calcul de l'étendue",
          texte: "Pour les valeurs 8, 10, 12 et 14, l'étendue est 14 − 8 = 6."
        },
        {
          type: "definition",
          titre: "Variance",
          texte: "La variance mesure la dispersion autour de la moyenne. Pour une série de valeurs xᵢ d'effectifs nᵢ et de moyenne x̄ : V = [n₁(x₁ − x̄)² + n₂(x₂ − x̄)² + … + nₚ(xₚ − x̄)²]/N. Elle est toujours positive ou nulle."
        },
        {
          type: "regle",
          titre: "Autre formule de la variance",
          texte: "On peut aussi calculer V = (n₁x₁² + n₂x₂² + … + nₚxₚ²)/N − x̄². Autrement dit, la variance est la moyenne des carrés moins le carré de la moyenne."
        },
        {
          type: "definition",
          titre: "Écart-type",
          texte: "L'écart-type est la racine carrée de la variance : σ = √V. Il s'exprime dans la même unité que les valeurs de la série. La variance s'exprime dans l'unité au carré."
        },
        {
          type: "exemple",
          titre: "Calcul complet",
          texte: "Considérons la série 2, 2, 4, 4. Sa moyenne est x̄ = 12/4 = 3. Sa variance est V = [2(2 − 3)² + 2(4 − 3)²]/4 = (2 + 2)/4 = 1. Son écart-type est σ = √1 = 1."
        },
        {
          type: "methode",
          titre: "Calculer avec la seconde formule",
          texte: "Pour la même série, la moyenne des carrés est (2 × 2² + 2 × 4²)/4 = 40/4 = 10. On soustrait le carré de la moyenne : V = 10 − 3² = 1, puis σ = 1."
        },
        {
          type: "remarque",
          titre: "Interprétation",
          texte: "Une variance ou un écart-type nul signifie que toutes les valeurs de la série sont égales. Pour deux séries exprimées dans la même unité, l'écart-type aide à comparer leur dispersion autour de leurs moyennes respectives."
        }
      ]
    },

    {
      id: "m2-ch22-representations",
      titre: "5. Représentations graphiques",
      blocs: [
        {
          type: "definition",
          titre: "Diagramme en bâtons",
          texte: "Pour un caractère quantitatif discret, on peut représenter chaque valeur par un bâton dont la hauteur est proportionnelle à son effectif ou à sa fréquence. Les bâtons sont séparés."
        },
        {
          type: "definition",
          titre: "Diagramme circulaire",
          texte: "Dans un diagramme circulaire, chaque catégorie correspond à un secteur. L'angle du secteur est égal à 360° multiplié par sa fréquence. Par exemple, une fréquence de 0,25 correspond à un angle de 90°."
        },
        {
          type: "definition",
          titre: "Histogramme",
          texte: "Pour des données regroupées en classes, un histogramme utilise des rectangles accolés. L'aire de chaque rectangle est proportionnelle à l'effectif ou à la fréquence de la classe. Si les classes ont la même largeur, on peut prendre des hauteurs proportionnelles aux effectifs."
        },
        {
          type: "remarque",
          titre: "Classes de largeurs différentes",
          texte: "Si les classes n'ont pas la même largeur, on ne prend pas directement l'effectif comme hauteur. On peut utiliser la densité d'effectif : hauteur = effectif de la classe/largeur de la classe. L'aire du rectangle représente alors l'effectif."
        },
        {
          type: "definition",
          titre: "Données regroupées en classes",
          texte: "Une classe telle que [10 ; 15[ comprend les valeurs supérieures ou égales à 10 et strictement inférieures à 15. Son centre est (10 + 15)/2 = 12,5 et sa largeur est 15 − 10 = 5."
        },
        {
          type: "methode",
          titre: "Estimer une moyenne à partir de classes",
          texte: "Lorsque seules les classes et leurs effectifs sont connus, on peut remplacer chaque valeur d'une classe par le centre de cette classe, puis calculer une moyenne pondérée. Le résultat est une estimation : la moyenne exacte des données initiales n'est pas forcément connue."
        },
        {
          type: "exemple",
          titre: "Moyenne estimée",
          texte: "Une série fictive compte 4 valeurs dans [0 ; 10[ et 6 dans [10 ; 20[. Les centres des classes sont 5 et 15. La moyenne estimée est (4 × 5 + 6 × 15)/10 = 11."
        },
        {
          type: "remarque",
          titre: "Lire un graphique avec prudence",
          texte: "Toujours lire le titre, les unités, les effectifs, les bornes des classes et l'échelle. Une représentation graphique résume les données : elle ne donne pas nécessairement chaque valeur exacte."
        }
      ]
    }
  ],

  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Dans un groupe fictif de 25 élèves, 10 choisissent le basket. Donne l'effectif et la fréquence de ce choix, puis exprime cette fréquence en pourcentage.",
      correction: "L'effectif est 10. La fréquence est 10/25 = 0,4, soit 40 %."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Pour la série 3, 5, 5, 7, 8, donne le mode et l'étendue.",
      correction: "La valeur 5 apparaît deux fois : c'est le mode. L'étendue vaut 8 − 3 = 5."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Une série contient les valeurs 2, 4 et 6 avec les effectifs respectifs 3, 2 et 5. Calcule l'effectif total et la moyenne.",
      correction: "L'effectif total est N = 3 + 2 + 5 = 10. La moyenne vaut (3 × 2 + 2 × 4 + 5 × 6)/10 = (6 + 8 + 30)/10 = 4,4."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Détermine la médiane de chacune des séries suivantes : A : 2, 3, 6, 7, 9 ; B : 1, 4, 5, 8.",
      correction: "La série A comporte 5 valeurs : celle du milieu, de rang 3, est 6. Sa médiane est 6. La série B comporte 4 valeurs : sa médiane est la moyenne des valeurs de rangs 2 et 3, soit (4 + 5)/2 = 4,5."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un diagramme circulaire, une catégorie représente 30 % des individus. Quel est l'angle de son secteur ?",
      correction: "La fréquence 30 % vaut 0,30. L'angle du secteur est donc 360° × 0,30 = 108°."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Une série fictive de notes comporte les valeurs 6, 8, 10 et 12 avec les effectifs respectifs 2, 3, 4 et 1. 1. Calcule les effectifs cumulés croissants. 2. Détermine la fréquence des notes inférieures ou égales à 10. 3. Donne la médiane selon la convention du cours.",
      correction: "1. Les effectifs cumulés croissants sont 2 ; 2 + 3 = 5 ; 5 + 4 = 9 ; 9 + 1 = 10. 2. La fréquence cherchée est 9/10 = 0,9, soit 90 %. 3. Il y a 10 notes. La note de rang 5 est 8 et celle de rang 6 est 10. La médiane vaut donc (8 + 10)/2 = 9."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "On considère la série 1, 1, 3, 3. Calcule sa moyenne, sa variance et son écart-type.",
      correction: "La moyenne est (1 + 1 + 3 + 3)/4 = 2. La variance vaut V = [2(1 − 2)² + 2(3 − 2)²]/4 = (2 + 2)/4 = 1. L'écart-type vaut σ = √1 = 1."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Une série fictive est regroupée ainsi : 3 valeurs dans [0 ; 10[, 5 valeurs dans [10 ; 20[ et 2 valeurs dans [20 ; 30[. Estime la moyenne à l'aide des centres des classes. Pourquoi le résultat n'est-il pas nécessairement exact ?",
      correction: "Les centres sont 5, 15 et 25. L'effectif total vaut 10. La moyenne estimée est (3 × 5 + 5 × 15 + 2 × 25)/10 = 140/10 = 14. Ce résultat n'est qu'une estimation car les valeurs réelles à l'intérieur de chaque classe ne sont pas connues."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un histogramme, la classe [0 ; 5[ a un effectif de 10 et la classe [5 ; 15[ a un effectif de 20. On choisit des rectangles dont l'aire représente l'effectif. Calcule leurs hauteurs.",
      correction: "La première classe a une largeur de 5 : sa hauteur est 10/5 = 2. La seconde a une largeur de 10 : sa hauteur est 20/10 = 2. Les hauteurs sont égales, mais les aires valent respectivement 5 × 2 = 10 et 10 × 2 = 20."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Une série fictive prend les valeurs 2, 4 et 6 avec les effectifs respectifs 1, 2 et 1. 1. Calcule la moyenne et la médiane. 2. Calcule la variance et l'écart-type. 3. On ajoute 3 à chacune des valeurs. Donne la nouvelle moyenne et le nouvel écart-type.",
      correction: "1. N = 4 et la moyenne vaut (1 × 2 + 2 × 4 + 1 × 6)/4 = 16/4 = 4. La série ordonnée est 2, 4, 4, 6 : la médiane est (4 + 4)/2 = 4. 2. V = [(2 − 4)² + 2(4 − 4)² + (6 − 4)²]/4 = (4 + 0 + 4)/4 = 2. Donc σ = √2. 3. La nouvelle série est 5, 7, 7, 9 : sa moyenne est 7. Les écarts à la moyenne restent −2, 0, 0 et 2. La variance reste 2 et l'écart-type reste √2."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Deux groupes fictifs ont les séries de notes suivantes : groupe A : 8, 8, 12, 12 ; groupe B : 9, 9, 11, 11. 1. Calcule la moyenne de chaque groupe. 2. Calcule leur variance et leur écart-type. 3. Compare les résultats.",
      correction: "1. Pour A, la moyenne est (8 + 8 + 12 + 12)/4 = 10. Pour B, elle est (9 + 9 + 11 + 11)/4 = 10. 2. Pour A, V = [2(8 − 10)² + 2(12 − 10)²]/4 = 4 et σ = 2. Pour B, V = [2(9 − 10)² + 2(11 − 10)²]/4 = 1 et σ = 1. 3. Les deux groupes ont la même moyenne, mais les notes du groupe B sont moins dispersées autour de cette moyenne."
    }
  ]
}]);
