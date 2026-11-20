// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 3 : puissances de 10 et écriture scientifique.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-puissances-dix",
    titre: "Chapitre 3 : Puissances de 10 et écriture scientifique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-puissances-positives",
        titre: "Comprendre les puissances de 10",
        blocs: [
          {
            type: "introduction",
            titre: "Une écriture plus courte",
            texte: "Pour écrire dix millions, il faut faire attention au nombre de zéros : 10 000 000.\n\nLes puissances de 10 permettent d'écrire ce nombre plus simplement : 10⁷.\n\nAvant de les utiliser, cherchons ce que cette écriture signifie."
          },
          {
            type: "definition",
            titre: "Puissances d'exposant positif",
            texte: "Pour un entier positif n, 10ⁿ représente le produit de n facteurs égaux à 10.\n\nExemples :\n10¹ = 10.\n10² = 10 × 10 = 100.\n10³ = 10 × 10 × 10 = 1 000.\n10⁴ = 10 000.\n\nLe petit nombre écrit en haut s'appelle l'exposant."
          },
          {
            type: "regle",
            titre: "Compter les zéros",
            texte: "Pour un entier positif n, 10ⁿ s'écrit avec un 1 suivi de n zéros.\n\nAinsi, 10⁵ = 100 000 : il y a cinq zéros après le 1.\n\nPar convention, 10⁰ = 1."
          },
          {
            type: "methode",
            titre: "Multiplier par une puissance de 10",
            texte: "Multiplier par 10 agrandit un nombre dix fois. Multiplier par 100 l'agrandit cent fois.\n\nDans l'écriture décimale, on peut déplacer la virgule vers la droite :\n• 3,47 × 10 = 34,7 ;\n• 3,47 × 100 = 347 ;\n• 3,47 × 1 000 = 3 470.\n\nAvec 10ⁿ, on déplace la virgule de n rangs vers la droite, en ajoutant des zéros si nécessaire."
          },
          {
            type: "exemple",
            titre: "Pourquoi ajouter un zéro ?",
            texte: "Calculons 2,5 × 1 000.\n\nIl faut déplacer la virgule de trois rangs vers la droite. Après le 5, on ajoute des zéros pour disposer d'assez de chiffres :\n\n2,500 → 2 500.\n\nDonc 2,5 × 10³ = 2 500."
          },
          {
            type: "remarque",
            titre: "Un exposant n'est pas un multiplicateur",
            texte: "10³ ne signifie pas 10 × 3.\n\n10³ = 10 × 10 × 10 = 1 000, tandis que 10 × 3 = 30.\n\nL'exposant indique ici combien de facteurs 10 sont multipliés."
          }
        ]
      },
      {
        id: "m3-puissances-negatives",
        titre: "Comprendre les exposants négatifs",
        blocs: [
          {
            type: "introduction",
            titre: "Dans l'autre sens",
            texte: "Quand on passe de 10³ à 10², on divise par 10 : 1 000 devient 100.\n\nContinuons :\n10² = 100 ;\n10¹ = 10 ;\n10⁰ = 1 ;\n10⁻¹ = 0,1 ;\n10⁻² = 0,01.\n\nÀ chaque étape, on divise par 10."
          },
          {
            type: "definition",
            titre: "Une puissance négative est un inverse",
            texte: "Pour un entier positif n :\n\n10⁻ⁿ = 1/10ⁿ.\n\nExemples :\n10⁻¹ = 1/10 = 0,1 ;\n10⁻² = 1/100 = 0,01 ;\n10⁻³ = 1/1 000 = 0,001."
          },
          {
            type: "tableau",
            titre: "Repères",
            entetes: ["Puissance", "Écriture décimale", "Lecture"],
            lignes: [
              ["10³", "1 000", "mille"],
              ["10²", "100", "cent"],
              ["10¹", "10", "dix"],
              ["10⁰", "1", "un"],
              ["10⁻¹", "0,1", "un dixième"],
              ["10⁻²", "0,01", "un centième"],
              ["10⁻³", "0,001", "un millième"]
            ]
          },
          {
            type: "methode",
            titre: "Multiplier par une puissance négative",
            texte: "Multiplier par 10⁻² revient à multiplier par 1/100, donc à diviser par 100.\n\nExemple : 35 × 10⁻² = 35 ÷ 100 = 0,35.\n\nPour multiplier par 10⁻ⁿ, on déplace la virgule de n rangs vers la gauche, en ajoutant des zéros si nécessaire."
          },
          {
            type: "exemple",
            titre: "Diviser par une puissance de 10",
            texte: "Calculons 4,8 ÷ 1 000.\n\nDiviser par 1 000 revient à multiplier par 10⁻³. On déplace la virgule de trois rangs vers la gauche :\n\n4,8 ÷ 1 000 = 0,0048."
          },
          {
            type: "remarque",
            titre: "Attention au signe",
            texte: "10⁻² est positif : 10⁻² = 0,01.\n\nLe signe moins dans l'exposant indique un inverse. Il ne signifie pas que le résultat est négatif.\n\nEn revanche, -10⁻² = -0,01 : le signe moins placé devant rend ce nombre négatif."
          }
        ]
      },
      {
        id: "m3-calculs-puissances",
        titre: "Calculer avec des puissances de 10",
        blocs: [
          {
            type: "regle",
            titre: "Multiplier : on additionne les exposants",
            texte: "Pour deux entiers relatifs a et b :\n\n10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ.\n\nExemples :\n10³ × 10² = 10⁵.\n10⁴ × 10⁻² = 10².\n\nPourquoi dans le premier exemple ? Il y a trois facteurs 10, puis deux autres : cela fait cinq facteurs 10."
          },
          {
            type: "regle",
            titre: "Diviser : on soustrait les exposants",
            texte: "Pour deux entiers relatifs a et b :\n\n10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ.\n\nExemples :\n10⁵ ÷ 10² = 10³.\n10² ÷ 10⁵ = 10⁻³.\n\nVérification du deuxième exemple : 100 ÷ 100 000 = 0,001."
          },
          {
            type: "regle",
            titre: "Puissance d'une puissance",
            texte: "Pour deux entiers relatifs a et b :\n\n(10ᵃ)ᵇ = 10ᵃˣᵇ.\n\nExemple : (10²)³ = 10⁶.\n\nEn effet, (10²)³ = 10² × 10² × 10² = 10⁶."
          },
          {
            type: "methode",
            titre: "Séparer les nombres et les puissances",
            texte: "Calculons (3 × 10⁴) × (2 × 10²).\n\n1. On multiplie les nombres : 3 × 2 = 6.\n2. On multiplie les puissances : 10⁴ × 10² = 10⁶.\n3. On rassemble : le résultat est 6 × 10⁶."
          },
          {
            type: "remarque",
            titre: "Ces règles ne concernent pas l'addition",
            texte: "Il ne faut pas additionner les exposants lorsqu'on additionne des puissances.\n\nPar exemple, 10² + 10³ = 100 + 1 000 = 1 100.\n\nCe n'est pas 10⁵. La règle 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ concerne une multiplication."
          }
        ]
      },
      {
        id: "m3-ecriture-scientifique",
        titre: "Écrire un nombre en notation scientifique",
        blocs: [
          {
            type: "definition",
            titre: "La forme scientifique",
            texte: "L'écriture scientifique d'un nombre positif non nul est :\n\na × 10ⁿ,\n\noù 1 ≤ a < 10 et n est un entier relatif.\n\nLe nombre a possède donc un seul chiffre non nul avant la virgule.\n\nExemples : 3,2 × 10⁵ et 7,4 × 10⁻³ sont des écritures scientifiques."
          },
          {
            type: "methode",
            titre: "Pour un grand nombre",
            texte: "Écrivons 450 000 en notation scientifique.\n\n1. On place la virgule pour obtenir un nombre compris entre 1 inclus et 10 exclu : 4,5.\n2. Pour retrouver 450 000 à partir de 4,5, il faut multiplier par 100 000, soit 10⁵.\n\nDonc 450 000 = 4,5 × 10⁵.\n\nL'exposant est positif : le nombre de départ est supérieur à 10."
          },
          {
            type: "methode",
            titre: "Pour un petit nombre positif",
            texte: "Écrivons 0,00072 en notation scientifique.\n\n1. On cherche un nombre compris entre 1 inclus et 10 exclu : 7,2.\n2. Pour retrouver 0,00072 à partir de 7,2, on divise par 10 000, soit on multiplie par 10⁻⁴.\n\nDonc 0,00072 = 7,2 × 10⁻⁴."
          },
          {
            type: "exemple",
            titre: "Revenir à l'écriture décimale",
            texte: "Pour 6,3 × 10³, on multiplie 6,3 par 1 000 :\n6,3 × 10³ = 6 300.\n\nPour 6,3 × 10⁻³, on divise 6,3 par 1 000 :\n6,3 × 10⁻³ = 0,0063."
          },
          {
            type: "remarque",
            titre: "Une écriture qui n'est pas encore scientifique",
            texte: "25 × 10³ n'est pas une écriture scientifique, car 25 est supérieur ou égal à 10.\n\nOn écrit 25 = 2,5 × 10. Donc :\n25 × 10³ = 2,5 × 10¹ × 10³ = 2,5 × 10⁴."
          },
          {
            type: "remarque",
            titre: "Et les nombres négatifs ?",
            texte: "Pour un nombre négatif non nul, on écrit son opposé en notation scientifique puis on garde le signe moins.\n\nPar exemple : -450 000 = -4,5 × 10⁵.\n\nZéro n'a pas d'écriture scientifique de cette forme : le coefficient ne peut pas être compris entre 1 inclus et 10 exclu."
          },
          {
            type: "methode",
            titre: "Comparer deux nombres positifs",
            texte: "Si deux nombres positifs sont écrits en notation scientifique, compare d'abord leurs exposants.\n\nExemple : 8,1 × 10⁴ < 1,2 × 10⁵, car 10⁵ correspond à un rang supérieur à 10⁴.\n\nSi les exposants sont égaux, compare les coefficients : 3,2 × 10⁵ < 6,1 × 10⁵."
          }
        ]
      },
      {
        id: "m3-prefixes",
        titre: "Utiliser les préfixes des unités",
        blocs: [
          {
            type: "introduction",
            titre: "Des puissances dans la vie courante",
            texte: "Les préfixes placés devant les unités indiquent des multiples ou des fractions de ces unités.\n\nPar exemple, un kilomètre vaut 1 000 mètres et un millimètre vaut un millième de mètre."
          },
          {
            type: "tableau",
            titre: "Quelques préfixes utiles",
            entetes: ["Préfixe", "Symbole", "Valeur"],
            lignes: [
              ["kilo", "k", "10³ = 1 000"],
              ["hecto", "h", "10² = 100"],
              ["déca", "da", "10¹ = 10"],
              ["déci", "d", "10⁻¹ = 0,1"],
              ["centi", "c", "10⁻² = 0,01"],
              ["milli", "m", "10⁻³ = 0,001"],
              ["micro", "µ", "10⁻⁶ = 0,000001"]
            ]
          },
          {
            type: "exemple",
            titre: "Convertir des longueurs",
            texte: "1 km = 10³ m = 1 000 m.\nDonc 2,5 km = 2,5 × 1 000 m = 2 500 m.\n\n1 mm = 10⁻³ m = 0,001 m.\nDonc 7 mm = 7 × 0,001 m = 0,007 m."
          },
          {
            type: "methode",
            titre: "Une conversion en deux étapes",
            texte: "Convertissons 3,2 cm en mètres.\n\n1. Le préfixe centi signifie 10⁻² : 1 cm = 10⁻² m.\n2. Donc 3,2 cm = 3,2 × 10⁻² m = 0,032 m.\n\nVérification : le mètre est plus grand que le centimètre. Pour une même longueur, le nombre de mètres doit donc être plus petit que le nombre de centimètres."
          },
          {
            type: "remarque",
            titre: "Attention aux unités d'aire",
            texte: "Pour les aires, on convertit une unité au carré : le facteur est lui aussi mis au carré.\n\nComme 1 cm = 0,01 m, alors :\n1 cm² = (0,01 m)² = 0,0001 m².\n\nIl ne faut donc pas utiliser directement le même facteur que pour les longueurs."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme décimale :\n\n1. 10⁴\n2. 10⁰\n3. 10⁻²\n4. 10⁻³",
        correction: "1. 10⁴ = 10 000 : le 1 est suivi de quatre zéros.\n\n2. 10⁰ = 1.\n\n3. 10⁻² = 1/100 = 0,01.\n\n4. 10⁻³ = 1/1 000 = 0,001."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. 3,4 × 10²\n2. 3,4 × 10⁻²\n3. 56 ÷ 10³",
        correction: "1. 3,4 × 10² = 3,4 × 100 = 340.\n\n2. 3,4 × 10⁻² = 3,4 ÷ 100 = 0,034.\n\n3. 56 ÷ 10³ = 56 ÷ 1 000 = 0,056."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris chaque résultat sous la forme d'une seule puissance de 10 :\n\n1. 10³ × 10⁴\n2. 10² × 10⁻⁵\n3. 10⁶ ÷ 10²\n4. (10³)²",
        correction: "1. 10³ × 10⁴ = 10³⁺⁴ = 10⁷.\n\n2. 10² × 10⁻⁵ = 10²⁻⁵ = 10⁻³.\n\n3. 10⁶ ÷ 10² = 10⁶⁻² = 10⁴.\n\n4. (10³)² = 10³ˣ² = 10⁶."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris en notation scientifique :\n\n1. 72 000\n2. 0,0045\n3. 8 300 000\n4. 0,000009",
        correction: "1. 72 000 = 7,2 × 10⁴.\n\n2. 0,0045 = 4,5 × 10⁻³.\n\n3. 8 300 000 = 8,3 × 10⁶.\n\n4. 0,000009 = 9 × 10⁻⁶.\n\nDans chaque réponse, le coefficient est supérieur ou égal à 1 et strictement inférieur à 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule et donne chaque résultat en notation scientifique :\n\n1. (2 × 10³) × (4 × 10⁵)\n2. (6 × 10⁻²) × (3 × 10⁴)\n3. (8 × 10⁶) ÷ (2 × 10²)",
        correction: "1. On multiplie les coefficients et les puissances :\n(2 × 4) × 10³⁺⁵ = 8 × 10⁸.\n\n2. (6 × 3) × 10⁻²⁺⁴ = 18 × 10².\nMais 18 n'est pas compris entre 1 et 10. Or 18 = 1,8 × 10, donc le résultat scientifique est 1,8 × 10³.\n\n3. On divise les coefficients et les puissances :\n(8 ÷ 2) × 10⁶⁻² = 4 × 10⁴."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Convertis :\n\n1. 4,2 km en mètres.\n2. 35 mm en mètres.\n3. 0,7 m en centimètres.\n4. 5 cm² en m².",
        correction: "1. 1 km = 1 000 m, donc 4,2 km = 4 200 m.\n\n2. 1 mm = 0,001 m, donc 35 mm = 35 × 0,001 m = 0,035 m.\n\n3. 1 m = 100 cm, donc 0,7 m = 70 cm.\n\n4. 1 cm = 0,01 m, donc 1 cm² = 0,0001 m². Ainsi, 5 cm² = 5 × 0,0001 m² = 0,0005 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une imprimerie prépare 2 500 livrets. Chaque livret contient 48 pages.\n\n1. Combien de pages cela représente-t-il au total ?\n2. Écris ce nombre en notation scientifique.\n3. Une machine imprime 3 000 pages par heure. Combien d'heures lui faut-il pour imprimer toutes ces pages, si elle travaille à ce rythme constant ?",
        correction: "1. Chaque livret contient 48 pages. Pour 2 500 livrets, il faut :\n2 500 × 48 = 120 000 pages.\n\n2. 120 000 = 1,2 × 10⁵. Le coefficient 1,2 est bien compris entre 1 inclus et 10 exclu.\n\n3. La machine imprime 3 000 pages en une heure. On divise le nombre total de pages par le nombre imprimé par heure :\n120 000 ÷ 3 000 = 40.\n\nIl lui faut donc 40 heures à ce rythme."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un très petit organisme mesure 0,00024 m de long.\n\n1. Écris sa longueur en mètres en notation scientifique.\n2. Exprime cette longueur en millimètres. On rappelle que 1 m = 1 000 mm.\n3. Un autre organisme mesure 3,1 × 10⁻⁴ m. Lequel des deux est le plus long ?",
        correction: "1. 0,00024 m = 2,4 × 10⁻⁴ m.\n\n2. Pour passer des mètres aux millimètres, on multiplie par 1 000 :\n0,00024 × 1 000 = 0,24.\nLe premier organisme mesure donc 0,24 mm.\n\n3. Le premier mesure 2,4 × 10⁻⁴ m et le second 3,1 × 10⁻⁴ m. Les exposants sont égaux : on compare 2,4 et 3,1.\n\nComme 3,1 > 2,4, le second organisme est le plus long."
      }
    ]
  }
]);
