import React from 'react';

function Timeline() {
  const experiences = [
    {
      period: 'Present',
      role: 'Independent AI Researcher',
      org: 'Remote',
      points: [
        'Investigating Transformer architectures, positional representation learning, and long context models.',
        'Focusing on mechanistic interpretability and trustworthy AI alignment.',
      ],
    },
    {
      period: 'Nov 2025 - Present',
      role: 'Lecturer',
      org: 'Kantipur Engineering College, Lalitpur',
      points: [
        'Teaching undergraduate Computer Engineering courses.',
        'Mentoring student academic projects and guiding AI research initiatives.',
      ],
    },
    {
      period: 'Present',
      role: 'AI & Technical Lead',
      org: 'Cyber Sachet',
      points: [
        'Leading the development of a multilingual RAG system for cybersecurity knowledge.',
        'Architecting AI-powered information retrieval for Nepali legal resources.',
      ],
    },
    {
      period: 'Feb 2024 - Jul 2024',
      role: 'Junior AI Developer Intern',
      org: 'Anachroni (LLM Startup), Remote',
      points: [
        'Optimized LLM performance using prompt engineering and response evaluation.',
        'Enhanced model reliability and contextual accuracy through dataset refinement.',
      ],
    },
    {
      period: 'Mar 2024',
      role: 'Collaborator, Data Science for Public Health Challenge',
      org: 'Omdena Local Chapter, Remote',
      points: [
        'Analyzed public health data trends using Python automation scripts.',
        'Developed predictive visualizations and risk pattern analytics.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-darker via-[#08152b] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Experience Timeline</h2>
          <p className="mt-3 text-light-text/70">Applied AI engineering, teaching, and impact-focused software delivery.</p>
        </div>

        <div className="relative space-y-6 border-l-2 border-neon-cyan/30 pl-6 md:pl-10">
          {experiences.map((item) => (
            <article key={item.role} className="relative rounded-xl border border-neon-cyan/20 bg-[#061121]/80 p-6">
              <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full border border-neon-cyan bg-[#0d2949] md:-left-[46px]"></div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/80">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-light-text">{item.role}</h3>
              <p className="text-sm text-light-text/65">{item.org}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-light-text/75">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-neon-cyan">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
