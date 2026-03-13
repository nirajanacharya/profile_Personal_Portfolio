import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Honors', href: '/#honors' },
    { label: 'Gallery', href: '/#gallery' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neon-cyan/20 bg-[#040a14]/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"></div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="text-xl md:text-2xl font-semibold text-neon-cyan transition-all hover:text-neon-blue">
          Er. Nirajan Acharya
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-cyan">
              {item.label}
            </a>
          ))}
          <Link to="/blogs" className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-cyan">
            Publications
          </Link>
          <Link to="/research" className="text-sm font-semibold text-light-text/90 transition-colors hover:text-neon-cyan">
            Research
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.linkedin.com/in/nirajanacharya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-cyan/35 px-3 py-1.5 text-xs font-semibold text-light-text/85 transition-all hover:border-neon-cyan hover:text-neon-cyan md:inline-flex"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nirajanacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-cyan/35 px-3 py-1.5 text-xs font-semibold text-light-text/85 transition-all hover:border-neon-cyan hover:text-neon-cyan md:inline-flex"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:engineernirajanacharya@gmail.com"
            className="rounded-full border border-neon-cyan/60 px-4 py-1.5 text-xs md:text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan hover:text-darker"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-5 pb-3 md:hidden">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-cyan">
            {item.label}
          </a>
        ))}
        <Link to="/blogs" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-cyan">
          Publications
        </Link>
        <Link to="/research" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-cyan">
          Research
        </Link>
        <Link to="/blog" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-light-text/80 hover:text-neon-cyan">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
