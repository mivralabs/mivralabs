// Simple in-memory limiter: 5 requests per IP per 10 minutes.
// Serverless instances do not share memory, so this is best-effort. For stronger limits use Upstash Redis or Vercel's WAF rate limiting.
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

export function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= MAX) { hits.set(ip, recent); return true; }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) { for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW)) hits.delete(k); }
  return false;
}
