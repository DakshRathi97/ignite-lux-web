import { motion } from "motion/react";
import { Award, ShieldCheck, Sparkles, Truck, Gem } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";

const features = [
  { icon: Award, title: "Premium Quality", desc: "Hand-selected materials and rigorous batch testing for consistent performance." },
  { icon: ShieldCheck, title: "Safety Standards", desc: "Manufactured under PESO-certified protocols with strict compliance." },
  { icon: Sparkles, title: "Innovative Designs", desc: "Choreographed effects engineered by our pyrotechnic specialists." },
  { icon: Truck, title: "Reliable Distribution", desc: "Trusted nationwide logistics with secure, on-time delivery." },
  { icon: Gem, title: "Trusted Brand", desc: "A name relied on by leading event houses, weddings, and festivals." },
];

export function Why() {
  return (
    <section id="why" className="relative bg-surface/40 py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Why Krishiv Pyro</SectionLabel>
          <SectionHeading>
            Engineered to <span className="text-gradient-gold font-semibold">delight</span>,
            built to be safe.
          </SectionHeading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative bg-background/80 p-10 transition-colors hover:bg-background"
            >
              <div className="relative mb-8 inline-grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-surface-elevated">
                <span className="absolute inset-0 rounded-2xl bg-glow-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <f.icon className="relative h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
          {/* Filler tile */}
          <div className="relative hidden overflow-hidden bg-background/80 p-10 lg:block">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-glow-fire blur-3xl" />
            <div className="relative flex h-full flex-col justify-end">
              <p className="font-display text-2xl font-light leading-snug">
                <span className="text-gradient-gold font-semibold">Crafted</span> in India.
                Loved across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}