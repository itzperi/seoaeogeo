import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources (checked 14 Nov 2026):
// - Companies Act, 2013 as on MCA (content/dam/mca/pdf/CompaniesAct2013.pdf,
//   updated to 29-7-2022): s.13(1) "Save as provided in section 61"; s.61(1)(a);
//   s.64(1) 30 days + altered memorandum; s.64(2) Rs 500/day, max Rs 5 lakh
//   company / Rs 1 lakh officer; s.114; s.117(1) and (3)(a)-(b).
// - MCA Instruction Kit for SH-7 (content/dam/mca-aem-forms/instructionkits/):
//   s.64(1) r/w rule 15 SCD Rules; fee rules s.4.1 (Table 1 difference rule,
//   Rs 2.5 crore cap, Table 2 Rs 200-600 when difference is zero, Table 3 delay
//   2.5%/3% per month); MGT-14 SRN check; Annexure A Tamil Nadu SH-7 cell shows
//   "NIL" and "Rs. 500/- for every Rs. 10,00,000 of increase ... maximum of Rs. 5 lakh".
// - MCA e-stamp FAQs: SH-7 stamp duty paid electronically through MCA21.
// Keep consistent with /blog/tamil-nadu-stamp-duty-company-incorporation
// (Article 10 TN wording has no separate entry for increases).
export const meta: BlogPostMeta = {
  slug: "increase-authorised-capital-sh-7",
  title: "Increase in Authorised Capital: SH-7, MCA Fee and Stamp Duty",
  description:
    "Increasing authorised capital: Section 61, the resolution and MGT-14, SH-7 within 30 days, the MCA fee on the increase and Tamil Nadu stamp duty.",
  date: "2026-11-14",
  excerpt:
    "Raising authorised capital takes a members' resolution, an SH-7 filing within 30 days, an MCA fee worked out on the difference in capital and, in Tamil Nadu, stamp duty on the increase.",
  summary:
    "A company increases authorised capital under Section 61 of the Companies Act, 2013, if its articles allow, by a resolution in general meeting, usually ordinary. It files SH-7 with the altered memorandum within 30 days. The MCA fee is the difference between the fees on the new and old capital, and stamp duty is paid through MCA21.",
  faqs: [
    {
      question: "Is an ordinary or special resolution needed to increase authorised capital?",
      answer:
        "Section 61(1) lets a limited company with share capital, if its articles authorise it, alter its memorandum in general meeting to increase authorised capital. Section 13(1) requires a special resolution for other changes to the memorandum, but starts with save as provided in section 61, so an ordinary resolution is enough unless the articles demand more.",
    },
    {
      question: "Is MGT-14 required for an increase in authorised capital?",
      answer:
        "Only in some cases. Section 117(3) requires filing of special resolutions and of resolutions that would need a special resolution if not agreed by all members. An ordinary resolution under Section 61 is not on that list. If the articles require a special resolution, file it in MGT-14 within 30 days before or alongside SH-7.",
    },
    {
      question: "What is the due date for filing SH-7?",
      answer:
        "Section 64(1) requires the notice to be filed within thirty days of the alteration, along with the altered memorandum. MCA's SH-7 instruction kit takes the date of the members' meeting entered in the form as the event date, so count the 30 days from the general meeting at which the increase was approved.",
    },
    {
      question: "How is the MCA fee on SH-7 calculated?",
      answer:
        "The fee is the difference between the registration fee on the increased authorised capital and the fee on the existing capital, both at the rates on the date of filing. OPCs and small companies use a lower scale up to Rs 50 lakh. If the difference is zero, a normal filing fee of Rs 200 to Rs 600 applies instead.",
    },
    {
      question: "What stamp duty applies on increasing authorised capital in Tamil Nadu?",
      answer:
        "Stamp duty on SH-7 is paid electronically through MCA21, which prefills the amount. MCA's SH-7 instruction kit lists Rs 500 for every Rs 10 lakh of increase or part, up to Rs 5 lakh, for a Tamil Nadu company with share capital, although that table cell also still shows NIL. Pay the amount the form computes.",
    },
    {
      question: "What happens if SH-7 is filed late?",
      answer:
        "An additional fee applies, which MCA's instruction kit sets at 2.5% per month for a delay of up to six months and 3% per month for the delay beyond six months. Section 64(2) also provides a penalty of Rs 500 a day, up to Rs 5 lakh for the company and Rs 1 lakh for each officer in default.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Authorised capital is the ceiling on the shares a company can issue. A
        startup that set Rs 10 lakh at incorporation often needs more room
        before a funding round, an ESOP pool or a conversion of founder loans
        into shares. Increasing the ceiling is a short process, but it has a
        statutory deadline, a fee that is easy to underestimate and a state
        stamp duty. This post walks through each step for a company registered
        in Tamil Nadu.
      </p>

      <h2>What does Section 61 allow, and what role do the articles play?</h2>
      <p>
        Section 61(1)(a) of the Companies Act, 2013 provides that a limited
        company having a share capital may, if so authorised by its articles,
        alter its memorandum in its general meeting to increase its authorised
        share capital by such amount as it thinks expedient. Two conditions
        follow from that wording: the articles must contain the power, and the
        decision belongs to the members, not the board.
      </p>
      <p>
        Check the capital clause of the articles before anything else. If they
        do not contain the power, they must first be altered by special resolution under
        Section 14, and that special resolution is itself filed in MGT-14. The
        board&apos;s role is to approve the proposal and call the general
        meeting. The text of the Act, as updated by MCA, is in the{" "}
        <a href="https://www.mca.gov.in/content/dam/mca/pdf/CompaniesAct2013.pdf" target="_blank" rel="noopener noreferrer">
          Companies Act, 2013 on mca.gov.in
        </a>
        .
      </p>

      <h2>Is an ordinary resolution enough, and when is MGT-14 needed?</h2>
      <p>
        An ordinary resolution is enough unless the articles ask for a special
        one. Section 13(1) requires a special resolution to alter the
        memorandum, but it opens with &quot;Save as provided in section
        61&quot;, which carves out capital changes. Section 61 itself only says
        &quot;in its general meeting&quot;, and Section 114 defines an ordinary
        resolution as one where the votes in favour exceed the votes against.
      </p>
      <p>
        MGT-14 follows the type of resolution. Section 117(1) requires filing
        within thirty days for the matters listed in Section 117(3), which
        include special resolutions and resolutions agreed by all members that
        would otherwise have needed a special resolution. An ordinary resolution
        increasing capital is not on that list. So:
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Resolution</th>
            <th>MGT-14?</th>
            <th>SH-7?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Articles authorise the increase and need no special majority</td>
            <td>Ordinary resolution in general meeting</td>
            <td>No, under Section 117(3)</td>
            <td>Yes, within 30 days</td>
          </tr>
          <tr>
            <td>Articles require a special resolution for the increase</td>
            <td>Special resolution</td>
            <td>Yes, within 30 days</td>
            <td>Yes, within 30 days</td>
          </tr>
          <tr>
            <td>Articles do not contain the power</td>
            <td>Special resolution to alter the articles first, then the capital resolution</td>
            <td>Yes, for the alteration of articles</td>
            <td>Yes, within 30 days of the increase</td>
          </tr>
        </tbody>
      </table>
      <p>
        Where an MGT-14 has been filed, it ties into SH-7. MCA&apos;s instruction
        kit for SH-7 asks filers to check that the MGT-14 SRN is valid and
        approved, and that the purpose chosen in that MGT-14 is
        &quot;Alteration in authorized share capital&quot;. File the MGT-14
        first so its SRN is ready.
      </p>

      <h2>When must SH-7 be filed, and what goes with it?</h2>
      <p>
        Section 64(1) requires a company that alters its share capital under
        Section 61(1) to file a notice in the prescribed form with the Registrar
        within thirty days, along with an altered memorandum. The prescribed
        form is SH-7, under rule 15 of the Companies (Share Capital and
        Debentures) Rules, 2014. MCA&apos;s instruction kit treats the date of the
        members&apos; meeting entered in the form as the event date, so the 30
        days run from the general meeting.
      </p>
      <p>
        The altered memorandum is filed as an e-MoA within the SH-7 filing. The SH-7
        form also covers consolidation, sub-division, redemption of redeemable
        preference shares and an increase in members for a company without
        share capital, so choose the purpose carefully. Under Section 64(2), a
        default attracts a penalty of five hundred rupees for each day it
        continues, up to five lakh rupees for the company and one lakh rupees
        for each officer in default.
      </p>

      <h2>How do you increase authorised capital, step by step?</h2>
      <ol>
        <li>
          <strong>Check the articles.</strong> Confirm they authorise an
          increase and note whether they require a special resolution.
        </li>
        <li>
          <strong>Hold a board meeting.</strong> Approve the proposed new
          capital and the altered capital clause, and approve the notice of
          the general meeting.
        </li>
        <li>
          <strong>Pass the members&apos; resolution.</strong> Ordinary, unless
          the articles say otherwise. Record the votes, since SH-7 asks for the
          members voting for and against.
        </li>
        <li>
          <strong>File MGT-14 if a special resolution was passed.</strong>{" "}
          Within 30 days, with &quot;Alteration in authorized share
          capital&quot; as the purpose.
        </li>
        <li>
          <strong>File SH-7 with the altered memorandum.</strong> Within 30
          days of the meeting, signed with the DSC of a director or other
          authorised officer.
        </li>
        <li>
          <strong>Pay the MCA fee and the stamp duty.</strong> MCA21 generates
          separate challans, and the form is processed only when both are
          paid.
        </li>
        <li>
          <strong>Issue shares only after the increase is in place.</strong>{" "}
          Our guide to{" "}
          <Link href="/blog/share-allotment-after-incorporation">share allotment</Link>{" "}
          covers the allotment that usually follows.
        </li>
      </ol>

      <h2>How is the MCA fee on the increase worked out?</h2>
      <p>
        The fee is not a flat form fee. Under the Companies (Registration
        Offices and Fees) Rules, 2014, as set out in MCA&apos;s SH-7
        instruction kit, the company pays the difference between the
        registration fee on the increased authorised capital and the fee on the
        existing capital, both at the rates on the date of filing. The rates
        are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Nominal share capital</th>
            <th>Companies generally</th>
            <th>OPCs and small companies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to Rs 1 lakh</td>
            <td>Rs 5,000</td>
            <td>Rs 2,000</td>
          </tr>
          <tr>
            <td>Over Rs 1 lakh up to Rs 5 lakh</td>
            <td>Rs 5,000 + Rs 400 per Rs 10,000 or part</td>
            <td>Rs 2,000</td>
          </tr>
          <tr>
            <td>Over Rs 5 lakh up to Rs 10 lakh</td>
            <td>Rs 21,000 + Rs 300 per Rs 10,000 or part</td>
            <td>Rs 2,000</td>
          </tr>
          <tr>
            <td>Over Rs 10 lakh up to Rs 50 lakh</td>
            <td>Rs 36,000 + Rs 300 per Rs 10,000 or part</td>
            <td>Rs 2,000 + Rs 200 per Rs 10,000 or part</td>
          </tr>
          <tr>
            <td>Over Rs 50 lakh up to Rs 1 crore</td>
            <td>Rs 1,56,000 + Rs 100 per Rs 10,000 or part</td>
            <td>Same as companies generally</td>
          </tr>
          <tr>
            <td>Over Rs 1 crore</td>
            <td>Rs 2,06,000 + Rs 75 per Rs 10,000 or part</td>
            <td>Same as companies generally</td>
          </tr>
        </tbody>
      </table>
      <p>
        Source: section 4.1 of the{" "}
        <a href="https://www.mca.gov.in/content/dam/mca-aem-forms/instructionkits/Instruction%20Kit_SH-7.pdf" target="_blank" rel="noopener noreferrer">
          MCA instruction kit for SH-7
        </a>
        . The kit adds three rules. Fees on either capital figure are capped at
        Rs 2.5 crore. Where an OPC or small company goes beyond Rs 50 lakh, the
        new capital is priced at the general rates and the existing capital at
        the OPC and small company rates. Where the difference works out to zero,
        a normal filing fee of Rs 200 to Rs 600 applies, by capital band.
      </p>
      <p>
        Applying the table: a small company moving from Rs 10 lakh to Rs 25
        lakh pays Rs 32,000 less Rs 2,000, or Rs 30,000. A company outside the
        small company scale making the same move pays Rs 81,000 less Rs 36,000,
        or Rs 45,000. The kit&apos;s own example, an OPC moving from Rs 10 lakh
        to Rs 60 lakh, pays Rs 1,66,000 less Rs 2,000, or Rs 1,64,000.
      </p>
      <p>
        One trap: the nil SPICe+ fee for authorised capital up to Rs 15 lakh at
        incorporation does not carry over. The SH-7 fee is worked out on the
        table above, so a company that paid nothing at incorporation still pays
        the difference when it raises capital. Our post on{" "}
        <Link href="/blog/government-fees-company-registration">government fees for company registration</Link>{" "}
        covers the incorporation side.
      </p>

      <h2>What stamp duty applies on the increase in Tamil Nadu?</h2>
      <p>
        Stamp duty on SH-7 is a state levy collected by MCA21. The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/payment2/estamp.html" target="_blank" rel="noopener noreferrer">
          e-stamp FAQs
        </a>{" "}
        list SH-7, with SPICe+ Part B and FC-1, as a filing on which stamp duty
        is paid electronically through MCA21 for every state except Sikkim. The
        form prefills the amount from the registered office state, and a
        separate challan is generated.
      </p>
      <p>
        The rate is less settled on paper. As our post on{" "}
        <Link href="/blog/tamil-nadu-stamp-duty-company-incorporation">Tamil Nadu stamp duty on incorporation</Link>{" "}
        explains, the Tamil Nadu Article 10 entry published in 2023 charges Rs
        500 on every Rs 10 lakh of authorised capital or part, up to Rs 5 lakh,
        but has no separate wording for an increase. MCA&apos;s SH-7 instruction
        kit does set out how its system treats Tamil Nadu: for a company with
        share capital, &quot;Rs. 500/- for every Rs. 10,00,000 of increase in
        authorized capital or part thereof subject to a maximum of Rs. 5
        lakh&quot;, with NIL for companies without share capital and Section 8
        companies. The same cell still shows an older NIL, so treat the amount
        SH-7 prefills as final.
      </p>
      <table>
        <thead>
          <tr>
            <th>Increase</th>
            <th>Rs 10 lakh slabs (or part)</th>
            <th>Stamp duty on MCA&apos;s stated basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rs 10 lakh to Rs 25 lakh (increase of Rs 15 lakh)</td>
            <td>2</td>
            <td>Rs 1,000</td>
          </tr>
          <tr>
            <td>Rs 10 lakh to Rs 1 crore (increase of Rs 90 lakh)</td>
            <td>9</td>
            <td>Rs 4,500</td>
          </tr>
          <tr>
            <td>Rs 1 crore to Rs 2.05 crore (increase of Rs 1.05 crore)</td>
            <td>11</td>
            <td>Rs 5,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are illustrations of the stated basis only. If a shortfall is
        found after filing, the balance can be paid through MCA&apos;s Pay Stamp
        Duty facility. The state&apos;s own stamp and registration portal is{" "}
        <a href="https://tnreginet.gov.in/portal/" target="_blank" rel="noopener noreferrer">TNREGINET</a>
        .
      </p>

      <h2>What does a typical increase cost in government charges?</h2>
      <p>
        For a small private company in Chennai moving from Rs 10 lakh to Rs 25
        lakh, the government charges on the figures above are an MCA fee of Rs
        30,000 and stamp duty of Rs 1,000 on MCA&apos;s stated Tamil Nadu basis,
        plus an MGT-14 filing fee if a special resolution was needed. The
        filing fee for MGT-14 runs from Rs 200 to Rs 600 by capital band, per
        MCA&apos;s MGT-14 instruction kit. These figures show the mechanism; the
        challans MCA21 generates are what you pay.
      </p>
      <p>
        Because the fee grows with each Rs 10,000 of new capital, it pays to
        size the increase to the next eighteen months of plans rather than to a
        round number. Our post on{" "}
        <Link href="/blog/authorised-vs-paid-up-capital">authorised vs paid-up capital</Link>{" "}
        explains why the ceiling need not match what you issue, and the{" "}
        <Link href="/tools/company-registration-government-fee-calculator">government fee calculator</Link>{" "}
        shows the incorporation charges for comparison.
      </p>

      <h2>What happens if SH-7 is late or wrong?</h2>
      <p>
        A late SH-7 attracts an additional fee, which MCA&apos;s kit sets at 2.5%
        per month for a delay of up to six months and 3% per month for the delay
        beyond six months, in addition to the Section 64(2) penalty. Shares allotted
        beyond the old ceiling before the increase is effective are a separate
        problem, so sequence the allotment after the resolution and the filing.
        Mistakes in the resolution type, the MGT-14 purpose or the e-MoA are the
        usual reasons for a resubmission.
      </p>
      <p>
        Event-based filings like this sit alongside annual returns in routine{" "}
        <Link href="/roc-compliances">ROC compliances</Link>, and are covered in
        our{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>
        . For companies still being set up, our page on{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation in Chennai</Link>{" "}
        explains how to choose the starting capital. C S Rushil &amp; Co.
        handles increases in authorised capital, from the resolution to SH-7,
        from Anna Nagar, Chennai, and online, as part of its{" "}
        <Link href="/roc-compliances">ROC compliance service</Link>.
      </p>
    </>
  );
}
