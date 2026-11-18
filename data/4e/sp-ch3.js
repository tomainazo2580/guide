// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch3",
    titre: "Chapitre 3 : Les molécules et les formules chimiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch3-lecon1",
        titre: "Qu'est-ce qu'une molécule ?",
        blocs: [
          {
            type: "texte",
            titre: "Rappel : les atomes",
            texte: "La matière est constituée d'entités très petites. Nous avons déjà étudié les atomes et les symboles des éléments chimiques."
          },
          {
            type: "definition",
            titre: "Molécule",
            texte: "Une molécule est un assemblage électriquement neutre d'au moins deux atomes liés entre eux."
          },
          {
            type: "exemple",
            titre: "La molécule d'eau",
            texte: "Une molécule d'eau est formée de deux atomes d'hydrogène et d'un atome d'oxygène liés entre eux."
          },
          {
            type: "remarque",
            titre: "Toutes les substances ne sont pas moléculaires",
            texte: "Certaines substances ne sont pas constituées de molécules. Par exemple, un morceau de fer est formé d'atomes de fer organisés dans un solide métallique. Le sel de cuisine est constitué d'ions organisés dans un solide ionique."
          }
        ]
      },
      {
        id: "sp4-ch3-lecon2",
        titre: "Lire une formule chimique",
        blocs: [
          {
            type: "definition",
            titre: "Une écriture courte",
            texte: "La formule chimique d'une molécule utilise les symboles des éléments qui la constituent. Un petit nombre écrit après un symbole, appelé indice, indique le nombre d'atomes de cet élément dans une molécule."
          },
          {
            type: "regle",
            titre: "S'il n'y a pas d'indice",
            texte: "Lorsqu'aucun indice n'est écrit après un symbole, cela signifie qu'il y a un seul atome de cet élément dans la molécule."
          },
          {
            type: "exemple",
            titre: "Lire H₂O",
            texte: "Dans H₂O, l'indice 2 après H indique deux atomes d'hydrogène. Il n'y a pas d'indice après O : il y a donc un atome d'oxygène. Une molécule d'eau contient au total 2 + 1 = 3 atomes."
          },
          {
            type: "schema",
            titre: "Une représentation de la molécule d'eau",
            svg: "<svg viewBox='0 0 320 145' xmlns='http://www.w3.org/2000/svg'><rect width='320' height='145' fill='#f8fafc'/><line x1='150' y1='65' x2='100' y2='100' stroke='#64748b' stroke-width='7'/><line x1='170' y1='65' x2='220' y2='100' stroke='#64748b' stroke-width='7'/><circle cx='160' cy='58' r='25' fill='#ef4444'/><circle cx='95' cy='105' r='17' fill='#60a5fa'/><circle cx='225' cy='105' r='17' fill='#60a5fa'/><text x='160' y='64' text-anchor='middle' font-size='18' fill='white'>O</text><text x='95' y='110' text-anchor='middle' font-size='15' fill='#0f172a'>H</text><text x='225' y='110' text-anchor='middle' font-size='15' fill='#0f172a'>H</text></svg>",
            legende: "Une molécule d'eau contient deux atomes H et un atome O. Les couleurs et les tailles sont choisies pour le dessin."
          },
          {
            type: "exemple",
            titre: "Lire CO₂",
            texte: "Dans CO₂, C sans indice signifie un atome de carbone. O suivi de l'indice 2 signifie deux atomes d'oxygène. Une molécule de dioxyde de carbone contient donc trois atomes au total."
          },
          {
            type: "methode",
            titre: "Compter les atomes dans une molécule",
            texte: "1. Repère chaque symbole chimique en faisant attention aux majuscules et aux minuscules.\n2. Lis l'indice placé après chaque symbole. S'il n'y en a pas, compte 1.\n3. Indique le nombre d'atomes de chaque élément.\n4. Si nécessaire, additionne ces nombres pour obtenir le total."
          }
        ]
      },
      {
        id: "sp4-ch3-lecon3",
        titre: "Quelques molécules à connaître",
        blocs: [
          {
            type: "tableau",
            titre: "Noms et formules",
            entetes: ["Molécule", "Formule", "Composition d'une molécule"],
            lignes: [
              ["Dihydrogène", "H₂", "2 atomes d'hydrogène"],
              ["Dioxygène", "O₂", "2 atomes d'oxygène"],
              ["Diazote", "N₂", "2 atomes d'azote"],
              ["Eau", "H₂O", "2 atomes d'hydrogène et 1 atome d'oxygène"],
              ["Dioxyde de carbone", "CO₂", "1 atome de carbone et 2 atomes d'oxygène"],
              ["Méthane", "CH₄", "1 atome de carbone et 4 atomes d'hydrogène"],
              ["Ammoniac", "NH₃", "1 atome d'azote et 3 atomes d'hydrogène"]
            ]
          },
          {
            type: "remarque",
            titre: "Un ou plusieurs éléments",
            texte: "Une molécule peut être formée d'atomes d'un seul élément, comme O₂, ou d'atomes de plusieurs éléments, comme H₂O."
          },
          {
            type: "remarque",
            titre: "O et O₂",
            texte: "O est le symbole de l'élément oxygène ; il peut aussi désigner un atome d'oxygène. O₂ est la formule d'une molécule de dioxygène, formée de deux atomes d'oxygène."
          }
        ]
      },
      {
        id: "sp4-ch3-lecon4",
        titre: "Indice et coefficient : ne pas confondre",
        blocs: [
          {
            type: "definition",
            titre: "Le coefficient",
            texte: "Un nombre écrit devant une formule est appelé coefficient. Il indique combien de molécules de cette formule on considère."
          },
          {
            type: "exemple",
            titre: "Deux molécules d'eau",
            texte: "Dans 2 H₂O, le coefficient 2 indique deux molécules d'eau. Chaque molécule contient 2 atomes H et 1 atome O. Les deux molécules contiennent donc 4 atomes H et 2 atomes O, soit 6 atomes au total."
          },
          {
            type: "exemple",
            titre: "Comparer 2 O₂ et O₂",
            texte: "O₂ désigne une molécule de dioxygène : elle contient 2 atomes d'oxygène. 2 O₂ désigne deux molécules de dioxygène : elles contiennent ensemble 2 × 2 = 4 atomes d'oxygène."
          },
          {
            type: "methode",
            titre: "Compter les atomes de plusieurs molécules",
            texte: "1. Lis la composition d'une molécule grâce aux indices.\n2. Repère le coefficient devant la formule.\n3. Multiplie chaque nombre d'atomes par ce coefficient.\n4. Additionne si l'on demande le nombre total d'atomes."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "L'indice fait partie de la formule de la molécule. Le coefficient indique le nombre de molécules considérées. Dans 3 H₂O, on ne change pas H₂O : on compte trois molécules identiques."
          }
        ]
      },
      {
        id: "sp4-ch3-lecon5",
        titre: "Écrire une formule à partir d'une composition",
        blocs: [
          {
            type: "methode",
            titre: "Construire la formule",
            texte: "1. Écris les symboles des éléments indiqués.\n2. Place après chaque symbole l'indice correspondant au nombre d'atomes de cet élément.\n3. N'écris pas l'indice 1.\n4. Vérifie la formule en la relisant."
          },
          {
            type: "exemple",
            titre: "Une molécule de méthane",
            texte: "Une molécule de méthane contient un atome de carbone et quatre atomes d'hydrogène. On écrit C puis H avec l'indice 4 : CH₄."
          },
          {
            type: "remarque",
            titre: "Les limites de cette méthode",
            texte: "Cette méthode permet d'écrire une formule quand la composition de la molécule est déjà donnée. On ne peut pas deviner la formule de n'importe quelle molécule à partir du seul nom des éléments."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une molécule ?",
        correction: "Une molécule est un assemblage électriquement neutre d'au moins deux atomes liés entre eux."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que signifient les formules H₂ et O₂ ?",
        correction: "H₂ désigne une molécule de dihydrogène formée de 2 atomes d'hydrogène. O₂ désigne une molécule de dioxygène formée de 2 atomes d'oxygène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une molécule d'ammoniac a pour formule NH₃.\n1. Quels éléments contient-elle ?\n2. Combien d'atomes de chaque élément contient-elle ?\n3. Combien d'atomes contient-elle au total ?",
        correction: "1. Elle contient de l'azote N et de l'hydrogène H.\n2. Il n'y a pas d'indice après N : elle contient 1 atome d'azote. L'indice 3 après H indique 3 atomes d'hydrogène.\n3. Elle contient 1 + 3 = 4 atomes au total."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris la formule d'une molécule contenant un atome de carbone et quatre atomes d'hydrogène. Quel est son nom dans le tableau de la leçon ?",
        correction: "Le carbone a pour symbole C et l'hydrogène H. On n'écrit pas l'indice 1 après C ; on écrit l'indice 4 après H : CH₄. Cette molécule est le méthane."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère 3 molécules d'eau, notées 3 H₂O.\n1. Combien y a-t-il d'atomes d'hydrogène ?\n2. Combien y a-t-il d'atomes d'oxygène ?\n3. Combien y a-t-il d'atomes au total ?",
        correction: "Chaque molécule H₂O contient 2 atomes d'hydrogène et 1 atome d'oxygène.\n1. Pour 3 molécules : 3 × 2 = 6 atomes d'hydrogène.\n2. Pour 3 molécules : 3 × 1 = 3 atomes d'oxygène.\n3. Au total : 6 + 3 = 9 atomes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Compare O₂ et 2 O₂.\n1. Combien de molécules chaque écriture indique-t-elle ?\n2. Combien d'atomes d'oxygène chaque écriture représente-t-elle ?",
        correction: "1. O₂ indique une molécule de dioxygène ; 2 O₂ indique deux molécules de dioxygène.\n2. Une molécule O₂ contient 2 atomes d'oxygène. Deux molécules contiennent 2 × 2 = 4 atomes d'oxygène."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère 2 molécules de dioxyde de carbone et 3 molécules de méthane.\n1. Écris leurs formules avec les coefficients.\n2. Combien y a-t-il d'atomes de carbone en tout ?\n3. Combien y a-t-il d'atomes d'oxygène et d'hydrogène ?",
        correction: "1. Les écritures sont 2 CO₂ et 3 CH₄.\n2. Dans 2 CO₂ : 2 × 1 = 2 atomes de carbone. Dans 3 CH₄ : 3 × 1 = 3 atomes de carbone. En tout : 2 + 3 = 5 atomes de carbone.\n3. Dans 2 CO₂ : 2 × 2 = 4 atomes d'oxygène. Dans 3 CH₄ : 3 × 4 = 12 atomes d'hydrogène."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève lit 2 H₂O et dit : « Il y a deux atomes d'hydrogène et un atome d'oxygène en tout. » Explique son erreur et donne les nombres corrects.",
        correction: "L'élève a donné la composition d'une seule molécule H₂O. Le coefficient 2 indique qu'il y a deux molécules.\nIl faut donc multiplier par 2 : 2 × 2 = 4 atomes d'hydrogène et 2 × 1 = 2 atomes d'oxygène. Il y a 6 atomes au total."
      }
    ]
  }
]);
