import { NextResponse } from "next/server";

// Lead capture is retired. Visitors reach the firm by tapping "Enquire on
// WhatsApp", which opens a ready-typed message in WhatsApp; nothing is stored
// on the website. The endpoint stays so old cached pages get a clear answer.
export function POST() {
  return NextResponse.json({ ok: false, error: "Enquiries are sent on WhatsApp." }, { status: 410 });
}
