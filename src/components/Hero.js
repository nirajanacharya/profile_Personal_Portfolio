import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nirajanacharya/',
      icon: 'fab fa-linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/nirajanacharya',
      icon: 'fab fa-github',
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@nirajan.acharya777',
      icon: 'fab fa-medium',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/scholar?q=Nirajan+Acharya',
      icon: 'fas fa-graduation-cap',
    },
  ];

  const highlights = [
    { label: 'Current Role', value: 'AI Researcher & Lecturer' },
    { label: 'Professional Track', value: 'Trustworthy AI & NLP' },
    { label: 'Research Focus', value: 'Representation Learning & AI Alignment' },
  ];

  const keyStats = [
    { value: 'AI', label: 'Researcher' },
    { value: 'Social', label: 'Impact Tech' },
    { value: 'Tech', label: 'Lead' },
    { value: 'Lecturer', label: 'Educator' },
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-darker via-surface-2 to-darker px-5 pt-32 pb-24">
      <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-neon-purple/20 blur-[130px]"></div>
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-neon-pink/20 blur-[150px]"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="animate-driftIn space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple">
            <i className="fas fa-shield-alt"></i>
            AI Researcher & Educator
          </span>

          <h1 className="text-4xl font-bold leading-tight text-light-text md:text-6xl">
            Hi, I'm Nirajan. I build trustworthy AI systems for real-world impact.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-light-text/75 md:text-lg">
            I'm an AI researcher and educator deeply curious about Transformer architectures, language models, and AI alignment. My goal is to bridge the gap between complex research and accessible technology that actually helps communities.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-neon-purple/25 bg-surface-1/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neon-purple/75">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-light-text">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-neon-purple bg-neon-purple px-6 py-3 text-sm font-semibold text-darker transition-transform hover:-translate-y-1"
            >
              View Technical Work
              <i className="fas fa-arrow-right"></i>
            </a>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-neon-purple/50 px-6 py-3 text-sm font-semibold text-neon-purple transition-all hover:bg-neon-purple/10"
            >
              Publications and Writing
              <i className="fas fa-book-open"></i>
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full border border-neon-purple/50 px-6 py-3 text-sm font-semibold text-neon-purple transition-all hover:bg-neon-purple/10"
            >
              Explore Research
              <i className="fas fa-microscope"></i>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-light-text/85 transition-all hover:border-neon-purple hover:text-neon-purple"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-driftIn rounded-2xl border border-neon-purple/30 bg-surface-1/80 p-6 shadow-xl shadow-neon-purple/10" style={{ animationDelay: '0.15s' }}>
          <div className="overflow-hidden rounded-xl border border-neon-purple/35">
            <img src="/images/profile.jpg?v=2" alt="Nirajan Acharya" className="h-full w-full object-cover" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {keyStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-neon-purple/20 bg-surface-1 p-3">
                <p className="text-lg font-bold text-neon-purple">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-light-text/65">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-neon-pink/35 bg-neon-pink/10 p-4 text-sm text-light-text/80">
            <p className="font-semibold text-neon-pink">Research Focus</p>
            <p className="mt-2">Transformer architectures, representation learning, mechanistic interpretability, and trustworthy AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
