// Prints the built /cv and /cv/es pages to public/cv/Rafael_Rojas_CV_{EN,ES}.pdf.
// Run `npm run cv:pdf` after changing src/data/cv.ts, then commit the PDF.
// Uses the Chromium that Playwright already installed; set CHROME to override.
import { createServer } from "node:http";
import { readFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { extname, join, resolve } from "node:path";
import { homedir } from "node:os";

const root = resolve("dist");
const targets = [
  { page: "/cv/", out: resolve("public/cv/Rafael_Rojas_CV_EN.pdf") },
  { page: "/cv/es/", out: resolve("public/cv/Rafael_Rojas_CV_ES.pdf") },
];

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

async function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  const cache = join(homedir(), ".cache/ms-playwright");
  const dirs = (await readdir(cache)).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse();
  for (const d of dirs) {
    for (const sub of ["chrome-linux64", "chrome-linux"]) {
      const bin = join(cache, d, sub, "chrome");
      if (existsSync(bin)) return bin;
    }
  }
  throw new Error("No Chromium found. Run `npx playwright install chromium` or set CHROME.");
}

for (const { page } of targets) {
  if (!existsSync(join(root, page, "index.html"))) {
    throw new Error(`dist${page}index.html is missing. Run \`npm run build\` first.`);
  }
}

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { "Content-Type": types[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const { port } = server.address();

try {
  await mkdir(resolve("public/cv"), { recursive: true });
  const chrome = await findChrome();
  for (const { page, out } of targets) {
    // Async on purpose: a sync call would block the server Chrome is reading from.
    await promisify(execFile)(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      `--print-to-pdf=${out}`,
      `http://127.0.0.1:${port}${page}`,
    ]);
    console.log(`Wrote ${out}`);
  }
} finally {
  server.close();
}
