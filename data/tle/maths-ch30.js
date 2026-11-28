enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch30",
    titre: "Chapitre 30 : Statistiques à deux variables et ajustement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch30-l1",
        titre: "Leçon 1 : Séries doubles et nuage de points",
        blocs: [
          {
            type: "introduction",
            titre: "Étudier deux caractères ensemble",
            texte: "Une série statistique à deux variables associe à chaque individu deux valeurs numériques. On peut par exemple relever, pour chaque élève, le nombre d’heures de révision x et une note y.\n\nChaque observation forme un couple (xᵢ ; yᵢ). Il faut conserver les valeurs par paires : mélanger les notes entre élèves changerait la relation étudiée."
          },
          {
            type: "tableau",
            titre: "Exemple de série double",
            entetes: ["Observation", "1", "2", "3", "4"],
            lignes: [
              ["Heures x", "1", "2", "3", "4"],
              ["Note y", "8", "10", "11", "15"]
            ]
          },
          {
            type: "definition",
            titre: "Nuage de points",
            texte: "Dans un repère du plan, on représente chaque couple (xᵢ ; yᵢ) par un point. L’ensemble obtenu est le nuage de points.\n\nUn nuage peut suggérer une tendance croissante, décroissante ou aucune tendance linéaire nette. La représentation ne prouve pas à elle seule qu’une variable cause l’autre."
          },
          {
            type: "schema",
            titre: "Nuage correspondant à l’exemple",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 230'><line x1='45' y1='190' x2='350' y2='190' stroke='#334155' stroke-width='2'/><line x1='45' y1='190' x2='45' y2='20' stroke='#334155' stroke-width='2'/><circle cx='105' cy='110' r='5' fill='#2563eb'/><circle cx='165' cy='90' r='5' fill='#2563eb'/><circle cx='225' cy='80' r='5' fill='#2563eb'/><circle cx='285' cy='40' r='5' fill='#2563eb'/><text x='100' y='208' font-size='12'>1</text><text x='160' y='208' font-size='12'>2</text><text x='220' y='208' font-size='12'>3</text><text x='280' y='208' font-size='12'>4</text><text x='24' y='114' font-size='12'>8</text><text x='17' y='94' font-size='12'>10</text><text x='17' y='84' font-size='12'>11</text><text x='17' y='44' font-size='12'>15</text><text x='285' y='225' font-size='12'>Heures x</text><text x='50' y='18' font-size='12'>Note y</text></svg>",
            legende: "Les points suggèrent ici une tendance croissante : les notes tendent à augmenter avec les heures de révision."
          },
          {
            type: "remarque",
            titre: "Corrélation et causalité",
            texte: "Une association entre deux variables ne prouve pas que l’une provoque l’autre. D’autres facteurs peuvent intervenir, et le nombre d’observations peut être trop faible pour généraliser."
          }
        ]
      },

      {
        id: "tle-maths-ch30-l2",
        titre: "Leçon 2 : Point moyen et covariance",
        blocs: [
          {
            type: "definition",
            titre: "Point moyen",
            texte: "Pour N couples (xᵢ ; yᵢ), les moyennes sont :\n\nx̄ = (Σxᵢ)/N et ȳ = (Σyᵢ)/N.\n\nLe point G(x̄ ; ȳ) est le point moyen du nuage. Si les couples ont des effectifs, chaque couple est pondéré par son effectif."
          },
          {
            type: "exemple",
            titre: "Calculer le point moyen",
            texte: "Pour les couples (1 ; 8), (2 ; 10), (3 ; 11) et (4 ; 15) :\n\nx̄ = (1 + 2 + 3 + 4)/4 = 2,5 ;\nȳ = (8 + 10 + 11 + 15)/4 = 11.\n\nLe point moyen est G(2,5 ; 11)."
          },
          {
            type: "definition",
            titre: "Covariance",
            texte: "La covariance mesure la variation conjointe des deux variables :\n\ncov(x, y) = (Σ(xᵢ − x̄)(yᵢ − ȳ))/N.\n\nUne formule équivalente est cov(x, y) = (Σxᵢyᵢ)/N − x̄ȳ.\n\nUne covariance positive correspond à une tendance linéaire globalement croissante ; une covariance négative à une tendance linéaire globalement décroissante. Une covariance nulle n’exclut pas une relation non linéaire."
          },
          {
            type: "exemple",
            titre: "Calculer une covariance",
            texte: "Pour les quatre couples précédents :\n\nΣxᵢyᵢ = 1 × 8 + 2 × 10 + 3 × 11 + 4 × 15 = 121.\n\nDonc cov(x, y) = 121/4 − 2,5 × 11 = 30,25 − 27,5 = 2,75."
          },
          {
            type: "remarque",
            titre: "Effet des unités",
            texte: "La covariance dépend des unités choisies pour x et y. Son seul nombre ne permet donc pas de comparer directement la force de relations exprimées dans des unités différentes."
          }
        ]
      },

      {
        id: "tle-maths-ch30-l3",
        titre: "Leçon 3 : Droite de régression de y en x",
        blocs: [
          {
            type: "definition",
            titre: "Ajustement affine par les moindres carrés",
            texte: "Lorsque le nuage présente une tendance approximativement rectiligne, on peut ajuster y en fonction de x par une droite :\n\nŷ = ax + b.\n\nLa méthode des moindres carrés choisit a et b pour rendre minimale la somme des carrés des écarts verticaux yᵢ − ŷᵢ."
          },
          {
            type: "texte",
            titre: "Formules",
            texte: "Si la variance V(x) est non nulle, les coefficients de la droite de régression de y en x sont :\n\na = cov(x, y)/V(x) et b = ȳ − ax̄.\n\nLa droite passe par le point moyen G(x̄ ; ȳ). Elle sert à estimer y à partir de x : inverser le rôle des variables conduit en général à une autre droite."
          },
          {
            type: "methode",
            titre: "Calculer la droite",
            texte: "1. Calculer x̄ et ȳ.\n2. Calculer V(x) = (Σxᵢ²)/N − x̄².\n3. Calculer cov(x, y) = (Σxᵢyᵢ)/N − x̄ȳ.\n4. Calculer a = cov(x, y)/V(x), puis b = ȳ − ax̄.\n5. Écrire ŷ = ax + b et vérifier que G appartient à la droite."
          },
          {
            type: "exemple",
            titre: "Ajuster la série de l’exemple",
            texte: "Pour les couples (1 ; 8), (2 ; 10), (3 ; 11), (4 ; 15), on a x̄ = 2,5, ȳ = 11 et cov(x, y) = 2,75.\n\nV(x) = (1² + 2² + 3² + 4²)/4 − 2,5² = 7,5 − 6,25 = 1,25.\n\na = 2,75/1,25 = 2,2 et b = 11 − 2,2 × 2,5 = 5,5.\n\nLa droite de régression de y en x est donc ŷ = 2,2x + 5,5."
          },
          {
            type: "remarque",
            titre: "Estimation et limites",
            texte: "Pour x = 3,5, le modèle précédent donne ŷ = 13,2. C’est une estimation, pas une valeur certaine.\n\nUne estimation à l’intérieur des valeurs observées est une interpolation. Une estimation en dehors de cet intervalle est une extrapolation : elle peut être particulièrement risquée."
          }
        ]
      },

      {
        id: "tle-maths-ch30-l4",
        titre: "Leçon 4 : Corrélation et interprétation",
        blocs: [
          {
            type: "definition",
            titre: "Coefficient de corrélation linéaire",
            texte: "Si les écarts-types σx et σy sont non nuls, le coefficient de corrélation linéaire est :\n\nr = cov(x, y)/(σxσy).\n\nIl vérifie −1 ≤ r ≤ 1. Une valeur proche de 1 indique une forte association linéaire croissante ; une valeur proche de −1 indique une forte association linéaire décroissante."
          },
          {
            type: "texte",
            titre: "Cas particuliers",
            texte: "Si r = 1 ou r = −1, les points sont alignés sur une droite non horizontale, respectivement croissante ou décroissante.\n\nSi r est proche de 0, l’association linéaire est faible, mais une relation non linéaire peut exister. Si l’une des variables est constante, son écart-type est nul et r n’est pas défini."
          },
          {
            type: "exemple",
            titre: "Relation non linéaire",
            texte: "Considérons les couples (−1 ; 1), (0 ; 0) et (1 ; 1). Ici y = x² pour chaque couple.\n\nOn a x̄ = 0 et Σxᵢyᵢ = −1 + 0 + 1 = 0, donc cov(x, y) = 0. Les deux écarts-types sont non nuls, ainsi r = 0. Pourtant, les points suivent exactement la relation non linéaire y = x²."
          },
          {
            type: "methode",
            titre: "Rédiger une interprétation",
            texte: "1. Décrire la forme et le sens du nuage.\n2. Donner l’équation de la droite d’ajustement et préciser quelle variable elle estime.\n3. Si demandé et défini, calculer r et interpréter son signe et sa proximité avec −1 ou 1.\n4. Présenter toute prévision comme une estimation et signaler une extrapolation.\n5. Ne pas conclure à une causalité sur la seule base de la corrélation."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour les couples (1 ; 2), (2 ; 4) et (3 ; 6), calculer x̄ et ȳ.",
        correction: "x̄ = (1 + 2 + 3)/3 = 2 et ȳ = (2 + 4 + 6)/3 = 4. Le point moyen est G(2 ; 4)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un nuage monte globalement de gauche à droite. Quelle tendance linéaire suggère-t-il ?",
        correction: "Il suggère une tendance linéaire croissante : les grandes valeurs de x sont généralement associées à de grandes valeurs de y. Cela ne prouve pas une causalité."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La droite d’ajustement est ŷ = 3x + 2. Estimer y pour x = 4.",
        correction: "On remplace x par 4 : ŷ = 3 × 4 + 2 = 14. La valeur 14 est une estimation."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que signifie une covariance négative ?",
        correction: "Elle indique une tendance linéaire globalement décroissante : les écarts à leurs moyennes tendent à être de signes opposés. Elle ne prouve pas une relation de cause à effet."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Les valeurs observées de x vont de 2 à 10. Une estimation pour x = 15 est-elle une interpolation ou une extrapolation ?",
        correction: "15 est hors de l’intervalle observé [2 ; 10] : c’est une extrapolation, à interpréter avec prudence."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour les couples (1 ; 3), (2 ; 5) et (3 ; 7), calculer le point moyen.",
        correction: "x̄ = (1 + 2 + 3)/3 = 2 et ȳ = (3 + 5 + 7)/3 = 5. Le point moyen est G(2 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour les couples (1 ; 2), (2 ; 4) et (3 ; 6), calculer cov(x, y).",
        correction: "On a x̄ = 2 et ȳ = 4. De plus, Σxᵢyᵢ = 1 × 2 + 2 × 4 + 3 × 6 = 28. Donc cov(x, y) = 28/3 − 2 × 4 = 4/3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour les couples (1 ; 2), (2 ; 4) et (3 ; 6), déterminer la droite de régression de y en x.",
        correction: "x̄ = 2, ȳ = 4 et cov(x, y) = 4/3. De plus, V(x) = (1² + 2² + 3²)/3 − 2² = 14/3 − 4 = 2/3.\nDonc a = (4/3)/(2/3) = 2 et b = 4 − 2 × 2 = 0. La droite est ŷ = 2x."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une droite de régression de y en x a pour pente a = −2 et passe par G(3 ; 7). Déterminer son équation.",
        correction: "On écrit ŷ = −2x + b. Comme G appartient à la droite, 7 = −2 × 3 + b, donc b = 13. L’équation est ŷ = −2x + 13."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une série a cov(x, y) = −6, σx = 2 et σy = 4. Calculer r et interpréter son signe.",
        correction: "r = −6/(2 × 4) = −0,75. Son signe négatif indique une association linéaire décroissante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour toutes les observations, x vaut 5, tandis que y varie. Peut-on calculer la droite de régression de y en x avec la formule du cours ?",
        correction: "Non. Toutes les valeurs de x sont égales, donc V(x) = 0. La formule a = cov(x, y)/V(x) n’est pas définie ; les données ne permettent pas de déterminer une pente unique."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour les couples (0 ; 1), (1 ; 3) et (2 ; 2), calculer la droite de régression de y en x.",
        correction: "x̄ = 1 et ȳ = 2. La moyenne des carrés de x est (0 + 1 + 4)/3 = 5/3, donc V(x) = 5/3 − 1 = 2/3.\nLa moyenne des produits xy est (0 + 3 + 4)/3 = 7/3, donc cov(x, y) = 7/3 − 1 × 2 = 1/3.\nAinsi a = (1/3)/(2/3) = 1/2 et b = 2 − (1/2) × 1 = 3/2. La droite est ŷ = x/2 + 3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les couples (−1 ; 1), (0 ; 0) et (1 ; 1) vérifient-ils une relation ? Calculer leur covariance et expliquer pourquoi elle ne suffit pas à décrire cette relation.",
        correction: "Les trois couples vérifient y = x². On a x̄ = 0, ȳ = 2/3 et Σxᵢyᵢ = −1 + 0 + 1 = 0. Donc cov(x, y) = 0/3 − 0 × 2/3 = 0.\nLa covariance nulle ne révèle pas cette relation exacte, car elle mesure seulement une association linéaire."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. On observe les couples (1 ; 8), (2 ; 10), (3 ; 11) et (4 ; 15). 1. Calculer le point moyen. 2. Déterminer la droite de régression de y en x. 3. Estimer y pour x = 3,5. 4. Expliquer pourquoi cette estimation ne démontre pas une causalité.",
        correction: "1. x̄ = 2,5 et ȳ = 11, donc G(2,5 ; 11).\n2. V(x) = 30/4 − 2,5² = 1,25 et cov(x, y) = 121/4 − 2,5 × 11 = 2,75. Ainsi a = 2,75/1,25 = 2,2 et b = 11 − 2,2 × 2,5 = 5,5. La droite est ŷ = 2,2x + 5,5.\n3. Pour x = 3,5, ŷ = 2,2 × 3,5 + 5,5 = 13,2. C’est une interpolation car 3,5 est entre les valeurs observées 1 et 4.\n4. La droite décrit une association dans les données. D’autres facteurs peuvent intervenir ; l’ajustement ne prouve pas que x cause y."
      }
    ]
  }
]);
