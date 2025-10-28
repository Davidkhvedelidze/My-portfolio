import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { certifications, education } from '../data/resume';

const Education = () => {
  return (
    <section id="education">
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <div className="grid">
        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-120px' }}
        >
          <h3>Education</h3>
          <ul>
            {education.map((entry) => (
              <li key={entry.school}>
                <strong>{entry.school}</strong>
                <br />
                {entry.program} · {entry.period}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-120px' }}
        >
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert.name}>
                <strong>{cert.name}</strong>
                <br />
                {cert.issuer} · {cert.year}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
