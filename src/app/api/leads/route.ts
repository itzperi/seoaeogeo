import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_TYPE_OPTIONS,
  CONTACT_OPTIONS,
  LOCATION_OPTIONS,
  SERVICE_OPTIONS,
  TURNOVER_OPTIONS,
  URGENCY_OPTIONS,
  saveLead,
} from "@/lib/leads";

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

// Only accept a qualifying answer if it's one of the options the form offers.
function option(value: unknown, allowed: readonly string[]): string | null {
  return typeof value === "string" && allowed.includes(value) ? value : null;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = text(body.name, 200);
  const phone = text(body.phone, 40);
  if (!name || !phone || phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "Name and a valid phone number are required." }, { status: 400 });
  }

  const stored = await saveLead({
    name,
    phone,
    email: text(body.email, 200),
    service: option(body.service, SERVICE_OPTIONS),
    client_type: option(body.client_type, CLIENT_TYPE_OPTIONS),
    turnover: option(body.turnover, TURNOVER_OPTIONS),
    location: option(body.location, LOCATION_OPTIONS),
    urgency: option(body.urgency, URGENCY_OPTIONS),
    preferred_contact: option(body.preferred_contact, CONTACT_OPTIONS),
    message: text(body.message, 2000),
    source_page: text(body.source_page, 300),
    referrer: text(body.referrer, 500),
    utm_source: text(body.utm_source, 100),
    utm_medium: text(body.utm_medium, 100),
    utm_campaign: text(body.utm_campaign, 100),
  });

  if (!stored) {
    return NextResponse.json({ ok: false, error: "Could not save right now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
