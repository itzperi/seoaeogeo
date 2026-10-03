import { NextRequest, NextResponse } from "next/server";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { getLeads } from "@/lib/leads";

export async function GET(req: NextRequest) {
  const session = req.cookies.get(SESSION_COOKIE)?.value;
  if (!isValidSession(session)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const leads = await getLeads();
  if (leads === null) {
    return NextResponse.json({ ok: false, error: "SUPABASE_SECRET_KEY is not configured." }, { status: 503 });
  }
  return NextResponse.json({ ok: true, leads });
}
