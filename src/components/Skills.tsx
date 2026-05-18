import { skills } from "@/data/portfolio";

const categoryColor: Record<string, string> = {
  Backend: "text-rose",
  Database: "text-amber",
  DevOps: "text-slate",
  "Project Tools": "text-sage",
  "AI & Data": "text-ink-light",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">§ 04</span>
          <div className="h-px flex-1 bg-border" />
          <span
            className="halftone-text text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            SKILLS & TOOLS
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex justify-center mb-10">
          <span className="text-[9px] text-ink-muted tracking-widest uppercase font-body border border-border-light px-3 py-1">
            ■ Advertisement
          </span>
        </div>

        <div className="flex flex-col">
          {Object.entries(skills).map(([category, items], i) => {
            const color = categoryColor[category] ?? "text-ink";
            return (
              <div key={category} className={`py-6 ${i > 0 ? "border-t border-border-light" : ""}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`halftone-text text-xl shrink-0 ${color}`}
                    style={{ fontFamily: "var(--font-vt323)" }}
                  >
                    {category.toUpperCase()}
                  </span>
                  <div className="h-px flex-1 bg-border-light" />
                </div>
                <p className="text-sm font-body text-ink-mid leading-relaxed">
                  {items.map((skill, j) => (
                    <span key={skill.name}>
                      {j > 0 && <span className="text-ink-muted mx-1.5">·</span>}
                      {skill.name}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dot-matrix decorative divider */}
        <div className="mt-12 h-8 relative overflow-hidden border-t border-b border-border-light">
          <div className="absolute inset-0 dot-matrix-light" />
        </div>
      </div>
    </section>
  );
}
