import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionHeading, SectionLabel } from "./Section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const imgs = [g1, g2, g3, g4, g5, g6];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading>
            Moments in <span className="text-gradient-gold font-semibold">motion</span>.
          </SectionHeading>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {imgs.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              onClick={() => setOpen(src)}
              className="group block w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`Fireworks moment ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
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
            className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={open}
              alt="Preview"
              className="max-h-[88vh] w-auto rounded-2xl border border-white/10 object-contain shadow-2xl"
            />
            <button
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-background/60 text-foreground backdrop-blur transition hover:border-primary/50"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}