import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-ra-puram-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in R A Puram, Chennai | CA Firm" },
  description:
    "Income tax for R A Puram and Boat Club Road families: high-value property sales, joint development, reinvestment exemptions and family settlements.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in R A Puram, Chennai",
    description: "Property sale, redevelopment and family settlement tax support for R A Puram residents.",
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
      locality="R A Puram"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in R A Puram, Chennai"
      subhead="Capital gains, redevelopment and family property planning for households in Raja Annamalaipuram, Boat Club Road and the surrounding streets."
      distanceNote="R A Puram is in south-central Chennai, typically 40 minutes or so by road from our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd), more at peak hours. Property and family matters often benefit from one meeting in person, which we hold at Anna Nagar by appointment; the rest is done by video call and secure document sharing."
      directAnswer="C S Rushil & Co., a chartered accountant firm in Anna Nagar, handles income tax for R A Puram and Boat Club Road households online and by appointment. The usual work is capital gains on high-value house or plot sales, joint development with builders, reinvestment exemptions, family settlements between heirs, and the annual returns that follow."
      localContext={[
        "Raja Annamalaipuram, usually shortened to R A Puram, is one of south Chennai's quieter, greener residential areas, lying between Mylapore, Alwarpet and the Adyar River. Boat Club Road and its side roads are known for large bungalows on generous plots, and many properties have been in the same family for two or three generations.",
        "That history drives most of the income tax work here. Old bungalows are sold outright, redeveloped into apartments with a builder, or divided among heirs, and each route has different capital gains consequences. Land values in the area are high, so the tax at stake on a single transaction can be large, and the planning has to start before anything is signed.",
        "Residents tend to be senior corporate executives, industrialists and business families, retired civil servants and professionals, with some family members living abroad. A typical file involves several co-owners, some resident and some NRI, an inherited cost base going back decades, and a mix of sale proceeds, flats received from a builder and investments that all need to fit together.",
      ]}
      sections={[
        {
          heading: "How is capital gains tax worked out when an R A Puram bungalow is sold?",
          body: (
            <>
              <p>
                For inherited or long-held property, the gain is the sale price less the cost of acquisition and improvements.
                Where the property came from a parent or grandparent, the earlier owner&apos;s cost and holding period are used,
                and for property acquired before 2001 the fair market value on 1 April 2001 can be adopted, supported by a
                registered valuer&apos;s report. If the stamp duty value at registration is higher than the agreed price beyond a
                tolerance band, that value may be treated as the sale price for tax.
              </p>
              <p className="mt-4">
                The tax can then be reduced by reinvesting: in another residential house within the time limits, in specified
                bonds within six months, or, where a plot or non-residential asset is sold, by investing the net proceeds in a
                house. Amounts not reinvested before the return due date have to be parked in a capital gains account scheme.
                We work through the options with each co-owner before the sale deed is registered.
              </p>
              <SimpleTable
                head={["Common income tax situation in R A Puram", "What we handle"]}
                rows={[
                  ["Selling an inherited bungalow with several heirs as co-owners", "Each heir's share, inherited cost base, valuation as of 2001, reinvestment plan"],
                  ["Joint development agreement with a builder", "Timing of the gain, value of flats received, sale of surplus flats"],
                  ["Sale price below the stamp duty value", "Tolerance check, valuation reference where justified"],
                  ["Proceeds to be reinvested in a new house or bonds", "Exemption limits, deadlines, capital gains account deposit"],
                  ["One co-owner living abroad", "Lower TDS certificate and repatriation for the NRI's share"],
                  ["Family settlement dividing several properties", "Documenting the arrangement and its tax effect for each member"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "What happens to tax when an R A Puram house is redeveloped with a builder?",
          body: (
            <>
              <p>
                Many owners give their plot to a builder under a joint development agreement and receive a share of the new
                flats, sometimes with cash. For individuals and HUFs under a registered agreement, the capital gain is
                generally taxed in the year the completion certificate is issued, not when the agreement is signed, and it is
                measured using the stamp duty value of the owner&apos;s share on that date plus any cash received. Cash received
                earlier is still taxable in the year it is received.
              </p>
              <p className="mt-4">
                Selling one of the new flats later creates a second, separate gain. We set out the full timeline from
                agreement to handover, so families know in which year tax falls due and how much should be held back.
              </p>
              <SimpleTable
                head={["Stage of redevelopment", "Income tax point to plan for"]}
                rows={[
                  ["Signing and registering the joint development agreement", "Record ownership shares; cash received is taxable when received"],
                  ["Builder deducts TDS on cash consideration", "Match TDS credit to each owner's share"],
                  ["Completion certificate issued", "Capital gain on the land share generally falls due in this year"],
                  ["Owner sells a flat received from the builder", "New capital gain, with cost taken from the earlier computation"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Are family settlements between heirs taxable?",
          body: (
            <>
              <p>
                Courts have generally treated a genuine family settlement, made to resolve or avoid disputes among family
                members, as not being a transfer for capital gains. The arrangement still needs careful documentation, and
                the tax position changes if one member is paid cash to give up a share. We help families record the
                arrangement so each member&apos;s later sale or rental is reported on a consistent basis.
              </p>
              <p className="mt-4">
                For broader planning across several properties and family members, see our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page. Annual filing is covered on{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing in Chennai</Link>, and
                NRI co-owners can read about{" "}
                <Link href="/nri-property-sale-tds-chennai" className={linkCls}>NRI property sale TDS in Chennai</Link>. Nearby, see{" "}
                <Link href="/income-tax-consultant-alwarpet-chennai" className={linkCls}>income tax consultant in Alwarpet</Link> and{" "}
                <Link href="/chartered-accountant-mylapore-chennai" className={linkCls}>chartered accountant in Mylapore</Link>.
                The Income Tax Department outlines the Income-tax Act, 2025 on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" className={linkCls} target="_blank" rel="noopener noreferrer">
                  new Act overview (incometax.gov.in)
                </a>
                . To plan a sale or settlement, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning for R A Puram families with high-value property, several co-owners and investments." },
        { slug: "nri-property-sale-tds-chennai", why: "Lower TDS certificate, capital gains and repatriation for heirs living abroad." },
        { slug: "income-tax-return-filing-chennai", why: "Returns reporting property sales, reinvestment exemptions and rental income." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices on high-value property transactions or valuation differences." },
        { slug: "nri-tax-services", why: "Indian tax returns for family members abroad who share in R A Puram property." },
      ]}
      faqs={[
        { question: "How is the cost worked out for a bungalow my grandfather bought decades ago?", answer: "The cost to the earlier owner is used, and for property acquired before 1 April 2001 you can adopt its fair market value on that date instead. A registered valuer's report for 2001 supports this. The holding period also includes the earlier owners' years, so the gain is usually long-term." },
        { question: "We are signing a joint development agreement. When do we pay tax?", answer: "For individuals and HUFs with a registered agreement, the capital gain on the land share is generally taxed in the year the completion certificate for the project is issued. Any cash received from the builder before then is taxable when received. We map this timeline before you sign." },
        { question: "Can each heir claim the reinvestment exemption separately?", answer: "Yes. Each co-owner computes the gain on their own share and can claim the reinvestment exemptions individually, subject to the conditions and limits in each case. One heir may buy a house while another invests in bonds or pays the tax, so we work out the plan heir by heir." },
        { question: "What if the guideline value is higher than our agreed sale price?", answer: "If the stamp duty value exceeds the agreed price beyond a tolerance band, that value may be treated as the sale price for capital gains. Where you believe the stamp duty value is above fair market value, you can ask for the valuation to be referred to a Valuation Officer during assessment." },
        { question: "Is a family settlement among siblings treated as a sale?", answer: "A genuine family settlement made to settle or avoid disputes has generally been held not to be a transfer for capital gains. If one sibling receives cash to give up a share, the analysis changes. We help document the arrangement so later sales and rental income are reported consistently." },
        { question: "Do I need to meet you in person for a property sale?", answer: "One meeting at our Anna Nagar office is useful for a large sale or redevelopment, so we can go through deeds and family documents together. After that, most work is done by video call and secure document sharing. We have no office in R A Puram or anywhere other than Anna Nagar." },
      ]}
      furtherReading={[
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Property Sale for Chennai Sellers" },
      ]}
    />
  );
}
