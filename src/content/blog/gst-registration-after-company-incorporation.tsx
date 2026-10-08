import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-registration-after-company-incorporation",
  title: "GST Registration After Company Incorporation",
  description:
    "When a new company needs GST registration, the AGILE-PRO-S option at incorporation, Tamil Nadu thresholds, compulsory cases, documents and the process.",
  date: "2027-01-08",
  excerpt:
    "Your company is incorporated. Does it need GST now, later or never? Thresholds, compulsory cases, the AGILE-PRO-S option and the documents to keep ready.",
  faqs: [
    {
      question: "Is GST registration mandatory for every new private limited company?",
      answer:
        "No. GST registration depends on what the company supplies and how much, not on its legal form. A company becomes liable when its aggregate turnover crosses the threshold, or immediately if it falls into a compulsory category such as making inter-state taxable supplies of goods. A company can also register voluntarily before either applies.",
    },
    {
      question: "What are the GST registration thresholds in Tamil Nadu?",
      answer:
        "For a business supplying only goods in Tamil Nadu, registration is required once aggregate turnover exceeds ₹40 lakh in a financial year, subject to exclusions for certain goods. For services, or a mix of goods and services, the threshold is ₹20 lakh. Aggregate turnover is calculated across India for all supplies under the same PAN.",
    },
    {
      question: "Can I apply for GSTIN while incorporating the company?",
      answer:
        "Yes. AGILE-PRO-S, the linked form filed with SPICe+ Part B, gives an option to apply for GSTIN at incorporation. It is optional, unlike the EPFO and ESIC registrations and bank account opening, which are mandatory through the same form. The registered office in SPICe+ is used as the principal place of business for the GST application.",
    },
    {
      question: "How long do I have to apply after becoming liable for GST?",
      answer:
        "Under section 25 of the CGST Act, a person liable to register must apply within 30 days of becoming liable. If the application is made within that time, registration is effective from the date of liability. A late application makes registration effective only from the date of grant, leaving a gap in which tax is still payable.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Once the certificate of incorporation arrives, founders face a long
        list of registrations. GST is usually near the top, and the question is
        not just how to register but when. Register too early and the company
        takes on monthly or quarterly return obligations before it has any
        sales. Register too late and it may owe tax it never collected from
        customers.
      </p>

      <h2>When does a new company need GST registration?</h2>
      <p>
        Under section 22 of the CGST Act, a supplier must register in the state
        from which it makes taxable supplies once its aggregate turnover crosses
        the threshold. Aggregate turnover covers taxable, exempt and export
        supplies, and inter-state supplies, of all businesses under the same
        PAN across India.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type of supplier in Tamil Nadu</th>
            <th>Registration threshold (aggregate turnover)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exclusively goods (with exclusions such as certain tobacco and pan masala products)</td>
            <td>₹40 lakh</td>
          </tr>
          <tr>
            <td>Services, or goods and services together</td>
            <td>₹20 lakh</td>
          </tr>
        </tbody>
      </table>

      <h2>Which companies must register regardless of turnover?</h2>
      <p>
        Section 24 lists categories that must register even below the
        threshold. The ones most relevant to new companies are:
      </p>
      <ul>
        <li>Making inter-state taxable supplies of goods. Inter-state supplies of services have been exempted from compulsory registration below the threshold.</li>
        <li>Liable to pay tax under reverse charge.</li>
        <li>Supplying goods or services through an e-commerce operator that collects tax at source, subject to exemptions for small sellers.</li>
        <li>Acting as a casual taxable person, an input service distributor, or required to deduct or collect tax at source under GST.</li>
      </ul>
      <p>
        A trading company in Chennai that sells to a customer in Bengaluru
        needs registration from its first inter-state sale, even if its turnover
        is small. A Chennai software company billing only local clients may not
        need it until turnover crosses ₹20 lakh.
      </p>

      <h2>Should you register through AGILE-PRO-S at incorporation?</h2>
      <p>
        The{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/agile-pro-s-form.html" target="_blank" rel="noopener noreferrer">
          AGILE-PRO-S form
        </a>{" "}
        filed with SPICe+ Part B lets you apply for GSTIN as part of
        incorporation, with no separate fee. GSTIN is optional in that form,
        while EPFO and ESIC registration and bank account opening are
        mandatory. If you apply this way, the registered office becomes the
        principal place of business in the GST application.
      </p>
      <p>
        It makes sense to opt in if you know the company will need GST
        immediately: a trading business with inter-state customers, a
        manufacturer buying machinery on which it wants input tax credit, or a
        services company with large clients that insist on GST invoices. If the
        company will not have taxable sales for some months, applying
        separately later is usually more sensible.
      </p>

      <h2>Voluntary registration: pros and cons</h2>
      <ul>
        <li><strong>Input tax credit.</strong> Registration lets the company claim input tax credit on business purchases, which matters when set-up costs are significant.</li>
        <li><strong>Customer expectations.</strong> Many corporate buyers prefer or require registered vendors.</li>
        <li><strong>Return obligations.</strong> A registered company must file returns every period, including nil returns, and late filing attracts late fees.</li>
        <li><strong>Tax on every taxable sale.</strong> Once registered, GST applies from the first rupee of taxable supply, not just above the threshold.</li>
      </ul>

      <h2>Input tax credit on purchases made before registration</h2>
      <p>
        Section 18 of the CGST Act allows limited credit for the period before
        registration. A person who applies within 30 days of becoming liable
        can take credit on inputs held in stock, including inputs in
        semi-finished or finished goods, on the day immediately before the
        date from which tax becomes payable. A person who registers
        voluntarily can take credit on inputs held in stock on the day before
        the date of registration. Credit cannot be taken after one year from
        the date of the relevant tax invoice. Credit is not available in the
        same way for services consumed before registration, so a company with
        large set-up costs on services should weigh this when deciding when to
        register.
      </p>

      <h2>Should a new company consider the composition scheme?</h2>
      <p>
        Companies can opt for the composition scheme if they meet its
        conditions. It offers a lower, turnover-based rate and simpler returns,
        but the business cannot collect GST from customers, cannot claim input
        tax credit and cannot make inter-state outward supplies. Turnover
        limits apply, and the limit for service providers is lower than for
        goods suppliers. For most companies selling to other GST-registered
        businesses, composition is a poor fit, because customers lose the
        credit. It can suit a small business selling locally to consumers. The
        choice can be indicated in the GST application, including through the
        AGILE-PRO-S form.
      </p>

      <h2>What documents are needed?</h2>
      <ul>
        <li>PAN and certificate of incorporation of the company.</li>
        <li>Memorandum and Articles of Association.</li>
        <li>Board resolution authorising the authorised signatory.</li>
        <li>PAN, Aadhaar, photograph, email and mobile number of the directors and the authorised signatory.</li>
        <li>Proof of principal place of business: ownership document, rent or lease agreement, or consent letter, with a recent electricity bill or property tax receipt.</li>
        <li>Bank account details, which can be added after registration within the prescribed time.</li>
      </ul>

      <h2>How does the application work?</h2>
      <ol>
        <li>File Part A of Form GST REG-01 on the{" "}
          <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer">GST portal</a>{" "}
          with PAN, email and mobile, and verify with OTPs to get a temporary reference number.</li>
        <li>Complete Part B with business details, places of business, signatories and documents.</li>
        <li>Opt for Aadhaar authentication for the authorised signatory and directors. In some cases, biometric verification at a GST Suvidha Kendra may be required.</li>
        <li>The officer processes the application within the prescribed time, longer where physical verification of the premises is ordered.</li>
        <li>If the officer raises a query, reply within the time allowed with clarifications or documents.</li>
        <li>On approval, the registration certificate in Form GST REG-06 is available on the portal.</li>
      </ol>

      <h2>Why are GST applications queried?</h2>
      <p>
        Most queries on new company applications come down to a handful of
        avoidable issues:
      </p>
      <ul>
        <li>Address proof that does not match the address entered, or a rent agreement without the owner&apos;s identity and consent.</li>
        <li>An electricity bill or property tax receipt in a different name with no link to the rent agreement or consent letter.</li>
        <li>Missing board resolution for the authorised signatory.</li>
        <li>Unclear photographs, or Aadhaar authentication not completed for all required persons.</li>
        <li>Business activities and HSN or service codes that do not match the company&apos;s objects.</li>
      </ul>
      <p>
        Responding fully the first time matters. If the officer is not
        satisfied with the reply, the application can be rejected, and a
        fresh application then starts the clock again.
      </p>

      <h2>After registration</h2>
      <ul>
        <li>Display the GSTIN and registration certificate at the place of business.</li>
        <li>Issue tax invoices in the prescribed format from the effective date.</li>
        <li>Decide between monthly filing and the quarterly return scheme if eligible.</li>
        <li>For exporters, file a Letter of Undertaking before the first export invoice.</li>
        <li>Add additional places of business, including warehouses, by amendment.</li>
      </ul>
      <p>
        Our page on{" "}
        <Link href="/gst-registration-chennai">GST registration in Chennai</Link>{" "}
        covers the process in more detail, and GST sits alongside the company&apos;s{" "}
        <Link href="/roc-compliances">ROC compliances</Link> in the first year.
        If you have just incorporated and want to work out the right time to
        register, you can{" "}
        <Link href="/contact">speak with our team</Link>.
      </p>
    </>
  );
}
