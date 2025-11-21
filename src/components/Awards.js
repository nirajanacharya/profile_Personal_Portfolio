import React from 'react';

function Awards() {
  const awards = [
    {
      title: 'Honorary Certificate',
      organization: 'UNESCO',
      year: '2024',
    },
    {
      title: 'Innovation Award',
      organization: 'Tech Summit Nepal',
      year: '2024',
    },
    {
      title: 'Best Open Source Contributor',
      organization: 'GitHub Community',
      year: '2023',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-darker px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink opacity-15 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-16">&lt;Honors & Awards /&gt;</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-code-bg rounded-xl p-8 border border-neon-cyan border-opacity-20 hover:border-opacity-50 transition-all text-center"
            >
              <i className="fas fa-medal text-5xl text-neon-orange mb-4 block"></i>
              <h3 className="text-neon-cyan font-bold text-lg mb-2">{award.title}</h3>
              <p className="text-light-text text-sm mb-2 font-semibold">{award.organization}</p>
              <p className="text-light-text text-xs">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
