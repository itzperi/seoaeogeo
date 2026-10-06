import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Return Filing in Chennai | GSTR-1, 3B, 9";
const description =
  "GST return filing in Chennai: GSTR-1, GSTR-3B, QRMP and IFF, CMP-08, GSTR-4 and GSTR-9/9C, with GSTR-2B reconciliation before every filing. Due dates inside.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const DUE_DATES = [
  { form: "GSTR-1 (monthly)", who: "Regular taxpayers filing monthly", due: "11th of the following month" },
  { form: "GSTR-1 (quarterly, QRMP)", who: "Taxpayers opted into QRMP", due: "13th of the month after the quarter" },
  { form: "IFF (optional)", who: "QRMP taxpayers, first two months of a quarter", due: "1st to 13th of the following month, B2B invoices up to ₹50 lakh a month" },
  { form: "GSTR-3B (monthly)", who: "Regular taxpayers filing monthly", due: "20th of the following month" },
  { form: "GSTR-3B (quarterly, QRMP)", who: "QRMP taxpayers registered in Tamil Nadu", due: "22nd of the month after the quarter (24th for the northern and north-eastern states)" },
  { form: "PMT-06 (QRMP tax payment)", who: "QRMP taxpayers, first two months of a quarter", due: "25th of the following month" },
  { form: "CMP-08", who: "Composition taxpayers", due: "18th of the month after the quarter" },
  { form: "GSTR-4", who: "Composition taxpayers (annual return)", due: "30 June after the financial year (from FY 2024-25)" },
  { form: "GSTR-9 and GSTR-9C", who: "Regular taxpayers above the exemption limit; 9C above ₹5 crore", due: "31 December after the financial year" },
];

