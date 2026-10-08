import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "registered-office-at-home-company",
  title: "Can Your Home Be a Company's Registered Office?",
  description:
    "Using a home, rented flat or co-working space as a company's registered office: the NOC, utility bill and rent agreement MCA expects, and when INC-22 applies.",
  date: "2026-10-30",
  excerpt:
    "A home, rented flat or co-working desk can serve as a registered office. Here is the proof MCA expects, when INC-22 applies, and the mistakes to avoid.",
  faqs: [
    {
      question: "Can I register my company at my residential address?",
      answer:
        "Yes. The Companies Act, 2013 requires a registered office capable of receiving and acknowledging all communications and notices, and does not insist on commercial premises. A home address is commonly used, provided you attach a recent utility bill, ownership or rent documents, and an NOC from the owner naming the proposed company.",
    },
    {
      question: "What documents are needed if the house is owned by a parent or spouse?",
      answer:
        "You need a no-objection certificate from the owner allowing the proposed company to use the premises as its registered office, a utility bill not older than two months, and proof of ownership if the bill is not in the owner's name. MCA guidance says proofs not in the actual owner's name are a rejection ground.",
    },
    {
      question: "When is form INC-22 required?",
      answer:
        "According to the MCA's SPICe+ FAQs, INC-22 is not needed if the company is incorporated with its registered office at the same address as its correspondence address. If the registered address differs, INC-22 must be filed within 30 days of incorporation. INC-22 is also used later whenever the registered office changes.",
    },
    {
      question: "Can a co-working space be used as a registered office?",
      answer:
        "Generally yes, if the operator gives a written agreement and NOC naming the company and a utility bill for the premises, and the company can actually receive notices there. The address must be complete and match the documents. Confirm with the operator that they will forward government notices promptly, since missed notices create compliance risk.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Many companies begin life at a founder&apos;s home or a shared office.
        That is perfectly legal, but the registered office is a legal address,
        not just a mailing address, and the Ministry of Corporate Affairs (MCA)
        is particular about how it is proved. This post covers what the law
        requires, the documents for each type of premises, and the mistakes
        that commonly send applications back.
      </p>

      <h2>What the law requires of a registered office</h2>
      <p>
        Section 12 of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        says a company must, within thirty days of incorporation and at all times
        after that, have a registered office capable of receiving and
        acknowledging all communications and notices addressed to it. The
        company must also furnish verification of the registered office to the
        Registrar within thirty days of incorporation.
      </p>
      <p>
        The law does not require the registered office to be a commercial
        building. What it requires is that notices sent there actually reach
        the company. The company must also display its name and registered
        office address outside every office where it carries on business, and
        print its name, registered office address and CIN on its letterheads,
        invoices and other official documents.
      </p>

      <h2>Option 1: a home you or your family own</h2>
      <p>
        This is the most common choice for early-stage companies in Chennai.
        Documents needed:
      </p>
      <ul>
        <li>A utility bill (electricity, water, gas, telephone or broadband) not older than two months, showing the complete address</li>
        <li>An NOC from the owner allowing the proposed company to use the premises as its registered office, naming the company</li>
        <li>Proof of ownership, such as a sale deed or property tax receipt, particularly if the utility bill is in a different name</li>
      </ul>
      <p>
        If the electricity bill is in Tamil, MCA guidance asks for an English
        translation to be attached. If the bill is still in the name of a
        previous owner after the property changed hands, update it or attach
        the sale deed, as MCA lists proofs not in the actual owner&apos;s name
        as a rejection ground.
      </p>

      <h2>Option 2: a rented flat or house</h2>
      <p>
        If you live in a rented home, you need the owner&apos;s permission as
        well as the tenancy papers:
      </p>
      <ul>
        <li>The rent agreement or lease deed, with recent rent receipts</li>
        <li>An NOC from the owner (the landlord, not the tenant) permitting use as the company&apos;s registered office</li>
        <li>A utility bill not older than two months</li>
      </ul>
      <p>
        MCA guidance lists three related rejection grounds: the NOC or rent
        agreement is not attached, the company&apos;s name is missing or wrong
        in the NOC, or the NOC is not provided by the owner. Read your lease
        too. Some residential leases restrict commercial use, and a landlord who
        objects later can force a change of address.
      </p>

      <h2>Option 3: a co-working space or shared office</h2>
      <p>
        Co-working operators in Chennai commonly offer registered office
        arrangements. Before signing, check that the operator will provide:
      </p>
      <ul>
        <li>A written agreement in the company&apos;s name (or the proposed company&apos;s name)</li>
        <li>An NOC from the entity that owns or leases the premises</li>
        <li>A recent utility bill for the premises</li>
        <li>A complete address, including floor and unit number, that matches all documents</li>
        <li>A clear process for receiving and forwarding letters and notices</li>
      </ul>
      <p>
        If you also plan to register for GST at the same address, ask whether
        the operator will support the GST officer&apos;s verification, since GST
        registration has its own premises requirements.
      </p>

      <h2>When does INC-22 come in?</h2>
      <p>
        The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
        explain that INC-22 is not required with SPICe+ if the company is
        registered at the same address as its correspondence address. If the
        registered address is different, INC-22 must be filed within thirty days
        of incorporation to intimate the registered office.
      </p>
      <p>
        Many founders give a correspondence address at incorporation and the
        permanent registered office later. That is allowed, but it adds a
        filing with a firm deadline. It is usually simpler to finalise the
        registered office before filing SPICe+. INC-22 is also the form used
        later whenever the registered office moves, with additional steps if the
        move crosses the jurisdiction of a Registrar of Companies.
      </p>

      <h2>Registered office and INC-20A</h2>
      <p>
        The registered office matters again within months of incorporation.
        Section 10A requires a company to file a verification of its registered
        office before it can commence business, and the current INC-20A form
        asks for photographs of the registered office showing the external
        building and the inside of the office with at least one director or
        KMP, along with location coordinates. A home office therefore needs to
        look like a place where the company actually operates. See our post on{" "}
        <Link href="/blog/inc-20a-commencement-of-business">INC-20A</Link>{" "}
        for details.
      </p>

      <h2>What the NOC should say</h2>
      <p>
        A short NOC is enough, but it must contain the right details. A
        typical NOC from the owner includes:
      </p>
      <ul>
        <li>The owner&apos;s full name and address, matching the ownership proof</li>
        <li>The full address of the premises, matching the utility bill and the SPICe+ form</li>
        <li>The exact proposed name of the company, including Private Limited</li>
        <li>A clear statement that the owner has no objection to the premises being used as the company&apos;s registered office</li>
        <li>The owner&apos;s signature and date</li>
      </ul>
      <p>
        If the name approved in SPICe+ Part A differs even slightly from the one
        in the NOC, have the NOC signed again before filing Part B.
      </p>

      <h2>Common mistakes that cause rejections</h2>
      <ul>
        <li>Address in the form does not match the utility bill exactly</li>
        <li>Utility bill older than two months</li>
        <li>NOC signed by a tenant instead of the owner</li>
        <li>NOC that names the founder instead of the proposed company</li>
        <li>Society maintenance bill used without a sale or lease deed</li>
        <li>Partial or illegible scans</li>
      </ul>
      <p>
        Our{" "}
        <Link href="/blog/private-limited-company-registration-documents">documents checklist</Link>{" "}
        covers the rest of the SPICe+ attachments.
      </p>

      <h2>Practical considerations for Chennai founders</h2>
      <p>
        Beyond MCA approval, think about how the address will be used. The same
        address will typically become the principal place of business for GST
        if you apply through AGILE-PRO-S, and bank account opening will refer to
        it. Banks and the GST department may carry out physical verification.
        If you live in an apartment complex, check whether the association
        objects to businesses being registered at residential units.
      </p>
      <p>
        If you expect to move offices within a year, factor in the cost and time
        of changing the registered office later. A change within the same city
        is relatively simple, but moving to a different state requires approval
        and amendment of the MoA.
      </p>

      <h2>Changing the registered office later</h2>
      <p>
        Many companies outgrow a home office within a year or two. The process
        depends on how far the office moves:
      </p>
      <table>
        <thead>
          <tr>
            <th>Type of move</th>
            <th>What is generally involved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Within the same city, town or village</td>
            <td>Board resolution and INC-22 with the new address proof, within thirty days of the change</td>
          </tr>
          <tr>
            <td>To another city within Tamil Nadu, same Registrar</td>
            <td>Shareholders&apos; special resolution, then INC-22</td>
          </tr>
          <tr>
            <td>To a place under a different Registrar in the same state</td>
            <td>Special resolution and confirmation from the Regional Director (form INC-23) before INC-22</td>
          </tr>
          <tr>
            <td>To another state</td>
            <td>Special resolution, Regional Director approval and alteration of the MoA&apos;s registered office clause</td>
          </tr>
        </tbody>
      </table>
      <p>
        After any change, update the address on letterheads, invoices, the GST
        registration, the bank, and the name board outside the new premises.
        Our post on{" "}
        <Link href="/roc-compliances">changing a registered office</Link>{" "}
        covers the steps in more detail.
      </p>

      <h2>Next steps</h2>
      <p>
        Once you have decided on the premises, the rest of the incorporation can
        proceed. Our guides on{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        and{" "}
        <Link href="/opc-registration-chennai">One Person Company registration</Link>{" "}
        explain the overall process, and{" "}
        <Link href="/roc-compliances">ROC compliances</Link> covers address
        changes after incorporation.
      </p>
      <p>
        If you want your registered office documents checked before filing, you
        can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
