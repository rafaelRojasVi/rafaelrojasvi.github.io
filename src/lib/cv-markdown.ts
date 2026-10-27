import { SITE, type Cv } from "@/data/cv";

/** The CV as plain Markdown, for applicant-tracking systems and agents. */
export function cvMarkdown(cv: Cv): string {
  const L = cv.labels;
  const lines: string[] = [
    `# ${cv.name}`,
    "",
    `${cv.title} · ${cv.location} · ${cv.availability}`,
    "",
    `- Email: ${cv.email}`,
    ...cv.phones.map((p) => `- Phone: ${p}`),
    ...cv.links.map((l) => `- ${l.label}: ${l.href}`),
    `- PDF: ${SITE}${cv.pdf}`,
    "",
    `## ${L.summary}`,
    "",
    cv.summary,
    "",
    `## ${L.expertise}`,
    "",
    ...cv.expertise.map((x) => `- ${x.area}: ${x.detail}`),
    "",
    `## ${L.experience}`,
    "",
  ];

  for (const r of cv.experience) {
    lines.push(`### ${r.title}, ${r.org}`, "", `${r.dates} · ${r.location}`, "", r.context, "");
    for (const b of r.bullets) lines.push(`- ${b}`);
    if (r.caseStudy) lines.push("", `${L.caseStudy}: ${SITE}${r.caseStudy}`);
    lines.push("");
  }

  lines.push(`## ${L.projects}`, "");
  for (const p of cv.projects) {
    lines.push(`### ${p.name}, ${p.stack}`, "", p.summary, "", `${SITE}${p.href}`, "");
  }

  lines.push(`## ${L.education}`, "");
  for (const e of cv.education) {
    lines.push(`### ${e.degree}, ${e.school}`, "", e.dates, "");
    if (e.detail) lines.push(e.detail, "");
  }

  lines.push(`## ${L.skills}`, "");
  for (const s of cv.skills) lines.push(`- ${s.group}: ${s.items}`);
  lines.push("", `## ${L.languages}`, "", cv.languages, "");
  return lines.join("\n");
}

export function markdownResponse(body: string): Response {
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
