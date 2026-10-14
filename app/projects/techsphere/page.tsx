import { ProjectCaseStudyShell } from "@/components/ui/project-case-study-shell";

export const metadata = { title: "TechSphere" };

export default function TechSpherePage() {
  return (
    <ProjectCaseStudyShell
      status="Built & Deployed"
      eyebrow="Full-stack software engineering"
      title="TechSphere"
      subtitle="A complete technology publishing platform spanning content, identity, persistence, and external data."
      description="TechSphere demonstrates the software-engineering foundation behind my AI work: taking a product from interface design through backend logic, data persistence, authentication, and deployment."
      tags={["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "REST APIs"]}
      sections={[
        { title: "System scope", body: "The platform supports technology publishing workflows including authentication, session management, author controls, CRUD operations, rich-text content creation, MongoDB persistence, and integration with an external technology-news source." },
        { title: "Engineering value", body: "The project strengthened my understanding of complete application systems: routing, backend logic, databases, APIs, debugging, security-related session handling, content workflows, and the relationship between frontend experience and server-side behaviour." },
        { title: "Why it belongs here", body: "TechSphere is intentionally positioned as software-engineering evidence rather than as an AI project. It demonstrates that my interest in intelligent systems is supported by practical experience building deployable applications rather than isolated models or notebooks." },
      ]}
    />
  );
}
