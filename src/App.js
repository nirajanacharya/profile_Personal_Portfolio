import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Research from './pages/Research';
import ResearchBlog from './pages/ResearchBlog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darker text-light">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blogs" element={<ResearchBlog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
