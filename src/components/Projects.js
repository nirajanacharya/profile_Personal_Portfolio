import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'AI Crop Recommendation System',
      description: 'Machine learning system that recommends optimal crops based on soil and climate conditions.',
      tags: ['Python', 'ML', 'Agriculture'],
      github: '#',
      link: '#',
    },
    {
      title: 'Full Stack E-Commerce Platform',
      description: 'Complete e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      link: '#',
    },
    {
      title: 'SEO Analytics Dashboard',
      description: 'Real-time analytics dashboard for tracking SEO metrics and competitor analysis.',
      tags: ['React', 'Chart.js', 'Firebase'],
      github: '#',
      link: '#',
    },
    {
      title: 'Community Management Platform',
      description: 'Platform for managing community events, member profiles, and engagement metrics.',
      tags: ['Next.js', 'PostgreSQL', 'GraphQL'],
      github: '#',
      link: '#',
    },
    {
      title: 'Open Source Contributions',
      description: 'Multiple contributions to open source projects including bug fixes, features, and documentation.',
      tags: ['Open Source', 'GitHub', 'Collaboration'],
      github: '#',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-darker px-5 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan opacity-2 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-16">&lt;Projects /&gt;</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-code-bg rounded-xl p-6 border border-neon-cyan border-opacity-20 hover:border-opacity-50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-neon-cyan/20 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              <h3 className="text-neon-cyan text-lg font-bold mb-3">{project.title}</h3>

              <p className="text-light-text text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-neon-cyan bg-opacity-10 border border-neon-cyan border-opacity-50 text-neon-cyan rounded text-xs font-semibold hover:bg-opacity-20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-neon-cyan hover:text-neon-purple transition-colors flex items-center gap-1 font-bold"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.link}
                  className="text-neon-cyan hover:text-neon-pink transition-colors flex items-center gap-1 font-bold"
                  title="Live Demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
