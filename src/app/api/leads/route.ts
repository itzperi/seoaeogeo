import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.phone !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const saved = await saveLead({
    name: body.name.slice(0, 200),
    phone: body.phone.slice(0, 50),
    service: typeof body.service === "string" ? body.service.slice(0, 200) : "",
    urgency: typeof body.urgency === "string" ? body.urgency.slice(0, 200) : "",
    message: typeof body.message === "string" ? body.message.slice(0, 2000) : "",
  });

  return NextResponse.json({ ok: true, stored: saved });
}
