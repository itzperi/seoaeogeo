import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "strike-off-vs-winding-up",
  title: "Company Strike Off vs Winding Up: What Is the Difference",
  description:
    "Closing a company that never took off? How strike-off differs from formal winding up, which route fits your company and what each process really involves.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "When a Chennai business owner decides to shut down a company that never took off or has stopped operating, one of the first questions is...",
  summary:
    "Strike off under Section 248 of the Companies Act is a simpler route for an inactive company with no assets or liabilities: it files Form STK-2 and the Registrar removes its name. Winding up is a formal process with a liquidator, through the tribunal or voluntary liquidation under the Insolvency and Bankruptcy Code, for companies with assets, debts or disputes.",
  faqs: [
    {
      question: "What is the difference between strike off and winding up?",
      answer:
        "Strike off under Section 248 is an administrative route for an inactive company with no assets and no liabilities: the company applies in Form STK-2 and the Registrar removes its name. Winding up is a formal legal process run by a liquidator, used when assets must be realised, creditors paid or disputes resolved. Strike off is simpler and quicker.",
    },
    {
      question: "Can every company use the strike off route?",
      answer:
        "No. The company must have failed to start business within a year of incorporation, or carried on no business for the two preceding financial years, and must have no assets or liabilities. Section 249 also bars an application if, in the previous three months, the company changed its name or registered office, disposed of property or carried on business.",
    },
    {
      question: "What must be cleared before closing a company?",
      answer:
        "Before filing STK-2, the company must file its overdue financial statements and annual returns up to the end of the financial year in which it stopped business. Bank accounts should be closed, statutory dues paid and tax returns filed, because the application includes a statement of accounts showing no assets or liabilities, certified by a chartered accountant.",
    },
    {
      question: "Which documents go with Form STK-2?",
      answer:
        "STK-2 is accompanied by an indemnity bond from each director in Form STK-3, an affidavit from each director in Form STK-4, a statement of accounts certified by a chartered accountant made up to a date within 30 days of the application, and a special resolution or the consent of members holding 75 percent of the paid-up share capital.",
    },
    {
      question: "Can a struck-off company be restored?",
      answer:
        "Yes, in limited cases. Under Section 252, the National Company Law Tribunal can order restoration if it is satisfied that the company was carrying on business or that restoration is otherwise just. Directors should also remember that striking off does not end the liability of any director, officer or member for acts done before dissolution.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Strike off is the simpler route for a company that is inactive and has no assets or liabilities: it files Form
        STK-2 under Section 248 of the Companies Act, 2013, and the Registrar removes its name. Winding up is a formal
        process run by a liquidator, used when assets must be sold, creditors paid or disputes settled.
      </p>

      <p>
        When a Chennai business owner decides to shut down a company that never took off or has stopped operating, one
        of the first questions is which of these two routes applies. They differ in eligibility, cost, time and the
        level of scrutiny, and choosing the wrong one can create problems later.
      </p>

      <h2>What does strike off actually mean?</h2>

      <p>
        Section 248 allows a company&apos;s name to be removed from the register of companies in two ways. The
        Registrar can act on its own where a company has not started business within one year of incorporation, or has
        carried on no business for two immediately preceding financial years and has not applied for dormant status.
        The company itself can also apply voluntarily under Section 248(2) in Form STK-2 (see the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/compliance-filing.html" target="_blank" rel="noopener noreferrer">MCA FAQs on compliance filings, including strike-off forms</a>).
        Once the name is struck off and the notice is published in the Official Gazette, the company is dissolved.
      </p>

      <h2>Who is eligible for voluntary strike off?</h2>

      <ul>
        <li>The company has not started business within a year of incorporation, or has carried on no business for the two preceding financial years.</li>
        <li>It has no assets and no liabilities, shown in a statement of accounts certified by a chartered accountant.</li>
        <li>Shareholders have passed a special resolution, or members holding 75 percent of the paid-up capital consent.</li>
        <li>It is not barred by Section 249, which blocks an application if, in the previous three months, the company changed its name or registered office, disposed of property or rights, or carried on any business other than closing its affairs.</li>
        <li>It is not the subject of a pending prosecution, a scheme of arrangement or winding up proceedings.</li>
      </ul>

      <h2>What are the steps to strike off a company?</h2>

      <ol>
        <li>File all overdue financial statements (AOC-4) and annual returns (MGT-7 or MGT-7A) up to the end of the year in which business stopped.</li>
        <li>Pay statutory dues, file pending tax and GST returns, cancel GST registration and close bank accounts.</li>
        <li>Pass the special resolution or obtain the members&apos; consent.</li>
        <li>Prepare the statement of accounts, certified by a chartered accountant, made up to a date within 30 days of filing.</li>
        <li>Collect an indemnity bond (STK-3) and an affidavit (STK-4) from every director.</li>
        <li>File Form STK-2 with the prescribed government fee. Since 2023, these applications are processed centrally by the MCA&apos;s Centre for Processing Accelerated Corporate Exit (C-PACE).</li>
        <li>The Registrar publishes a public notice inviting objections, and if none are sustained, strikes off the name and publishes the final notice in the Official Gazette.</li>
      </ol>

      <h2>What does winding up involve?</h2>

      <p>
        Winding up is used when a company has assets and liabilities that need to be settled, creditors to be paid, or
        disputes to be resolved before it can close. A liquidator takes control, realises the assets, pays creditors in
        the order the law sets and distributes any surplus to shareholders, after which the company is dissolved. There
        are two main paths:
      </p>

      <ul>
        <li>
          <strong>Voluntary liquidation under Section 59 of the Insolvency and Bankruptcy Code, 2016.</strong> For a
          solvent company with assets. Directors make a declaration of solvency, shareholders pass a special
          resolution and an insolvency professional is appointed as liquidator.
        </li>
        <li>
          <strong>Winding up by the tribunal under Section 271 of the Companies Act.</strong> On grounds such as a
          special resolution, fraud, failure to file financial statements for five consecutive years or where the
          tribunal considers it just and equitable. Where the company cannot pay its debts, the matter usually goes to
          insolvency proceedings under the Code instead.
        </li>
      </ul>

      <h2>How do the two routes compare?</h2>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Strike off</th>
            <th>Winding up</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Suits</td>
            <td>Inactive company with no assets or liabilities</td>
            <td>Company with assets, creditors or disputes</td>
          </tr>
          <tr>
            <td>Law</td>
            <td>Sections 248 to 252, Companies Act, 2013</td>
            <td>IBC Section 59, or Companies Act Section 271</td>
          </tr>
          <tr>
            <td>Who runs it</td>
            <td>Company applies; Registrar decides</td>
            <td>Liquidator, under the tribunal&apos;s oversight</td>
          </tr>
          <tr>
            <td>Main forms</td>
            <td>STK-2 with STK-3, STK-4 and certified accounts</td>
            <td>Declaration of solvency, resolutions, liquidator&apos;s reports</td>
          </tr>
          <tr>
            <td>Effort and time</td>
            <td>Lower; mostly documentation</td>
            <td>Higher; asset sale, creditor claims, final reports</td>
          </tr>
        </tbody>
      </table>

      <h2>Why can you not always choose strike off?</h2>

      <p>
        Many founders want strike off for convenience, but it is available only if the company genuinely meets the
        conditions. If the company has pending loans, unpaid vendors, a director&apos;s loan still in the books or
        ongoing contracts, strike off is not the correct route. The directors give an indemnity and an affidavit with
        the application, and Section 248(7) keeps the liability of directors, officers and members alive even after
        dissolution, so an incorrect application can come back to them personally.
      </p>

      <h2>What needs to be cleared before either process?</h2>

      <p>
        Outstanding statutory filings (see our <Link href="/roc-compliances">ROC compliance services</Link>), pending tax
        returns and unpaid dues generally need to be regularised before the Registrar or tribunal will process the
        closure. A company with years of pending{" "}
        <Link href="/annual-compliance-package">annual compliance filings</Link> cannot skip straight to strike off; the
        overdue forms, with their additional fees, come first. Our note on{" "}
        <Link href="/blog/private-limited-company-penalties-non-compliance">penalties for private limited company non-compliance</Link>{" "}
        explains what that backlog can cost.
      </p>

      <h2>What is a short decision checklist?</h2>

      <ul>
        <li>Does the company have any assets, liabilities or money in the bank?</li>
        <li>Are all annual filings and tax returns up to date, or is there a backlog to clear first?</li>
        <li>Has the company been inactive for the period strike off requires?</li>
        <li>Are there any pending disputes, contracts, prosecutions or creditor claims?</li>
        <li>Has the company changed its name or registered office, or sold property, in the last three months?</li>
      </ul>

      <p>
        If you are considering closing a company in Chennai and are unsure whether strike off or winding up is the right
        route, C S Rushil &amp; Co. in Anna Nagar can assess your company&apos;s situation and guide you through the
        correct process. Book a free 15-minute consultation.
      </p>
    </>
  );
}
