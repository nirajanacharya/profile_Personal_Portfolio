import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [activeCommand, setActiveCommand] = useState(null);
  const [showCursor, setShowCursor] = useState(true);
  const [history, setHistory] = useState([]);
  const [hasBooted, setHasBooted] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);

  const texts = useMemo(
    () => [
      'Full Stack Developer',
      'Community Architect',
      'AI for Good Advocate',
      'Developer Relations Leader',
    ],
    []
  );

  const commandMap = useMemo(
    () => ({
      help: [
        'Available commands:',
        '  about     → Snapshot of who I am and what drives me',
        '  skills    → Technical toolbox and focus areas',
        '  stack     → What powers my latest builds',
        '  contact   → How to get in touch',
        '  clear     → Clear the terminal history',
      ],
      about: [
        'Name:        Nirajan Acharya',
        'Role:        Full Stack Developer • Community Leader • Research Contributor',
        'Currently:   Microsoft Learn Student Ambassador | Omdena Nepal Chapter Lead',
        'Focus:       Building inclusive tech, mentoring next-gen developers, shipping impactful products',
      ],
      skills: [
        'Primary Stack: React, Node.js, Express, Tailwind CSS, PostgreSQL',
        'AI & Data:     Python, TensorFlow, scikit-learn, LangChain, Pandas',
        'Tooling:       GitHub Actions, Docker, Postman, Vercel, Azure, Supabase',
      ],
      stack: [
        'Latest build architecture:',
        '  frontend  → React 18, Tailwind 3, Framer Motion',
        '  backend   → Node.js, Express, Prisma ORM',
        '  data      → PostgreSQL, Redis, Supabase',
        '  ops       → GitHub Actions CI, Vercel + Azure Deployments',
      ],
      contact: [
        'Connect with me:',
        '  GitHub   → github.com/nirajanacharya',
        '  LinkedIn → linkedin.com/in/nirajanacharya',
        '  Email    → nirajan.acharya777@gmail.com',
      ],
      clear: [],
    }),
    []
  );

  const prompt = 'nirajan@athena:~/portfolio$';

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
          timeout = setTimeout(() => {}, 2000);
        }
      }, charIndex === currentText.length ? 2000 : 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd, options = {}) => {
    const { recordHistory = true } = options;
    const normalized = cmd.trim();
    if (!normalized) {
      return;
    }

    if (recordHistory) {
      setCommandHistory((prev) => [...prev, normalized]);
    }

    setHistoryIndex(null);
    setCurrentInput('');

    if (normalized === 'clear') {
      setHistory([]);
      setActiveCommand(null);
      return;
    }

    const response = commandMap[normalized];

    if (!response) {
      setHistory((prev) => [
        ...prev,
        {
          command: normalized,
          output: [`Command "${normalized}" not found. Type help to list available commands.`],
          isError: true,
        },
      ]);
      setActiveCommand(null);
      return;
    }

    setActiveCommand(normalized);
    setHistory((prev) => [
      ...prev,
      {
        command: normalized,
        output: response,
        isError: false,
      },
    ]);
  };

  const handleTerminalClick = () => {
    setShowCommands(true);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      setIsInputFocused(true);
    });
  };

  useEffect(() => {
    if (showCommands && !hasBooted) {
      setHistory([
        {
          command: 'help',
          output: commandMap.help,
          isError: false,
        },
      ]);
      setActiveCommand('help');
      setHasBooted(true);
    }
  }, [showCommands, hasBooted, commandMap]);

  useEffect(() => {
    if (showCommands) {
      inputRef.current?.focus();
      setIsInputFocused(true);
    }
  }, [showCommands]);

  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
    setHistoryIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (currentInput.trim()) {
        handleCommand(currentInput);
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (commandHistory.length === 0) {
        return;
      }
      setHistoryIndex((prev) => {
        const newIndex = prev === null ? commandHistory.length - 1 : Math.max(prev - 1, 0);
        setCurrentInput(commandHistory[newIndex] || '');
        return newIndex;
      });
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (commandHistory.length === 0) {
        return;
      }
      setHistoryIndex((prev) => {
        if (prev === null) {
          return null;
        }
        const newIndex = prev + 1;
        if (newIndex >= commandHistory.length) {
          setCurrentInput('');
          return null;
        }
        setCurrentInput(commandHistory[newIndex] || '');
        return newIndex;
      });
      return;
    }

    if (event.key === 'Escape') {
      setCurrentInput('');
      setHistoryIndex(null);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-darker via-[#08172d] to-darker pt-28 pb-24 px-5 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-neon-cyan/20 blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-neon-purple/20 blur-[160px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,3.5fr)_minmax(0,2.5fr)] items-center">
          <div>
            <div
              className="relative rounded-2xl border border-neon-cyan/40 bg-[#050b16]/90 backdrop-blur-lg shadow-2xl shadow-neon-cyan/10 transition-all hover:border-neon-cyan/60"
              onClick={handleTerminalClick}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-light/10 bg-[#071021]/80">
                <div className="flex items-center gap-2 text-xs text-light-text/60">
                  <span className="inline-flex h-3 w-3 rounded-full bg-neon-pink"></span>
                  <span className="inline-flex h-3 w-3 rounded-full bg-neon-orange"></span>
                  <span className="inline-flex h-3 w-3 rounded-full bg-neon-cyan"></span>
                  <span className="ml-4 font-semibold tracking-wide text-neon-cyan/90">Terminal — nirajan@athena — bash</span>
                </div>
                <span className="hidden md:block text-[11px] font-semibold text-neon-purple/80">view: 104x32</span>
              </div>

              <div className="relative p-6 md:p-8 font-mono text-[15px] md:text-lg leading-relaxed text-light-text/90 space-y-6 min-h-[460px] max-h-[560px] overflow-y-auto">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  className="absolute -left-[9999px]"
                  aria-label="Terminal command input"
                />
                <div>
                  <pre className="text-neon-cyan/80 text-sm md:text-base leading-snug">
{`+--------------------------------------------------+
| Welcome to NirajanOS shell v1.4                  |
| Boot sequence: portfolio launch successful       |
+-------------------------------------------------+`}</pre>
                </div>

                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-neon-cyan font-semibold">{prompt}</span>
                    <span className="text-light">neofetch --preset nirajan</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-light-text/80">
{`Name:           Nirajan Acharya
Role:           ${displayedText}${showCursor ? '|' : ''}
Location:       Kathmandu, Nepal
Core Mission:   Build inclusive tech with lasting community impact
Focus Areas:    Open Source · AI for Good · Developer Advocacy`}
                  </pre>
                </div>

                {!showCommands && (
                  <div className="mt-6 flex flex-col gap-2 text-sm text-neon-cyan/90">
                    <div className="flex flex-wrap items-baseline gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                      <span className="text-neon-cyan font-semibold">{prompt}</span>
                      <span className="text-light">./launch.sh</span>
                    </div>
                    <pre className="whitespace-pre-wrap text-light-text/80 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
{`Boot complete.
Tap anywhere on the terminal to begin → type 'help' to list commands.`}
                    </pre>
                  </div>
                )}

                {showCommands && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 border border-neon-cyan/30 bg-[#060f1d]/80 rounded-xl">
                      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neon-cyan/70 mb-3">
                        Command Palette
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(commandMap).map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => {
                              handleCommand(cmd);
                              inputRef.current?.focus();
                              setIsInputFocused(true);
                            }}
                            className={`px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold tracking-wide border transition-all hover:translate-y-[-2px] ${
                              activeCommand === cmd
                                ? 'border-neon-cyan bg-neon-cyan text-darker shadow-lg shadow-neon-cyan/30'
                                : 'border-neon-cyan/40 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10'
                            }`}
                          >
                            {cmd}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-5">
                      {history.map((entry, index) => (
                        <div key={`${entry.command}-${index}`} className="space-y-2">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-neon-cyan font-semibold">{prompt}</span>
                            <span className="text-light">{entry.command}</span>
                          </div>
                          {entry.output && entry.output.length > 0 && (
                            <pre
                              className={`ml-6 whitespace-pre-wrap text-sm md:text-base leading-relaxed ${
                                entry.isError ? 'text-neon-pink/80' : 'text-light-text/80'
                              }`}
                            >
                              {entry.output.join('\n')}
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-baseline gap-3">
                  <span className="text-neon-cyan font-semibold">{prompt}</span>
                  <span className="text-light whitespace-pre-wrap break-all">{currentInput}</span>
                  <span
                    className={`text-neon-cyan ${isInputFocused ? 'animate-blink opacity-100' : 'opacity-40'}`}
                  >
                    {isInputFocused ? (showCursor ? '▋' : ' ') : '▍'}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs md:text-sm uppercase tracking-[0.4em] text-neon-cyan/70">
              Click the shell · Explore commands · Discover my work
            </p>
          </div>

          <div className="space-y-8 text-light-text/85">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-1 text-xs font-semibold tracking-[0.4em] text-neon-cyan/80 uppercase">
                <i className="fas fa-terminal"></i> Developer Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-light-text leading-tight">
                Building reliable software and empowering communities across the globe.
              </h1>
              <p className="text-sm md:text-base text-light-text/70">
                I ship human-centered products, organize developer ecosystems, and translate complex technology
                into opportunities for learners in emerging markets. My work blends engineering, research, and
                advocacy to create measurable impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neon-purple/40 bg-[#0c1b33]/70 p-5 shadow-lg shadow-neon-purple/20">
                <p className="text-3xl font-bold text-neon-purple">50K+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-light-text/60">Students mentored through 
                  live sessions & workshops
                </p>
              </div>
              <div className="rounded-2xl border border-neon-cyan/40 bg-[#0c1f36]/70 p-5 shadow-lg shadow-neon-cyan/20">
                <p className="text-3xl font-bold text-neon-cyan">70+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-light-text/60">Open source contributions
                  merged across ecosystems
                </p>
              </div>
              <div className="rounded-2xl border border-neon-pink/40 bg-[#22112f]/70 p-5 shadow-lg shadow-neon-pink/20">
                <p className="text-3xl font-bold text-neon-pink">15</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-light-text/60">Global recognition & speaking
                  engagements
                </p>
              </div>
              <div className="rounded-2xl border border-neon-orange/40 bg-[#2a140c]/70 p-5 shadow-lg shadow-neon-orange/20">
                <p className="text-3xl font-bold text-neon-orange">9</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-light-text/60">Years building products that
                  ship and scale
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/#projects"
                className="inline-flex items-center gap-3 rounded-full border border-neon-cyan bg-neon-cyan px-6 py-3 text-sm font-semibold text-darker transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-cyan/30"
              >
                View Projects
                <i className="fas fa-arrow-right"></i>
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 rounded-full border border-neon-purple/60 px-6 py-3 text-sm font-semibold text-neon-purple transition-transform hover:-translate-y-1 hover:border-neon-purple hover:bg-neon-purple/10"
              >
                Read the Blog
                <i className="fas fa-rss"></i>
              </Link>
              <a
                href="mailto:nirajan.acharya777@gmail.com"
                className="inline-flex items-center gap-3 text-sm font-semibold text-neon-cyan/80 hover:text-neon-cyan transition-colors"
              >
                <i className="fas fa-envelope"></i>
                Let’s collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
