import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources (checked 19 November 2026):
// Income-tax Act, 1961, sections 2(1B), 47(vi) and 47(vii) (incometaxindia.gov.in/w/section-2-66 and /w/section-47-61): definition of amalgamation with the three-fourths shareholder test; transfers in a scheme of amalgamation not treated as transfers where the amalgamated company is an Indian company.
// Income-tax Act, 2025, sections 2(6) and 70(1)(e) and (f) (incometaxindia.gov.in/w/section-2-263 and /web/guest/w/section-70-123): the 2025 Act counterparts; section 70 is headed "Transactions not regarded as transfer" and disapplies section 67.
// Companies (Compromises, Arrangements and Amalgamations) Rules, 2016, rule 25(1A)(vi) and the Forms CAA-9, CAA-10 and CAA-11, as amended by G.S.R. 603(E) of 4 September 2025 (egazette.gov.in/WriteReadData/2025/266000.pdf): foreign holding company merging into its Indian wholly owned subsidiary named in the fast-track class; 30-day objection period; CAA-11 within 15 days after the meetings; cross-reference to rule 25A(5).
// FEMA (Cross Border Merger) Regulations, 2018, FEMA 389/2018-RB, regulations 3, 4, 6, 8 and 9, as amended up to 5 June 2026 (rbi.org.in, NotificationUser.aspx?Id=11235).
// FEMA (Non-debt Instruments) Rules and Regulations, FEMA 395/2019-RB, regulation 3.1 and Schedule I Part A(1) (swap of equity instruments) and regulation 4(1) (FC-GPR within 30 days of issue) (rbi.org.in, NotificationUser.aspx?Id=11723).
// Foreign Exchange Management (Overseas Investment) Rules, 2022, rule 17(3) and Schedule III paragraph 3, gazette copy G.S.R. 646(E) of 22 August 2022, and FEMA 400/2022-RB (Overseas Investment) Regulations (rbi.org.in, NotificationUser.aspx?Id=12380).
// Publicly reported cases: Reuters, 9 March 2026 (Flipkart); Inc42, 10 April 2025 (Pine Labs); PTI, 28 January 2025 (Zepto); Entrackr, 18 March 2026 (Udaan).
export const meta: BlogPostMeta = {
  slug: "reverse-flip-singapore-to-india",
  title: "Reverse Flip from Singapore to India: Tax, FEMA, MCA Steps",
  description:
    "A reverse flip from a Singapore holding company to India: the merger routes, tax neutrality under the 2025 Act, FEMA reporting, ESOPs and what lawyers still do.",
  date: "2026-12-15",
  excerpt:
    "Which routes move a Singapore holding company into India, when an amalgamation is not a taxable transfer, which FEMA reports follow, and where the Indian-side work ends and the lawyers' work begins.",
  faqs: [
    {
      question: "Does a reverse flip from Singapore to India need RBI approval?",
      answer:
        "The FEMA (Cross Border Merger) Regulations, 2018 say no cross-border transfer of securities, debt or assets is permitted without RBI permission, except as the Regulations allow. A transaction that follows the Regulations is deemed to have the prior approval that rule 25A of the 2016 Rules requires.",
    },
    {
      question: "Is a merger of a Singapore holding company into its Indian subsidiary tax-free in India?",
      answer:
        "The Indian tax law does not treat a transfer in a scheme of amalgamation as a transfer where the amalgamated company is an Indian company, and the same applies to shareholders who receive shares in it. The conditions are set out in section 70 of the Income-tax Act, 2025, so tax advice is needed before the scheme is filed.",
    },
    {
      question: "Which Indian form reports shares issued to the Singapore shareholders after the merger?",
      answer:
        "Shares issued to non-residents are reported on Form FC-GPR, not later than 30 days from the date of issue, under regulation 4(1) of the Non-debt Instruments Regulations, FEMA 395/2019-RB. The Cross Border Merger Regulations separately require reports to the RBI in the manner it prescribes.",
    },
    {
      question: "Can Indian resident shareholders of the Singapore company take part in a reverse flip?",
      answer:
        "Resident shareholders hold overseas investment under the Overseas Investment Rules, 2022. Where their foreign securities are transferred on account of a merger or the liquidation of the foreign entity, rule 17(3) requires approval of the competent authority under Indian or host-country law. Each person's reporting duties should be checked before the scheme is filed.",
    },
    {
      question: "What happens to employee stock options granted by the Singapore company?",
      answer:
        "Schedule III of the Overseas Investment Rules allows a resident employee of an Indian company to acquire shares of the overseas entity under an ESOP offered globally on a uniform basis. We found no rule that replaces them with Indian options on a merger, so the plan terms and tax treatment need separate review.",
    },
    {
      question: "How long does a reverse flip take?",
      answer:
        "No official average exists. The only statutory periods we verified are a 30-day objection window after the CAA-9 notice and 15 days after the meetings to file Form CAA-11. The rest depends on the RBI, the Singapore court, the Indian authorities and the readiness of the documents, so any fixed timeline would be a guess.",
    },
    {
      question: "Does C S Rushil & Co. draft the scheme of arrangement?",
      answer:
        "No. The scheme needs lawyers in both countries. We handle the Indian tax analysis, FEMA reporting, valuation inputs, accounting and ROC filings, and we coordinate with your Singapore counsel and adviser. We serve Singapore clients online from our only office, in Anna Nagar, Chennai.",
    },
    {
      question: "Is Press Note 3 relevant to a reverse flip?",
      answer:
        "Press Note 3 of 2020 needs Government approval for investment from, or with a beneficial owner in, a country that shares a land border with India. If any shareholder or beneficial owner of the Singapore company is linked to such a country, check the current policy before the scheme is filed.",
    },
  ],
  summary:
    "A reverse flip moves the holding company of a group from Singapore to India, most often by merging the Singapore parent into its Indian subsidiary. India's side involves tax neutrality conditions in section 70 of the Income-tax Act, 2025, RBI rules under the Cross Border Merger Regulations, FC-GPR reporting and ROC filings. The scheme itself needs lawyers in both countries.",
};

