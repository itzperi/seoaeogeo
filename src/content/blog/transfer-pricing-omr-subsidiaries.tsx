import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "transfer-pricing-omr-subsidiaries",
  title: "The Transfer Pricing Blind Spot for OMR's Indian Subsidiaries",
  description:
    "IT subsidiaries along OMR paying management fees or royalties to a foreign parent often don't realize Form 3CEB applies from the very first transaction.",
  date: "2026-09-26",
  excerpt:
    "IT subsidiaries paying management fees or royalties to a foreign parent often don't realize Form 3CEB applies from the very first transaction.",
};

export default function Body() {
  return (
    <>
      <p>
        An IT services subsidiary along OMR, set up two years ago as the Indian arm of a US-based parent, had never filed Form 3CEB. The finance team assumed transfer pricing rules only mattered once the company hit a certain revenue scale &mdash; it doesn&apos;t work that way for international transactions.
      </p>

      <h2>There&apos;s no minimum value for an international transaction</h2>

      <p>
        Unlike specified domestic transactions, which only trigger transfer pricing rules above a prescribed threshold, any international transaction with an associated enterprise &mdash; a foreign parent, group company, or related entity &mdash; triggers the requirement regardless of value. A subsidiary paying even a modest management fee or royalty to its parent in year one is already within scope.
      </p>

      <h2>Why OMR specifically sees this gap</h2>

      <p>
        OMR&apos;s concentration of IT subsidiaries and startups with foreign investors or parent companies means intercompany transactions &mdash; software licensing, management fees, cost allocations &mdash; are routine here in a way they aren&apos;t for a typical domestic services business. That routineness is exactly why it gets overlooked: it doesn&apos;t feel like a special transaction requiring special compliance, even though it is one.
      </p>

      <h2>What early compliance actually looks like</h2>

      <p>
        Documenting the arm&apos;s-length basis for each intercompany transaction from the start &mdash; rather than reconstructing it retroactively once the company is larger and the transaction history longer &mdash; is meaningfully less work and avoids the penalty exposure that comes with an undocumented history if the transaction pattern is later scrutinised.
      </p>

      <p>
        If your OMR-based subsidiary has intercompany transactions with a foreign parent and hasn&apos;t filed Form 3CEB, C S Rushil &amp; Co. can assess your actual exposure and get documentation in place. Book a free consultation.
      </p>
    </>
  );
}
