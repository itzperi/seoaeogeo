import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { getPostMeta, isPublished } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/private-limited-company-incorporation-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Chennai" },
  description:
    "Private limited company registration in Chennai and Anna Nagar: SPICe+ filing, DSC, DIN, MoA/AoA and post-incorporation compliance by a CA firm.",
  alternates: { canonical: "/private-limited-company-incorporation-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Chennai",
    description: "End-to-end private limited company registration (SPICe+) by a CA firm in Anna Nagar, Chennai.",
    url: "/private-limited-company-incorporation-chennai",
  },
};

const FAQS = [
  {
    question: "I'm a first-time founder — can you handle everything a startup needs, not just incorporation?",
    answer:
      "Yes. Beyond incorporation, we support startups with GST registration, MSME/Udyam registration, ongoing ROC compliance, and — once you're past the earliest stage — Virtual CFO support for budgeting and investor reporting. Most founders start with incorporation and add services as the business grows, rather than needing everything on day one.",
  },
  {
    question: "How long does private limited company registration take in Chennai?",
    answer:
      "Private limited company registration in Chennai takes 7–12 working days once documents are ready. That covers DSC and DIN issuance, name approval and the Certificate of Incorporation from the MCA through SPICe+. Allow about 3 weeks, including document collection, if you are starting from scratch. Delays usually come from name-availability rejections (the proposed name resembling an existing company or trademark) or incomplete KYC documents, both of which we vet against MCA and trademark databases before filing rather than discovering after a rejection resets the clock. Founders who have their director KYC, registered-office proof, and proposed name options ready upfront typically see the faster end of that range.",
  },
  {
    question: "What is the minimum capital and number of directors required?",
    answer:
      "A Private Limited Company needs at least 2 directors and 2 shareholders, who can be the same people, and there is no statutory minimum paid-up capital. It can have up to 15 directors and 200 shareholders, and at least one director must be resident in India. One person can hold both the director and shareholder roles. You can technically start with as little as ₹1 of capital, though most founders capitalise at a figure that realistically covers early operating expenses, since raising it later requires a formal ROC filing. The resident director must have stayed in India for at least 182 days during the financial year (Section 149(3) of the Companies Act, 2013) — this applies even if all shareholders are based abroad.",
  },
  {
    question: "What documents are required for private limited company registration?",
    answer:
      "Every director and shareholder needs PAN, Aadhaar and a recent passport-size photo, and each proposed director needs a Class 3 digital signature certificate (DSC) to sign the electronic MCA forms. For the company, you need proof of the registered office address, such as a rent agreement or electricity bill, with a No Objection Certificate from the property owner. NRI or foreign national directors need additional documents — a notarised or apostilled passport copy, proof of overseas address, and sometimes a Business Visa depending on their role. We provide a checklist tailored specifically to resident versus NRI/foreign director combinations before you start collecting paperwork, since this is the single biggest source of avoidable delay.",
  },
  {
    question: "What compliance is required after incorporation?",
    answer:
      "After incorporation, a private limited company must file INC-20A within 180 days, appoint its first statutory auditor within 30 days, issue share certificates to subscribers within 60 days, open a current bank account in the company's name, and maintain statutory registers from day one. INC-20A is the Commencement of Business declaration confirming subscribed capital has actually been received — skipping it can lead to the company being struck off. The statutory registers (of members, directors, and charges) must be kept even before your first annual filing is due. Our post-incorporation compliance support tracks all of these deadlines so nothing is missed in the first, most deadline-heavy 6 months.",
  },
  {
    question: "Can a Private Limited Company be converted from an existing proprietorship or partnership?",
    answer:
      "Yes. A proprietorship or partnership firm is converted by incorporating a new Private Limited Company, transferring the business assets and liabilities through a formal slump-sale or business-transfer agreement, and re-registering existing licences — GST, MSME/Udyam, trade licences and bank accounts — in the new entity's name and PAN. We handle each of these steps. This is a common step for businesses that outgrow the compliance simplicity of a proprietorship once they need to raise investment, limit personal liability, or work with clients who prefer contracting with a registered company rather than an individual.",
  },
];

