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
  title: { absolute: "Private Limited Company Registration in Chennai | CA Firm" },
  description:
    "Private limited company registration in Chennai via SPICe+: DSC, DIN, name approval, e-MoA/AoA, PAN/TAN, INC-20A and first-year ROC compliance, from Anna Nagar.",
  alternates: { canonical: "/private-limited-company-incorporation-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Chennai",
    description:
      "Pvt Ltd company incorporation in Chennai through SPICe+, with a step-by-step timeline, document checklist and first-year compliance calendar.",
    url: "/private-limited-company-incorporation-chennai",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const FAQS = [
  {
    question: "How long does private limited company registration take in Chennai?",
    answer:
      "Private limited company registration in Chennai usually takes 7–12 working days once documents and digital signatures are ready. Allow about three weeks if you are starting from scratch. Most delays come from a rejected name or a mismatch between a director's PAN and Aadhaar details, so we check both before filing.",
  },
  {
    question: "What is the minimum capital and number of directors required?",
    answer:
      "A private limited company needs at least two directors and two shareholders, who can be the same people, and there is no minimum paid-up capital. It can have up to 15 directors (more with a special resolution) and 200 members. At least one director must have stayed in India for 182 days or more in the financial year.",
  },
  {
    question: "Which ROC registers a private limited company in Chennai?",
    answer:
      "A company with its registered office in Chennai comes under the Registrar of Companies, Chennai, which covers Tamil Nadu except nine western districts handled by ROC Coimbatore. SPICe+ applications are processed centrally by MCA, so founders do not visit the ROC office, and later annual filings are also made online.",
  },
  {
    question: "What documents does an NRI or foreign director need?",
    answer:
      "An NRI or foreign national director needs a passport and a recent overseas address proof, such as a bank statement or utility bill. Documents signed abroad are usually notarised and apostilled in Hague Convention countries, or consularised elsewhere. The director also needs a DSC and DIN, and another director must be resident in India.",
  },
  {
    question: "What compliance is due in the first six months after incorporation?",
    answer:
      "The board must hold its first meeting and appoint the first auditor within 30 days of incorporation, issue share certificates within 60 days, and file INC-20A within 180 days once subscribers have paid for their shares. The first annual general meeting falls within nine months of the end of the first financial year.",
  },
  {
    question: "Should a Chennai startup choose a private limited company or an LLP?",
    answer:
      "Choose a private limited company if you plan to raise equity, issue ESOPs or bring in investors, because an LLP cannot issue shares. An LLP suits professional firms and closely held businesses wanting lighter compliance; its accounts need audit only above ₹40 lakh turnover or ₹25 lakh contribution. Both give limited liability.",
  },
  {
    question: "Can my home in Chennai be the registered office?",
    answer:
      "Yes. A home in Besant Nagar, Alwarpet, Anna Nagar or anywhere else can be the registered office. You need a utility bill not older than two months and, if the property is rented or owned by someone else, a rent agreement or the owner's no-objection letter. The address must be able to receive official correspondence.",
  },
  {
    question: "Can an existing proprietorship or partnership become a private limited company?",
    answer:
      "Yes. A partnership firm or LLP can register as a company under Section 366 of the Companies Act, 2013, by filing URC-1 with SPICe+. A proprietorship cannot convert directly, so a new company takes over the business through a business transfer agreement. GST, Udyam, licences and bank accounts then move to the company's PAN.",
  },
];

const STEPS = [
  { name: "Digital Signature Certificate (DSC)", text: "Each proposed director and subscriber obtains a Class 3 DSC, needed to sign the electronic MCA forms." },
  { name: "Name reservation (SPICe+ Part A)", text: "We check the proposed names against MCA and trademark records and reserve one through SPICe+ Part A. An approved name is held for 20 days." },
  { name: "e-MoA and e-AoA", text: "We draft the Memorandum (INC-33) and Articles (INC-34) around your actual business, including ESOP and share-class provisions where you need them." },
  { name: "SPICe+ Part B with AGILE-PRO-S", text: "SPICe+ Part B covers incorporation, DIN for new directors, PAN and TAN. The linked AGILE-PRO-S form registers the company with EPFO and ESIC, requests the bank account and can apply for GST." },
  { name: "Certificate of Incorporation", text: "The ROC issues the Certificate of Incorporation with the CIN; PAN and TAN are allotted with it." },
  { name: "Post-incorporation filings", text: "Bank account, first board meeting and auditor within 30 days, share certificates within 60 days, and INC-20A within 180 days." },
];

const TIMELINE = [
  { step: "1. DSC", form: "Class 3 DSC from a licensed certifying authority", when: "Before any MCA filing", output: "Digital signature for each director and subscriber" },
  { step: "2. DIN", form: "Applied for inside SPICe+ Part B (no separate form for new directors)", when: "With the incorporation filing", output: "DIN allotted when the company is incorporated" },
  { step: "3. Name reservation", form: "SPICe+ Part A (filed alone, or together with Part B)", when: "Before Part B; approved name held for 20 days", output: "Reserved company name" },
  { step: "4. Incorporation", form: "SPICe+ Part B with AGILE-PRO-S (INC-35)", when: "Within the name validity period", output: "EPFO and ESIC registration, bank account request, optional GSTIN" },
  { step: "5. Constitution", form: "e-MoA (INC-33) and e-AoA (INC-34)", when: "Filed with SPICe+ Part B", output: "Objects, share capital and internal rules on record" },
  { step: "6. PAN and TAN", form: "Applied through SPICe+ Part B", when: "Allotted with the Certificate of Incorporation", output: "PAN and TAN printed on the certificate" },
  { step: "7. Bank account", form: "Bank chosen in AGILE-PRO-S", when: "After the certificate is issued", output: "Current account to receive subscription money" },
  { step: "8. First auditor", form: "Board resolution (Section 139(6))", when: "Within 30 days of incorporation", output: "Statutory auditor holds office until the first AGM" },
  { step: "9. Commencement of business", form: "INC-20A (Section 10A)", when: "Within 180 days of incorporation", output: "Declaration that subscribers have paid for their shares" },
];

const DOCUMENTS = [
  { item: "Identity", indian: "PAN (mandatory) and Aadhaar", foreign: "Passport; PAN if the NRI already holds one. Foreign documents notarised and apostilled, or consularised" },
  { item: "Address proof", indian: "Bank statement, utility bill or mobile bill not older than two months", foreign: "Overseas bank statement or utility bill, attested the same way as the passport" },
  { item: "Photograph", indian: "Recent passport-size photo", foreign: "Recent passport-size photo" },
  { item: "DSC and DIN", indian: "Class 3 DSC; DIN through SPICe+", foreign: "Class 3 DSC issued on attested documents; DIN through SPICe+" },
  { item: "Residency", indian: "At least one director resident in India (182 days or more in the financial year)", foreign: "Cannot be the only director; an Indian-resident director is required" },
  { item: "Registered office", indian: "Utility bill (not older than two months), rent agreement and owner's NOC if not owned", foreign: "Same Indian address documents; the office must be in India" },
  { item: "Foreign investment", indian: "Not applicable", foreign: "Share subscription from abroad reported to RBI in Form FC-GPR within 30 days of allotment" },
];

const COMPARISON = [
  { attr: "Law", pvt: "Companies Act, 2013", llp: "LLP Act, 2008", opc: "Companies Act, 2013" },
  { attr: "Minimum owners", pvt: "2 shareholders and 2 directors", llp: "2 designated partners", opc: "1 member (Indian citizen) plus a nominee" },
  { attr: "Maximum owners", pvt: "200 members", llp: "No limit", opc: "1 member" },
  { attr: "Raising equity / ESOPs", pvt: "Yes, shares and ESOPs", llp: "No shares; partners contribute capital", opc: "Limited; usually converts to Pvt Ltd first" },
  { attr: "Statutory audit", pvt: "Every year, regardless of turnover", llp: "Only above ₹40 lakh turnover or ₹25 lakh contribution", opc: "Every year, regardless of turnover" },
  { attr: "Annual ROC filings", pvt: "AOC-4 and MGT-7/MGT-7A", llp: "Form 8 and Form 11", opc: "AOC-4 and MGT-7A" },
  { attr: "Board meetings", pvt: "Four a year (small companies: one per half-year)", llp: "Not required", opc: "One in each half of the calendar year" },
  { attr: "Typical fit", pvt: "Start-ups raising funds, growing manufacturers and traders", llp: "Professional firms, family businesses", opc: "Solo founders wanting limited liability" },
];

const CALENDAR = [
  { when: "Within 30 days of incorporation", what: "First board meeting; first statutory auditor appointed by the board", ref: "Sections 173(1) and 139(6)" },
  { when: "Within 30 days of allotment", what: "FC-GPR reporting if any shares were issued to a non-resident", ref: "FEMA (Non-debt Instruments) rules, RBI FIRMS portal" },
  { when: "Within 60 days of incorporation", what: "Share certificates issued to subscribers", ref: "Section 56(4)(a)" },
  { when: "Within 180 days of incorporation", what: "INC-20A declaration of commencement of business", ref: "Section 10A" },
  { when: "Every half-year (if applicable)", what: "MSME-1 for dues to micro and small suppliers outstanding beyond 45 days", ref: "MCA order under Section 405" },
  { when: "By 30 June each year", what: "DPT-3 return of deposits and outstanding loans", ref: "Companies (Acceptance of Deposits) Rules" },
  { when: "As notified by MCA", what: "DIR-3 KYC for every director holding a DIN", ref: "Companies (Appointment and Qualification of Directors) Rules" },
  { when: "Within 9 months of first year-end", what: "First AGM, with audited financial statements adopted", ref: "Section 96(1)" },
  { when: "30 days / 60 days after AGM", what: "AOC-4 (financial statements) and MGT-7A or MGT-7 (annual return)", ref: "Sections 137 and 92" },
  { when: "31 October after year-end", what: "Company income-tax return (accounts are audited, so the audit-case due date applies)", ref: "Income-tax Act; verify the year's due date" },
];

const CHENNAI_AREAS = [
  {
    id: "besant-nagar",
    name: "Besant Nagar",
    text: "Besant Nagar, Thiruvanmiyur and Adyar have many consultants, designers and first-time founders who register from a home office. A residential flat can be the registered office with a recent utility bill and the owner's NOC. You can meet us at Anna Nagar by appointment or complete everything online.",
    href: "/chartered-accountant-adyar-chennai",
    label: "CA services for Adyar and Besant Nagar",
  },
  {
    id: "alwarpet",
    name: "Alwarpet",
    text: "Alwarpet, Mylapore and Teynampet founders often include family businesses and professional practices moving an existing firm into a company. In those cases we plan the business transfer agreement, GST and bank changes alongside the SPICe+ filing so invoicing continues without a gap.",
    href: "/chartered-accountant-t-nagar-chennai",
    label: "CA services for T. Nagar and central Chennai",
  },
  {
    id: "omr-sholinganallur",
    name: "OMR and Sholinganallur",
    text: "OMR, from Perungudi through Sholinganallur, is Chennai's IT corridor. Software and SaaS start-ups here usually choose a private limited company for ESOPs and investor funding, and often apply for DPIIT Startup India recognition after incorporation. Stretches further south fall in Chengalpattu district, which is also under ROC Chennai.",
    href: "/chartered-accountant-omr-sholinganallur-chennai",
    label: "CA services for OMR and Sholinganallur",
  },
  {
    id: "guindy",
    name: "Guindy",
    text: "Guindy Industrial Estate and the nearby Ekkatuthangal and Alandur area have small manufacturers and engineering and electronics units. A unit in the estate can be the registered office. Manufacturers usually add GST and Udyam, and the EPFO and ESIC codes now come through AGILE-PRO-S at incorporation.",
    href: "/chartered-accountant-guindy-chennai",
    label: "CA services for Guindy",
  },
  {
    id: "ambattur",
    name: "Ambattur",
    text: "Ambattur Industrial Estate has a large base of fabrication, engineering and auto-component units, many run as proprietorships or partnerships that incorporate when a larger customer or bank asks for a corporate supplier. Ambattur is close to our Anna Nagar office, so an in-person meeting is easy to arrange.",
    href: "/chartered-accountant-ambattur-chennai",
    label: "CA services for Ambattur",
  },
];

const TN_CITIES = [
  { slug: "kanchipuram", name: "Kanchipuram", district: "Kanchipuram", roc: "Chennai" },
  { slug: "chengalpattu", name: "Chengalpattu", district: "Chengalpattu", roc: "Chennai" },
  { slug: "vellore", name: "Vellore", district: "Vellore", roc: "Chennai" },
  { slug: "tiruchirappalli", name: "Tiruchirappalli (Trichy)", district: "Tiruchirappalli", roc: "Chennai" },
  { slug: "thanjavur", name: "Thanjavur", district: "Thanjavur", roc: "Chennai" },
  { slug: "karur", name: "Karur", district: "Karur", roc: "Chennai" },
  { slug: "madurai", name: "Madurai", district: "Madurai", roc: "Chennai" },
  { slug: "tirunelveli", name: "Tirunelveli", district: "Tirunelveli", roc: "Chennai" },
  { slug: "thoothukudi", name: "Thoothukudi", district: "Thoothukudi", roc: "Chennai" },
  { slug: "nagercoil", name: "Nagercoil", district: "Kanyakumari", roc: "Chennai" },
  { slug: "coimbatore", name: "Coimbatore", district: "Coimbatore", roc: "Coimbatore" },
  { slug: "tiruppur", name: "Tiruppur", district: "Tiruppur", roc: "Coimbatore" },
  { slug: "erode", name: "Erode", district: "Erode", roc: "Coimbatore" },
  { slug: "salem", name: "Salem", district: "Salem", roc: "Coimbatore" },
  { slug: "namakkal", name: "Namakkal", district: "Namakkal", roc: "Coimbatore" },
  { slug: "hosur", name: "Hosur", district: "Krishnagiri", roc: "Coimbatore" },
];

const RELATED_POSTS = [
  "spice-plus-incorporation-explained",
  "private-limited-vs-llp-chennai-startups",
  "post-incorporation-compliance-checklist",
  "common-compliance-mistakes-chennai-startups",
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
            "SPICe+ registration of private limited companies for businesses in Chennai and across Tamil Nadu, including DSC, DIN, name approval, e-MoA/e-AoA and first-year ROC compliance.",
          url: PAGE_URL,
          serviceType: "Business Incorporation",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How to register a private limited company in Chennai",
          description: "Step-by-step process for registering a private limited company through the MCA's SPICe+ form.",
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
        subhead="Pvt Ltd company incorporation through SPICe+ — DSC, DIN, name approval, e-MoA/e-AoA, PAN/TAN and first-year compliance — handled by a chartered accountant firm in Anna Nagar, Chennai, for founders across the city and Tamil Nadu."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl text-obsidian">How does private limited company registration in Chennai work?</h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                Private limited company registration in Chennai is an online SPICe+ application to the Ministry of
                Corporate Affairs under the Companies Act, 2013. It needs two directors, two shareholders, digital
                signatures and a registered office address, and usually takes 7–12 working days once documents are
                ready. The company is recorded with the Registrar of Companies, Chennai.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Incorporation gives the business a legal identity separate from its owners and limits each
                shareholder&apos;s liability to their share capital. The{" "}
                <a
                  href="https://www.mca.gov.in/content/dam/mca/pdf/mca-services/company-e-filing/incorporation-change-services/Incorporating%20a%20Private%20Limited%20Company%20in%20India.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Ministry of Corporate Affairs (MCA) guide to incorporating a private limited company
                </a>{" "}
                sets out the SPICe+ process. Not sure a private limited company is the right structure? Our{" "}
                <Link href="/company-registration-chennai" className={LINK}>
                  company registration in Chennai
                </Link>{" "}
                guide compares it with an LLP, OPC, partnership, proprietorship and Section 8 company.
              </p>
            </div>

            <div className="overflow-hidden rounded-cards border border-carbon">
              <h2 className="bg-carbon px-5 py-3 text-sm font-bold uppercase tracking-[0.032em] text-white">Key facts</h2>
              <dl className="divide-y divide-ash bg-paper">
                {[
                  { label: "Typical time", value: "7–12 working days once documents are ready; about 3 weeks if you are collecting documents from scratch." },
                  { label: "Government forms", value: "SPICe+ Part A (name) and Part B (incorporation) with AGILE-PRO-S, e-MoA (INC-33) and e-AoA (INC-34) on the MCA V3 portal." },
                  { label: "Registrar", value: "ROC Chennai for a registered office in Chennai and most of Tamil Nadu; ROC Coimbatore for nine western districts." },
                  { label: "Minimum members", value: "2 directors and 2 shareholders (can be the same people); maximum 200 members. No minimum paid-up capital." },
                  { label: "Resident director", value: "At least one director who stayed in India for 182 days or more in the financial year (Section 149(3), Companies Act, 2013)." },
                  { label: "Key deadlines", value: "First auditor within 30 days, share certificates within 60 days, INC-20A within 180 days." },
                ].map((f) => (
                  <div key={f.label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-obsidian">{f.label}</dt>
                    <dd className="text-sm text-slate">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">Who can register a private limited company?</h2>
              <ul className="mt-4 space-y-3 text-slate">
                <li>• Minimum 2 directors and 2 shareholders (can be the same individuals), up to 15 directors without a special resolution.</li>
                <li>• At least one director must be resident in India — stayed in India for at least 182 days during the financial year (Section 149(3), Companies Act, 2013).</li>
                <li>• No minimum paid-up capital requirement.</li>
                <li>• A registered office address in India with proof of ownership or tenancy and a no-objection certificate.</li>
                <li>• Valid PAN, Aadhaar, and a working email and mobile number for each director for OTP verification.</li>
              </ul>
              <p className="mt-4 rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
                <strong>What we actually see slow this down:</strong> the most common cause of a SPICe+ resubmission
                we handle for Chennai founders isn&apos;t a policy issue — it&apos;s a director&apos;s name, date of
                birth, or address not matching exactly between their PAN and Aadhaar records (a middle name present on
                one and not the other is a frequent culprit). We check this before filing, not after a rejection.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What are the SPICe+ steps and timelines for a Pvt Ltd company?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                The table follows a private limited company from digital signatures to the commencement-of-business
                declaration. Steps 1–6 happen before or at incorporation; steps 7–9 are the first deadlines after the
                Certificate of Incorporation is issued.
              </p>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className={TH}>Step</th>
                      <th className={TH}>Form or route</th>
                      <th className={TH}>When</th>
                      <th className={TH}>Result</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {TIMELINE.map((r) => (
                      <tr key={r.step} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{r.step}</td>
                        <td className={TD}>{r.form}</td>
                        <td className={TD}>{r.when}</td>
                        <td className={TD}>{r.output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Tamil Nadu professional tax is not part of AGILE-PRO-S; it is registered separately with the
                Greater Chennai Corporation or the local body where the company operates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">How do you register a private limited company in Chennai?</h2>
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
              <h2 className="text-2xl text-obsidian">What documents are needed for Indian and NRI or foreign directors?</h2>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className={TH}>Document</th>
                      <th className={TH}>Indian resident directors and shareholders</th>
                      <th className={TH}>NRI or foreign national directors</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {DOCUMENTS.map((r) => (
                      <tr key={r.item} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{r.item}</td>
                        <td className={TD}>{r.indian}</td>
                        <td className={TD}>{r.foreign}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Foreign-owned companies have further steps; see{" "}
                <Link href="/company-registration-india-for-foreigners" className={LINK}>
                  company registration in India for foreigners
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">How does a Pvt Ltd company compare with an LLP and an OPC?</h2>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className={TH}>Point</th>
                      <th className={TH}>Private Limited Company</th>
                      <th className={TH}>LLP</th>
                      <th className={TH}>One Person Company</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {COMPARISON.map((r) => (
                      <tr key={r.attr} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{r.attr}</td>
                        <td className={TD}>{r.pvt}</td>
                        <td className={TD}>{r.llp}</td>
                        <td className={TD}>{r.opc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Details of the alternatives: <Link href="/llp-registration-chennai" className={LINK}>LLP registration</Link>{" "}
                and <Link href="/opc-registration-chennai" className={LINK}>OPC registration</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What compliance falls due in the first year after incorporation?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                A new company&apos;s first year is the most deadline-heavy. If it is incorporated on or after 1
                January, its first financial year can run to 31 March of the following year (Section 2(41)), which
                pushes the first AGM and annual filings out accordingly.
              </p>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className={TH}>When</th>
                      <th className={TH}>Compliance</th>
                      <th className={TH}>Basis</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {CALENDAR.map((r) => (
                      <tr key={r.what} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{r.when}</td>
                        <td className={TD}>{r.what}</td>
                        <td className={TD}>{r.ref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                GST returns, TDS returns and Tamil Nadu professional tax run alongside these where registered. Our{" "}
                <Link href="/roc-compliances" className={LINK}>ROC compliance</Link> and{" "}
                <Link href="/annual-compliance-package" className={LINK}>annual compliance package</Link> pages cover
                the recurring filings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">Can you set up ESOPs and convert an existing business?</h2>
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

            <div>
              <h2 className="text-2xl text-obsidian">Which Chennai areas do we serve for company registration?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                Our only office is in Anna Nagar. Founders elsewhere in Chennai either visit us there by appointment or
                work with us fully online, since SPICe+, DSC verification and every MCA form are digital. Registered
                office rules are the same across the city; what differs is the kind of business we typically see.
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
                <Link href="/chartered-accountant-anna-nagar-chennai" className={LINK}>
                  CA firm in Anna Nagar
                </Link>{" "}
                page for the other services we handle for local businesses.
              </p>
            </div>

            {CHENNAI_AREAS.map((a) => (
              <div key={a.id} id={a.id}>
                <h3 className="text-xl text-obsidian">Private limited company registration in {a.name}</h3>
                <p className="mt-3 leading-relaxed text-slate">{a.text}</p>
                <p className="mt-2 text-sm">
                  <Link href={a.href} className={LINK}>
                    {a.label}
                  </Link>
                </p>
              </div>
            ))}

            <div id="tamil-nadu">
              <h2 className="text-2xl text-obsidian">Do you register private limited companies across Tamil Nadu?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                Yes, online from our Anna Nagar office. The SPICe+ process is identical across the state; the
                difference is the Registrar. ROC Chennai covers most districts, while ROC Coimbatore covers
                Coimbatore, Tiruppur, Erode, Salem, Namakkal, Dharmapuri, Krishnagiri, Dindigul and the Nilgiris. Each
                city page below explains the local business profile and the registrations that usually follow.
              </p>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[520px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className={TH}>City</th>
                      <th className={TH}>District</th>
                      <th className={TH}>Registrar of Companies</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {TN_CITIES.map((c) => (
                      <tr key={c.slug} className="border-t border-ash">
                        <td className="p-4">
                          <Link href={`/company-registration-${c.slug}`} className={LINK}>
                            Company registration in {c.name}
                          </Link>
                        </td>
                        <td className={TD}>{c.district}</td>
                        <td className={TD}>ROC {c.roc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
