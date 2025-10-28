import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  id?: string;
}

const SectionTitle = ({ id, children }: PropsWithChildren<SectionTitleProps>) => {
  return (
    <motion.h2
      id={id}
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