const STEPS = [
  { name: "Digital Signature Certificate (DSC)", text: "We obtain Class 3 DSCs for all proposed directors — required to sign electronic MCA forms." },
  { name: "Name reservation", text: "We check name availability against the MCA and trademark database and reserve your company name via Part A of SPICe+." },
  { name: "Drafting e-MoA and e-AoA", text: "We draft the Memorandum (INC-33) and Articles (INC-34) around your actual business, with ESOP-ready Articles that already allow for an employee stock option scheme, share classes and investor rights." },
  { name: "SPICe+ Part B and AGILE-PRO-S", text: "We file SPICe+ Part B with the Registrar of Companies, covering incorporation, DIN for new directors, PAN and TAN. The linked AGILE-PRO-S form registers the company with EPFO and ESIC, requests the bank account and, if you choose, applies for GST. Tamil Nadu professional tax is registered separately with the local body." },
  { name: "Certificate of Incorporation", text: "On approval, the ROC issues the Certificate of Incorporation along with your Corporate Identification Number (CIN), PAN, and TAN." },
  { name: "Post-incorporation compliance", text: "We assist with opening your current bank account, filing INC-20A (commencement of business), and appointing your first statutory auditor within 30 days." },
];

const KEY_FACTS = [
  { label: "Typical time", value: "7–12 working days once documents are ready; about 3 weeks if you are collecting documents from scratch." },
  { label: "Government form", value: "SPICe+ Part A (name) and Part B (incorporation) with AGILE-PRO-S, e-MoA (INC-33) and e-AoA (INC-34) on the MCA V3 portal." },
  { label: "Minimum members", value: "2 directors and 2 shareholders (can be the same people); maximum 200 members. No minimum paid-up capital." },
  { label: "Resident director", value: "At least one director who stayed in India for 182 days or more in the financial year (Section 149(3), Companies Act, 2013)." },
  { label: "Who it suits", value: "Founders planning to raise equity, issue ESOPs, bid for larger contracts or scale beyond a partnership." },
  { label: "Key deadlines", value: "First auditor within 30 days, share certificates within 60 days, INC-20A (commencement of business) within 180 days." },
];

const RELATED_POSTS = [
  "spice-plus-incorporation-explained",
  "private-limited-vs-llp-chennai-startups",
  "post-incorporation-compliance-checklist",
  "common-compliance-mistakes-chennai-startups",
  ];

const COMPARISON = [
  { type: "Private Limited Company", liability: "Limited", compliance: "High", ownership: "Shares (max 200 shareholders)", bestFor: "Startups raising funding, scaling businesses" },
  { type: "LLP", liability: "Limited", compliance: "Moderate", ownership: "Partners (no share capital)", bestFor: "Professional services, low-compliance partnerships" },
  { type: "One Person Company (OPC)", liability: "Limited", compliance: "Moderate", ownership: "Single shareholder", bestFor: "Solo founders wanting limited liability" },
  { type: "Sole Proprietorship", liability: "Unlimited", compliance: "Low", ownership: "Single owner", bestFor: "Small, low-risk local businesses" },
];

