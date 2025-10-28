import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { profile } from '../data/resume';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const card = cardRef.current;
    const badge = badgeRef.current;

    if (!card || !badge) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.fromTo(
        badge,
        { y: -6 },
        {
          y: 6,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      );
    }, card);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="hero" id="top">
      <div className="hero-card" ref={cardRef}>
        <span ref={badgeRef} className="badge">
          Available for remote-friendly teams
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {profile.title} · {profile.location}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <a className="button primary" href="mailto:davit.khvedelidze.11@gmail.com">
            Let&apos;s talk
          </a>
          <a className="button secondary" href="#experience">
            View experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
