import React from 'react';

function Timeline() {
  const experiences = [
    {
      period: 'Nov 2025 - Present',
      role: 'Lecturer',
      org: 'Kantipur Engineering College, Lalitpur',
      points: [
        'Teaching undergraduate Computer Engineering courses.',
        'Mentoring student academic projects and research initiatives.',
        'Supporting curriculum development and departmental activities.',
      ],
    },
    {
      period: 'Apr 2024 - Present (2 years)',
      role: 'Full Stack Web Developer and Artificial Intelligence Engineer',
      org: 'Upwork, Fiverr, PeoplePerHour',
      points: [
        'Delivering end-to-end web products, AI-powered features, and client-facing automation systems.',
        'Handling full project lifecycle: requirements, architecture, development, deployment, and optimization.',
      ],
    },
    {
      period: '2023 - Present',
      role: 'Freelance Developer (International Nonprofits and Impact Sector)',
      org: 'Remote',
      points: [
        'Delivered 12+ international projects and multiple freelancing assignments across nonprofit and mission-driven organizations.',
        'Improved outreach, reporting, analytics, and process automation across distributed teams.',
      ],
    },
    {
      period: 'Feb 2024 - Jul 2024',
      role: 'Pathao Ambassador',
      org: 'Pathao Nepal',
      points: [
        'Represented the Pathao brand in community-facing programs and engagement initiatives.',
        'Supported awareness and communication efforts across targeted events and campaigns.',
      ],
    },
    {
      period: 'Feb 2024 - Jul 2024',
      role: 'Junior AI Developer Intern',
      org: 'Anachroni (AI LLM Startup), Remote',
      points: [
        'Contributed to LLM optimization using prompt engineering, response evaluation, and dataset refinement.',
        'Enhanced reliability and contextual accuracy through iterative testing and validation.',
        'Supported ethical AI documentation, explainability, and compliance-ready system ideation.',
      ],
    },
    {
      period: 'Mar 2024',
      role: 'Collaborator, Data Science for Public Health Challenge',
      org: 'Omdena Local Chapter, Remote',
      points: [
        'Analyzed tuberculosis trends with Python and Pandas using automation scripts.',
        'Produced predictive visualizations and risk pattern analytics with transferability to fraud and anomaly detection.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-darker via-[#08152b] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Experience Timeline</h2>
          <p className="mt-3 text-light-text/70">Applied AI engineering, teaching, and impact-focused software delivery.</p>
        </div>

        <div className="relative space-y-6 border-l-2 border-neon-cyan/30 pl-6 md:pl-10">
          {experiences.map((item) => (
            <article key={item.role} className="relative rounded-xl border border-neon-cyan/20 bg-[#061121]/80 p-6">
              <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full border border-neon-cyan bg-[#0d2949] md:-left-[46px]"></div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/80">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-light-text">{item.role}</h3>
              <p className="text-sm text-light-text/65">{item.org}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-light-text/75">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-neon-cyan">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
