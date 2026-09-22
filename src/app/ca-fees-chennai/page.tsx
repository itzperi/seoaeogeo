import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema, speakableSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/ca-fees-chennai`;

export const metadata: Metadata = {
  title: "CA Fees in Chennai | Indicative Pricing Guide",
  description:
    "Indicative CA fees in Chennai for company registration, GST, income tax filing, and audit services — a transparent starting-point pricing guide from C S Rushil & Co.",
  alternates: { canonical: "/ca-fees-chennai" },
  openGraph: {
    title: "CA Fees in Chennai — Indicative Pricing Guide",
    description: "A transparent starting-point pricing guide for common CA services in Chennai.",
    url: "/ca-fees-chennai",
  },
};

const PRICING = [
  { service: "Private Limited Company Registration", range: "Starting from ₹6,000 – ₹15,000 professional fees (plus government/MCA fees, which vary by authorised capital)" },
  { service: "LLP Registration", range: "Starting from ₹5,000 – ₹12,000 professional fees (plus government fees)" },
  { service: "GST Registration", range: "Starting from ₹1,500 – ₹4,000 for a straightforward single-state registration" },
  { service: "GST Return Filing (monthly, per return)", range: "Starting from ₹500 – ₹2,000 depending on transaction volume" },
  { service: "Income Tax Return Filing — Salaried Individual", range: "Starting from ₹1,000 – ₹3,000" },
  { service: "Income Tax Return Filing — Business/Professional", range: "Starting from ₹3,000 – ₹10,000 depending on complexity" },
  { service: "Statutory Audit (small/mid-size company)", range: "Starting from ₹15,000, scaled to turnover and complexity" },
  { service: "MSME / Udyam Registration", range: "Often nominal to low-cost given the largely self-declaration-based process" },
];

const FAQS = [
  {
    question: "Are these the exact fees you charge?",
    answer:
      "No — these are indicative starting ranges based on typical CA service pricing in Chennai, meant to help you budget before reaching out. Your actual fee depends on transaction volume, entity complexity, and the specific scope of work. We provide a fixed, written quote after a free initial consultation, before any engagement begins.",
  },
  {
    question: "Why do CA fees vary so much between firms?",
    answer:
      "Fees depend on experience, turnaround time, the depth of advisory involved (not just filing), and firm size. A lower quote isn't always lower total cost if it excludes the compliance follow-through needed to avoid penalties and notices later.",
  },
  {
    question: "Do you charge separately for government/statutory fees?",
    answer:
      "Yes. Professional fees (our service charge) are always separate from government fees (MCA filing fees, stamp duty, GST portal charges), which are fixed by the relevant authority and payable regardless of which CA you engage.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes — we review your situation, confirm the exact scope of work needed, and provide a fixed quote before you commit to anything.",
  },
  {
    question: "Do you offer package pricing for startups needing multiple services together?",
    answer:
      "Yes, incorporation, GST registration, and the first year of compliance are often bundled at a combined rate — ask for a package quote during your consultation.",
  },
];

export default function CaFeesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "CA Fees & Pricing Guide",
          description:
            "Indicative pricing guide for company registration, GST, income tax, and audit services offered by a Chennai chartered accountancy firm.",
          url: PAGE_URL,
          serviceType: "Pricing Guide",
        })}
      />
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[{ name: "CA Fees & Pricing", href: "/ca-fees-chennai" }]} />
      <PageHero
        eyebrow="Pricing · Chennai"
        h1="CA Fees in Chennai — An Indicative Pricing Guide"
        subhead="Transparent, starting-point pricing for the services people search for most — company registration, GST, income tax, and audit — so you can budget before you reach out."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">How much do CA services cost in Chennai?</h2>
          <p id="direct-answer" className="mt-4 max-w-2xl leading-relaxed text-slate">
            These are general starting ranges for the Chennai market, not a
            fixed quote — your exact fee depends on your specific
            transaction volume and complexity. We confirm a fixed, written
            quote after a free initial consultation, before any work begins.
          </p>

          <div className="mt-10 overflow-x-auto rounded-cards border border-ash">
            <table className="w-full text-left text-sm">
              <thead className="bg-fog text-obsidian">
                <tr>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Indicative range</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row, i) => (
                  <tr
                    key={row.service}
                    className={i % 2 === 0 ? "bg-paper" : "bg-fog/50"}
                  >
                    <td className="border-t border-ash px-6 py-4 text-obsidian">{row.service}</td>
                    <td className="border-t border-ash px-6 py-4 text-slate">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">People also ask</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/company-registration-chennai" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                What&apos;s included in the company registration fee?
              </Link>
            </li>
            <li>
              <Link href="/gst-registration-chennai" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                How much does GST registration cost?
              </Link>
            </li>
            <li>
              <Link href="/statutory-audit-chennai" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                What determines the statutory audit fee for my company?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
