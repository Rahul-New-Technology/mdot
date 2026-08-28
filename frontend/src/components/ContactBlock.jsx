import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/data/site";
import { trackGoogleAdsConversion } from "@/lib/utils";

// Google Apps Script URL - Replace with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || "";

export default function ContactBlock({ compact = false, defaultProduct = "", category = "", kind = "contact" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    subject: "", product: defaultProduct || category, message: "",
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

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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
      formData.append("kind", kind);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("subject", form.subject);
      formData.append("product", form.product);
      formData.append("category", category || form.product);
      formData.append("message", form.message);
      formData.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      
      toast.success("Grazie! Our team will get back within 4 business hours.");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", product: defaultProduct || category, message: "" });
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
    <div className={`bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(7,27,59,0.06)]`} data-testid="contact-block">
      {!compact && (
        <div className="grid sm:grid-cols-2 gap-5 mb-8 pb-8 border-b border-[#071B3B]/10">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#0066FF] mt-1 shrink-0" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/50">Visit</div>
              <div className="mt-1 text-sm text-[#071B3B]">{COMPANY.address}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-[#0066FF] mt-1 shrink-0" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/50">Hours</div>
              <div className="mt-1 text-sm text-[#071B3B]">{COMPANY.hours}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="text-[#0066FF] mt-1 shrink-0" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/50">Call</div>
              <a href={`tel:${COMPANY.phoneRaw}`} className="mt-1 text-sm text-[#071B3B] hover:text-[#0066FF] block">{COMPANY.phone}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-[#0066FF] mt-1 shrink-0" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/50">Email</div>
              <a href={`mailto:${COMPANY.email}`} className="mt-1 text-sm text-[#071B3B] hover:text-[#0066FF] block">{COMPANY.email}</a>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={submit} className="space-y-4" data-testid="contact-form">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name" value={form.name} onChange={set("name")} required testid="contact-name" error={errors.name} />
          <Field label="Company" value={form.company} onChange={set("company")} testid="contact-company" error={errors.company} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Email" type="email" value={form.email} onChange={set("email")} required testid="contact-email" error={errors.email} />
          <Field label="Phone" value={form.phone} onChange={set("phone")} testid="contact-phone" error={errors.phone} />
        </div>
        {kind !== "contact" && (
          <Field label="Product of interest" value={form.product} onChange={set("product")} testid="contact-product" error={errors.product} />
        )}
        <Field label="Subject" value={form.subject} onChange={set("subject")} testid="contact-subject" error={errors.subject} />
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/60 block mb-2">
            How can we help?
          </label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={set("message")}
            className={`w-full bg-[#F5F7FA] border focus:border-[#0066FF] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-transparent'}`}
            data-testid="contact-message"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto" data-testid="contact-submit">
          {loading ? "Sending…" : "Send message"} <ArrowUpRight size={16} />
        </button>
      </form>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required = false, testid, error }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/60 block mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-[#F5F7FA] border focus:border-[#0066FF] focus:bg-white rounded-full px-5 py-3 text-sm outline-none transition-colors ${error ? 'border-red-500' : 'border-transparent'}`}
        data-testid={testid}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}