const LATE_FEES = [
  { item: "GSTR-1 and GSTR-3B, nil return", fee: "₹20 per day, capped at ₹500 per return" },
  { item: "GSTR-1 and GSTR-3B, turnover up to ₹1.5 crore", fee: "₹50 per day, capped at ₹2,000 per return" },
  { item: "GSTR-1 and GSTR-3B, turnover ₹1.5 crore to ₹5 crore", fee: "₹50 per day, capped at ₹5,000 per return" },
  { item: "GSTR-1 and GSTR-3B, turnover above ₹5 crore", fee: "₹50 per day, capped at ₹10,000 per return" },
  { item: "GSTR-9, turnover up to ₹5 crore", fee: "₹50 per day, capped at 0.04% of turnover" },
  { item: "GSTR-9, turnover ₹5 crore to ₹20 crore", fee: "₹100 per day, capped at 0.04% of turnover" },
  { item: "GSTR-9, turnover above ₹20 crore", fee: "₹200 per day, capped at 0.5% of turnover" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-chennai`}
      serviceType="GST Return Filing"
      crumbLabel="GST Return Filing"
      crumbHref="/gst-return-filing-chennai"
      parentCrumb={{ name: "GST Consultants", href: "/goods-and-services-tax" }}
      eyebrow="GST Returns · Chennai"
      h1="GST Return Filing in Chennai"
      subhead="Monthly, quarterly and annual GST returns prepared from reconciled books, filed before the due date, with every input tax credit claim checked against GSTR-2B."
      introHeading="What does GST return filing in Chennai involve?"
      intro="GST return filing in Chennai means filing GSTR-1 (sales) and GSTR-3B (summary and tax payment) every month, or quarterly under the QRMP scheme if turnover is up to ₹5 crore, plus the annual GSTR-9. We reconcile sales, purchases and GSTR-2B before each filing, so tax is paid on time and input tax credit holds up."
      citation={{
        label: "CBIC: Rule 61 of the CGST Rules, form and manner of furnishing returns (taxinformation.cbic.gov.in)",
        href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter8/rule61_v1.00.html",
      }}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1 and IFF, GSTR-3B, PMT-06, CMP-08, GSTR-4, GSTR-9 and GSTR-9C" },
        { label: "Portal", value: "GST common portal (gst.gov.in), with GSTR-2B as the input tax credit statement" },
        { label: "Who files", value: "Every GST-registered business; composition taxpayers file CMP-08 quarterly and GSTR-4 annually" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Late fee and interest", value: "₹50 per day (₹20 for nil returns) for GSTR-1 and GSTR-3B, capped by turnover; interest at 18% a year on tax paid late" },
      ]}
      subServicesHeading="Which GST returns do we file for Chennai businesses?"
      subServices={[
        { name: "GSTR-1 and IFF", text: "Invoice-wise outward supplies, credit and debit notes, and amendments, filed monthly or quarterly. QRMP filers can upload B2B invoices through IFF so customers get credit in the same month." },
        { name: "GSTR-3B and tax payment", text: "Summary return with tax paid through the electronic cash and credit ledgers. We set off credit in the order the law requires and file only after the GSTR-1 and GSTR-2B figures are matched." },
        { name: "QRMP scheme", text: "For businesses with turnover up to ₹5 crore: quarterly GSTR-1 and GSTR-3B, with tax for the first two months paid through PMT-06 by the 25th." },
        { name: "Composition: CMP-08 and GSTR-4", text: "Quarterly self-assessed tax statement in CMP-08 by the 18th, and the annual GSTR-4 by 30 June after the financial year." },
        { name: "GSTR-9 and GSTR-9C", text: "Annual return reconciling the year's GSTR-1 and GSTR-3B with the audited books, and the self-certified reconciliation statement when turnover exceeds ₹5 crore." },
        { name: "ITC reconciliation", text: "Monthly matching of the purchase register with GSTR-2B, follow-up with suppliers who have not filed, and reversal tracking so credit claims survive scrutiny." },
      ]}
      howTo={{
        heading: "How do we file your GST returns each month?",
        steps: [
          { name: "Collect sales and purchase data", text: "We take your sales invoices, credit notes, purchase bills and bank entries from Tally, Zoho Books or your billing software by the 5th of the month." },
          { name: "Reconcile with GSTR-2B", text: "Purchases are matched with GSTR-2B. Credit is claimed only on invoices your suppliers have reported, and missing invoices are flagged to you with the supplier's name." },
          { name: "File GSTR-1", text: "Outward supplies are checked for GSTIN, place of supply and HSN details, then filed by the 11th (or the 13th after the quarter for QRMP filers)." },
          { name: "Compute and pay tax", text: "We prepare the GSTR-3B liability, share the cash payable with you, and generate the challan so tax is paid before the due date." },
          { name: "File GSTR-3B and share a summary", text: "GSTR-3B is filed by the 20th (or the 22nd after the quarter for Tamil Nadu QRMP filers), and you get a one-page summary of tax paid and credit carried forward." },
        ],
      }}
      faqs={[
        { question: "What are the GST return due dates for a monthly filer?", answer: "A monthly filer must file GSTR-1 by the 11th and GSTR-3B by the 20th of the following month. GSTR-1 can be filed only after the previous period's GSTR-3B is filed, so one missed return blocks the next. The annual GSTR-9 is due by 31 December after the financial year." },
        { question: "Who can opt for the QRMP scheme?", answer: "Businesses with aggregate turnover up to ₹5 crore can opt for QRMP and file GSTR-1 and GSTR-3B quarterly. Tax is still paid monthly: for the first two months of each quarter, through PMT-06 by the 25th. In Tamil Nadu, quarterly GSTR-3B is due by the 22nd of the month after the quarter." },
        { question: "What is the late fee for filing GSTR-3B late?", answer: "The late fee is ₹50 per day, or ₹20 per day for a nil return, split equally between CGST and SGST. It is capped at ₹500 for nil returns, ₹2,000 for turnover up to ₹1.5 crore, ₹5,000 up to ₹5 crore and ₹10,000 above that. Interest at 18% a year applies separately to tax paid late." },
        { question: "Is GSTR-9 compulsory for every business?", answer: "No. Businesses with aggregate turnover up to ₹2 crore are exempt from filing GSTR-9 from FY 2024-25 onwards, though they may still file it. Above ₹2 crore, GSTR-9 is due by 31 December after the year, and GSTR-9C is also required once turnover exceeds ₹5 crore." },
        { question: "Can I file an old GST return that I missed years ago?", answer: "Only within three years of its due date. Amendments made by the Finance Act, 2023 bar filing GSTR-1, GSTR-3B, GSTR-4 and GSTR-9 after three years, and the GST portal has enforced this since 2025. If an old return is close to that limit, file it now with the late fee and interest." },
        { question: "Why is my input tax credit lower than my purchase register?", answer: "Credit can be claimed only on invoices your supplier has reported in GSTR-1 and that appear in your GSTR-2B. Purchases from suppliers who file late or report a wrong GSTIN will not show up. We list these invoices each month so you can follow up before the year-end cut-off." },
        { question: "What do composition taxpayers file?", answer: "Composition taxpayers pay tax quarterly through CMP-08 by the 18th of the month after each quarter and file one annual return, GSTR-4, by 30 June after the financial year. They do not file GSTR-1 or GSTR-3B, cannot claim input tax credit and cannot charge GST on their invoices." },
      ]}
      relatedSlugs={["goods-and-services-tax", "gst-notice-reply-chennai", "gst-registration-chennai"]}
      relatedPosts={["gstr9-annual-return-checklist", "itc-mismatch-notices", "lut-for-exporters", "first-gst-return-tambaram-shops", "cost-of-diy-gst-filing"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">GST return due dates at a glance</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are the standard due dates. The government sometimes extends a date by notification, and we track those for
        you. QRMP dates below are the ones that apply to businesses registered in Tamil Nadu.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Return</th>
              <th className="px-4 py-3 font-medium">Who files</th>
              <th className="px-4 py-3 font-medium">Due date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {DUE_DATES.map((r) => (
              <tr key={r.form}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.form}</td>
                <td className="px-4 py-3 align-top text-slate">{r.who}</td>
                <td className="px-4 py-3 align-top text-slate">{r.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What happens if a GST return is filed late?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Three costs follow a late return. First, a late fee under Section 47 of the CGST Act for every day of delay, split
        equally between CGST and SGST and capped by your turnover. Second, interest at 18% a year under Section 50 on any
        tax paid after the due date, calculated on the tax paid in cash. Third, an operational cost: GSTR-1 cannot be filed
        while an earlier GSTR-3B is pending, your customers lose credit until you file, and continued non-filing can lead
        to cancellation of your registration.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Return and turnover</th>
              <th className="px-4 py-3 font-medium">Late fee (CGST + SGST)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {LATE_FEES.map((r) => (
              <tr key={r.item}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.item}</td>
                <td className="px-4 py-3 align-top text-slate">{r.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
        Caps for GSTR-1 and GSTR-3B follow CBIC Notifications 19/2021 and 20/2021 (Central Tax); GSTR-9 caps follow
        Notification 07/2023 (Central Tax) for FY 2022-23 onwards. Turnover means aggregate turnover of the preceding
        financial year for monthly returns and of the year concerned for GSTR-9.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Already behind on returns or holding a notice?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        If returns are pending, we file them in sequence, starting with the oldest GSTR-3B, and work out the late fee and
        interest before you pay. Mismatches between GSTR-1, GSTR-3B and GSTR-2B are the usual trigger for ASMT-10 and
        DRC-01 notices; if one has already arrived, see our{" "}
        <Link href="/gst-notice-reply-chennai" className={linkClass}>
          GST notice reply service in Chennai
        </Link>
        . For a new registration or an LUT for exports, start with{" "}
        <Link href="/gst-registration-chennai" className={linkClass}>
          GST registration in Chennai
        </Link>
        , and for the full range of GST work, our{" "}
        <Link href="/goods-and-services-tax" className={linkClass}>
          GST consultants in Chennai
        </Link>{" "}
        page.
      </p>
    </ServicePageTemplate>
  );
}
