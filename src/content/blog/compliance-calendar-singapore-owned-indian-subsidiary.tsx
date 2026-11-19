import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources (checked 19 November 2026):
// Companies Act, 2013, India Code consolidated text "as on 1 September 2026": ss. 2(41) first and second provisos
//   (Central Government, substituted by Act 22 of 2019 w.e.f. 2-11-2018), 2(85) proviso, 10A(1), 12(4) and (5),
//   42(8), 92(4), 96(1), 101(1), 113(1)(a), 117(1), 137(1), 168(1), 170(2), 173(1) and (2).
// PAS Rules, 2014 rule 12(1) (PAS-3, 30 days); director rules, 2014 rules 8, 9, 15, 16 (India Code copies).
// G.S.R. 943(E) dated 31 Dec 2025 (rule 12A, in force 31 Mar 2026) and G.S.R. 300(E) dated 21 Apr 2026 (Rs 5,000), egazette.gov.in.
// G.S.R. 159(E) dated 5 Mar 2021 (rule 11(1), MGT-7A for OPCs and small companies), India Code copy.
// Deposits rules: Explanation to rule 16 (G.S.R. 45(E), 2019, India Code); DPT-3 by 30 June per MCA DPT-3 instruction kit.
// FEMA 395/2019-RB (amended up to 13 June 2026), rbi.org.in: Sch I A(2)-(3), regs 4(1), 4(2), 4(3), 4(11).
// Income-tax Act, 2025 ss. 3, 263(1)(c) and 408; Income-tax Rules, 2026 rule 219(4) (incometaxindia.gov.in section pages).
// e-filing tax payments FAQ: TDS by the 7th, March by 30 April, Rule 218 keeps Rule 30 timelines (incometax.gov.in).
// 1961 Act dates (92E report 31 October; return 30 November for 92E cases; 200(3) statements): Income Tax Department limitation periods page.
// CGST Rules rule 80(1) and (3): GSTR-9 by 31 December, GSTR-9C above Rs 5 crore (taxinformation.cbic.gov.in).
// Verified Act mappings (repo): 195 = 393(2); 201(1A) = 398; 15CA/15CB = 145/146; 24Q/26Q/27Q = 138/140/144; 10F = 41; 3CEB = 48 (s.172).
export const meta: BlogPostMeta = {
  slug: "compliance-calendar-singapore-owned-indian-subsidiary",
  title: "Compliance Calendar for a Singapore-Owned Indian Subsidiary",
  description:
    "Every Indian filing for a Singapore-owned subsidiary from April 2026 to March 2027, month by month, plus event-driven RBI, ROC and TDS filings and parent tasks.",
  date: "2026-12-01",
  excerpt:
    "A month-by-month Indian compliance calendar for April 2026 to March 2027, written for finance teams at a Singapore parent, with the event-driven filings and the points where the parent has to act.",
  faqs: [
    {
      question: "Is Form 3CEB or Form 48 due from the subsidiary in 2026?",
      answer:
        "Form 3CEB, for financial year 2025-26, by 31 October 2026 under section 92E of the Income-tax Act, 1961, with the return by 30 November 2026. Form 48 is its replacement under section 172 of the Income-tax Act, 2025, and for tax year 2026-27 is expected to be due by 31 October 2027.",
    },
    {
      question: "Can a wholly owned subsidiary of a Singapore company file MGT-7A?",
      answer:
        "No. MGT-7A is the shorter annual return for One Person Companies and small companies, and the proviso to section 2(85) of the Companies Act, 2013 says a holding or subsidiary company cannot be a small company, whatever its capital or turnover. A Singapore-owned subsidiary files the full MGT-7 within 60 days of its AGM.",
    },
    {
      question: "How long does the subsidiary have to issue shares after the parent sends money?",
      answer:
        "Sixty days from receiving the money, under Schedule I of the RBI's FEMA reporting regulations; otherwise the money must be refunded within the next 15 days. After allotment, FC-GPR is due within 30 days, and the return of allotment to the Registrar within 15 or 30 days depending on how the shares were offered.",
    },
    {
      question: "Do the Singapore directors have to come to India for board meetings?",
      answer:
        "No. Section 173(2) of the Companies Act, 2013 allows directors to take part through video conferencing or other audio-visual means, as prescribed. The company must still hold at least four board meetings a year with no more than 120 days between two of them, so it helps to fix the dates a year ahead.",
    },
    {
      question: "If the subsidiary gets approval for a December year-end, do its tax dates move?",
      answer:
        "No. Company law dates move with the approved financial year, so the AGM would fall within six months of 31 December. But the Income-tax Act, 2025 defines the tax year as the financial year starting on 1 April, and the RBI reckons the FLA year as April to March, so tax and FLA dates stay put.",
    },
    {
      question: "Does every payment to the Singapore parent need TDS?",
      answer:
        "Not every payment is taxable in India, but each one should be checked before it is made. Where tax is deductible, it is deposited by the 7th of the following month and reported quarterly in Form 144. The remittance is reported in Form 145, with a Chartered Accountant's certificate in Form 146 where the rules require one.",
    },
    {
      question: "What does the Singapore parent sign in a typical Indian year?",
      answer:
        "Usually a board resolution naming its representative for the Indian AGM, a consent to shorter notice if the AGM is called early, subscription papers for any new shares, intercompany agreements, and residency documents when it claims treaty rates on payments from India. A share transfer between the parent and a resident also needs its signature.",
    },
    {
      question: "Do you prepare the Singapore parent's own filings?",
      answer:
        "No. C S Rushil & Co. advises on Indian law and prepares the Indian subsidiary's filings only. Singapore tax, IRAS and ACRA filings and Singapore company law stay with the parent's Singapore adviser, with whom we coordinate on figures and timing. We serve Singapore clients online from our office in Anna Nagar, Chennai.",
    },
  ],
  summary:
    "A Singapore-owned Indian subsidiary runs on India's April to March year whatever the parent's year-end. From April 2026 to March 2027 it has fixed dates (advance tax, TDS, FLA by 15 July, AGM by 30 September, Form 3CEB by 31 October, return by 30 November) and event-driven filings such as FC-GPR within 30 days of allotment.",
};

