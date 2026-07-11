import React from 'react';

function ResearchFocus() {
  const topics = [
    {
      title: 'Transformer Architectures',
      explanation: 'Investigating core components of Transformers to improve efficiency and adaptability across domains.',
    },
    {
      title: 'Positional Representation Learning',
      explanation: 'Studying how models encode sequence order and how robust positional encodings improve context reasoning.',
    },
    {
      title: 'Long-context Modeling',
      explanation: 'Exploring techniques to allow language models to accurately retrieve and synthesize information over massive token windows.',
    },
    {
      title: 'Mechanistic Interpretability',
      explanation: 'Reverse-engineering neural networks to understand their internal representations and decision-making pathways.',
    },
    {
      title: 'AI Alignment',
      explanation: 'Researching methodologies to ensure AI systems reliably act in accordance with human intent and ethical principles.',
    },
    {
      title: 'Retrieval-Augmented Generation',
      explanation: 'Building systems that accurately ground language model outputs in external verified knowledge bases.',
    },
    {
      title: 'Trustworthy AI',
      explanation: 'Developing frameworks to evaluate model robustness, fairness, and safety before real-world deployment.',
    },
    {
      title: 'Representation Learning',
      explanation: 'Understanding how raw data is mapped into meaningful embeddings for downstream reasoning tasks.',
    },
    {
      title: 'Natural Language Processing',
      explanation: 'Advancing language models for low-resource languages and cross-lingual understanding.',
    },
  ];

  return (
    <section id="research" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Research Focus</h2>
          <p className="mx-auto mt-4 max-w-3xl text-light-text/70">
            Dedicated to understanding and improving the core components of modern artificial intelligence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-xl border border-neon-purple/15 bg-surface-1 p-6 transition-all hover:border-neon-purple/40">
              <h3 className="text-lg font-semibold text-neon-purple">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-light-text/75">{topic.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchFocus;
