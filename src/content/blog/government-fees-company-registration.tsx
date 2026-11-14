import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "government-fees-company-registration",
  title: "Government Fees for Company Registration in India (2026)",
  description:
    "Statutory costs of registering a company in India: the MCA fee and zero-fee band, name reservation, PAN, TAN, Tamil Nadu stamp duty, OPC rules and DSC.",
  date: "2026-10-20",
  updated: "2026-11-13",
  excerpt:
    "A breakdown of the statutory, government-side costs of incorporating a company: MCA filing fee, name reservation, PAN, TAN, stamp duty and DSC.",
  faqs: [
    {
      question: "Is company registration free for small companies?",
      answer:
        "The MCA filing fee is zero for companies incorporated through SPICe+ with authorised capital up to Rs. 15 lakh, according to the MCA's SPICe+ FAQs. That does not make registration entirely free: state stamp duty on the MoA and AoA, the PAN and TAN charges, and the cost of digital signatures still apply.",
    },
    {
      question: "What is the government fee for reserving a company name?",
      answer:
        "If you reserve a name separately through SPICe+ Part A before filing Part B, the MCA charges Rs. 1,000. The approved name is held for 20 days. You can extend the reservation by paying Rs. 1,000 for 20 to 40 days, Rs. 2,000 for 40 to 60 days, or Rs. 3,000 for 20 to 60 days in one go.",
    },
    {
      question: "Are there government fees for GST, EPFO, ESIC or the bank account in SPICe+?",
      answer:
        "No. The MCA's AGILE-PRO-S FAQs state that no fee is payable for applying for GSTIN, EPFO or ESIC registration through the linked form, and the SPICe+ FAQs confirm that opening the company bank account through SPICe+ carries no additional fee. Each of these is applied for alongside incorporation.",
    },
    {
      question: "Is the Digital Signature Certificate a government fee?",
      answer:
        "Not strictly. A DSC is issued by a licensed Certifying Authority under the Information Technology Act, and its price is set by the Certifying Authority or its agent rather than by the MCA. The cost varies with the validity period and token, so treat it as a necessary third-party cost and compare quotes.",
    },
    {
      question: "What is the government fee to register a One Person Company?",
      answer:
        "An OPC is incorporated through SPICe+, so the MCA's zero filing fee applies when authorised capital is up to Rs. 15 lakh. You still pay Rs. 66 for PAN, Rs. 65 for TAN and the state stamp duty on the MoA and AoA, which in Tamil Nadu is Rs. 700 at Rs. 10 lakh of capital.",
    },
    {
      question: "How are the SPICe+ fee and stamp duty paid?",
      answer:
        "SPICe+ generates two challans, one for the MCA fee, PAN and TAN and a separate one for stamp duty. Both can be paid online or offline at an authorised bank within the challan's validity. The MCA starts processing only after both payments are confirmed, and the state chosen for stamp duty cannot be changed after payment.",
    },
  ],
  summary:
    "Government costs of company registration are the MCA SPICe+ filing fee, which is zero for authorised capital up to Rs. 15 lakh, the PAN and TAN charges collected through one consolidated challan, a separate name reservation fee if used, and state stamp duty. Digital Signature Certificates are market-priced. Professional fees are excluded from these statutory figures.",
};

