import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources: FEMA 395/2019-RB reg 4(2) (FLA by 15 July, consolidated up to
// 13 June 2026); RBI FAQ on FLA return (FAQView Id=95, updated as on 1 July
// 2026): FLAIR portal at flair.rbi.org.in, who files, provisional data and
// revised return with RBI approval, valuation (OFBV for unlisted, closing
// price for listed), share application money only = no filing, IFSC entities.
// LSF: A.P. (DIR Series) Circular No. 16 dated 30 Sep 2022, row 1 (FLA: Rs 7,500).
export const meta: BlogPostMeta = {
  slug: "fla-return-due-date",
  title: "FLA Return Due 15 July 2027: Who Must File and How",
  description:
    "RBI's FLA return is due by 15 July each year from Indian entities with FDI or overseas investment: who files, provisional data, FLAIR portal, late fee.",
  date: "2026-11-13",
  excerpt:
    "Every Indian company or LLP with foreign direct investment or overseas investment files the RBI's FLA return by 15 July. Here is who must file, what goes into it and how the FLAIR portal works.",
  summary:
    "The Annual Return on Foreign Liabilities and Assets (FLA) is filed with the RBI by 15 July each year by Indian companies, LLPs and certain other entities that have foreign direct investment or overseas direct investment outstanding at the end of March of the reporting year or the previous year. It is filed online on the RBI's FLAIR portal.",
  faqs: [
    {
      question: "What is the due date for the FLA return?",
      answer:
        "15 July every year, for the financial year ended the previous 31 March. Regulation 4(2) of the FEMA (Mode of Payment and Reporting of Non-Debt Instruments) Regulations, 2019 sets the date. The return for FY 2025-26 was due on 15 July 2026, and the return for FY 2026-27 is due on 15 July 2027.",
    },
    {
      question: "Who must file the FLA return?",
      answer:
        "Indian companies, LLPs and other entities such as SEBI-registered AIFs, partnership firms and public-private partnerships that have outstanding foreign direct investment or overseas direct investment at the end of March of the reporting year or the previous year. An entity with neither in both years does not file.",
    },
    {
      question: "Can the FLA return be filed with unaudited figures?",
      answer:
        "Yes. The RBI's FAQs say that if accounts are not audited by 15 July, the entity files on the basis of provisional or unaudited figures. Once the accounts are audited, it files a revised return, which needs RBI approval requested through the FLAIR portal, whatever the size of the change.",
    },
    {
      question: "Where is the FLA return filed?",
      answer:
        "On the RBI's FLAIR (Foreign Liabilities and Assets Information Reporting) portal at flair.rbi.org.in. A new entity registers once, uploading a verification letter and an authority letter, and receives a user ID and password by email. SEBI-registered AIFs register on FLAIR and then submit an Excel format by email.",
    },
    {
      question: "What is the penalty for not filing the FLA return?",
      answer:
        "The RBI treats non-filing by the due date as a contravention of FEMA, and penal provisions may be invoked. Under the RBI's September 2022 circular, a late FLA return can be regularised with a fixed late submission fee of ₹7,500. Returns for earlier missed years need the RBI's approval to file.",
    },
    {
      question: "Does a company that only received share application money file FLA?",
      answer:
        "No, according to the RBI's FAQs, if the company has only received share application money and has no outstanding FDI or ODI at the end of March, it need not file. Once shares are allotted and FDI is outstanding at a 31 March, the return becomes due the following 15 July.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The FLA return is the one annual filing every foreign-owned Indian
        company has to make to the Reserve Bank of India, whether or not any
        new money came in during the year. It is also easy to forget, because it
        falls due in July, before the audit is usually finished. This post
        explains who files it, when, what goes into it and how the FLAIR portal
        works, based on the RBI&apos;s FAQs updated as on 1 July 2026.
      </p>

      <h2>What is the FLA return?</h2>
      <p>
        The Annual Return on Foreign Liabilities and Assets records an Indian
        entity&apos;s foreign liabilities, such as foreign direct investment
        received, and its foreign assets, such as overseas direct investment
        made. Regulation 4(2) of the{" "}
        <a href="https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11723&Mode=0" target="_blank" rel="noopener noreferrer">
          FEMA (Mode of Payment and Reporting of Non-Debt Instruments)
          Regulations, 2019
        </a>{" "}
        requires it on or before 15 July each year for the April to March year.
        The RBI uses the data to compile India&apos;s balance of payments and
        international investment position.
      </p>
      <p>
        Unlike FC-GPR or FC-TRS, the FLA return is not tied to a transaction. It
        is a statement of position, filed every year as long as foreign
        investment remains outstanding.
      </p>

      <h2>Who must file the FLA return?</h2>
      <p>
        According to the{" "}
        <a href="https://www.rbi.org.in/Scripts/FAQView.aspx?Id=95" target="_blank" rel="noopener noreferrer">
          RBI&apos;s FAQs on the FLA return
        </a>
        , the return is filed by companies, LLPs and other entities, including
        SEBI-registered alternative investment funds, partnership firms and
        public-private partnerships, that have outstanding FDI or ODI at the end
        of March of the reporting year or of the previous year. The return
        captures both years&apos; figures, which is why a single year with
        investment outstanding is enough.
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation at 31 March</th>
            <th>FLA return needed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FDI received during the year and outstanding at 31 March</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>FDI outstanding at both year-ends, no new money</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Foreign investor exited during the year, nothing outstanding now, but FDI outstanding a year earlier</td>
            <td>Yes, because the previous year had investment outstanding</td>
          </tr>
          <tr>
            <td>Overseas direct investment made by the Indian entity and outstanding</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Only share application money received, no shares allotted, no other FDI or ODI</td>
            <td>No</td>
          </tr>
          <tr>
            <td>No FDI or ODI outstanding at the end of either year</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Entity regulated by IFSCA in an IFSC</td>
            <td>Follows IFSCA&apos;s instructions, not the RBI return</td>
          </tr>
        </tbody>
      </table>
      <p>
        An Indian entity that invests in an IFSC entity still files its own FLA
        return. In practice, the main filers are{" "}
        <Link href="/india-subsidiary-compliance-cfo">Indian subsidiaries of foreign groups</Link>{" "}
        and Indian companies with subsidiaries or joint ventures abroad.
      </p>

      <h2>When is it due, and what if the accounts are not audited?</h2>
      <p>
        The due date is 15 July, and it does not move with the audit or the AGM.
        The return for FY 2025-26 was due on 15 July 2026. The next return, for
        FY 2026-27, is due on 15 July 2027.
      </p>
      <p>
        Many companies close their audit after July. The RBI&apos;s FAQs deal
        with this directly: if audited accounts are not ready by 15 July, file
        on the basis of provisional or unaudited figures. When the audit is
        complete, file a revised return. A revised return needs RBI approval,
        requested through the FLAIR portal, regardless of how large or small
        the difference is. The FAQs advise filing it as soon as the audited
        statements are available.
      </p>
      <p>
        Waiting for the audit and filing late is the wrong way round. A
        provisional return on time, followed by a revision, keeps the company
        compliant.
      </p>

      <h2>Which years does the 15 July 2027 return cover?</h2>
      <p>
        The FAQs describe the FLA return as capturing two years of data: the
        reporting year and the previous year. The return due on 15 July 2027
        therefore reports the position at 31 March 2027, alongside the
        comparative position at 31 March 2026. That is why the second figure
        should match what was reported a year earlier, after any revision for
        audited numbers.
      </p>
      <p>
        It also explains two outcomes that surprise companies. A company whose
        foreign investor sold out to a resident during FY 2026-27 still files in
        July 2027, because investment was outstanding at 31 March 2026. And a
        company that received its first FDI in, say, February 2027 files in July
        2027 even though the investment is only weeks old, because it is
        outstanding at 31 March 2027. If the{" "}
        <Link href="/company-registration-india-for-foreigners">company was set up by a foreign promoter</Link>{" "}
        during the year, the first FLA return usually follows the first 31 March
        after the shares are allotted.
      </p>

      <h2>How do you file the FLA return on the FLAIR portal?</h2>
      <p>
        The return is filed online on the RBI&apos;s FLAIR (Foreign Liabilities
        and Assets Information Reporting) portal at{" "}
        <a href="https://flair.rbi.org.in/" target="_blank" rel="noopener noreferrer">
          flair.rbi.org.in
        </a>
        .
      </p>
      <ol>
        <li>
          <strong>Register once.</strong> Use &quot;Registration for New Entity
          Users&quot;, fill in the registration form and upload a verification
          letter and an authority letter for the person who will file.
        </li>
        <li>
          <strong>Receive the login.</strong> The user ID and a default password
          are emailed to the authorised person after the registration is
          accepted.
        </li>
        <li>
          <strong>Gather the figures.</strong> Shareholding at both year-ends,
          net worth, foreign loans and trade credit, and any overseas
          investments, for the reporting year and the previous year.
        </li>
        <li>
          <strong>Fill and submit the return.</strong> Several valuation fields
          are calculated by the portal from the figures entered.
        </li>
        <li>
          <strong>Keep the acknowledgement.</strong> File a revised return, with
          approval, once the audited figures are final.
        </li>
      </ol>
      <p>
        SEBI-registered AIFs follow a slightly different route: they register
        on FLAIR and then request an Excel format by email, which they complete
        and send back. Entities that have changed their CIN after the reporting
        year file the return for that year under the old CIN, according to the
        FAQs.
      </p>

      <h2>What figures go into the FLA return?</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>How the RBI&apos;s FAQs say to report it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equity held by non-residents in an unlisted entity</td>
            <td>Own funds at book value: net worth multiplied by the non-resident shareholding percentage</td>
          </tr>
          <tr>
            <td>Equity held by non-residents in a listed company</td>
            <td>Closing share price as on the reference date</td>
          </tr>
          <tr>
            <td>Classification of foreign equity</td>
            <td>A non-resident holding 10% or more of equity and participating preference shares is direct investment</td>
          </tr>
          <tr>
            <td>Loans, trade credit and debentures with group entities</td>
            <td>Other capital, at nominal value</td>
          </tr>
          <tr>
            <td>Domestic assets and liabilities in foreign currency</td>
            <td>Excluded</td>
          </tr>
        </tbody>
      </table>
      <p>
        The figures should tie back to the financial statements and to the
        FC-GPR and FC-TRS filings made during the year. Differences between them
        tend to raise questions.
      </p>

      <h2>What should a company prepare before 15 July 2027?</h2>
      <ul>
        <li>Confirm the entity is registered on FLAIR and that the authorised user&apos;s email still works.</li>
        <li>Draw up the shareholding pattern at 31 March 2026 and 31 March 2027, with each non-resident holder&apos;s percentage.</li>
        <li>Take net worth from the latest available accounts, provisional if the audit is not finished.</li>
        <li>List loans, trade credit and other balances with foreign group entities at both dates.</li>
        <li>List overseas investments made by the Indian entity, if any.</li>
        <li>Reconcile allotments and transfers in the year with the FC-GPR and FC-TRS filings.</li>
        <li>Diarise the revised return once the audited accounts are approved.</li>
      </ul>

      <h2>What happens if the FLA return is late or missed?</h2>
      <p>
        The RBI&apos;s FAQs say that not filing by the due date is a violation of
        FEMA and that the penalty clause may be invoked. Returns for earlier
        years that were never filed need the RBI&apos;s approval before they can
        be submitted, and the penalty may still apply for those years.
      </p>
      <p>
        The RBI&apos;s{" "}
        <a href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12393&Mode=0" target="_blank" rel="noopener noreferrer">
          circular of 30 September 2022 on late submission fees
        </a>{" "}
        places the FLA return among returns that do not capture flows, for which
        the late submission fee is a fixed ₹7,500. For questions on a late FLA
        return, the FAQs direct entities to the Foreign Exchange Department of
        the RBI regional office where their registered office is located.
      </p>
      <p>
        If 15 July has already passed for a year, the practical course is to
        register on FLAIR if needed, file the missed return with the most reliable
        available figures and deal with the late submission fee, rather than
        wait for the next cycle. Each missed year is a separate return, so a
        gap left unattended for several years means several late returns, each
        needing approval.
      </p>

      <h2>How does the FLA return fit with other FEMA filings?</h2>
      <p>
        A foreign-owned Indian company typically has transaction filings during
        the year, such as FC-GPR within 30 days of each allotment and FC-TRS for
        share transfers, and one annual position filing, the FLA return.
        Companies with overseas subsidiaries also have their own overseas
        investment reporting. Our{" "}
        <Link href="/tools/foreign-subsidiary-compliance-calendar">foreign subsidiary compliance calendar</Link>{" "}
        lists these by month, and our page for{" "}
        <Link href="/india-subsidiary-for-us-companies">US companies with an Indian subsidiary</Link>{" "}
        sets out the first year.
      </p>
      <p>
        C S Rushil &amp; Co. registers entities on FLAIR and prepares FLA
        returns, including revised returns after audit, from Anna Nagar,
        Chennai, and online, as part of our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance services</Link>.
      </p>
    </>
  );
}
