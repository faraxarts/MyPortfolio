import { ProjectCaseStudyShell } from "@/components/ui/project-case-study-shell";

export const metadata = { title: "AcademicGPS" };

export default function AcademicGPSPage() {
  return (
    <ProjectCaseStudyShell
      status="Functional MVP · Active Development"
      eyebrow="Intelligent academic decision support"
      title="AcademicGPS"
      subtitle="Academic performance simulation, target planning, and explainable decision support."
      description="AcademicGPS helps university students understand where they stand, what they need, and what to focus on academically by turning course data, scores, and cumulative records into forward-looking planning insights."
      tags={["Next.js", "React", "TypeScript", "Vitest", "Decision Systems", "Academic Analytics"]}
      sections={[
        { title: "The problem", body: "Traditional GPA calculators answer what a student's GPA is. AcademicGPS is designed to answer the decisions behind the number: what semester GPA is required to reach a target, whether that target is feasible, which courses carry the greatest risk, and what scores are needed next." },
        { title: "The academic engine", body: "Academic logic is deliberately separated from the UI. The engine handles grade calculation, course outcomes, semester GPA, projected CGPA, target-CGPA requirements, minimum-score planning, and feasibility classification. This separation improves testability and keeps the interface from becoming the source of academic rules." },
        { title: "Decision support", body: "The current MVP combines scenario simulation, target feasibility, best-possible CGPA analysis, minimum score planning, exam-score requirements, course-risk classification, and plain-language academic insights. It is deterministic and explainable rather than pretending formula-based calculations are machine learning." },
        { title: "Current scope", body: "The MVP is focused on KWASU Computer Science students across 100L–300L, Harmattan and Rain semesters, using the 5.0 grading scale. Plans can currently be stored locally in the browser, with authentication, PostgreSQL persistence, dashboards, export, and wider department support planned next." },
        { title: "AI evolution", body: "The long-term architecture keeps the deterministic academic engine as the mathematical source of truth while adding AI around interpretation, personalisation, natural-language interaction, and eventually data-driven performance and risk modelling. An LLM should explain verified results rather than calculate or invent them." },
      ]}
    />
  );
}
