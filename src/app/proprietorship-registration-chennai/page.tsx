import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Proprietorship Registration in Chennai | GST, Udyam" },
  description:
    "Proprietorship registration in Chennai: GST, Udyam, Tamil Nadu Shops and Establishments and trade licence, current account papers and when to incorporate.",
  alternates: { canonical: "/proprietorship-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Proprietorship Registration in Chennai",
    description: "The registrations a sole proprietor in Chennai actually needs, and when to move to an LLP or Private Limited Company.",
    url: "/proprietorship-registration-chennai",
  },
};

const REGISTRATIONS = [
  { name: "GST registration", when: "Once turnover crosses the GST threshold, or from day one for inter-state supply of goods, e-commerce sales and other compulsory cases.", where: "GST portal (gst.gov.in)" },
  { name: "Udyam (MSME) registration", when: "Optional but useful for any manufacturing or service business: needed for MSME schemes, priority lending and delayed-payment protection.", where: "udyamregistration.gov.in, free of cost" },
  { name: "Tamil Nadu Shops and Establishments", when: "Shops and commercial establishments employing 10 or more persons.", where: "Tamil Nadu Labour Department portal" },
  { name: "Trade licence", when: "Most premises-based trades within city limits.", where: "Local body, such as Greater Chennai Corporation" },
  { name: "Professional tax", when: "Applies to the proprietor and employees in Tamil Nadu.", where: "Local body" },
  { name: "Sector licences", when: "Food (FSSAI), import-export (IEC), drug licence and similar, depending on the business.", where: "Respective authority" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/proprietorship-registration-chennai`}
      serviceType="Sole Proprietorship Registration"
      crumbLabel="Proprietorship Registration"
      crumbHref="/proprietorship-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Sole Proprietorship · Chennai"
      h1="Proprietorship Registration in Chennai"
      subhead="There is no single proprietorship certificate in India. We set up the registrations your business actually needs, such as GST, Udyam and Shops and Establishments, so you can trade, invoice and open a current account."
      introHeading="How does proprietorship registration in Chennai work?"
      intro="Proprietorship registration in Chennai is not one filing: a sole proprietorship has no separate legal existence and uses the owner's own PAN. The business is set up through registrations that prove it exists, usually GST, Udyam and, for larger shops and offices, Tamil Nadu Shops and Establishments registration. Two of these together are normally enough to open a current account."
      citation={{ label: "Udyam Registration portal, Ministry of MSME", href: "https://udyamregistration.gov.in/" }}
      keyFacts={[
        { label: "Legal status", value: "No separate entity: the owner and the business are the same person and share one PAN." },
        { label: "Typical time", value: "Udyam is generated online almost immediately; GST and Shops and Establishments registrations usually take days rather than weeks." },
        { label: "Main registrations", value: "GST (gst.gov.in), Udyam (udyamregistration.gov.in), Tamil Nadu Shops and Establishments (Labour Department), trade licence (local body)." },
        { label: "Who it suits", value: "Freelancers, consultants, shops and small local businesses with low risk and a single owner." },
        { label: "Key risk", value: "Unlimited liability: business debts can be recovered from the owner's personal assets." },
      ]}
      howTo={{
        heading: "How do you set up a proprietorship in Chennai?",
        steps: [
          { name: "Choose a trade name", text: "Pick a business name and check it does not clash with a registered trademark. A proprietorship name is not registered with the MCA, so a trademark application is the way to protect it." },
          { name: "Udyam registration", text: "We register the business on the Udyam portal using the proprietor's Aadhaar and PAN. It is free, online and does not need renewal." },
          { name: "GST registration", text: "If your turnover or type of supply requires it, or your clients want GST invoices, we apply on the GST portal with the proprietor's PAN, Aadhaar and place-of-business proof." },
          { name: "Shops and Establishments and trade licence", text: "If you employ 10 or more persons, we register under the Tamil Nadu Shops and Establishments Act, 1947 on the Labour Department portal, and arrange the local trade licence where needed." },
          { name: "Current account", text: "With two registrations in the business name, we help you open a current account so business money stays separate from personal savings." },
          { name: "Books and tax calendar", text: "We set up bookkeeping, advance tax, GST return and income tax return dates so the first year runs on time." },
        ],
      }}
      subServicesHeading="What does our proprietorship set-up include?"
      subServices={[
        { name: "Udyam registration", text: "Free MSME registration on the government portal, done correctly with the right activity codes." },
        { name: "GST registration", text: "Application, responding to officer queries, and your first GST return." },
        { name: "Shops and Establishments", text: "Registration with the Tamil Nadu Labour Department when your headcount requires it." },
        { name: "Current account documents", text: "The registrations banks accept as proof that your business exists." },
        { name: "Bookkeeping and ITR", text: "Monthly books, GST and TDS returns, and the proprietor's income tax return." },
        { name: "Moving to LLP or Pvt Ltd", text: "Incorporation and transfer of the business when you outgrow the proprietorship." },
      ]}
      faqs={[
        {
          question: "Is there a registration certificate for a sole proprietorship?",
          answer:
            "No. India has no central registration that creates a sole proprietorship, because the business is legally the same person as its owner. The business is recognised through other registrations taken in its name, such as GST, Udyam, Shops and Establishments or a trade licence. Which ones you need depends on your turnover, staff and the kind of business you run.",
        },
        {
          question: "What do banks need to open a proprietorship current account?",
          answer:
            "Banks follow RBI's KYC rules, which ask for the proprietor's own KYC plus usually two documents showing the business exists in your name. Accepted documents include a GST registration certificate, Udyam registration certificate, Shops and Establishments certificate, municipal trade licence or the proprietor's income tax return reflecting the business. Each bank may ask for specifics, so we check before you visit.",
        },
        {
          question: "Is Shops and Establishments registration mandatory in Tamil Nadu?",
          answer:
            "It depends on headcount. The Tamil Nadu Labour Department's online registration under the Tamil Nadu Shops and Establishments Act, 1947 is for shops and commercial establishments employing 10 or more persons, following the 2018 amendment. Smaller establishments are generally outside the registration requirement, though the Act's rules on working hours and holidays still apply. A local trade licence is a separate requirement.",
        },
        {
          question: "Do I need GST registration as a proprietor?",
          answer:
            "You need GST registration once your aggregate turnover crosses the threshold, or from the start if you make inter-state supplies of goods, sell through e-commerce operators or fall in another compulsory category. Below that, it is optional; some proprietors register voluntarily because business clients want GST invoices or input tax credit. Registration is linked to the proprietor's PAN.",
        },
        {
          question: "Is Udyam registration free?",
          answer:
            "Yes. Udyam registration on the Ministry of MSME's portal is free, paperless and based on self-declaration, using the proprietor's Aadhaar and PAN. It does not need renewal. Investment and turnover figures are taken from income tax and GST records. Be wary of websites that charge a fee and look official; the government portal is udyamregistration.gov.in.",
        },
        {
          question: "When should a proprietor move to an LLP or Private Limited Company?",
          answer:
            "Consider incorporating when personal liability becomes a real risk, when clients or tenders insist on a company or LLP, when you want a partner or investor, or when your profit is high enough that a different tax structure saves money. A proprietorship cannot be converted directly; a new entity is incorporated and takes over the business through a transfer agreement.",
        },
        {
          question: "How is a proprietorship taxed?",
          answer:
            "A proprietorship is not taxed separately. Its profit is added to the owner's other income and taxed at personal slab rates in the owner's income tax return. Small businesses can choose presumptive taxation if they qualify, which reduces bookkeeping. Advance tax applies once the year's tax liability crosses the prescribed limit, and a tax audit applies above the turnover limits.",
        },
      ]}
      relatedQuestions={[
        { question: "How does a proprietorship compare with an OPC or LLP?", href: "/company-registration-chennai" },
        { question: "What does an OPC give a solo founder that a proprietorship does not?", href: "/opc-registration-chennai" },
        { question: "When does a proprietor need GST registration?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={["gst-registration-chennai", "msme-udyam-registration-chennai", "opc-registration-chennai", "bookkeeping-services-chennai", "income-tax-return-filing-chennai", "company-registration-chennai"]}
      relatedPosts={["gst-threshold-is-a-trigger", "msme-udyam-registration-checklist", "gst-freelancers-consultants", "business-personal-expenses-separate"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which registrations does a proprietorship need?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Registration</th>
              <th className="p-4 font-medium text-obsidian">When you need it</th>
              <th className="p-4 font-medium text-obsidian">Where</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {REGISTRATIONS.map((row) => (
              <tr key={row.name} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.name}</td>
                <td className="p-4 text-slate">{row.when}</td>
                <td className="p-4 text-slate">{row.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What documents do you need?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• Proprietor&apos;s PAN and Aadhaar (with a mobile number linked to Aadhaar for OTPs).</li>
        <li>• Photograph and personal bank account details.</li>
        <li>• Place of business proof: electricity bill or property tax receipt, plus rent agreement and owner&apos;s consent if rented.</li>
        <li>• Business name, nature of activity and expected turnover.</li>
        <li>• Number of employees, for the Shops and Establishments decision.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">When does a proprietorship stop being enough?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        A proprietorship is the quickest way to start, but it has three limits. Your personal assets back every business debt. You
        cannot bring in a partner or investor without changing structure. And larger clients and tenders often prefer contracting with
        a registered company or LLP. When any of these starts to bite, an{" "}
        <Link href="/opc-registration-chennai" className="text-royal-violet underline underline-offset-2">
          OPC
        </Link>
        ,{" "}
        <Link href="/llp-registration-chennai" className="text-royal-violet underline underline-offset-2">
          LLP
        </Link>{" "}
        or{" "}
        <Link href="/private-limited-company-incorporation-chennai" className="text-royal-violet underline underline-offset-2">
          Private Limited Company
        </Link>{" "}
        is the next step. Our{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        guide compares them side by side.
      </p>
    </ServicePageTemplate>
  );
}
