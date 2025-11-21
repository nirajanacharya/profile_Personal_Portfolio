import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-darker shadow-lg border-b border-neon-cyan border-opacity-20">
      {/* Animated top border effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
      
      <div className="max-w-6xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-neon-cyan hover:text-neon-purple transition-all">
            &lt;Nirajan /&gt;
          </Link>
          <div className="flex gap-8">
            <a href="/#projects" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Projects
            </a>
            <a href="/#awards" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Awards
            </a>
            <a href="/#community" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Community
            </a>
            <a href="/#recommendations" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Recommendations
            </a>
            <Link to="/blog" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Blog
            </Link>
            <Link to="/research" className="text-light-text hover:text-neon-cyan transition-all font-semibold hover:shadow-lg">
              Research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
