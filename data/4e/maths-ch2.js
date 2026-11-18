// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 2 : Addition et soustraction des nombres relatifs

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch2",
    titre: "Chapitre 2 : Addition et soustraction des nombres relatifs",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch2-somme-meme-signe",
        titre: "Additionner deux nombres de même signe",
        blocs: [
          {
            type: "definition",
            titre: "Une somme",
            texte: "Le résultat d'une addition s'appelle une somme. Les nombres que l'on additionne s'appellent les termes de la somme.\nExemple : dans (+3) + (+5) = +8, les termes sont +3 et +5 ; leur somme est +8."
          },
          {
            type: "regle",
            titre: "Deux nombres de même signe",
            texte: "Pour additionner deux nombres relatifs de même signe :\n1. On additionne leurs distances à zéro.\n2. On donne au résultat leur signe commun."
          },
          {
            type: "exemple",
            titre: "Deux nombres positifs",
            texte: "(+4) + (+3) = +7.\nOn additionne les distances à zéro : 4 + 3 = 7. Les deux nombres sont positifs, donc le résultat est positif."
          },
          {
            type: "exemple",
            titre: "Deux nombres négatifs",
            texte: "(−4) + (−3) = −7.\nOn additionne les distances à zéro : 4 + 3 = 7. Les deux nombres sont négatifs, donc le résultat est négatif."
          },
          {
            type: "schema",
            titre: "Addition sur une droite graduée",
            svg: "<svg viewBox='0 0 340 135' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Sur une droite graduée, on part de zéro, on se déplace de quatre unités vers la gauche puis de trois unités vers la gauche pour arriver à moins sept'><line x1='20' y1='85' x2='320' y2='85' stroke='#1e3a5f' stroke-width='2'/><g stroke='#1e3a5f' stroke-width='2'><line x1='40' y1='79' x2='40' y2='91'/><line x1='75' y1='79' x2='75' y2='91'/><line x1='110' y1='79' x2='110' y2='91'/><line x1='145' y1='79' x2='145' y2='91'/><line x1='180' y1='79' x2='180' y2='91'/><line x1='215' y1='79' x2='215' y2='91'/><line x1='250' y1='79' x2='250' y2='91'/><line x1='285' y1='79' x2='285' y2='91'/></g><g font-size='12' text-anchor='middle' fill='#1e3a5f'><text x='40' y='110'>−7</text><text x='75' y='110'>−6</text><text x='110' y='110'>−5</text><text x='145' y='110'>−4</text><text x='180' y='110'>−3</text><text x='215' y='110'>−2</text><text x='250' y='110'>−1</text><text x='285' y='110'>0</text></g><path d='M285 47 L145 47 M145 47 L153 42 M145 47 L153 52' fill='none' stroke='#2563eb' stroke-width='2'/><text x='215' y='38' font-size='13' text-anchor='middle' fill='#2563eb'>−4</text><path d='M145 68 L40 68 M40 68 L48 63 M40 68 L48 73' fill='none' stroke='#dc2626' stroke-width='2'/><text x='92' y='60' font-size='13' text-anchor='middle' fill='#dc2626'>−3</text></svg>",
            legende: "On part de 0, on se déplace de 4 unités vers la gauche, puis de 3 unités vers la gauche : on arrive à −7."
          }
        ]
      },

      {
        id: "m4-ch2-somme-signes-differents",
        titre: "Additionner deux nombres de signes différents",
        blocs: [
          {
            type: "regle",
            titre: "Signes différents",
            texte: "Pour additionner deux nombres de signes différents :\n1. On soustrait la plus petite distance à zéro de la plus grande.\n2. Si les distances sont différentes, on donne au résultat le signe du nombre qui a la plus grande distance à zéro.\n3. Si les distances sont égales, les nombres sont opposés et leur somme est 0."
          },
          {
            type: "exemple",
            titre: "Résultat positif",
            texte: "(+8) + (−3) = +5.\nLes distances à zéro sont 8 et 3. On calcule 8 − 3 = 5.\nLe nombre qui a la plus grande distance à zéro est +8 : le résultat est donc positif."
          },
          {
            type: "exemple",
            titre: "Résultat négatif",
            texte: "(+3) + (−8) = −5.\nOn calcule 8 − 3 = 5. Le nombre qui a la plus grande distance à zéro est −8 : le résultat est donc négatif."
          },
          {
            type: "exemple",
            titre: "Nombres opposés",
            texte: "(+6) + (−6) = 0.\nLes deux nombres sont opposés : leurs distances à zéro sont égales et leurs signes sont différents."
          },
          {
            type: "remarque",
            titre: "Ajouter zéro",
            texte: "Ajouter 0 ne change pas un nombre :\n(−4) + 0 = −4 et (+7) + 0 = +7."
          },
          {
            type: "methode",
            titre: "S'aider d'une droite graduée",
            texte: "Pour calculer (−2) + (+5), pars de −2 et déplace-toi de 5 unités vers la droite. Tu arrives à +3.\nPour calculer (+2) + (−5), pars de +2 et déplace-toi de 5 unités vers la gauche. Tu arrives à −3."
          }
        ]
      },

      {
        id: "m4-ch2-soustraction",
        titre: "Soustraire un nombre relatif",
        blocs: [
          {
            type: "regle",
            titre: "Transformer la soustraction",
            texte: "Soustraire un nombre revient à ajouter son opposé.\nPour calculer a − b, on peut donc calculer a + l'opposé de b."
          },
          {
            type: "methode",
            titre: "Les étapes",
            texte: "Pour calculer (+4) − (−3) :\n1. Repère le nombre que l'on soustrait : −3.\n2. Trouve son opposé : +3.\n3. Remplace la soustraction par une addition : (+4) + (+3).\n4. Calcule : (+4) + (+3) = +7.\nDonc (+4) − (−3) = +7."
          },
          {
            type: "exemple",
            titre: "Soustraire un nombre positif",
            texte: "(−2) − (+5) = (−2) + (−5) = −7.\nOn a remplacé la soustraction de +5 par l'addition de son opposé, −5."
          },
          {
            type: "exemple",
            titre: "Soustraire un nombre négatif",
            texte: "(−7) − (−4) = (−7) + (+4) = −3.\nOn a remplacé la soustraction de −4 par l'addition de son opposé, +4."
          },
          {
            type: "remarque",
            titre: "Attention aux signes",
            texte: "Dans (+4) − (−3), le premier signe − indique une soustraction. Le second est le signe du nombre −3.\nOn ne les traite pas séparément : on remplace la soustraction de −3 par l'addition de son opposé, +3."
          }
        ]
      },

      {
        id: "m4-ch2-calculs",
        titre: "Calculer avec plusieurs termes",
        blocs: [
          {
            type: "regle",
            titre: "Changer l'ordre d'une somme",
            texte: "Dans une addition, on peut changer l'ordre des termes ou les regrouper sans changer la somme.\nExemple : (−5) + (+3) + (+5) = (−5) + (+5) + (+3) = 0 + (+3) = +3."
          },
          {
            type: "methode",
            titre: "Transformer puis regrouper",
            texte: "Pour calculer (−4) − (+3) + (+7) :\n1. Transforme la soustraction : (−4) + (−3) + (+7).\n2. Regroupe si cela facilite le calcul : (−4) + (−3) = −7.\n3. Termine : (−7) + (+7) = 0."
          },
          {
            type: "exemple",
            titre: "Avec des décimaux",
            texte: "(+2,5) + (−4,2) + (+1) = (+3,5) + (−4,2).\nLa différence des distances à zéro est 4,2 − 3,5 = 0,7. La plus grande distance à zéro appartient à −4,2.\nLe résultat est donc −0,7."
          },
          {
            type: "remarque",
            titre: "Soustraction et ordre",
            texte: "On ne peut pas changer librement l'ordre des nombres dans une soustraction : (+5) − (+2) = +3, mais (+2) − (+5) = −3.\nPour réorganiser un calcul contenant des soustractions, transforme-les d'abord en additions d'opposés."
          }
        ]
      },

      {
        id: "m4-ch2-situations",
        titre: "Utiliser les nombres relatifs dans une situation",
        blocs: [
          {
            type: "methode",
            titre: "Évolution d'une température",
            texte: "Pour calculer une température finale :\n• une hausse de 3 °C correspond à une variation de +3 °C ;\n• une baisse de 3 °C correspond à une variation de −3 °C.\nOn ajoute la variation à la température initiale."
          },
          {
            type: "exemple",
            titre: "Une baisse de température",
            texte: "La température est de +2 °C, puis elle baisse de 5 °C.\nTempérature finale : (+2) + (−5) = −3 °C."
          },
          {
            type: "exemple",
            titre: "Gains et dépenses",
            texte: "Une personne gagne 8 000 Ar, puis dépense 3 000 Ar. En représentant le gain par +8 000 et la dépense par −3 000 :\n(+8 000) + (−3 000) = +5 000.\nLa variation totale est un gain de 5 000 Ar."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. (+5) + (+3)\n2. (−4) + (−6)\n3. (−7) + 0",
        correction: "1. (+5) + (+3) = +8 : on additionne 5 et 3 et on garde le signe +.\n2. (−4) + (−6) = −10 : on additionne 4 et 6 et on garde le signe −.\n3. (−7) + 0 = −7 : ajouter zéro ne change pas le nombre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. (+9) + (−2)\n2. (−9) + (+2)\n3. (+5) + (−5)",
        correction: "1. 9 − 2 = 7. La plus grande distance à zéro appartient à +9, donc (+9) + (−2) = +7.\n2. 9 − 2 = 7. La plus grande distance à zéro appartient à −9, donc (−9) + (+2) = −7.\n3. +5 et −5 sont opposés, donc leur somme est 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Transforme chaque soustraction en addition, puis calcule :\n1. (+6) − (+4)\n2. (+6) − (−4)\n3. (−6) − (+4)\n4. (−6) − (−4)",
        correction: "1. (+6) − (+4) = (+6) + (−4) = +2.\n2. (+6) − (−4) = (+6) + (+4) = +10.\n3. (−6) − (+4) = (−6) + (−4) = −10.\n4. (−6) − (−4) = (−6) + (+4) = −2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n1. (−2,5) + (−1,3)\n2. (+4,8) + (−2,1)\n3. (−3,7) + (+5,2)",
        correction: "1. Les signes sont identiques : 2,5 + 1,3 = 3,8. Le résultat est −3,8.\n2. Les signes sont différents : 4,8 − 2,1 = 2,7. Le résultat est +2,7.\n3. Les signes sont différents : 5,2 − 3,7 = 1,5. Le résultat est +1,5 car +5,2 a la plus grande distance à zéro."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule en détaillant :\n1. (−8) + (+3) + (+8)\n2. (+4) − (−2) + (−9)\n3. (−5) − (+3) − (−8)",
        correction: "1. On regroupe les opposés : (−8) + (+8) + (+3) = 0 + (+3) = +3.\n2. On transforme la soustraction : (+4) + (+2) + (−9) = (+6) + (−9) = −3.\n3. On transforme les soustractions : (−5) + (−3) + (+8) = (−8) + (+8) = 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le matin, la température est de −2 °C. Elle augmente de 6 °C dans la journée, puis baisse de 5 °C le soir.\n1. Quelle est la température après la hausse ?\n2. Quelle est la température le soir ?",
        correction: "1. La hausse correspond à +6 °C : (−2) + (+6) = +4. La température est de +4 °C après la hausse.\n2. La baisse correspond à −5 °C : (+4) + (−5) = −1. La température le soir est de −1 °C."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association dispose de 25 000 Ar. Elle reçoit un don de 12 000 Ar, puis achète des fournitures pour 18 500 Ar et paie un transport de 4 000 Ar.\n1. Représente chaque entrée ou sortie d'argent par un nombre relatif.\n2. Calcule la variation totale de la somme disponible.\n3. Combien reste-t-il à l'association ?",
        correction: "1. Don : +12 000 Ar ; fournitures : −18 500 Ar ; transport : −4 000 Ar.\n2. Variation : (+12 000) + (−18 500) + (−4 000) = (+12 000) + (−22 500) = −10 500 Ar. La somme disponible a diminué de 10 500 Ar.\n3. Somme restante : 25 000 − 10 500 = 14 500 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur une droite graduée, un mobile part du point d'abscisse −3. Il se déplace de 7 unités vers la droite, puis de 5 unités vers la gauche.\n1. Quelle est son abscisse après le premier déplacement ?\n2. Quelle est son abscisse finale ?\n3. Quelle est la variation totale de son abscisse entre le départ et l'arrivée ?",
        correction: "1. Un déplacement vers la droite correspond ici à une variation positive : (−3) + (+7) = +4.\n2. Un déplacement vers la gauche correspond à une variation négative : (+4) + (−5) = −1. L'abscisse finale est −1.\n3. Variation totale : (+7) + (−5) = +2. On peut vérifier avec les abscisses : (−1) − (−3) = (−1) + (+3) = +2."
      }
    ]
  }
]);
