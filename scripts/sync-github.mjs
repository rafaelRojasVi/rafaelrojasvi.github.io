#!/usr/bin/env node
/**
 * Sync GitHub repository metadata into src/data/github.generated.json.
 *
 * Uses the authenticated `gh` CLI so private repositories are included.
 * The JSON is committed, so the GitHub Pages build never needs a token.
 *
 *   npm run sync:github
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const OWNER = "rafaelRojasVi";
const OUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/github.generated.json",
);

function gh(args) {
  return execFileSync("gh", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

function ghJson(endpoint) {
  return JSON.parse(gh(["api", endpoint]));
}

function commitCount(name) {
  // Read the `last` page number from the Link header with per_page=1.
  const raw = gh(["api", `repos/${OWNER}/${name}/commits?per_page=1`, "-i"]);
  const link = raw.split("\n").find((l) => l.toLowerCase().startsWith("link:"));
  const match = link?.match(/page=(\d+)>; rel="last"/);
  return match ? Number(match[1]) : 1;
}

const repos = JSON.parse(
  gh([
    "repo",
    "list",
    OWNER,
    "--limit",
    "200",
    "--json",
    "name,description,isPrivate,isFork,isArchived,url,homepageUrl,createdAt,pushedAt,stargazerCount,primaryLanguage,repositoryTopics",
  ]),
);

const out = {};
for (const r of repos) {
  if (r.isFork) continue;
  if (r.name === `${OWNER}` || r.name.toLowerCase() === `${OWNER}.github.io`.toLowerCase()) continue;

  const languages = ghJson(`repos/${OWNER}/${r.name}/languages`);
  const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
  const languageShare = Object.fromEntries(
    Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .map(([lang, bytes]) => [lang, Math.round((bytes / totalBytes) * 1000) / 10]),
  );

  out[r.name] = {
    name: r.name,
    url: r.url,
    private: r.isPrivate,
    archived: r.isArchived,
    description: r.description || null,
    homepage: r.homepageUrl || null,
    createdAt: r.createdAt.slice(0, 10),
    pushedAt: r.pushedAt.slice(0, 10),
    stars: r.stargazerCount,
    primaryLanguage: r.primaryLanguage?.name ?? null,
    languageShare,
    topics: (r.repositoryTopics ?? []).map((t) => t.name),
    commits: commitCount(r.name),
  };
  process.stderr.write(`synced ${r.name}\n`);
}

const payload = {
  syncedAt: new Date().toISOString().slice(0, 10),
  owner: OWNER,
  repos: out,
};

writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
process.stderr.write(`wrote ${Object.keys(out).length} repos to ${path.relative(process.cwd(), OUT)}\n`);
