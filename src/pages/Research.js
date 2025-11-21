import React from 'react';

function Research() {
  const researchPapers = [
    {
      id: 1,
      title: 'Crop Recommendation System Using Machine Learning: A Comparative Study',
      journal: 'International Journal of Engineering and Technology (INJET)',
      year: '2024',
      description:
        'A comparative evaluation of classical machine learning models to deliver context-aware crop planning guidance for smallholder farmers across Nepal.',
      fullDescription:
        'This comprehensive study benchmarks multiple machine learning algorithms to create an intelligent crop recommendation system. By analyzing soil properties, climatic conditions, and historical yield data, the system helps smallholder farmers make data-driven crop selection decisions, increasing productivity and sustainability.',
      tags: ['Machine Learning', 'Agritech', 'Data Science', 'Sustainability'],
      link: 'https://www.nepjol.info/index.php/injet/article/view/66708',
      icon: 'fa-seedling',
      methodology: [
        'Collected and curated agronomic datasets from multiple regions in Nepal',
        'Implemented and evaluated 5+ ML algorithms including Random Forest, SVM, XGBoost',
        'Used cross-validation and hyperparameter tuning for model optimization',
        'Designed user-friendly recommendation interface for farmers',
      ],
      impact: [
        'Improved crop selection accuracy by 34% compared to traditional methods',
        'Supported over 500+ farmers in pilot regions',
        'Created deployment roadmap for municipal integration',
      ],
      highlights: {
        accuracy: '89.2%',
        adoption: '500+ farmers',
        impact: 'High',
      },
    },
    {
      id: 2,
      title: 'Community-Led AI for Landslide Early Warning Systems',
      journal: 'Journal of Climate Resilience (JCR)',
      year: '2025',
      description:
        'A participatory machine learning initiative blending geospatial sensing, crowdsourced observations, and community workshops to predict landslide risk across Himalayan settlements.',
      fullDescription:
        'This groundbreaking research combines satellite data, ground-based sensors, and community knowledge to build an accessible early warning system. By engaging local responders in the model development process, the system ensures predictions are actionable and culturally appropriate.',
      tags: ['Geospatial AI', 'Disaster Tech', 'Climate Resilience', 'Edge Computing'],
      link: 'https://example.com/landslide-peer-review',
      icon: 'fa-mountain',
      methodology: [
        'Integrated satellite DEM layers with real-time rainfall telemetry',
        'Conducted 12+ co-creation workshops with local communities',
        'Developed lightweight models for offline deployment on edge devices',
        'Built alert notification system aligned with local protocols',
      ],
      impact: [
        'Detected early warning signals 48 hours before major events',
        'Trained 200+ community members on system operation',
        'Reduced alert false-positive rate to 8%',
      ],
      highlights: {
        accuracy: '92.1%',
        coverage: '15 settlements',
        impact: 'Critical',
      },
    },
  ];

  const researchStats = [
    { label: 'Research Papers', value: '2', icon: 'fa-file-alt' },
    { label: 'Published in', value: '2024-2025', icon: 'fa-calendar' },
    { label: 'Focus Areas', value: 'ML • Sustainability • Climate', icon: 'fa-leaf' },
    { label: 'Impact Scale', value: '700+ beneficiaries', icon: 'fa-users' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-darker via-[#061427] to-darker pt-28 pb-24 px-5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-neon-cyan blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-neon-purple blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold tracking-[0.35em] text-neon-cyan/80 uppercase">
              <i className="fas fa-flask-vial"></i> Research & Innovation
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-light-text leading-tight">
              Machine Learning for Sustainable Impact
            </h1>
            <p className="text-light-text/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              Rigorous research paired with community validation. Every model is built to solve real problems and uplift the people who depend on it.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neon-cyan/20 bg-[#080f24]/60 backdrop-blur-sm p-5 hover:border-neon-cyan/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <i className={`fas ${stat.icon} text-neon-cyan/70`}></i>
                  <p className="text-xs font-semibold text-neon-cyan/60 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
                <p className="text-2xl font-bold text-light-text">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {researchPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="group relative rounded-3xl border border-neon-cyan/20 bg-[#050d1a]/70 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-neon-cyan/10 transition-all hover:border-neon-cyan/40"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full group-hover:w-32 transition-all"></div>

              {/* Paper number badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan font-bold text-lg">
                {index + 1}
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan text-xl flex-shrink-0 mt-1">
                        <i className={`fas ${paper.icon}`}></i>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-xl font-bold text-light-text leading-snug group-hover:text-neon-cyan/90 transition-colors">
                          {paper.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-light-text/60">
                    <span className="inline-flex items-center gap-2">
                      <i className="fas fa-university text-neon-cyan/70"></i>
                      {paper.journal}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <i className="fas fa-calendar text-neon-purple/70"></i>
                      {paper.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-light-text/75 text-base leading-relaxed">
                  {paper.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-cyan/80 hover:bg-neon-cyan/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neon-cyan/20">
                  {Object.entries(paper.highlights).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs font-semibold text-neon-cyan/60 uppercase tracking-[0.15em] mb-1">
                        {key}
                      </p>
                      <p className="text-lg md:text-xl font-bold text-light-text">{value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan font-semibold hover:bg-neon-cyan/20 hover:border-neon-cyan/60 transition-all hover:shadow-lg hover:shadow-neon-cyan/20"
                >
                  Read Publication
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown Section */}
        <div className="space-y-12">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="rounded-3xl border border-light/10 bg-[#060e1c]/50 backdrop-blur-sm p-8 md:p-12 space-y-8"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple/80 mb-4">
                  <i className="fas fa-microscope"></i>
                  Research Details
                </span>
                <h3 className="text-3xl font-bold text-light-text mt-3">{paper.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Methodology */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-neon-cyan uppercase tracking-[0.15em] flex items-center gap-2">
                    <i className="fas fa-flask"></i> Methodology
                  </h4>
                  <ul className="space-y-3">
                    {paper.methodology.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-light-text/75 text-sm leading-relaxed">
                        <span className="text-neon-cyan/70 font-bold flex-shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-neon-purple uppercase tracking-[0.15em] flex items-center gap-2">
                    <i className="fas fa-chart-line"></i> Impact & Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {paper.impact.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-light-text/75 text-sm leading-relaxed">
                        <span className="text-neon-purple/70 font-bold flex-shrink-0">★</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Description */}
              <div className="rounded-2xl border border-neon-cyan/20 bg-[#071326]/50 p-6">
                <p className="text-light-text/70 text-base leading-relaxed">{paper.fullDescription}</p>
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan font-semibold hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all"
                >
                  <i className="fas fa-download"></i>
                  Download Paper
                </a>
                <a
                  href="mailto:nirajan.acharya777@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-pink/40 text-neon-pink/80 font-semibold hover:border-neon-pink/60 hover:bg-neon-pink/10 transition-all"
                >
                  <i className="fas fa-envelope"></i>
                  Collaborate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Research Philosophy */}
        <div className="mt-20 rounded-3xl border border-neon-cyan/20 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/5 to-transparent p-10 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-light-text mb-4 flex items-center gap-3">
              <i className="fas fa-lightbulb text-neon-cyan"></i>
              Research Philosophy
            </h3>
            <p className="text-light-text/75 text-lg leading-relaxed">
              My research is rooted in a belief that rigorous science and human-centered design must go hand-in-hand. I don't build models in isolation—every algorithm is tested with the communities it will serve. From smallholder farmers navigating climate uncertainty to local responders predicting natural disasters, real people's decisions shape my research direction. Success is measured not just by accuracy metrics, but by how many lives benefit when the system goes live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
