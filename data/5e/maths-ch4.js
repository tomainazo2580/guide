enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch4",
    titre: "Chapitre 4 : Calculs avec les nombres relatifs",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch4-lecon1",
        titre: "1. Avant de calculer : lire les signes",
        blocs: [
          {
            type: "texte",
            titre: "Le signe d’un nombre",
            texte: "Un nombre relatif peut être positif ou négatif. Dans +5, le signe du nombre est +. Dans −3, le signe du nombre est −."
          },
          {
            type: "texte",
            titre: "Le signe d’une opération",
            texte: "Le signe + peut aussi indiquer une addition et le signe − une soustraction. Pour éviter les confusions au début, on écrit les nombres relatifs entre parenthèses : (+5) + (−3)."
          },
          {
            type: "exemple",
            titre: "Lire une expression",
            texte: "Dans (+5) + (−3), le premier nombre est +5, l’opération est une addition et le second nombre est −3."
          },
          {
            type: "remarque",
            titre: "Distance à zéro",
            texte: "La distance à zéro de +5 est 5 ; celle de −3 est 3. Elle nous aidera à déterminer certains résultats."
          }
        ]
      },

      {
        id: "maths5-ch4-lecon2",
        titre: "2. Additionner deux nombres de même signe",
        blocs: [
          {
            type: "regle",
            titre: "La règle",
            texte: "Pour additionner deux nombres de même signe : on additionne leurs distances à zéro, puis on donne au résultat leur signe commun."
          },
          {
            type: "exemple",
            titre: "Deux nombres positifs",
            texte: "(+4) + (+3) = +7. On additionne 4 et 3, puis on garde le signe +."
          },
          {
            type: "exemple",
            titre: "Deux nombres négatifs",
            texte: "(−4) + (−3) = −7. On additionne les distances à zéro : 4 + 3 = 7. On garde le signe −."
          },
          {
            type: "texte",
            titre: "Comprendre sur une droite",
            texte: "On part de −4. Ajouter −3 revient à se déplacer de 3 unités vers la gauche. On arrive à −7."
          },
          {
            type: "schema",
            titre: "De −4 à −7",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 120' role='img' aria-label='Sur une droite graduée, déplacement de moins quatre vers moins sept'><line x1='20' y1='55' x2='420' y2='55' stroke='#333' stroke-width='2'/><path d='M20 47v16 M70 47v16 M120 47v16 M170 47v16 M220 47v16 M270 47v16 M320 47v16 M370 47v16 M420 47v16' stroke='#333' stroke-width='2'/><g text-anchor='middle' font-size='16' fill='#222'><text x='20' y='87'>−8</text><text x='70' y='87'>−7</text><text x='120' y='87'>−6</text><text x='170' y='87'>−5</text><text x='220' y='87'>−4</text><text x='270' y='87'>−3</text><text x='320' y='87'>−2</text><text x='370' y='87'>−1</text><text x='420' y='87'>0</text></g><path d='M220 35H70 M70 35l9 -6 M70 35l9 6' fill='none' stroke='#d64545' stroke-width='3'/><text x='145' y='23' text-anchor='middle' font-size='16' fill='#b32626'>ajouter −3</text></svg>",
            legende: "En partant de −4, on avance de 3 unités vers la gauche : on arrive à −7."
          }
        ]
      },

      {
        id: "maths5-ch4-lecon3",
        titre: "3. Additionner deux nombres de signes différents",
        blocs: [
          {
            type: "regle",
            titre: "La règle",
            texte: "Pour additionner deux nombres de signes différents, on soustrait la plus petite distance à zéro de la plus grande. Si les distances sont différentes, on donne au résultat le signe du nombre le plus éloigné de zéro."
          },
          {
            type: "exemple",
            titre: "Résultat positif",
            texte: "(+8) + (−3) = +5. Les distances à zéro sont 8 et 3. Leur différence est 8 − 3 = 5. Le nombre le plus éloigné de zéro est +8 : le résultat est donc positif."
          },
          {
            type: "exemple",
            titre: "Résultat négatif",
            texte: "(−9) + (+4) = −5. Les distances à zéro sont 9 et 4. Leur différence est 9 − 4 = 5. Le nombre le plus éloigné de zéro est −9 : le résultat est donc négatif."
          },
          {
            type: "exemple",
            titre: "Deux nombres opposés",
            texte: "(+6) + (−6) = 0. Les distances à zéro sont égales : les deux nombres sont opposés et leur somme est nulle."
          },
          {
            type: "methode",
            titre: "Une autre façon de comprendre",
            texte: "Sur une droite graduée, ajouter un nombre positif revient à se déplacer vers la droite ; ajouter un nombre négatif revient à se déplacer vers la gauche. Par exemple, en partant de +2 et en ajoutant −5, on arrive à −3."
          },
          {
            type: "remarque",
            titre: "Attention à la comparaison",
            texte: "Dans (−9) + (+4), le nombre le plus éloigné de zéro est −9. On ne cherche pas le plus grand nombre : en effet, −9 est inférieur à +4."
          }
        ]
      },

      {
        id: "maths5-ch4-lecon4",
        titre: "4. Soustraire un nombre relatif",
        blocs: [
          {
            type: "regle",
            titre: "Soustraire, c’est ajouter l’opposé",
            texte: "Pour soustraire un nombre relatif, on ajoute son opposé."
          },
          {
            type: "exemple",
            titre: "Soustraire un nombre positif",
            texte: "(+5) − (+3) = (+5) + (−3) = +2. L’opposé de +3 est −3."
          },
          {
            type: "exemple",
            titre: "Soustraire un nombre négatif",
            texte: "(+5) − (−3) = (+5) + (+3) = +8. L’opposé de −3 est +3."
          },
          {
            type: "exemple",
            titre: "Avec un résultat négatif",
            texte: "(−4) − (+2) = (−4) + (−2) = −6."
          },
          {
            type: "methode",
            titre: "Procéder en deux étapes",
            texte: "1. Remplace la soustraction par une addition de l’opposé du second nombre. 2. Calcule la somme en utilisant les règles de l’addition."
          },
          {
            type: "remarque",
            titre: "Ne pas changer les deux nombres",
            texte: "Dans (−4) − (−2), on change l’opération et le signe du second nombre seulement : (−4) + (+2) = −2."
          }
        ]
      },

      {
        id: "maths5-ch4-lecon5",
        titre: "5. Multiplier deux nombres relatifs",
        blocs: [
          {
            type: "regle",
            titre: "Règle des signes",
            texte: "Le produit de deux nombres de même signe est positif. Le produit de deux nombres de signes différents est négatif."
          },
          {
            type: "tableau",
            titre: "Les quatre cas",
            entetes: ["Signes des facteurs", "Signe du produit", "Exemple"],
            lignes: [
              ["+ et +", "+", "(+3) × (+2) = +6"],
              ["− et −", "+", "(−3) × (−2) = +6"],
              ["+ et −", "−", "(+3) × (−2) = −6"],
              ["− et +", "−", "(−3) × (+2) = −6"]
            ]
          },
          {
            type: "methode",
            titre: "Calculer un produit",
            texte: "1. Détermine le signe avec la règle des signes. 2. Multiplie les distances à zéro. Exemple : (−4) × (+5) est négatif et 4 × 5 = 20, donc le résultat est −20."
          },
          {
            type: "exemple",
            titre: "Avec des décimaux",
            texte: "(−2) × (−1,5) = +3. Les deux nombres ont le même signe et 2 × 1,5 = 3."
          },
          {
            type: "remarque",
            titre: "Multiplier par zéro",
            texte: "Le produit d’un nombre par zéro est zéro : (−7) × 0 = 0."
          }
        ]
      },

      {
        id: "maths5-ch4-lecon6",
        titre: "6. Diviser deux nombres relatifs",
        blocs: [
          {
            type: "regle",
            titre: "Règle des signes",
            texte: "Pour une division dont le diviseur est non nul : deux nombres de même signe donnent un quotient positif ; deux nombres de signes différents donnent un quotient négatif."
          },
          {
            type: "exemple",
            titre: "Même signe",
            texte: "(−12) ÷ (−3) = +4, car 12 ÷ 3 = 4 et les deux nombres ont le même signe."
          },
          {
            type: "exemple",
            titre: "Signes différents",
            texte: "(−20) ÷ (+5) = −4. De même, (+18) ÷ (−6) = −3."
          },
          {
            type: "methode",
            titre: "Vérifier par une multiplication",
            texte: "Pour vérifier que (−20) ÷ (+5) = −4, on multiplie le résultat par le diviseur : (−4) × (+5) = −20."
          },
          {
            type: "remarque",
            titre: "Division par zéro",
            texte: "On ne peut jamais diviser par zéro. L’écriture 5 ÷ 0 n’est pas définie. En revanche, 0 ÷ 5 = 0."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : a) (+4) + (+3) ; b) (−4) + (−3).",
        correction: "a) +7. b) −7. Pour des nombres de même signe, on additionne les distances à zéro et on garde le signe commun."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : a) (+6) + (−2) ; b) (−8) + (+3).",
        correction: "a) +4. b) −5. On soustrait les distances à zéro et on garde le signe du nombre le plus éloigné de zéro."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : a) (−5) + (+5) ; b) (+7) + 0.",
        correction: "a) 0 : les nombres sont opposés. b) +7 : ajouter zéro ne change pas le nombre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : soustraire −4 revient à ajouter son opposé, qui est …",
        correction: "L’opposé de −4 est +4. Soustraire −4 revient donc à ajouter +4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) (+2) − (+7) ; b) (−3) − (+4).",
        correction: "a) (+2) + (−7) = −5. b) (−3) + (−4) = −7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) (+6) − (−2) ; b) (−5) − (−3).",
        correction: "a) (+6) + (+2) = +8. b) (−5) + (+3) = −2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) (−3) × (+4) ; b) (−5) × (−2).",
        correction: "a) −12 : les signes sont différents. b) +10 : les signes sont les mêmes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) (+18) ÷ (−3) ; b) (−24) ÷ (−6).",
        correction: "a) −6. b) +4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : a) (−2,5) + (+1,2) ; b) (+3,4) + (−5,1).",
        correction: "a) −1,3 : 2,5 − 1,2 = 1,3 et −2,5 est le plus éloigné de zéro. b) −1,7 : 5,1 − 3,4 = 1,7 et −5,1 est le plus éloigné de zéro."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : a) (−1,5) × (+4) ; b) (−7,2) ÷ (−3).",
        correction: "a) −6. b) +2,4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "La température est de −2 °C. Elle augmente de 5 °C. Quelle est la nouvelle température ?",
        correction: "On calcule (−2) + (+5) = +3. La nouvelle température est de +3 °C."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un ascenseur est au niveau +1. Il descend de 4 niveaux. À quel niveau arrive-t-il ?",
        correction: "On calcule (+1) + (−4) = −3. Il arrive au niveau −3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Vérifie par une multiplication que (−28) ÷ (+7) = −4.",
        correction: "On calcule (−4) × (+7) = −28. Le quotient est donc bien −4."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Complète : a) (−7) + (…) = −2 ; b) (+3) − (…) = +8.",
        correction: "a) (−7) + (+5) = −2. b) (+3) − (−5) = +8, car soustraire −5 revient à ajouter +5."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme : « (−8) + (+3) = +5, car 8 − 3 = 5. » Explique et corrige.",
        correction: "La différence des distances à zéro est bien 5, mais −8 est le nombre le plus éloigné de zéro. Le résultat porte donc son signe : (−8) + (+3) = −5."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Calcule (−4) − (−7), puis vérifie ton résultat en remplaçant la soustraction par une addition.",
        correction: "(−4) − (−7) = (−4) + (+7) = +3. On a ajouté l’opposé de −7, qui est +7."
      }
    ]
  }
]);
