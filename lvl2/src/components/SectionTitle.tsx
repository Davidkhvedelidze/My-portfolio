import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  id?: string;
}

const SectionTitle = ({ id, children }: PropsWithChildren<SectionTitleProps>) => {
  return (
    <motion.h2
      id={id}
      className="relative mb-8 flex items-center gap-3 font-display text-[clamp(1.6rem,2.3vw,2.4rem)] font-semibold before:h-0.5 before:w-10 before:rounded-full before:bg-gradient-to-r before:from-sky-400 before:to-transparent before:content-['']"
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
