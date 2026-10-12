import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "spice-plus-incorporation-explained",
  title: "SPICe+ Step by Step (2026): Part A, Part B and AGILE-PRO-S",
  description:
    "SPICe+ step by step for 2026: Part A name reservation, Part B filing, e-MoA and e-AoA, AGILE-PRO-S, DSC and DIN, resubmission and common rejection reasons.",
  date: "2026-09-19",
  updated: "2026-10-12",
  excerpt:
    "How a Tamil Nadu company is incorporated on MCA V3 today: Part A, Part B, the linked forms, what AGILE-PRO-S makes mandatory, and why filings come back.",
  faqs: [
    {
      question: "Is SPICe+ the only way to incorporate a company in India?",
      answer:
        "Yes. SPICe+ (form INC-32) on the MCA V3 portal is the route for incorporating a company, whether private limited, OPC or public. Name reservation can be done in Part A first, or Part A and Part B can be filed together as one application. The older standalone incorporation forms are no longer used.",
    },
    {
      question: "How long is a name reserved under SPICe+ Part A?",
      answer:
        "An approved name is reserved for 20 days from the date of approval, under section 4(5) of the Companies Act, 2013. Part B must be filed within that window. If it is not, the reservation lapses and the name has to be applied for again, with no guarantee it will still be available.",
    },
    {
      question: "Is GST registration compulsory in SPICe+?",
      answer:
        "No. GSTIN is optional in the AGILE-PRO-S linked form. EPFO registration, ESIC registration and the request to open a bank account are mandatory. Many founders apply for GST separately once they know their supply pattern, because a GSTIN starts monthly or quarterly return obligations from the date of registration.",
    },
    {
      question: "Does SPICe+ register a Tamil Nadu company for professional tax?",
      answer:
        "No. The MCA's AGILE-PRO-S facility covers profession tax registration only for Maharashtra, Karnataka and West Bengal. A Tamil Nadu company enrols for professional tax separately with its local body, which in Chennai is the Greater Chennai Corporation, and deducts it from salaries as required.",
    },
    {
      question: "What happens if the MCA marks my SPICe+ for resubmission?",
      answer:
        "The Central Registration Centre lists its objections and the application returns to your MCA account. You correct the attachments or details, re-sign with DSCs and resubmit within the time the portal allows. SPICe+ permits a limited number of resubmissions, currently two, after which an uncured defect can lead to rejection.",
    },
    {
      question: "How many directors can get a DIN through SPICe+?",
      answer:
        "SPICe+ Part B can allot a Director Identification Number to up to three proposed directors who do not already hold one. Directors who already have a DIN simply enter it. Every subscriber and director still needs a valid Class 3 Digital Signature Certificate to sign the forms, so arrange DSCs first.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Every company incorporated in India today, including every private
        limited company with its registered office in Chennai or anywhere else
        in Tamil Nadu, goes through one web form on the MCA V3 portal: SPICe+.
        This guide walks through it in the order you will actually meet it, from
        signatures and name reservation to the certificate of incorporation, and
        lists the defects that most often send applications back.
      </p>

      <h2>What is SPICe+ and how does it work in 2026?</h2>
      <p>
        <strong>
          SPICe+ (INC-32) is the MCA&apos;s single web form for incorporating a
          company. Part A reserves the name; Part B carries the incorporation
          details and is filed with linked forms: e-MoA (INC-33), e-AoA (INC-34)
          and AGILE-PRO-S (INC-35). One approval issues the CIN, PAN, TAN, EPFO
          and ESIC registrations and triggers the bank account request.
        </strong>
      </p>
      <p>
        The form is processed centrally by the Central Registration Centre, not
        by the local Registrar&apos;s office, so the process is the same whether
        the company sits in Anna Nagar or Hosur. The jurisdictional Registrar of
        Companies matters later, for adjudication and certain event-based
        matters; see{" "}
        <Link href="/blog/roc-chennai-vs-roc-coimbatore">
          which ROC handles a Tamil Nadu company
        </Link>
        . The MCA&apos;s own{" "}
        <a
          href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPICe+ FAQs
        </a>{" "}
        describe the linked forms in detail.
      </p>

      <h2>What are the steps, in order?</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>What happens</th>
            <th>Who acts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. DSCs</td>
            <td>Class 3 Digital Signature Certificates for every subscriber and proposed director</td>
            <td>Each individual, through a certifying authority</td>
          </tr>
          <tr>
            <td>2. MCA user account</td>
            <td>Business user login on the MCA V3 portal for the person filing</td>
            <td>Filer or professional</td>
          </tr>
          <tr>
            <td>3. Part A</td>
            <td>Up to two proposed names, objects summary and activity code; approved name held for 20 days</td>
            <td>Filer; Central Registration Centre approves</td>
          </tr>
          <tr>
            <td>4. Part B</td>
            <td>Capital, subscribers, directors (DIN for up to three), registered office, PAN and TAN data, stamp duty</td>
            <td>Filer; signed by subscribers, directors and a certifying professional</td>
          </tr>
          <tr>
            <td>5. e-MoA and e-AoA</td>
            <td>Memorandum (INC-33) and Articles (INC-34) generated as web forms and signed digitally</td>
            <td>Subscribers and witness</td>
          </tr>
          <tr>
            <td>6. AGILE-PRO-S</td>
            <td>EPFO, ESIC, bank account (mandatory); GSTIN (optional)</td>
            <td>Filer; signed by a director</td>
          </tr>
          <tr>
            <td>7. INC-9 and other linked forms</td>
            <td>Subscriber and director declarations (auto-generated in most cases); URC-1 only for conversions</td>
            <td>System and signatories</td>
          </tr>
          <tr>
            <td>8. Scrutiny</td>
            <td>Approval, or resubmission with objections</td>
            <td>Central Registration Centre</td>
          </tr>
          <tr>
            <td>9. Certificate</td>
            <td>Certificate of incorporation with CIN, PAN and TAN; EPFO and ESIC numbers; account opened by the chosen bank</td>
            <td>MCA and linked agencies</td>
          </tr>
        </tbody>
      </table>

      <h2>Why do DSC and DIN come first?</h2>
      <p>
        Nothing in SPICe+ can be signed without a{" "}
        <Link href="/digital-signature-certificate-chennai">
          Digital Signature Certificate
        </Link>
        . The name on each DSC should match the PAN exactly; a missing initial
        or a different spelling is one of the most avoidable reasons for a
        signature to fail validation. Directors who already hold a Director
        Identification Number enter it in Part B. For new directors, Part B
        itself allots the DIN, for up to three people. If a company will have
        more than three new directors, the others are appointed after
        incorporation through the usual appointment route.
      </p>

      <h2>How does Part A name reservation work?</h2>
      <p>
        Part A asks for up to two proposed names, the main objects and the
        industrial activity code. The Central Registration Centre tests each
        name against existing companies and LLPs, registered trademarks and the
        restricted words in the naming rules. An approved name is reserved for
        20 days under section 4(5) of the Companies Act, 2013, and Part B must
        be filed within that period.
      </p>
      <p>
        You can also file Part A and Part B together. That saves a step when
        you are confident about the name, but you can then propose only one
        name, and an objection to it sends the entire application, with all its
        attachments, back for resubmission. Where the name is at all uncertain,
        reserving it first is usually faster overall.
      </p>

      <h2>What goes into Part B?</h2>
      <p>
        Part B is the incorporation application itself. It captures the
        authorised and subscribed capital, each subscriber&apos;s shareholding,
        director details and DIN applications, and the registered office
        address with proof of address and the owner&apos;s no-objection where
        the premises are not owned by the company. It also collects the data
        used to issue PAN and TAN, and calculates the state stamp duty payable
        on the MoA and AoA, which is paid through the MCA system. A practising
        Chartered Accountant, Company Secretary or Cost Accountant certifies the
        form. Our{" "}
        <Link href="/blog/private-limited-company-registration-documents">
          documents checklist
        </Link>{" "}
        covers each attachment in more depth.
      </p>

      <h2>What are e-MoA and e-AoA?</h2>
      <p>
        The Memorandum of Association (INC-33) and Articles of Association
        (INC-34) are filed as web forms rather than as scanned paper documents
        for most private limited companies. The objects clause in the e-MoA
        should describe the business you will actually run; vague, open-ended
        objects or regulated activities such as lending, insurance or chit
        funds draw objections or need a separate regulator&apos;s approval. The
        e-AoA can adopt the standard Table F articles or include customised
        clauses, for example share transfer restrictions or ESOP provisions.
        Each subscriber signs digitally, and a witness attests the signatures.
      </p>

      <h2>What does AGILE-PRO-S make mandatory?</h2>
      <p>
        AGILE-PRO-S (INC-35) bundles registrations that used to be separate
        post-incorporation applications. For a Tamil Nadu company the position
        is:
      </p>
      <table>
        <thead>
          <tr>
            <th>Registration</th>
            <th>Status in AGILE-PRO-S</th>
            <th>Tamil Nadu note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EPFO</td>
            <td>Mandatory</td>
            <td>Establishment code issued at incorporation; contributions start when coverage applies</td>
          </tr>
          <tr>
            <td>ESIC</td>
            <td>Mandatory</td>
            <td>Registration number issued at incorporation; contributions start when coverage applies</td>
          </tr>
          <tr>
            <td>Bank account</td>
            <td>Mandatory request to a listed bank</td>
            <td>The bank completes its own KYC before activating the account</td>
          </tr>
          <tr>
            <td>GSTIN</td>
            <td>Optional</td>
            <td>Can be applied for later on the GST portal when needed</td>
          </tr>
          <tr>
            <td>Profession tax</td>
            <td>Only for Maharashtra, Karnataka and West Bengal</td>
            <td>Not covered; enrol separately with the local body (Greater Chennai Corporation in Chennai)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Because GSTIN is optional, decide deliberately. A GSTIN taken at
        incorporation starts return filing at once, even with no sales; one
        taken later should still be in place before the threshold is crossed or
        a compulsory-registration trigger, such as inter-state supply of goods,
        applies. Our{" "}
        <Link href="/gst-registration-chennai">GST registration</Link> page
        explains the triggers.
      </p>

      <h2>What happens at scrutiny and resubmission?</h2>
      <p>
        After submission, the Central Registration Centre either approves the
        application or marks it for resubmission with a list of objections. You
        then correct the details or attachments, have the affected forms
        re-signed, and resubmit within the time the portal shows. SPICe+
        currently allows two resubmissions; an application that still has
        defects after that can be rejected, and a fresh filing means starting
        again, sometimes including the name. Each round adds days, which is why
        preparation before the first submission matters more than speed of
        filing.
      </p>

      <h2>What are the most common rejection and resubmission reasons?</h2>
      <ul>
        <li>
          <strong>Name objections:</strong> similarity to an existing company,
          LLP or registered trademark, or words that need prior approval.
        </li>
        <li>
          <strong>Registered office proof:</strong> a utility bill older than
          the permitted period, an address that does not match the bill, or a
          missing owner&apos;s no-objection.
        </li>
        <li>
          <strong>Identity mismatches:</strong> different spellings of a
          director&apos;s name across PAN, Aadhaar, passport and DSC.
        </li>
        <li>
          <strong>Objects clause:</strong> objects too broad, inconsistent with
          the activity code, or covering regulated business.
        </li>
        <li>
          <strong>Signatures:</strong> expired DSCs, a DSC belonging to the
          wrong person, or forms signed before a later edit.
        </li>
        <li>
          <strong>Foreign subscribers or directors:</strong> documents not
          notarised and apostilled or consularised as required.
        </li>
      </ul>

      <h2>Which documents does SPICe+ need?</h2>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Needed from</th>
            <th>Used in</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAN card</td>
            <td>Every Indian subscriber and director</td>
            <td>Part B, DIN allotment, DSC match</td>
          </tr>
          <tr>
            <td>Proof of identity and address (Aadhaar, passport, voter ID or driving licence; recent bank statement or utility bill)</td>
            <td>Every subscriber and director</td>
            <td>Part B and INC-9</td>
          </tr>
          <tr>
            <td>Photograph</td>
            <td>Directors applying for DIN</td>
            <td>Part B</td>
          </tr>
          <tr>
            <td>Registered office proof (recent utility bill) and owner&apos;s NOC, or rent agreement where rented</td>
            <td>The company</td>
            <td>Part B</td>
          </tr>
          <tr>
            <td>Passport and apostilled address proof</td>
            <td>Foreign nationals and NRIs, where applicable</td>
            <td>Part B</td>
          </tr>
          <tr>
            <td>Board resolution and authorisation</td>
            <td>A company or LLP that is a subscriber</td>
            <td>Part B and e-MoA</td>
          </tr>
        </tbody>
      </table>

      <h2>What should you do right after approval?</h2>
      <p>
        Approval is the start of a calendar, not the end of the job: the first
        board meeting and first auditor within 30 days, share certificates
        within two months and the commencement-of-business declaration within
        180 days. Our{" "}
        <Link href="/blog/post-incorporation-compliance-checklist">
          first-year compliance calendar
        </Link>{" "}
        sets these out month by month. For the full incorporation process,
        including choosing between structures, see{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>
        . If your registered office will be outside Chennai, our{" "}
        <Link href="/company-registration-coimbatore">
          Coimbatore company registration
        </Link>{" "}
        and{" "}
        <Link href="/company-registration-madurai">
          Madurai company registration
        </Link>{" "}
        pages cover local points. To discuss your filing,{" "}
        <Link href="/contact">contact our Anna Nagar office</Link>.
      </p>
    </>
  );
}
