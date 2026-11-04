import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/gst-appeal-deadline-pre-deposit-calculator";
const TITLE = "GST Appeal Deadline & Pre-Deposit Calculator";
const DESCRIPTION =
  "Work out your GST appeal due date and the 10% pre-deposit for a first appeal under section 107 or a GSTAT appeal under section 112, with caps applied.";
const H1 = "GST Appeal Deadline & Pre-Deposit Calculator";

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
    question: "How long do I have to file a GST appeal?",
    answer:
      "Three months from the date the order was communicated to you, for both the first appeal under section 107 and the second appeal to GSTAT under section 112. The authority can allow one further month for a first appeal, or three further months for a GSTAT appeal, only if it accepts that you had sufficient cause.",
  },
  {
    question: "How much pre-deposit is needed for a first GST appeal?",
    answer:
      "You pay the admitted tax in full, plus 10% of the disputed tax. The 10% is capped at ₹20 crore each for CGST and SGST, and ₹40 crore for IGST. For an order that only imposes a penalty, the pre-deposit is 10% of the penalty. The calculator applies these steps to your figures.",
  },
  {
    question: "Is a pre-deposit needed again for the second appeal to GSTAT?",
    answer:
      "Yes. A second appeal requires a further 10% of the tax still in dispute after the first appeal, with the same caps. For a penalty-only order it is a further 10% of the penalty. Enter the tax still in dispute after the first appeal when you choose the section 112 stage.",
  },
  {
    question: "Does the three months run from the order date or the date I received it?",
    answer:
      "It runs from the date the order was communicated to you, which is why the calculator asks for that date and not the date printed on the order. If you are unsure when communication took place, the date on the portal or on the notice is a starting point. We confirm it for your case.",
  },
  {
    question: "Can I rely on the result without checking with a professional?",
    answer:
      "Treat it as an estimate for guidance. It follows the CGST Act as amended up to the Finance Act, 2025, and rules or notifications can change after that. A wrong date can cost you the appeal, so we confirm the due date and pre-deposit for your order before anything is filed.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · GST appeals"
      h1={H1}
      lead={
        <>
          A GST appeal must be filed within <strong>three months</strong> of the date the order was communicated to you,
          for a first appeal under section 107 and a GSTAT appeal under section 112. The pre-deposit is the admitted tax
          plus 10% of the disputed tax, with caps. Enter your order details below for the dates and amounts.
        </>
      }
      subhead="Appeal due date, the condonable extension, and the pre-deposit by tax head, for a first appeal or a GSTAT appeal."
      crumbs={CRUMBS}
      ctaService="GST appeal"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calculator that works out the GST appeal due date and the pre-deposit for a first appeal under section 107 or a second appeal to GSTAT under section 112.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not legal advice.</strong> The result is for guidance only and follows the CGST Act as
        amended up to the Finance Act, 2025. C S Rushil &amp; Co. confirms the due date and pre-deposit for your case.
      </EstimateNote>

      <h2 className={H2}>How does this GST appeal calculator work?</h2>
      <p className={P}>
        It adds three months to the date the order was communicated, then applies the pre-deposit rule for the stage
        you choose.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Due date.</strong> The appeal is due three months after the communication date. A section 107 appeal
          can be extended by one further month, and a section 112 appeal by three further months, only if the authority
          accepts that there was sufficient cause.
        </li>
        <li>
          <strong>First appeal (section 107).</strong> The admitted tax is paid in full, plus 10% of the disputed tax,
          capped at ₹20 crore for CGST and ₹20 crore for SGST, and ₹40 crore for IGST.
        </li>
        <li>
          <strong>Second appeal (section 112).</strong> A further 10% of the tax still in dispute after the first appeal
          is deposited, with the same caps.
        </li>
        <li>
          <strong>Penalty-only orders.</strong> The pre-deposit is 10% of the penalty.
        </li>
      </ol>

      <h2 className={H2}>What are the time limits and pre-deposit rules at each stage?</h2>
      <p className={P}>
        The two stages share the three-month limit and the 10% rate but differ in the extension and in what the 10% is
        calculated on.
      </p>
      <Table
        head={["Stage", "Time limit", "Condonable extension", "Pre-deposit"]}
        rows={[
          ["First appeal to the Appellate Authority (section 107)", "3 months from communication of the order", "1 further month, if sufficient cause is accepted", "Admitted amount in full plus 10% of disputed tax, capped at ₹20 crore CGST and ₹20 crore SGST (₹40 crore IGST)"],
          ["Second appeal to GSTAT (section 112)", "3 months from communication of the appellate order", "3 further months, if sufficient cause is accepted", "A further 10% of the tax still in dispute, with the same caps"],
          ["Penalty-only order", "As for the stage above", "As for the stage above", "10% of the penalty"],
        ]}
      />

      <h2 className={H2}>Is the result of this calculator final?</h2>
      <p className={P}>
        No, it is an estimate for guidance, and C S Rushil &amp; Co. confirms the date and the amounts for your case.
        The figures follow the CGST Act as amended up to the Finance Act, 2025, and the right communication date, the
        correct tax split and any change in the law all affect the answer. Clients outside Chennai are served online.
      </p>

      <ServiceCta
        links={[
          { href: "/gst-litigation-chennai", label: "GST litigation and appeals" },
          { href: "/gst-notice-reply-chennai", label: "GST notice reply" },
        ]}
      >
        Need someone to file the appeal or reply to the notice? Read about our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>
          GST litigation and appeals service
        </Link>{" "}
        or our{" "}
        <Link href="/gst-notice-reply-chennai" className={LINK}>
          GST notice reply service
        </Link>
        .
      </ServiceCta>
    </ToolShell>
  );
}
