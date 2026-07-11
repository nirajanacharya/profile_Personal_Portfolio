import React from 'react';

function Research() {
  const papers = [
    {
      title: 'Surakshit Web: AI-Powered Phishing Detection',
      venue: 'INJET',
      doi: '10.3126/injet.v2i2.78614',
      year: '2025',
      description:
        'Co-authored work focused on AI-driven phishing detection to improve web safety through model-assisted threat classification.',
      link: 'https://doi.org/10.3126/injet.v2i2.78614',
      tags: ['Cybersecurity', 'AI Detection', 'Applied ML'],
    },
    {
      title: 'Crop Recommendation System Using Machine Learning',
      venue: 'INJET',
      doi: '10.3126/injet.v1i2.66708',
      year: '2024',
      description:
        'Co-authored machine learning study for context-aware crop recommendation supporting practical agricultural decision-making.',
      link: 'https://doi.org/10.3126/injet.v1i2.66708',
      tags: ['Machine Learning', 'Predictive Modeling', 'Agritech'],
    },
    {
      title: 'Hybrid CRNN with Seq2Seq Attention Mechanism for Handwriting Recognition',
      venue: 'Under Review',
      doi: 'N/A',
      year: '2025',
      description:
        'Research on offline handwriting recognition utilizing a hybrid Convolutional Recurrent Neural Network (CRNN) architecture combined with sequence-to-sequence attention mechanisms.',
      link: '#',
      tags: ['Computer Vision', 'Deep Learning', 'OCR'],
    },
  ];

  const researchAreas = [
    'Transformer Architectures',
    'Positional Representation Learning',
    'Long Context Models',
    'Mechanistic Interpretability',
    'Trustworthy AI & AI Alignment',
    'Retrieval-Augmented Generation (RAG)',
    'Natural Language Processing',
  ];

  return (
    <section id="main-content" tabIndex="-1" className="min-h-screen bg-gradient-to-b from-darker via-[#08162d] to-darker px-5 pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <h1 className="text-4xl font-bold text-light-text md:text-5xl">Research and Publications</h1>
            <p className="mt-4 text-light-text/75 leading-relaxed">
              Published AI/ML research with applied focus on security and decision systems. I also contribute as a peer reviewer for the
              International Research Journal of Multidisciplinary Technovation (Scopus Indexed).
            </p>
          </div>
          <div className="rounded-xl border border-neon-cyan/20 bg-[#071326]/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-neon-cyan/80">Research Focus</p>
            <ul className="mt-3 space-y-2 text-sm text-light-text/75">
              {researchAreas.map((area) => (
                <li key={area} className="flex gap-2">
                  <span className="text-neon-cyan">-</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {papers.map((paper) => (
            <article key={paper.doi} className="rounded-2xl border border-neon-cyan/20 bg-[#071223]/80 p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/75">{paper.venue} | {paper.year}</p>
              <h2 className="mt-2 text-2xl font-semibold text-light-text">{paper.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-light-text/75">{paper.description}</p>
              <p className="mt-3 text-sm text-neon-cyan/80">DOI: {paper.doi}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold text-neon-cyan/85">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-blue"
              >
                View Publication
                <i className="fas fa-external-link-alt"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
