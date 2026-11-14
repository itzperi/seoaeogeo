import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Practical checklist by situation. No prices or firm statistics. Income tax
// numbers follow the Income-tax Act, 2025 with 1961 numbers in brackets.
export const meta: BlogPostMeta = {
  slug: "first-meeting-with-a-ca-firm-documents-checklist",
  title: "First Meeting With a CA Firm: Documents Checklist by Need",
  description:
    "What to bring to a first meeting with a CA firm in Chennai: document lists for a new company, GST registration, a tax notice, an NRI property sale and books.",
  date: "2026-11-14",
  excerpt:
    "Document checklists for five common first meetings with a chartered accountant: starting a company, registering for GST, answering a tax notice, selling property as an NRI and handing over your books.",
  summary:
    "For a first meeting with a CA firm, bring identity and address proofs plus the documents tied to your situation: founder and office proofs for a new company, business and premises proofs for GST, the full notice and that year's return for a tax notice, title and cost records for an NRI sale, and recent financials for a bookkeeping takeover.",
  faqs: [
    {
      question: "What documents should I bring to my first meeting with a CA?",
      answer:
        "Bring your PAN, Aadhaar or passport, and the documents linked to your reason for meeting: proofs of founders and premises for a new company, the full notice and the related return for a tax notice, or recent financial statements for a bookkeeping change. Copies are enough at a first meeting. Keep passwords and original title deeds with you unless asked.",
    },
    {
      question: "Should I share portal passwords at the first meeting?",
      answer:
        "No. A first meeting is for understanding the situation and agreeing scope, not for handing over access. List the portals you use, such as income tax, GST and MCA, and share credentials only after a written engagement letter sets out how they will be stored and used. You can log in yourself during the meeting if something needs checking.",
    },
    {
      question: "What should I bring if I have received an income tax notice?",
      answer:
        "Bring the complete notice with every page, including the document identification number, the return and computation for that year, your Annual Information Statement and Form 26AS, relevant bank statements and the papers supporting the item questioned. Note the response date on the notice and mention it at the start of the meeting, since it decides how quickly work must begin.",
    },
    {
      question: "What does an NRI need for a property sale consultation in Chennai?",
      answer:
        "Bring the purchase or inheritance documents, the draft sale agreement, proof of purchase cost and improvements, your PAN, passport pages showing travel dates, NRO account details and buyer details. If you plan to claim treaty relief, bring your tax residency certificate. Mention whether you intend to reinvest the gain, as exemptions such as Section 82 (earlier Section 54) depend on it.",
    },
    {
      question: "Can the first meeting with a CA firm be held online?",
      answer:
        "Many firms meet online as well as in person. At C S Rushil & Co., consultations are held in English and Tamil, at the Anna Nagar office or by video call. For an online meeting, share scanned copies of the key documents in advance, so the time is spent on your questions rather than on reading papers.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        For a first meeting with a CA firm, bring identity proofs (PAN, and
        Aadhaar or passport) and the documents tied to why you are meeting:
        founder and office proofs for a new company, premises and bank proofs
        for GST, the full notice for a tax query, title and cost papers for a
        property sale, or recent financials for a bookkeeping handover.
      </p>
      <p>
        Bringing the right papers turns a first meeting from a general chat
        into a useful assessment. The lists below are organised by situation.
        Copies are enough at this stage; originals are usually needed only
        later, for specific filings or verification.
      </p>

      <h2>What should you bring in every case?</h2>
      <ul>
        <li>PAN of the individual or business concerned</li>
        <li>Aadhaar (for residents) or passport (for NRIs and foreign nationals)</li>
        <li>A short note of what you need and any deadline you already know about</li>
        <li>A list of the government portals you use, without passwords</li>
        <li>Contact details of anyone else involved, such as co-founders, co-owners or an existing accountant</li>
      </ul>
      <p>
        If you have not yet checked the firm&apos;s credentials, our guide on{" "}
        <Link href="/blog/how-to-verify-a-chartered-accountant-in-india">
          how to verify a chartered accountant
        </Link>{" "}
        explains the checks you can run before the meeting.
      </p>

      <h2>What do you need to start a new company?</h2>
      <p>For each proposed director and shareholder:</p>
      <ul>
        <li>PAN, Aadhaar and a recent passport-size photograph</li>
        <li>A recent bank statement or utility bill as address proof</li>
        <li>Personal email address and mobile number</li>
        <li>For a foreign national or NRI: passport and overseas address proof, which may need notarisation or apostille</li>
      </ul>
      <p>For the company:</p>
      <ul>
        <li>Two or three proposed names, with a line on what each means</li>
        <li>A description of the business activity</li>
        <li>Proposed capital and shareholding split</li>
        <li>For the registered office: a recent utility bill, a no-objection letter from the owner, and the rent agreement if the premises are rented</li>
      </ul>
      <p>
        The full document list, including formats, is in our post on{" "}
        <Link href="/blog/private-limited-company-registration-documents">
          private limited company registration documents
        </Link>
        . Incorporation is done through the SPICe+ forms on the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">
          MCA portal
        </a>
        .
      </p>

      <h2>What do you need for GST registration?</h2>
      <ul>
        <li>PAN of the business and proof of its constitution, such as the certificate of incorporation, LLP agreement or partnership deed</li>
        <li>PAN, Aadhaar and photographs of the proprietor, partners or directors</li>
        <li>Proof of the principal place of business: an electricity bill or property tax receipt if owned; the rent agreement with the owner&apos;s proof if rented; a consent letter with the owner&apos;s proof if the premises are shared or provided free</li>
        <li>Bank account proof, such as a cancelled cheque or the first page of the bank statement</li>
        <li>A board resolution or authorisation letter naming the authorised signatory</li>
        <li>A list of the main goods or services you supply</li>
      </ul>
      <p>
        The portal may ask promoters to complete Aadhaar authentication, so
        keep phones linked to Aadhaar within reach when the application is
        filed. Forms and guidance are on the{" "}
        <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
          GST portal
        </a>
        , and our page on{" "}
        <Link href="/gst-registration-chennai">GST registration in Chennai</Link>{" "}
        explains the process and when registration becomes compulsory.
      </p>

      <h2>What do you need if you have received an income tax notice?</h2>
      <ul>
        <li>The complete notice, every page, including the document identification number (DIN)</li>
        <li>The income tax return and computation for the year in question</li>
        <li>Your Annual Information Statement (AIS), Taxpayer Information Summary and Form 26AS</li>
        <li>Bank statements for the year</li>
        <li>Documents supporting the specific item raised, such as a property deed, investment proof or sale bills</li>
        <li>Any earlier replies or correspondence on the same matter</li>
      </ul>
      <p>
        Note the response date and mention it first. Notices for tax year
        2026-27 onwards cite the Income-tax Act, 2025, while notices for
        earlier years still cite the 1961 Act, so the section numbers may look
        unfamiliar; our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">
          section mapping table
        </Link>{" "}
        lists both. You can download the notice, AIS and Form 26AS from the{" "}
        <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">
          income tax e-filing portal
        </a>
        . For background, see{" "}
        <Link href="/blog/why-income-tax-notices-issued">
          why income tax notices are issued
        </Link>
        .
      </p>

      <h2>What does an NRI need for a property sale in Chennai?</h2>
      <ul>
        <li>The purchase deed, or for inherited property the will, settlement deed or legal heir documents, plus the previous owner&apos;s purchase papers</li>
        <li>The draft sale agreement and the agreed sale price</li>
        <li>Proof of the original cost and of any improvement work, such as invoices and receipts</li>
        <li>PAN, and passport pages showing entry and exit dates for residency purposes</li>
        <li>Overseas address, and NRO account details where the sale money will be received</li>
        <li>Buyer details, and details of any co-owners</li>
        <li>Tax residency certificate and Form 41 (earlier Form 10F) details if you plan to claim treaty relief</li>
      </ul>
      <p>
        The buyer must deduct tax at source on the payment to a non-resident
        under Section 393(2) of the Income-tax Act, 2025 (earlier Section 195),
        and moving the money abroad usually needs Form 145 with a chartered
        accountant&apos;s certificate in Form 146 (earlier Forms 15CA and 15CB).
        Tell the CA whether you plan to reinvest the gain, because exemptions
        such as Section 82 (earlier Section 54) depend on it. Our{" "}
        <Link href="/nri-tax-services">NRI tax services</Link> page and the
        guide to{" "}
        <Link href="/blog/capital-gains-tax-property-sale">
          capital gains tax on property sales
        </Link>{" "}
        cover the details.
      </p>

      <h2>What do you need when handing over your books?</h2>
      <ul>
        <li>The last audited or filed financial statements and income tax return</li>
        <li>A backup or export from your accounting software, with the trial balance as on the latest date</li>
        <li>Bank and loan statements from the last date the books were reconciled</li>
        <li>GST returns filed, with the related GSTR-2B statements</li>
        <li>TDS returns and challans, and the payroll register if you have staff</li>
        <li>Fixed asset register, and lists of amounts due to suppliers and from customers</li>
        <li>Any pending notices or open queries from tax authorities</li>
      </ul>
      <p>
        If the books are months behind, our post on{" "}
        <Link href="/blog/catch-up-bookkeeping-how-long-what-to-send">
          catch-up bookkeeping
        </Link>{" "}
        explains what to send first. Our{" "}
        <Link href="/bookkeeping-services-chennai">
          bookkeeping services in Chennai
        </Link>{" "}
        page describes how ongoing work is set up after a handover.
      </p>

      <h2>How should you organise the papers before the meeting?</h2>
      <p>
        A little preparation saves time on both sides. Scan each document as a
        separate PDF and name it plainly, for example &ldquo;Purchase deed
        2012&rdquo; or &ldquo;Notice dated 3 October 2026&rdquo;. Put
        everything in one folder in date order. For a notice or a property
        sale, write a short timeline of events on one page: when the property
        was bought, when work was done on it, when the notice arrived and what
        has been sent so far. If something is missing, say so at the start
        rather than leaving it out; a chartered accountant can often suggest
        where to obtain a replacement, such as a certified copy from the
        registration office or a statement from the bank.
      </p>

      <h2>Which documents matter most for each situation?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Must bring</th>
            <th>Helpful extras</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>New company</td><td>Founder PAN, Aadhaar and address proof; office utility bill and owner&apos;s NOC</td><td>Proposed names, shareholding split</td></tr>
          <tr><td>GST registration</td><td>Business PAN, constitution proof, premises proof, bank proof</td><td>List of goods or services, expected turnover</td></tr>
          <tr><td>Income tax notice</td><td>Full notice, return for that year, AIS and Form 26AS</td><td>Bank statements, earlier replies</td></tr>
          <tr><td>NRI property sale</td><td>Title documents, draft sale agreement, cost proofs, PAN, passport</td><td>Reinvestment plans, tax residency certificate</td></tr>
          <tr><td>Bookkeeping takeover</td><td>Last financials, software backup, bank statements</td><td>GST and TDS returns, payroll register</td></tr>
        </tbody>
      </table>

      <h2>What should you ask before you leave?</h2>
      <p>
        Before the meeting ends, ask what else is needed, who will handle your
        work, and what the next deadline is. If you decide to proceed, the
        terms should be confirmed in writing; our guide on{" "}
        <Link href="/blog/ca-engagement-letter-what-it-should-cover">
          what a CA engagement letter should cover
        </Link>{" "}
        lists the clauses to check.
      </p>
      <p>
        C S Rushil &amp; Co. is a{" "}
        <Link href="/">CA firm in Chennai</Link> with its office in J-Block,
        Anna Nagar. Consultations are held in English and Tamil, in person or
        by video call. Book a free 15-minute consultation through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
