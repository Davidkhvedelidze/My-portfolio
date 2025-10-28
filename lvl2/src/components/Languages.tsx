import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { languages } from '../data/resume';

const Languages = () => {
  return (
    <section className="py-16" id="languages">
      <SectionTitle>Languages</SectionTitle>
      <motion.div
        className="section-surface border-slate-400/25 bg-slate-900/70 p-7"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-120px' }}
      >
        <ul className="space-y-3 text-sm text-slate-200/85">
          {languages.map((language) => (
            <li key={language.name} className="flex flex-wrap items-baseline gap-2">
              <strong className="font-semibold text-slate-100">{language.name}</strong>
              <span className="text-slate-400">— {language.level}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Languages;
