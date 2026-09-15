import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { JsonLd } from "@/lib/schema";
import {
  ADDRESS_FULL,
  BUSINESS_HOURS,
  EMAIL,
  GOOGLE_MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Chartered Accountants in Anna Nagar, Chennai",
  description:
    "Visit or call C S Rushil & Co. at our Anna Nagar, Chennai office. Phone, email, business hours, and map directions for our chartered accountancy firm.",
  alternates: { canonical: "/contact" },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        h1="Talk to a chartered accountant in Chennai"
        subhead="Call, email, or visit our Anna Nagar office — we typically respond within one business day."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Office address</h2>
              <p className="mt-2 text-sm text-slate">{ADDRESS_FULL}</p>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Phone &amp; email</h2>
              <p className="mt-2 text-sm">
                <a href={`tel:${PHONE_TEL}`} className="text-royal-violet hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <p className="mt-1 text-sm">
                <a href={`mailto:${EMAIL}`} className="text-royal-violet hover:underline">{EMAIL}</a>
              </p>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Business hours</h2>
              <ul className="mt-2 space-y-1 text-slate">
                {BUSINESS_HOURS.map((b) => (
                  <li key={b.days} className="flex justify-between gap-4 text-sm">
                    <span>{b.days}</span>
                    <span>{b.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-cards border border-ash shadow-[var(--shadow-card)]">
            <iframe
              title="C S Rushil & Co. office location"
              src={GOOGLE_MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
