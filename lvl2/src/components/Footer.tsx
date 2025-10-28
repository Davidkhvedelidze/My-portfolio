import { profile } from '../data/resume';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pb-16 text-center text-sm text-slate-400">
      © {year} {profile.name}. Built with React, TypeScript, Framer Motion, and GSAP.
    </footer>
  );
};

export default Footer;
