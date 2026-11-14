import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "joint-development-agreement-tax-chennai",
  title: "Joint Development Agreement Tax for Chennai Landowners",
  description:
    "JDA tax for Chennai landowners: when capital gains arise, GST on your flats, 10% TDS on cash, NRI co-owner TDS and repatriation, with a worked example.",
  date: "2026-10-12",
  updated: "2026-11-13",
  excerpt:
    "Bungalow-to-apartment redevelopment is common in R A Puram, Mylapore and Adyar. Here is how a landowner is taxed under a joint development agreement, step by step.",
  faqs: [
    {
      question: "When is capital gain taxed under a joint development agreement?",
      answer:
        "For an individual or HUF with a registered agreement, the gain is taxed in the tax year in which the competent authority issues the completion certificate for the whole or part of the project, not when the agreement is signed. If you transfer your share before that certificate, the deferral is lost.",
    },
    {
      question: "What value is used as the sale price under a JDA?",
      answer:
        "The stamp duty value of your share in the developed project on the date of the completion certificate, plus any money received from the developer. In Tamil Nadu the stamp duty value follows the Registration Department's guideline value, so the flats are valued as they would be for registration on that date.",
    },
    {
      question: "Does the developer deduct TDS on the flats given to me?",
      answer:
        "No. TDS at 10% applies only to cash or other monetary consideration paid under the agreement, with no threshold. Flats or built-up area given in kind are not subject to TDS. Furnish your PAN to the developer; without it the deduction rate rises to 20%.",
    },
    {
      question: "Do I pay GST as a landowner in a JDA?",
      answer:
        "Usually not directly on the land share. For residential projects, the developer pays GST on the construction of your flats, and tax on development rights falls on the developer under reverse charge for flats unbooked at completion. You may have GST obligations if you sell your flats before the completion certificate.",
    },
    {
      question: "What is my cost when I later sell a flat received under a JDA?",
      answer:
        "Your cost is the value that was taxed as consideration for that flat in the completion-certificate year, that is, its share of the stamp duty value. A sale within 24 months of acquiring the flat is short-term and taxed at slab rates; after that it is long-term at 12.5%.",
    },
    {
      question: "Can I claim a reinvestment exemption on JDA gains?",
      answer:
        "Often yes. If the property given for development was a residential house, the house reinvestment exemption may apply; for a vacant plot, the exemption for investing net consideration in a house may apply. Whether flats received from the developer qualify, and from which date the time limits run, is fact-specific.",
    },
    {
      question: "How is an NRI co-owner taxed under a Chennai JDA?",
      answer:
        "The gain is taxed in the completion-certificate year at 12.5% without indexation. Cash from the developer suffers TDS under the non-resident provision rather than the 10% rule, so a lower-deduction certificate (Form 13, now Form 128) helps. Proceeds reach an NRO account and are remitted after Form 15CA and 15CB, now Forms 145 and 146.",
    },
  ],
  summary:
    "For an individual or HUF who signs a registered joint development agreement, capital gains are taxed in the tax year the completion certificate is issued, not the year of signing, under section 45(5A) of the 1961 Act. Sale value is the stamp duty value of the owner's share plus any cash received. Transferring your share before completion loses this deferral.",
};

