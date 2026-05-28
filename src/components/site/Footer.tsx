const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-primary/40">
              <span className="absolute inset-0 rounded-full bg-glow-gold" />
              <span className="relative font-display text-sm font-bold text-primary">K</span>
            </span>
            <div>
              <p className="font-display text-base font-semibold">
                Krishiv <span className="text-primary">Pyro</span> LLP
              </p>
              <p className="text-xs text-muted-foreground">Precision. Passion. Pyrotechnics.</p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Krishiv Pyro LLP. All rights reserved.</p>
          <p>Crafted with light, in India.</p>
        </div>
      </div>
    </footer>
  );
}