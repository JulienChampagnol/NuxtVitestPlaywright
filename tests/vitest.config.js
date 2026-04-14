import path from "node:path";

import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";
import { playwright } from "@vitest/browser-playwright";
import vue from "@vitejs/plugin-vue";

const __dirname = import.meta.dirname;

const RETRIES = 3;
const DEFAULT_RETRY = 0;
const TIMEOUTS = {
  unit: 5000,
  e2e: 90_000,
};

const globalRetry = process.env.CI ? RETRIES : DEFAULT_RETRY;
const setupIndexedDB = path.resolve(__dirname, "./setup_indexeddb.js");

const repoRoot = path.resolve(__dirname, "..");
const commonTestConfig = {
  retry: globalRetry,
};

const e2eAppPath = path.resolve(__dirname, "e2e");
console.log("E2E Test App Path:", e2eAppPath);

export default defineConfig({
  test: {
    ...commonTestConfig,
    projects: [
      await defineVitestProject({
        environments: {
          client: {
            noExternal: false,
            external: ["@nuxt/test-utils", "bun:test"],
          },
        },
        plugins: [vue()],
        test: {
          name: "e2e",
          extends: true,
          include: ["tests/e2e/**/*.test.js"],
          testTimeout: TIMEOUTS.e2e,
          browser: {
            enabled: true,
            provider: playwright(),
            headless: false,
            instances: [{ browser: "chromium" }],
            connectTimeout: 60_000,
          },
        },
      }),
      await defineVitestProject({
        test: {
          name: "unit",
          extends: true,
          include: ["tests/unit/**/*.test.js"],
          environment: "nuxt",
          testTimeout: TIMEOUTS.unit,
        },
      }),
    ],
  },
});
