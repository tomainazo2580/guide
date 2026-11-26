enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch16",
    titre: "Chapitre 16 : Condensateurs",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch16-constitution",
        titre: "1. Constitution et rôle d’un condensateur",
        blocs: [
          {
            type: "introduction",
            titre: "Stocker de l’énergie",
            texte: "Un condensateur est un dipôle capable de stocker de l’énergie électrique. On le trouve notamment dans des circuits électroniques et dans certains dispositifs de filtrage."
          },
          {
            type: "definition",
            titre: "Constitution",
            texte: "Un condensateur est constitué de deux conducteurs appelés armatures, séparés par un isolant appelé diélectrique. Un condensateur plan est modélisé par deux armatures planes et parallèles."
          },
          {
            type: "schema",
            titre: "Condensateur plan chargé",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 220' role='img' aria-label='Condensateur plan formé de deux armatures parallèles séparées par un isolant. L’armature A porte une charge positive et l’armature B une charge négative. Le champ entre les armatures est dirigé de A vers B.'><rect x='150' y='40' width='14' height='140' fill='#b44'/><rect x='456' y='40' width='14' height='140' fill='#267'/><text x='157' y='27' text-anchor='middle' font-size='18'>A : +Q</text><text x='463' y='27' text-anchor='middle' font-size='18'>B : −Q</text><text x='310' y='95' text-anchor='middle' font-size='17'>isolant</text><line x1='205' y1='125' x2='415' y2='125' stroke='#333' stroke-width='3'/><polygon points='415,125 403,118 403,132' fill='#333'/><text x='310' y='150' text-anchor='middle' font-size='16'>champ électrique E</text><line x1='164' y1='195' x2='456' y2='195' stroke='#555' stroke-width='2'/><text x='310' y='215' text-anchor='middle' font-size='16'>séparation d</text></svg>",
            legende: "Dans ce modèle, les armatures portent des charges opposées. Loin des bords, le champ est approximativement uniforme."
          },
          {
            type: "remarque",
            titre: "Pas de contact entre les armatures",
            texte: "Le diélectrique sépare les armatures. Lors de la charge, des charges se déplacent dans le circuit extérieur et s’accumulent sur les armatures ; dans le modèle idéal, aucun courant de conduction ne traverse le diélectrique."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Un condensateur peut rester chargé après la coupure de l’alimentation et provoquer une décharge dangereuse. Ne manipule pas de condensateur inconnu et ne tente pas de le décharger."
          }
        ]
      },

      {
        id: "sp1-ch16-capacite",
        titre: "2. Capacité et charge",
        blocs: [
          {
            type: "definition",
            titre: "Capacité",
            texte: "La capacité C caractérise l’aptitude d’un condensateur à accumuler des charges pour une tension donnée. Elle s’exprime en farads (F). Pour un condensateur idéal, C est positive."
          },
          {
            type: "regle",
            titre: "Relation charge-tension",
            texte: "Si UAB = VA − VB et si qA est la charge algébrique de l’armature A, alors qA = C × UAB. L’autre armature porte la charge qB = −qA. En valeurs absolues : Q = C × |UAB|, où Q désigne la valeur absolue de la charge d’une armature."
          },
          {
            type: "tableau",
            titre: "Sous-multiples du farad",
            entetes: ["Unité", "Symbole", "Valeur en farads"],
            lignes: [
              ["Microfarad", "µF", "1 µF = 10⁻⁶ F"],
              ["Nanofarad", "nF", "1 nF = 10⁻⁹ F"],
              ["Picofarad", "pF", "1 pF = 10⁻¹² F"]
            ]
          },
          {
            type: "exemple",
            titre: "Charge d’une armature",
            texte: "Un condensateur de capacité C = 20 µF est soumis à UAB = 6,0 V. Comme 20 µF = 20 × 10⁻⁶ F, qA = CUAB = 20 × 10⁻⁶ × 6,0 = +1,2 × 10⁻⁴ C. L’armature B porte −1,2 × 10⁻⁴ C."
          },
          {
            type: "methode",
            titre: "Calculer la charge",
            texte: "1. Convertir la capacité en farads. 2. Identifier l’ordre de la tension et l’armature étudiée. 3. Appliquer qA = CUAB. 4. Donner la charge de l’autre armature avec le signe opposé."
          },
          {
            type: "remarque",
            titre: "Capacité et tension",
            texte: "Pour un condensateur idéal donné, la capacité C reste constante dans le modèle étudié. La charge varie lorsque la tension varie ; capacité et charge ne sont donc pas la même grandeur."
          }
        ]
      },

      {
        id: "sp1-ch16-energie",
        titre: "3. Énergie stockée",
        blocs: [
          {
            type: "regle",
            titre: "Énergie électrique",
            texte: "L’énergie stockée par un condensateur idéal de capacité C soumis à une tension U vaut Ec = ½CU². Elle s’exprime en joules lorsque C est en farads et U en volts. Elle est positive ou nulle, quel que soit le signe de U."
          },
          {
            type: "exemple",
            titre: "Calcul de l’énergie",
            texte: "Pour C = 100 µF et U = 12 V : Ec = ½ × 100 × 10⁻⁶ × 12² = 7,2 × 10⁻³ J, soit 7,2 mJ."
          },
          {
            type: "remarque",
            titre: "Influence de la tension",
            texte: "À capacité constante, si la valeur absolue de la tension double, l’énergie stockée est multipliée par quatre. La relation est quadratique car l’énergie dépend de U²."
          },
          {
            type: "regle",
            titre: "Autres expressions",
            texte: "Avec Q = C|U|, on peut aussi écrire Ec = Q²/(2C) ou Ec = ½Q|U|. Ici Q est la valeur absolue de la charge d’une armature."
          }
        ]
      },

      {
        id: "sp1-ch16-charge-decharge",
        titre: "4. Charge et décharge dans un circuit RC",
        blocs: [
          {
            type: "definition",
            titre: "Circuit RC",
            texte: "Un circuit RC associe une résistance R et un condensateur C. Lorsqu’un condensateur initialement déchargé est relié à un générateur continu à travers une résistance, sa tension augmente progressivement : c’est la charge."
          },
          {
            type: "schema",
            titre: "Évolution qualitative de la tension",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 270' role='img' aria-label='Graphique qualitatif : lors de la charge, la tension du condensateur part de zéro et se rapproche progressivement de la tension constante du générateur E. Lors de la décharge, elle part de U0 et se rapproche progressivement de zéro.'><text x='155' y='25' text-anchor='middle' font-size='18'>Charge</text><line x1='55' y1='210' x2='270' y2='210' stroke='#222' stroke-width='2'/><line x1='55' y1='210' x2='55' y2='45' stroke='#222' stroke-width='2'/><line x1='55' y1='65' x2='265' y2='65' stroke='#999' stroke-dasharray='5,5'/><path d='M55 210 C85 125 125 85 170 73 C205 67 235 65 265 65' fill='none' stroke='#267' stroke-width='3'/><text x='42' y='70' text-anchor='end' font-size='16'>E</text><text x='275' y='215' font-size='16'>t</text><text x='42' y='42' text-anchor='middle' font-size='15'>U</text><text x='465' y='25' text-anchor='middle' font-size='18'>Décharge</text><line x1='365' y1='210' x2='580' y2='210' stroke='#222' stroke-width='2'/><line x1='365' y1='210' x2='365' y2='45' stroke='#222' stroke-width='2'/><path d='M365 65 C395 145 435 190 480 203 C515 209 550 210 575 210' fill='none' stroke='#a33' stroke-width='3'/><text x='352' y='70' text-anchor='end' font-size='16'>U0</text><text x='585' y='215' font-size='16'>t</text><text x='352' y='42' text-anchor='middle' font-size='15'>U</text><text x='310' y='250' text-anchor='middle' font-size='15'>Courbes qualitatives pour des tensions initiales positives</text></svg>",
            legende: "En charge, U se rapproche de E ; en décharge, U se rapproche de zéro. Les courbes illustrent l’évolution sans fournir d’échelle numérique."
          },
          {
            type: "definition",
            titre: "Décharge",
            texte: "Si un condensateur chargé est relié à une résistance sans générateur maintenant sa tension, il se décharge : la valeur absolue de sa tension diminue et l’énergie qu’il avait stockée est dissipée dans le circuit."
          },
          {
            type: "definition",
            titre: "Constante de temps",
            texte: "Pour un circuit RC idéal, la constante de temps est τ = RC. Avec R en ohms et C en farads, τ s’exprime en secondes. Elle donne l’ordre de grandeur de la durée d’évolution : plus τ est grande, plus la charge ou la décharge est lente."
          },
          {
            type: "remarque",
            titre: "Régime permanent",
            texte: "Dans le modèle idéal alimenté en tension continue constante, une fois le régime permanent atteint, le courant dans la branche série du condensateur est nul. La tension du condensateur reste alors constante."
          }
        ]
      },

      {
        id: "sp1-ch16-associations",
        titre: "5. Associations de condensateurs",
        blocs: [
          {
            type: "regle",
            titre: "En dérivation",
            texte: "Des condensateurs en dérivation sont soumis à la même tension. Leur capacité équivalente est Ceq = C1 + C2 + …. La charge totale fournie aux armatures reliées à une même borne est la somme des charges correspondantes."
          },
          {
            type: "regle",
            titre: "En série",
            texte: "Pour deux condensateurs idéaux en série, dont le conducteur intermédiaire est initialement neutre, les charges des armatures en regard ont la même valeur absolue Q. Les tensions s’additionnent et 1/Ceq = 1/C1 + 1/C2."
          },
          {
            type: "exemple",
            titre: "Deux condensateurs",
            texte: "Pour C1 = 6,0 µF et C2 = 3,0 µF : en dérivation, Ceq = 9,0 µF. En série, 1/Ceq = 1/6,0 + 1/3,0 = 1/2,0 en µF⁻¹, donc Ceq = 2,0 µF."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un condensateur est formé de deux armatures séparées par un diélectrique. Qu’est-ce que le diélectrique ? Quelle est l’unité de la capacité ?",
        correction: "Le diélectrique est un isolant séparant les deux armatures. L’unité de capacité est le farad, de symbole F."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis en farads : a) 5,0 µF ; b) 20 nF.",
        correction: "a) 5,0 µF = 5,0 × 10⁻⁶ F. b) 20 nF = 20 × 10⁻⁹ F = 2,0 × 10⁻⁸ F."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un condensateur de capacité C = 10 µF est soumis à la tension UAB = 8,0 V. Calcule la charge de chaque armature.",
        correction: "C = 10 × 10⁻⁶ F. qA = CUAB = 10 × 10⁻⁶ × 8,0 = +8,0 × 10⁻⁵ C. L’armature B porte qB = −8,0 × 10⁻⁵ C."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un condensateur de capacité 50 µF est soumis à une tension de 10 V. Calcule l’énergie qu’il stocke.",
        correction: "Ec = ½CU² = ½ × 50 × 10⁻⁶ × 10² = 2,5 × 10⁻³ J, soit 2,5 mJ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un condensateur de capacité 4,0 µF porte sur l’une de ses armatures une charge de valeur absolue Q = 2,4 × 10⁻⁵ C. Calcule la valeur absolue de la tension entre ses armatures et l’énergie stockée.",
        correction: "|U| = Q/C = 2,4 × 10⁻⁵ / (4,0 × 10⁻⁶) = 6,0 V. Ec = ½CU² = ½ × 4,0 × 10⁻⁶ × 6,0² = 7,2 × 10⁻⁵ J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un circuit RC idéal, R = 2,0 kΩ et C = 50 µF. Calcule la constante de temps. Si l’on double R sans modifier C, que devient cette constante ?",
        correction: "R = 2,0 × 10³ Ω et C = 50 × 10⁻⁶ F. τ = RC = 2,0 × 10³ × 50 × 10⁻⁶ = 0,10 s. Si R double, τ double et devient 0,20 s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux condensateurs idéaux C1 = 6,0 µF et C2 = 3,0 µF sont branchés en dérivation sous une tension de 12 V. Calcule la capacité équivalente, la valeur absolue de la charge de chaque condensateur, puis l’énergie totale stockée.",
        correction: "Ceq = C1 + C2 = 9,0 µF. Les tensions sont identiques : Q1 = C1U = 6,0 × 10⁻⁶ × 12 = 7,2 × 10⁻⁵ C ; Q2 = 3,0 × 10⁻⁶ × 12 = 3,6 × 10⁻⁵ C. L’énergie totale est Ec = ½CeqU² = ½ × 9,0 × 10⁻⁶ × 12² = 6,48 × 10⁻⁴ J."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux condensateurs idéaux C1 = 6,0 µF et C2 = 3,0 µF sont branchés en série sous une tension totale de 12 V. Le conducteur entre eux est initialement neutre. Calcule leur capacité équivalente, la valeur absolue de leur charge commune, puis la tension aux bornes de chacun.",
        correction: "1/Ceq = 1/6,0 + 1/3,0 en µF⁻¹, donc Ceq = 2,0 µF. La charge commune vaut Q = CeqU = 2,0 × 10⁻⁶ × 12 = 2,4 × 10⁻⁵ C. U1 = Q/C1 = 2,4 × 10⁻⁵ / (6,0 × 10⁻⁶) = 4,0 V. U2 = Q/C2 = 2,4 × 10⁻⁵ / (3,0 × 10⁻⁶) = 8,0 V. La somme est bien 12 V."
      }
    ]
  }
]);
