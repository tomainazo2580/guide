enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch4",
    titre: "Chapitre 4 : Dérivation et variations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch4-l1",
        titre: "Leçon 1 : Nombre dérivé et tangente",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi dériver ?",
            texte: "La dérivation permet de mesurer la variation locale d’une fonction. Elle sert notamment à déterminer le coefficient directeur d’une tangente et à étudier le sens de variation d’une fonction."
          },
          {
            type: "definition",
            titre: "Taux de variation",
            texte: "Soit f une fonction définie en a et en a + h, avec h ≠ 0. Le taux de variation de f entre a et a + h est :\n\n[f(a + h) − f(a)]/h.\n\nIl représente le coefficient directeur de la droite passant par les points de la courbe d’abscisses a et a + h."
          },
          {
            type: "definition",
            titre: "Nombre dérivé",
            texte: "Si le taux de variation [f(a + h) − f(a)]/h possède une limite réelle lorsque h tend vers 0, cette limite est le nombre dérivé de f en a. On le note f'(a).\n\nOn dit alors que f est dérivable en a."
          },
          {
            type: "exemple",
            titre: "Nombre dérivé de la fonction carré",
            texte: "Soit f(x) = x². Pour h ≠ 0 :\n\n[f(a + h) − f(a)]/h = [(a + h)² − a²]/h\n= (2ah + h²)/h = 2a + h.\n\nQuand h tend vers 0, cette expression tend vers 2a. Donc f'(a) = 2a. Par exemple, f'(3) = 6."
          },
          {
            type: "definition",
            titre: "Tangente à une courbe",
            texte: "Si f est dérivable en a, sa courbe admet au point A(a ; f(a)) une tangente de coefficient directeur f'(a).\n\nUne équation de cette tangente est :\n\ny = f'(a)(x − a) + f(a)."
          },
          {
            type: "exemple",
            titre: "Équation d’une tangente",
            texte: "Pour f(x) = x² en a = 2, on a f(2) = 4 et f'(2) = 4.\n\nLa tangente a pour équation :\ny = 4(x − 2) + 4, soit y = 4x − 4."
          },
          {
            type: "schema",
            titre: "Courbe et tangente",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='25' y1='185' x2='300' y2='185' stroke='black' stroke-width='2'/><line x1='65' y1='200' x2='65' y2='20' stroke='black' stroke-width='2'/><path d='M75 175 Q135 170 175 120 Q215 70 250 25' fill='none' stroke='#1769aa' stroke-width='3'/><line x1='105' y1='190' x2='245' y2='50' stroke='#c62828' stroke-width='2'/><circle cx='175' cy='120' r='5' fill='#222'/><line x1='175' y1='120' x2='175' y2='185' stroke='#777' stroke-dasharray='4 4'/><text x='180' y='113' font-size='14'>A</text><text x='171' y='201' font-size='14'>a</text><text x='225' y='90' font-size='13' fill='#c62828'>tangente</text><text x='260' y='33' font-size='13' fill='#1769aa'>courbe</text></svg>",
            legende: "Schéma qualitatif : la tangente passe par A et donne la direction locale de la courbe en ce point."
          },
          {
            type: "remarque",
            titre: "Dérivabilité et continuité",
            texte: "Si une fonction est dérivable en un point, elle y est continue. La réciproque est fausse : une fonction peut être continue sans être dérivable."
          }
        ]
      },

      {
        id: "tle-maths-ch4-l2",
        titre: "Leçon 2 : Calculer une fonction dérivée",
        blocs: [
          {
            type: "definition",
            titre: "Fonction dérivée",
            texte: "Si f est dérivable en chaque point d’un intervalle, on définit sa fonction dérivée f' en associant à chaque x le nombre dérivé f'(x)."
          },
          {
            type: "tableau",
            titre: "Dérivées usuelles",
            entetes: ["Fonction f(x)", "Dérivée f'(x)", "Domaine de dérivation"],
            lignes: [
              ["k, constante", "0", "ℝ"],
              ["x", "1", "ℝ"],
              ["xⁿ, n entier naturel non nul", "nxⁿ⁻¹", "ℝ"],
              ["1/x", "−1/x²", "ℝ privé de 0"],
              ["√x", "1/(2√x)", "]0 ; +∞["],
              ["sin(x)", "cos(x)", "ℝ"],
              ["cos(x)", "−sin(x)", "ℝ"]
            ]
          },
          {
            type: "remarque",
            titre: "Angles en radians",
            texte: "Les formules de dérivation du sinus et du cosinus s’appliquent lorsque les angles sont exprimés en radians."
          },
          {
            type: "tableau",
            titre: "Opérations sur les dérivées",
            entetes: ["Fonction", "Dérivée"],
            lignes: [
              ["u + v", "u' + v'"],
              ["ku, avec k constant", "ku'"],
              ["uv", "u'v + uv'"],
              ["u/v, si v ≠ 0", "(u'v − uv')/v²"],
              ["g(u(x))", "g'(u(x)) × u'(x)"]
            ]
          },
          {
            type: "remarque",
            titre: "Conditions",
            texte: "Ces formules s’utilisent aux points où les fonctions nécessaires sont dérivables et où les expressions sont définies. Pour le quotient, le dénominateur v doit être non nul."
          },
          {
            type: "exemple",
            titre: "Dérivée d’un polynôme",
            texte: "Soit f(x) = 3x³ − 2x² + 5x − 7.\n\nOn dérive terme à terme :\nf'(x) = 9x² − 4x + 5."
          },
          {
            type: "exemple",
            titre: "Dérivée d’un quotient",
            texte: "Soit f(x) = (x + 1)/(x − 2), définie pour x ≠ 2.\n\nAvec u(x) = x + 1 et v(x) = x − 2, on a u'(x) = 1 et v'(x) = 1.\n\nDonc f'(x) = [(x − 2) − (x + 1)]/(x − 2)² = −3/(x − 2)²."
          },
          {
            type: "exemple",
            titre: "Dérivée d’une composée",
            texte: "Soit f(x) = (3x + 1)². On pose u(x) = 3x + 1 et g(t) = t².\n\nComme u'(x) = 3 et g'(t) = 2t, on obtient :\nf'(x) = 2(3x + 1) × 3 = 6(3x + 1)."
          }
        ]
      },

      {
        id: "tle-maths-ch4-l3",
        titre: "Leçon 3 : Dérivée et sens de variation",
        blocs: [
          {
            type: "definition",
            titre: "Le signe de la dérivée",
            texte: "Soit f dérivable sur un intervalle I.\n\n• Si f'(x) ≥ 0 sur I, alors f est croissante sur I.\n• Si f'(x) ≤ 0 sur I, alors f est décroissante sur I.\n• Si f'(x) = 0 sur I, alors f est constante sur I.\n\nSi f'(x) > 0 sur I, f est strictement croissante ; si f'(x) < 0 sur I, elle est strictement décroissante."
          },
          {
            type: "remarque",
            titre: "Un zéro isolé",
            texte: "Une dérivée peut s’annuler en un point sans empêcher la fonction d’être strictement monotone. Par exemple, la fonction x ↦ x³ est strictement croissante sur ℝ, alors que sa dérivée 3x² s’annule en 0."
          },
          {
            type: "methode",
            titre: "Étudier les variations",
            texte: "1. Déterminer l’ensemble de définition et les intervalles où f est dérivable.\n2. Calculer f'(x).\n3. Étudier le signe de f'(x).\n4. En déduire les variations de f sur chaque intervalle.\n5. Calculer les valeurs utiles et, si nécessaire, les limites aux bornes."
          },
          {
            type: "exemple",
            titre: "Une fonction du second degré",
            texte: "Soit f(x) = x² − 4x + 3. Elle est dérivable sur ℝ et f'(x) = 2x − 4 = 2(x − 2).\n\nPour x < 2, f'(x) < 0 : f est décroissante. Pour x > 2, f'(x) > 0 : f est croissante.\n\nEnfin, f(2) = 4 − 8 + 3 = −1. La fonction décroît jusqu’à −1, puis croît. Elle admet donc un minimum égal à −1, atteint en x = 2."
          },
          {
            type: "tableau",
            titre: "Variations de f(x) = x² − 4x + 3",
            entetes: ["Intervalle ou point", "]−∞ ; 2[", "2", "]2 ; +∞["],
            lignes: [
              ["Signe de f'(x)", "−", "0", "+"],
              ["Variation de f", "Décroissante", "Minimum : −1", "Croissante"]
            ]
          },
          {
            type: "remarque",
            titre: "Une dérivée nulle ne suffit pas",
            texte: "L’égalité f'(a) = 0 ne garantit pas à elle seule un maximum ou un minimum. Pour f(x) = x³, on a f'(0) = 0, mais f reste strictement croissante de part et d’autre de 0."
          }
        ]
      },

      {
        id: "tle-maths-ch4-l4",
        titre: "Leçon 4 : Extremums et applications",
        blocs: [
          {
            type: "definition",
            titre: "Maximum et minimum",
            texte: "Un maximum de f sur un ensemble est une valeur f(a) supérieure ou égale à toutes les autres valeurs de f sur cet ensemble. Un minimum est une valeur f(a) inférieure ou égale à toutes les autres.\n\nUn extremum local ne compare les valeurs que dans un voisinage du point considéré."
          },
          {
            type: "methode",
            titre: "Chercher un extremum",
            texte: "Pour une fonction dérivable sur un intervalle :\n1. Calculer sa dérivée et repérer ses zéros.\n2. Étudier les signes de la dérivée de part et d’autre.\n3. Si la dérivée passe de négative à positive, la fonction admet un minimum local au point considéré.\n4. Si elle passe de positive à négative, elle admet un maximum local.\n5. Sur un intervalle fermé, ne pas oublier de comparer aussi les valeurs aux bornes pour chercher un extremum sur tout l’intervalle."
          },
          {
            type: "exemple",
            titre: "Optimiser une aire",
            texte: "Un rectangle a un périmètre de 20 cm. On note x sa longueur en cm ; son autre côté vaut 10 − x. Pour obtenir un rectangle non aplati, 0 < x < 10.\n\nSon aire est A(x) = x(10 − x) = 10x − x². Sa dérivée est A'(x) = 10 − 2x.\n\nA'(x) est positive si x < 5 et négative si x > 5. L’aire augmente jusqu’à x = 5, puis diminue. Son maximum est A(5) = 25 cm².\n\nLe rectangle d’aire maximale est un carré de côté 5 cm."
          },
          {
            type: "methode",
            titre: "Dresser une tangente horizontale",
            texte: "Une tangente est horizontale lorsque son coefficient directeur est nul. Pour la chercher, on résout f'(a) = 0, puis on calcule f(a). Son équation est alors y = f(a).\n\nUne tangente horizontale ne correspond pas nécessairement à un extremum."
          },
          {
            type: "exemple",
            titre: "Tangente horizontale",
            texte: "Pour f(x) = x² − 4x + 3, on a f'(x) = 2x − 4. L’équation f'(a) = 0 donne a = 2.\n\nComme f(2) = −1, la tangente horizontale a pour équation y = −1."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la dérivée de f(x) = 4x³ − 3x + 2.",
        correction: "On dérive terme à terme : f'(x) = 12x² − 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la dérivée de g(x) = 5/x pour x ≠ 0.",
        correction: "La dérivée de 1/x est −1/x². Donc g'(x) = −5/x² pour x ≠ 0."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = x². Déterminer f'(3), puis l’équation de la tangente à la courbe au point d’abscisse 3.",
        correction: "On a f'(x) = 2x, donc f'(3) = 6. De plus, f(3) = 9.\nLa tangente est y = 6(x − 3) + 9, soit y = 6x − 9."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = (2x + 1)(x² − 3).",
        correction: "Avec la formule du produit :\nf'(x) = 2(x² − 3) + (2x + 1) × 2x\n= 2x² − 6 + 4x² + 2x\n= 6x² + 2x − 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = (x − 1)/(x + 2), pour x ≠ −2.",
        correction: "On utilise la formule du quotient :\nf'(x) = [(x + 2) − (x − 1)]/(x + 2)² = 3/(x + 2)²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = (4x − 1)².",
        correction: "On utilise la dérivée d’une composée :\nf'(x) = 2(4x − 1) × 4 = 8(4x − 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudier les variations de f(x) = x² − 6x + 5 sur ℝ.",
        correction: "f'(x) = 2x − 6 = 2(x − 3).\nLa dérivée est négative avant 3 et positive après 3. Ainsi f est décroissante sur ]−∞ ; 3] puis croissante sur [3 ; +∞[.\nSon minimum est f(3) = 9 − 18 + 5 = −4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’équation de la tangente à la courbe de f(x) = x³ au point d’abscisse 1.",
        correction: "f'(x) = 3x², donc f'(1) = 3. De plus, f(1) = 1.\nLa tangente est y = 3(x − 1) + 1, soit y = 3x − 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = √(2x + 1) sur l’intervalle ]−1/2 ; +∞[.",
        correction: "Sur cet intervalle, 2x + 1 > 0. La dérivée de √u est u'/(2√u).\nIci u(x) = 2x + 1 et u'(x) = 2. Donc f'(x) = 1/√(2x + 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudier les variations de f(x) = x³ − 3x sur ℝ. Préciser ses extremums locaux.",
        correction: "f'(x) = 3x² − 3 = 3(x − 1)(x + 1).\nLa dérivée est positive sur ]−∞ ; −1[, négative sur ]−1 ; 1[, puis positive sur ]1 ; +∞[.\n\nAinsi f croît jusqu’à −1, décroît de −1 à 1, puis croît après 1.\nf(−1) = 2 : c’est un maximum local.\nf(1) = −2 : c’est un minimum local.\nCes extremums sont locaux et non des extremums sur tout ℝ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudier les variations de f(x) = (x + 1)/(x − 2) sur chacun des intervalles de son ensemble de définition.",
        correction: "La fonction est définie et dérivable sur ]−∞ ; 2[ et sur ]2 ; +∞[.\n\nf'(x) = [(x − 2) − (x + 1)]/(x − 2)² = −3/(x − 2)².\nPour x ≠ 2, le dénominateur est strictement positif, donc f'(x) < 0.\nLa fonction est strictement décroissante sur chacun des deux intervalles. On ne réunit pas ces intervalles car f n’est pas définie en 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un rectangle a une largeur x en mètres et une longueur 12 − x en mètres, avec 0 < x < 12. Pour quelle valeur de x son aire est-elle maximale ?",
        correction: "Son aire est A(x) = x(12 − x) = 12x − x².\nSa dérivée est A'(x) = 12 − 2x. Elle est positive avant 6, nulle en 6 et négative après 6.\nL’aire est donc maximale pour x = 6. Elle vaut A(6) = 36 m². Le rectangle est alors un carré de côté 6 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer le maximum et le minimum de f(x) = x² − 2x sur [0 ; 3].",
        correction: "f'(x) = 2x − 2. La dérivée est négative avant 1 et positive après 1.\nLa fonction décroît sur [0 ; 1], puis croît sur [1 ; 3].\nOn calcule f(0) = 0, f(1) = −1 et f(3) = 3.\nLe minimum sur [0 ; 3] est −1, atteint en 1. Le maximum est 3, atteint en 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x³. Montrer que sa tangente en 0 est horizontale. Le point correspondant est-il un extremum ?",
        correction: "f'(x) = 3x², donc f'(0) = 0. Comme f(0) = 0, la tangente en 0 est horizontale et a pour équation y = 0.\n\nCependant, f est strictement croissante sur ℝ : elle prend des valeurs négatives avant 0 et positives après 0. Le point d’abscisse 0 n’est donc ni un maximum ni un minimum local."
      }
    ]
  }
]);
