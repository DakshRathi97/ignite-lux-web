import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { SectionHeading, SectionLabel } from "./Section";
import { supabase } from "@/lib/supabase";

const PAGE_SIZE = 24;

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image_url: string;
}

interface ProductPage {
  rows: Product[];
  count: number;
}

export function Products() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  // Debounce so we don't hit the database on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 300);
    return () => clearTimeout(t);
  }, [search]);

  const { data: cats } = useQuery({
    queryKey: ["product-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("product_categories");
      if (error) throw error;
      return (data ?? []) as string[];
    },
    staleTime: 5 * 60 * 1000,
  });

  const {
    data,
    error,
    isPending,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products", debounced, activeCat],
    initialPageParam: 0,
    queryFn: async ({ pageParam }): Promise<ProductPage> => {
      let q = supabase
        .from("products")
        .select("id,name,description,category,image_url", { count: "exact" })
        .order("sort_order", { ascending: true })
        .order("id", { ascending: true })
        .range(pageParam, pageParam + PAGE_SIZE - 1);
      if (activeCat !== "All") q = q.eq("category", activeCat);
      // PostgREST or() syntax breaks on , ( ) % — strip them from user input
      const s = debounced.replace(/[,()%]/g, " ").trim();
      if (s) {
        q = q.or(`name.ilike.%${s}%,description.ilike.%${s}%,category.ilike.%${s}%`);
      }
      const { data: rows, error, count } = await q;
      if (error) throw error;
      return { rows: (rows ?? []) as Product[], count: count ?? 0 };
    },
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.reduce((n, p) => n + p.rows.length, 0);
      return loaded < lastPage.count ? loaded : undefined;
    },
  });

  const products = useMemo(
    () => (data ? data.pages.flatMap((p) => p.rows) : []),
    [data],
  );
  const total = data?.pages[0]?.count ?? 0;

  // Auto-load the next page when the sentinel nears the viewport,
  // until every product has been shown
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "600px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <section id="products" className="border-y border-border bg-surface-elevated/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <SectionLabel>Our collection</SectionLabel>
          <SectionHeading>Browse the range</SectionHeading>
          <p className="mt-4 text-muted-foreground">
            Sky shots, fountains, flowerpots, spinners, and more — every photo
            is of our actual stock.
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
            {["All", ...(cats ?? [])].map((c) => (
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

          {!isPending && !error && total > 0 && (
            <p className="text-sm text-muted-foreground">
              Showing {products.length} of {total} products
            </p>
          )}
        </div>

        {/* Initial loading skeletons */}
        {isPending && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="aspect-[3/4] bg-muted" />
                <div className="space-y-2 p-4">
                  <div className="h-3 w-1/4 rounded bg-muted" />
                  <div className="h-4 w-2/3 rounded bg-muted" />
                  <div className="h-3 w-full rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Couldn't load the catalogue. Please check your connection.
            </p>
            <button
              onClick={() => refetch()}
              className="mt-3 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-4"
            >
              Try again
            </button>
          </div>
        )}

        {/* Product grid */}
        {products.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((it) => (
              <motion.article
                key={it.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden bg-secondary/60 p-3">
                  <img
                    src={it.image_url}
                    alt={it.name}
                    width={700}
                    height={933}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-medium text-muted-foreground">{it.category}</p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-foreground">
                    {it.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.description}</p>
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
          </div>
        )}

        {/* Infinite-scroll sentinel + manual fallback */}
        <div ref={sentinelRef} aria-hidden className="h-px" />
        {hasNextPage && (
          <div className="mt-8 text-center">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-secondary disabled:opacity-60"
            >
              {isFetchingNextPage ? "Loading more..." : "Load more products"}
            </button>
          </div>
        )}

        {/* Empty state */}
        {!isPending && !error && total === 0 && (
          <div className="mt-16 text-center">
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
          </div>
        )}
      </div>
    </section>
  );
}
