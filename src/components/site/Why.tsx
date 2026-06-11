import { motion } from "motion/react";
import { Award, ShieldCheck, Sparkles, Truck, Gem, MessageCircle } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";

const features = [
  { icon: Award, title: "Premium Quality", desc: "Hand-selected stock from Sivakasi's most reputed makers, checked batch by batch." },
  { icon: ShieldCheck, title: "Safety First", desc: "PESO-compliant products, stored and handled to strict safety standards." },
  { icon: Sparkles, title: "Curated Range", desc: "From sky shots to gift boxes — a range picked for every kind of celebration." },
  { icon: Truck, title: "Reliable Supply", desc: "Dependable stock and on-time delivery, even in peak festival season." },
  { icon: Gem, title: "Fair Pricing", desc: "Honest rates for retail and bulk orders alike — no festival-season surprises." },
  { icon: MessageCircle, title: "Real Advice", desc: "Tell us the occasion and budget; we'll suggest what actually works." },
];

export function Why() {
  return (
    <section id="why" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Why Krishiv Pyro</SectionLabel>
          <SectionHeading>What you can count on</SectionHeading>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-lg bg-secondary">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
