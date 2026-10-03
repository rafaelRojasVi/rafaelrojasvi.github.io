import { projects, type Project } from "@/data/projects";
import github from "@/data/github.generated.json";

export type RepoMeta = {
  name: string;
  url: string;
  private: boolean;
  archived: boolean;
  description: string | null;
  homepage: string | null;
  createdAt: string;
  pushedAt: string;
  stars: number;
  primaryLanguage: string | null;
  languageShare: Record<string, number>;
  topics: string[];
  commits: number;
};

export type ProjectView = Project & {
  index: number;
  folio: string;
  github?: RepoMeta;
  /** Public repository URL, or undefined for private / no repo. */
  repoUrl?: string;
};

const repos = github.repos as Record<string, RepoMeta>;

export const githubSyncedAt: string = github.syncedAt;

export function getAllProjects(): ProjectView[] {
  return projects.map((p, index) => {
    const meta = p.repo ? repos[p.repo] : undefined;
    return {
      ...p,
      index,
      folio: String(index + 1).padStart(2, "0"),
      github: meta,
      repoUrl: p.visibility === "public" && meta ? meta.url : undefined,
      live: p.live ?? (meta?.homepage || undefined),
    };
  });
}

export function getCaseStudies(): ProjectView[] {
  return getAllProjects().filter((p) => p.kind === "case-study");
}

export function getProjectView(slug: string): ProjectView | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

const NON_PROGRAMMING = new Set([
  "Shell",
  "Dockerfile",
  "Makefile",
  "Mako",
  "HTML",
  "CSS",
  "Jupyter Notebook",
]);

/** Programming languages used across all repositories (5%+ of a repo's bytes). */
export function languageTotals(): { name: string; repos: number }[] {
  const counts = new Map<string, number>();
  for (const meta of Object.values(repos)) {
    for (const [lang, share] of Object.entries(meta.languageShare)) {
      if (share < 5 || NON_PROGRAMMING.has(lang)) continue;
      counts.set(lang, (counts.get(lang) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, n]) => ({ name, repos: n }))
    .sort((a, b) => b.repos - a.repos);
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
