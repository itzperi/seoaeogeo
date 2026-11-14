import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P } from "./ToolShell";
import { SITE_URL } from "@/lib/site";

const PATH = "/tools";
const TITLE = "Tax & Compliance Calculators for India | C S Rushil & Co.";
const DESCRIPTION =
  "Calculators from a Chennai chartered accountancy firm: NRI residential status, company registration government fees and GST appeal deadlines with pre-deposit.";
const H1 = "Tax & Compliance Calculators";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: H1,
    description: DESCRIPTION,
    url: PATH,
  },
};

const CRUMBS = [{ name: "Tools", href: PATH }];

const TOOLS = [
  {
    href: "/tools/nri-residential-status-calculator",
    name: "NRI Residential Status Calculator",
    text: "Enter your days in India and a few yes or no answers to see whether you are resident, RNOR, deemed resident or non-resident for Indian tax, with the test explained.",
  },
  {
    href: "/tools/company-registration-government-fee-calculator",
    name: "Company Registration Government Fee Calculator",
    text: "Estimate the statutory charges for a Private Limited Company, OPC or LLP in Tamil Nadu: SPICe+ fee, name reservation, stamp duty, PAN and TAN.",
  },
  {
    href: "/tools/gst-appeal-deadline-pre-deposit-calculator",
    name: "GST Appeal Deadline & Pre-Deposit Calculator",
    text: "Find the due date for a first appeal under section 107 or a GSTAT appeal under section 112, and the pre-deposit by tax head.",
  },
  {
    href: "/tools/nri-property-sale-tds-calculator",
    name: "NRI Property Sale TDS Calculator",
    text: "Compare the section 195 TDS a buyer deducts on the full sale price with the estimated tax on your gain, and see what a lower deduction certificate could leave with you.",
  },
  {
    href: "/tools/foreign-subsidiary-compliance-calendar",
    name: "India Subsidiary First-Year Compliance Calendar",
    text: "Turn your incorporation and share allotment dates into a dated first-year calendar: first auditor, FC-GPR, INC-20A, FLA, transfer pricing, AGM, AOC-4 and MGT-7.",
  },
];

const FAQS = [
  {
    question: "Are these calculators accurate enough to rely on?",
    answer:
      "They apply the stated rules exactly to the figures you enter, but they are estimates for guidance and not advice. Facts such as exact travel days, the communication date of an order or the capital structure of a company can change the answer, so we confirm the result for your case.",
  },
  {
    question: "Is my data saved or sent anywhere?",
    answer:
      "No. Each calculator works in your browser on the figures you type and does not send them to us. If you decide to talk to us afterwards, you choose what to share on WhatsApp, on a call or in a booked consultation.",
  },
  {
    question: "Do the calculators include your professional fee?",
    answer:
      "No. The fee calculator shows government charges only, and the other tools do not price our services at all. Our professional fee is quoted separately after a scoping call, based on the work your matter needs, so you see the full picture of cost before anything starts.",
  },
  {
    question: "Which law do the calculators follow?",
    answer:
      "Indian law only. The residential status tool uses the section 6 tests of the Income-tax Act, 1961, which the 2025 Act carries forward. The GST tool follows the CGST Act as amended up to the Finance Act, 2025. Foreign tax is for your home adviser.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Calculators"
      h1={H1}
      lead={
        <>
          These <strong>calculators</strong> from C S Rushil &amp; Co., a chartered accountancy firm in Anna Nagar,
          Chennai, answer questions we hear often, such as: what is my residential status, what will the government charge
          to register my company, and when is my GST appeal due. Each result is an estimate that we confirm.
        </>
      }
      subhead="Working tools for NRI tax, NRI property sales, company registration, foreign-owned subsidiaries and GST appeals, each with the rules explained in words."
      crumbs={CRUMBS}
      ctaService="tax and compliance calculators"
      faqs={FAQS}
      toolNodes={[
        {
          "@type": "ItemList",
          "@id": `${SITE_URL}${PATH}#tools`,
          name: H1,
          itemListElement: TOOLS.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}${t.href}`,
            name: t.name,
          })),
        },
      ]}
    >
      <h2 className="text-2xl text-obsidian">What are these calculators for?</h2>
      <p className={P}>
        They give you a quick, reasoned first answer to a common compliance question before you speak to anyone. Each
        page states the rules it applies in plain words, so you can see why you got the result you did.
      </p>

      <h2 className={H2}>Which calculator should I use?</h2>
      <p className={P}>Pick the one that matches your question.</p>
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-1">
        {TOOLS.map((t) => (
          <li key={t.href} className="rounded-cards border border-ash bg-fog p-6">
            <h3 className="text-lg font-semibold text-obsidian">
              <Link href={t.href} className={LINK}>
                {t.name}
              </Link>
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate">{t.text}</p>
          </li>
        ))}
      </ul>

      <h2 className={H2}>Are the results final?</h2>
      <p className={P}>
        No, every result is an estimate for guidance, and the firm confirms it for your case before you act on it. The
        calculators follow Indian law only, and clients outside Chennai are served online.
      </p>
      <EstimateNote>
        <strong>Estimates only.</strong> Nothing on these pages is a determination or a quote. If a result affects a
        filing, a payment or a deadline, talk to us first.
      </EstimateNote>
    </ToolShell>
  );
}
