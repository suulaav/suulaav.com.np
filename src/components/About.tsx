import { personal } from "@/data/portfolio";

const tools = ["Wildfly", "Jenkins", "Nginx", "Docker", "SonarQube", "Confluence / Jira", "Postman"];
const languages = ["Nepali — Native", "English — Fluent", "Hindi — Fluent"];

export default function About() {
  return (
    <section id="about" className="bg-cream-mid border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">§ 01</span>
          <div className="h-px flex-1 bg-border" />
          <span
            className="text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            ABOUT
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1px_320px] gap-0">
          {/* Left: Bio */}
          <div className="pr-0 lg:pr-12 mb-10 lg:mb-0">
            <h2
              className="text-4xl lg:text-5xl text-ink mb-6 leading-tight"
              style={{ fontFamily: "var(--font-vt323)" }}
            >
              Building robust systems
              <br />
              <span className="text-rose">that actually ship.</span>
            </h2>
            <p className="text-sm text-ink-mid font-body leading-relaxed mb-5">
              {personal.bio}
            </p>
            <p className="text-sm text-ink-light font-body leading-relaxed mb-6">
              I specialize in Java and Spring Boot ecosystems — from greenfield system design
              to performance tuning running JVMs at scale. I&apos;ve shipped production systems
              serving users across the United States, Australia, and Nepal.
            </p>

            {/* Pullquote */}
            <div className="border-t-2 border-b border-border py-5 mb-8">
              <p
                className="text-[clamp(20px,2.5vw,28px)] text-ink leading-snug text-center"
                style={{ fontFamily: "var(--font-vt323)" }}
              >
                &ldquo;I ship systems that survive the rewrite,
                <br />
                the scale-up, and the team that comes after.&rdquo;
              </p>
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body text-center mt-3">
                — Engineering philosophy
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-3">
                Location
              </p>
              <p className="text-sm text-ink font-body">{personal.location}</p>
            </div>

            <div className="mt-5">
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-3">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l} className="text-xs font-body text-ink-mid border border-border-light px-2 py-1 bg-cream">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-border-light mx-0" />

          {/* Right: Tools + Courses */}
          <div className="pl-0 lg:pl-12">
            <div className="mb-8">
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-4">
                Tools & Platforms
              </p>
              <div className="flex flex-col gap-2">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-amber shrink-0" />
                    <span className="text-sm font-body text-ink-mid">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border-light pt-8">
              <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-4">
                Certifications
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Google Data Analytics",
                  "Data Science Methodology",
                  "Python for Data Science and AI",
                ].map((c) => (
                  <div key={c} className="text-xs font-body text-ink-mid leading-relaxed">
                    <span className="text-ink-muted mr-2">—</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border-light pt-8 mt-8">
              <div className="p-4 border border-border-light bg-cream dot-matrix-light relative">
                <div className="relative z-10 bg-cream/80 p-2">
                  <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-1">
                    Currently
                  </p>
                  <p className="text-sm font-body text-ink leading-relaxed">
                    Sr. Backend Engineer at Aricalot Technology, Kathmandu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
