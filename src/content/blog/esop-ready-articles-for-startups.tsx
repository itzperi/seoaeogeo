import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "esop-ready-articles-for-startups",
  title: "ESOP-Ready Articles of Association for Startups",
  description:
    "How to draft startup articles that support ESOPs: Rule 12 eligibility, capital headroom, transfer and leaver clauses, ESOP trusts and DPIIT flexibilities.",
  date: "2026-12-29",
  excerpt:
    "An ESOP plan is only as good as the articles behind it. What to build into your AoA so options can be granted, exercised and bought back cleanly.",
  faqs: [
    {
      question: "Do the articles of association need to authorise ESOPs?",
      answer:
        "The Companies Act does not require a specific ESOP clause in the articles, since ESOPs are approved by special resolution under section 62(1)(b). But the articles must not block them. Pre-emption rights, transfer restrictions and investor consent clauses should carve out ESOP grants and allotments, and the articles should deal with transfers of shares after exercise.",
    },
    {
      question: "Who is eligible for ESOPs under Rule 12?",
      answer:
        "Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014 covers permanent employees working in or outside India, directors other than independent directors, and employees or directors of a holding, subsidiary or associate company. Employees who are promoters or in the promoter group, and directors holding more than 10% of shares, are normally excluded.",
    },
    {
      question: "Can startup founders receive ESOPs?",
      answer:
        "Normally promoters and directors holding more than 10% cannot receive ESOPs. A startup recognised by DPIIT is exempt from that exclusion for up to ten years from incorporation, so founders and large-holding directors can be granted options during that period. Plans granted under this relief should be documented carefully, as investors will review them in due diligence.",
    },
    {
      question: "What is the minimum vesting period for ESOPs in an unlisted company?",
      answer:
        "Rule 12 requires a minimum period of one year between the grant of options and their vesting. Beyond that, the company sets the vesting schedule in the ESOP plan. Many startups use four-year schedules with a one-year cliff, but this is a commercial choice rather than a legal requirement, and it must be disclosed in the shareholders' approval.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Most startup founders think about ESOPs as a hiring tool: a pool of
        equity set aside to attract engineers and early leaders who cannot be
        paid market salaries. The plan document gets attention. The articles of
        association often do not, until a grant is held up because the
        articles give an investor a veto, or an employee leaves and the company
        discovers it has no way to buy the shares back.
      </p>
      <p>
        This guide sets out what an ESOP-ready set of articles should cover for
        an Indian private limited company, with the rules that sit behind them.
      </p>

      <h2>What does the law require for ESOPs?</h2>
      <p>
        An unlisted company issues ESOPs under section 62(1)(b) of the
        Companies Act, 2013 and Rule 12 of the Companies (Share Capital and
        Debentures) Rules, 2014. The core requirements are:
      </p>
      <ul>
        <li>A special resolution of shareholders approving the scheme, with an explanatory statement covering the pool size, eligibility, vesting, exercise price and period, and lock-in if any.</li>
        <li>A minimum of one year between grant and vesting.</li>
        <li>Options cannot be transferred or pledged by the employee.</li>
        <li>On an employee&apos;s death or permanent incapacity, the rules set out how unvested options are treated, generally in the employee&apos;s or legal heirs&apos; favour.</li>
        <li>Terms cannot be varied to the detriment of employees who already hold options, and any variation needs a special resolution.</li>
        <li>A register of ESOPs in Form SH-6 and disclosures in the board&apos;s report.</li>
      </ul>

      <h2>Who can receive options?</h2>
      <p>
        Eligible employees include permanent employees in or outside India,
        directors other than independent directors, and employees or directors
        of a holding, subsidiary or associate company. Excluded are employees
        who are promoters or part of the promoter group, and directors who,
        directly or indirectly, hold more than 10% of the company&apos;s
        shares.
      </p>
      <p>
        For startups recognised by DPIIT, those exclusions do not apply for up
        to ten years from incorporation. Recognition currently requires, among
        other conditions, turnover below ₹200 crore in every previous financial
        year, as set out in the{" "}
        <a href="https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html" target="_blank" rel="noopener noreferrer">
          Startup India recognition criteria
        </a>
        . If founders expect to hold options themselves, obtain recognition
        before the grant and keep the evidence on file. See{" "}
        <Link href="/startup-india-registration-chennai">
          Startup India registration in Chennai
        </Link>{" "}
        for the application process.
      </p>

      <h2>Seven things ESOP-ready articles should cover</h2>
      <h3>1. Authorised capital headroom</h3>
      <p>
        Exercised options become new shares. The authorised capital must leave
        room for the full pool plus the next funding round, or the company will
        need to increase it and file SH-7 before allotment.
      </p>

      <h3>2. Carve-outs from pre-emption rights</h3>
      <p>
        Investor-friendly articles often give existing shareholders a right to
        participate in any new issue. Unless ESOP allotments are expressly
        excluded, each exercise can technically trigger those rights.
      </p>

      <h3>3. Carve-outs from investor consent matters</h3>
      <p>
        If the articles list any issue of shares as a reserved matter needing
        investor consent, add a standing exception for grants and allotments
        within an approved ESOP pool.
      </p>

      <h3>4. Transfer restrictions on exercised shares</h3>
      <p>
        Once an employee exercises options, they hold ordinary shares. Private
        company articles restrict transfers, and they should be clear on how
        employee shareholders can sell, whether the company or founders have a
        right of first refusal, and whether drag-along and tag-along provisions
        bind employee shareholders.
      </p>

      <h3>5. Leaver provisions</h3>
      <p>
        Articles commonly allow the company or a nominated person to buy shares
        from employees who leave, with different prices for good leavers and bad
        leavers. These terms must be consistent with the ESOP plan, and any
        buy-back by the company itself must also comply with the Companies
        Act&apos;s buy-back rules.
      </p>

      <h3>6. ESOP trust structure, if used</h3>
      <p>
        Some startups hold the pool through an employee welfare trust so that
        the cap table does not change with every exercise. A company providing
        money for a trust to buy its shares for employees has to meet the
        conditions in section 67 and the related rules. The articles and trust
        deed should be aligned.
      </p>

      <h3>7. Voting and information rights</h3>
      <p>
        Options carry no voting rights until exercised. Some companies issue
        exercised shares with limited information rights, or arrange for
        employee shares to be voted through a trust or proxy. Whatever the
        approach, make sure it is permitted by the articles and the share class
        terms.
      </p>

      <h2>How does ESOP tax work, and why does it affect drafting?</h2>
      <p>
        An employee is taxed on exercise on the difference between the fair
        market value of the shares and the exercise price, as a salary
        perquisite, and the company deducts TDS through payroll. A second tax
        point arises when the employee sells, as capital gains. Employees of
        eligible startups certified for the startup tax holiday may defer the
        tax on exercise until a later event, such as sale, leaving the company
        or the end of a fixed period. Since the tax can arise before employees
        can sell, good articles and plans make liquidity events, buy-backs and
        valuation timing clear. Our{" "}
        <Link href="/payroll-services-chennai">payroll services</Link> page
        covers how perquisite TDS fits into monthly payroll.
      </p>

      <h2>Pool size, valuation and accounting</h2>
      <p>
        The ESOP pool is usually expressed as a percentage of the fully
        diluted share capital. There is no legal standard for its size; it
        depends on hiring plans and what investors will accept. Whatever the
        number, the special resolution should state the total number of
        options and the class of employees eligible, so that later grants stay
        within an approved limit.
      </p>
      <p>
        The exercise price is set by the company in line with its policy and
        the scheme, and the fair market value of the shares on the date of
        exercise drives the employee&apos;s tax. A valuation from a merchant
        banker or other valuer, as applicable, is commonly obtained for tax
        purposes, and the timing of valuations relative to funding rounds
        matters, because a new round at a higher price usually raises the
        value used for exercises that follow.
      </p>
      <p>
        ESOPs also have an accounting cost. Companies following Ind AS apply
        the standard on share-based payment, and other companies generally
        follow the ICAI guidance note on accounting for employee share-based
        payments. In both cases, the fair value of options is recognised as an
        employee expense over the vesting period, which affects reported
        profits even though no cash leaves the company.
      </p>

      <h2>Who drafts what?</h2>
      <p>
        The articles of association and the ESOP plan are legal documents, and
        many startups have them drafted or reviewed by an advocate,
        particularly where investors are involved. A chartered accountant
        typically advises on capital structure, pool sizing, valuation for
        grant and exercise, tax on exercise and sale, accounting for
        share-based payments, and the ROC and FEMA filings that follow. Getting
        both sides to review the same draft saves revisions.
      </p>

      <h2>A practical checklist</h2>
      <ol>
        <li>Agree the pool size and vesting philosophy with co-founders and any investor.</li>
        <li>Check the articles for pre-emption, consent and transfer clauses that would block grants.</li>
        <li>Alter the articles by special resolution and file MGT-14 if changes are needed.</li>
        <li>Approve the ESOP scheme by special resolution with full disclosures.</li>
        <li>Maintain the SH-6 register and issue grant letters with the vesting schedule.</li>
        <li>On exercise, allot shares, file PAS-3 within 30 days and run perquisite TDS through payroll.</li>
      </ol>
      <p>
        If you are preparing an ESOP plan and want the articles, valuation and
        filings reviewed together, you can{" "}
        <Link href="/contact">book a consultation with our team</Link>.
      </p>
    </>
  );
}
