import React from 'react';

function Blog() {
  const blogPosts = [
    {
      platform: 'Microsoft Tech Community',
      title: "From Village Dreams to Global Impact: My Journey as a Microsoft Learn Student Ambassador",
      description:
        'How a passion for technology, teaching, and community-building transformed local workshops into global developer impact.',
      tags: ['Microsoft', 'Leadership', 'Impact', 'Community'],
      link: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/from-village-dreams-to-global-impact-my-journey-as-a-microsoft/ba-p/4268226',
      icon: 'fab fa-microsoft',
      date: 'Sep 2024',
      readTime: '6 min read',
      category: 'Leadership',
      image: '/images/joining SFD.jpg',
    },
    {
      platform: 'Medium',
      title: 'Why Is It Called "Logistic Regression" and Not "Logistic Classification"?',
      description:
        'Demystifying the terminology behind one of the most widely used machine learning algorithms from a statistical lens.',
      tags: ['Machine Learning', 'Statistics', 'Mathematics'],
      link: 'https://medium.com/@nirajan.acharya777/why-is-it-called-logistic-regression-and-not-logistic-classification-c201889d268c',
      icon: 'fab fa-medium',
      date: 'Aug 2024',
      readTime: '5 min read',
      category: 'Data Science',
      image: '/images/training-5.jpg',
    },
    {
      platform: 'Dev.to',
      title: 'Designing Resilient API Gateways for Student Hackathons',
      description:
        'A practical guide to balancing rate limits, caching, and observability while mentoring early-stage builders during high-traffic events.',
      tags: ['APIs', 'Architecture', 'DevOps'],
      link: 'https://dev.to/nirajanacharya/designing-resilient-api-gateways-for-student-hackathons-4al7',
      icon: 'fab fa-dev',
      date: 'Jul 2024',
      readTime: '7 min read',
      category: 'Engineering',
      image: '/images/training-2.jpg',
    },
    {
      platform: 'Hashnode',
      title: 'From Meetup to Movement: Scaling Developer Communities Across Nepal',
      description:
        'Lessons on community design, sponsorship, and mentorship gathered while growing grassroots developer programs across multiple cities.',
      tags: ['Community', 'Leadership', 'DevRel'],
      link: 'https://nirajanacharya.hashnode.dev/scaling-developer-communities-across-nepal',
      icon: 'fas fa-users',
      date: 'May 2024',
      readTime: '8 min read',
      category: 'Community',
      image: '/images/training-6.jpg',
    },
    {
      platform: 'Substack',
      title: 'Developer Field Notes #12 — Hacktoberfest 2024 Recap',
      description:
        'A weekly briefing covering mentorship highlights, pull-request playbooks, and open-source wins from the Hacktoberfest season.',
      tags: ['Open Source', 'Hacktoberfest', 'Mentorship'],
      link: 'https://fieldnotes.nirajanacharya.com/p/hacktoberfest-2024-recap',
      icon: 'fas fa-pen-fancy',
      date: 'Oct 2024',
      readTime: '4 min read',
      category: 'Newsletter',
      image: '/images/award-lsp of the month2.jpg',
    },
    {
      platform: 'Medium',
      title: 'Building a Data Quality Pipeline for Civic Tech Dashboards',
      description:
        'Step-by-step blueprint for automating validation and anomaly detection in public sector analytics products.',
      tags: ['Data Engineering', 'Automation', 'Civic Tech'],
      link: 'https://medium.com/@nirajan.acharya777/building-a-data-quality-pipeline-for-civic-tech-dashboards-2b3f5c2cb4e6',
      icon: 'fas fa-database',
      date: 'Jan 2025',
      readTime: '9 min read',
      category: 'Data Engineering',
      image: '/images/training-3.jpg',
    },
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-darker via-[#081526] to-darker pt-28 pb-24 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-neon-cyan blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-neon-purple blur-[160px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] items-start mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-neon-cyan/80 uppercase">
              <i className="fas fa-rss"></i> Blog Archive
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-light-text leading-tight">
              Stories from the codebase, the classroom, and the community.
            </h1>
            <p className="text-light-text/70 text-base md:text-lg leading-relaxed">
              Long-form breakdowns, technical explainers, and field notes from the programs and developer communities I help grow. Each post distills real lessons you can apply right away.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-light-text/60">
              <div className="flex items-center gap-2">
                <i className="fas fa-calendar-alt text-neon-cyan"></i>
                Updated: Nov 2025
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-pen-nib text-neon-purple"></i>
                Deep dives & memos
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-signal text-neon-pink"></i>
                Impact-driven engineering
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:nirajan.acharya777@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-neon-cyan bg-neon-cyan px-6 py-3 text-sm font-semibold text-darker transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-cyan/30"
              >
                Pitch a collaboration
                <i className="fas fa-paper-plane"></i>
              </a>
              <a
                href="https://medium.com/@nirajan.acharya777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-neon-purple/60 px-6 py-3 text-sm font-semibold text-neon-purple transition-transform hover:-translate-y-1 hover:border-neon-purple hover:bg-neon-purple/10"
              >
                Follow on Medium
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>

          <a
            href={featuredPost.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-neon-cyan/40 bg-[#070f1f]/80 shadow-2xl shadow-neon-cyan/10 transition-all hover:-translate-y-2 hover:border-neon-cyan/70"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"
              style={{ backgroundImage: `url(${featuredPost.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-darker/20 via-[#081738]/60 to-[#070d18]/90"></div>
            <div className="relative p-8 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 bg-neon-cyan/20 px-3 py-1 text-xs font-semibold text-neon-cyan">
                <i className={`${featuredPost.icon}`}></i>
                Featured
              </span>
              <h2 className="text-2xl font-semibold text-light-text leading-tight group-hover:text-neon-cyan/90 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-light-text/75 text-sm leading-relaxed">
                {featuredPost.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-light-text/70">
                <span className="inline-flex items-center gap-2">
                  <i className="fas fa-calendar"></i>
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  {featuredPost.readTime}
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="fas fa-tag"></i>
                  {featuredPost.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan/80 group-hover:text-neon-cyan">
                Read the full story
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
                index === 0
                  ? 'border border-neon-cyan bg-neon-cyan text-darker shadow-lg shadow-neon-cyan/20'
                  : 'border border-neon-cyan/30 text-neon-cyan/80 hover:border-neon-cyan hover:bg-neon-cyan/10'
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.title}
              className="group relative h-full overflow-hidden rounded-2xl border border-light/10 bg-[#070f1f]/80 shadow-xl shadow-black/20 transition-all hover:-translate-y-2 hover:border-neon-purple/40"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-darker/20 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-light-text/70">
                  <span className="inline-flex items-center gap-2">
                    <i className={`${post.icon} text-neon-cyan`}></i>
                    {post.platform}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <i className="fas fa-clock text-neon-purple"></i>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-light-text leading-tight hover:text-neon-cyan/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-light-text/70 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-light-text/60">
                  <span className="inline-flex items-center gap-2">
                    <i className="fas fa-calendar text-neon-cyan"></i>
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-cyan/80 hover:text-neon-cyan"
                  >
                    Read article
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-neon-cyan/30 bg-[#070f1f]/70 p-6">
            <h3 className="text-lg font-semibold text-neon-cyan mb-3">What to expect</h3>
            <p className="text-light-text/70 text-sm leading-relaxed">
              Every story is backed by real experiments, data, or community programs. No fluff—only lessons you can adapt to your projects, classrooms, or developer circles.
            </p>
          </div>
          <div className="rounded-2xl border border-neon-purple/30 bg-[#090f23]/70 p-6">
            <h3 className="text-lg font-semibold text-neon-purple mb-3">Newsletter drops</h3>
            <p className="text-light-text/70 text-sm leading-relaxed">
              Subscribe to receive occasional brain dumps—frameworks, resources, and event recaps—directly from my work inside global developer communities.
            </p>
          </div>
          <div className="rounded-2xl border border-neon-pink/30 bg-[#120c1c]/70 p-6">
            <h3 className="text-lg font-semibold text-neon-pink mb-3">Share your story</h3>
            <p className="text-light-text/70 text-sm leading-relaxed">
              Collaborating on a piece or want me to cover your initiative? I love amplifying grassroots builders and educators pushing technology forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
