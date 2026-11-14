import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-porur-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Porur, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Porur: GST, income tax, property TDS and company registration for families, landlords and suppliers, from Anna Nagar, 10.3 km away.",
  alternates: { canonical: "/chartered-accountant-porur-chennai", types: { "text/markdown": "/md/chartered-accountant-porur-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Porur, Chennai",
    description: "GST, income tax, property tax questions and company work for Porur residents, landlords and businesses, from our only office in Anna Nagar.",
    url: "/chartered-accountant-porur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Porur"
      crumbHref="/chartered-accountant-porur-chennai"
      h1="Chartered Accountant in Porur, Chennai"
      subhead="GST, income tax, property TDS and company registration for Porur's families, landlords, healthcare suppliers and first-time founders, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Porur is about 12 minutes by road on a clear run (OSRM route estimate) from our office, a drive of about 10.3 km along Alapakkam Main Road, EVR Periyar Salai and 100 Feet Road; peak traffic makes it longer. We have no branch in Porur: our only office is in Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM, and Porur clients meet us there or work with us online."
      directAnswer="C S Rushil & Co. serves Porur from its only office at J-Block, 13th Main Road, Anna Nagar, about 10.3 km away by road. We have no Porur branch. Porur families, landlords, pharmacies, suppliers and first-time founders can meet a chartered accountant at that office or handle their GST, income tax and company work online."
      localContext={[
        "Porur clients often come to our J-Block office for the first meeting, since the drive is manageable outside rush hours, and then move the regular work online. Purchase registers, rent agreements, sale deeds and bank statements are shared over WhatsApp and email, and monthly or quarterly filings follow a calendar we agree at the start.",
        "OpenStreetMap places Porur in the Greater Chennai Corporation's Valasaravakkam zone (Zone 11), with neighbouring Ramapuram to the east in the same zone, while our office falls in the Anna Nagar zone (Zone 8). The locality centres on Porur Junction, where Arcot Road meets the Kodambakkam-Sriperumbudur Road, with Porur Lake to the west and Mount-Poonamallee Road running north-west past Sri Ramachandra Institute of Higher Education and Research.",
        "Porur has grown into a residential suburb of apartment complexes, gated layouts and independent houses on the streets off Arcot Road. That growth brings property questions to many households: buying a flat, letting out an older one, or deciding what to do with family land when a builder makes an offer. Alongside it sit the shops, clinics and small offices that serve a growing population.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Porur?",
          body: (
            <>
              <p>
                Porur&apos;s commerce follows its main roads. Shops, restaurants and showrooms cluster around Porur
                Junction and along Arcot Road, healthcare-linked businesses such as pharmacies, labs and medical suppliers
                are a natural fit near the Sri Ramachandra campus, and many consultancies, contractors and online sellers
                run from flats in the residential streets off those roads.
              </p>
              <p className="mt-4">
                Each group needs different help. Retailers and restaurants need GST, a trade licence and staff
                registrations. Medical suppliers deal with GST rates that differ by product and with institutional buyers
                who check vendor paperwork. Contractors and consultants working from home need to keep business and
                personal spending apart, so that the books, the GST returns and the income tax return agree.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Porur?",
          body: (
            <>
              <p>
                From the centre of Porur, our office is about 12 minutes by road on a clear run (OSRM route estimate), a
                distance of about 10.3 km. The route heads north from Arcot Road along Alapakkam Main Road, joins EVR
                Periyar Salai towards Koyambedu, and then turns onto 100 Feet Road for the last stretch into Anna Nagar.
              </p>
              <p className="mt-4">
                We take that estimate from the public OSRM routing service using OpenStreetMap road data, from
                OpenStreetMap&apos;s centre point for Porur to our office pin. It reflects an empty road; the Koyambedu and
                Porur junctions slow things considerably at office hours. If you are coming for a signing or a document
                check, booking a slot first means the right person is ready when you arrive.
              </p>
            </>
          ),
        },
        {
          heading: "What should Porur flat buyers, landlords and landowners know about tax?",
          body: (
            <>
              <p>
                Three tax points matter most for Porur&apos;s housing. A buyer of property above the prescribed value must
                deduct TDS from the payment to the seller. A landlord reports rent as house property income and should
                match it with any TDS a tenant deducts. A landowner signing with a builder needs to plan capital gains
                before the agreement.
              </p>
              <p className="mt-4">
                When the seller is a non-resident, the buyer&apos;s TDS works differently and is usually higher, so NRI
                owners selling a Porur flat often apply for a lower deduction certificate first. A developer launching a
                registrable project registers it with TNRERA and keeps project accounts and certificates on the timelines
                the rules set. Read about{" "}
                <Link href="/blog/joint-development-agreement-tax-chennai" className={L}>
                  joint development agreement tax
                </Link>
                ,{" "}
                <Link href="/nri-property-sale-tds-chennai" className={L}>
                  TDS when an NRI sells property in Chennai
                </Link>{" "}
                and the{" "}
                <Link href="/blog/rera-compliance-calendar-tamil-nadu" className={L}>
                  RERA compliance calendar for Tamil Nadu developers
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Which compliance applies to pharmacies, labs and medical suppliers near Sri Ramachandra?",
          body: (
            <>
              <p>
                A pharmacy or medical supplier near the Sri Ramachandra campus typically needs GST registration, a drug
                licence from the licensing authority, Shops and Establishments registration and professional tax
                enrolment. Diagnostic labs bill largely exempt healthcare services, but they still need payroll, TDS and
                clean books, and some lab or clinic set-ups also need clinical establishment registration.
              </p>
              <p className="mt-4">
                GST rates differ across medicines, devices and consumables, so a supplier&apos;s item master needs the
                right classification from day one. Institutional buyers may ask for GST, PAN and Udyam details before
                adding a vendor, and Udyam registration also gives micro and small suppliers the MSMED Act&apos;s
                protection against delayed payment. See{" "}
                <Link href="/msme-udyam-registration-chennai" className={L}>
                  MSME Udyam registration in Chennai
                </Link>{" "}
                and{" "}
                <Link href="/gst-return-filing-for-clinics" className={L}>
                  GST return filing for clinics
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How do Porur founders set up a company or LLP?",
          body: (
            <>
              <p>
                The usual choice for a first-time founder in Porur is between a private limited company and an LLP. A
                company suits founders who plan to raise equity or offer ESOPs, while an LLP suits partners who want
                limited liability with lighter compliance. Both are incorporated online with the MCA, and a Porur flat can
                serve as the registered office.
              </p>
              <p className="mt-4">
                After incorporation, a company must open a bank account, file the commencement of business declaration
                within the set period, appoint its first auditor and register for GST if it is required. We prepare a
                post-incorporation calendar so that none of these early deadlines slips past. Compare structures in{" "}
                <Link href="/blog/private-limited-vs-llp-chennai-startups" className={L}>
                  Pvt Ltd vs LLP for Chennai founders
                </Link>{" "}
                or see{" "}
                <Link href="/private-limited-company-incorporation-chennai" className={L}>
                  private limited company incorporation in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Porur?",
          body: (
            <p>
              No. We do not have a Porur branch. Our one office is at Old Door No. AP-890, New No. 18,
              J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, and it opens Monday to Saturday, 9:30 AM to
              6:30 PM. Porur clients meet us there or work with us remotely over phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Porur clients?",
          body: (
            <p>
              We start with a free 15-minute consultation, either at our Anna Nagar office or on a video call from Porur.
              You then get an itemised quote listing government fees separately from our professional fees, so you can see
              what goes to the authorities. We do not begin any work until you approve it. Call +91 72001 49711 to book.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "nri-property-sale-tds-chennai", why: "TDS and lower deduction certificates when an NRI owner sells a flat or land in Porur." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for Porur residents with salary, rent from a second flat or capital gains on property." },
        { slug: "rera", why: "TNRERA registration and project compliance for developers building in and around Porur." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for Porur suppliers selling to hospitals and other institutional buyers." },
        { slug: "gst-registration-chennai", why: "GST registration for Porur pharmacies, shops and contractors once turnover or supply type requires it." },
        { slug: "private-limited-company-incorporation-chennai", why: "Incorporating a private limited company for a Porur founder, with a flat as the registered office." },
        { slug: "llp-registration-chennai", why: "LLP registration for Porur partners who want limited liability with lighter compliance." },
        { slug: "bookkeeping-services-chennai", why: "Monthly books for Porur traders and consultants, so GST and income tax figures agree." },
      ]}
      faqs={[
        { question: "I am buying a flat in Porur. Do I have to deduct TDS from the seller's payment?", answer: "If the property's value is above the prescribed limit, yes. For a resident seller, TDS is paid online with the combined challan and statement, and you then issue the seller a TDS certificate. If the seller is a non-resident, different and usually higher deduction rules apply, so check residential status before paying." },
        { question: "My family owns land in Porur and a builder has offered a joint development deal. What tax applies?", answer: "A joint development agreement can create capital gains for the landowner, and the timing depends on how the deal is structured and when the completion certificate is issued. GST questions can arise on the arrangement as well. We review the draft agreement, the area-sharing ratio and the title papers before you sign anything." },
        { question: "How far is your office from Porur by road?", answer: "About 10.3 km, which takes around 12 minutes on a clear road according to an OSRM route estimate along Alapakkam Main Road, EVR Periyar Salai and 100 Feet Road. Office-hour traffic at Koyambedu and Porur Junction can stretch that a good deal, so a mid-morning or Saturday slot is often easier." },
        { question: "I supply medical consumables to hospitals near Porur. Should I register under Udyam?", answer: "It is usually worthwhile. Registration on the Udyam portal costs nothing, and micro and small enterprises gain the MSMED Act's protection when buyers pay late. Some institutional buyers also ask for the Udyam number when adding a vendor. We check your investment and turnover against the current limits and file the registration for you." },
        { question: "Can a Porur consultancy be registered with my flat as its address?", answer: "Yes. An LLP or company can use a residential flat in Porur as its registered office, provided you have a recent utility bill, proof of ownership or a rent agreement, and a no objection certificate from the owner. The address must be able to receive official letters, since the ROC and tax departments write there." },
      ]}
      furtherReading={[
        { slug: "joint-development-agreement-tax-chennai", title: "Joint Development Agreement Tax for Chennai Landowners" },
        { slug: "rera-compliance-calendar-tamil-nadu", title: "RERA Compliance Calendar for Tamil Nadu Developers" },
        { slug: "private-limited-vs-llp-chennai-startups", title: "Pvt Ltd vs LLP for Chennai Founders Raising Funds or Hiring" },
        { slug: "registered-office-at-home-company", title: "Can Your Home Be a Company's Registered Office in India?" },
        { slug: "msme-udyam-registration-checklist", title: "MSME Udyam Registration After Incorporation: A Checklist" },
      ]}
    />
  );
}
