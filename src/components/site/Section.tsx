import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-primary/80">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}