import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { ADDRESS_FULL, EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIALS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-[var(--color-navy-950)] text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-lg">C S Rushil &amp; Co.</p>
          <p className="mt-3 text-sm text-white/70">
            Chartered Accountants based in Vadapalani, Chennai, serving businesses
            across audit, tax, GST, and company compliance.
          </p>
          <div className="mt-4 flex gap-3 text-sm text-white/70">
            <a href={SOCIALS.linkedin} className="hover:text-white">LinkedIn</a>
            <a href={SOCIALS.instagram} className="hover:text-white">Instagram</a>
            <a href={SOCIALS.calendly} className="hover:text-white">Book a call</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-gold-400">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-gold-400">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Insights</Link></li>
            <li><Link href="/career" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-gold-400">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{ADDRESS_FULL}</li>
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} C S Rushil &amp; Co. All rights reserved.</p>
          <p>Chartered Accountants · Vadapalani, Chennai</p>
        </div>
      </div>
    </footer>
  );
}
