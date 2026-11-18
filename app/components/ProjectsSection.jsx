import { motion } from "framer-motion";
import portfolioImage from "../../image/protfolio-full.webp?no-inline";
import evenzaImage from "../../image/evenza-full.webp?no-inline";
import cleenyImage from "../../image/Cleeny_Website-full.webp?no-inline";
import coffeeImage from "../../image/Coffee-full.webp?no-inline";
import nasscorpImage from "../../image/Nasscorp-full.webp?no-inline";

const projects = [
  {
    title: "Portfolio Website",
    image: portfolioImage,
    alt: "Preview of Sourav Das’s personal portfolio website",
    imageWidth: 1903,
    imageHeight: 999,
    description:
      "A modern personal portfolio built to highlight services, projects, resume details, and professional branding through a clean, responsive interface.",
    tags: ["Portfolio UI", "Responsive Design"],
    href: "https://protfolio-website-1-hf4x1dzbf-souravdas2087-3426.vercel.app",
    gradient: "from-brand-500/40 to-cyan-500/20",
  },
  {
    title: "Evenza Website",
    image: evenzaImage,
    alt: "Preview of the Evenza business website",
    imageWidth: 1902,
    imageHeight: 999,
    description: "A modern website with a polished visual style and responsive layout.",
    tags: ["Business Website", "Responsive Design"],
    href: "https://evenza-website.vercel.app/",
    gradient: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Cleeny Website",
    image: cleenyImage,
    alt: "Preview of the Cleeny website",
    imageWidth: 1901,
    imageHeight: 993,
    description: "A modern website with a polished visual style and responsive layout.",
    tags: ["Business Website", "Responsive Design"],
    href: "https://cleeny-website-sepia.vercel.app/",
    gradient: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Coffee Website",
    image: coffeeImage,
    alt: "Preview of the Coffee website landing page",
    imageWidth: 1904,
    imageHeight: 970,
    description:
      "A warm and inviting landing page with a clean layout, strong visual hierarchy, and engaging product presentation.",
    tags: ["Landing Page", "UI Design"],
    href: "https://coffee-nine-gules.vercel.app/",
    gradient: "from-yellow-500/30 to-amber-500/20",
  },
  {
    title: "Nasscorp",
    image: nasscorpImage,
    alt: "Preview of the Nasscorp brand website",
    imageWidth: 1903,
    imageHeight: 1002,
    description:
      "A polished web project showcasing clear structure, modern visuals, and a professional presentation for the brand.",
    tags: ["Landing Page", "Brand Website"],
    href: "https://sourav-das999.github.io/Nasscorp/",
    gradient: "from-amber-500/30 to-orange-500/20",
  },
];

function ProjectCard({ project }) {
  return (
    <motion.article
      className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`h-40 bg-gradient-to-br ${project.gradient}`}>
        <img
          className="block h-full w-full object-cover"
          src={project.image}
          alt={project.alt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-fuchsia-300 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View Project →
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
          Projects
        </p>
        <h2 id="projects-heading" className="mt-3 text-3xl font-bold text-white">
          Selected work that reflects my style and craft.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
