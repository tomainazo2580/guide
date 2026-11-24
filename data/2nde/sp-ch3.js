// ===== GUIDE - Sciences physiques 2nde =====
// Chimie — Chapitre 3 : les ions.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "sp", [
  {
    id: 3,
    titre: "Chapitre 3 : Les ions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "De l'atome à l'ion",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi étudier les ions ?",
            texte: "De nombreuses substances contiennent des ions : c'est le cas du chlorure de sodium présent dans le sel et de nombreuses espèces dissoutes dans les eaux naturelles.\n\nComprendre les ions permet d'expliquer la formation de certains composés et la conduction électrique des solutions ioniques."
          },
          {
            type: "rappel",
            titre: "L'atome est neutre",
            texte: "Un atome possède autant de protons, chargés positivement, que d'électrons, chargés négativement. Sa charge électrique totale est donc nulle."
          },
          {
            type: "definition",
            titre: "Ion",
            texte: "Un ion est une entité qui porte une charge électrique. Il peut être formé à partir d'un atome ou d'un groupe d'atomes qui a perdu ou gagné un ou plusieurs électrons."
          },
          {
            type: "remarque",
            titre: "Le noyau ne change pas",
            texte: "Lorsqu'un atome gagne ou perd des électrons pour former un ion, son noyau ne change pas. Le nombre de protons et le numéro atomique Z restent donc les mêmes."
          },
          {
            type: "exemple",
            titre: "Atome et ion sodium",
            texte: "Un atome de sodium possède 11 protons et 11 électrons. S'il perd un électron, il conserve ses 11 protons mais ne possède plus que 10 électrons.\n\nSa charge devient positive : c'est l'ion sodium Na⁺."
          }
        ]
      },
      {
        id: 2,
        titre: "Cations et anions",
        blocs: [
          {
            type: "definition",
            titre: "Cation",
            texte: "Un cation est un ion chargé positivement. Un atome forme un cation lorsqu'il perd un ou plusieurs électrons.\n\nExemples : Na⁺, Ca²⁺ et Al³⁺."
          },
          {
            type: "definition",
            titre: "Anion",
            texte: "Un anion est un ion chargé négativement. Un atome forme un anion lorsqu'il gagne un ou plusieurs électrons.\n\nExemples : Cl⁻, O²⁻ et S²⁻."
          },
          {
            type: "tableau",
            titre: "Comparer les deux cas",
            entetes: ["Transformation de l'atome", "Résultat", "Charge"],
            lignes: [
              ["Perte d'électrons", "Cation", "Positive"],
              ["Gain d'électrons", "Anion", "Négative"]
            ]
          },
          {
            type: "methode",
            titre: "Comprendre le signe",
            texte: "Les électrons portent une charge négative.\n\n• Si l'atome perd des électrons, il perd des charges négatives : il devient positif.\n• S'il gagne des électrons, il gagne des charges négatives : il devient négatif."
          },
          {
            type: "exemple",
            titre: "Formation des ions sodium et chlorure",
            texte: "L'atome de sodium perd un électron :\n\nNa → Na⁺ + e⁻.\n\nL'atome de chlore gagne un électron :\n\nCl + e⁻ → Cl⁻.\n\nCes écritures montrent le bilan des électrons. Elles ne décrivent pas nécessairement toutes les étapes d'une transformation réelle."
          },
          {
            type: "remarque",
            titre: "Lire la charge",
            texte: "La charge est indiquée en exposant après la formule de l'ion.\n\nNa⁺ porte une charge +e ; Mg²⁺ porte une charge +2e ; Cl⁻ porte une charge −e ; O²⁻ porte une charge −2e.\n\nLe signe + ou − seul correspond à une charge de valeur 1."
          }
        ]
      },
      {
        id: 3,
        titre: "Composition d'un ion monoatomique",
        blocs: [
          {
            type: "definition",
            titre: "Ion monoatomique",
            texte: "Un ion monoatomique est formé à partir d'un seul atome. Par exemple, Na⁺, Mg²⁺ et Cl⁻ sont des ions monoatomiques."
          },
          {
            type: "methode",
            titre: "Compter les particules",
            texte: "Pour un ion monoatomique :\n\n1. Le nombre de protons est Z.\n2. Si le nombre de nucléons A est connu, le nombre de neutrons est A − Z.\n3. Pour un cation de charge n+, l'atome neutre a perdu n électrons : le nombre d'électrons est Z − n.\n4. Pour un anion de charge n−, l'atome neutre a gagné n électrons : le nombre d'électrons est Z + n."
          },
          {
            type: "exemple",
            titre: "L'ion magnésium",
            texte: "Le magnésium a Z = 12. L'atome neutre Mg possède 12 électrons.\n\nPour former Mg²⁺, il perd 2 électrons :\n\nMg → Mg²⁺ + 2 e⁻.\n\nL'ion Mg²⁺ possède donc 12 protons et 10 électrons. Si son noyau est ²⁴₁₂Mg, il possède aussi 24 − 12 = 12 neutrons."
          },
          {
            type: "exemple",
            titre: "L'ion chlorure",
            texte: "Le chlore a Z = 17. L'atome neutre possède 17 électrons.\n\nPour former Cl⁻, il gagne un électron :\n\nCl + e⁻ → Cl⁻.\n\nL'ion chlorure possède 17 protons et 18 électrons."
          },
          {
            type: "remarque",
            titre: "Ne pas modifier Z",
            texte: "La charge d'un ion ne modifie pas son nombre de protons. Par exemple, Na et Na⁺ ont tous deux Z = 11 : ils appartiennent au même élément chimique."
          }
        ]
      },
      {
        id: 4,
        titre: "Répartition électronique et ions courants",
        blocs: [
          {
            type: "rappel",
            titre: "Couches électroniques",
            texte: "Pour les 18 premiers éléments étudiés au chapitre précédent, les électrons des atomes neutres sont répartis sur les couches K, L et éventuellement M.\n\nLes électrons de la couche externe jouent un rôle important dans les transformations chimiques."
          },
          {
            type: "regle",
            titre: "Duet et octet",
            texte: "Certains atomes forment des ions dont la répartition électronique ressemble à celle d'un gaz noble :\n\n• une couche K remplie de 2 électrons : duet ;\n• ou une couche externe contenant 8 électrons : octet.\n\nCette règle aide à comprendre la formation de certains ions monoatomiques courants des éléments étudiés. Elle ne permet pas de prévoir tous les ions dans toutes les situations."
          },
          {
            type: "exemple",
            titre: "Du sodium à l'ion sodium",
            texte: "L'atome Na possède 11 électrons : K² L⁸ M¹.\n\nIl perd son électron externe. L'ion Na⁺ possède alors 10 électrons : K² L⁸.\n\nSa couche externe L contient 8 électrons, comme celle de l'atome de néon."
          },
          {
            type: "exemple",
            titre: "Du chlore à l'ion chlorure",
            texte: "L'atome Cl possède 17 électrons : K² L⁸ M⁷.\n\nIl gagne un électron. L'ion Cl⁻ possède alors 18 électrons : K² L⁸ M⁸.\n\nSa couche externe contient 8 électrons, comme celle de l'atome d'argon."
          },
          {
            type: "exemple",
            titre: "L'ion oxyde",
            texte: "L'atome d'oxygène possède 8 électrons : K² L⁶.\n\nS'il gagne 2 électrons, il devient O²⁻ et possède 10 électrons : K² L⁸."
          },
          {
            type: "remarque",
            titre: "Même répartition ne signifie pas même élément",
            texte: "Na⁺ et Ne possèdent chacun 10 électrons et la répartition K² L⁸. Ce ne sont pourtant pas le même élément : Na⁺ possède 11 protons, tandis que Ne en possède 10."
          }
        ]
      },
      {
        id: 5,
        titre: "Ions polyatomiques et composés ioniques",
        blocs: [
          {
            type: "definition",
            titre: "Ion polyatomique",
            texte: "Un ion polyatomique est constitué de plusieurs atomes et porte une charge électrique globale.\n\nExemples : l'ion hydroxyde HO⁻, l'ion sulfate SO₄²⁻ et l'ion ammonium NH₄⁺."
          },
          {
            type: "tableau",
            titre: "Quelques ions courants",
            entetes: ["Nom", "Formule", "Type"],
            lignes: [
              ["Ion sodium", "Na⁺", "Cation monoatomique"],
              ["Ion calcium", "Ca²⁺", "Cation monoatomique"],
              ["Ion chlorure", "Cl⁻", "Anion monoatomique"],
              ["Ion hydroxyde", "HO⁻", "Anion polyatomique"],
              ["Ion sulfate", "SO₄²⁻", "Anion polyatomique"],
              ["Ion ammonium", "NH₄⁺", "Cation polyatomique"]
            ]
          },
          {
            type: "regle",
            titre: "Neutralité d'un composé ionique",
            texte: "Un solide ionique est électriquement neutre dans son ensemble. Les charges positives de ses cations compensent les charges négatives de ses anions.\n\nSa formule indique les proportions des ions nécessaires à cette neutralité. Elle ne désigne pas nécessairement une molécule isolée."
          },
          {
            type: "exemple",
            titre: "Chlorure de sodium",
            texte: "Dans NaCl, un ion Na⁺ de charge +e correspond à un ion Cl⁻ de charge −e.\n\nLa somme des charges est nulle : (+e) + (−e) = 0. La proportion est donc un ion sodium pour un ion chlorure."
          },
          {
            type: "exemple",
            titre: "Chlorure de calcium",
            texte: "L'ion calcium Ca²⁺ porte la charge +2e et l'ion chlorure Cl⁻ porte la charge −e.\n\nIl faut deux ions chlorure pour compenser un ion calcium : (+2e) + 2 × (−e) = 0.\n\nLa formule est donc CaCl₂."
          },
          {
            type: "exemple",
            titre: "Sulfate de sodium",
            texte: "L'ion sulfate SO₄²⁻ porte la charge −2e. Il faut deux ions sodium Na⁺, chacun de charge +e, pour compenser sa charge.\n\nLa formule du sulfate de sodium est Na₂SO₄."
          },
          {
            type: "remarque",
            titre: "Indices et charges",
            texte: "Dans CaCl₂, l'indice 2 indique la proportion de deux ions chlorure pour un ion calcium. Dans Ca²⁺, l'exposant 2+ indique la charge d'un ion calcium.\n\nUn indice et une charge n'ont pas la même signification."
          }
        ]
      },
      {
        id: 6,
        titre: "Les ions en solution aqueuse",
        blocs: [
          {
            type: "definition",
            titre: "Solution ionique",
            texte: "Une solution ionique contient des ions dissous dans un solvant. Lorsque le solvant est l'eau, elle est appelée solution ionique aqueuse.\n\nLes ions peuvent provenir, par exemple, de la dissolution d'un solide ionique soluble."
          },
          {
            type: "exemple",
            titre: "Dissolution du chlorure de sodium",
            texte: "Lorsqu'une quantité de chlorure de sodium se dissout dans l'eau, les ions sodium et chlorure se séparent et se dispersent dans la solution.\n\nOn peut écrire le bilan de dissolution :\n\nNaCl(s) → Na⁺(aq) + Cl⁻(aq).\n\n(s) désigne le solide et (aq) désigne une espèce dissoute dans l'eau."
          },
          {
            type: "regle",
            titre: "Conduction électrique",
            texte: "Une solution ionique peut conduire le courant électrique grâce au déplacement des ions sous l'effet d'une tension électrique.\n\nDans un métal, les porteurs mobiles sont principalement des électrons ; dans une solution ionique, ce sont les ions."
          },
          {
            type: "remarque",
            titre: "La solution reste globalement neutre",
            texte: "Même si elle contient des ions chargés, une solution ordinaire est globalement électriquement neutre : les charges positives et négatives se compensent dans l'ensemble de la solution."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les solutions de laboratoire peuvent être dangereuses, même lorsqu'elles sont transparentes. Ne les goûte pas et ne mélange pas de produits inconnus. Les manipulations et les tests d'ions se font sous la supervision de l'enseignant, avec les protections adaptées."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un atome perd un électron. L'ion obtenu est-il positif ou négatif ? Comment appelle-t-on ce type d'ion ?",
        correction: "L'atome perd une charge négative. L'ion obtenu est donc positif : c'est un cation."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Classe les ions suivants en cations et anions : Na⁺, Cl⁻, Ca²⁺ et O²⁻.",
        correction: "Les cations sont Na⁺ et Ca²⁺ : leur charge est positive.\n\nLes anions sont Cl⁻ et O²⁻ : leur charge est négative."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "L'atome de sodium Na possède 11 électrons. Il perd un électron pour former Na⁺.\n\n1. Combien d'électrons possède Na⁺ ?\n2. Combien possède-t-il de protons ?\n3. Écris le bilan de la formation de l'ion.",
        correction: "1. Na⁺ possède 11 − 1 = 10 électrons.\n\n2. La formation de l'ion ne change pas le noyau : il possède toujours 11 protons.\n\n3. Na → Na⁺ + e⁻."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "L'atome d'oxygène possède 8 protons et 8 électrons. Il gagne deux électrons.\n\n1. Donne la formule de l'ion formé.\n2. Indique son nombre de protons et d'électrons.\n3. Est-ce un cation ou un anion ?",
        correction: "1. L'ion formé est O²⁻.\n\n2. Il conserve 8 protons et possède 8 + 2 = 10 électrons.\n\n3. Sa charge est négative : c'est un anion."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les ions calcium Ca²⁺ et chlorure Cl⁻ forment un composé neutre. Combien faut-il d'ions chlorure pour un ion calcium ? Donne la formule du composé.",
        correction: "Un ion calcium porte +2e et un ion chlorure porte −e. Il faut donc deux ions chlorure pour compenser la charge d'un ion calcium.\n\nLa formule est CaCl₂."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L'atome de magnésium ²⁴₁₂Mg forme l'ion Mg²⁺.\n\n1. Combien l'atome neutre possède-t-il de protons, de neutrons et d'électrons ?\n2. Combien d'électrons l'ion possède-t-il ?\n3. Écris la répartition électronique de l'atome puis celle de l'ion.",
        correction: "1. Z = 12 : l'atome possède 12 protons et, puisqu'il est neutre, 12 électrons. Il possède 24 − 12 = 12 neutrons.\n\n2. Mg²⁺ résulte de la perte de 2 électrons : il possède 12 − 2 = 10 électrons.\n\n3. Atome Mg : K² L⁸ M². Ion Mg²⁺ : K² L⁸."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le chlore a pour numéro atomique Z = 17.\n\n1. Donne la répartition électronique de l'atome neutre.\n2. L'atome gagne un électron : quelle est la formule de l'ion obtenu ?\n3. Donne la répartition électronique de cet ion et explique sa charge.",
        correction: "1. L'atome neutre possède 17 électrons : K² L⁸ M⁷.\n\n2. Il forme l'ion chlorure Cl⁻.\n\n3. L'ion possède 18 électrons : K² L⁸ M⁸. Il possède un électron de plus que de protons : sa charge est −e."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L'ion aluminium Al³⁺ porte la charge +3e et l'ion oxyde O²⁻ porte la charge −2e.\n\n1. Détermine une proportion d'ions donnant une charge totale nulle.\n2. Donne la formule du composé ionique correspondant.",
        correction: "1. Deux ions Al³⁺ portent une charge totale de +6e. Trois ions O²⁻ portent une charge totale de −6e.\n\nLa somme est nulle : 2 × (+3e) + 3 × (−2e) = 0.\n\n2. La formule du composé est Al₂O₃."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dissout du chlorure de sodium NaCl dans de l'eau.\n\n1. Quels ions sont présents dans la solution ?\n2. Écris le bilan de dissolution.\n3. Pourquoi cette solution peut-elle conduire le courant électrique ?",
        correction: "1. La solution contient des ions sodium Na⁺ et chlorure Cl⁻.\n\n2. NaCl(s) → Na⁺(aq) + Cl⁻(aq).\n\n3. La solution peut conduire le courant grâce au déplacement des ions lorsqu'une tension électrique est appliquée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère l'ion ³⁵₁₇Cl⁻.\n\n1. Donne son nombre de protons et de neutrons.\n2. Combien possède-t-il d'électrons ? Justifie.\n3. Écris sa répartition électronique.\n4. Compare sa composition à celle de l'atome neutre ³⁵₁₇Cl.",
        correction: "1. Z = 17 : l'ion possède 17 protons. Son nombre de neutrons est A − Z = 35 − 17 = 18.\n\n2. La charge − signifie que l'atome neutre a gagné un électron. L'ion possède donc 17 + 1 = 18 électrons.\n\n3. Sa répartition est K² L⁸ M⁸.\n\n4. L'atome neutre possède le même noyau : 17 protons et 18 neutrons. Il possède 17 électrons, soit un de moins que l'ion."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice de type examen. Le sulfate de sodium contient des ions Na⁺ et SO₄²⁻.\n\n1. Identifie le cation et l'anion. Lequel est polyatomique ?\n2. Détermine la formule du sulfate de sodium en justifiant l'équilibre des charges.\n3. On dissout ce solide dans l'eau. Écris le bilan de dissolution.\n4. Explique pourquoi la solution obtenue est globalement neutre et peut conduire le courant.",
        correction: "1. Na⁺ est le cation. SO₄²⁻ est l'anion ; il est polyatomique car il contient plusieurs atomes.\n\n2. Un ion sulfate porte −2e. Deux ions sodium portent ensemble +2e. La formule est donc Na₂SO₄.\n\n3. Na₂SO₄(s) → 2 Na⁺(aq) + SO₄²⁻(aq).\n\n4. Les charges positives et négatives se compensent globalement : la solution est neutre dans son ensemble. Elle peut conduire le courant grâce au déplacement des ions sous l'effet d'une tension."
      }
    ]
  }
]);
