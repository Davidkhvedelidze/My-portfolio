import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { certifications, education } from '../data/resume';

const Education = () => {
  return (
    <section className="py-16" id="education">
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="section-surface border-slate-400/25 bg-slate-900/70 p-7"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-120px' }}
        >
          <h3 className="font-display text-lg text-slate-100">Education</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200/85">
            {education.map((entry) => (
              <li key={entry.school}>
                <strong className="font-semibold text-slate-100">{entry.school}</strong>
                <br />
                {entry.program} · {entry.period}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="section-surface border-slate-400/25 bg-slate-900/70 p-7"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-120px' }}
        >
          <h3 className="font-display text-lg text-slate-100">Certifications</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200/85">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <strong className="font-semibold text-slate-100">{cert.name}</strong>
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
