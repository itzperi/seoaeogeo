import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
import EnquiryCard from "@/components/EnquiryCard";
import FAQSection from "@/components/FAQSection";
import { JsonLd } from "@/lib/schema";
import {
  ADDRESS,
  ADDRESS_FULL,
  PLUS_CODE,
  BOOKING_EMBED_SRC,
  BUSINESS_HOURS,
  EMAIL,
  GOOGLE_MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_LINK,
} from "@/lib/site";

const TITLE = "Contact a Chartered Accountant in Anna Nagar, Chennai";
const DESCRIPTION =
  "Contact C S Rushil & Co. at J-Block, Anna Nagar, Chennai. See hours, directions, how consultations work by location, and what to bring to your 15-minute call.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/contact" },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

const LINK = "text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

const LOCATION_ROWS: string[][] = [
  [
    "Chennai",
    "In person at the Anna Nagar office, or by video call",
    "Bring original documents if you meet in person; for video calls, share scans or photos in advance.",
  ],
  [
    "Rest of Tamil Nadu",
    "Online, by video call, phone or WhatsApp",
    "We are based only in Chennai, so clients in other cities are served online. Documents are shared digitally.",
  ],
  [
    "United States, United Kingdom, UAE, Singapore and the Gulf",
    "By video call in overlapping working hours",
    "We advise on Indian law only. Your home-country adviser handles tax and filings in your country of residence.",
  ],
];

const CHECKLISTS: { title: string; items: string[] }[] = [
  {
    title: "Company registration",
    items: [
      "PAN and Aadhaar of each proposed director or partner",
      "Passport-size photographs and a recent address proof for each person",
      "Proof of the registered office address, with the owner's consent where it is rented",
      "Two or three preferred company names and a short description of the business",
    ],
  },
  {
    title: "GST notice",
    items: [
      "The notice itself, with the reference number and the date it was issued",
      "Your GSTIN and the return periods the notice mentions",
      "Sales and purchase registers for those periods",
      "Any earlier replies, order copies or correspondence with the department",
    ],
  },
  {
    title: "Income tax notice",
    items: [
      "The notice or intimation, with its document number and the due date for response",
      "Your PAN and the acknowledgement of the return filed for the year concerned",
      "Form 26AS and the Annual Information Statement for that year",
      "Bank statements and proof for the income or deduction questioned",
    ],
  },
  {
    title: "NRI tax matters",
    items: [
      "Passport pages showing your travel dates, to work out your residential status",
      "Your Indian PAN and details of Indian bank accounts, property or investments",
      "Details of any sale agreement, rent or interest income in India",
      "Any tax residency certificate you hold from your country of residence",
    ],
  },
  {
    title: "Subsidiary set-up in India",
    items: [
      "Incorporation documents of the overseas parent company",
      "Identity and address documents of the proposed directors and shareholders",
      "A short note on the business activity, the expected funding and who will run operations in India",
      "Your home-country adviser's contact details, for coordination on foreign tax matters",
    ],
  },
  {
    title: "Virtual CFO support",
    items: [
      "The latest financial statements and the current year's books",
      "Recent bank statements and a list of loans or other obligations",
      "Any MIS report, budget or forecast you use today",
      "A list of the decisions you want better numbers for, such as pricing, hiring or funding",
    ],
  },
];

