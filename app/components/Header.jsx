import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 glass-panel"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Sourav Das
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="nav-link transition hover:text-white">About</a>
          <a href="#skills" className="nav-link transition hover:text-white">Skills</a>
          <a href="#projects" className="nav-link transition hover:text-white">Projects</a>
          <a href="#contact" className="nav-link transition hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500 sm:inline-flex"
          >
            Let’s Talk
          </a>
          <button
            id="menuButton"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <nav
        id="mobileMenu"
        className={`border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden ${menuOpen ? "" : "hidden"}`}
        aria-label="Mobile"
      >
        <div className="flex flex-col gap-3 text-sm text-slate-300">
          <a onClick={() => setMenuOpen(false)} href="#about" className="transition hover:text-white">About</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="transition hover:text-white">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="transition hover:text-white">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="transition hover:text-white">Contact</a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-brand-500"
          >
            Let’s Talk
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
