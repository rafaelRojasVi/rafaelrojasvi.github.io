import type { APIRoute } from "astro";
import { cvEn } from "@/data/cv";
import { cvMarkdown, markdownResponse } from "@/lib/cv-markdown";

export const GET: APIRoute = () => markdownResponse(cvMarkdown(cvEn));
