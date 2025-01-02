// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server", // Enable SSR
  adapter: vercel({
    analytics: true, // Enable Vercel Analytics
  }),
});
