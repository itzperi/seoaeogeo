import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "itc-mismatch-notices",
  title: "Input Tax Credit Mismatch Notices: Why They Happen and How to Respond",
  description:
    "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to one simple...",
  date: "2026-09-19",
  excerpt:
    "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to...",
};

export default function Body() {
  return (
    <>
      <p>
        An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to one simple problem: what you claimed in your GSTR 3B does not match what your suppliers reported in their GSTR 1.
      </p>

      <h2>Why the mismatch happens in the first place</h2>

      <p>
        Your ITC claim depends entirely on your supplier filing their return correctly and on time. If a supplier delays their GSTR 1, files it with wrong figures, or simply stops filing altogether, the credit you claimed will not appear in your GSTR 2B, and the system flags the gap automatically. You did nothing wrong on your end, but you are still the one who gets the notice.
      </p>

      <h2>The most common causes, in order of frequency</h2>

      <p>
        1. Supplier has not filed their GSTR 1 for the relevant period yet
2. Supplier filed the invoice under the wrong GSTIN
3. Invoice value or tax amount entered incorrectly by the supplier
4. You claimed credit on an invoice that was later amended or cancelled
5. Genuine duplicate claim on your own books
      </p>

      <h2>How to respond once you receive the notice</h2>

      <p>
        Do not panic and do not immediately reverse the full amount. Start by pulling your GSTR 2B for the exact period in question and comparing it line by line against your purchase register. Identify exactly which invoices are causing the gap. For invoices where the supplier simply has not filed yet, you can usually explain the delay with proof of payment and the original invoice. For genuine errors on your side, the credit needs to be reversed along with applicable interest.
      </p>

      <h2>Talking to your supplier matters more than the notice itself</h2>

      <p>
        The fastest fix is often a phone call. Ask the supplier to check their GSTR 1 filing status and correct it in their next return if there was an error. Keep that communication in writing (even a simple email) since it becomes useful evidence if the department asks for it later.
      </p>

      <h2>What happens if you ignore it</h2>

      <p>
        An unanswered ITC mismatch notice typically escalates into a formal show cause notice with interest and penalty proposed. Responding within the given window, even with a partial explanation and a plan for the remainder, is always better than silence.
      </p>

      <p>
        If you have received a GST mismatch notice and are not sure how much of it is genuinely your liability versus a supplier filing delay, C S Rushil &amp; Co. reviews the reconciliation and drafts the response on your behalf. Reach out for a free consultation before the reply deadline passes.
      </p>
    </>
  );
}
