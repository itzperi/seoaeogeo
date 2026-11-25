import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources (to be confirmed by the CA before publishing; see seo/REVIEW-part-time-vs-shared-vs-virtual-cfo.md):
// Companies Act, 2013 s.2(19) (chief financial officer), s.2(51) (key managerial personnel),
// s.134(1) (who signs the financial statements), s.144 (services an auditor cannot render),
// s.203 (whole-time key managerial personnel); Companies (Appointment and Remuneration of
// Managerial Personnel) Rules, 2014, rule 8 (listed companies and public companies with paid-up
// share capital of 10 crore rupees or more). Firm facts from src/lib/site.ts and /virtual-cfo-services.
export const meta: BlogPostMeta = {
  slug: "part-time-vs-shared-vs-virtual-cfo",
  title: "Part-Time, Shared or Virtual CFO: Which One Should You Hire?",
  description:
    "Part-time, shared, fractional or virtual CFO? What each means, which companies must have a whole-time CFO, how the options compare and what to ask first.",
  date: "2026-12-05",
  excerpt:
    "Four labels, one question: how much senior finance help does your company need, and in what form? A plain comparison, the Companies Act rule on whole-time CFOs, and a checklist for hiring.",
  summary:
    "A part-time CFO gives you set days each month, a shared or fractional CFO splits one senior person across a few companies, and a virtual CFO is a remote service run by a firm. Only listed companies and public companies with paid-up capital of ₹10 crore or more must have a whole-time CFO, so most private companies can choose.",
  faqs: [
    {
      question: "Is a fractional CFO the same as an interim CFO?",
      answer:
        "No. An interim CFO is a full-time stand-in for a fixed period, for example while a company searches for a permanent hire or recovers from a sudden exit. A fractional CFO works a part of each month on an ongoing basis. The first fills a gap; the second is a long-term way of buying senior finance time.",
    },
    {
      question: "Can a part-time CFO sign our financial statements?",
      answer:
        "Only as a CFO who has been formally appointed. Under section 134(1) of the Companies Act, the chief financial officer signs the financial statements along with the directors, where a CFO is appointed. An adviser who has not been appointed to that office prepares and reviews the figures but does not sign as CFO.",
    },
    {
      question: "What does a virtual CFO need from us before starting?",
      answer:
        "Read access to your accounting software and bank statements, the last audited financial statements, recent GST and TDS returns, the shareholding and any investor agreements, open loan documents and your current budget if one exists. With these, the first month can go into understanding the numbers rather than collecting them.",
    },
    {
      question: "How do we keep our financial data safe with a remote CFO?",
      answer:
        "Give named, role-based logins instead of shared passwords, start with read-only access, and keep payment approval with your own team. The engagement letter should cover confidentiality, data handling and what happens to your data when the work ends. Review who has access whenever someone joins or leaves either side.",
    },
    {
      question: "How many companies does a shared CFO work with at once?",
      answer:
        "It varies with the size and complexity of each company, so ask directly. What matters more is response time when you need a decision, who covers when the CFO is unavailable, and whether any of the other companies compete with yours. Put the answers in the engagement letter rather than relying on a conversation.",
    },
    {
      question: "Does a company with a foreign parent need a different kind of CFO?",
      answer:
        "It needs a CFO who can produce the parent's monthly reporting pack as well as the Indian books, and who keeps Indian filings such as transfer pricing and foreign investment reports on the calendar. A virtual CFO model often suits this, because the parent already holds the group finance leadership and needs a reliable Indian counterpart.",
    },
    {
      question: "Can we start with a virtual CFO and hire full-time later?",
      answer:
        "Yes, and many companies do. A virtual CFO can set up the reporting, budget and controls, then help write the job description and hand over to the full-time hire. Agree at the start that the handover is part of the engagement, so the new CFO inherits working processes and documented decisions.",
    },
    {
      question: "Do you work in Tamil?",
      answer:
        "Yes. C S Rushil & Co. works in English and Tamil from its only office in J-Block, Anna Nagar, Chennai, and serves companies elsewhere in India and abroad online. Meetings can be at the office or on a video call, and the reporting pack is in English for directors, lenders and investors.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        &quot;Part-time CFO&quot;, &quot;shared CFO&quot;, &quot;fractional CFO&quot; and &quot;virtual CFO&quot; are
        used loosely, and providers often mean different things by the same word. The useful question is not the
        label. It is how much senior finance judgement your company needs each month, who must be accountable for the
        numbers, and whether the law requires that person to be a whole-time officer. This guide answers those three
        questions in order, then gives a comparison, a stage-by-stage fit, a first-90-days plan and the questions to ask
        before you sign.
      </p>

      <h2>What do part-time, shared, fractional and virtual CFO actually mean?</h2>
      <p>
        All four describe senior finance leadership bought for less than a full-time salary. A part-time CFO commits set
        days or hours each month. A shared or fractional CFO is one experienced person spread across several companies.
        A virtual CFO is a service, usually from a firm, delivered remotely with a team behind the named lead.
      </p>
      <p>
        The differences matter in practice. A part-time CFO is close to an employee or a retained individual: you get
        one person&apos;s judgement and one person&apos;s availability. &quot;Shared&quot; and &quot;fractional&quot;
        are largely the same idea, a single senior person whose time is divided, and the words are often used
        interchangeably. A virtual CFO arrangement puts a process around the person: bookkeeping support, a monthly
        close, a standard reporting pack and cover when the lead is away. None of these is the same as an interim CFO,
        who works full time for a fixed period to fill a vacancy.
      </p>

      <h2>Does your company have to appoint a whole-time CFO?</h2>
      <p>
        Only some companies do. Section 203 of the Companies Act, 2013 requires prescribed classes of companies to have
        whole-time key managerial personnel, including a chief financial officer. Rule 8 of the managerial personnel
        rules prescribes listed companies and public companies with paid-up share capital of ₹10 crore or more.
      </p>
      <p>
        For everyone else, including most private limited companies and startups, there is no legal requirement to
        appoint a whole-time CFO, so the choice between a full-time hire and a part-time or virtual arrangement is a
        business decision. Two points follow from the Act. First, &quot;chief financial officer&quot; is a defined term
        (section 2(19)), and a CFO appointed to that office is key managerial personnel (section 2(51)). Second, where a
        CFO is appointed, section 134(1) has the CFO sign the financial statements with the directors. If you engage an
        outside adviser without appointing them as CFO, the directors remain responsible for the accounts and the
        adviser does not sign as CFO.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type of company</th>
            <th>Whole-time CFO required?</th>
            <th>What that means for the choice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Listed company</td>
            <td>Yes (section 203 read with rule 8)</td>
            <td>A full-time CFO is needed; outside support can sit around that person</td>
          </tr>
          <tr>
            <td>Public company with paid-up share capital of ₹10 crore or more</td>
            <td>Yes (section 203 read with rule 8)</td>
            <td>As above</td>
          </tr>
          <tr>
            <td>Other public companies</td>
            <td>Not under rule 8</td>
            <td>A business choice; lenders or investors may set their own conditions</td>
          </tr>
          <tr>
            <td>Private limited company, including startups</td>
            <td>Not under rule 8</td>
            <td>Part-time, shared, fractional or virtual models are all open</td>
          </tr>
        </tbody>
      </table>
      <p>
        A shareholders&apos; agreement, a loan covenant or a foreign parent&apos;s group policy can still ask for a named
        finance head even where the Act does not. Check those documents before you decide.
      </p>

      <h2>How do the options compare?</h2>
      <p>
        Compare them on four things: how much of a senior person&apos;s time you get, how much continuity there is if
        that person is unavailable, who does the routine work underneath, and how easy it is to scale up or step down.
        The table sets the five common options side by side without prices, because cost depends on scope.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Senior time</th>
            <th>Continuity and cover</th>
            <th>Routine work underneath</th>
            <th>Usually suits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full-time CFO (employee)</td>
            <td>All of it</td>
            <td>Depends on one person; you build the team</td>
            <td>Your own finance team</td>
            <td>Companies that must have one, or have the scale and complexity to use one fully</td>
          </tr>
          <tr>
            <td>Part-time CFO (individual)</td>
            <td>Agreed days each month</td>
            <td>One person; no automatic cover</td>
            <td>Your accountant or bookkeeper</td>
            <td>Companies with a capable accounts team that need senior judgement a few days a month</td>
          </tr>
          <tr>
            <td>Shared or fractional CFO</td>
            <td>A slice of an experienced person</td>
            <td>One person spread across clients; ask about response times</td>
            <td>Usually your team</td>
            <td>Founders who want a senior sounding board and periodic board-level reporting</td>
          </tr>
          <tr>
            <td>Virtual CFO service (firm)</td>
            <td>A named lead plus a team</td>
            <td>Firm provides cover and a standard process</td>
            <td>Can include bookkeeping and compliance</td>
            <td>Companies without an accounts team, or with a foreign parent that needs a reliable monthly pack</td>
          </tr>
          <tr>
            <td>Accountant or bookkeeper only</td>
            <td>Little or none</td>
            <td>Filing-focused</td>
            <td>Books and returns</td>
            <td>Very early businesses whose main need is accurate books and on-time filings</td>
          </tr>
        </tbody>
      </table>

      <h2>Which option fits your stage of business?</h2>
      <p>
        Match the option to the decision you face next. Accurate books come first. Senior finance help earns its place
        when a decision depends on forecasts: raising money, taking a loan with covenants, opening a second location,
        hiring ahead of revenue, or reporting to a parent company abroad.
      </p>
      <table>
        <thead>
          <tr>
            <th>Where you are</th>
            <th>What the finance work is really about</th>
            <th>Option that usually fits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pre-revenue or first year of trading</td>
            <td>Clean books, GST and TDS on time, separating personal and business spending</td>
            <td>Accountant or bookkeeper, with occasional advice</td>
          </tr>
          <tr>
            <td>Growing revenue, cash getting tight</td>
            <td>Cash forecasting, collections, pricing and margin by product or client</td>
            <td>Virtual or part-time CFO</td>
          </tr>
          <tr>
            <td>Preparing to raise equity</td>
            <td>Financial model, data room, investor reporting and due diligence questions</td>
            <td>Virtual or fractional CFO with fundraising experience</td>
          </tr>
          <tr>
            <td>Bank loan with covenants</td>
            <td>Monthly covenant tests, stock and debtor statements, lender reporting</td>
            <td>Virtual or part-time CFO</td>
          </tr>
          <tr>
            <td>Indian subsidiary of a foreign group</td>
            <td>Group reporting pack, intra-group pricing, Indian statutory and foreign investment filings</td>
            <td>Virtual CFO service with compliance support</td>
          </tr>
          <tr>
            <td>Listed, or a public company at ₹10 crore paid-up capital or more</td>
            <td>Statutory whole-time CFO plus the full reporting cycle</td>
            <td>Full-time CFO, with outside support where useful</td>
          </tr>
        </tbody>
      </table>
      <p>
        If your company is an Indian subsidiary, the{" "}
        <Link href="/india-subsidiary-compliance-cfo">compliance and CFO retainer for foreign-owned subsidiaries</Link>{" "}
        describes how the monthly pack and the Indian filings run together. Fundraising-stage questions are covered in
        our guide to <PostLink slug="virtual-cfo-omr-startups">virtual CFO work for startups preparing to raise</PostLink>.
      </p>

      <h2>What should a CFO hand you every month?</h2>
      <p>
        Whatever the model, insist on a short monthly pack you can read in fifteen minutes: profit and loss against
        budget, cash position and a rolling forecast, receivables and payables that need action, and a compliance
        calendar showing what is due. If you do not receive something like this, you are paying for advice without
        a record of it.
      </p>
      <p>
        The pack should come with a short note of decisions needed, for example a supplier to chase, a price to review
        or a hire to delay, and the reasons. Our article on{" "}
        <PostLink slug="what-virtual-cfo-reviews-monthly">what a virtual CFO reviews each month</PostLink> walks through
        each part of the review in detail.
      </p>

      <h2>What should the first 90 days look like?</h2>
      <p>
        A good start moves from understanding to routine. The first month is about getting accurate numbers and knowing
        the business. The second sets up the reporting pack and forecast. The third makes the monthly cycle run on dates
        everyone knows, and agrees the targets you will be measured against.
      </p>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Focus</th>
            <th>What you should see at the end</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Days 1 to 30</td>
            <td>Access to systems, review of the last year&apos;s accounts and filings, conversations with founders and the accounts team</td>
            <td>A list of issues found (with priorities) and a cleaned-up opening position</td>
          </tr>
          <tr>
            <td>Days 31 to 60</td>
            <td>Chart of accounts and close process, first monthly pack, cash forecast</td>
            <td>The first pack and forecast, reviewed with the directors</td>
          </tr>
          <tr>
            <td>Days 61 to 90</td>
            <td>Budget, key measures, compliance calendar, controls over payments</td>
            <td>A monthly calendar with fixed dates and an agreed set of measures for the board</td>
          </tr>
        </tbody>
      </table>

      <h2>What should you ask before you hire one?</h2>
      <p>
        Ask who exactly will do the work, what you will receive each month and by which date, how quickly they respond
        when a decision is urgent, who covers when they are away, and how the engagement ends. Then check credentials
        independently and put every answer in a written engagement letter.
      </p>
      <ul>
        <li>
          <strong>Who is the named lead, and what are their credentials?</strong> If they are a chartered accountant,
          you can confirm membership yourself; our guide on{" "}
          <PostLink slug="how-to-verify-a-chartered-accountant-in-india">how to verify a chartered accountant</PostLink>{" "}
          shows how.
        </li>
        <li>
          <strong>What is in the monthly pack, and on which day does it arrive?</strong> Ask for a sample with the
          figures removed.
        </li>
        <li>
          <strong>Who does the routine work?</strong> Bookkeeping, payroll inputs and GST working may sit with your team,
          the provider or both. Write down which.
        </li>
        <li>
          <strong>How are access and approvals handled?</strong> The CFO should not be able to release payments on their
          own.
        </li>
        <li>
          <strong>Are there conflicts?</strong> Ask whether the provider works with direct competitors, and whether it is
          also your statutory auditor (see the next question).
        </li>
        <li>
          <strong>How does it end?</strong> Notice period, handover of files and working papers, and what happens to
          your data.
        </li>
      </ul>
      <p>
        Our article on{" "}
        <PostLink slug="ca-engagement-letter-what-it-should-cover">what a CA engagement letter should cover</PostLink>{" "}
        lists the clauses to look for.
      </p>

      <h2>Can your CFO also be your statutory auditor?</h2>
      <p>
        No. Section 144 of the Companies Act bars a company&apos;s auditor from providing it with accounting and
        bookkeeping, internal audit, outsourced financial services or management services, among others. A virtual CFO
        does exactly that kind of work, so the virtual CFO and the statutory auditor should be different firms.
      </p>
      <p>
        This protects you as much as the auditor: an independent audit is only worth something if the auditor did not
        prepare the figures being audited. C S Rushil &amp; Co. does not audit a company whose books it keeps or for
        which it acts as virtual CFO.
      </p>

      <h2>How do you know the CFO arrangement is working?</h2>
      <p>
        Judge it on evidence you can check each month: the pack arrives on the agreed date, the cash forecast is close
        to what actually happened, overdue receivables are falling, filings go in on time, and the directors take
        decisions on the basis of the numbers. If those are not improving after the first quarter, revisit the scope.
      </p>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>How to check it</th>
            <th>What good looks like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Timeliness</td>
            <td>Date the monthly pack reaches the directors</td>
            <td>The same agreed day every month</td>
          </tr>
          <tr>
            <td>Forecast accuracy</td>
            <td>Last month&apos;s cash forecast against the actual bank balance</td>
            <td>Differences explained, and getting smaller over time</td>
          </tr>
          <tr>
            <td>Collections</td>
            <td>Receivables overdue beyond your normal credit period</td>
            <td>A clear owner and a falling trend</td>
          </tr>
          <tr>
            <td>Compliance</td>
            <td>GST, TDS and ROC filings against their due dates</td>
            <td>Filed on time, with no surprise notices or late fees</td>
          </tr>
          <tr>
            <td>Decisions</td>
            <td>Board or founder decisions that cite the pack</td>
            <td>Pricing, hiring and spending choices made with the numbers in hand</td>
          </tr>
        </tbody>
      </table>
      <p>
        Agree these measures in the first 90 days and review them together each quarter. A short written review keeps
        the engagement honest on both sides: it shows the company what it is getting, and it shows the CFO where the
        scope needs to change.
      </p>

      <h2>When should you move from a virtual CFO to a full-time hire?</h2>
      <p>
        Move when the work no longer fits into agreed days: when finance decisions come up every week rather than every
        month, when you manage a finance team that needs daily leadership, or when the law requires a whole-time CFO
        because the company lists or becomes a public company with paid-up capital of ₹10 crore or more.
      </p>
      <p>
        Other signs are a board that meets monthly with detailed finance agendas, several entities to consolidate, or
        investors who ask for a named full-time finance head. When that point comes, a virtual CFO can help define the
        role, take part in interviews and hand over the reporting cycle, so the new hire starts with working processes
        rather than a blank page.
      </p>

      <h2>How does C S Rushil &amp; Co. work as a virtual CFO?</h2>
      <p>
        C S Rushil &amp; Co. is a chartered accountancy firm led by CA Rushil C S, with one office in J-Block, Anna
        Nagar, Chennai, serving companies in Chennai, across India and abroad online. Its{" "}
        <Link href="/virtual-cfo-services">virtual CFO service</Link> covers monthly MIS, cash-flow forecasts,
        budgets, fundraising support and board packs.
      </p>
      <p>
        Engagements start with a scoping conversation and a written quote, and no work begins until the quote is
        approved. The firm works in English and Tamil, can meet at the Anna Nagar office or by video call, and keeps
        the statutory audit with an independent auditor. If your books also need support, see our{" "}
        <Link href="/bookkeeping-services-chennai">bookkeeping services</Link>.
      </p>

      <h2>Which official sources does this guide rely on?</h2>
      <ul>
        <li>Companies Act, 2013: section 2(19) (chief financial officer), section 2(51) (key managerial personnel), section 134(1) (signing of financial statements), section 144 (services an auditor cannot render) and section 203 (whole-time key managerial personnel). Ministry of Corporate Affairs, mca.gov.in.</li>
        <li>Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014, rule 8 (classes of companies that must have whole-time key managerial personnel). Ministry of Corporate Affairs, mca.gov.in.</li>
      </ul>
      <p>
        This guide is general information on Indian law and practice, not advice for a particular company. It was
        prepared on 25 November 2026.
      </p>
    </>
  );
}
