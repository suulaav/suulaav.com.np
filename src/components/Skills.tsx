import { skills } from "@/data/portfolio";

const categoryAccent: Record<string, string> = {
  Backend: "border-l-rose",
  Database: "border-l-amber",
  DevOps: "border-l-slate",
  "Project Tools": "border-l-sage",
  "AI & Data": "border-l-ink-muted",
};

const barColor: Record<string, string> = {
  Backend: "bg-rose",
  Database: "bg-amber",
  DevOps: "bg-slate",
  "Project Tools": "bg-sage",
  "AI & Data": "bg-ink-light",
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
            className="text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            SKILLS & TOOLS
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const accent = categoryAccent[category] ?? "border-l-border";
            const bar = barColor[category] ?? "bg-ink";
            return (
              <div key={category} className={`border border-border bg-cream-mid p-6 border-l-2 ${accent}`}>
                <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-5">
                  {category}
                </p>
                <div className="flex flex-col gap-3.5">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-body text-ink-mid">{skill.name}</span>
                        <span className="text-[10px] font-body text-ink-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full h-0.5 bg-border-light">
                        <div className={`h-0.5 ${bar}`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
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
