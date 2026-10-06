import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "IEC Registration in Chennai | Import Export Code";
const description =
  "IEC registration in Chennai on the DGFT portal: PAN-based Import Export Code, documents, the April-June annual update, modification and GST LUT for exporters.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/iec-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/iec-registration-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/iec-registration-chennai`}
      serviceType="Import Export Code Registration"
      crumbLabel="IEC Registration"
      crumbHref="/iec-registration-chennai"
      eyebrow="IEC · Chennai"
      h1="IEC Registration in Chennai"
      subhead="Get your Importer-Exporter Code from DGFT, keep it active with the annual update, and line up GST and LUT so your first shipment clears Chennai port without delays."
      introHeading="What is IEC registration in Chennai and who needs it?"
      intro="IEC registration in Chennai is the process of obtaining a 10-character Importer-Exporter Code from the Directorate General of Foreign Trade (DGFT). Under the Foreign Trade Policy, 2023, no one may import or export goods without an IEC unless specifically exempted. The IEC is the same as the entity's PAN and is applied for and generated online on the DGFT portal."
      citation={{ label: "DGFT Foreign Trade Policy 2023, Chapter 2 (para 2.05, IEC)", href: "https://content.dgft.gov.in/Website/dgftprod/4f665d2f-20cc-4887-ae6a-5ec912bc0d44/FTP2023_Chapter02.pdf" }}
      keyFacts={[
        { label: "Issued by", value: "Directorate General of Foreign Trade (DGFT), online at dgft.gov.in" },
        { label: "Format", value: "10-character code, same as the entity's PAN" },
        { label: "Who needs it", value: "Anyone importing or exporting goods (unless exempt); service exporters when claiming Foreign Trade Policy benefits" },
        { label: "Annual update", value: "Update or confirm IEC details online every year between April and June, even if nothing has changed" },
        { label: "If not updated", value: "IEC is de-activated; it can be re-activated on successful updation" },
      ]}
      subServicesHeading="What IEC services do we provide?"
      subServices={[
        { name: "New IEC Application", text: "Registration on the DGFT portal, filing of the IEC application with entity, address, bank and branch details, fee payment and download of the e-IEC certificate." },
        { name: "Annual IEC Updation", text: "Online update or confirmation of IEC details between April and June each year, so your code is not de-activated before your next shipment." },
        { name: "IEC Modification", text: "Changes to address, partners or directors, bank account, branches or contact details on the DGFT portal when your business details change." },
        { name: "Re-activation", text: "Updation of a de-activated IEC and resolution of any risk flags raised by the DGFT system, so customs filings can resume." },
        { name: "GST and LUT for Exporters", text: "GST registration and the annual Letter of Undertaking (LUT) so you can export goods or services without paying IGST upfront." },
        { name: "Exporter Compliance Setup", text: "Bank AD code registration guidance, export invoice formats and bookkeeping for foreign currency receipts and shipping documents." },
      ]}
      howTo={{
        heading: "How do you get an IEC from DGFT?",
        steps: [
          { name: "Register on the DGFT portal", text: "Create a user account on dgft.gov.in with the applicant's mobile number and email, verified by OTP." },
          { name: "Fill the IEC application", text: "Enter entity details against the PAN, address, partners or directors, bank account and branch offices. PAN details are validated online." },
          { name: "Upload documents", text: "Upload proof of address and bank proof, such as a cancelled cheque with the entity's name or a bank certificate." },
          { name: "Pay the fee and sign", text: "Pay the prescribed application fee online and sign the application with a DSC or Aadhaar-based e-sign." },
          { name: "Download the e-IEC", text: "Once validated, the e-IEC is generated online. Use it on shipping bills, bills of entry and with your bank for foreign remittances." },
        ],
      }}
      faqs={[
        { question: "Is an IEC the same as a PAN?", answer: "Yes, in number. Under the Foreign Trade Policy, the IEC is the same as the entity's PAN, but it still has to be separately issued by DGFT through an online application. Having a PAN alone does not let you import or export; you must apply for and generate the IEC on the DGFT portal." },
        { question: "Does an IEC need to be renewed?", answer: "There is no renewal, but there is a mandatory annual update. Every IEC holder must update or confirm its IEC details online between April and June each year, even if nothing has changed. If you miss it, the IEC is de-activated and stays inactive until you complete the updation." },
        { question: "What documents are needed for IEC registration?", answer: "You need the entity's PAN, proof of business address such as a rent agreement, sale deed or utility bill, and bank proof such as a cancelled cheque bearing the entity's name or a bank certificate. The applicant also needs a mobile number and email for OTP, and a DSC or Aadhaar e-sign to submit." },
        { question: "Do service exporters need an IEC?", answer: "Not for exporting services as such. Under the Foreign Trade Policy, an IEC is necessary for exporters of services or technology only when they want to claim benefits under the Policy. If you may claim such benefits later, it is simpler to obtain the IEC before you start invoicing overseas clients." },
        { question: "Do I need GST registration to get an IEC?", answer: "No. IEC is PAN-based and can be issued without GST registration. In practice, most exporters also register under GST so they can export under a Letter of Undertaking without paying IGST, or claim refunds of input tax. Importers need GST to claim credit of IGST paid on imports." },
        { question: "What happens if my IEC is de-activated?", answer: "A de-activated IEC cannot be used for customs clearance, so shipments can be held at port. You re-activate it by completing the pending updation on the DGFT portal and clearing any risk flags the system has raised. The Policy notes this is without prejudice to other action for violations." },
        { question: "How do I change details on my IEC?", answer: "Log in to the DGFT portal and file a modification of your IEC with the new address, bank account, directors, partners or branches, uploading supporting documents. Keep the IEC consistent with your GST registration and bank records, because mismatches cause problems at customs and with export incentive claims." },
      ]}
      relatedSlugs={["gst-registration-chennai", "goods-and-services-tax", "msme-udyam-registration-chennai"]}
      relatedPosts={[
        "lut-for-exporters",
        "gst-registration-online-sellers-chennai",
        "msme-udyam-registration-checklist",
        "gst-threshold-is-a-trigger",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">After the IEC: GST and LUT for exporters</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        An IEC lets you file shipping bills, but the tax side is handled under GST. Exporters usually register for GST and
        file a Letter of Undertaking each financial year, which allows exports of goods and services without paying IGST at
        the time of export. Without an LUT, you pay IGST and claim it back as a refund, which ties up working capital.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        If you are not yet registered, start with our{" "}
        <Link href="/gst-registration-chennai" className={linkClass}>
          GST registration service in Chennai
        </Link>
        . Ongoing return filing, LUT renewal and export refund claims are covered under our{" "}
        <Link href="/goods-and-services-tax" className={linkClass}>
          GST compliance and refund services
        </Link>
        . Manufacturing exporters should also look at{" "}
        <Link href="/msme-udyam-registration-chennai" className={linkClass}>
          Udyam (MSME) registration
        </Link>{" "}
        for access to priority-sector lending and delayed-payment protection.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Documents checklist for a new IEC</h2>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-slate">
        <li>PAN of the proprietor, firm, LLP or company (the IEC is issued against this PAN).</li>
        <li>Proof of the principal place of business: rent or lease agreement, sale deed, or a recent electricity or telephone bill.</li>
        <li>Bank proof: a cancelled cheque with the entity&apos;s pre-printed name, or a bank certificate.</li>
        <li>Details of directors, partners or the proprietor, and of any branch offices.</li>
        <li>Mobile number and email for OTP, and a Class 3 DSC or Aadhaar-linked mobile for e-sign.</li>
      </ul>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Keep the name and address on your IEC identical to your GST registration and bank records. Most problems at
        customs and with export incentive claims start with a mismatch between these three, so we check them side by side
        before filing.
      </p>
    </ServicePageTemplate>
  );
}
