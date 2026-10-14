import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:rgba(248,249,252,0.88)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <Link className="group flex items-center gap-3" href="/" aria-label="Faramade Michael Ayeni — Home">
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--line-strong)] bg-white text-sm font-bold text-[var(--ink)] shadow-sm transition group-hover:-translate-y-0.5">
            FA
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] text-[var(--ink)] sm:block">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="button button-quiet hidden sm:inline-flex" href={siteConfig.cv} target="_blank" rel="noreferrer">
            Academic CV
          </a>
          <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
            Contact
          </a>

          <details className="relative md:hidden">
            <summary className="button button-quiet cursor-pointer list-none">Menu</summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-xl">
              {navigation.map((item) => (
                <Link className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <a className="mt-1 block rounded-xl px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]" href={siteConfig.cv} target="_blank" rel="noreferrer">
                Academic CV
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
