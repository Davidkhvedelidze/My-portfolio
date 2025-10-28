import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={{ hidden: {}, visible: {} }}
      >
        {(Object.entries(skills) as [keyof typeof skills, string[]][]).map(([category, list]) => (
          <motion.div
            key={category}
            className="skills-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <ul className="skills-list">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
