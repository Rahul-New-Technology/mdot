import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import ContactBlock from "../components/ContactBlock";
import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BENEFITS = [
  "Dedicated account engineer and named CSM",
  "Multi-year MSA with locked-in pricing and consolidated invoicing",
  "Pan-India delivery with dedicated logistics for e-way bill compliance",
  "Escrow stock — hardware held for immediate call-off",
  "Quarterly business reviews with usage & spend analytics",
  "24/7 monitored SOC and 4-hour on-site SLA options",
  "White-glove workstation deployment for large hybrid teams",
  "Certified secure decommissioning & buy-back for retired assets",
];

export default function CorporatePage() {
  return (
    <PageShell
      eyebrow="Corporate Solutions"
      title="Framework agreements engineered for procurement scale."
      description="For CIOs, procurement leads and CFOs who need predictable pricing, pan-India delivery, and a single accountable partner."
      imageUrl="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr,1fr] gap-16">
          <SectionHeader
            eyebrow="What's included"
            title={<>Everything a global integrator offers — with a fraction of the account-management overhead.</>}
          />
          <Reveal>
            <ul className="space-y-4" data-testid="corporate-benefits">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-3 pb-4 border-b border-[#071B3B]/10">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <div className="text-[#071B3B] text-[15px] pt-1.5">{b}</div>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="btn-primary mt-8" data-testid="corporate-cta-primary">
              Talk to our corporate team <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F7FA] section-pad">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="Start a conversation" title={<>Send a brief.</>} description="Tell us your target locations, timeline and volume. A senior engineer replies within one business day." />
          <div className="mt-12">
            <ContactBlock kind="quote" compact />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
