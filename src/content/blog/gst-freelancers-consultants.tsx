import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-freelancers-consultants",
  title: "GST on Freelancers and Consultants: Do You Need to Register?",
  description:
    "When freelance designers, consultants and developers in Chennai need GST registration, how export of services under LUT works, and what returns follow.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "When freelance designers, consultants and developers in Chennai need GST registration, how export of services under LUT works, and what returns follow.",
  summary:
    "Freelancers and consultants in Tamil Nadu must register for GST once aggregate turnover in a financial year crosses ₹20 lakh, counted across all clients and including export receipts. Out-of-state clients alone do not force registration below that limit. Most professional services attract 18% GST, and exporters of services usually register and file an LUT.",
  faqs: [
    {
      question: "At what income do freelancers need to register for GST?",
      answer:
        "In Tamil Nadu, GST registration becomes mandatory once aggregate turnover from services crosses ₹20 lakh in a financial year. This is lower than the ₹40 lakh limit for businesses supplying only goods. It is calculated on total receipts across all your work, including export invoices, not per client, and excludes salary from an employer.",
    },
    {
      question: "Do I need GST registration if my clients are in another state?",
      answer:
        "Not necessarily. Notification 10/2017-Integrated Tax exempts service providers from registering as long as their all-India aggregate turnover stays within ₹20 lakh, so out-of-state clients alone do not force registration. A different trigger, such as selling goods to other states or reverse charge liability, can still require it, so check your setup.",
    },
    {
      question: "What GST rate applies to freelance services?",
      answer:
        "Most professional and consulting services attract 18% GST: CGST 9% and SGST 9% for a client in Tamil Nadu, or IGST 18% for a client in another state. Once registered, tax is charged on top of your fee and reported in GSTR-1 and GSTR-3B, so agree with clients in advance how invoices will change.",
    },
    {
      question: "Do I charge GST to foreign clients?",
      answer:
        "Not if the work qualifies as an export of services: you are in India, the client is outside India, the place of supply is outside India and payment is received in convertible foreign exchange (or in rupees where RBI permits). With a Letter of Undertaking in Form RFD-11, you invoice without IGST and can claim refunds of input credit.",
    },
    {
      question: "Is the composition scheme good for freelancers?",
      answer:
        "Usually not. Service providers can opt for it under Section 10(2A) if the previous year's turnover was within ₹50 lakh, paying 6% on turnover. But they cannot supply to other states, cannot claim input credit and cannot charge tax on invoices, which suits few freelancers with out-of-state or business clients.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A freelancer or consultant in Tamil Nadu must register for GST once aggregate turnover crosses ₹20 lakh in a financial year, counted across all clients and including export receipts. Below that, registration is optional unless a specific trigger applies. Once registered, you charge 18% on most professional services and file monthly or quarterly returns.
      </p>

      <h2>What turnover limit applies to freelancers in Tamil Nadu?</h2>

      <p>
        For services, which covers most freelance design, development, writing and consulting work, <Link href="/gst-registration-chennai">GST registration</Link> becomes mandatory once aggregate turnover in a financial year crosses ₹20 lakh (see the GST portal&apos;s <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer">registration help</a>). The higher ₹40 lakh limit applies only to businesses supplying goods alone, so a freelancer who also sells a few products is still on the ₹20 lakh limit.
      </p>

      <p>
        Aggregate turnover is worked out on your PAN across India. It includes taxable supplies, exempt supplies, exports and supplies to other states, and it excludes the GST itself. Salary from an employer is not a supply, so a salaried professional who freelances on the side counts only the freelance receipts. Commercial rent you receive, on the other hand, is a taxable supply and does count. Once you cross the limit, the application is due within 30 days. If you apply in time, registration takes effect from the date you became liable.
      </p>

      <h2>Do payments from foreign clients count toward the ₹20 lakh?</h2>

      <p>
        Yes. Exports are part of aggregate turnover even though they carry no tax. A developer billing only overseas clients crosses the threshold in exactly the same way as one billing Chennai companies. Under Section 2(6) of the IGST Act, a supply is an export of services when all of these hold:
      </p>

      <ul>
        <li>You, the supplier, are located in India.</li>
        <li>The client is located outside India.</li>
        <li>The place of supply is outside India.</li>
        <li>Payment is received in convertible foreign exchange, or in Indian rupees where RBI permits.</li>
        <li>You and the client are not merely two establishments of the same person.</li>
      </ul>

      <p>
        Qualifying exports are zero-rated. With a Letter of Undertaking filed for the year, you invoice without IGST and can claim a refund of the input credit on your software, equipment and subcontractor bills. Our guide to the{" "}
        <Link href="/blog/lut-for-exporters">LUT for exporters</Link> covers the filing step by step.
      </p>

      <h2>When is registration needed even below the threshold?</h2>

      <p>
        A client in another state makes the supply inter-State. Inter-State supply of goods needs registration whatever the turnover, but for services Notification 10/2017-Integrated Tax exempts providers whose all-India aggregate turnover stays within ₹20 lakh. Out-of-state clients alone therefore do not force you to register. What can force it is a separate trigger under Section 24 of the CGST Act, such as also selling goods to other states or being liable to pay tax under reverse charge.
      </p>

      <p>
        Some freelancers register voluntarily before the threshold because a large client or a platform will only pay a GST-registered vendor, or because they want input credit on expensive equipment. That is a legitimate choice, but once registered you must file every return on time, including months with no billing.
      </p>

      <h2>Which GST rate applies, and how does it appear on the invoice?</h2>

      <p>
        Most professional and consulting services attract 18% GST. How it is shown depends on where the client is:
      </p>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Tax on the invoice</th>
            <th>Practical note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Business or individual in Tamil Nadu</td>
            <td>CGST 9% and SGST 9%</td>
            <td>A registered business client can claim this as input credit.</td>
          </tr>
          <tr>
            <td>Client in another state</td>
            <td>IGST 18%</td>
            <td>The place of supply is usually the registered client&apos;s location.</td>
          </tr>
          <tr>
            <td>Client outside India meeting the export conditions</td>
            <td>No IGST, under an LUT</td>
            <td>The invoice should state that the supply is made under LUT without payment of IGST.</td>
          </tr>
          <tr>
            <td>Client outside India, conditions not met</td>
            <td>GST as a domestic supply</td>
            <td>Usually because the payment came in rupees or the place of supply is in India.</td>
          </tr>
        </tbody>
      </table>

      <p>
        For registered business clients, GST is generally neutral because they recover it as credit. For individual clients it is a real increase in price, which is why the conversation is worth having before you cross the threshold, not after.
      </p>

      <h2>What returns does a registered freelancer file?</h2>

      <p>
        A regular taxpayer files GSTR-1 (sales) and GSTR-3B (summary and payment) every month, by the 11th and the 20th. If turnover is up to ₹5 crore you can choose the quarterly QRMP scheme instead: GSTR-1 and GSTR-3B are filed quarterly, with tax paid monthly through Form PMT-06 by the 25th. In Tamil Nadu, the quarterly GSTR-3B is due by the 22nd of the month after the quarter. An annual return in GSTR-9 follows, though small taxpayers have been exempted in recent years by notification. Our{" "}
        <Link href="/gst-return-filing-for-freelancers">GST return filing for freelancers</Link> page explains how this works for independent professionals, and general{" "}
        <Link href="/gst-return-filing-chennai">GST return filing</Link> covers businesses of every size.
      </p>

      <h2>Is the composition scheme useful for freelancers?</h2>

      <p>
        Service providers can opt for composition under Section 10(2A) of the CGST Act if their previous year&apos;s turnover was within ₹50 lakh, paying 6% on turnover with lighter returns. The catch is significant: no supplies to other states, no input credit, and a bill of supply instead of a tax invoice, so business clients cannot claim credit. That makes it a poor fit for freelancers who buy software subscriptions, hire subcontractors or work with clients outside Tamil Nadu.
      </p>

      <h2>What does registering involve?</h2>

      <p>
        The application is made in Form GST REG-01 on gst.gov.in. You need your PAN, Aadhaar authentication, a photograph, proof of your place of business (for a home office, ownership proof or a rent agreement with the owner&apos;s consent) and bank account details. If registration is granted after the date you became liable, you can issue revised tax invoices for the gap period within one month of receiving the certificate.
      </p>

      <h2>A simple decision checklist</h2>

      <ul>
        <li>Add up all freelance, consulting and export receipts for the current financial year so far.</li>
        <li>If the total is approaching ₹20 lakh, start registration now rather than after crossing it.</li>
        <li>Remember that the interstate services exemption counts your all-India turnover.</li>
        <li>If most clients are overseas, plan registration and an LUT together so export invoices go out without tax.</li>
        <li>Decide between monthly filing and QRMP before your first return is due.</li>
      </ul>

      <p>
        If you are a freelancer or consultant in Chennai unsure whether GST registration applies to you yet, C S Rushil &amp; Co. can review your income pattern and client mix and tell you plainly whether you need to register now or can wait. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
