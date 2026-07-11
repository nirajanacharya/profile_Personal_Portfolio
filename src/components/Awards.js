import React from 'react';

function Awards() {
  const honors = [
    { title: 'Pride of KEC Award for Academic Excellence', org: 'Kantipur Engineering College' },
    { title: 'Gold Microsoft Learn Student Ambassador', org: 'Microsoft' },
    { title: 'Municipal Appreciation Award', org: 'Shivaraj Municipality' },
    { title: 'Multiple Academic Scholarships', org: 'Kantipur Engineering College' },
    { title: 'AI Engineering Build Camp Graduate', org: 'AI Build Camp' },
  ];

  return (
    <section id="honors" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Awards & Recognition</h2>
          <p className="mt-3 text-light-text/70">Academic distinction and recognition for impactful technical contributions.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {honors.map((item) => (
            <div key={item.title} className="rounded-xl border border-neon-purple/20 bg-surface-1/80 p-5">
              <h3 className="text-lg font-semibold text-light-text">{item.title}</h3>
              <p className="mt-1 text-sm text-light-text/65">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
