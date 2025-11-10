// 简单内存 rate-limit（生产应换 Redis）
const buckets = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const LIMIT = Number(process.env.RATE_LIMIT_PER_MINUTE || 30);

export async function rateLimiter(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }
  if (bucket.count >= LIMIT) {
    throw new Error("RATE_LIMIT_EXCEEDED");
  }
  bucket.count++;
}
