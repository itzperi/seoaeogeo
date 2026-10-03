import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
import QualifyForm from "@/components/QualifyForm";
import { JsonLd } from "@/lib/schema";
import {
  ADDRESS_FULL,
  BOOKING_EMBED_SRC,
  BUSINESS_HOURS,
  EMAIL,
  GOOGLE_MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_LINK,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Anna Nagar, Chennai",
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
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">Book a free consultation directly</h2>
          <p className="mt-3 max-w-2xl text-slate">
            Pick a time that works for you — this books directly onto our calendar, no back-and-forth over email.
          </p>
          <div className="mt-6 overflow-hidden rounded-cards border border-ash shadow-[var(--shadow-card)]">
            <iframe
              title="Book a free consultation with C S Rushil & Co."
              src={BOOKING_EMBED_SRC}
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <GoogleReviews heading="Clients who worked with us" />

      <section className="bg-fog py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-obsidian">Prefer to tell us what you need first?</h2>
            <p className="mt-3 text-slate">
              Answer a few quick questions and we&apos;ll reach out to you — no need to pick a time slot upfront.
            </p>
            <div className="mt-6">
              <QualifyForm placement="contact-page" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Talk to us right now</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`tel:${PHONE_TEL}`} className="rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90">
                  Call {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-buttons border border-ash px-5 py-3 text-sm font-medium text-obsidian hover:bg-fog">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Office address</h2>
              <p className="mt-2 text-sm text-slate">{ADDRESS_FULL}</p>
              <p className="mt-2 text-sm">
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
            <div className="overflow-hidden rounded-cards border border-ash shadow-[var(--shadow-card)]">
              <iframe
                title="C S Rushil & Co. office location"
                src={GOOGLE_MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
