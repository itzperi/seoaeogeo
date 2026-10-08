import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "tamil-nadu-stamp-duty-company-incorporation",
  title: "Stamp Duty on Company Incorporation in Tamil Nadu",
  description:
    "How stamp duty on the MoA and AoA works for companies registered in Tamil Nadu, how SPICe+ computes and collects it, and how authorised capital affects it.",
  date: "2026-10-16",
  excerpt:
    "Stamp duty on the MoA and AoA is a state levy. Here is how it works for a Tamil Nadu company, how SPICe+ collects it, and why authorised capital matters.",
  faqs: [
    {
      question: "Who decides the stamp duty on a company's MoA and AoA?",
      answer:
        "Stamp duty is a state subject, so the rate depends on the state in which the registered office is situated. For a registered office in Chennai or elsewhere in Tamil Nadu, the Indian Stamp Act, 1899 as amended for Tamil Nadu applies. SPICe+ computes the amount based on the state and authorised capital you enter.",
    },
    {
      question: "Do I need to buy physical stamp paper for the MoA and AoA in Chennai?",
      answer:
        "No. MCA guidance says stamp duty on SPICe+ Part B, including the MoA and AoA, must be paid electronically through the MCA21 system for every state except Sikkim. The system prefills the stamp duty details and generates a separate challan, and there is no need to visit a stamping authority or submit physical papers.",
    },
    {
      question: "How does authorised capital affect stamp duty in Tamil Nadu?",
      answer:
        "Under the 2023 Tamil Nadu amendment, the duty on the Articles of Association is linked to authorised capital, charged per slab of ten lakh rupees subject to a cap, while the Memorandum attracts a fixed amount. A higher authorised capital therefore means higher stamp duty, both at incorporation and when you increase capital later.",
    },
    {
      question: "Is stamp duty payable again when authorised capital is increased?",
      answer:
        "Yes. MCA guidance lists form SH-7, used to notify an alteration of share capital, among the filings on which stamp duty is paid electronically through MCA21. For a Tamil Nadu company, the system computes the duty on the increase based on the state schedule, and the SRN is processed only after both the filing fee and stamp duty are paid.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        When you register a company, two kinds of government charges apply: the
        filing fee payable to the Ministry of Corporate Affairs (MCA), and stamp
        duty payable to the state government on the Memorandum of Association
        (MoA) and Articles of Association (AoA). The filing fee is set
        centrally. Stamp duty is not. It depends on the state where the
        registered office is located, and in Tamil Nadu the rules changed in
        2023. This post explains how the duty works for a Tamil Nadu company,
        and how SPICe+ calculates and collects it.
      </p>

      <h2>Why is stamp duty payable on the MoA and AoA?</h2>
      <p>
        The MoA and AoA are instruments under the Indian Stamp Act, 1899. The
        Act&apos;s Schedule I lists them separately, and each state can amend
        the rates in its application to that state. That is why two companies
        with the same capital can pay different stamp duty depending on whether
        their registered office is in Chennai, Bengaluru or Mumbai.
      </p>
      <p>
        For our purposes the key point is simple: the registered office state
        decides the rate. If your registered office is in Anna Nagar, Guindy,
        Coimbatore or anywhere else in Tamil Nadu, the Tamil Nadu schedule
        applies, even if some of the founders live elsewhere.
      </p>

      <h2>What changed in Tamil Nadu in 2023?</h2>
      <p>
        The Indian Stamp (Tamil Nadu Amendment) Act, 2023 revised several
        articles of Schedule I as it applies in Tamil Nadu. As introduced in the
        Tamil Nadu Legislative Assembly (L.A. Bill No. 10 of 2023, published in
        the Tamil Nadu Government Gazette Extraordinary dated 17 April 2023),
        the relevant entries read as follows:
      </p>
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Tamil Nadu entry after the 2023 amendment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Article 39: Memorandum of Association of a company</td>
            <td>Two hundred rupees</td>
          </tr>
          <tr>
            <td>Article 10: Articles of Association of a company</td>
            <td>Five hundred rupees on every ten lakh rupees of authorised capital or part thereof, subject to a maximum of rupees five lakh</td>
          </tr>
          <tr>
            <td>Exemption (both articles)</td>
            <td>MoA and AoA of an association not formed for profit and registered under the Companies Act, 2013</td>
          </tr>
        </tbody>
      </table>
      <p>
        Stamp rates can be revised again by the state, so treat these figures as
        a guide and verify the current amount before filing. The amount that
        SPICe+ computes in its stamp duty block is what you will actually pay.
        The Tamil Nadu Registration Department&apos;s portal,{" "}
        <a href="https://tnreginet.gov.in/portal/" target="_blank" rel="noopener noreferrer">TNREGINET</a>,
        is the state&apos;s official site for stamp and registration matters.
      </p>

      <h2>How the AoA slab works in practice</h2>
      <p>
        Because the AoA entry is charged per ten lakh rupees of authorised
        capital or part of it, the duty steps up in slabs rather than rising
        smoothly. Reading the entry above:
      </p>
      <ul>
        <li>Authorised capital of one lakh or ten lakh rupees falls in the first slab</li>
        <li>Authorised capital of fifteen lakh rupees covers two slabs (ten lakh plus a part of the next ten lakh)</li>
        <li>The duty on the AoA cannot exceed the five lakh rupee cap, however large the capital</li>
      </ul>
      <p>
        The MoA duty is a flat amount and does not depend on capital. Add the
        two together for the total stamp duty on incorporation documents, and
        confirm the figure in SPICe+ before paying.
      </p>

      <h2>Illustration: reading the entries for common capital amounts</h2>
      <p>
        Applying the 2023 entries as published, the stamp duty on incorporation
        documents for a Tamil Nadu company would work out as below. These are
        illustrations of the mechanism only; the figure SPICe+ shows at the time
        of filing is the one that counts.
      </p>
      <table>
        <thead>
          <tr>
            <th>Authorised capital</th>
            <th>AoA slabs of Rs. 10 lakh (or part)</th>
            <th>AoA duty</th>
            <th>MoA duty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rs. 1 lakh</td>
            <td>1</td>
            <td>Rs. 500</td>
            <td>Rs. 200</td>
            <td>Rs. 700</td>
          </tr>
          <tr>
            <td>Rs. 10 lakh</td>
            <td>1</td>
            <td>Rs. 500</td>
            <td>Rs. 200</td>
            <td>Rs. 700</td>
          </tr>
          <tr>
            <td>Rs. 15 lakh</td>
            <td>2</td>
            <td>Rs. 1,000</td>
            <td>Rs. 200</td>
            <td>Rs. 1,200</td>
          </tr>
          <tr>
            <td>Rs. 1 crore</td>
            <td>10</td>
            <td>Rs. 5,000</td>
            <td>Rs. 200</td>
            <td>Rs. 5,200</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two practical points follow. First, an authorised capital of Rs. 10
        lakh and Rs. 1 lakh attract the same AoA duty under this entry, so
        there is no stamp duty saving in going below Rs. 10 lakh. Second, crossing
        a slab boundary by even a small amount adds a full slab, so Rs. 10.5
        lakh costs the same as Rs. 20 lakh.
      </p>

      <h2>How SPICe+ computes and collects stamp duty</h2>
      <p>
        Part B of SPICe+ has a dedicated stamp duty block. Based on the state of
        the registered office and the authorised capital entered in the form,
        the system computes the duty payable on the MoA and AoA. According to
        the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/payment2/estamp.html" target="_blank" rel="noopener noreferrer">e-stamp FAQs</a>:
      </p>
      <ul>
        <li>Stamp duty on SPICe+ Part B (including MoA and AoA), SH-7 and FC-1 must be paid electronically through MCA21, for every state except Sikkim</li>
        <li>The system prefills the stamp duty details; you do not calculate them manually</li>
        <li>A separate SRN and challan are generated for stamp duty, in addition to the MCA filing fee challan</li>
        <li>Processing does not start until both the filing fee and the stamp duty are paid and confirmed</li>
        <li>Decimal amounts are rounded up to the next rupee</li>
        <li>Once paid, the state cannot be changed; refunds are handled by the state government under its own rules</li>
      </ul>
      <p>
        That last point matters. If you select the wrong state, the duty is
        credited to that state and cannot be transferred. Check the registered
        office state before you pay.
      </p>

      <h2>Choosing authorised capital with stamp duty in mind</h2>
      <p>
        Authorised capital is the ceiling on the shares a company can issue. It
        drives both the MCA filing fee (companies with authorised capital up to
        fifteen lakh rupees currently pay zero filing fee on SPICe+) and the
        Tamil Nadu AoA stamp duty. Founders sometimes set a high authorised
        capital to look established, but there is no legal minimum capital and
        no advantage in an inflated figure at the start.
      </p>
      <p>
        A sensible approach is to set authorised capital a little above what you
        expect to issue in the first year or two, and increase it later when
        you raise funds. Our post on{" "}
        <Link href="/blog/authorised-vs-paid-up-capital">authorised versus paid-up capital</Link>{" "}
        explains the trade-off in more detail.
      </p>

      <h2>Stamp duty when you increase capital later</h2>
      <p>
        When authorised capital is increased, the company files SH-7 with the
        Registrar within thirty days of the alteration under section 64 of the
        Companies Act, 2013. Stamp duty on the increase is collected
        electronically through MCA21 at the same time, again computed by the
        system using the Tamil Nadu schedule. Building this into your fundraising
        plan avoids surprises. Ongoing filings like SH-7 are part of routine{" "}
        <Link href="/roc-compliances">ROC compliances</Link>.
      </p>

      <h2>Other documents that attract stamp duty</h2>
      <p>
        The MoA and AoA are not the only instruments. Share certificates issued
        to subscribers, rent agreements for the registered office, and
        agreements between founders can also attract duty under the Tamil Nadu
        schedule. The rates and the method of payment differ by instrument, so
        check each one separately rather than assuming SPICe+ covers it.
      </p>

      <h2>Common mistakes with stamp duty</h2>
      <ul>
        <li><strong>Selecting the wrong state:</strong> the duty is credited to the state chosen and cannot be moved later</li>
        <li><strong>Assuming another state&apos;s rate:</strong> online calculators often show rates for a different state or an outdated Tamil Nadu schedule</li>
        <li><strong>Letting the challan lapse:</strong> if one of the two challans is not paid within its validity, the transaction is cancelled and any refund of stamp duty follows the state&apos;s procedure</li>
        <li><strong>Ignoring the slab:</strong> picking an authorised capital just above a Rs. 10 lakh boundary without realising it adds a full slab</li>
        <li><strong>Forgetting SH-7:</strong> raising authorised capital later without budgeting for the duty on the increase</li>
      </ul>

      <h2>Where this fits in the overall cost</h2>
      <p>
        Stamp duty is one part of the government cost of incorporation. Our post
        on{" "}
        <Link href="/blog/government-fees-company-registration">government fees for company registration</Link>{" "}
        sets out the other statutory charges, and our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        covers the full process from name approval to certificate of
        incorporation.
      </p>
      <p>
        If you want help working out the stamp duty for your proposed capital
        structure, you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
