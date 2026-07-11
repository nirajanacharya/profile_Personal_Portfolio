import React from 'react';

function Leadership() {
  const roles = [
    { title: 'Gold Student Ambassador', org: 'Microsoft Learn', desc: 'Leading technical communities and facilitating cloud computing skills.' },
    { title: 'Local Chapter Leader', org: 'Omdena', desc: 'Driving AI for good initiatives and public health data challenges.' },
    { title: 'Cohort Member', org: 'United States Youth Council Nepal', desc: 'Engaging in youth-led civil society and leadership programs.' },
    { title: 'Global Youth Community Representative', org: 'UNESCO', desc: 'Representing youth perspectives on education and technology.' },
    { title: 'Editorial Team Member', org: 'Technical Publications', desc: 'Contributing to technical editorial processes and content curation.' },
    { title: 'Peer Reviewer', org: 'International Research Journal of Multidisciplinary Technovation', desc: 'Reviewing AI/ML research for Scopus-Indexed academic journals.' },
  ];

  return (
    <section id="leadership" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Leadership & Community</h2>
          <p className="mt-3 text-light-text/70">Building communities, mentoring peers, and leading technology for impact initiatives.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((item) => (
            <div key={item.title} className="rounded-xl border border-neon-purple/20 bg-surface-1/80 p-5 transition-all hover:-translate-y-1 hover:border-neon-purple/45">
              <h3 className="mt-1 text-lg font-semibold text-neon-purple">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-light-text/85">{item.org}</p>
              <p className="mt-2 text-sm text-light-text/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
