import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Startup India (DPIIT) Recognition in Chennai" },
  description:
    "Startup India registration in Chennai: DPIIT recognition eligibility under the 2026 definition, the NSWS application, and the Section 140 startup tax holiday.",
  alternates: { canonical: "/startup-india-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Startup India (DPIIT) Recognition in Chennai",
    description: "DPIIT startup recognition for Chennai companies, LLPs and registered partnerships, and the tax holiday application that follows.",
    url: "/startup-india-registration-chennai",
  },
};

const ELIGIBILITY = [
  { test: "Entity type", rule: "Private Limited Company, registered partnership firm, LLP or cooperative society." },
  { test: "Age", rule: "Up to 10 years from incorporation or registration (20 years for Deep Tech startups)." },
  { test: "Turnover", rule: "Less than ₹200 crore in every financial year since incorporation (₹300 crore for Deep Tech startups)." },
  { test: "Innovation", rule: "Working towards innovation or improvement of products, services or processes, with potential to generate employment or wealth." },
  { test: "Not a reconstruction", rule: "Not formed by splitting up or reconstructing an existing business." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/startup-india-registration-chennai`}
      serviceType="Startup India DPIIT Recognition"
      crumbLabel="Startup India Recognition"
      crumbHref="/startup-india-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Startup India · Chennai"
      h1="Startup India (DPIIT) Recognition in Chennai"
      subhead="DPIIT recognition for eligible Chennai startups: eligibility check against the 2026 definition, a clear innovation write-up, the NSWS application, and the Inter-Ministerial Board application for the tax holiday."
      introHeading="What is Startup India registration in Chennai?"
      intro="Startup India registration in Chennai means obtaining DPIIT recognition for your company, LLP, registered partnership or cooperative society. Under the definition in G.S.R. 108(E), an entity qualifies for up to 10 years from incorporation if turnover stays below ₹200 crore and it works on innovation. You apply online through the National Single Window System, and recognition opens tax and funding schemes."
      citation={{
        label: "Startup India: DPIIT recognition and tax exemption",
        href: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html",
      }}
      keyFacts={[
        { label: "Who recognises", value: "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry." },
        { label: "Where to apply", value: "National Single Window System (nsws.gov.in): add the \"Registration as a Startup\" application." },
        { label: "Eligible entities", value: "Private Limited Company, LLP, registered partnership firm or cooperative society. Proprietorships are not eligible." },
        { label: "Limits", value: "Up to 10 years old and turnover below ₹200 crore; Deep Tech startups up to 20 years and ₹300 crore." },
        { label: "Tax holiday", value: "Separate application to the Inter-Ministerial Board; available only to companies and LLPs incorporated from 1 April 2016 to 31 March 2030." },
      ]}
      howTo={{
        heading: "How do you get DPIIT recognition?",
        steps: [
          { name: "Check eligibility", text: "We confirm entity type, date of incorporation and turnover in each year against the current definition, and whether the Deep Tech category applies." },
          { name: "Prepare the innovation write-up", text: "We help you explain the problem, your solution, what is new about it and how it can scale or create jobs. This is the part most applications are judged on." },
          { name: "Create the NSWS account", text: "Register on nsws.gov.in and add \"Registration as a Startup\" under Central approvals." },
          { name: "Upload documents and submit", text: "Certificate of incorporation or registration, PAN, details of directors or partners, and supporting material such as a pitch deck, website, product demo or patents." },
          { name: "Respond to queries and receive the certificate", text: "DPIIT may ask for clarification. Once approved, the recognition certificate can be downloaded and verified on the Startup India portal." },
          { name: "Apply for the tax holiday if eligible", text: "Companies and LLPs can then apply to the Inter-Ministerial Board for the certificate needed to claim the startup deduction." },
        ],
      }}
      subServicesHeading="What does our Startup India support include?"
      subServices={[
        { name: "Eligibility review", text: "Entity type, age and turnover checks, including whether the Deep Tech category fits." },
        { name: "Innovation write-up", text: "A clear, specific description of your product and what makes it new, written in plain language." },
        { name: "NSWS application", text: "Account set-up, form filling, document upload and query responses." },
        { name: "IMB tax holiday application", text: "Application for the Inter-Ministerial Board certificate needed for the Section 140 deduction." },
        { name: "Incorporation first, if needed", text: "Proprietors and unregistered teams can incorporate a Pvt Ltd or LLP before applying." },
        { name: "Post-recognition compliance", text: "ROC filings, accounts and investor reporting so the startup stays eligible and fundable." },
      ]}
      faqs={[
        {
          question: "Who is eligible for Startup India recognition in 2026?",
          answer:
            "Under DPIIT's definition in G.S.R. 108(E), a Private Limited Company, registered partnership firm, LLP or cooperative society qualifies for up to 10 years from incorporation if its turnover has stayed below ₹200 crore in every year and it works on innovation or improvement with employment or wealth potential. Deep Tech startups get 20 years and a ₹300 crore limit.",
        },
        {
          question: "Can a sole proprietorship or OPC get DPIIT recognition?",
          answer:
            "A sole proprietorship cannot, because DPIIT recognition is limited to companies, LLPs, registered partnership firms and cooperative societies. The Startup India portal lists a Private Limited Company among eligible entities; whether a One Person Company qualifies should be confirmed at the time of applying. Most founders who want recognition and investment incorporate a Private Limited Company or LLP first.",
        },
        {
          question: "What tax benefits does a recognised startup get?",
          answer:
            "A recognised company or LLP can apply for the startup tax holiday, now under Section 140 of the Income-tax Act, 2025, which replaced Section 80-IAC from 1 April 2026. It allows a 100% deduction of profits for any three consecutive years out of the first ten, if the startup was incorporated between 1 April 2016 and 31 March 2030 and holds an Inter-Ministerial Board certificate.",
        },
        {
          question: "Is DPIIT recognition enough to claim the tax holiday?",
          answer:
            "No. DPIIT recognition is only the first step. The startup must separately obtain a certificate of eligible business from the Inter-Ministerial Board, must be a company or LLP, and its turnover must not exceed ₹100 crore in the year the deduction is claimed. Registered partnerships and cooperative societies can be recognised but do not get this deduction.",
        },
        {
          question: "Does angel tax still matter for startups?",
          answer:
            "For new funding, generally no. The angel tax provision in Section 56(2)(viib) of the Income-tax Act, 1961 was withdrawn from assessment year 2025-26 by the Finance (No. 2) Act, 2024, so issuing shares above fair value no longer triggers it. The old DPIIT exemption from angel tax matters mainly for share issues made in earlier years that are still open to assessment.",
        },
        {
          question: "How long does DPIIT recognition take?",
          answer:
            "Processing time depends on DPIIT and on how clearly the application explains the innovation. A complete application with a specific write-up and supporting material moves faster than one that needs clarification. We prepare the write-up and documents before submission so the application does not come back with queries. Recognition is valid until the startup crosses the age or turnover limit.",
        },
        {
          question: "Are there Tamil Nadu programmes as well?",
          answer:
            "Yes. Alongside DPIIT recognition, Tamil Nadu runs its own startup mission, StartupTN, with state-level programmes for startups based in the state. Eligibility and benefits are set by the state and change over time, so check StartupTN's current schemes directly. DPIIT recognition is often asked for in state and central scheme applications, so it is usually worth obtaining first.",
        },
      ]}
      relatedQuestions={[
        { question: "Should a startup register as a Pvt Ltd or an LLP?", href: "/company-registration-chennai" },
        { question: "What does Private Limited incorporation involve?", href: "/private-limited-company-incorporation-chennai" },
        { question: "When should a startup bring in a Virtual CFO?", href: "/virtual-cfo-services" },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "company-registration-chennai", "llp-registration-chennai", "virtual-cfo-services", "roc-compliances", "trademark-registration-chennai"]}
      relatedPosts={["startup-india-registration", "private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "common-compliance-mistakes-chennai-startups", "virtual-cfo-omr-startups"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who is eligible for DPIIT recognition?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Test</th>
              <th className="p-4 font-medium text-obsidian">Rule under G.S.R. 108(E)</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {ELIGIBILITY.map((row) => (
              <tr key={row.test} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.test}</td>
                <td className="p-4 text-slate">{row.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does recognition unlock?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Tax holiday:</strong> eligibility to apply for the Section 140 deduction (formerly 80-IAC), for companies and LLPs.</li>
        <li>• <strong className="text-obsidian">Funding schemes:</strong> access to government schemes listed on the Startup India portal, such as the Startup India Seed Fund Scheme, the Credit Guarantee Scheme for Startups and the Fund of Funds.</li>
        <li>• <strong className="text-obsidian">Self-certification:</strong> the portal&apos;s self-certification facility for specified labour and environmental compliances.</li>
        <li>• <strong className="text-obsidian">Public procurement:</strong> relaxations for recognised startups in government purchases, as listed on the portal.</li>
        <li>• <strong className="text-obsidian">Credibility:</strong> a recognition certificate that investors, incubators and state schemes often ask for.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">Not incorporated yet?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Recognition needs a registered entity, and only companies and LLPs can claim the tax holiday. If you are still a proprietor or
        an informal team, start with{" "}
        <Link href="/private-limited-company-incorporation-chennai" className="text-royal-violet underline underline-offset-2">
          private limited company registration
        </Link>{" "}
        or an{" "}
        <Link href="/llp-registration-chennai" className="text-royal-violet underline underline-offset-2">
          LLP
        </Link>
        . Our{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        guide helps you pick the structure that suits funding plans.
      </p>
    </ServicePageTemplate>
  );
}
