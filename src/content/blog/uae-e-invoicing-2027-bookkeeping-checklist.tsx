import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "uae-e-invoicing-2027-bookkeeping-checklist",
  title: "UAE E-Invoicing 2027: What to Fix in Your Books Now",
  description:
    "UAE B2B e-invoicing starts in 2027 through an Accredited Service Provider. The go-live dates, plus the TRN, customer, item and credit-note data to fix first.",
  date: "2026-11-14",
  excerpt:
    "B2B e-invoicing in the UAE goes live from 1 January 2027 for the largest businesses and 1 July 2027 for the rest. A practical checklist of what to clean up in your books first.",
  summary:
    "Under Ministerial Decisions 243 and 244 of 2025, UAE B2B invoices move to e-invoicing through an Accredited Service Provider. Businesses with revenue of AED 50 million or more go live on 1 January 2027; the rest appoint a provider by 31 March 2027 and go live on 1 July 2027. Clean TRNs, customer, supplier and item records first.",
  faqs: [
    {
      question: "When does e-invoicing start in the UAE?",
      answer:
        "Under the Ministry of Finance's amended timeline, businesses with revenue of AED 50 million or more go live on 1 January 2027, having appointed an Accredited Service Provider by 30 October 2026. Other businesses appoint a provider by 31 March 2027 and go live on 1 July 2027. Dates can change, so confirm them with the Ministry of Finance.",
    },
    {
      question: "Does UAE e-invoicing apply to sales to consumers?",
      answer:
        "Not for now. The current phase covers business-to-business invoices. Business-to-consumer sales are outside the scope announced so far, although your VAT invoicing rules for those sales continue to apply as before.",
    },
    {
      question: "Can my bookkeeper send e-invoices for me?",
      answer:
        "E-invoices are exchanged through an Accredited Service Provider that you appoint, connected to your accounting or billing system. A bookkeeper's role is to make sure the data feeding those invoices is correct: TRNs, legal names, item codes, VAT treatment and credit notes. VAT and Corporate Tax returns are still filed by you or your FTA-registered tax agent.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The UAE is moving business-to-business invoices to a mandatory e-invoicing system. Ministerial Decisions 243 and 244 of 2025 set the framework and the timeline, and the Ministry of Finance has since <a href="https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/" target="_blank" rel="noopener noreferrer">announced targeted amendments to the e-invoicing decisions</a>. Invoices will be exchanged through an Accredited Service Provider (ASP) rather than sent as PDFs, which means the data inside your accounting system has to be right before the first one goes out.
      </p>

      <p>
        This post sets out the current dates, who is in scope and what to fix in your books first. The dates below are the ones announced at the time of writing and may change, so confirm them with the Ministry of Finance before you plan around them.
      </p>

      <h2>When do you have to start?</h2>

      <table>
        <thead>
          <tr>
            <th>Business</th>
            <th>Appoint an ASP by</th>
            <th>E-invoicing goes live</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Revenue of AED 50 million or more</td>
            <td>30 October 2026</td>
            <td>1 January 2027</td>
          </tr>
          <tr>
            <td>All other businesses in scope</td>
            <td>31 March 2027</td>
            <td>1 July 2027</td>
          </tr>
        </tbody>
      </table>

      <p>
        The appointment date for the largest businesses has already passed, so if your revenue is at or above AED 50 million and you have not appointed a provider, that is the first thing to raise with your advisers. For everyone else, the first half of 2027 is the window to get ready.
      </p>

      <h2>Which invoices are covered?</h2>

      <p>
        The current phase covers business-to-business invoices. Business-to-consumer sales are out of scope for now. If you sell to both, your system will need to tell the two apart cleanly, which is easier when every customer record shows whether it is a business with a Tax Registration Number (TRN) or an individual.
      </p>

      <h2>What is an Accredited Service Provider?</h2>

      <p>
        An ASP is a provider accredited under the UAE system to exchange e-invoices between businesses and report the data to the authorities. You appoint one and connect it to your accounting or billing software. Many software vendors are building or partnering for this connection, so ask yours early which providers it supports and what fields it will require.
      </p>

      <h2>What should you fix in your books before go-live?</h2>

      <p>
        Most e-invoicing problems are master-data problems: an invoice is rejected or has to be reissued because a name, TRN or code behind it was wrong. Work through this checklist in your accounting system:
      </p>

      <ul>
        <li><strong>Your own details.</strong> Legal name exactly as on the trade licence, TRN, address and emirate, consistent across every invoice template.</li>
        <li><strong>Customer records.</strong> Legal name, TRN for every VAT-registered customer, address and emirate or country. Merge duplicates and archive customers you no longer trade with.</li>
        <li><strong>Supplier records.</strong> The same checks, because the e-invoices you receive will be matched to these records and your input VAT depends on them.</li>
        <li><strong>Item and service codes.</strong> One code per product or service, a clear description, the unit of measure and the correct VAT treatment: standard-rated, zero-rated, exempt or out of scope.</li>
        <li><strong>Invoice numbering.</strong> One unbroken sequence per series, with no manual numbers typed outside the system.</li>
        <li><strong>Credit notes.</strong> Every credit note linked to the original invoice it corrects, with the reason recorded, instead of free-standing negative invoices.</li>
        <li><strong>Currency and exchange rates.</strong> Foreign-currency invoices showing the AED equivalent consistently.</li>
        <li><strong>Open items.</strong> Old unpaid invoices and unapplied credits cleared, so the receivables and payables ledgers start the new system clean.</li>
      </ul>

      <h2>How long do you have to keep the records?</h2>

      <p>
        E-invoicing does not shorten your record-keeping duties. Corporate Tax records and supporting documents must be kept for 7 years after the end of the tax period they relate to, and VAT records for at least 5 years, according to the <a href="https://tax.gov.ae/en/taxes/corporate.tax.aspx" target="_blank" rel="noopener noreferrer">Federal Tax Authority</a>. Keep the e-invoice data your ASP exchanges alongside the ledger entries it supports, so an auditor or the FTA can follow each sale from invoice to return.
      </p>

      <h2>Who does what?</h2>

      <ul>
        <li><strong>You</strong> appoint the ASP and decide on the system changes.</li>
        <li><strong>Your ASP</strong> exchanges and reports the e-invoices.</li>
        <li><strong>You or your FTA-registered tax agent</strong> file the VAT and Corporate Tax returns on EmaraTax.</li>
        <li><strong>Your bookkeeper</strong> cleans the master data, reconciles the ledgers and keeps VAT coding consistent with what the e-invoices say.</li>
      </ul>

      <p>
        C S Rushil &amp; Co. works from Chennai, is not an FTA-registered tax agent and is not an Accredited Service Provider; for UAE clients the firm&apos;s role is the bookkeeping side of this list.
      </p>

      <p>
        How bookkeeping from India fits around your tax agent and auditor in the UAE is set out on the <Link href="/outsourced-bookkeeping-uae">outsourced bookkeeping for UAE businesses</Link> page, and the wider service is on our <Link href="/outsourced-bookkeeping-services">outsourced bookkeeping services</Link> page.
      </p>
    </>
  );
}
