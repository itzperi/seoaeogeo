import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "shareholders-agreement-founders",
  title: "Shareholders' Agreement for Founders: What to Cover",
  description:
    "Why co-founders need a shareholders' or founders' agreement: vesting, transfer restrictions, deadlock, exits, and how it must align with the articles.",
  date: "2027-01-01",
  excerpt:
    "Co-founders agree on everything at the start. A founders' agreement records what happens when they don't: vesting, exits, transfers and deadlock.",
  faqs: [
    {
      question: "Is a shareholders' agreement mandatory for a private limited company?",
      answer:
        "No. The Companies Act, 2013 requires a Memorandum and Articles of Association, not a shareholders' agreement. But the standard articles say little about founder vesting, exits, deadlock or what happens if a co-founder leaves early. A shareholders' or founders' agreement fills those gaps, and investors almost always require one when they come in.",
    },
    {
      question: "What is founder vesting and how does it work in India?",
      answer:
        "Founder vesting means a co-founder earns full ownership of their shares over time, often four years with a one-year cliff. In Indian companies, shares are usually issued upfront, so vesting is implemented in reverse: if a founder leaves early, the unvested portion can be bought back or transferred at a nominal or agreed price, as set out in the agreement and articles.",
    },
    {
      question: "Do terms in a shareholders' agreement bind the company?",
      answer:
        "Not automatically. Indian courts have held that restrictions on share transfers that are not contained in the articles may not bind the company. That is why key terms such as transfer restrictions, rights of first refusal, board nomination rights and reserved matters are usually mirrored in the articles of association, which are filed with the Registrar.",
    },
    {
      question: "Should a chartered accountant or an advocate draft the shareholders' agreement?",
      answer:
        "A shareholders' agreement is a legal contract, so it should be drafted or vetted by an advocate. A chartered accountant contributes on the commercial and financial side: capital structure, valuation and pricing formulas, tax on transfers and buy-backs, FEMA pricing for foreign shareholders, and the ROC filings that follow. The two should review the same draft.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        At incorporation, co-founders usually agree on the vision, divide the
        shares and get on with building. The hard conversations are postponed:
        what if one founder leaves after six months, wants to sell to an
        outsider, or disagrees on a major decision with no tie-breaker? A
        shareholders&apos; agreement, often called a founders&apos; agreement
        at this stage, records the answers while everyone is still aligned.
      </p>

      <h2>Why do founders need one if the company already has articles?</h2>
      <p>
        Every company has articles of association, and most startups adopt
        articles based on the model Table F. Those articles deal with share
        transfers, meetings and directors in general terms. They are not built
        for the situations that typically cause founder disputes:
      </p>
      <ul>
        <li>A co-founder leaving early but keeping a large shareholding.</li>
        <li>Founders disagreeing on fundraising, hiring or spending, with equal votes.</li>
        <li>A founder wanting to sell shares to a competitor or an outsider.</li>
        <li>Unclear ownership of code, designs or brand created before incorporation.</li>
        <li>A founder taking up a competing venture.</li>
      </ul>
      <p>
        The agreement handles these situations by contract between the
        shareholders and, usually, the company itself.
      </p>

      <h2>What should a founders&apos; agreement cover?</h2>
      <table>
        <thead>
          <tr>
            <th>Clause</th>
            <th>What it addresses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roles and time commitment</td>
            <td>Who does what, full-time obligations, and what counts as leaving</td>
          </tr>
          <tr>
            <td>Founder vesting</td>
            <td>How shares are earned over time and what happens to unvested shares on exit</td>
          </tr>
          <tr>
            <td>Transfer restrictions</td>
            <td>Lock-in periods, right of first refusal, permitted transfers to family trusts</td>
          </tr>
          <tr>
            <td>Tag-along and drag-along</td>
            <td>Minority founders selling alongside a majority sale, and majority forcing a full sale</td>
          </tr>
          <tr>
            <td>Board composition and reserved matters</td>
            <td>Who nominates directors, and which decisions need unanimous or special approval</td>
          </tr>
          <tr>
            <td>Deadlock resolution</td>
            <td>Escalation, mediation, and buy-sell mechanisms when founders cannot agree</td>
          </tr>
          <tr>
            <td>IP assignment</td>
            <td>Transfer to the company of everything founders created for the business</td>
          </tr>
          <tr>
            <td>Non-compete and non-solicit</td>
            <td>Restrictions while a founder is involved, subject to enforceability under Indian contract law</td>
          </tr>
          <tr>
            <td>Dispute resolution</td>
            <td>Governing law, arbitration seat and procedure</td>
          </tr>
        </tbody>
      </table>

      <h2>How does founder vesting work in an Indian company?</h2>
      <p>
        In many markets, founder shares are issued subject to a repurchase
        right that lapses over time. Indian companies usually issue the full
        shareholding at incorporation, so vesting is applied in reverse. The
        agreement says that if a founder leaves within the vesting period, the
        unvested portion must be transferred to the other founders or a
        nominee at a nominal or formula price, or bought back by the company
        where the law permits.
      </p>
      <p>
        A common commercial pattern is vesting over four years with a one-year
        cliff, with different outcomes for a good leaver, for example due to
        ill health, and a bad leaver, for example due to fraud or breach. These
        mechanics have tax consequences. A transfer of shares below fair market
        value can trigger tax for the recipient, and a buy-back by the company
        has its own Companies Act limits and tax treatment, so the pricing
        formula should be reviewed before signing.
      </p>

      <h2>Why must the agreement match the articles?</h2>
      <p>
        Courts in India have held that restrictions on transfer of shares not
        found in the articles may not be enforceable against the company. The
        practical lesson is to mirror key protective terms in the articles of
        association: transfer restrictions, rights of first refusal, tag and
        drag, board nomination rights and reserved matters. Where the agreement
        and articles conflict, the agreement typically requires shareholders to
        vote to amend the articles. Altering the articles needs a special
        resolution under section 14 of the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html" target="_blank" rel="noopener noreferrer">
          Companies Act, 2013
        </a>{" "}
        and an MGT-14 filing with the Registrar.
      </p>
      <p>
        When the company is being set up, it is efficient to finalise the
        founders&apos; agreement first and draft the e-AoA to match, rather
        than incorporating with standard articles and amending later. Our page
        on{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>{" "}
        explains how the articles are filed in SPICe+.
      </p>

      <h2>CA and advocate: who does what?</h2>
      <p>
        A shareholders&apos; agreement is a legal contract and should be drafted
        or vetted by an advocate, who will also advise on enforceability,
        stamp duty on the agreement under the applicable state law, and dispute
        resolution. A chartered accountant&apos;s role sits alongside:
      </p>
      <ul>
        <li>Designing the share capital and the founder split, including any ESOP pool.</li>
        <li>Valuation and pricing formulas for transfers, buy-backs and leaver provisions.</li>
        <li>Tax implications of share transfers below or above fair value.</li>
        <li>FEMA pricing and reporting where a founder or investor is non-resident.</li>
        <li>The ROC filings that implement the agreement, such as altering the articles, allotments and changes in directors.</li>
      </ul>

      <h2>Questions to answer before anyone drafts</h2>
      <p>
        Lawyers draft faster and better when the founders have already agreed
        the substance. A short working session between co-founders should
        settle:
      </p>
      <ul>
        <li>Who is full-time from day one, and what happens if someone cannot commit full-time later?</li>
        <li>Over what period do founder shares vest, and is there a cliff?</li>
        <li>What does each founder contribute: cash, code, a customer base, a brand?</li>
        <li>Who has the final say on product, hiring and spending, and what needs everyone&apos;s agreement?</li>
        <li>Can a founder sell shares to an outsider, and on what terms must they offer them to the others first?</li>
        <li>What happens to a founder&apos;s shares on death or long-term incapacity?</li>
        <li>How will a deadlock be broken if founders hold equal shares?</li>
      </ul>

      <h2>Common gaps in founders&apos; agreements</h2>
      <ul>
        <li>
          <strong>No leaver definitions.</strong> Without clear good-leaver and
          bad-leaver definitions, every exit becomes a negotiation.
        </li>
        <li>
          <strong>Pricing that ignores tax.</strong> A buy-back at a nominal
          price may be commercially fair but can create tax exposure for the
          buyer or the company if it is below fair market value.
        </li>
        <li>
          <strong>Articles never amended.</strong> The agreement is signed but
          the articles still follow the standard model, leaving key
          protections unenforceable against the company.
        </li>
        <li>
          <strong>IP left with founders.</strong> Code and designs created
          before incorporation remain the founders&apos; property unless
          assigned in writing.
        </li>
        <li>
          <strong>No update on new shareholders.</strong> When a new co-founder
          or angel joins, they must sign a deed of adherence, or the agreement
          does not bind them.
        </li>
      </ul>

      <h2>When investors arrive</h2>
      <p>
        An angel or venture investment usually brings a new shareholders&apos;
        agreement that replaces or absorbs the founders&apos; agreement. It
        will include investor rights such as anti-dilution protection,
        liquidation preference, information rights and consent rights over key
        decisions. Founders who already have a clear agreement among themselves
        negotiate from a stronger position, because their own vesting,
        roles and transfer terms are settled.
      </p>

      <h2>A simple sequence for co-founders</h2>
      <ol>
        <li>Agree the shareholding, roles and vesting in principle.</li>
        <li>Have an advocate draft the founders&apos; agreement, with a CA reviewing pricing, tax and capital terms.</li>
        <li>Draft the articles of association to reflect the key protective clauses.</li>
        <li>Incorporate, or alter existing articles by special resolution.</li>
        <li>Sign IP assignment agreements so the company owns what it builds.</li>
      </ol>
      <p>
        For the wider set-up, our{" "}
        <Link href="/company-registration-chennai">
          company registration in Chennai
        </Link>{" "}
        guide covers structure choices. If you would like the capital
        structure, valuation and filings behind your agreement reviewed, you can{" "}
        <Link href="/contact">book a consultation</Link>.
      </p>
    </>
  );
}
