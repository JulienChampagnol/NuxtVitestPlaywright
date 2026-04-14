// Third party imports
import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

// Local imports

import SimpleComponent from "../../../app/components/SimpleComponent.vue";


const CALLED_TIMES = 1;

describe(SimpleComponent, () => {
  const pinia = createTestingPinia({
    stubActions: false,
    createSpy: vi.fn,
  });
  test(`Test reload`, async () => {
    const wrapper = mount(SimpleComponent, {
      global: {
        plugins: [pinia],
      },
    });

  });
});
