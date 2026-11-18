// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch2",
    titre: "Chapitre 2 : Les éléments chimiques et leur classification",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch2-lecon1",
        titre: "Reconnaître un élément chimique",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel sur les atomes",
            texte: "Au chapitre 1, nous avons vu qu'un atome possède un noyau contenant des protons. Le nombre de protons est appelé numéro atomique et noté Z."
          },
          {
            type: "definition",
            titre: "Élément chimique",
            texte: "Un élément chimique est défini par son numéro atomique Z, c'est-à-dire par le nombre de protons dans son noyau. Tous les atomes qui ont le même nombre de protons appartiennent au même élément."
          },
          {
            type: "exemple",
            titre: "Reconnaître le carbone",
            texte: "Tout atome dont le noyau contient 6 protons est un atome de carbone : le numéro atomique du carbone est Z = 6."
          },
          {
            type: "remarque",
            titre: "Atomes et isotopes",
            texte: "Deux atomes d'un même élément peuvent avoir des nombres de neutrons différents. Ils restent des atomes du même élément, car leur nombre de protons est identique. On les appelle des isotopes."
          }
        ]
      },
      {
        id: "sp4-ch2-lecon2",
        titre: "Les symboles chimiques",
        blocs: [
          {
            type: "definition",
            titre: "Le symbole d'un élément",
            texte: "Chaque élément chimique possède un symbole international, formé d'une ou de deux lettres. La première lettre est toujours une majuscule. S'il y a une deuxième lettre, elle est toujours une minuscule."
          },
          {
            type: "tableau",
            titre: "Quelques éléments à connaître",
            entetes: ["Élément", "Symbole", "Numéro atomique Z"],
            lignes: [
              ["Hydrogène", "H", "1"],
              ["Carbone", "C", "6"],
              ["Azote", "N", "7"],
              ["Oxygène", "O", "8"],
              ["Sodium", "Na", "11"],
              ["Magnésium", "Mg", "12"],
              ["Aluminium", "Al", "13"],
              ["Chlore", "Cl", "17"],
              ["Potassium", "K", "19"],
              ["Calcium", "Ca", "20"],
              ["Fer", "Fe", "26"],
              ["Cuivre", "Cu", "29"],
              ["Zinc", "Zn", "30"],
              ["Argent", "Ag", "47"]
            ]
          },
          {
            type: "exemple",
            titre: "Attention aux majuscules",
            texte: "C est le symbole du carbone. Ca est celui du calcium. Les symboles Co et CO ne signifient pas la même chose : Co désigne l'élément cobalt, tandis que CO est la formule d'une molécule contenant du carbone et de l'oxygène."
          },
          {
            type: "remarque",
            titre: "Pourquoi certains symboles sont-ils différents du nom ?",
            texte: "Certains symboles viennent d'anciens noms, notamment latins. Par exemple, Fe désigne le fer et Na désigne le sodium. Il faut donc apprendre les symboles."
          }
        ]
      },
      {
        id: "sp4-ch2-lecon3",
        titre: "Découvrir la classification périodique",
        blocs: [
          {
            type: "definition",
            titre: "La classification périodique",
            texte: "La classification périodique est un tableau qui rassemble les éléments chimiques. Ils y sont rangés par numéro atomique Z croissant."
          },
          {
            type: "texte",
            titre: "Lignes et colonnes",
            texte: "Une ligne horizontale du tableau est appelée une période. Une colonne verticale est appelée un groupe. Des éléments d'un même groupe peuvent avoir des propriétés chimiques semblables : certains groupes correspondent à des familles chimiques."
          },
          {
            type: "schema",
            titre: "Début simplifié de la classification",
            svg: "<svg viewBox='0 0 360 205' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='205' fill='#f8fafc'/><text x='6' y='30' font-size='12' fill='#334155'>Période 1</text><text x='6' y='85' font-size='12' fill='#334155'>Période 2</text><text x='6' y='140' font-size='12' fill='#334155'>Période 3</text><g font-size='14' text-anchor='middle' fill='#0f172a'><rect x='85' y='10' width='40' height='40' fill='#dbeafe' stroke='#2563eb'/><text x='105' y='35'>H</text><rect x='295' y='10' width='40' height='40' fill='#ede9fe' stroke='#7c3aed'/><text x='315' y='35'>He</text><rect x='85' y='65' width='40' height='40' fill='#fef3c7' stroke='#d97706'/><text x='105' y='90'>Li</text><rect x='130' y='65' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='150' y='90'>Be</text><rect x='175' y='65' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='195' y='90'>B</text><rect x='220' y='65' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='240' y='90'>C</text><rect x='265' y='65' width='30' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='280' y='90'>…</text><rect x='295' y='65' width='40' height='40' fill='#ede9fe' stroke='#7c3aed'/><text x='315' y='90'>Ne</text><rect x='85' y='120' width='40' height='40' fill='#fef3c7' stroke='#d97706'/><text x='105' y='145'>Na</text><rect x='130' y='120' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='150' y='145'>Mg</text><rect x='175' y='120' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='195' y='145'>Al</text><rect x='220' y='120' width='40' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='240' y='145'>Si</text><rect x='265' y='120' width='30' height='40' fill='#e2e8f0' stroke='#64748b'/><text x='280' y='145'>…</text><rect x='295' y='120' width='40' height='40' fill='#ede9fe' stroke='#7c3aed'/><text x='315' y='145'>Ar</text></g><text x='85' y='184' font-size='12' fill='#92400e'>Li et Na : même groupe</text><text x='85' y='199' font-size='12' fill='#5b21b6'>He, Ne et Ar : même groupe</text></svg>",
            legende: "Extrait simplifié : les points indiquent des éléments non représentés. Les lignes sont des périodes ; les colonnes sont des groupes."
          },
          {
            type: "remarque",
            titre: "Ce tableau est simplifié",
            texte: "L'extrait ne montre pas tous les éléments. Pour rechercher un élément ou étudier l'ensemble des groupes, il faut consulter une classification périodique complète."
          }
        ]
      },
      {
        id: "sp4-ch2-lecon4",
        titre: "Quelques familles chimiques",
        blocs: [
          {
            type: "definition",
            titre: "Une famille chimique",
            texte: "Une famille chimique regroupe des éléments dont certaines propriétés chimiques sont semblables. Dans la classification, les membres d'une famille se trouvent généralement dans une même colonne."
          },
          {
            type: "tableau",
            titre: "Trois familles à reconnaître",
            entetes: ["Famille", "Exemples", "Une caractéristique"],
            lignes: [
              ["Métaux alcalins", "Lithium Li, sodium Na, potassium K", "Métaux réactifs ; ils se trouvent dans la première colonne, sous l'hydrogène."],
              ["Halogènes", "Fluor F, chlore Cl, brome Br", "Éléments du groupe 17, situés dans l'avant-dernière colonne."],
              ["Gaz nobles", "Hélium He, néon Ne, argon Ar", "Gaz généralement peu réactifs, dans la dernière colonne."]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas de l'hydrogène",
            texte: "L'hydrogène H est placé en haut de la première colonne, mais il n'est pas un métal alcalin. Sa position dans la colonne ne suffit donc pas à lui attribuer toutes les propriétés de cette famille."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Certains éléments ou substances correspondantes peuvent être dangereux. Les propriétés chimiques s'étudient à partir de documents ou lors d'activités encadrées en laboratoire. Ne manipule pas de produits inconnus."
          }
        ]
      },
      {
        id: "sp4-ch2-lecon5",
        titre: "Lire une case de la classification",
        blocs: [
          {
            type: "texte",
            titre: "Les informations utiles",
            texte: "Dans une classification périodique, une case indique au minimum le symbole de l'élément. Elle indique souvent aussi son nom et son numéro atomique Z. D'autres informations peuvent apparaître selon le tableau utilisé."
          },
          {
            type: "schema",
            titre: "Exemple d'une case",
            svg: "<svg viewBox='0 0 260 150' xmlns='http://www.w3.org/2000/svg'><rect x='75' y='15' width='110' height='120' rx='6' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='88' y='39' font-size='17' fill='#1e3a5f'>8</text><text x='130' y='84' text-anchor='middle' font-size='38' font-weight='bold' fill='#1e3a5f'>O</text><text x='130' y='115' text-anchor='middle' font-size='14' fill='#1e3a5f'>Oxygène</text></svg>",
            legende: "Pour l'oxygène : O est le symbole et 8 est le numéro atomique Z."
          },
          {
            type: "methode",
            titre: "Exploiter le numéro atomique",
            texte: "1. Repère le symbole et le numéro atomique Z de l'élément.\n2. Z donne le nombre de protons dans son noyau.\n3. Si l'on parle d'un atome neutre de cet élément, il possède aussi Z électrons."
          },
          {
            type: "exemple",
            titre: "L'oxygène",
            texte: "L'oxygène a pour symbole O et pour numéro atomique Z = 8. Un atome d'oxygène possède donc 8 protons. Comme il est neutre, il possède aussi 8 électrons."
          },
          {
            type: "remarque",
            titre: "Et les neutrons ?",
            texte: "Le numéro atomique Z ne suffit pas pour déterminer le nombre de neutrons. Il faut aussi connaître le nombre de nucléons A de l'atome étudié, puis calculer A − Z."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donne le symbole chimique de l'hydrogène, de l'oxygène, du carbone et du fer.",
        correction: "Hydrogène : H ; oxygène : O ; carbone : C ; fer : Fe."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la classification périodique, comment appelle-t-on une ligne horizontale et une colonne verticale ?",
        correction: "Une ligne horizontale est une période. Une colonne verticale est un groupe."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Corrige l'écriture des symboles suivants : NA pour le sodium, cl pour le chlore et fe pour le fer.",
        correction: "Sodium : Na ; chlore : Cl ; fer : Fe.\nLa première lettre du symbole est une majuscule et la deuxième, lorsqu'il y en a une, est une minuscule."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "L'aluminium a pour symbole Al et pour numéro atomique Z = 13.\n1. Combien de protons possède un atome d'aluminium ?\n2. Combien possède-t-il d'électrons ?",
        correction: "1. Il possède 13 protons, car Z est le nombre de protons.\n2. L'atome est neutre : il possède donc 13 électrons."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un atome possède 12 protons, 12 électrons et 13 neutrons. À l'aide du tableau de la leçon :\n1. Identifie son élément et son symbole.\n2. Donne Z et A.",
        correction: "1. Son numéro atomique est 12, car il possède 12 protons. Dans le tableau, Z = 12 correspond au magnésium, de symbole Mg.\n2. Z = 12. Le nombre de nucléons est A = 12 + 13 = 25."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le lithium Li et le sodium Na sont deux métaux alcalins.\n1. Dans quelle colonne se trouvent-ils ?\n2. Pourquoi les range-t-on dans une même famille ?\n3. L'hydrogène, placé au-dessus d'eux, est-il un métal alcalin ?",
        correction: "1. Ils se trouvent dans la première colonne de la classification.\n2. Ils appartiennent à la même famille car ils ont certaines propriétés chimiques semblables.\n3. Non. L'hydrogène est placé dans cette colonne, mais ce n'est pas un métal alcalin."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux atomes neutres ont chacun 17 protons. Le premier a 18 neutrons et le second 20 neutrons.\n1. Identifie l'élément à l'aide du tableau de la leçon.\n2. Donne le nombre d'électrons et le nombre de nucléons de chaque atome.\n3. Explique pourquoi ces atomes appartiennent au même élément.",
        correction: "1. Les deux atomes ont Z = 17 : il s'agit du chlore, symbole Cl.\n2. Chaque atome neutre possède 17 électrons. Pour le premier, A = 17 + 18 = 35 ; pour le second, A = 17 + 20 = 37.\n3. Ils ont le même nombre de protons, donc le même numéro atomique. Ils appartiennent au même élément : ce sont deux isotopes du chlore."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une élève affirme : « Les symboles Co et CO désignent le même élément. » Explique son erreur.",
        correction: "Co, avec une deuxième lettre minuscule, est le symbole de l'élément cobalt. CO, avec deux majuscules, est une formule : elle indique une molécule composée d'un atome de carbone C et d'un atome d'oxygène O. L'écriture des majuscules et des minuscules est donc importante."
      }
    ]
  }
]);
