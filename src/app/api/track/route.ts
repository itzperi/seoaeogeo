import { NextRequest, NextResponse } from "next/server";
import { insertRow } from "@/lib/supabase";

const ACTIONS = new Set(["call", "whatsapp", "book", "form_start", "form_submit"]);

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

  await insertRow("cta_clicks", {
    action,
    placement: typeof body.placement === "string" ? body.placement.slice(0, 50) : null,
    page: typeof body.page === "string" ? body.page.slice(0, 300) : null,
    device: body.device === "mobile" || body.device === "desktop" ? body.device : null,
  });
  return new NextResponse(null, { status: 204 });
}
