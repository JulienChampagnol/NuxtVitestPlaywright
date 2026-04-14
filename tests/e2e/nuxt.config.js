import path from "node:path";

const rootNuxtConfigPath = path.resolve(import.meta.dirname, "../..", "nuxt.config.js");

export default defineNuxtConfig({
  extends: [rootNuxtConfigPath],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
})
