import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "company-registration-timeline-day-by-day",
  title: "Company Registration Timeline: A Day-by-Day Guide",
  description:
    "A realistic 7 to 12 working day timeline for registering a private limited company through SPICe+, step by step, and the common issues that cause delays.",
  date: "2026-11-03",
  excerpt:
    "How long does company registration really take? A step-by-step 7 to 12 working day timeline for SPICe+, plus the delays founders can control.",
  faqs: [
    {
      question: "How long does it take to register a private limited company?",
      answer:
        "When documents are ready and the name is approved without objection, a private limited company is typically incorporated in about 7 to 12 working days through SPICe+. This is a practical estimate, not a statutory deadline. Processing time at the Central Registration Centre varies, and each resubmission request adds several days to the schedule.",
    },
    {
      question: "What causes the most delays in company registration?",
      answer:
        "The biggest causes are name objections, registered office documents that do not match the form, outdated address proofs, name mismatches between PAN and other records, and slow attestation of documents for NRI or foreign directors. SPICe+ allows two resubmissions to cure defects, and each one adds days, so careful preparation saves the most time.",
    },
    {
      question: "Can I file name approval and incorporation together to save time?",
      answer:
        "Yes. You can file SPICe+ Part A and Part B together in one application, which avoids waiting for name approval before starting Part B. The trade-off is that you can propose only one name. If that name is objected to, the whole application goes into resubmission, which can take longer than reserving the name first.",
    },
    {
      question: "Is PAN and TAN issued at the same time as incorporation?",
      answer:
        "Yes. The MCA's SPICe+ FAQs state that the Certificate of Incorporation is issued with the PAN allotted by the Income Tax Department, and an email with the certificate indicating PAN and TAN is sent to the applicant. The physical PAN card follows separately from the Income Tax Department.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Founders often ask how long it takes to register a company. The honest
        answer is: about 7 to 12 working days when everything is in order, and
        longer when it is not. There is no statutory deadline for the Registrar
        to approve an application, so the timeline below is a practical
        estimate based on how SPICe+ filings typically move. What it does show
        is where the time goes, and which delays are in your control.
      </p>

      <h2>The timeline at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Working day</th>
            <th>Step</th>
            <th>Who acts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Day 1</td>
            <td>Collect documents, decide names, capital and objects</td>
            <td>Founders and adviser</td>
          </tr>
          <tr>
            <td>Days 1 to 2</td>
            <td>Apply for Digital Signature Certificates</td>
            <td>Directors, Certifying Authority</td>
          </tr>
          <tr>
            <td>Days 2 to 4</td>
            <td>File SPICe+ Part A for name approval, if reserving separately</td>
            <td>Applicant, Central Registration Centre</td>
          </tr>
          <tr>
            <td>Days 3 to 6</td>
            <td>Prepare and sign SPICe+ Part B, e-MoA, e-AoA and AGILE-PRO-S</td>
            <td>Directors and certifying professional</td>
          </tr>
          <tr>
            <td>Days 6 to 7</td>
            <td>Pay fees and stamp duty, upload forms</td>
            <td>Applicant</td>
          </tr>
          <tr>
            <td>Days 7 to 12</td>
            <td>Scrutiny, approval, Certificate of Incorporation with PAN and TAN</td>
            <td>Central Registration Centre</td>
          </tr>
        </tbody>
      </table>

      <h2>Day 1: preparation</h2>
      <p>
        Everything that follows depends on this day. Decide on two names, the
        main business activity, authorised and subscribed capital, the
        shareholding, and the directors. Collect PAN, identity and address
        proofs, photographs, emails and mobile numbers for each director and
        subscriber, and the registered office documents. Our{" "}
        <Link href="/blog/private-limited-company-registration-documents">documents checklist</Link>{" "}
        lists everything in one place.
      </p>

      <h2>Days 1 to 2: digital signatures</h2>
      <p>
        Every subscriber and director needs a Class 3 Digital Signature
        Certificate to sign the forms. For resident Indians with Aadhaar or PAN
        based verification, a DSC is often issued within a day once video and
        mobile verification are done. NRI and foreign directors may take longer
        because of additional checks. See our{" "}
        <Link href="/digital-signature-certificate-chennai">digital signature certificate</Link>{" "}
        page for the process.
      </p>

      <h2>Days 2 to 4: name approval</h2>
      <p>
        If you reserve the name separately, you file SPICe+ Part A with up to two
        proposed names. Approval usually comes within a few working days, but a
        name objection sends it back for resubmission. The approved name is then
        reserved for 20 days. Our post on{" "}
        <Link href="/blog/company-name-rejection-reasons">why company names get rejected</Link>{" "}
        explains how to reduce this risk.
      </p>
      <p>
        If you file Part A and Part B together, this step merges into the main
        filing. That saves time if the name is clean, and costs time if it is
        not.
      </p>

      <h2>Days 3 to 6: drafting and signing Part B</h2>
      <p>
        SPICe+ Part B is a web form divided into blocks covering the structure of
        the company, address, subscribers and directors, stamp duty, PAN and TAN
        details, attachments, declarations and professional certification.
        Linked forms are filed with it:
      </p>
      <ul>
        <li>e-MoA (INC-33), including the objects clause</li>
        <li>e-AoA (INC-34)</li>
        <li>AGILE-PRO-S, which is mandatory and covers EPFO, ESIC and the bank account request, with optional GSTIN</li>
        <li>INC-9 declarations, auto-generated in most cases</li>
      </ul>
      <p>
        The forms are then generated as PDFs and signed by each director and the
        certifying professional with their DSCs. Coordinating signatures across
        directors in different cities or countries is often the slowest part
        of this stage.
      </p>

      <h2>Days 6 to 7: payment and submission</h2>
      <p>
        After the signed forms are uploaded, the system generates the fee
        challan (covering the filing fee, PAN and TAN) and a separate stamp duty
        challan. MCA guidance notes that if the DSC-affixed PDF is not uploaded
        within 15 days of SRN generation, or payment is not completed within 7
        days of a successful upload, the SRN is cancelled. Processing starts only
        once both challans are paid.
      </p>

      <h2>Days 7 to 12: scrutiny and approval</h2>
      <p>
        The Central Registration Centre examines the application. If it is in
        order, the Certificate of Incorporation is issued with the Corporate
        Identity Number and the PAN allotted by the Income Tax Department, and an
        email with PAN and TAN follows, as explained in the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>.
        EPFO and ESIC registration numbers and the bank account request are
        processed after incorporation through the linked AGILE-PRO-S form.
      </p>

      <h2>What causes delays?</h2>
      <p>
        If the Centre finds defects, it marks the application for resubmission
        with remarks. SPICe+ allows two resubmissions. Each round requires
        corrections, fresh signatures and another wait. The usual triggers are:
      </p>
      <ul>
        <li><strong>Name objections:</strong> similarity to existing companies or trademarks, or a name that does not match the objects</li>
        <li><strong>Registered office proof:</strong> old utility bill, NOC missing the company name, or an address mismatch</li>
        <li><strong>Director KYC:</strong> name differences between PAN and other records, or old address proofs</li>
        <li><strong>Objects clause:</strong> objects that do not match the NIC code selected, or activities that need a regulator&apos;s approval</li>
        <li><strong>Foreign documents:</strong> notarised but not apostilled, or missing business visa proof</li>
        <li><strong>Capital mismatches:</strong> different figures in the MoA and the form</li>
      </ul>

      <h2>How long does it take with NRI or foreign directors?</h2>
      <p>
        Add time before day 1. Documents for directors or subscribers living
        abroad must be notarised and apostilled, or consularised, in their
        country of residence, and physically signed MoA and AoA may need to be
        couriered. Depending on the country, this can take one to three weeks
        on its own. The MCA filing timeline then runs as above, but with a
        higher chance of resubmission if any attestation is incomplete. Start
        the attestation process while names and drafts are being prepared, not
        after.
      </p>

      <h2>Which steps can run in parallel?</h2>
      <table>
        <thead>
          <tr>
            <th>Can run at the same time</th>
            <th>Must wait for an earlier step</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DSC applications and name searches</td>
            <td>Signing Part B (needs DSCs)</td>
          </tr>
          <tr>
            <td>Drafting objects and articles while the name is under review</td>
            <td>Filing Part B, if you reserved the name separately (needs the approved name)</td>
          </tr>
          <tr>
            <td>Collecting registered office documents and the owner NOC</td>
            <td>Paying fees (needs the uploaded, signed forms)</td>
          </tr>
          <tr>
            <td>Choosing the bank and preparing the board resolution format</td>
            <td>Bank account opening (needs the certificate of incorporation and PAN)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Most of the time saved in a quick incorporation comes from doing the
        left-hand column in the first two or three days, rather than one item
        after another.
      </p>

      <h2>What you can do while waiting for approval</h2>
      <ul>
        <li>Identify and approach the first auditor, and obtain their consent and eligibility certificate</li>
        <li>Prepare the agenda for the first board meeting</li>
        <li>Draft a shareholders&apos; agreement if there are co-founders or early investors</li>
        <li>Plan the name board and photographs for the registered office, which INC-20A will need</li>
        <li>Consider whether a trademark application for the company name is worthwhile</li>
      </ul>

      <h2>What happens after incorporation?</h2>
      <p>
        The certificate is not the finish line. Several deadlines start running
        from the date of incorporation:
      </p>
      <ul>
        <li>First board meeting within 30 days (section 173)</li>
        <li>First auditor appointed by the board within 30 days (section 139(6))</li>
        <li>Registered office verification within 30 days, if not already done (section 12)</li>
        <li>Share certificates to subscribers within two months (section 56)</li>
        <li>INC-20A declaration within 180 days, before commencing business (section 10A)</li>
      </ul>
      <p>
        Our posts on the{" "}
        <Link href="/blog/first-board-meeting-checklist">first board meeting</Link>{" "}
        and{" "}
        <Link href="/blog/inc-20a-commencement-of-business">INC-20A</Link>{" "}
        explain each step, and our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> page covers the
        ongoing calendar.
      </p>

      <h2>How to keep to the shorter end of the range</h2>
      <ul>
        <li>Fix PAN and Aadhaar name differences before starting</li>
        <li>Get a fresh utility bill and an NOC that names the proposed company</li>
        <li>Search the MCA register and trademarks before choosing names</li>
        <li>Write objects that match a specific NIC code</li>
        <li>Arrange DSCs and signature availability for all directors in advance</li>
        <li>Start apostille or consular attestation early for any foreign participants</li>
      </ul>
      <p>
        For the full process, see our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        or our{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation</Link>{" "}
        page. If you would like to plan your incorporation timeline, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
