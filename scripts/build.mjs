import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "dist");

const config = {
  githubUrl: process.env.VITE_GITHUB_URL || "https://github.com/tappat225/CapOwn"
};

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "index.html"), join(dist, "index.html"));
await cp(join(root, "src"), join(dist, "src"), { recursive: true });
await cp(join(root, "public"), dist, { recursive: true });
await writeFile(
  join(dist, "config.js"),
  `window.CAPOWN_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);

console.log("Built CapOwn static site to dist/");
