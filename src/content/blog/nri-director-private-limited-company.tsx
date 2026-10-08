import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "nri-director-private-limited-company",
  title: "NRI as Director of an Indian Private Limited Company",
  description:
    "How NRIs can be directors and shareholders of an Indian private limited company: DIN, attested documents, the 182-day resident director rule and FDI reporting.",
  date: "2026-10-23",
  excerpt:
    "NRIs can be directors and shareholders of an Indian company. Here is how DIN, document attestation, the resident director rule and FDI reporting work.",
  faqs: [
    {
      question: "Can an NRI be a director of an Indian private limited company?",
      answer:
        "Yes. The Companies Act, 2013 does not bar non-residents from being directors. An NRI needs a DIN and a Digital Signature Certificate and must give notarised or apostilled identity and address documents. The company must still have at least one director who stays in India for 182 days or more in the financial year.",
    },
    {
      question: "Can a company have only NRI directors?",
      answer:
        "No. Section 149(3) of the Companies Act, 2013 requires every company to have at least one director who stays in India for a total of not less than 182 days during the financial year. For a newly incorporated company, the requirement applies proportionately at the end of its first financial year. At least one resident director is therefore needed.",
    },
    {
      question: "Does an NRI need PAN to become a director?",
      answer:
        "For Indian nationals, MCA's systems verify PAN, and the DIR-3 KYC FAQs state that PAN verification is mandatory for Indian nationals. An NRI who is an Indian citizen should therefore obtain or use an existing PAN. Foreign nationals, including OCI cardholders, provide passport details instead, and the passport number cannot be linked to another DIN.",
    },
    {
      question: "Is FC-GPR needed when an NRI subscribes to shares?",
      answer:
        "It depends on the basis of investment. Investment by an NRI on a repatriation basis is foreign investment and is reported in Form FC-GPR within 30 days of issue of shares. RBI's Master Direction states that NRI investment on a non-repatriation basis under Schedule IV is deemed domestic investment, so FC-GPR does not apply to it.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Many companies registered in Chennai have a founder or family member
        living in the Gulf, Singapore, the UK or the US. Non-Resident Indians
        (NRIs) can be directors and shareholders of an Indian private limited
        company, but the process has extra steps: document attestation abroad,
        a resident director requirement, and foreign exchange reporting
        depending on how the money comes in. This post walks through each one.
      </p>

      <h2>Can an NRI be a director and a shareholder?</h2>
      <p>
        Yes, in both roles. The{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        does not restrict directorship by residence, and the foreign exchange
        rules permit NRIs to invest in Indian companies on either a
        repatriation or non-repatriation basis. The conditions are practical
        rather than prohibitive: the NRI needs a DIN and DSC, documents must be
        attested correctly, and the company must have at least one resident
        director.
      </p>
      <p>
        RBI defines an NRI as an individual resident outside India who is a
        citizen of India. Overseas Citizens of India (OCIs) are foreign
        citizens and are treated differently for MCA purposes; see our post on{" "}
        <Link href="/blog/foreign-national-director-indian-company">foreign national directors</Link>{" "}
        if that applies.
      </p>

      <h2>The resident director rule: section 149(3)</h2>
      <p>
        Section 149(3) requires every company to have at least one director who
        stays in India for a total period of not less than 182 days during the
        financial year. For a newly incorporated company, the requirement
        applies proportionately at the end of the financial year in which it is
        incorporated.
      </p>
      <p>
        In practice, a private limited company needs a minimum of two
        directors, and at least one must meet the 182-day test. A common
        structure is an NRI founder as one director and a resident family
        member or co-founder as the other. Note that the test is about physical
        stay in India during the financial year, not citizenship or tax
        residence.
      </p>

      <h2>How does an NRI get a DIN?</h2>
      <p>
        For a new company, DINs for up to three proposed directors can be
        applied for within the SPICe+ incorporation form itself, so a separate
        DIN application is usually not needed. The NRI director needs:
      </p>
      <ul>
        <li>A Class 3 Digital Signature Certificate, which can be obtained with video verification while abroad</li>
        <li>PAN, since MCA systems verify PAN for Indian nationals</li>
        <li>Passport as proof of identity</li>
        <li>Proof of overseas residential address, such as a bank statement, utility bill or residence permit</li>
        <li>A personal email ID and mobile number that are unique to the director, since MCA uses them for OTP verification and future KYC</li>
      </ul>
      <p>
        Once allotted, the DIN must be kept active through DIR-3 KYC. Under the
        current MCA rules, KYC is filed once every three financial years and
        within thirty days of any change in mobile, email or address. Our post
        on{" "}
        <Link href="/blog/din-and-dsc-for-company-directors">DIN and DSC for directors</Link>{" "}
        explains the cycle.
      </p>

      <h2>Notarised or apostilled: which attestation applies?</h2>
      <p>
        Documents for an NRI living abroad must be attested in the country of
        residence. The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
        set out the rule:
      </p>
      <table>
        <thead>
          <tr>
            <th>Country of residence</th>
            <th>Attestation required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commonwealth country (for example the UK, Singapore, Australia, Canada)</td>
            <td>Notary public of that country</td>
          </tr>
          <tr>
            <td>Hague Apostille Convention country (for example the US and most of Europe)</td>
            <td>Notary public, then apostille</td>
          </tr>
          <tr>
            <td>Neither (check your country&apos;s status)</td>
            <td>Notary public, then authentication by the Indian Embassy or consulate</td>
          </tr>
        </tbody>
      </table>
      <p>
        Some countries are both Commonwealth members and Hague Convention
        members, and the treatment of Gulf countries varies. Check the current
        status of your country of residence before getting documents attested;
        redoing an attestation is the most common avoidable delay for NRI
        directors. If the NRI is visiting India when the documents are signed,
        the attestation requirement depends on where the document is executed.
      </p>

      <h2>Repatriation versus non-repatriation: why it matters</h2>
      <p>
        How the NRI pays for shares decides the FEMA treatment.
      </p>
      <ul>
        <li><strong>Repatriation basis:</strong> money comes from abroad or from an NRE or FCNR account, and the investment (and its returns) can be taken out of India. This is foreign investment and must comply with sectoral caps, pricing rules and reporting.</li>
        <li><strong>Non-repatriation basis:</strong> money typically comes from an NRO account, and the investment cannot be freely repatriated. RBI&apos;s{" "}
          <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200" target="_blank" rel="noopener noreferrer">Master Direction on Foreign Investment in India</a>{" "}
          states that such investment under Schedule IV of the NDI Rules is deemed to be domestic investment at par with investment by residents.</li>
      </ul>

      <h2>FDI reporting: FC-GPR</h2>
      <p>
        Where shares are issued to an NRI on a repatriation basis, the company
        must report the issue to RBI in Form FC-GPR through the FIRMS portal,
        within thirty days from the date of issue of the shares. The receipt of
        funds is also tracked through the bank (the AD bank), which issues the
        foreign inward remittance documentation and KYC report needed for the
        filing.
      </p>
      <p>
        Late reporting can attract late submission fees or compounding under
        FEMA, so plan the filing at the same time as the share allotment. Our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page
        covers FC-GPR and the annual FLA return that follows.
      </p>

      <h2>Common structures for NRI-led companies</h2>
      <table>
        <thead>
          <tr>
            <th>Structure</th>
            <th>How the resident director rule is met</th>
            <th>Points to watch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NRI founder and resident parent or sibling as directors</td>
            <td>The resident family member</td>
            <td>The resident director carries legal duties too, and must be comfortable signing filings</td>
          </tr>
          <tr>
            <td>NRI founder and resident co-founder</td>
            <td>The resident co-founder</td>
            <td>Agree in a shareholders&apos; agreement who controls decisions, since the resident director is often the one dealing with banks and authorities</td>
          </tr>
          <tr>
            <td>Two NRI founders and a resident professional director</td>
            <td>The resident professional</td>
            <td>Define the role and responsibilities in writing; a director is not a mere formality under the Act</td>
          </tr>
        </tbody>
      </table>

      <h2>Running the company from abroad</h2>
      <p>
        Being outside India does not prevent an NRI director from taking part
        in governance. Section 173(2) of the Companies Act allows directors to
        participate in board meetings through video conferencing or other audio
        visual means, and those participants count towards the quorum. Forms are
        signed digitally with the director&apos;s DSC, which works from anywhere
        with the USB token.
      </p>
      <p>
        Practical issues tend to be banking rather than company law. Banks may
        ask for additional documents before allowing a non-resident director to
        be an authorised signatory or to use internet banking. Discuss this with
        the bank at account opening, and consider whether the resident director
        should handle day-to-day operations.
      </p>
      <p>
        Also think about tax. If an NRI director spends long periods in India,
        their own residential status under the Income-tax Act may change, which
        affects how their global income is taxed. This is separate from the
        182-day company law test, and worth reviewing each year with an adviser
        on{" "}
        <Link href="/nri-tax-services">NRI taxation</Link>.
      </p>

      <h2>Practical tips for NRI founders</h2>
      <ul>
        <li>Keep your PAN details (name and date of birth) aligned with your passport before you start</li>
        <li>Get all documents attested in one sitting, including identity, address and any physically signed MoA and AoA</li>
        <li>Decide in advance whether you will invest on a repatriation or non-repatriation basis, and open the right bank account</li>
        <li>Identify the resident director early and confirm they will meet the 182-day test each year</li>
        <li>Remember that a foreign address can be a director&apos;s residential address, but the registered office must be in India</li>
      </ul>

      <h2>After incorporation</h2>
      <p>
        An NRI director has the same duties as any other director: attending
        board meetings (video conferencing is permitted for most matters),
        disclosing interests, and signing filings with their DSC. Ongoing
        filings are covered under our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service. For the
        incorporation itself, see our{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation</Link>{" "}
        page.
      </p>
      <p>
        If you are an NRI planning to set up a company in Chennai, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
