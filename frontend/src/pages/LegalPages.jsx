import PageShell from "../components/PageShell";
import { COMPANY } from "../data/site";

function Legal({ title, sections }) {
  return (
    <PageShell eyebrow="Legal" title={title} description={`Last updated: 01 December 2025 · ${COMPANY.name}`}>
      <section className="bg-white section-pad">
        <div className="max-w-[900px] mx-auto px-5 md:px-8 space-y-10 text-[15px] text-[#2E3440]/80 leading-relaxed">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl font-semibold text-[#071B3B] mb-4">{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function PrivacyPage() {
  return <Legal title="Privacy Policy" sections={[
    { h: "1. Data we collect", p: "Contact details, company information and inquiries you submit via our forms, plus routine web analytics on visitors to our site." },
    { h: "2. How we use it", p: "To reply to inquiries, produce quotes, maintain business records, and improve our website. We do not sell data." },
    { h: "3. Legal basis", p: "Consent (for marketing communications), contract performance (for active engagements) and legitimate interest (for analytics)." },
    { h: "4. Sharing", p: "We share limited information with vendors we quote from (Cisco, Dell, HPE etc.) strictly for the purpose of preparing your offer." },
    { h: "5. Your rights", p: `You may request access, rectification, deletion or portability of your data at any time by writing to ${COMPANY.email}. You may also lodge a complaint with the relevant data-protection authority.` },
    { h: "6. Retention", p: "Inquiries are retained for 24 months. Contracts are retained for the legally required period under applicable Indian law." },
  ]} />;
}

export function TermsPage() {
  return <Legal title="Terms & Conditions" sections={[
    { h: "1. Scope", p: `These terms govern the supply of goods and services by ${COMPANY.name}. They apply to all quotations, orders and contracts unless expressly agreed in writing.` },
    { h: "2. Quotations", p: "Quotations are valid for 15 days from issue date unless otherwise stated. Stock is subject to availability at the time of order confirmation." },
    { h: "3. Delivery", p: "Delivery times are estimates. Risk transfers upon delivery to the address specified. Title remains with us until full payment is received." },
    { h: "4. Warranty", p: "Products carry the original manufacturer warranty. Grade-A refurbished stock carries a 12-month M DOT IT SOLUZIONE warranty." },
    { h: "5. Payment", p: "Payment terms are 30 days net unless otherwise agreed. Late payment attracts statutory interest under applicable law." },
    { h: "6. Governing law", p: "These terms are governed by Indian law. Jurisdiction is exclusively the courts of Mumbai, Maharashtra." },
  ]} />;
}

export function DisclaimerPage() {
  return <Legal title="Disclaimer" sections={[
    { h: "1. Information accuracy", p: "The information published on this website is provided in good faith and for general information only. Specifications and pricing are subject to change without notice." },
    { h: "2. Third-party trademarks", p: "All product names, logos and brands mentioned are property of their respective owners. Use here is for identification purposes only and does not imply endorsement." },
    { h: "3. External links", p: "This site may contain links to external sites. We are not responsible for the content or availability of any linked site." },
    { h: "4. No professional advice", p: "Nothing on this website constitutes professional advice. Please contact our team for guidance specific to your requirements." },
  ]} />;
}
