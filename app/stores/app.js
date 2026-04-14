
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const test = ref("This is a test value from the app store!");
  return { test };
});
