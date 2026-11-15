// ===== GUIDE - Anglais 6e (T6) =====
// Inspire du fascicule de ressources pedagogiques.
// Explications et exercices rediges pour Guide.

enregistrerChapitres("6e", "eng", [
  {
    id: "eng6-famille",
    titre: "Chapitre 5 : La famille",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "eng6-famille-proche",
        titre: "Les membres de la famille",
        blocs: [
          {
            type: "texte",
            titre: "My family",
            texte: "My family signifie « ma famille ». Voici les mots pour parler de quelques membres de sa famille."
          },
          {
            type: "tableau",
            titre: "La famille proche",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["mother", "mère"],
              ["father", "père"],
              ["parents", "parents"],
              ["brother", "frère"],
              ["sister", "sœur"],
              ["son", "fils"],
              ["daughter", "fille"]
            ]
          },
          {
            type: "exemple",
            titre: "Ma famille",
            texte: "This is my mother. Her name is Lala.\nVoici ma mère. Elle s'appelle Lala.\n\nThis is my brother. His name is Rado.\nVoici mon frère. Il s'appelle Rado."
          },
          {
            type: "remarque",
            titre: "My",
            texte: "My signifie « mon », « ma » ou « mes ».\nMy mother : ma mère.\nMy brother : mon frère.\nMy parents : mes parents."
          }
        ]
      },

      {
        id: "eng6-famille-elargie",
        titre: "La famille élargie",
        blocs: [
          {
            type: "tableau",
            titre: "D'autres membres de la famille",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["grandmother", "grand-mère"],
              ["grandfather", "grand-père"],
              ["grandparents", "grands-parents"],
              ["aunt", "tante"],
              ["uncle", "oncle"],
              ["cousin", "cousin ou cousine"]
            ]
          },
          {
            type: "exemple",
            titre: "Ma grand-mère",
            texte: "This is my grandmother.\nVoici ma grand-mère.\n\nI have an aunt and two cousins.\nJ'ai une tante et deux cousins ou cousines."
          },
          {
            type: "remarque",
            titre: "Cousin",
            texte: "En anglais, cousin peut désigner un garçon ou une fille."
          }
        ]
      },

      {
        id: "eng6-arbre-famille",
        titre: "Comprendre un arbre familial",
        blocs: [
          {
            type: "definition",
            titre: "A family tree",
            texte: "A family tree est un arbre familial. Il montre les liens entre les membres d'une famille."
          },
          {
            type: "exemple",
            titre: "La famille de Mamy",
            texte: "Rabe et Soa sont les grands-parents de Mamy.\nLala est leur fille. Elle est la mère de Mamy et de Rado.\nMamy est la sœur de Rado."
          },
          {
            type: "tableau",
            titre: "Les liens avec Mamy",
            entetes: ["Personne", "Lien en anglais", "Lien en français"],
            lignes: [
              ["Rabe", "grandfather", "grand-père"],
              ["Soa", "grandmother", "grand-mère"],
              ["Lala", "mother", "mère"],
              ["Rado", "brother", "frère"]
            ]
          },
          {
            type: "remarque",
            titre: "Observer les liens",
            texte: "Dans cet exemple, Lala est la fille de Soa : Lala is Soa's daughter.\nMamy est la sœur de Rado : Mamy is Rado's sister."
          }
        ]
      },

      {
        id: "eng6-pluriel",
        titre: "Parler de plusieurs personnes",
        blocs: [
          {
            type: "regle",
            titre: "Le pluriel",
            texte: "Pour former le pluriel de beaucoup de noms en anglais, on ajoute -s :\nbrother → brothers\nsister → sisters\nuncle → uncles"
          },
          {
            type: "exemple",
            titre: "Un ou plusieurs",
            texte: "I have one sister.\nJ'ai une sœur.\n\nI have two sisters.\nJ'ai deux sœurs."
          },
          {
            type: "remarque",
            titre: "Attention : children",
            texte: "Certains pluriels sont différents :\none child → two children\nun enfant → deux enfants"
          }
        ]
      },

      {
        id: "eng6-possession",
        titre: "Dire à qui appartient quelque chose",
        blocs: [
          {
            type: "definition",
            titre: "Le possessif avec 's",
            texte: "On ajoute souvent 's après le nom d'une personne pour dire à qui appartient une chose ou pour exprimer un lien familial."
          },
          {
            type: "exemple",
            titre: "Appartenance et famille",
            texte: "Mamy's book : le livre de Mamy.\nRado's sister : la sœur de Rado.\nLala's mother : la mère de Lala."
          },
          {
            type: "regle",
            titre: "L'ordre des mots",
            texte: "En anglais, on place d'abord la personne, puis 's et le nom.\n\nMamy's book = le livre de Mamy."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans « Mamy's book », 's indique à qui appartient le livre.\nDans « Mamy is eleven », is signifie « est »."
          }
        ]
      },

      {
        id: "eng6-demonstratifs",
        titre: "Montrer une personne ou une chose",
        blocs: [
          {
            type: "tableau",
            titre: "This, that, these, those",
            entetes: ["Anglais", "Français", "Pour montrer"],
            lignes: [
              ["this", "ceci / ce, cette", "une personne ou une chose proche"],
              ["that", "cela / ce, cette", "une personne ou une chose éloignée"],
              ["these", "ces / ceux-ci", "plusieurs personnes ou choses proches"],
              ["those", "ces / ceux-là", "plusieurs personnes ou choses éloignées"]
            ]
          },
          {
            type: "exemple",
            titre: "Une personne",
            texte: "This is my sister.\nVoici ma sœur. (Elle est près de moi.)\n\nThat is my uncle.\nLà-bas, c'est mon oncle."
          },
          {
            type: "exemple",
            titre: "Plusieurs personnes",
            texte: "These are my parents.\nVoici mes parents. (Ils sont près de moi.)\n\nThose are my cousins.\nLà-bas, ce sont mes cousins."
          },
          {
            type: "regle",
            titre: "Is ou are ?",
            texte: "Pour une personne ou une chose : this is / that is.\nPour plusieurs personnes ou choses : these are / those are."
          }
        ]
      },

      {
        id: "eng6-famille-bilan",
        titre: "Bilan : présenter sa famille",
        blocs: [
          {
            type: "methode",
            titre: "À retenir",
            texte: "My mother : ma mère.\nMy brother : mon frère.\nMy grandparents : mes grands-parents.\nRado's sister : la sœur de Rado.\nThis is my father : voici mon père.\nThese are my parents : voici mes parents."
          },
          {
            type: "exemple",
            titre: "Une petite présentation",
            texte: "Hello! My name is Mamy. This is my mother, Lala. This is my brother, Rado. I have two cousins.\n\nBonjour ! Je m'appelle Mamy. Voici ma mère, Lala. Voici mon frère, Rado. J'ai deux cousins ou cousines."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en français :\n1. mother\n2. brother\n3. grandmother\n4. uncle",
        correction: "1. mère\n2. frère\n3. grand-mère\n4. oncle"
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en anglais :\n1. sœur\n2. père\n3. tante\n4. parents",
        correction: "1. sister\n2. father\n3. aunt\n4. parents"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Mets ces mots au pluriel :\n1. brother\n2. sister\n3. uncle\n4. child",
        correction: "1. brothers\n2. sisters\n3. uncles\n4. children"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Traduis en français :\n1. Mamy's book\n2. Rado's sister\n3. Lala's mother",
        correction: "1. Le livre de Mamy.\n2. La sœur de Rado.\n3. La mère de Lala."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Complète avec this ou these :\n1. ... is my brother. (Il est près de moi.)\n2. ... are my parents. (Ils sont près de moi.)",
        correction: "1. This is my brother.\n2. These are my parents."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Complète avec that ou those :\n1. ... is my aunt. (Elle est loin.)\n2. ... are my cousins. (Ils sont loin.)",
        correction: "1. That is my aunt.\n2. Those are my cousins."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une famille imaginaire, Lala est la mère de Mamy et de Rado. Mamy est la sœur de Rado.\nComplète en anglais :\n1. Lala is Mamy's ...\n2. Rado is Mamy's ...\n3. Mamy is Rado's ...",
        correction: "1. Lala is Mamy's mother.\n2. Rado is Mamy's brother.\n3. Mamy is Rado's sister."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Présente une famille imaginaire en anglais. Écris au moins trois phrases et utilise « This is » une fois.",
        correction: "Exemple :\nMy name is Mamy. This is my mother. Her name is Lala. I have one brother.\n\nD'autres réponses correctes sont possibles."
      }
    ]
  }
]);
// ===== FIN DU FICHIER eng-ch5.js =====
