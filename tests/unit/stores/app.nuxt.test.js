
import { beforeEach, describe, expect, expectTypeOf, test, vi } from "vitest";
import { useAppStore } from "~/stores/app.js";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";

const pinia = createTestingPinia({
  stubActions: false,
  createSpy: vi.fn,
});
setActivePinia(pinia);

describe("app store", () => {
  describe("state", () => {
    test("initial state", () => {
      const appStore = useAppStore();
      expectTypeOf(appStore.test).toBeString();
      expect(appStore.test).toBe("This is a test value from the app store!");
    });
  });

});