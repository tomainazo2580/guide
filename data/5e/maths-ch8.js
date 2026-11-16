enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch8",
    titre: "Chapitre 8 : Calcul littéral",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch8-lecon1",
        titre: "1. Pourquoi utiliser des lettres ?",
        blocs: [
          {
            type: "texte",
            titre: "Un nombre qui peut changer",
            texte: "En calcul littéral, une lettre représente un nombre. Cette lettre permet d’écrire un calcul valable pour plusieurs valeurs, sans recommencer toute la phrase à chaque fois."
          },
          {
            type: "exemple",
            titre: "Le prix de plusieurs cahiers",
            texte: "Un cahier coûte 1 500 Ar. Si on achète x cahiers, le prix total est 1 500 × x Ar. Si x = 2, le prix est 3 000 Ar ; si x = 4, il est 6 000 Ar."
          },
          {
            type: "definition",
            titre: "Expression littérale",
            texte: "Une expression littérale est une expression qui contient une ou plusieurs lettres représentant des nombres. Par exemple : 2 × x + 3."
          },
          {
            type: "exemple",
            titre: "Une formule géométrique",
            texte: "Le périmètre d’un carré de côté c est c + c + c + c, soit 4 × c. Cette formule convient à tous les carrés, à condition d’utiliser la même unité pour les longueurs."
          },
          {
            type: "remarque",
            titre: "La lettre n’est pas une unité",
            texte: "Dans 4 × c, la lettre c désigne la longueur du côté. L’unité, par exemple le centimètre, doit être précisée séparément."
          }
        ]
      },

      {
        id: "maths5-ch8-lecon2",
        titre: "2. Écrire une expression littérale",
        blocs: [
          {
            type: "regle",
            titre: "Simplifier le signe de multiplication",
            texte: "On peut omettre le signe × entre un nombre et une lettre : 3 × x s’écrit 3x. De même, 4 × (x + 2) s’écrit 4(x + 2)."
          },
          {
            type: "exemple",
            titre: "Attention à la lecture",
            texte: "3x signifie 3 × x, et non 3 + x. Si x = 5, alors 3x = 3 × 5 = 15, tandis que 3 + x = 8."
          },
          {
            type: "texte",
            titre: "Deux lettres et une même lettre répétée",
            texte: "Le produit a × b peut s’écrire ab. Le produit x × x s’écrit x². Par exemple, si x = 4, alors x² = 4 × 4 = 16."
          },
          {
            type: "remarque",
            titre: "Les nombres entre eux",
            texte: "On conserve le signe de multiplication entre deux nombres : 3 × 4 ne s’écrit pas 34. Le nombre 34 signifie trente-quatre."
          },
          {
            type: "exemple",
            titre: "Traduire une phrase",
            texte: "« Le double de x augmenté de 5 » s’écrit 2x + 5. « Le double de la somme de x et de 5 » s’écrit 2(x + 5). Les parenthèses changent le calcul."
          }
        ]
      },

      {
        id: "maths5-ch8-lecon3",
        titre: "3. Calculer la valeur d’une expression",
        blocs: [
          {
            type: "methode",
            titre: "Remplacer la lettre",
            texte: "1. Recopie l’expression. 2. Remplace la lettre par la valeur donnée. 3. Ajoute des parenthèses si la valeur est négative. 4. Effectue les calculs en respectant les priorités."
          },
          {
            type: "exemple",
            titre: "Avec un nombre positif",
            texte: "Pour x = 4, l’expression 3x + 2 vaut 3 × 4 + 2 = 12 + 2 = 14."
          },
          {
            type: "exemple",
            titre: "Avec un nombre négatif",
            texte: "Pour x = −2, l’expression 3x + 2 vaut 3 × (−2) + 2 = −6 + 2 = −4."
          },
          {
            type: "exemple",
            titre: "Avec un carré",
            texte: "Pour x = −3, l’expression x² + 1 vaut (−3)² + 1 = 9 + 1 = 10. Les parenthèses montrent que la base est −3."
          },
          {
            type: "remarque",
            titre: "Une lettre peut prendre plusieurs valeurs",
            texte: "La valeur d’une expression dépend de la valeur donnée à sa lettre. L’expression 3x + 2 vaut 14 pour x = 4, mais elle vaut −4 pour x = −2."
          }
        ]
      },

      {
        id: "maths5-ch8-lecon4",
        titre: "4. Réduire une expression",
        blocs: [
          {
            type: "definition",
            titre: "Réduire",
            texte: "Réduire une expression, c’est regrouper les termes de même nature pour l’écrire plus simplement, sans changer sa valeur."
          },
          {
            type: "exemple",
            titre: "Regrouper les termes en x",
            texte: "3x + 2x = 5x. On peut le comprendre ainsi : 3 fois x plus 2 fois x font 5 fois x."
          },
          {
            type: "exemple",
            titre: "Regrouper aussi les nombres",
            texte: "3x + 4 + 2x + 1 = 3x + 2x + 4 + 1 = 5x + 5."
          },
          {
            type: "exemple",
            titre: "Avec une soustraction",
            texte: "7x − 2x = 5x. De même, 4x − 6x = −2x."
          },
          {
            type: "remarque",
            titre: "Termes différents",
            texte: "On ne peut pas regrouper 3x et 2 en un seul terme : 3x + 2 reste 3x + 2. De même, x² et x ne sont pas des termes de même nature : x² + x ne se réduit pas en 2x."
          },
          {
            type: "exemple",
            titre: "Vérifier avec une valeur",
            texte: "Pour x = 2, 3x + 2x = 6 + 4 = 10 et 5x = 10. Les deux expressions donnent bien le même résultat pour cette valeur. Une telle vérification peut aider à repérer une erreur, mais ne suffit pas à prouver une égalité pour toutes les valeurs."
          }
        ]
      },

      {
        id: "maths5-ch8-lecon5",
        titre: "5. Développer",
        blocs: [
          {
            type: "definition",
            titre: "Développer",
            texte: "Développer une expression, c’est transformer un produit en une somme ou une différence grâce à la distributivité."
          },
          {
            type: "regle",
            titre: "Distribuer la multiplication",
            texte: "Pour tous nombres a, b et c : a(b + c) = ab + ac. De même : a(b − c) = ab − ac."
          },
          {
            type: "exemple",
            titre: "Avec une addition",
            texte: "3(x + 4) = 3 × x + 3 × 4 = 3x + 12. Le facteur 3 multiplie chacun des deux termes de la parenthèse."
          },
          {
            type: "exemple",
            titre: "Avec une soustraction",
            texte: "5(x − 2) = 5 × x − 5 × 2 = 5x − 10."
          },
          {
            type: "exemple",
            titre: "Puis réduire",
            texte: "2(x + 3) + x = 2x + 6 + x = 3x + 6. On développe d’abord, puis on regroupe les termes en x."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier un terme",
            texte: "3(x + 4) n’est pas égal à 3x + 4 : il faut multiplier à la fois x et 4 par 3."
          }
        ]
      },

      {
        id: "maths5-ch8-lecon6",
        titre: "6. Factoriser",
        blocs: [
          {
            type: "definition",
            titre: "Factoriser",
            texte: "Factoriser une expression, c’est transformer une somme ou une différence en un produit. On cherche pour cela un facteur commun aux termes."
          },
          {
            type: "regle",
            titre: "La distributivité dans l’autre sens",
            texte: "Pour tous nombres a, b et c : ab + ac = a(b + c), et ab − ac = a(b − c). Le facteur commun a est placé devant la parenthèse."
          },
          {
            type: "exemple",
            titre: "Repérer le facteur commun",
            texte: "Dans 3x + 12, on peut écrire 12 = 3 × 4. Donc 3x + 12 = 3 × x + 3 × 4 = 3(x + 4). Le facteur commun est 3."
          },
          {
            type: "exemple",
            titre: "Avec une différence",
            texte: "5x − 10 = 5 × x − 5 × 2 = 5(x − 2)."
          },
          {
            type: "methode",
            titre: "Vérifier sa factorisation",
            texte: "Développe le résultat pour voir si tu retrouves l’expression de départ. Par exemple, 4(x + 3) = 4x + 12 : c’est bien une factorisation de 4x + 12."
          },
          {
            type: "remarque",
            titre: "Développer et factoriser",
            texte: "Développer transforme un produit en somme ou différence. Factoriser fait le chemin inverse. Les expressions obtenues ont la même valeur pour chaque valeur choisie de la lettre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Que signifie 5x : 5 + x ou 5 × x ?",
        correction: "5x signifie 5 × x. C’est le produit de 5 par x."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sans le signe × : a) 4 × x ; b) 3 × (x + 2).",
        correction: "a) 4x. b) 3(x + 2)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris une expression pour « le triple de x augmenté de 4 ».",
        correction: "Le triple de x est 3x. L’expression cherchée est donc 3x + 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule 2x + 3 pour x = 4.",
        correction: "Pour x = 4 : 2x + 3 = 2 × 4 + 3 = 8 + 3 = 11."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule 5x − 1 pour x = −2.",
        correction: "Pour x = −2 : 5x − 1 = 5 × (−2) − 1 = −10 − 1 = −11."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Réduis : a) 4x + 3x ; b) 9x − 2x.",
        correction: "a) 4x + 3x = 7x. b) 9x − 2x = 7x."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Réduis : 2x + 5 + 3x + 1.",
        correction: "On regroupe les termes en x et les nombres : 2x + 3x + 5 + 1 = 5x + 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Développe : 4(x + 2).",
        correction: "4(x + 2) = 4 × x + 4 × 2 = 4x + 8."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Développe : 3(x − 5).",
        correction: "3(x − 5) = 3 × x − 3 × 5 = 3x − 15."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Développe et réduis : 2(x + 4) + 3x.",
        correction: "2(x + 4) + 3x = 2x + 8 + 3x = 5x + 8."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Factorise 6x + 18 en utilisant le facteur commun 6.",
        correction: "6x + 18 = 6 × x + 6 × 3 = 6(x + 3)."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Factorise 4x − 8 en utilisant le facteur commun 4.",
        correction: "4x − 8 = 4 × x − 4 × 2 = 4(x − 2)."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un carré a un côté de longueur c cm. Écris son périmètre en fonction de c, puis calcule-le pour c = 6.",
        correction: "Le périmètre est c + c + c + c = 4c cm. Pour c = 6, il vaut 4 × 6 = 24 cm."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Calcule x² + 2x pour x = −3.",
        correction: "Pour x = −3 : x² + 2x = (−3)² + 2 × (−3) = 9 − 6 = 3."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève écrit 2(x + 5) = 2x + 5. Explique son erreur et corrige.",
        correction: "Il a oublié de multiplier 5 par 2. Le facteur 2 doit multiplier chaque terme : 2(x + 5) = 2x + 10."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme que x² + x = 2x. Vérifie son affirmation pour x = 3. Que constates-tu ?",
        correction: "Pour x = 3, x² + x = 9 + 3 = 12, tandis que 2x = 6. Les résultats sont différents : l’égalité n’est donc pas vraie pour toutes les valeurs de x."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Développe et réduis 3(x + 2) + 2(x + 1). Puis calcule sa valeur pour x = 2.",
        correction: "3(x + 2) + 2(x + 1) = 3x + 6 + 2x + 2 = 5x + 8. Pour x = 2, cela donne 5 × 2 + 8 = 18."
      }
    ]
  }
]);
