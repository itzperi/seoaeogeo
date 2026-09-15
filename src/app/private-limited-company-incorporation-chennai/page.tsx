import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/private-limited-company-incorporation-chennai`;

export const metadata: Metadata = {
  title: "Private Limited Company Incorporation in Chennai | C S Rushil & Co.",
  description:
    "Register your Private Limited Company in Chennai with SPICe+ filing, DIN/DSC, MoA/AoA drafting, and post-incorporation compliance — handled end-to-end by C S Rushil & Co.",
  alternates: { canonical: "/private-limited-company-incorporation-chennai" },
};

const FAQS = [
  {
    question: "How long does private limited company incorporation take in Chennai?",
    answer:
      "With documents in order, SPICe+ incorporation typically takes 7–12 working days, covering DSC/DIN issuance, name approval, and Certificate of Incorporation from the MCA. Delays usually come from name-availability rejections or incomplete KYC documents, both of which we vet before filing.",
  },
  {
    question: "What is the minimum capital and number of directors required?",
    answer:
      "A Private Limited Company needs a minimum of 2 directors and 2 shareholders (they can be the same people), and there is no statutory minimum paid-up capital — you can start with as little as ₹1. At least one director must be an Indian resident.",
  },
  {
    question: "What documents are required for Pvt Ltd registration?",
    answer:
      "PAN and Aadhaar of all directors/shareholders, a recent passport-size photo, proof of registered office (rent agreement/EB bill/NOC from owner), and digital signatures (DSC) for the proposed directors. We provide a checklist tailored to resident vs. NRI/foreign directors.",
  },
  {
    question: "What is the difference between government fees and professional fees?",
    answer:
      "Government fees (MCA filing fees, stamp duty on authorised capital, DIN/DSC charges) are fixed by statute and paid directly to the government. Professional fees cover our drafting, filing, and advisory work. We separate both clearly in every quote — no bundled or hidden charges.",
  },
  {
    question: "What compliance is required after incorporation?",
    answer:
      "Within 180 days you must file a Commencement of Business declaration (INC-20A), open a current bank account, appoint an auditor within 30 days, and maintain statutory registers. We offer a post-incorporation compliance package covering all of this.",
  },
  {
    question: "Can a Private Limited Company be converted from an existing proprietorship or partnership?",
    answer:
      "Yes. We handle conversion of proprietorships and partnership firms into Private Limited Companies, including asset transfer, ROC filings, and re-registration of licenses (GST, MSME, bank accounts) in the new entity's name.",
  },
];

const STEPS = [
  { name: "Digital Signature Certificate (DSC)", text: "We obtain Class 3 DSCs for all proposed directors — required to sign electronic MCA forms." },
  { name: "Name reservation", text: "We check name availability against the MCA and trademark database and reserve your company name via Part A of SPICe+." },
  { name: "Drafting MoA & AoA", text: "We draft the Memorandum and Articles of Association defining your company's objects, share structure, and internal rules." },
  { name: "SPICe+ filing", text: "We file the integrated SPICe+ (Part B) form with the Registrar of Companies, covering incorporation, PAN, TAN, EPFO, ESIC, and profession tax registration in one submission." },
  { name: "Certificate of Incorporation", text: "On approval, the ROC issues the Certificate of Incorporation along with your Corporate Identification Number (CIN), PAN, and TAN." },
  { name: "Post-incorporation compliance", text: "We assist with opening your current bank account, filing INC-20A (commencement of business), and appointing your first statutory auditor within 30 days." },
];

const COMPARISON = [
  { type: "Private Limited Company", liability: "Limited", compliance: "High", ownership: "Shares (max 200 shareholders)", bestFor: "Startups raising funding, scaling businesses" },
  { type: "LLP", liability: "Limited", compliance: "Moderate", ownership: "Partners (no share capital)", bestFor: "Professional services, low-compliance partnerships" },
  { type: "One Person Company (OPC)", liability: "Limited", compliance: "Moderate", ownership: "Single shareholder", bestFor: "Solo founders wanting limited liability" },
  { type: "Sole Proprietorship", liability: "Unlimited", compliance: "Low", ownership: "Single owner", bestFor: "Small, low-risk local businesses" },
];

export default function IncorporationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Private Limited Company Incorporation in Chennai",
          description:
            "End-to-end SPICe+ incorporation of Private Limited Companies for businesses in Chennai, including DSC, DIN, name approval, and post-incorporation compliance.",
          url: PAGE_URL,
          serviceType: "Business Incorporation",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How to incorporate a Private Limited Company in Chennai",
          description: "Step-by-step process for registering a Private Limited Company through the MCA's SPICe+ form.",
          steps: STEPS,
        })}
      />
      <Breadcrumbs items={[{ name: "Private Limited Company Incorporation", href: "/private-limited-company-incorporation-chennai" }]} />
      <PageHero
        eyebrow="Company Registration · Chennai"
        h1="Private Limited Company Incorporation in Chennai"
        subhead="End-to-end SPICe+ incorporation — DSC, DIN, name approval, MoA/AoA drafting, and post-incorporation compliance — managed by a Chennai-based chartered accountancy firm."
      />

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                What is Private Limited Company Incorporation?
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
                Private Limited Company incorporation is the legal process of registering
                a business as a distinct corporate entity under the Companies Act, 2013,
                through the Ministry of Corporate Affairs (MCA). It gives the business a
                separate legal identity from its owners, limits shareholder liability to
                their share capital, and is the structure most banks, investors, and
                government tenders prefer to work with. For Chennai-based founders, the
                registered office can be your home address, a co-working space, or a
                commercial address in areas like Vadapalani, T. Nagar, Guindy, or OMR —
                the MCA has no location restriction within India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                Eligibility &amp; requirements
              </h2>
              <ul className="mt-4 space-y-3 text-[var(--color-slate)]">
                <li>• Minimum 2 directors and 2 shareholders (can be the same individuals), maximum 15 directors.</li>
                <li>• At least one director must be a resident of India (stayed in India for 120+ days in the previous financial year).</li>
                <li>• No minimum paid-up capital requirement.</li>
                <li>• A registered office address in India with proof of ownership/rental and a No Objection Certificate.</li>
                <li>• Valid PAN, Aadhaar, and a functional email/mobile number for each director for OTP verification.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                Step-by-step MCA incorporation process
              </h2>
              <ol className="mt-4 space-y-4">
                {STEPS.map((step, i) => (
                  <li key={step.name} className="flex gap-4 rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-900)] text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--color-ink)]">{step.name}</p>
                      <p className="mt-1 text-sm text-[var(--color-slate)]">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                Private Ltd vs LLP vs OPC vs Sole Proprietorship
              </h2>
              <div className="mt-4 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-ash)]">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-[var(--color-mist)] text-left">
                      <th className="p-4 font-semibold text-[var(--color-ink)]">Entity Type</th>
                      <th className="p-4 font-semibold text-[var(--color-ink)]">Liability</th>
                      <th className="p-4 font-semibold text-[var(--color-ink)]">Compliance</th>
                      <th className="p-4 font-semibold text-[var(--color-ink)]">Ownership</th>
                      <th className="p-4 font-semibold text-[var(--color-ink)]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row) => (
                      <tr key={row.type} className="border-t border-[var(--color-ash)]">
                        <td className="p-4 font-medium text-[var(--color-ink)]">{row.type}</td>
                        <td className="p-4 text-[var(--color-slate)]">{row.liability}</td>
                        <td className="p-4 text-[var(--color-slate)]">{row.compliance}</td>
                        <td className="p-4 text-[var(--color-slate)]">{row.ownership}</td>
                        <td className="p-4 text-[var(--color-slate)]">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                Government fees vs. professional fees
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
                Government fees include MCA form fees, stamp duty on authorised share
                capital (varies by state), and DIN/DSC issuance charges — these are fixed
                by statute and paid directly to the government or issuing authority.
                Professional fees cover our drafting of MoA/AoA, filing accuracy checks,
                and advisory time. We provide a single itemised quote during your free
                consultation so you know exactly what is a government charge and what is
                our fee — nothing bundled, nothing hidden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">
                Post-incorporation compliance checklist
              </h2>
              <ul className="mt-4 space-y-3 text-[var(--color-slate)]">
                <li>• File INC-20A (Commencement of Business) within 180 days of incorporation.</li>
                <li>• Open a current bank account in the company&apos;s name.</li>
                <li>• Appoint your first statutory auditor within 30 days of incorporation.</li>
                <li>• Issue share certificates within 60 days and maintain statutory registers.</li>
                <li>• Apply for GST registration if turnover thresholds apply or GST is voluntarily needed.</li>
                <li>• Register under MSME (Udyam) if eligible, and Professional Tax / Shops &amp; Establishment as applicable in Tamil Nadu.</li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="rounded-[var(--radius-card)] bg-[var(--color-navy-900)] p-7 text-white">
              <h3 className="text-lg font-semibold">Get a fixed-fee quote</h3>
              <p className="mt-2 text-sm text-white/75">
                Tell us your director count and authorised capital — we&apos;ll send an
                itemised quote separating government and professional fees within one
                business day.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-[var(--radius-button)] bg-white px-5 py-3 text-center text-sm font-medium text-[var(--color-navy-900)] hover:bg-gold-100"
              >
                Book Free Consultation
              </Link>
            </div>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-slate)]">
                Related services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/formation-of-business-entity" className="text-[var(--color-navy-900)] hover:underline">Formation of Business Entity (all structures)</Link></li>
                <li><Link href="/roc-compliances" className="text-[var(--color-navy-900)] hover:underline">ROC Compliances</Link></li>
                <li><Link href="/goods-and-services-tax" className="text-[var(--color-navy-900)] hover:underline">GST Registration</Link></li>
                <li><Link href="/virtual-cfo-services" className="text-[var(--color-navy-900)] hover:underline">Virtual CFO Services</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTASection
        title="Ready to incorporate your company?"
        subtitle="Get a transparent, fixed-fee quote from a Chennai-based chartered accountancy firm."
      />
    </>
  );
}
