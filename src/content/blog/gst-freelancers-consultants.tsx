import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-freelancers-consultants",
  title: "GST on Freelancers and Consultants: Do You Need to Register?",
  description:
    "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
  date: "2026-09-19",
  excerpt:
    "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
};

export default function Body() {
  return (
    <>
      <p>
        Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories. That assumption causes real problems once income crosses a certain level.
      </p>

      <h2>The actual threshold for service providers</h2>

      <p>
        For services (which is what most freelance and consulting work falls under), <Link href="/gst-registration-chennai">GST registration</Link> becomes mandatory once your aggregate turnover in a financial year crosses twenty lakh rupees (see the GST portal&apos;s <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer">registration help</a>). This is lower than the forty lakh threshold that applies to businesses selling goods, and it is calculated on total receipts across all your freelance work, not per client.
      </p>

      <h2>When registration is required even below the threshold</h2>

      <p>
        If you provide services to a client located in another state, this counts as an interstate supply. Interstate supply of goods requires registration regardless of turnover, but for services a government notification (Notification 10/2017-Integrated Tax) exempts providers from registering as long as their all-India aggregate turnover stays within twenty lakh rupees, so out-of-state clients alone do not force you to register. What can force it is a different trigger, such as also selling goods to other states or being liable to pay tax under reverse charge on your own purchases, so it is still worth getting your setup checked. Freelancers working with international clients (exports of services) get the same exemption below the threshold, but registering and filing a Letter of Undertaking is what lets you export without paying tax and claim refunds of input credit.
      </p>

      <h2>What rate applies to your services</h2>

      <p>
        Most professional and consulting services attract eighteen percent GST. This needs to be charged on top of your invoice value once you are registered, and reported through regular <Link href="/gst-return-filing-chennai">GST return filing</Link>, which is a conversation worth having with clients before you cross the threshold, not after.
      </p>

      <h2>Composition scheme: usually not the right fit</h2>

      <p>
        Some freelancers ask about the composition scheme to reduce compliance. It is available for service providers under a separate notification with its own turnover cap, but it comes with restrictions on interstate supply and on claiming input credit, which often makes it a poor fit for freelancers who buy software subscriptions, hire subcontractors, or work with clients outside Tamil Nadu.
      </p>

      <h2>A simple decision checklist</h2>

      <ul>
        <li>Add up your total freelance and consulting income for the current financial year so far</li>
        <li>If it is approaching twenty lakh rupees, start the registration process now, not after crossing it</li>
        <li>If any of your clients are outside Tamil Nadu, remember the twenty lakh exemption for interstate services counts your all-India turnover</li>
        <li>If you work with international clients, registration plus an LUT filing usually makes sense from the start</li>
      </ul>

      <p>
        If you are a freelancer or consultant in Chennai unsure whether GST registration applies to you yet, C S Rushil &amp; Co. can review your income pattern and client mix in a single free consultation and tell you plainly whether you need to register now or can wait.
      </p>
    </>
  );
}
