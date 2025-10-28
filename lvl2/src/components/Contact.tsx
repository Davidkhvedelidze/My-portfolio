import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { profile } from '../data/resume';

const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-120px' }}
      >
        <p>Interested in building inclusive, high-impact digital experiences together?</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="tag-cloud">
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
