import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import PostLink from "@/components/PostLink";

// Sources (checked 19 November 2026):
// India-Singapore DTAA as notified in India, with the 2005, 2011 and 2016 protocols (incometaxindia.gov.in/w/singapore-comprehensive-agreements-1): Articles 2, 3, 5, 7, 9, 10, 11, 12, 13, 24, 24A, 25 and 28A; Third Protocol signed 30 December 2016, in force 27 February 2017, Notification No. 18/2017 [S.O. 935(E)] dated 23 March 2017; 2005 Protocol Article 4 (10% on royalties and technical fees, in force 1 August 2005).
// Synthesised text of the DTAA and the MLI (incometaxindia.gov.in/w/singapore-synthesised-text-1): MLI signed 7 June 2017; only MLI Article 6 (preamble) and Article 7(1) (principal purpose test) apply; effect in India for tax withheld at source on or after 1 April 2020.
// Income-tax Act, 2025, section 159 (incometaxindia.gov.in/w/section-159-89): sub-sections (4), (6) and (8).
// Income-tax Act, 2025, section 178 (incometaxindia.gov.in/w/section-178-77): Chapter XI is the general anti-avoidance rule.
// Income-tax Act, 1961, section 90 (incometaxindia.gov.in/w/section-90-64): sub-sections (2), (2A), (4) and (5), the 1961 counterparts of section 159(4), (6) and (8).
// FAQs and Guidance Notes on Forms as per Income-tax Rules, 2026 (incometaxindia.gov.in): Form 41 replaces Form 10F (section 159(8)); Form 145 replaces 15CA; Form 146 replaces 15CB.
// Form 41 and Form 146 user manuals (incometax.gov.in): online filing, TIN and section 159(8) certificate; the DTAA panel in Form 146.
// IRAS, Applying for a Certificate of Residence / Tax Reclaim Form (iras.gov.sg): name of the COR, mytax.iras.gov.sg, calendar-year basis, control and management, processing time, holding and nominee companies.
// ITAT Delhi, Hareon Solar Singapore Pvt. Ltd. v. DCIT, ITA No. 2226/Del/2024, AY 2020-21, pronounced 30 January 2026 (itat.gov.in): Article 24A applied, appeal dismissed.
// Supreme Court, AAR (Income Tax) v. Tiger Global International II Holdings, Civil Appeal No. 262 of 2026, 2026 INSC 60, 15 January 2026 (api.sci.gov.in): paras 27, 37, 43, 46, 50 and 51.
// Section mappings 195 to 393(2), 195(6) to 397(3)(d), Form 3CEB to Form 48 (section 172): src/content/blog/income-tax-act-2025-section-mapping.tsx.
export const meta: BlogPostMeta = {
  slug: "india-singapore-dtaa-for-businesses",
  title: "India-Singapore DTAA for Businesses: Withholding Tax and LOB",
  description:
    "Treaty rates on dividends, interest, royalties and fees paid from India to Singapore, Form 41 and the IRAS COR, the LOB test, and the 2026 Tiger Global ruling.",
  date: "2026-12-01",
  excerpt:
    "What India withholds on payments to a Singapore company, the documents behind the treaty rate, how share gains are taxed after the 2016 protocol, and what two January 2026 rulings decided on the LOB clause and residence certificates.",
  faqs: [
    {
      question: "Is the treaty rate on royalties paid to Singapore 10% or 15%?",
      answer:
        "10%. The 2005 protocol, in force from 1 August 2005, replaced Article 12(2) with a single 10% limit covering both royalties and fees for technical services, where the Singapore recipient is the beneficial owner. The limit applies only to the arm's length amount; any excess paid to a related party is taxed under Indian law.",
    },
    {
      question: "Does the limitation of benefits clause apply to dividends paid to a Singapore parent?",
      answer:
        "No. Article 24A covers only the capital gains benefits in Article 13(4A) and 13(4C). Dividends, interest, royalties and service fees are tested instead under the MLI principal purpose test, which applies in India to tax withheld at source on or after 1 April 2020, and under India's general anti-avoidance rule.",
    },
    {
      question: "Can an Indian company apply the treaty rate if the Singapore company has not filed Form 41?",
      answer:
        "Section 159(8) of the Income-tax Act, 2025 allows treaty relief to a non-resident only when it holds a certificate of residence from its own government and provides the prescribed information, which from tax year 2026-27 is given in Form 41 on the e-filing portal. Without both, a claim to the lower rate is not supported.",
    },
    {
      question: "Does a fee paid to a corporate service provider count towards the S$200,000 figure?",
      answer:
        "The treaty does not define expenditure on operations. In Hareon Solar Singapore, the company's operating expenses were legal and professional fees paid to a service provider and a foreign exchange loss, and the Tribunal still held the shell and expenditure paragraphs of Article 24A applied. What the money paid for was part of its reasoning.",
    },
    {
      question: "How many days can Singapore staff work in India before a permanent establishment arises?",
      answer:
        "Under Article 5(6), services furnished in India through employees or other personnel create a permanent establishment above 90 days in a fiscal year, or above 30 days where the services are for a related enterprise. Days are counted in aggregate over India's April to March year. The fixed place and agent tests have no day count.",
    },
    {
      question: "Is the treaty rate applied to the gross payment, and does it cover surcharge?",
      answer:
        "Articles 10 and 11 cap Indian tax at a percentage of the gross dividend or interest, and Article 12 caps tax on royalties and technical fees at 10%. Article 2 defines Indian tax as income-tax including any surcharge on it, and the caps apply to that tax. Where the Income-tax Act gives a lower rate, the Act applies.",
    },
    {
      question: "Our Singapore holding company bought its Indian shares in 2016. Is a sale in 2027 taxable in India?",
      answer:
        "Article 13(4A) makes gains on shares acquired before 1 April 2017 taxable only in Singapore, but only if the company passes Article 24A, including the expenditure test for each 12-month period in the 24 months before the gain arises. The MLI principal purpose test and India's general anti-avoidance rule also apply to the claim.",
    },
    {
      question: "Does C S Rushil & Co. apply for the IRAS Certificate of Residence?",
      answer:
        "No. The COR is a Singapore application made through myTax Portal, and Singapore tax, IRAS and ACRA matters stay with the client's Singapore adviser. We advise on Indian law, guide the company on the Form 41 information, help prepare Forms 145 and 146 and the Form 48 report, and work online from our Chennai office.",
    },
  ],
  summary:
    "The India-Singapore treaty caps Indian tax at 10% on dividends to a Singapore company holding at least 25% (15% otherwise), 10% on bank loan interest (15% otherwise) and 10% on royalties and technical fees, if the Singapore company is the beneficial owner. Claims need an IRAS Certificate of Residence and Form 41. Share gains turn on Article 24A.",
};

