"use client";

import { useState } from "react";
import Link from "next/link";
import { AREAS_HUB, CATEGORY_HUBS, FLAGSHIP_LINKS, PRIMARY_AREA_LINKS } from "@/lib/nav";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon bg-white text-carbon"
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
        <div className="absolute inset-x-0 top-[72px] z-40 max-h-[calc(100vh-72px)] overflow-y-auto border-y border-carbon bg-white">
          <div className="container-page py-6">
            <p className="eyebrow text-xs text-slate">Flagship services</p>
            <ul className="mt-2 space-y-1">
              {FLAGSHIP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-obsidian hover:bg-fog"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-xs text-slate">Practice areas</p>
            <ul className="mt-2 space-y-1">
              {CATEGORY_HUBS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-xs text-slate">Locations</p>
            <ul className="mt-3 space-y-1">
              {[...PRIMARY_AREA_LINKS, AREAS_HUB].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-xs text-slate">Company</p>
            <ul className="mt-3 space-y-1">
              {[
                ["About", "/about-us"],
                ["Insights", "/blog"],
                ["Videos", "/videos"],
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
