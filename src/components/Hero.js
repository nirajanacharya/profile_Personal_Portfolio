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
    { label: 'Current Role', value: 'Lecturer, Kantipur Engineering College' },
    { label: 'Professional Track', value: 'Full Stack Web Developer and AI Engineer' },
    { label: 'Research Profile', value: 'Scopus-Indexed Peer Reviewer' },
  ];

  const keyStats = [
    { value: 'B.E.', label: 'Computer Engineering' },
    { value: 'Semester Topper', label: 'Academic Achievement' },
    { value: '12+', label: 'International Projects Delivered' },
    { value: '2', label: 'AI/ML Publications' },
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-darker via-[#08192e] to-darker px-5 pt-32 pb-24">
      <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-neon-cyan/20 blur-[130px]"></div>
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-neon-blue/20 blur-[150px]"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="animate-driftIn space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            <i className="fas fa-shield-alt"></i>
            AI Safety Governance Portfolio
          </span>

          <h1 className="text-4xl font-bold leading-tight text-light-text md:text-6xl">
            Building trustworthy AI systems for public impact.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-light-text/75 md:text-lg">
            I build practical software that people can use, trust, and benefit from.
            Alongside research in AI safety governance, I work as a Full Stack Web Developer and Artificial Intelligence Engineer
            delivering client solutions through Upwork, Fiverr, and PeoplePerHour.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-neon-cyan/25 bg-[#0a1526]/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/75">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-light-text">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-neon-cyan bg-neon-cyan px-6 py-3 text-sm font-semibold text-darker transition-transform hover:-translate-y-1"
            >
              View Technical Work
              <i className="fas fa-arrow-right"></i>
            </a>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 px-6 py-3 text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan/10"
            >
              Publications and Writing
              <i className="fas fa-book-open"></i>
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 px-6 py-3 text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan/10"
            >
              Explore Research
              <i className="fas fa-microscope"></i>
            </Link>
            <a
              href="/Nirajan_Acharya_CV.txt"
              download
              className="inline-flex items-center gap-2 rounded-full border border-neon-blue/60 px-6 py-3 text-sm font-semibold text-neon-blue transition-all hover:bg-neon-blue/10"
            >
              Download CV
              <i className="fas fa-download"></i>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-light-text/85 transition-all hover:border-neon-cyan hover:text-neon-cyan"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-driftIn rounded-2xl border border-neon-cyan/30 bg-[#060f1d]/80 p-6 shadow-xl shadow-neon-cyan/10" style={{ animationDelay: '0.15s' }}>
          <div className="overflow-hidden rounded-xl border border-neon-cyan/35">
            <img src="/images/profile.jpg" alt="Nirajan Acharya" className="h-full w-full object-cover" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {keyStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-neon-cyan/20 bg-[#08182b] p-3">
                <p className="text-lg font-bold text-neon-cyan">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-light-text/65">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-neon-blue/35 bg-neon-blue/10 p-4 text-sm text-light-text/80">
            <p className="font-semibold text-neon-blue">Research and Ethics Focus</p>
            <p className="mt-2">Adversarial robustness, bias detection, transparent model behavior, and deployment governance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
