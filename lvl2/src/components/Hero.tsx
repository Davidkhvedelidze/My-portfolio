import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { heroHighlights, profile } from '../data/resume';
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

      const highlightCards = gsap.utils.toArray<HTMLDivElement>('.highlight-card');

      if (highlightCards.length) {
        gsap.from(highlightCards, {
          autoAlpha: 0,
          y: 30,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.4
        });

        highlightCards.forEach((item, index) => {
          gsap.to(item, {
            y: '+=8',
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.35
          });
        });
      }
    }, card);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative grid min-h-[90vh] place-items-center pt-24 pb-16 before:absolute before:inset-0 before:-z-10 before:bg-hero-glow before:opacity-60 before:blur-[80px] before:content-['']"
      id="top"
    >
      <div
        ref={cardRef}
        className="section-surface relative w-full max-w-3xl overflow-hidden px-8 py-12 text-center shadow-[0_20px_80px_rgba(15,23,42,0.35)] sm:px-12 after:absolute after:-bottom-[25%] after:-right-[20%] after:-z-10 after:h-[60%] after:w-[60%] after:rounded-full after:bg-[radial-gradient(circle,rgba(14,165,233,0.35),transparent_65%)] after:blur-[40px] after:content-['']"
      >
        <span ref={badgeRef} className="badge mx-auto mb-6">
          Available for remote-friendly teams
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-[clamp(2.8rem,6vw,4rem)] font-semibold tracking-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-[clamp(1rem,2vw,1.35rem)] font-medium text-slate-300"
        >
          {profile.title} · {profile.location}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto mb-8 max-w-2xl text-[clamp(1rem,1.45vw,1.125rem)] text-slate-300/85"
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <a
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-400 to-sky-500 px-7 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_40px_rgba(14,165,233,0.35)] transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
            href="mailto:davit.khvedelidze.11@gmail.com"
          >
            Let&apos;s talk
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-400/40 bg-slate-900/60 px-7 py-3 text-sm font-semibold text-slate-100 transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
            href="#experience"
          >
            View experience
          </a>
        </motion.div>
        <div aria-label="Career highlights" className="mt-10 grid gap-4 sm:grid-cols-3" role="list">
          {heroHighlights.map((item) => (
            <div
              className="highlight-card section-surface border-slate-400/10 bg-slate-900/40 p-5 text-left"
              key={item.title}
              role="listitem"
            >
              <h3 className="font-display text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300/85">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
