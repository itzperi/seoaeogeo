import { NextRequest, NextResponse } from "next/server";

const ACTIONS = new Set(["call", "whatsapp", "book", "form_start", "form_submit", "enquiry_open"]);

// Click events are validated and acknowledged, but not stored. Enquiries
// happen in WhatsApp, so the website keeps no record of visitors' interest.
export async function POST(req: NextRequest) {
  // sendBeacon posts text/plain, so parse the raw body ourselves.
  const raw = await req.text().catch(() => "");
  let body: Record<string, unknown> = {};
  try {
    body = JSON.parse(raw);
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const action = typeof body.action === "string" ? body.action : "";
  if (!ACTIONS.has(action)) return new NextResponse(null, { status: 400 });
  return new NextResponse(null, { status: 204 });
}
