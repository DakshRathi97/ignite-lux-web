import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading, SectionLabel } from "./Section";
import aerial from "@/assets/product-aerial.jpg";
import sparklers from "@/assets/product-sparklers.jpg";
import shots from "@/assets/product-shots.jpg";
import festival from "@/assets/product-festival.jpg";
import wedding from "@/assets/product-wedding.jpg";
import fountain from "@/assets/product-fountain.jpg";

type Cat = "All" | "Aerial" | "Sparklers" | "Shots" | "Festival" | "Wedding";

const items: { img: string; name: string; desc: string; cat: Exclude<Cat, "All"> }[] = [
  { img: aerial, name: "Auriga Aerial Burst", desc: "Symmetrical gold chrysanthemum shells.", cat: "Aerial" },
  { img: sparklers, name: "Lumen Sparklers", desc: "Smokeless, slow-burn handheld sparklers.", cat: "Sparklers" },
  { img: shots, name: "Ignis Celebration Shot", desc: "Single-shot finale with crackling tail.", cat: "Shots" },
  { img: festival, name: "Diwali Skyline", desc: "Curated festival multi-shot collection.", cat: "Festival" },
  { img: wedding, name: "Vivaha Willow Cake", desc: "Gold willow effect for wedding finales.", cat: "Wedding" },
  { img: fountain, name: "Aurum Fountain", desc: "Ground fountain — pure gold cascade.", cat: "Festival" },
];

const cats: Cat[] = ["All", "Aerial", "Sparklers", "Shots", "Festival", "Wedding"];

export function Products() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="products" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Our Collection</SectionLabel>
            <SectionHeading>
              Pyrotechnics, <span className="text-gradient-gold font-semibold">designed</span>.
            </SectionHeading>
            <p className="mt-6 text-muted-foreground">
              A curated catalogue of aerial shells, sparklers, fountains, and choreographed
              festival collections.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  active === c
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.article
                key={it.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="group hover-glow relative overflow-hidden rounded-3xl border border-white/10 bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                    {it.cat}
                  </span>
                </div>
                <div className="relative -mt-20 p-6">
                  <h3 className="font-display text-xl font-medium text-foreground">{it.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Enquire <span aria-hidden>→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}