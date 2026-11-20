// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 7 : équations du premier degré.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-equations-premier-degre",
    titre: "Chapitre 7 : Équations du premier degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-equations-comprendre",
        titre: "Comprendre une équation",
        blocs: [
          {
            type: "introduction",
            titre: "Un nombre à découvrir",
            texte: "On pense à un nombre. On le multiplie par 2, puis on ajoute 3. On obtient 11. Quel était le nombre de départ ?\n\nSi on appelle ce nombre x, la question devient :\n\n2x + 3 = 11.\n\nCette égalité contenant un nombre inconnu est une équation."
          },
          {
            type: "definition",
            titre: "Inconnue et solution",
            texte: "Dans une équation, la lettre qui représente le nombre recherché s'appelle l'inconnue.\n\nRésoudre l'équation, c'est trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie. Ces valeurs sont les solutions.\n\nDans 2x + 3 = 11, l'inconnue est x. Le nombre 4 est une solution, car 2 × 4 + 3 = 11."
          },
          {
            type: "methode",
            titre: "Vérifier si un nombre est solution",
            texte: "Pour savoir si 3 est solution de 2x + 3 = 11, remplaçons x par 3 :\n\nÀ gauche : 2 × 3 + 3 = 9.\nÀ droite : 11.\n\nComme 9 ≠ 11, le nombre 3 n'est pas solution.\n\nEssayons 4 : 2 × 4 + 3 = 11. Les deux membres sont égaux, donc 4 est solution."
          },
          {
            type: "definition",
            titre: "Les deux membres",
            texte: "Dans une équation, l'expression à gauche du signe = est le membre de gauche ; celle à droite est le membre de droite.\n\nDans 2x + 3 = 11 :\n• le membre de gauche est 2x + 3 ;\n• le membre de droite est 11."
          },
          {
            type: "remarque",
            titre: "Une égalité à respecter",
            texte: "Pour résoudre une équation, on transforme les deux membres en conservant les mêmes solutions.\n\nNotre but est de laisser l'inconnue seule d'un côté. Nous apprendrons à le faire sans casser l'égalité."
          }
        ]
      },
      {
        id: "m3-equations-balance",
        titre: "Garder l'égalité : la méthode de la balance",
        blocs: [
          {
            type: "introduction",
            titre: "Une balance en équilibre",
            texte: "Imagine une balance en équilibre. Si on ajoute le même poids sur chacun des deux plateaux, elle reste en équilibre. Si on enlève le même poids de chaque côté, elle reste aussi en équilibre.\n\nPour une équation, on peut agir de la même façon sur les deux membres."
          },
          {
            type: "schema",
            titre: "La même opération des deux côtés",
            svg: "<svg viewBox='0 0 340 165' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Balance en équilibre illustrant x plus 3 égal à 7'><line x1='55' y1='45' x2='285' y2='45' stroke='#334155' stroke-width='4'/><polygon points='170,45 150,130 190,130' fill='#cbd5e1' stroke='#334155'/><line x1='55' y1='45' x2='55' y2='100' stroke='#334155' stroke-width='2'/><line x1='285' y1='45' x2='285' y2='100' stroke='#334155' stroke-width='2'/><line x1='15' y1='100' x2='95' y2='100' stroke='#334155' stroke-width='3'/><line x1='245' y1='100' x2='325' y2='100' stroke='#334155' stroke-width='3'/><text x='55' y='90' text-anchor='middle' font-size='18' fill='#1d4ed8'>x + 3</text><text x='285' y='90' text-anchor='middle' font-size='18' fill='#1d4ed8'>7</text><text x='170' y='155' text-anchor='middle' font-size='14' fill='#334155'>Retirer 3 des deux côtés : x = 4</text></svg>",
            legende: "L'égalité x + 3 = 7 est conservée si l'on retire 3 à chacun des deux membres."
          },
          {
            type: "regle",
            titre: "Ajouter ou soustraire",
            texte: "On peut ajouter un même nombre aux deux membres d'une équation, ou leur soustraire un même nombre, sans changer ses solutions.\n\nExemple :\nx + 3 = 7\nx + 3 - 3 = 7 - 3\nx = 4.\n\nVérification : 4 + 3 = 7."
          },
          {
            type: "regle",
            titre: "Multiplier ou diviser",
            texte: "On peut multiplier ou diviser les deux membres par un même nombre non nul sans changer les solutions.\n\nExemple :\n3x = 12\n3x ÷ 3 = 12 ÷ 3\nx = 4.\n\nVérification : 3 × 4 = 12.\n\nOn ne divise jamais par zéro."
          },
          {
            type: "remarque",
            titre: "Pourquoi non nul ?",
            texte: "La division par zéro n'est pas définie.\n\nDe plus, multiplier les deux membres par zéro ferait disparaître l'information : quelle que soit la valeur de x, les deux membres deviendraient 0. On risquerait alors de perdre l'équation de départ."
          },
          {
            type: "exemple",
            titre: "Avec un nombre négatif",
            texte: "Résolvons -2x = 8.\n\nOn divise les deux membres par -2 :\nx = 8 ÷ (-2) = -4.\n\nVérification : -2 × (-4) = 8."
          }
        ]
      },
      {
        id: "m3-equations-resoudre",
        titre: "Résoudre une équation du premier degré",
        blocs: [
          {
            type: "definition",
            titre: "La forme ax + b = 0",
            texte: "Une équation du premier degré à une inconnue peut, après simplification, s'écrire sous la forme :\n\nax + b = 0, avec a ≠ 0.\n\nL'inconnue x n'apparaît alors qu'à la puissance 1. Par exemple, 3x - 6 = 0 est du premier degré.\n\nSi le coefficient de x disparaît après réduction, il faut examiner le résultat : l'équation peut avoir aucune solution ou une infinité de solutions."
          },
          {
            type: "methode",
            titre: "Premier exemple : 3x + 5 = 20",
            texte: "Nous voulons laisser x seul.\n\n3x + 5 = 20\n3x + 5 - 5 = 20 - 5\n3x = 15\nx = 15 ÷ 3\nx = 5.\n\nVérification : 3 × 5 + 5 = 20.\n\nLa solution est donc 5."
          },
          {
            type: "methode",
            titre: "Des x dans les deux membres",
            texte: "Résolvons 5x + 2 = 2x + 11.\n\nOn soustrait 2x aux deux membres :\n5x - 2x + 2 = 11\n3x + 2 = 11.\n\nOn soustrait 2 aux deux membres :\n3x = 9.\n\nOn divise par 3 :\nx = 3.\n\nVérification : 5 × 3 + 2 = 17 et 2 × 3 + 11 = 17."
          },
          {
            type: "methode",
            titre: "Avec une parenthèse",
            texte: "Résolvons 2(x + 3) = 14.\n\nOn peut d'abord développer :\n2x + 6 = 14\n2x = 14 - 6\n2x = 8\nx = 4.\n\nVérification dans l'équation de départ : 2(4 + 3) = 2 × 7 = 14.\n\nOn peut aussi commencer par diviser les deux membres par 2 : x + 3 = 7."
          },
          {
            type: "methode",
            titre: "Avec une fraction",
            texte: "Résolvons x/3 + 2 = 7.\n\nOn soustrait 2 aux deux membres :\nx/3 = 5.\n\nOn multiplie les deux membres par 3 :\nx = 15.\n\nVérification : 15/3 + 2 = 5 + 2 = 7."
          },
          {
            type: "remarque",
            titre: "Une fraction peut être la solution",
            texte: "La solution n'est pas toujours un entier.\n\nPour 2x = 3, on divise les deux membres par 2 :\nx = 3/2 = 1,5.\n\nVérification : 2 × 3/2 = 3."
          }
        ]
      },
      {
        id: "m3-equations-cas-particuliers",
        titre: "Examiner les cas particuliers",
        blocs: [
          {
            type: "introduction",
            titre: "Quand les x disparaissent",
            texte: "Après développement et réduction, il arrive que les termes contenant x s'annulent. On ne doit pas alors essayer de diviser par zéro : il faut lire l'égalité obtenue."
          },
          {
            type: "exemple",
            titre: "Aucune solution",
            texte: "Résolvons 2x + 3 = 2x + 5.\n\nOn soustrait 2x aux deux membres :\n3 = 5.\n\nCette égalité est fausse. Aucune valeur de x ne peut rendre l'équation vraie : elle n'a pas de solution."
          },
          {
            type: "exemple",
            titre: "Une infinité de solutions",
            texte: "Résolvons 2(x + 1) = 2x + 2.\n\nOn développe : 2x + 2 = 2x + 2.\nOn soustrait 2x : 2 = 2.\n\nCette égalité est toujours vraie. Tout nombre réel x est solution : il y a une infinité de solutions."
          },
          {
            type: "remarque",
            titre: "Bien distinguer les deux cas",
            texte: "Après avoir fait disparaître les x :\n\n• si l'égalité obtenue est fausse, comme 3 = 5, il n'y a aucune solution ;\n• si elle est toujours vraie, comme 2 = 2, tout nombre réel est solution.\n\nDans les deux exemples, les transformations utilisées conservent les solutions."
          }
        ]
      },
      {
        id: "m3-equations-problemes",
        titre: "Résoudre un problème avec une équation",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes à suivre",
            texte: "1. Choisis l'inconnue et précise ce qu'elle représente.\n2. Traduis les informations de l'énoncé par une équation.\n3. Résous cette équation.\n4. Vérifie que le résultat convient à l'énoncé.\n5. Rédige une phrase de réponse avec l'unité si nécessaire."
          },
          {
            type: "exemple",
            titre: "Des cahiers et un stylo",
            texte: "Trois cahiers identiques et un stylo à 2 000 Ar coûtent ensemble 11 000 Ar. Quel est le prix d'un cahier ?\n\n1. Soit x le prix d'un cahier, en ariary.\n2. Les trois cahiers coûtent 3x. On écrit : 3x + 2 000 = 11 000.\n3. Donc 3x = 9 000, puis x = 3 000.\n4. Vérification : 3 × 3 000 + 2 000 = 11 000.\n5. Un cahier coûte 3 000 Ar."
          },
          {
            type: "exemple",
            titre: "Un périmètre",
            texte: "Un rectangle a une largeur de 4 m. Sa longueur mesure 3 m de plus que sa largeur. Quel est son périmètre ?\n\nIci, on peut calculer directement : longueur = 4 + 3 = 7 m.\nPérimètre = 2 × (7 + 4) = 22 m.\n\nUne équation n'est pas toujours nécessaire. Elle est surtout utile lorsque la grandeur recherchée est inconnue."
          },
          {
            type: "remarque",
            titre: "Le résultat doit convenir au problème",
            texte: "Une équation peut donner un résultat mathématique qui ne convient pas à la situation.\n\nPar exemple, si x représente un nombre de personnes, une valeur négative ou non entière ne convient pas. Il faut donc vérifier le sens de la réponse, pas seulement le calcul."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On considère l'équation 2x + 1 = 9.\n\n1. Le nombre 3 est-il solution ?\n2. Le nombre 4 est-il solution ?",
        correction: "1. Pour x = 3 : 2 × 3 + 1 = 7. Comme 7 ≠ 9, 3 n'est pas solution.\n\n2. Pour x = 4 : 2 × 4 + 1 = 9. Les deux membres sont égaux, donc 4 est solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résous et vérifie :\n\n1. x + 5 = 12\n2. 4x = 20",
        correction: "1. On soustrait 5 aux deux membres :\nx = 12 - 5 = 7.\nVérification : 7 + 5 = 12.\n\n2. On divise les deux membres par 4 :\nx = 20 ÷ 4 = 5.\nVérification : 4 × 5 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous et vérifie :\n\n1. 3x + 4 = 19\n2. 5x - 7 = 8",
        correction: "1. 3x + 4 = 19\n3x = 19 - 4 = 15\nx = 15 ÷ 3 = 5.\nVérification : 3 × 5 + 4 = 19.\n\n2. 5x - 7 = 8\n5x = 8 + 7 = 15\nx = 15 ÷ 5 = 3.\nVérification : 5 × 3 - 7 = 8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous les équations :\n\n1. -3x = 12\n2. x/4 + 2 = 5\n3. 2x = 7",
        correction: "1. On divise par -3 : x = 12 ÷ (-3) = -4.\nVérification : -3 × (-4) = 12.\n\n2. On soustrait 2 : x/4 = 3. On multiplie par 4 : x = 12.\nVérification : 12/4 + 2 = 5.\n\n3. On divise par 2 : x = 7/2 = 3,5.\nVérification : 2 × 3,5 = 7."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous et vérifie :\n\n1. 4x + 3 = 2x + 13\n2. 3(x - 2) = 12",
        correction: "1. On soustrait 2x aux deux membres :\n2x + 3 = 13.\nOn soustrait 3 : 2x = 10.\nOn divise par 2 : x = 5.\nVérification : 4 × 5 + 3 = 23 et 2 × 5 + 13 = 23.\n\n2. On développe : 3x - 6 = 12.\nOn ajoute 6 : 3x = 18.\nOn divise par 3 : x = 6.\nVérification : 3(6 - 2) = 12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour chaque équation, indique si elle a une solution, aucune solution ou une infinité de solutions. Justifie.\n\n1. 2x + 4 = 2x + 7\n2. 3(x + 1) = 3x + 3\n3. 5x - 1 = 9",
        correction: "1. En soustrayant 2x, on obtient 4 = 7, ce qui est faux. Il n'y a aucune solution.\n\n2. En développant, on obtient 3x + 3 = 3x + 3, puis 3 = 3. Cette égalité est toujours vraie : tout nombre réel est solution.\n\n3. On ajoute 1 : 5x = 10. On divise par 5 : x = 2. Il y a une seule solution, 2.\nVérification : 5 × 2 - 1 = 9."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Au marché, deux paquets de riz de même prix et un paquet de haricots à 4 000 Ar coûtent ensemble 19 000 Ar.\n\n1. Choisis une inconnue et écris une équation.\n2. Trouve le prix d'un paquet de riz.\n3. Vérifie avec les prix de l'énoncé.",
        correction: "1. Soit x le prix d'un paquet de riz, en ariary. Deux paquets coûtent 2x. Avec les haricots :\n2x + 4 000 = 19 000.\n\n2. On soustrait 4 000 aux deux membres :\n2x = 15 000.\nOn divise par 2 :\nx = 7 500.\n\n3. Vérification : 2 × 7 500 + 4 000 = 15 000 + 4 000 = 19 000.\n\nUn paquet de riz coûte 7 500 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a un périmètre de 30 m. Sa longueur mesure 3 m de plus que sa largeur.\n\n1. En appelant x la largeur en mètres, exprime la longueur.\n2. Écris une équation traduisant le périmètre.\n3. Trouve les dimensions du rectangle et vérifie.",
        correction: "1. La largeur est x mètres. La longueur mesure 3 m de plus : elle vaut x + 3 mètres.\n\n2. Le périmètre d'un rectangle est 2 × (longueur + largeur). On obtient :\n2(x + 3 + x) = 30.\n\n3. Réduisons et résolvons :\n2(2x + 3) = 30\n4x + 6 = 30\n4x = 24\nx = 6.\n\nLa largeur est 6 m et la longueur est 6 + 3 = 9 m.\n\nVérification : 2 × (6 + 9) = 30 m. Les deux dimensions sont positives et conviennent au problème."
      }
    ]
  }
]);
