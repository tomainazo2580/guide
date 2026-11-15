// ===== GUIDE - Anglais 6e (T6) =====
// Chapitre inspire du fascicule de ressources pedagogiques.
// Explications et exercices rediges pour Guide.

enregistrerChapitres("6e", "eng", [
  {
    id: "eng6-se-presenter",
    titre: "Chapitre 1 : Saluer et se présenter",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "eng6-salutations",
        titre: "Saluer et prendre congé",
        blocs: [
          {
            type: "texte",
            titre: "Dire bonjour",
            texte: "En anglais, on utilise différentes expressions pour saluer une personne selon le moment de la journée."
          },
          {
            type: "tableau",
            titre: "Les salutations",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["Hello! / Hi!", "Bonjour ! / Salut !"],
              ["Good morning!", "Bonjour ! (le matin)"],
              ["Good afternoon!", "Bonjour ! (l'après-midi)"],
              ["Good evening!", "Bonsoir !"],
              ["Goodbye! / Bye!", "Au revoir ! / Salut !"]
            ]
          },
          {
            type: "remarque",
            titre: "Good night",
            texte: "Good night signifie « Bonne nuit ». On l'utilise généralement avant de dormir ou lorsqu'on quitte quelqu'un le soir, pas pour dire bonjour."
          },
          {
            type: "exemple",
            titre: "Petit dialogue",
            texte: "A: Good morning!\nB: Good morning!\n\nA : Bonjour !\nB : Bonjour !"
          }
        ]
      },
      {
        id: "eng6-comment-ca-va",
        titre: "Demander comment ça va",
        blocs: [
          {
            type: "tableau",
            titre: "Questions et réponses",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["How are you?", "Comment vas-tu ? / Comment allez-vous ?"],
              ["I'm fine, thank you.", "Je vais bien, merci."],
              ["I'm OK, thanks.", "Ça va, merci."],
              ["And you?", "Et toi ? / Et vous ?"]
            ]
          },
          {
            type: "exemple",
            titre: "Un dialogue",
            texte: "A: Hello! How are you?\nB: I'm fine, thank you. And you?\nA: I'm fine, thanks.\n\nA : Bonjour ! Comment vas-tu ?\nB : Je vais bien, merci. Et toi ?\nA : Je vais bien, merci."
          },
          {
            type: "remarque",
            titre: "I'm",
            texte: "I'm est la forme courte de I am. Les deux signifient « je suis »."
          }
        ]
      },
      {
        id: "eng6-nom-age",
        titre: "Dire son nom et son âge",
        blocs: [
          {
            type: "tableau",
            titre: "Se présenter",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["What's your name?", "Comment t'appelles-tu ?"],
              ["My name is Mamy.", "Je m'appelle Mamy."],
              ["I'm Mamy.", "Je suis Mamy."],
              ["How old are you?", "Quel âge as-tu ?"],
              ["I'm eleven years old.", "J'ai onze ans."]
            ]
          },
          {
            type: "regle",
            titre: "Attention à l'âge",
            texte: "En anglais, on utilise le verbe être pour dire son âge : « I am eleven years old. »\nEn français, on dit : « J'ai onze ans. »"
          },
          {
            type: "exemple",
            titre: "Un dialogue",
            texte: "A: What's your name?\nB: My name is Rado.\nA: How old are you?\nB: I'm twelve years old.\n\nA : Comment t'appelles-tu ?\nB : Je m'appelle Rado.\nA : Quel âge as-tu ?\nB : J'ai douze ans."
          }
        ]
      },
      {
        id: "eng6-origine-adresse",
        titre: "Dire d'où l'on vient et où l'on habite",
        blocs: [
          {
            type: "tableau",
            titre: "Origine et lieu d'habitation",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["Where are you from?", "D'où viens-tu ?"],
              ["I'm from Madagascar.", "Je viens de Madagascar."],
              ["Where do you live?", "Où habites-tu ?"],
              ["I live in Antsirabe.", "J'habite à Antsirabe."],
              ["What's your address?", "Quelle est ton adresse ?"]
            ]
          },
          {
            type: "exemple",
            titre: "Se présenter",
            texte: "Hello! My name is Lala. I'm from Madagascar. I live in Antsirabe.\n\nBonjour ! Je m'appelle Lala. Je viens de Madagascar. J'habite à Antsirabe."
          },
          {
            type: "remarque",
            titre: "Protéger ses informations",
            texte: "Pour s'entraîner, on peut utiliser une ville ou une adresse imaginaire. Il ne faut pas donner son adresse personnelle à un inconnu."
          }
        ]
      },
      {
        id: "eng6-freres-soeurs",
        titre: "Parler de ses frères et sœurs",
        blocs: [
          {
            type: "tableau",
            titre: "Vocabulaire",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["a brother", "un frère"],
              ["a sister", "une sœur"],
              ["two brothers", "deux frères"],
              ["two sisters", "deux sœurs"]
            ]
          },
          {
            type: "regle",
            titre: "I have",
            texte: "I have signifie « j'ai ».\nPour parler de plusieurs frères ou sœurs, on ajoute généralement -s au nom : brother → brothers ; sister → sisters."
          },
          {
            type: "exemple",
            titre: "Ma famille",
            texte: "I have one brother and two sisters.\nJ'ai un frère et deux sœurs.\n\nI have no brothers or sisters.\nJe n'ai ni frère ni sœur."
          }
        ]
      },
      {
        id: "eng6-alphabet",
        titre: "L'alphabet et l'épellation",
        blocs: [
          {
            type: "texte",
            titre: "L'alphabet anglais",
            texte: "L'alphabet anglais contient 26 lettres :\n\nA B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z"
          },
          {
            type: "definition",
            titre: "Épeler",
            texte: "Épeler un mot, c'est dire ses lettres une par une. En anglais, on peut demander : « How do you spell your name? » — Comment épelles-tu ton nom ?"
          },
          {
            type: "exemple",
            titre: "Épeler un prénom",
            texte: "A: How do you spell your name?\nB: M-A-M-Y.\n\nA : Comment épelles-tu ton prénom ?\nB : M-A-M-Y."
          },
          {
            type: "remarque",
            titre: "À l'oral",
            texte: "Les lettres anglaises ne se prononcent pas toutes comme en français. En classe, écoute ton professeur les prononcer et entraîne-toi à les répéter."
          }
        ]
      },
      {
        id: "eng6-nombres",
        titre: "Les nombres de 0 à 100",
        blocs: [
          {
            type: "tableau",
            titre: "De 0 à 10",
            entetes: ["Nombre", "Anglais"],
            lignes: [
              ["0", "zero"],
              ["1", "one"],
              ["2", "two"],
              ["3", "three"],
              ["4", "four"],
              ["5", "five"],
              ["6", "six"],
              ["7", "seven"],
              ["8", "eight"],
              ["9", "nine"],
              ["10", "ten"]
            ]
          },
          {
            type: "tableau",
            titre: "De 11 à 19",
            entetes: ["Nombre", "Anglais"],
            lignes: [
              ["11", "eleven"],
              ["12", "twelve"],
              ["13", "thirteen"],
              ["14", "fourteen"],
              ["15", "fifteen"],
              ["16", "sixteen"],
              ["17", "seventeen"],
              ["18", "eighteen"],
              ["19", "nineteen"]
            ]
          },
          {
            type: "tableau",
            titre: "Les dizaines",
            entetes: ["Nombre", "Anglais"],
            lignes: [
              ["20", "twenty"],
              ["30", "thirty"],
              ["40", "forty"],
              ["50", "fifty"],
              ["60", "sixty"],
              ["70", "seventy"],
              ["80", "eighty"],
              ["90", "ninety"],
              ["100", "one hundred"]
            ]
          },
          {
            type: "regle",
            titre: "Former les autres nombres",
            texte: "Entre 21 et 99, on associe la dizaine et l'unité avec un trait d'union.\n21 : twenty-one\n35 : thirty-five\n48 : forty-eight\n99 : ninety-nine"
          },
          {
            type: "remarque",
            titre: "Attention à l'écriture",
            texte: "40 s'écrit forty, sans u. 14 s'écrit fourteen, mais 40 s'écrit forty."
          }
        ]
      },
      {
        id: "eng6-telephone-bilan",
        titre: "Le téléphone et le bilan",
        blocs: [
          {
            type: "tableau",
            titre: "Demander un numéro",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["What's your phone number?", "Quel est ton numéro de téléphone ?"],
              ["My phone number is...", "Mon numéro de téléphone est..."]
            ]
          },
          {
            type: "exemple",
            titre: "Lire les chiffres",
            texte: "Pour un numéro de téléphone, on peut lire les chiffres un par un.\n\nExemple imaginaire : 012 345\nzero - one - two - three - four - five"
          },
          {
            type: "remarque",
            titre: "Rester prudent",
            texte: "En exercice, utilise un numéro imaginaire. Ne donne pas ton vrai numéro à un inconnu."
          },
          {
            type: "methode",
            titre: "Je me présente",
            texte: "Hello! My name is Mamy. I'm eleven years old. I'm from Madagascar. I live in Toamasina. I have one brother.\n\nBonjour ! Je m'appelle Mamy. J'ai onze ans. Je viens de Madagascar. J'habite à Toamasina. J'ai un frère."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en français :\n1. Good morning!\n2. Goodbye!\n3. How are you?",
        correction: "1. Bonjour ! (le matin)\n2. Au revoir !\n3. Comment vas-tu ? / Comment allez-vous ?"
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète le dialogue avec : name, fine.\n\nA: What's your ...?\nB: My name is Lala.\nA: How are you?\nB: I'm ..., thank you.",
        correction: "A: What's your name?\nB: My name is Lala.\nA: How are you?\nB: I'm fine, thank you."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris ces nombres en anglais :\n1. 12\n2. 20\n3. 35\n4. 40\n5. 100",
        correction: "1. twelve\n2. twenty\n3. thirty-five\n4. forty\n5. one hundred"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Traduis en anglais :\n1. Je m'appelle Rado.\n2. J'ai onze ans.\n3. Je viens de Madagascar.",
        correction: "1. My name is Rado. / I'm Rado.\n2. I'm eleven years old.\n3. I'm from Madagascar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Réponds en anglais avec ces informations : prénom Lala, 12 ans, habite à Fianarantsoa.\n\n1. What's your name?\n2. How old are you?\n3. Where do you live?",
        correction: "1. My name is Lala.\n2. I'm twelve years old.\n3. I live in Fianarantsoa."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Traduis en anglais :\n1. J'ai un frère et deux sœurs.\n2. Où habites-tu ?\n3. Comment épelles-tu ton nom ?",
        correction: "1. I have one brother and two sisters.\n2. Where do you live?\n3. How do you spell your name?"
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Complète ce dialogue en anglais :\n\nA: Hello! What's your name?\nB: ...\nA: How old are you?\nB: ...\nA: Where are you from?\nB: ...\n\nUtilise ces informations : Mamy, 11 ans, Madagascar.",
        correction: "A: Hello! What's your name?\nB: My name is Mamy.\nA: How old are you?\nB: I'm eleven years old.\nA: Where are you from?\nB: I'm from Madagascar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Présente-toi en anglais en cinq phrases : salue, donne ton prénom, ton âge, ton pays et ta ville. Tu peux inventer les informations.",
        correction: "Exemple :\nHello! My name is Rado. I'm twelve years old. I'm from Madagascar. I live in Antananarivo.\n\nD'autres réponses sont possibles si les phrases sont correctes."
      }
    ]
  }
]);
// ===== FIN DU FICHIER eng-ch1.js =====
