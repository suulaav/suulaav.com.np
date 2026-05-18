import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-body text-ink-muted">
          © {year}{" "}
          <span className="text-ink font-bold">{personal.name}</span>
          {" "}· Kathmandu, Nepal
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: personal.links.github },
            { label: "LinkedIn", href: personal.links.linkedin },
            { label: "Email", href: personal.links.email },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-body text-ink-muted hover:text-ink tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
