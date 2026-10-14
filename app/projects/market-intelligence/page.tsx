import { ProjectCaseStudyShell } from "@/components/ui/project-case-study-shell";

export const metadata = { title: "Market Intelligence System" };

export default function MarketIntelligencePage() {
  return (
    <ProjectCaseStudyShell
      status="System Design · Pre-Implementation"
      eyebrow="Market intelligence & decision support"
      title="Market Intelligence System"
      subtitle="Turning fragmented local market information into trustworthy pricing, inventory, and restocking intelligence for small retailers."
      description="A planned location-aware decision-support platform for small independent Dangote Cement retailers, initially focused on Olori Community / Someke and the wider Obafemi Owode area in Ogun State."
      tags={["Applied AI", "NestJS", "PostgreSQL", "Statistical Intelligence", "Decision Support", "PWA"]}
      sections={[
        { title: "The problem", body: "Small retailers often make pricing and restocking decisions using fragmented information from distributor quotes, conversations with other merchants, sales activity, and market rumours. The system is designed to turn those signals into structured, local, and evidence-backed intelligence." },
        { title: "No single market price", body: "The design separates distributor quotations, retail selling prices, and bulk-retail prices rather than collapsing them into one vague number. Local estimates are intended to use medians, typical ranges, recency, corroboration, and confidence, with clear geographic scope." },
        { title: "Trust architecture", body: "Merchant observations are weighted through verification, recency, independent corroboration, geographic relevance, reporting history, outlier checks, optional supporting evidence, and suspicious-pattern detection. The system aggregates evidence rather than treating any individual report as market truth." },
        { title: "Intelligence layers", body: "Deterministic business logic handles inventory maths and margins; statistical methods handle market ranges, price pressure, outliers, and confidence; an LLM layer is reserved for extraction, summarisation, explanation, and later Q&A. Future machine learning may estimate UP / STABLE / DOWN probabilities after sufficient proprietary historical data exists." },
        { title: "Planned architecture", body: "The planned stack combines Next.js, React, TypeScript, NestJS, REST/OpenAPI, PostgreSQL, Supabase, Drizzle, Redis, BullMQ, pgvector, and an offline-friendly PWA strategy. The design deliberately remains pre-implementation until the data, trust, product, and intelligence architecture are sufficiently defined." },
      ]}
    />
  );
}
