/**
 * Money Lingo ATM: factual, original song/album trivia (not song lyrics).
 * Sources checked Oct 2026:
 * https://music.apple.com/us/artist/lojay/1151631485
 * https://music.apple.com/us/album/lv-n-attn-ep/1564963618
 * https://music.apple.com/us/album/xoxo/1826159602
 * https://music.apple.com/us/album/loveless-ep/1732548659
 * https://music.apple.com/us/album/money-lingo-single/6812426555
 */
export const QUESTION_BANK = [
  {
    "id": "q01",
    "question": "Who teamed up with Lojay on the original hit “Monalisa”?",
    "correct": "Sarz",
    "options": [
      "Sarz",
      "JAE5",
      "P.Priime",
      "Magicsticks"
    ]
  },
  {
    "id": "q02",
    "question": "Which international superstar joined Lojay and Sarz for the “Monalisa” remix?",
    "correct": "Chris Brown",
    "options": [
      "Chris Brown",
      "Justin Bieber",
      "Usher",
      "Jason Derulo"
    ]
  },
  {
    "id": "q03",
    "question": "Which “LV N ATTN” song features Wizkid?",
    "correct": "LV N ATTN",
    "options": [
      "LV N ATTN",
      "Tonongo",
      "WYLM",
      "Park O X3"
    ]
  },
  {
    "id": "q04",
    "question": "Which of these songs appears on Lojay and Sarz's 2021 EP “LV N ATTN”?",
    "correct": "Tonongo",
    "options": [
      "Tonongo",
      "MOTO",
      "IYD",
      "Bobo"
    ]
  },
  {
    "id": "q05",
    "question": "Which of these song titles also appears on “LV N ATTN”?",
    "correct": "Park O X3",
    "options": [
      "Park O X3",
      "Sawa",
      "Shiver",
      "Tenner"
    ]
  },
  {
    "id": "q06",
    "question": "Which of these was a Lojay single released in 2022?",
    "correct": "LEADER!",
    "options": [
      "LEADER!",
      "Billions",
      "Bobo",
      "TATTUU"
    ]
  },
  {
    "id": "q07",
    "question": "On which project would you find the Lojay track “MOTO”?",
    "correct": "GANGSTER ROMANTIC",
    "options": [
      "GANGSTER ROMANTIC",
      "XOXO",
      "Loveless",
      "LV N ATTN"
    ]
  },
  {
    "id": "q08",
    "question": "Which song is the final track on Lojay's “XOXO” album?",
    "correct": "Alright",
    "options": [
      "Alright",
      "Tenner",
      "Suru",
      "Jericho"
    ]
  },
  {
    "id": "q09",
    "question": "Who teamed up with Lojay for the 2024 “Loveless” EP?",
    "correct": "JAE5",
    "options": [
      "JAE5",
      "Sarz",
      "P.Priime",
      "DJ Neptune"
    ]
  },
  {
    "id": "q10",
    "question": "Who is featured on JAE5 and Lojay's song “I Wish”?",
    "correct": "Libianca",
    "options": [
      "Libianca",
      "Tyla",
      "Tems",
      "Amaarae"
    ]
  },
  {
    "id": "q11",
    "question": "Which JAE5 and Lojay song features Tyler ICU and Sha Sha?",
    "correct": "Dishonest",
    "options": [
      "Dishonest",
      "Watermami",
      "I Wish",
      "Love Made Me Do It"
    ]
  },
  {
    "id": "q12",
    "question": "Whose song “Sensational” features both Davido and Lojay?",
    "correct": "Chris Brown",
    "options": [
      "Chris Brown",
      "Wizkid",
      "Burna Boy",
      "Omah Lay"
    ]
  },
  {
    "id": "q13",
    "question": "Who features alongside Lojay on “Arizona”?",
    "correct": "Olamide",
    "options": [
      "Olamide",
      "Asake",
      "Zlatan",
      "Blaqbonez"
    ]
  },
  {
    "id": "q14",
    "question": "Which singer recorded “Running” with Lojay?",
    "correct": "Ayra Starr",
    "options": [
      "Ayra Starr",
      "Tems",
      "Tiwa Savage",
      "Tyla"
    ]
  },
  {
    "id": "q15",
    "question": "Who features on Lojay's “Mwah!” from the album “XOXO”?",
    "correct": "Odeal",
    "options": [
      "Odeal",
      "Fireboy DML",
      "BNXN",
      "Rema"
    ]
  },
  {
    "id": "q16",
    "question": "Which Colombian artist joins Lojay on “Body”?",
    "correct": "Feid",
    "options": [
      "Feid",
      "J Balvin",
      "Maluma",
      "Bad Bunny"
    ]
  },
  {
    "id": "q17",
    "question": "Which singer joins Lojay on “Memories” from “XOXO”?",
    "correct": "Tyla",
    "options": [
      "Tyla",
      "Ayra Starr",
      "Tems",
      "Amaarae"
    ]
  },
  {
    "id": "q18",
    "question": "Who features on Lojay's “Sawa” from “XOXO”?",
    "correct": "Victony",
    "options": [
      "Victony",
      "Ruger",
      "Omah Lay",
      "Joeboy"
    ]
  },
  {
    "id": "q19",
    "question": "Which track on “XOXO” is labeled as an interlude?",
    "correct": "Wanchu",
    "options": [
      "Wanchu",
      "Suru",
      "Salê",
      "Shiver"
    ]
  },
  {
    "id": "q20",
    "question": "Which 2026 Lojay single shares its name with this fan-made ATM?",
    "correct": "Money Lingo",
    "options": [
      "Money Lingo",
      "Bobo",
      "Gorgeous",
      "Billions"
    ]
  }
];

/** Return a shuffled COPY, leaving the question bank unchanged. */
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** New session: five unique randomly selected questions with shuffled options. */
export function createRound(count = 5) {
  if (!Number.isInteger(count) || count < 1 || count > QUESTION_BANK.length) {
    throw new RangeError("Invalid number of questions requested");
  }
  return shuffle(QUESTION_BANK).slice(0, count).map(q => ({
    ...q,
    options: shuffle(q.options),
  }));
}

export const SCORE_PER_CORRECT = 20;
export const VIRTUAL_DOLLARS_PER_CORRECT = 200000;
export function calculateWinnings(correctCount) {
  const n = Math.max(0, Math.min(5, Math.trunc(Number(correctCount) || 0)));
  return { correct: n, percent: n * SCORE_PER_CORRECT, dollars: n * VIRTUAL_DOLLARS_PER_CORRECT };
}
