import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { languages } from '../data/resume';

const Languages = () => {
  return (
    <section id="languages">
      <SectionTitle>Languages</SectionTitle>
      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-120px' }}
      >
        <ul className="skills-list">
          {languages.map((language) => (
            <li key={language.name}>
              <strong>{language.name}</strong> — {language.level}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Languages;
