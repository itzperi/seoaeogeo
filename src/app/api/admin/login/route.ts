import { NextRequest, NextResponse } from "next/server";
import { checkCredentials, computeSessionToken, getSessionCookieConfig } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json().catch(() => ({ username: "", password: "" }));

  if (typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!checkCredentials(username, password)) {
    // Same generic response whether the username or password was wrong,
    // and no delay difference — avoids confirming which one was incorrect.
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = computeSessionToken();
  if (!token) {
    return NextResponse.json({ ok: false, error: "Admin credentials not configured" }, { status: 500 });
  }

  const res = NextResponse.json({ ok: true });
  const cookie = getSessionCookieConfig(token);
  res.cookies.set(cookie.name, cookie.value, cookie);
  return res;
}
