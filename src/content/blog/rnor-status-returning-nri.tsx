import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "rnor-status-returning-nri",
  title: "RNOR Status for NRIs Returning to Chennai: Tax Guide",
  description:
    "Returning to Chennai from abroad? How RNOR status works under the Income-tax Act, 2025, what income is taxed, NRE and FCNR accounts, foreign retirement funds.",
  date: "2026-10-12",
  excerpt:
    "Most NRIs moving back to Chennai get a transition period as resident but not ordinarily resident (RNOR). Here is how the tests work and what to do in your first three years back.",
  faqs: [
    {
      question: "What is RNOR status?",
      answer:
        "RNOR, or resident but not ordinarily resident, is a transition status for people who become resident after long periods abroad. You are resident because of your days in India, but your foreign income that is earned and received outside India is generally not taxed in India, and you do not file Schedule FA.",
    },
    {
      question: "How long does RNOR status last after returning to India?",
      answer:
        "Commonly two tax years, sometimes three, depending on how long you were abroad, your visits during those years and the month you return. It is tested afresh every year: you remain RNOR while you were non-resident in nine of the ten preceding years, or spent 729 days or less in India over the preceding seven.",
    },
    {
      question: "Is interest on my NRE fixed deposits taxable after I return?",
      answer:
        "Yes, once you return to live in India. NRE interest is exempt only while you are a person resident outside India under FEMA, and the bank must redesignate the account as resident or move the funds to an RFC account. Interest from that point is taxable, though FCNR deposits can run to maturity.",
    },
    {
      question: "Is my US 401(k) taxable in India once I move back?",
      answer:
        "Not while you are RNOR, because foreign income accruing outside India is generally not taxed in that status. Once you become ordinarily resident, relief is available for retirement accounts in notified countries, currently understood as the US, UK and Canada, letting you be taxed on withdrawal rather than annual accrual if you elect it.",
    },
    {
      question: "Do I need to report foreign bank accounts while I am RNOR?",
      answer:
        "No. The e-filing portal's instructions state Schedule FA need not be filled by a not ordinarily resident or non-resident taxpayer. Reporting starts in the first year you are resident and ordinarily resident, and covers assets held at any time in the calendar year, so prepare your foreign statements before that year ends.",
    },
    {
      question: "Can I sell my foreign house or shares tax-free while RNOR?",
      answer:
        "Generally the gain on a foreign asset sold while RNOR, with the proceeds received abroad, is not taxed in India because it neither accrues nor is received in India. The country where the asset sits may still tax it. Bringing the money to India later does not by itself make it taxable here.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Chennai sees a steady flow of families moving back from the US, the UK,
        Singapore and the Gulf, often settling in Besant Nagar, Adyar, Anna
        Nagar or along the ECR. The tax law gives most of them a transition
        period called RNOR (resident but not ordinarily resident) during which
        foreign income stays largely outside the Indian tax net. Planning the
        move around it can make a large difference, especially for anyone with
        foreign retirement accounts, rental property abroad or unvested stock.
      </p>

      <h2>What is RNOR status and who qualifies when returning to Chennai?</h2>
      <p>
        <strong>Direct answer:</strong> You are RNOR in a tax year if you are
        resident under the day-count tests but were either non-resident in at
        least nine of the ten preceding tax years, or present in India for 729
        days or less across the seven preceding tax years. Under the Income-tax
        Act, 2025 this is section 6(13), with the same tests as the 1961 Act.
      </p>
      <p>
        First, check whether you are resident at all. An individual is resident
        if in India for 182 days or more in the tax year, or for 60 days or more
        in the year plus 365 days or more in the four preceding years. For an
        Indian citizen who leaves for employment abroad, or a citizen or person
        of Indian origin visiting India, the 60-day leg is modified, and a
        visitor with Indian income above ₹15 lakh can be resident with 120 days
        in the year (plus 365 days in the four preceding years) and is then
        treated as RNOR. Certain citizens not liable to tax in any
        country are deemed resident and also treated as RNOR. The official{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/non%20resident%20-faq" target="_blank" rel="noopener noreferrer">non-resident FAQs on the e-filing portal</a>{" "}
        confirm the new Act did not change the not-ordinarily-resident criteria,
        and that the look-back includes years under the old Act.
      </p>

      <h2>What income is taxed in each status?</h2>
      <table>
        <thead>
          <tr>
            <th>Income</th>
            <th>Non-resident</th>
            <th>RNOR</th>
            <th>Resident and ordinarily resident</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indian salary, rent, interest, capital gains</td>
            <td>Taxed</td>
            <td>Taxed</td>
            <td>Taxed</td>
          </tr>
          <tr>
            <td>Foreign income received in India</td>
            <td>Taxed</td>
            <td>Taxed</td>
            <td>Taxed</td>
          </tr>
          <tr>
            <td>Foreign income from a business controlled from, or profession set up in, India</td>
            <td>Not taxed</td>
            <td>Taxed</td>
            <td>Taxed</td>
          </tr>
          <tr>
            <td>Other foreign income earned and received abroad (foreign rent, interest, dividends, gains on foreign assets)</td>
            <td>Not taxed</td>
            <td>Not taxed</td>
            <td>Taxed, with foreign tax credit</td>
          </tr>
          <tr>
            <td>Schedule FA (foreign assets)</td>
            <td>Not required</td>
            <td>Not required</td>
            <td>Required every year</td>
          </tr>
        </tbody>
      </table>
      <p>
        Salary for work done in India is Indian income regardless of where it
        is paid. If you continue working remotely from Chennai for a foreign
        employer, that salary is taxable in India from the day you start working
        here, even in RNOR years.
      </p>

      <h2>What happens to foreign retirement accounts?</h2>
      <p>
        A US 401(k) or IRA, a UK pension or a Canadian RRSP keeps earning while
        you are in Chennai. In RNOR years, income accruing inside it abroad is
        foreign income and generally not taxed in India. Once you become
        ordinarily resident, that annual accrual is technically taxable, which
        can mismatch with the foreign country taxing only on withdrawal. The law
        gives relief for retirement benefit accounts maintained in notified
        countries (the US, the UK and Canada are the countries generally
        understood to be notified; confirm the current list) and opened while you
        were non-resident in India: you can elect to be taxed in India when you
        withdraw. The election is made in a prescribed form (Form 10-EE under
        the 1961 Act) with the return, and once made, it cannot be withdrawn.
      </p>
      <p>
        Withdrawals made while still RNOR and received abroad are generally
        outside Indian tax, which is one reason some returnees plan a
        withdrawal or Roth conversion in those years. The foreign country may
        still tax it, so this needs coordinated advice on both sides.
      </p>

      <h2>What should you do with NRE, NRO and FCNR accounts?</h2>
      <ul>
        <li><strong>NRE accounts:</strong> under RBI rules, when you return for employment or to settle, the account must be redesignated as a resident account, or the funds moved to a Resident Foreign Currency (RFC) account, at your option. NRE interest is no longer exempt from that point.</li>
        <li><strong>NRO accounts:</strong> redesignated as resident accounts. Interest was always taxable.</li>
        <li><strong>FCNR(B) deposits:</strong> can continue to maturity at the contracted rate, then convert to a resident rupee account or an RFC account. Interest on foreign currency deposits approved by the RBI can remain exempt while you are RNOR; confirm how your bank classifies the deposit.</li>
        <li><strong>Foreign bank accounts:</strong> you may keep them, but they become reportable in Schedule FA once you are ordinarily resident, and foreign exchange rules apply to new investments.</li>
      </ul>

      <h2>What does a typical first three years back look like?</h2>
      <p>
        Example: you return to Chennai in August 2026 after 12 years in the US,
        having visited for about 30 days a year. The tests are applied each year.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tax year</th>
            <th>Likely status</th>
            <th>Why</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-27 (Apr 2026 to Mar 2027)</td>
            <td>RNOR</td>
            <td>More than 182 days in India, but non-resident in nine of the ten preceding years</td>
            <td>Redesignate NRE/NRO accounts; plan foreign asset sales or withdrawals; first Indian return</td>
          </tr>
          <tr>
            <td>2027-28</td>
            <td>RNOR</td>
            <td>Still non-resident in nine of the preceding ten years (2017-18 to 2025-26)</td>
            <td>Last clean year for foreign income; collect foreign statements for calendar year 2028</td>
          </tr>
          <tr>
            <td>2028-29</td>
            <td>Resident and ordinarily resident</td>
            <td>Only eight non-resident years in the preceding ten, and over 729 days in the preceding seven</td>
            <td>Worldwide income taxable; Schedule FA; retirement account election; foreign tax credit</td>
          </tr>
        </tbody>
      </table>
      <p>
        Returning late in the year can stretch this: if you arrive in, say,
        December and stay under 182 days in that tax year, the first year may
        remain non-resident, pushing the RNOR window one year later. Keep your
        passport and travel records; the day count is the first thing a notice
        will ask about.
      </p>

      <h2>What should returnees in Chennai plan before moving?</h2>
      <ul>
        <li>Map your days in India for the last ten years from passport stamps or travel history.</li>
        <li>Decide which foreign assets to sell, and when, while RNOR status applies.</li>
        <li>Collect RSU vesting history; shares that vested abroad have a cost equal to their vest value. Our guide to{" "}
          <Link href="/blog/foreign-rsu-tax-schedule-fa-chennai">foreign RSU tax and Schedule FA</Link> covers this.</li>
        <li>If you are selling an Indian property soon after returning, check whether the buyer should deduct TDS as for a resident or a non-resident, based on your status on the date of payment.</li>
      </ul>
      <p>
        We advise returning families in{" "}
        <Link href="/income-tax-consultant-besant-nagar-chennai">Besant Nagar</Link>,{" "}
        <Link href="/income-tax-consultant-neelankarai-ecr-chennai">Neelankarai and the ECR</Link>{" "}
        and across Chennai through our{" "}
        <Link href="/nri-tax-services">NRI tax services</Link> and wider{" "}
        <Link href="/income-tax-consultant-for-hni-chennai">HNI tax planning</Link>, from our only
        office in Anna Nagar or by video call. To plan your residential status
        before the move,{" "}
        <Link href="/contact">contact us</Link>.
      </p>
    </>
  );
}
