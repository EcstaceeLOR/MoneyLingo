/**
 * Browser-local play cap: one initial challenge + two replays.
 * This prevents casual replay on one browser. It does NOT identify a person
 * across devices or prevent clearing storage; that requires an authenticated backend.
 */
export const MAX_REPLAYS = 2;
export const MAX_ATTEMPTS = MAX_REPLAYS + 1;
export const ATTEMPT_STORAGE_KEY = "moneyLingo.playAttempts.v1";

export function getAttemptCount(storage) {
  try {
    const raw = storage.getItem(ATTEMPT_STORAGE_KEY);
    if (raw === null) return 0;
    const count = Number(raw);
    return Number.isSafeInteger(count) && count >= 0
      ? Math.min(count, MAX_ATTEMPTS)
      : 0;
  } catch {
    return null; // Browser storage is unavailable.
  }
}

export function claimAttempt(storage) {
  const used = getAttemptCount(storage);
  if (used === null) return { allowed: false, reason: "storage", used: null, remaining: 0 };
  if (used >= MAX_ATTEMPTS) return { allowed: false, reason: "limit", used, remaining: 0 };
  try {
    storage.setItem(ATTEMPT_STORAGE_KEY, String(used + 1));
  } catch {
    return { allowed: false, reason: "storage", used: null, remaining: 0 };
  }
  return {
    allowed: true,
    used: used + 1,
    remaining: MAX_ATTEMPTS - used - 1,
  };
}
