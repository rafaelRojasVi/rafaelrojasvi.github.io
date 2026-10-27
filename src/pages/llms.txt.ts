import type { APIRoute } from "astro";
import { cv, SITE } from "@/data/cv";

/** Index for language models and agents (llmstxt.org). */
export const GET: APIRoute = () => {
  const body = `# ${cv.name}

> ${cv.title} in ${cv.location}. CTO of OrigenLab and BENKER; geospatial platform engineer for Campo Digital.

## CV

- [CV (Markdown)](${SITE}/cv.md): full CV as plain Markdown
- [CV (PDF)](${SITE}/cv/Rafael_Rojas_CV_EN.pdf): the same CV as a two-page PDF
- [CV en español (Markdown)](${SITE}/cv/es.md): the CV in Spanish
- [CV en español (PDF)](${SITE}/cv/Rafael_Rojas_CV_ES.pdf): the Spanish CV as a PDF

## Work

${cv.experience
  .filter((r) => r.caseStudy)
  .map((r) => `- [${r.org}](${SITE}${r.caseStudy}): ${r.context}`)
  .join("\n")}
- [All projects](${SITE}/projects): every public and private repository, described

## Contact

- Email: ${cv.email}
${cv.links.map((l) => `- ${l.label}: ${l.href}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
