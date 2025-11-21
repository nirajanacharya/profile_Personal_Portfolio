import React, { useState, useEffect } from 'react';

function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      date: '2024',
      title: 'Community Leadership',
      description: 'Established and leading the Nepal Chapter of Omdena, fostering AI innovation and community growth.',
    },
    {
      date: '2024',
      title: 'LeapFrog Student Partner',
      description: "Selected as a student partner for LeapFrog's technological advancement program.",
    },
    {
      date: '2023',
      title: 'Open Source Contributions',
      description: 'Active contributor to multiple high-profile open source projects with over 50+ merged PRs.',
    },
    {
      date: '2023',
      title: 'Postman Student Expert',
      description: 'Certified as Postman Student Expert, mastering API development and testing.',
    },
    {
      date: '2022',
      title: 'UNESCO Member',
      description: 'Joined UNESCO Global Youth Community for contributing to global initiatives.',
    },
    {
      date: '2021',
      title: 'Started Web Development',
      description: 'Began full-stack web development journey with React, Node.js, and MongoDB.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.timeline-item');
      const newVisibleItems = new Set();

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisibleItems.add(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="community" className="py-20 bg-darker px-5 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple opacity-15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-green opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-16">&lt;Leadership & Community /&gt;</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink rounded"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item transition-all duration-500 transform ${
                  visibleItems.has(index)
                    ? `opacity-100 ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'}`
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                <div
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-code-bg rounded-xl p-6 border border-neon-cyan border-opacity-20 hover:border-opacity-50 transition-all">
                      <p className="text-neon-cyan font-semibold text-sm mb-1">{item.date}</p>
                      <h3 className="text-neon-cyan text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-light-text leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-neon-purple border-4 border-darker rounded-full relative z-10"></div>
                  </div>

                  {/* Spacing */}
                  <div className="flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
