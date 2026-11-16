import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/gst-late-fee-interest-calculator";
const TITLE = "GST Late Fee & Interest Calculator (GSTR-3B, GSTR-1, GSTR-9)";
const DESCRIPTION =
  "Work out the late fee and 18% interest on a late GSTR-3B, GSTR-1, GSTR-9 or GSTR-4, split into CGST and SGST, with the caps in CBIC notifications applied.";
const H1 = "GST Late Fee & Interest Calculator";

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

const SOURCES = [
  {
    href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter9/section47_v1.00.html",
    text: "CBIC: section 47 of the CGST Act, 2017 (levy of late fee)",
  },
  {
    href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter10/section50_v1.00.html",
    text: "CBIC: section 50 of the CGST Act, 2017 (interest on delayed payment of tax)",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-05/notfctn-76-central-tax-english-2018.pdf",
    text: "Notification 76/2018-Central Tax: GSTR-3B late fee of ₹25 a day, ₹10 a day for nil returns",
  },
  {
    href: "https://cbic-gst.gov.in/pdf/central-tax/notfctn-19-central-tax-english-2021.pdf",
    text: "Notification 19/2021-Central Tax: GSTR-3B late fee caps from June 2021",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-05/notification-4-2018-central_tax-english.pdf",
    text: "Notification 4/2018-Central Tax: GSTR-1 late fee of ₹25 a day, ₹10 a day for nil outward supplies",
  },
  {
    href: "https://cbic-gst.gov.in/pdf/central-tax/notfctn-20-central-tax-english-2021.pdf",
    text: "Notification 20/2021-Central Tax: GSTR-1 late fee caps from June 2021",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-05/notfctn-73-central-tax-english.pdf",
    text: "Notification 73/2017-Central Tax: GSTR-4 late fee of ₹25 a day, ₹10 a day for nil returns",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-05/notfctn-21-central-tax-english-2021.pdf",
    text: "Notification 21/2021-Central Tax: GSTR-4 late fee caps from FY 2021-22",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-05/07_eng.pdf",
    text: "Notification 7/2023-Central Tax: GSTR-9 late fee from FY 2022-23",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-04/notfctn-13-central-tax-english.pdf",
    text: "Notification 13/2017-Central Tax: rates of interest under section 50",
  },
  {
    href: "https://gstcouncil.gov.in/sites/default/files/2024-04/finance_act_of_2022.pdf",
    text: "Finance Act, 2022: sections 111 and 116 on interest for wrongly availed and utilised credit",
  },
];

