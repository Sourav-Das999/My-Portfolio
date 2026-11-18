import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/My-Portfolio/",
  plugins: [react(), tailwindcss()],
  root: resolve(rootDir, "app"),
  build: {
    outDir: resolve(rootDir, "dist"),
    emptyOutDir: true,
  },
});
