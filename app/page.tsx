import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusPill } from "@/components/ui/status-pill";
import { TagList } from "@/components/ui/tag-list";
import { TaraPipeline } from "@/components/diagrams/tara-pipeline";
import { projects } from "@/data/projects";
import { tara } from "@/data/research";
import { siteConfig } from "@/data/site";

const focusAreas = [
  ["Applied Artificial Intelligence", "Turning AI and machine-learning capabilities into useful systems for real-world problems."],
  ["Intelligent Systems", "Designing software that analyses information, identifies patterns, and supports human decisions."],
  ["Speech & Language AI", "Exploring automatic speech recognition, NLP, and technology for under-resourced languages."],
  ["AI-Enabled Decision Support", "Applying intelligent systems to education, markets, careers, and other data-intensive domains."],
];

export default function Home() {
  return (
    <>
     <section className="container-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">
        <div>
          <p className="eyebrow">Faramade Michael Ayeni</p>
          <h1 className="display-title mt-5">Building intelligent systems that move AI into practice.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            First-Class Computer Science graduate working across Applied AI, intelligent systems, speech and language technologies, and research-driven software engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button button-primary" href="/research/tara">Explore Research</Link>
            <Link className="button button-secondary" href="/projects">View Projects</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className="text-link" href={siteConfig.cv} target="_blank" rel="noreferrer">Academic CV</a>
            <a className="text-link" href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <aside className="card p-6 sm:p-8">
          <p className="eyebrow">Current focus</p>
          <div className="mt-6 space-y-5">
            {[
              "Applied AI & Intelligent Systems",
              "Low-Resource Speech & Language AI",
              "AI-Enabled Decision Support",
              "Research-to-Product Engineering",
            ].map((item, index) => (
              <div className="flex gap-4 border-b border-[var(--line)] pb-5 last:border-0 last:pb-0" key={item}>
                <span className="text-xs font-bold text-[var(--accent-strong)]">0{index + 1}</span>
                <p className="font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white/55" id="focus">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Research & technical interests"
            title="Applied AI with a systems mindset."
            description="My interests sit at the point where machine learning, data, and software engineering become complete systems that people can actually use."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {focusAreas.map(([title, body]) => (
              <article className="card p-6 sm:p-7" key={title}>
                <h3 className="text-lg font-bold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="research">
        <div className="container-shell">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="min-w-0">
              <p className="eyebrow">Featured research</p>
              <div className="mt-4"><StatusPill>{tara.status}</StatusPill></div>
              <h2 className="section-title mt-5">{tara.name} — {tara.fullName}</h2>
              <p className="mt-4 text-lg font-semibold leading-7 text-[var(--ink)]">{tara.subtitle}</p>
              <p className="section-copy mt-5">{tara.summary}</p>
              <div className="mt-6"><TagList tags={tara.tags} /></div>
              <div className="mt-8">
                <Link className="button button-primary" href="/research/tara">Read Research Case Study</Link>
              </div>
            </div>

            <div className="card min-w-0 overflow-hidden p-5 sm:p-7">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {tara.metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <p className="metric-value">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {tara.results.map((metric) => (
                  <div className="rounded-2xl bg-[var(--surface)] p-4" key={metric.short}>
                    <p className="text-xs font-bold text-[var(--accent-strong)]">{metric.short}</p>
                    <p className="mt-2 text-2xl font-bold tracking-[-0.03em]">{metric.value}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-[var(--line)] pt-7">
                <p className="mb-4 text-sm font-bold">Research pipeline</p>
                <TaraPipeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white/55" id="projects">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Selected intelligent systems"
            title="Different problems. One applied-AI direction."
            description="These systems explore explainable academic planning, local market intelligence, career discovery, and the software foundations needed to turn ideas into usable products."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link className="card card-hover flex min-h-[25rem] flex-col p-6 sm:p-7" href={project.href} key={project.slug}>
                <StatusPill>{project.status}</StatusPill>
                <div className="mt-auto pt-16">
                  <p className="text-sm font-semibold text-[var(--accent-strong)]">{project.kicker}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em]">{project.name}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
                  <div className="mt-5"><TagList tags={project.tags.slice(0, 3)} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="eyebrow">Software engineering</p>
            <h2 className="section-title mt-4">AI is stronger when it can become a complete system.</h2>
          </div>
          <article className="card p-7 sm:p-9">
            <StatusPill>Built & Deployed</StatusPill>
            <h3 className="mt-5 text-3xl font-bold tracking-[-0.04em]">TechSphere</h3>
            <p className="mt-3 text-sm font-semibold text-[var(--accent-strong)]">Full-Stack Technology Publishing Platform</p>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
              A full-stack publishing platform with authentication, session management, author controls, rich-text content creation, MongoDB persistence, and external technology-news integration.
            </p>
            <div className="mt-6"><TagList tags={["Node.js", "Express", "MongoDB", "EJS", "REST APIs"]} /></div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button button-secondary" href="/projects/techsphere">View Case Study</Link>
              <a className="button button-quiet" href="https://techsphere-7fak.onrender.com" target="_blank" rel="noreferrer">Live Site</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white/55">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <article className="card p-7 sm:p-9">
            <p className="eyebrow">Experience</p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em]">Software Development Intern</h2>
            <p className="mt-2 font-semibold text-[var(--accent-strong)]">Lagos State Ministry of Innovation, Science and Technology</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Application Department — Oracle Unit · Sep 2025 – Feb 2026</p>
            <p className="mt-5 leading-8 text-[var(--muted)]">Practical full-stack experience across frontend development, backend logic, databases, APIs, debugging, and version-control workflows.</p>
          </article>
          <article className="card p-7 sm:p-9">
            <p className="eyebrow">Education</p>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em]">B.Sc. Computer Science</h2>
            <p className="mt-2 font-semibold text-[var(--accent-strong)]">Kwara State University, Malete, Nigeria</p>
            <p className="mt-1 text-sm text-[var(--muted)]">2023 – 2026</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[var(--surface)] p-4"><p className="text-2xl font-bold">4.84/5.00</p><p className="mt-1 text-xs text-[var(--muted)]">CGPA</p></div>
              <div className="rounded-2xl bg-[var(--surface)] p-4"><p className="text-2xl font-bold">First Class</p><p className="mt-1 text-xs text-[var(--muted)]">Degree classification</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space" id="contact">
        <div className="container-shell">
          <div className="card overflow-hidden p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Contact</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="section-title max-w-3xl">Interested in Applied AI, intelligent systems, or research collaboration?</h2>
                <p className="section-copy mt-5 max-w-2xl">I am interested in graduate research opportunities and technical collaborations across Applied AI, machine learning, intelligent systems, and speech and language technologies.</p>
              </div>
              <a className="button button-primary" href={`mailto:${siteConfig.email}`}>Email Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
