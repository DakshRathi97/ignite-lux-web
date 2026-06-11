import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import facilityImg from "@/assets/store/facility.jpg";

const stats = [
  { v: "20+", l: "Years of craft" },
  { v: "500+", l: "Events supplied" },
  { v: "100%", l: "Safety certified" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
            Fireworks wholesaler &amp; retailer — Sivakasi sourced
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Premium fireworks for every{" "}
            <span className="text-primary">celebration</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            From weddings and festivals to brand events — explore our range of
            sky shots, fountains, sparklers, and gift boxes from India's most
            trusted makers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Browse products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Contact us
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-foreground">{s.v}</dt>
                <dd className="mt-0.5 text-sm text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={facilityImg}
            alt="The Krishiv Pyro LLP facility"
            width={1280}
            height={675}
            className="w-full rounded-2xl border border-border object-cover shadow-md"
          />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Our facility at Limbhoi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
