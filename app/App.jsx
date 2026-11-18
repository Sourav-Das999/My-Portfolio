import { useEffect, useState } from "react";
import heroBanner from "../image/portfolio-banner.png";
import portfolioImage from "../image/protfolio.png";
import evenzaImage from "../image/evenza.png";
import cleenyImage from "../image/Cleeny_Website.png";
import coffeeImage from "../image/Coffee.png";
import nasscorpImage from "../image/Nasscorp.png";
import "./style.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver;

    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll("main h1, main h2, main h3, main p, main a, main button, main article, main .hover-lift, main img, main svg, footer p").forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", String((index % 5) * 70) + "ms");
        revealObserver.observe(element);
      });
    }

    return () => revealObserver?.disconnect();
  }, []);

  return (
    <>
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 glass-panel"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          <span className="text-white">Sourav Das</span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
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
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      <div
        id="mobileMenu"
        className={`border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden ${menuOpen ? "" : "hidden"}`}
      >
        <div className="flex flex-col gap-3 text-sm text-slate-300">
          <a onClick={() => setMenuOpen(false)} href="#about" className="transition hover:text-white">About</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="transition hover:text-white">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="transition hover:text-white">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="transition hover:text-white">Contact</a>
          <a onClick={() => setMenuOpen(false)}
            href="#contact"
            className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-brand-500"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>

    <main id="home">
      <section
        className="hero-section relative isolate overflow-hidden px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="hero-content animate-fade-up relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="hero-eyebrow mb-4 text-sm font-semibold uppercase tracking-[0.3em]">
            Frontend Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sourav Das
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I create polished, responsive web experiences that help ambitious
            brands stand out and connect with their audience.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="hero-primary-cta inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="hero-secondary-cta inline-flex min-h-12 items-center justify-center rounded-full border px-7 py-3 font-semibold text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-banner-frame mt-12 w-full">
            <img
              className="hero-banner-image"
              src={heroBanner}
              alt="Sourav Das, frontend developer — modern web development portfolio banner"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div
          className="hover-lift rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400"
              >
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Crafting polished interfaces with a user-first mindset.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-8 text-slate-400">
              <p>
                I specialize in building responsive, accessible interfaces with
                React, Tailwind CSS, and modern frontend tooling. I focus on
                performance, clarity, and the details that make products feel
                refined.
              </p>
              <p>
                I also hold an NSDA certification and am steadily expanding my
                skills to grow from frontend development into full-stack
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400"
          >
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Tools I use to build modern experiences.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div
            className="hover-lift rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m-6 6l-4 4 4 4m12-8l4 4-4 4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Core Frontend</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              HTML, CSS, JavaScript, React, Next.js
            </p>
          </div>

          <div
            className="hover-lift rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Styling</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Tailwind CSS, modern UI, responsive layouts
            </p>
          </div>

          <div
            className="hover-lift rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">UX & Performance</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Accessibility, optimization, motion, user flow
            </p>
          </div>

          <div
            className="hover-lift rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Workflow</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Git, Vite, component-based architecture, testing
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400"
          >
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Selected work that reflects my style and craft.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article
            className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
          >
            <div
              className="h-40 bg-gradient-to-br from-brand-500/40 to-cyan-500/20"
            >
              <img src={portfolioImage} alt="protfolio" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">
                Portfolio Website
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A modern personal portfolio built to highlight services,
                projects, resume details, and professional branding through a
                clean, responsive interface.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Portfolio UI</span
                >
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Responsive Design</span
                >
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://protfolio-website-1-hf4x1dzbf-souravdas2087-3426.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  View Project →
                </a>
              </div>
            </div>
          </article>

          <article
            className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
          >
            <div
              className="h-40 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20"
            >
              <img src={evenzaImage} alt="evenza" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">Evenza Website</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A modern website with a polished visual style and responsive
                layout.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Business Website</span
                >
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Responsive Design</span
                >
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://evenza-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  View Project →
                </a>
              </div>
            </div>
          </article>

          <article
            className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
          >
            <div
              className="h-40 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20"
            >
              <img src={cleenyImage} alt="cleeny" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">Cleeny Website</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A modern website with a polished visual style and responsive
                layout.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Business Website</span
                >
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Responsive Design</span
                >
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://cleeny-website-sepia.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  View Project →
                </a>
              </div>
            </div>
          </article>

          <article
            className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
          >
            <div
              className="h-40 bg-gradient-to-br from-yellow-500/30 to-amber-500/20"
            >
              <img src={coffeeImage} alt="Coffee Website" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">Coffee Website</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A warm and inviting landing page with a clean layout, strong
                visual hierarchy, and engaging product presentation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Landing Page</span
                >
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >UI Design</span
                >
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://coffee-nine-gules.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  View Project →
                </a>
              </div>
            </div>
          </article>

          <article
            className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
          >
            <div
              className="h-40 bg-gradient-to-br from-amber-500/30 to-orange-500/20"
            >
              <img src={nasscorpImage} alt="Nasscorp" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">Nasscorp</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A polished web project showcasing clear structure, modern
                visuals, and a professional presentation for the brand.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Landing Page</span
                >
                <span
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >Brand Website</span
                >
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://sourav-das999.github.io/Nasscorp/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  View Project →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div
          className="hover-lift rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-slate-900/70 p-8 lg:p-12"
        >
          <div className="space-y-6">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400"
              >
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Let’s build something great together.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">
                Whether you need a polished landing page, a UI refresh, or a
                frontend product shipped fast, I’d love to hear about it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:souravdas2087@gmail.com"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                souravdas2087@gmail.com
              </a>
              <a
                href="https://github.com/Sourav-Das999"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-das-03b970413"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400"
    >
      <p>© 2026 Sourav Das. All rights reserved.</p>
    </footer>



    </>
  );
}
