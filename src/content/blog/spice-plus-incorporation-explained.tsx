import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "spice-plus-incorporation-explained",
  title: "SPICe+ vs. the Old MCA Incorporation Process: What Changed",
  description:
    "How SPICe+ replaced the older multi-form MCA incorporation process, and what it means for Chennai founders registering a company today.",
  date: "2026-10-07",
  excerpt:
    "SPICe+ folded incorporation, PAN, TAN, EPFO, ESIC, and profession tax registration into a single form. Here's what actually changed.",
  faqs: [
    {
      question: "Is SPICe+ mandatory for all company incorporations?",
      answer:
        "Yes. SPICe+ (INC-32) is now the only route for incorporating a company through the MCA — the older standalone INC-7 process has been discontinued.",
    },
    {
      question: "Does SPICe+ include GST registration?",
      answer:
        "No — GST registration is optional at incorporation via the AGILE-PRO-S linked form, but many founders still apply for GST separately once they're closer to actually needing it, since voluntary early registration adds return-filing obligations immediately.",
    },
    {
      question: "Can I reserve a company name before filing SPICe+?",
      answer:
        "Yes, Part A of SPICe+ lets you reserve a name for 20 days before proceeding to Part B (the actual incorporation filing), or you can file both parts together if you're confident in your chosen name's availability.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        If you incorporated a company in India before 2020, you likely remember a
        process involving several separate forms — DIR-3 for director
        identification, INC-7 for incorporation, INC-22 for registered office,
        and separate applications for PAN and TAN. SPICe+ replaced all of that
        with a single integrated form. Here&apos;s what actually changed for
        Chennai founders incorporating today.
      </p>

      <h2>What SPICe+ actually is</h2>
      <p>
        SPICe+ (Simplified Proforma for Incorporating a Company Electronically
        Plus) is a single web-based form split into two parts. Part A handles
        name reservation. Part B handles the incorporation application itself,
        along with linked forms for PAN, TAN, EPFO registration, ESIC
        registration, Profession Tax registration (in applicable states), and
        opening a bank account — all submitted together rather than as separate,
        sequential applications.
      </p>

      <h2>Before vs. after: what changed</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Before (pre-2020)</th>
            <th>With SPICe+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name reservation</td>
            <td>Separate INC-1 filing</td>
            <td>SPICe+ Part A</td>
          </tr>
          <tr>
            <td>Incorporation</td>
            <td>INC-7 + supporting forms</td>
            <td>SPICe+ Part B</td>
          </tr>
          <tr>
            <td>PAN &amp; TAN</td>
            <td>Applied separately after incorporation</td>
            <td>Auto-generated with incorporation, no separate application</td>
          </tr>
          <tr>
            <td>EPFO / ESIC registration</td>
            <td>Separate post-incorporation applications</td>
            <td>Included in SPICe+ filing via linked forms</td>
          </tr>
          <tr>
            <td>Typical timeline</td>
            <td>3–5 weeks across multiple approvals</td>
            <td>7–12 working days as a single integrated approval</td>
          </tr>
        </tbody>
      </table>

      <h2>What hasn&apos;t changed</h2>
      <ul>
        <li>You still need Digital Signature Certificates (DSC) for all proposed directors before filing.</li>
        <li>Name availability rules are the same — no conflict with existing companies, trademarks, or prohibited words.</li>
        <li>Drafting the Memorandum and Articles of Association (MoA/AoA) is still required, now submitted as e-MoA/e-AoA within the same form.</li>
      </ul>

      <h2>Practical implication for Chennai founders</h2>
      <p>
        The consolidation means fewer separate touchpoints with the MCA, but it
        also means a single rejection (e.g. a name conflict or incomplete
        director KYC) can delay the entire bundle rather than just one form.
        Getting documentation right before filing matters more now, not less —
        see our full walkthrough on{" "}
        <a href="/private-limited-company-incorporation-chennai">
          Private Limited Company Incorporation in Chennai
        </a>{" "}
        for the complete document checklist and step-by-step process.
      </p>
    </>
  );
}