export default function IncorporationPage() {
  const guides = RELATED_POSTS.map(getPostMeta).filter(
    (p): p is NonNullable<typeof p> => Boolean(p) && isPublished(p!.date),
  );
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Private Limited Company Registration in Chennai",
          description:
            "End-to-end SPICe+ registration of Private Limited Companies for businesses in Chennai, including DSC, DIN, name approval, and post-incorporation compliance.",
          url: PAGE_URL,
          serviceType: "Business Incorporation",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How to register a Private Limited Company in Chennai",
          description: "Step-by-step process for registering a Private Limited Company through the MCA's SPICe+ form.",
          steps: STEPS,
        })}
      />
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs
        items={[
          { name: "Company Registration", href: "/company-registration-chennai" },
          { name: "Private Limited Company Registration", href: "/private-limited-company-incorporation-chennai" },
        ]}
      />
      <PageHero
        reviewedPath="/private-limited-company-incorporation-chennai"
        eyebrow="Company Registration · Chennai"
        h1="Private Limited Company Registration in Chennai"
        subhead="End-to-end private limited company registration through SPICe+ — DSC, DIN, name approval, MoA/AoA drafting and post-incorporation compliance — handled by a chartered accountant firm in Anna Nagar, Chennai."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div className="overflow-hidden rounded-cards border border-carbon">
              <h2 className="bg-carbon px-5 py-3 text-sm font-bold uppercase tracking-[0.032em] text-white">Key facts</h2>
              <dl className="divide-y divide-ash bg-paper">
                {KEY_FACTS.map((f) => (
                  <div key={f.label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-obsidian">{f.label}</dt>
                    <dd className="text-sm text-slate">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What is Private Limited Company Incorporation?
              </h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                Private Limited Company incorporation is the legal process of registering
                a business as a distinct corporate entity under the Companies Act, 2013,
                through the{" "}
                <a href="https://www.mca.gov.in/content/dam/mca/pdf/mca-services/company-e-filing/incorporation-change-services/Incorporating%20a%20Private%20Limited%20Company%20in%20India.pdf" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline underline-offset-2">
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
              <p className="mt-4 leading-relaxed text-slate">
                Not sure a private limited company is the right fit? Our{" "}
                <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
                  company registration in Chennai
                </Link>{" "}
                guide compares it with an LLP, OPC, partnership, proprietorship and Section 8 company.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Who can register a private limited company?
              </h2>
              <ul className="mt-4 space-y-3 text-slate">
                <li>• Minimum 2 directors and 2 shareholders (can be the same individuals), maximum 15 directors.</li>
                <li>• At least one director must be resident in India — stayed in India for at least 182 days during the financial year (Section 149(3), Companies Act, 2013).</li>
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
                How do you register a private limited company in Chennai?
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
                How does a Private Ltd compare with an LLP, OPC or Sole Proprietorship?
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
                How do we handle your incorporation?
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
                Can you set up ESOPs and convert an existing business?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                <strong className="text-obsidian">ESOP-ready Articles.</strong> If you expect to hire with stock options
                or raise from angels, we draft Articles that already provide for an employee stock option scheme,
                different share classes and standard investor rights. That saves a shareholder resolution and a fresh
                MCA filing to amend the Articles just as your first round is closing.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                <strong className="text-obsidian">Conversion from a proprietorship, partnership or LLP.</strong> A
                proprietorship has no legal conversion route, so a new company is incorporated and takes over the
                business through a business transfer agreement. A partnership firm or an LLP can register as a company
                under Section 366 of the Companies Act, 2013, by filing URC-1 with SPICe+, so the same business
                continues with partners becoming shareholders. In each case we move GST, Udyam, licences and bank
                accounts to the company&apos;s PAN.
              </p>
            </div>

            <div id="anna-nagar">
              <h2 className="text-2xl text-obsidian">
                Private limited company registration in Anna Nagar
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Our office is at J-Block, 1st Street, 13th Main Rd, Anna Nagar,
                Chennai 600040, so founders in Anna Nagar, Anna Nagar West,
                Shenoy Nagar, Thirumangalam, Koyambedu, Mogappair and Aminjikarai can
                register a private limited company with a chartered accountant they
                can meet in person. You can drop off KYC documents, sign the
                registered-office NOC and finish DSC verification at our office in
                one visit, and the SPICe+ filing itself is online, so the 7–12
                working-day timeline is the same as anywhere in Chennai.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                An Anna Nagar home or rented office can be your registered office:
                you need a recent electricity bill or property tax receipt for the
                address, plus a rent agreement and NOC from the owner if the premises
                are rented. See our{" "}
                <Link href="/chartered-accountant-anna-nagar-chennai" className="text-royal-violet underline underline-offset-2">
                  CA firm in Anna Nagar
                </Link>{" "}
                page for the other services we handle for local businesses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What is the post-incorporation compliance checklist?
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
            <div className="rounded-cards border border-carbon bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Talk to a CA about your registration</h3>
              <p className="mt-2 text-sm text-white/80">
                Tell us your directors, shareholders and business activity — we&apos;ll
                confirm the documents you need and the timeline within one business day.
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
                <li><Link href="/company-registration-chennai" className="text-royal-violet hover:underline">Company Registration (all structures)</Link></li>
                <li><Link href="/llp-registration-chennai" className="text-royal-violet hover:underline">LLP Registration</Link></li>
                <li><Link href="/opc-registration-chennai" className="text-royal-violet hover:underline">OPC Registration</Link></li>
                <li><Link href="/startup-india-registration-chennai" className="text-royal-violet hover:underline">Startup India (DPIIT) Recognition</Link></li>
                <li><Link href="/roc-compliances" className="text-royal-violet hover:underline">ROC Compliances</Link></li>
                <li><Link href="/goods-and-services-tax" className="text-royal-violet hover:underline">GST Registration</Link></li>
                <li><Link href="/virtual-cfo-services" className="text-royal-violet hover:underline">Virtual CFO Services</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="bg-paper pb-12">
          <div className="container-page">
            <h2 className="text-2xl text-obsidian">Related guides</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/blog/${g.slug}`} className="text-sm font-medium text-royal-violet underline underline-offset-2">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FAQSection items={FAQS} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">People also ask</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/company-registration-chennai" className="text-sm font-medium text-royal-violet underline underline-offset-2">
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
        service="Private Limited Company Registration"
        title="Ready to incorporate your company?"
        subtitle="Speak to a chartered accountant in Anna Nagar about registering your private limited company."
      />
    </>
  );
}
