import { defineConfig } from "@rslib/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  lib: [
    {
      format: "cjs",
      syntax: "es5",
      autoExternal: false,
    },
  ],
});
