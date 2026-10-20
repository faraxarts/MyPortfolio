import Link from "next/link";
import { projects } from "@/data/projects";
import { StatusPill } from "@/components/ui/status-pill";
import { TagList } from "@/components/ui/tag-list";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="container-shell section-space">
      <p className="eyebrow">Projects</p>

      <h1 className="section-title mt-4 max-w-5xl">
        Intelligent systems and software engineered around real problems.
      </h1>

      <p className="section-copy mt-5 max-w-3xl">
        Each project is labelled by its real maturity so that functional work,
        active development, and deployed systems remain clearly distinguishable.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            className="card card-hover flex min-h-[24rem] min-w-0 flex-col p-7"
            href={project.href}
            key={project.slug}
          >
            <StatusPill>{project.status}</StatusPill>

            <div className="mt-auto pt-14">
              <p className="text-sm font-semibold text-[var(--accent-strong)]">
                {project.kicker}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em]">
                {project.name}
              </h2>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6">
                <TagList tags={project.tags} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}