enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch19",
    titre: "Chapitre 19 : Diffraction et interférences",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch19-diffraction",
        titre: "1. Diffraction d’une onde",
        blocs: [
          {
            type: "introduction",
            titre: "Une onde rencontre une ouverture",
            texte: "Lorsqu’une onde traverse une ouverture ou rencontre un obstacle, sa propagation peut s’étaler dans différentes directions. Ce phénomène est appelé diffraction."
          },
          {
            type: "definition",
            titre: "Diffraction",
            texte: "La diffraction est une modification de la propagation d’une onde au voisinage d’une ouverture ou d’un obstacle. Elle concerne les ondes mécaniques comme les ondes lumineuses."
          },
          {
            type: "regle",
            titre: "Rôle de la taille",
            texte: "La diffraction est particulièrement marquée lorsque la dimension de l’ouverture ou de l’obstacle est du même ordre de grandeur que la longueur d’onde λ. Elle existe aussi pour d’autres dimensions, mais peut alors être moins visible."
          },
          {
            type: "schema",
            titre: "Onde traversant une ouverture",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 260' role='img' aria-label='Des fronts d’onde rectilignes arrivent de la gauche sur une paroi munie d’une ouverture. Après l’ouverture, les fronts d’onde s’étalent en arcs vers la droite.'><line x1='75' y1='35' x2='75' y2='225' stroke='#267' stroke-width='2'/><line x1='125' y1='35' x2='125' y2='225' stroke='#267' stroke-width='2'/><line x1='175' y1='35' x2='175' y2='225' stroke='#267' stroke-width='2'/><line x1='250' y1='25' x2='250' y2='100' stroke='#555' stroke-width='8'/><line x1='250' y1='160' x2='250' y2='235' stroke='#555' stroke-width='8'/><path d='M250 85 A45 45 0 0 1 250 175' fill='none' stroke='#a33' stroke-width='2'/><path d='M250 55 A75 75 0 0 1 250 205' fill='none' stroke='#a33' stroke-width='2'/><path d='M250 25 A105 105 0 0 1 250 235' fill='none' stroke='#a33' stroke-width='2'/><line x1='100' y1='245' x2='200' y2='245' stroke='#222' stroke-width='2'/><polygon points='200,245 188,238 188,252' fill='#222'/><text x='145' y='230' text-anchor='middle' font-size='15'>propagation</text><text x='440' y='130' text-anchor='middle' font-size='16'>fronts diffractés</text></svg>",
            legende: "Représentation qualitative : après l’ouverture, les fronts d’onde s’étalent. Leur forme exacte dépend notamment de l’ouverture et de la longueur d’onde."
          },
          {
            type: "exemple",
            titre: "Pourquoi le son contourne-t-il certains obstacles ?",
            texte: "Le son peut être entendu derrière une porte entrouverte, car il se diffracte à l’ouverture. L’importance de l’étalement dépend de sa longueur d’onde et de la taille de l’ouverture."
          }
        ]
      },

      {
        id: "sp1-ch19-fente",
        titre: "2. Diffraction de la lumière par une fente",
        blocs: [
          {
            type: "definition",
            titre: "Figure de diffraction",
            texte: "Une lumière monochromatique traversant une fente étroite produit sur un écran une figure comprenant une tache centrale lumineuse, bordée de zones sombres et de taches secondaires."
          },
          {
            type: "regle",
            titre: "Largeur angulaire",
            texte: "Pour une fente de largeur a éclairée par une lumière de longueur d’onde λ, le premier minimum vérifie sin(θ) = λ/a lorsque λ ≤ a. Pour un petit angle exprimé en radians, θ ≈ λ/a. θ est le demi-angle entre l’axe central et le premier minimum."
          },
          {
            type: "regle",
            titre: "Largeur de la tache centrale",
            texte: "Si l’écran est à une distance D de la fente et si θ est petit, la largeur de la tache centrale vaut approximativement L ≈ 2Dθ ≈ 2Dλ/a. Utiliser la même unité de longueur pour λ, a et D."
          },
          {
            type: "schema",
            titre: "Diffraction par une fente",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 290' role='img' aria-label='Une fente est éclairée à gauche. Sur un écran distant de D, la tache centrale s’étend entre les deux premiers minima ; sa largeur est L.'><line x1='100' y1='30' x2='100' y2='125' stroke='#555' stroke-width='7'/><line x1='100' y1='155' x2='100' y2='260' stroke='#555' stroke-width='7'/><line x1='520' y1='30' x2='520' y2='260' stroke='#555' stroke-width='4'/><rect x='510' y='90' width='20' height='100' fill='#ffe37a' opacity='0.8'/><line x1='100' y1='140' x2='520' y2='90' stroke='#a33' stroke-width='2'/><line x1='100' y1='140' x2='520' y2='190' stroke='#a33' stroke-width='2'/><line x1='100' y1='140' x2='520' y2='140' stroke='#999' stroke-width='2' stroke-dasharray='5,5'/><line x1='550' y1='90' x2='550' y2='190' stroke='#222' stroke-width='2'/><line x1='542' y1='90' x2='558' y2='90' stroke='#222' stroke-width='2'/><line x1='542' y1='190' x2='558' y2='190' stroke='#222' stroke-width='2'/><text x='565' y='145' font-size='17'>L</text><text x='120' y='125' font-size='16'>θ</text><line x1='100' y1='275' x2='520' y2='275' stroke='#555' stroke-width='2'/><text x='310' y='268' text-anchor='middle' font-size='16'>distance D</text><text x='100' y='20' text-anchor='middle' font-size='16'>fente</text><text x='520' y='20' text-anchor='middle' font-size='16'>écran</text></svg>",
            legende: "L est la distance entre les deux premiers minima, de part et d’autre de l’axe central. Le dessin est qualitatif et non à l’échelle."
          },
          {
            type: "exemple",
            titre: "Calcul d’une largeur",
            texte: "Pour λ = 600 nm = 6,0 × 10⁻⁷ m, a = 0,20 mm = 2,0 × 10⁻⁴ m et D = 2,0 m : L ≈ 2Dλ/a = 2 × 2,0 × 6,0 × 10⁻⁷/(2,0 × 10⁻⁴) = 0,012 m, soit 1,2 cm."
          },
          {
            type: "methode",
            titre: "Calculer avec des unités cohérentes",
            texte: "1. Convertir λ, a et D en mètres. 2. Vérifier que l’approximation des petits angles est applicable : λ/a doit être petit. 3. Calculer L ≈ 2Dλ/a. 4. Convertir le résultat dans l’unité demandée."
          },
          {
            type: "remarque",
            titre: "Influence de la fente",
            texte: "À longueur d’onde et distance fixées, une fente plus étroite donne une tache centrale plus large. Si a est divisée par deux, L est multipliée par deux dans le domaine d’application de la formule."
          }
        ]
      },

      {
        id: "sp1-ch19-interferences",
        titre: "3. Superposition et interférences",
        blocs: [
          {
            type: "definition",
            titre: "Superposition",
            texte: "Lorsque deux ondes se rencontrent, leurs perturbations s’additionnent. Selon leur décalage, elles peuvent se renforcer ou s’atténuer : c’est le phénomène d’interférences."
          },
          {
            type: "definition",
            titre: "Sources cohérentes",
            texte: "Pour observer une figure d’interférences stable, les ondes doivent conserver un déphasage constant dans le temps : elles sont alors cohérentes. Dans le modèle étudié, elles ont la même fréquence."
          },
          {
            type: "regle",
            titre: "Interférences constructives et destructives",
            texte: "Pour deux ondes cohérentes émises en phase et parcourant des trajets dont la différence est δ : les interférences sont constructives si δ = kλ ; elles sont destructives si δ = (k + ½)λ, avec k entier. Pour une extinction complète, les amplitudes doivent aussi être égales au point considéré."
          },
          {
            type: "schema",
            titre: "Renforcement et atténuation",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 225' role='img' aria-label='Deux ondes en phase ont leurs crêtes et leurs creux alignés et se renforcent. Deux ondes en opposition ont les crêtes de l’une alignées avec les creux de l’autre et peuvent s’annuler si leurs amplitudes sont égales.'><text x='155' y='25' text-anchor='middle' font-size='18'>En phase</text><line x1='35' y1='95' x2='275' y2='95' stroke='#aaa' stroke-width='2'/><path d='M35 95 C65 35 95 35 125 95 S185 155 215 95 S245 35 275 95' fill='none' stroke='#267' stroke-width='3'/><path d='M35 95 C65 35 95 35 125 95 S185 155 215 95 S245 35 275 95' fill='none' stroke='#a33' stroke-width='2' stroke-dasharray='6,5'/><text x='155' y='185' text-anchor='middle' font-size='16'>renforcement</text><text x='465' y='25' text-anchor='middle' font-size='18'>En opposition</text><line x1='345' y1='95' x2='585' y2='95' stroke='#aaa' stroke-width='2'/><path d='M345 95 C375 35 405 35 435 95 S495 155 525 95 S555 35 585 95' fill='none' stroke='#267' stroke-width='3'/><path d='M345 95 C375 155 405 155 435 95 S495 35 525 95 S555 155 585 95' fill='none' stroke='#a33' stroke-width='2' stroke-dasharray='6,5'/><text x='465' y='185' text-anchor='middle' font-size='16'>atténuation ou annulation</text></svg>",
            legende: "Les courbes représentent les perturbations des deux ondes avant addition. En opposition, leur somme est nulle si leurs amplitudes sont égales."
          },
          {
            type: "exemple",
            titre: "Différence de marche",
            texte: "Deux sources cohérentes émettent en phase une onde de longueur d’onde λ = 0,50 m. Si δ = 1,0 m = 2λ, les interférences sont constructives. Si δ = 0,75 m = 1,5λ, elles sont destructives."
          }
        ]
      },

      {
        id: "sp1-ch19-young",
        titre: "4. Franges d’interférences",
        blocs: [
          {
            type: "definition",
            titre: "Dispositif à deux fentes",
            texte: "Dans le dispositif de Young, une lumière monochromatique éclaire deux fentes qui jouent le rôle de sources cohérentes. Sur un écran, l’alternance de franges lumineuses et sombres traduit les interférences."
          },
          {
            type: "definition",
            titre: "Interfrange",
            texte: "L’interfrange i est la distance entre les centres de deux franges lumineuses consécutives, ou entre deux franges sombres consécutives."
          },
          {
            type: "regle",
            titre: "Formule de l’interfrange",
            texte: "Pour deux fentes séparées d’une distance a, un écran à la distance D et une longueur d’onde λ, dans l’approximation des petits angles : i = λD/a. Les longueurs doivent être exprimées dans des unités cohérentes."
          },
          {
            type: "schema",
            titre: "Deux fentes et franges sur un écran",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 270' role='img' aria-label='Deux fentes S1 et S2 séparées de a éclairent un écran à distance D. Sur l’écran, des franges lumineuses alternent avec des franges sombres ; l’interfrange i sépare deux franges lumineuses voisines.'><line x1='150' y1='25' x2='150' y2='105' stroke='#555' stroke-width='7'/><line x1='150' y1='115' x2='150' y2='155' stroke='#555' stroke-width='7'/><line x1='150' y1='165' x2='150' y2='245' stroke='#555' stroke-width='7'/><circle cx='150' cy='110' r='4' fill='#267'/><circle cx='150' cy='160' r='4' fill='#267'/><text x='115' y='113' font-size='16'>S1</text><text x='115' y='165' font-size='16'>S2</text><line x1='180' y1='110' x2='180' y2='160' stroke='#222' stroke-width='2'/><text x='190' y='140' font-size='16'>a</text><line x1='500' y1='25' x2='500' y2='245' stroke='#555' stroke-width='4'/><rect x='490' y='63' width='20' height='10' fill='#ffd044'/><rect x='490' y='103' width='20' height='10' fill='#ffd044'/><rect x='490' y='143' width='20' height='10' fill='#ffd044'/><rect x='490' y='183' width='20' height='10' fill='#ffd044'/><line x1='535' y1='108' x2='535' y2='148' stroke='#a33' stroke-width='2'/><line x1='528' y1='108' x2='542' y2='108' stroke='#a33' stroke-width='2'/><line x1='528' y1='148' x2='542' y2='148' stroke='#a33' stroke-width='2'/><text x='550' y='133' font-size='17'>i</text><line x1='150' y1='255' x2='500' y2='255' stroke='#555' stroke-width='2'/><text x='325' y='248' text-anchor='middle' font-size='16'>distance D</text></svg>",
            legende: "Les marques jaunes représentent des franges lumineuses. Le schéma est qualitatif ; i est l’écart entre deux centres voisins."
          },
          {
            type: "exemple",
            titre: "Calcul de l’interfrange",
            texte: "Avec λ = 600 nm = 6,0 × 10⁻⁷ m, D = 2,0 m et a = 0,50 mm = 5,0 × 10⁻⁴ m : i = λD/a = 2,4 × 10⁻³ m, soit 2,4 mm."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les formules",
            texte: "Pour une fente unique, la largeur de la tache centrale est approximativement L = 2Dλ/a, où a est la largeur de la fente. Pour les interférences à deux fentes, l’interfrange est i = Dλ/a, où a est la distance entre les fentes."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne regarde jamais directement le Soleil ni un faisceau laser, et ne dirige pas un laser vers une personne. Les dispositifs présentés sont des modèles d’étude."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une onde rencontre une ouverture. Dans quel cas la diffraction est-elle particulièrement marquée : lorsque la taille de l’ouverture est du même ordre que la longueur d’onde ou lorsqu’elle est très grande devant celle-ci ?",
        correction: "La diffraction est particulièrement marquée lorsque la taille de l’ouverture est du même ordre de grandeur que la longueur d’onde."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Définis l’interfrange dans une figure d’interférences à deux fentes.",
        correction: "L’interfrange est la distance entre les centres de deux franges lumineuses consécutives, ou de deux franges sombres consécutives."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour une fente unique, on donne λ = 500 nm, a = 0,10 mm et D = 1,0 m. Dans l’approximation des petits angles, calcule la largeur L de la tache centrale avec L ≈ 2Dλ/a.",
        correction: "λ = 5,0 × 10⁻⁷ m et a = 1,0 × 10⁻⁴ m. L ≈ 2 × 1,0 × 5,0 × 10⁻⁷/(1,0 × 10⁻⁴) = 1,0 × 10⁻² m = 1,0 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux sources cohérentes émettent en phase des ondes de longueur d’onde λ = 0,40 m. Au point M, la différence de marche est δ = 1,2 m. Les interférences y sont-elles constructives ou destructives ?",
        correction: "δ = 1,2/0,40 = 3λ. La différence de marche est un multiple entier de λ : les interférences sont constructives."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un dispositif à deux fentes, λ = 500 nm, D = 2,0 m et la distance entre les fentes vaut a = 0,50 mm. En utilisant i = λD/a, calcule l’interfrange.",
        correction: "λ = 5,0 × 10⁻⁷ m et a = 5,0 × 10⁻⁴ m. i = 5,0 × 10⁻⁷ × 2,0/(5,0 × 10⁻⁴) = 2,0 × 10⁻³ m = 2,0 mm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux sources cohérentes émettent en phase avec une longueur d’onde λ = 2,0 cm. Au point M, la différence de marche est δ = 5,0 cm. Détermine la nature des interférences. L’annulation est-elle forcément complète ?",
        correction: "δ/λ = 5,0/2,0 = 2,5 = 2 + ½. Les interférences sont destructives. L’annulation n’est complète que si les deux ondes ont aussi des amplitudes égales en M."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une lumière monochromatique de longueur d’onde λ = 600 nm traverse une fente. Sur un écran situé à D = 1,5 m, la largeur de la tache centrale est L = 9,0 mm. En supposant les petits angles et en utilisant L ≈ 2Dλ/a, détermine la largeur a de la fente.",
        correction: "On isole a : a ≈ 2Dλ/L. Avec λ = 6,0 × 10⁻⁷ m et L = 9,0 × 10⁻³ m : a ≈ 2 × 1,5 × 6,0 × 10⁻⁷/(9,0 × 10⁻³) = 2,0 × 10⁻⁴ m = 0,20 mm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une expérience à deux fentes, l’écran est à D = 1,8 m et l’écartement des fentes est a = 0,60 mm. La distance entre les centres de six franges lumineuses consécutives, de la première à la sixième, est 7,5 mm. En supposant i = λD/a, détermine l’interfrange puis la longueur d’onde λ.",
        correction: "De la première à la sixième frange, il y a cinq interfranges. Donc i = 7,5/5 = 1,5 mm = 1,5 × 10⁻³ m. Avec a = 6,0 × 10⁻⁴ m : λ = ia/D = (1,5 × 10⁻³ × 6,0 × 10⁻⁴)/1,8 = 5,0 × 10⁻⁷ m = 500 nm."
      }
    ]
  }
]);
