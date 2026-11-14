import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/company-registration-government-fee-calculator";
const TITLE = "Company Registration Government Fee Calculator | TN";
const DESCRIPTION =
  "Estimate government fees to register a Private Limited, OPC or LLP in Tamil Nadu: SPICe+ fee, name reservation, stamp duty, PAN and TAN. Statutory fees only.";
const H1 = "Company Registration Government Fee Calculator";

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

const CRUMBS = [
  { name: "Tools", href: "/tools" },
  { name: H1, href: PATH },
];

const FAQS = [
  {
    question: "Does the estimate include your professional fee?",
    answer:
      "No. The calculator shows statutory charges only, meaning amounts paid to the government. Our professional fee is quoted separately after a scoping call, so that it reflects the work your company actually needs. Digital Signature Certificates are priced by Certifying Authorities and are also outside the government figures shown here.",
  },
  {
    question: "Why is there no SPICe+ fee figure above ₹15 lakh of capital?",
    answer:
      "The SPICe+ filing fee is nil when authorised capital is up to ₹15,00,000. Above that, the fee is computed by SPICe+ under the fee rules, so the calculator does not guess a number. It shows the line as computed at filing and leaves it out of the total of known figures.",
  },
  {
    question: "How is Tamil Nadu stamp duty on the MoA and AoA worked out?",
    answer:
      "The calculator charges ₹200 on the Memorandum of Association and ₹500 on the Articles of Association for each ₹10,00,000 of authorised capital or part of it, capped at ₹5,00,000. It then adds the two. The stamp duty for your case is confirmed before anything is paid.",
  },
  {
    question: "Why are LLP stamp duty and fees not shown as numbers?",
    answer:
      "For an LLP, the stamp duty on the LLP agreement and the FiLLiP fees are shown by the MCA portal at the time of filing. The calculator therefore lists them as shown at filing, adds the PAN and TAN charges, and leaves the other lines out of the total.",
  },
  {
    question: "Is the total what I will actually pay the government?",
    answer:
      "It is an estimate of the known statutory charges, offered for guidance. Rules, slabs and portal fees can change, and lines marked as computed or shown elsewhere are not in the total. We confirm the government charges for your case before you pay anything.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · Company registration"
      h1={H1}
      lead={
        <>
          The government charges to register a company in Tamil Nadu are the MCA SPICe+ filing fee, name reservation if
          done separately, <strong>Tamil Nadu stamp duty</strong> on the MoA and AoA, and PAN and TAN charges. Choose
          your entity and authorised capital below to see a line-item estimate of these statutory charges.
        </>
      }
      subhead="Statutory charges only for a Private Limited Company, OPC or LLP, shown line by line with a total of the known figures."
      crumbs={CRUMBS}
      ctaService="company registration in Tamil Nadu"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calculator that estimates the statutory charges for registering a Private Limited Company, OPC or LLP in Tamil Nadu, including filing fees, name reservation, stamp duty, PAN and TAN.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a quote.</strong> The result is for guidance only. C S Rushil &amp; Co. confirms the
        government charges for your case before you pay anything.
      </EstimateNote>

      <h2 className={H2}>How does this government fee calculator work?</h2>
      <p className={P}>
        It adds up the statutory charges that apply to your entity type and shows each one on its own line.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Private Limited Company and OPC.</strong> The MCA SPICe+ filing fee is nil when authorised capital is
          up to ₹15,00,000. Above that figure the fee is computed by SPICe+ under the fee rules, so no number is shown.
        </li>
        <li>
          <strong>Name reservation.</strong> If the name is reserved separately, ₹1,000 is added.
        </li>
        <li>
          <strong>Tamil Nadu stamp duty.</strong> ₹200 on the MoA and ₹500 on the AoA for each ₹10,00,000 of authorised
          capital or part of it, capped at ₹5,00,000. The calculator applies the cap to each document.
        </li>
        <li>
          <strong>LLP.</strong> Stamp duty on the LLP agreement and the FiLLiP fees are shown by the MCA portal at
          filing, so they appear without numbers.
        </li>
        <li>
          <strong>PAN and TAN.</strong> ₹66 for PAN and ₹65 for TAN are added for every entity type.
        </li>
      </ol>
      <p className={P}>
        The total adds only the figures that are known. Digital Signature Certificates are priced by Certifying
        Authorities and are not a government fee. Our professional fee is quoted separately after a scoping call.
      </p>

      <h2 className={H2}>Which government charges does the calculator include?</h2>
      <p className={P}>
        It includes the statutory charges below and leaves out anything that is not paid to the government.
      </p>
      <Table
        head={["Charge", "Private Limited and OPC", "LLP"]}
        rows={[
          ["MCA filing fee", "SPICe+ fee: nil up to ₹15,00,000 authorised capital, otherwise computed by SPICe+", "FiLLiP fees shown by the MCA portal at filing"],
          ["Name reservation", "₹1,000 if reserved separately", "Not shown"],
          ["Tamil Nadu stamp duty", "MoA ₹200 and AoA ₹500 per ₹10,00,000 of capital or part, capped at ₹5,00,000", "Shown by the MCA portal at filing"],
          ["PAN", "₹66", "₹66"],
          ["TAN", "₹65", "₹65"],
        ]}
      />

      <h2 className={H2}>Which costs are not government fees?</h2>
      <p className={P}>
        Digital Signature Certificates and professional fees are not government fees, so the calculator does not price
        them. DSCs are priced by Certifying Authorities, and our professional fee is quoted separately after a scoping
        call. Entities and directors outside Tamil Nadu are served online.
      </p>

      <ServiceCta
        links={[
          { href: "/private-limited-company-incorporation-chennai", label: "Private Limited registration" },
          { href: "/opc-registration-chennai", label: "OPC registration" },
          { href: "/llp-registration-chennai", label: "LLP registration" },
        ]}
      >
        Ready to register? Read how we handle the process for a{" "}
        <Link href="/private-limited-company-incorporation-chennai" className={LINK}>
          Private Limited Company
        </Link>
        , a{" "}
        <Link href="/opc-registration-chennai" className={LINK}>
          One Person Company
        </Link>{" "}
        or an{" "}
        <Link href="/llp-registration-chennai" className={LINK}>
          LLP
        </Link>
        .
      </ServiceCta>
    </ToolShell>
  );
}
