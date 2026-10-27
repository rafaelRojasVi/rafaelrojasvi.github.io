import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://rafaelrojasvi.github.io",
  integrations: [tailwind()],
  // Old project URLs, kept working for links already shared (LinkedIn media).
  redirects: {
    "/projects/platt-commercial-platform": "/projects/benker",
    "/projects/platt-commercial-ops": "/projects/benker-ops",
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
