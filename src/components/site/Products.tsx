import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import londonBridge from "@/assets/products/london-bridge.jpg";
import eiffelTower from "@/assets/products/eiffel-tower.jpg";
import seaLink from "@/assets/products/sea-link.jpg";
import dubaiTower from "@/assets/products/dubai-tower.jpg";
import twinTowers from "@/assets/products/twin-towers.jpg";
import cpKickBoks from "@/assets/products/cp-kick-boks.jpg";
import cpHook from "@/assets/products/cp-hook.jpg";
import cpKnockOut from "@/assets/products/cp-knock-out.jpg";
import cpSinan from "@/assets/products/cp-sinan.jpg";
import ultraFlame from "@/assets/products/ultra-flame.jpg";
import ultraGold from "@/assets/products/ultra-gold.jpg";
import ultraOrange from "@/assets/products/ultra-orange.jpg";
import primeWhite from "@/assets/products/prime-white.jpg";
import primeGold from "@/assets/products/prime-gold.jpg";
import primeRed from "@/assets/products/prime-red.jpg";
import primeRedGreen from "@/assets/products/prime-red-green.jpg";
import mrSapphire from "@/assets/products/mr-sapphire.jpg";
import mrCrystal from "@/assets/products/mr-crystal.jpg";
import mrCitrine from "@/assets/products/mr-citrine.jpg";
import wedHaasini from "@/assets/products/wed-haasini.jpg";
import wedNavjeevan from "@/assets/products/wed-navjeevan.jpg";
import wedRaagRang from "@/assets/products/wed-raag-rang.jpg";
import wedThirumana from "@/assets/products/wed-thirumana.jpg";
import sunGoldenHour from "@/assets/products/sun-golden-hour.jpg";
import sunRadiant from "@/assets/products/sun-radiant.jpg";
import sunSkyward from "@/assets/products/sun-skyward.jpg";
import sunBeam from "@/assets/products/sun-beam.jpg";
import blackThunder from "@/assets/products/black-thunder.jpg";
import pinkHeart from "@/assets/products/pink-heart.jpg";
import ironMan from "@/assets/products/superhero-iron-man.jpg";

type Cat =
  | "All"
  | "Sky Shots"
  | "Fountains"
  | "Flowerpots"
  | "Ground Spinners"
  | "Wedding Series"
  | "Crackers"
  | "Novelties";

interface Product {
  img: string;
  name: string;
  desc: string;
  cat: Exclude<Cat, "All">;
}

