import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = lazy(() => import("./ProjectsSection.jsx"));
const ContactSection = lazy(() => import("./ContactSection.jsx"));

const sections = [
  {
    id: "projects",
    label: "Projects",
    title: "Selected work that reflects my style and craft.",
    Component: ProjectsSection,
  },
  {
    id: "contact",
    label: "Contact",
    title: "Let’s build something great together.",
    Component: ContactSection,
  },
];

function SectionFallback({ id, label, title }) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
      aria-labelledby={`${id}-heading`}
      aria-busy="true"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
          {label}
        </p>
        <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold text-white">
          {title}
        </h2>
      </div>
      <div className="section-loading" role="status">
        <span className="section-loading__spinner" aria-hidden="true" />
        <span className="sr-only">Loading {label} section</span>
      </div>
    </motion.section>
  );
}

export default function DeferredSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setReady(true), {
        timeout: 1500,
      });

      return () => {
        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    const timerId = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(timerId);
  }, []);

  return sections.map(({ id, label, title, Component }) =>
    ready ? (
      <Suspense
        key={id}
        fallback={<SectionFallback id={id} label={label} title={title} />}
      >
        <Component />
      </Suspense>
    ) : (
      <SectionFallback key={id} id={id} label={label} title={title} />
    ),
  );
}
