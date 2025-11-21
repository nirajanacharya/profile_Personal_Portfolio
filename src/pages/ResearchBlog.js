import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResearchBlog() {
  const [activeTab, setActiveTab] = useState('research');

  const researchPapers = [
    {
      title: 'Crop Recommendation System Using Machine Learning: A Comparative Study',
      description:
        'This study evaluates machine learning models to develop a crop recommendation system, helping farmers choose optimal crops based on environmental conditions.',
      tags: ['Machine Learning', 'Agriculture', 'Research', 'Data Science', 'Sustainability'],
      link: 'https://www.nepjol.info/index.php/injet/article/view/66708',
      icon: 'fa-seedling',
      date: '2024',
      impact: 'High'
    },
  ];

  const blogPosts = [
    {
      platform: 'Microsoft',
      title: "From Village Dreams to Global Impact: My Journey as a Microsoft Learn Student Ambassador",
      description:
        'An exploration of how to leverage technology and community engagement to make a global impact starting from a small village.',
      tags: ['Microsoft', 'Journey', 'Leadership', 'Community', 'Technology'],
      link: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/from-village-dreams-to-global-impact-my-journey-as-a-microsoft/ba-p/4268226',
      icon: 'fab fa-microsoft',
      date: 'Sep 2024'
    },
    {
      platform: 'Medium',
      title: 'Why Is It Called "Logistic Regression" and Not "Logistic Classification"?',
      description:
        'This blog explains why the term "logistic regression" is used instead of "logistic classification" and explores the statistical origins.',
      tags: ['Logistic Regression', 'Classification', 'Statistics', 'Data Science'],
      link: 'https://medium.com/@nirajan.acharya777/why-is-it-called-logistic-regression-and-not-logistic-classification-c201889d268c',
      icon: 'fab fa-medium',
      date: 'Aug 2024'
    },
  ];

  return (
    <section className="min-h-screen bg-darker pt-28 pb-20 px-5 relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-transparent to-neon-purple"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-darker border border-neon-cyan border-opacity-50 text-neon-cyan rounded-lg hover:border-opacity-100 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-neon-cyan mb-4">
            Research & Blog
          </h1>
          <p className="text-light-text text-lg md:text-xl">Exploring technology, data science, and innovation</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-6 mb-16">
          <button
            onClick={() => setActiveTab('research')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all border ${
              activeTab === 'research'
                ? 'bg-neon-cyan text-darker border-neon-cyan shadow-lg shadow-neon-cyan/30'
                : 'bg-transparent border-neon-cyan border-opacity-40 text-light-text hover:border-opacity-100 hover:shadow-lg hover:shadow-neon-cyan/20'
            }`}
          >
            <i className="fas fa-flask mr-2"></i>
            Research Papers
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all border ${
              activeTab === 'blog'
                ? 'bg-neon-cyan text-darker border-neon-cyan shadow-lg shadow-neon-cyan/30'
                : 'bg-transparent border-neon-cyan border-opacity-40 text-light-text hover:border-opacity-100 hover:shadow-lg hover:shadow-neon-cyan/20'
            }`}
          >
            <i className="fas fa-pen-fancy mr-2"></i>
            Blog Posts
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'research' && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="grid grid-cols-1 gap-8">
              {researchPapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-code-bg border border-neon-cyan border-opacity-20 hover:border-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-neon-cyan/20 transition-all p-8"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-neon-cyan bg-opacity-20 rounded-lg flex items-center justify-center text-2xl text-neon-cyan">
                        <i className={`fas ${paper.icon}`}></i>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-neon-cyan bg-opacity-10 text-neon-cyan rounded text-xs font-semibold mb-2 border border-neon-cyan border-opacity-30">High Impact</span>
                        <p className="text-neon-cyan text-xs font-mono">{paper.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-light-text mb-4">{paper.title}</h3>
                  <p className="text-light-text mb-6 leading-relaxed opacity-90">{paper.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neon-cyan bg-opacity-5 border border-neon-cyan border-opacity-30 text-neon-cyan rounded text-xs font-semibold hover:bg-opacity-20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-neon-cyan text-darker font-semibold rounded hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Read Paper
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-code-bg border border-neon-cyan border-opacity-20 hover:border-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-neon-cyan/20 transition-all p-8"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-neon-cyan bg-opacity-10 text-neon-cyan rounded text-xs font-semibold border border-neon-cyan border-opacity-30">
                      <i className={`${post.icon}`}></i>
                      {post.platform}
                    </span>
                    <span className="text-neon-cyan text-xs font-mono">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-light-text mb-4 leading-tight">{post.title}</h3>
                  <p className="text-light-text mb-6 leading-relaxed opacity-90 text-sm">{post.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neon-cyan bg-opacity-5 border border-neon-cyan border-opacity-30 text-neon-cyan rounded text-xs font-semibold hover:bg-opacity-20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-neon-cyan text-darker font-semibold rounded hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
                  >
                    <i className="fas fa-arrow-right"></i>
                    Read Article
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResearchBlog;
