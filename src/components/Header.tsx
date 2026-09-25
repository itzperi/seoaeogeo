import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ash bg-paper relative">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 flex-col leading-tight">
          <span className="text-xl font-semibold tracking-tight text-obsidian">
            C S Rushil &amp; Co.
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate">
            Chartered Accountants
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate">
          <div className="group relative">
            <button className="rounded-navpills px-4 py-2 hover:bg-fog hover:text-obsidian">
              Services
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-96 rounded-2xl border border-ash bg-paper p-2 shadow-[var(--shadow-card)]">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block rounded-lg px-4 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="rounded-navpills px-4 py-2 hover:bg-fog hover:text-obsidian">
              Locations
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-56 rounded-2xl border border-ash bg-paper p-2 shadow-[var(--shadow-card)]">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="block rounded-lg px-4 py-2.5 text-sm text-obsidian hover:bg-fog"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-navpills px-4 py-2 hover:bg-fog hover:text-obsidian"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline text-sm font-medium text-slate hover:text-obsidian"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="hidden lg:inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-button)] transition hover:opacity-90"
          >
            Get Free Quote
          </Link>
          <MobileNav services={SERVICES} />
        </div>
      </div>
    </header>
  );
}
