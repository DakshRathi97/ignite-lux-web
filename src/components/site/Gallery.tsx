import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import g1 from "@/assets/store/range-towers.jpg";
import g2 from "@/assets/store/range-prime.jpg";
import g3 from "@/assets/store/range-wedding.jpg";
import g4 from "@/assets/store/range-magic-ring.jpg";
import g5 from "@/assets/store/range-sunrise.jpg";
import g6 from "@/assets/store/showroom.jpg";

const imgs = [
  { src: g1, w: 825, h: 1100, alt: "Tower Series and Ultra Series boxes on showroom shelves" },
  { src: g2, w: 1021, h: 1100, alt: "Color Punch and Prime Series 3.0 boxes on display" },
  { src: g3, w: 1200, h: 683, alt: "Wedding Series fountains lined up on a shelf" },
  { src: g4, w: 1200, h: 748, alt: "Magic Ring ground spinners in four colours" },
  { src: g5, w: 1200, h: 707, alt: "Sunrise Series morning crackers on a shelf" },
  { src: g6, w: 1400, h: 846, alt: "Wide view of the Krishiv Pyro showroom wall" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="border-y border-border bg-surface-elevated/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading>Inside our showroom</SectionHeading>
          <p className="mt-4 text-muted-foreground">
            Real shelves, real stock — drop by and see the range in person.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {imgs.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              onClick={() => setOpen(img.src)}
              className="block w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-foreground/80 p-6 backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={open}
              alt="Showroom preview"
              className="max-h-[88vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <button
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-surface text-foreground shadow-md"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
