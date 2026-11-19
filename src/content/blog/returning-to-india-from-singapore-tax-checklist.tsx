import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources (checked 19 November 2026):
// IRAS, Tax Clearance for Employees: IR21 for non-Singapore-citizen employees, one month's notice, withholding from date of awareness, SPR concession only if not leaving permanently.
// IRAS, Getting tax clearance, a step-by-step guide: withholding of all monies, deemed exercise rule, processing 7 working days (e-file) or 21 days (paper), Directive to Pay Tax within 10 days, shortfall billed to employee.
// IRAS, Tax on SRS withdrawals: withholding at 24% for foreigners and SPRs, 10-year foreigner lump-sum concession (50% taxable, no penalty), 5% penalty on early withdrawals.
// CPF Board, Closing your account when you leave Singapore: closure only for non-citizens and non-PRs, renunciation from 1 April 2024, about 12 weeks' processing, certification overseas.
// CPF Board, Who should receive CPF contributions: CPF payable only for Singapore Citizens and Permanent Residents; foreigners exempt.
// Income-tax Act, 2025, section 5 (incometaxindia.gov.in): scope of total income for residents, not ordinarily residents and non-residents.
// Income-tax Act, 2025, section 9(3)(a) and Income-tax Act, 1961, section 9(1)(ii) (incometaxindia.gov.in): salary payable for services rendered in India is income earned in India.
// e-filing portal, Non Resident FAQs: residential status assessed per tax year; s.6(13) of 2025 Act = s.6(6) of 1961 Act; NRE interest exemption s.10(4)(ii) kept in Schedule IV and tied to FEMA status; s.115H carried into s.217.
// e-filing portal, Step-by-step guide to Schedules FSI, TR and FA: Schedule FA not needed for not ordinarily resident or non-resident; calendar year ending 31 December; ITR-1 and ITR-4 lack Schedule FA.
// Black Money Act, 2015, section 43 (incometaxindia.gov.in): ₹10 lakh penalty for residents other than not ordinarily resident; proviso for non-immovable assets up to ₹20 lakh.
// RBI FAQ, Foreign Currency Accounts by Resident Individuals: text of FEMA section 2(v).
// RBI A.P. (DIR Series) Circular No. 90 of 9 January 2014: text and scope of FEMA section 6(4).
// RBI Master Direction, Deposits and Accounts (updated 2 September 2026): Part I paras 1.3 and 3.2 (foreign accounts, RFC); Part II paras 4.9 and 6.10 (NRE and NRO on return).
// RBI (Commercial Banks, Interest Rate on Deposits) Directions, 2025 (updated 1 October 2026): paras 27(7), 29(2), 37 and 41(5) (NRE to RFC, FCNR(B) on return).
// RBI Master Direction, Liberalised Remittance Scheme (updated 6 September 2024): USD 2,50,000 per financial year.
// Section and form mappings 195 to 393(2), Form 15CA/15CB to 145/146 and Form 26QB to 141: src/content/blog/income-tax-act-2025-section-mapping.tsx.
export const meta: BlogPostMeta = {
  slug: "returning-to-india-from-singapore-tax-checklist",
  title: "Moving Back to India from Singapore: A Tax Checklist",
  description:
    "Leaving Singapore for Chennai? A dated checklist covering IR21 tax clearance, CPF and SRS, RSUs, NRE and FCNR accounts, FEMA section 6(4) and Schedule FA.",
  date: "2026-12-29",
  excerpt:
    "A stage-by-stage checklist for Indians moving back from Singapore: what to settle with your Singapore employer before you go, and what to change in India from the day you land to your first year as an ordinary resident.",
  faqs: [
    {
      question: "Will my Singapore employer hold back my final salary when I resign?",
      answer:
        "Usually, if you are not a Singapore citizen. IRAS requires the employer to hold all money due to you from the date it learns you are leaving, file Form IR21 at least one month before your last day, and release the money only after IRAS issues its clearance directive. Plan the move without counting on that pay.",
    },
    {
      question: "Can I keep my Singapore bank account after moving back to India?",
      answer:
        "Generally yes. Section 6(4) of FEMA lets a resident keep foreign currency, securities and property acquired while resident outside India, and the RBI has confirmed this covers accounts opened during that time. From your first ordinarily resident year, the account goes into Schedule FA with its peak and closing balances.",
    },
    {
      question: "When does NRE interest stop being tax-free after I return?",
      answer:
        "When you stop being a person resident outside India under FEMA, which for someone coming back to work is the return itself, not the end of the tax year. The income tax exemption follows that FEMA status, so interest earned after the account should have been redesignated is taxable, even in an RNOR year.",
    },
    {
      question: "Do I have to break my FCNR deposit when I move back?",
      answer:
        "No. On your request the bank may let it run to maturity at the contracted rate, treating it as a resident deposit from your date of return. At maturity it converts to a resident rupee deposit or an RFC account. Moving it into an RFC account early carries no premature withdrawal penalty under the RBI's directions.",
    },
    {
      question: "Can I withdraw my CPF savings if I keep my Singapore PR?",
      answer:
        "No. The CPF Board lets a member close the account and take the savings only when they are no longer a Singapore citizen or permanent resident. If you give up PR, the account can be closed once the renunciation is completed. Applications take about 12 weeks on average, so settle the timing with your Singapore adviser.",
    },
    {
      question: "Will India tax RSUs granted in Singapore that vest after I return?",
      answer:
        "Usually in part. The share of each award earned while you work in India is Indian income whatever your status. The Singapore share is generally taxed in India only once you are resident and ordinarily resident, or if it is received in India. Singapore may already have taxed a deemed gain on the same award when you left.",
    },
    {
      question: "Is there a penalty for leaving a Singapore account out of Schedule FA?",
      answer:
        "It can be. Section 43 of the Black Money Act allows a ₹10 lakh penalty where a resident other than a not ordinarily resident person omits a foreign asset or misstates it in the return. It does not apply to assets other than immovable property worth ₹20 lakh or less in aggregate. Listing every account avoids the question.",
    },
    {
      question: "Does C S Rushil & Co. handle IR21, CPF closure or Singapore tax?",
      answer:
        "No. We advise on Indian tax and FEMA and prepare Indian filings only. IR21, CPF, SRS, IRAS, ACRA and Singapore company law stay with your Singapore employer and adviser, and we coordinate with them on the figures India needs. We serve Singapore clients online from our only office, in Anna Nagar, Chennai.",
    },
  ],
  summary:
    "Four things decide your Indian tax position in the year you move back from Singapore: your residential status for that year, when share awards vest and assets are sold compared with your arrival date, redesignating NRE accounts on return and deciding what to do with NRO accounts, and Schedule FA reporting from your first resident and ordinarily resident year.",
};

