import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Timeline from '../components/Timeline';
import Recommendations from '../components/Recommendations';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Timeline />
      <Recommendations />
      <Gallery />
    </main>
  );
}

export default Home;
