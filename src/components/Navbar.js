import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Leadership', href: '/#leadership' },
    { label: 'Workshops', href: '/#workshops' },
    { label: 'Honors', href: '/#honors' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neon-purple/20 bg-surface-1/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple"></div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="text-xl md:text-2xl font-semibold text-neon-purple transition-all hover:text-neon-pink">
          Er. Nirajan Acharya
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-purple">
              {item.label}
            </a>
          ))}
          <Link to="/blogs" className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-purple">
            Publications
          </Link>
          <Link to="/research" className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-purple">
            Research
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.linkedin.com/in/nirajanacharya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-purple/35 px-3 py-1.5 text-xs font-semibold text-light-text/85 transition-all hover:border-neon-purple hover:text-neon-purple md:inline-flex"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nirajanacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-purple/35 px-3 py-1.5 text-xs font-semibold text-light-text/85 transition-all hover:border-neon-purple hover:text-neon-purple md:inline-flex"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:engineernirajanacharya@gmail.com"
            className="rounded-full border border-neon-purple/60 px-4 py-1.5 text-xs md:text-sm font-semibold text-neon-purple transition-all hover:bg-neon-purple hover:text-darker"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-5 pb-3 md:hidden">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-purple">
            {item.label}
          </a>
        ))}
        <Link to="/blogs" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-purple">
          Publications
        </Link>
        <Link to="/research" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-purple">
          Research
        </Link>
        <Link to="/blog" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-purple">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
