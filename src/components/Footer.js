import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-purple/25 bg-surface-1 px-5 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:items-end">
        <div>
          <h3 className="text-lg font-semibold text-neon-purple">Er. Nirajan Acharya</h3>
          <p className="mt-2 max-w-lg text-sm text-light-text/70">
            AI Safety Governance Researcher, Lecturer at Kantipur Engineering College, and Full Stack Web Developer building practical AI-powered systems.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href="https://www.linkedin.com/in/nirajanacharya/" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-neon-purple">LinkedIn</a>
            <a href="https://github.com/nirajanacharya" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-neon-purple">GitHub</a>
            <a href="https://medium.com/@nirajan.acharya777" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-neon-purple">Medium</a>
            <a href="https://scholar.google.com/scholar?q=Nirajan+Acharya" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-neon-purple">Google Scholar</a>
            <a href="/Nirajan_Acharya_CV.txt" download className="text-light-text/80 hover:text-neon-purple">Download CV</a>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm text-light-text/70">Kathmandu, Nepal</p>
          <p className="text-sm text-light-text/70">engineernirajanacharya@gmail.com</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-light-text/60">Copyright {year} Nirajan Acharya</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
