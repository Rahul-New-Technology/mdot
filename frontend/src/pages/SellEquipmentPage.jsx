import { useState } from "react";
import { toast } from "sonner";
import PageShell from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { ArrowUpRight, ShieldCheck, Recycle, Leaf } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/utils";

// Google Apps Script URL - Replace with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || "";

export default function SellEquipmentPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    equipment_type: "Servers", quantity: "", condition: "Good", details: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Company validation
    if (!form.company.trim()) {
      newErrors.company = "Company is required";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, must be valid)
    if (form.phone.trim() && !/^[+]?[\d\s-]{10,}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Equipment type validation
    if (!form.equipment_type) {
      newErrors.equipment_type = "Equipment type is required";
    }

    // Quantity validation
    if (!form.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(form.quantity) || parseInt(form.quantity) <= 0) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    // Condition validation
    if (!form.condition) {
      newErrors.condition = "Condition is required";
    }

    // Details validation
    if (!form.details.trim()) {
      newErrors.details = "Details are required";
    } else if (form.details.trim().length < 10) {
      newErrors.details = "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      if (!GOOGLE_SCRIPT_URL) {
        toast.error("Google Sheets integration not configured. Please set REACT_APP_GOOGLE_SCRIPT_URL.");
        setLoading(false);
        return;
      }

      // Submit to Google Sheets via Google Apps Script
      const formData = new FormData();
      formData.append("kind", "sell-equipment");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("equipment_type", form.equipment_type);
      formData.append("category", form.equipment_type);
      formData.append("quantity", form.quantity);
      formData.append("condition", form.condition);
      formData.append("details", form.details);
      formData.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      toast.success("Thanks! We'll send you an offer within 48 hours.");
      setForm({ name: "", email: "", phone: "", company: "", equipment_type: "Servers", quantity: "", condition: "Good", details: "" });
      setErrors({});

      // Track Google Ads conversion
      trackGoogleAdsConversion();
    } catch (err) {
      toast.error("Please check the form and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell
      eyebrow="Sell Your Used IT Equipment"
      title="Trade-in credit for used servers, laptops and networking gear."
      description="NIST 800-88 certified secure wiping, WEEE-compliant recycling — and instant buy-back credit against new hardware."
      imageUrl="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: ShieldCheck, title: "Certified secure wipe", desc: "NIST 800-88 & ISO 27040. Written certificate per asset." },
            { icon: Recycle, title: "WEEE compliant", desc: "Full downstream traceability for your ESG reporting." },
            { icon: Leaf, title: "Sustainability credit", desc: "Reduce your Scope 3 emissions with buy-back reporting." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card-soft p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-5">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#071B3B]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#2E3440]/70">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="Get a quote" title={<>Tell us what you're retiring.</>} />
          <div className="mt-12 card-soft p-8 md:p-10" data-testid="sell-form-wrap">
            <form onSubmit={submit} className="space-y-5" data-testid="sell-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Contact name *" value={form.name} onChange={set("name")} required testid="sell-name" error={errors.name} />
                <Field label="Company *" value={form.company} onChange={set("company")} required testid="sell-company" error={errors.company} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email *" type="email" value={form.email} onChange={set("email")} required testid="sell-email" error={errors.email} />
                <Field label="Phone" value={form.phone} onChange={set("phone")} testid="sell-phone" error={errors.phone} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Select label="Equipment type *" value={form.equipment_type} onChange={set("equipment_type")} options={["Servers", "Networking", "Storage", "Laptops", "Workstations", "Security", "Switches", "Mixed"]} testid="sell-type" error={errors.equipment_type} />
                <Field label="Quantity *" value={form.quantity} onChange={set("quantity")} required placeholder="e.g. 24 units" testid="sell-quantity" error={errors.quantity} />
                <Select label="Condition *" value={form.condition} onChange={set("condition")} options={["Working", "Good", "Fair", "Broken/parts"]} testid="sell-condition" error={errors.condition} />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/60 block mb-2">Asset list / details *</label>
                <textarea
                  required
                  rows={5}
                  value={form.details}
                  onChange={set("details")}
                  placeholder="Make, model, quantity, serials if handy, and pickup location."
                  className={`w-full bg-[#F5F7FA] border focus:border-[#0066FF] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-colors resize-none ${errors.details ? 'border-red-500' : 'border-transparent'}`}
                  data-testid="sell-details"
                />
                {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto" data-testid="sell-submit">
                {loading ? "Sending…" : "Send for valuation"} <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, value, onChange, type = "text", required = false, placeholder, testid, error }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/60 block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full bg-[#F5F7FA] border focus:border-[#0066FF] focus:bg-white rounded-full px-5 py-3 text-sm outline-none transition-colors ${error ? 'border-red-500' : 'border-transparent'}`}
        data-testid={testid}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, value, onChange, options, testid, error }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/60 block mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full bg-[#F5F7FA] border focus:border-[#0066FF] focus:bg-white rounded-full px-5 py-3 text-sm outline-none transition-colors appearance-none ${error ? 'border-red-500' : 'border-transparent'}`}
        data-testid={testid}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}