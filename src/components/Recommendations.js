import React from 'react';

function Recommendations() {
  const signals = [
    {
      title: 'Research Credibility',
      detail: 'Published co-author in INJET and active peer reviewer for International Research Journal of Multidisciplinary Technovation (Scopus Indexed).',
      icon: 'fa-microscope',
    },
    {
      title: 'Teaching and Mentorship',
      detail: 'Lecturer mentoring undergraduate engineering projects and research-focused student initiatives.',
      icon: 'fa-chalkboard-teacher',
    },
    {
      title: 'Global Nonprofit Delivery',
      detail: 'Delivered practical technical systems and optimization support for organizations in Nepal, USA, Israel, and Tanzania.',
      icon: 'fa-globe-asia',
    },
    {
      title: 'AI Governance Focus',
      detail: 'Hands-on work in LLM reliability, transparent AI behavior analysis, and compliance-ready AI system design.',
      icon: 'fa-balance-scale',
    },
  ];

  return (
    <section id="impact" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Evidence of Impact</h2>
          <p className="mt-3 text-light-text/70">
            Portfolio claims are grounded in published work, teaching outcomes, and production-grade project delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {signals.map((signal) => (
            <div key={signal.title} className="rounded-xl border border-neon-purple/20 bg-surface-1/80 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-purple/35 bg-neon-purple/10 text-neon-purple">
                  <i className={`fas ${signal.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-light-text">{signal.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-light-text/75">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
