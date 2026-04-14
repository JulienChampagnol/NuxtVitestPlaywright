import { beforeAll, describe, expect, test } from "vitest";
import { page } from "@vitest/browser/context";
import { setup } from "@nuxt/test-utils/e2e";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path to your actual Nuxt test application
const testAppRoot = path.resolve(__dirname, ".");   // since the test is inside tests/e2e

beforeAll(async () => {
  console.log("Starting Nuxt dev server for the test app at:", testAppRoot);

  await setup({
    rootDir: testAppRoot,
    server: true,
    dev: true,
    browser: true,
  });

  console.log("Nuxt server ready → navigating to http://localhost:3000");
  await page.goto("http://localhost:3000/", { timeout: 30_000 });
}, 90_000);

describe("Dumb test", () => {
  test("test", async () => {
    console.log("Running real browser test...");
    expect(true).toBe(true);
  });
});