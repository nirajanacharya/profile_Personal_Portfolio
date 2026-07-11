import React from 'react';

function Publications() {
  const papers = [
    {
      title: 'Surakshit Web: AI-Powered Phishing Detection Using Machine Learning',
      venue: 'INJET',
      year: '2025',
      doi: '10.3126/injet.v2i2.78614',
      description: 'Research focused on AI-driven phishing detection to improve web safety through model-assisted threat classification.',
      link: 'https://doi.org/10.3126/injet.v2i2.78614',
    },
    {
      title: 'Crop Recommendation System Using Machine Learning: A Comparative Study',
      venue: 'INJET',
      year: '2024',
      doi: '10.3126/injet.v1i2.66708',
      description: 'Machine learning study for context-aware crop recommendation supporting practical agricultural decision-making.',
      link: 'https://doi.org/10.3126/injet.v1i2.66708',
    },
    {
      title: 'Hybrid CRNN with Seq2Seq Attention Mechanism for Handwriting Recognition',
      venue: 'INJET',
      year: '2026',
      doi: '10.3126/injet.v3i2.95148',
      description: 'Research on offline handwriting recognition utilizing a hybrid Convolutional Recurrent Neural Network (CRNN) architecture combined with sequence-to-sequence attention mechanisms.',
      link: 'https://doi.org/10.3126/injet.v3i2.95148',
    },
  ];

  return (
    <section id="publications" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Publications</h2>
          <p className="mx-auto mt-4 max-w-3xl text-light-text/70">
            Published AI/ML research with an applied focus on security and decision systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <article key={paper.title} className="flex flex-col rounded-2xl border border-neon-purple/20 bg-surface-1/80 p-7 transition-all hover:-translate-y-1 hover:border-neon-purple/45">
              <p className="text-xs font-semibold uppercase tracking-wide text-neon-purple/75">{paper.venue} | {paper.year}</p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-light-text">{paper.title}</h3>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-light-text/75">{paper.description}</p>
              {paper.doi !== 'N/A' && (
                <p className="mt-4 text-xs font-medium text-neon-purple/80">DOI: {paper.doi}</p>
              )}
              {paper.link !== '#' && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-max items-center gap-2 text-sm font-semibold text-neon-purple hover:text-neon-pink"
                >
                  View Publication
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
