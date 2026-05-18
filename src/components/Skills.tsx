import { skills } from "@/data/portfolio";

const categoryAccent: Record<string, string> = {
  Backend: "border-l-rose",
  Database: "border-l-amber",
  DevOps: "border-l-slate",
  "Project Tools": "border-l-sage",
  "Data & AI": "border-l-ink-muted",
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
            return (
              <div key={category} className={`border border-border bg-cream-mid p-6 border-l-2 ${accent}`}>
                <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-body text-ink-mid border border-border-light bg-cream hover:bg-cream-dark transition-colors duration-150"
                    >
                      {skill}
                    </span>
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
