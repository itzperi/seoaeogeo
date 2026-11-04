import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/nri-residential-status-calculator";
const TITLE = "NRI Residential Status Calculator | Section 6 Test";
const DESCRIPTION =
  "Check whether you are resident, RNOR, deemed resident or non-resident for Indian tax. Enter your days in India and see which test applies, explained simply.";
const H1 = "NRI Residential Status Calculator";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: H1,
    description: DESCRIPTION,
    url: PATH,
  },
};

const CRUMBS = [
  { name: "Tools", href: "/tools" },
  { name: H1, href: PATH },
];

const FAQS = [
  {
    question: "How many days can I stay in India and remain an NRI?",
    answer:
      "Staying fewer than 182 days in the year is the starting point. If you have spent 365 days or more in India across the four preceding years, the longer-stay test can still make you resident at 60 days, or at 120 days for some visiting citizens with higher Indian income. Use the calculator with your own figures.",
  },
  {
    question: "What is the difference between RNOR and a non-resident?",
    answer:
      "A non-resident has failed the residency tests for the year. An RNOR has passed them, so is resident, but has spent little time in India over the past decade or is a deemed resident. In general, an RNOR is not taxed in India on income earned and received outside India, apart from business controlled from India.",
  },
  {
    question: "Who is a deemed resident under section 6(1A)?",
    answer:
      "An Indian citizen whose Indian income exceeds ₹15 lakh, who is not liable to tax in any other country, and who is not otherwise resident, is treated as resident in India. Such a person is always resident but not ordinarily resident. The calculator applies this rule when your answers match it.",
  },
  {
    question: "Does this calculator replace professional advice on my residential status?",
    answer:
      "No. It applies the day-count tests to the figures you enter and gives an estimate for guidance. Residential status turns on exact days, which are counted from passport stamps and travel records. We confirm your status from those records before it is relied on in a return or a remittance.",
  },
  {
    question: "What about tax in the country where I live?",
    answer:
      "This page covers Indian law only. Tax on your income in the country where you live is handled by your adviser there. We advise on the Indian side, including residential status, and can work with your home adviser so that the two positions are consistent.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Free tool · NRI tax"
      h1={H1}
      lead={
        <>
          You are a <strong>non-resident for Indian tax</strong> when you spend fewer than 182 days in India in the
          year and do not meet the longer-stay test, which combines a lower day count for the year with 365 days across
          the four preceding years. Enter your days and answers below to see which test applies to you.
        </>
      }
      subhead="Applies the section 6 residence tests, including the citizen, deemed-resident and RNOR rules, and explains the result in words."
      crumbs={CRUMBS}
      ctaService="NRI residential status"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calculator that applies the section 6 residential status tests to days spent in India and returns resident, RNOR, deemed resident or non-resident status with an explanation.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a determination.</strong> The result is for guidance only. C S Rushil &amp; Co.
        confirms your residential status from your travel records before it is used for any filing.
      </EstimateNote>

      <h2 className={H2}>How does this residential status calculator work?</h2>
      <p className={P}>
        It applies the residence tests of section 6 of the Income-tax Act, 1961, which the Income-tax Act, 2025
        carries forward, in the order below.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Basic test.</strong> If you spent 182 days or more in India in the year, you are resident.
        </li>
        <li>
          <strong>Longer-stay test.</strong> If you spent 60 days or more in the year and 365 days or more in the four
          preceding years, you are resident.
        </li>
        <li>
          <strong>Indian citizens leaving for work.</strong> For an Indian citizen who left India during the year for
          employment abroad, or as crew of an Indian ship, the 60 days is replaced by 182 days.
        </li>
        <li>
          <strong>Citizens and persons of Indian origin visiting India.</strong> The 60 days is replaced by 182 days.
          Where Indian income other than from foreign sources exceeds ₹15 lakh, it is replaced by 120 days, and a
          person who is resident only through the 120-day route is resident but not ordinarily resident.
        </li>
        <li>
          <strong>Deemed residence (section 6(1A)).</strong> An Indian citizen with Indian income above ₹15 lakh who is
          not liable to tax in any other country, and who is not otherwise resident, is a deemed resident and always
          resident but not ordinarily resident.
        </li>
        <li>
          <strong>Ordinarily or not ordinarily resident.</strong> A resident is not ordinarily resident if they were
          non-resident in 9 of the 10 preceding years, or spent 729 days or fewer in India in the 7 preceding years.
          Otherwise they are resident and ordinarily resident.
        </li>
      </ol>

      <h2 className={H2}>What do ROR, RNOR, deemed resident and non-resident mean?</h2>
      <p className={P}>
        Each status decides how much of your income India can tax, and the table below gives the general position.
      </p>
      <Table
        head={["Status", "How you reach it", "General effect on Indian tax"]}
        rows={[
          ["Non-resident (NRI)", "You fail every residence test for the year", "Income received in or accruing or arising in India is taxable; foreign income is not"],
          ["Resident but not ordinarily resident (RNOR)", "Resident, and non-resident in 9 of 10 preceding years or 729 days or fewer in 7 years", "Indian income is taxable; foreign income is generally not, unless from a business controlled in or a profession set up in India"],
          ["Deemed resident", "Section 6(1A): Indian citizen, Indian income above ₹15 lakh, not taxed in another country", "Treated as resident but not ordinarily resident"],
          ["Resident and ordinarily resident (ROR)", "Resident, and neither RNOR condition applies", "Income from all over the world is taxable in India"],
        ]}
      />

      <h2 className={H2}>Is the result of this calculator final?</h2>
      <p className={P}>
        No, it is an estimate for guidance, and C S Rushil &amp; Co. confirms your status before you rely on it.
        Residential status depends on exact days counted from passport stamps and travel records, and on facts such as
        your income sources and tax liability abroad. Foreign tax questions are for your home adviser, since we advise
        on Indian law only. Clients abroad are served online.
      </p>

      <ServiceCta links={[{ href: "/nri-tax-services", label: "NRI tax services" }]}>
        Once your status is confirmed, it decides how your Indian income, remittances and returns are handled. Our{" "}
        <Link href="/nri-tax-services" className={LINK}>
          NRI tax services
        </Link>{" "}
        team can confirm your status and take it from there.
      </ServiceCta>
    </ToolShell>
  );
}
