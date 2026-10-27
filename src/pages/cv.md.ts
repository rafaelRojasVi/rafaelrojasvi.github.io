import type { APIRoute } from "astro";
import { cv, SITE } from "@/data/cv";

/** The CV as plain Markdown, for applicant-tracking systems and agents. */
export const GET: APIRoute = () => {
  const lines: string[] = [
    `# ${cv.name}`,
    "",
    `${cv.title} · ${cv.location} · ${cv.availability}`,
    "",
    `- Email: ${cv.email}`,
    ...cv.links.map((l) => `- ${l.label}: ${l.href}`),
    `- PDF: ${SITE}/cv/Rafael_Rojas_CV_EN.pdf`,
    "",
    "## Summary",
    "",
    cv.summary,
    "",
    "## Domain expertise",
    "",
    ...cv.expertise.map((x) => `- ${x.area}: ${x.detail}`),
    "",
    "## Experience",
    "",
  ];

  for (const r of cv.experience) {
    lines.push(`### ${r.title}, ${r.org}`, "", `${r.dates} · ${r.location}`, "", r.context, "");
    for (const b of r.bullets) lines.push(`- ${b}`);
    if (r.caseStudy) lines.push("", `Case study: ${SITE}${r.caseStudy}`);
    lines.push("");
  }

  lines.push("## Projects", "");
  for (const p of cv.projects) {
    lines.push(`### ${p.name}, ${p.stack}`, "", p.summary, "", `${SITE}${p.href}`, "");
  }

  lines.push("## Education", "");
  for (const e of cv.education) {
    lines.push(`### ${e.degree}, ${e.school}`, "", e.dates, "");
    if (e.detail) lines.push(e.detail, "");
  }

  lines.push("## Skills", "");
  for (const s of cv.skills) lines.push(`- ${s.group}: ${s.items}`);
  lines.push("", "## Languages", "", cv.languages, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
