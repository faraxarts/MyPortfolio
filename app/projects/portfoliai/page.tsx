import { ProjectCaseStudyShell } from "@/components/ui/project-case-study-shell";

export const metadata = { title: "Portfolio Generator" };

export default function PortfolioGeneratorPage() {
  return (
    <ProjectCaseStudyShell
      status="Product Architecture · Active Development"
      eyebrow="Generative AI & professional identity"
      title="Portfolio Generator"
      subtitle="Turning scattered career evidence into a clear professional identity and a publishable digital portfolio."
      description="An AI-powered career discovery and portfolio platform currently under active development for students, graduates, early-career professionals, job seekers, career switchers, freelancers, and researchers."
      tags={["Generative AI", "LLM Systems", "Next.js", "PostgreSQL", "Structured Outputs", "Multi-Tenant Architecture"]}
      sections={[
        {
          title: "The problem",
          body: "Most portfolio builders assume users already know what makes them professionally valuable. Portfolio Generator treats professional discovery as part of the product, helping users identify evidence-backed strengths before generating polished portfolio content."
        },
        {
          title: "Career DNA",
          body: "The central intelligence object is a structured Career DNA built from CVs, manual information, and adaptive discovery interviews. It captures evidence, recurring strengths, work patterns, professional themes, confidence, and missing evidence before career positioning begins."
        },
        {
          title: "Multi-stage AI pipeline",
          body: "The system is deliberately not one giant prompt. Inputs move through normalisation, evidence extraction, skill and behaviour extraction, cross-evidence pattern detection, missing-evidence analysis, adaptive questions, Career DNA, user confirmation, career positioning, content generation, and finally deterministic rendering."
        },
        {
          title: "AI boundaries",
          body: "LLMs handle semantic tasks such as extraction, classification, pattern recognition, rewriting, positioning, follow-up questions, and structured profile generation. Deterministic application logic handles identity, permissions, layouts, themes, publishing, routing, versioning, visibility, and exports."
        },
        {
          title: "Platform architecture",
          body: "The product architecture uses Next.js, React, TypeScript, Tailwind, shadcn/ui, PostgreSQL, Supabase Auth and Storage, Zod-validated structured outputs, provider-abstracted AI services, and multi-tenant hosting with user portfolio subdomains. pgvector remains optional until semantic retrieval is genuinely useful."
        },
      ]}
    />
  );
}