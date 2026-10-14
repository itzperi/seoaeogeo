// Minimal Supabase REST (PostgREST) client — no SDK dependency.
//
// No code writes to this database any more: enquiries go to WhatsApp, and
// click events are not stored. The client only reads old leads for /admin,
// which needs the secret key. That key must only ever live in the
// SUPABASE_SECRET_KEY server env var (Vercel → Settings → Environment
// Variables), never in client code or the repo.

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "https://zorcyqcmkggptufxbnfi.supabase.co";

// Server-only secret: SUPABASE_SECRET_KEY (new-style sb_secret_… key), or
// SUPABASE_SERVICE_ROLE_KEY as added by the Vercel ↔ Supabase integration.
function secretKey() {
  return process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
}

function restUrl(path: string) {
  return `${SUPABASE_URL}/rest/v1/${path}`;
}

export function hasSecretKey() {
  return Boolean(secretKey());
}

// Server-only: uses the secret key. Returns null when the key isn't configured.
export async function adminRequest<T>(path: string, init: RequestInit = {}): Promise<T | null> {
  const secret = secretKey();
  if (!secret) return null;
  const res = await fetch(restUrl(path), {
    ...init,
    // Legacy service_role keys are JWTs and also need the Bearer header;
    // new sb_secret_ keys go in apikey only.
    headers: {
      apikey: secret,
      ...(secret.startsWith("sb_") ? {} : { Authorization: `Bearer ${secret}` }),
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    console.error(`Supabase admin request ${path} failed`, res.status, await res.text());
    return null;
  }
  const text = await res.text();
  // `Prefer: return=minimal` writes come back with an empty body.
  return (text ? JSON.parse(text) : {}) as T;
}
