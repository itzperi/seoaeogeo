import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ADDRESS_FULL, BUSINESS_HOURS, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Chennai | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration service in Chennai for Pvt Ltd, LLP, OPC, Section 8 and partnership firms: SPICe+ and FiLLiP filing, DSC, DIN and compliance.",
  alternates: { canonical: "/company-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration Service in Chennai",
    description:
      "Private Limited, LLP, OPC, Section 8, partnership and proprietorship registration for Chennai and Tamil Nadu founders.",
    url: "/company-registration-chennai",
  },
};

const STRUCTURES = [
  {
    name: "Private Limited Company",
    href: "/private-limited-company-incorporation-chennai",
    members: "2 directors and 2 shareholders (can be the same people); up to 200 members",
    liability: "Limited to unpaid share capital",
    time: "7–12 working days once documents are ready",
    suits: "Startups raising equity, businesses planning to scale or issue ESOPs",
  },
  {
    name: "Limited Liability Partnership (LLP)",
    href: "/llp-registration-chennai",
    members: "2 partners, of whom at least 2 are designated partners",
    liability: "Limited to agreed contribution",
    time: "10–15 working days once documents are ready",
    suits: "Professional firms, consultancies, family businesses not raising equity",
  },
  {
    name: "One Person Company (OPC)",
    href: "/opc-registration-chennai",
    members: "1 member, 1 nominee and at least 1 director",
    liability: "Limited to unpaid share capital",
    time: "Same SPICe+ route as a Pvt Ltd",
    suits: "Solo founders who want a company without a co-founder",
  },
  {
    name: "Partnership Firm",
    href: "/partnership-firm-registration-chennai",
    members: "2 partners",
    liability: "Unlimited; partners are jointly and severally liable",
    time: "Deed first; registration with the Registrar of Firms follows",
    suits: "Small trading or family businesses with trusted partners",
  },
  {
    name: "Sole Proprietorship",
    href: "/proprietorship-registration-chennai",
    members: "1 owner",
    liability: "Unlimited; business and owner are the same person",
    time: "No incorporation; GST or Udyam registration in days",
    suits: "Freelancers, shops and low-risk local businesses",
  },
  {
    name: "Section 8 Company",
    href: "/section-8-company-registration-chennai",
    members: "2 directors and 2 members for a private Section 8 company",
    liability: "Limited",
    time: "SPICe+ with a Section 8 licence; usually longer than a Pvt Ltd",
    suits: "NGOs, foundations, associations and not-for-profit projects",
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-chennai`}
      serviceType="Company Registration"
      crumbLabel="Company Registration"
      crumbHref="/company-registration-chennai"
      eyebrow="Company Registration · Chennai"
      h1="Company Registration Service in Chennai"
      subhead="Private Limited, LLP, OPC, Section 8, partnership and proprietorship set-ups: name approval, MCA filing and the first-year compliance calendar, handled by a chartered accountant firm in Anna Nagar."
      introHeading="What does our company registration service in Chennai cover?"
      intro="Our company registration service in Chennai covers Private Limited companies, LLPs, OPCs, Section 8 companies, partnership firms and proprietorships. We obtain DSCs, reserve the name, file SPICe+ or FiLLiP, and set up PAN, TAN, the bank account and post-incorporation filings. With documents ready, a Pvt Ltd typically takes 7–12 working days and an LLP 10–15."
      citation={{
        label: "MCA SPICe+ and linked filings FAQs",
        href: "https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html",
      }}
      keyFacts={[
        { label: "Typical time", value: "Pvt Ltd: 7–12 working days. LLP: 10–15 working days. Both counted from the point documents are ready." },
        { label: "Government form", value: "SPICe+ Part A and Part B with AGILE-PRO-S, e-MoA (INC-33) and e-AoA (INC-34) for companies; FiLLiP for LLPs. Filed on the MCA V3 portal." },
        { label: "Minimum members", value: "Pvt Ltd: 2 directors and 2 shareholders. LLP: 2 designated partners. OPC: 1 member plus a nominee." },
        { label: "Resident director", value: "A company needs at least one director who stayed in India for 182 days or more in the financial year (Section 149(3), Companies Act, 2013)." },
        { label: "Key deadlines", value: "INC-20A (commencement of business) within 180 days of incorporation; first auditor within 30 days; LLP agreement (Form 3) within 30 days." },
      ]}
      howTo={{
        heading: "How do you register a company in Chennai, step by step?",
        steps: [
          { name: "Name approval (SPICe+ Part A)", text: "We check the proposed name against existing companies, LLPs and registered trademarks, then file SPICe+ Part A. An approved name is reserved for 20 days, and Part B must be filed within that window (it can be extended for a fee)." },
          { name: "Digital Signature Certificates (DSC)", text: "Every proposed director and subscriber needs a Class 3 DSC to sign the MCA web forms. Issuance uses online identity verification, so you do not need to visit a certifying office." },
          { name: "Director Identification Number (DIN)", text: "Proposed directors who do not already hold a DIN are allotted one through SPICe+ Part B itself; no separate DIR-3 application is needed for a new company." },
          { name: "Incorporation filing (SPICe+ Part B)", text: "Part B carries the company details, capital structure, registered office and subscriber declarations. The nominee consent for an OPC (INC-3) and the Section 8 licence application are also made within this form." },
          { name: "AGILE-PRO-S", text: "This linked form is mandatory with Part B. It registers the company with EPFO and ESIC and requests the bank account opening; GST registration through it is optional." },
          { name: "e-MoA and e-AoA (INC-33 and INC-34)", text: "We draft the objects clause around what you actually plan to do, and Articles that already allow for share classes, ESOPs and investor rights, so you are not amending them in your first funding round." },
          { name: "Certificate of Incorporation with PAN and TAN", text: "Once the Registrar approves, the certificate is issued with the Corporate Identification Number (CIN), and PAN and TAN are allotted in the same process." },
          { name: "Bank account", text: "The current account is opened with the bank chosen in AGILE-PRO-S. Subscribers then pay in their share capital, which the INC-20A declaration relies on." },
          { name: "Post-incorporation filings", text: "INC-20A within 180 days, first statutory auditor within 30 days (ADT-1 is filed to record it), share certificates within 60 days, and a first board meeting within 30 days of incorporation." },
        ],
      }}
      subServicesHeading="Which business structures can you register with us?"
      subServices={[
        { name: "Private Limited Company", text: "SPICe+ incorporation with investor-ready Articles, AGILE-PRO-S and the first-180-days compliance calendar." },
        { name: "Limited Liability Partnership", text: "FiLLiP incorporation, DIN for designated partners, and the LLP agreement filed in Form 3 within 30 days." },
        { name: "One Person Company", text: "Single-founder company with nominee consent (INC-3) built into SPICe+ Part B." },
        { name: "Partnership Firm", text: "Deed drafting, stamping, registration with the Registrar of Firms on tnreginet, PAN and GST." },
        { name: "Proprietorship set-up", text: "GST, Udyam and Tamil Nadu Shops and Establishments registration, plus documents for a current account." },
        { name: "Section 8 Company and conversions", text: "Not-for-profit companies, and conversion of a proprietorship, partnership or LLP into a company as the business grows." },
      ]}
      faqs={[
        {
          question: "How long does company registration take in Chennai?",
          answer:
            "A Private Limited Company or OPC typically takes 7–12 working days and an LLP 10–15 working days, counted from the point all documents and DSCs are ready. The clock depends on MCA processing and whether the proposed name is accepted first time. Allow about three weeks in total if you are collecting documents from scratch. Most delays come from a rejected name or a mismatch between a director's PAN and Aadhaar details, which we check before filing.",
        },
        {
          question: "What documents are needed to register a company?",
          answer:
            "Each director and shareholder needs PAN, Aadhaar, a photograph, a recent bank statement or utility bill as address proof, and a working mobile number and email for OTPs. For the registered office, you need a recent electricity bill or property tax receipt, plus a rent agreement and the owner's NOC if the premises are rented. Foreign nationals and NRIs use their passport, with overseas documents notarised or apostilled as applicable. The full checklist is in the documents section above.",
        },
        {
          question: "Can I register a company online from home?",
          answer:
            "Yes. Company and LLP registration in India is fully online through the MCA V3 portal, DSCs are issued with online identity verification, and documents are signed digitally. You do not need to visit the Registrar of Companies. Founders anywhere in Tamil Nadu or outside India can complete the process remotely with us, and you can still meet us at our Anna Nagar office if you prefer to hand over documents in person.",
        },
        {
          question: "Is there a minimum capital to register a Private Limited Company?",
          answer:
            "No. There is no statutory minimum paid-up capital for a Private Limited Company or OPC in India; the requirement was removed by the Companies (Amendment) Act, 2015. You choose the authorised and paid-up capital. Most founders set a figure that covers early expenses, because increasing capital later needs a board and shareholder process and an MCA filing. An LLP has no share capital at all; partners agree their contribution in the LLP agreement.",
        },
        {
          question: "Should I choose a Pvt Ltd, an LLP or an OPC?",
          answer:
            "Choose a Private Limited Company if you plan to raise equity, issue ESOPs or bring in investors. Choose an LLP if you are a professional or services partnership that wants limited liability with lighter compliance and no plan to sell equity. Choose an OPC if you are a single founder who wants a company and can convert to a Pvt Ltd later. The comparison table and decision guide above set out the trade-offs in more detail.",
        },
        {
          question: "Can NRIs or foreign nationals be directors of an Indian company?",
          answer:
            "Yes. NRIs and foreign nationals can be directors and shareholders of an Indian Private Limited Company, provided at least one director stayed in India for 182 days or more in the financial year. Foreign directors need a DIN and DSC based on their passport. Foreign shareholding must also follow FDI rules for the sector. See our page on company registration in India for foreigners for the additional documents and RBI reporting involved.",
        },
        {
          question: "Can my home address be the registered office?",
          answer:
            "Yes. A residential address in Chennai can be the registered office of a company or LLP, as long as you can produce a recent electricity bill or property tax receipt and, if the property belongs to someone else, a No Objection Certificate from the owner. The address appears on the public MCA record and on your letterheads. You can shift the registered office later, which involves an MCA filing such as INC-22 for a company.",
        },
        {
          question: "What compliance applies after incorporation?",
          answer:
            "A new company must hold its first board meeting within 30 days, appoint its first statutory auditor within 30 days, issue share certificates within 60 days, and file INC-20A within 180 days after subscribers pay for their shares. After that, it holds board meetings through the year, has its accounts audited every year whatever its turnover, and files annual returns with the MCA alongside income tax and, if registered, GST returns.",
        },
        {
          question: "Can a proprietorship be converted into a Private Limited Company?",
          answer:
            "Not directly. Indian law has no conversion route for a proprietorship, so a new Private Limited Company is incorporated and takes over the business through a business transfer agreement, after which GST, Udyam, licences and bank accounts are moved to the company's PAN. A partnership firm, by contrast, can register as a company under Section 366 of the Companies Act, 2013, or convert into an LLP by filing Form 17.",
        },
        {
          question: "Do I need GST registration at the time of incorporation?",
          answer:
            "Not always. GST registration is optional in AGILE-PRO-S, so a new company can apply for it during incorporation or later. It becomes mandatory once turnover crosses the GST threshold, and immediately for some businesses regardless of turnover, such as those making inter-state supplies of goods or selling through e-commerce platforms. If your clients expect GST invoices from day one, it is simpler to apply alongside SPICe+.",
        },
      ]}
      relatedQuestions={[
        { question: "What does Private Limited incorporation involve in detail?", href: "/private-limited-company-incorporation-chennai" },
        { question: "How do I set up an Indian company as a foreign founder?", href: "/company-registration-india-for-foreigners" },
        { question: "When does a new company need GST registration?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={[
        "msme-udyam-registration-chennai",
        "gst-registration-chennai",
        "roc-compliances",
        "digital-signature-certificate-chennai",
        "annual-compliance-package",
        "startup-india-registration-chennai",
      ]}
      relatedPosts={[
        "spice-plus-incorporation-explained",
        "private-limited-vs-llp-chennai-startups",
        "llp-vs-opc-vs-pvt-ltd",
        "post-incorporation-compliance-checklist",
        "common-compliance-mistakes-chennai-startups",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">How do Pvt Ltd, LLP, OPC, partnership, proprietorship and Section 8 compare?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Timelines below are what we typically see once documents are ready; government processing can vary. Foreign-owned businesses
        should also read our page on{" "}
        <Link href="/company-registration-india-for-foreigners" className="text-royal-violet underline underline-offset-2">
          company registration in India for foreigners
        </Link>
        .
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Structure</th>
              <th className="p-4 font-medium text-obsidian">Minimum members</th>
              <th className="p-4 font-medium text-obsidian">Liability</th>
              <th className="p-4 font-medium text-obsidian">Typical time</th>
              <th className="p-4 font-medium text-obsidian">Suited for</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {STRUCTURES.map((row) => (
              <tr key={row.name} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">
                  <Link href={row.href} className="text-royal-violet underline underline-offset-2">
                    {row.name}
                  </Link>
                </td>
                <td className="p-4 text-slate">{row.members}</td>
                <td className="p-4 text-slate">{row.liability}</td>
                <td className="p-4 text-slate">{row.time}</td>
                <td className="p-4 text-slate">{row.suits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Which structure should you choose?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Four questions settle the choice for most founders. Answer them before you pick a name, because converting later costs time
        and fresh registrations.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">Will you raise funding?</h3>
          <p className="mt-2 text-sm text-slate">
            Angel investors and venture funds invest through shares, so they expect a Private Limited Company. An LLP cannot issue
            shares, and an OPC has a single member. If outside equity is likely in the next two or three years, start as a Pvt Ltd.
          </p>
        </div>
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">How much personal liability can you carry?</h3>
          <p className="mt-2 text-sm text-slate">
            In a proprietorship or partnership firm, your house and savings are exposed to business debts. A company, OPC or LLP
            limits your exposure to what you put in. Businesses that sign large contracts, hold inventory or borrow should not run
            with unlimited liability.
          </p>
        </div>
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">How much compliance can you handle?</h3>
          <p className="mt-2 text-sm text-slate">
            A company needs board meetings, an annual audit regardless of turnover, and annual MCA returns. An LLP files Form 11 by
            30 May and Form 8 by 30 October, and needs an audit only if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh.
            A proprietorship has no MCA filings at all.
          </p>
        </div>
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">How will profits be taxed?</h3>
          <p className="mt-2 text-sm text-slate">
            A proprietor pays tax at personal slab rates. A company pays corporate tax and shareholders pay again on dividends. An LLP
            or firm pays tax on its profit and partners&apos; profit share is not taxed again in their hands. We model the numbers for
            your expected profit before you decide.
          </p>
        </div>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What documents do you need?</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">For each director, partner or subscriber</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li>• PAN card (mandatory for Indian citizens)</li>
            <li>• Aadhaar, with name and date of birth matching PAN exactly</li>
            <li>• Recent passport-size photograph</li>
            <li>• Address proof: recent bank statement, electricity or mobile bill</li>
            <li>• Personal mobile number and email for MCA and DSC OTPs</li>
            <li>• NRIs and foreign nationals: passport and overseas address proof, notarised or apostilled as applicable</li>
          </ul>
        </div>
        <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-medium text-obsidian">For the registered office</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li>• Recent electricity bill, water bill or property tax receipt for the address</li>
            <li>• Rent or lease agreement, if the premises are rented</li>
            <li>• No Objection Certificate from the owner (also needed if a family member owns your home)</li>
            <li>• Proposed names (two or three options) and a short description of the business</li>
            <li>• Capital and shareholding split, or contribution and profit-sharing ratio for an LLP</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Register from anywhere in Tamil Nadu</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Every step of company and LLP registration happens online on the MCA portal, so you do not need to be in Chennai to work with
        us. Founders in Coimbatore, Madurai, Trichy, Salem, Hosur or any other town in Tamil Nadu can send scanned documents, complete
        DSC verification by video, and sign the forms digitally. The registered office is wherever your business actually operates;
        it does not have to be in Chennai. We share a checklist on day one, review documents before anything is filed, and update you
        in writing at each stage.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Visit us in Anna Nagar</h2>
      <div className="mt-6 max-w-3xl rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
        <p className="text-sm leading-relaxed text-slate">
          C S Rushil &amp; Co., Chartered Accountants
          <br />
          {ADDRESS_FULL}
        </p>
        <ul className="mt-4 space-y-1 text-sm text-slate">
          {BUSINESS_HOURS.map((h) => (
            <li key={h.days}>
              <span className="font-medium text-obsidian">{h.days}:</span> {h.hours}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate">
          Phone:{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-medium text-royal-violet underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>
          . Bring your PAN, Aadhaar and registered-office proof, and we can review documents and start DSC verification in one
          visit. See our{" "}
          <Link href="/chartered-accountant-anna-nagar-chennai" className="text-royal-violet underline underline-offset-2">
            CA firm in Anna Nagar
          </Link>{" "}
          page for the other services we handle for local businesses.
        </p>
      </div>
    </ServicePageTemplate>
  );
}
