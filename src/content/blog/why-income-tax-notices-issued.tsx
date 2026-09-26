import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "why-income-tax-notices-issued",
  title: "Why Income Tax Notices Get Issued — the Actual Triggers, Not the Scary Stories",
  description:
    "An income tax notice usually means one specific, fixable data mismatch — not that you're in trouble. Here are the actual triggers behind most notices.",
  date: "2026-09-26",
  excerpt:
    "An income tax notice usually means one specific, fixable data mismatch — not that you're in trouble. Here are the actual triggers.",
};

export default function Body() {
  return (
    <>
      <p>
        Most people hear &quot;income tax notice&quot; and assume the worst. In practice, the large majority of notices are triggered by an automated system flagging a specific, identifiable mismatch — not a manual decision that you&apos;ve done something wrong. Knowing which trigger applies to your notice changes the entire conversation.
      </p>

      <div className="mx-auto max-w-xs">
        <div className="aspect-[9/16] overflow-hidden rounded-cards border border-ash">
          <iframe
            src="https://www.instagram.com/reel/DW_lo3Kk_hd/embed"
            className="h-full w-full border-0"
            title="Do you know why income tax notices are commonly issued?"
          />
        </div>
      </div>

      <h2>Income reported doesn&apos;t match Form 26AS or AIS</h2>

      <p>
        This is the most common trigger by far. Your employer, bank, or mutual fund house reports your income and TDS to the department, and the system automatically cross-checks this against what you declared in your return. A forgotten interest credit or an unreported capital gain shows up as a mismatch, generating a notice.
      </p>

      <h2>High-value transactions without a matching income profile</h2>

      <p>
        A large property purchase, a significant cash deposit, or substantial credit card spending that doesn&apos;t align with your declared income can trigger a notice asking you to explain the source — this is the department&apos;s data-matching system working as designed, not targeted scrutiny.
      </p>

      <h2>Non-filing despite reportable transactions</h2>

      <p>
        If TDS was deducted on your income, or you had transactions that appear in the department&apos;s data, but no return was filed at all, that gap itself is a common trigger — the system flags the absence of a filing as readily as it flags an inconsistency within one.
      </p>

      <h2>Random scrutiny selection, less common than assumed</h2>

      <p>
        A small percentage of returns get selected for detailed scrutiny based on risk parameters unrelated to any specific error — this exists, but it&apos;s a much smaller share of actual notices than the mismatch-driven ones above, despite being the version people worry about most.
      </p>

      <p>
        If you&apos;ve received a notice and aren&apos;t sure which of these it actually is, C S Rushil &amp; Co. can identify the real trigger and draft the correct response. Book a free consultation.
      </p>
    </>
  );
}
