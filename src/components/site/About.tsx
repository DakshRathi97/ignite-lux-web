import { motion } from "motion/react";
import { SectionHeading, SectionLabel } from "./Section";
import aboutImg from "@/assets/gallery-3.jpg";

const stats = [
  { v: "20+", l: "Years of Craft" },
  { v: "500+", l: "Events Lit" },
  { v: "100%", l: "Safety Certified" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src={aboutImg}
              alt="Fireworks reflecting on water at night"
              width={900}
              height={900}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-glow-gold blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <SectionLabel>About Us</SectionLabel>
          <SectionHeading>
            Crafted for moments that{" "}
            <span className="text-gradient-gold font-semibold">deserve light</span>.
          </SectionHeading>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krishiv Pyro LLP is a premium Indian fireworks house dedicated to the art of
            celebration. We engineer every shell, sparkler, and finale with obsessive
            attention to quality, safety, and choreography — so your moments arrive in
            colour, exactly when they should.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            From intimate weddings to national festivals, our pyrotechnics are
            manufactured in certified facilities, batch-tested for reliability, and
            distributed nationwide through a trusted network.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-light text-foreground sm:text-4xl">
                  <span className="text-gradient-gold font-semibold">{s.v}</span>
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}