const FAQS = [
  {
    question: "What is the late fee for filing GSTR-3B late?",
    answer:
      "₹50 a day in total, ₹25 CGST and ₹25 SGST, or ₹20 a day in total if the tax payable is nil. The total is capped at ₹500 for a nil return, ₹2,000 where aggregate turnover in the preceding year was up to ₹1.5 crore, ₹5,000 up to ₹5 crore and ₹10,000 above that.",
  },
  {
    question: "Is a late fee charged on a nil GST return?",
    answer:
      "Yes. A nil GSTR-3B or a GSTR-1 with no outward supplies attracts ₹10 a day CGST and ₹10 a day SGST, capped at ₹250 each, so the most you pay is ₹500. A nil return has no tax to pay, so no interest arises on it.",
  },
  {
    question: "How is interest on a late GSTR-3B calculated?",
    answer:
      "At 18% a year under section 50(1), for each day from the day after the due date until the tax is paid. When the return itself is filed late, interest is charged only on the tax paid through the electronic cash ledger, not on the part set off against input tax credit.",
  },
  {
    question: "What is the late fee for GSTR-9?",
    answer:
      "From FY 2022-23, ₹25 a day CGST and ₹25 a day SGST where aggregate turnover is up to ₹5 crore, and ₹50 a day each above ₹5 crore up to ₹20 crore, with each head capped at 0.02% of turnover in the State. Above ₹20 crore it is ₹100 a day each, capped at 0.25%.",
  },
  {
    question: "Will the GST portal charge exactly what this calculator shows?",
    answer:
      "It should match for a plain late filing under the notified rules, but the portal's figure is final. Amnesty schemes, waivers for specific periods and extended due dates are not modelled here, so check the date and the period with a CA before you rely on the number.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · GST returns"
      h1={H1}
      lead={
        <>
          A late GST return attracts a late fee under section 47 of the CGST Act. After the CBIC waiver notifications, a
          late GSTR-3B or GSTR-1 costs <strong>₹50 a day</strong> in total (₹20 for a nil return), capped by turnover,
          and a late GSTR-3B also carries <strong>18% interest</strong> on the tax paid in cash. Enter your dates below.
        </>
      }
      subhead="Late fee split into CGST and SGST, the cap that applies, days late and section 50 interest, for GSTR-3B, GSTR-1, GSTR-9 and GSTR-4."
      crumbs={CRUMBS}
      ctaService="GST late fee"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calculator that works out the late fee under section 47 of the CGST Act, as reduced by CBIC notifications, and interest under section 50(1) for a late GSTR-3B, GSTR-1, GSTR-9 or GSTR-4.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a determination.</strong> Amnesty schemes and waivers for specific periods are not
        modelled, and the GST portal computes the final late fee and interest when you file. C S Rushil &amp; Co. checks
        the figures for your GSTIN before you pay.
      </EstimateNote>

      <h2 className={H2}>How is the GST late fee calculated?</h2>
      <p className={P}>
        Section 47(1) of the CGST Act charges ₹100 for every day a return such as GSTR-3B or GSTR-1 is late, up to
        ₹5,000, and the State GST Acts charge the same again. Section 47(2) charges ₹100 a day for a late annual return,
        up to 0.25% of turnover in the State. The Government has used its power under section 128 to waive most of this,
        so the amount actually payable is set by notifications.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Count the days late.</strong> The count starts the day after the due date and ends on the day you
          file. Filing on or before the due date means no late fee.
        </li>
        <li>
          <strong>Apply the daily rate.</strong> For GSTR-3B, GSTR-1 and GSTR-4 it is ₹25 a day CGST and ₹25 a day SGST,
          or ₹10 each for a nil return (Notifications 76/2018, 4/2018 and 73/2017-Central Tax).
        </li>
        <li>
          <strong>Apply the cap.</strong> The total for each head cannot exceed the cap for your class of taxpayer,
          shown in the table below.
        </li>
      </ol>

      <h2 className={H2}>What are the late fee caps for each return?</h2>
      <p className={P}>
        The caps below are per head; the total you pay is double, once for CGST and once for SGST or UTGST.
      </p>
      <Table
        head={["Return and taxpayer", "Per day, each head", "Cap, each head", "Source"]}
        rows={[
          ["GSTR-3B, nil tax payable", "₹10", "₹250", "Notifications 76/2018 and 19/2021-CT"],
          ["GSTR-3B, turnover up to ₹1.5 crore", "₹25", "₹1,000", "Notifications 76/2018 and 19/2021-CT"],
          ["GSTR-3B, turnover above ₹1.5 crore up to ₹5 crore", "₹25", "₹2,500", "Notifications 76/2018 and 19/2021-CT"],
          ["GSTR-3B, turnover above ₹5 crore", "₹25", "₹5,000", "Section 47(1) and Notification 76/2018-CT"],
          ["GSTR-1, nil outward supplies", "₹10", "₹250", "Notifications 4/2018 and 20/2021-CT"],
          ["GSTR-1, by the same turnover bands as GSTR-3B", "₹25", "₹1,000, ₹2,500 or ₹5,000", "Notifications 4/2018 and 20/2021-CT"],
          ["GSTR-4, nil tax payable or other", "₹10 or ₹25", "₹250 or ₹1,000", "Notifications 73/2017 and 21/2021-CT"],
          ["GSTR-9, turnover up to ₹5 crore", "₹25", "0.02% of turnover in the State", "Notification 7/2023-CT"],
          ["GSTR-9, turnover above ₹5 crore up to ₹20 crore", "₹50", "0.02% of turnover in the State", "Notification 7/2023-CT"],
          ["GSTR-9, turnover above ₹20 crore", "₹100", "0.25% of turnover in the State", "Section 47(2)"],
        ]}
      />
      <p className={P}>
        For GSTR-3B and GSTR-1 the turnover is the aggregate turnover of the preceding financial year, and the caps
        apply from the tax period June 2021. For GSTR-9 it is the aggregate turnover of the year the return covers, and
        the rates apply from FY 2022-23. Taxpayers with aggregate turnover up to ₹2 crore have been exempted from filing
        GSTR-9 for recent years, so check whether the return was due at all. Our{" "}
        <Link href="/blog/gstr9-annual-return-checklist" className={LINK}>
          GSTR-9 annual return checklist
        </Link>{" "}
        covers what to reconcile before you file.
      </p>

      <h2 className={H2}>How does interest under section 50 work?</h2>
      <p className={P}>
        Section 50(1) charges interest at 18% a year, the rate fixed by Notification 13/2017-Central Tax, on tax not
        paid by the due date. It runs from the day after the due date until the day the tax is paid, and is worked out
        by the day. Under the proviso to section 50(1), when a return is filed late, interest is charged only on the
        tax paid through the electronic cash ledger, not on the part set off against input tax credit. That relief does
        not apply if the return is filed after proceedings under section 73, 74 or 74A have started.
      </p>
      <p className={P}>
        A worked example: a business with turnover of ₹1 crore files its GSTR-3B for July 2025, due on 20 August 2025,
        on 19 September 2025. That is 30 days late. The late fee is ₹25 × 30 = ₹750 CGST and ₹750 SGST, ₹1,500 in total,
        below the ₹1,000 cap for each head. It pays ₹2,00,000 in cash with the return, so interest is ₹2,00,000 × 18% ×
        30 ÷ 365, about ₹2,959. The total cost of the delay is about ₹4,459.
      </p>
      <p className={P}>
        Section 50(3) is separate. It charges interest on input tax credit that was wrongly availed and utilised, at a
        rate the Act caps at 24% a year. Notification 13/2017-Central Tax first fixed that rate at 24%; section 116 of
        the Finance Act, 2022 amended it from 1 July 2017, and the notified rate is now 18%. The calculator does not
        work out section 50(3) interest, because it depends on when the credit was used and reversed.
      </p>

      <h2 className={H2}>What does this calculator not cover?</h2>
      <p className={P}>
        Amnesty schemes and waivers for specific periods are not modelled. Over the years the Government has waived or
        reduced late fees for particular months, for returns filed within a window, and for particular States, and
        those reliefs are applied by the portal, not here. Periods before June 2021 for GSTR-3B and GSTR-1, before FY
        2021-22 for GSTR-4 and before FY 2022-23 for GSTR-9 had different rules, so the calculator does not accept them.
        Penalties, and interest on demands raised in a notice, are also outside its scope. The GST portal computes the
        final late fee and interest when you file. To catch up on pending returns, see our{" "}
        <Link href="/gst-return-filing-chennai" className={LINK}>
          GST return filing service
        </Link>
        .
      </p>

      <h2 className={H2}>What should I do if I have a notice about late returns?</h2>
      <p className={P}>
        A notice for non-filing, or a demand for interest on late payment, has a reply date. File the pending returns,
        pay the tax, late fee and interest the portal shows, and then reply with the filing and payment details before
        that date. If the notice asks for more than the law allows, for example interest on the whole tax where most of
        it was paid through credit, the reply should say so with the working. Our{" "}
        <Link href="/gst-notice-reply-chennai" className={LINK}>
          GST notice reply service
        </Link>{" "}
        handles the reply and the reconciliation behind it. Clients outside Chennai are served online.
      </p>

      <h2 className={H2}>Official sources</h2>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate">
        {SOURCES.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className={LINK}>
              {s.text}
            </a>
          </li>
        ))}
      </ul>

      <ServiceCta
        links={[
          { href: "/gst-return-filing-chennai", label: "GST return filing" },
          { href: "/gst-notice-reply-chennai", label: "GST notice reply" },
        ]}
      >
        Behind on GST returns or holding a notice? Read about our{" "}
        <Link href="/gst-return-filing-chennai" className={LINK}>
          GST return filing service
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
