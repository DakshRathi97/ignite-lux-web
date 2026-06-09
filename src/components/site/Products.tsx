import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import productAerial from "@/assets/product-aerial.jpg";
import productSparklers from "@/assets/product-sparklers.jpg";
import productShots from "@/assets/product-shots.jpg";
import productFestival from "@/assets/product-festival.jpg";
import productFountain from "@/assets/product-fountain.jpg";
import productWedding from "@/assets/product-wedding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

type Cat = "All" | "Rockets" | "Sparklers" | "Bombs" | "Flowerpots" | "Fountains" | "Novelties";

interface Product {
  img: string;
  name: string;
  desc: string;
  cat: Exclude<Cat, "All">;
}

const items: Product[] = [
  { img: productAerial, name: "Black Thunder", desc: "Powerful high-altitude rockets that split into thunderous multi-burst bouquets visible from over a kilometre.", cat: "Rockets" },
  { img: productSparklers, name: "Magic Ring — Crystal", desc: "Spinning ground chakra with 90 seconds of shimmering crystal-white sparks — ideal for table décor and processions.", cat: "Sparklers" },
  { img: productShots, name: "Color Punch — Knock Out", desc: "12-shot aerial barrage delivering alternating red, green, and gold blooms with deep bass reports.", cat: "Bombs" },
  { img: productFestival, name: "Prime Series Gold", desc: "Best-selling gold willow flowerpot with a 3-metre spread — the showstopper of any ground display.", cat: "Flowerpots" },
  { img: productFountain, name: "Wedding Series — Haasini", desc: "60-second silver crackle fountain engineered for wedding mandaps — low smoke, high elegance.", cat: "Fountains" },
  { img: productWedding, name: "Pink Heart", desc: "Shaped novelty bursting into a vivid pink heart silhouette — perfect for proposals, sangeets, and baby showers.", cat: "Novelties" },
  { img: gallery1, name: "Sky Titan", desc: "3-inch professional aerial shell with a 6-second rising tail and cascading silver-to-gold chrysanthemum break.", cat: "Rockets" },
  { img: gallery2, name: "Rainbow Sparkler", desc: "200mm colour-changing sparkler cycling through gold, green, red, and silver — burns for 2 full minutes.", cat: "Sparklers" },
  { img: gallery3, name: "Thunder Dome", desc: "Concussion aerial bomb with a deep sonic burst and bright white flash — feels like a stadium finale.", cat: "Bombs" },
  { img: gallery4, name: "Silver Shower Pot", desc: "Wide-spread crackling flowerpot raining dense silver sparks over a 4-metre radius for 45 seconds.", cat: "Flowerpots" },
  { img: gallery5, name: "Golden Rain Fountain", desc: "Continuous golden rain fountain with layered crackling effects — a crowd favourite at festivals and melas.", cat: "Fountains" },
  { img: gallery6, name: "Spinning Comet", desc: "High-speed ground spinner that launches into a comet-tail fountain — novelty and aerial effect in one.", cat: "Novelties" },
];

const cats: Cat[] = ["All", "Rockets", "Sparklers", "Bombs", "Flowerpots", "Fountains", "Novelties"];

export function Products() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<Cat>("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((it) => {
      const matchesSearch =
        !q ||
        it.name.toLowerCase().includes(q) ||
        it.desc.toLowerCase().includes(q) ||
        it.cat.toLowerCase().includes(q);
      const matchesCat = activeCat === "All" || it.cat === activeCat;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCat]);

  return (
    <section id="products" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
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

        {/* Search + Filters */}
        <div className="mt-10 flex flex-col gap-5">
          {/* Search bar */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search firecrackers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 backdrop-blur-sm transition focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  activeCat === c
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
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

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-20 text-center"
            >
              <p className="text-muted-foreground">No products match your search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCat("All");
                }}
                className="mt-4 text-sm text-primary underline underline-offset-4 transition hover:text-primary/80"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