export default function Body() {
  return (
    <>
      <p>
        An Indian private limited company owned by a Singapore company keeps two calendars at once. Its own deadlines
        run on India&apos;s April to March year and come from the Companies Act, 2013, the income tax law and the
        RBI&apos;s foreign exchange (FEMA) reporting rules. Its parent, and the parent&apos;s Singapore adviser, work to
        their own year-end and filing season. This guide lists every dated Indian filing between April 2026 and March
        2027, the filings that are triggered by events rather than dates, and the points where the Singapore parent has
        to act. If the subsidiary is not set up yet, start with our guide to{" "}
        <Link href="/india-subsidiary-for-singapore-companies">setting up an Indian subsidiary from Singapore</Link>.
      </p>
      <p>
        One thing makes this year unusual. Tax year 2026-27 is the first under the Income-tax Act, 2025, which applies
        from 1 April 2026. But the year-end filings made during 2026 for financial year 2025-26, such as the transfer
        pricing report and the November return, still fall under the Income-tax Act, 1961. The tables say which Act each
        date belongs to.
      </p>

      <h2>Which Indian deadlines fall between April 2026 and March 2027?</h2>
      <p>
        The fixed dates this year are monthly TDS deposits, quarterly TDS statements, four advance tax instalments,
        DPT-3 by 30 June, the FLA return by 15 July, the AGM by 30 September, Form 3CEB by 31 October, MGT-7 and the
        income tax return in November, and GSTR-9 by 31 December. The table assumes a 31 March year-end and a 30
        September 2026 AGM.
      </p>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Indian filing or deadline</th>
            <th>Form and law</th>
            <th>Who prepares</th>
            <th>Singapore parent touchpoint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>April 2026</td>
            <td>TDS deducted in March 2026 deposited by 30 April.</td>
            <td>TDS: 1961 Act, FY 2025-26</td>
            <td>Accounts team and the company&apos;s CA</td>
            <td>Group finance asks for the March close and intercompany balance confirmations.</td>
          </tr>
          <tr>
            <td>May 2026</td>
            <td>April TDS deposited by 7 May, the first deposit for tax year 2026-27. Fourth-quarter TDS statements for January to March 2026 by 31 May.</td>
            <td>Deposit: Rule 218, Income-tax Rules, 2026. Statements: Forms 24Q, 26Q and 27Q, section 200(3) of the 1961 Act</td>
            <td>Company&apos;s CA</td>
            <td>Indian statutory audit of FY 2025-26 under way; the group auditor may ask for its timetable.</td>
          </tr>
          <tr>
            <td>June 2026</td>
            <td>First advance tax instalment, 15% of the 2026-27 estimate, by 15 June. DPT-3 by 30 June. DIR-3 KYC Web by 30 June, only for directors whose three-year cycle falls due.</td>
            <td>Section 408, Income-tax Act, 2025. Rule 16, Companies (Acceptance of Deposits) Rules, 2014. Rule 12A, director rules</td>
            <td>CA; each director signs their own KYC</td>
            <td>If the parent closes on 31 December, 30 June is its half-year, and the January to June pack straddles two Indian years.</td>
          </tr>
          <tr>
            <td>July 2026</td>
            <td>FLA return for FY 2025-26 by 15 July. First-quarter TDS statements by 31 July.</td>
            <td>Regulation 4(2), FEMA 395/2019-RB. Forms 138, 140 and 144, Rule 219(4)</td>
            <td>CA, on the RBI&apos;s portal and TRACES</td>
            <td>Parent confirms its shareholding and any loans or trade credit with the Indian company.</td>
          </tr>
          <tr>
            <td>August 2026</td>
            <td>Board approves the audited FY 2025-26 accounts and calls the AGM on 21 clear days&apos; notice, or shorter notice with consent of at least 95% of members.</td>
            <td>Sections 101(1) and 173, Companies Act, 2013</td>
            <td>Company secretary or CA, with the statutory auditor</td>
            <td>Parent&apos;s board names its representative for the AGM (section 113) and, if wanted, consents to shorter notice.</td>
          </tr>
          <tr>
            <td>September 2026</td>
            <td>Second advance tax instalment, 45% cumulative, by 15 September. AGM for FY 2025-26 by 30 September.</td>
            <td>Section 408, 2025 Act. Section 96(1), Companies Act</td>
            <td>CA; board and company secretary</td>
            <td>Parent&apos;s representative votes to adopt the accounts.</td>
          </tr>
          <tr>
            <td>October 2026</td>
            <td>Form 3CEB for FY 2025-26 by 31 October. AOC-4 within 30 days of the AGM (30 October for a 30 September AGM). Second-quarter TDS statements by 31 October.</td>
            <td>Section 92E, 1961 Act. Section 137(1), Companies Act. Rule 219(4)</td>
            <td>CA certifies Form 3CEB; company secretary or CA files AOC-4</td>
            <td>Parent&apos;s group transfer pricing team confirms the intercompany prices used in the report.</td>
          </tr>
          <tr>
            <td>November 2026</td>
            <td>MGT-7 within 60 days of the AGM (29 November for a 30 September AGM). Income tax return for FY 2025-26 (AY 2026-27) by 30 November, the date for companies that must file Form 3CEB.</td>
            <td>Section 92(4), Companies Act. Section 139(1), 1961 Act</td>
            <td>Company secretary or CA; CA for the return</td>
            <td>Parent&apos;s group tax team receives the Indian tax computation for its own reporting.</td>
          </tr>
          <tr>
            <td>December 2026</td>
            <td>Third advance tax instalment, 75% cumulative, by 15 December. GSTR-9 for FY 2025-26 by 31 December where required, with GSTR-9C if turnover exceeds ₹5 crore. First AGM by 31 December for a subsidiary whose first financial year ended on 31 March 2026.</td>
            <td>Section 408. Rule 80, CGST Rules, 2017. Section 96(1)</td>
            <td>CA; company secretary</td>
            <td>A parent closing on 31 December needs a calendar-year pack: January to March 2026 (audited in India) and April to December 2026 (not yet audited).</td>
          </tr>
          <tr>
            <td>January 2027</td>
            <td>Third-quarter TDS statements by 31 January.</td>
            <td>Rule 219(4)</td>
            <td>CA</td>
            <td>Group audit for a December parent: Indian intercompany balances at 31 December confirmed.</td>
          </tr>
          <tr>
            <td>February 2027</td>
            <td>No annual date for the filings listed in this guide; monthly items continue.</td>
            <td>Not applicable</td>
            <td>Accounts team</td>
            <td>Agree the final advance tax estimate and any year-end transfer pricing adjustment before the books close.</td>
          </tr>
          <tr>
            <td>March 2027</td>
            <td>Final advance tax instalment, 100%, by 15 March. Tax year and financial year 2026-27 end on 31 March 2027.</td>
            <td>Sections 3 and 408, Income-tax Act, 2025</td>
            <td>CA</td>
            <td>Intercompany invoices for 2026-27 raised and agreed by both sides before 31 March.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Every month:</strong> TDS deducted in a month is deposited by the 7th of the next month; GST returns are
        filed on the periodicity that applies to the company. <strong>Through the year:</strong> at least four board meetings, with no more than 120 days
        between two of them. The Registrar can extend an AGM other than the first by up to three months for a special
        reason, and AOC-4 and MGT-7 then run from the actual AGM date. If either form slips, our{" "}
        <PostLink slug="aoc-4-mgt-7-late-fee">AOC-4 and MGT-7 late fee guide</PostLink> shows how the additional fee is
        counted.
      </p>
      <p>
        Read on 1 December 2026, the dates still ahead in this year are the 15 December and 15 March advance tax
        instalments, GSTR-9 by 31 December, the third-quarter TDS statements by 31 January, and any AOC-4 or MGT-7 that
        has not yet gone in.
      </p>

      <h2>Which filings depend on events rather than dates?</h2>
      <p>
        Event-driven filings start a clock when something happens: the parent sends money for shares, shares are
        allotted or transferred, money is paid to Singapore, a director joins or leaves, or the office moves. Most
        clocks are 30 days, a few are 15 or 60, and none waits for the year-end. Each event below needs its own filing.
      </p>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Filing</th>
            <th>Time limit</th>
            <th>Law</th>
            <th>Parent touchpoint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parent sends money for new shares</td>
            <td>Allotment of the shares</td>
            <td>Within 60 days of receiving the money; if not allotted, refund within the next 15 days</td>
            <td>FEMA 395/2019-RB, Schedule I, para A(2) and (3)</td>
            <td>Remits from its own bank account and signs the subscription papers</td>
          </tr>
          <tr>
            <td>Shares allotted to the parent</td>
            <td>FC-GPR on the RBI&apos;s reporting portal</td>
            <td>Within 30 days of the date of issue</td>
            <td>Regulation 4(1), FEMA 395/2019-RB</td>
            <td>Remitting bank&apos;s details and KYC for the parent</td>
          </tr>
          <tr>
            <td>Same allotment</td>
            <td>Return of allotment, Form PAS-3</td>
            <td>15 days for a private placement; 30 days for other allotments, such as a rights offer</td>
            <td>Section 42(8), Companies Act; rule 12(1), PAS Rules, 2014</td>
            <td>Applies for, or accepts, the offer in the form the board chose</td>
          </tr>
          <tr>
            <td>A share moves between a resident and the parent, for example a resident nominee&apos;s share</td>
            <td>FC-TRS</td>
            <td>Within 60 days of the transfer or of receipt or remittance of funds, whichever is earlier</td>
            <td>Regulation 4(3), FEMA 395/2019-RB</td>
            <td>Signs the transfer documents</td>
          </tr>
          <tr>
            <td>Payment to the parent: service fee, royalty, interest, cost recharge or dividend</td>
            <td>TDS where the payment is taxable; Form 145 (formerly 15CA) for the remittance, with Form 146 (formerly 15CB) where required; quarterly Form 144 (formerly 27Q)</td>
            <td>Tax deposited by the 7th of the next month; Forms 145 and 146 with each remittance</td>
            <td>Section 393(2), Income-tax Act, 2025 (section 195 of the 1961 Act); Rules 218 and 219</td>
            <td>Provides its tax residency certificate and Form 41 (formerly 10F) if a treaty rate is claimed</td>
          </tr>
          <tr>
            <td>New director appointed, for example a Singapore executive</td>
            <td>DIR-12</td>
            <td>Within 30 days of the appointment</td>
            <td>Section 170(2), Companies Act; rule 8, director rules</td>
            <td>Incoming director gives consent and obtains a DIN</td>
          </tr>
          <tr>
            <td>Director resigns</td>
            <td>DIR-12 by the company; DIR-11 by the director if they choose</td>
            <td>Within 30 days</td>
            <td>Section 168(1); rules 15 and 16, director rules</td>
            <td>Parent plans the replacement, so the board keeps its resident director</td>
          </tr>
          <tr>
            <td>Director&apos;s mobile, email or home address changes</td>
            <td>DIR-3 KYC Web</td>
            <td>Within 30 days of the change</td>
            <td>Rule 12A(2), director rules</td>
            <td>Directors in Singapore tell the company when their details change</td>
          </tr>
          <tr>
            <td>Registered office moves</td>
            <td>Notice to the Registrar; special resolution if the move is outside the city, town or village</td>
            <td>Within 30 days of the change; the resolution is filed within 30 days of passing</td>
            <td>Sections 12(4), 12(5) and 117(1), Companies Act</td>
            <td>Votes on the special resolution</td>
          </tr>
          <tr>
            <td>The subsidiary makes a downstream investment in another Indian company that counts as indirect foreign investment</td>
            <td>Form DI to the RBI, and notice to DPIIT&apos;s Secretariat for Industrial Assistance</td>
            <td>Within 30 days of allotment (Form DI) and of the investment (DPIIT)</td>
            <td>Regulation 4(11), FEMA 395/2019-RB</td>
            <td>Group approves the downstream investment</td>
          </tr>
        </tbody>
      </table>
      <p>
        If the Indian subsidiary itself invests outside India, the overseas investment rules and their reporting apply
        as well, and we map those when the investment is planned. All RBI filings above sit within our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> work.
      </p>

      <h2>Which dates belong to the 1961 Act and which to the 2025 Act?</h2>
      <p>
        Anything for financial year 2025-26 still runs under the Income-tax Act, 1961, even when filed in 2026: the
        March 2026 TDS deposit, the fourth-quarter statements, Form 3CEB and the November 2026 return. Advance tax, TDS
        from April 2026 and the 2026-27 quarterly statements run under the Income-tax Act, 2025, whose first tax year
        is 2026-27.
      </p>
      <p>
        Section 3 of the 2025 Act defines the tax year as the twelve months of the financial year starting on 1 April,
        replacing the old previous year and assessment year pair. The company law and RBI dates are not affected by
        the change; only income tax section and form numbers move. The year-end filings for tax year 2026-27 fall after
        this calendar ends:
      </p>
      <ul>
        <li>Fourth-quarter TDS statements for January to March 2027 by 31 May 2027 (Rule 219(4)).</li>
        <li>FLA return for FY 2026-27 by 15 July 2027.</li>
        <li>AGM for FY 2026-27 by 30 September 2027.</li>
        <li>Form 48, the replacement for Form 3CEB under section 172, expected by 31 October 2027.</li>
        <li>Income tax return by 30 November 2027, under section 263(1)(c), for a company that must obtain the section 172 report. A subsidiary with no transaction at all with its group in the year follows the general company date instead.</li>
      </ul>
      <p>
        The renumbering also changes the names in your Indian finance team&apos;s files: TDS on payments to the parent
        moves from section 195 to section 393(2), the quarterly non-resident statement from Form 27Q to Form 144, and the
        remittance forms from 15CA and 15CB to Forms 145 and 146. Our{" "}
        <PostLink slug="form-3ceb-due-date-applicability">Form 3CEB and Form 48 guide</PostLink> covers the transfer
        pricing side of the switch.
      </p>

      <h2>Can the Indian subsidiary use the Singapore parent&apos;s financial year?</h2>
      <p>
        Only with approval. Under the first proviso to section 2(41) of the Companies Act, 2013, a subsidiary of a
        company incorporated outside India that must follow a different financial year for consolidation abroad can
        apply to the Central Government to adopt a different period. Income tax, advance tax, TDS and the FLA return
        still run from April to March.
      </p>
      <p>
        By default, an Indian company&apos;s financial year ends on 31 March, and a company incorporated on or after 1
        January may close its first year on 31 March of the following year. The proviso is the only route to a
        different year-end for a foreign-owned company, and it covers a holding company, subsidiary or associate company
        of a company incorporated outside India. The application is made in the prescribed form and manner.
      </p>
      <p>
        The power used to sit with the Tribunal. The Companies (Amendment) Act, 2019 moved it to the Central Government
        with effect from 2 November 2018, and left applications already pending before the Tribunal with the Tribunal.
        Older guides that still say &quot;apply to the NCLT&quot; predate that change.
      </p>
      <p>
        Approval moves the company law calendar but not the tax one. With a January to December year, the AGM falls
        within six months of 31 December, and AOC-4 and MGT-7 follow it. But section 3 of the Income-tax Act, 2025 fixes
        the tax year at April to March, advance tax under section 408 is paid in instalments during the financial year,
        and the FEMA regulations say the FLA year is reckoned as April to March. In practice the subsidiary would close
        its books twice: in December for company law and the parent, and in March for income tax and the RBI. Many
        groups weigh that against simply sending the parent a December reporting pack from a March-year subsidiary. It
        is a decision to take with your group auditor before applying.
      </p>

      <h2>What does the Singapore parent need to do during the Indian year?</h2>
      <p>
        The parent acts at a few fixed points. It remits share money and signs subscription papers, authorises a
        representative to vote at the AGM, consents to short notice if it wants one, agrees intercompany prices for the
        transfer pricing report, supplies residency papers for treaty claims (see our{" "}
        <PostLink slug="india-singapore-dtaa-for-businesses">guide to the India-Singapore treaty for businesses</PostLink>), and confirms balances for the FLA return.
      </p>
      <p>
        Most of these are paper steps on the Singapore side with an Indian deadline attached. A body corporate that is a
        member of an Indian company acts at its general meetings through a person its board authorises by resolution
        (section 113), so the parent&apos;s board minutes are part of the Indian AGM file. An AGM can be held on shorter
        notice than 21 clear days only with the written or electronic consent of at least 95% of the members entitled to
        vote, and for a wholly owned subsidiary that is essentially the parent&apos;s consent.
      </p>
      <p>
        The year-end gap matters most. If the parent closes on 31 December, its consolidation uses nine months of one
        Indian financial year and three months of the previous one, and only the earlier part has been through an Indian
        statutory audit by then. Agree early with the group auditor what work it needs on the April to December figures,
        and fix a monthly close date that suits both sides.
      </p>
      <p>
        C S Rushil &amp; Co. advises on Indian law and prepares the Indian subsidiary&apos;s filings only. The
        parent&apos;s own Singapore tax return, IRAS and ACRA filings, and any Singapore company law questions stay with
        its Singapore adviser. We work alongside that adviser, sending the Indian figures and documents on the dates they
        need them, and we serve Singapore clients online from our office in Anna Nagar, Chennai.
      </p>

      <h2>Which deadlines do Singapore-owned subsidiaries most often miss?</h2>
      <p>
        The filings most often missed are the ones nothing in the monthly routine prompts: FC-GPR after a further
        allotment, the FLA return in July, a transfer pricing report when the only transaction is a cost recharge, DIR-3
        KYC for directors based abroad, TDS on payments to the parent, and INC-20A in a new company&apos;s first six
        months.
      </p>
      <ul>
        <li>
          <strong>FC-GPR after a further allotment.</strong> Commonly missed because group treasury treats the
          remittance as the event, while the 30-day clock runs from the allotment date, and the allotment itself must
          happen within 60 days of the money arriving. A second or third capital injection, years after set-up, is the
          usual case. Our <PostLink slug="fc-gpr-filing-deadline">FC-GPR deadline guide</PostLink> covers the documents
          and the late submission fee.
        </li>
        <li>
          <strong>The FLA return.</strong> Commonly missed because no transaction prompts it. It is a statement of
          position due on 15 July whether or not any money moved in the year, and it usually falls before the Indian
          audit is signed. Our <PostLink slug="fla-return-due-date">FLA return guide</PostLink> explains who files and
          how.
        </li>
        <li>
          <strong>A transfer pricing report for a cost recharge alone.</strong> Commonly missed because a subsidiary that
          only reimburses the parent&apos;s costs, or pays a share of group software, does not think of itself as trading
          with the parent. There is no value threshold for international transactions with an associated enterprise, so
          the report is still due. Our <Link href="/transfer-pricing-audit">transfer pricing study and Form 48</Link>{" "}
          page covers the documentation behind it.
        </li>
        <li>
          <strong>DIR-3 KYC for directors living in Singapore.</strong> Commonly missed because the filing now comes
          round once every three financial years, and the form relies on the director&apos;s personal mobile number and
          email, which for an overseas director may have changed since the last filing. A late or reactivation filing
          costs ₹5,000 in government fees. See our{" "}
          <PostLink slug="dir-3-kyc-due-date-late-fee">DIR-3 KYC due date guide</PostLink>.
        </li>
        <li>
          <strong>TDS on payments to the parent.</strong> Commonly missed because intercompany amounts are settled by
          group treasury or netted in an intercompany account instead of going through the Indian payables run, so the
          TDS check, Form 145 and the quarterly Form 144 are skipped. Interest on late deposit runs under section 398 of
          the 2025 Act (section 201(1A) of the 1961 Act).
        </li>
        <li>
          <strong>INC-20A in a new subsidiary.</strong> Commonly missed because share money from Singapore takes longer
          than expected to reach the Indian bank account. The declaration is due within 180 days of incorporation, and
          the company cannot commence business or exercise borrowing powers until it is filed (section 10A). If you are
          still at the set-up stage, see{" "}
          <Link href="/company-registration-india-for-foreigners">company registration in India for foreigners</Link>.
        </li>
      </ul>

      <h2>How can you build a dated first-year calendar for your subsidiary?</h2>
      <p>
        <strong>
          Use our free{" "}
          <Link href="/tools/foreign-subsidiary-compliance-calendar?parent=sg">India subsidiary compliance calendar</Link>.
          Choose Singapore as the parent&apos;s country, enter the date of incorporation and the date of the first share
          allotment to the parent, and it lists the first-year deadlines in date order, from the first auditor and
          FC-GPR to the first AGM, AOC-4 and MGT-7.
        </strong>
      </p>
      <p>
        The allotment date defaults to 30 days after incorporation until you change it. The tool adds a note on
        legalising documents signed in Singapore. It assumes the AGM is held on its last permitted day, so the AOC-4 and MGT-7 dates it shows
        are the latest possible. It is built for a subsidiary&apos;s first year; for the recurring cycle, use the tables
        above.
      </p>

      <h2>How does C S Rushil &amp; Co. run this calendar for a Singapore parent?</h2>
      <p>
        Through a compliance retainer for foreign-owned subsidiaries. We hold the Indian calendar, prepare the ROC,
        FEMA, income tax, TDS and GST filings and the transfer pricing documentation, and send the parent&apos;s finance
        team the Indian figures it needs for its own year-end. Companies wanting only the statutory filings can use the
        annual compliance package.
      </p>
      <p>
        Our{" "}
        <Link href="/india-subsidiary-compliance-cfo">compliance and CFO retainer for foreign-owned subsidiaries</Link>{" "}
        adds monthly reporting packs mapped to the parent&apos;s chart of accounts, which is where a December parent and
        a March subsidiary meet. A subsidiary with a simpler profile can use the{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link> for books, audit coordination, ROC,
        income tax, GST and TDS, with the RBI filings added. Either way the calendar is agreed with your group finance
        team at the start, and filings are prepared with your resident director, who signs them.
      </p>

      <h2>Which official sources does this guide rely on?</h2>
      <p>
        The dates, sections and forms in this guide come from the statute, rules, regulations and official guidance
        listed below, which our team reviewed in November 2026. Governments extend due dates from time to time, so check the current
        notifications before filing; we do this for each client every month.
      </p>
      <ul>
        <li>
          <a href="https://indiacode.gov.in/handle/123456789/496128" target="_blank" rel="noopener noreferrer">Companies Act, 2013 on India Code</a>, consolidated as on 1 September 2026: sections 2(41), 2(85), 10A, 12, 42(8), 92(4), 96, 101, 113, 117, 137, 168, 170 and 173 (checked 19 November 2026).
        </li>
        <li>
          <a href="https://indiacode.gov.in/handle/123456789/509355" target="_blank" rel="noopener noreferrer">Companies (Prospectus and Allotment of Securities) Rules, 2014</a>, rule 12 (checked 19 November 2026).
        </li>
        <li>
          <a href="https://indiacode.gov.in/handle/123456789/508708" target="_blank" rel="noopener noreferrer">Companies (Appointment and Qualification of Directors) Rules, 2014</a>, rules 8, 15 and 16 (checked 19 November 2026).
        </li>
        <li>
          <a href="https://egazette.gov.in/WriteReadData/2025/268970.pdf" target="_blank" rel="noopener noreferrer">G.S.R. 943(E) dated 31 December 2025</a>, substituting rule 12A on DIR-3 KYC Web (checked 19 November 2026).
        </li>
        <li>
          <a href="https://egazette.gov.in/WriteReadData/2026/271973.pdf" target="_blank" rel="noopener noreferrer">G.S.R. 300(E) dated 21 April 2026</a>, DIR-3 KYC Web fees (checked 19 November 2026).
        </li>
        <li>
          <a href="https://www.mca.gov.in/content/dam/mca-aem-forms/instructionkits/Instruction%20Kit_DPT-3.pdf" target="_blank" rel="noopener noreferrer">MCA instruction kit for Form DPT-3</a> (checked 19 November 2026).
        </li>
        <li>
          <a href="https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11723&Mode=0" target="_blank" rel="noopener noreferrer">FEMA (Mode of Payment and Reporting of Non-Debt Instruments) Regulations, 2019</a>, amended up to 13 June 2026: Schedule I and regulation 4 (checked 19 November 2026).
        </li>
        <li>
          <a href="https://wm.incometaxindia.gov.in/w/section-3-258" target="_blank" rel="noopener noreferrer">Income-tax Act, 2025, section 3</a>,{" "}
          <a href="https://wm.incometaxindia.gov.in/w/section-263-72" target="_blank" rel="noopener noreferrer">section 263</a> and{" "}
          <a href="https://wm.incometaxindia.gov.in/w/section-408-6" target="_blank" rel="noopener noreferrer">section 408</a> (checked 19 November 2026).
        </li>
        <li>
          <a href="https://wm.incometaxindia.gov.in/w/rule-219-1" target="_blank" rel="noopener noreferrer">Income-tax Rules, 2026, rule 219</a>, quarterly TDS statements (checked 19 November 2026).
        </li>
        <li>
          <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tax-payments-faq" target="_blank" rel="noopener noreferrer">e-filing portal FAQs on tax payments</a>, TDS deposit dates and Rule 218 (checked 19 November 2026).
        </li>
        <li>
          <a href="https://www.incometax.gov.in/iec/foportal/newformpage/forms/form146-UM" target="_blank" rel="noopener noreferrer">e-filing portal user manual for Form 146</a> (checked 19 November 2026).
        </li>
        <li>
          <a href="https://wm.incometaxindia.gov.in/w/limitation-periods" target="_blank" rel="noopener noreferrer">Income Tax Department table of limitation periods</a> for the 1961 Act dates under sections 92E, 139 and 200(3) (checked 19 November 2026).
        </li>
        <li>
          <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter8/rule80_v1.00.html" target="_blank" rel="noopener noreferrer">CGST Rules, 2017, rule 80</a>, annual return (checked 19 November 2026).
        </li>
      </ul>
    </>
  );
}
