import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import ResearchFocus from '../components/ResearchFocus';
import Publications from '../components/Publications';
import Projects from '../components/Projects';
import Leadership from '../components/Leadership';
import Workshops from '../components/Workshops';
import Awards from '../components/Awards';
import Recommendations from '../components/Recommendations';

function Home() {
  return (
    <main id="main-content" tabIndex="-1">
      <Hero />
      <About />
      <Experience />
      <ResearchFocus />
      <Publications />
      <Projects />
      <Leadership />
      <Workshops />
      <Awards />
      <Recommendations />
    </main>
  );
}

export default Home;
