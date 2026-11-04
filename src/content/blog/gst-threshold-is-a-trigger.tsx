import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-threshold-is-a-trigger",
  title: "The GST Threshold Isn't a Safe Zone — It's a Trigger",
  description:
    "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
  date: "2026-09-26",
  excerpt:
    "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
  summary:
    "The GST registration threshold is a trigger, not a permanent exemption. Turnover is tracked on a continuous financial-year basis, so registration is due from the month you cross it. Inter-state supply of goods, certain agency arrangements and some e-commerce sales can require registration even below the threshold.",
  faqs: [
    {
      question: "Is being below the GST threshold a permanent exemption?",
      answer:
        "No. The threshold, such as forty lakh rupees for goods or twenty lakh for services, is a trigger and not a permanent exemption. Treating it as a line to stay under indefinitely is where the real risk begins, because a business that crosses it becomes liable to register from that point.",
    },
    {
      question: "When must I register after crossing the GST threshold?",
      answer:
        "Aggregate turnover is tracked on a continuous financial-year basis, not only at year end. A business that crosses the threshold in month seven is liable to apply for registration from that point, not from the following April. Checking turnover only once a year often reveals the line was crossed months earlier.",
    },
    {
      question: "Can I need GST registration even below the turnover threshold?",
      answer:
        "Yes. Inter-state supply of goods, specific agency arrangements and e-commerce sales through certain platforms can require registration even for a business well under the standard threshold. Inter-state supply of services alone is exempt below the threshold. The statement that you are too small for GST holds only if none of these triggers applies.",
    },
    {
      question: "What is the penalty for registering late for GST?",
      answer:
        "Operating without registration after crossing the threshold exposes the business to penalties and interest calculated from the date registration should have happened, not the date it actually occurred. The cost therefore compounds the longer the gap goes unnoticed, which is why monitoring turnover through the year matters.",
    },
  ],
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
        Aggregate turnover for GST threshold purposes is tracked on a continuous, financial-year basis, not just at year-end. A business that crosses the threshold in month seven is liable to apply for <Link href="/gst-registration-chennai">GST registration</Link> from that point, not from the following April. Businesses that only check their turnover once a year, at filing time, often discover they crossed the line months earlier than they registered.
      </p>

      <h2>Certain triggers apply regardless of turnover</h2>

      <p>
        Inter-state supply of goods (inter-state supply of services alone is exempt from registration below the threshold), specific agency arrangements, and e-commerce sales through certain platforms can require GST registration even for a business well under the standard threshold (the GST portal&apos;s <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer">registration help</a> covers the categories). &quot;I&apos;m too small for GST&quot; is only true if none of these specific triggers apply to how the business actually operates — not simply based on revenue.
      </p>

      <h2>What happens if registration is delayed past the trigger point</h2>

      <p>
        Operating without registration after crossing the threshold exposes the business to penalties and interest calculated from the date registration should have happened, not the date it actually occurred — meaning the cost compounds the longer the gap goes unnoticed.
      </p>

      <p>
        If you&apos;re close to the GST threshold or unsure whether a specific trigger already applies to your business, C S Rushil &amp; Co. can check your actual position as part of our <Link href="/goods-and-services-tax">GST services</Link>. Book a consultation.
      </p>
    </>
  );
}
