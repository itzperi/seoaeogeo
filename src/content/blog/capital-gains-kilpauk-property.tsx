import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "capital-gains-kilpauk-property",
  title: "Selling Property in Kilpauk? How Holding Period Affects Tax",
  description:
    "Kilpauk's older, high-value residential properties often trigger a bigger capital gains surprise than sellers expect, tied entirely to how long it was held.",
  date: "2026-09-26",
  excerpt:
    "Kilpauk's older, high-value residential properties often trigger a bigger capital gains surprise, tied entirely to how long it was held.",
};

export default function Body() {
  return (
    <>
      <p>
        Kilpauk has a lot of long-held family properties &mdash; homes bought decades ago that have appreciated well beyond what the original owners paid. When a family finally sells one, the capital gains number often comes as a genuine shock, and it usually traces back to one thing: how long the property was actually held.
      </p>

      <h2>Long-term versus short-term isn&apos;t just a label</h2>

      <p>
        Property held for more than 24 months qualifies as a long-term capital asset, taxed differently from a short-term holding. For transfers on or after 23 July 2024, long-term gains are taxed at 12.5% without indexation, but resident individuals and HUFs selling land or buildings acquired before that date can instead pay 20% with indexation if that works out lower (non-residents don&apos;t get this choice). For property acquired before 1 April 2001, the cost can also be taken as the fair market value on that date (capped at the stamp duty value on that date). For a decades-old Kilpauk property, these adjustments can change the taxable gain substantially compared to a naive current-value-minus-purchase-price calculation.
      </p>

      <h2>Reinvestment can defer the tax, but the timeline is strict</h2>

      <p>
        Sections 54 and 54EC allow the gain to be deferred by reinvesting in another residential property or specified bonds, but both come with fixed windows &mdash; a house purchase can fall within a set period before or after the sale, while Section 54EC bonds (Section 85 of the Income-tax Act, 2025) must be bought within six months after the sale, never before. Sellers who assume they have flexible timing often miss the window entirely and lose the deferral option after the fact.
      </p>

      <h2>What to check before you sign the sale deed</h2>

      <p>
        The three numbers that actually determine your liability &mdash; the acquisition date, the applicable valuation method, and whether a reinvestment plan is realistic within the deadline &mdash; are worth confirming before the sale closes (and before you <Link href="/income-tax-return-filing-chennai">file your income tax return</Link> for that year), not after, since some of the tax-saving options genuinely stop being available once the transaction is complete.
      </p>

      <p>
        If you&apos;re selling a property in Kilpauk and want the actual capital gains number calculated properly before you commit to a sale price, C S Rushil &amp; Co. can run this for you as part of our <Link href="/direct-tax">direct tax advisory</Link>. Book a free consultation.
      </p>
    </>
  );
}
