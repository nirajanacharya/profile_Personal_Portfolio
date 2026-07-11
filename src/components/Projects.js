import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Cyber Sachet: Multilingual AI Legal & Cyber Assistant',
      description: 'Architected an AI-powered information retrieval system using Multilingual RAG. It democratizes access to cybersecurity knowledge and Nepali legal resources, bridging language barriers in critical public information.',
      tags: ['Multilingual RAG', 'LLMs', 'Information Retrieval', 'AI for Impact'],
    },
    {
      title: 'Shivaraj Emergency Response System',
      description: 'Developed a real-time emergency management web platform. The system was officially adopted by Shivaraj Municipality, earning a formal Municipal Appreciation for significantly improving local disaster response coordination.',
      tags: ['Real-time Web', 'Public Sector', 'Crisis Management', 'Local Governance'],
    },
    {
      title: 'Transformer Representation Learning',
      description: 'Ongoing independent research investigating the internal mechanisms of Transformer models. Focused on positional representation learning, long context handling, and advancing mechanistic interpretability for AI alignment.',
      tags: ['AI Research', 'Transformers', 'Mechanistic Interpretability', 'Alignment'],
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-darker via-[#071427] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Selected Technical Work</h2>
          <p className="mx-auto mt-4 max-w-3xl text-light-text/70">
            Delivered production and research-focused systems for nonprofits, academic institutions, public agencies, and AI startups.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-neon-cyan/20 bg-[#071223]/80 p-6 transition-all hover:-translate-y-1 hover:border-neon-cyan/45"
            >
              <h3 className="text-lg font-semibold leading-snug text-neon-cyan">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-light-text/75">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold text-neon-cyan/90">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
