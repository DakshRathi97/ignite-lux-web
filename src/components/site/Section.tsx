import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-block rounded-md bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
      {children}
    </h2>
  );
}