export default function Body() {
  return (
    <>
      <p>
        This guide is for the finance heads and founders of groups that hold their Indian company through a Singapore
        parent and are weighing a move of the holding company to India. It covers the Indian side only: the merger
        routes under Indian company law, the Indian tax treatment, the FEMA reports and the ROC steps. The scheme itself,
        and everything that happens in Singapore, needs lawyers in both countries. If you are still deciding how to
        structure the Indian company, start with our page on an{" "}
        <Link href="/india-subsidiary-for-singapore-companies">Indian subsidiary for Singapore companies</Link>.
      </p>

      <h2>What is a reverse flip, and why are companies moving their holding company to India in 2026?</h2>
      <p>
        A reverse flip, or redomiciliation, moves the parent of a group back to India. The usual structure is a merger in
        which the foreign holding company is absorbed into its Indian operating company, so the Indian company becomes
        the top company and the foreign shareholders hold shares in it directly.
      </p>
      <p>
        Several well-known groups have been reported to be doing this. The table lists the public reports, with the
        date of each and what it said, and nothing beyond that. Some of these reports link the move to a planned stock
        exchange listing in India.
      </p>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>What was reported</th>
            <th>Report and date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flipkart</td>
            <td>Shifted its base from Singapore to India after Government approval for the internal restructuring</td>
            <td>Reuters, 9 March 2026</td>
          </tr>
          <tr>
            <td>Pine Labs</td>
            <td>Received final NCLT approval to merge its Singapore parent into the Indian entity</td>
            <td>Inc42, 10 April 2025</td>
          </tr>
          <tr>
            <td>Zepto</td>
            <td>Completed the merger of Kiranakart Pte Ltd into Kiranakart Technologies Ltd after Singapore court and NCLT approvals</td>
            <td>PTI, 28 January 2025</td>
          </tr>
          <tr>
            <td>Udaan</td>
            <td>Plan to merge its Singapore holding company into Hiveloop Ecommerce, reported as about to start</td>
            <td>Entrackr, 18 March 2026</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are news reports, not statements about your own group. Every structure depends on the facts of the
        shareholders, the assets and the approvals involved.
      </p>

      <h2>Which routes are available to move a Singapore holding company into India?</h2>
      <p>
        The route most often reported is a merger of the Singapore holding company into its Indian subsidiary, approved
        under the Companies Act and the 2016 Rules. A share swap, in which the Singapore shareholders exchange their
        shares for new shares of the Indian company, is a second route that FEMA permits for foreign investment. The
        right choice depends on the shareholders, the tax cost and the approvals.
      </p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>What it is</th>
            <th>What the Indian rules say</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fast-track merger</td>
            <td>The foreign holding company merges into its Indian wholly owned subsidiary under the fast-track procedure in rule 25</td>
            <td>
              Rule 25(1A)(vi) of the 2016 Rules, as amended on 4 September 2025, names this class and points to rule
              25A(5). Notice on Form CAA-9 invites objections within 30 days, the companies file the solvency
              declaration on Form CAA-10, and Form CAA-11 goes to the Central Government within 15 days after the
              meetings.
            </td>
          </tr>
          <tr>
            <td>Merger through the Tribunal</td>
            <td>The scheme goes to the NCLT in the ordinary way</td>
            <td>
              The reported Pine Labs and Zepto mergers went through NCLT approval. The statutory steps depend on the
              facts, so we confirm them against the current Act and Rules before advising on a case.
            </td>
          </tr>
          <tr>
            <td>Share swap</td>
            <td>Singapore shareholders receive shares of the Indian company in exchange for their Singapore shares</td>
            <td>
              Swap of equity instruments is a permitted mode of consideration under regulation 3.1 and Schedule I of
              the Non-debt Instruments Regulations. A swap is not a merger, so the tax treatment below does not carry
              over to it.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Which route fits is a question for company-law counsel. The fast-track class is narrow: it names a foreign
        holding company merging into its Indian wholly owned subsidiary, and the conditions in rule 25A(5) must be met.
        The Cross Border Merger Regulations were amended in 2026 and now say &quot;Competent Authority&quot; in
        places that said &quot;NCLT&quot;, so who approves a given scheme should be confirmed against the text in force
        on the filing date.
      </p>

      <h2>What happens on the Singapore side?</h2>
      <p>
        The Singapore holding company has its own process under Singapore law, which included Singapore court approval in
        the Zepto case reported above. How it works for your group, how long it takes and what Singapore tax follows are
        questions for your Singapore counsel and Singapore adviser. We do not advise on them, and we work from their
        dates and figures for the Indian filings.
      </p>

      <h2>When is the merger tax-neutral in India?</h2>
      <p>
        A transfer in a scheme of amalgamation is not treated as a transfer for Indian capital gains where the
        amalgamated company is an Indian company, and the shareholders are covered in the same way when they receive
        shares of that company. Both rules sit in section 70 of the Income-tax Act, 2025, which replaces section 47 of
        the 1961 Act from 1 April 2026.
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Income-tax Act, 1961</th>
            <th>Income-tax Act, 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition of amalgamation, with the test that shareholders holding not less than three-fourths in value of the shares become shareholders of the amalgamated company</td>
            <td>Section 2(1B)</td>
            <td>Section 2(6)</td>
          </tr>
          <tr>
            <td>Transfer of a capital asset by the amalgamating company to an Indian amalgamated company</td>
            <td>Section 47(vi)</td>
            <td>Section 70(1)(e)</td>
          </tr>
          <tr>
            <td>Transfer by a shareholder of shares in the amalgamating company, in return for shares of an Indian amalgamated company</td>
            <td>Section 47(vii)</td>
            <td>Section 70(1)(f)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two things follow. The Income-tax Act, 2025 applies from 1 April 2026, so the date of the transfer decides
        which of the two Acts is read. The conditions are also
        detailed: they include the allotment of shares to the shareholder and the three-fourths test. Whether a foreign
        company qualifies as the amalgamating company, how losses and the cost and holding period of shares carry
        across, and what happens to a share swap are outside this guide, and need tax advice on the group&apos;s own
        facts before the scheme is filed.
      </p>

      <h2>What FEMA reporting follows?</h2>
      <p>
        FEMA reporting applies to the company, to the non-resident shareholders who receive shares and to resident
        shareholders who held shares in the Singapore company. Each has its own rules.
      </p>
      <ul>
        <li>
          <strong>The merger itself:</strong> under the Cross Border Merger Regulations, no cross-border transfer of
          securities, debt or assets is allowed without RBI permission except as the Regulations permit. Transactions
          that follow them are deemed to have the prior approval that rule 25A needs. For an inbound merger, the Indian
          company may issue securities to non-residents in line with the FDI pricing, entry route and sectoral caps.
          Foreign borrowings must conform to the external commercial borrowings norms within two years, assets that
          cannot be held under Indian rules must be sold within two years, and the Regulations allow a foreign currency
          account for up to two years. Valuation follows rule 25A of the 2016 Rules, and the company reports to the RBI as
          it prescribes.
        </li>
        <li>
          <strong>Shares issued to non-residents:</strong> reported on Form FC-GPR within 30 days of issue. Our guide to the{" "}
          <PostLink slug="fc-gpr-filing-deadline">FC-GPR filing deadline</PostLink> sets out the late submission fee,
          and the annual{" "}
          <PostLink slug="fla-return-due-date">FLA return</PostLink> is due by 15 July each year.
        </li>
        <li>
          <strong>Resident shareholders of the Singapore company:</strong> where foreign securities are transferred
          because of a merger or the liquidation of the foreign entity, rule 17(3) of the Overseas Investment Rules,
          2022 requires approval of the competent authority under Indian or host-country law. The Overseas Investment
          Regulations also set reporting periods for restructuring, disinvestment and the repatriation of proceeds, which
          we read against each shareholder&apos;s position, because resident individuals follow different reporting rules.
        </li>
        <li>
          <strong>Land-border investors:</strong> if any shareholder or beneficial owner is linked to a country that shares
          a land border with India, check Press Note 3 of 2020 before the scheme is filed.
        </li>
      </ul>
      <p>
        Our <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page lists the reports we prepare. For the
        Indian company&apos;s other annual filings, see the{" "}
        <PostLink slug="compliance-calendar-singapore-owned-indian-subsidiary">
          compliance calendar for a Singapore-owned Indian subsidiary
        </PostLink>
        .
      </p>

      <h2>What happens to ESOPs granted by the Singapore company?</h2>
      <p>
        Indian employees who hold options or shares of the Singapore company under its plan are covered by the Overseas
        Investment Rules. Schedule III lets a resident employee of an Indian company acquire shares of the overseas
        entity under an employee stock option plan, an employee benefit scheme or sweat equity offered globally on a
        uniform basis, and the Regulations place the reporting on the Indian employer entity.
      </p>
      <p>
        We found no rule that converts these into Indian options on a merger. The plan terms, the replacement offered to
        the employees and the tax on the perquisite and on any later sale are separate questions. They are reviewed from
        the plan documents, which is why the ESOP position should be settled before the scheme is filed, not after.
      </p>

      <h2>What ROC filings follow the merger order?</h2>
      <p>
        The fast-track route begins with filings in the Registrar&apos;s system: the CAA-9 notice, the CAA-10 solvency
        declaration and the CAA-11 filing with the Central Government. Further filings with the Registrar follow the
        order. The forms and time limits for those steps come from the Companies Act and the order itself, so we list
        them from the order, not from a general table, and put each date in the calendar.
      </p>
      <p>
        If the Indian company is a subsidiary of a foreign company and a transfer pricing report is required, our page on{" "}
        <Link href="/transfer-pricing-audit">transfer pricing audit</Link> covers the Form 3CEB and Form 48 work, and the
        guide to the{" "}
        <PostLink slug="india-singapore-dtaa-for-businesses">India-Singapore treaty for businesses</PostLink> covers
        withholding on payments that continue between the two countries after the flip.
      </p>

      <h2>What should the group gather before the Indian-side work starts?</h2>
      <p>
        The Indian analysis can only start once the facts are on one page. Gathering them early shortens the later steps
        and shows which of the rules above bite. The list below is what we ask for first.
      </p>
      <ol>
        <li>
          <strong>The shareholder register of the Singapore company</strong>, showing for each holder whether the person is
          a resident of India, a non-resident or a company, because the FEMA route differs for each.
        </li>
        <li>
          <strong>Every foreign security held by an Indian resident</strong>, with the date of acquisition and the
          reports already filed, since rule 17(3) of the Overseas Investment Rules and the reporting periods in the
          Regulations apply to them.
        </li>
        <li>
          <strong>Employee stock option plans</strong>, with the plan rules, the grants and the list of Indian
          participants.
        </li>
        <li>
          <strong>Borrowings and guarantees across the border</strong>, because foreign borrowings must conform to the
          external commercial borrowings norms within two years of an inbound merger.
        </li>
        <li>
          <strong>Assets of the Singapore company that Indian rules do not allow the Indian company to hold</strong>,
          because these must be sold within two years.
        </li>
        <li>
          <strong>The history of FC-GPR and FLA filings</strong> for the Indian company, so that any late filing is fixed
          before the scheme is filed.
        </li>
        <li>
          <strong>Intra-group agreements and the Form 3CEB or Form 48 reports</strong>, because these continue after the
          flip for any payments that remain between group entities.
        </li>
        <li>
          <strong>The country of each shareholder and beneficial owner</strong>, to settle the Press Note 3 check.
        </li>
      </ol>

      <h2>How long does a reverse flip take?</h2>
      <p>
        There is no official average. The statutory periods we verified are the 30-day objection window after the CAA-9
        notice and 15 days after the meetings to file Form CAA-11. The rest depends on the RBI, the Singapore court, the
        Indian authorities and how complete the documents are, so any single timeline would be a guess.
      </p>

      <h2>What does C S Rushil &amp; Co. do, and what does it not do?</h2>
      <p>
        We advise on Indian tax, FEMA reporting, accounting and ROC compliance for the Indian company and its
        shareholders: the tax analysis under the Income-tax Act, the FC-GPR and other FEMA filings, the valuation inputs
        and the post-merger filings. We do not draft the scheme of arrangement, advise on Singapore law or tax, or act
        before the Singapore court. Those need lawyers and advisers in both countries, and we coordinate with them. We
        serve Singapore clients online from our only office, in Anna Nagar, Chennai, in English and Tamil. For a group
        that is still entering India, our page on{" "}
        <Link href="/company-registration-india-for-foreigners">company registration in India for foreigners</Link>{" "}
        explains the options.
      </p>

      <h2>Which official sources does this guide rely on?</h2>
      <ul>
        <li>
          Income Tax Department, Income-tax Act, 1961,{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-2-66" target="_blank" rel="noopener noreferrer">section 2</a>{" "}
          and{" "}
          <a href="https://www.incometaxindia.gov.in/w/section-47-61" target="_blank" rel="noopener noreferrer">section 47</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Income Tax Department, Income-tax Act, 2025,{" "}
          <a href="https://wm.incometaxindia.gov.in/w/section-2-263" target="_blank" rel="noopener noreferrer">section 2</a>{" "}
          and{" "}
          <a href="https://wm.incometaxindia.gov.in/web/guest/w/section-70-123" target="_blank" rel="noopener noreferrer">section 70</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          <a href="https://egazette.gov.in/WriteReadData/2025/266000.pdf" target="_blank" rel="noopener noreferrer">Companies (Compromises, Arrangements and Amalgamations) Amendment Rules, G.S.R. 603(E), 4 September 2025</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11235&Mode=0" target="_blank" rel="noopener noreferrer">FEMA (Cross Border Merger) Regulations, 2018</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11723&Mode=0" target="_blank" rel="noopener noreferrer">FEMA (Non-debt Instruments) Regulations, 2019</a>{" "}
          (checked 19 November 2026)
        </li>
        <li>
          Reserve Bank of India,{" "}
          <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12380&Mode=0" target="_blank" rel="noopener noreferrer">FEMA (Overseas Investment) Regulations, 2022</a>{" "}
          and the Overseas Investment Rules, 2022 (checked 19 November 2026)
        </li>
      </ul>
    </>
  );
}
