import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "capital-gains-tax-property-sale",
  title: "Capital Gains Tax on Property Sale for Chennai Sellers",
  description:
    "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises first-time sellers — it depends heavily on holding period.",
  date: "2026-09-19",
  excerpt:
    "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises a lot of first time sellers, mainly because the...",
};

export default function Body() {
  return (
    <>
      <p>
        Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises a lot of first time sellers, mainly because the tax depends heavily on how long you held the property and what you do with the proceeds afterward.
      </p>

      <h2>Long term versus short term matters a great deal</h2>

      <p>
        If you held the property for more than twenty four months before selling, the gain is treated as long term. For transfers on or after 23 July 2024, long term gains are taxed at 12.5% without indexation (Section 197 of the Income-tax Act, 2025, earlier Section 112). If you are a resident individual or HUF and the land or building was acquired before 23 July 2024, the law lets you pay the lower of 12.5% without indexation or 20% with indexation; non-residents do not get this option. Sell before twenty four months and the gain is short term, added to your regular income, and taxed at your normal slab rate, which is almost always a worse outcome.
      </p>

      <h2>How indexation can still help you</h2>

      <p>
        Indexation uses the Cost Inflation Index published by the government each year to inflate your original purchase price to what it would roughly be worth in today&apos;s rupees. For a resident individual or HUF selling property acquired before 23 July 2024, a property bought a decade ago for a modest amount can show a much smaller taxable gain once indexation is applied, which is why it is worth computing the tax both ways and why holding period documentation and original purchase deed value matter so much.
      </p>

      <h2>Exemptions that can reduce or eliminate the tax</h2>

      <p>
        Section 82 of the Income-tax Act, 2025 (earlier Section 54) allows you to avoid tax on long term capital gains from a residential property if you reinvest the gain into another residential property within the specified time window. Section 85 (earlier Section 54EC) allows investment of up to ₹50 lakh in specified capital gains bonds instead, useful if you do not want to buy another property, but the bonds must be bought within six months after the date of sale. Both come with strict time limits and conditions on the type of property or bond, so the exemption needs to be claimed correctly, not just assumed.
      </p>

      <h2>Common mistakes sellers make</h2>

      <p>
        Not accounting for the full cost of improvements made to the property over the years, missing the reinvestment deadline for claiming Section 54 exemption, and underestimating the TDS that a buyer is required to deduct on property transactions above a certain value are the three issues that come up most often at <Link href="/income-tax-return-filing-chennai">income tax return filing</Link> time.
      </p>

      <h2>A short checklist before you sell</h2>

      <ul>
        <li>Confirm your exact holding period from the original purchase deed date</li>
        <li>Gather all documents for improvements or renovations that add to your cost base</li>
        <li>Decide before the sale whether you plan to reinvest under Section 54 or 54EC</li>
        <li>Check the TDS the buyer is required to deduct and ensure it is reflected correctly in your Form 26AS (see the <a href="https://www.incometax.gov.in/iec/foportal/help/e-filing-manage-tax-credit-mismatch-faq" target="_blank" rel="noopener noreferrer">income tax portal FAQ on tax credit mismatches</a>)</li>
      </ul>

      <p>
        If you are planning to sell property in Chennai and want the capital gains calculated correctly along with the right exemption claimed, C S Rushil &amp; Co. can walk through the numbers with you before the sale closes as part of our <Link href="/direct-tax">direct tax services</Link>. Reach out for a free consultation.
      </p>
    </>
  );
}
