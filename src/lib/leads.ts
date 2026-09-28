import { Redis } from "@upstash/redis";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  service: string;
  urgency: string;
  message: string;
  submittedAt: string;
};

const LEADS_KEY = "leads";

function getRedis() {
  // Populated automatically once an Upstash Redis integration is connected
  // to the Vercel project (Storage tab / Marketplace) — no manual copying
  // of credentials needed.
  if (!process.env.KV_REST_API_URL && !process.env.UPSTASH_REDIS_REST_URL) {
    return null;
  }
  return Redis.fromEnv();
}

export async function saveLead(lead: Omit<Lead, "id" | "submittedAt">): Promise<boolean> {
  const redis = getRedis();
  if (!redis) return false;
  const record: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  await redis.lpush(LEADS_KEY, JSON.stringify(record));
  return true;
}

export async function getLeads(): Promise<Lead[]> {
  const redis = getRedis();
  if (!redis) return [];
  const raw = await redis.lrange(LEADS_KEY, 0, -1);
  return raw.map((item) => (typeof item === "string" ? JSON.parse(item) : item)) as Lead[];
}
