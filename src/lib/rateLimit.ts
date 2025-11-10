// src/lib/rateLimit.ts
const buckets = new Map<string, { count: number; resetAt: number }>();
const WINDOW = 60_000;
const LIMIT = Number(process.env.RATE_LIMIT_PER_MINUTE || 30);
export async function rateLimiter(key: string) {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW });
    return;
  }
  if (b.count >= LIMIT) throw new Error("RATE_LIMIT_EXCEEDED");
  b.count++;
}