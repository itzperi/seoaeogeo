import Link from "next/link";
import FooterLogoGesture from "./FooterLogoGesture";
import TrackedAnchor from "./TrackedAnchor";
import { AREAS_HUB, COMPANY_LINKS, FOOTER_CORE_LINKS, PRIMARY_AREA_LINKS } from "@/lib/nav";
import { ADDRESS_FULL, ADDRESS_SHORT, BOOKING_LINK, EMAIL, FIRM_REGISTRATION_NO, GBP_URL, GOOGLE_MAPS_EMBED_SRC, ICAI_MEMBERSHIP_NO, PHONE_DISPLAY, PHONE_TEL, SOCIALS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-ash bg-paper text-obsidian">
      <div className="container-page pt-10">
        <div className="overflow-hidden rounded-cards border border-ash">
          <iframe
            title="C S Rushil & Co. office location"
            src={GOOGLE_MAPS_EMBED_SRC}
            width="100%"
            height="220"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-lg font-semibold tracking-tight text-obsidian">
            C S Rushil &amp; Co.
          </p>
          <p className="mt-3 text-sm text-slate">
            Chartered Accountants based in {ADDRESS_FULL}, serving businesses
            across audit, tax, GST, and company compliance.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <FooterLogoGesture />
          </div>
          <div className="mt-4 flex gap-3 text-sm text-slate">
            <a href={SOCIALS.linkedin} className="hover:text-obsidian">LinkedIn</a>
            <a href={SOCIALS.instagram} className="hover:text-obsidian">Instagram</a>
            <TrackedAnchor action="book" placement="footer" href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-obsidian">Book a 15-minute consultation</TrackedAnchor>
          </div>
        </div>

        <nav aria-label="Core practice areas" className="lg:col-span-2">
          <p className="eyebrow text-xs text-slate">Core practice areas</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {FOOTER_CORE_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link href={link.href} className={`hover:text-obsidian ${i < 4 ? "font-medium text-obsidian" : ""}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Chennai locations">
          <p className="eyebrow text-xs text-slate">Chennai hubs</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {PRIMARY_AREA_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-obsidian">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={AREAS_HUB.href} className="font-medium text-obsidian hover:underline">
                {AREAS_HUB.label} →
              </Link>
            </li>
          </ul>
          <p className="eyebrow mt-8 text-xs text-slate">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-obsidian">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-xs text-slate">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>{ADDRESS_FULL}</li>
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-obsidian">{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-obsidian">{EMAIL}</a></li>
            <li><a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-obsidian">Find us on Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ash">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>© {year} C S Rushil &amp; Co. All rights reserved.</p>
          <p>
            Chartered Accountants · {ADDRESS_SHORT}
            {FIRM_REGISTRATION_NO && <> · ICAI FRN {FIRM_REGISTRATION_NO}</>}
            {ICAI_MEMBERSHIP_NO && <> · M. No. {ICAI_MEMBERSHIP_NO}</>}
          </p>
        </div>
      </div>
    </footer>
  );
}
