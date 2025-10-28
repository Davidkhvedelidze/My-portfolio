import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { experience } from '../data/resume';

const Experience = () => {
  return (
    <section className="py-16" id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-6">
        {experience.map((role) => (
          <motion.article
            key={role.company}
            className="section-surface space-y-6 p-7 sm:p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <header className="mb-4 flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between">
              <strong className="font-display text-lg text-slate-100">
                {role.role} · {role.company}
              </strong>
              <span className="text-sm text-slate-400">{role.period}</span>
            </header>
            <div className="grid gap-4 md:grid-cols-2">
              {role.projects.map((project) => (
                <motion.div
                  key={project.name}
                  className="section-surface border-slate-400/25 bg-slate-900/70 p-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
                  <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                    {project.stack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
