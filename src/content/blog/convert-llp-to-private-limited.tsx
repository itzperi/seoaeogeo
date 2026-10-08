import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "convert-llp-to-private-limited",
  title: "Convert an LLP to a Private Limited Company (URC-1)",
  description:
    "How an LLP becomes a private limited company under section 366 of the Companies Act: URC-1, newspaper notice, creditor consent, tax conditions and next steps.",
  date: "2026-12-08",
  excerpt:
    "LLPs that want equity investors or ESOPs often move to a company. Here is how the section 366 route, URC-2 notice and URC-1 filing work in practice.",
  faqs: [
    {
      question: "Which provision allows an LLP to become a private limited company?",
      answer:
        "Section 366 in Part I of Chapter XXI of the Companies Act, 2013 lets a partnership firm, LLP, cooperative society, society or other business entity register as a company. The procedure is in the Companies (Authorised to Register) Rules, 2014, and the application is made in Form URC-1, filed as a linked form with SPICe+.",
    },
    {
      question: "Is a newspaper advertisement required for LLP to company conversion?",
      answer:
        "Yes. Before applying, the LLP publishes a notice in Form URC-2 in an English newspaper and a vernacular newspaper circulating in the district of its registered office, inviting objections within 21 clear days. Any objections received have to be addressed before the URC-1 application can proceed, so the notice is usually the first formal step.",
    },
    {
      question: "Do the LLP's assets and contracts transfer automatically to the company?",
      answer:
        "On registration under Part I of Chapter XXI, section 367 of the Companies Act provides that the property of the entity vests in the company. Existing rights and liabilities under debts, obligations and contracts are not affected by the registration. Licences, GST registration, bank accounts and similar registrations still need to be updated or obtained afresh in the company's name.",
    },
    {
      question: "Is converting an LLP into a company tax-neutral?",
      answer:
        "It can be, but only if the transfer fits the capital gains exemption for a firm's business taken over by a company. Historically the conditions were that all assets and liabilities pass, all partners become shareholders in their capital-account proportions, they receive only shares, and they keep at least 50% of the voting power for five years.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        An LLP is a sensible starting structure for many founders: fewer board
        formalities, flexible profit-sharing and limited liability. The
        limitation shows up later. Most venture investors want shares, employee
        stock option plans need a company, and some lenders and large customers
        prefer to deal with a private limited company. When that point
        arrives, an LLP does not need to be wound up and rebuilt. It can register
        as a company under Part I of Chapter XXI of the Companies Act, 2013.
      </p>

      <h2>How does the section 366 route work?</h2>
      <p>
        Section 366 provides that, for the purposes of Part I of Chapter XXI, a
        company includes any partnership firm, LLP, cooperative society,
        society or other business entity formed under another law that applies
        for registration under that Part. The detailed procedure is in the
        Companies (Authorised to Register) Rules, 2014. In outline:
      </p>
      <ol>
        <li>The partners approve the conversion and the proposed share structure.</li>
        <li>The name of the proposed company is reserved through SPICe+ Part A.</li>
        <li>A notice in Form URC-2 is published in newspapers, inviting objections.</li>
        <li>After the notice period, the incorporation application is filed in SPICe+ Part B with URC-1 and the other linked forms.</li>
        <li>The Registrar issues a certificate of incorporation, and the LLP&apos;s business continues in the company.</li>
      </ol>

      <h2>What conditions must the LLP meet?</h2>
      <ul>
        <li>
          <strong>Members.</strong> The company must have at least two members.
          The partners of the LLP become the shareholders of the company, so
          the partners&apos; agreement on how capital accounts translate into
          shares is the first decision.
        </li>
        <li>
          <strong>Partners&apos; consent.</strong> The partners&apos; approval
          to register as a company is required, along with a list of partners
          and their proposed shareholdings as on a recent date.
        </li>
        <li>
          <strong>Creditors.</strong> Written consent or a no-objection from
          secured creditors is required.
        </li>
        <li>
          <strong>Directors.</strong> Details and consents of the proposed first
          directors, with at least one director resident in India.
        </li>
        <li>
          <strong>Financial position.</strong> A statement of assets and
          liabilities certified by a chartered accountant, prepared close to
          the filing date, and the LLP&apos;s latest income-tax return.
        </li>
        <li>
          <strong>Up-to-date filings.</strong> In practice, the LLP&apos;s
          annual filings (Form 8 and Form 11) should be current. Pending
          defaults tend to delay approval.
        </li>
      </ul>

      <h2>The URC-2 newspaper notice</h2>
      <p>
        Rule 4 requires the entity seeking registration to publish an
        advertisement in Form URC-2 in one English newspaper and one
        vernacular newspaper circulating in the district of its registered
        office, inviting objections within 21 clear days of publication. For a
        Chennai LLP that usually means an English daily and a Tamil daily. Keep
        the newspaper copies; they are attached to the application.
      </p>

      <h2>Filing URC-1 with SPICe+</h2>
      <p>
        On the MCA V3 portal, URC-1 is one of the linked forms in the
        incorporation set. The{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s SPICe+ linked filings FAQ
        </a>{" "}
        lists URC-1 as applicable to Part I companies, including LLP to company
        and firm to company cases, and AGILE-PRO-S as mandatory in all cases. The
        e-MoA and e-AoA are filed in the same bundle, so the articles, including
        any share transfer restrictions or founder protections, should be
        settled before filing.
      </p>

      <h2>What happens to the LLP&apos;s assets, contracts and registrations?</h2>
      <p>
        Section 367 deals with the effects of registration under this Part.
        The property of the entity vests in the company, and the registration
        does not affect rights or liabilities in respect of debts, obligations
        or contracts entered into before registration. That continuity is the
        main advantage over incorporating a new company and transferring the
        business by agreement.
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>After conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assets and liabilities</td>
            <td>Vest in the company by operation of law</td>
          </tr>
          <tr>
            <td>PAN and TAN</td>
            <td>New PAN and TAN issued to the company</td>
          </tr>
          <tr>
            <td>GST registration</td>
            <td>Fresh registration for the company; ITC moved through Form GST ITC-02</td>
          </tr>
          <tr>
            <td>Bank accounts and loans</td>
            <td>Bank records updated to the company; lender consent often required under loan terms</td>
          </tr>
          <tr>
            <td>Licences and labour registrations</td>
            <td>Updated or re-obtained under each relevant law</td>
          </tr>
          <tr>
            <td>Contracts</td>
            <td>Continue; counterparties should be notified and records updated</td>
          </tr>
        </tbody>
      </table>

      <h2>What are the tax conditions?</h2>
      <p>
        Under income-tax law, an LLP is treated as a firm. Under the Income-tax
        Act, 1961, section 47(xiii) exempted from capital gains the transfer of
        a firm&apos;s assets to a company that succeeds to the business, if:
      </p>
      <ul>
        <li>All the assets and liabilities of the firm become those of the company.</li>
        <li>All the partners become shareholders in the same proportion as their capital accounts on the date of succession.</li>
        <li>The partners receive no consideration or benefit other than shares.</li>
        <li>The partners together hold at least 50% of the voting power for five years from succession.</li>
      </ul>
      <p>
        Whether this exemption applies to an LLP conversion has been the subject
        of differing views, and the Income-tax Act, 2025 has applied from 1 April
        2026 with renumbered provisions. Treat the tax analysis as a separate
        workstream, especially where the LLP holds property or has accumulated
        profits, and settle the share ratios with it in view. Carry-forward of
        losses and the treatment of accumulated profits also need review.
      </p>

      <h2>How should capital accounts become shares?</h2>
      <p>
        This is the commercial core of the conversion and deserves time. Each
        partner&apos;s capital account, as shown in the certified statement of
        assets and liabilities, is typically converted into equity shares at
        an agreed face value. Points to settle in advance:
      </p>
      <ul>
        <li>
          <strong>Capital versus current accounts.</strong> Partners&apos;
          current account balances, accumulated profits and loans can be
          converted into shares, left as loans to the company, or settled. Each
          choice affects the balance sheet and, potentially, the tax position.
        </li>
        <li>
          <strong>Proportions.</strong> If the tax exemption is relied on,
          shareholdings generally need to mirror capital-account proportions on
          the date of conversion. Any change in the commercial split is usually
          better made after the conversion, once tax advice has been taken.
        </li>
        <li>
          <strong>Authorised capital.</strong> Set it to cover the converted
          capital plus room for a funding round or ESOP pool, keeping in mind
          that fees and stamp duty scale with authorised capital.
        </li>
        <li>
          <strong>Share classes.</strong> Most conversions start with a single
          class of equity shares. Preference shares or differential rights can
          be introduced later through the articles if investors require them.
        </li>
      </ul>

      <h2>What changes once you are a company?</h2>
      <p>
        The compliance profile changes noticeably. A company must hold board
        meetings at regular intervals, hold an annual general meeting, have its
        accounts audited every year regardless of size, and file its financial
        statements in AOC-4 and its annual return in MGT-7 or MGT-7A. Share
        certificates must be issued to the former partners, now shareholders,
        and statutory registers maintained. Directors take on duties under the
        Companies Act that are more detailed than a designated partner&apos;s
        duties under the LLP Act. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> page sets out the
        annual cycle a converted company should plan for.
      </p>

      <h2>Common reasons for delay</h2>
      <ul>
        <li>Pending LLP annual filings or unresolved notices.</li>
        <li>Missing secured creditor consent, often from the LLP&apos;s bank.</li>
        <li>Capital accounts that do not reconcile with the CA-certified statement.</li>
        <li>Name objections where the company name differs from the LLP name.</li>
        <li>Articles drafted in a hurry that later need altering after investment terms are agreed.</li>
      </ul>

      <h2>Should you convert or start fresh?</h2>
      <p>
        Conversion keeps the history, contracts and track record of the
        business, which matters for tenders, bank relationships and customer
        onboarding. A new company with a business transfer is sometimes used
        where the LLP has legacy issues, but it involves stamp duty, contract
        assignments and its own tax questions. For the structures themselves, see
        our pages on{" "}
        <Link href="/llp-registration-chennai">LLP registration</Link> and{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>
        .
      </p>
      <p>
        If you are planning an LLP-to-company conversion and want the steps
        mapped against your investment timeline, you can{" "}
        <Link href="/contact">book a consultation</Link>.
      </p>
    </>
  );
}
