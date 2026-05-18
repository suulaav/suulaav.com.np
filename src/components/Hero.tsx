import Image from "next/image";
import { personal, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream pt-14 flex flex-col">
      {/* Masthead bar */}
      <div className="border-b border-border double-ruled">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">
            {personal.location}
          </span>
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">
            Est. 1996 · Vol. I
          </span>
        </div>
      </div>

      {/* Main hero */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

            {/* Left: Name + role + bio + CTAs */}
            <div>
              <div className="mb-4">
                {personal.available && (
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-sage font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    Available for new projects
                  </span>
                )}
              </div>

              <h1
                className="text-[clamp(72px,12vw,144px)] leading-none text-ink mb-2"
                style={{ fontFamily: "var(--font-vt323)" }}
              >
                {personal.name.split(" ")[0]}
              </h1>
              <h1
                className="text-[clamp(72px,12vw,144px)] leading-none text-rose mb-6"
                style={{ fontFamily: "var(--font-vt323)" }}
              >
                {personal.name.split(" ")[1]}
              </h1>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-lg text-ink-mid font-body leading-relaxed max-w-xl">
                  {personal.role} — {personal.tagline}.
                </p>
              </div>

              <p className="text-sm text-ink-light font-body leading-relaxed max-w-lg mb-10">
                {personal.bio}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-6 py-2.5 border border-ink bg-ink text-cream text-xs tracking-widest uppercase font-body hover:bg-ink-mid transition-colors duration-150"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 border border-border text-ink text-xs tracking-widest uppercase font-body hover:bg-cream-dark transition-colors duration-150"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social row */}
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border-light">
                {[
                  { label: "GitHub / suulaav", href: personal.links.github },
                  { label: "LinkedIn", href: personal.links.linkedin },
                  { label: personal.email, href: personal.links.email },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-ink-muted hover:text-ink-mid transition-colors font-body"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Dot-matrix portrait + stats */}
            <div className="flex flex-col gap-6">
              {/* Profile portrait */}
              <div className="relative border border-border overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/profile.jpg"
                  alt={personal.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Corner marks — newspaper photo style */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-ink/30" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-ink/30" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-ink/30" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-ink/30" />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-cream p-4 text-center">
                    <p
                      className="text-4xl text-ink leading-none mb-1"
                      style={{ fontFamily: "var(--font-vt323)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-ink-light tracking-widest uppercase font-body">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
