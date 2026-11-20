enregistrerChapitres("3e", "sp", [
  {
    id: 1,
    titre: "Chapitre 1 : Solutions, concentration et dilution",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les solutions aqueuses",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi étudier les solutions ?",
            texte: "Dans la vie quotidienne, on rencontre des solutions : eau salée, eau sucrée, vinaigre ou encore certains médicaments liquides. En chimie, il est important de savoir reconnaître les constituants d’une solution et de décrire la quantité de matière dissoute."
          },
          {
            type: "definition",
            titre: "Solvant, soluté et solution",
            texte: "Une solution est un mélange homogène obtenu lorsqu’une substance se dissout dans un liquide.\n\nLe solvant est le liquide qui dissout. Le soluté est la substance dissoute. La solution est le mélange obtenu.\n\nLorsque le solvant est l’eau, on parle de solution aqueuse."
          },
          {
            type: "exemple",
            titre: "Exemple : eau salée",
            texte: "On dissout du sel dans de l’eau.\n\n• Solvant : l’eau.\n• Soluté : le sel.\n• Solution obtenue : une solution aqueuse de sel.\n\nLe sel dissous n’a pas disparu : il est réparti dans la solution, même si on ne le voit plus."
          },
          {
            type: "definition",
            titre: "Mélange homogène et mélange hétérogène",
            texte: "Un mélange est homogène lorsque l’on ne distingue pas ses différents constituants à l’œil nu. Une solution est homogène.\n\nUn mélange est hétérogène lorsque l’on distingue au moins deux parties. Par exemple, l’eau et le sable forment un mélange hétérogène."
          },
          {
            type: "remarque",
            titre: "Attention à la saturation",
            texte: "À une température donnée, on ne peut pas toujours dissoudre une quantité illimitée de soluté dans un volume donné de solvant. Si l’on ajoute trop de soluté, une partie peut rester au fond : la solution est alors saturée."
          },
          {
            type: "remarque",
            titre: "Sécurité au laboratoire",
            texte: "Ne goûte jamais une solution de laboratoire et ne touche pas un produit inconnu. Suis les consignes de l’enseignant et porte les protections demandées. Une solution transparente n’est pas forcément sans danger."
          }
        ]
      },

      {
        id: 2,
        titre: "La concentration massique",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La concentration massique indique la masse de soluté dissoute par litre de solution.\n\nOn la note Cm ou Cₘ.\n\nCₘ = m / V\n\noù m est la masse de soluté dissoute et V est le volume total de la solution."
          },
          {
            type: "regle",
            titre: "Unités et formules utiles",
            texte: "Si m est en grammes (g) et V en litres (L), alors Cₘ est en grammes par litre (g/L).\n\nFormule principale : Cₘ = m / V\n\nPour calculer la masse : m = Cₘ × V\n\nPour calculer le volume : V = m / Cₘ"
          },
          {
            type: "tableau",
            titre: "Conversions de volume",
            entetes: ["Égalité", "Conséquence"],
            lignes: [
              ["1 L = 1 000 mL", "Pour passer de mL à L, on divise par 1 000."],
              ["1 mL = 0,001 L", "250 mL = 0,250 L."],
              ["1 L = 1 000 cm³", "1 mL = 1 cm³."]
            ]
          },
          {
            type: "tableau",
            titre: "Conversions de masse",
            entetes: ["Égalité", "Exemple"],
            lignes: [
              ["1 kg = 1 000 g", "0,5 kg = 500 g."],
              ["1 g = 1 000 mg", "500 mg = 0,5 g."]
            ]
          },
          {
            type: "methode",
            titre: "Calculer une concentration massique",
            texte: "1. Repérer la masse de soluté dissoute et le volume total de solution.\n2. Convertir la masse en g et le volume en L si nécessaire.\n3. Écrire Cₘ = m / V.\n4. Remplacer par les valeurs et calculer.\n5. Donner le résultat en g/L."
          },
          {
            type: "exemple",
            titre: "Exemple détaillé",
            texte: "On dissout 8 g de sucre pour obtenir 200 mL de solution. Calculons la concentration massique.\n\nDonnées : m = 8 g et V = 200 mL = 0,200 L.\n\nCₘ = m / V\nCₘ = 8 / 0,200\nCₘ = 40 g/L.\n\nLa solution contient donc 40 g de sucre par litre de solution."
          },
          {
            type: "remarque",
            titre: "Erreur fréquente",
            texte: "Dans la formule, V est le volume final de la solution, et non nécessairement le volume d’eau utilisé avant la dissolution. Il faut aussi convertir les millilitres en litres avant d’obtenir une concentration en g/L."
          }
        ]
      },

      {
        id: 3,
        titre: "La mole et la concentration molaire",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi utiliser la mole ?",
            texte: "Les atomes, molécules et ions sont extrêmement petits et très nombreux. En chimie, on utilise la mole pour exprimer une quantité de matière."
          },
          {
            type: "definition",
            titre: "Quantité de matière et masse molaire",
            texte: "La quantité de matière se note n et s’exprime en mole, de symbole mol.\n\nUne mole contient environ 6,02 × 10²³ entités chimiques.\n\nLa masse molaire, notée M, est la masse d’une mole d’une espèce chimique. Elle s’exprime généralement en g/mol."
          },
          {
            type: "regle",
            titre: "Relation entre masse et quantité de matière",
            texte: "n = m / M\n\nDonc : m = n × M.\n\nAvec m en g, M en g/mol et n en mol."
          },
          {
            type: "exemple",
            titre: "Calculer une masse molaire",
            texte: "Pour une molécule, on additionne les masses molaires atomiques en tenant compte du nombre d’atomes.\n\nExemple pour H₂O : avec M(H) = 1 g/mol et M(O) = 16 g/mol,\nM(H₂O) = 2 × 1 + 16 = 18 g/mol."
          },
          {
            type: "definition",
            titre: "Concentration molaire",
            texte: "La concentration molaire indique la quantité de matière de soluté dissoute par litre de solution.\n\nC = n / V\n\noù C est en mol/L, n en mol et V en L."
          },
          {
            type: "regle",
            titre: "Formules utiles",
            texte: "C = n / V\nn = C × V\nV = n / C\n\nSi le soluté a pour masse molaire M :\nCₘ = C × M\net C = Cₘ / M.\n\nPour ces relations, utiliser Cₘ en g/L, C en mol/L et M en g/mol."
          },
          {
            type: "methode",
            titre: "Calculer une concentration molaire à partir d’une masse",
            texte: "1. Calculer ou relever la masse molaire M du soluté.\n2. Calculer n = m / M.\n3. Convertir le volume final en litres.\n4. Calculer C = n / V.\n5. Indiquer l’unité mol/L."
          },
          {
            type: "exemple",
            titre: "Exemple : solution de chlorure de sodium",
            texte: "On dissout 5,85 g de chlorure de sodium NaCl pour obtenir 500 mL de solution. Données : M(Na) = 23 g/mol et M(Cl) = 35,5 g/mol.\n\nM(NaCl) = 23 + 35,5 = 58,5 g/mol.\n\nn = m / M = 5,85 / 58,5 = 0,10 mol.\n\nV = 500 mL = 0,500 L.\n\nC = n / V = 0,10 / 0,500 = 0,20 mol/L."
          },
          {
            type: "remarque",
            titre: "Bien distinguer les concentrations",
            texte: "La concentration massique s’exprime ici en g/L ; la concentration molaire s’exprime en mol/L. Elles décrivent la même solution, mais elles ne représentent pas la même grandeur."
          }
        ]
      },

      {
        id: 4,
        titre: "Préparer une solution par dissolution",
        blocs: [
          {
            type: "definition",
            titre: "Principe",
            texte: "Préparer une solution par dissolution consiste à dissoudre une quantité connue de soluté dans un solvant, puis à ajuster au volume final souhaité."
          },
          {
            type: "methode",
            titre: "Étapes de préparation",
            texte: "Pour préparer une solution à partir d’un solide, avec le matériel adapté :\n\n1. Calculer la masse de soluté nécessaire.\n2. Peser cette masse à l’aide d’une balance.\n3. Introduire le solide dans une fiole jaugée, éventuellement à l’aide d’un entonnoir.\n4. Ajouter un peu d’eau distillée et agiter pour dissoudre le solide.\n5. Ajouter de l’eau distillée jusqu’au trait de jauge, en terminant goutte à goutte. Lire le bas du ménisque à hauteur des yeux.\n6. Boucher et homogénéiser en retournant plusieurs fois la fiole.\n\nSi l’on utilise un bécher ou un entonnoir, les rincer avec un peu d’eau distillée et verser les eaux de rinçage dans la fiole pour transférer tout le soluté."
          },
          {
            type: "remarque",
            titre: "Le bon volume",
            texte: "Pour préparer 250 mL de solution, on complète jusqu’à obtenir un volume total de 250 mL. On ne mesure pas simplement 250 mL d’eau avant d’y ajouter le soluté."
          },
          {
            type: "exemple",
            titre: "Masse à peser",
            texte: "On veut préparer 250 mL de solution de sucre de concentration massique 20 g/L.\n\nV = 250 mL = 0,250 L.\n\nm = Cₘ × V = 20 × 0,250 = 5,0 g.\n\nIl faut peser 5,0 g de sucre, les dissoudre, puis compléter avec de l’eau jusqu’à obtenir 250 mL de solution."
          }
        ]
      },

      {
        id: 5,
        titre: "La dilution",
        blocs: [
          {
            type: "definition",
            titre: "Principe",
            texte: "Diluer une solution consiste à ajouter du solvant pour obtenir une solution moins concentrée.\n\nLa solution de départ est la solution mère. La solution obtenue est la solution fille."
          },
          {
            type: "regle",
            titre: "Conservation du soluté",
            texte: "Lors d’une dilution, la quantité de soluté présente dans le prélèvement de solution mère est conservée dans la solution fille obtenue.\n\nPour les concentrations molaires : Ci × Vi = Cf × Vf.\n\nPour les concentrations massiques : Cₘi × Vi = Cₘf × Vf.\n\nL’indice i désigne la solution initiale prélevée et l’indice f la solution finale. Les volumes Vi et Vf doivent être exprimés dans la même unité."
          },
          {
            type: "definition",
            titre: "Facteur de dilution",
            texte: "Le facteur de dilution k indique combien de fois la solution fille est moins concentrée que la solution mère.\n\nk = Ci / Cf = Vf / Vi.\n\nCette relation s’applique aussi aux concentrations massiques. Pour une dilution, k est supérieur à 1."
          },
          {
            type: "methode",
            titre: "Résoudre un exercice de dilution",
            texte: "1. Repérer la concentration initiale Ci, le volume prélevé Vi, la concentration finale Cf et le volume final Vf.\n2. Mettre les volumes dans la même unité.\n3. Écrire Ci × Vi = Cf × Vf.\n4. Isoler la grandeur recherchée.\n5. Calculer et vérifier que la concentration finale est plus petite que la concentration initiale."
          },
          {
            type: "exemple",
            titre: "Calculer une concentration après dilution",
            texte: "On prélève 20 mL d’une solution mère de concentration 0,50 mol/L. On ajoute de l’eau jusqu’à obtenir 100 mL de solution fille.\n\nCi × Vi = Cf × Vf\n\nCf = Ci × Vi / Vf\nCf = 0,50 × 20 / 100\nCf = 0,10 mol/L.\n\nLe facteur de dilution est k = 100 / 20 = 5. La solution fille est cinq fois moins concentrée que la solution mère."
          },
          {
            type: "methode",
            titre: "Réaliser une dilution au laboratoire",
            texte: "1. Prélever le volume nécessaire de solution mère avec une pipette jaugée munie d’une propipette.\n2. Introduire le prélèvement dans une fiole jaugée de volume final adapté.\n3. Ajouter de l’eau distillée, puis compléter jusqu’au trait de jauge.\n4. Boucher et homogénéiser.\n\nNe jamais pipeter à la bouche."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Dans la formule de dilution, Vi est le volume de solution mère prélevé, et non le volume total de solution mère disponible. Vf est le volume final de solution fille, et non seulement le volume d’eau ajouté."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On dissout du sucre dans de l’eau. Identifier le soluté, le solvant et la solution obtenue. Pourquoi dit-on que la solution est aqueuse ?",
        correction: "Le soluté est le sucre. Le solvant est l’eau. On obtient une solution de sucre dans l’eau. Elle est dite aqueuse parce que son solvant est l’eau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir : a) 350 mL en L ; b) 0,75 L en mL ; c) 250 mg en g ; d) 2,5 g en mg.",
        correction: "a) 350 mL = 350 / 1 000 = 0,350 L.\n\nb) 0,75 L = 0,75 × 1 000 = 750 mL.\n\nc) 250 mg = 250 / 1 000 = 0,250 g.\n\nd) 2,5 g = 2,5 × 1 000 = 2 500 mg."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution est préparée en dissolvant 6 g de sel pour obtenir 300 mL de solution. Calculer sa concentration massique.",
        correction: "Données : m = 6 g ; V = 300 mL = 0,300 L.\n\nCₘ = m / V = 6 / 0,300 = 20 g/L.\n\nLa concentration massique est 20 g/L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On veut préparer 400 mL d’une solution de concentration massique 15 g/L. Quelle masse de soluté faut-il dissoudre ?",
        correction: "V = 400 mL = 0,400 L.\n\nm = Cₘ × V = 15 × 0,400 = 6,0 g.\n\nIl faut dissoudre 6,0 g de soluté, puis compléter jusqu’au volume final de 400 mL."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On dispose de 9 g de soluté. Quel volume de solution peut-on préparer à la concentration massique de 30 g/L ? Donner le résultat en L puis en mL.",
        correction: "V = m / Cₘ = 9 / 30 = 0,30 L.\n\nOr 0,30 L = 300 mL.\n\nOn peut préparer 300 mL de solution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dissout 5,85 g de NaCl pour obtenir 250 mL de solution. Données : M(Na) = 23 g/mol et M(Cl) = 35,5 g/mol. Calculer : a) la masse molaire de NaCl ; b) la quantité de matière dissoute ; c) la concentration molaire.",
        correction: "a) M(NaCl) = M(Na) + M(Cl) = 23 + 35,5 = 58,5 g/mol.\n\nb) n = m / M = 5,85 / 58,5 = 0,10 mol.\n\nc) V = 250 mL = 0,250 L.\nC = n / V = 0,10 / 0,250 = 0,40 mol/L.\n\nLa concentration molaire est donc 0,40 mol/L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution de NaCl a une concentration molaire de 0,20 mol/L. On donne M(NaCl) = 58,5 g/mol. Calculer sa concentration massique, puis la masse de NaCl contenue dans 500 mL de cette solution.",
        correction: "Cₘ = C × M = 0,20 × 58,5 = 11,7 g/L.\n\nPour 500 mL : V = 0,500 L.\n\nm = Cₘ × V = 11,7 × 0,500 = 5,85 g.\n\nLa concentration massique est 11,7 g/L et 500 mL de solution contiennent 5,85 g de NaCl."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On prélève 25 mL d’une solution de concentration massique 40 g/L. On ajoute de l’eau jusqu’à obtenir 200 mL de solution. Calculer la concentration massique finale et le facteur de dilution.",
        correction: "Cₘi × Vi = Cₘf × Vf.\n\nCₘf = Cₘi × Vi / Vf\nCₘf = 40 × 25 / 200 = 5,0 g/L.\n\nk = Vf / Vi = 200 / 25 = 8.\n\nLa solution finale a une concentration massique de 5,0 g/L. Elle est huit fois moins concentrée que la solution initiale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On souhaite préparer 250 mL d’une solution fille de concentration 0,10 mol/L à partir d’une solution mère de concentration 0,50 mol/L. Quel volume de solution mère faut-il prélever ? Décrire brièvement la préparation.",
        correction: "On utilise Ci × Vi = Cf × Vf.\n\nVi = Cf × Vf / Ci\nVi = 0,10 × 250 / 0,50 = 50 mL.\n\nIl faut prélever 50 mL de solution mère avec une pipette adaptée et une propipette, les verser dans une fiole jaugée de 250 mL, compléter avec de l’eau distillée jusqu’au trait de jauge, boucher puis homogénéiser.\n\nVérification : k = 250 / 50 = 5 et 0,50 / 5 = 0,10 mol/L."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. On prépare 500 mL d’une solution S en dissolvant 11,7 g de NaCl. On donne M(NaCl) = 58,5 g/mol.\n\n1. Calculer la concentration massique de S.\n2. Calculer la quantité de matière de NaCl dissoute, puis la concentration molaire de S.\n3. On prélève 50 mL de S et on complète avec de l’eau jusqu’à 200 mL. Calculer la concentration molaire de la solution obtenue.\n4. Quel est le facteur de dilution ?",
        correction: "1. V = 500 mL = 0,500 L.\nCₘ = m / V = 11,7 / 0,500 = 23,4 g/L.\n\n2. n = m / M = 11,7 / 58,5 = 0,20 mol.\nC = n / V = 0,20 / 0,500 = 0,40 mol/L.\n\n3. Ci × Vi = Cf × Vf.\nCf = Ci × Vi / Vf = 0,40 × 50 / 200 = 0,10 mol/L.\n\n4. k = Vf / Vi = 200 / 50 = 4.\n\nLa solution obtenue est quatre fois moins concentrée que S."
      }
    ]
  }
]);
