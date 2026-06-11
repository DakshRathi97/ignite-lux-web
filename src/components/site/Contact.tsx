import { motion } from "motion/react";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const info = [
  { icon: Phone, label: "Phone", value: "+91 94085 87316" },
  { icon: Mail, label: "Email", value: "krishivpyrollp@gmail.com" },
  { icon: MapPin, label: "Address", value: "NA 783, Limbhoi, Postal code - 383316" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) =>
    setForm((f) => ({ ...f, [id]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: bots fill hidden fields, humans don't
    if (honeypot) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("enquiries").insert({
        full_name: form.name,
        email: form.email || null,
        phone: form.phone,
        message: form.message,
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success("Thank you — we'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Enquiry submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-surface-elevated/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Contact</SectionLabel>
            <SectionHeading>Tell us about your event</SectionHeading>
            <p className="mt-4 text-muted-foreground">
              Send an enquiry and our team will get back with a tailored
              quote within 24 hours.
            </p>

            <ul className="mt-10 space-y-5">
              {info.map((i) => (
                <li key={i.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary">
                    <i.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{i.label}</p>
                    <p className="mt-0.5 font-medium text-foreground">{i.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Ic, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <Ic className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Krishiv Pyro Location"
                src="https://www.google.com/maps?q=NA+783+Limbhoi+383316&output=embed"
                width="100%"
                height="240"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Honeypot — invisible to humans, bots fill it and get silently rejected */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              aria-hidden="true"
              tabIndex={-1}
              className="absolute -left-[9999px] opacity-0"
            />
            <div className="space-y-5">
              {[
                { id: "name", label: "Full Name", type: "text", required: true },
                { id: "email", label: "Email (optional)", type: "email", required: false },
                { id: "phone", label: "Phone", type: "tel", required: true },
              ].map((f) => (
                <div key={f.id}>
                  <label className="text-sm font-medium text-foreground" htmlFor={`field-${f.id}`}>
                    {f.label}
                  </label>
                  <input
                    id={`field-${f.id}`}
                    type={f.type}
                    required={f.required}
                    name={f.id}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="field-message">
                  Message
                </label>
                <textarea
                  id="field-message"
                  required
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-input bg-surface px-3.5 py-2.5 text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={submitting || submitted}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
              >
                {submitted ? (
                  <>
                    Enquiry Sent
                    <CheckCircle className="h-4 w-4" />
                  </>
                ) : submitting ? (
                  <>
                    Sending...
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