export default function Body() {
  return (
    <>
      <p>
        Founders often hear a single all-in number for company registration and
        cannot tell how much of it is government charges. This post separates
        out the statutory costs only: what the Ministry of Corporate Affairs
        (MCA), the Income Tax Department and the state government collect, plus
        the third-party cost of digital signatures. It deliberately excludes
        professional fees, which vary by firm and scope.
      </p>
      <p>
        Every figure below is drawn from official MCA guidance at the time of
        writing. Government fees change from time to time, so verify the
        current amount on the MCA portal before you pay.
      </p>

      <h2>What are the statutory costs of registering a company?</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Collected by</th>
            <th>Amount or basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SPICe+ filing fee (incl. MoA and AoA fee)</td>
            <td>MCA</td>
            <td>Zero for authorised capital up to Rs. 15 lakh; above that, based on authorised capital under the fee rules</td>
          </tr>
          <tr>
            <td>Separate name reservation (SPICe+ Part A)</td>
            <td>MCA</td>
            <td>Rs. 1,000, only if you reserve the name before filing Part B</td>
          </tr>
          <tr>
            <td>Name reservation extension</td>
            <td>MCA</td>
            <td>Rs. 1,000 (20 to 40 days), Rs. 2,000 (40 to 60 days) or Rs. 3,000 (20 to 60 days)</td>
          </tr>
          <tr>
            <td>PAN</td>
            <td>Income Tax Department, via the SPICe+ challan</td>
            <td>Rs. 66</td>
          </tr>
          <tr>
            <td>TAN</td>
            <td>Income Tax Department, via the SPICe+ challan</td>
            <td>Rs. 65</td>
          </tr>
          <tr>
            <td>Stamp duty on MoA and AoA</td>
            <td>State government, collected through MCA21</td>
            <td>Varies by state; in Tamil Nadu linked to authorised capital for the AoA</td>
          </tr>
          <tr>
            <td>One Person Company (OPC) incorporated through SPICe+</td>
            <td>MCA</td>
            <td>Same SPICe+ rule: zero filing fee for authorised capital up to Rs. 15 lakh; PAN, TAN and stamp duty still apply</td>
          </tr>
          <tr>
            <td>GSTIN, EPFO, ESIC and bank account via AGILE-PRO-S</td>
            <td>Respective agencies</td>
            <td>No fee</td>
          </tr>
          <tr>
            <td>Digital Signature Certificates</td>
            <td>Licensed Certifying Authorities</td>
            <td>Market-priced per certificate; not an MCA fee</td>
          </tr>
        </tbody>
      </table>

      <h2>How does the MCA filing fee work?</h2>
      <p>
        The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
        explain that the fee depends on the authorised share capital of the
        company. Companies incorporated through SPICe+ with authorised capital
        up to Rs. 15,00,000 enjoy a zero filing fee and pay only the applicable
        stamp duty.
      </p>
      <p>
        A single consolidated challan is generated when you file SPICe+. It
        covers the fee for the form, the MoA fee, the AoA fee, PAN, TAN and,
        where applicable, the fee for form URC-1 (used when an existing
        business such as a partnership or LLP converts into a company). Stamp
        duty gets its own separate challan.
      </p>
      <p>
        For authorised capital above Rs. 15 lakh, the fee rises according to the
        slab table in the Companies (Registration Offices and Fees) Rules, 2014.
        The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/enquire-fees.html" target="_blank" rel="noopener noreferrer">Enquire Fees</a>{" "}
        service calculates the exact amount for a given form and capital, which
        is more reliable than any third-party table.
      </p>

      <h2>What does a Tamil Nadu company pay at common capital levels?</h2>
      <p>
        <strong>
          For a Tamil Nadu company with authorised capital up to Rs. 15 lakh,
          the MCA filing fee is zero, so the government charges are Rs. 131 for
          PAN and TAN plus state stamp duty: Rs. 700 at Rs. 1 lakh or Rs. 10
          lakh of capital, and Rs. 1,200 at Rs. 15 lakh. Digital signatures and
          any separate name reservation are extra.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Authorised capital</th>
            <th>MCA filing fee</th>
            <th>PAN and TAN</th>
            <th>Tamil Nadu stamp duty (MoA + AoA)</th>
            <th>Government total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rs. 1 lakh</td>
            <td>Nil</td>
            <td>Rs. 131</td>
            <td>Rs. 700</td>
            <td>Rs. 831</td>
          </tr>
          <tr>
            <td>Rs. 10 lakh</td>
            <td>Nil</td>
            <td>Rs. 131</td>
            <td>Rs. 700</td>
            <td>Rs. 831</td>
          </tr>
          <tr>
            <td>Rs. 15 lakh</td>
            <td>Nil</td>
            <td>Rs. 131</td>
            <td>Rs. 1,200</td>
            <td>Rs. 1,331</td>
          </tr>
        </tbody>
      </table>
      <p>
        The stamp duty column applies the Tamil Nadu entries of Rs. 200 for the
        MoA and Rs. 500 for every Rs. 10 lakh of authorised capital or part of
        it for the AoA, explained in our{" "}
        <Link href="/blog/tamil-nadu-stamp-duty-company-incorporation">Tamil Nadu stamp duty</Link>{" "}
        post. Above Rs. 15 lakh the MCA fee is no longer nil and depends on the
        slab in the fee rules, so we have not extended the table; the{" "}
        <Link href="/tools/company-registration-government-fee-calculator">government fee calculator</Link>{" "}
        and the MCA&apos;s Enquire Fees service cover higher amounts. The
        figure SPICe+ shows before you pay is the one that counts.
      </p>

      <h2>What are the government fees for OPC and LLP registration?</h2>
      <p>
        <strong>
          A One Person Company is incorporated through SPICe+ like any other
          company, so the MCA&apos;s zero filing fee for authorised capital up
          to Rs. 15 lakh applies, plus stamp duty and the PAN and TAN charges.
          An LLP is incorporated through a different form, FiLLiP, under the
          LLP rules, and its fee should be checked on the MCA&apos;s Enquire
          Fees service.
        </strong>
      </p>
      <p>
        For an OPC, the only structural difference in SPICe+ Part B is a
        separate nomination block for the nominee, whose identity and address
        proof is attached alongside the member&apos;s. The MCA&apos;s SPICe+
        FAQs also warn that an OPC application may be rejected if its objects
        contain words such as issue shares, debentures or make investments,
        contrary to rule 3(6) of the Incorporation Rules. See{" "}
        <Link href="/opc-registration-chennai">OPC registration in Chennai</Link>{" "}
        for the process.
      </p>
      <p>
        For an LLP, we have deliberately not printed fee figures here, because
        we could not confirm the current fee schedule against an official copy
        of the LLP rules on the date of this update. Names for new LLPs are
        reserved through the separate RUN-LLP service. Our{" "}
        <Link href="/llp-registration-chennai">LLP registration</Link> page
        covers the steps.
      </p>

      <h2>When do you pay the Rs. 1,000 name reservation fee?</h2>
      <p>
        You pay the Rs. 1,000 name reservation fee only if you file SPICe+ Part A
        on its own to reserve the name first. If you file Part A and Part B
        together as a single application, there is no separate name fee, but
        you can propose only one name. The trade-off is time versus certainty:
        reserving first lets you lock the name while you finalise documents.
      </p>
      <p>
        Our post on{" "}
        <Link href="/blog/company-name-rejection-reasons">why company names get rejected</Link>{" "}
        explains how to improve your chances at this stage.
      </p>

      <h2>How does state stamp duty fit in?</h2>
      <p>
        Stamp duty on the MoA and AoA is levied by the state where the
        registered office is located and is collected electronically through
        MCA21. In Tamil Nadu, the 2023 amendment set a fixed duty on the MoA and
        a capital-linked duty on the AoA. The SPICe+ form computes the amount
        automatically. For the detail, see our post on{" "}
        <Link href="/blog/tamil-nadu-stamp-duty-company-incorporation">stamp duty for company incorporation in Tamil Nadu</Link>.
      </p>

      <h2>What decides the cost of Digital Signature Certificates?</h2>
      <p>
        Every subscriber and director who signs the incorporation forms needs a
        Class 3 Digital Signature Certificate. DSCs are issued by Certifying
        Authorities licensed by the Controller of Certifying Authorities, not
        by the MCA, and their price depends on:
      </p>
      <ul>
        <li>The validity period, typically one to three years</li>
        <li>Whether a new USB token is needed or an existing one is reused</li>
        <li>Whether the certificate is for signing only or for signing and encryption</li>
        <li>Additional verification needed for foreign nationals</li>
      </ul>
      <p>
        Multiply by the number of signatories. A two-director company with both
        directors as subscribers needs two DSCs. Our{" "}
        <Link href="/digital-signature-certificate-chennai">digital signature certificate</Link>{" "}
        page explains the application steps.
      </p>

      <h2>What does the zero-fee band cover, and what does it not?</h2>
      <p>
        The zero filing fee for companies with authorised capital up to Rs. 15
        lakh is valuable, but it is often misunderstood. It covers the MCA fee
        for the SPICe+ form and the MoA and AoA fees. It does not cover:
      </p>
      <ul>
        <li>State stamp duty, which the MCA FAQs say continues to apply on a state-by-state basis</li>
        <li>The PAN and TAN charges in the consolidated challan</li>
        <li>The Rs. 1,000 fee for a separate name reservation, or any extension fee</li>
        <li>Fees for forms filed after incorporation, such as INC-20A, ADT-1 or SH-7</li>
        <li>The cost of digital signatures</li>
      </ul>
      <p>
        If you expect to raise capital soon after incorporation, compare the
        fee saving from staying within Rs. 15 lakh against the cost of filing
        SH-7 later to increase authorised capital, which involves its own MCA
        fee and stamp duty.
      </p>

      <h2>How do you check the exact fee before filing?</h2>
      <p>
        Rather than relying on tables published online, use the MCA&apos;s own
        tools:
      </p>
      <ul>
        <li>Open the Enquire Fees service on the MCA portal</li>
        <li>Select the form (for example SPICe+ or SH-7) and enter the authorised capital or other details asked for</li>
        <li>Note the normal fee and any additional fee shown for late filing</li>
        <li>Check the stamp duty separately in the SPICe+ stamp duty block before you generate the challan</li>
      </ul>
      <p>
        Remember that the SRN is cancelled if the signed form is not uploaded
        within 15 days of SRN generation, or payment is not completed within 7
        days of a successful upload, so plan payment as soon as the forms are
        ready.
      </p>

      <h2>How are the MCA fee and stamp duty paid?</h2>
      <p>
        <strong>
          SPICe+ generates two challans: one for the MCA fee, PAN and TAN, and
          a separate one with its own SRN for stamp duty. Both can be paid by
          net banking, credit or debit card, NEFT, or offline at an authorised
          bank. The MCA does not start processing the form until both payments
          are confirmed.
        </strong>
      </p>
      <p>
        According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/payment2/estamp.html" target="_blank" rel="noopener noreferrer">e-stamp FAQs</a>,
        the two challans need not be paid at the same moment, but both must be
        paid within the challan&apos;s validity; if one is left unpaid, the
        transaction is cancelled once that validity expires. If you pay the
        MCA fee online and do not pay the stamp duty straight away, the Pay
        Stamp Duty facility under MCA Services and Fee and Payment Services
        lets you pay it later within the same validity, and also pay any
        shortfall found afterwards. Stamp duty with paise is rounded up to the
        next rupee. Two points cost founders money: the state chosen for stamp
        duty cannot be changed after payment, and any refund of stamp duty is
        handled by that state government under its own rules, not by the MCA.
      </p>

      <h2>Which costs in a quote are not government fees?</h2>
      <p>
        When you compare quotes, separate the following from statutory charges:
      </p>
      <ul>
        <li>Notarisation and apostille charges for NRI or foreign participants, which are paid in the country where documents are executed</li>
        <li>Rent agreement stamp duty and registration, which depend on the agreement terms</li>
        <li>Courier and translation costs for regional-language utility bills</li>
        <li>Professional fees for drafting, filing and certification</li>
      </ul>

      <h2>What government fees apply after incorporation?</h2>
      <p>
        Statutory costs continue after the certificate of incorporation. INC-20A
        (declaration for commencement of business), ADT-1, annual returns and
        financial statement filings each carry fees under the fee rules, again
        based on capital, with additional fees for late filing. DIR-3 KYC is
        free if filed on time, but the MCA charges Rs. 5,000 to reactivate a
        DIN deactivated for non-filing, and Rs. 500 for updating a
        director&apos;s mobile, email or address, according to the MCA&apos;s
        DIR-3 KYC FAQs.
      </p>
      <p>
        These recurring costs are covered in our{" "}
        <Link href="/roc-compliances">ROC compliance</Link> guide and the{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>.
      </p>

      <h2>What should your fee checklist include?</h2>
      <ul>
        <li>Decide authorised capital and check whether it is within the Rs. 15 lakh zero-fee band</li>
        <li>Decide whether to reserve the name separately (Rs. 1,000) or file Part A and B together</li>
        <li>Budget Rs. 66 for PAN and Rs. 65 for TAN in the consolidated challan</li>
        <li>Note the stamp duty shown in the SPICe+ stamp duty block for your state</li>
        <li>Obtain quotes for the DSCs needed</li>
        <li>Plan for post-incorporation filing fees in the first year</li>
      </ul>
      <p>
        To estimate these charges for your own authorised capital, use our free{" "}
        <Link href="/tools/company-registration-government-fee-calculator">company registration government fee calculator</Link>.
        For the full process, see{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation in Chennai</Link>{" "}
        and our guide to <Link href="/company-registration-chennai">company registration in Chennai</Link>.
        If you would like the government costs worked out for your proposed
        structure, you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