export default function Body() {
  return (
    <>
      <p>
        This guide is for finance heads of Singapore groups and regional headquarters that own an Indian subsidiary, and
        for Indian founders whose Singapore holding company owns their Indian company. It reads the treaty as notified in
        India, the Income-tax Act, 2025 (in force from 1 April 2026) and two January 2026 rulings. Setting up the
        subsidiary is covered on our{" "}
        <Link href="/india-subsidiary-for-singapore-companies">India subsidiary for Singapore companies</Link> page.
      </p>

      <h2>What does the India-Singapore DTAA change for a Singapore business?</h2>
      <p>
        The treaty limits the tax India can charge a Singapore resident company on dividends, interest, royalties and fees
        for technical services, lets India tax its business profits only through a permanent establishment, and decides
        when India can tax gains on Indian shares. It never raises Indian tax: where the Income-tax Act is more favourable,
        the Act applies.
      </p>
      <p>
        Signed on 24 January 1994, the agreement was amended by protocols of 29 June 2005, 24 June 2011 and
        30 December 2016, and is modified by the Multilateral Convention (MLI) that both countries signed on 7 June 2017.
      </p>
      <p>
        Under the 2025 Act, treaty relief sits in section 159 (section 90 of the 1961 Act). Section 159(4) applies the Act
        where it is more beneficial, so a treaty rate is a ceiling. Section 159(6) applies the general anti-avoidance rule
        in Chapter XI (Chapter X-A of the 1961 Act) even where it is not beneficial. Section 159(8) allows relief to a
        non-resident only with a certificate of residence from its own government and the prescribed documents and
        information.
      </p>
      <p>
        Article 28A, added by the 2016 protocol, keeps each country&apos;s domestic anti-avoidance rules in play. The MLI adds a
        principal purpose test: a benefit is denied if obtaining it was one of the principal purposes of an arrangement,
        unless granting it fits the treaty&apos;s object and purpose. In India it applies to tax withheld at source where
        the event giving rise to it occurs on or after 1 April 2020.
      </p>

      <h2>What tax does India withhold on dividends, interest, royalties and technical fees paid to Singapore?</h2>
      <p>
        Where the Singapore company is the beneficial owner, Indian tax is capped at 10% on dividends if it holds at least
        25% of the Indian company&apos;s shares (15% otherwise), 10% on interest on loans from banks and similar
        financial institutions (15% otherwise), and 10% on royalties and fees for technical services. A lower rate under
        the Act still applies.
      </p>
      <table>
        <thead>
          <tr>
            <th>Payment</th>
            <th>Treaty article</th>
            <th>Treaty rate (maximum Indian tax)</th>
            <th>Indian domestic withholding position</th>
            <th>Documents to collect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dividends</td>
            <td>Article 10(2)</td>
            <td>10% of the gross dividend if the beneficial owner is a company holding at least 25% of the payer&apos;s shares; otherwise 15%</td>
            <td>Income-tax Act, 2025 rate applies if lower (section 159(4))</td>
            <td>Required: COR and Form 41. Payer&apos;s records: beneficial ownership declaration; share register for the 10% rate</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>Article 11(2)</td>
            <td>10% of the gross interest on a loan from a bank or similar financial institution, including an insurance company; otherwise 15%</td>
            <td>Income-tax Act, 2025 rate applies if lower (section 159(4))</td>
            <td>Required: COR and Form 41. Payer&apos;s records: beneficial ownership declaration; loan agreement; proof the lender is a bank or financial institution for the 10% rate</td>
          </tr>
          <tr>
            <td>Royalties</td>
            <td>Article 12(2); definition in 12(3)</td>
            <td>10%</td>
            <td>Income-tax Act, 2025 rate applies if lower (section 159(4))</td>
            <td>Required: COR and Form 41. Payer&apos;s records: beneficial ownership and no-PE declarations; licence agreement</td>
          </tr>
          <tr>
            <td>Fees for technical services</td>
            <td>Article 12(2); definition in 12(4) and 12(5)</td>
            <td>10%, where the fee meets the treaty definition</td>
            <td>Income-tax Act, 2025 rate applies if lower (section 159(4))</td>
            <td>Required: COR and Form 41. Payer&apos;s records: beneficial ownership and no-PE declarations; service agreement and deliverables</td>
          </tr>
        </tbody>
      </table>
      <p>
        The Indian company deducts the tax under section 393(2) of the 2025 Act (section 195 of the 1961 Act). Four points
        in the treaty text change the answer:
      </p>
      <ul>
        <li>
          <strong>The interest rate depends on the lender.</strong> A loan from a Singapore parent that is not a bank or
          similar financial institution falls in the 15% band.
        </li>
        <li>
          <strong>Fees for technical services has a treaty definition.</strong> Under Article 12(4), a fee for managerial,
          technical or consultancy services is covered only if the services are ancillary to a royalty, make available
          technical knowledge, experience, skill, know-how or processes that let the payer apply the technology, or develop
          and transfer a technical plan or design. Other fees are generally business profits under Article 7, taxable in India only
          through a permanent establishment. Whether a regional management fee meets the make-available limb depends on
          what the Indian company actually receives.
        </li>
        <li>
          <strong>A permanent establishment changes the article.</strong> Under Articles 10(5), 11(4) and 12(6), income
          effectively connected with a permanent establishment of the Singapore company in India is taxed under Article 7
          instead.
        </li>
        <li>
          <strong>Article 24 can limit relief to amounts remitted.</strong> Where Singapore taxes an income only on the
          amount remitted to or received in Singapore, the Indian exemption or reduced rate applies only to that amount.
          Whether a receipt is taxed that way is a Singapore question.
        </li>
      </ul>

      <h2>Which documents should a Singapore company have to claim the treaty rate?</h2>
      <p>
        Section 159(8) of the Income-tax Act, 2025 requires two things: a Certificate of Residence (COR) from the Inland
        Revenue Authority of Singapore (IRAS) covering the period of payment, and the information prescribed in Form 41,
        the online form that replaced Form 10F under the Income-tax Rules, 2026. Indian payers also usually ask for a
        beneficial ownership declaration and, for royalties and service fees, a declaration that the Singapore company has
        no permanent establishment in India. These two are the payer&apos;s own records, not prescribed forms.
      </p>
      <p>
        <strong>IRAS Certificate of Residence.</strong> IRAS describes the COR as a letter certifying that the company is
        a tax resident of Singapore. Companies apply online at mytax.iras.gov.sg. IRAS grants it for a calendar year, only
        if the control and management of the business is exercised in Singapore that year, and says it processes
        applications within 7 working days. It also states that foreign-owned investment holding companies with purely
        passive income are generally not considered tax resident, and that nominee companies are not eligible.
      </p>
      <p>
        Because the COR runs by calendar year and the Indian tax year runs from April to March, payments made in tax year
        2026-27 call for both the 2026 and the 2027 certificates.
      </p>
      <p>
        <strong>Form 41 (earlier Form 10F).</strong> The Income Tax Department&apos;s list of forms under the Income-tax
        Rules, 2026 puts Form 41 in place of Form 10F for the information required by section 159(8). Its user manual says
        it is filed online only, by a non-resident registered on the e-filing portal, with the company&apos;s tax
        identification number and a copy of the residence certificate. Payments in FY 2025-26 and earlier use Form 10F.
      </p>
      <p>
        <strong>Beneficial ownership.</strong> Articles 10, 11 and 12 give the reduced rate only to the beneficial owner.
        The treaty does not define the term, so the facts decide: who controls how the income is used, and whether the
        Singapore company must pass it on. A signed declaration backed by the Singapore accounts is the record an Indian
        payer can keep.
      </p>
      <p>
        <strong>No-PE declaration.</strong> Because income connected with an Indian permanent establishment moves to
        Article 7, a payer of royalties or service fees has reason to ask for a declaration that there is none, checked
        against the staff facts set out below. None of these documents settles a claim on its own, as the two 2026 rulings
        show.
      </p>

      <h2>How are gains on Indian shares taxed after the 2016 protocol?</h2>
      <p>
        It turns on the acquisition date. Gains on shares of an Indian company acquired before 1 April 2017 are taxable
        only in Singapore, subject to the limitation of benefits clause. Gains on shares acquired on or after
        1 April 2017 may be taxed in India. A transition rule capped India&apos;s rate on such gains arising up to
        31 March 2019.
      </p>
      <p>
        The Third Protocol, signed on 30 December 2016, entered into force on 27 February 2017 and was notified by
        Notification No. 18/2017 [S.O. 935(E)] of 23 March 2017. From 1 April 2017 it deleted Article 13(4) and inserted
        paragraphs 4A, 4B and 4C, with a new paragraph 5.
      </p>
      <table>
        <thead>
          <tr>
            <th>Paragraph of Article 13</th>
            <th>Shares covered</th>
            <th>Who may tax the gain</th>
            <th>Condition in the treaty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4A</td>
            <td>Shares of an Indian company acquired before 1 April 2017</td>
            <td>Only Singapore, as the seller&apos;s country of residence</td>
            <td>Article 24A limitation of benefits</td>
          </tr>
          <tr>
            <td>4B</td>
            <td>Shares acquired on or after 1 April 2017</td>
            <td>India, under the Income-tax Act</td>
            <td>No rate limit after the transition period</td>
          </tr>
          <tr>
            <td>4C</td>
            <td>Shares acquired on or after 1 April 2017, gains arising from 1 April 2017 to 31 March 2019</td>
            <td>India, at no more than 50% of its domestic rate</td>
            <td>Article 24A limitation of benefits</td>
          </tr>
        </tbody>
      </table>
      <p>
        For a sale now, the question is whether each block of shares was acquired before 1 April 2017. If so,
        Article 13(4A) applies in principle, subject to Article 24A, the MLI principal purpose test and the general
        anti-avoidance rule. If not, India taxes the gain under its own law. Under paragraph 5, gains on other property are
        taxable only in the seller&apos;s country; for instruments other than ordinary equity, which paragraph applies
        depends on their terms.
      </p>
      <p>
        Allotment records, the share register and the FC-GPR or FC-TRS reports filed when the shares were issued or
        transferred prove the acquisition date. Our <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link>{" "}
        service can trace these filings before a buyer&apos;s due diligence begins.
      </p>

      <h2>What is the limitation of benefits clause, and why did a Singapore holding company fail it in 2026?</h2>
      <p>
        Article 24A denies the share-gain benefits in Article 13(4A) and 13(4C) to a Singapore company whose affairs were
        arranged with the primary purpose of obtaining them, or that is a shell or conduit. On 30 January 2026 the Delhi
        bench of the Income Tax Appellate Tribunal applied it to tax a Singapore company&apos;s gains on Indian shares.
      </p>
      <p>The clause applies from 1 April 2017 in four steps:</p>
      <ol>
        <li><strong>Primary purpose (paragraph 1):</strong> no benefit if the affairs were arranged with the primary purpose of taking advantage of paragraph 4A or 4C.</li>
        <li><strong>Shell or conduit (paragraph 2):</strong> no benefit for an entity with negligible or nil business operations, or no real and continuous business activities, in Singapore.</li>
        <li><strong>Expenditure test (paragraph 3):</strong> a company is deemed a shell if its annual expenditure on operations in Singapore is below S$200,000, tested for each 12-month period in the 24 months before the gain arises (paragraph 4A) or for the 12 months before it (paragraph 4C). The figure for an Indian resident is ₹50 lakh.</li>
        <li><strong>Safe harbours (paragraph 4):</strong> a company listed on a recognised Singapore stock exchange, or meeting the S$200,000 figure for the same periods, is deemed not to be a shell.</li>
      </ol>
      <p>
        The explanation to Article 24A sends entities without bona fide business activities to paragraph 1, so meeting the
        expenditure figure answers the shell test, not the primary purpose test. Article 24A covers only share gains;
        other income is tested under the MLI principal purpose test and the general anti-avoidance rule.
      </p>
      <p>
        <strong>Hareon Solar Singapore Pvt. Ltd. v. DCIT</strong> (ITA No. 2226/Del/2024, assessment year 2020-21, order
        of 30 January 2026). The company, incorporated in Singapore in 2015, was wholly owned by a Hong Kong company, itself
        owned by a Chinese solar module manufacturer. It bought equity shares and compulsorily convertible debentures (CCDs)
        of an Indian solar power company in 2015, sold them in June 2019 and claimed exemption under Article 13(4A) for the shares and Article 13(5) for the CCDs,
        relying on its tax residency certificate and on Singapore expenditure, mainly professional fees, that it said
        exceeded S$200,000.
      </p>
      <p>The Tribunal dismissed the appeal, holding that:</p>
      <ul>
        <li>the company was interposed to route an investment its Chinese parent could have made directly, for the principal purpose of a treaty advantage, so paragraph 1 applied;</li>
        <li>with no office or employees of its own, operating expenses limited to legal and professional fees paid to a service provider and a foreign exchange loss, and three of four directors and its bank signatories based outside Singapore, its control and management was not in Singapore;</li>
        <li>the residency certificate was not conclusive, and with no IRAS confirmation of the expenditure test, paragraphs 2 and 3 also applied;</li>
        <li>the gains on the shares and CCDs were taxable in India.</li>
      </ul>
      <p>
        For a holding company with pre-2017 Indian shares, the order shows what was examined: proof of where board
        meetings took place (no travel records were produced), who operates the bank account, premises and staff, what the
        Singapore expenditure pays for, and any IRAS confirmation of the expenditure test.
      </p>

      <h2>What did the Supreme Court decide in Tiger Global, and is a tax residency certificate still enough?</h2>
      <p>
        On 15 January 2026 the Supreme Court held that a tax residency certificate is an eligibility condition for treaty
        relief, not sufficient evidence of residence, and that holding one does not prevent the tax authorities from
        enquiring whether an interposed entity is a device to avoid tax. A certificate is still required, but it is not
        conclusive.
      </p>
      <p>
        The case, The Authority for Advance Rulings (Income Tax) and Others v. Tiger Global International II Holdings
        (Civil Appeal No. 262 of 2026, 2026 INSC 60), concerned Mauritius companies that in 2018 sold shares of Flipkart
        Private Limited, a Singapore company, and the India-Mauritius treaty. The Court allowed the
        Revenue&apos;s appeals and set aside the Delhi High Court&apos;s judgment of 28 August 2024. It stated, on the
        1961 Act, that:
      </p>
      <ul>
        <li>section 90(4) makes the certificate an eligibility condition, not sufficient evidence of residence, and the certificate is not binding on any statutory authority or court unless it enquires into it and comes to its own independent conclusion;</li>
        <li>after section 90(2A) and Chapter X-A, a certificate cannot by itself prevent an enquiry where the interposed entity was a device to avoid tax;</li>
        <li>read with Rule 10U(2) of the Income-tax Rules, 1962, the general anti-avoidance rule applies to a tax benefit obtained on or after 1 April 2017, whatever the date of the arrangement;</li>
        <li>on the facts, the transactions were impermissible tax avoidance arrangements, the Authority for Advance Rulings rightly rejected the applications under proviso (iii) to section 245R(2), and capital gains from transfers after 1 April 2017 were taxable in India.</li>
      </ul>
      <p>
        The 2025 Act has the corresponding provisions in section 159(8) (the certificate and prescribed information) and
        section 159(6) (Chapter XI applies whether or not it is beneficial).
      </p>

      <h2>When does a Singapore company have a permanent establishment in India?</h2>
      <p>
        Under Article 5, a Singapore company has a permanent establishment in India if it has a fixed place of business
        here, a construction or installation project lasting over 183 days, staff furnishing services in India for over 90
        days in a fiscal year (30 days for a related enterprise), or a dependent agent acting habitually for it.
      </p>
      <p>
        A fixed place includes a place of management, branch, office, factory, workshop or premises used for soliciting
        orders (Article 5(1) and (2)). The service test in Article 5(6) excludes technical services as defined in
        Article 12. A dependent agent under Article 5(8) habitually concludes contracts for the Singapore company, keeps a
        stock to deliver from, or secures orders wholly or almost wholly for it or its group. Article 5(7) excludes
        preparatory or auxiliary activities, and under Article 5(10) control of a subsidiary does not by itself create a
        permanent establishment. For India, the treaty&apos;s fiscal year is April to March, so day counts run on that
        basis. The MLI did not change Article 5 of this treaty.
      </p>
      <p>
        For a regional headquarters, the service test is the one to watch. When the Singapore company sends its own staff
        to furnish services to the Indian subsidiary, other than technical services within Article 12, the
        related-enterprise threshold of 30 days in aggregate applies. A Singapore manager habitually signing customer contracts in India brings in the agent test. If
        a permanent establishment exists, India taxes the attributable profits under Article 7.
      </p>

      <h2>How do Form 15CA and 15CB work when paying the Singapore parent?</h2>
      <p>
        For remittances from 1 April 2026, the Indian company files Form 145 (earlier 15CA), with
        the chartered accountant&apos;s certificate in Form 146 (earlier 15CB) where one is required. Form 146 has a
        treaty panel recording whether DTAA relief is claimed, the recipient&apos;s tax residency certificate, the treaty details
        and whether tax was deducted under the Act or the treaty.
      </p>
      <p>
        The reporting duty is in section 397(3)(d) of the 2025 Act (section 195(6) of the 1961 Act). Which part of Form 145
        applies, and when the certificate is needed, is on our <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB</Link>{" "}
        page.
      </p>

      <h2>How do treaty payments interact with transfer pricing and Form 48?</h2>
      <p>
        Royalties, service fees and interest paid to a Singapore parent are international transactions with an associated
        enterprise, so they must be priced at arm&apos;s length. The treaty takes the same line: under Articles 11(6) and
        12(8), where a special relationship inflates the payment, the treaty provisions apply only to the arm&apos;s
        length amount.
      </p>
      <p>
        The excess stays taxable under each country&apos;s law, so if the arm&apos;s length amount is lower than the
        amount paid, the difference falls outside the 10% or 15% limit. Article 9(2), added by the 2016 protocol, works the
        other way: where India adjusts the Indian company&apos;s profits on a transaction with its Singapore associate,
        Singapore is to make an appropriate adjustment to its tax on those profits, with the competent authorities
        consulting if needed. The Singapore adviser should hear of any Indian adjustment early.
      </p>
      <p>
        The accountant&apos;s report on these transactions is Form 3CEB for FY 2025-26 and Form 48 under section 172 of
        the 2025 Act from tax year 2026-27. Due dates and penalties are in our{" "}
        <PostLink slug="form-3ceb-due-date-applicability">Form 3CEB and Form 48 guide</PostLink>, and benchmarking is
        covered on our <Link href="/transfer-pricing-audit">transfer pricing audit</Link> page. The other Indian
        filings for the year are set out in our{" "}
        <PostLink slug="compliance-calendar-singapore-owned-indian-subsidiary">compliance calendar for a Singapore-owned Indian subsidiary</PostLink>,
        and the parent&apos;s options if it later wants to bring its holding company to India are described in our{" "}
        <PostLink slug="reverse-flip-singapore-to-india">guide to a reverse flip from Singapore</PostLink>.
      </p>

      <h2>Which questions belong with the Singapore company&apos;s own adviser?</h2>
      <p>
        The Singapore company should ask its Singapore adviser how Singapore taxes each receipt from India, whether credit
        for Indian tax withheld is available in Singapore, whether any receipt is taxed only when remitted (which narrows
        the Indian relief under Article 24), and whether the company qualifies for a COR. These are questions of Singapore
        law.
      </p>
      <p>
        Article 25(4) of the treaty provides for Singapore to allow Indian tax as a credit against Singapore tax on the
        same income, subject to Singapore&apos;s own rules; how that applies to a company is for the Singapore adviser.
      </p>
      <p>
        C S Rushil &amp; Co. advises on Indian law and prepares Indian filings only: the withholding position, Form 41,
        Forms 145 and 146, transfer pricing reports, FEMA reporting and the Indian company&apos;s tax and ROC compliance.
        Singapore tax, IRAS matters including the COR, ACRA filings and Singapore company law stay with the client&apos;s
        Singapore adviser, and we coordinate with that adviser on the Indian figures. We serve Singapore clients online
        from our office in Anna Nagar, Chennai. Ongoing work for the Indian company is described on our{" "}
        <Link href="/india-subsidiary-compliance-cfo">India subsidiary compliance and CFO</Link> page, and groups still
        choosing an Indian entity can start with{" "}
        <Link href="/company-registration-india-for-foreigners">company setup in India for foreign businesses</Link>.
      </p>
      <p>
        This guide covers companies. Individuals living in Singapore with Indian income should see our{" "}
        <Link href="/nri-tax-services-singapore">Indian tax services for NRIs in Singapore</Link> page.
      </p>

      <h2>Which official sources does this guide rely on?</h2>
      <ul>
        <li>
          <a href="https://www.incometaxindia.gov.in/w/singapore-comprehensive-agreements-1" target="_blank" rel="noopener noreferrer">India-Singapore DTAA with the 2005, 2011 and 2016 protocols</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometaxindia.gov.in/w/singapore-synthesised-text-1" target="_blank" rel="noopener noreferrer">Synthesised text of the MLI and the DTAA</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometaxindia.gov.in/w/section-159-89" target="_blank" rel="noopener noreferrer">Income-tax Act, 2025, section 159</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometaxindia.gov.in/w/section-178-77" target="_blank" rel="noopener noreferrer">Income-tax Act, 2025, section 178</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometaxindia.gov.in/w/section-90-64" target="_blank" rel="noopener noreferrer">Income-tax Act, 1961, section 90</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometaxindia.gov.in/faqs-and-guidance-notes-on-forms-as-per-income-tax-rules-2026" target="_blank" rel="noopener noreferrer">FAQs and guidance notes on forms under the Income-tax Rules, 2026</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometax.gov.in/iec/foportal/newformpage/forms/form41-UM" target="_blank" rel="noopener noreferrer">Form 41 user manual</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.incometax.gov.in/iec/foportal/newformpage/forms/form146-UM" target="_blank" rel="noopener noreferrer">Form 146 user manual</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://www.iras.gov.sg/taxes/corporate-income-tax/income-deductions-for-companies/companies-receiving-foreign-income/applying-for-a-certificate-of-residence-tax-reclaim-form" target="_blank" rel="noopener noreferrer">IRAS: Applying for a Certificate of Residence</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://itat.gov.in/public/files/upload/1769765889-VpzT5B-1-TO.pdf" target="_blank" rel="noopener noreferrer">ITAT Delhi: Hareon Solar Singapore Pvt. Ltd. v. DCIT, 30 January 2026</a> (checked 19 November 2026)
        </li>
        <li>
          <a href="https://api.sci.gov.in/supremecourt/2025/1251/1251_2025_7_1501_67552_Judgement_15-Jan-2026.pdf" target="_blank" rel="noopener noreferrer">Supreme Court: AAR v. Tiger Global International II Holdings, 15 January 2026</a> (checked 19 November 2026)
        </li>
      </ul>
    </>
  );
}
