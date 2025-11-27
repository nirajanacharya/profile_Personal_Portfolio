import React from 'react';

function Recommendations() {
  const recommendations = [
    {
      name: 'Dr. James Mitchell',
      text: 'Nirajan demonstrated exceptional research rigor and problem-solving ability in developing the crop recommendation system. His ability to translate complex ML concepts into practical farmer-friendly tools was remarkable.',
    },
    {
      name: 'Sofia Garcia',
      text: 'Working with Nirajan on AI for social impact initiatives has been transformative. His leadership, technical depth, and commitment to inclusive innovation set him apart as a true changemaker.',
    },
    {
      name: 'Chen Wei',
      text: 'Nirajan\'s contributions to our open-source ecosystem have been invaluable. He doesn\'t just write code—he thinks deeply about user experience and community impact. A developer you want on your team.',
    },
    {
      name: 'Emma Thompson',
      text: 'Nirajan\'s work exemplifies what we look for: technical excellence combined with genuine passion for mentoring others and scaling impact across communities.',
    },
    {
      name: 'Marcus Johnson',
      text: 'Nirajan\'s vision for building grassroots tech communities is infectious. His ability to inspire and mobilize young developers while maintaining technical credibility has been a cornerstone of our success.',
    },
  ];

  return (
    <section id="recommendations" className="py-20 bg-darker px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-purple opacity-3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-16">&lt;Recommendations /&gt;</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-neon-cyan/20 bg-[#060e1c]/70 backdrop-blur-sm p-6 hover:border-neon-cyan/50 transition-all shadow-lg hover:shadow-neon-cyan/10"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full group-hover:w-full transition-all"></div>

              <div className="space-y-4 mt-2">
                <div>
                  <h3 className="text-lg font-bold text-light-text group-hover:text-neon-cyan/90 transition-colors">
                    {rec.name}
                  </h3>
                </div>

                <p className="text-light-text/75 text-sm leading-relaxed italic">
                  "{rec.text}"
                </p>

                <div className="flex gap-1 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-neon-pink/80 hover:text-neon-pink transition-colors"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