const items: Product[] = [
  { img: londonBridge, name: "London Bridge", desc: "Tower Series 2.0 showpiece aerial with London skyline artwork.", cat: "Sky Shots" },
  { img: eiffelTower, name: "Eiffel Tower", desc: "Paris-themed multi-burst aerial from the Tower Series 2.0.", cat: "Sky Shots" },
  { img: seaLink, name: "Sea Link", desc: "A golden tribute to Mumbai's Sea Link in the night sky.", cat: "Sky Shots" },
  { img: dubaiTower, name: "Dubai Tower", desc: "Burj-inspired sky shot with green and gold tower effects.", cat: "Sky Shots" },
  { img: twinTowers, name: "Twin Towers", desc: "Twin-column bursts from the Tower Series 2.0 collection.", cat: "Sky Shots" },
  { img: cpKickBoks, name: "Color Punch — Kick Boks", desc: "Gold-studded colour bursts with a heavyweight finish.", cat: "Sky Shots" },
  { img: cpHook, name: "Color Punch — Hook", desc: "Pearl-white shower of colour that lands a clean hook.", cat: "Sky Shots" },
  { img: cpKnockOut, name: "Color Punch — Knock Out", desc: "Red and green colour pearls in a deep purple shell.", cat: "Sky Shots" },
  { img: cpSinan, name: "Color Punch — Sinan", desc: "Ruby-red colour bursts — a crowd favourite of the series.", cat: "Sky Shots" },
  { img: ultraFlame, name: "Ultra — Flame", desc: "Best-selling Ultra Series twin pack in the Flame edition.", cat: "Fountains" },
  { img: ultraGold, name: "Ultra — Gold", desc: "Shimmering gold effects from the Ultra Series twin pack.", cat: "Fountains" },
  { img: ultraOrange, name: "Ultra — Orange", desc: "Vivid orange crackle in the Ultra Series twin pack.", cat: "Fountains" },
  { img: primeWhite, name: "Prime Series 3.0 — White", desc: "Pure white willow spread from the best-seller range.", cat: "Flowerpots" },
  { img: primeGold, name: "Prime Series 3.0 — Gold", desc: "The signature gold willow flowerpot — our best seller.", cat: "Flowerpots" },
  { img: primeRed, name: "Prime Series 3.0 — Red", desc: "Deep red cascade with a rich premium finish.", cat: "Flowerpots" },
  { img: primeRedGreen, name: "Prime Series 3.0 — Red & Green", desc: "Dual-colour cascade where red meets green.", cat: "Flowerpots" },
  { img: mrSapphire, name: "Magic Ring — Sapphire", desc: "Ground chakra twin pack in the cool Sapphire edition.", cat: "Ground Spinners" },
  { img: mrCrystal, name: "Magic Ring — Crystal", desc: "Crystal-white sparkling rings, twin pack.", cat: "Ground Spinners" },
  { img: mrCitrine, name: "Magic Ring — Citrine", desc: "Warm golden rings in the Citrine edition twin pack.", cat: "Ground Spinners" },
  { img: wedHaasini, name: "Wedding Series — Haasini", desc: "White weds crackling — made for mandap moments.", cat: "Wedding Series" },
  { img: wedNavjeevan, name: "Wedding Series — Navjeevan", desc: "Gold weds crackling — an elegant start to new beginnings.", cat: "Wedding Series" },
  { img: wedRaagRang, name: "Wedding Series — Raag Rang", desc: "Purple weds crackling — soft, pastel celebration.", cat: "Wedding Series" },
  { img: wedThirumana, name: "Wedding Series — Thirumana", desc: "Red weds crackling — rich, festive, and grand.", cat: "Wedding Series" },
  { img: sunGoldenHour, name: "Sunrise — Golden Hour", desc: "Morning cracker that starts the festival day bright.", cat: "Crackers" },
  { img: sunRadiant, name: "Sunrise — Radiant", desc: "A radiant red burst for early-morning celebrations.", cat: "Crackers" },
  { img: sunSkyward, name: "Sunrise — Skyward", desc: "Good-morning special that sends sparks skyward.", cat: "Crackers" },
  { img: sunBeam, name: "Sunrise — Beam", desc: "A golden beam of crackle to wake the neighbourhood.", cat: "Crackers" },
  { img: blackThunder, name: "Black Thunder", desc: "Nayagi's famous cracker — power in every burst.", cat: "Crackers" },
  { img: pinkHeart, name: "Pink Heart", desc: "Gems Stone series novelty — a pink heart in the sky.", cat: "Novelties" },
  { img: ironMan, name: "Super Heroes — Iron Man", desc: "Biggest performance in the series — a kids' favourite.", cat: "Novelties" },
];

const cats: Cat[] = [
  "All",
  "Sky Shots",
  "Fountains",
  "Flowerpots",
  "Ground Spinners",
  "Wedding Series",
  "Crackers",
  "Novelties",
];

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
    <section id="products" className="border-y border-border bg-surface-elevated/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <SectionLabel>Our collection</SectionLabel>
          <SectionHeading>Browse the range</SectionHeading>
          <p className="mt-4 text-muted-foreground">
            {items.length} products in stock — sky shots, fountains, flowerpots,
            spinners, and more. All photos are of our actual stock.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-input bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  activeCat === c
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-surface text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.article
                key={it.name}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden bg-secondary/60 p-3">
                  <img
                    src={it.img}
                    alt={it.name}
                    width={700}
                    height={933}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-medium text-muted-foreground">{it.cat}</p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-foreground">
                    {it.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${it.name}`}
                    className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-all hover:decoration-4"
                  >
                    Enquire <span aria-hidden>→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground">No products match your search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCat("All");
                }}
                className="mt-3 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-4"
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
