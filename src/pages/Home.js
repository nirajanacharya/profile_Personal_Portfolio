import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Timeline from '../components/Timeline';
import Leadership from '../components/Leadership';
import Workshops from '../components/Workshops';
import Recommendations from '../components/Recommendations';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <main id="main-content" tabIndex="-1">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Leadership />
      <Workshops />
      <Awards />
      <Recommendations />
      <Gallery />
    </main>
  );
}

export default Home;
