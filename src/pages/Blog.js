import React from 'react';

function Blog() {
  const posts = [
    {
      title: 'From Village Dreams to Global Impact: My Journey as a Microsoft Learn Student Ambassador',
      platform: 'Microsoft Tech Community',
      date: 'Sep 2024',
      description: 'A personal and technical reflection on community-building, teaching, and creating practical pathways for learners.',
      tags: ['Leadership', 'Community', 'Career'],
      link: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/from-village-dreams-to-global-impact-my-journey-as-a-microsoft/ba-p/4268226',
    },
    {
      title: 'Why Is It Called Logistic Regression and Not Logistic Classification?',
      platform: 'Medium',
      date: 'Aug 2024',
      description: 'A concise explanation of statistical roots behind one of the most used machine learning algorithms.',
      tags: ['Machine Learning', 'Statistics', 'Education'],
      link: 'https://medium.com/@nirajan.acharya777/why-is-it-called-logistic-regression-and-not-logistic-classification-c201889d268c',
    },
    {
      title: 'Medium Writing Archive',
      platform: 'Medium',
      date: 'Ongoing',
      description: 'Long-form notes on AI, data science, and practical software delivery lessons.',
      tags: ['AI', 'Data Science', 'Engineering'],
      link: 'https://medium.com/@nirajan.acharya777',
    },
  ];

  return (
    <section id="main-content" tabIndex="-1" className="min-h-screen bg-gradient-to-b from-darker via-[#071428] to-darker px-5 pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-light-text md:text-5xl">Technical Writing</h1>
          <p className="mt-4 max-w-3xl text-light-text/75">
            Writing focused on responsible AI, data science literacy, community leadership, and practical engineering lessons.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-neon-cyan/20 bg-[#071223]/80 p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-neon-cyan/75">{post.platform}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-light-text/60">{post.date}</p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-light-text">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-light-text/75">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold text-neon-cyan/85">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-blue"
              >
                Read Article
                <i className="fas fa-external-link-alt"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
