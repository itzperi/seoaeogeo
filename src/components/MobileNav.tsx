"use client";

import { useState } from "react";
import Link from "next/link";
import { AREAS } from "@/lib/areas";
import type { ServiceSummary } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

export default function MobileNav({ services }: { services: ServiceSummary[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-ash text-obsidian"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-ash bg-paper shadow-[var(--shadow-card)]">
          <div className="container-page py-6">
            <p className="eyebrow text-xs text-slate">Services</p>
            <ul className="mt-3 space-y-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-xs text-slate">Locations</p>
            <ul className="mt-3 space-y-1">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-xs text-slate">Company</p>
            <ul className="mt-3 space-y-1">
              {[
                ["About", "/about-us"],
                ["Insights", "/blog"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-6 block rounded-buttons bg-obsidian px-5 py-3 text-center text-sm font-medium text-white"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-buttons border border-ash px-5 py-3 text-center text-sm font-medium text-obsidian"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
