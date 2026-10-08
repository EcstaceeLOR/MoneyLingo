import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { QUESTION_BANK, createRound } from '../src/questions.js';
import { MAX_ATTEMPTS, MAX_REPLAYS } from '../src/attempts.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert.match(html, /<title>Money Lingo ATM/i, 'Missing page title');
assert.match(html, /id="receiptBtn"/, 'Receipt download control missing');
const receiptSource = html.split('function makeReceipt(){')[1]?.split('const receiptName=')[0];
assert.ok(receiptSource, 'Receipt renderer missing');
assert.match(receiptSource, /Courier New/, 'Receipt must use retro monospace font');
assert.match(receiptSource, /dither/, 'Receipt must use thermal halftone portrait');
assert.match(receiptSource, /#fff/, 'Receipt white paper base missing');
assert.match(receiptSource, /#000/, 'Receipt black ink missing');
assert.doesNotMatch(receiptSource, /#[a-fA-F0-9]{6}/, 'Receipt must be black and white only');
assert.match(html, /class="bottom"/, 'Bottom credits missing');

assert.match(html, /id="shareBtn"/, 'Receipt share control missing');
assert.match(html, /id="backingMusic"/, 'Background music element missing');
assert.match(html, /id="soundToggle"/, 'Sound control missing');
assert.match(html, /\.play\(\)/, 'Audio playback action missing');
const wav = readFileSync(new URL('../assets/moneylingo-groove.wav', import.meta.url));
assert.ok(wav.length > 200_000,'Soundtrack is too short or missing');
assert.equal(wav.toString('ascii',0,4),'RIFF','Soundtrack is not a RIFF WAV');
assert.equal(wav.toString('ascii',8,12),'WAVE','Soundtrack WAV header invalid');

assert.match(html, /id="resumeBtn"/, 'Resume control missing');
assert.match(html, /<script type="module">/, 'Browser module script missing');
assert.match(html, /src\/questions\.js/, 'Questions module missing');
assert.match(html, /src\/attempts\.js/, 'Attempts module missing');
assert.equal(QUESTION_BANK.length, 20);
assert.equal(MAX_ATTEMPTS, 2);
assert.equal(MAX_REPLAYS, 1);
for (let i=1;i<=6;i++) {
 const filename = `assets/lojay-${i}.jpeg`;
 assert.ok(existsSync(new URL(`../${filename}`, import.meta.url)), `Missing original photo: ${filename}`);
 assert.ok(statSync(new URL(`../${filename}`, import.meta.url)).size > 10000, `Photo damaged: ${filename}`);
 assert.ok(html.includes(filename), `Photo not used on the website: ${filename}`);
}
for (let i=0;i<30;i++) {
 const quiz=createRound();
 assert.equal(quiz.length,5);
 assert.equal(new Set(quiz.map(q=>q.id)).size,5,'Duplicate questions within round');
}
console.log('✓ Static release checks passed: 6 portraits, 20 questions, 2-play cap, receipts and share controls.');
