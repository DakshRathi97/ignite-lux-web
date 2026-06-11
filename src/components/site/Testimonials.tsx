import { motion } from "motion/react";
import { SectionHeading, SectionLabel } from "./Section";

const reviews = [
  { quote: "Krishiv Pyro turned our wedding finale into a memory we'll never forget. Flawless from start to finish.", name: "Aarav & Ishita", loc: "Udaipur" },
  { quote: "The level of quality and safety is unmatched. They're our default choice for every brand event.", name: "Meera Kapoor", loc: "Mumbai" },
  { quote: "Their Diwali collection lit up our entire township. Quality you can feel in every box.", name: "Rohan Sharma", loc: "Pune" },
  { quote: "Premium product, premium service. The aerial display was nothing short of cinematic.", name: "Saira Khan", loc: "Delhi" },
  { quote: "Reliable, on time, and great value. They genuinely understand what each occasion needs.", name: "Karthik Iyer", loc: "Chennai" },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading>What customers say</SectionHeading>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="flex-1 leading-relaxed text-foreground">"{r.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{r.loc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
