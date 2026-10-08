# Money Lingo ATM 💸

### 🌍 [▶ PLAY MONEY LINGO ATM — LIVE WEBSITE](https://moneylingo-atm.vercel.app/)

**Live demo:** https://moneylingo-atm.vercel.app/  
**Status:** Deployed on Vercel · Mobile-friendly · Interactive Lojay fan challenge


A playable, mobile-first **unofficial Lojay fan tribute** inspired by *Money Lingo*. Built with vanilla HTML, CSS and JavaScript, no backend or API key required.

**This is not a real ATM.** Every displayed amount is **fictional, non-redeemable fan cash**. There are no payments, deposits, wagers, prizes, or financial-account connections. The project is not affiliated with or endorsed by Lojay.

## What's inside

1. Enter a name to personalize your receipt.
2. Choose a transaction. LOVE, PEACE, HAPPINESS, SEX, and HEARTBREAK are humorously declined; **MONEY** is approved.
3. Solve the five-letter PIN challenge. Hint: *My songs include Monalisa, Leader, and Tonongo.*
4. Answer **5 randomly selected questions about Lojay** from a **20-question fan trivia bank** (artist facts, early career, songs, EPs, and collaborations). No repeated questions within a round; four answer choices per question are shuffled too.
5. Each correct answer earns **20% fan status + $200,000 fictional fan cash**, up to 100% / $1,000,000. Every user, including 0% scorers, receives a **personalized, strictly black-and-white 1990s thermal-style PNG receipt**.
6. Share the receipt (uses your device's native Share Sheet when available; otherwise downloads the image).
7. A player can play **once and replay once at most per browser**, for a total of two rounds. Refreshing during a round lets you resume without consuming another attempt; completed receipts can be revisited.

There are six user-provided original Lojay portraits. The high-resolution orange portrait is the main hero; smaller portraits are displayed in a thumbnail collage **at or below their useful natural resolution** rather than stretched and blurred. The UI contains decorative money symbols, falling-cash animations, and a punchier original 112-BPM Afro-funk groove with syncopated drums, congas, rhythmic guitar chops, melodic synths, and bouncing bass (`assets/moneylingo-afrofunk-v3.wav`). The **Play Music** button uses a real HTML media element for more reliable playback on iPhones. Music also starts from the first valid **START** tap if the player has not paused it. Mobile browsers block automatic playback before user interaction, so music cannot start until someone taps. Animations respect `prefers-reduced-motion`.

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

## Live deployment

This static web app is deployed at https://moneylingo-atm.vercel.app. Keep `index.html`, `src/`, and `assets/` together at the site root. No environment variables, build output, server, or database are required.

## Replay-limit design

Attempts are persisted under the `moneyLingo.playAttempts.v2` key in browser `localStorage` and claimed at the start of each round. A return visit may resume an unfinished session. The limit is **browser-level only**, not a secure way to identify a person across devices. A backend plus sign-in would be needed to guarantee a strict per-person limit. The website makes no claim otherwise.

## Facts and media

Trivia is drawn from publicly listed releases and collaborations, especially [LV N ATTN](https://music.apple.com/us/album/lv-n-attn-ep/1564963618), [GANGSTER ROMANTIC](https://music.apple.com/us/album/gangster-romantic/1662531615), [Loveless](https://music.apple.com/us/album/loveless-ep/1732548659), and [XOXO](https://music.apple.com/us/album/xoxo/1826159602). The site does not reproduce song lyrics or stream licensed tracks. The bundled instrumental soundtrack is independently synthesized and is NOT Lojay's Monalisa or any other Lojay recording. Add any artist recording only with appropriate permission/licensing.

The six supplied photos are for this fan-made project; their original photographers and rightsholders retain any applicable rights. Do not relicense them as original photographs.
## Creators / attribution

Website credits: **CREATED BY BIG DEMS — @dems_the penlord on X**, with the requested **POWERED BY LOJAY** header as a fan tribute; no official Lojay sponsorship or endorsement is implied.

## Visual direction

The UI uses high-contrast concert-like lime/gold highlights, animated ATM LEDs, a decorative cash-dispensing slot, a kinetic footer treatment, and energetic button states. No extra advertising copy or unrelated headings were added. The downloaded receipt alone is monochrome and uses a dithered one-bit Lojay portrait with vintage mono printing; other site colors and game flows remain intact.
