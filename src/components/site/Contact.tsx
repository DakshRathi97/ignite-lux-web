import { motion } from "motion/react";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const info = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@krishivpyro.com" },
  { icon: MapPin, label: "Address", value: "NA 783, Limbhoi, Postal code - 383316" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (id: string, value: string) =>
    setForm((f) => ({ ...f, [id]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("inquiries").insert({
      full_name: form.name,
      email: form.email || null,
      phone: form.phone,
      message: form.message,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Thank you — we'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Contact</SectionLabel>
            <SectionHeading>
              Let's light up your{" "}
              <span className="text-gradient-gold font-semibold">next moment</span>.
            </SectionHeading>
            <p className="mt-6 text-muted-foreground">
              Tell us about your event. Our team will craft a tailored proposal within 24
              hours.
            </p>

            <ul className="mt-12 space-y-6">
              {info.map((i) => (
                <li key={i.label} className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-surface-elevated">
                    <i.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {i.label}
                    </p>
                    <p className="mt-1 text-foreground">{i.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Ic, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-primary/50 hover:text-primary hover:shadow-[0_0_25px_-5px_rgba(245,183,0,0.6)]"
                >
                  <Ic className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Krishiv Pyro Location"
                src="https://www.google.com/maps?q=NA+783+Limbhoi+383316&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                className="grayscale invert-[.92] hue-rotate-180 contrast-[0.85]"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass relative rounded-3xl p-8 sm:p-10"
          >
            <div className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-glow-gold blur-3xl" />
            <div className="relative space-y-6">
              {[
                { id: "name", label: "Full Name", type: "text", required: true },
                { id: "email", label: "Email (optional)", type: "email", required: false },
                { id: "phone", label: "Phone", type: "tel", required: true },
              ].map((f) => (
                <div key={f.id}>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    name={f.id}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_35px_-6px_rgba(245,183,0,0.7)] transition hover:shadow-[0_0_55px_-4px_rgba(245,183,0,1)] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Enquiry"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}