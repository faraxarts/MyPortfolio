import { StatusPill } from "@/components/ui/status-pill";
import { TagList } from "@/components/ui/tag-list";

type CaseStudySection = {
  title: string;
  body: string;
};

type ProjectCaseStudyShellProps = {
  status: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  sections: CaseStudySection[];
};

export function ProjectCaseStudyShell({ status, eyebrow, title, subtitle, description, tags, sections }: ProjectCaseStudyShellProps) {
  return (
    <article>
      <header className="container-shell section-space pb-12">
        <StatusPill>{status}</StatusPill>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="section-title mt-4 max-w-5xl">{title}</h1>
        <p className="mt-5 max-w-4xl text-xl font-semibold leading-8 text-[var(--accent-strong)]">{subtitle}</p>
        <p className="section-copy mt-6 max-w-3xl">{description}</p>
        <div className="mt-7"><TagList tags={tags} /></div>
      </header>
      <section className="border-t border-[var(--line)] bg-white/55">
        <div className="container-shell section-space">
          <div className="prose-shell">
            {sections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
