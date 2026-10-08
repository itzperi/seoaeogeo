import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "convert-partnership-firm-to-llp",
  title: "Convert a Partnership Firm to an LLP: Form 17 Guide",
  description:
    "How a partnership firm converts into an LLP under the Second Schedule of the LLP Act: Form 17, eligibility, Form 14, and what happens to contracts and licences.",
  date: "2026-12-04",
  excerpt:
    "A firm can convert into an LLP if every partner becomes a partner of the LLP. Here is how Form 17 works and what carries over automatically.",
  faqs: [
    {
      question: "Who can convert a partnership firm into an LLP?",
      answer:
        "A firm can convert under section 55 and the Second Schedule of the LLP Act, 2008 only if the partners of the proposed LLP are all the partners of the firm and no one else. No partner can drop out and no new partner can join as part of the conversion itself. Changes can be made after the LLP is registered.",
    },
    {
      question: "What is LLP Form 17?",
      answer:
        "Form 17 is the application and statement for converting a firm into an LLP. Part A is the application for conversion and Part B is the statement of partners. It is filed with the LLP incorporation form, FiLLiP, where the type of incorporation is selected as conversion of a firm, along with the prescribed fee and supporting documents.",
    },
    {
      question: "Do existing contracts and licences continue after conversion?",
      answer:
        "Contracts, agreements, pending legal proceedings and employment contracts of the firm continue with the LLP under the Second Schedule. Approvals, permits and licences issued to the firm under other laws are transferred to the LLP, but subject to the provisions of the law under which each one was issued, so some regulators still require an intimation or fresh application.",
    },
    {
      question: "What must the LLP do after the conversion certificate is issued?",
      answer:
        "Within 15 days of registration, the LLP must inform the Registrar of Firms with which the firm was registered, using Form 14. It must file the LLP agreement in Form 3 within 30 days of incorporation, and for 12 months its official correspondence must state that it was converted from the named firm.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Partnership firms are easy to form but carry one serious drawback:
        every partner is personally liable for the firm&apos;s debts, without
        limit. A limited liability partnership keeps much of the flexibility of
        a partnership while making the LLP itself, not the partners, liable for
        its obligations. For an established Chennai firm, converting into an LLP
        is often the cleanest way to get that protection without starting over.
      </p>
      <p>
        The LLP Act, 2008 provides a specific conversion route in section 55 and
        the Second Schedule. This guide explains the conditions, the filing in
        Form 17 and what happens to the firm&apos;s contracts, property and
        licences.
      </p>

      <h2>What are the conditions for conversion?</h2>
      <p>
        The central condition is simple and strict. A firm may apply to convert
        only if the partners of the LLP will comprise all the partners of the
        firm and no one else. In practice that means:
      </p>
      <ul>
        <li>Every existing partner must agree to the conversion and become a partner of the LLP.</li>
        <li>No new partner can be introduced as part of the conversion.</li>
        <li>At least two partners must act as designated partners, and at least one designated partner must be resident in India.</li>
        <li>Each designated partner needs a Designated Partner Identification Number and a digital signature certificate.</li>
        <li>The proposed LLP name must be approved, usually through RUN-LLP or within FiLLiP.</li>
      </ul>
      <p>
        If the partners want to bring in a new member or let someone retire, it
        is usually simpler to complete that change in the firm first, or after
        the LLP is registered, rather than mixing it into the conversion.
      </p>

      <h2>How does the Form 17 filing work?</h2>
      <p>
        The LLP Rules require the application to be made in Part A of Form 17,
        together with a statement of partners in Part B. It is filed alongside
        the LLP incorporation form,{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/mca/llp-e-filling/Fillip.html" target="_blank" rel="noopener noreferrer">FiLLiP</a>,
        where the type of incorporation is chosen as conversion of a firm into
        an LLP. Typical supporting documents include:
      </p>
      <ul>
        <li>Consent of all partners of the firm to the conversion.</li>
        <li>A statement of the firm&apos;s assets and liabilities, certified by a chartered accountant in practice.</li>
        <li>The firm&apos;s registration certificate and partnership deed, where the firm is registered.</li>
        <li>Consent of secured creditors, where the firm has secured borrowings, and details of pending proceedings.</li>
        <li>Proof of registered office and the subscription sheet and consents of designated partners.</li>
      </ul>
      <p>
        Once the Registrar is satisfied, the LLP is registered and a certificate
        of registration is issued. From that date the firm is converted.
        Exact attachments can change as MCA updates its web forms, so check the
        current form before filing.
      </p>

      <h2>What happens to the firm on conversion?</h2>
      <p>
        The Second Schedule sets out the effects, and this is where the route
        is valuable. On the date of registration:
      </p>
      <ul>
        <li>All tangible and intangible property of the firm, and all its assets, interests, rights, privileges, liabilities and obligations, transfer to and vest in the LLP without any further assurance, act or deed.</li>
        <li>The firm is deemed to be dissolved and is removed from the records of the Registrar of Firms.</li>
        <li>Pending legal proceedings by or against the firm may be continued by or against the LLP.</li>
        <li>Agreements, contracts and appointments made by the firm continue as if made with the LLP.</li>
        <li>Employment contracts continue with the LLP.</li>
        <li>Approvals, permits and licences issued to the firm under other Acts transfer to the LLP, subject to the provisions of those Acts.</li>
      </ul>
      <p>
        The last point needs care. A GST registration, for example, is tied to
        PAN. The LLP has a new PAN, so it needs a fresh GST registration, and the
        firm&apos;s unutilised input tax credit can be moved across through Form
        GST ITC-02 on a change in constitution. Licences such as FSSAI, trade
        licences, import-export codes and labour registrations should each be
        checked against their own rules.
      </p>

      <h2>Are partners still liable for old debts?</h2>
      <p>
        Yes. Conversion does not wipe out existing personal liability. Every
        partner of the converted firm continues to be personally liable,
        jointly and severally with the LLP, for liabilities and obligations of
        the firm incurred before conversion or arising from contracts entered
        into before conversion. Limited liability protects the partners only for
        obligations the LLP incurs after registration.
      </p>
      <p>
        To make the change visible, the LLP must state on its official
        correspondence for 12 months, starting not later than 14 days after
        registration, that it was converted from a firm, with the firm&apos;s
        name and registration number.
      </p>

      <h2>Post-conversion compliance checklist</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inform the Registrar of Firms (Form 14)</td>
            <td>Within 15 days of LLP registration</td>
          </tr>
          <tr>
            <td>File the LLP agreement (Form 3)</td>
            <td>Within 30 days of incorporation</td>
          </tr>
          <tr>
            <td>Conversion statement on correspondence</td>
            <td>For 12 months, starting within 14 days of registration</td>
          </tr>
          <tr>
            <td>Fresh GST registration and ITC transfer</td>
            <td>As soon as possible after registration</td>
          </tr>
          <tr>
            <td>New bank account or bank records updated</td>
            <td>Immediately after registration</td>
          </tr>
          <tr>
            <td>Annual filings (Form 11 and Form 8)</td>
            <td>Every year thereafter</td>
          </tr>
        </tbody>
      </table>

      <h2>What about income tax?</h2>
      <p>
        When LLPs were introduced, the government indicated that converting a
        general partnership into an LLP would have no tax implications if the
        rights and obligations of the partners remain the same. In practice,
        that means keeping the same partners, the same profit-sharing and capital
        positions and transferring the whole business at book values. Changes
        to partner rights at the time of conversion can raise questions about
        whether a taxable transfer has occurred. The Income-tax Act, 2025 has
        applied from 1 April 2026, so have the current position reviewed for
        your tax year before you file, particularly if the firm holds land,
        buildings or other appreciated assets.
      </p>

      <h2>How should the firm prepare before filing?</h2>
      <p>
        Most delays in conversion come from loose ends in the firm rather
        than from the MCA filing. Before starting, work through these points:
      </p>
      <ul>
        <li>
          <strong>Reconcile capital accounts.</strong> Each partner&apos;s
          capital and current account should be agreed and closed off as on a
          cut-off date. These balances become the partners&apos; contributions
          in the LLP and must match the CA-certified statement of assets and
          liabilities.
        </li>
        <li>
          <strong>Update the firm&apos;s registration.</strong> If partners
          have joined or retired over the years and the Registrar of Firms was
          never told, regularise that first, because the LLP&apos;s partners
          must match the firm&apos;s partners exactly.
        </li>
        <li>
          <strong>Speak to the bank early.</strong> Secured lenders need to
          consent, and their internal approvals can take longer than the MCA
          process.
        </li>
        <li>
          <strong>Draft the LLP agreement in parallel.</strong> It should cover
          contributions, profit-sharing, the duties of designated partners,
          admission and exit of partners, and how decisions are taken. A
          partnership deed cannot simply be copied across, because the LLP Act
          has its own default rules that apply where the agreement is silent.
        </li>
      </ul>

      <h2>What changes in annual compliance?</h2>
      <p>
        A firm files an income-tax return and, above the thresholds, a tax
        audit. An LLP adds annual filings with the Registrar: Form 11, the
        annual return, due within 60 days of the end of the financial year,
        and Form 8, the statement of account and solvency, due within 30 days
        from the end of six months of the financial year. In practice that
        means 30 May and 30 October. Under the LLP Rules, an LLP whose turnover
        does not exceed ₹40 lakh in a financial year, or whose contribution
        does not exceed ₹25 lakh, is not required to have its accounts audited;
        other LLPs must. Late filings
        attract additional fees for each day of delay, so build these dates
        into the calendar from the first year.
      </p>

      <h2>Is an LLP the right next step?</h2>
      <p>
        An LLP suits professional practices, family businesses and service
        firms that want limited liability without the board processes and
        share structure of a company. It is less suited to businesses that plan
        to raise equity from investors or grant ESOPs, where a private limited
        company is usually preferred. Our pages on{" "}
        <Link href="/llp-registration-chennai">LLP registration in Chennai</Link>{" "}
        and{" "}
        <Link href="/partnership-firm-registration-chennai">
          partnership firm registration
        </Link>{" "}
        compare the two structures in more detail.
      </p>
      <p>
        If your firm is considering conversion and you want the documents and
        timelines planned out, you can{" "}
        <Link href="/contact">speak with our team</Link>.
      </p>
    </>
  );
}
