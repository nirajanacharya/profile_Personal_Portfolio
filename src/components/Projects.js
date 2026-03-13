import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Shivaraj Emergency Response System (Nepal)',
      description: 'Built a real-time multilingual emergency management web platform adopted by the municipality for response coordination.',
      tags: ['React', 'Real-time Web', 'Public Sector', 'Localization'],
    },
    {
      title: 'North Sound ACH (USA)',
      description: 'Guided LLM integration for documentation automation and process workflows to improve operational efficiency.',
      tags: ['LLM Integration', 'Workflow Automation', 'AI Documentation'],
    },
    {
      title: 'University of Haifa (Israel)',
      description: 'Enhanced data infrastructure and analytics systems to improve research efficiency and data-informed decisions.',
      tags: ['Data Engineering', 'Analytics', 'Research Systems'],
    },
    {
      title: 'Omdena Public Health Collaboration',
      description: 'Analyzed tuberculosis trends (2019-2023) using Python, Pandas, and automation scripts with predictive visualizations.',
      tags: ['Python', 'Pandas', 'Risk Analytics', 'Public Health'],
    },
    {
      title: 'Vets for Animal Welfare (VFAW)',
      description: 'Developed a website to improve outreach, program communication, and volunteer engagement.',
      tags: ['Frontend', 'Nonprofit Tech', 'Content Systems'],
    },
    {
      title: 'Digital Performance and SEO Programs',
      description: 'Delivered SEO, performance, and analytics optimization for USA and Tanzania impact organizations.',
      tags: ['Web Performance', 'SEO', 'Analytics Tracking'],
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
