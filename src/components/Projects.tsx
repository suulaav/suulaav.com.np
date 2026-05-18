import { projects } from "@/data/portfolio";

const statusColor: Record<string, string> = {
  Production: "text-sage",
  "In Development": "text-amber",
};

function getStatusColor(status: string) {
  for (const [key, val] of Object.entries(statusColor)) {
    if (status.startsWith(key)) return val;
  }
  return "text-ink-muted";
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-cream-mid border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">§ 03</span>
          <div className="h-px flex-1 bg-border" />
          <span
            className="halftone-text text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            SELECTED WORK
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured project */}
        <div className="border border-border bg-cream mb-6 p-6 sm:p-8 grid sm:grid-cols-[1fr_200px] gap-8">
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body">
                Featured
              </p>
              <span className={`stamp text-[9px] tracking-widest uppercase font-body ${getStatusColor(featured.status)}`}>
                {featured.status}
              </span>
            </div>
            <h3
              className="halftone-text text-4xl text-ink mb-1"
              style={{ fontFamily: "var(--font-vt323)" }}
            >
              {featured.title}
            </h3>
            <p className="text-xs font-body text-ink-light italic mb-4">{featured.subtitle}</p>
            <p className="text-sm font-body text-ink-mid leading-relaxed mb-5">
              {featured.description}
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {featured.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-body text-ink-light">
                  <span className="mt-1.5 w-1.5 h-px bg-border-light shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-[10px] font-body tracking-widest uppercase border border-border-light text-ink-mid">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right decorative panel */}
          <div className="hidden sm:flex flex-col border-l border-border-light pl-8 gap-4">
            <div className="flex-1 relative border border-border-light overflow-hidden">
              <div className="absolute inset-0 dot-matrix" style={{ opacity: 0.4 }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-5xl text-ink/20"
                  style={{ fontFamily: "var(--font-vt323)" }}
                >
                  {featured.title[0]}
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-body text-ink-muted tracking-widest uppercase">
                United States
              </p>
            </div>
          </div>
        </div>

        <hr className="cut-line my-6" />

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {rest.map((project) => (
            <div
              key={project.title}
              className="bg-cream p-6 flex flex-col hover:bg-cream-mid transition-all duration-150 hover:shadow-[3px_3px_0_#C4BAA8]"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`stamp text-[9px] tracking-widest uppercase font-body ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-body text-ink-muted hover:text-ink tracking-widest uppercase"
                  >
                    Live ↗
                  </a>
                )}
              </div>

              <h3
                className="halftone-text text-2xl text-ink mb-0.5"
                style={{ fontFamily: "var(--font-vt323)" }}
              >
                {project.title}
              </h3>
              <p className="text-[10px] font-body text-ink-muted italic mb-1">{project.subtitle}</p>
              {"dateline" in project && (
                <p className="text-[10px] font-body text-ink-muted tracking-widest uppercase mb-4">
                  {(project as typeof project & { dateline: string }).dateline}
                </p>
              )}

              <p className="text-xs font-body text-ink-light leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="flex flex-col gap-1.5 mb-5 flex-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] font-body text-ink-light">
                    <span className="mt-1.5 w-1.5 h-px bg-border-light shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-light">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-body text-ink-muted tracking-wide">
                    {t}
                  </span>
                )).reduce((acc, el, i) => {
                  if (i > 0) acc.push(<span key={`sep-${i}`} className="text-[10px] text-ink-muted">·</span>);
                  acc.push(el);
                  return acc;
                }, [] as React.ReactNode[])}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
