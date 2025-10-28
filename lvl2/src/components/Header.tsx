import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { profile } from '../data/resume';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
];

const Header = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const bar = barRef.current;
    if (!bar) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { y: -80, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }
      );
    }, bar);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <header
      ref={barRef}
      className="sticky top-5 z-20 flex justify-center px-4 pb-5"
    >
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-4 rounded-full border border-slate-400/25 bg-slate-900/70 px-5 py-3 shadow-nav backdrop-blur-xl"
      >
        <span className="badge pr-2">
          {profile.name.split(' ')[0]}
        </span>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-200 transition-colors duration-200 hover:text-sky-300 focus-visible:text-sky-300"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
