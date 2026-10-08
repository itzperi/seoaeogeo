import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "opc-to-private-limited-conversion",
  title: "OPC to Private Limited Conversion: INC-6 Process",
  description:
    "How a One Person Company converts into a private limited company using Form INC-6, why conversion is now voluntary, and what changes in compliance afterwards.",
  date: "2026-12-11",
  excerpt:
    "Since 2021 an OPC no longer has to convert when it crosses capital or turnover limits. When you choose to convert, here is how INC-6 works.",
  faqs: [
    {
      question: "Is it mandatory for an OPC to convert into a private limited company?",
      answer:
        "No. Earlier rules required conversion once paid-up capital exceeded ₹50 lakh or average annual turnover exceeded ₹2 crore. After the 2021 amendments to the Companies (Incorporation) Rules, that compulsory conversion no longer exists. An OPC can continue as an OPC beyond those levels, and conversion is now a voluntary decision.",
    },
    {
      question: "Which form is used to convert an OPC into a private limited company?",
      answer:
        "The OPC files Form INC-6 with the Registrar within 30 days of passing the special resolution approving the conversion. Before that, it must increase its members and directors to at least two each and alter its Memorandum and Articles of Association in compliance with section 18 of the Companies Act, 2013.",
    },
    {
      question: "Is there a waiting period before an OPC can convert voluntarily?",
      answer:
        "Not any longer. The earlier rule that an OPC could convert voluntarily only after two years from incorporation was removed by the 2021 amendments. An OPC can now convert whenever its owner decides that a second shareholder, investor or employee equity makes a private limited company the better structure.",
    },
    {
      question: "Does the company get a new CIN after OPC conversion?",
      answer:
        "On approving the INC-6 application, the Registrar issues a fresh certificate of incorporation reflecting the change in class and the new name without the OPC suffix. The company remains the same legal entity, so its assets, contracts, PAN and bank accounts continue, though records with banks, GST and other authorities should be updated.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A One Person Company is a good fit for a solo founder who wants limited
        liability without finding a second shareholder. The structure starts to
        pinch when the founder wants to bring in a co-founder, an angel
        investor or employee equity, because an OPC can have only one member.
        Converting into a private limited company solves that, and since 2021 the
        process has become simpler and entirely voluntary.
      </p>

      <h2>What changed in 2021?</h2>
      <p>
        Before 2021, an OPC had to convert into a private or public company if
        its paid-up share capital exceeded ₹50 lakh or its average annual
        turnover exceeded ₹2 crore. Voluntary conversion was also not allowed
        until two years had passed from incorporation. The{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/one-person-company.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s OPC FAQs
        </a>{" "}
        confirm that the compulsory conversion provision no longer exists, and an
        OPC may continue as an OPC even after crossing those limits.
      </p>
      <p>
        The 2021 changes also opened OPCs to Indian citizens who are not resident
        in India, and reduced the residency test for the purpose of the rules to
        120 days in the preceding financial year. The result is that conversion
        today is a business decision, not a compliance trigger.
      </p>

      <h2>When does converting make sense?</h2>
      <ul>
        <li><strong>A second shareholder.</strong> A co-founder or family member wants to hold shares.</li>
        <li><strong>Investment.</strong> Angel or institutional investors cannot become members of an OPC. Only a natural person who is an Indian citizen can be its member.</li>
        <li><strong>Employee stock options.</strong> ESOPs result in more shareholders, which an OPC cannot accommodate.</li>
        <li><strong>Perception and contracts.</strong> Some large customers, tender authorities and lenders prefer a private limited company.</li>
      </ul>

      <h2>Step-by-step: how does an OPC convert?</h2>
      <ol>
        <li>
          <strong>Board meeting.</strong> The board approves the proposal, the
          altered MoA and AoA, the induction of a second member and director,
          and calls for the member&apos;s approval.
        </li>
        <li>
          <strong>Second member and director.</strong> Shares are transferred
          or allotted to bring the number of members to at least two, and the
          number of directors is increased to at least two. A new director needs
          a DIN and a digital signature, and the appointment is reported in
          DIR-12. A new allotment is reported in PAS-3.
        </li>
        <li>
          <strong>Special resolution.</strong> The alteration of the MoA and
          AoA, including the change of name to drop the OPC reference, is
          approved by special resolution. In an OPC, a resolution is treated as
          passed when it is communicated by the member and entered in the minutes
          book.
        </li>
        <li>
          <strong>MGT-14.</strong> The special resolution is filed with the
          Registrar in Form MGT-14.
        </li>
        <li>
          <strong>INC-6.</strong> The application for conversion is filed in
          Form INC-6 within 30 days of passing the special resolution, with the
          altered MoA and AoA and the list of members and directors.
        </li>
        <li>
          <strong>New certificate.</strong> Once satisfied, the Registrar
          issues a fresh certificate of incorporation for the private limited
          company.
        </li>
      </ol>
      <p>
        Under section 18 of the Companies Act, 2013, conversion from one class
        of company to another does not affect any debts, liabilities,
        obligations or contracts incurred or entered into before conversion.
        The company is the same legal person throughout.
      </p>

      <h2>Transfer or fresh allotment: how does the second member come in?</h2>
      <p>
        There are two ways to bring a second shareholder into an OPC, and
        they have different consequences.
      </p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>How it works</th>
            <th>Points to watch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transfer of existing shares</td>
            <td>The sole member transfers some shares to the new member using a share transfer deed in Form SH-4</td>
            <td>Stamp duty on the transfer; capital gains for the transferor; income-tax rules on transfers below fair market value; no new money enters the company</td>
          </tr>
          <tr>
            <td>Fresh allotment</td>
            <td>The company issues new shares to the incoming member</td>
            <td>Valuation where required, the right resolutions, PAS-3 within 30 days, and enough authorised capital; the money comes into the company</td>
          </tr>
        </tbody>
      </table>
      <p>
        If the new member is a co-founder contributing effort rather than
        cash, a small transfer at fair value is often simplest. If an investor
        is bringing in capital, a fresh allotment is the natural route. In
        either case, the incoming member&apos;s identity and payment trail
        should be clear, and the timing should be coordinated with the INC-6
        filing so the member and director requirements are met when the
        conversion is applied for.
      </p>

      <h2>What stays the same?</h2>
      <p>
        Because the company is the same legal person, its PAN, TAN, bank
        accounts, contracts, employees and assets continue without any
        transfer. A few records need updating once the new certificate is
        issued:
      </p>
      <ul>
        <li>GST registration, where the change of legal name is a core-field amendment on the GST portal.</li>
        <li>Bank KYC, cheque books and payment gateway accounts.</li>
        <li>Udyam registration, import-export code and other licences that carry the company&apos;s name.</li>
        <li>Letterheads, invoices, websites and email signatures, which must show the new name and CIN.</li>
      </ul>
      <p>
        The nominee arrangement that is specific to an OPC falls away once the
        company has two or more members, so there is no further need to
        maintain a nominee or file nominee changes.
      </p>

      <h2>What changes after conversion?</h2>
      <p>
        An OPC enjoys several compliance relaxations. Some fall away once it
        becomes a private limited company, while others may continue if the
        company qualifies as a small company.
      </p>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>As an OPC</th>
            <th>As a private limited company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Members</td>
            <td>Exactly one, plus a nominee</td>
            <td>Minimum two, maximum 200</td>
          </tr>
          <tr>
            <td>Annual general meeting</td>
            <td>Not required</td>
            <td>Required every year</td>
          </tr>
          <tr>
            <td>Board meetings</td>
            <td>At least one in each half of a calendar year</td>
            <td>Four a year, or the small-company relaxation if eligible</td>
          </tr>
          <tr>
            <td>Cash flow statement</td>
            <td>Not required</td>
            <td>Required, unless the company qualifies as a small company</td>
          </tr>
          <tr>
            <td>Share transfers</td>
            <td>Limited to change of the sole member</td>
            <td>Governed by the articles, typically with restrictions</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical points before you file</h2>
      <ul>
        <li>
          <strong>Decide the shareholding first.</strong> How much equity the
          new member receives, and whether it is by transfer or fresh allotment,
          has tax and valuation consequences.
        </li>
        <li>
          <strong>Review the articles properly.</strong> Conversion is a good
          moment to add transfer restrictions, pre-emption rights and board
          composition rules that two or more shareholders will need.
        </li>
        <li>
          <strong>Clear pending filings.</strong> Pending annual returns or
          financial statements can hold up the INC-6 approval.
        </li>
        <li>
          <strong>Update records afterwards.</strong> GST registration details,
          bank KYC, letterheads, invoices and contracts should reflect the new
          name once the certificate is issued.
        </li>
      </ul>

      <h2>Should you start as a private limited company instead?</h2>
      <p>
        If you already know that a co-founder or investor will join within a
        year or two, incorporating directly as a private limited company can
        save one round of filings. If you are genuinely building alone, an OPC
        remains a sound option, and our page on{" "}
        <Link href="/opc-registration-chennai">OPC registration in Chennai</Link>{" "}
        explains the structure. For the ongoing filings after conversion, see{" "}
        <Link href="/roc-compliances">ROC compliances</Link>.
      </p>
      <p>
        If you are planning to convert your OPC and want the resolutions and
        filings handled in the right order, you can{" "}
        <Link href="/contact">contact our team</Link>.
      </p>
    </>
  );
}
