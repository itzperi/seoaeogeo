import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const NAV_LINKS = [
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/career", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ash)] bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-medium text-[var(--color-navy-900)]">
            C S Rushil &amp; Co.
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.14em] text-[var(--color-slate)] border-l border-[var(--color-ash)] pl-2">
            Chartered Accountants
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[var(--color-slate)]">
          <div className="group relative">
            <button className="rounded-full px-4 py-2 hover:bg-[var(--color-mist)] hover:text-[var(--color-navy-900)]">
              Services
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-96 rounded-2xl border border-[var(--color-ash)] bg-[var(--color-paper)] p-2 shadow-[var(--shadow-elevated)]">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block rounded-xl px-4 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-mist)]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 hover:bg-[var(--color-mist)] hover:text-[var(--color-navy-900)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline text-sm font-medium text-[var(--color-navy-900)]"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="rounded-[var(--radius-button)] bg-[var(--color-navy-900)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-navy-800)]"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
