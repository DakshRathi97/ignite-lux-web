import { motion } from "motion/react";
import { SectionHeading, SectionLabel } from "./Section";

const reviews = [
  { quote: "Krishiv Pyro turned our wedding finale into a memory we'll never forget. Flawless choreography.", name: "Aarav & Ishita", loc: "Udaipur" },
  { quote: "The level of polish and safety is unmatched. They're our default choice for every brand event.", name: "Meera Kapoor", loc: "Mumbai" },
  { quote: "Their Diwali collection lit up our entire township. Quality you can feel in every shell.", name: "Rohan Sharma", loc: "Pune" },
  { quote: "Premium product, premium service. The aerial display was nothing short of cinematic.", name: "Saira Khan", loc: "Delhi" },
  { quote: "Reliable, on time, and visually stunning. They understand celebration as an art form.", name: "Karthik Iyer", loc: "Chennai" },
];

export function Testimonials() {
  // Duplicate list for seamless marquee
  const loop = [...reviews, ...reviews];
  return (
    <section className="relative overflow-hidden bg-surface/30 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading>
            Trusted by hosts of{" "}
            <span className="text-gradient-gold font-semibold">unforgettable</span> nights.
          </SectionHeading>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {loop.map((r, i) => (
            <article
              key={i}
              className="glass hover-glow w-[360px] shrink-0 rounded-3xl p-8"
            >
              <div className="mb-5 text-2xl text-primary/70">"</div>
              <p className="text-base leading-relaxed text-foreground/90">{r.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-display text-sm font-medium">{r.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {r.loc}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}