import Link from "next/link";
import Image from "next/image";
import TrackedAnchor from "@/components/TrackedAnchor";
import { AREAS } from "@/lib/areas";
import { SERVICES, SPECIALIST_SERVICES } from "@/lib/services";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/videos", label: "Videos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const PILL =
  "inline-flex min-h-[40px] items-center rounded-full border border-carbon bg-white px-3 text-[12px] font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-sky-wash";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-carbon bg-white">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon bg-white">
            <Image src="/images/ca-india-badge.png" alt="CA India" width={36} height={36} className="h-9 w-9" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[22px] uppercase leading-none text-carbon" style={{ fontFamily: "var(--font-display)" }}>
              C S Rushil &amp; Co.
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate">Chartered Accountants</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          <div className="group relative">
            <button className={PILL} aria-haspopup="true">
              Services
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="grid w-[640px] grid-cols-2 gap-1 rounded-[20px] border border-carbon bg-white p-3">
                <p className="col-span-2 px-3 pb-1 pt-1 text-[11px] font-bold uppercase tracking-[0.06em] text-slate">Core services</p>
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="rounded-xl px-3 py-2 text-sm text-carbon hover:bg-sky-wash"
                  >
                    {service.name}
                  </Link>
                ))}
                <p className="col-span-2 mt-2 border-t border-carbon px-3 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.06em] text-slate">
                  NRIs &amp; overseas businesses
                </p>
                {SPECIALIST_SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="rounded-xl px-3 py-2 text-sm text-carbon hover:bg-lavender"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className={PILL} aria-haspopup="true">
              Locations
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="w-56 rounded-[20px] border border-carbon bg-white p-2">
                {AREAS.map((area) => (
                  <Link key={area.slug} href={`/${area.slug}`} className="block rounded-xl px-3 py-2 text-sm text-carbon hover:bg-sky-wash">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={PILL}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href={`tel:${PHONE_TEL}`} className={`${PILL} hidden 2xl:inline-flex`}>
            {PHONE_DISPLAY}
          </a>
          <TrackedAnchor
            action="book"
            placement="header"
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] items-center rounded-full border border-carbon bg-carbon px-5 text-[13px] font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85 lg:inline-flex"
          >
            Book Free Consultation
          </TrackedAnchor>
          <MobileNav services={SERVICES} />
        </div>
      </div>
    </header>
  );
}
