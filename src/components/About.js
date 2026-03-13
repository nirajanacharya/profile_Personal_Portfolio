import React from 'react';

function About() {
  const skillGroups = [
    {
      title: 'Programming',
      items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'PHP'],
    },
    {
      title: 'AI and ML',
      items: ['Machine Learning', 'Deep Learning (MLP, CNN)', 'NLP', 'Predictive Modeling', 'Data Analytics'],
    },
    {
      title: 'Web and Backend',
      items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Vercel'],
    },
    {
      title: 'Data and MLOps',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'Deployment Basics'],
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-darker via-[#061325] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-2xl border border-neon-cyan/20 bg-[#071122]/80 p-8">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Professional Summary</h2>
          <p className="text-light-text/75 leading-relaxed">
            AI Safety Governance Researcher with practical experience evaluating, optimizing, and deploying intelligent systems with real-world impact.
            Specialized in LLM behavior analysis, predictive risk modeling, and transparent AI design across public health, web security,
            and financial technology.
          </p>
          <p className="text-light-text/75 leading-relaxed">
            Published researcher and peer reviewer in Scopus-indexed AI/ML journals focused on adversarial robustness, bias detection,
            and ethical deployment. Combines technical delivery with leadership in AI-for-good initiatives and global youth representation.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neon-cyan/20 bg-[#09192d] p-4">
              <p className="text-xs uppercase tracking-wide text-neon-cyan/75">Education</p>
              <p className="mt-2 text-sm font-semibold text-light-text">B.E. Computer Engineering</p>
              <p className="text-sm text-light-text/70">Kantipur Engineering College</p>
            </div>
            <div className="rounded-xl border border-neon-cyan/20 bg-[#09192d] p-4">
              <p className="text-xs uppercase tracking-wide text-neon-cyan/75">Academic Standing</p>
              <p className="mt-2 text-sm font-semibold text-light-text">Semester Topper and KEC Honor Award Recipient</p>
              <p className="text-sm text-light-text/70">Recognized multiple times through semester scholarships and academic distinction</p>
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
            <p className="font-semibold text-neon-blue">Banking Relevance</p>
            <p className="mt-1">Fraud detection, predictive risk modeling, and AI automation pipelines for decision support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
