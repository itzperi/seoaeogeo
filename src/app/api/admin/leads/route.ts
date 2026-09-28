import { NextRequest, NextResponse } from "next/server";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { getLeads } from "@/lib/leads";

export async function GET(req: NextRequest) {
  const session = req.cookies.get(SESSION_COOKIE)?.value;
  if (!isValidSession(session)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const leads = await getLeads();
  // Newest first.
  leads.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
  return NextResponse.json({ ok: true, leads });
}
