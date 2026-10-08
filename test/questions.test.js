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

import {
  claimAttempt, getAttemptCount, MAX_ATTEMPTS, MAX_REPLAYS, ATTEMPT_STORAGE_KEY,
} from "../src/attempts.js";

function fakeStorage() {
  const map = new Map();
  return {
    getItem: key => map.has(key) ? map.get(key) : null,
    setItem: (key, value) => map.set(key, value),
  };
}

test("one first round and exactly two replays are permitted", () => {
  const storage = fakeStorage();
  assert.equal(MAX_ATTEMPTS, 3);
  assert.equal(MAX_REPLAYS, 2);
  assert.equal(getAttemptCount(storage), 0);
  assert.deepEqual([claimAttempt(storage), claimAttempt(storage), claimAttempt(storage)].map(x => x.allowed), [true, true, true]);
  assert.equal(getAttemptCount(storage), 3);
  assert.equal(claimAttempt(storage).allowed, false);
  assert.equal(claimAttempt(storage).reason, "limit");
});

test("attempt count persists across storage readers (reload behavior)", () => {
  const storage = fakeStorage();
  claimAttempt(storage);
  assert.equal(storage.getItem(ATTEMPT_STORAGE_KEY), "1");
  assert.equal(getAttemptCount(storage), 1);
  claimAttempt(storage);
  assert.equal(storage.getItem(ATTEMPT_STORAGE_KEY), "2");
});

test("storage errors must not silently grant unlimited replays", () => {
  const storage = {
    getItem() { throw new Error("private mode"); },
    setItem() { throw new Error("private mode"); },
  };
  assert.equal(getAttemptCount(storage), null);
  assert.deepEqual(claimAttempt(storage), {
    allowed: false, reason: "storage", used: null, remaining: 0,
  });
});
