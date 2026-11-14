import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources: Companies Act ss. 92(4)-(5), 137(1) and (3) as amended by the
// Companies (Amendment) Act, 2020 (in force 21 Dec 2020); additional fee of
// Rs 100/day per form from 1 July 2018 (Registration Offices and Fees Rules);
// MCA General Circular 05/2026 dated 24 Oct 2026 (AOC-4 family to 31 Dec 2026,
// MGT-7/7A to 31 Jan 2027, no additional fee; para 4 all-or-nothing);
// small company thresholds Rs 10 cr / Rs 100 cr from 1 Dec 2025 (G.S.R. 880(E)).
export const meta: BlogPostMeta = {
  slug: "aoc-4-mgt-7-late-fee",
  title: "AOC-4 and MGT-7 Late Fee 2026: How ₹100 a Day Adds Up",
  description:
    "AOC-4 is due 30 days and MGT-7 60 days after the AGM. How the ₹100-a-day additional fee works, the FY 2025-26 relaxation, MGT-7A and Sec 92/137 penalty.",
  date: "2026-11-13",
  excerpt:
    "Late AOC-4 and MGT-7 filings cost ₹100 a day per form, with no cap. Here is how the fee is counted, what the MCA's October 2026 relaxation changes, and the separate penalties.",
  summary:
    "AOC-4 is due within 30 days of the AGM and MGT-7 or MGT-7A within 60 days. A late filing attracts an additional fee of ₹100 per day for each form, with no upper limit. For FY 2025-26, the MCA waived this fee for AOC-4 filed by 31 December 2026 and MGT-7 or MGT-7A filed by 31 January 2027.",
  faqs: [
    {
      question: "What is the additional fee for late AOC-4 and MGT-7?",
      answer:
        "₹100 for every day of delay, for each form, in addition to the normal filing fee. It has applied since 1 July 2018 under the Companies (Registration Offices and Fees) Rules, 2014, and there is no upper limit. A company late with both forms pays the fee separately on each.",
    },
    {
      question: "Has the MCA extended the AOC-4 and MGT-7 due dates for FY 2025-26?",
      answer:
        "Yes, for fees only. General Circular 05/2026, dated 24 October 2026, allows FY 2025-26 financial statements in the AOC-4 forms to be filed by 31 December 2026, and MGT-7 or MGT-7A by 31 January 2027, without additional fees. It does not extend the time for holding the AGM.",
    },
    {
      question: "What if a company misses the relaxed dates in the circular?",
      answer:
        "Paragraph 4 of the circular says filings made after it lapses attract all fees, including additional fees, from the date the filing was actually due under the Act. So an AOC-4 filed in January 2027 pays ₹100 a day counted from the original due date, not from 31 December 2026.",
    },
    {
      question: "Who files MGT-7A instead of MGT-7?",
      answer:
        "One Person Companies and small companies file the shorter annual return in MGT-7A. Since 1 December 2025, a small company is a private company with paid-up capital up to ₹10 crore and turnover up to ₹100 crore, excluding holding and subsidiary companies, Section 8 companies and certain others.",
    },
    {
      question: "What penalty applies under Section 137 and Section 92?",
      answer:
        "Separate from the additional fee, the ROC can impose a penalty of ₹10,000 plus ₹100 per day of continuing default, capped at ₹2 lakh for the company and ₹50,000 for each officer in default. Small companies and OPCs may be charged up to half these amounts under Section 446B.",
    },
    {
      question: "Is the additional fee the same as the penalty?",
      answer:
        "No. The additional fee is paid automatically on the MCA portal when the late form is filed. The penalty under Section 92(5) or 137(3) is imposed separately by the Registrar as adjudicating officer, through a notice and order. Paying the additional fee does not by itself close a penalty proceeding.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Every company files two annual forms with the Registrar of Companies
        after its annual general meeting: AOC-4 for the financial statements and
        MGT-7 or MGT-7A for the annual return. Miss the due date and the MCA
        portal adds ₹100 a day to each form, with no ceiling. For FY 2025-26
        there is a one-time reprieve, announced on 24 October 2026, but it has a
        sting in its tail. This post explains the dates, the arithmetic and the
        separate penalties under the Companies Act, 2013.
      </p>

      <h2>When are AOC-4 and MGT-7 due for FY 2025-26?</h2>
      <p>
        Section 137(1) requires financial statements to be filed within 30 days
        of the AGM. Section 92(4) requires the annual return within 60 days of
        the AGM. An OPC, which does not hold an AGM, files AOC-4 within 180 days
        of the end of the financial year. If an AGM was not held when it should
        have been, the 30-day and 60-day periods run from the last date on which
        it should have been held.
      </p>
      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Statutory due date</th>
            <th>If AGM held on 30 September 2026</th>
            <th>Last date without additional fee (General Circular 05/2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS), AOC-4 CFS NBFC (Ind AS)</td>
            <td>30 days from the AGM</td>
            <td>30 October 2026</td>
            <td>31 December 2026</td>
          </tr>
          <tr>
            <td>AOC-4 of a One Person Company</td>
            <td>180 days from the end of the financial year</td>
            <td>27 September 2026</td>
            <td>31 December 2026</td>
          </tr>
          <tr>
            <td>MGT-7 or MGT-7A</td>
            <td>60 days from the AGM</td>
            <td>29 November 2026</td>
            <td>31 January 2027</td>
          </tr>
        </tbody>
      </table>
      <p>
        The relaxed dates are fixed calendar dates. They apply only to filings
        for FY 2025-26, and only to the forms named in the circular. Forms such
        as ADT-1 and MGT-14 are not covered. See our{" "}
        <Link href="/roc-compliances">annual ROC filing calendar</Link>{" "}
        for the full list of company due dates.
      </p>

      <h2>How is the ₹100 a day additional fee calculated?</h2>
      <p>
        From 1 July 2018, the Companies (Registration Offices and Fees) Rules,
        2014 have charged an additional fee of ₹100 for each day of delay in
        filing AOC-4 and MGT-7, in place of the older slab-based multiples of
        the normal fee. It applies to each form separately and is added to the
        normal filing fee, which depends on the company&apos;s share capital.
        There is no cap and no reduced rate for small companies or OPCs.
      </p>
      <p>
        The count starts from the day after the statutory due date and runs to
        the date of filing. Two examples, assuming an AGM on 30 September 2026
        and that the FY 2025-26 relaxation is missed:
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Due date</th>
            <th>Filed on</th>
            <th>Days late</th>
            <th>Additional fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AOC-4 after the relaxation lapses</td>
            <td>30 October 2026</td>
            <td>15 January 2027</td>
            <td>77</td>
            <td>₹7,700</td>
          </tr>
          <tr>
            <td>MGT-7 after the relaxation lapses</td>
            <td>29 November 2026</td>
            <td>15 February 2027</td>
            <td>78</td>
            <td>₹7,800</td>
          </tr>
          <tr>
            <td>Both forms a full year late</td>
            <td>As above</td>
            <td>One year later</td>
            <td>365 each</td>
            <td>₹36,500 per form, ₹73,000 together</td>
          </tr>
        </tbody>
      </table>
      <p>
        The figures are government fees computed by the MCA portal, not an
        estimate of any other cost. A company that has skipped several years
        pays this on every form for every year, which is why old defaults grow
        so quickly.
      </p>

      <h2>What does General Circular 05/2026 change, and what does it not?</h2>
      <p>
        The circular, issued by the Ministry of Corporate Affairs on 24 October
        2026 after representations from stakeholders, allows FY 2025-26
        financial statements in the AOC-4 forms to be filed up to 31 December
        2026, and annual returns in MGT-7 and MGT-7A up to 31 January 2027,
        without additional fees. It is available on the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s Acts and Rules section
        </a>
        . Three limits matter:
      </p>
      <ul>
        <li>
          <strong>It waives fees, not obligations.</strong> Paragraph 3 says it
          does not extend the time for holding AGMs, and companies that missed
          statutory timelines remain liable under the Act.
        </li>
        <li>
          <strong>It is all or nothing.</strong> Paragraph 4 says filings made
          after the circular lapses attract all fees, including additional
          fees, from the date the filing was actually due. Missing 31 December
          by a week costs the full count from 30 October, not one week&apos;s fee.
        </li>
        <li>
          <strong>It covers FY 2025-26 only.</strong> Pending AOC-4 or MGT-7 for
          earlier years still carry the additional fee in full.
        </li>
      </ul>
      <p>
        Because the relaxed dates are fixed calendar dates, they also help
        companies whose statutory dates had already passed when the circular
        was issued. An OPC whose AOC-4 fell due on 27 September 2026, or a
        company that held its AGM in August and missed its 30-day window, can
        still file without the additional fee if it files by 31 December 2026.
        Where the Registrar extended the AGM date and the statutory due date
        falls after the relaxed date, the later statutory date still applies,
        since a fee waiver does not shorten the Act&apos;s timeline. The circular contains
        no provision for refunding additional fees already paid before it was
        issued.
      </p>
      <p>
        As of 13 November 2026, there is still time to use the relaxation for
        both forms. A company that has held its AGM but not filed should plan to
        finish AOC-4 well before the year-end holidays.
      </p>

      <h2>When does a company file MGT-7A instead of MGT-7?</h2>
      <p>
        MGT-7A is a shorter annual return for One Person Companies and small
        companies, in use since FY 2020-21. The small company limits were raised
        with effect from 1 December 2025: a private company now qualifies if its
        paid-up capital does not exceed ₹10 crore and its turnover does not
        exceed ₹100 crore. Holding and subsidiary companies, Section 8 companies
        and companies governed by a special Act cannot be small companies,
        whatever their size.
      </p>
      <p>
        The higher limits mean some companies that filed MGT-7 last year may now
        be eligible for MGT-7A. The due date and the ₹100 a day additional fee
        are the same for both forms. Check eligibility against the audited
        figures for the year before choosing the form, and recheck it every year,
        because a company that crosses either limit, or becomes a subsidiary,
        moves back to MGT-7.
      </p>

      <h2>What penalties apply under Sections 137 and 92?</h2>
      <p>
        The additional fee is only the first cost. Section 137(3) and Section
        92(5) of the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules/companies-act/companies-act-2013.html" target="_blank" rel="noopener noreferrer">
          Companies Act, 2013
        </a>{" "}
        provide separate penalties, imposed by the Registrar as adjudicating
        officer under Section 454. The Companies (Amendment) Act, 2019 turned
        these defaults into civil penalties, and the Companies (Amendment) Act,
        2020, in force from 21 December 2020, reduced the amounts to the current
        levels.
      </p>
      <table>
        <thead>
          <tr>
            <th>Default</th>
            <th>Penalty on the company</th>
            <th>Penalty on each officer in default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Financial statements not filed (Section 137(3))</td>
            <td>₹10,000, plus ₹100 per day of continuing default, up to ₹2 lakh</td>
            <td>₹10,000, plus ₹100 per day, up to ₹50,000</td>
          </tr>
          <tr>
            <td>Annual return not filed (Section 92(5))</td>
            <td>₹10,000, plus ₹100 per day of continuing default, up to ₹2 lakh</td>
            <td>₹10,000, plus ₹100 per day, up to ₹50,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Under Section 137(3), the officers liable are the managing director and
        the CFO, or, if there are none, a director charged by the board, or
        failing that every director. Section 446B allows lower penalties, not
        more than half the stated amount, for small companies, OPCs, producer
        companies and start-ups. Neither the circular nor payment of the
        additional fee waives these penalties.
      </p>

      <h2>What happens if the forms are not filed for several years?</h2>
      <p>
        Two further consequences follow a long default. Under Section 164(2), a
        director of a company that has not filed financial statements or annual
        returns for three continuous financial years becomes disqualified from
        being reappointed or appointed in any company for five years. Under
        Section 248, the Registrar can strike off a company that is not carrying
        on business or has not complied. Our post on{" "}
        <PostLink slug="private-limited-company-penalties-non-compliance">penalties for non-compliance</PostLink>{" "}
        covers these in more detail.
      </p>

      <h2>How do you file a late AOC-4 or MGT-7?</h2>
      <ol>
        <li>
          <strong>Confirm the dates.</strong> Note the AGM date, or the last date
          it should have been held, and work out the statutory due date for each
          form and year.
        </li>
        <li>
          <strong>Check the directors&apos; DINs and DSCs.</strong> A deactivated
          DIN or expired DSC will stop the filing. See our guide to{" "}
          <Link href="/blog/din-and-dsc-for-company-directors">DIN and DSC for directors</Link>.
        </li>
        <li>
          <strong>Clear the oldest year first.</strong> Work through backlogs
          year by year, so that each year&apos;s opening figures match the last
          accounts on record.
        </li>
        <li>
          <strong>File AOC-4, then MGT-7 or MGT-7A.</strong> Attach the audited
          financial statements, board&apos;s report and auditor&apos;s report
          to AOC-4. Pick MGT-7A only if the company is an OPC or small company.
        </li>
        <li>
          <strong>Pay the normal and additional fee.</strong> The portal computes
          the additional fee from the due date. Keep the challans.
        </li>
        <li>
          <strong>Respond to any adjudication notice.</strong> If the Registrar
          issues a notice under Section 454, reply within the time given; the
          penalty order can be appealed to the Regional Director.
        </li>
      </ol>
      <p>
        Companies that want these dates tracked each year can use our{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>.
        C S Rushil &amp; Co. prepares and files AOC-4, MGT-7 and MGT-7A, including
        backlogs, from Anna Nagar, Chennai, and online, as part of our{" "}
        <Link href="/roc-compliances">ROC compliance services</Link>.
      </p>
    </>
  );
}
