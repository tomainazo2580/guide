enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch17",
    titre: "Chapitre 17 : Matrices et résolution de systèmes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch17-l1",
        titre: "Leçon 1 : Écrire un système sous forme matricielle",
        blocs: [
          {
            type: "introduction",
            titre: "Rassembler les coefficients",
            texte: "Une matrice permet de présenter de manière compacte les coefficients d’un système linéaire. Cette écriture aide aussi à organiser sa résolution."
          },
          {
            type: "definition",
            titre: "Écriture AX = B",
            texte: "Dans l’écriture AX = B :\n• A est la matrice des coefficients des inconnues ;\n• X est la matrice colonne des inconnues ;\n• B est la matrice colonne des seconds membres.\n\nUne solution du système est une colonne X qui vérifie cette égalité."
          },
          {
            type: "exemple",
            titre: "Deux inconnues",
            texte: "Le système :\n2x + y = 5\nx − y = 1\n\ns’écrit AX = B avec :\nA = [[2, 1], [1, −1]], X = [[x], [y]] et B = [[5], [1]].\n\nEn effet, AX = [[2x + y], [x − y]]."
          },
          {
            type: "exemple",
            titre: "Trois inconnues",
            texte: "Le système :\nx + y + z = 6\n2x − y + z = 3\nx + 2y − z = 2\n\ns’écrit AX = B avec :\nA = [[1, 1, 1], [2, −1, 1], [1, 2, −1]],\nX = [[x], [y], [z]] et B = [[6], [3], [2]]."
          },
          {
            type: "remarque",
            titre: "Garder l’ordre",
            texte: "L’ordre des colonnes de A doit correspondre à l’ordre des inconnues dans X. Si une inconnue manque dans une équation, son coefficient est 0."
          }
        ]
      },

      {
        id: "tle-maths-ch17-l2",
        titre: "Leçon 2 : Inverse d’une matrice 2 × 2",
        blocs: [
          {
            type: "definition",
            titre: "Matrice inverse",
            texte: "Une matrice carrée A est inversible s’il existe une matrice A⁻¹ telle que AA⁻¹ = A⁻¹A = I, où I est la matrice identité de même ordre."
          },
          {
            type: "definition",
            titre: "Déterminant d’ordre 2",
            texte: "Pour A = [[a, b], [c, d]], le déterminant est :\n\ndet(A) = ad − bc.\n\nLa matrice A est inversible si et seulement si det(A) ≠ 0."
          },
          {
            type: "methode",
            titre: "Formule de l’inverse",
            texte: "Si det(A) = ad − bc ≠ 0, alors :\n\nA⁻¹ = (1/(ad − bc)) × [[d, −b], [−c, a]].\n\nOn échange les deux coefficients diagonaux et on change les signes des deux autres, puis on multiplie par l’inverse du déterminant."
          },
          {
            type: "exemple",
            titre: "Calculer une inverse",
            texte: "Soit A = [[2, 1], [1, 1]]. Son déterminant vaut 2 × 1 − 1 × 1 = 1.\n\nDonc A⁻¹ = [[1, −1], [−1, 2]].\n\nVérification : AA⁻¹ = [[1, 0], [0, 1]] = I₂."
          },
          {
            type: "remarque",
            titre: "Si le déterminant est nul",
            texte: "Si det(A) = 0, la formule de l’inverse ne s’applique pas et A n’est pas inversible. Un système AX = B peut alors avoir aucune solution ou une infinité de solutions : il faut étudier le système."
          }
        ]
      },

      {
        id: "tle-maths-ch17-l3",
        titre: "Leçon 3 : Résoudre avec l’inverse",
        blocs: [
          {
            type: "methode",
            titre: "De AX = B à X = A⁻¹B",
            texte: "Si A est inversible, on multiplie AX = B à gauche par A⁻¹ :\n\nA⁻¹AX = A⁻¹B, donc IX = A⁻¹B et X = A⁻¹B.\n\nL’ordre compte : on ne remplace pas A⁻¹B par BA⁻¹."
          },
          {
            type: "exemple",
            titre: "Résolution complète",
            texte: "Résolvons :\n2x + y = 5\nx + y = 3.\n\nOn pose A = [[2, 1], [1, 1]], X = [[x], [y]] et B = [[5], [3]]. Comme det(A) = 1, A est inversible et A⁻¹ = [[1, −1], [−1, 2]].\n\nX = A⁻¹B = [[1, −1], [−1, 2]][[5], [3]] = [[5 − 3], [−5 + 6]] = [[2], [1]].\n\nLa solution est (x ; y) = (2 ; 1). Vérification : 2 × 2 + 1 = 5 et 2 + 1 = 3."
          },
          {
            type: "definition",
            titre: "Unicité",
            texte: "Si A est une matrice carrée inversible, le système AX = B possède une unique solution, donnée par X = A⁻¹B."
          },
          {
            type: "remarque",
            titre: "Autres dimensions",
            texte: "La relation X = A⁻¹B reste valable pour toute matrice carrée inversible, notamment d’ordre 3 ou 4. La formule explicite de ce chapitre pour A⁻¹ ne concerne toutefois que les matrices 2 × 2."
          }
        ]
      },

      {
        id: "tle-maths-ch17-l4",
        titre: "Leçon 4 : Élimination et matrice augmentée",
        blocs: [
          {
            type: "definition",
            titre: "Matrice augmentée",
            texte: "Pour résoudre AX = B, on peut placer les coefficients de A et ceux de B dans un même tableau, appelé matrice augmentée et noté [A | B].\n\nChaque ligne représente une équation."
          },
          {
            type: "methode",
            titre: "Opérations sur les lignes",
            texte: "Les opérations suivantes conservent les solutions du système :\n• échanger deux lignes ;\n• multiplier une ligne par un nombre non nul ;\n• ajouter à une ligne un multiple d’une autre ligne.\n\nOn utilise ces opérations pour simplifier progressivement le système, puis on remonte vers les inconnues."
          },
          {
            type: "exemple",
            titre: "Élimination dans un système 3 × 3",
            texte: "Considérons :\nx + y + z = 6\n2x + y + z = 7\nx + 2y + z = 8.\n\nLa matrice augmentée est :\n[[1, 1, 1 | 6], [2, 1, 1 | 7], [1, 2, 1 | 8]].\n\nOn remplace L₂ par L₂ − 2L₁ et L₃ par L₃ − L₁ :\n[[1, 1, 1 | 6], [0, −1, −1 | −5], [0, 1, 0 | 2]].\n\nLa troisième ligne donne y = 2. La deuxième donne −y − z = −5, donc z = 3. La première donne x = 1.\n\nLa solution est (1 ; 2 ; 3)."
          },
          {
            type: "exemple",
            titre: "Reconnaître une contradiction",
            texte: "Une ligne [0, 0 | 4] représente l’équation 0x + 0y = 4, soit 0 = 4. Le système est impossible : il n’a aucune solution."
          },
          {
            type: "remarque",
            titre: "Une variable libre",
            texte: "Si certaines inconnues ne sont pas déterminées par les équations et qu’il n’y a pas de contradiction, on peut les exprimer à l’aide de paramètres. Le système possède alors une infinité de solutions."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écrire sous la forme AX = B le système x + 2y = 4 et 3x − y = 5.",
        correction: "On prend A = [[1, 2], [3, −1]], X = [[x], [y]] et B = [[4], [5]]. Alors AX = [[x + 2y], [3x − y]] = B."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer le déterminant de A = [[2, 3], [1, 4]].",
        correction: "det(A) = 2 × 4 − 3 × 1 = 8 − 3 = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La matrice A = [[1, 2], [2, 4]] est-elle inversible ?",
        correction: "det(A) = 1 × 4 − 2 × 2 = 0. Son déterminant est nul : A n’est pas inversible."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer l’inverse de A = [[1, 2], [0, 1]].",
        correction: "det(A) = 1 × 1 − 2 × 0 = 1.\nDonc A⁻¹ = [[1, −2], [0, 1]]. On peut vérifier que AA⁻¹ = I₂."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer l’inverse de A = [[3, 1], [1, 1]].",
        correction: "det(A) = 3 × 1 − 1 × 1 = 2 ≠ 0.\nAinsi A⁻¹ = (1/2)[[1, −1], [−1, 3]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre AX = B si A = [[1, 2], [0, 1]] et B = [[7], [3]].",
        correction: "La seconde ligne donne y = 3. La première donne x + 2y = 7, donc x = 1.\nAinsi X = [[1], [3]]. On retrouve aussi ce résultat avec A⁻¹ = [[1, −2], [0, 1]] : A⁻¹B = [[1], [3]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écrire la matrice augmentée du système 2x + y = 3 et x − 2y = 4.",
        correction: "La matrice des coefficients est A = [[2, 1], [1, −2]] et B = [[3], [4]]. La matrice augmentée est [[2, 1 | 3], [1, −2 | 4]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une matrice augmentée contient la ligne [0, 0 | −2]. Que peut-on conclure ?",
        correction: "Cette ligne représente 0x + 0y = −2, ce qui est impossible. Le système n’a aucune solution."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une matrice carrée A est inversible. Combien de solutions possède AX = B ?",
        correction: "Le système possède une unique solution : X = A⁻¹B."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre par l’inverse le système 3x + y = 7 et x + y = 3.",
        correction: "A = [[3, 1], [1, 1]] et B = [[7], [3]]. Comme det(A) = 2, on a A⁻¹ = (1/2)[[1, −1], [−1, 3]].\n\nX = A⁻¹B = (1/2)[[7 − 3], [−7 + 9]] = [[2], [1]].\nLa solution est (2 ; 1). Vérification : 3 × 2 + 1 = 7 et 2 + 1 = 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre par élimination le système x + y + z = 4, 2x + y + z = 5 et x + 2y + z = 6.",
        correction: "On soustrait la première équation de la deuxième : x = 1. On soustrait la première de la troisième : y = 2.\nDans la première équation, 1 + 2 + z = 4, donc z = 1.\nLa solution est (1 ; 2 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour A = [[2, 1], [4, 2]], étudier les solutions de AX = [[3], [6]].",
        correction: "Le système est 2x + y = 3 et 4x + 2y = 6. La seconde équation est le double de la première.\nEn posant x = t, on obtient y = 3 − 2t. Les solutions sont les couples (t ; 3 − 2t), pour t ∈ ℝ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour la même matrice A = [[2, 1], [4, 2]], étudier les solutions de AX = [[3], [7]].",
        correction: "Le système est 2x + y = 3 et 4x + 2y = 7. Doubler la première équation donne 4x + 2y = 6, ce qui contredit la seconde. Il n’y a aucune solution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne A = [[2, 1], [1, 1]] et C = [[1, −1], [−1, 2]]. Vérifier que C est l’inverse de A.",
        correction: "On calcule AC = [[2 × 1 + 1 × (−1), 2 × (−1) + 1 × 2], [1 × 1 + 1 × (−1), 1 × (−1) + 1 × 2]] = I₂.\n\nDe même, CA = [[1, 0], [0, 1]] = I₂. Donc C = A⁻¹."
      }
    ]
  }
]);
