import React from 'react';

function About() {
  const achievements = [
    {
      title: 'UNESCO Global Youth Community',
      desc: 'Supporting global youth initiatives that blend technology, education, and social impact.',
      tags: ['Leadership', 'Global Impact'],
      icon: 'fa-globe'
    },
    {
      title: 'Omdena Chapter Leader',
      desc: 'Building inclusive AI solutions with a diverse team of innovators in Nepal.',
      tags: ['AI', 'Community'],
      icon: 'fa-users-cog'
    },
    {
      title: 'Open Source Contributor',
      desc: 'Authoring features, documentation, and optimizations across multiple OSS ecosystems.',
      tags: ['Collaboration', 'Code'],
      icon: 'fa-code-branch'
    },
    {
      title: 'Postman Student Expert',
      desc: 'Advocating best practices in API lifecycle management for student communities.',
      tags: ['APIs', 'Testing'],
      icon: 'fa-vial'
    },
    {
      title: 'LeapFrog Student Partner 2024',
      desc: 'Driving campus innovation and mentorship through LeapFrog learning initiatives.',
      tags: ['Innovation', 'Growth'],
      icon: 'fa-rocket'
    },
  ];

  const stats = [
    { label: 'Years in Tech', value: '4+', accent: 'border-neon-cyan/60' },
    { label: 'Projects Delivered', value: '28', accent: 'border-neon-purple/60' },
    { label: 'Community Events', value: '35+', accent: 'border-neon-pink/60' },
    { label: 'Research & Publications', value: '6', accent: 'border-neon-orange/60' },
  ];

  const focusAreas = ['Full-Stack Engineering', 'Developer Advocacy', 'AI for Good', 'Open Source Strategy'];

  return (
    <section className="py-24 px-5 bg-gradient-to-b from-darker via-darker to-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-[600px] h-[600px] bg-neon-cyan/30 blur-3xl rounded-full absolute -top-48 -left-48"></div>
        <div className="w-[500px] h-[500px] bg-neon-purple/20 blur-3xl rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30 rounded-full">
            <i className="fas fa-user-astronaut"></i> Profile Snapshot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-text">&lt;About Nirajan /&gt;</h2>
          <p className="text-light-text/80 max-w-2xl mx-auto">
            Engineering human-centered digital products, amplifying developer communities, and championing ethical tech.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[260px,1fr] items-stretch">
          <div className="bg-code-bg/80 border border-neon-cyan/25 rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-neon-cyan/10">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-44 h-44 mx-auto rounded-2xl overflow-hidden border border-neon-cyan/60">
                  <img src="/images/profile.jpg" alt="Nirajan Acharya" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-neon-purple/40 rounded-xl blur-xl"></div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-neon-cyan">Nirajan Acharya</h3>
                <p className="text-sm text-light-text/70">Full-Stack Developer • Community Leader • Research Contributor</p>
              </div>
              <div className="grid gap-3">
                {focusAreas.map((area) => (
                  <span key={area} className="px-3 py-2 text-xs font-semibold tracking-wide text-neon-cyan border border-neon-cyan/30 rounded-lg bg-neon-cyan/5 text-center">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-light/10 pt-5 grid gap-4 text-sm text-light-text/70">
              <p className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-neon-cyan"></i> Kathmandu, Nepal</p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-neon-cyan"></i> nirajan.acharya777@gmail.com</p>
              <p className="flex items-center gap-2"><i className="fab fa-github text-neon-cyan"></i> github.com/nirajanacharya</p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-code-bg/80 border border-neon-purple/25 rounded-2xl p-8 shadow-lg shadow-neon-purple/10">
              <p className="text-light-text/90 leading-relaxed text-base md:text-lg">
                I craft resilient digital experiences that balance product velocity with thoughtful developer practices. My journey started with grassroots coding workshops in rural communities and has grown into building scalable platforms, orchestrating AI collaborations, and demystifying complex tech for learners worldwide.
              </p>
              <p className="text-light-text/70 leading-relaxed text-base md:text-lg mt-6">
                Between research-backed problem solving and open source experimentation, I focus on creating solutions that empower others to build, learn, and lead. When I am not shipping features, you will find me mentoring hackathons, documenting APIs, or exploring how AI can unlock new opportunities for emerging economies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`bg-code-bg/70 border ${stat.accent} rounded-xl p-5 text-center shadow-lg shadow-black/20`}> 
                  <p className="text-3xl font-bold text-neon-cyan">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-light-text/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-neon-pink/15 border border-neon-pink/40 flex items-center justify-center text-neon-pink text-xl">
              <i className="fas fa-star"></i>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-light-text">Highlights & Recognitions</h3>
              <p className="text-light-text/60 text-sm">Selected milestones that shape how I build, teach, and collaborate.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative bg-code-bg/80 border border-light/10 rounded-2xl p-6 overflow-hidden group hover:border-neon-cyan/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-purple/0 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-cyan/15 border border-neon-cyan/50 flex items-center justify-center text-neon-cyan text-lg">
                    <i className={`fas ${achievement.icon}`}></i>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-light-text font-semibold text-lg">{achievement.title}</h4>
                    <p className="text-light-text/65 text-sm leading-relaxed">{achievement.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
