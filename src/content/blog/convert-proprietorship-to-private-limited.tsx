import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "convert-proprietorship-to-private-limited",
  title: "Convert a Proprietorship to a Private Limited Company",
  description:
    "How a sole proprietorship moves into a private limited company: incorporation, business transfer, GST and licence changes, bank accounts and tax conditions.",
  date: "2026-12-01",
  excerpt:
    "There is no one-click conversion. You incorporate a company, transfer the business into it and re-register GST, licences and bank accounts. Here is how.",
  faqs: [
    {
      question: "Can a sole proprietorship be converted directly into a private limited company?",
      answer:
        "Not in the way a partnership converts into an LLP. A proprietorship is not a separate legal entity, so there is nothing to convert under the Companies Act. Instead, you incorporate a new private limited company and transfer the running business, its assets and liabilities into it, usually through a business transfer agreement in exchange for shares.",
    },
    {
      question: "Will my proprietorship's GST number transfer to the new company?",
      answer:
        "No. GST registration is PAN-based, and the company has its own PAN, so it needs its own GSTIN. Where the whole business is transferred with a specific provision for transfer of liabilities, unutilised input tax credit can be moved to the company through Form GST ITC-02. The proprietor's old registration is then cancelled.",
    },
    {
      question: "Is there capital gains tax when a proprietor transfers the business to a company?",
      answer:
        "It depends on how the transfer is structured. Income-tax law has long treated such a takeover as not a transfer if all assets and liabilities move to the company, the proprietor receives only shares, and the proprietor keeps at least 50% of the voting power for five years. Breaching the conditions later can withdraw the relief.",
    },
    {
      question: "How long does the whole changeover take?",
      answer:
        "Incorporation through SPICe+ usually takes a couple of weeks once documents are ready. The longer part is the changeover: fresh GST registration, licences in the company name, a new bank account, customer and vendor updates and the ITC transfer. Most businesses plan a cut-off date, often a month or quarter end, and run the transition around it.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Many Chennai businesses start as sole proprietorships because it is the
        simplest way to begin trading. A few years in, the same owner wants
        limited liability, a structure that banks and investors understand, or
        the ability to bring in a partner as a shareholder. That is when the
        question comes up: how do I convert my proprietorship into a private
        limited company?
      </p>
      <p>
        The honest answer is that you do not convert it so much as move it. This
        guide explains the steps, the GST and licence changes, and the tax
        conditions you need to respect along the way.
      </p>

      <h2>Why is there no direct conversion route?</h2>
      <p>
        A sole proprietorship has no legal existence separate from its owner.
        Its PAN is the owner&apos;s PAN, its assets are the owner&apos;s assets
        and its debts are the owner&apos;s debts. The Companies Act, 2013 allows
        certain registered entities, such as partnership firms and LLPs, to
        register as companies under Part I of Chapter XXI, but those routes
        require a body with several members. A one-person business does not fit.
      </p>
      <p>
        So the practical route has two halves. First you incorporate a new
        private limited company, normally with the proprietor as a director and
        majority shareholder. Then the company takes over the proprietorship
        business as a going concern, including its stock, equipment,
        receivables, payables, employees and contracts.
      </p>

      <h2>Step 1: Incorporate the company with the takeover in mind</h2>
      <p>
        The company is incorporated through SPICe+ in the usual way, with at
        least two shareholders and two directors. A few choices made at this
        stage make the later transfer smoother:
      </p>
      <ul>
        <li>
          <strong>Object clause.</strong> Many founders include in the
          Memorandum of Association an object to acquire and take over the
          business of the named proprietorship as a going concern. This makes
          the purpose of the company clear to banks and authorities.
        </li>
        <li>
          <strong>Authorised capital.</strong> If the business will be
          transferred in exchange for shares, the authorised capital must be
          large enough to issue shares equal to the agreed value of the net
          assets.
        </li>
        <li>
          <strong>Name.</strong> You can often keep the trading name as part of
          the company name if it is available and does not conflict with an
          existing company or trademark.
        </li>
      </ul>
      <p>
        Our guide to{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>{" "}
        covers the incorporation documents and steps in detail.
      </p>

      <h2>Step 2: Transfer the business through an agreement</h2>
      <p>
        The transfer is usually documented in a business transfer agreement
        between the proprietor and the company. It identifies the assets and
        liabilities being transferred, the transfer date, the consideration and
        how employees, contracts and pending orders will be handled. A closing
        statement of assets and liabilities, prepared from the proprietorship
        books as on the transfer date, supports the values used.
      </p>
      <p>
        Consideration is commonly paid by issuing shares of the company to the
        proprietor. Shares issued for consideration other than cash are reported
        to the Registrar in Form PAS-3, and the agreement is attached. Some
        businesses instead pay part of the value in cash or as a loan from the
        proprietor, but that choice affects the tax position discussed below.
      </p>
      <p>
        Stamp duty can apply to the agreement and to any conveyance of
        immovable property, under Tamil Nadu stamp law. If the proprietorship
        owns land or a building, the property transfer needs to be planned
        separately, because it often carries the largest cost.
      </p>

      <h2>Step 3: Re-register GST, licences and bank accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>What happens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAN and TAN</td>
            <td>The company receives its own PAN and TAN on incorporation</td>
          </tr>
          <tr>
            <td>GST registration</td>
            <td>Fresh GSTIN for the company; proprietor&apos;s registration cancelled after the transfer</td>
          </tr>
          <tr>
            <td>Input tax credit</td>
            <td>Can be transferred through Form GST ITC-02 where the business is transferred with liabilities</td>
          </tr>
          <tr>
            <td>Bank account</td>
            <td>New current account in the company&apos;s name; old account wound down after collections settle</td>
          </tr>
          <tr>
            <td>Licences (trade licence, FSSAI, IEC, Udyam and similar)</td>
            <td>Usually obtained afresh or modified in the company&apos;s name under each licensing law</td>
          </tr>
          <tr>
            <td>EPF, ESI, profession tax</td>
            <td>New employer registrations for the company; employee records moved across</td>
          </tr>
        </tbody>
      </table>
      <p>
        On GST specifically, section 18(3) of the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">CGST Act</a>{" "}
        and rule 41 of the
        CGST Rules allow a registered person who transfers a business, with
        specific provision for transfer of liabilities, to move unutilised
        input tax credit to the transferee. The transferor files ITC-02 and the
        company accepts it on the portal. The transfer of a business as a going
        concern is also generally exempt from GST under the services exemption
        notification, which matters when stock and equipment move together. See
        our page on{" "}
        <Link href="/gst-registration-chennai">GST registration in Chennai</Link>{" "}
        for the registration side.
      </p>

      <h2>What are the income-tax conditions?</h2>
      <p>
        Under the Income-tax Act, 1961, section 47(xiv) treated the transfer of
        a sole proprietary concern to a company as not being a transfer for
        capital gains, if three conditions were met:
      </p>
      <ul>
        <li>All the assets and liabilities of the proprietary concern become the assets and liabilities of the company.</li>
        <li>The proprietor holds at least 50% of the total voting power in the company and continues to hold it for five years from the date of succession.</li>
        <li>The proprietor receives no consideration or benefit, directly or indirectly, other than by way of allotment of shares.</li>
      </ul>
      <p>
        If any condition was breached later, the exemption could be withdrawn
        and the gain taxed in the year of breach. Carry-forward of the
        proprietorship&apos;s unabsorbed losses and depreciation into the
        company was also allowed only on specific conditions.
      </p>
      <p>
        From 1 April 2026, the Income-tax Act, 2025 applies. It retains a list
        of transactions not regarded as transfer, but section numbers and
        wording have changed. Before you sign the transfer agreement, have the
        current provision and its conditions checked for the tax year in which
        the transfer will take place. The tax conditions shape the deal: paying
        the proprietor in cash, or leaving some assets out, may cost the relief.
      </p>

      <h2>What about customers, vendors and contracts?</h2>
      <p>
        Contracts signed by the proprietor do not automatically pass to the
        company. Important customer contracts, leases, distributor agreements
        and supplier credit terms usually need the other party&apos;s consent
        to assignment, or a fresh agreement with the company. Start these
        conversations early, because a large customer&apos;s vendor
        registration process can take longer than the incorporation itself.
      </p>
      <p>
        Plan the invoicing cut-over too. From the transfer date, invoices should
        carry the company&apos;s name, GSTIN and bank details. Old receivables
        either move to the company under the agreement or are collected by the
        proprietor and settled.
      </p>

      <h2>A practical sequence</h2>
      <ol>
        <li>Decide the transfer date and the shareholding, keeping the tax conditions in view.</li>
        <li>Obtain DSCs and incorporate the company through SPICe+.</li>
        <li>Apply for the company&apos;s GSTIN and open its bank account.</li>
        <li>Prepare the closing statement of assets and liabilities as on the transfer date.</li>
        <li>Execute the business transfer agreement and pay applicable stamp duty.</li>
        <li>Allot shares to the proprietor and file PAS-3 within 30 days of allotment.</li>
        <li>File ITC-02, then apply to cancel the proprietor&apos;s GST registration.</li>
        <li>Move licences, employee registrations, contracts and vendor records to the company.</li>
      </ol>

      <h2>Is it worth doing?</h2>
      <p>
        A company brings limited liability, a clear separation between
        business and personal money, and a structure that can take in equity.
        It also brings annual{" "}
        <Link href="/roc-compliances">ROC compliances</Link>, a statutory audit
        and board processes. If the business is growing, borrowing or planning
        to bring in partners, the move usually makes sense. If it is small and
        stable, a proprietorship may still be the lighter option.
      </p>
      <p>
        If you are weighing the move and want the steps sequenced for your
        business, you can{" "}
        <Link href="/contact">book a consultation with our team</Link>.
      </p>
    </>
  );
}
