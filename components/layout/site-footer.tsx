import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell flex flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-[var(--ink)]">{siteConfig.name}</p>
          <p className="mt-1">Applied AI · Intelligent Systems · AI Research · Software Engineering</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="text-link" href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-link" href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
