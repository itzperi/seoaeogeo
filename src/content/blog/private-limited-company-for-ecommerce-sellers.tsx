import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "private-limited-company-for-ecommerce-sellers",
  title: "Private Limited Company for E-commerce Sellers",
  description:
    "When online sellers should incorporate, how GST registration works for marketplace sales, the enrolment option for small sellers, and TCS at 0.5% explained.",
  date: "2026-12-15",
  excerpt:
    "Selling on Amazon, Flipkart or your own site? When to move to a private limited company, and how GST, enrolment numbers and marketplace TCS work.",
  faqs: [
    {
      question: "Do I need GST registration to sell on e-commerce marketplaces?",
      answer:
        "Usually yes, but not always. Sellers supplying goods through an e-commerce operator were traditionally required to register regardless of turnover. Since 1 October 2023, small sellers making only intra-state supplies of goods below the state threshold can sell through marketplaces using a GST enrolment number instead, subject to the conditions in Notification 34/2023-Central Tax.",
    },
    {
      question: "What is the TCS rate collected by e-commerce operators under GST?",
      answer:
        "From 10 July 2024, e-commerce operators collect TCS at 0.5% of the net value of taxable supplies made through them by registered sellers, split as 0.25% CGST and 0.25% SGST for intra-state supplies, or 0.5% IGST for inter-state supplies. The seller can use the amount reflected on the portal against its GST liability.",
    },
    {
      question: "When should an online seller incorporate a private limited company?",
      answer:
        "Incorporation makes sense when the business is building inventory and liabilities, selling across states, hiring staff, or planning to raise external funding. A company separates business risk from personal assets and is the structure investors expect. Very small, single-state sellers testing a product can often start as a proprietorship and incorporate once volumes justify the compliance.",
    },
    {
      question: "Do I need GST registration in another state if the marketplace stores my stock there?",
      answer:
        "Generally yes. If your goods are stored in a fulfilment centre in another state, that warehouse is treated as your place of business in that state, and GST registration is needed there. Sellers using marketplace fulfilment networks should check which states their inventory is placed in before enabling the service.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Many Chennai sellers start online with a few listings on a marketplace
        under their own name. Within a year or two, the business may be holding
        stock worth lakhs, dealing with returns and chargebacks, hiring packers
        and selling into every state. At that point two questions overlap:
        should the business become a private limited company, and is its GST
        set-up right for the way marketplaces work?
      </p>

      <h2>When should an online seller incorporate?</h2>
      <p>
        Marketplaces accept proprietorships, partnerships, LLPs and companies,
        so incorporation is rarely a platform requirement. It is a risk and
        growth decision. The signals that usually point towards a private
        limited company are:
      </p>
      <ul>
        <li><strong>Liability exposure.</strong> Product complaints, consumer disputes, supplier credit and warehouse leases are commitments you may not want attached to personal assets.</li>
        <li><strong>Funding.</strong> Angel investors and venture funds invest in shares, which need a company.</li>
        <li><strong>Team and ESOPs.</strong> Employee stock options are possible only in a company.</li>
        <li><strong>Banking and credit.</strong> Working capital lenders and payment partners often find it easier to assess a company with audited accounts.</li>
        <li><strong>Brand building.</strong> A company can own trademarks, domains and marketplace brand registrations in its own name, which survive a change in founders.</li>
      </ul>
      <p>
        The trade-off is compliance: a statutory audit, annual ROC filings and
        board processes. Our{" "}
        <Link href="/company-registration-chennai">
          company registration in Chennai
        </Link>{" "}
        guide compares the structures side by side.
      </p>

      <h2>How does GST registration work for marketplace sellers?</h2>
      <p>
        Section 24 of the CGST Act lists categories that must register
        regardless of turnover. One of them is a person supplying goods or
        services through an e-commerce operator that is required to collect
        tax at source. Another is a person making inter-state taxable supplies.
        Two exceptions matter for small sellers:
      </p>
      <ul>
        <li>
          <strong>Services through e-commerce operators.</strong> Service
          suppliers selling through an operator, other than services where the
          operator itself pays the tax, have been exempted from compulsory
          registration if their aggregate turnover is within the threshold.
        </li>
        <li>
          <strong>Small intra-state goods sellers.</strong>{" "}
          <a href="https://gstcouncil.gov.in/sites/default/files/2024-05/gst-ct-34-2023.pdf" target="_blank" rel="noopener noreferrer">
            Notification 34/2023-Central Tax
          </a>{" "}
          exempts from registration persons supplying goods through an
          e-commerce operator whose aggregate turnover does not exceed the
          threshold for their state, with effect from 1 October 2023.
        </li>
      </ul>

      <h2>The enrolment number route for small sellers</h2>
      <p>
        The exemption under Notification 34/2023 comes with conditions. The
        seller:
      </p>
      <ul>
        <li>Must not make any inter-state supply of goods.</li>
        <li>Must not supply through an e-commerce operator in more than one state or union territory.</li>
        <li>Must have a PAN, and declare the PAN, business address and state on the GST common portal for validation.</li>
        <li>Must obtain an enrolment number on the portal before supplying through the operator. Only one enrolment number is granted per state.</li>
      </ul>
      <p>
        If the seller later takes regular GST registration, the enrolment number
        ceases to be valid from the effective date of registration. Under the
        companion special procedure in Notification 37/2023, the operator must
        not allow inter-state supplies by such sellers and does not collect TCS
        on their supplies.
      </p>
      <p>
        In Tamil Nadu, the threshold for suppliers exclusively of goods is
        ₹40 lakh of aggregate turnover. The enrolment route works for a seller
        selling only within Tamil Nadu, on one state&apos;s marketplace
        presence, below that level. The moment you want to ship to buyers in
        Bengaluru or Hyderabad, regular registration is needed.
      </p>

      <h2>How does marketplace TCS work?</h2>
      <p>
        Under section 52 of the CGST Act, e-commerce operators collect tax at
        source on the net value of taxable supplies made through them by other
        suppliers. The rate was reduced from 1% to 0.5% with effect from 10 July
        2024.
      </p>
      <table>
        <thead>
          <tr>
            <th>Supply type</th>
            <th>TCS collected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intra-state</td>
            <td>0.25% CGST + 0.25% SGST</td>
          </tr>
          <tr>
            <td>Inter-state</td>
            <td>0.5% IGST</td>
          </tr>
          <tr>
            <td>Sellers under the enrolment route</td>
            <td>No TCS collected</td>
          </tr>
        </tbody>
      </table>
      <p>
        The operator reports these amounts in its GSTR-8 return. Registered
        sellers see the TCS on the GST portal, accept it, and it is credited to
        the electronic cash ledger for use against tax liability. Monthly
        reconciliation of marketplace settlement reports against GST returns
        and TCS credits is the single most useful habit an online seller can
        build. Returns, cancellations and commissions all create differences
        that are easier to explain in the month they occur.
      </p>
      <p>
        Separately, e-commerce operators deduct income-tax TDS on sellers&apos;
        gross sales. That rate was reduced to 0.1% from 1 October 2024. Check the
        current provision under the Income-tax Act, 2025, which has applied
        from 1 April 2026, when reconciling your tax credits.
      </p>

      <h2>Additional states and fulfilment centres</h2>
      <p>
        If a marketplace fulfilment programme moves your inventory into a
        warehouse in Karnataka or Maharashtra, that warehouse is your place of
        business there, and GST registration in that state is generally
        required. Many sellers discover this only when listings get blocked.
        Before opting into multi-state fulfilment, map the states involved and
        plan the registrations. A company makes this easier to manage, because
        all registrations sit under one PAN with one set of books.
      </p>

      <h2>How should marketplace sales be accounted for?</h2>
      <p>
        Marketplace settlements are the main source of confusion in an online
        seller&apos;s books. The amount credited to your bank is not your
        sales figure. A typical settlement nets off several items, and each
        needs its own treatment:
      </p>
      <ul>
        <li>
          <strong>Gross sales.</strong> Record the full invoice value to the
          customer, including GST, as your sale. Your GST return reports this
          value, not the net payout.
        </li>
        <li>
          <strong>Marketplace fees.</strong> Commission, fulfilment, shipping
          and advertising charges are the operator&apos;s supplies to you. The
          operator issues tax invoices for them, and a registered seller can
          generally claim input tax credit on that GST.
        </li>
        <li>
          <strong>Returns and cancellations.</strong> Customer returns need
          credit notes linked to the original invoices, and must be reported
          correctly so that output tax is reduced in the right period.
        </li>
        <li>
          <strong>TCS and TDS.</strong> The GST TCS and the income-tax TDS
          deducted by the operator are not expenses. They are tax credits to be
          claimed, so they should sit in separate ledger accounts until used.
        </li>
        <li>
          <strong>Reserves and holds.</strong> Some platforms hold back part of
          the payout for a period. These amounts are receivables, not lost
          revenue.
        </li>
      </ul>

      <h2>Proprietorship or company: what changes day to day?</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Proprietorship</th>
            <th>Private limited company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seller account and GSTIN</td>
            <td>In the owner&apos;s PAN</td>
            <td>In the company&apos;s PAN; marketplace accounts need to be moved or re-created</td>
          </tr>
          <tr>
            <td>Liability</td>
            <td>Owner personally liable</td>
            <td>Company liable; owner protected except for personal guarantees</td>
          </tr>
          <tr>
            <td>Annual compliance</td>
            <td>Income-tax return and tax audit above thresholds</td>
            <td>Statutory audit, ROC filings, board meetings, plus tax filings</td>
          </tr>
          <tr>
            <td>Raising money</td>
            <td>Loans only</td>
            <td>Loans and equity</td>
          </tr>
        </tbody>
      </table>
      <p>
        Moving an established seller account from a proprietorship to a
        company usually means registering the company as a new seller and
        transferring brand registrations. Plan the switch-over for a quieter
        sales period.
      </p>

      <h2>A practical path for growing sellers</h2>
      <ol>
        <li>Start with a clear view of where you will sell from and to, and whether stock will sit in other states.</li>
        <li>If you are small and intra-state only, the enrolment route can be a starting point.</li>
        <li>Once you sell inter-state, take regular GST registration, as described on our{" "}
          <Link href="/gst-registration-chennai">GST registration in Chennai</Link> page.</li>
        <li>When liabilities, staff or funding plans grow, incorporate a private limited company and transfer the business into it.</li>
        <li>Reconcile marketplace payouts, TCS and TDS every month.</li>
      </ol>
      <p>
        If you sell online and want to work out the right structure and GST
        set-up for your volumes, you can{" "}
        <Link href="/contact">book a consultation with us</Link>.
      </p>
    </>
  );
}
