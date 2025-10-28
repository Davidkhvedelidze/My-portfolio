import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-30 h-1 origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-pink-400"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
