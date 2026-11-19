import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="hover-lift rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-slate-900/70 p-8 lg:p-12">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
              Contact
            </p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-bold text-white">
              Let’s build something great together.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Whether you need a polished landing page, a UI refresh, or a
              frontend product shipped fast, I’d love to hear about it.
            </p>
          </div>

          <address className="flex flex-wrap gap-3 not-italic">
            <a
              href="mailto:souravdas2087@gmail.com"
              className="contact-link rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              aria-label="Email Sourav Das"
            >
              souravdas2087@gmail.com
            </a>
            <a
              href="https://github.com/Sourav-Das999"
              target="_blank"
              rel="noreferrer"
              className="contact-link rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              aria-label="Visit Sourav Das on GitHub (opens in a new tab)"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-das-03b970413"
              target="_blank"
              rel="noreferrer"
              className="contact-link rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              aria-label="Visit Sourav Das on LinkedIn (opens in a new tab)"
            >
              LinkedIn
            </a>
          </address>
        </div>
      </div>
    </motion.section>
  );
}
