import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { experience } from '../data/resume';

const Experience = () => {
  return (
    <section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map((role) => (
          <motion.article
            key={role.company}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <header>
              <strong>
                {role.role} · {role.company}
              </strong>
              <span>{role.period}</span>
            </header>
            <div className="grid">
              {role.projects.map((project) => (
                <motion.div
                  key={project.name}
                  className="section-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h3>{project.name}</h3>
                  <div className="tag-cloud" aria-label="Technology stack">
                    {project.stack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
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