const FAQS = [
  {
    question: "Where is the C S Rushil & Co. office?",
    answer:
      "The office is at Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Road, Anna Nagar, Chennai 600040. The Plus Code is 35PX+9V Chennai, Tamil Nadu, and the map on this page shows the exact pin so you can navigate to it directly.",
  },
  {
    question: "What are your office hours?",
    answer:
      "The office is open Monday to Saturday, 9:30 AM to 6:30 PM, and closed on Sunday. You can still send a WhatsApp message or email at any time, and the team will pick it up on the next working day. Video consultations are scheduled within these hours.",
  },
  {
    question: "Can I consult you if I live outside Chennai?",
    answer:
      "Yes. We are based only in Chennai, and clients elsewhere in Tamil Nadu and in other parts of India are served online by video call, phone and WhatsApp. Documents are shared digitally, and the work is carried out in the same way as for clients who visit.",
  },
  {
    question: "Do you serve clients abroad?",
    answer:
      "Yes, by video call in hours that overlap with the US, the UK, the UAE, Singapore and the Gulf. We advise on Indian law only, so for tax in your country of residence your home adviser remains responsible, and we coordinate with them where the matter needs it.",
  },
  {
    question: "What happens in the 15-minute consultation?",
    answer:
      "You explain your situation, we ask the questions needed to understand it, and we tell you which service fits and what documents would be needed. It is a first conversation, not a full review. Bring the documents listed for your service category to make the time count.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "Use the booking calendar on this page to pick a slot, or call or WhatsApp the office. If you prefer to write first, choose a topic in the enquiry panel and WhatsApp opens with your message prepared, or email us and describe your situation in a few lines.",
  },
];

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        h1="Talk to a chartered accountant in Chennai"
        subhead="Call, email, WhatsApp or visit our Anna Nagar office, or book a 15-minute consultation online."
        lead={
          <>
            C S Rushil &amp; Co. is a chartered accountancy firm at J-Block, Anna Nagar, Chennai, open Monday to Saturday,
            9:30 AM to 6:30 PM. Call, WhatsApp, email or book a 15-minute consultation online. Chennai clients can meet
            in person or by video, and clients elsewhere in Tamil Nadu and abroad are served online.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">How can you book a consultation directly?</h2>
          <p className="mt-3 max-w-2xl text-slate">
            Pick a time that works for you. This books directly onto our calendar, with no back-and-forth over email.
          </p>
          <div className="mt-6 overflow-hidden rounded-cards border border-ash shadow-[var(--shadow-card)]">
            <iframe
              title="Book a consultation with C S Rushil & Co."
              src={BOOKING_EMBED_SRC}
              width="100%"
              height="720"
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
            <h2 className="text-2xl text-obsidian">Prefer to message us first?</h2>
            <p className="mt-3 text-slate">
              Pick a topic and WhatsApp opens with your message ready. No forms, no waiting for a call-back slot.
            </p>
            <div className="mt-6">
              <EnquiryCard placement="contact-page" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">How can you talk to us right now?</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`tel:${PHONE_TEL}`} className="rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90">
                  Call {PHONE_DISPLAY}
                </a>{" "}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-buttons border border-ash px-5 py-3 text-sm font-medium text-obsidian hover:bg-fog">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">Where is our office address?</h2>
              <p className="mt-2 text-sm text-slate">{ADDRESS_FULL}</p>
              <p className="mt-1 text-sm text-slate">Plus code: {PLUS_CODE}</p>
              <p className="mt-2 text-sm">
                <a href={`mailto:${EMAIL}`} className="text-royal-violet hover:underline">{EMAIL}</a>
              </p>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-medium text-obsidian">When is the office open?</h2>
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

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">How do you reach the Anna Nagar office?</h2>
          <p className={P}>
            The office is in J-Block, {ADDRESS.locality}, Chennai, on 1st Street, 13th Main Road.
          </p>
          <p className={P}>
            Our full address is {ADDRESS_FULL}. If you are using a map app, search for the Plus Code {PLUS_CODE} or
            for C S Rushil &amp; Co., and use the embedded map above to see the pin. When you arrive, look for J-Block
            and 1st Street on 13th Main Road. If you are coming for a first meeting, it helps to book a slot
            on the calendar above or call ahead on{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK}>{PHONE_DISPLAY}</a>, so that the right person is available
            when you walk in. You can also reach the team by email at{" "}
            <a href={`mailto:${EMAIL}`} className={LINK}>{EMAIL}</a>.
          </p>
          <p className={P}>
            We also have a page on{" "}
            <Link href="/chartered-accountant-anna-nagar-chennai" className={LINK}>chartered accountant services in Anna Nagar</Link>{" "}
            if you want to see what we do for businesses and individuals in the neighbourhood.
          </p>

          <h2 className={H2}>When can you visit or call the office?</h2>
          <p className={P}>
            The office is open Monday to Saturday, {BUSINESS_HOURS[0].hours}, and closed on Sunday.
          </p>
          <p className={P}>
            Calls, in-person visits and video consultations are scheduled inside these hours. Messages sent on WhatsApp
            or email outside them are read on the next working day. If your matter involves a notice with a due date,
            tell us the date when you write, so that it can be looked at first.
          </p>

          <h2 className={H2}>How do consultations work if you are in another city or country?</h2>
          <p className={P}>
            Consultations are in person or by video in Chennai, online elsewhere in Tamil Nadu, and by video in
            overlapping hours for clients in the US, UK, UAE, Singapore and the Gulf.
          </p>
          <Table head={["Where you are", "How we consult", "What to expect"]} rows={LOCATION_ROWS} />
          <p className={P}>
            Our only office is in Anna Nagar, Chennai. Everyone else is served online, and the quality of the advice
            does not depend on where you sit. For cross-border situations, read our pages for{" "}
            <Link href="/nri-tax-services" className={LINK}>NRI tax services</Link>,{" "}
            <Link href="/india-subsidiary-compliance-cfo" className={LINK}>India subsidiary compliance</Link>, and the
            subsidiary guides for{" "}
            <Link href="/india-subsidiary-for-us-companies" className={LINK}>US</Link>,{" "}
            <Link href="/india-subsidiary-for-uk-companies" className={LINK}>UK</Link>,{" "}
            <Link href="/india-subsidiary-for-uae-companies" className={LINK}>UAE</Link> and{" "}
            <Link href="/india-subsidiary-for-singapore-companies" className={LINK}>Singapore</Link> companies.
          </p>

          <h2 className={H2}>What should you bring to your 15-minute consultation?</h2>
          <p className={P}>
            Bring the documents listed for your service category, and if you do not have them yet, come anyway and we
            will tell you what to collect.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {CHECKLISTS.map((c) => (
              <div key={c.title} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-base font-semibold text-obsidian">{c.title}</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className={H2}>Which service page matches your question?</h2>
          <p className={P}>
            If you want to read before you call, start with the page that matches your situation.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate">
            <li>
              Starting a business: <Link href="/company-registration-chennai" className={LINK}>company registration in Chennai</Link>{" "}
              and <Link href="/private-limited-company-incorporation-chennai" className={LINK}>private limited company incorporation</Link>.
            </li>
            <li>
              GST: <Link href="/goods-and-services-tax" className={LINK}>GST services</Link>,{" "}
              <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link> and{" "}
              <Link href="/gst-litigation-chennai" className={LINK}>GST litigation</Link>.
            </li>
            <li>
              Income tax: <Link href="/direct-tax" className={LINK}>direct tax</Link> and{" "}
              <Link href="/income-tax-notice-reply-chennai" className={LINK}>income tax notice reply</Link>.
            </li>
            <li>
              Overseas clients: <Link href="/nri-tax-services" className={LINK}>NRI tax services</Link> and{" "}
              <Link href="/fema-rbi-compliance" className={LINK}>FEMA and RBI compliance</Link>.
            </li>
            <li>
              Finance leadership: <Link href="/virtual-cfo-services" className={LINK}>virtual CFO services</Link> and{" "}
              <Link href="/audit-and-assurance" className={LINK}>audit and assurance</Link>.
            </li>
          </ul>
          <p className={P}>
            You can also read <Link href="/how-we-work" className={LINK}>how we work</Link>, meet the team on the{" "}
            <Link href="/about-us" className={LINK}>about us</Link> page, or see{" "}
            <Link href="/career" className={LINK}>careers at the firm</Link> if you are looking to join us.
          </p>
        </div>
      </section>

      <FAQSection items={FAQS} />
    </>
  );
}
