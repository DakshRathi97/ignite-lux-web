import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";

// Lazy load all below-the-fold sections to reduce initial JS bundle size
const About       = lazy(() => import("@/components/site/About").then(m => ({ default: m.About })));
const Products    = lazy(() => import("@/components/site/Products").then(m => ({ default: m.Products })));
const Why         = lazy(() => import("@/components/site/Why").then(m => ({ default: m.Why })));
const Gallery     = lazy(() => import("@/components/site/Gallery").then(m => ({ default: m.Gallery })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact     = lazy(() => import("@/components/site/Contact").then(m => ({ default: m.Contact })));
const Footer      = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishiv Pyro LLP — Premium Fireworks, Crafted in India" },
      {
        name: "description",
        content:
          "Krishiv Pyro LLP designs premium fireworks for weddings, festivals, and brand events across India — engineered with precision, choreographed with passion.",
      },
      { property: "og:title", content: "Krishiv Pyro LLP — Premium Fireworks" },
      {
        property: "og:description",
        content: "Premium fireworks crafted for unforgettable moments across India.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Products />
          <Why />
          <Gallery />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
