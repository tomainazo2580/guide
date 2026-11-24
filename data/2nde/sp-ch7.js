enregistrerChapitres("2nde", "sp", [
  {
    id: 7,
    titre: "Chapitre 7 : Les solutions aqueuses et leur concentration",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Comprendre une solution aqueuse",
        blocs: [
          {
            type: "introduction",
            titre: "Des mélanges homogènes",
            texte: "Une eau sucrée bien mélangée a le même aspect dans tout le récipient : c’est un mélange homogène. Pour décrire ce type de mélange et connaître la quantité de substance dissoute, on utilise le vocabulaire des solutions et des concentrations."
          },
          {
            type: "definition",
            titre: "Solvant, soluté et solution",
            texte: "Le solvant est le liquide qui dissout une substance. Le soluté est la substance dissoute. La solution est le mélange homogène obtenu. Lorsque le solvant est l’eau, on parle de solution aqueuse."
          },
          {
            type: "exemple",
            titre: "Une solution sucrée",
            texte: "Lorsqu’une quantité de sucre se dissout entièrement dans l’eau, le sucre est le soluté, l’eau est le solvant et l’eau sucrée est la solution aqueuse."
          },
          {
            type: "schema",
            titre: "Dissolution",
            texte: "Soluté + solvant\n       ↓ dissolution\nSolution homogène"
          },
          {
            type: "remarque",
            titre: "Disparaître à l’œil ne signifie pas disparaître",
            texte: "Lorsqu’un soluté se dissout, il n’est généralement plus visible à l’œil nu, mais ses entités sont toujours présentes dans la solution. La dissolution d’un solide n’est pas la même chose que sa fusion : la fusion est le passage de l’état solide à l’état liquide."
          },
          {
            type: "definition",
            titre: "Solution saturée",
            texte: "À une température donnée, une solution est saturée en un soluté lorsqu’elle ne peut plus en dissoudre davantage dans les conditions considérées. Si l’on ajoute encore du soluté, une partie peut rester non dissoute."
          },
          {
            type: "remarque",
            titre: "Volume de la solution",
            texte: "Le volume de la solution est le volume final du mélange. Il ne faut pas le confondre avec le volume d’eau utilisé au départ : les volumes ne sont pas toujours simplement additionnables."
          }
        ]
      },

      {
        id: 2,
        titre: "Solutions moléculaires et solutions ioniques",
        blocs: [
          {
            type: "definition",
            titre: "Solution moléculaire",
            texte: "Une solution moléculaire contient un soluté dont les entités dissoutes sont des molécules. Par exemple, le sucre se dissout dans l’eau sous forme de molécules de sucre."
          },
          {
            type: "definition",
            titre: "Solution ionique",
            texte: "Une solution ionique contient des ions dissous dans le solvant. Ces ions peuvent être obtenus, par exemple, par dissolution d’un solide ionique dans l’eau."
          },
          {
            type: "exemple",
            titre: "Dissolution du chlorure de sodium",
            texte: "Le chlorure de sodium solide NaCl se dissout dans l’eau en donnant des ions sodium Na⁺ et des ions chlorure Cl⁻ :\n\nNaCl(s) → Na⁺(aq) + Cl⁻(aq).\n\nLa notation (aq) indique que les ions sont en solution aqueuse."
          },
          {
            type: "exemple",
            titre: "Dissolution du chlorure de calcium",
            texte: "Le chlorure de calcium CaCl₂ se dissout selon :\n\nCaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq).\n\nPour chaque entité CaCl₂ dissoute, on obtient un ion Ca²⁺ et deux ions Cl⁻."
          },
          {
            type: "regle",
            titre: "Électroneutralité",
            texte: "Une solution est globalement électriquement neutre : la somme des charges positives est égale à la somme des charges négatives. Les ions ne sont pas nécessairement présents en nombres égaux, car leurs charges peuvent être différentes."
          },
          {
            type: "exemple",
            titre: "Vérification des charges",
            texte: "Dans l’écriture CaCl₂ → Ca²⁺ + 2 Cl⁻, la charge totale à droite vaut +2 + 2 × (−1) = 0. Elle est égale à celle de CaCl₂, qui est neutre."
          },
          {
            type: "remarque",
            titre: "Conductivité",
            texte: "Une solution contenant des ions mobiles peut conduire le courant électrique. Une solution de sucre, dont les molécules sont neutres, ne conduit pas le courant de la même manière qu’une solution ionique. La conductivité dépend notamment des ions présents et de leur concentration."
          }
        ]
      },

      {
        id: 3,
        titre: "La concentration massique",
        blocs: [
          {
            type: "definition",
            titre: "Concentration massique",
            texte: "La concentration massique d’un soluté est la masse de soluté dissous par unité de volume de solution. Elle se note ici Cₘ et s’exprime souvent en grammes par litre, de symbole g·L⁻¹."
          },
          {
            type: "regle",
            titre: "Formules",
            texte: "Cₘ = m / V\n\nm = Cₘ × V\n\nV = m / Cₘ, si Cₘ est non nulle.\n\nCₘ : concentration massique en g·L⁻¹.\nm : masse de soluté dissous en g.\nV : volume final de solution en L."
          },
          {
            type: "rappel",
            titre: "Conversions de volume",
            texte: "1 L = 1 000 mL et 1 mL = 0,001 L.\n\nExemples : 250 mL = 0,250 L ; 50 mL = 0,050 L ; 1 500 mL = 1,5 L."
          },
          {
            type: "exemple",
            titre: "Calculer une concentration massique",
            texte: "On dissout entièrement 5,0 g de sucre et on obtient 250 mL de solution.\n\nV = 0,250 L.\nCₘ = m / V = 5,0 / 0,250 = 20 g·L⁻¹.\n\nCela signifie qu’un litre de cette solution contient 20 g de sucre dissous."
          },
          {
            type: "exemple",
            titre: "Calculer une masse dissoute",
            texte: "Une solution contient du sel à la concentration massique Cₘ = 8,0 g·L⁻¹. Dans 0,50 L de cette solution :\n\nm = Cₘ × V = 8,0 × 0,50 = 4,0 g de sel dissous."
          },
          {
            type: "remarque",
            titre: "Masse dissoute",
            texte: "Dans la formule Cₘ = m / V, m est la masse effectivement dissoute, pas nécessairement la masse totale ajoutée. Si une partie du solide reste au fond, elle ne compte pas dans la masse dissoute."
          }
        ]
      },

      {
        id: 4,
        titre: "La concentration molaire",
        blocs: [
          {
            type: "definition",
            titre: "Concentration molaire",
            texte: "La concentration molaire d’une espèce dissoute est sa quantité de matière par unité de volume de solution. Elle se note ici C et s’exprime généralement en moles par litre, de symbole mol·L⁻¹."
          },
          {
            type: "regle",
            titre: "Formules",
            texte: "C = n / V\n\nn = C × V\n\nV = n / C, si C est non nulle.\n\nC : concentration molaire en mol·L⁻¹.\nn : quantité de matière de l’espèce dissoute en mol.\nV : volume final de solution en L."
          },
          {
            type: "exemple",
            titre: "Calculer une concentration molaire",
            texte: "Une solution de volume 0,50 L contient 0,10 mol de soluté dissous.\n\nC = n / V = 0,10 / 0,50 = 0,20 mol·L⁻¹."
          },
          {
            type: "regle",
            titre: "Lien entre les deux concentrations",
            texte: "Pour un même soluté :\n\nCₘ = C × M\n\nC = Cₘ / M\n\nAvec C en mol·L⁻¹ et M en g·mol⁻¹, Cₘ est obtenue en g·L⁻¹."
          },
          {
            type: "exemple",
            titre: "Passer de C à Cₘ",
            texte: "Une solution de glucose a une concentration C = 0,10 mol·L⁻¹. La masse molaire du glucose est M = 180 g·mol⁻¹.\n\nCₘ = C × M = 0,10 × 180 = 18 g·L⁻¹."
          },
          {
            type: "methode",
            titre: "Trouver C à partir d’une masse",
            texte: "1. Convertir le volume final en litres.\n2. Calculer la masse molaire M du soluté si nécessaire.\n3. Calculer n = m / M.\n4. Calculer C = n / V.\n\nOn peut aussi utiliser directement C = m / (M × V)."
          },
          {
            type: "remarque",
            titre: "Bien identifier l’espèce",
            texte: "La concentration calculée concerne l’espèce ou le soluté indiqué. Dans une solution ionique, les concentrations des différents ions peuvent être différentes les unes des autres."
          }
        ]
      },

      {
        id: 5,
        titre: "Concentrations des ions en solution",
        blocs: [
          {
            type: "introduction",
            titre: "Utiliser l’équation de dissolution",
            texte: "Les coefficients de l’équation de dissolution indiquent les proportions des ions obtenus. Ils permettent de relier la quantité de soluté dissous aux quantités d’ions formés."
          },
          {
            type: "exemple",
            titre: "Chlorure de sodium",
            texte: "NaCl(s) → Na⁺(aq) + Cl⁻(aq).\n\nSi la dissolution est totale et si ces ions ne proviennent d’aucune autre source, une solution obtenue avec une concentration apportée C de NaCl vérifie :\n[Na⁺] = C et [Cl⁻] = C.\n\nLes crochets indiquent ici la concentration molaire de l’ion."
          },
          {
            type: "exemple",
            titre: "Chlorure de calcium",
            texte: "CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq).\n\nSi la dissolution est totale et si ces ions ne proviennent d’aucune autre source, pour une concentration apportée C = 0,10 mol·L⁻¹ de CaCl₂ :\n[Ca²⁺] = 0,10 mol·L⁻¹ ;\n[Cl⁻] = 2 × 0,10 = 0,20 mol·L⁻¹."
          },
          {
            type: "methode",
            titre: "Calculer les concentrations ioniques",
            texte: "1. Écrire l’équation de dissolution ajustée.\n2. Calculer la concentration apportée C du solide dissous : C = n / V.\n3. Multiplier C par le coefficient de chaque ion dans l’équation.\n4. Vérifier l’électroneutralité en tenant compte des charges.\n\nCette méthode suppose une dissolution totale et l’absence d’autres sources des ions considérés."
          },
          {
            type: "regle",
            titre: "Vérifier l’électroneutralité",
            texte: "Dans une solution contenant uniquement les ions Ca²⁺ et Cl⁻ considérés, l’électroneutralité s’écrit : 2[Ca²⁺] = [Cl⁻]. Le facteur 2 vient de la charge de Ca²⁺."
          },
          {
            type: "remarque",
            titre: "Quantités de matière et concentrations",
            texte: "Pour une solution homogène de volume V, la quantité d’un ion vaut n(ion) = [ion] × V. Le volume V doit être exprimé en litres si la concentration est en mol·L⁻¹."
          }
        ]
      },

      {
        id: 6,
        titre: "La dilution",
        blocs: [
          {
            type: "definition",
            titre: "Diluer une solution",
            texte: "Diluer une solution consiste à ajouter du solvant pour obtenir une solution moins concentrée. La solution de départ est appelée solution mère ; la solution obtenue est appelée solution fille."
          },
          {
            type: "regle",
            titre: "Conservation du soluté prélevé",
            texte: "Lors d’une dilution, si aucun soluté n’est perdu et si aucune réaction ne le transforme, la quantité de matière de soluté présente dans le prélèvement de solution mère est égale à celle présente dans la solution fille."
          },
          {
            type: "regle",
            titre: "Relation de dilution",
            texte: "Cₘère × Vₘère = C_fille × V_fille.\n\nLes concentrations sont ici des concentrations molaires. Les deux volumes doivent être exprimés dans la même unité. La relation s’applique aussi aux concentrations massiques d’un même soluté."
          },
          {
            type: "definition",
            titre: "Facteur de dilution",
            texte: "Le facteur de dilution F est le rapport de la concentration de la solution mère à celle de la solution fille :\n\nF = Cₘère / C_fille = V_fille / Vₘère.\n\nPour une dilution, F est supérieur à 1."
          },
          {
            type: "exemple",
            titre: "Dilution par 5",
            texte: "On prélève 20 mL d’une solution mère et on ajoute de l’eau jusqu’à obtenir 100 mL de solution fille.\n\nF = 100 / 20 = 5.\n\nSi Cₘère = 0,50 mol·L⁻¹, alors C_fille = 0,50 / 5 = 0,10 mol·L⁻¹."
          },
          {
            type: "methode",
            titre: "Résoudre un exercice de dilution",
            texte: "1. Identifier la solution mère et la solution fille.\n2. Repérer la concentration et le volume de chacune.\n3. Écrire Cₘère × Vₘère = C_fille × V_fille.\n4. Utiliser la même unité pour les deux volumes.\n5. Isoler la grandeur cherchée et vérifier que la solution fille est moins concentrée."
          },
          {
            type: "remarque",
            titre: "Volume final",
            texte: "Si l’on prélève 20 mL de solution mère pour obtenir 100 mL de solution fille, 100 mL est le volume final, pas le volume d’eau ajouté."
          }
        ]
      },

      {
        id: 7,
        titre: "Méthodes, sécurité et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Choisir la relation adaptée",
            texte: "Pour une masse dissoute et un volume : Cₘ = m / V.\n\nPour une quantité de matière et un volume : C = n / V.\n\nPour passer de l’une à l’autre : Cₘ = C × M.\n\nPour une dilution : Cₘère × Vₘère = C_fille × V_fille."
          },
          {
            type: "schema",
            titre: "Chemin de calcul",
            texte: "Masse dissoute m\n    ↓ n = m / M\nQuantité de matière n\n    ↓ C = n / V\nConcentration molaire C\n\nPour une dilution :\nSolution mère → prélèvement → ajout de solvant → solution fille"
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : utiliser 250 mL comme si c’était 250 L.\nÀ faire : convertir 250 mL en 0,250 L.\n\nErreur : utiliser le volume d’eau initial au lieu du volume final de solution.\nÀ faire : employer le volume final indiqué.\n\nErreur : oublier le coefficient 2 pour Cl⁻ dans la dissolution de CaCl₂.\nÀ faire : lire les coefficients de l’équation ajustée.\n\nErreur : croire qu’une dilution diminue la quantité de soluté du prélèvement.\nÀ faire : elle diminue sa concentration, mais conserve sa quantité si aucune perte ni réaction n’a lieu.\n\nErreur : confondre le volume final avec le volume de solvant ajouté.\nÀ faire : identifier ce que représente chaque volume."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les calculs ne sont pas des protocoles à réaliser chez soi. Certaines solutions sont corrosives ou toxiques. Toute manipulation de produits chimiques doit se faire dans un cadre adapté, avec le matériel de protection et sous la responsabilité d’un adulte compétent. Ne jamais goûter une solution inconnue."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Du sucre est entièrement dissous dans de l’eau. Nomme le soluté, le solvant et la solution obtenue.",
        correction: "Le soluté est le sucre. Le solvant est l’eau. La solution obtenue est une solution aqueuse de sucre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis les volumes suivants en litres : 250 mL ; 75 mL ; 1 500 mL.",
        correction: "On divise les volumes en millilitres par 1 000.\n\n250 mL = 0,250 L ; 75 mL = 0,075 L ; 1 500 mL = 1,5 L."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une solution contient 4,0 g de sucre dissous dans un volume final de 0,50 L. Calcule sa concentration massique en sucre.",
        correction: "Cₘ = m / V = 4,0 / 0,50 = 8,0 g·L⁻¹."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution de volume final 200 mL contient 0,040 mol de soluté dissous. Calcule sa concentration molaire.",
        correction: "V = 200 mL = 0,200 L.\n\nC = n / V = 0,040 / 0,200 = 0,20 mol·L⁻¹."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution contient un soluté à la concentration massique 12 g·L⁻¹. Quelle masse de ce soluté est dissoute dans 250 mL de solution ?",
        correction: "V = 250 mL = 0,250 L.\n\nm = Cₘ × V = 12 × 0,250 = 3,0 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On dissout totalement du chlorure de calcium CaCl₂ dans l’eau. L’équation est CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq). Si 0,10 mol de CaCl₂ se dissout, quelles quantités de matière de Ca²⁺ et de Cl⁻ sont formées ?",
        correction: "Pour 1 mol de CaCl₂ dissoute, il se forme 1 mol de Ca²⁺ et 2 mol de Cl⁻.\n\nDonc n(Ca²⁺) = 0,10 mol et n(Cl⁻) = 2 × 0,10 = 0,20 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dissout entièrement 5,85 g de chlorure de sodium NaCl dans l’eau pour obtenir 500 mL de solution. On donne M(Na) = 23,0 g·mol⁻¹ et M(Cl) = 35,5 g·mol⁻¹. Calcule : 1. la masse molaire de NaCl ; 2. la quantité de matière dissoute ; 3. la concentration molaire apportée de NaCl ; 4. la concentration massique en NaCl.",
        correction: "1. M(NaCl) = 23,0 + 35,5 = 58,5 g·mol⁻¹.\n\n2. n = m / M = 5,85 / 58,5 = 0,100 mol.\n\n3. V = 500 mL = 0,500 L. Donc C = n / V = 0,100 / 0,500 = 0,200 mol·L⁻¹.\n\n4. Cₘ = m / V = 5,85 / 0,500 = 11,7 g·L⁻¹. On vérifie aussi : C × M = 0,200 × 58,5 = 11,7 g·L⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution de chlorure de calcium est obtenue par dissolution totale de CaCl₂ dans l’eau. Sa concentration apportée en CaCl₂ est 0,15 mol·L⁻¹ et son volume est 200 mL. Les ions considérés ne proviennent d’aucune autre source. L’équation est CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq). Calcule les concentrations de Ca²⁺ et de Cl⁻, puis les quantités de matière de ces ions dans la solution.",
        correction: "D’après l’équation, [Ca²⁺] = 0,15 mol·L⁻¹ et [Cl⁻] = 2 × 0,15 = 0,30 mol·L⁻¹.\n\nV = 200 mL = 0,200 L.\n\nn(Ca²⁺) = [Ca²⁺] × V = 0,15 × 0,200 = 0,030 mol.\n\nn(Cl⁻) = [Cl⁻] × V = 0,30 × 0,200 = 0,060 mol.\n\nVérification des charges : 2[Ca²⁺] = 0,30 mol·L⁻¹ = [Cl⁻]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On prélève 25,0 mL d’une solution mère de concentration molaire 0,40 mol·L⁻¹. On ajoute de l’eau jusqu’à obtenir 100 mL de solution fille. On suppose qu’il n’y a ni perte de soluté ni réaction. Calcule le facteur de dilution, la concentration de la solution fille et la quantité de matière de soluté qu’elle contient.",
        correction: "F = V_fille / Vₘère = 100 / 25,0 = 4.\n\nC_fille = Cₘère / F = 0,40 / 4 = 0,10 mol·L⁻¹.\n\nV_fille = 100 mL = 0,100 L.\nn_fille = C_fille × V_fille = 0,10 × 0,100 = 0,010 mol.\n\nOn retrouve la même quantité dans le prélèvement : 0,40 × 0,0250 = 0,010 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution de glucose a une concentration molaire de 0,050 mol·L⁻¹ et un volume de 400 mL. La masse molaire du glucose vaut 180 g·mol⁻¹. Calcule la quantité de matière et la masse de glucose dissous, puis sa concentration massique.",
        correction: "V = 400 mL = 0,400 L.\n\nn = C × V = 0,050 × 0,400 = 0,020 mol.\n\nm = n × M = 0,020 × 180 = 3,6 g.\n\nCₘ = C × M = 0,050 × 180 = 9,0 g·L⁻¹. On retrouve ce résultat avec m / V = 3,6 / 0,400 = 9,0 g·L⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On dissout entièrement 11,1 g de chlorure de calcium CaCl₂ dans l’eau pour obtenir 500 mL de solution mère. On prélève ensuite 50,0 mL de cette solution et on ajoute de l’eau jusqu’à obtenir 250 mL de solution fille. On suppose qu’il n’y a ni perte ni réaction et que les ions ne proviennent d’aucune autre source. Données : M(Ca) = 40,0 g·mol⁻¹ ; M(Cl) = 35,5 g·mol⁻¹ ; CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq). Calcule : 1. la concentration apportée de CaCl₂ dans la solution mère ; 2. celle de la solution fille ; 3. les concentrations des ions Ca²⁺ et Cl⁻ dans la solution fille ; 4. la quantité de matière de Cl⁻ dans la solution fille.",
        correction: "1. M(CaCl₂) = 40,0 + 2 × 35,5 = 111,0 g·mol⁻¹. La quantité dissoute vaut n = 11,1 / 111,0 = 0,100 mol. Le volume de la solution mère est 0,500 L, donc Cₘère = 0,100 / 0,500 = 0,200 mol·L⁻¹.\n\n2. F = 250 / 50,0 = 5. Donc C_fille = 0,200 / 5 = 0,0400 mol·L⁻¹.\n\n3. D’après l’équation de dissolution : [Ca²⁺] = 0,0400 mol·L⁻¹ et [Cl⁻] = 2 × 0,0400 = 0,0800 mol·L⁻¹.\n\n4. V_fille = 0,250 L. Donc n(Cl⁻) = 0,0800 × 0,250 = 0,0200 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une solution aqueuse de glucose de concentration molaire 0,80 mol·L⁻¹ est disponible. On veut obtenir 200 mL d’une solution fille de concentration 0,10 mol·L⁻¹. La masse molaire du glucose est 180 g·mol⁻¹. On suppose qu’il n’y a ni perte ni réaction lors de la dilution. Détermine : 1. le facteur de dilution ; 2. le volume de solution mère à prélever ; 3. la quantité de matière et la masse de glucose dans la solution fille ; 4. la concentration massique de la solution fille.",
        correction: "1. F = Cₘère / C_fille = 0,80 / 0,10 = 8.\n\n2. Vₘère = V_fille / F = 200 / 8 = 25 mL.\n\n3. V_fille = 0,200 L. Donc n = C_fille × V_fille = 0,10 × 0,200 = 0,020 mol. La masse vaut m = n × M = 0,020 × 180 = 3,6 g.\n\n4. Cₘ = C_fille × M = 0,10 × 180 = 18 g·L⁻¹.\n\nLa quantité de glucose dans les 25 mL prélevés est aussi 0,80 × 0,025 = 0,020 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "À une température donnée, on ajoute 18,0 g d’un solide soluble dans l’eau. Après agitation, 3,0 g restent non dissous et le volume final de solution est 250 mL. La masse molaire du solide vaut 60,0 g·mol⁻¹. 1. Calcule la masse réellement dissoute. 2. Calcule la concentration massique puis la concentration molaire du soluté dissous. 3. La solution est-elle saturée si le solide restant est en équilibre avec la solution ? Justifie.",
        correction: "1. Masse dissoute : 18,0 − 3,0 = 15,0 g.\n\n2. V = 250 mL = 0,250 L. Donc Cₘ = 15,0 / 0,250 = 60,0 g·L⁻¹.\n\nLa quantité dissoute est n = 15,0 / 60,0 = 0,250 mol. La concentration molaire vaut C = 0,250 / 0,250 = 1,00 mol·L⁻¹. On vérifie aussi : C = Cₘ / M = 60,0 / 60,0 = 1,00 mol·L⁻¹.\n\n3. Oui. Dans les conditions données, du solide reste non dissous et il est en équilibre avec la solution : celle-ci est saturée à cette température."
      }
    ]
  }
]);
