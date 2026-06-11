import { motion } from "motion/react";
import { SectionHeading, SectionLabel } from "./Section";
import aboutImg from "@/assets/store/range-prime-gold.jpg";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImg}
            alt="Prime Series and Super Heroes fireworks boxes on display"
            width={825}
            height={1100}
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-2xl border border-border object-cover shadow-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionLabel>About us</SectionLabel>
          <SectionHeading>A family business built on celebrations</SectionHeading>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Krishiv Pyro LLP brings premium fireworks from Sivakasi — the home
            of Indian pyrotechnics — to weddings, festivals, and events across
            the country. Every product we stock is selected for quality,
            reliability, and safety.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From the Tower Series sky shots to Wedding Series fountains and
            kids' favourites, our showroom carries the full range from trusted
            makers — with honest advice on what suits your occasion and budget.
          </p>
          <a
            href="#products"
            className="mt-8 inline-block rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            See the full range
          </a>
        </motion.div>
      </div>
    </section>
  );
}
