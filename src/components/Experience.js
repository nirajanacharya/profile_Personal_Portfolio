import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Independent AI Researcher',
      org: 'Remote',
      points: [
        'Investigating Transformer architectures, positional representation, and long-context language models.',
        'Studying mechanistic interpretability to improve model robustness.',
        'Evaluating methodologies for trustworthy AI and AI alignment.',
      ],
    },
    {
      role: 'Lecturer',
      org: 'Kantipur Engineering College',
      points: [
        'Teaching Artificial Intelligence and Machine Learning to undergraduate students.',
        'Mentoring undergraduate research and final-year engineering projects.',
        'Promoting reproducible research and practical AI engineering.',
      ],
    },
    {
      role: 'AI & Technical Lead',
      org: 'Cyber Sachet',
      points: [
        'Leading multilingual RAG systems integrating cybersecurity and Nepali legal resources.',
        'Designing pipelines for document ingestion, retrieval, and evaluation.',
        'Deploying responsible AI systems for public awareness with cross-functional teams.',
      ],
    },
    {
      role: 'Junior AI Developer',
      org: 'LLM Startup',
      points: [
        'Conducted large-scale LLM evaluation and prompt analysis.',
        'Refined datasets and established explainability workflows.',
        'Performed reliability testing to improve contextual consistency.',
      ],
    },
    {
      role: 'Collaborator',
      org: 'Omdena Local Chapter',
      points: [
        'Applied machine learning for public health and tuberculosis data analysis.',
        'Built reproducible data analytics pipelines with interdisciplinary teams.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Professional Experience</h2>
          <p className="mt-3 text-light-text/70">Applied AI engineering, research, and impact-focused software delivery.</p>
        </div>

        <div className="relative space-y-6 border-l-2 border-neon-purple/30 pl-6 md:pl-10">
          {experiences.map((item) => (
            <article key={item.role} className="relative rounded-xl border border-neon-purple/20 bg-surface-1/80 p-6">
              <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full border border-neon-purple bg-surface-1 md:-left-[46px]"></div>
              <h3 className="text-xl font-semibold text-light-text">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-neon-purple/80">{item.org}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-light-text/75">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-neon-purple">-</span>
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

export default Experience;
