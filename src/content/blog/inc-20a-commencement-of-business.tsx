import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "inc-20a-commencement-of-business",
  title: "INC-20A: Declaration for Commencement of Business",
  description:
    "INC-20A explained: the 180-day deadline under section 10A, documents and photos needed, who certifies it, penalties for missing it and the strike-off risk.",
  date: "2026-11-17",
  excerpt:
    "A new company cannot start business or borrow until it files INC-20A. Here is the 180-day deadline, what the form needs, and what happens if you miss it.",
  faqs: [
    {
      question: "What is the deadline for filing INC-20A?",
      answer:
        "Section 10A of the Companies Act, 2013 requires a director to file the declaration within 180 days of the date of incorporation. Until it is filed, along with verification of the registered office, a company with share capital cannot commence any business or exercise borrowing powers. In practice it is best filed as soon as subscription money is received.",
    },
    {
      question: "What is the penalty for not filing INC-20A?",
      answer:
        "Under section 10A(2), the company is liable to a penalty of fifty thousand rupees, and every officer in default is liable to one thousand rupees for each day the default continues, up to a maximum of one lakh rupees. Separately, under section 10A(3), the Registrar may initiate action to strike the company off the register.",
    },
    {
      question: "What documents are needed for INC-20A?",
      answer:
        "The current MCA form asks for details of each shareholder's subscription payment (bank, IFSC, account number, date and amount), a photograph of the registered office showing the external building and the inside with at least one director or KMP, location coordinates, and the regulator's registration certificate where the business is regulated, such as an NBFC.",
    },
    {
      question: "Who signs and certifies INC-20A?",
      answer:
        "INC-20A is digitally signed by a director authorised by a board resolution, and certified by a chartered accountant, company secretary or cost accountant in whole-time practice. The certifying professional confirms that they have verified the particulars and attachments from the company's original records, which is why bank statements showing subscription receipts are needed.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Receiving the Certificate of Incorporation does not, by itself, allow a
        new company to start trading. Since the Companies (Amendment) Act, 2019,
        a company with share capital must first file a declaration for
        commencement of business in form INC-20A. Missing it carries a fixed
        penalty and can lead to the company being struck off. This post explains
        the requirement, the documents, and the practical steps.
      </p>

      <h2>What section 10A requires</h2>
      <p>
        Section 10A of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        applies to a company incorporated after the commencement of the
        Companies (Amendment) Act, 2019 and having a share capital. Such a
        company shall not commence any business or exercise any borrowing powers
        unless:
      </p>
      <ul>
        <li>A director files a declaration with the Registrar, within 180 days of incorporation, that every subscriber to the memorandum has paid the value of the shares agreed to be taken by them; and</li>
        <li>The company has filed with the Registrar a verification of its registered office under section 12(2)</li>
      </ul>
      <p>
        The declaration is made in form INC-20A under rule 23A of the Companies
        (Incorporation) Rules, 2014.
      </p>

      <h2>What happens if you miss it?</h2>
      <table>
        <thead>
          <tr>
            <th>Consequence</th>
            <th>Provision</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Penalty on the company</td>
            <td>Section 10A(2)</td>
            <td>Fifty thousand rupees</td>
          </tr>
          <tr>
            <td>Penalty on officers in default</td>
            <td>Section 10A(2)</td>
            <td>One thousand rupees per day of continuing default, up to one lakh rupees</td>
          </tr>
          <tr>
            <td>Strike-off</td>
            <td>Section 10A(3)</td>
            <td>If no declaration is filed within 180 days and the Registrar has reasonable cause to believe the company is not carrying on business, the Registrar may initiate removal of the company&apos;s name from the register</td>
          </tr>
        </tbody>
      </table>
      <p>
        The penalty applies to any default under the section, which includes
        commencing business or borrowing before the declaration is filed, not
        only to missing the 180-day deadline. Late filing also attracts
        additional fees under the fee rules.
      </p>

      <h2>What the INC-20A form asks for</h2>
      <p>
        The current web version of{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/mca/e-filing/Informational-and-Investor-services/INC-20A.html" target="_blank" rel="noopener noreferrer">INC-20A on the MCA portal</a>{" "}
        asks for more than a simple declaration. Expect to provide:
      </p>
      <ul>
        <li>Company details, including the registered office address, email, and its longitude and latitude</li>
        <li>Whether the company&apos;s activities are regulated by a sectoral regulator such as RBI, SEBI or IRDAI, and if so the registration or approval details</li>
        <li>For each shareholder being reported: the bank and IFSC where subscription money was received, the account number, date of receipt and amount</li>
        <li>A photograph of the registered office showing the external building and the inside of the office with at least one director or KMP present</li>
        <li>Where applicable, the RBI certificate of registration for an NBFC or a registration from another regulator</li>
        <li>The board resolution number and date authorising the signing director</li>
      </ul>
      <p>
        The director also declares that every subscriber has paid for their
        shares and that the company has filed verification of its registered
        office.
      </p>

      <h2>Who certifies it?</h2>
      <p>
        INC-20A is digitally signed by a director and certified by a chartered
        accountant, company secretary or cost accountant in whole-time practice.
        The professional certifies that they have verified the particulars and
        attachments from the company&apos;s original records. In practice they
        will ask for the bank statement showing each subscriber&apos;s payment,
        the board resolution, and the registered office photographs.
      </p>

      <h2>Step-by-step: getting INC-20A filed</h2>
      <ul>
        <li><strong>Open the bank account.</strong> Most new companies apply for this through AGILE-PRO-S at incorporation. See our post on{" "}
          <Link href="/blog/opening-current-account-new-company">opening a current account for a new company</Link>.</li>
        <li><strong>Collect subscription money.</strong> Each subscriber transfers the value of their shares to the company account from their own bank account, so the trail is clear.</li>
        <li><strong>Hold a board meeting.</strong> Authorise a director to sign INC-20A. This is often done at the first board meeting.</li>
        <li><strong>Prepare the registered office.</strong> Put up the company name board and take the required photographs with a director present.</li>
        <li><strong>Verify the registered office.</strong> If the registered office was not given at incorporation, file INC-22 first.</li>
        <li><strong>File INC-20A</strong> with the professional&apos;s certification and pay the fee.</li>
      </ul>

      <h2>Planning the 180 days</h2>
      <p>
        The deadline is generous, but the steps before it depend on other
        people, particularly the bank. A sensible plan looks like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>Days from incorporation</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Within 30</td>
            <td>First board meeting held, auditor appointed, signatory for INC-20A authorised, registered office verified</td>
          </tr>
          <tr>
            <td>Within 30 to 45</td>
            <td>Bank account operational and subscription money received from each subscriber</td>
          </tr>
          <tr>
            <td>Within 60</td>
            <td>Share certificates issued to subscribers (the legal limit under section 56)</td>
          </tr>
          <tr>
            <td>Within 60 to 90</td>
            <td>INC-20A filed, leaving a buffer for any queries</td>
          </tr>
          <tr>
            <td>Day 180</td>
            <td>Statutory deadline, not a target</td>
          </tr>
        </tbody>
      </table>
      <p>
        Remember that the company cannot start business or borrow until the
        declaration is filed. Filing early is not only safer, it lets you start
        trading sooner.
      </p>

      <h2>What to hand to your professional</h2>
      <ul>
        <li>Certificate of incorporation, MoA and AoA</li>
        <li>Bank statement showing each subscriber&apos;s payment, with the bank name and IFSC</li>
        <li>A certified copy of the board resolution authorising the signing director</li>
        <li>Photographs of the registered office: the external building, and the inside of the office with a director or KMP present</li>
        <li>The location coordinates of the registered office</li>
        <li>Any regulatory registration, if the business is regulated</li>
        <li>The INC-22 SRN, if the registered office was verified after incorporation</li>
      </ul>

      <h2>Common problems</h2>
      <ul>
        <li><strong>Subscription paid in cash or by a third party:</strong> makes it hard to prove that each subscriber paid; use bank transfers from the subscriber&apos;s own account</li>
        <li><strong>Bank account delays:</strong> if the account takes weeks to open, the 180-day clock is still running</li>
        <li><strong>Registered office not functional:</strong> a home office used as the registered office must still show the company&apos;s presence in the photographs</li>
        <li><strong>Starting business early:</strong> raising invoices or taking loans before INC-20A is filed is itself a default under section 10A</li>
        <li><strong>Foreign subscribers:</strong> their subscription must come through banking channels and be reported to RBI in FC-GPR</li>
      </ul>

      <h2>Does INC-20A apply to every company?</h2>
      <p>
        Section 10A applies to companies incorporated after the commencement of
        the Companies (Amendment) Act, 2019 that have a share capital. A company
        limited by guarantee without share capital falls outside it, because
        there are no subscribers paying for shares. Companies incorporated
        before the amendment were governed by the earlier regime and are not
        required to file INC-20A now.
      </p>
      <p>
        One Person Companies with share capital are covered, as are
        foreign-owned subsidiaries. Where the business is regulated, such as a
        non-banking financial company, the form asks for the regulator&apos;s
        registration, so the sequence of approvals needs planning before
        incorporation. If you are comparing structures, note that an{" "}
        <Link href="/llp-registration-chennai">LLP</Link> is governed by a
        different Act and does not file INC-20A.
      </p>

      <h2>What about companies that have already missed it?</h2>
      <p>
        If the 180 days have passed, file INC-20A as soon as possible with the
        additional fee. The penalty under section 10A(2) may still be imposed by
        the Registrar through adjudication, and the amount for officers grows
        with each day of delay up to the cap. Where a company has been struck
        off, restoration involves a separate process before the National Company
        Law Tribunal, which is far more involved than filing on time.
      </p>

      <h2>INC-20A in the first-year calendar</h2>
      <p>
        INC-20A is one of several deadlines that start on the date of
        incorporation, alongside the first board meeting, first auditor
        appointment and share certificates. Our guides to the{" "}
        <Link href="/blog/first-board-meeting-checklist">first board meeting</Link>{" "}
        and{" "}
        <Link href="/blog/first-auditor-appointment-adt-1">first auditor appointment</Link>{" "}
        explain the others. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service and{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        bring these filings into a single calendar.
      </p>
      <p>
        If you have recently incorporated and want INC-20A handled within the
        deadline, you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
