import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "lut-for-exporters",
  title: "LUT for Exporters Under GST: How to File and Why It Matters",
  description:
    "If your Chennai business exports services or goods, a Letter of Undertaking (LUT) is one of the most valuable and most overlooked GST filings you can make.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "If your Chennai business sells services or goods to clients outside India, a Letter of Undertaking (LUT) is one of the most valuable and...",
  summary:
    "A Letter of Undertaking lets a registered exporter supply goods or services, including to SEZ units, without paying IGST, instead of paying tax and claiming a refund. It is filed online in Form GST RFD-11 for each financial year, before the first export invoice, and binds you to export goods within three months and receive service payments within one year.",
  faqs: [
    {
      question: "What is an LUT under GST?",
      answer:
        "A Letter of Undertaking under Rule 96A of the CGST Rules lets you export goods or services, or supply to an SEZ, without paying IGST. Exports are zero-rated, so without an LUT you would pay IGST upfront and then claim a refund, tying up cash. With one, you invoice without tax and claim a refund of unused input credit instead.",
    },
    {
      question: "How is an LUT filed and how long is it valid?",
      answer:
        "An LUT is filed on the GST portal in Form GST RFD-11, under Services, User Services, Furnish Letter of Undertaking. It is valid for one financial year, so it is filed again each year before the first export invoice. You need details of two independent witnesses and a DSC or EVC to sign it.",
    },
    {
      question: "Who is eligible to file an LUT?",
      answer:
        "Any GST-registered person who exports goods or services or supplies to SEZ units and developers can use an LUT, except a person who has been prosecuted for tax evasion of ₹250 lakh or more. IT consultants and freelancers with overseas clients, garment and textile exporters and other Chennai businesses invoicing abroad are the usual users.",
    },
    {
      question: "What conditions must I meet after filing an LUT?",
      answer:
        "Goods must actually be exported within three months of the invoice date, and payment for exported services must be received within one year of the invoice, in each case unless a longer period is allowed. If not, you must pay the IGST with interest at 18% within 15 days of that period ending.",
    },
    {
      question: "What happens if my LUT lapses?",
      answer:
        "If you keep invoicing exports without a valid LUT for the year, those supplies are treated as made without the undertaking, and IGST should have been paid on them. Businesses often discover this only at annual return time, when interest may apply on the delayed tax. Filing the LUT each April avoids the problem.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A Letter of Undertaking (LUT) lets a GST-registered exporter supply goods or services abroad, or to an SEZ, without paying IGST. It is filed online in Form GST RFD-11 once for each financial year, before the first export invoice, and it saves you from paying tax upfront and waiting months for a refund.
      </p>

      <h2>What does an LUT actually do?</h2>

      <p>
        Section 16 of the IGST Act treats exports and supplies to SEZ units and developers as zero-rated supplies. A zero-rated supply can be made in one of two ways: pay IGST and claim a refund of that tax, or supply without paying IGST under a bond or LUT and claim a refund of the unused input credit instead. Rule 96A of the CGST Rules provides the LUT route, which most exporters choose because no cash leaves the business. The difference matters most for smaller exporters, for whom tax locked up in a pending refund can equal several months of working capital.
      </p>

      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Export under LUT</th>
            <th>Export with IGST paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tax on the export invoice</td>
            <td>None</td>
            <td>IGST charged and paid, in cash or from credit</td>
          </tr>
          <tr>
            <td>Refund claimed</td>
            <td>Unused input tax credit</td>
            <td>The IGST paid</td>
          </tr>
          <tr>
            <td>Cash flow</td>
            <td>No tax paid upfront</td>
            <td>Tax paid first, recovered later</td>
          </tr>
          <tr>
            <td>Main condition</td>
            <td>Goods exported within three months, or service payment received within one year</td>
            <td>Refund conditions for that route</td>
          </tr>
        </tbody>
      </table>

      <h2>Who can file an LUT, and who benefits most?</h2>

      <p>
        Any registered person exporting goods or services, or supplying to SEZ units and developers for authorised operations, can file an LUT. The only exclusion is a person who has been prosecuted for tax evasion of ₹250 lakh or more, who must furnish a bond instead. You need <Link href="/gst-registration-chennai">GST registration</Link> in place first, and goods exporters also need an Importer Exporter Code, which our{" "}
        <Link href="/iec-registration-chennai">IEC registration</Link> page explains.
      </p>

      <p>
        IT consultants and freelancers serving overseas clients, garment and textile exporters, and any Chennai business invoicing in foreign currency benefit directly. For a service exporter, the supply counts as an export only if the client is outside India, the place of supply is outside India and payment comes in convertible foreign exchange, or in rupees where RBI permits.
      </p>

      <h2>How do you file Form RFD-11 on the GST portal?</h2>

      <p>
        The portal&apos;s <a href="https://tutorial.gst.gov.in/userguide/refund/Furnishing_of_Letter_of_Undertaking.htm" target="_blank" rel="noopener noreferrer">user guide for Form GST RFD-11</a> walks through each screen. In practice:
      </p>

      <ol>
        <li>Log in to gst.gov.in and go to Services, then User Services, then Furnish Letter of Undertaking (LUT).</li>
        <li>Select the financial year for which the LUT is being filed.</li>
        <li>If an earlier LUT was filed outside the portal, upload a copy where asked.</li>
        <li>Tick the declarations: that you will export within the time allowed, follow the law, and pay IGST with interest if you do not.</li>
        <li>Enter the name, occupation and address of two independent witnesses, and the place of filing.</li>
        <li>Sign with a DSC or EVC and download the acknowledgement with its ARN.</li>
      </ol>

      <p>
        Keep the acknowledgement with your export records. Each export invoice should also carry a statement that the supply is meant for export, or for an SEZ, under LUT without payment of integrated tax.
      </p>

      <h2>What conditions does the LUT bind you to?</h2>

      <ul>
        <li><strong>Goods:</strong> export within three months of the invoice date, or any longer period the department allows.</li>
        <li><strong>Services:</strong> receive payment within one year of the invoice date, or any longer period allowed.</li>
        <li><strong>If you miss either:</strong> pay the IGST due on that supply, with interest at 18% a year, within 15 days after the period ends.</li>
      </ul>

      <p>
        These conditions make record-keeping as important as the filing itself. A service exporter whose client pays late can find tax falling due on an invoice raised over a year earlier.
      </p>

      <h2>How do you claim the refund of unused input credit?</h2>

      <p>
        An exporter under LUT builds up input tax credit on purchases with no domestic tax to set it against. That credit can be claimed back through Form GST RFD-01, with the amount worked out under the formula in Rule 89(4), based on the share of zero-rated turnover in total turnover. Refunds are often rejected for small mismatches between shipping bills, invoices and GSTR-1, which our post on{" "}
        <Link href="/blog/tiruppur-export-refund-rejection">export refund rejections in Tiruppur</Link> explains with examples.
      </p>

      <h2>What happens if you forget to renew it?</h2>

      <p>
        An LUT covers only the financial year it was filed for. If it lapses and you continue invoicing exports without tax, you have made supplies without either paying IGST or holding a valid undertaking. Most businesses discover this only when preparing the annual return through <Link href="/gst-return-filing-chennai">GST return filing</Link>, at which point interest may apply on the delayed tax. Filing the new LUT in the first week of April avoids this entirely. If you are partway through FY 2026-27 without one, file it now so future invoices are covered, and review the exports already made since April to decide how to regularise them before the annual return.
      </p>

      <h2>What is a short checklist for exporters?</h2>

      <ul>
        <li>File the LUT at the start of each financial year, before your first export invoice.</li>
        <li>Add the LUT statement to every export and SEZ invoice.</li>
        <li>Keep shipping bills, bank realisation certificates and foreign inward remittance proof organised monthly, not just at year end.</li>
        <li>Track service invoices approaching one year without payment.</li>
        <li>Reconcile foreign remittances against invoices, and report exports correctly in GSTR-1, so refunds are not held up.</li>
      </ul>

      <p>
        Exporters with regular shipments can read how we handle{" "}
        <Link href="/gst-return-filing-for-import-export-businesses">GST return filing for import and export businesses</Link>. If you export goods or services from Chennai and want your LUT filed correctly and renewed on time every year, C S Rushil &amp; Co. handles this as part of ongoing GST compliance. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
