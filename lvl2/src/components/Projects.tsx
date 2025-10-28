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
    <section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="card-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            custom={index}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-cloud" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <span className="badge">{project.impact}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
