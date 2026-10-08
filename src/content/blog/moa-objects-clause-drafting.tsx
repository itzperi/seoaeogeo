import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "moa-objects-clause-drafting",
  title: "Drafting the MoA Objects Clause: A Founder's Guide",
  description:
    "How to write the main objects in a company's MoA, why vague objects cause trouble with banks, GST and licences, and how to alter the objects clause later.",
  date: "2026-11-10",
  excerpt:
    "The objects clause decides what your company can do. Here is how to draft main objects that satisfy the MCA, banks, GST and licensing authorities.",
  faqs: [
    {
      question: "What is the objects clause in a Memorandum of Association?",
      answer:
        "The objects clause states the purposes for which the company is incorporated, together with matters necessary to further those purposes. Section 4(1)(c) of the Companies Act, 2013 requires every MoA to contain it. In SPICe+, the objects are prefilled from the NIC code description chosen in Part A and can then be refined in the e-MoA.",
    },
    {
      question: "Can a company do business outside its stated objects?",
      answer:
        "It should not. Activities clearly outside the objects clause create problems with banks, GST officers and licensing authorities, who check the MoA, and the company's capacity to act may be questioned. If the business changes direction, the safer course is to alter the objects clause by special resolution and have the alteration registered by the Registrar first.",
    },
    {
      question: "How do I change the objects clause after incorporation?",
      answer:
        "Pass a special resolution of the shareholders under section 13 of the Companies Act, 2013, then file it with the Registrar in form MGT-14 within 30 days under section 117, along with the altered MoA. Under section 13(9), the Registrar registers the alteration and certifies it within 30 days, and it has no effect until registered.",
    },
    {
      question: "Should I list many unrelated businesses to keep my options open?",
      answer:
        "Usually not. A long list of unrelated activities tends to attract queries from the Registrar, confuse banks during account opening, and complicate GST registration and licence applications. It is better to state one or two focused main objects that match your NIC code, with closely related activities, and to amend the clause if your business genuinely changes.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The objects clause is the part of the Memorandum of Association (MoA)
        that says what the company exists to do. Founders often copy a generic
        template or list every business they might ever enter. Both approaches
        cause problems later: queries during incorporation, difficult
        conversations with the bank, and mismatches with GST and licence
        applications. This post explains how the clause works in SPICe+ and how
        to draft it well.
      </p>

      <h2>What the law requires</h2>
      <p>
        Section 4(1)(c) of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        requires the MoA to state the objects for which the company is proposed
        to be incorporated and any matter considered necessary in furtherance of
        those objects. The MoA follows the format in Schedule I of the Act,
        which for a company limited by shares is Table A.
      </p>
      <p>
        In practice this produces two parts: the main objects to be pursued on
        incorporation, and matters necessary to further those objects, such as
        opening bank accounts, borrowing, acquiring property, entering into
        contracts and employing staff.
      </p>

      <h2>How SPICe+ handles the objects clause</h2>
      <p>
        According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>,
        the objects in the e-MoA are prefilled based on the description of the
        NIC code (National Industrial Classification) selected in SPICe+ Part A.
        The FAQs also caution that:
      </p>
      <ul>
        <li>The NIC code must match the objects of the proposed company</li>
        <li>Where the main objects include activities like insurance agency alongside other businesses, the in-principle approval of the regulator must be attached</li>
        <li>A name that suggests finance, investment, leasing or similar activities must be matched by such objects, and vice versa</li>
      </ul>
      <p>
        So the objects clause is linked to two earlier choices: the NIC code and
        the company name. Getting all three aligned is the first step to a
        smooth approval. Our post on{" "}
        <Link href="/blog/company-name-rejection-reasons">company name rejection reasons</Link>{" "}
        explains how name and objects interact.
      </p>

      <h2>Why vague or overly broad objects cause problems</h2>
      <table>
        <thead>
          <tr>
            <th>Who reads the MoA</th>
            <th>What can go wrong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registrar during incorporation</td>
            <td>Objects that do not match the NIC code, or that include regulated activities, lead to resubmission</td>
          </tr>
          <tr>
            <td>Bank during account opening</td>
            <td>The bank compares your stated business with the MoA as part of KYC; unrelated or regulated activities invite more questions</td>
          </tr>
          <tr>
            <td>GST officer</td>
            <td>The goods and services you declare for GST should be consistent with the objects</td>
          </tr>
          <tr>
            <td>Licensing authorities</td>
            <td>Licences such as FSSAI, import-export or sector registrations often ask for the MoA and expect the activity to be covered</td>
          </tr>
          <tr>
            <td>Investors and lenders</td>
            <td>Due diligence checks whether the actual business is within the objects</td>
          </tr>
        </tbody>
      </table>
      <p>
        Regulated activities need particular care. Words and activities
        connected with banking, insurance, chit funds, non-banking finance,
        collective investment or deposit-taking can require prior approval or
        registration from a regulator. Including them casually, even as a
        secondary object, can trigger queries or require approvals you do not
        need.
      </p>

      <h2>How to write a good main object</h2>
      <p>
        A good main object is specific enough that a stranger can tell what the
        company does, and broad enough to cover the natural growth of that
        business. A practical approach:
      </p>
      <ul>
        <li><strong>Start with the core activity in plain words.</strong> For example: to carry on the business of developing, licensing and maintaining software applications and providing related IT services.</li>
        <li><strong>Add the closely related activities.</strong> Consulting, training, support, and the sale of related hardware if relevant.</li>
        <li><strong>Mention the channels and geography if they matter.</strong> Online and offline sales, exports, or services to clients in India and abroad.</li>
        <li><strong>Match the NIC code.</strong> Choose the NIC code whose description best fits the core activity and make sure the drafted object does not contradict it.</li>
        <li><strong>Keep unrelated ideas out.</strong> If you plan a genuinely different business later, alter the clause or form a separate entity at that point.</li>
      </ul>

      <h2>Examples of weak versus stronger objects</h2>
      <p>
        A weak object might read: to carry on all kinds of business, trading,
        services and investments. It tells a bank nothing and may suggest
        regulated investment activity. A stronger version might read: to carry
        on the business of manufacturing, processing, packaging and trading in
        bakery and confectionery products, and to operate retail outlets and
        online stores for such products. The second clearly supports FSSAI and
        GST applications and leaves room for growth within the same line.
      </p>

      <h2>Choosing the NIC code</h2>
      <p>
        The NIC code classifies economic activity and drives the prefilled
        objects in SPICe+. Some practical points:
      </p>
      <ul>
        <li>Choose the code for the activity that will generate most of your revenue, not a side activity</li>
        <li>Read the full description of the code, not just its title, and make sure your drafted main object falls within it</li>
        <li>If you trade in goods you also manufacture, decide which is primary; manufacturing and trading have different codes</li>
        <li>For services delivered through software, check whether your activity is closer to software development, IT consulting or the underlying service (such as education or healthcare)</li>
      </ul>
      <p>
        The same activity description later feeds into GST registration, where
        you declare HSN or SAC codes for the goods and services you supply.
        Consistency across NIC code, objects and GST codes helps every later
        application.
      </p>

      <h2>Objects for common types of businesses</h2>
      <table>
        <thead>
          <tr>
            <th>Business</th>
            <th>What the main object should capture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software product or SaaS</td>
            <td>Developing, licensing, hosting and supporting software, and related consulting and training</td>
          </tr>
          <tr>
            <td>Manufacturing unit</td>
            <td>The specific products manufactured, plus processing, packaging, trading and export of those products</td>
          </tr>
          <tr>
            <td>Restaurant or cloud kitchen</td>
            <td>Operating restaurants, cafes, catering and delivery-based food services, and related retail of food products</td>
          </tr>
          <tr>
            <td>Import and export trading</td>
            <td>The categories of goods traded, sourcing, import, export, distribution and warehousing</td>
          </tr>
          <tr>
            <td>Consulting firm</td>
            <td>The specific consulting domain, such as engineering or marketing, rather than consulting in all fields</td>
          </tr>
        </tbody>
      </table>
      <p>
        Note that certain professional services, such as practising law or
        chartered accountancy, cannot be carried on through an ordinary company
        at all under the rules of the professional bodies, so do not include
        them as objects.
      </p>

      <h2>Altering the objects clause later</h2>
      <p>
        Businesses change, and the law provides for it. Under section 13 of the
        Companies Act, 2013, a company may alter its MoA by special resolution.
        For a change in objects:
      </p>
      <ul>
        <li>Hold a board meeting to approve the proposal and call a general meeting</li>
        <li>Pass a special resolution of shareholders</li>
        <li>File the resolution with the Registrar in form MGT-14 within thirty days, as required by section 117, with the altered MoA</li>
        <li>The Registrar registers and certifies the alteration within thirty days of filing under section 13(9)</li>
        <li>The alteration takes effect only once registered (section 13(10))</li>
      </ul>
      <p>
        After the alteration is registered, update your GST registration, bank
        records and licences where the activity description has changed. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service handles
        these alterations.
      </p>

      <h2>Special cases</h2>
      <p>
        One Person Companies and Section 8 companies have extra rules. MCA
        guidance notes that an OPC application can be rejected if its objects
        contain words like issue of shares, debentures or making investments in
        a way inconsistent with the OPC rules, and a Section 8 company must have
        charitable or similar objects. See our pages on{" "}
        <Link href="/opc-registration-chennai">OPC registration</Link> and{" "}
        <Link href="/section-8-company-registration-chennai">Section 8 company registration</Link>{" "}
        if either applies.
      </p>

      <h2>Before you file</h2>
      <p>
        Review the objects together with the name, NIC code and the activities
        you will declare for GST. A clause that tells a consistent story across
        all of them is the quickest to approve. For the full process, see our
        guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>.
        If you would like your objects clause drafted or reviewed, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
