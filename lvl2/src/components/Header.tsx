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
      style={{
        position: 'sticky',
        top: '20px',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        padding: '1.25rem 0'
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.75rem 1.25rem',
          borderRadius: '999px',
          border: '1px solid rgba(148, 163, 184, 0.25)',
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 20px 60px rgba(2, 6, 23, 0.35)',
          flexWrap: 'wrap'
        }}
      >
        <span className="badge" style={{ marginRight: '0.5rem' }}>
          {profile.name.split(' ')[0]}
        </span>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
