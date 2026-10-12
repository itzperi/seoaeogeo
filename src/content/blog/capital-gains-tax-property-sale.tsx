import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "capital-gains-tax-property-sale",
  title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide",
  description:
    "How capital gains on a Chennai flat, house or plot are taxed in 2026: 12.5% vs 20% indexed, guideline value, reinvestment exemptions, TDS and joint owners.",
  date: "2026-09-19",
  updated: "2026-10-12",
  excerpt:
    "A worked guide to capital gains on selling a Chennai house, flat or plot: the 12.5% or 20% indexed choice, guideline value, reinvestment exemptions, TDS and co-owners.",
  faqs: [
    {
      question: "Can I still use indexation when I sell my Chennai flat in 2026?",
      answer:
        "Yes, if you are a resident individual or HUF and the property was acquired before 23 July 2024. You compute tax at 12.5% without indexation and at 20% with indexed cost, and pay the lower amount. Non-residents and property acquired on or after 23 July 2024 get only the 12.5% unindexed rate.",
    },
    {
      question: "What if the guideline value is higher than my sale price?",
      answer:
        "If the Tamil Nadu guideline value (stamp duty value) exceeds the agreed price by more than 10%, the guideline value is treated as your sale consideration for capital gains. You can ask for a reference to a Valuation Officer if you believe the guideline value is above the property's fair market value.",
    },
    {
      question: "How long must I hold a flat for the gain to be long-term?",
      answer:
        "More than 24 months from the date of acquisition to the date of transfer. For a flat bought under construction, the holding period usually runs from allotment or the agreement that gives you rights in the flat, which is a fact-specific question worth checking with your documents before you fix the sale date.",
    },
    {
      question: "How much can I invest in capital gains bonds?",
      answer:
        "Up to ₹50 lakh, within six months of the sale, in notified long-term bonds such as those issued by NHAI or REC. The bonds are locked in for five years; selling them early, or taking a loan against them, makes the exempted gain taxable in the year that happens.",
    },
    {
      question: "My wife and I own the flat jointly. Who pays the tax?",
      answer:
        "Each co-owner is taxed on their own share of the gain, based on the share recorded in the deed and, in practice, who actually paid for the property. Each co-owner can claim reinvestment exemptions separately on their share, and each should see their portion of the buyer's TDS in their own AIS.",
    },
    {
      question: "Does the buyer deduct TDS when I sell property in Chennai?",
      answer:
        "Yes, where the consideration is ₹50 lakh or more and you are a resident, the buyer deducts 1% of the higher of the price and the stamp duty value, and deposits it through Form 141 for payments from 1 April 2026. Non-resident sellers face a much higher deduction on the full price.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Selling a flat in Anna Nagar, an old house in Mylapore or a plot on the
        ECR is often the largest single transaction a Chennai family makes, and
        the capital gains tax on it is easy to get wrong. This guide covers the
        rules for resident individuals and HUFs selling in tax year 2026-27, the
        first year under the Income-tax Act, 2025, with a worked example. If you
        are an NRI seller, the TDS position is very different; see our page on{" "}
        <Link href="/nri-property-sale-tds-chennai">NRI property sale TDS in Chennai</Link>.
      </p>

      <h2>How is capital gains tax calculated when you sell property in Chennai?</h2>
      <p>
        <strong>Direct answer:</strong> Take the sale price (or the Tamil Nadu
        guideline value, if that is more than 10% higher), deduct transfer
        expenses and your cost of purchase and improvement. If you held the
        property for more than 24 months, the gain is long-term and taxed at
        12.5%; resident individuals and HUFs with property acquired before 23
        July 2024 may instead pay 20% on an indexed gain, whichever is lower.
      </p>
      <p>
        Short-term gains (property held 24 months or less) are added to your
        other income and taxed at slab rates, which for most sellers in this
        bracket means 30% plus surcharge and cess. Long-term gains also attract
        surcharge where total income crosses ₹50 lakh, but the surcharge on
        capital gains is capped at 15%, plus 4% health and education cess.
      </p>

      <h2>What counts as the sale price and the cost?</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>What to include</th>
            <th>Documents to keep</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full value of consideration</td>
            <td>The agreed price, or the stamp duty value if it exceeds the price by more than 10%</td>
            <td>Sale deed, guideline value printout for the survey number</td>
          </tr>
          <tr>
            <td>Transfer expenses</td>
            <td>Brokerage, legal fees for the sale, and similar costs incurred wholly for the transfer</td>
            <td>Invoices and bank proof of payment</td>
          </tr>
          <tr>
            <td>Cost of acquisition</td>
            <td>Purchase price plus stamp duty and registration paid when you bought</td>
            <td>Purchase deed, stamp duty receipts, builder payment records</td>
          </tr>
          <tr>
            <td>Cost of improvement</td>
            <td>Capital additions such as an extra floor or structural renovation (not routine repairs or painting)</td>
            <td>Contractor bills, approvals, bank statements</td>
          </tr>
          <tr>
            <td>Inherited or gifted property</td>
            <td>The previous owner&apos;s cost, and their holding period added to yours</td>
            <td>Will or settlement deed, legal heir certificate, the earlier owner&apos;s purchase deed</td>
          </tr>
        </tbody>
      </table>

      <h2>Should you choose 12.5% without indexation or 20% with indexation?</h2>
      <p>
        From 23 July 2024 the long-term rate on land and buildings is 12.5%
        without indexation. For resident individuals and HUFs selling land or
        buildings acquired before that date, the law disregards any tax above
        what would be payable at 20% on the indexed gain, so in effect you pay
        the lower of the two. Indexation inflates your purchase cost using the
        Cost Inflation Index; the CBDT has notified an index of 384 for 2026-27,
        against 376 for 2025-26. In the Income-tax Act, 2025 this rate rule sits
        in section 197.
      </p>
      <p>
        As a rule of thumb, older purchases favour the indexed option and
        recent ones favour 12.5%, but you should always compute both. The
        example below uses a sale in October 2026 for ₹2.40 crore, with ₹2 lakh
        of brokerage.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step (₹ lakh)</th>
            <th>Flat bought in 2012-13 for ₹60 lakh</th>
            <th>House bought in 2005-06 for ₹40 lakh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sale price less brokerage</td>
            <td>238.00</td>
            <td>238.00</td>
          </tr>
          <tr>
            <td>Gain without indexation</td>
            <td>178.00</td>
            <td>198.00</td>
          </tr>
          <tr>
            <td>Tax at 12.5%</td>
            <td>22.25</td>
            <td>24.75</td>
          </tr>
          <tr>
            <td>Indexed cost (CII 384 ÷ 200, or 384 ÷ 117)</td>
            <td>115.20</td>
            <td>131.28</td>
          </tr>
          <tr>
            <td>Indexed gain</td>
            <td>122.80</td>
            <td>106.72</td>
          </tr>
          <tr>
            <td>Tax at 20%</td>
            <td>24.56</td>
            <td>21.34</td>
          </tr>
          <tr>
            <td>Tax payable (lower of the two, before surcharge and cess)</td>
            <td>22.25 (12.5% route)</td>
            <td>21.34 (indexed route)</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you plan to reinvest, the exemption reduces the gain before either
        rate is applied, so run the comparison after the exemption too.
      </p>

      <h2>How does the Tamil Nadu guideline value affect your tax?</h2>
      <p>
        The Registration Department fixes a guideline value for each street and
        survey number, and stamp duty is charged on the higher of that value and
        the agreed price. Income tax follows it: under section 78 of the
        Income-tax Act, 2025 (section 50C of the 1961 Act), where the stamp duty
        value exceeds the agreed price by more than 10%, the stamp duty value is
        taken as your sale consideration. The buyer faces a matching rule on the
        other side.
      </p>
      <p>
        Guideline values are revised from time to time, so check the current
        figure for your exact survey number on the{" "}
        <a href="https://tnreginet.gov.in/" target="_blank" rel="noopener noreferrer">Tamil Nadu Registration Department portal (tnreginet.gov.in)</a>{" "}
        before you agree a price, rather than relying on a figure quoted by a
        broker. Older bungalows in areas such as{" "}
        <Link href="/income-tax-consultant-ra-puram-chennai">R A Puram</Link> and{" "}
        <Link href="/income-tax-consultant-alwarpet-chennai">Alwarpet</Link> sometimes
        sell below the guideline value because of title, access or building
        condition issues; if so, keep a registered valuer&apos;s report on file.
      </p>

      <h2>Which reinvestment exemptions can reduce the tax?</h2>
      <ul>
        <li>
          <strong>Buy or build a residential house (section 82, earlier section 54).</strong>{" "}
          If you sell a residential house, the long-term gain is exempt to the
          extent you invest it in one residential house in India, bought within
          one year before or two years after the sale, or constructed within
          three years. Where the gain does not exceed ₹2 crore, you may once in
          a lifetime invest in two houses. Cost above ₹10 crore is ignored, and
          selling the new house within three years reverses the benefit.
        </li>
        <li>
          <strong>Capital gains bonds (section 85, earlier section 54EC).</strong>{" "}
          Gains from any land or building can be invested within six months in
          notified five-year bonds, up to ₹50 lakh.
        </li>
        <li>
          <strong>Selling a plot or other long-term asset (section 86, earlier section 54F).</strong>{" "}
          If you sell a plot rather than a house, investing the net sale
          consideration (not just the gain) in one residential house gives a
          proportionate exemption, provided you do not own more than one other
          house on the date of sale.
        </li>
        <li>
          <strong>Capital Gains Accounts Scheme.</strong> Any amount not yet
          invested by your return due date must be deposited in a capital gains
          account with an authorised bank before that date to keep the
          exemption alive.
        </li>
      </ul>
      <p>
        The Income Tax Department&apos;s summary of{" "}
        <a href="https://www.incometaxindia.gov.in/w/exemptions-from-capital-gains-1" target="_blank" rel="noopener noreferrer">exemptions from capital gains</a>{" "}
        sets out these conditions. Where an exemption was claimed under the 1961
        Act and is later withdrawn, the CBDT has indicated the conditions of the
        old section continue to govern it.
      </p>

      <h2>What TDS does the buyer deduct, and how do joint owners report?</h2>
      <p>
        For a resident seller, the buyer must deduct 1% where the consideration
        is ₹50 lakh or more, calculated on the higher of the price and the stamp
        duty value. From 1 April 2026 this falls under section 393(1) of the new
        Act and is deposited through Form 141, a single PAN-based form even when
        there are several sellers or buyers. The ₹50 lakh threshold is tested on
        the total consideration, not each co-owner&apos;s share. Check that your
        portion of the TDS appears in your AIS before you file; mismatches are a
        common reason for{" "}
        <Link href="/income-tax-return-filing-chennai">return processing</Link> delays.
      </p>
      <p>
        Joint owners are each taxed on their own share of the gain. The share
        in the deed matters, but so does who actually funded the purchase: if a
        spouse is a co-owner only in name and did not contribute, the income may
        be clubbed with the person who paid. Each co-owner computes their own
        holding period, cost and exemption, so two co-owners of the same flat
        can legitimately make different reinvestment choices.
      </p>

      <h2>What should you do before you sign the sale deed?</h2>
      <ul>
        <li>Confirm the acquisition date and cost from the original deed, and for inherited property, from the previous owner&apos;s deed.</li>
        <li>Check the guideline value for the survey number and compare it with the price you are offered.</li>
        <li>Compute the tax both ways if the property was acquired before 23 July 2024.</li>
        <li>Decide on reinvestment before the sale, because the bond window is only six months.</li>
        <li>Pay advance tax in the instalment following the sale; a large gain in October falls into the 15 December and 15 March instalments.</li>
        <li>If the property is being redeveloped rather than sold, the timing rules differ; see our guide to{" "}
          <Link href="/blog/joint-development-agreement-tax-chennai">joint development agreement tax in Chennai</Link>.</li>
      </ul>
      <p>
        Property sales are usually one part of a wider family tax picture. Our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai">income tax planning for HNIs and families in Chennai</Link>{" "}
        brings property, shares and foreign assets into one computation. To go
        through your numbers before the sale closes,{" "}
        <Link href="/contact">contact our Anna Nagar office</Link>.
      </p>
    </>
  );
}
