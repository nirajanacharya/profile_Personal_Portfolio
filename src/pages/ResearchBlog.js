import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResearchBlog() {
  const [activeTab, setActiveTab] = useState('research');

  const research = [
    {
      title: 'Surakshit Web: AI-Powered Phishing Detection',
      publisher: 'INJET',
      year: '2025',
      link: 'https://doi.org/10.3126/injet.v2i2.78614',
      doi: '10.3126/injet.v2i2.78614',
      description: 'AI-driven phishing detection research to strengthen secure web behavior and threat awareness.',
    },
    {
      title: 'Crop Recommendation System Using Machine Learning',
      publisher: 'INJET',
      year: '2024',
      link: 'https://doi.org/10.3126/injet.v1i2.66708',
      doi: '10.3126/injet.v1i2.66708',
      description: 'Machine learning research for crop planning recommendations based on contextual data signals.',
    },
  ];

  const writings = [
    {
      title: 'From Village Dreams to Global Impact',
      platform: 'Microsoft Tech Community',
      year: '2024',
      link: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/from-village-dreams-to-global-impact-my-journey-as-a-microsoft/ba-p/4268226',
      description: 'Community and leadership journey through technical education and impact-building.',
    },
    {
      title: 'Why Is It Called Logistic Regression and Not Logistic Classification?',
      platform: 'Medium',
      year: '2024',
      link: 'https://medium.com/@nirajan.acharya777/why-is-it-called-logistic-regression-and-not-logistic-classification-c201889d268c',
      description: 'Accessible machine learning explainer on terminology and statistical interpretation.',
    },
    {
      title: 'Full Writing Archive',
      platform: 'Medium',
      year: 'Ongoing',
      link: 'https://medium.com/@nirajan.acharya777',
      description: 'Broader writing stream on AI, data practice, and practical software engineering.',
    },
  ];

  return (
    <section id="main-content" tabIndex="-1" className="min-h-screen bg-gradient-to-b from-darker via-[#061224] to-darker px-5 pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/45 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-neon-cyan hover:bg-neon-cyan/10"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-light-text md:text-5xl">Publications and Writing Hub</h1>
          <p className="mx-auto mt-3 max-w-3xl text-light-text/75">
            Peer-reviewed publications, technical writing, and community-facing content focused on trustworthy and practical AI.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('research')}
            className={`rounded-full border px-6 py-2 text-sm font-semibold transition-all ${
              activeTab === 'research'
                ? 'border-neon-cyan bg-neon-cyan text-darker'
                : 'border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10'
            }`}
          >
            Research Publications
          </button>
          <button
            onClick={() => setActiveTab('writing')}
            className={`rounded-full border px-6 py-2 text-sm font-semibold transition-all ${
              activeTab === 'writing'
                ? 'border-neon-cyan bg-neon-cyan text-darker'
                : 'border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10'
            }`}
          >
            Technical Writing
          </button>
        </div>

        {activeTab === 'research' && (
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((item) => (
              <article key={item.doi} className="rounded-xl border border-neon-cyan/20 bg-[#061122]/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/75">{item.publisher} | {item.year}</p>
                <h2 className="mt-2 text-xl font-semibold text-light-text">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-light-text/75">{item.description}</p>
                <p className="mt-3 text-sm text-neon-cyan/85">DOI: {item.doi}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-blue"
                >
                  Open Publication
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'writing' && (
          <div className="grid gap-6 md:grid-cols-2">
            {writings.map((item) => (
              <article key={item.title} className="rounded-xl border border-neon-cyan/20 bg-[#061122]/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/75">{item.platform} | {item.year}</p>
                <h2 className="mt-2 text-xl font-semibold text-light-text">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-light-text/75">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-blue"
                >
                  Read Article
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResearchBlog;
