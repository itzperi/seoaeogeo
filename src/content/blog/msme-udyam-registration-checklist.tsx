import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "msme-udyam-registration-checklist",
  title: "MSME (Udyam) Registration After Incorporation: A Founder's Checklist",
  description:
    "Should your newly incorporated company register under MSME/Udyam? Here's the eligibility, process, and benefits checklist.",
  date: "2026-11-04",
  excerpt:
    "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  faqs: [
    {
      question: "Is Udyam registration mandatory?",
      answer:
        "No, it's voluntary — but the benefits (delayed-payment protection, priority-sector lending, government tender eligibility) are significant enough that most eligible small and growing businesses register regardless.",
    },
    {
      question: "What documents are required for Udyam registration?",
      answer:
        "Only your Aadhaar (of the proprietor/managing partner/authorised signatory) and PAN of the business are required — the process is largely self-declaration based, with turnover and investment figures pulled from linked PAN/GST data where available.",
    },
    {
      question: "How long does Udyam registration take?",
      answer:
        "It's typically instant to same-day, since it's a fully online, self-declaration-based registration through the Udyam portal, unlike the more document-intensive older MSME registration process.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Udyam registration is one of the easiest, highest-leverage things a
        newly incorporated business can do — it&apos;s free, mostly instant,
        and unlocks real protections that most founders don&apos;t realise
        exist until they need them.
      </p>

      <h2>Are you eligible?</h2>
      <p>
        Eligibility is based on investment in plant/machinery or equipment, and
        annual turnover, classified into three tiers:
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Investment limit</th>
            <th>Turnover limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micro</td>
            <td>Up to ₹1 crore</td>
            <td>Up to ₹5 crore</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>Up to ₹10 crore</td>
            <td>Up to ₹50 crore</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>Up to ₹50 crore</td>
            <td>Up to ₹250 crore</td>
          </tr>
        </tbody>
      </table>
      <p>
        Most newly incorporated companies and startups fall comfortably in the
        Micro category in their first years of operation.
      </p>

      <h2>Why it&apos;s worth doing</h2>
      <ul>
        <li>
          <strong>Delayed payment protection:</strong> Buyers of goods/services
          from a Udyam-registered MSME must pay within 45 days, or interest
          accrues automatically under the MSME Development Act — a real
          enforcement mechanism for cash-flow-strapped small businesses.
        </li>
        <li>
          <strong>Priority-sector lending:</strong> Banks are required to
          direct a portion of lending to MSMEs, often at more favourable
          terms than standard commercial credit.
        </li>
        <li>
          <strong>Government tender eligibility:</strong> Many government
          tenders reserve a portion specifically for MSME bidders, and some
          waive tender fees or earnest money deposits for registered MSMEs.
        </li>
        <li>
          <strong>Subsidy and scheme access:</strong> Various state and
          central schemes (subsidised credit, technology upgrade support) are
          gated behind Udyam registration.
        </li>
      </ul>

      <h2>How to register</h2>
      <ol>
        <li>Go to the official Udyam Registration portal.</li>
        <li>Enter the Aadhaar number of the proprietor/managing partner/authorised director.</li>
        <li>Enter the business PAN — turnover and investment data is auto-fetched where linked to GST/ITR records.</li>
        <li>Verify and submit — you receive a Udyam Registration Certificate immediately.</li>
      </ol>

      <p>
        We recommend completing Udyam registration as part of your
        post-incorporation checklist, alongside opening your current account
        and filing INC-20A — see our full{" "}
        <a href="/private-limited-company-incorporation-chennai">
          incorporation guide
        </a>{" "}
        for the complete sequence.
      </p>
    </>
  );
}
