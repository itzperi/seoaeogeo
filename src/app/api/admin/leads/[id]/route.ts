import { NextRequest, NextResponse } from "next/server";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { LEAD_STATUSES, type LeadStatus, updateLeadStatus } from "@/lib/leads";

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!isValidSession(req.cookies.get(SESSION_COOKIE)?.value)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const status = body?.status as LeadStatus;
  if (!LEAD_STATUSES.includes(status) || !/^[0-9a-f-]{36}$/i.test(id)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const ok = await updateLeadStatus(id, status);
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
