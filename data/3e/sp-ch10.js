enregistrerChapitres("3e", "sp", [
  {
    id: 10,
    titre: "Chapitre 10 : Réaction entre une solution acide et une solution basique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Rappels sur les solutions acides et basiques",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi mélanger un acide et une base ?",
            texte: "Une solution acide et une solution basique peuvent réagir entre elles. Pour prévoir le résultat, il faut tenir compte des quantités de matière présentes : mélanger les deux solutions ne suffit pas nécessairement à obtenir une solution neutre."
          },
          {
            type: "regle",
            titre: "Le pH à 25 °C",
            texte: "• Si pH < 7, la solution est acide.\n• Si pH = 7, la solution est neutre.\n• Si pH > 7, la solution est basique.\n\nDans une solution acide, les ions oxonium H₃O⁺ sont plus concentrés que les ions hydroxyde OH⁻. Dans une solution basique, c’est l’inverse."
          },
          {
            type: "remarque",
            titre: "L’écriture H⁺",
            texte: "Dans l’eau, on représente plus précisément les ions responsables de l’acidité par H₃O⁺. Dans de nombreux exercices, on utilise l’écriture simplifiée H⁺."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les solutions acides et basiques peuvent être corrosives. Leur mélange peut dégager de la chaleur. Les manipulations sont réservées au laboratoire, sous la surveillance de l’enseignant, avec les protections adaptées.\n\nNe mélange jamais des produits ménagers pour essayer de les neutraliser : des gaz dangereux peuvent se former."
          }
        ]
      },

      {
        id: 2,
        titre: "La réaction entre H₃O⁺ et OH⁻",
        blocs: [
          {
            type: "definition",
            titre: "Équation ionique",
            texte: "Les ions oxonium H₃O⁺ et les ions hydroxyde OH⁻ réagissent pour former de l’eau :\n\nH₃O⁺ + OH⁻ → 2 H₂O.\n\nAvec l’écriture simplifiée H⁺, on écrit aussi :\n\nH⁺ + OH⁻ → H₂O."
          },
          {
            type: "methode",
            titre: "Vérifier la première équation",
            texte: "H₃O⁺ + OH⁻ → 2 H₂O.\n\n• Hydrogène : 3 + 1 = 4 atomes à gauche ; 2 × 2 = 4 à droite.\n• Oxygène : 1 + 1 = 2 atomes à gauche ; 2 à droite.\n• Charge électrique : +1 − 1 = 0 à gauche ; l’eau est neutre à droite.\n\nLes atomes et la charge sont conservés."
          },
          {
            type: "regle",
            titre: "Proportion entre les ions",
            texte: "D’après l’équation, 1 mol de H₃O⁺ réagit avec 1 mol de OH⁻.\n\nDans l’écriture simplifiée : 1 mol de H⁺ réagit avec 1 mol de OH⁻. Les quantités de ces ions consommées par la réaction sont donc égales."
          },
          {
            type: "remarque",
            titre: "Réaction et pH final",
            texte: "La réaction consomme des ions acides et basiques, mais le mélange final n’est pas toujours neutre. Il peut rester acide ou basique selon les quantités introduites et les espèces présentes."
          }
        ]
      },

      {
        id: 3,
        titre: "Exemple : acide chlorhydrique et soude",
        blocs: [
          {
            type: "definition",
            titre: "Les solutions étudiées",
            texte: "Une solution d’acide chlorhydrique contient notamment des ions H₃O⁺ et Cl⁻.\n\nUne solution de soude, ou hydroxyde de sodium, contient notamment des ions Na⁺ et OH⁻."
          },
          {
            type: "regle",
            titre: "Bilan simplifié",
            texte: "Dans ce mélange, les ions H₃O⁺ réagissent avec les ions OH⁻ :\n\nH₃O⁺ + OH⁻ → 2 H₂O.\n\nLes ions Na⁺ et Cl⁻ restent en solution : ils sont spectateurs de cette réaction."
          },
          {
            type: "remarque",
            titre: "Une autre écriture",
            texte: "On rencontre également le bilan :\n\nHCl + NaOH → NaCl + H₂O.\n\nEn solution aqueuse, le chlorure de sodium obtenu est dissous sous forme d’ions Na⁺ et Cl⁻. Cette écriture ne signifie pas nécessairement qu’un solide apparaît."
          },
          {
            type: "exemple",
            titre: "Ions spectateurs",
            texte: "Si l’on mélange ces deux solutions, les ions Na⁺ et Cl⁻ sont présents avant et après la réaction. Dans le bilan ionique simplifié, on ne les écrit pas, car ils ne sont pas transformés."
          }
        ]
      },

      {
        id: 4,
        titre: "Quantités introduites et réactif en excès",
        blocs: [
          {
            type: "methode",
            titre: "Comparer les quantités",
            texte: "Pour le mélange d’une solution d’acide chlorhydrique et d’une solution de soude :\n\n1. Calculer la quantité de H₃O⁺ apportée par la solution acide.\n2. Calculer la quantité de OH⁻ apportée par la solution basique.\n3. Les comparer : ces ions réagissent dans la proportion 1 pour 1.\n4. Déterminer s’il reste un ion en excès.\n\nÀ 25 °C, dans ce modèle : un excès de H₃O⁺ donne un mélange acide ; un excès de OH⁻ donne un mélange basique."
          },
          {
            type: "schema",
            titre: "Trois résultats possibles",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 260' role='img' aria-label='Comparaison des quantités d’ions acides et basiques introduites'><rect width='320' height='260' fill='white'/><text x='160' y='23' text-anchor='middle' font-size='14' fill='#0f172a'>Acide chlorhydrique + soude</text><rect x='10' y='36' width='300' height='60' rx='8' fill='#fee2e2'/><text x='160' y='58' text-anchor='middle' font-size='15' fill='#991b1b'>H₃O⁺ apportés &gt; OH⁻ apportés</text><text x='160' y='80' text-anchor='middle' font-size='14' fill='#0f172a'>Excès acide → mélange acide</text><rect x='10' y='103' width='300' height='60' rx='8' fill='#dcfce7'/><text x='160' y='125' text-anchor='middle' font-size='15' fill='#166534'>H₃O⁺ apportés = OH⁻ apportés</text><text x='160' y='147' text-anchor='middle' font-size='14' fill='#0f172a'>Équivalence → mélange neutre</text><rect x='10' y='170' width='300' height='60' rx='8' fill='#dbeafe'/><text x='160' y='192' text-anchor='middle' font-size='15' fill='#1e40af'>H₃O⁺ apportés &lt; OH⁻ apportés</text><text x='160' y='214' text-anchor='middle' font-size='14' fill='#0f172a'>Excès basique → mélange basique</text><text x='160' y='250' text-anchor='middle' font-size='12' fill='#475569'>Résultats du modèle étudié à 25 °C</text></svg>",
            legende: "On compare les quantités de matière apportées, et non les seuls volumes. Ce schéma concerne le mélange d’acide chlorhydrique et de soude dans le modèle du cours, à 25 °C. À l’équivalence, des ions Na⁺ et Cl⁻ restent en solution."
          },
          {
            type: "exemple",
            titre: "Un acide en excès",
            texte: "On mélange une solution apportant 0,03 mol de H₃O⁺ avec une solution apportant 0,02 mol de OH⁻.\n\nLa réaction consomme 0,02 mol de chaque ion. Il reste :\n\nn(H₃O⁺) = 0,03 − 0,02 = 0,01 mol.\n\nLes ions H₃O⁺ sont en excès : le mélange est acide à 25 °C."
          },
          {
            type: "exemple",
            titre: "Une base en excès",
            texte: "On mélange une solution apportant 0,01 mol de H₃O⁺ avec une solution apportant 0,04 mol de OH⁻.\n\nLa réaction consomme 0,01 mol de chaque ion. Il reste :\n\nn(OH⁻) = 0,04 − 0,01 = 0,03 mol.\n\nLes ions OH⁻ sont en excès : le mélange est basique à 25 °C."
          },
          {
            type: "definition",
            titre: "Quantités en proportions exactes",
            texte: "Si les quantités de H₃O⁺ et de OH⁻ apportées sont égales, elles sont introduites dans les proportions de l’équation : on parle ici d’équivalence.\n\nPour l’acide chlorhydrique et la soude, dans le modèle du cours, le mélange obtenu est alors neutre à 25 °C. Cela ne signifie pas qu’il ne contient plus aucun ion : les ions Na⁺ et Cl⁻ restent notamment en solution."
          },
          {
            type: "remarque",
            titre: "Ne pas généraliser trop vite",
            texte: "L’égalité des quantités d’acide et de base à l’équivalence ne donne pas toujours un pH de 7 pour tous les couples acide-base. Le résultat neutre présenté ici concerne le cas étudié : acide chlorhydrique et soude à 25 °C."
          }
        ]
      },

      {
        id: 5,
        titre: "Calculer les quantités de matière",
        blocs: [
          {
            type: "regle",
            titre: "Relation utile",
            texte: "Pour une solution de concentration molaire C et de volume V :\n\nn = C × V.\n\n• n en mol ;\n• C en mol/L ;\n• V en L.\n\nAttention : si le volume est donné en mL, il faut le convertir en L."
          },
          {
            type: "exemple",
            titre: "Quantité apportée par une solution",
            texte: "Une solution apporte des ions H₃O⁺ à la concentration de 0,10 mol/L. On en prélève 20 mL.\n\nV = 20 mL = 0,020 L.\n\nn(H₃O⁺) = C × V\nn(H₃O⁺) = 0,10 × 0,020 = 0,0020 mol."
          },
          {
            type: "methode",
            titre: "À l’équivalence dans le cas étudié",
            texte: "Pour une solution d’acide chlorhydrique et une solution de soude :\n\n1. À l’équivalence, n(H₃O⁺) apportée = n(OH⁻) apportée.\n2. Si Ca et Cb désignent respectivement les concentrations de H₃O⁺ et de OH⁻, alors :\n\nCa × Va = Cb × Vb.\n\n3. Les volumes Va et Vb doivent être exprimés dans la même unité.\n4. Isoler la grandeur demandée, puis calculer."
          },
          {
            type: "exemple",
            titre: "Calculer un volume à l’équivalence",
            texte: "On dispose de 20 mL d’une solution acide telle que Ca = 0,10 mol/L. On utilise une solution de soude telle que Cb = 0,20 mol/L.\n\nCa × Va = Cb × Vb.\n\nVb = Ca × Va / Cb\nVb = 0,10 × 20 / 0,20 = 10 mL.\n\nIl faut 10 mL de cette solution de soude pour atteindre l’équivalence."
          },
          {
            type: "remarque",
            titre: "Dilution et réaction : deux situations différentes",
            texte: "Dans une dilution, on ajoute du solvant à une solution : la quantité de soluté du prélèvement est conservée.\n\nIci, on mélange une solution acide et une solution basique : des ions réagissent et sont consommés. La relation Ca × Va = Cb × Vb traduit les proportions de la réaction à l’équivalence ; ce n’est pas la formule d’une dilution."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode pour l’examen",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un exercice",
            texte: "1. Identifier l’acide et la base, ainsi que les ions qui réagissent.\n2. Écrire l’équation : H₃O⁺ + OH⁻ → 2 H₂O.\n3. Calculer les quantités apportées avec n = C × V, en utilisant des litres.\n4. Comparer ces quantités dans la proportion 1 pour 1.\n5. Conclure : excès acide, excès basique ou proportions exactes.\n6. Présenter les calculs avec leurs unités."
          },
          {
            type: "tableau",
            titre: "À retenir pour l’acide chlorhydrique et la soude",
            entetes: ["Situation", "Conclusion à 25 °C"],
            lignes: [
              ["H₃O⁺ apportés en excès", "Mélange acide"],
              ["OH⁻ apportés en excès", "Mélange basique"],
              ["Quantités apportées égales", "Équivalence ; mélange neutre dans le modèle étudié"],
              ["Ions Na⁺ et Cl⁻", "Ions spectateurs restant en solution"]
            ]
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Affirmer que tout mélange acide-base est neutre.\n• Comparer uniquement les volumes sans tenir compte des concentrations.\n• Oublier de convertir les mL en L dans n = C × V.\n• Oublier que les ions Na⁺ et Cl⁻ restent en solution.\n• Appliquer automatiquement pH = 7 à l’équivalence de n’importe quel acide avec n’importe quelle base."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écrire l’équation de la réaction entre les ions H₃O⁺ et OH⁻. Quel produit se forme ?",
        correction: "H₃O⁺ + OH⁻ → 2 H₂O.\n\nLe produit formé est l’eau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le mélange d’acide chlorhydrique et de soude, nommer les ions spectateurs.",
        correction: "Les ions spectateurs sont les ions sodium Na⁺ et chlorure Cl⁻. Ils restent en solution et ne sont pas transformés dans le bilan ionique simplifié."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On mélange une solution apportant 0,05 mol de H₃O⁺ et une solution apportant 0,02 mol de OH⁻. Quel ion est en excès et quelle quantité en reste-t-il ?",
        correction: "Les ions réagissent dans la proportion 1 pour 1. Les 0,02 mol de OH⁻ consomment 0,02 mol de H₃O⁺.\n\nIl reste 0,05 − 0,02 = 0,03 mol de H₃O⁺ en excès.\n\nLe mélange est acide à 25 °C."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution de soude apporte des ions OH⁻ à la concentration de 0,20 mol/L. Calculer la quantité de OH⁻ contenue dans 50 mL de solution.",
        correction: "V = 50 mL = 0,050 L.\n\nn(OH⁻) = C × V = 0,20 × 0,050 = 0,010 mol."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On mélange deux solutions apportant respectivement 0,04 mol de H₃O⁺ et 0,04 mol de OH⁻. Les solutions sont de l’acide chlorhydrique et de la soude. Que peut-on conclure à 25 °C ?",
        correction: "Les quantités apportées sont égales et les ions réagissent dans la proportion 1 pour 1 : on est à l’équivalence.\n\nDans le modèle étudié, le mélange est neutre à 25 °C. Il contient notamment encore des ions Na⁺ et Cl⁻."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On mélange 100 mL d’une solution apportant H₃O⁺ à 0,10 mol/L et 100 mL d’une solution de soude apportant OH⁻ à 0,20 mol/L. Déterminer l’ion en excès et la nature du mélange à 25 °C.",
        correction: "Chaque volume vaut 100 mL = 0,100 L.\n\nn(H₃O⁺) = 0,10 × 0,100 = 0,010 mol.\nn(OH⁻) = 0,20 × 0,100 = 0,020 mol.\n\nLa réaction consomme 0,010 mol de chaque ion. Il reste 0,020 − 0,010 = 0,010 mol de OH⁻.\n\nLes ions OH⁻ sont en excès : le mélange est basique."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À l’équivalence, 25 mL d’une solution acide de concentration Ca = 0,20 mol/L réagissent avec une solution de soude de concentration Cb = 0,10 mol/L. Calculer le volume Vb de soude utilisé. Ca et Cb désignent ici les concentrations respectives de H₃O⁺ et OH⁻.",
        correction: "À l’équivalence : Ca × Va = Cb × Vb.\n\nVb = Ca × Va / Cb\nVb = 0,20 × 25 / 0,10 = 50 mL.\n\nLes volumes sont ici tous deux exprimés en mL. Il faut 50 mL de soude."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève mélange 20 mL d’acide chlorhydrique et 20 mL de soude. Il affirme que le mélange est forcément neutre puisque les volumes sont égaux. A-t-il raison ?",
        correction: "Non. Il faut aussi connaître les concentrations.\n\nLes quantités apportées se calculent avec n = C × V. Même si les volumes sont égaux, des concentrations différentes donnent des quantités différentes. Un ion peut donc rester en excès."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. À 25 °C, on mélange 40 mL d’une solution d’acide chlorhydrique apportant H₃O⁺ à 0,15 mol/L avec 20 mL d’une solution de soude apportant OH⁻ à 0,20 mol/L.\n\n1. Écrire l’équation ionique de la réaction.\n2. Calculer les quantités de H₃O⁺ et de OH⁻ apportées.\n3. Déterminer l’ion en excès et sa quantité restante.\n4. Indiquer la nature du mélange.\n5. Citer les ions spectateurs.",
        correction: "1. H₃O⁺ + OH⁻ → 2 H₂O.\n\n2. Va = 40 mL = 0,040 L ; Vb = 20 mL = 0,020 L.\n\nn(H₃O⁺) = 0,15 × 0,040 = 0,0060 mol.\nn(OH⁻) = 0,20 × 0,020 = 0,0040 mol.\n\n3. Les ions réagissent dans la proportion 1 pour 1. Les 0,0040 mol de OH⁻ consomment 0,0040 mol de H₃O⁺.\n\nIl reste 0,0060 − 0,0040 = 0,0020 mol de H₃O⁺ en excès.\n\n4. Le mélange est acide.\n\n5. Les ions spectateurs sont Na⁺ et Cl⁻."
      }
    ]
  }
]);
