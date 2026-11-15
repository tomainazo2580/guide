// ===== GUIDE - Anglais 6e (T6) =====
// Inspire du fascicule de ressources pedagogiques.
// Explications et exercices rediges pour Guide.

enregistrerChapitres("6e", "eng", [
  {
    id: "eng6-temps-dates",
    titre: "Chapitre 3 : Les jours, les dates, l'heure et le temps",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "eng6-jours",
        titre: "Les jours de la semaine",
        blocs: [
          {
            type: "tableau",
            titre: "The days of the week",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["Monday", "lundi"],
              ["Tuesday", "mardi"],
              ["Wednesday", "mercredi"],
              ["Thursday", "jeudi"],
              ["Friday", "vendredi"],
              ["Saturday", "samedi"],
              ["Sunday", "dimanche"]
            ]
          },
          {
            type: "regle",
            titre: "Une majuscule",
            texte: "En anglais, les jours de la semaine commencent par une majuscule : Monday, Tuesday..."
          },
          {
            type: "tableau",
            titre: "Aujourd'hui, hier et demain",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["today", "aujourd'hui"],
              ["yesterday", "hier"],
              ["tomorrow", "demain"]
            ]
          },
          {
            type: "exemple",
            titre: "Quel jour sommes-nous ?",
            texte: "A: What day is it today?\nB: It's Monday.\n\nA : Quel jour sommes-nous aujourd'hui ?\nB : C'est lundi."
          },
          {
            type: "exemple",
            titre: "Hier et demain",
            texte: "Today is Tuesday. Yesterday was Monday. Tomorrow is Wednesday.\n\nAujourd'hui, c'est mardi. Hier, c'était lundi. Demain, c'est mercredi."
          }
        ]
      },

      {
        id: "eng6-mois",
        titre: "Les mois de l'année",
        blocs: [
          {
            type: "tableau",
            titre: "The months of the year",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["January", "janvier"],
              ["February", "février"],
              ["March", "mars"],
              ["April", "avril"],
              ["May", "mai"],
              ["June", "juin"],
              ["July", "juillet"],
              ["August", "août"],
              ["September", "septembre"],
              ["October", "octobre"],
              ["November", "novembre"],
              ["December", "décembre"]
            ]
          },
          {
            type: "regle",
            titre: "La majuscule",
            texte: "Comme les jours, les mois commencent par une majuscule en anglais : January, February..."
          },
          {
            type: "exemple",
            titre: "Mon anniversaire",
            texte: "My birthday is in June.\nMon anniversaire est en juin."
          }
        ]
      },

      {
        id: "eng6-ordinaux",
        titre: "Les nombres ordinaux",
        blocs: [
          {
            type: "definition",
            titre: "Pour indiquer un rang",
            texte: "Les nombres ordinaux indiquent un rang : premier, deuxième, troisième... On les utilise notamment pour lire les dates."
          },
          {
            type: "tableau",
            titre: "Quelques ordinaux",
            entetes: ["Chiffres", "Anglais", "Français"],
            lignes: [
              ["1st", "first", "premier"],
              ["2nd", "second", "deuxième"],
              ["3rd", "third", "troisième"],
              ["4th", "fourth", "quatrième"],
              ["5th", "fifth", "cinquième"],
              ["6th", "sixth", "sixième"],
              ["7th", "seventh", "septième"],
              ["8th", "eighth", "huitième"],
              ["9th", "ninth", "neuvième"],
              ["10th", "tenth", "dixième"]
            ]
          },
          {
            type: "regle",
            titre: "Après dix",
            texte: "On ajoute souvent -th au nombre, mais certaines écritures changent :\n11th : eleventh\n12th : twelfth\n20th : twentieth\n30th : thirtieth"
          },
          {
            type: "exemple",
            titre: "Les dates après vingt",
            texte: "21st : twenty-first\n22nd : twenty-second\n23rd : twenty-third\n24th : twenty-fourth\n31st : thirty-first"
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "11th, 12th et 13th se terminent par -th, même si les chiffres 1, 2 et 3 apparaissent à la fin."
          }
        ]
      },

      {
        id: "eng6-date",
        titre: "Dire la date",
        blocs: [
          {
            type: "tableau",
            titre: "Demander la date",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["What's the date today?", "Quelle est la date aujourd'hui ?"],
              ["It's the first of May.", "C'est le premier mai."],
              ["It's the twenty-sixth of June.", "C'est le vingt-six juin."]
            ]
          },
          {
            type: "regle",
            titre: "Lire une date",
            texte: "Pour dire une date, on peut utiliser : the + nombre ordinal + of + mois.\n\n26 June → the twenty-sixth of June"
          },
          {
            type: "exemple",
            titre: "La date du jour",
            texte: "A: What's the date today?\nB: It's the tenth of April.\n\nA : Quelle est la date aujourd'hui ?\nB : C'est le dix avril."
          },
          {
            type: "remarque",
            titre: "À l'écrit et à l'oral",
            texte: "On peut écrire « 10 April » et lire « the tenth of April ». À l'oral, on utilise le nombre ordinal."
          }
        ]
      },

      {
        id: "eng6-heure",
        titre: "Demander et dire l'heure",
        blocs: [
          {
            type: "tableau",
            titre: "Quelle heure est-il ?",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["What time is it?", "Quelle heure est-il ?"],
              ["It's seven o'clock.", "Il est sept heures."],
              ["It's half past seven.", "Il est sept heures et demie."],
              ["It's a quarter past seven.", "Il est sept heures et quart."],
              ["It's a quarter to eight.", "Il est huit heures moins le quart."]
            ]
          },
          {
            type: "regle",
            titre: "Les expressions à retenir",
            texte: "o'clock : heure exacte\nhalf past : et demie\na quarter past : et quart\na quarter to : moins le quart"
          },
          {
            type: "exemple",
            titre: "Lire l'heure",
            texte: "7:00 → It's seven o'clock.\n7:15 → It's a quarter past seven.\n7:30 → It's half past seven.\n7:45 → It's a quarter to eight."
          },
          {
            type: "remarque",
            titre: "Moins le quart",
            texte: "Pour 7 h 45, on parle de l'heure qui vient : « a quarter to eight » signifie huit heures moins le quart."
          }
        ]
      },

      {
        id: "eng6-saisons-meteo",
        titre: "Les saisons et la météo",
        blocs: [
          {
            type: "tableau",
            titre: "The seasons",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["spring", "le printemps"],
              ["summer", "l'été"],
              ["autumn / fall", "l'automne"],
              ["winter", "l'hiver"]
            ]
          },
          {
            type: "remarque",
            titre: "À Madagascar — Complété par Guide",
            texte: "Les quatre noms de saisons sont utiles en anglais, mais le climat de Madagascar varie selon les régions. On distingue souvent une saison chaude et pluvieuse et une saison plus fraîche et sèche."
          },
          {
            type: "tableau",
            titre: "Quel temps fait-il ?",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["What's the weather like?", "Quel temps fait-il ?"],
              ["It's sunny.", "Il y a du soleil."],
              ["It's rainy.", "Il pleut. / Le temps est pluvieux."],
              ["It's cloudy.", "Le ciel est nuageux."],
              ["It's windy.", "Il y a du vent."],
              ["It's hot.", "Il fait chaud."],
              ["It's cold.", "Il fait froid."]
            ]
          },
          {
            type: "exemple",
            titre: "Un dialogue",
            texte: "A: What's the weather like today?\nB: It's sunny and hot.\n\nA : Quel temps fait-il aujourd'hui ?\nB : Il y a du soleil et il fait chaud."
          }
        ]
      },

      {
        id: "eng6-temps-bilan",
        titre: "Bilan : parler du temps",
        blocs: [
          {
            type: "methode",
            titre: "Les questions utiles",
            texte: "What day is it today? → Quel jour sommes-nous ?\nWhat's the date today? → Quelle est la date ?\nWhat time is it? → Quelle heure est-il ?\nWhat's the weather like? → Quel temps fait-il ?"
          },
          {
            type: "exemple",
            titre: "Une journée",
            texte: "Today is Monday. It's the first of June. It's seven o'clock. It's sunny.\n\nAujourd'hui, c'est lundi. Nous sommes le premier juin. Il est sept heures. Il y a du soleil."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en anglais :\n1. lundi\n2. mercredi\n3. dimanche",
        correction: "1. Monday\n2. Wednesday\n3. Sunday"
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète les mois manquants :\nJanuary, ..., March, ..., May.",
        correction: "January, February, March, April, May."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris ces nombres ordinaux en anglais :\n1. 1st\n2. 2nd\n3. 3rd\n4. 5th",
        correction: "1. first\n2. second\n3. third\n4. fifth"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Comment lit-on ces dates en anglais ?\n1. 1 May\n2. 10 April\n3. 26 June",
        correction: "1. The first of May.\n2. The tenth of April.\n3. The twenty-sixth of June."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dis ces heures en anglais :\n1. 7:00\n2. 7:15\n3. 7:30\n4. 7:45",
        correction: "1. It's seven o'clock.\n2. It's a quarter past seven.\n3. It's half past seven.\n4. It's a quarter to eight."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Traduis en français :\n1. What's the weather like?\n2. It's sunny.\n3. It's windy.\n4. It's cold.",
        correction: "1. Quel temps fait-il ?\n2. Il y a du soleil.\n3. Il y a du vent.\n4. Il fait froid."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Aujourd'hui, c'est mardi. Réponds en anglais :\n1. What day is it today?\n2. What day was it yesterday?\n3. What day is it tomorrow?",
        correction: "1. It's Tuesday.\n2. It was Monday.\n3. It's Wednesday."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Réponds en anglais avec ces informations imaginaires : nous sommes lundi 10 avril, il est 7 h 30 et il y a du soleil.\n\n1. What day is it today?\n2. What's the date today?\n3. What time is it?\n4. What's the weather like?",
        correction: "1. It's Monday.\n2. It's the tenth of April.\n3. It's half past seven.\n4. It's sunny."
      }
    ]
  }
]);
// ===== FIN DU FICHIER eng-ch3.js =====
