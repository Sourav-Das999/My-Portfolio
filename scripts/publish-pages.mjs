import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = resolve(rootDir, "dist");
const assetsDir = resolve(rootDir, "assets");

rmSync(assetsDir, { recursive: true, force: true });
mkdirSync(assetsDir, { recursive: true });
cpSync(resolve(distDir, "assets"), assetsDir, { recursive: true });
const indexHtml = readFileSync(resolve(distDir, "index.html"), "utf8").replace(
  /\r\n?/g,
  "\n",
);
writeFileSync(resolve(rootDir, "index.html"), indexHtml);
