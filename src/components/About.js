import React from 'react';

function About() {
  const skillGroups = [
    {
      title: 'Programming',
      items: ['Python', 'JavaScript', 'C++', 'SQL'],
    },
    {
      title: 'AI & Machine Learning',
      items: ['PyTorch', 'Transformers', 'LLMs', 'Natural Language Processing', 'Retrieval-Augmented Generation', 'Machine Learning'],
    },
    {
      title: 'Research',
      items: ['Experimental Design', 'Scientific Writing', 'Literature Review', 'Model Evaluation'],
    },
    {
      title: 'Developer Tools',
      items: ['Git', 'Linux', 'Jupyter', 'VS Code'],
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-2xl border border-neon-purple/20 bg-surface-1/80 p-8">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">My Journey</h2>
          <p className="text-light-text/75 leading-relaxed">
            Passionate about building AI for real-world impact at the intersection of research and education. I focus on making complex systems accessible and reliable.
          </p>
          <p className="text-light-text/75 leading-relaxed">
            My work bridges theoretical computer science with practical, ethical engineering. I specialize in trustworthy AI—investigating Transformer architectures, alignment, and robust deployment to ensure AI serves communities safely.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neon-purple/20 bg-surface-1 p-4">
              <p className="text-xs uppercase tracking-wide text-neon-purple/75">Research</p>
              <p className="mt-2 text-sm font-semibold text-light-text">Transformer Architectures</p>
              <p className="text-sm text-light-text/70">Representation learning and long-context models</p>
            </div>
            <div className="rounded-xl border border-neon-purple/20 bg-surface-1 p-4">
              <p className="text-xs uppercase tracking-wide text-neon-purple/75">Core Focus</p>
              <p className="mt-2 text-sm font-semibold text-light-text">Trustworthy AI & Social Impact</p>
              <p className="text-sm text-light-text/70">Building ethical, reliable, and accessible intelligent systems</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-neon-pink/25 bg-surface-1/80 p-8">
          <h3 className="text-2xl font-semibold text-neon-purple">Technical Skills</h3>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-neon-purple/15 bg-surface-1 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-neon-purple/85">{group.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-light-text/75">{group.items.join(' | ')}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-neon-pink/30 bg-neon-pink/10 p-4 text-sm text-light-text/80">
            <p className="font-semibold text-neon-pink">Technology for Social Impact</p>
            <p className="mt-1">Developing solutions like the Shivaraj Emergency Response System to empower local governance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
