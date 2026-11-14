import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-threshold-is-a-trigger",
  title: "The GST Threshold Isn't a Safe Zone: It's a Trigger",
  description:
    "Staying just under the GST registration threshold feels safe, but crossing it is a trigger to register, not an exemption. How to watch the limit and act.",
  date: "2026-09-26",
  updated: "2026-11-14",
  excerpt:
    "Staying just under the GST registration threshold feels safe, but crossing it is a trigger to register, not an exemption. How to watch the limit and act.",
  summary:
    "The GST registration threshold is a trigger, not a permanent exemption. In Tamil Nadu it is ₹40 lakh for businesses supplying only goods and ₹20 lakh for services, counted through the financial year, and the application is due within 30 days of crossing it. Inter-State supply of goods and reverse charge liability need registration at any turnover.",
  faqs: [
    {
      question: "Is being below the GST threshold a permanent exemption?",
      answer:
        "No. The threshold, ₹40 lakh for goods or ₹20 lakh for services in Tamil Nadu, is a trigger and not a permanent exemption. Treating it as a line to stay under indefinitely is where the real risk begins, because a business that crosses it becomes liable to register from that point, part way through the year.",
    },
    {
      question: "When must I register after crossing the GST threshold?",
      answer:
        "Within 30 days of the day aggregate turnover crosses the limit. Turnover is tracked through the financial year, so a business that crosses it in October must apply then, not the following April. If you apply within 30 days, registration takes effect from the date you became liable; otherwise it runs only from the date of grant.",
    },
    {
      question: "Can I need GST registration even below the turnover threshold?",
      answer:
        "Yes. Section 24 of the CGST Act requires registration at any turnover for inter-State supply of goods, liability under reverse charge, casual and non-resident taxable persons, agents supplying for others and most sellers of goods through e-commerce operators. Inter-State supply of services alone does not force registration below the threshold.",
    },
    {
      question: "What is the penalty for registering late for GST?",
      answer:
        "Tax is payable on taxable supplies from the date you became liable, even if you never charged it, with interest at 18% a year. Section 122 also provides a penalty of ₹10,000 or the tax evaded, whichever is higher, for a person liable to register who fails to do so. The cost grows the longer the gap continues.",
    },
    {
      question: "What counts towards aggregate turnover for GST?",
      answer:
        "All taxable supplies, exempt supplies, exports and inter-State supplies made on the same PAN across India, valued without the GST itself. Purchases on which you pay tax under reverse charge are excluded. Salary from an employer is not a supply. Branches in different states with the same PAN are added together.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The GST threshold is a trigger, not a safe zone. In Tamil Nadu, a business supplying only goods must register once aggregate turnover crosses ₹40 lakh in a financial year, and a service business at ₹20 lakh. The application is due within 30 days, and some activities need registration whatever the turnover.
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

      <p>
        Many small business owners treat the threshold as a line to stay under indefinitely, as if being below it means GST simply does not apply to them. That works only until the month turnover crosses it, and most businesses that register late do so because nobody was watching the running total.
      </p>

      <h2>What are the GST registration thresholds in Tamil Nadu?</h2>

      <table>
        <thead>
          <tr>
            <th>Type of business</th>
            <th>Threshold (aggregate turnover in a financial year)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supplying only goods</td>
            <td>₹40 lakh</td>
          </tr>
          <tr>
            <td>Supplying services, or both goods and services</td>
            <td>₹20 lakh</td>
          </tr>
          <tr>
            <td>Manufacturers of ice cream, pan masala or tobacco products</td>
            <td>₹20 lakh (the higher goods limit does not apply)</td>
          </tr>
          <tr>
            <td>Activities listed in Section 24 of the CGST Act</td>
            <td>No threshold: registration is compulsory</td>
          </tr>
        </tbody>
      </table>

      <p>
        A business that sells goods but also earns even a small amount from services, such as installation charges or commercial rent, falls on the ₹20 lakh limit, not ₹40 lakh. This catches many traders who assume the goods limit applies to them.
      </p>

      <h2>How is aggregate turnover worked out?</h2>

      <p>
        Aggregate turnover is calculated on your PAN across India, not per shop or per state. It includes:
      </p>

      <ul>
        <li>Taxable supplies within Tamil Nadu and to other states.</li>
        <li>Exempt supplies, such as sales of goods that carry no GST.</li>
        <li>Exports of goods and services, even though they are zero-rated.</li>
      </ul>

      <p>
        It excludes the GST itself and purchases on which you pay tax under reverse charge. A business with no exempt sales may therefore have a higher aggregate turnover than its taxable sales suggest, because exports and exempt items are added in.
      </p>

      <h2>Why is the threshold checked through the year, not at year end?</h2>

      <p>
        Section 22 of the CGST Act makes a business liable to register once its turnover in a financial year exceeds the limit, and Section 25 gives 30 days from that date to apply for <Link href="/gst-registration-chennai">GST registration</Link>. A business that crosses ₹20 lakh of service income in October must apply in October or November, not the following April. If the application is made within the 30 days, registration takes effect from the date of liability. If it is made later, registration runs only from the date it is granted, and the gap in between becomes the problem.
      </p>

      <p>
        Businesses that check turnover only once a year, at income tax filing time, often discover they crossed the line months before they registered. The counting also restarts each April, but a business that has crossed the threshold stays registered; it does not drop out because the next year starts slowly.
      </p>

      <h2>Which activities need registration whatever the turnover?</h2>

      <p>
        Section 24 lists categories that must register from the first rupee (the GST portal&apos;s <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer">registration help</a> sets out the forms for each):
      </p>

      <ul>
        <li>Inter-State taxable supplies of goods. Inter-State supply of services alone is exempt below the threshold.</li>
        <li>Persons liable to pay tax under reverse charge.</li>
        <li>Casual taxable persons and non-resident taxable persons.</li>
        <li>Agents who supply on behalf of other registered persons.</li>
        <li>Input service distributors, and persons required to deduct or collect tax at source under GST.</li>
        <li>Sellers of goods through e-commerce operators, subject to a limited relaxation for small sellers supplying only within the state.</li>
      </ul>

      <p>
        &quot;I&apos;m too small for GST&quot; is only true if none of these triggers apply to how the business actually operates. Revenue alone does not decide it.
      </p>

      <h2>What happens if registration is delayed past the trigger point?</h2>

      <p>
        The cost is counted from the date registration should have happened, not the date it did:
      </p>

      <ul>
        <li><strong>Tax on past sales:</strong> GST is due on taxable supplies from the date of liability. If you did not charge it, you usually cannot recover it from past customers, so the tax comes out of your margin.</li>
        <li><strong>Interest:</strong> 18% a year under Section 50 on tax paid late.</li>
        <li><strong>Penalty:</strong> Section 122 provides a penalty of ₹10,000 or the tax evaded, whichever is higher, for a person liable to register who does not.</li>
        <li><strong>Lost credit:</strong> input tax credit on stock held on the day before liability can be claimed only if the application is made within the 30 days.</li>
      </ul>

      <p>
        Registering on time limits the damage. You can then issue revised tax invoices, within one month of the registration certificate, for supplies made between the date of liability and the date of grant.
      </p>

      <h2>How do you watch the threshold month by month?</h2>

      <ol>
        <li>Keep a running total of all receipts on your PAN for the financial year, updated monthly from your books.</li>
        <li>Include exports, exempt sales and every branch, not just taxable sales from the main shop.</li>
        <li>Set an alert at around three quarters of the relevant limit, so you have time to prepare.</li>
        <li>Keep PAN, Aadhaar, address proof of the business premises and bank details ready, so the application in Form REG-01 can be filed within days of crossing.</li>
        <li>Review the Section 24 list whenever you start something new, such as selling online or buying from abroad.</li>
      </ol>

      <h2>Should you register voluntarily before the threshold?</h2>

      <p>
        Section 25(3) allows voluntary registration. It suits businesses that sell to GST-registered customers who want credit, buy from registered suppliers and want credit themselves, or deal with marketplaces and large clients that insist on a GSTIN. The trade-off is that every return must then be filed on time, even in months with no sales, through regular{" "}
        <Link href="/gst-return-filing-chennai">GST return filing</Link>. Freelancers weighing this choice can read our guide to{" "}
        <Link href="/blog/gst-freelancers-consultants">GST for freelancers and consultants</Link>, and new companies can read{" "}
        <Link href="/blog/gst-registration-after-company-incorporation">GST registration after company incorporation</Link>.
      </p>

      <p>
        If you are close to the GST threshold or unsure whether a specific trigger already applies to your business, C S Rushil &amp; Co. can check your actual position as part of our <Link href="/goods-and-services-tax">GST services</Link>. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
