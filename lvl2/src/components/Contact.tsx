import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { profile } from '../data/resume';

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <motion.div
        className="section-surface space-y-4 p-8 sm:p-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-120px' }}
      >
        <p className="text-base text-slate-200/90">
          Interested in building inclusive, high-impact digital experiences together?
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex w-fit text-lg font-semibold text-sky-300 transition-colors duration-200 hover:text-sky-200 focus-visible:text-sky-200"
        >
          {profile.email}
        </a>
        <div className="flex flex-wrap gap-2">
          <span className="tag">{profile.phone}</span>
          {profile.social.map((link) => (
            <a key={link.href} className="tag" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
