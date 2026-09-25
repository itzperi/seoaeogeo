import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/private-limited-company-incorporation-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Incorporation in Chennai" },
  description:
    "Register your Private Limited Company in Chennai with SPICe+ filing, DIN/DSC, MoA/AoA drafting, and post-incorporation compliance — handled end-to-end by C S Rushil & Co.",
  alternates: { canonical: "/private-limited-company-incorporation-chennai" },
  openGraph: {
    title: "Private Limited Company Incorporation in Chennai",
    description: "End-to-end SPICe+ incorporation handled by a Chennai-based chartered accountancy firm.",
    url: "/private-limited-company-incorporation-chennai",
  },
};

const FAQS = [
  {
    question: "How long does private limited company incorporation take in Chennai?",
    answer:
      "With documents in order, SPICe+ incorporation typically takes 7–12 working days, covering DSC/DIN issuance, name approval, and Certificate of Incorporation from the MCA. Delays usually come from name-availability rejections (the proposed name resembling an existing company or trademark) or incomplete KYC documents, both of which we vet against MCA and trademark databases before filing rather than discovering after a rejection resets the clock. Founders who have their director KYC, registered-office proof, and proposed name options ready upfront typically see the faster end of that range; those starting from scratch on documentation should budget closer to 3 weeks including document collection.",
  },
  {
    question: "What is the minimum capital and number of directors required?",
    answer:
      "A Private Limited Company needs a minimum of 2 directors and 2 shareholders (they can be the same people, and one person can hold both roles), with a maximum of 15 directors and 200 shareholders. There is no statutory minimum paid-up capital requirement — you can technically start with as little as ₹1, though most founders capitalise at a figure that realistically covers early operating expenses since raising it later requires a formal ROC filing. At least one director must be an Indian resident, meaning they stayed in India for 120 or more days in the previous financial year — this applies even if all shareholders are based abroad.",
  },
  {
    question: "What documents are required for Pvt Ltd registration?",
    answer:
      "PAN and Aadhaar of all directors and shareholders, a recent passport-size photo, proof of the registered office address (a rent agreement or electricity bill along with a No Objection Certificate from the property owner), and Class 3 digital signature certificates (DSC) for the proposed directors to sign the electronic MCA forms. NRI or foreign national directors need additional documents — a notarised or apostilled passport copy, proof of overseas address, and sometimes a Business Visa depending on their role. We provide a checklist tailored specifically to resident versus NRI/foreign director combinations before you start collecting paperwork, since this is the single biggest source of avoidable delay.",
  },
  {
    question: "What is the difference between government fees and professional fees?",
    answer:
      "Government fees — MCA form fees, stamp duty on authorised share capital (which varies by state), and DIN/DSC issuance charges — are fixed by statute and paid directly to the government or the certifying authority; no CA or consultant can discount or waive these. Professional fees cover our actual work: drafting the MoA/AoA, verifying documents before submission to avoid rejection, and advisory time during the process. We separate both clearly as line items in every quote before you commit, specifically so you can see what portion is a fixed statutory cost versus what you're paying us for — no bundled or hidden charges either way.",
  },
  {
    question: "What compliance is required after incorporation?",
    answer:
      "Within 180 days of incorporation you must file a Commencement of Business declaration (INC-20A) confirming subscribed capital has actually been received — skipping this can lead to the company being struck off. You must also open a current bank account in the company's name, appoint your first statutory auditor within 30 days of incorporation, issue share certificates to subscribers within 60 days, and maintain statutory registers (of members, directors, and charges) from day one, even before your first annual filing is due. We offer a post-incorporation compliance package that tracks all of these deadlines so nothing is missed in the first, most deadline-heavy 6 months.",
  },
  {
    question: "Can a Private Limited Company be converted from an existing proprietorship or partnership?",
    answer:
      "Yes. We handle conversion of proprietorships and partnership firms into Private Limited Companies, which involves incorporating the new company, transferring business assets and liabilities via a formal slump-sale or business-transfer agreement, and re-registering existing licenses — GST, MSME/Udyam, trade licenses, and bank accounts — in the new entity's name and PAN. This is a common step for businesses that outgrow the compliance simplicity of a proprietorship once they need to raise investment, limit personal liability, or work with clients who prefer contracting with a registered company rather than an individual.",
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
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[{ name: "Private Limited Company Incorporation", href: "/private-limited-company-incorporation-chennai" }]} />
      <PageHero
        eyebrow="Company Registration · Chennai"
        h1="Private Limited Company Incorporation in Chennai"
        subhead="End-to-end SPICe+ incorporation — DSC, DIN, name approval, MoA/AoA drafting, and post-incorporation compliance — managed by a Chennai-based chartered accountancy firm."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl text-obsidian">
                What is Private Limited Company Incorporation?
              </h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                Private Limited Company incorporation is the legal process of registering
                a business as a distinct corporate entity under the Companies Act, 2013,
                through the{" "}
                <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline underline-offset-2">
                  Ministry of Corporate Affairs (MCA)
                </a>
                . It gives the business a
                separate legal identity from its owners, limits shareholder liability to
                their share capital, and is the structure most banks, investors, and
                government tenders prefer to work with. For Chennai-based founders, the
                registered office can be your home address, a co-working space, or a
                commercial address in areas like Anna Nagar, T. Nagar, Guindy, or OMR —
                the MCA has no location restriction within India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Eligibility &amp; requirements
              </h2>
              <ul className="mt-4 space-y-3 text-slate">
                <li>• Minimum 2 directors and 2 shareholders (can be the same individuals), maximum 15 directors.</li>
                <li>• At least one director must be a resident of India (stayed in India for 120+ days in the previous financial year).</li>
                <li>• No minimum paid-up capital requirement.</li>
                <li>• A registered office address in India with proof of ownership/rental and a No Objection Certificate.</li>
                <li>• Valid PAN, Aadhaar, and a functional email/mobile number for each director for OTP verification.</li>
              </ul>
              <p className="mt-4 rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
                <strong>What we actually see slow this down:</strong> the most
                common cause of a SPICe+ rejection or resubmission we handle
                for Chennai founders isn&apos;t a policy issue — it&apos;s a
                director&apos;s name, date of birth, or address not matching
                exactly between their PAN and Aadhaar records (a middle name
                present on one and not the other is a frequent culprit). We
                check this before filing, not after a rejection.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Step-by-step MCA incorporation process
              </h2>
              <ol className="mt-4 space-y-4">
                {STEPS.map((step, i) => (
                  <li key={step.name} className="flex gap-4 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-obsidian">{step.name}</p>
                      <p className="mt-1 text-sm text-slate">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Private Ltd vs LLP vs OPC vs Sole Proprietorship
              </h2>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className="p-4 font-medium text-obsidian">Entity Type</th>
                      <th className="p-4 font-medium text-obsidian">Liability</th>
                      <th className="p-4 font-medium text-obsidian">Compliance</th>
                      <th className="p-4 font-medium text-obsidian">Ownership</th>
                      <th className="p-4 font-medium text-obsidian">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {COMPARISON.map((row) => (
                      <tr key={row.type} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{row.type}</td>
                        <td className="p-4 text-slate">{row.liability}</td>
                        <td className="p-4 text-slate">{row.compliance}</td>
                        <td className="p-4 text-slate">{row.ownership}</td>
                        <td className="p-4 text-slate">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                How we handle your incorporation
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                We start with a name-availability and trademark check before you commit
                to a name, since a rejection at Part A of SPICe+ is the single biggest
                avoidable delay. In parallel, we cross-check every director&apos;s PAN
                and Aadhaar details for the exact-match mismatches that cause most
                resubmissions, draft the MoA/AoA around your actual business objects
                rather than a generic template, and file SPICe+ Part B once DSCs and
                documents are verified — not before. After the Certificate of
                Incorporation is issued, we track the post-incorporation deadlines
                (INC-20A, auditor appointment, share certificates) ourselves and flag
                each one to you in writing, rather than leaving you to track a
                first-180-days compliance calendar alone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Government fees vs. professional fees
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
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
              <h2 className="text-2xl text-obsidian">
                Post-incorporation compliance checklist
              </h2>
              <ul className="mt-4 space-y-3 text-slate">
                <li>• File INC-20A (Commencement of Business) within 180 days of incorporation.</li>
                <li>• Open a current bank account in the company&apos;s name.</li>
                <li>• Appoint your first statutory auditor within 30 days of incorporation.</li>
                <li>• Issue share certificates within 60 days and maintain statutory registers.</li>
                <li>• Apply for GST registration if turnover thresholds apply or GST is voluntarily needed.</li>
                <li>• Register under MSME (Udyam) if eligible, and Professional Tax / Shops &amp; Establishment as applicable in Tamil Nadu.</li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="rounded-cards bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Get a fixed-fee quote</h3>
              <p className="mt-2 text-sm text-white/80">
                Tell us your director count and authorised capital — we&apos;ll send an
                itemised quote separating government and professional fees within one
                business day.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-buttons bg-white px-5 py-3 text-center text-sm font-medium text-obsidian hover:bg-lilac-mist"
              >
                Book Free Consultation
              </Link>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">
                Related services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/formation-of-business-entity" className="text-royal-violet hover:underline">Formation of Business Entity (all structures)</Link></li>
                <li><Link href="/roc-compliances" className="text-royal-violet hover:underline">ROC Compliances</Link></li>
                <li><Link href="/goods-and-services-tax" className="text-royal-violet hover:underline">GST Registration</Link></li>
                <li><Link href="/virtual-cfo-services" className="text-royal-violet hover:underline">Virtual CFO Services</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQSection items={FAQS} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">People also ask</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/formation-of-business-entity" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                Should I choose Private Limited or a different entity type?
              </Link>
            </li>
            <li>
              <Link href="/roc-compliances" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                What ROC filings come due after incorporation?
              </Link>
            </li>
            <li>
              <Link href="/virtual-cfo-services" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                When should a new company bring in a Virtual CFO?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to incorporate your company?"
        subtitle="Get a transparent, fixed-fee quote from a Chennai-based chartered accountancy firm."
      />
    </>
  );
}
