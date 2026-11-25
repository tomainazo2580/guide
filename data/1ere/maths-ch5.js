// ===== GUIDE - Mathématiques Première =====
// Chapitre 5 : inéquations linéaires et régionnement du plan.
// La programmation linéaire est explicitement mentionnée
// dans la répartition de Première C.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-inequations-regionnement",
    titre: "Chapitre 5 : Inéquations linéaires et régionnement du plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-inequation-deux-inconnues",
        titre: "Comprendre une inéquation à deux inconnues",
        blocs: [
          {
            type: "introduction",
            titre: "Des quantités soumises à une limite",
            texte: "Une association prépare x lots de cahiers et y lots de stylos. Elle peut préparer au maximum 4 lots au total.\n\nLes quantités doivent vérifier :\n\nx ≥ 0 ; y ≥ 0 ; x + y ≤ 4.\n\nPlusieurs couples conviennent, par exemple (1 ; 2) et (4 ; 0). Le couple (3 ; 2), lui, ne convient pas car 3 + 2 = 5 > 4.\n\nNous allons représenter toutes les solutions dans un repère."
          },
          {
            type: "definition",
            titre: "Une solution est un couple",
            texte: "Une inéquation linéaire à deux inconnues est une inégalité de la forme :\n\nax + by ≤ c, ax + by < c, ax + by ≥ c ou ax + by > c,\n\noù a, b et c sont des réels, avec a et b non tous deux nuls.\n\nUne solution est un couple (x ; y) qui rend l'inégalité vraie."
          },
          {
            type: "exemple",
            titre: "Tester des couples",
            texte: "Pour l'inéquation 2x + y ≤ 5 :\n\n• Le couple (1 ; 2) convient car 2 × 1 + 2 = 4 ≤ 5.\n• Le couple (2 ; 1) convient car 2 × 2 + 1 = 5.\n• Le couple (3 ; 1) ne convient pas car 2 × 3 + 1 = 7 > 5.\n\nL'égalité est acceptée avec le symbole ≤ : le couple (2 ; 1) est donc inclus."
          },
          {
            type: "remarque",
            titre: "Solutions réelles ou entières ?",
            texte: "Sauf indication contraire, nous cherchons ici les couples de réels.\n\nDans une situation concrète, d'autres contraintes peuvent s'ajouter. Par exemple, si x et y comptent des lots indivisibles, seules les valeurs entières positives ou nulles conviennent."
          }
        ]
      },

      {
        id: "m1-demi-plan",
        titre: "Représenter une inéquation par un demi-plan",
        blocs: [
          {
            type: "definition",
            titre: "La droite frontière",
            texte: "Pour représenter ax + by ≤ c, on trace d'abord la droite d'équation :\n\nax + by = c.\n\nCette droite partage le plan en deux demi-plans. L'inéquation sélectionne un côté de la droite.\n\n• Avec ≤ ou ≥, les points de la droite frontière sont inclus.\n• Avec < ou >, ils sont exclus."
          },
          {
            type: "methode",
            titre: "Choisir le bon côté",
            texte: "1. Trace la droite frontière ax + by = c en plaçant deux de ses points.\n2. Choisis un point qui n'est pas sur la droite, souvent O(0 ; 0).\n3. Remplace x et y par ses coordonnées dans l'inéquation.\n4. Si l'inégalité est vraie, conserve le côté contenant ce point. Sinon, conserve l'autre côté.\n5. Indique si la frontière est incluse ou exclue.\n\nSi O appartient à la droite, il ne permet pas de choisir un côté : prends un autre point."
          },
          {
            type: "exemple",
            titre: "Représenter x + y ≤ 4",
            texte: "La frontière est la droite x + y = 4.\n\nPour la tracer, on peut utiliser A(4 ; 0) et B(0 ; 4).\n\nTestons O(0 ; 0) : 0 + 0 ≤ 4 est vrai. On conserve donc le demi-plan contenant O.\n\nLa droite est incluse puisque l'inégalité est large. En isolant y, on trouve aussi y ≤ 4 - x : les solutions sont sur la droite ou en dessous."
          },
          {
            type: "schema",
            titre: "Le demi-plan x + y ≤ 4",
            svg: "<svg viewBox='0 0 360 300' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Repère avec la droite x plus y égale 4 passant par 0 4 et 4 0. Le demi-plan situé sous la droite, contenant l’origine, est colorié'><rect width='360' height='300' fill='white'/><polygon points='30,70 190,230 250,290 30,290' fill='#dbeafe'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 30 70 H 330 M 30 110 H 330 M 30 150 H 330 M 30 190 H 330 M 30 230 H 330'/><path d='M 70 30 V 290 M 110 30 V 290 M 150 30 V 290 M 190 30 V 290 M 230 30 V 290 M 270 30 V 290 M 310 30 V 290'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='230' x2='335' y2='230'/><line x1='30' y1='290' x2='30' y2='20'/></g><line x1='30' y1='70' x2='250' y2='290' stroke='#2563eb' stroke-width='3'/><circle cx='30' cy='70' r='4' fill='#1d4ed8'/><circle cx='190' cy='230' r='4' fill='#1d4ed8'/><text x='37' y='65' font-size='14' fill='#1e40af'>B(0 ; 4)</text><text x='175' y='250' font-size='14' fill='#1e40af'>A(4 ; 0)</text><text x='38' y='247' font-size='13' fill='#334155'>O</text><text x='105' y='205' font-size='14' fill='#1e40af'>x + y ≤ 4</text><text x='322' y='223' font-size='14' fill='#334155'>x</text><text x='37' y='25' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La zone bleue et sa frontière représentent les solutions. Le dessin ne montre qu'une partie du plan : le demi-plan continue au-delà du cadre."
          },
          {
            type: "exemple",
            titre: "Une frontière exclue",
            texte: "Pour x + y > 4, la frontière est encore x + y = 4.\n\nO(0 ; 0) ne vérifie pas l'inégalité, car 0 > 4 est faux. On conserve donc le côté opposé à O.\n\nLa droite elle-même est exclue : ses points vérifient x + y = 4 et non x + y > 4. Sur un dessin, on peut la tracer en pointillés pour rappeler cette exclusion."
          },
          {
            type: "remarque",
            titre: "Droites verticales ou horizontales",
            texte: "Pour x ≥ 2, la frontière est la droite verticale x = 2 ; on conserve les points situés à sa droite, frontière comprise.\n\nPour y < 3, la frontière est la droite horizontale y = 3 ; on conserve les points situés en dessous, frontière exclue."
          }
        ]
      },

      {
        id: "m1-systemes-inequations",
        titre: "Résoudre un système d'inéquations",
        blocs: [
          {
            type: "definition",
            titre: "Intersection des régions",
            texte: "Un couple est solution d'un système d'inéquations s'il vérifie toutes les inégalités à la fois.\n\nGraphiquement, l'ensemble des solutions est l'intersection des régions correspondant à chaque inéquation : on conserve uniquement leur partie commune."
          },
          {
            type: "methode",
            titre: "Construire la région solution",
            texte: "1. Trace chaque droite frontière.\n2. Pour chaque inéquation, détermine le demi-plan correspondant à l'aide d'un point test.\n3. Conserve les points qui appartiennent à tous les demi-plans demandés.\n4. Précise quelles frontières sont incluses ou exclues.\n5. Si nécessaire, calcule les coordonnées des sommets en résolvant les systèmes d'équations des droites qui se rencontrent."
          },
          {
            type: "exemple",
            titre: "Une région triangulaire",
            texte: "Représentons le système :\n\nx ≥ 0 ; y ≥ 0 ; x + y ≤ 4.\n\nLes deux premières conditions imposent de rester dans le premier quadrant, axes compris. La troisième impose de rester sur ou sous la droite x + y = 4.\n\nLa région commune est un triangle dont les sommets sont :\n\nO(0 ; 0), A(4 ; 0) et B(0 ; 4).\n\nLes trois côtés sont inclus car les inégalités sont larges."
          },
          {
            type: "schema",
            titre: "Intersection des trois contraintes",
            svg: "<svg viewBox='0 0 330 290' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Triangle solution de x supérieur ou égal à zéro, y supérieur ou égal à zéro et x plus y inférieur ou égal à quatre. Ses sommets sont 0 0, 4 0 et 0 4'><rect width='330' height='290' fill='white'/><polygon points='50,230 210,230 50,70' fill='#bbf7d0' stroke='#15803d' stroke-width='3'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 90 30 V 250 M 130 30 V 250 M 170 30 V 250 M 210 30 V 250 M 250 30 V 250'/><path d='M 30 70 H 290 M 30 110 H 290 M 30 150 H 290 M 30 190 H 290'/></g><g stroke='#475569' stroke-width='2'><line x1='25' y1='230' x2='300' y2='230'/><line x1='50' y1='260' x2='50' y2='20'/></g><line x1='50' y1='70' x2='210' y2='230' stroke='#15803d' stroke-width='3'/><circle cx='50' cy='230' r='4' fill='#166534'/><circle cx='210' cy='230' r='4' fill='#166534'/><circle cx='50' cy='70' r='4' fill='#166534'/><text x='55' y='250' font-size='13' fill='#166534'>O(0 ; 0)</text><text x='192' y='250' font-size='13' fill='#166534'>A(4 ; 0)</text><text x='57' y='65' font-size='13' fill='#166534'>B(0 ; 4)</text><text x='80' y='185' font-size='14' fill='#166534'>solutions</text><text x='290' y='223' font-size='14' fill='#334155'>x</text><text x='57' y='25' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La région verte et ses trois côtés sont inclus. Tout point de cette région vérifie simultanément les trois inéquations."
          },
          {
            type: "exemple",
            titre: "Calculer un sommet",
            texte: "Cherchons le point d'intersection des droites :\n\nx + y = 5\nx - y = 1.\n\nEn additionnant : 2x = 6, donc x = 3. Puis 3 + y = 5, donc y = 2.\n\nLes droites se coupent en (3 ; 2). Ce point est un sommet de la région étudiée seulement s'il vérifie aussi toutes les autres contraintes."
          },
          {
            type: "remarque",
            titre: "Toutes les régions ne sont pas des triangles",
            texte: "Selon les contraintes, la région solution peut être un autre polygone, une région non limitée, une droite, un point ou même être vide.\n\nPar exemple, x ≥ 3 et x ≤ 1 ne peuvent pas être vérifiées simultanément : le système n'a aucune solution."
          }
        ]
      },

      {
        id: "m1-programmation-lineaire",
        titre: "Découvrir la programmation linéaire",
        blocs: [
          {
            type: "introduction",
            titre: "Choisir la meilleure solution",
            texte: "La programmation linéaire consiste à chercher la plus grande ou la plus petite valeur d'une expression linéaire, sous des contraintes elles-mêmes linéaires.\n\nOn appelle souvent fonction objectif l'expression à optimiser, et région admissible l'ensemble des couples qui respectent les contraintes."
          },
          {
            type: "exemple",
            titre: "Maximiser un gain",
            texte: "On cherche à maximiser G = 3x + 2y sous les contraintes :\n\nx ≥ 0 ; y ≥ 0 ; x + y ≤ 4.\n\nLa région admissible est le triangle de sommets O(0 ; 0), A(4 ; 0) et B(0 ; 4).\n\nCalculons G aux sommets :\n\n• En O : G = 3 × 0 + 2 × 0 = 0.\n• En A : G = 3 × 4 + 2 × 0 = 12.\n• En B : G = 3 × 0 + 2 × 4 = 8.\n\nLe maximum est 12, atteint en (4 ; 0)."
          },
          {
            type: "methode",
            titre: "Pourquoi 12 est-il bien le maximum ?",
            texte: "Dans cet exemple, on peut le démontrer directement.\n\nPuisque y ≥ 0 et x + y ≤ 4 :\n\nG = 3x + 2y = 3(x + y) - y ≤ 3 × 4 - 0 = 12.\n\nLe couple (4 ; 0) respecte les contraintes et donne G = 12. La valeur 12 est donc bien atteinte : c'est le maximum."
          },
          {
            type: "regle",
            titre: "Chercher aux sommets d'un polygone",
            texte: "Lorsque la région admissible est un polygone non vide, fermé et borné, une fonction objectif linéaire atteint son maximum et son minimum à au moins un sommet.\n\nPour trouver une valeur optimale dans ce cas, on peut donc calculer la fonction objectif à tous les sommets et comparer les résultats.\n\nAttention : plusieurs points peuvent être optimaux. Par exemple, toute une arête peut donner la même valeur."
          },
          {
            type: "remarque",
            titre: "Les limites de cette méthode",
            texte: "Si la région est non bornée, un maximum ou un minimum peut ne pas exister. Si une frontière est exclue, une valeur peut être approchée sans jamais être atteinte.\n\nEnfin, si les variables doivent être entières, il faut tenir compte de cette contrainte : un sommet du polygone n'est pas nécessairement un couple entier."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On considère l'inéquation 2x + y ≤ 6.\n\nIndique si chacun des couples suivants est solution :\n\n1. (1 ; 3)\n2. (2 ; 2)\n3. (3 ; 1)",
        correction: "1. Pour (1 ; 3), 2 × 1 + 3 = 5 ≤ 6 : le couple est solution.\n\n2. Pour (2 ; 2), 2 × 2 + 2 = 6 ≤ 6 : le couple est solution. L'égalité est acceptée.\n\n3. Pour (3 ; 1), 2 × 3 + 1 = 7 > 6 : le couple n'est pas solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère l'inéquation x + y > 3.\n\n1. Donne l'équation de sa droite frontière.\n2. Le point O(0 ; 0) est-il solution ?\n3. La droite frontière est-elle incluse ?",
        correction: "1. La droite frontière a pour équation x + y = 3.\n\n2. Non : 0 + 0 > 3 est faux.\n\n3. Non : sur la droite, x + y = 3. L'inégalité > est stricte, donc la frontière est exclue."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On veut représenter l'inéquation x + 2y ≤ 4.\n\n1. Donne deux points de la droite frontière, l'un sur chaque axe.\n2. Le demi-plan solution contient-il O(0 ; 0) ?\n3. La frontière est-elle incluse ?",
        correction: "1. La frontière est x + 2y = 4.\n\nSur l'axe des abscisses, y = 0, donc x = 4 : A(4 ; 0).\nSur l'axe des ordonnées, x = 0, donc 2y = 4 et y = 2 : B(0 ; 2).\n\n2. Oui, car 0 + 2 × 0 = 0 ≤ 4.\n\n3. Oui, car l'inégalité est large. On conserve le côté de la droite contenant O, ainsi que la droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère le système :\n\nx ≥ 0 ; y ≥ 0 ; x + y ≤ 5.\n\nParmi les couples (0 ; 5), (2 ; 2), (-1 ; 3) et (4 ; 2), lesquels sont solutions ?",
        correction: "• (0 ; 5) : les coordonnées sont positives ou nulles et 0 + 5 = 5 ≤ 5. Il est solution.\n\n• (2 ; 2) : les coordonnées sont positives et 2 + 2 = 4 ≤ 5. Il est solution.\n\n• (-1 ; 3) : x = -1 ne vérifie pas x ≥ 0. Il n'est pas solution.\n\n• (4 ; 2) : 4 + 2 = 6 > 5. Il n'est pas solution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère le système :\n\nx ≥ 0 ; y ≥ 0 ; 2x + y ≤ 6.\n\n1. Détermine les points où la droite 2x + y = 6 rencontre les axes.\n2. Décris la région solution et donne ses sommets.\n3. Le point (2 ; 2) appartient-il à la région ?",
        correction: "1. Si y = 0, alors 2x = 6, donc x = 3 : A(3 ; 0).\n\nSi x = 0, alors y = 6 : B(0 ; 6).\n\n2. On conserve le premier quadrant, axes compris, et le côté de la droite contenant O(0 ; 0), car 0 ≤ 6. La région est le triangle fermé de sommets O(0 ; 0), A(3 ; 0) et B(0 ; 6).\n\n3. Oui : 2 et 2 sont positifs et 2 × 2 + 2 = 6. Le point appartient à la frontière, qui est incluse."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère le système :\n\nx ≥ 1 ; y ≥ 0 ; x + y < 4.\n\n1. Les couples (1 ; 2), (1 ; 3) et (0 ; 1) sont-ils solutions ?\n2. Précise quelles droites frontières sont incluses dans la région et laquelle est exclue.",
        correction: "1. (1 ; 2) vérifie 1 ≥ 1, 2 ≥ 0 et 1 + 2 = 3 < 4 : il est solution.\n\n(1 ; 3) ne convient pas car 1 + 3 = 4 et l'inégalité est stricte.\n\n(0 ; 1) ne convient pas car 0 < 1.\n\n2. Les points des droites x = 1 et y = 0 sont inclus lorsqu'ils vérifient aussi les autres contraintes. La droite x + y = 4 est exclue car l'inégalité correspondante est stricte."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association prépare x lots A et y lots B. Les quantités sont des entiers positifs ou nuls. Elle peut préparer au maximum 4 lots au total. Chaque lot A rapporte 3 points et chaque lot B rapporte 2 points.\n\n1. Écris les contraintes et la fonction objectif G.\n2. Détermine les sommets de la région obtenue si x et y sont d'abord considérés comme réels.\n3. Trouve le maximum de G et un couple qui l'atteint.\n4. Ce couple respecte-t-il la condition d'entiers ?",
        correction: "1. Les contraintes sont x ≥ 0, y ≥ 0 et x + y ≤ 4, avec x et y entiers. La fonction objectif est G = 3x + 2y.\n\n2. Pour les variables réelles, la région est le triangle de sommets (0 ; 0), (4 ; 0) et (0 ; 4).\n\n3. Aux sommets, G vaut respectivement 0, 12 et 8. Le maximum sur le triangle est donc 12, atteint en (4 ; 0).\n\nOn peut aussi justifier : G = 3(x + y) - y ≤ 12 puisque x + y ≤ 4 et y ≥ 0.\n\n4. Oui : 4 et 0 sont des entiers positifs ou nuls. Le maximum sous la contrainte d'entiers est donc également 12."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On cherche à maximiser G = 2x + 3y sous les contraintes réelles :\n\nx ≥ 0 ; y ≥ 0 ; x + y ≤ 4 ; y ≤ 2.\n\n1. Détermine les sommets de la région admissible.\n2. Calcule G à chacun de ces sommets.\n3. Donne la valeur maximale et un couple qui l'atteint.",
        correction: "1. La région est dans le premier quadrant, sous les droites x + y = 4 et y = 2.\n\nSes sommets sont :\n• O(0 ; 0) ;\n• A(4 ; 0), intersection de y = 0 et x + y = 4 ;\n• B(2 ; 2), intersection de y = 2 et x + y = 4 ;\n• C(0 ; 2), intersection de x = 0 et y = 2.\n\nCes quatre points vérifient toutes les contraintes. La région est un quadrilatère fermé et borné.\n\n2. G(O) = 0 ; G(A) = 8 ; G(B) = 2 × 2 + 3 × 2 = 10 ; G(C) = 6.\n\n3. Le maximum est 10, atteint en (2 ; 2).\n\nVérification directe : G = 2(x + y) + y ≤ 2 × 4 + 2 = 10. Le couple (2 ; 2) atteint bien cette valeur."
      }
    ]
  }
]);