export default function Body() {
  return (
    <>
      <p>
        Across R A Puram, Mylapore, Adyar, Gopalapuram and Alwarpet, many
        families who own an old bungalow on a ground or two of land choose to
        redevelop rather than sell outright. The usual structure is a joint
        development agreement (JDA): the family gives the land to a builder,
        the builder constructs an apartment block, and the family receives a
        share of the flats, sometimes with a cash payment. The tax consequences
        span income tax, GST, TDS and stamp duty, and the family usually has
        several co-owners, some of whom may live abroad. This guide sets out how
        the landowner side is taxed.
      </p>

      <h2>When does a Chennai landowner pay capital gains tax under a JDA?</h2>
      <p>
        <strong>Direct answer:</strong> For an individual or HUF who signs a
        registered JDA, capital gains are taxed in the tax year the completion
        certificate is issued for the project (or part of it), not the year of
        signing. The sale value is the stamp duty value of the owner&apos;s share
        on that date plus any cash received. Transferring your share before
        completion loses this deferral.
      </p>
      <p>
        This rule was introduced as section 45(5A) of the Income-tax Act, 1961
        for agreements from tax year 2017-18 onwards, and is explained on the
        Income Tax Department&apos;s page on{" "}
        <a href="https://www.incometaxindia.gov.in/w/joint-development-agreements-jda-" target="_blank" rel="noopener noreferrer">joint development agreements</a>.
        It continues under the Income-tax Act, 2025, whose TDS provisions refer
        to the same specified agreement. Before 2017, the tax department often
        argued the gain arose when possession was handed to the builder, and
        older Chennai cases turn on that question; if your agreement predates
        April 2017, the analysis is different.
      </p>
      <p>
        The holding period runs from when you acquired the land up to the day
        before the completion certificate. For land held for decades, the gain
        is almost always long-term. A resident individual or HUF whose land was
        acquired before 23 July 2024 can compare 12.5% without indexation with
        20% on an indexed gain and pay the lower amount, exactly as for an
        outright sale (see our{" "}
        <Link href="/blog/capital-gains-tax-property-sale">guide to capital gains on selling Chennai property</Link>).
        For inherited property, the previous owner&apos;s cost and holding period
        carry over.
      </p>

      <h2>How is the landowner taxed at each stage of redevelopment?</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Income tax</th>
            <th>TDS and GST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JDA and power of attorney signed and registered</td>
            <td>No gain yet for individuals and HUFs with a registered JDA</td>
            <td>Stamp duty and registration on the JDA under Tamil Nadu stamp law</td>
          </tr>
          <tr>
            <td>Cash or non-refundable deposit received from the developer</td>
            <td>Forms part of the consideration, taxed in the completion year</td>
            <td>Developer deducts 10% TDS on monetary consideration</td>
          </tr>
          <tr>
            <td>Construction period</td>
            <td>No tax event; do not sell or transfer your share</td>
            <td>Developer manages GST on the project</td>
          </tr>
          <tr>
            <td>Completion certificate issued (whole or part)</td>
            <td>Capital gain taxed: stamp duty value of your share plus cash, less cost</td>
            <td>Developer pays GST on the flats built for you; TDS credit claimed in this year</td>
          </tr>
          <tr>
            <td>You sell a flat received</td>
            <td>Fresh gain: sale price less the value taxed for that flat</td>
            <td>Buyer deducts 1% TDS if the price is ₹50 lakh or more; no GST on sales after completion</td>
          </tr>
        </tbody>
      </table>

      <h2>How does the stamp duty value work in Tamil Nadu?</h2>
      <p>
        Stamp duty value means the value adopted or assessable by a government
        authority for stamp duty. In Tamil Nadu, that follows the guideline
        value for the land and the value adopted for the building when a flat
        is registered. For a JDA, the question is what your share of the
        developed project would be valued at for registration on the date the
        completion certificate is issued. Guideline values change, so the
        figure cannot be known when you sign; it is worth checking the current
        values for your survey number on the{" "}
        <a href="https://tnreginet.gov.in/" target="_blank" rel="noopener noreferrer">Tamil Nadu Registration Department portal (tnreginet.gov.in)</a>{" "}
        at signing and again close to completion. Stamp duty on the JDA itself
        and on any sale of undivided share to the builder&apos;s buyers depends on
        how the documents are structured, and should be confirmed with your
        documentation lawyer.
      </p>

      <h2>What GST applies to development rights and the landowner&apos;s flats?</h2>
      <p>
        Under the residential real estate scheme in force since 1 April 2019,
        the GST Council&apos;s{" "}
        <a href="https://www.gstcouncil.gov.in/sites/default/files/2024-02/faq-real-estate-sector.pdf" target="_blank" rel="noopener noreferrer">FAQs on the real estate sector</a>{" "}
        describe three pieces:
      </p>
      <ul>
        <li><strong>Development rights:</strong> supply of development rights for residential apartments is exempt to the extent the flats are booked before the completion certificate. For flats still unbooked at completion, the developer pays tax under reverse charge, capped at 1% of value for affordable housing and 5% for others.</li>
        <li><strong>Construction of the landowner&apos;s flats:</strong> the developer supplies construction service to the landowner and pays GST on it, valued with reference to similar flats sold to independent buyers. The liability arises at completion or first occupation, whichever is earlier.</li>
        <li><strong>Landowner selling flats:</strong> if you sell your flats before the completion certificate, that sale is taxable and you can take credit for the GST the developer charged you. Sales after completion are outside GST.</li>
      </ul>
      <p>
        Whether development rights are taxable at all has been litigated before
        High Courts, and the treatment of commercial projects differs. Check the
        current position for your project type before signing, and make sure
        the JDA states clearly who bears GST.
      </p>

      <h2>What does a worked example look like?</h2>
      <p>
        A resident individual bought a house on a ground of land in 2005-06 for
        ₹50 lakh. In 2024 she registers a JDA giving her four flats plus a
        non-refundable ₹30 lakh, from which the developer deducts ₹3 lakh TDS.
        The completion certificate is issued in September 2026, when the stamp
        duty value of her four flats is ₹6.00 crore. Figures in ₹ lakh,
        before surcharge and cess.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>12.5% without indexation</th>
            <th>20% with indexation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stamp duty value of share plus cash</td>
            <td>630.00</td>
            <td>630.00</td>
          </tr>
          <tr>
            <td>Cost (indexed at CII 384 ÷ 117)</td>
            <td>50.00</td>
            <td>164.10</td>
          </tr>
          <tr>
            <td>Long-term capital gain (tax year 2026-27)</td>
            <td>580.00</td>
            <td>465.90</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>72.50</td>
            <td>93.18</td>
          </tr>
          <tr>
            <td>Payable (lower), less TDS credit of 3.00</td>
            <td>69.50</td>
            <td>Not chosen</td>
          </tr>
        </tbody>
      </table>
      <p>
        If she sells one flat in 2027-28 for ₹1.70 crore, her cost is ₹1.50
        crore (one quarter of the stamp duty value already taxed), giving a
        ₹20 lakh gain. Because she has held that flat for less than 24 months,
        it is short-term and taxed at slab rates. Note that the tax on the
        main gain falls due in the completion year even though she received
        flats rather than cash, so advance tax planning matters; a family may
        sell one flat early in the following year to fund it, or plan an
        exemption.
      </p>

      <h2>How would GST apply to the same JDA, step by step?</h2>
      <p>
        <strong>Direct answer:</strong> GST on a residential JDA turns on three events: the transfer of
        development rights to the developer, the developer&apos;s construction of the landowner&apos;s flats, and
        any sale of those flats by the landowner before completion. In most Chennai redevelopments the developer
        bears the first two, and the landowner is affected only by an early sale.
      </p>
      <p>
        The rates and valuation rules come from the Central Tax (Rate) notifications for the real estate scheme
        that took effect on 1 April 2019, summarised in the GST Council&apos;s FAQs linked above. Without
        reproducing figures that depend on the project&apos;s bookings and prices, the same four-flat example
        works like this in principle:
      </p>
      <ol>
        <li><strong>Development rights at signing:</strong> exempt to the extent the project&apos;s flats are booked by buyers before the completion certificate or first occupation. For the share of flats still unbooked on that date, the developer pays tax under reverse charge, limited to 1% (affordable) or 5% (other) of the value of those flats.</li>
        <li><strong>Construction of her four flats:</strong> the developer pays GST on the construction service supplied to her, valued by reference to the price charged for similar flats in the project to independent buyers. The tax falls due when the completion certificate is issued or on first occupation, whichever is earlier.</li>
        <li><strong>If she sells one flat before completion:</strong> that sale is a taxable supply by her. She charges GST to the buyer and can take credit for the GST the developer charged her on that flat.</li>
        <li><strong>If she sells only after completion:</strong> the sale of a completed flat is outside GST, and only income tax, stamp duty and the buyer&apos;s TDS apply.</li>
      </ol>
      <p>
        Because the developer&apos;s liability on the landowner&apos;s flats is sometimes passed on by contract,
        the JDA should say expressly who bears GST on the construction service and on development rights.
      </p>

      <h2>How is an NRI landowner taxed under a Chennai JDA?</h2>
      <p>
        <strong>Direct answer:</strong> An NRI co-owner is taxed on the same gain, in the year the completion
        certificate is issued, but at 12.5% without the indexation option. Cash from the developer falls under
        the TDS provision for non-residents, not the 10% JDA rule, so a lower-deduction certificate matters.
        Money is received in an NRO account and remitted after Forms 145 and 146.
      </p>
      <p>
        Bungalow families in Mylapore, Adyar and Alwarpet often include a sibling in London, New Jersey or Toronto.
        The completion-year rule applies to an individual or HUF regardless of residence, but several mechanics
        change for the non-resident co-owner:
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Resident co-owner</th>
            <th>NRI co-owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TDS on cash from the developer</td>
            <td>10% under section 194-IC of the 1961 Act, which covers payments to residents only</td>
            <td>TDS on payments to non-residents: section 195 of the 1961 Act, section 393(2) of the 2025 Act, at the rate for the capital gain plus surcharge and cess</td>
          </tr>
          <tr>
            <td>Flats received in kind</td>
            <td>Expressly outside the JDA TDS provision</td>
            <td>The express carve-out for consideration in kind is in the provision for residents; agree the TDS treatment with the developer in writing</td>
          </tr>
          <tr>
            <td>Rate on long-term gain</td>
            <td>Lower of 12.5% without indexation or 20% with indexation, for land acquired before 23 July 2024</td>
            <td>12.5% without indexation; the indexation option is limited to resident individuals and HUFs</td>
          </tr>
          <tr>
            <td>Lower or nil TDS certificate</td>
            <td>Available, but the 10% rate usually leaves less excess</td>
            <td>Often worth applying: Form 13 under section 197 for the 1961 Act, Form 128 under section 395 from 1 April 2026</td>
          </tr>
          <tr>
            <td>Where money is received</td>
            <td>Resident savings or current account</td>
            <td>NRO account in India</td>
          </tr>
          <tr>
            <td>Sending money abroad</td>
            <td>Not applicable</td>
            <td>Up to USD 1 million per financial year from NRO balances, after Form 15CA and, where required, the CA&apos;s Form 15CB; these are Form 145 and Form 146 from 1 April 2026</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two practical points follow. First, TDS on the cash component rarely covers the tax on the whole gain,
        because most of the consideration is the flats, so the NRI co-owner needs to pay advance tax in the
        completion year and file an Indian return for it. Second, when the NRI later sells a flat received under
        the JDA, the buyer deducts TDS on the sale price under the non-resident provision, so a lower-deduction
        certificate is worth considering again at that stage. Our{" "}
        <Link href="/tools/nri-property-sale-tds-calculator">NRI property sale TDS calculator</Link>{" "}
        shows the difference, and our{" "}
        <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB service</Link>{" "}
        covers the remittance step.
      </p>
      <p>
        Under India&apos;s tax treaties, gains from immovable property situated in India can be taxed in India,
        so the co-owner&apos;s country of residence, such as the UK, US or Canada, applies its own rules on
        whether and when to give credit for the Indian tax. Keep the Indian return, the TDS certificates and the
        advance tax challans for that claim. The renumbered sections and forms are listed in our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">Income-tax Act 2025 section mapping</Link>.
      </p>

      <h2>What should families check before signing a JDA?</h2>
      <ul>
        <li>Register the JDA; the completion-year rule depends on a registered agreement.</li>
        <li>Record each co-owner&apos;s share and each one&apos;s PAN; NRI co-owners face different TDS and repatriation rules (see{" "}
          <Link href="/nri-property-sale-tds-chennai">NRI property sale TDS</Link>).</li>
        <li>Collect cost evidence: original purchase deed, or the previous owner&apos;s deed for inherited property, and improvement bills.</li>
        <li>Agree in writing who pays GST and when the developer will hand over the completion certificate.</li>
        <li>Plan the reinvestment exemption and its timelines before completion, not after.</li>
        <li>Avoid transferring your entitlement before completion unless the tax cost of doing so has been worked out.</li>
      </ul>
      <p>
        We advise redevelopment families in{" "}
        R A Puram,{" "}
        Gopalapuram{" "}
        and across central Chennai as part of our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai">income tax planning for HNIs and families</Link>.
        Meetings take place at our Anna Nagar office or by video call. To review
        a draft JDA before it is signed,{" "}
        <Link href="/contact">contact us</Link>.
      </p>
    </>
  );
}
