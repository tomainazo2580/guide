enregistrerChapitres("2nde", "sp", [
  {
    id: 17,
    titre: "Chapitre 17 : Le travail et l’énergie mécanique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le travail d’une force",
        blocs: [
          {
            type: "introduction",
            titre: "Force et déplacement",
            texte: "Une personne qui pousse une charrette en déplacement lui transmet de l’énergie par son action mécanique. Le travail d’une force permet de quantifier ce transfert lors d’un déplacement."
          },
          {
            type: "definition",
            titre: "Travail d’une force constante",
            texte: "Pour une force constante F dont le point d’application se déplace en ligne droite de A à B, le travail est : W_AB(F) = F × AB × cos(α). L’angle α est l’angle entre la force et le déplacement de A vers B."
          },
          {
            type: "regle",
            titre: "Unités",
            texte: "La force F est en newtons (N), la distance AB en mètres (m) et le travail W en joules (J). Un joule correspond à un newton-mètre : 1 J = 1 N·m."
          },
          {
            type: "remarque",
            titre: "Joule et moment",
            texte: "Le travail et le moment d’une force ont des unités de mêmes dimensions, mais ce sont des grandeurs différentes. On exprime le travail en joules et le moment en newton-mètres."
          },
          {
            type: "schema",
            titre: "Force parallèle au déplacement",
            texte: "A •──────────────→• B\n      déplacement\n      F ─────────→\n\nLa force et le déplacement ont le même sens : α = 0°."
          },
          {
            type: "exemple",
            titre: "Calcul d’un travail",
            texte: "Une force constante de 20 N agit dans le sens d’un déplacement rectiligne de 3,0 m. Comme cos(0°) = 1 :\nW = 20 × 3,0 × 1 = 60 J."
          }
        ]
      },

      {
        id: 2,
        titre: "Signe du travail",
        blocs: [
          {
            type: "regle",
            titre: "Travail moteur",
            texte: "Le travail est positif lorsque la force possède une composante dans le sens du déplacement. On parle alors de travail moteur."
          },
          {
            type: "regle",
            titre: "Travail résistant",
            texte: "Le travail est négatif lorsque la force possède une composante opposée au déplacement. On parle alors de travail résistant."
          },
          {
            type: "regle",
            titre: "Travail nul",
            texte: "Le travail est nul si la force est perpendiculaire au déplacement, car cos(90°) = 0. Il est aussi nul si le point d’application ne se déplace pas."
          },
          {
            type: "tableau",
            titre: "Trois cas utiles",
            texte: "Même direction et même sens : α = 0°, donc W = F × AB.\n\nDirections perpendiculaires : α = 90°, donc W = 0.\n\nMême direction et sens opposés : α = 180°, donc W = −F × AB."
          },
          {
            type: "exemple",
            titre: "Frottement sur un sol",
            texte: "Une caisse glisse de 5,0 m vers la droite. Une force de frottement constante de 4,0 N agit vers la gauche. Son travail vaut W = −4,0 × 5,0 = −20 J : il est résistant."
          },
          {
            type: "remarque",
            titre: "Force perpendiculaire",
            texte: "Une force de travail nul n’est pas forcément nulle. Par exemple, pour un objet qui glisse horizontalement sur un support horizontal, la force normale verticale a un travail nul si son point d’application se déplace horizontalement."
          }
        ]
      },

      {
        id: 3,
        titre: "Travail du poids",
        blocs: [
          {
            type: "rappel",
            titre: "Le poids",
            texte: "Près de la surface terrestre, le poids d’un objet a pour valeur P = m × g. Il est vertical et dirigé vers le bas. La masse m est en kg et g en N·kg⁻¹."
          },
          {
            type: "regle",
            titre: "Expression du travail du poids",
            texte: "Près de la surface terrestre, si g est considéré constant et si l’altitude z est orientée vers le haut :\n\nW_AB(P) = m × g × (z_A − z_B).\n\nCe travail dépend de la différence d’altitude entre A et B, pas de la forme du trajet suivi."
          },
          {
            type: "exemple",
            titre: "Descente",
            texte: "Un objet de masse 2,0 kg descend de 3,0 m. Avec g = 10 N·kg⁻¹ :\nW(P) = 2,0 × 10 × 3,0 = +60 J.\n\nLe poids accompagne la descente : son travail est moteur."
          },
          {
            type: "exemple",
            titre: "Montée",
            texte: "Le même objet monte de 3,0 m. Avec g = 10 N·kg⁻¹ :\nW(P) = 2,0 × 10 × (−3,0) = −60 J.\n\nLe poids s’oppose à la montée : son travail est résistant."
          },
          {
            type: "remarque",
            titre: "Même altitude",
            texte: "Si les positions initiale et finale ont la même altitude, le travail total du poids entre ces positions est nul, même si le trajet comporte une montée puis une descente."
          }
        ]
      },

      {
        id: 4,
        titre: "Énergie cinétique",
        blocs: [
          {
            type: "definition",
            titre: "Énergie cinétique",
            texte: "L’énergie cinétique d’un objet en translation, de masse m et de vitesse de valeur v, est :\n\nE_c = ½ × m × v².\n\nElle s’exprime en joules si m est en kg et v en m/s."
          },
          {
            type: "exemple",
            titre: "Calcul",
            texte: "Un objet de masse 2,0 kg se déplace à 3,0 m/s.\n\nE_c = ½ × 2,0 × 3,0² = 9,0 J."
          },
          {
            type: "remarque",
            titre: "Influence de la vitesse",
            texte: "À masse égale, si la vitesse est multipliée par 2, l’énergie cinétique est multipliée par 4, car la vitesse est élevée au carré."
          },
          {
            type: "rappel",
            titre: "Référentiel",
            texte: "La vitesse dépend du référentiel choisi. L’énergie cinétique dépend donc elle aussi du référentiel."
          },
          {
            type: "methode",
            titre: "Calculer une énergie cinétique",
            texte: "1. Convertir la masse en kg et la vitesse en m/s.\n2. Calculer le carré de la vitesse.\n3. Appliquer E_c = ½mv².\n4. Donner le résultat en joules."
          }
        ]
      },

      {
        id: 5,
        titre: "Théorème de l’énergie cinétique",
        blocs: [
          {
            type: "regle",
            titre: "Énoncé",
            texte: "Dans un référentiel galiléen, la variation d’énergie cinétique d’un point matériel entre A et B est égale à la somme des travaux des forces qui s’exercent sur lui :\n\nE_c(B) − E_c(A) = somme des travaux des forces entre A et B."
          },
          {
            type: "remarque",
            titre: "Modèle utilisé",
            texte: "Ce théorème est utilisé ici pour un objet assimilé à un point matériel, ou pour une situation où ce modèle convient. Dans les exercices, le référentiel terrestre est supposé galiléen."
          },
          {
            type: "exemple",
            titre: "Résultante des travaux",
            texte: "Un objet possède une énergie cinétique initiale de 10 J. Entre A et B, une force effectue un travail de +30 J et une autre un travail de −8 J.\n\nΔE_c = 30 − 8 = 22 J.\nE_c(B) = 10 + 22 = 32 J."
          },
          {
            type: "methode",
            titre: "Utiliser le théorème",
            texte: "1. Définir l’objet et le référentiel.\n2. Faire le bilan des forces.\n3. Calculer le travail de chacune entre les positions considérées.\n4. Écrire E_c(B) − E_c(A) = somme des travaux.\n5. Utiliser E_c = ½mv² pour déterminer la vitesse si nécessaire."
          },
          {
            type: "remarque",
            titre: "Signe de la variation",
            texte: "Si la somme des travaux est positive, l’énergie cinétique augmente. Si elle est négative, l’énergie cinétique diminue. Si elle est nulle, l’énergie cinétique reste constante."
          }
        ]
      },

      {
        id: 6,
        titre: "Énergie potentielle et énergie mécanique",
        blocs: [
          {
            type: "definition",
            titre: "Énergie potentielle de pesanteur",
            texte: "Près de la surface terrestre, avec une altitude z orientée vers le haut et une référence choisie pour laquelle E_p = 0 à z = 0 :\n\nE_p = m × g × z.\n\nL’énergie potentielle s’exprime en joules."
          },
          {
            type: "remarque",
            titre: "Choix de la référence",
            texte: "La valeur de l’énergie potentielle dépend du niveau choisi comme référence. En revanche, sa variation entre deux positions ne dépend pas de ce choix."
          },
          {
            type: "regle",
            titre: "Lien avec le travail du poids",
            texte: "Entre A et B :\n\nΔE_p = E_p(B) − E_p(A) = m × g × (z_B − z_A).\n\nLe travail du poids est l’opposé de cette variation : W_AB(P) = −ΔE_p."
          },
          {
            type: "definition",
            titre: "Énergie mécanique",
            texte: "Dans les situations étudiées ici, l’énergie mécanique est la somme de l’énergie cinétique et de l’énergie potentielle de pesanteur :\n\nE_m = E_c + E_p."
          },
          {
            type: "regle",
            titre: "Conservation de l’énergie mécanique",
            texte: "Si le poids est la seule force qui effectue un travail sur l’objet, son énergie mécanique se conserve : E_m(A) = E_m(B). C’est le cas d’un modèle de chute où l’on néglige l’action de l’air."
          },
          {
            type: "remarque",
            titre: "En présence de frottements",
            texte: "Lorsque des frottements effectuent un travail résistant, l’énergie mécanique de l’objet peut diminuer. Cela ne signifie pas que l’énergie totale disparaît : une partie peut notamment être transférée sous forme d’énergie interne."
          }
        ]
      },

      {
        id: 7,
        titre: "Puissance mécanique",
        blocs: [
          {
            type: "definition",
            titre: "Puissance moyenne",
            texte: "La puissance mécanique moyenne associée à un travail W effectué pendant une durée Δt est :\n\nP_moy = W / Δt.\n\nElle s’exprime en watts (W) si W est en joules et Δt en secondes."
          },
          {
            type: "exemple",
            titre: "Soulever une charge",
            texte: "Une force effectue un travail moteur de 600 J pendant 30 s.\n\nP_moy = 600 / 30 = 20 W."
          },
          {
            type: "remarque",
            titre: "Travail et durée",
            texte: "Pour un même travail moteur, une durée plus courte correspond à une puissance moyenne plus grande. La puissance indique la rapidité du transfert d’énergie."
          },
          {
            type: "rappel",
            titre: "Conversion",
            texte: "1 kilowatt vaut 1 000 watts : 1 kW = 1 000 W. Une minute vaut 60 secondes."
          }
        ]
      },

      {
        id: 8,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "schema",
            titre: "Formules à retenir",
            texte: "Force constante, déplacement rectiligne :\nW = F × AB × cos(α)\n\nTravail du poids :\nW_AB(P) = m × g × (z_A − z_B)\n\nE_c = ½mv²\nE_p = mgz\nE_m = E_c + E_p\n\nΔE_c = somme des travaux\nP_moy = W / Δt"
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : oublier le sens de la force.\nÀ faire : déterminer l’angle entre force et déplacement pour trouver le signe du travail.\n\nErreur : utiliser une vitesse en km/h dans E_c = ½mv².\nÀ faire : convertir en m/s.\n\nErreur : oublier de mettre la vitesse au carré.\nÀ faire : calculer v² avant de multiplier.\n\nErreur : supposer que l’énergie mécanique se conserve malgré des frottements importants.\nÀ faire : examiner les forces et leurs travaux.\n\nErreur : confondre énergie et puissance.\nÀ faire : exprimer l’énergie en J et la puissance en W."
          },
          {
            type: "methode",
            titre: "Choisir une méthode",
            texte: "Pour relier des forces et une variation de vitesse, utiliser le théorème de l’énergie cinétique. Pour relier vitesse et altitude lorsque l’énergie mécanique se conserve, utiliser E_m(A) = E_m(B). Dans tous les cas, préciser les hypothèses et le référentiel."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une force constante de 8,0 N agit dans le même sens qu’un déplacement rectiligne de 2,0 m. Calcule son travail. On donne W = F × d pour une force parallèle et de même sens que le déplacement.",
        correction: "W = F × d = 8,0 × 2,0 = +16 J. Le travail est moteur."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une force est perpendiculaire au déplacement rectiligne de son point d’application. Que vaut son travail ?",
        correction: "Son travail est nul : l’angle vaut 90° et cos(90°) = 0."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 2,0 kg se déplace à 4,0 m/s. Calcule son énergie cinétique. On donne E_c = ½mv².",
        correction: "E_c = ½ × 2,0 × 4,0² = 16 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une caisse glisse de 6,0 m sur un sol horizontal. La force de frottement constante a une intensité de 5,0 N et est opposée au déplacement. Calcule son travail.",
        correction: "La force est opposée au déplacement : W = −F × d = −5,0 × 6,0 = −30 J. Le travail est résistant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 1,5 kg descend de 4,0 m. On prend g = 10 N·kg⁻¹. Calcule le travail de son poids. On donne W(P) = mg(z_A − z_B).",
        correction: "Lors d’une descente de 4,0 m, z_A − z_B = 4,0 m.\n\nW(P) = 1,5 × 10 × 4,0 = +60 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force effectue un travail de 1 200 J pendant 2,0 min. Calcule sa puissance moyenne. On donne P_moy = W / Δt.",
        correction: "Δt = 2,0 × 60 = 120 s.\n\nP_moy = 1 200 / 120 = 10 W."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet assimilé à un point matériel de masse 2,0 kg se déplace à 3,0 m/s en A. Entre A et B, la somme des travaux des forces exercées sur lui vaut +16 J. Dans le référentiel terrestre supposé galiléen, calcule son énergie cinétique en A puis en B et sa vitesse en B. On donne E_c = ½mv² et E_c(B) − E_c(A) = somme des travaux.",
        correction: "E_c(A) = ½ × 2,0 × 3,0² = 9,0 J.\n\nE_c(B) = 9,0 + 16 = 25 J.\n\nComme 25 = ½ × 2,0 × v_B², on obtient v_B² = 25 et v_B = 5,0 m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une caisse assimilée à un point matériel se déplace horizontalement de 4,0 m vers la droite. Une traction constante de 15 N agit vers la droite et un frottement constant de 3,0 N vers la gauche. Le poids et la force normale sont verticaux. Calcule le travail de chaque force et la somme des travaux.",
        correction: "Traction : W_T = +15 × 4,0 = +60 J.\n\nFrottement : W_f = −3,0 × 4,0 = −12 J.\n\nLe poids et la force normale sont perpendiculaires au déplacement : leurs travaux sont nuls.\n\nSomme : 60 − 12 = +48 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 3,0 kg est à l’altitude z = 5,0 m. On choisit E_p = 0 à z = 0 et on prend g = 10 N·kg⁻¹. Il se déplace à 2,0 m/s. Calcule son énergie potentielle, son énergie cinétique et son énergie mécanique. On donne E_p = mgz, E_c = ½mv² et E_m = E_c + E_p.",
        correction: "E_p = 3,0 × 10 × 5,0 = 150 J.\n\nE_c = ½ × 3,0 × 2,0² = 6,0 J.\n\nE_m = 150 + 6,0 = 156 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 2,0 kg monte de l’altitude 1,0 m à l’altitude 4,0 m. On prend g = 10 N·kg⁻¹ et E_p = mgz. Calcule la variation de son énergie potentielle et le travail de son poids.",
        correction: "ΔE_p = mg(z_B − z_A) = 2,0 × 10 × (4,0 − 1,0) = +60 J.\n\nLe travail du poids est l’opposé : W(P) = −60 J."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une balle assimilée à un point matériel de masse 0,50 kg est lâchée sans vitesse initiale à 5,0 m au-dessus du sol. On néglige l’air et on prend g = 10 N·kg⁻¹. Le sol est la référence z = 0. Dans le référentiel terrestre supposé galiléen, l’énergie mécanique se conserve. Calcule : 1. l’énergie mécanique au départ ; 2. l’énergie cinétique juste avant l’arrivée au sol ; 3. la vitesse juste avant l’arrivée. On donne E_p = mgz et E_c = ½mv².",
        correction: "1. Au départ, E_c = 0 et E_p = 0,50 × 10 × 5,0 = 25 J. Donc E_m = 25 J.\n\n2. Juste avant l’arrivée au sol, E_p = 0. Par conservation, E_c = 25 J.\n\n3. 25 = ½ × 0,50 × v², donc v² = 100 et v = 10 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une caisse assimilée à un point matériel de masse 4,0 kg se déplace sur un sol horizontal. Sa vitesse initiale est 2,0 m/s. Sur une distance de 5,0 m, une traction constante de 12 N agit dans le sens du déplacement et un frottement constant de 4,0 N en sens opposé. Le poids et la force normale sont perpendiculaires au déplacement. Dans le référentiel terrestre supposé galiléen, calcule : 1. le travail de chaque force ; 2. l’énergie cinétique finale ; 3. la vitesse finale. On donne E_c = ½mv² et ΔE_c = somme des travaux.",
        correction: "1. Traction : W_T = 12 × 5,0 = +60 J. Frottement : W_f = −4,0 × 5,0 = −20 J. Le poids et la force normale ont un travail nul. Somme : +40 J.\n\n2. E_c initiale = ½ × 4,0 × 2,0² = 8,0 J. Donc E_c finale = 8,0 + 40 = 48 J.\n\n3. 48 = ½ × 4,0 × v², donc v² = 24 et v ≈ 4,9 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet assimilé à un point matériel de masse 2,0 kg descend d’une hauteur de 3,0 m. Il part sans vitesse initiale. Le poids et une force de frottement sont les seules forces qui effectuent un travail ; le travail du frottement sur le trajet vaut −20 J. On prend g = 10 N·kg⁻¹ et le référentiel terrestre est supposé galiléen. 1. Calcule le travail du poids. 2. Calcule l’énergie cinétique finale et la vitesse finale. 3. L’énergie mécanique de l’objet est-elle conservée ? On donne E_c = ½mv² et ΔE_c = somme des travaux.",
        correction: "1. W(P) = mg × hauteur de descente = 2,0 × 10 × 3,0 = +60 J.\n\n2. La somme des travaux vaut 60 − 20 = +40 J. L’objet part sans vitesse : E_c initiale = 0. Donc E_c finale = 40 J.\n\n40 = ½ × 2,0 × v², donc v² = 40 et v ≈ 6,3 m/s.\n\n3. Non. Le frottement effectue un travail résistant de −20 J : dans ce modèle, l’énergie mécanique diminue de 20 J."
      }
    ]
  }
]);
