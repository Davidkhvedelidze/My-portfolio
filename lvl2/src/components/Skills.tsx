import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/resume';

const Skills = () => {
  return (
    <section className="py-16" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={{ hidden: {}, visible: {} }}
      >
        {(Object.entries(skills) as [keyof typeof skills, string[]][]).map(([category, list]) => (
          <motion.div
            key={category}
            className="section-surface border-slate-400/25 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul className="space-y-2">
              {list.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-sm text-slate-200/90 before:absolute before:left-0 before:top-2 before:text-xs before:text-sky-400 before:content-['✦']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
