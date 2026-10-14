import Link from "next/link";
import { StatusPill } from "@/components/ui/status-pill";
import { TagList } from "@/components/ui/tag-list";
import { tara } from "@/data/research";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <section className="container-shell section-space">
      <p className="eyebrow">Research</p>
      <h1 className="section-title mt-4 max-w-4xl">Research focused on intelligent systems for real-world, resource-constrained problems.</h1>
      <div className="card card-hover mt-12 grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto]">
        <div>
          <StatusPill>{tara.status}</StatusPill>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">{tara.name} — {tara.fullName}</h2>
          <p className="mt-3 font-semibold text-[var(--accent-strong)]">{tara.subtitle}</p>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--muted)]">{tara.summary}</p>
          <div className="mt-6"><TagList tags={tara.tags} /></div>
        </div>
        <div className="self-end"><Link className="button button-primary" href="/research/tara">Open Case Study</Link></div>
      </div>
    </section>
  );
}
