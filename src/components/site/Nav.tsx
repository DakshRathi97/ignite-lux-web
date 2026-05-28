import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-primary/40">
            <span className="absolute inset-0 rounded-full bg-glow-gold animate-pulse-glow" />
            <span className="relative text-sm font-bold text-primary">K</span>
          </span>
          <span className="hidden font-display text-base font-semibold tracking-wide sm:block">
            Krishiv <span className="text-primary">Pyro</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_-4px_rgba(245,183,0,0.6)] md:inline-block"
        >
          Get Quote
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}