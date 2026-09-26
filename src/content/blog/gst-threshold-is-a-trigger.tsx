import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "gst-threshold-is-a-trigger",
  title: "The GST Threshold Isn't a Safe Zone — It's a Trigger",
  description:
    "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
  date: "2026-09-26",
  excerpt:
    "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
};

export default function Body() {
  return (
    <>
      <p>
        A lot of small business owners treat the GST registration threshold as a line to stay under indefinitely — as if being below ₹40 lakh (or ₹20 lakh for services) means GST simply doesn&apos;t apply to them. It&apos;s a trigger, not a permanent exemption, and treating it as the latter is where the actual risk starts.
      </p>

      <div className="mx-auto max-w-xs">
        <div className="aspect-[9/16] overflow-hidden rounded-cards border border-ash">
          <iframe
            src="https://www.instagram.com/reel/DWeSksGE6DS/embed"
            className="h-full w-full border-0"
            title="The GST threshold is not a safe zone. It is a trigger."
          />
        </div>
      </div>

      <h2>The threshold is checked on a rolling basis, not once a year</h2>

      <p>
        Aggregate turnover for GST threshold purposes is tracked on a continuous, financial-year basis, not just at year-end. A business that crosses the threshold in month seven is liable to register from that point, not from the following April. Businesses that only check their turnover once a year, at filing time, often discover they crossed the line months earlier than they registered.
      </p>

      <h2>Certain triggers apply regardless of turnover</h2>

      <p>
        Inter-state supply, specific agency arrangements, and e-commerce sales through certain platforms can require GST registration even for a business well under the standard threshold. &quot;I&apos;m too small for GST&quot; is only true if none of these specific triggers apply to how the business actually operates — not simply based on revenue.
      </p>

      <h2>What happens if registration is delayed past the trigger point</h2>

      <p>
        Operating without registration after crossing the threshold exposes the business to penalties and interest calculated from the date registration should have happened, not the date it actually occurred — meaning the cost compounds the longer the gap goes unnoticed.
      </p>

      <p>
        If you&apos;re close to the GST threshold or unsure whether a specific trigger already applies to your business, C S Rushil &amp; Co. can check your actual position. Book a free consultation.
      </p>
    </>
  );
}
