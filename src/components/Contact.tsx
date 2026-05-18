import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-mid border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs text-ink-light tracking-widest uppercase font-body">§ 05</span>
          <div className="h-px flex-1 bg-border" />
          <span
            className="text-2xl text-ink"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            CONTACT
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Headline */}
          <div>
            <h2
              className="text-5xl lg:text-6xl text-ink leading-tight mb-6"
              style={{ fontFamily: "var(--font-vt323)" }}
            >
              Let&apos;s work
              <br />
              <span className="text-rose">together.</span>
            </h2>
            <p className="text-sm font-body text-ink-mid leading-relaxed mb-8 max-w-md">
              Open to backend engineering roles, consulting, and interesting
              collaboration. Based in Kathmandu — available for remote work globally.
            </p>
            <a
              href={personal.links.email}
              className="inline-flex items-center gap-3 px-6 py-3 bg-ink text-cream text-xs tracking-widest uppercase font-body hover:bg-ink-mid transition-colors duration-150"
            >
              Send an Email ↗
            </a>
          </div>

          {/* Right: Contact cards */}
          <div className="flex flex-col divide-y divide-border">
            {[
              {
                label: "Email",
                value: personal.email,
                href: personal.links.email,
                note: "Best way to reach me",
              },
              {
                label: "GitHub",
                value: "github.com/suulaav",
                href: personal.links.github,
                note: "See my code",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/sulav-poudel",
                href: personal.links.linkedin,
                note: "Professional network",
              },
              {
                label: "Phone",
                value: personal.phone,
                href: `tel:${personal.phone.replace(/\D/g, "")}`,
                note: "Kathmandu, Nepal",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Phone" ? "_blank" : undefined}
                rel={item.label !== "Phone" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-5 hover:bg-cream transition-colors duration-150 px-2 -mx-2"
              >
                <div>
                  <p className="text-[10px] text-ink-muted tracking-widest uppercase font-body mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-body text-ink group-hover:text-rose transition-colors">
                    {item.value}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-xs font-body text-ink-muted hidden sm:block">{item.note}</p>
                  <span className="text-ink-muted group-hover:text-ink transition-colors text-sm">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
