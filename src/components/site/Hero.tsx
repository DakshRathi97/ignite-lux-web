import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-fireworks.jpg";
import { Sparks } from "./Sparks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]" />
      </div>

      <Sparks count={28} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--gold)]" />
          Krishiv Pyro LLP
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Lighting Celebrations
          <br />
          With <span className="text-gradient-gold font-semibold">Precision</span> &{" "}
          <span className="text-gradient-gold font-semibold">Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Premium fireworks crafted for unforgettable moments across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-6px_rgba(245,183,0,0.6)] transition hover:shadow-[0_0_60px_-4px_rgba(245,183,0,0.9)]"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-white/[0.04]"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Divider lines */}
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-px w-1/2 max-w-xl divider-glow opacity-60" />
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}