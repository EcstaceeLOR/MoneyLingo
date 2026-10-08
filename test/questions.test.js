import assert from "node:assert/strict";
import test from "node:test";
import { QUESTION_BANK, createRound, calculateWinnings, shuffle } from "../src/questions.js";

test("bank has 20 distinct questions with valid choices", () => {
  assert.equal(QUESTION_BANK.length, 20);
  assert.equal(new Set(QUESTION_BANK.map(q => q.id)).size, 20);
  for (const q of QUESTION_BANK) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correct), q.id);
    assert.ok(q.question.length > 10, q.id);
  }
});

test("each round draws 5 different questions, never repeating within a round", () => {
  for (let i = 0; i < 100; i++) {
    const round = createRound();
    assert.equal(round.length, 5);
    assert.equal(new Set(round.map(q => q.id)).size, 5);
    for (const q of round) assert.ok(q.options.includes(q.correct));
  }
});

test("replays draw varying question sets over repeated rounds", () => {
  const signatures = Array.from({ length: 20 }, () =>
    createRound().map(q => q.id).join(",")
  );
  assert.ok(new Set(signatures).size > 1);
});

test("scores scale from 0 to 100% and virtual $0 to $1,000,000", () => {
  for (let n = 0; n <= 5; n++) {
    assert.deepEqual(calculateWinnings(n), {
      correct: n, percent: n * 20, dollars: n * 200000,
    });
  }
});

test("shuffle does not mutate question bank", () => {
  const original = QUESTION_BANK.map(q => q.id);
  shuffle(QUESTION_BANK);
  assert.deepEqual(QUESTION_BANK.map(q => q.id), original);
});
