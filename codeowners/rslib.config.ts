import { defineConfig } from "@rslib/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  lib: [
    {
      format: "cjs",
      syntax: "esnext",
    },
  ],
  resolve: {
    alias: { "@": "./src" },
  },
});
