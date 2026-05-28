import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Why } from "@/components/site/Why";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

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
        <About />
        <Products />
        <Why />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
