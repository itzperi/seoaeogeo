import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Neutral, factual guide. No firm is named and no claim is made about any
// other practice. Portal behaviour is described cautiously because ICAI
// changes its screens; the reader is pointed to the official portals.
export const meta: BlogPostMeta = {
  slug: "how-to-verify-a-chartered-accountant-in-india",
  title: "How to Verify a Chartered Accountant or CA Firm in India",
  description:
    "Check a CA before you hire: ICAI Trace a Member, certificate of practice, firm registration number, UDIN on signed reports and a written engagement letter.",
  date: "2026-11-14",
  excerpt:
    "Five checks you can run yourself before hiring a chartered accountant: ICAI membership, certificate of practice, firm registration number, UDIN on signed documents and the engagement letter.",
  summary:
    "To verify a chartered accountant in India, check the membership number on ICAI's Trace a Member search, confirm the CA holds a certificate of practice, note the firm registration number, and verify the UDIN on any certificate or audit report at udin.icai.org. Then get the engagement in writing, naming who will sign your work.",
  faqs: [
    {
      question: "How do I check if someone is a genuine chartered accountant?",
      answer:
        "Ask for their ICAI membership number and look it up on ICAI's Trace a Member search at traceamember.icai.org. Check that the name matches the person you are dealing with. A genuine chartered accountant will share the number readily, and it should also appear on any audit report or certificate they sign for you, next to their name.",
    },
    {
      question: "What is a UDIN and why should my CA certificate have one?",
      answer:
        "UDIN stands for Unique Document Identification Number. ICAI requires practising chartered accountants to generate one for certificates, audit reports and other attest documents they sign. It links the document to the member who signed it, so you, a bank or a government office can verify on ICAI's UDIN portal that the document was genuinely issued by that member.",
    },
    {
      question: "What is the difference between ACA and FCA?",
      answer:
        "Both are designations of ICAI members. ACA means Associate Chartered Accountant, the designation a member holds on admission. FCA means Fellow Chartered Accountant, a designation a member can obtain later after meeting ICAI's conditions. Either can practise if they hold a certificate of practice, so the certificate, not the designation, decides whether they can sign audit reports.",
    },
    {
      question: "How do I verify a CA firm rather than an individual CA?",
      answer:
        "Ask for the firm's ICAI firm registration number, which appears on audit reports and certificates the firm signs, and ask which partner will sign your work. Verify that partner's membership on Trace a Member. If the firm is registered as an LLP, its details can also be seen on the Ministry of Corporate Affairs portal.",
    },
    {
      question: "Can I verify a CA firm's GST number before paying an invoice?",
      answer:
        "Yes. If the firm charges GST, its invoice will show a GSTIN. You can enter that GSTIN in the taxpayer search on the GST portal to see the registered legal name, trade name and registration status, and check that they match the firm you engaged. A mismatch is worth raising with the firm before you pay.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        To verify a chartered accountant in India, look up their ICAI
        membership number on the Institute&apos;s Trace a Member search,
        confirm they hold a certificate of practice, note the firm registration
        number, and check the UDIN printed on any certificate or report they
        sign. Each check takes minutes and uses free official portals.
      </p>
      <p>
        This guide explains each check in detail. It is about confirming
        identity and authority, which is only part of choosing a CA. For the
        wider questions of fit, specialisation and working style, see our guide
        on{" "}
        <Link href="/blog/how-to-choose-a-chartered-accountant-in-chennai">
          how to choose a chartered accountant in Chennai
        </Link>
        .
      </p>

      <h2>What can you verify, and where?</h2>
      <table>
        <thead>
          <tr>
            <th>Check</th>
            <th>Where to check</th>
            <th>What it tells you</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ICAI membership</td>
            <td>ICAI Trace a Member (traceamember.icai.org)</td>
            <td>The person is a member of ICAI, under the name given</td>
          </tr>
          <tr>
            <td>Certificate of practice</td>
            <td>Ask the CA; check the member details ICAI publishes</td>
            <td>The member is allowed to practise and sign attest reports</td>
          </tr>
          <tr>
            <td>Firm registration number</td>
            <td>Audit reports, certificates and the firm&apos;s letterhead</td>
            <td>The firm is registered with ICAI</td>
          </tr>
          <tr>
            <td>UDIN on signed documents</td>
            <td>ICAI UDIN portal (udin.icai.org)</td>
            <td>The document was generated by the member who signed it</td>
          </tr>
          <tr>
            <td>GSTIN on invoices</td>
            <td>Taxpayer search on the GST portal</td>
            <td>The invoice comes from the business you engaged</td>
          </tr>
          <tr>
            <td>Engagement letter</td>
            <td>Issued by the firm before work starts</td>
            <td>Who is responsible for your work and what they will do</td>
          </tr>
        </tbody>
      </table>

      <h2>How do you use ICAI&apos;s Trace a Member search?</h2>
      <p>
        The Institute of Chartered Accountants of India (ICAI) is the statutory
        body that regulates chartered accountants under the Chartered
        Accountants Act, 1949. It runs a public search called{" "}
        <a href="https://traceamember.icai.org/" target="_blank" rel="noopener noreferrer">
          Trace a Member
        </a>
        .
      </p>
      <ol>
        <li>Ask the chartered accountant for their ICAI membership number.</li>
        <li>Open Trace a Member and enter the number.</li>
        <li>Check that the name shown matches the person you are dealing with.</li>
        <li>Note the other details shown, such as the address on record and practice status where it is displayed.</li>
        <li>Repeat the search for the partner who will actually sign your reports, if that is a different person.</li>
      </ol>
      <p>
        If the number returns no result, or a different name, ask the person
        to explain before going further. A typing error is easy to clear up; a
        number that does not belong to them is not.
      </p>

      <h2>What is a certificate of practice, and how do you confirm it?</h2>
      <p>
        Membership alone does not allow a chartered accountant to practise.
        Under Section 6 of the Chartered Accountants Act, 1949, a member needs a
        certificate of practice from ICAI to offer professional services to the
        public and sign attest reports. Many members work as employees in
        companies or banks and do not hold one.
      </p>
      <p>
        Ask the CA directly whether they hold a current certificate of
        practice, and check the member details ICAI publishes for any
        indication of practice status. This matters most for work that only a
        practising CA can sign, such as a{" "}
        <Link href="/statutory-audit-chennai">statutory audit of a company</Link>
        , a{" "}
        <Link href="/tax-audit-chennai">tax audit report</Link>{" "}
        under Section 63 of the Income-tax Act, 2025 (earlier Section 44AB), or
        a certificate in Form 146 (earlier Form 15CB) for a payment abroad.
        Members may also hold designations such as ACA (associate) or FCA
        (fellow), and ICAI post-qualification certificates in areas such as
        forensic accounting and fraud detection. These add to a member&apos;s
        profile, but none of them replaces the certificate of practice.
      </p>

      <h2>How do you check a CA firm&apos;s registration?</h2>
      <p>
        A CA firm, whether a proprietorship, partnership or LLP, registers with
        ICAI and receives a firm registration number (FRN). The FRN appears on
        the audit reports and certificates the firm signs, alongside the name
        and membership number of the signing partner. When you check a firm:
      </p>
      <ul>
        <li>Ask for the FRN and the name of the partner who will sign your work.</li>
        <li>Verify that partner&apos;s membership on Trace a Member.</li>
        <li>
          Compare the firm name on the engagement letter, invoices and any
          report you receive; they should match.
        </li>
        <li>
          If the firm is an LLP, check its LLPIN and status in the master data
          on the{" "}
          <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">
            Ministry of Corporate Affairs portal
          </a>
          .
        </li>
        <li>
          If the firm charges GST, check its GSTIN through the taxpayer search
          on the{" "}
          <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
            GST portal
          </a>
          .
        </li>
      </ul>

      <h2>What is a UDIN, and how do you verify it?</h2>
      <p>
        A Unique Document Identification Number (UDIN) is an 18-character
        number that a practising chartered accountant generates on ICAI&apos;s
        portal for each certificate, audit report or other attest document they
        sign. ICAI introduced it to stop false certificates being passed off
        under a CA&apos;s name. The UDIN is printed on the document, usually
        near the signature.
      </p>
      <p>
        To verify one, open the{" "}
        <a href="https://udin.icai.org/" target="_blank" rel="noopener noreferrer">
          ICAI UDIN portal
        </a>
        , choose the option to verify a UDIN, and enter the number with any
        other details the portal asks for. The portal shows the details the CA
        recorded when the UDIN was generated, which you can compare with the
        document in your hand: the member, the type of document and the date.
      </p>
      <p>
        UDIN verification is especially useful for documents that third
        parties rely on: net worth certificates for visa or bank purposes,
        turnover certificates for tenders, audit reports, and the accountant&apos;s
        certificate in Form 146 that banks ask for before remitting money
        abroad. Our page on{" "}
        <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB certification</Link>{" "}
        explains how that certificate is prepared. Reports filed on the{" "}
        <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">
          income tax e-filing portal
        </a>{" "}
        by a chartered accountant are also linked to a UDIN.
      </p>

      <h2>What should a signed report or certificate show?</h2>
      <p>
        Once work is delivered, look at the signature block before you rely on
        the document or pass it to a bank, a department or a buyer. A report or
        certificate signed by a CA firm normally shows:
      </p>
      <ul>
        <li>The firm&apos;s name and its ICAI firm registration number</li>
        <li>The name of the signing partner or proprietor and their membership number</li>
        <li>The UDIN generated for that document</li>
        <li>The place and date of signing</li>
      </ul>
      <p>
        If any of these is missing, ask for a corrected copy. It is far easier
        to fix at this stage than after the document has been submitted and
        questioned.
      </p>

      <h2>Why does the engagement letter matter for verification?</h2>
      <p>
        The engagement letter is where verification turns into accountability.
        It should name the firm, its FRN, and the partner responsible for your
        work, and it should set out what the firm will and will not do. For
        audits, the terms are required to be agreed in writing under ICAI&apos;s
        Standards on Auditing. For other work it is good practice. Our guide to{" "}
        <Link href="/blog/ca-engagement-letter-what-it-should-cover">
          what a CA engagement letter should cover
        </Link>{" "}
        lists the clauses to look for.
      </p>

      <h2>What should make you pause?</h2>
      <p>
        These verification results are worth a direct conversation before you
        proceed:
      </p>
      <ul>
        <li>The membership number does not return a result, or returns a different name.</li>
        <li>The person cannot say whether they hold a certificate of practice.</li>
        <li>A certificate or report has no UDIN, or the UDIN does not verify.</li>
        <li>The firm name differs between the letter, the invoice and the report.</li>
        <li>No one can tell you which chartered accountant will sign your work.</li>
      </ul>
      <p>
        None of these is proof of wrongdoing on its own. Each is simply a
        question that a properly registered practice can answer quickly. The{" "}
        <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer">
          ICAI website
        </a>{" "}
        has more on how the Institute regulates its members.
      </p>

      <h2>Can you run these checks on us?</h2>
      <p>
        Yes, and we would encourage it. C S Rushil &amp; Co. is a{" "}
        <Link href="/">CA firm in Chennai</Link> led by CA Rushil C S, a
        practising chartered accountant and ICAI member. Ask us for our
        membership and firm registration details at your free 15-minute
        consultation, which you can book through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
