import Image from "next/image";
import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { ADDRESS_FULL, ADDRESS_SHORT, EMAIL, GOOGLE_MAPS_EMBED_SRC, PHONE_DISPLAY, PHONE_TEL, SOCIALS } from "@/lib/site";

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
          <Image
            src="/logo.png"
            alt="C S Rushil & Co. — Chartered Accountants, Chennai"
            width={140}
            height={122}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-sm text-slate">
            Chartered Accountants based in {ADDRESS_FULL}, serving businesses
            across audit, tax, GST, and company compliance.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Image
              src="/images/chartered-accountant-badge.png"
              alt="Chartered Accountancy practice"
              width={512}
              height={390}
              className="h-8 w-auto"
            />
          </div>
          <div className="mt-4 flex gap-3 text-sm text-slate">
            <a href={SOCIALS.linkedin} className="hover:text-obsidian">LinkedIn</a>
            <a href={SOCIALS.instagram} className="hover:text-obsidian">Instagram</a>
            <a href={SOCIALS.calendly} className="hover:text-obsidian">Book a call</a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-xs text-slate">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-obsidian">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs text-slate">Locations</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link href={`/${area.slug}`} className="hover:text-obsidian">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs text-slate">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li><Link href="/about-us" className="hover:text-obsidian">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-obsidian">Insights</Link></li>
            <li><Link href="/faq" className="hover:text-obsidian">FAQ</Link></li>
            <li><Link href="/career" className="hover:text-obsidian">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-obsidian">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs text-slate">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>{ADDRESS_FULL}</li>
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-obsidian">{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-obsidian">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ash">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>© {year} C S Rushil &amp; Co. All rights reserved.</p>
          <p>Chartered Accountants · {ADDRESS_SHORT}</p>
        </div>
      </div>
    </footer>
  );
}
