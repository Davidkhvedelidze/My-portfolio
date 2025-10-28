import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { projects } from '../data/resume';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5 }
  })
};

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="section-surface relative flex h-full flex-col gap-4 overflow-hidden border-slate-400/25 bg-slate-900/70 p-7 transition duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:border-sky-400/50 hover:before:opacity-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            custom={index}
          >
            <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
            <p className="text-sm text-slate-200/85">{project.description}</p>
            <div className="flex flex-wrap gap-2" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <span className="badge mt-2 w-fit text-sky-100">{project.impact}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
