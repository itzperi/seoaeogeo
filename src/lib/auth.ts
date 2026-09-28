import { createHmac, timingSafeEqual } from "crypto";

const SESSION_COOKIE = "admin_session";

// The session token is an HMAC of a fixed label using the admin password as
// the key — never the password itself, and never sent to or stored in the
// browser in a reversible form. Recomputing and comparing this on every
// request means no session store is needed, and rotating ADMIN_PASSWORD in
// Vercel's environment variables immediately invalidates every existing
// session.
function computeSessionToken(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return null;
  return createHmac("sha256", secret).update("admin-session").digest("hex");
}

export function checkCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUsername || !expectedPassword) return false;
  // Constant-time comparison so response timing can't leak how many
  // characters matched.
  const userMatch =
    username.length === expectedUsername.length &&
    timingSafeEqual(Buffer.from(username), Buffer.from(expectedUsername));
  const passMatch =
    password.length === expectedPassword.length &&
    timingSafeEqual(Buffer.from(password), Buffer.from(expectedPassword));
  return userMatch && passMatch;
}

export function getSessionCookieConfig(token: string) {
  return {
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "strict" as const,
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  };
}

export { SESSION_COOKIE, computeSessionToken };

export function isValidSession(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const expected = computeSessionToken();
  if (!expected) return false;
  const a = Buffer.from(cookieValue);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
