import React from 'react';

function Workshops() {
  const events = [
    { title: 'U.S. Embassy Book Bus Programme', category: 'Technology Education', desc: 'Facilitated digital literacy and technology outreach sessions across local communities.' },
    { title: 'National Knowledge Sharing Sessions', category: 'Keynote & Panel', desc: 'Presented insights on AI, technology access, and engineering career pathways.' },
    { title: 'Community Cybersecurity Workshops', category: 'Public Engagement', desc: 'Conducted numerous sessions focused on safe web behavior and digital hygiene.' },
    { title: 'Women-focused Digital Literacy Programs', category: 'Capacity Building', desc: 'Led specialized sessions to empower women in tech with actionable digital skills.' },
    { title: 'Student Mentorship', category: 'Mentoring', desc: 'Ongoing mentorship for students in AI, software engineering, and community building.' },
    { title: 'Technology for Social Impact', category: 'Advocacy', desc: 'Promoting the use of tech for public good through hackathons and community programs.' },
  ];

  return (
    <section id="workshops" className="bg-gradient-to-b from-darker via-surface-2 to-darker px-5 py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Workshops & Outreach</h2>
          <p className="text-light-text/75 leading-relaxed">
            Education and knowledge sharing are central to my mission. I have designed and delivered <strong>over 50 technical workshops</strong>, hackathons, and community programs focusing on AI, cybersecurity, and digital empowerment.
          </p>
          <div className="rounded-xl border border-neon-purple/20 bg-surface-1/80 p-6">
            <h3 className="text-4xl font-bold text-neon-purple">50+</h3>
            <p className="mt-2 text-sm font-medium text-light-text/80 uppercase tracking-wide">Workshops Facilitated</p>
          </div>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.title} className="rounded-lg border border-neon-purple/15 bg-surface-1 p-5 transition-all hover:border-neon-purple/40">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-light-text">{event.title}</h3>
                <span className="inline-flex max-w-max items-center rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-semibold text-neon-purple">
                  {event.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-light-text/75">{event.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Workshops;
