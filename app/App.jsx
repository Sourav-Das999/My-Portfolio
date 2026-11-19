import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import DeferredSections from "./components/DeferredSections.jsx";
import heroBanner800 from "../image/portfolio-banner-800.webp";
import heroBanner1672 from "../image/portfolio-banner-1672.webp";
import "./style.css";

const skills = [
  {
    title: "Core Frontend",
    description: "HTML, CSS, JavaScript, React, Next.js",
    iconPath: "M10 20l4-16m-6 6l-4 4 4 4m12-8l4 4-4 4",
  },
  {
    title: "Styling",
    description: "Tailwind CSS, modern UI, responsive layouts",
    iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7z",
  },
  {
    title: "UX & Performance",
    description: "Accessibility, optimization, motion, user flow",
    iconPath: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Workflow",
    description: "Git, Vite, component-based architecture, testing",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <motion.section
          className="hero-section relative isolate overflow-hidden px-6 py-14 sm:py-16 lg:px-8 lg:py-20"
          aria-labelledby="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hero-content relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h1
              id="hero-heading"
              className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Thoughtful interfaces. Built to make an impact.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I create polished, responsive web experiences that help ambitious
              brands stand out and connect with their audience.
            </p>

            <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
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

            <div className="hero-banner-frame mt-10 w-full sm:mt-12">
              <img
                className="hero-banner-image"
                src={heroBanner1672}
                srcSet={`${heroBanner800} 800w, ${heroBanner1672} 1672w`}
                sizes="(max-width: 700px) calc(100vw - 3rem), (max-width: 1200px) calc(100vw - 4rem), 1120px"
                width="1672"
                height="941"
                alt="Sourav Das, frontend developer — modern web development portfolio banner"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
          aria-labelledby="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <article className="hover-lift rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                  About Me
                </p>
                <h2
                  id="about-heading"
                  className="mt-3 text-3xl font-bold text-white"
                >
                  Crafting polished interfaces with a user-first mindset.
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-8 text-slate-400">
                <p>
                  I specialize in building responsive, accessible interfaces
                  with React, Tailwind CSS, and modern frontend tooling. I focus
                  on performance, clarity, and the details that make products
                  feel refined.
                </p>
                <p>
                  I also hold an NSDA certification and am steadily expanding my
                  skills to grow from frontend development into full-stack
                  development.
                </p>
              </div>
            </div>
          </article>
        </motion.section>

        <motion.section
          id="skills"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
          aria-labelledby="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
              Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-3 text-3xl font-bold text-white"
            >
              Tools I use to build modern experiences.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <motion.article
                key={skill.title}
                className="hover-lift rounded-2xl border border-white/10 bg-slate-900/70 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="skill-icon mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
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
                      d={skill.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {skill.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <DeferredSections />
      </main>

      <motion.footer
        className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p>© 2026 Sourav Das. All rights reserved.</p>
      </motion.footer>
    </>
  );
}