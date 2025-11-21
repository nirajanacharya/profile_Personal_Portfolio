import React from 'react';

function Recommendations() {
  const recommendations = [
    {
      name: 'Recommendation 1',
      role: 'Tech Community',
      text: 'Nirajan is an exceptional developer with great problem-solving skills and a passion for open source. His contributions to our projects have been invaluable.',
      image: '/images/profile.jpg',
    },
    {
      name: 'Recommendation 2',
      role: 'Leadership Team',
      text: 'Working with Nirajan on various initiatives has been a great experience. He brings both technical expertise and creative thinking to every project.',
      image: '/images/profile.jpg',
    },
  ];

  return (
    <section id="recommendations" className="py-20 bg-darker px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-purple opacity-3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-16">&lt;Recommendations /&gt;</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-code-bg rounded-xl p-8 border-2 border-neon-cyan border-opacity-30 hover:border-neon-purple hover:border-opacity-100 transition-all relative hover:shadow-lg hover:shadow-neon-purple/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-16 h-16 rounded-full border-3 border-neon-pink"
                />
                <div>
                  <h3 className="text-light font-bold text-lg">{rec.name}</h3>
                  <p className="text-neon-purple text-sm font-semibold">{rec.role}</p>
                </div>
              </div>

              <p className="text-light leading-relaxed italic">\"{rec.text}\"</p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-neon-pink" style={{animationDelay: `${i * 0.1}s`}}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
