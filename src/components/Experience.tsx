import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">§ 02</span>
          <div className="h-px flex-1 bg-border" />
          <span
            className="text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            WORK EXPERIENCE
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border-light" />
            {experience.map((job, i) => (
              <div key={i} className="relative pl-10 pb-12 last:pb-0">
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 border border-border bg-cream flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-rose" />
                </div>

                <div className="grid sm:grid-cols-[1fr_auto] gap-2 mb-3">
                  <div>
                    <h3
                      className="text-3xl text-ink leading-tight"
                      style={{ fontFamily: "var(--font-vt323)" }}
                    >
                      {job.role}
                    </h3>
                    <p className="text-sm font-body text-rose mt-0.5 font-bold">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-body text-ink-light tracking-wide whitespace-nowrap">
                      {job.period}
                    </p>
                    <p className="text-xs font-body text-ink-muted mt-0.5">{job.location}</p>
                  </div>
                </div>

                <p className="text-sm font-body text-ink-mid leading-relaxed mb-3">
                  {job.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-body text-ink-light">
                      <span className="mt-2 w-1.5 h-px bg-border shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education sidebar */}
          <div>
            <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-6">
              Education
            </p>
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-border pl-4">
                  <p className="text-xs font-body text-ink-muted mb-1">{edu.period}</p>
                  <p className="text-sm font-body text-ink leading-snug font-bold">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-body text-ink-light mt-0.5">{edu.degree}</p>
                </div>
              ))}
            </div>

            {/* Decorative newspaper clipping box */}
            <div className="mt-10 border border-border p-5 relative overflow-hidden">
              <div className="absolute inset-0 dot-matrix-light" />
              <div className="relative z-10">
                <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-3">
                  By the numbers
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { n: "4+", l: "Years in backend" },
                    { n: "7+", l: "Production systems" },
                    { n: "3", l: "Countries served" },
                    { n: "1000s", l: "Users on Pacesetter" },
                  ].map((s) => (
                    <div key={s.l} className="flex justify-between items-baseline">
                      <span className="text-xs font-body text-ink-mid">{s.l}</span>
                      <span
                        className="text-xl text-ink"
                        style={{ fontFamily: "var(--font-vt323)" }}
                      >
                        {s.n}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
