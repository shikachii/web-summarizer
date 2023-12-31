import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig((opt) => {
  return {
    root: "src",
    build: {
      outDir: "../dist",
      rollupOptions: {
        input: {
          content: resolve(__dirname, "src/content.ts"),
          popup: resolve(__dirname, "src/popup.html"),
        },
        output: {
          entryFileNames: "[name].js",
        },
      },
    },
  };
});
