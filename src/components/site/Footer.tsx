const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold text-base font-bold text-foreground">
              K
            </span>
            <div>
              <p className="text-base font-bold">Krishiv Pyro LLP</p>
              <p className="text-sm text-background/70">Precision. Passion. Pyrotechnics.</p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-background/70 transition hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-7 text-sm text-background/60 md:flex-row">
          <p>© {new Date().getFullYear()} Krishiv Pyro LLP. All rights reserved.</p>
          <p>Crafted with light, in India.</p>
        </div>
      </div>
    </footer>
  );
}
