import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "post-incorporation-compliance-checklist",
  title: "First-Year Compliance Calendar for New Companies (2026-27)",
  description:
    "A dated first-year compliance calendar for a company incorporated in 2026-27: first auditor, board meeting, share certificates, INC-20A, AGM, AOC-4 and MGT-7.",
  date: "2026-09-19",
  updated: "2026-10-12",
  excerpt:
    "Month by month, what a newly incorporated Tamil Nadu company must do in its first year, worked through for a company incorporated on 15 June 2026.",
  faqs: [
    {
      question: "What is the first compliance after incorporating a company?",
      answer:
        "The first board meeting, which must be held within 30 days of incorporation under section 173(1) of the Companies Act, 2013. The board should also appoint the first statutory auditor within those 30 days, take directors' disclosures, adopt the registered office and authorise the bank account and share certificates.",
    },
    {
      question: "When is INC-20A due for a new company?",
      answer:
        "Within 180 days of incorporation. INC-20A is the declaration that every subscriber has paid for the shares agreed in the memorandum, supported by bank proof. A company incorporated on 15 June 2026 must file by 12 December 2026, and it should not start business or borrow until the declaration is filed.",
    },
    {
      question: "When must share certificates be issued after incorporation?",
      answer:
        "Within two months of incorporation, under section 56(4)(a) of the Companies Act, 2013, for the shares taken by the subscribers to the memorandum. Private companies that are not small companies must also follow the dematerialisation rule, so their securities are held and issued in demat form within the prescribed timelines.",
    },
    {
      question: "When is the first AGM of a company incorporated in 2026-27?",
      answer:
        "Within nine months from the end of its first financial year. A company incorporated between 1 April and 31 December 2026 closes its first financial year on 31 March 2027, so its first AGM is due by 31 December 2027. AOC-4 then follows within 30 days and MGT-7 or MGT-7A within 60 days.",
    },
    {
      question: "Do new directors file DIR-3 KYC in the first year?",
      answer:
        "Not as an annual routine any more. Amended rules effective 31 March 2026 replaced annual DIR-3 KYC with a filing once every three years, due by 30 June. A DIN allotted at incorporation in 2026-27 falls into that three-year cycle. Changes to a director's mobile, email or address must still be reported within 30 days.",
    },
    {
      question: "Does a company with no business still have to file returns?",
      answer:
        "Yes. A company must hold its AGM, file AOC-4 and MGT-7 or MGT-7A, get its accounts audited and file an income tax return even with nil turnover. Penalties for late ROC filings accumulate per day, so a dormant first year is not a free year. Strike-off is the route if the company will not operate.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The certificate of incorporation starts a clock. Some deadlines run
        from the incorporation date, some from the end of the first financial
        year, and some from the first AGM. This calendar works through all of
        them for one example: a private limited company with its registered
        office in Tamil Nadu, incorporated on <strong>15 June 2026</strong>.
        Shift the dates to match your own certificate.
      </p>

      <h2>What must a new company do in its first year?</h2>
      <p>
        <strong>
          Within 30 days, hold the first board meeting and appoint the first
          auditor; within two months, issue share certificates; within 180 days,
          file INC-20A. Register for GST, professional tax and TDS as they
          apply. After the first financial year ends, get the audit done, hold
          the AGM, then file AOC-4, MGT-7 and the income tax return.
        </strong>
      </p>

      <h2>Which deadlines run from the incorporation date?</h2>
      <table>
        <thead>
          <tr>
            <th>Compliance</th>
            <th>Time limit</th>
            <th>Due for a 15 June 2026 company</th>
            <th>Law</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First board meeting</td>
            <td>Within 30 days of incorporation</td>
            <td>By 15 July 2026</td>
            <td>Section 173(1)</td>
          </tr>
          <tr>
            <td>First statutory auditor appointed by the board</td>
            <td>Within 30 days (else members within 90 days)</td>
            <td>By 15 July 2026</td>
            <td>Section 139(6)</td>
          </tr>
          <tr>
            <td>Share certificates to subscribers</td>
            <td>Within two months</td>
            <td>By 15 August 2026</td>
            <td>Section 56(4)(a)</td>
          </tr>
          <tr>
            <td>Commencement of business declaration (INC-20A)</td>
            <td>Within 180 days</td>
            <td>By 12 December 2026</td>
            <td>Section 10A</td>
          </tr>
          <tr>
            <td>Statutory registers</td>
            <td>From incorporation, kept current</td>
            <td>From 15 June 2026</td>
            <td>Sections 85, 88, 170, 189 and rules</td>
          </tr>
        </tbody>
      </table>

      <h2>What happens at the first board meeting?</h2>
      <p>
        The first meeting sets up most of what follows. The board typically
        takes each director&apos;s disclosure of interest (MBP-1) and
        non-disqualification declaration (DIR-8), notes the certificate of
        incorporation, MoA and AoA, confirms the registered office, appoints
        the first <Link href="/statutory-audit-chennai">statutory auditor</Link>{" "}
        to hold office until the first AGM, authorises the bank account and
        signatories, approves issue of share certificates, and adopts a common
        seal policy if the articles provide for one. Many companies file ADT-1
        for the first auditor as a matter of record. Minutes must be prepared
        and signed within the prescribed time.
      </p>

      <h2>How does INC-20A work?</h2>
      <p>
        INC-20A is a director&apos;s declaration, verified by a professional,
        that every subscriber has paid the value of the shares they agreed to
        take. Attach the bank statement showing the capital received in the
        company&apos;s account. Until it is filed, the company should not
        commence business or exercise borrowing powers, and a company that
        does not file within 180 days faces penalties and can be considered for
        removal from the register. This is the deadline new founders miss most
        often, usually because the bank account opened late.
      </p>

      <h2>Which tax and labour registrations apply?</h2>
      <ul>
        <li>
          <strong>PAN, TAN, EPFO and ESIC:</strong> issued through SPICe+ at
          incorporation. EPF and ESI contributions begin once coverage applies.
        </li>
        <li>
          <strong>GST:</strong> optional at incorporation; compulsory within 30
          days of becoming liable, for example on crossing the threshold or
          making inter-state supplies of goods. See{" "}
          <Link href="/gst-registration-chennai">GST registration</Link>.
        </li>
        <li>
          <strong>Professional tax:</strong> not covered by SPICe+ for Tamil
          Nadu. Enrol with the local body (the Greater Chennai Corporation in
          Chennai, or the municipal corporation or local body where the office
          is), deduct from salaries and pay half-yearly.
        </li>
        <li>
          <strong>Shops and establishments:</strong> registration with the
          Tamil Nadu Labour Department for the office or premises.
        </li>
        <li>
          <strong>MSME Udyam:</strong> optional, but useful for delayed-payment
          protection and schemes. See{" "}
          <Link href="/msme-udyam-registration-chennai">Udyam registration</Link>.
        </li>
        <li>
          <strong>TDS:</strong> deduct on salaries, rent, professional fees and
          contracts above thresholds; deposit by the 7th of the following month
          and file quarterly statements. See{" "}
          <Link href="/tds-return-filing-chennai">TDS return filing</Link>.
        </li>
      </ul>

      <h2>What does the first year look like month by month?</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>What falls due (15 June 2026 incorporation)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>June 2026</td>
            <td>Certificate of incorporation; open bank account and bring in subscription money; set up statutory registers; collect DIR-8 and MBP-1</td>
          </tr>
          <tr>
            <td>July 2026</td>
            <td>First board meeting and first auditor by 15 July; professional tax enrolment and shops registration; first TDS deposit by 7th if any deduction in June</td>
          </tr>
          <tr>
            <td>August 2026</td>
            <td>Share certificates by 15 August; GST registration within 30 days if liable</td>
          </tr>
          <tr>
            <td>September 2026</td>
            <td>Advance tax instalment if tax is expected; second board meeting where four meetings a year apply (no more than 120 days between meetings)</td>
          </tr>
          <tr>
            <td>October 2026</td>
            <td>Quarterly TDS statement for July to September by 31 October; MSME-1 half-yearly return by 31 October if dues to micro or small suppliers exceed 45 days</td>
          </tr>
          <tr>
            <td>November 2026</td>
            <td>Monthly GST and TDS cycle continues; check bank proof is ready for INC-20A</td>
          </tr>
          <tr>
            <td>December 2026</td>
            <td>INC-20A by 12 December; advance tax instalment; board meeting</td>
          </tr>
          <tr>
            <td>January 2027</td>
            <td>Quarterly TDS statement for October to December by 31 January</td>
          </tr>
          <tr>
            <td>February 2027</td>
            <td>Review the books ahead of year-end; confirm loans from directors and others for DPT-3</td>
          </tr>
          <tr>
            <td>March 2027</td>
            <td>Final advance tax instalment; first financial year ends 31 March 2027; board meeting</td>
          </tr>
          <tr>
            <td>April to June 2027</td>
            <td>MSME-1 by 30 April; Q4 TDS statement by 31 May; DPT-3 return of deposits and exempted receipts by 30 June; start statutory audit</td>
          </tr>
          <tr>
            <td>July to October 2027</td>
            <td>Board approves audited accounts and board report; tax audit where applicable; income tax return for tax year 2026-27 by 31 October 2027 (audit case)</td>
          </tr>
          <tr>
            <td>By 31 December 2027</td>
            <td>First AGM, within nine months of year-end; auditor appointed for five years at the AGM (ADT-1 within 15 days)</td>
          </tr>
          <tr>
            <td>Within 30 and 60 days of the AGM</td>
            <td>AOC-4 (financial statements) within 30 days; MGT-7 or MGT-7A (annual return) within 60 days</td>
          </tr>
        </tbody>
      </table>

      <h2>Which dates depend on the financial year and the AGM?</h2>
      <p>
        A company incorporated between 1 April and 31 December closes its first
        financial year on the following 31 March. One incorporated between 1
        January and 31 March may choose to extend its first financial year to
        31 March of the next year, under section 2(41) of the Companies Act,
        2013. The first AGM is due within nine months of that year-end under
        section 96(1). The{" "}
        <a
          href="https://www.mca.gov.in/content/mca/global/en/help-faq/annual-filing/aoc-4-and-linked-filings.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AOC-4
        </a>{" "}
        and MGT-7 or MGT-7A deadlines then run from the AGM date, not from the
        year-end, so holding the AGM late pushes every annual ROC filing late
        with it. Our{" "}
        <Link href="/blog/annual-roc-filing-calendar">
          annual ROC filing calendar
        </Link>{" "}
        covers the recurring cycle from the second year onwards.
      </p>
      <p>
        On the income tax side, the financial year 2026-27 is the first tax
        year under the Income-tax Act, 2025. A company whose accounts are
        audited files its return by 31 October following the tax year, so by
        31 October 2027 in this example; check whether transfer pricing
        provisions push your due date later.
      </p>

      <h2>What changed for DIR-3 KYC?</h2>
      <p>
        Until 2025, every director filed DIR-3 KYC each year by 30 September.
        The Companies (Appointment and Qualification of Directors) Amendment
        Rules, 2025, notified on 31 December 2025 and effective 31 March 2026,
        replaced that with a KYC intimation once every three years, due by 30
        June, as the{" "}
        <a
          href="https://www.icai.org/post/clcgc-director-kyc-compliance-02012026"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICAI announcement
        </a>{" "}
        summarises. A new director whose DIN is allotted in SPICe+ during
        2026-27 has no KYC filing in the company&apos;s first year, but any
        change to their mobile number, email or residential address must be
        reported within 30 days.
      </p>

      <h2>Which statutory registers must be kept from day one?</h2>
      <ul>
        <li>Register of members (MGT-1), with share certificate details</li>
        <li>Register of directors and key managerial personnel and their shareholdings</li>
        <li>Register of contracts in which directors are interested (MBP-4)</li>
        <li>Register of charges (CHG-7), once any charge is created</li>
        <li>Register of significant beneficial owners, where a BEN-1 declaration is received</li>
        <li>Minutes books for board and general meetings</li>
      </ul>

      <h2>How do you keep the first year on track?</h2>
      <p>
        Put every date above into one calendar on the day the certificate
        arrives, and assign each to a named person. Most first-year problems
        come from deadlines nobody owned, not from complicated law; see our{" "}
        <Link href="/blog/common-compliance-mistakes-chennai-startups">
          first-year compliance mistakes
        </Link>{" "}
        for the patterns. If you are still incorporating, read our{" "}
        <Link href="/blog/spice-plus-incorporation-explained">
          SPICe+ step-by-step guide
        </Link>{" "}
        and the{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation
        </Link>{" "}
        page. Companies registered elsewhere in Tamil Nadu follow the same
        calendar; our{" "}
        <Link href="/company-registration-salem">Salem</Link> and{" "}
        <Link href="/company-registration-tiruchirappalli">Tiruchirappalli</Link>{" "}
        pages cover local points, and our{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        and <Link href="/roc-compliances">ROC compliance</Link> pages describe
        ongoing support. To set up your calendar,{" "}
        <Link href="/contact">contact us</Link>.
      </p>
    </>
  );
}
