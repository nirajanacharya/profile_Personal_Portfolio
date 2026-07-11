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
    <section id="about" className="bg-gradient-to-b from-darker via-[#061325] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-2xl border border-neon-cyan/20 bg-[#071122]/80 p-8">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">My Journey</h2>
          <p className="text-light-text/75 leading-relaxed">
            As a Computer Engineering graduate from Kantipur Engineering College, my journey has been driven by a singular passion: building AI for real-world social impact. Today, I work at the intersection of research and education as an independent AI researcher and a Lecturer, focusing on making complex systems accessible and reliable.
          </p>
          <p className="text-light-text/75 leading-relaxed">
            My teaching philosophy is rooted in bridging the gap between theoretical computer science and practical, ethical engineering. In my research, I focus on trustworthy AI—investigating Transformer architectures, alignment, and robust deployment strategies to ensure AI systems serve communities safely and transparently.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neon-cyan/20 bg-[#09192d] p-4">
              <p className="text-xs uppercase tracking-wide text-neon-cyan/75">Education</p>
              <p className="mt-2 text-sm font-semibold text-light-text">B.E. Computer Engineering</p>
              <p className="text-sm text-light-text/70">Kantipur Engineering College</p>
            </div>
            <div className="rounded-xl border border-neon-cyan/20 bg-[#09192d] p-4">
              <p className="text-xs uppercase tracking-wide text-neon-cyan/75">Core Focus</p>
              <p className="mt-2 text-sm font-semibold text-light-text">Trustworthy AI & Social Impact</p>
              <p className="text-sm text-light-text/70">Building ethical, reliable, and accessible intelligent systems</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-neon-blue/25 bg-[#06101f]/80 p-8">
          <h3 className="text-2xl font-semibold text-neon-cyan">Technical Skills</h3>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-neon-cyan/15 bg-[#09182c] p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-neon-cyan/85">{group.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-light-text/75">{group.items.join(' | ')}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-neon-blue/30 bg-neon-blue/10 p-4 text-sm text-light-text/80">
            <p className="font-semibold text-neon-blue">Technology for Social Impact</p>
            <p className="mt-1">Developing solutions like the Shivaraj Emergency Response System to empower local governance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
