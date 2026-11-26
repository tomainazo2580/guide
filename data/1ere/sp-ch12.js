enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch12",
    titre: "Chapitre 12 : Champ électrique et force électrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch12-charges",
        titre: "1. Charges et interactions électriques",
        blocs: [
          {
            type: "introduction",
            titre: "Une action à distance",
            texte: "Un objet électrisé peut attirer ou repousser un autre objet sans contact direct. Pour décrire cette interaction, on utilise notamment la notion de champ électrique."
          },
          {
            type: "definition",
            titre: "Charge électrique",
            texte: "La charge électrique, notée q ou Q, s’exprime en coulombs (C). Elle peut être positive ou négative. La charge élémentaire vaut e = 1,60 × 10⁻¹⁹ C : un proton porte la charge +e et un électron la charge −e."
          },
          {
            type: "regle",
            titre: "Attraction et répulsion",
            texte: "Deux charges de même signe se repoussent. Deux charges de signes opposés s’attirent."
          },
          {
            type: "schema",
            titre: "Interaction entre charges ponctuelles",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 210' role='img' aria-label='Deux charges positives se repoussent : les forces pointent en sens opposés, loin l’une de l’autre. Une charge positive et une charge négative s’attirent : les forces pointent l’une vers l’autre.'><text x='310' y='25' text-anchor='middle' font-size='18'>Charges de même signe : répulsion</text><circle cx='245' cy='65' r='20' fill='#ffd1c2' stroke='#a33'/><text x='245' y='72' text-anchor='middle' font-size='22'>+</text><circle cx='375' cy='65' r='20' fill='#ffd1c2' stroke='#a33'/><text x='375' y='72' text-anchor='middle' font-size='22'>+</text><line x1='220' y1='65' x2='150' y2='65' stroke='#222' stroke-width='3'/><polygon points='150,65 162,58 162,72' fill='#222'/><line x1='400' y1='65' x2='470' y2='65' stroke='#222' stroke-width='3'/><polygon points='470,65 458,58 458,72' fill='#222'/><text x='310' y='125' text-anchor='middle' font-size='18'>Charges de signes opposés : attraction</text><circle cx='245' cy='165' r='20' fill='#ffd1c2' stroke='#a33'/><text x='245' y='172' text-anchor='middle' font-size='22'>+</text><circle cx='375' cy='165' r='20' fill='#cfe8ff' stroke='#267'/><text x='375' y='172' text-anchor='middle' font-size='22'>−</text><line x1='270' y1='165' x2='315' y2='165' stroke='#222' stroke-width='3'/><polygon points='315,165 303,158 303,172' fill='#222'/><line x1='350' y1='165' x2='325' y2='165' stroke='#222' stroke-width='3'/><polygon points='325,165 337,158 337,172' fill='#222'/></svg>",
            legende: "Les flèches représentent les forces exercées sur les charges. Dans chaque paire, ces forces ont la même valeur et des sens opposés."
          }
        ]
      },

      {
        id: "sp1-ch12-champ",
        titre: "2. Le champ électrique",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Une distribution de charges crée un champ électrique dans l’espace qui l’entoure. En un point donné, ce champ est représenté par un vecteur E. Une charge placée en ce point subit une force électrique liée à ce champ."
          },
          {
            type: "regle",
            titre: "Force exercée sur une charge",
            texte: "La force électrique exercée sur une charge q placée dans un champ E est donnée par la relation vectorielle F = qE. Si q est positive, F a le même sens que E ; si q est négative, F a le sens opposé. Sa valeur est F = |q|E."
          },
          {
            type: "definition",
            titre: "Unité et valeur du champ",
            texte: "Le champ électrique s’exprime en newtons par coulomb (N·C⁻¹), ou de façon équivalente en volts par mètre (V·m⁻¹). Sa valeur E est une grandeur positive ou nulle."
          },
          {
            type: "schema",
            titre: "Sens de la force selon la charge",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 190' role='img' aria-label='Un champ électrique dirigé vers la droite exerce une force vers la droite sur une charge positive et vers la gauche sur une charge négative.'><text x='310' y='26' text-anchor='middle' font-size='18'>Champ E dirigé vers la droite</text><line x1='220' y1='45' x2='400' y2='45' stroke='#267' stroke-width='3'/><polygon points='400,45 388,38 388,52' fill='#267'/><circle cx='200' cy='110' r='22' fill='#ffd1c2' stroke='#a33'/><text x='200' y='117' text-anchor='middle' font-size='22'>+</text><line x1='230' y1='110' x2='320' y2='110' stroke='#222' stroke-width='3'/><polygon points='320,110 308,103 308,117' fill='#222'/><text x='275' y='98' text-anchor='middle' font-size='16'>force</text><circle cx='470' cy='110' r='22' fill='#cfe8ff' stroke='#267'/><text x='470' y='117' text-anchor='middle' font-size='22'>−</text><line x1='440' y1='110' x2='350' y2='110' stroke='#222' stroke-width='3'/><polygon points='350,110 362,103 362,117' fill='#222'/><text x='395' y='98' text-anchor='middle' font-size='16'>force</text><text x='310' y='165' text-anchor='middle' font-size='16'>Charge positive : même sens ; charge négative : sens opposé</text></svg>",
            legende: "Le champ est ici le même aux deux points considérés. Les forces sur les deux charges sont de sens opposés."
          },
          {
            type: "exemple",
            titre: "Force sur une charge négative",
            texte: "Une charge q = −2,0 × 10⁻⁶ C est placée dans un champ de valeur E = 300 N·C⁻¹ dirigé vers la droite. La valeur de la force est F = |q|E = 2,0 × 10⁻⁶ × 300 = 6,0 × 10⁻⁴ N. La charge étant négative, la force est dirigée vers la gauche."
          },
          {
            type: "methode",
            titre: "Déterminer la force",
            texte: "1. Relever la valeur et le sens du champ. 2. Convertir la charge en coulombs. 3. Calculer F = |q|E. 4. Donner le sens de la force : celui du champ si q > 0, le sens opposé si q < 0."
          }
        ]
      },

      {
        id: "sp1-ch12-charge-ponctuelle",
        titre: "3. Champ créé par une charge ponctuelle",
        blocs: [
          {
            type: "definition",
            titre: "Modèle ponctuel",
            texte: "Une charge ponctuelle est un modèle dans lequel la charge est considérée comme concentrée en un point. Ce modèle est utile lorsque les dimensions de l’objet chargé sont négligeables devant les distances étudiées."
          },
          {
            type: "regle",
            titre: "Valeur du champ dans le vide",
            texte: "À une distance r d’une charge ponctuelle Q, la valeur du champ dans le vide est E = k|Q|/r², avec k = 9,0 × 10⁹ N·m²·C⁻², Q en C et r en m. Le champ est porté par la droite reliant la charge au point considéré."
          },
          {
            type: "regle",
            titre: "Sens du champ",
            texte: "Si Q est positive, le champ est dirigé en s’éloignant de Q. Si Q est négative, il est dirigé vers Q. Cette règle décrit le champ créé par Q, indépendamment du signe d’une éventuelle charge placée au point considéré."
          },
          {
            type: "schema",
            titre: "Champ d’une charge ponctuelle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 200' role='img' aria-label='À droite d’une charge positive, le champ est dirigé vers la droite, loin de la charge. À droite d’une charge négative, le champ est dirigé vers la gauche, vers la charge.'><text x='155' y='28' text-anchor='middle' font-size='18'>Charge positive</text><circle cx='90' cy='100' r='22' fill='#ffd1c2' stroke='#a33'/><text x='90' y='107' text-anchor='middle' font-size='22'>+</text><circle cx='205' cy='100' r='4' fill='#222'/><text x='205' y='135' text-anchor='middle' font-size='16'>point M</text><line x1='205' y1='100' x2='275' y2='100' stroke='#267' stroke-width='3'/><polygon points='275,100 263,93 263,107' fill='#267'/><text x='245' y='85' text-anchor='middle' font-size='16'>E</text><text x='465' y='28' text-anchor='middle' font-size='18'>Charge négative</text><circle cx='400' cy='100' r='22' fill='#cfe8ff' stroke='#267'/><text x='400' y='107' text-anchor='middle' font-size='22'>−</text><circle cx='515' cy='100' r='4' fill='#222'/><text x='515' y='135' text-anchor='middle' font-size='16'>point M</text><line x1='515' y1='100' x2='450' y2='100' stroke='#267' stroke-width='3'/><polygon points='450,100 462,93 462,107' fill='#267'/><text x='480' y='85' text-anchor='middle' font-size='16'>E</text><text x='310' y='180' text-anchor='middle' font-size='15'>Les flèches représentent le champ au point M.</text></svg>",
            legende: "Le champ s’éloigne d’une charge positive et se dirige vers une charge négative."
          },
          {
            type: "exemple",
            titre: "Calcul d’un champ",
            texte: "Dans le vide, une charge Q = +2,0 × 10⁻⁶ C crée un champ au point M situé à 0,30 m d’elle. E = 9,0 × 10⁹ × 2,0 × 10⁻⁶ / 0,30² = 2,0 × 10⁵ N·C⁻¹. Le champ en M est dirigé de Q vers M."
          },
          {
            type: "remarque",
            titre: "Effet de la distance",
            texte: "Si la distance à une même charge ponctuelle double, la valeur du champ est divisée par quatre. La formule précédente s’applique dans le vide ; dans un autre milieu, le coefficient peut être différent."
          }
        ]
      },

      {
        id: "sp1-ch12-superposition",
        titre: "4. Superposition des champs",
        blocs: [
          {
            type: "regle",
            titre: "Principe de superposition",
            texte: "Au point étudié, le champ total créé par plusieurs charges est la somme vectorielle des champs créés séparément par chacune : Etotal = E1 + E2 + …. Il faut tenir compte des directions et des sens, pas seulement additionner les valeurs."
          },
          {
            type: "exemple",
            titre: "Deux champs de sens opposés",
            texte: "Au point M, un premier champ vaut 500 N·C⁻¹ vers la droite et un second vaut 200 N·C⁻¹ vers la gauche. En choisissant la droite comme sens positif : Etotal = 500 − 200 = 300 N·C⁻¹. Le champ total est dirigé vers la droite."
          },
          {
            type: "methode",
            titre: "Champs sur une même droite",
            texte: "1. Déterminer le sens de chaque champ au point considéré. 2. Choisir un sens positif sur la droite. 3. Donner un signe à chaque valeur selon son sens. 4. Additionner les valeurs algébriques. 5. Déduire la valeur et le sens du champ total."
          },
          {
            type: "remarque",
            titre: "À ne pas confondre",
            texte: "Le champ créé par les charges sources est déterminé au point étudié. Pour trouver ensuite la force sur une charge q placée en ce point, on applique F = qEtotal. Le signe de q intervient alors dans le sens de la force."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Deux charges ponctuelles sont placées à distance l’une de l’autre. Indique si elles s’attirent ou se repoussent dans chaque cas : a) toutes deux positives ; b) l’une positive et l’autre négative.",
        correction: "a) Les deux charges positives se repoussent. b) Les charges de signes opposés s’attirent."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un champ électrique est dirigé verticalement vers le haut. Indique le sens de la force électrique exercée sur : a) une charge positive ; b) une charge négative.",
        correction: "a) La force sur la charge positive est dirigée vers le haut, dans le sens du champ. b) La force sur la charge négative est dirigée vers le bas, en sens opposé au champ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une charge q = +3,0 × 10⁻⁶ C est placée dans un champ uniforme de valeur E = 200 N·C⁻¹ dirigé vers la droite. Détermine la valeur et le sens de la force électrique exercée sur cette charge.",
        correction: "F = |q|E = 3,0 × 10⁻⁶ × 200 = 6,0 × 10⁻⁴ N. Comme q est positive, la force est dirigée vers la droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans le vide, une charge ponctuelle Q = −1,0 × 10⁻⁶ C se trouve en O. Le point M est à 0,30 m à droite de O. On donne k = 9,0 × 10⁹ N·m²·C⁻². Calcule la valeur du champ créé par Q en M et indique son sens.",
        correction: "E = k|Q|/r² = 9,0 × 10⁹ × 1,0 × 10⁻⁶ / 0,30² = 1,0 × 10⁵ N·C⁻¹. La charge source est négative : le champ en M est dirigé vers O, donc vers la gauche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans le vide, une charge ponctuelle Q = +4,0 × 10⁻⁶ C se trouve en O. Une charge q = −2,0 × 10⁻⁶ C est placée au point M situé à 0,20 m à droite de O. On donne k = 9,0 × 10⁹ N·m²·C⁻². Détermine le champ créé par Q en M, puis la force exercée par Q sur q.",
        correction: "E = 9,0 × 10⁹ × 4,0 × 10⁻⁶ / 0,20² = 9,0 × 10⁵ N·C⁻¹. Q étant positive, le champ en M est dirigé vers la droite. F = |q|E = 2,0 × 10⁻⁶ × 9,0 × 10⁵ = 1,8 N. Comme q est négative, la force est dirigée vers la gauche, donc vers Q : l’interaction est attractive."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Au point M, deux charges sources créent séparément deux champs : E1 = 800 N·C⁻¹ vers la droite et E2 = 1 100 N·C⁻¹ vers la gauche. Une charge q = +2,0 × 10⁻⁶ C est placée en M. Détermine le champ total puis la force électrique sur q.",
        correction: "En orientant l’axe vers la droite, Etotal = 800 − 1 100 = −300 N·C⁻¹. Le champ total vaut donc 300 N·C⁻¹ vers la gauche. La charge est positive : la force est aussi vers la gauche et vaut F = 2,0 × 10⁻⁶ × 300 = 6,0 × 10⁻⁴ N."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans le vide, deux charges ponctuelles QA = +1,0 × 10⁻⁶ C et QB = +4,0 × 10⁻⁶ C sont placées respectivement en A et B, avec AB = 0,30 m. On donne k = 9,0 × 10⁹ N·m²·C⁻². Trouve le point situé entre A et B où le champ électrique total est nul.",
        correction: "Soit x la distance entre A et le point recherché ; sa distance à B vaut 0,30 − x. Entre les deux charges positives, les champs sont de sens opposés. Pour que leur somme soit nulle : kQA/x² = kQB/(0,30 − x)². Après simplification : 1/x² = 4/(0,30 − x)². Les distances étant positives, 0,30 − x = 2x, donc x = 0,10 m. Le champ est nul à 0,10 m de A et 0,20 m de B."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une particule de masse m = 2,0 × 10⁻⁶ kg et de charge q = −4,0 × 10⁻⁶ C est placée dans un champ électrique uniforme vertical dirigé vers le haut, de valeur E = 5,0 N·C⁻¹. On prend g = 10 N·kg⁻¹. Les seules forces considérées sont le poids et la force électrique. Détermine leur sens et leur valeur, puis la valeur et le sens de l’accélération de la particule.",
        correction: "Le poids est vertical vers le bas et vaut P = mg = 2,0 × 10⁻⁶ × 10 = 2,0 × 10⁻⁵ N. La charge étant négative, la force électrique est opposée au champ : elle est aussi vers le bas. Sa valeur est F = |q|E = 4,0 × 10⁻⁶ × 5,0 = 2,0 × 10⁻⁵ N. La résultante vaut donc 4,0 × 10⁻⁵ N vers le bas. D’après la deuxième loi de Newton, a = résultante/m = 4,0 × 10⁻⁵ / 2,0 × 10⁻⁶ = 20 m·s⁻² vers le bas."
      }
    ]
  }
]);
