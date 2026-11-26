enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-energie-cinetique-potentielle",
    titre: "Chapitre 5 : Énergie cinétique, énergie potentielle et conservation de l'énergie",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch5-energie-cinetique",
        titre: "1. Énergie cinétique",
        blocs: [
          {
            type: "introduction",
            titre: "L'énergie associée au mouvement",
            texte: "Un objet en mouvement possède une énergie cinétique. Sa valeur dépend de sa masse, de sa vitesse et du référentiel choisi."
          },
          {
            type: "definition",
            titre: "Expression",
            texte: "Pour un point matériel de masse m et de vitesse de norme v, l'énergie cinétique est Ec = 1/2 mv². Si m est en kilogrammes et v en mètres par seconde, Ec est en joules, de symbole J."
          },
          {
            type: "exemple",
            titre: "Influence de la vitesse",
            texte: "Pour un objet de masse 2 kg se déplaçant à 3 m/s, Ec = 1/2 × 2 × 3² = 9 J. Si sa vitesse est doublée à 6 m/s, Ec = 36 J : elle est multipliée par 4."
          },
          {
            type: "regle",
            titre: "Théorème de l'énergie cinétique",
            texte: "Dans un référentiel galiléen, pour un point matériel de masse constante, Ec(B) − Ec(A) est égale à la somme des travaux des forces exercées sur lui entre A et B."
          },
          {
            type: "remarque",
            titre: "Vitesse et énergie",
            texte: "L'énergie cinétique dépend du carré de la norme de la vitesse : elle est toujours positive ou nulle. Une vitesse algébrique négative ne donne pas une énergie cinétique négative."
          }
        ]
      },
      {
        id: "sp1-ch5-energie-potentielle",
        titre: "2. Énergie potentielle de pesanteur",
        blocs: [
          {
            type: "definition",
            titre: "Énergie liée à la position",
            texte: "Près de la surface terrestre, dans un champ de pesanteur uniforme, l'énergie potentielle de pesanteur d'un objet peut s'écrire Epp = mgz + C, où z est l'altitude mesurée vers le haut et C une constante choisie selon le niveau de référence."
          },
          {
            type: "regle",
            titre: "Choix du niveau de référence",
            texte: "Si l'on choisit Epp = 0 au niveau z = 0, alors Epp = mgz. Le choix du niveau zéro change les valeurs de Epp, mais pas ses variations entre deux positions."
          },
          {
            type: "regle",
            titre: "Lien avec le travail du poids",
            texte: "Entre A et B, la variation d'énergie potentielle de pesanteur est ΔEpp = Epp(B) − Epp(A) = mg(zB − zA). Le travail du poids vaut WAB(P⃗) = −ΔEpp = mg(zA − zB)."
          },
          {
            type: "exemple",
            titre: "Élévation d'un objet",
            texte: "Un objet de masse 2 kg monte de 5 m. Avec g = 10 N/kg, son énergie potentielle augmente de 2 × 10 × 5 = 100 J. Pendant cette montée, le travail du poids vaut −100 J."
          },
          {
            type: "schema",
            titre: "Énergie potentielle et altitude",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 430 260' role='img' aria-label='Deux positions A et B d’un objet ; B est plus haut que A. La différence d’altitude est h et l’énergie potentielle augmente de m g h lors de la montée.'><rect width='430' height='260' fill='white'/><line x1='45' y1='215' x2='390' y2='215' stroke='#555' stroke-width='2'/><line x1='100' y1='170' x2='330' y2='170' stroke='#aaa' stroke-dasharray='5 4'/><line x1='100' y1='70' x2='330' y2='70' stroke='#aaa' stroke-dasharray='5 4'/><circle cx='150' cy='170' r='8' fill='#1769aa'/><circle cx='150' cy='70' r='8' fill='#c43b35'/><line x1='295' y1='170' x2='295' y2='70' stroke='#333' stroke-width='2'/><line x1='288' y1='170' x2='302' y2='170' stroke='#333'/><line x1='288' y1='70' x2='302' y2='70' stroke='#333'/><text x='130' y='192' font-size='14'>A</text><text x='130' y='63' font-size='14'>B</text><text x='305' y='125' font-size='14'>h</text><text x='55' y='237' font-size='13'>niveau de référence</text><text x='190' y='40' font-size='14'>ΔEpp = mgh</text></svg>",
            legende: "Lors d'une montée de hauteur h, l'énergie potentielle de pesanteur augmente de mgh."
          }
        ]
      },
      {
        id: "sp1-ch5-energie-mecanique",
        titre: "3. Énergie mécanique et conservation",
        blocs: [
          {
            type: "definition",
            titre: "Énergie mécanique",
            texte: "Dans les situations étudiées ici, l'énergie mécanique est la somme de l'énergie cinétique et de l'énergie potentielle de pesanteur : Em = Ec + Epp."
          },
          {
            type: "regle",
            titre: "Conservation sans travail dissipatif",
            texte: "Si seul le poids travaille, ou si les autres forces ont un travail total nul, l'énergie mécanique se conserve : Em(A) = Em(B). L'énergie peut passer de la forme potentielle à la forme cinétique, ou inversement."
          },
          {
            type: "exemple",
            titre: "Chute sans frottement",
            texte: "Un objet de masse 1 kg est lâché sans vitesse initiale à 5 m du sol. Avec g = 10 N/kg et Epp = 0 au sol, son énergie mécanique initiale est 50 J. Juste avant le sol, Epp = 0 et Ec = 50 J. Donc 1/2 v² = 50, soit v = 10 m/s."
          },
          {
            type: "regle",
            titre: "Variation de l'énergie mécanique",
            texte: "Lorsque l'on ne considère que l'énergie potentielle de pesanteur, la variation de l'énergie mécanique est égale à la somme des travaux des forces autres que le poids : ΔEm = ΣW(forces autres que le poids). Un frottement dont le travail est négatif fait diminuer Em si aucune autre force ne compense cette diminution."
          },
          {
            type: "remarque",
            titre: "L'énergie totale n'a pas disparu",
            texte: "Lors d'un frottement, une partie de l'énergie mécanique est transférée vers d'autres formes, notamment l'énergie interne. Une diminution d'énergie mécanique ne signifie pas une disparition de l'énergie totale."
          },
          {
            type: "methode",
            titre: "Faire un bilan d'énergie",
            texte: "1. Choisir le système, les positions initiale et finale et le niveau zéro de l'énergie potentielle. 2. Identifier les forces et leurs travaux. 3. Utiliser la conservation de Em si les conditions sont réunies ; sinon écrire sa variation. 4. Calculer et vérifier les unités."
          }
        ]
      },
      {
        id: "sp1-ch5-applications",
        titre: "4. Applications aux mouvements",
        blocs: [
          {
            type: "exemple",
            titre: "Lancer vertical",
            texte: "Un objet est lancé verticalement vers le haut avec une vitesse initiale de 20 m/s. On néglige l'air et on prend g = 10 m/s². Entre le départ et le sommet, la conservation de l'énergie donne 1/2 mv₀² = mgh. La masse se simplifie et h = v₀²/(2g) = 400/20 = 20 m."
          },
          {
            type: "exemple",
            titre: "Descente avec frottement",
            texte: "Un objet de masse 2 kg descend d'une hauteur de 4 m en partant du repos. Le travail du frottement pendant la descente est −20 J et les autres forces, hormis le poids, ne travaillent pas. Avec g = 10 N/kg, la perte d'énergie potentielle est 80 J. La relation ΔEm = −20 J donne une énergie cinétique finale de 80 − 20 = 60 J."
          },
          {
            type: "remarque",
            titre: "Ce que donne le bilan d'énergie",
            texte: "Un bilan d'énergie permet souvent de trouver la norme d'une vitesse sans calculer la durée du mouvement. Il ne donne pas directement le sens de la vitesse : il faut utiliser les informations sur le mouvement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer l'énergie cinétique d'un objet de masse 2 kg qui se déplace à 4 m/s.",
        correction: "Ec = 1/2 mv² = 1/2 × 2 × 4² = 16 J."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 3 kg est à une hauteur de 2 m au-dessus du niveau où son énergie potentielle est choisie nulle. Prendre g = 10 N/kg. Calculer son énergie potentielle de pesanteur.",
        correction: "Epp = mgh = 3 × 10 × 2 = 60 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "L'énergie cinétique d'un objet passe de 20 J à 65 J. Quelle est la somme des travaux des forces exercées sur lui, si le théorème de l'énergie cinétique s'applique ?",
        correction: "La somme des travaux vaut ΔEc = Ec finale − Ec initiale = 65 − 20 = 45 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 2 kg est élevé de 4 m. Prendre g = 10 N/kg. Calculer la variation de son énergie potentielle de pesanteur et le travail de son poids.",
        correction: "ΔEpp = mgh = 2 × 10 × 4 = 80 J. Le travail du poids est l'opposé de cette variation : W(P⃗) = −80 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet est lâché sans vitesse initiale d'une hauteur de 20 m. On néglige l'air et on prend g = 10 m/s². Déterminer sa vitesse juste avant d'atteindre le sol par conservation de l'énergie mécanique.",
        correction: "Avec Epp = 0 au sol, l'énergie initiale est mgh et l'énergie finale est 1/2 mv². Ainsi mgh = 1/2 mv², donc v² = 2gh = 2 × 10 × 20 = 400. La vitesse juste avant l'impact vaut 20 m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un point matériel de masse 2 kg se déplace à 3 m/s. La somme des travaux des forces qui agissent sur lui pendant son déplacement est 16 J. Déterminer sa vitesse finale dans un référentiel galiléen.",
        correction: "L'énergie cinétique initiale est 1/2 × 2 × 3² = 9 J. Par le théorème de l'énergie cinétique, l'énergie cinétique finale vaut 9 + 16 = 25 J. Donc 1/2 × 2 × v² = 25, d'où v = 5 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet de masse 2 kg descend d'une hauteur de 10 m en partant du repos. Le travail des frottements vaut −40 J ; les autres forces, à part le poids, ne travaillent pas. Prendre g = 10 N/kg. Calculer son énergie cinétique et sa vitesse à l'arrivée.",
        correction: "La perte d'énergie potentielle vaut mgh = 2 × 10 × 10 = 200 J. Comme ΔEm = −40 J, l'énergie cinétique finale vaut 200 − 40 = 160 J. Donc 1/2 × 2 × v² = 160, soit v = √160 = 4√10 m/s, environ 12,6 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet est lancé verticalement vers le haut à 15 m/s. On néglige l'air et on prend g = 10 m/s². Calculer sa hauteur maximale par rapport au point de lancement, puis la norme de sa vitesse lorsqu'il est à 5 m au-dessus de ce point.",
        correction: "Au sommet, la vitesse est nulle. La conservation de l'énergie donne hmax = v₀²/(2g) = 225/20 = 11,25 m. À la hauteur h = 5 m, 1/2 mv₀² = 1/2 mv² + mgh, donc v² = 225 − 2 × 10 × 5 = 125. La norme de la vitesse est √125 = 5√5 m/s, environ 11,2 m/s. Cette hauteur est atteinte à la montée et à la descente, avec des vitesses de sens opposés mais de même norme."
      }
    ]
  }
]);
