import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "share-allotment-after-incorporation",
  title: "Share Allotment After Incorporation: A Founder's Guide",
  description:
    "What founders must do with shares after incorporation: subscription money, INC-20A, share certificates within 60 days, PAS-3 for new issues and FC-GPR.",
  date: "2026-12-25",
  excerpt:
    "Subscriber shares, share certificates, INC-20A, PAS-3 and FC-GPR: the share-related steps a new private limited company must get right in year one.",
  faqs: [
    {
      question: "Do subscriber shares need to be allotted by a board resolution after incorporation?",
      answer:
        "No formal allotment is needed for subscribers' shares. The subscribers to the Memorandum become members on incorporation and their shares are treated as issued from that date. What remains is for the subscribers to pay the subscription money into the company's bank account, for the company to issue share certificates, and to file the INC-20A declaration.",
    },
    {
      question: "Within how many days must share certificates be issued?",
      answer:
        "Under section 56(4) of the Companies Act, 2013, a company must deliver share certificates to subscribers within two months of incorporation, and to allottees within two months of any later allotment. Certificates are issued under board authority, signed as the rules require, and stamped as applicable. Private companies that are not small companies must also follow the demat rules.",
    },
    {
      question: "When is Form PAS-3 required?",
      answer:
        "Form PAS-3, the return of allotment, is filed within 30 days of every allotment of shares after incorporation, whether through a rights issue, private placement, ESOP exercise or shares issued for consideration other than cash. It is not filed for the original subscriber shares, which are reported in the incorporation documents themselves.",
    },
    {
      question: "What reporting applies when shares are issued to a foreign investor?",
      answer:
        "Under FEMA, the company must issue the shares within 60 days of receiving the investment, failing which the money must be refunded within 15 days. It then reports the issue to the RBI in Form FC-GPR within 30 days of allotment, along with a valuation certificate supporting the price and the bank's confirmation of the inward remittance.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Incorporation gives a company its shareholders on paper. Several steps
        are still needed before that shareholding is properly in place: money
        has to move, certificates have to be issued, and declarations have to
        reach the Registrar on time. Many first-year compliance gaps in
        private limited companies relate to shares, and most are easy to
        avoid once the sequence is clear.
      </p>

      <h2>What happens to subscriber shares on incorporation?</h2>
      <p>
        The people who sign the Memorandum of Association as subscribers become
        members of the company on incorporation. Their shares are treated as
        taken up from that date, so no separate board allotment is needed. The
        number of shares and the amount each subscriber has agreed to pay are
        already recorded in the SPICe+ filing and e-MoA.
      </p>
      <p>
        What the incorporation does not do is put the money in the bank. Each
        subscriber must pay the agreed amount to the company, ideally by bank
        transfer from their own account to the company&apos;s current account,
        so that the payment trail is unambiguous.
      </p>

      <h2>INC-20A: the declaration that unlocks business</h2>
      <p>
        Section 10A requires a company with share capital to file a declaration
        in Form INC-20A within 180 days of incorporation, confirming that every
        subscriber has paid the value of the shares agreed to be taken. The
        company cannot commence business or exercise borrowing powers until
        the declaration is filed. On the MCA V3 portal the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/informational-services.html" target="_blank" rel="noopener noreferrer">
          INC-20A web form
        </a>{" "}
        captures subscriber payment details in the form itself and requires a
        photograph of the registered office, showing the building outside and
        inside with at least one director or key managerial person present.
      </p>
      <p>
        The penalties for missing it are not trivial: ₹50,000 for the company
        and ₹1,000 per day for each officer in default, up to ₹1 lakh. If the
        Registrar has reason to believe the company is not carrying on
        business, a missed declaration can also start the process of striking
        off the company&apos;s name.
      </p>

      <h2>Issuing share certificates</h2>
      <p>
        Section 56(4) sets the deadline: certificates for subscriber shares
        must be delivered within two months of incorporation. Practical points:
      </p>
      <ul>
        <li>Issue certificates under a board resolution, signed as required by the Companies (Share Capital and Debentures) Rules, 2014, typically by two directors or a director and the company secretary.</li>
        <li>Pay the applicable stamp duty on the issue of shares.</li>
        <li>Enter the details in the register of members, Form MGT-1, which every company must maintain.</li>
        <li>Check whether the company must hold its securities in dematerialised form. Under Rule 9B of the Companies (Prospectus and Allotment of Securities) Rules, 2014, private companies other than small companies must issue securities only in demat form. Most newly incorporated companies are small companies, but that can change as capital and turnover grow.</li>
      </ul>

      <h2>How are further shares issued?</h2>
      <p>
        After incorporation, every new issue of shares is an allotment that
        needs its own approvals and a return of allotment in Form PAS-3 within
        30 days. The common routes are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Typical use</th>
            <th>Key requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rights issue (section 62(1)(a))</td>
            <td>Existing shareholders adding capital in proportion to holdings</td>
            <td>Board approval, letter of offer to existing members, acceptance period</td>
          </tr>
          <tr>
            <td>Private placement (section 42 with section 62(1)(c))</td>
            <td>Bringing in an investor or a new co-founder</td>
            <td>Special resolution, valuation by a registered valuer, offer letter in PAS-4, record in PAS-5, money in a separate bank account</td>
          </tr>
          <tr>
            <td>ESOP exercise (section 62(1)(b))</td>
            <td>Employees exercising vested options</td>
            <td>Approved ESOP scheme, exercise in line with the plan</td>
          </tr>
          <tr>
            <td>Consideration other than cash</td>
            <td>Business or asset taken over in exchange for shares</td>
            <td>Valuation, agreement attached to PAS-3</td>
          </tr>
        </tbody>
      </table>
      <p>
        In a private placement, the money must come from the investor&apos;s
        own bank account, and shares must be allotted within 60 days of receipt.
        If they are not, the money must be returned within the next 15 days,
        with interest at 12% a year from the sixtieth day if it is returned late.
        Before any further issue, check that the authorised capital is large
        enough; if not, increase it and file Form SH-7.
      </p>

      <h2>Allotment or transfer: what is the difference?</h2>
      <p>
        Founders sometimes use the words interchangeably, but they are
        different transactions with different paperwork.
      </p>
      <ul>
        <li>
          <strong>Allotment</strong> creates new shares. Money or other
          consideration comes into the company, the paid-up capital increases,
          and the company files PAS-3. Shareholder approvals depend on the
          route used.
        </li>
        <li>
          <strong>Transfer</strong> moves existing shares from one shareholder
          to another. The company&apos;s capital does not change and no PAS-3
          is filed. The transfer is executed through an instrument in Form
          SH-4, stamped as required, and registered by the company in line
          with its articles, which usually restrict transfers in a private
          company.
        </li>
      </ul>
      <p>
        The tax treatment also differs. A transfer can give the seller a
        capital gain, and a transfer or issue at less than fair market value
        can create taxable income for the person receiving the shares under
        income-tax rules. Since the provision taxing share premium above fair
        value was abolished from the 2024-25 financial year, the bigger risk
        for most startups now lies in issues or transfers priced too low,
        rather than too high.
      </p>

      <h2>Board minutes and registers</h2>
      <p>
        Every allotment should be traceable through the company&apos;s own
        records, not just the MCA filings. That means board minutes approving
        the allotment, shareholder resolutions where required, a register of
        members updated on the date of allotment, and copies of the offer
        letters, applications and bank statements showing receipt of money.
        Investors, banks and auditors will ask for this trail, and it is far
        easier to maintain as you go than to reconstruct at due diligence.
      </p>

      <h2>Shares issued to non-residents: FEMA reporting</h2>
      <p>
        If a shareholder is a non-resident, including an NRI subscribing on a
        repatriation basis or a foreign company, foreign exchange rules add
        another layer:
      </p>
      <ul>
        <li>Shares must be issued within 60 days of receiving the funds, otherwise the money must be refunded within 15 days.</li>
        <li>The price must not be less than the fair value determined by a chartered accountant, SEBI-registered merchant banker or practising cost accountant using an internationally accepted pricing method.</li>
        <li>The issue is reported in Form FC-GPR on the RBI&apos;s FIRMS portal within 30 days of allotment.</li>
        <li>The sector must permit foreign investment under the automatic route, or prior approval is needed.</li>
      </ul>
      <p>
        Late FC-GPR filings attract late submission fees and, if serious,
        compounding. Our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page
        explains the foreign investment reporting cycle.
      </p>

      <h2>A first-year share compliance checklist</h2>
      <ol>
        <li>Open the company bank account and collect subscription money from each subscriber.</li>
        <li>Issue share certificates within two months of incorporation and update the register of members.</li>
        <li>File INC-20A within 180 days, before starting business or borrowing.</li>
        <li>For each later allotment, pass the right resolutions, file MGT-14 where a special resolution is involved, and file PAS-3 within 30 days.</li>
        <li>For non-resident shareholders, complete FEMA pricing and file FC-GPR within 30 days of allotment.</li>
      </ol>
      <p>
        These filings sit alongside the rest of a company&apos;s{" "}
        <Link href="/roc-compliances">ROC compliances</Link>. If you have just
        incorporated and want your share records set up correctly, you can{" "}
        <Link href="/contact">get in touch with our team</Link>.
      </p>
    </>
  );
}
