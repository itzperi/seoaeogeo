import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "authorised-vs-paid-up-capital",
  title: "Authorised vs Paid-Up Capital: What Founders Should Know",
  description:
    "Authorised vs paid-up capital explained: why there is no minimum capital, how capital affects MCA fees and stamp duty, and how to increase it using form SH-7.",
  date: "2026-11-13",
  excerpt:
    "Authorised capital is the ceiling; paid-up capital is what shareholders have actually paid. Here is how to set both, and how to increase capital later.",
  faqs: [
    {
      question: "What is the difference between authorised and paid-up capital?",
      answer:
        "Authorised capital is the maximum share capital a company is allowed to issue under its Memorandum of Association. Paid-up capital is the amount shareholders have actually paid on shares issued to them. So Rs. 10 lakh authorised and Rs. 1 lakh issued and fully paid means Rs. 1 lakh paid-up capital, with room to issue more.",
    },
    {
      question: "Is there a minimum capital to register a private limited company?",
      answer:
        "No. The Companies (Amendment) Act, 2015 omitted the earlier requirement of a minimum paid-up capital of one lakh rupees for private companies, effective 29 May 2015. A private limited company can be incorporated with any amount of capital, though each subscriber must take at least one share and the capital should be realistic for the business.",
    },
    {
      question: "How do I increase the authorised capital of my company?",
      answer:
        "If the Articles permit it, the shareholders approve the increase by resolution in a general meeting under section 61 of the Companies Act, 2013, and the company files form SH-7 with the Registrar within 30 days with the altered Memorandum, as required by section 64. Filing fees and state stamp duty on the increase are paid through MCA21.",
    },
    {
      question: "What is the penalty for not filing SH-7 on time?",
      answer:
        "Section 64(2) of the Companies Act, 2013 provides a penalty of five hundred rupees for each day the default continues, subject to a maximum of five lakh rupees for the company and one lakh rupees for each officer in default. Additional filing fees for late filing also apply under the fee rules.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        One of the first questions in any incorporation is how much capital the
        company should have. Two figures are involved, and they are often
        confused: authorised capital and paid-up capital. They affect different
        things, from government fees and stamp duty to how the company looks to
        a bank. This post explains both and how to set them sensibly.
      </p>

      <h2>The four capital terms in plain English</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Authorised capital</td>
            <td>The maximum share capital the company can issue, stated in the capital clause of the MoA</td>
          </tr>
          <tr>
            <td>Issued capital</td>
            <td>The part of authorised capital actually offered to shareholders</td>
          </tr>
          <tr>
            <td>Subscribed capital</td>
            <td>The part of issued capital that shareholders have agreed to take; at incorporation, this is what the subscribers to the MoA sign for</td>
          </tr>
          <tr>
            <td>Paid-up capital</td>
            <td>The amount shareholders have actually paid on the shares allotted to them</td>
          </tr>
        </tbody>
      </table>
      <p>
        For most new private companies, issued, subscribed and paid-up capital
        are the same figure: the subscribers take their shares at incorporation
        and pay in full. Authorised capital is usually higher, leaving room to
        issue more shares without changing the MoA.
      </p>

      <h2>Is there a minimum capital?</h2>
      <p>
        No. The{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        originally required a private company to have a minimum paid-up capital
        of one lakh rupees. The Companies (Amendment) Act, 2015 removed those
        words with effect from 29 May 2015. Today a private limited company can
        be incorporated with any amount of capital. Section 4 still requires
        each subscriber to the MoA to take at least one share.
      </p>
      <p>
        That said, a very small paid-up capital can make a company look
        thinly funded to banks, landlords and customers. Choose an amount that
        reflects what the founders are genuinely putting in.
      </p>

      <h2>How authorised capital affects government costs</h2>
      <p>
        Authorised capital drives two statutory costs at incorporation:
      </p>
      <ul>
        <li><strong>MCA filing fee:</strong> the MCA&apos;s{" "}
          <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
          confirm that companies with authorised capital up to Rs. 15 lakh pay zero filing fee; above that, the fee rises with capital</li>
        <li><strong>Stamp duty:</strong> in Tamil Nadu, the duty on the Articles of Association is linked to authorised capital, charged per slab of ten lakh rupees subject to a cap, while the duty on the MoA is a fixed amount</li>
      </ul>
      <p>
        Our posts on{" "}
        <Link href="/blog/government-fees-company-registration">government fees</Link>{" "}
        and{" "}
        <Link href="/blog/tamil-nadu-stamp-duty-company-incorporation">Tamil Nadu stamp duty</Link>{" "}
        explain these in detail. Paid-up capital does not affect these
        incorporation charges.
      </p>

      <h2>How to choose the right numbers</h2>
      <ul>
        <li><strong>Paid-up capital:</strong> what founders will actually deposit into the company bank account soon after incorporation. It should cover early expenses, or the company will rely heavily on director loans.</li>
        <li><strong>Authorised capital:</strong> a figure with some headroom above paid-up capital, so you can issue shares to a new co-founder, an ESOP pool or a small round without immediately amending the MoA.</li>
        <li><strong>Face value:</strong> Rs. 10 per share is common, but any value is allowed except zero. A lower face value gives more flexibility in splitting equity.</li>
      </ul>
      <p>
        There is little benefit in setting a very high authorised capital at
        the start. It increases incorporation costs and does not make the
        company look bigger to anyone who reads its financial statements,
        which show paid-up capital.
      </p>

      <h2>A worked example</h2>
      <p>
        Two founders in Chennai plan to put in Rs. 50,000 each and expect to
        bring in an angel investor for about 10 per cent within a year. They
        choose:
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Choice</th>
            <th>Reasoning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Face value</td>
            <td>Rs. 10 per share</td>
            <td>Common and easy to work with</td>
          </tr>
          <tr>
            <td>Subscribed and paid-up capital</td>
            <td>Rs. 1,00,000 (10,000 shares)</td>
            <td>What the founders are actually investing</td>
          </tr>
          <tr>
            <td>Authorised capital</td>
            <td>Rs. 10,00,000 (1,00,000 shares)</td>
            <td>Room to issue shares to the angel and an ESOP pool, within the zero-fee band and the first Tamil Nadu AoA slab</td>
          </tr>
        </tbody>
      </table>
      <p>
        If the angel invests at a premium, the company issues only a small
        number of new shares at a price above face value, so authorised capital
        is used up by the face value of shares issued, not by the total amount
        invested. That is why a modest authorised capital often lasts longer
        than founders expect.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Mismatched figures:</strong> MCA lists a mismatch between capital in the MoA and in the SPICe+ form as a rejection ground</li>
        <li><strong>Zero face value:</strong> the nominal value of a share cannot be entered as zero</li>
        <li><strong>Unpaid subscriptions:</strong> subscribers who never transfer their money block the INC-20A declaration</li>
        <li><strong>Issuing beyond authorised capital:</strong> shares cannot be allotted until authorised capital has been increased and SH-7 filed</li>
        <li><strong>Treating director loans as capital:</strong> money a director lends to the company is a loan, not share capital, and is recorded and repaid differently</li>
      </ul>

      <h2>The paid-up capital must actually be paid</h2>
      <p>
        Subscribers must pay for the shares they agreed to take. Section 10A
        requires a director to file INC-20A within 180 days of incorporation,
        declaring that every subscriber has paid the value of their shares, and
        the current form asks for the bank and date of each receipt. Until this
        is done, the company cannot commence business or borrow. See our post on{" "}
        <Link href="/blog/inc-20a-commencement-of-business">INC-20A</Link>.
      </p>
      <p>
        Share certificates must be issued to subscribers within two months of
        incorporation under section 56(4). Our{" "}
        <Link href="/blog/first-board-meeting-checklist">first board meeting checklist</Link>{" "}
        covers how this is done.
      </p>

      <h2>Increasing authorised capital later</h2>
      <p>
        When you need to issue more shares than the authorised capital allows,
        increase it first:
      </p>
      <ul>
        <li>Check that the Articles permit an increase (most standard articles do)</li>
        <li>Hold a board meeting to approve the proposal and call a general meeting</li>
        <li>Pass the shareholders&apos; resolution under section 61 of the Companies Act</li>
        <li>File form SH-7 with the Registrar within thirty days of the alteration, with the altered MoA, under section 64</li>
        <li>Pay the MCA filing fee and the stamp duty on the increase, both collected through MCA21</li>
      </ul>
      <p>
        Section 64(2) sets a penalty of five hundred rupees per day of default,
        up to five lakh rupees for the company and one lakh rupees for each
        officer in default, so do not leave SH-7 to the last minute. Once the
        authorised capital is increased, issuing new shares involves separate
        steps, such as a rights issue or private placement, with their own
        filings.
      </p>

      <h2>Increasing paid-up capital</h2>
      <p>
        Paid-up capital increases when the company allots new shares and
        receives payment. Common routes for private companies are a rights issue
        to existing shareholders, a private placement to new investors, or
        conversion of loans where the terms allow. Each requires board and
        sometimes shareholder approval, a return of allotment in form PAS-3, and
        where the new shareholder is non-resident, FEMA reporting. Our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page
        covers the foreign investment side.
      </p>

      <h2>How capital appears in the financial statements</h2>
      <p>
        In the balance sheet, share capital is shown with authorised, issued,
        subscribed and paid-up capital disclosed separately, along with the
        number of shares and their face value. Any amount received above face
        value is shown as securities premium, not as share capital. Lenders,
        investors and tender authorities usually look at paid-up capital and net
        worth, not authorised capital, when assessing a company.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>Authorised capital is the ceiling; paid-up capital is the money actually in</li>
        <li>There is no minimum capital for a private limited company</li>
        <li>Authorised capital affects MCA fees and state stamp duty</li>
        <li>Increasing authorised capital requires a shareholders&apos; resolution and SH-7 within thirty days</li>
      </ul>
      <p>
        For the full incorporation process, see our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>,
        and our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> page for capital
        changes. If you would like help structuring your capital, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
