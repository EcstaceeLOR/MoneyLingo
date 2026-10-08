# Money Lingo ATM 💸

An unofficial interactive fan-made tribute to Lojay's *Money Lingo*. Visitors select MONEY at the ATM, unlock it with the `LOJAY` five-letter PIN, take five randomly selected music-trivia questions from a larger bank, and receive an illustrated downloadable virtual receipt.

**Virtual winnings:** Each correct answer unlocks $200,000 **fictional, non-redeemable** dollars (maximum $1,000,000). No money, deposits, personal financial information, or prizes are involved.

## Product backlog
See [GitHub Issues](https://github.com/EcstaceeLOR/MoneyLingo/issues).

## Planned gameplay
1. Enter player name.
2. Select a transaction: only MONEY is approved.
3. Enter PIN `LOJAY`; hint: "My songs include Monalisa, Leader, and Tonongo."
4. Answer five unique randomized questions out of a verified pool of 20.
5. Download a personalized PNG receipt at **any score (including 0%)** and share your virtual fan score.
6. Each browser allows **one original quiz + two replays only (three total)**; attempt counts persist across refreshes using localStorage.

Photos of Lojay were provided by the user for use in the finished interface. Keep them crisp: never enlarge a thumbnail beyond its intrinsic size. Fan project, not officially affiliated with Lojay or a financial institution.

## What is implemented

- Interactive ATM choices, PIN screen, 20-question bank and five-question random sessions.
- Five-step scoring and fictional $0 to $1,000,000 fan rewards.
- Personalized PNG receipt and a 3-attempt browser-local play cap.

## Run locally

From the repository root: `python3 -m http.server 8000`, then visit `http://localhost:8000`. Optionally run `npm test` for quiz-bank and attempt-limit checks.

## Photos and production assets

The user supplied six original Lojay portraits, included in the ready-to-deploy ZIP from this conversation. **The six JPEG binary assets have not yet been uploaded to GitHub.** Before deploying this GitHub branch, upload the ZIP's `assets/lojay-1.jpeg` through `assets/lojay-6.jpeg` in that same directory. The frontend references these files by their exact names. The first image should be used as the full-size hero; the lower-resolution portraits should appear only as smaller thumbnail elements to keep them sharp.

## Attempt-limit caveat

This website runs without a backend. The replay limit applies **per browser's localStorage**, not per verified human. Switching browsers/devices or clearing site data can bypass it. A truly enforceable person-level rule requires authentication and a backend attempt ledger. Do not market the browser-only version as tamper-proof.
