import { profile } from '../data/resume';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {year} {profile.name}. Built with React, TypeScript, Framer Motion, and GSAP.
      </p>
    </footer>
  );
};

export default Footer;
