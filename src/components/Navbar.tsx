"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-cream transition-all duration-200 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span
            className="halftone-text font-display text-2xl text-ink leading-none"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            SP
          </span>
          <span className="hidden sm:block text-xs text-ink-light font-body tracking-widest uppercase">
            {personal.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs tracking-widest uppercase transition-colors duration-150 font-body ${
                  activeSection && `#${activeSection}` === l.href
                    ? "text-ink border-b border-ink pb-0.5"
                    : "text-ink-mid hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personal.links.email}
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 border border-border text-xs tracking-widest uppercase text-ink hover:bg-cream-dark transition-colors duration-150 font-body"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm tracking-widest uppercase text-ink-mid hover:text-ink font-body"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.links.email}
            className="mt-6 inline-flex items-center px-4 py-2 border border-border text-xs tracking-widest uppercase text-ink font-body"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
