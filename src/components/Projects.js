import React from 'react';

function Projects() {
  const caseStudies = [
    {
      title: 'Cyber Sachet: Multilingual AI Legal & Cyber Assistant',
      description: 'Multilingual RAG system democratizing access to cybersecurity knowledge and Nepali legal resources by bridging language barriers.',
      points: [
        'Architected a Multilingual RAG pipeline for accurate cross-lingual retrieval.',
        'Designed document ingestion and indexing for comprehensive Nepali legal databases.',
        'Collaborated with municipalities, educators, and policy stakeholders to deploy responsible AI for public awareness.',
        'Improved factual consistency and reduced hallucination rates in legal query responses.',
      ],
      tags: ['Multilingual RAG', 'Legal Tech', 'Responsible AI', 'Community Impact'],
    },
    {
      title: 'Shivaraj Emergency Response System',
      description: 'Real-time multilingual emergency management platform bridging citizens in distress with municipal rapid response teams.',
      points: [
        'Developed scalable multilingual infrastructure for emergency coordination.',
        'Officially adopted by Shivaraj Municipality for active disaster response.',
        'Recognized with a formal Municipal Appreciation Award for improving local governance and crisis management.',
        'Measured significant impact in response coordination times and resource allocation.',
      ],
      tags: ['Real-time Web', 'Public Sector', 'Crisis Management', 'Local Governance'],
    },
    {
      title: 'Transformer Representation Learning',
      description: 'Independent research exploring Transformer internal mechanisms to advance mechanistic interpretability and AI alignment.',
      points: [
        'Investigating positional encoding methodologies and contextual representation learning.',
        'Exploring architectural modifications for efficient long-context language understanding.',
        'Analyzing representation geometries to understand how models encode abstract concepts.',
        'Contributing to the broader discourse on trustworthy and reliable AI systems.',
      ],
      tags: ['AI Research', 'Transformers', 'Mechanistic Interpretability', 'Alignment'],
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Featured Projects & Case Studies</h2>
          <p className="mx-auto mt-4 max-w-3xl text-light-text/70">
            Delivering production-scale systems, conducting AI research, and driving measurable social impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-neon-purple/20 bg-surface-1/80 p-7 transition-all hover:-translate-y-1 hover:border-neon-purple/45"
            >
              <h3 className="text-xl font-semibold leading-snug text-neon-purple">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-light-text/80">{project.description}</p>
              
              <ul className="mt-5 mb-6 flex-grow space-y-3 text-sm text-light-text/75">
                {project.points.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-neon-purple mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-neon-purple/10">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-semibold text-neon-purple/90">
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
