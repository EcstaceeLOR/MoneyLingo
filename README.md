# Money Lingo ATM 💸

A playable, mobile-first **unofficial Lojay fan tribute** inspired by *Money Lingo*. Built with vanilla HTML, CSS and JavaScript, no backend or API key required.

**This is not a real ATM.** Every displayed amount is **fictional, non-redeemable fan cash**. There are no payments, deposits, wagers, prizes, or financial-account connections. The project is not affiliated with or endorsed by Lojay.

## What's inside

1. Enter a name to personalize your receipt.
2. Choose a transaction. LOVE, PEACE, HAPPINESS, SEX, and HEARTBREAK are humorously declined; **MONEY** is approved.
3. Solve the five-letter PIN challenge. Hint: *My songs include Monalisa, Leader, and Tonongo.*
4. Answer **5 randomly selected music questions** from a **20-question Lojay trivia bank**. No repeated questions within a round; four answer choices per question are shuffled too.
5. Each correct answer earns **20% fan status + $200,000 fictional fan cash**, up to 100% / $1,000,000. Every user, including 0% scorers, receives a **personalized downloadable PNG receipt**.
6. Share the receipt (uses your device's native Share Sheet when available; otherwise downloads the image).
7. A player can play **once and replay twice at most per browser**, for a total of three rounds. Refreshing during a round lets you resume without consuming another attempt; completed receipts can be revisited.

There are six user-provided original Lojay portraits. The high-resolution orange portrait is the main hero; smaller portraits are displayed in a thumbnail collage **at or below their useful natural resolution** rather than stretched and blurred. The UI contains decorative money symbols, falling-cash animations, and a toggle for ATM sound effects; animations respect `prefers-reduced-motion`.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. **Don't open `index.html` directly from your filesystem**: browsers restrict ES module loading over `file://`.

No npm install is needed to run the website; its fonts use Google Fonts when online, with system fallbacks.

## Quality checks

```bash
npm test
npm run verify
```

- `npm test` checks unique questions, answer options, randomized draws, virtual scoring, and browser-local replay caps.
- `npm run verify` checks the six photo files, file references, gameplay controls, and content completeness.
- GitHub Actions runs both commands on every push and pull request.

## Deployment (later)

This is a static web app ready for GitHub Pages, Netlify, or Vercel. Keep `index.html`, `src/`, and `assets/` together at the site root. No environment variables, build output, server, or database are required. **Do not deploy until content and user experience are reviewed.**

## Replay-limit design

Attempts are persisted under the `moneyLingo.playAttempts.v1` key in browser `localStorage` and claimed at the start of each round. A return visit may resume an unfinished session. The limit is **browser-level only**, not a secure way to identify a person across devices. A backend plus sign-in would be needed to guarantee a strict per-person limit. The website makes no claim otherwise.

## Facts and media

Trivia is drawn from publicly listed releases and collaborations, especially [LV N ATTN](https://music.apple.com/us/album/lv-n-attn-ep/1564963618), [GANGSTER ROMANTIC](https://music.apple.com/us/album/gangster-romantic/1662531615), [Loveless](https://music.apple.com/us/album/loveless-ep/1732548659), and [XOXO](https://music.apple.com/us/album/xoxo/1826159602). The site does not reproduce song lyrics or stream licensed tracks.

The six supplied photos are for this fan-made project; their original photographers and rightsholders retain any applicable rights. Do not relicense them as original photographs.