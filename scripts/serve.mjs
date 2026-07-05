import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4173);
const config = {
  githubUrl: process.env.VITE_GITHUB_URL || "https://github.com/tappat225/CapOwn"
};

const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);

  if (url.pathname === "/config.js") {
    res.writeHead(200, { "content-type": mime[".js"] });
    res.end(`window.CAPOWN_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
    return;
  }

  const rawPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(decodeURIComponent(rawPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);
  const publicPath = join(root, "public", safePath);

  try {
    let finalPath = filePath;
    let info;

    try {
      info = await stat(finalPath);
    } catch {
      finalPath = publicPath;
      info = await stat(finalPath);
    }

    finalPath = info.isDirectory() ? join(finalPath, "index.html") : finalPath;
    const body = await readFile(finalPath);
    res.writeHead(200, {
      "content-type": mime[extname(finalPath)] || "application/octet-stream"
    });
    res.end(body);
  } catch {
    const body = await readFile(join(root, "index.html"));
    res.writeHead(200, { "content-type": mime[".html"] });
    res.end(body);
  }
});

server.listen(port, () => {
  console.log(`CapOwn pages dev server: http://localhost:${port}`);
});
