import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "agile-pro-s-pan-tan-epfo-esic",
  title: "AGILE-PRO-S Explained: EPFO, ESIC, GSTIN and Bank",
  description:
    "What the AGILE-PRO-S form filed with SPICe+ covers: mandatory EPFO, ESIC and bank account, optional GSTIN, and why Tamil Nadu profession tax stays separate.",
  date: "2027-01-12",
  excerpt:
    "AGILE-PRO-S rides along with every SPICe+ incorporation. What it registers automatically, what is optional, and what Chennai companies still do separately.",
  faqs: [
    {
      question: "What is AGILE-PRO-S?",
      answer:
        "AGILE-PRO-S is a web form linked to SPICe+ Part B that must accompany every company incorporation application. Through it, the new company applies for an EPFO establishment code, an ESIC employer code and a bank account, which are mandatory, and optionally for GSTIN. In certain states it also covers profession tax and shops and establishments registration.",
    },
    {
      question: "Are PAN and TAN part of AGILE-PRO-S?",
      answer:
        "PAN and TAN are applied for through SPICe+ itself rather than through AGILE-PRO-S, and they are issued along with the certificate of incorporation. AGILE-PRO-S handles the other registrations: EPFO, ESIC, the bank account and the optional GSTIN. Together, the two forms let a company start with its main tax and employer identifiers in place.",
    },
    {
      question: "Does AGILE-PRO-S cover profession tax registration in Tamil Nadu?",
      answer:
        "No. The MCA's AGILE-PRO-S FAQs state that profession tax registration through the form applies in Maharashtra, Karnataka and West Bengal. A company in Tamil Nadu registers for profession tax separately with the local body, which in Chennai is the Greater Chennai Corporation, and deducts and pays profession tax on employees' salaries as required.",
    },
    {
      question: "Is there a fee for registrations through AGILE-PRO-S?",
      answer:
        "According to the MCA's FAQs, there is no fee for applying for GSTIN, EPFO or ESIC registration through AGILE-PRO-S. The incorporation fees and stamp duty for SPICe+ are separate. The bank account opened through the form is subject to the chosen bank's own account terms and KYC process.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        When a company is incorporated through SPICe+, founders see a long
        bundle of linked forms: e-MoA, e-AoA, sometimes INC-9 and URC-1, and
        AGILE-PRO-S. The last one tends to be filled in quickly and forgotten.
        It deserves more attention, because it decides which employer and tax
        registrations the company starts life with, and some of them carry
        ongoing obligations.
      </p>

      <h2>What does AGILE-PRO-S cover?</h2>
      <p>
        According to the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/agile-pro-s-form.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s AGILE-PRO-S FAQs
        </a>
        , the SPICe+ Part B application must be accompanied by the AGILE-PRO-S
        web form in every case. Within it, some registrations are mandatory and
        others optional.
      </p>
      <table>
        <thead>
          <tr>
            <th>Registration</th>
            <th>Status in AGILE-PRO-S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EPFO establishment code</td>
            <td>Mandatory</td>
          </tr>
          <tr>
            <td>ESIC employer code</td>
            <td>Mandatory</td>
          </tr>
          <tr>
            <td>Bank account opening</td>
            <td>Mandatory</td>
          </tr>
          <tr>
            <td>GSTIN</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>Profession tax registration</td>
            <td>Mandatory only in Maharashtra, Karnataka and West Bengal</td>
          </tr>
          <tr>
            <td>Shops and establishments registration</td>
            <td>Optional, for Delhi and Mumbai</td>
          </tr>
        </tbody>
      </table>
      <p>
        PAN and TAN are not part of AGILE-PRO-S. They are applied for through
        SPICe+ itself and issued along with the certificate of incorporation.
      </p>

      <h2>How do the EPFO and ESIC codes work?</h2>
      <p>
        Once the company is incorporated and its certificate and PAN are
        generated, MCA forwards the details to EPFO and ESIC. After validation,
        the establishment code and employer code appear on the applicant&apos;s
        dashboard. The MCA notes that factories wanting an EPFO establishment
        code should follow the existing process through their respective
        common portal rather than this route.
      </p>
      <p>
        Having the codes is not the same as being required to contribute for
        every employee. Social security obligations depend on coverage under the
        applicable law, which since 21 November 2025 is the Code on Social
        Security, 2020. In broad terms, provident fund coverage has applied to
        establishments with 20 or more employees, and ESI coverage to
        establishments with 10 or more employees in notified areas, for
        employees earning up to the notified wage ceiling. The{" "}
        <a href="https://esic.gov.in/coverage" target="_blank" rel="noopener noreferrer">
          ESIC coverage page
        </a>{" "}
        sets out current applicability. Confirm when your company&apos;s
        obligations begin, so you do not miss returns or start deductions
        earlier than needed.
      </p>

      <h2>The mandatory bank account</h2>
      <p>
        AGILE-PRO-S requires the company to choose a bank for opening its
        current account. The account is opened after incorporation, subject to
        the bank&apos;s own KYC. That account is where subscribers deposit share
        money before the INC-20A declaration, so open it and fund it promptly.
        A company is free to bank elsewhere as well; the account opened through
        AGILE-PRO-S need not be its only account.
      </p>

      <h2>Should you take GSTIN through AGILE-PRO-S?</h2>
      <p>
        GSTIN is optional. The registered office given in SPICe+ is used as the
        principal place of business, and the state and district in AGILE-PRO-S
        must match it. If the company needs GST from day one, perhaps because it
        will make inter-state supplies of goods or wants input tax credit on
        set-up costs, opting in saves a separate application. If not, applying
        later avoids filing nil returns for months. Our page on{" "}
        <Link href="/gst-registration-chennai">GST registration in Chennai</Link>{" "}
        explains the thresholds and compulsory cases.
      </p>

      <h2>What Chennai companies still register separately</h2>
      <ul>
        <li>
          <strong>Profession tax.</strong> In Tamil Nadu, profession tax is
          administered by local bodies. A company in Chennai registers with the
          Greater Chennai Corporation, deducts profession tax from
          employees&apos; salaries according to the notified slabs and remits
          it on the half-yearly cycle. Check whether the company itself is
          also assessed to profession tax on its own account.
        </li>
        <li>
          <strong>Shops and establishments.</strong> Registration under the
          Tamil Nadu shops and establishments law, where applicable, is handled
          through the state&apos;s labour department rather than AGILE-PRO-S.
        </li>
        <li>
          <strong>Trade licence.</strong> Depending on the activity and
          premises, a trade licence from the local body may be needed.
        </li>
        <li>
          <strong>Sector licences.</strong> FSSAI, import-export code, drug
          licences and others are applied for under their own laws.
        </li>
      </ul>

      <h2>What information does AGILE-PRO-S ask for?</h2>
      <p>
        The form draws much of its data from SPICe+ Part B, but a few sections
        need fresh input and are worth preparing in advance:
      </p>
      <ul>
        <li>
          <strong>GST details, if opted.</strong> Principal place of business,
          which must match the registered office state and district, the
          jurisdictional ward or circle as published on the state tax
          website, the nature of business activities, goods and services
          codes, and whether the company wishes to opt for composition.
        </li>
        <li>
          <strong>Authorised signatory.</strong> The person who will receive
          GST status updates by SMS and email, and act on the registrations.
        </li>
        <li>
          <strong>Employer details for EPFO and ESIC.</strong> Basic
          establishment information that the two agencies need to allot
          their codes, much of it carried over from SPICe+.
        </li>
        <li>
          <strong>Bank selection.</strong> The bank and branch for the
          company&apos;s account.
        </li>
      </ul>

      <h2>Tracking the status after filing</h2>
      <p>
        Once SPICe+ is approved and the certificate of incorporation and PAN
        are issued, MCA forwards the data to each agency. For GST, a temporary
        reference number and application reference number appear on the
        applicant&apos;s dashboard once GSTN validates the data, and GSTN sends
        the approval or rejection to the authorised signatory&apos;s mobile
        and email. EPFO and ESIC codes appear on the dashboard after validation
        by those agencies. Someone should be responsible for checking the
        dashboard in the days after incorporation, because a rejected GST
        application through AGILE-PRO-S has to be followed up by a fresh
        application on the GST portal.
      </p>

      <h2>Correcting details later</h2>
      <p>
        Mistakes in AGILE-PRO-S do not become permanent. GST details can be
        amended on the GST portal, and employer details can be updated with
        EPFO and ESIC through their own portals. But corrections take time and
        can delay the first invoices or the first payroll, so a careful review
        before filing is worth it.
      </p>

      <h2>Common mistakes with AGILE-PRO-S</h2>
      <ul>
        <li>Entering a state or district different from the registered office, causing GST rejection.</li>
        <li>Opting for GSTIN without a plan to file returns from the first month.</li>
        <li>Losing track of the EPFO and ESIC codes because no one checks the dashboard after incorporation.</li>
        <li>Assuming profession tax has been covered because it appears in the form for other states.</li>
      </ul>

      <h2>After incorporation: a short checklist</h2>
      <ol>
        <li>Download the certificate of incorporation, PAN and TAN.</li>
        <li>Note the EPFO and ESIC codes and, if applied for, the GSTIN.</li>
        <li>Complete bank KYC and deposit subscription money.</li>
        <li>Register for profession tax with the local body.</li>
        <li>Set up payroll so salary TDS, profession tax and, when applicable, PF and ESI are deducted correctly from the first payroll.</li>
      </ol>
      <p>
        Our{" "}
        <Link href="/payroll-services-chennai">payroll services</Link> page
        explains how these deductions fit into monthly payroll, and our guide
        to{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation
        </Link>{" "}
        covers the full SPICe+ bundle. If you would like your post-incorporation
        registrations reviewed, you can{" "}
        <Link href="/contact">get in touch with our team</Link>.
      </p>
    </>
  );
}
