import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources: FEMA (Mode of Payment and Reporting of Non-Debt Instruments)
// Regulations, 2019 (FEMA 395/2019-RB, consolidated up to 13 June 2026):
// Sch I Part A (issue within 60 days, refund within 15 days), reg 4(1) (FC-GPR
// within 30 days of issue), reg 5 (LSF). LSF matrix: A.P. (DIR Series)
// Circular No. 16 dated 30 Sep 2022 (Rs 7,500 + 0.025% x A x n; cap 100% of A;
// up to 3 years; advice void if unpaid in 30 days). Valuer: MD Foreign
// Investment in India (updated up to 15 June 2026) para 8.1.1(2).
// Documents: MD Reporting under FEMA lists attachments only for the case where
// the allottee differs from the remitter (KYC of both, NOC, letter, agreement
// or board resolution); checked against the June 2021 text on rbi.org.in, as
// the current PDF sits behind a CAPTCHA. MD-FII requires the statutory
// auditor's certificate for shares issued against pre-incorporation expenses.
// Other rows are AD bank practice and are labelled "commonly requested".
export const meta: BlogPostMeta = {
  slug: "fc-gpr-filing-deadline",
  title: "FC-GPR Filing 2026: 30-Day Deadline, Documents, Late Fee",
  description:
    "FC-GPR is filed on the RBI FIRMS portal within 30 days of allotting shares to a foreign investor. Documents needed and how the late submission fee works.",
  date: "2026-11-13",
  excerpt:
    "An Indian company that allots shares to a foreign investor has 30 days to report it in FC-GPR. Here is the timeline, the documents the form needs, and the late submission fee formula.",
  summary:
    "FC-GPR reports an issue of equity instruments by an Indian company to a foreign investor. It is filed on the RBI's FIRMS portal, through the company's AD bank, within 30 days of the date of issue. A late filing can be regularised within three years with a fee of ₹7,500 plus 0.025% of the amount per year of delay.",
  faqs: [
    {
      question: "What is the due date for FC-GPR?",
      answer:
        "Not later than 30 days from the date of issue of the equity instruments, under regulation 4(1) of the FEMA (Mode of Payment and Reporting of Non-Debt Instruments) Regulations, 2019. The date of issue is the allotment date, not the date the foreign investment money arrived in India.",
    },
    {
      question: "How long does a company have to allot shares after receiving FDI money?",
      answer:
        "Sixty days from the date the consideration is received. If the shares are not issued within that time, the money must be refunded to the investor within 15 days after the 60 days end, by outward remittance or credit to the investor's repatriable account in India.",
    },
    {
      question: "What is the late submission fee for FC-GPR?",
      answer:
        "Under the RBI's September 2022 circular, it is ₹7,500 plus 0.025% of the amount involved multiplied by the years of delay, with the delay rounded up to the nearest month. The fee cannot exceed the amount involved. The option is available for up to three years from the due date.",
    },
    {
      question: "Who issues the valuation certificate for FC-GPR?",
      answer:
        "For an unlisted company, the price must not be below the fair value worked out by an internationally accepted pricing method and certified by a Chartered Accountant, a SEBI-registered merchant banker or a practising cost accountant. Keeping the valuation date close to the issue date avoids questions.",
    },
    {
      question: "What happens if FC-GPR is more than three years late?",
      answer:
        "The late submission fee route is no longer available, so the delay becomes a contravention of FEMA that has to be compounded. Compounding applications are made to the Reserve Bank under its Master Direction on compounding of contraventions, which was last updated in October 2026.",
    },
    {
      question: "Is FC-GPR filed for convertible notes or share warrants?",
      answer:
        "FC-GPR covers equity instruments reckoned as foreign direct investment, which include equity shares, compulsorily convertible preference shares and debentures, and share warrants. Convertible notes issued by start-ups are reported in a separate form on the FIRMS portal, so check which form applies before filing.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        When an Indian company issues shares to a foreign parent, a venture fund
        or any other person resident outside India, the issue has to be
        reported to the Reserve Bank of India in Form FC-GPR. The deadline is
        short and the RBI counts it strictly. This post covers the 30-day rule,
        the 60-day allotment window that comes before it, the documents the form
        needs and how the late submission fee is worked out.
      </p>

      <h2>What is FC-GPR and when is it due?</h2>
      <p>
        FC-GPR (Foreign Currency-Gross Provisional Return) is the report of an
        issue of equity instruments by an Indian company to a person resident
        outside India, where the issue counts as foreign direct investment.
        Regulation 4(1) of the{" "}
        <a href="https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11723&Mode=0" target="_blank" rel="noopener noreferrer">
          FEMA (Mode of Payment and Reporting of Non-Debt Instruments)
          Regulations, 2019
        </a>{" "}
        requires it not later than 30 days from the date of issue. The RBI&apos;s
        consolidated text of those regulations is amended up to 13 June 2026,
        and the 30-day rule is unchanged.
      </p>
      <p>
        There are really two deadlines, and the first one is often missed:
      </p>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Time limit</th>
            <th>Consequence if missed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Money received from the foreign investor</td>
            <td>Day 0</td>
            <td>Not applicable</td>
          </tr>
          <tr>
            <td>Equity instruments issued (allotment)</td>
            <td>Within 60 days of receiving the money</td>
            <td>Refund due within the next 15 days; a late allotment is a contravention</td>
          </tr>
          <tr>
            <td>FC-GPR filed on FIRMS</td>
            <td>Within 30 days of the allotment</td>
            <td>Late submission fee, or compounding after three years</td>
          </tr>
        </tbody>
      </table>
      <p>
        So, at the outside, a company has about 90 days from receiving the
        money to complete reporting. Because the 60-day allotment window runs
        first, plan the board meeting and valuation before the money arrives.
        Our post on{" "}
        <Link href="/blog/share-allotment-after-incorporation">share allotment after incorporation</Link>{" "}
        covers the company law steps.
      </p>

      <h2>Which share issues need FC-GPR in practice?</h2>
      <p>
        Any issue of equity instruments to a person resident outside India that
        counts as foreign direct investment needs its own FC-GPR. For Indian
        subsidiaries of foreign groups, the common cases are:
      </p>
      <ul>
        <li>
          <strong>Subscriber shares at incorporation</strong> taken by the
          foreign parent, reported within 30 days of issue like any other
          allotment.
        </li>
        <li>
          <strong>Further issues to fund operations</strong>, by rights issue or
          private placement, each reported separately.
        </li>
        <li>
          <strong>Shares issued against pre-incorporation expenses</strong> paid
          by the parent. The Master Direction requires FC-GPR within 30 days of
          issue and not later than one year from incorporation, with the
          expenses verified by the statutory auditor.
        </li>
        <li>
          <strong>Shares issued against imported capital goods</strong>, which
          need an independent valuation and, where applicable, Government
          approval.
        </li>
      </ul>
      <p>
        Two related events use different forms. A transfer of existing shares
        between a resident and a non-resident is reported in FC-TRS within 60
        days, under regulation 4(3). An Indian company with foreign investment
        that invests further in another Indian company reports that downstream
        investment in Form DI. Both are filed on FIRMS and carry the same late
        submission fee formula.
      </p>

      <h2>Who files FC-GPR, and where?</h2>
      <p>
        The Indian company that issues the instruments files it. Equity
        instruments for this purpose include equity shares, compulsorily
        convertible preference shares, compulsorily convertible debentures and
        share warrants. The form is filed on the RBI&apos;s FIRMS (Foreign
        Investment Reporting and Management System) portal and is processed
        through the company&apos;s authorised dealer (AD) bank, the bank that
        received the foreign remittance.
      </p>
      <p>
        Before the first filing, the company needs two things on FIRMS: an
        Entity Master, which records the company&apos;s foreign investment
        profile, and a Business User registration for the person who will
        file. An entity without an Entity Master cannot report foreign
        investment, so this is worth doing as soon as foreign investment is
        expected, not after the money arrives.
      </p>

      <h2>What documents does FC-GPR need?</h2>
      <p>
        The RBI&apos;s Master Direction on Reporting under FEMA says FC-GPR is
        filed in the Single Master Form on FIRMS, but it does not set out a
        general list of attachments. The documents below are the ones AD banks
        commonly ask for before they verify the form. Your AD bank may ask for
        more or fewer, so check its list early.
      </p>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>What it shows</th>
            <th>Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foreign inward remittance certificate (FIRC) and the bank&apos;s KYC of the investor</td>
            <td>The money came through banking channels from the investor named in the form</td>
            <td>Commonly requested by AD banks</td>
          </tr>
          <tr>
            <td>Valuation certificate</td>
            <td>The issue price is not below fair value, certified by a Chartered Accountant, SEBI-registered merchant banker or practising cost accountant (for an unlisted company)</td>
            <td>The fair value pricing rule is in the Master Direction on Foreign Investment; the certificate itself is commonly requested by AD banks</td>
          </tr>
          <tr>
            <td>Company secretary&apos;s certificate</td>
            <td>The company has complied with the Companies Act and the FEMA conditions for the issue</td>
            <td>Commonly requested by AD banks</td>
          </tr>
          <tr>
            <td>Board or shareholder resolution for the allotment, with the list of allottees</td>
            <td>The date of issue and the number and type of instruments</td>
            <td>Commonly requested by AD banks</td>
          </tr>
          <tr>
            <td>Declaration by the authorised representative</td>
            <td>Sector, entry route and sectoral cap have been checked</td>
            <td>Commonly requested by AD banks</td>
          </tr>
          <tr>
            <td>Statutory auditor&apos;s certificate on pre-incorporation or pre-operative expenses</td>
            <td>The expenses against which the shares were issued were used for that purpose</td>
            <td>Required by the Master Direction on Foreign Investment, only where shares are issued against such expenses</td>
          </tr>
        </tbody>
      </table>
      <p>
        One case has its own list in the Master Direction on Reporting. Where
        the shares are issued to a person other than the one who sent the
        remittance, FC-GPR has to be filed with KYC reports of both the
        remitter and the beneficial owner, a no-objection certificate from the
        remitter stating their relationship, a letter from the beneficial owner
        explaining why the remitter paid on its behalf, and the agreement or
        board resolution for issuing the shares to someone other than the
        remitter.
      </p>
      <p>
        The pricing rule for unlisted companies is in the RBI&apos;s{" "}
        <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200" target="_blank" rel="noopener noreferrer">
          Master Direction on Foreign Investment in India
        </a>
        , updated up to 15 June 2026. A rights issue or other special case can
        have its own pricing rule, so confirm which applies. The figures in the
        FIRC, the valuation, the allotment and the form should agree to the
        rupee; a mismatch is a common reason for a form to be returned.
      </p>

      <h2>How is the FC-GPR late submission fee calculated?</h2>
      <p>
        Regulation 5 of the 2019 regulations allows a late filing to be
        regularised by paying a late submission fee (LSF) set by the RBI. The
        current matrix is in{" "}
        <a href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12393&Mode=0" target="_blank" rel="noopener noreferrer">
          A.P. (DIR Series) Circular No. 16 dated 30 September 2022
        </a>
        , carried into the{" "}
        <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202" target="_blank" rel="noopener noreferrer">
          Master Direction on Reporting under FEMA
        </a>
        , updated as on 1 October 2026. For returns that capture flows, such as
        FC-GPR:
      </p>
      <p>
        <strong>LSF = ₹7,500 + (0.025% × A × n)</strong>
      </p>
      <ul>
        <li><strong>A</strong> is the amount involved in the delayed report.</li>
        <li><strong>n</strong> is the delay in years, rounded up to the nearest month and expressed up to two decimal places.</li>
        <li>The fee cannot exceed 100% of A, rounded up to the nearest hundred.</li>
        <li>The LSF route is available for up to three years from the due date.</li>
        <li>An LSF advice not paid within 30 days lapses, and the delay is then recalculated.</li>
      </ul>
      <p>Some worked examples, before any rounding the RBI applies:</p>
      <table>
        <thead>
          <tr>
            <th>Amount involved (A)</th>
            <th>Delay</th>
            <th>n</th>
            <th>Variable part</th>
            <th>Total LSF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>₹2 crore</td>
            <td>45 days (2 months)</td>
            <td>0.17</td>
            <td>₹850</td>
            <td>₹8,350</td>
          </tr>
          <tr>
            <td>₹1 crore</td>
            <td>6 months</td>
            <td>0.50</td>
            <td>₹1,250</td>
            <td>₹8,750</td>
          </tr>
          <tr>
            <td>₹10 crore</td>
            <td>2 years</td>
            <td>2.00</td>
            <td>₹50,000</td>
            <td>₹57,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        The fixed ₹7,500 applies to each delayed form, so a company that made
        three allotments and reported all three late pays it three times. In
        2026 the RBI changed how the fee applies to some external commercial
        borrowing returns, but the FC-GPR formula has not changed since 2022.
      </p>

      <h2>What if the delay is more than three years?</h2>
      <p>
        Beyond three years, the LSF option closes and the delay is treated as a
        contravention of FEMA, to be compounded. The same applies to a late
        allotment beyond 60 days or a missed refund, which an LSF does not cure.
        Compounding is done under the RBI&apos;s Master Direction on compounding
        of contraventions, updated on 23 October 2026, and involves an
        application, a compounding amount set by the RBI and an order. It costs
        more time than an LSF filing, which is why reporting gaps should be
        fixed while they are still inside three years.
      </p>

      <h2>What should be checked before the 30 days run out?</h2>
      <ul>
        <li>The sector is under the automatic route and within the sectoral cap, or Government approval is in hand.</li>
        <li>The investor&apos;s name, country and amount match across the FIRC, KYC, allotment resolution and form.</li>
        <li>The allotment date used in the form is the date in the board resolution, not the date of the return of allotment.</li>
        <li>The valuation certificate supports the issue price and names the method used.</li>
        <li>The Entity Master on FIRMS reflects the latest shareholding before the new issue.</li>
        <li>Any earlier allotment to a non-resident was itself reported; a gap in the history is better fixed before the next filing.</li>
      </ul>

      <h2>How do you file FC-GPR step by step?</h2>
      <ol>
        <li>Complete the Entity Master and Business User registration on FIRMS, if not already done.</li>
        <li>Receive the investment into the company&apos;s bank account and obtain the FIRC and KYC from the AD bank.</li>
        <li>Obtain the valuation certificate dated close to the issue.</li>
        <li>Allot the shares by board resolution within 60 days of receiving the money, and file the return of allotment with the ROC.</li>
        <li>Obtain the company secretary&apos;s certificate and any other documents your AD bank asks for.</li>
        <li>Fill FC-GPR on FIRMS within 30 days of allotment, upload the documents and submit.</li>
        <li>Answer any queries from the AD bank, which verifies the form and forwards it to the RBI.</li>
        <li>Keep the approval acknowledgement with the company&apos;s statutory records.</li>
      </ol>
      <p>
        FC-GPR is one of several RBI filings a foreign-owned company makes. The
        annual FLA return, due on 15 July each year, is another. Our{" "}
        <Link href="/tools/foreign-subsidiary-compliance-calendar">foreign subsidiary compliance calendar</Link>{" "}
        maps them, and our page for{" "}
        <Link href="/india-subsidiary-for-us-companies">US companies setting up an Indian subsidiary</Link>{" "}
        explains the first-year sequence.
      </p>
      <p>
        C S Rushil &amp; Co. prepares FC-GPR filings, valuation support and late
        submission fee applications from Anna Nagar, Chennai, and online, as
        part of our <Link href="/fema-rbi-compliance">FEMA and RBI compliance services</Link>.
      </p>
    </>
  );
}
