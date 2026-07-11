import React from 'react';

function Awards() {
  const honors = [
    { title: 'Pride of KEC', year: '2025', org: 'Kantipur Engineering College' },
    { title: 'Municipal Appreciation (Emergency Response System)', year: '2024', org: 'Shivaraj Municipality' },
    { title: 'Semester Scholarship Recipient (Multiple Terms)', year: '2021-2025', org: 'Kantipur Engineering College' },
    { title: 'AI Engineering Build Camp Graduate', year: '2024', org: 'AI Build Camp' },
    { title: 'KEC Honor Award for Academic Excellence', year: '2025', org: 'Kantipur Engineering College' },
  ];

  return (
    <section id="honors" className="bg-gradient-to-b from-darker via-[#061122] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Honors & Awards</h2>
          <p className="mt-3 text-light-text/70">Academic distinction and recognition for impactful technical contributions.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {honors.map((item) => (
            <div key={item.title} className="rounded-xl border border-neon-cyan/20 bg-[#071426]/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/70">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-light-text">{item.title}</h3>
              <p className="mt-1 text-sm text-light-text/65">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