export default function Body() {
  return (
    <>
      <p>
        This checklist is for Indian citizens and OCI cardholders working in Singapore who plan to move back to Chennai
        or elsewhere in India within the next year. It is arranged by date, because the costly mistakes on a return are
        usually about timing: a share award that vests weeks after you start work in India, an NRE deposit left running
        after you land, or a Singapore account forgotten in the first year it becomes reportable.
      </p>
      <p>
        The residential status tests are not repeated here. Our guide to{" "}
        <PostLink slug="rnor-status-returning-nri">RNOR status for returning NRIs</PostLink> explains them, and the free{" "}
        <Link href="/tools/nri-residential-status-calculator">NRI residential status calculator</Link> applies them to
        your own travel dates.
      </p>

      <h2>What decides your Indian tax position in the year you return?</h2>
      <p>
        Your status for the Indian tax year of arrival comes first. Then come the dates on which awards vest and assets
        are sold compared with your arrival, the speed with which NRE and NRO accounts are converted, and the year you
        first become resident and ordinarily resident, when foreign asset reporting begins.
      </p>
      <p>These run on two separate clocks, and keeping them apart is most of the work.</p>
      <ul>
        <li>
          <strong>The income tax clock runs by tax year</strong> (1 April to 31 March). The e-filing portal&apos;s FAQs
          confirm that status is assessed separately for each tax year. Under section 5 of the Income-tax Act, 2025, a
          resident and ordinarily resident (ROR) person is taxed on income from every source, while a resident but not
          ordinarily resident (RNOR) person is taxed on income received or arising in India and on foreign income only
          where it comes from a business controlled in, or a profession set up in, India.
        </li>
        <li>
          <strong>The FEMA clock runs from the day you arrive.</strong> Under section 2(v) of the Foreign Exchange
          Management Act, 1999 (FEMA), residence turns on the purpose and expected length of your stay, and the
          RBI&apos;s directions tell banks to convert NRE accounts immediately when you return to take up employment.
          The tax exemption for NRE interest follows your FEMA status.
        </li>
      </ul>
      <p>
        So for months you can be non-resident or RNOR for income tax and already resident for FEMA. The timeline below
        is built around that gap.
      </p>

      <h2>What should you do, and when, on each side of the move?</h2>
      <p>
        Start about six months before you leave Singapore. Settle tax clearance, share awards and any CPF or SRS
        decision with your Singapore employer or adviser. On the Indian side, project your status, time sales and vests,
        convert bank accounts as soon as you land, and prepare for foreign asset reporting before your first ordinarily
        resident year.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Singapore side (with your Singapore employer or adviser)</th>
            <th>Indian side</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6 months before leaving Singapore</td>
            <td>Confirm whether Form IR21 will be filed for you and how unvested awards will be treated.</td>
            <td>Project your status for the arrival year and the two after it; list Singapore assets with acquisition dates; get each vesting schedule; decide whether to sell the Chennai flat before or after the move.</td>
          </tr>
          <tr>
            <td>The month you leave</td>
            <td>Expect final pay to be held until IRAS clears it; if you are a PR, decide on giving up PR and closing CPF.</td>
            <td>Give each Indian bank your return date in writing; redesignate NRE and NRO accounts; open an RFC account if you want to keep foreign currency; update your status with brokers and mutual funds.</td>
          </tr>
          <tr>
            <td>First tax year in India</td>
            <td>Keep the Notice of Assessment for the year you left and any CPF or SRS payout papers.</td>
            <td>File in the right status (often RNOR); treat NRE interest as exempt only up to your return; pay advance tax on income without TDS.</td>
          </tr>
          <tr>
            <td>The year you become resident and ordinarily resident</td>
            <td>Collect statements for every Singapore account still open and proof of Singapore tax paid.</td>
            <td>Report foreign assets in Schedule FA; declare worldwide income and claim relief for Singapore tax.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Depending on your arrival date and past visits, the first tax year back may be a non-resident year or an RNOR
        year. Rerun the calculator with real dates after you land, because a delayed move or an extra trip changes the
        answer.
      </p>

      <h2>What is IRAS tax clearance (Form IR21) and how does it affect your last Singapore salary?</h2>
      <p>
        Tax clearance is the Singapore process in which an employer notifies IRAS on Form IR21 at least one month before
        a non-Singapore-citizen employee stops work or leaves Singapore for more than three months. From the date it
        knows you are leaving, the employer holds back the money it owes you until IRAS says how much tax to pay.
      </p>
      <p>
        IRAS states that this applies to all work pass holders. Permanent residents are excused only if they are not
        leaving Singapore permanently, so a PR moving back to India should expect it too. Four points from IRAS&apos;s
        guidance affect your cash:
      </p>
      <ul>
        <li><strong>Withholding starts at resignation</strong>, whatever the notice period, and covers all monies due: salary, leave pay, allowances, reimbursements, gratuities and lump sums.</li>
        <li><strong>Clearance takes time.</strong> An e-filed IR21 is typically processed within 7 working days, a paper one within 21 days. The employer then gets a Directive to Pay Tax, payable within 10 days, or a Notification to Release Monies.</li>
        <li><strong>Unvested awards are brought forward.</strong> Under IRAS&apos;s deemed exercise rule, unexercised options and unvested share awards are treated as giving rise to gains at the point of tax clearance.</li>
        <li><strong>A shortfall comes back to you</strong> through your Notice of Assessment if the money withheld does not cover the tax.</li>
      </ul>
      <p>
        So do not count on the last salary or an exit payment to fund flights or a deposit in Chennai. Singapore&apos;s
        computation and reliefs are for your Singapore adviser. The Indian question is whether any of that pay or deemed
        gain reappears in an Indian return later, which the RSU section below covers.
      </p>

      <h2>What happens to CPF and SRS balances for Indian tax?</h2>
      <p>
        In Singapore, only members who are no longer citizens or PRs can close a CPF account, and SRS withdrawals by
        foreigners carry withholding tax. In India, the result turns on your residential status in the tax year the
        money is paid, what the payment represents, and where it is first received.
      </p>
      <p>
        <strong>CPF.</strong> The CPF Board states that contributions are payable only for Singapore citizens and
        permanent residents, so no CPF contributions are made for a professional on an Employment Pass. A PR can close the account and
        transfer the savings to a bank account only once the renunciation of PR is completed; otherwise the account is
        closed automatically the following month and stops earning CPF interest. The Board puts average processing at
        about 12 weeks, and if you apply from overseas by post because you have no Singpass, the forms must be certified at a Singapore Overseas Mission.
      </p>
      <p>
        <strong>SRS.</strong> IRAS says withdrawals by foreigners and PRs from the Supplementary Retirement Scheme suffer
        withholding at the non-resident rate of 24%. A foreigner&apos;s one-time full withdrawal is penalty-free and only
        50% taxable if the account has been held for at least 10 years from the first contribution and the person has
        been neither a citizen nor a PR for a continuous 10 years before it. Other early withdrawals are fully taxable
        with a 5% penalty. When to withdraw is a decision for your Singapore adviser.
      </p>
      <p>
        <strong>The Indian view.</strong> We are not aware of a rule written specifically for CPF or SRS, so the general rules apply:
      </p>
      <ul>
        <li>Status is fixed for each tax year, so a payment received while you are non-resident or RNOR is tested under that year&apos;s status.</li>
        <li>For an RNOR, income arising outside India is taxed only if it comes from a business controlled in, or a profession set up in, India. For an ROR, it is taxed whatever its source.</li>
        <li>Income received in India is taxable in every status, so the account a payout is first credited to can matter. Settle that before you fill in the withdrawal form.</li>
        <li>Whether a payment, or part of it, is income at all depends on what it represents, so the statement has to be read first.</li>
      </ul>
      <p>
        Keep every CPF and SRS statement and the payout advice. Our{" "}
        <Link href="/nri-tax-services-singapore">Indian tax services for NRIs in Singapore</Link> include this review
        before you sign.
      </p>

      <h2>How are RSUs and ESOPs that vest across the move taxed?</h2>
      <p>
        India taxes equity pay as salary when shares are allotted or transferred to you, which for RSUs is normally at or soon after vesting and for options is on exercise. The part relating to work done in India is
        Indian income in every residential status. The part relating to work done in Singapore is generally taxed in
        India only in a year when you are resident and ordinarily resident, or if it is received in India.
      </p>
      <p>
        The rule behind the split is that salary payable for services rendered in India is income earned in India
        (section 9(1)(ii) of the Income-tax Act, 1961; section 9(3)(a) of the Income-tax Act, 2025). An award granted in
        Singapore that vests after you start work in Chennai is therefore usually divided by where you worked between
        grant and vesting. The Act does not set out the arithmetic in so many words, so keep a record of your working days in each
        country across each vesting period. Three dates then decide each tranche:
      </p>
      <ol>
        <li><strong>Vest date against arrival date.</strong> A tranche that vests while you work wholly in Singapore as a non-resident usually stays outside Indian tax. One that vests after you start work in India has an Indian part.</li>
        <li><strong>Vest date against status.</strong> In an RNOR year the Singapore part generally stays outside Indian tax if not received in India. Once you are ROR, India looks at the whole tranche, and relief for Singapore tax on it may be available under the India-Singapore tax treaty and the foreign tax credit rules.</li>
        <li><strong>The IR21 date.</strong> Singapore may already have taxed a deemed gain on the same award when you left, on a different date from the one India uses. Matching the two needs both advisers working from one vesting schedule.</li>
      </ol>
      <p>
        If you are moving within the same group, ask whether the Indian entity will deduct tax on vests after you join
        its payroll. Our guide to{" "}
        <PostLink slug="foreign-rsu-tax-schedule-fa-chennai">foreign RSU tax and Schedule FA</PostLink> covers the sale,
        the cost to use and the annual reporting once you are settled.
      </p>

      <h2>What happens to NRE and FCNR accounts when you return?</h2>
      <p>
        Under the RBI&apos;s directions, NRE accounts are to be redesignated as resident accounts, or the money moved to
        a Resident Foreign Currency (RFC) account, immediately on your return to take up employment. NRO accounts may be
        designated as resident accounts. FCNR(B) deposits may, at the bank&apos;s discretion, run to maturity at the contracted rate as
        resident deposits.
      </p>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>What the RBI&apos;s directions say on return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NRE (Non-Resident External rupee account)</td>
            <td>Redesignate as a resident account, or transfer to an RFC account at your option, immediately on return for employment or on a change in residential status.</td>
          </tr>
          <tr>
            <td>NRE term deposit moved to RFC</td>
            <td>No premature withdrawal penalty; if the deposit has not run for one year, interest is capped at the RFC savings rate.</td>
          </tr>
          <tr>
            <td>NRO (Non-Resident Ordinary rupee account)</td>
            <td>May be designated as a resident account when you return intending to stay for an uncertain period.</td>
          </tr>
          <tr>
            <td>FCNR(B) (foreign currency deposit)</td>
            <td>On request, may run to maturity at the contracted rate for people of Indian nationality or origin returning for permanent settlement; treated as a resident deposit from the date of return; converts to a resident rupee deposit or an RFC account at maturity. No penalty for early conversion into RFC.</td>
          </tr>
          <tr>
            <td>RFC (Resident Foreign Currency account)</td>
            <td>Can receive NRE and FCNR(B) balances when your status changes, and foreign exchange from converting assets acquired while non-resident; balances are free of restrictions on use outside India.</td>
          </tr>
        </tbody>
      </table>
      <p>
        The tax point sits in the first row. The e-filing portal&apos;s FAQs explain that the exemption for NRE interest
        (section 10(4)(ii) of the 1961 Act, now in Schedule IV of the 2025 Act) depends on being a person resident
        outside India under FEMA. Interest earned after you return to work is therefore taxable even in an RNOR year, and
        a bank that is slow to redesignate the account does not extend the exemption. Get the redesignation date in
        writing. FCNR interest in RNOR years is a separate question, which we check against the bank&apos;s certificate.
      </p>

      <h2>Which foreign assets may you keep after returning?</h2>
      <p>
        Section 6(4) of FEMA lets a person resident in India hold, own, transfer or invest in foreign currency, foreign
        securities and immovable property outside India acquired, held or owned while resident outside India, or
        inherited from someone who was. A Singapore bank account, shares or flat acquired during your years there can
        usually stay.
      </p>
      <p>
        The RBI&apos;s A.P. (DIR Series) Circular No. 90 of 9 January 2014 confirms that the section covers foreign
        currency accounts opened while you were resident outside India, and income from employment, business,
        investments, gifts or inheritances of that period. It also lets these assets, their income and their sale
        proceeds be used for payments or fresh investments abroad without RBI approval, provided the cost is met only
        from eligible assets.
      </p>
      <ul>
        <li><strong>Keep proof of acquisition dates.</strong> The test is your FEMA status when you acquired each asset, so account-opening letters, deeds and broker confirmations dated before your return are the evidence.</li>
        <li><strong>Keep new Indian money separate.</strong> Fresh remittances from India go under the Liberalised Remittance Scheme (LRS), which allows resident individuals up to USD 2,50,000 per financial year for permitted transactions.</li>
        <li><strong>Treat post-return vests as new acquisitions.</strong> Section 6(4) speaks of assets acquired while resident outside India, so the FEMA position on shares that vest after you return should be checked before the first such vest.</li>
      </ul>
      <p>
        Permission to keep an asset under FEMA does not change how its income is taxed or whether it is reported.
      </p>

      <h2>When does Schedule FA start?</h2>
      <p>
        Schedule FA, the foreign assets schedule in the income tax return, starts with your first tax year as resident
        and ordinarily resident. The e-filing portal&apos;s guide states that it need not be completed by a taxpayer who
        is not ordinarily resident or non-resident. It covers foreign assets held at any time in the relevant calendar
        year ending 31 December.
      </p>
      <p>
        That calendar year can start before your first ROR tax year. In the forms used so far it is the calendar year
        ending within the tax year: the portal&apos;s guide gives January to December 2024 for assessment year 2025-26.
        On that basis, if your first ROR tax year ran from April 2029 to March 2030, a Singapore account closed in
        February 2029, while you were still RNOR, would still fall within the reportable period. Forms under the 2025 Act
        are issued year by year, so confirm the period in the form you file.
      </p>
      <p>
        Section 43 of the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015 allows a
        penalty of ₹10 lakh where a resident other than a not ordinarily resident person omits, or gives inaccurate
        particulars of, a foreign asset or foreign-source income in a return. It does not apply to assets other than
        immovable property with an aggregate value of ₹20 lakh or less, so a Singapore flat is always within it. Use the
        last RNOR year to prepare:
      </p>
      <ul>
        <li>List every Singapore bank, brokerage, SRS and insurance account, and each property, with opening dates.</li>
        <li>Decide which to close, keeping the calendar-year point in mind.</li>
        <li>Download statements showing peak and closing balances and income credited.</li>
        <li>File on a return form that contains Schedule FA; the portal&apos;s guide notes that ITR-1 and ITR-4 do not.</li>
      </ul>

      <h2>What about your Chennai flat: renting it out or selling it after you return?</h2>
      <p>
        Rent and gains from a Chennai flat are taxable in India in every residential status. What changes on return is
        the tax deducted at source: while you are non-resident, the tenant or buyer deducts under the rules for payments
        to non-residents, and once you are resident they follow the resident rules. Tell them in writing when your status
        changes.
      </p>
      <p>
        Deduction on payments to a non-resident is section 195 of the 1961 Act, which is section 393(2) of the 2025 Act
        from tax year 2026-27. If you sell while still non-resident, our page on{" "}
        <Link href="/nri-property-sale-tds-chennai">NRI property sale TDS in Chennai</Link> explains the lower-deduction
        certificate, and sending the proceeds to Singapore needs Form 15CA and, where required, Form 15CB (Forms 145 and
        146 under the 2025 Act), covered on our <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB page</Link>. Once
        you are resident, a buyer deducts as for a resident seller and files Form 26QB, which is now Form 141.
      </p>
      <p>
        The year of return is the awkward one. Status is decided for the whole tax year, so on the date of a sale it may
        not be settled which rules apply. Agree the basis with the buyer in writing before registration and let the
        return settle any difference. A tenant who keeps deducting at non-resident rates creates an excess that you can claim as credit or refund
        when you file the return.
      </p>

      <h2>What should you do in the first year back in India?</h2>
      <p>
        Confirm your status, finish converting accounts, tell everyone who deducts tax from you, keep your Singapore
        papers in one file and file the first Indian return in the right status. Then mark the year you expect to become
        ordinarily resident, because worldwide taxation and foreign asset reporting begin there.
      </p>
      <ol>
        <li><strong>Status:</strong> rerun the calculator with actual dates and keep passport pages or immigration records.</li>
        <li><strong>Accounts:</strong> confirm redesignation dates in writing and diarise FCNR(B) maturities.</li>
        <li><strong>Investments:</strong> change your status from NRI to resident with brokers, depository participants, mutual funds and insurers.</li>
        <li><strong>Deductors:</strong> tell your tenant, any buyer and your Indian employer that you are resident, and from when.</li>
        <li><strong>Advance tax:</strong> pay it on income with no tax deducted, such as gains on a sale.</li>
        <li><strong>The return:</strong> if your first year turns out to be a non-resident year, the rules in our <PostLink slug="nri-itr-filing">NRI income tax return guide</PostLink> apply.</li>
        <li><strong>Special NRI regime:</strong> if you used the concessional regime for investment income from foreign exchange assets, you can continue it for assets other than shares by filing a declaration with the return (section 115H of the 1961 Act; section 217 of the 2025 Act).</li>
        <li><strong>Singapore file:</strong> keep the Notice of Assessment for the year you left, IR21 papers from your employer, CPF and SRS statements, and broker records of every vest and sale.</li>
      </ol>
      <p>
        C S Rushil &amp; Co. advises on Indian tax and FEMA and prepares Indian filings only: the status review, Indian
        returns, account and remittance paperwork, and Schedule FA and foreign tax credit work. Singapore tax, IRAS, CPF,
        SRS, ACRA and Singapore company law stay with your Singapore adviser, and we coordinate with that adviser on the
        figures. We serve Singapore clients online from our only office, in Anna Nagar, Chennai, in English and Tamil.
        Our <Link href="/nri-tax-services">NRI tax services</Link> page lists the rest of our NRI work.
      </p>

      <h2>Which official sources does this guide rely on?</h2>
      <ul>
        <li>
          IRAS,{" "}
          <a href="https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees" target="_blank" rel="noopener noreferrer">Tax Clearance for Employees</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          IRAS,{" "}
          <a href="https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/getting-tax-clearance-a-step-by-step-guide" target="_blank" rel="noopener noreferrer">Getting Tax Clearance: a step-by-step guide</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          IRAS,{" "}
          <a href="https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/special-tax-schemes/tax-on-srs-withdrawals" target="_blank" rel="noopener noreferrer">Tax on SRS withdrawals</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          CPF Board,{" "}
          <a href="https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore" target="_blank" rel="noopener noreferrer">Closing your account when you leave Singapore</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          CPF Board,{" "}
          <a href="https://www.cpf.gov.sg/employer/employer-obligations/who-should-receive-cpf-contributions" target="_blank" rel="noopener noreferrer">Who should receive CPF contributions</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax Department,{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-5-1" target="_blank" rel="noopener noreferrer">section 5 of the Income-tax Act, 2025</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax Department,{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-9-1" target="_blank" rel="noopener noreferrer">section 9 of the Income-tax Act, 2025</a>{" "}
          and{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-9-6" target="_blank" rel="noopener noreferrer">section 9 of the Income-tax Act, 1961</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax e-filing portal,{" "}
          <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/non%20resident%20-faq" target="_blank" rel="noopener noreferrer">Non Resident FAQs</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax e-filing portal,{" "}
          <a href="https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/Step%20by%20Step%20Guide%20FA%20FSI.pdf" target="_blank" rel="noopener noreferrer">Step-by-step guide to Schedules FSI, TR and FA</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax Department,{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-43-114" target="_blank" rel="noopener noreferrer">section 43 of the Black Money Act, 2015</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=357" target="_blank" rel="noopener noreferrer">FAQs on foreign currency accounts by resident individuals (FEMA section 2(v))</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=8685&Mode=0" target="_blank" rel="noopener noreferrer">A.P. (DIR Series) Circular No. 90 on section 6(4) of FEMA</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10198" target="_blank" rel="noopener noreferrer">Master Direction on Deposits and Accounts</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13157" target="_blank" rel="noopener noreferrer">Commercial Banks (Interest Rate on Deposits) Directions, 2025</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10192" target="_blank" rel="noopener noreferrer">Master Direction on the Liberalised Remittance Scheme</a>{" "}
          (checked 19 November 2026)
        </li>
      </ul>
    </>
  );
}
