import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="py-16" id="about">
      <SectionTitle>About</SectionTitle>
      <motion.div
        className="section-surface space-y-4 p-8 text-slate-200/90 sm:p-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-120px' }}
      >
        <p className="text-base leading-relaxed">
          I craft immersive web and mobile experiences with a focus on accessibility, performance, and meaningful
          storytelling. From government platforms to high-energy mobile apps, I lead interface development that
          balances aesthetics with clarity.
        </p>
        <p className="text-base leading-relaxed">
          My toolkit spans modern frameworks like Next.js, React Native, and animation libraries including Framer Motion
          and GSAP. I thrive in collaborative, mission-driven teams where thoughtful details elevate the impact of every
          interaction.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
