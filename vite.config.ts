// This preset bundles the full plugin chain (TanStack Start, React, Tailwind,
// tsconfig paths, Nitro, @ alias, React/TanStack dedupe). Do NOT add those plugins
// manually or the build breaks with duplicates. Extra config goes in defineConfig({ ... }).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
