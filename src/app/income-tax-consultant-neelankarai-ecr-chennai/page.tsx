import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-neelankarai-ecr-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Neelankarai & ECR, Chennai" },
  description:
    "Income tax for Neelankarai, Injambakkam, Palavakkam and Akkarai owners: beach plots, agricultural vs urban land, villa rentals, land sale TDS and capital gains.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Neelankarai and ECR, Chennai",
    description: "Land, villa rental and capital gains tax support for owners along Chennai's East Coast Road.",
    url: `/${SLUG}`,
  },
};

function SimpleTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            <th className="px-4 py-3 font-medium">{head[0]}</th>
            <th className="px-4 py-3 font-medium">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className="px-4 py-3 align-top font-medium text-obsidian">{a}</td>
              <td className="px-4 py-3 align-top text-slate">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      topic="Income Tax Consultant"
      locality="Neelankarai and ECR"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Neelankarai and ECR, Chennai"
      subhead="Income tax on land, beach houses and villa rentals for owners in Neelankarai, Palavakkam, Injambakkam, Akkarai and further along East Coast Road."
      distanceNote="Neelankarai and the East Coast Road are at the far southern edge of Chennai, a long drive from our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd); allow well over an hour each way in normal traffic. Most ECR clients therefore work with us entirely by video call, phone and secure document sharing, and come to Anna Nagar by appointment only for major transactions."
      directAnswer="C S Rushil & Co., a chartered accountant firm in Anna Nagar, handles income tax for Neelankarai and ECR owners online and by appointment. Typical work is capital gains on beach-front plots and houses, whether land counts as agricultural, rent from villas and short-stay lets, TDS on land sales, and annual returns for owners in India or abroad."
      localContext={[
        "Neelankarai, Palavakkam, Injambakkam and Akkarai line the East Coast Road south of Thiruvanmiyur, between the road and the sea. Over the past few decades the stretch has changed from coconut groves, casuarina plantations and fishing villages into a sought-after belt of independent houses, beach villas and gated communities, with land values that have risen sharply.",
        "Owners here are varied: business families and senior executives who live in large independent houses, film and media professionals, NRIs and out-of-town families who hold a beach house as a second home, and long-time landholders whose families owned plantation or farm land before the area urbanised. Many properties are let as homes, holiday villas, shoot locations or event venues.",
        "That history creates income tax questions that rarely come up in central Chennai. Was the land agricultural when it was bought, and is it still? Is rent from a villa used for events or short stays still house property income, or a business? How should a plot bought cheaply decades ago, or inherited, be valued when it is finally sold at today's prices?",
      ]}
      sections={[
        {
          heading: "Is ECR land agricultural or a capital asset for income tax?",
          body: (
            <>
              <p>
                Rural agricultural land is not a capital asset, so its sale is outside capital gains tax. But land counts as
                rural only if it lies outside municipal limits and beyond a prescribed distance from them, which depends on the
                population of the nearby municipality. Much of the ECR stretch nearest the city falls within or close to
                Greater Chennai&apos;s limits, so land still described as agricultural in old records may well be a capital asset
                today. The test is applied with reference to the land&apos;s location, not its name in the patta or deed.
              </p>
              <p className="mt-4">
                Where land is a capital asset, the gain is computed from the cost to you or to the earlier owner, with the
                option of adopting fair market value as of 1 April 2001 for older holdings. Reinvesting in a residential house
                or specified bonds can reduce the tax. Genuine agricultural income from land that is still farmed is exempt,
                but it can push up the rate on your other income.
              </p>
              <SimpleTable
                head={["Common income tax situation in Neelankarai and ECR", "What we handle"]}
                rows={[
                  ["Selling a beach-front plot held for decades", "Cost or 2001 valuation, long-term gain, reinvestment options"],
                  ["Land recorded as agricultural in old documents", "Whether it is rural agricultural land or a capital asset today"],
                  ["Villa let as a family home", "House property income, municipal tax, 30% standard deduction"],
                  ["Villa let for events, shoots or short stays", "Whether income is house property or business, and GST questions"],
                  ["Buying ECR property from a resident or NRI seller", "Buyer's TDS obligations and the correct form"],
                  ["Out-of-town or NRI owner of a beach house", "Indian return for rent and gains, lower TDS on sale"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "How is rent from ECR villas and beach houses taxed?",
          body: (
            <>
              <p>
                A villa let to a family on a monthly or yearly lease is normally taxed as income from house property, with a
                deduction for municipal tax paid and a flat 30% standard deduction. When the property is let by the day for
                parties, film shoots or holiday stays, with housekeeping, catering or other services, the income may instead be
                business income, with actual expenses allowed and books required.
              </p>
              <p className="mt-4">
                Short-stay accommodation and venue hire can also bring GST into play once turnover crosses the threshold, which
                is different from long-term residential rent. Where this applies we coordinate the income tax and{" "}
                <Link href="/goods-and-services-tax" className={linkCls}>GST registration and returns</Link> so they agree.
              </p>
              <SimpleTable
                head={["How the villa is used", "Likely income tax treatment"]}
                rows={[
                  ["Long lease to a family", "Income from house property"],
                  ["Second home, not let out", "Usually no rental income; one or two homes can be treated as self-occupied"],
                  ["Daily lets for events or shoots with services", "Often business income, actual expenses, books needed"],
                  ["Holiday stays through an online platform", "Depends on services and scale; GST may apply above the threshold"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Where can ECR owners find related income tax help?",
          body: (
            <>
              <p>
                Owners with several properties, business income and investments can read our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page. Annual returns are covered on{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing in Chennai</Link>, and
                NRI owners selling a beach house can read about{" "}
                <Link href="/nri-property-sale-tds-chennai" className={linkCls}>NRI property sale TDS in Chennai</Link>. Owners
                turning a villa into a hospitality business may want{" "}
                <Link href="/private-limited-company-incorporation-chennai" className={linkCls}>private limited company registration</Link>.
              </p>
              <p className="mt-4">
                For the technology corridor just inland, see our{" "}
                <Link href="/chartered-accountant-omr-sholinganallur-chennai" className={linkCls}>chartered accountant in OMR and Sholinganallur</Link>{" "}
                page, and for families further north along the coast,{" "}
                <Link href="/income-tax-consultant-besant-nagar-chennai" className={linkCls}>income tax consultant in Besant Nagar</Link>.
                The Income Tax Department outlines the Income-tax Act, 2025 on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" className={linkCls} target="_blank" rel="noopener noreferrer">
                  new Act overview (incometax.gov.in)
                </a>
                . To review a land sale or rental, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning for ECR owners with land, villas, business income and investments." },
        { slug: "income-tax-return-filing-chennai", why: "Returns reporting villa rent, land sales and reinvestment exemptions." },
        { slug: "nri-property-sale-tds-chennai", why: "Lower TDS, capital gains and repatriation when an NRI sells ECR property." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices on high-value land deals or unreported rental income." },
        { slug: "private-limited-company-incorporation-chennai", why: "Company registration for owners running villas as a hospitality or events business." },
      ]}
      faqs={[
        { question: "My family's ECR land is shown as agricultural. Is its sale tax-free?", answer: "Not necessarily. Land is exempt only if it is rural agricultural land, which depends on its distance from municipal limits and the population of the nearby municipality, not on how old records describe it. Much land near Neelankarai and Injambakkam is likely to be a capital asset today, so we check the location first." },
        { question: "We bought our Palavakkam plot in the 1990s. How is the gain worked out?", answer: "For land acquired before 1 April 2001, you can use its fair market value on that date as the cost instead of the original price, supported by a registered valuer's report. The gain is long-term, and reinvesting in a residential house or specified bonds within the time limits can reduce the tax." },
        { question: "I let my Akkarai villa for weddings and film shoots. How is that taxed?", answer: "Daily lets with services such as housekeeping or catering often amount to a business, so the income is business income with actual expenses allowed, rather than house property income. GST may also apply above the turnover threshold. We look at how the villa is actually run before deciding the treatment." },
        { question: "I am buying a house on ECR. Do I need to deduct TDS?", answer: "Usually yes. A buyer of immovable property above the prescribed value from a resident seller must deduct TDS at a small rate and deposit it online. If the seller is an NRI, TDS is much higher, applies to the full price without a lower deduction certificate, and the buyer needs a TAN. We confirm the right process." },
        { question: "My beach house is a second home. Do I pay tax on it if it is not let?", answer: "Under current rules, up to two homes that are not let out can be treated as self-occupied, with nil annual value. If you own more than two, the others are treated as deemed let and taxed on a notional rent. We check how each property is classified every year." },
        { question: "Do I have to travel to Anna Nagar to work with you?", answer: "No. ECR is a long drive from our only office in Anna Nagar, so most ECR clients work with us fully online, by video call and secure document sharing. You can visit Anna Nagar by appointment for a large transaction. We have no office on ECR, in Neelankarai or anywhere else." },
      ]}
      furtherReading={[
        { slug: "rnor-status-returning-nri", title: "RNOR status for NRIs returning to Chennai" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Property Sale for Chennai Sellers" },
      ]}
    />
  );
}
