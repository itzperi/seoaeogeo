import Link from "next/link";
import Image from "next/image";
import TrackedAnchor from "@/components/TrackedAnchor";
import { HEADER_GROUPS } from "@/lib/nav";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import MobileNav from "./MobileNav";

// No display class here: each use adds its own (inline-flex / hidden …),
// otherwise "inline-flex" overrides "hidden" and the pill shows on phones.
const PILL =
  "min-h-[40px] items-center rounded-full border border-carbon bg-white px-3 text-[12px] font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-sky-wash";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-carbon bg-white">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon bg-white">
            <Image src="/images/ca-india-badge.webp" alt="CA India logo" width={39} height={36} className="h-9 w-auto" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[22px] uppercase leading-none text-carbon" style={{ fontFamily: "var(--font-display)" }}>
              C S Rushil &amp; Co.
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate">Chartered Accountants</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {HEADER_GROUPS.map((group, gi) => (
            <div key={group.label} className="group relative">
              <button className={`inline-flex ${PILL}`} aria-haspopup="true" aria-label={group.label}>
                {group.short}
              </button>
              <div
                className={`invisible absolute top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${gi >= HEADER_GROUPS.length - 2 ? "right-0" : "left-0"}`}
              >
                <div className="w-72 rounded-[20px] border border-carbon bg-white p-2">
                  <p className="px-3 pb-1 pt-1 text-[11px] font-bold uppercase tracking-[0.06em] text-slate">{group.label}</p>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-sm text-carbon hover:bg-sky-wash">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href={`tel:${PHONE_TEL}`} className={`hidden 2xl:inline-flex ${PILL}`}>
            {PHONE_DISPLAY}
          </a>
          <TrackedAnchor
            action="book"
            placement="header"
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] items-center rounded-full border border-carbon bg-carbon px-4 text-[12px] font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85 lg:inline-flex"
          >
            Book Consultation
          </TrackedAnchor>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
