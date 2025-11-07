import { defineConfig } from "@rslib/core";
import { pluginYaml } from "@rsbuild/plugin-yaml";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  lib: [
    {
      format: "cjs",
      syntax: "es5",
      dts: true,
    },
  ],
  resolve: {
    alias: { "@": "./src" },
  },
  plugins: [pluginYaml()],
});
