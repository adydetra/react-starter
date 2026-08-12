import { useRef, useState } from 'react';
import pkg from '../package.json';

const techStack = [
  {
    title: 'Vite',
    version: pkg.devDependencies.vite.replace('^', ''),
    description: 'Next Generation Frontend Tooling. Fast and lean build tool.',
  },
  {
    title: 'React',
    version: pkg.dependencies.react.replace('^', ''),
    description: 'The library for web and native user interfaces.',
  },
  {
    title: 'Tailwind CSS',
    version: pkg.dependencies.tailwindcss.replace('^', ''),
    description: 'A utility-first CSS framework for rapidly building modern websites.',
  },
  {
    title: 'ESLint',
    version: pkg.devDependencies.eslint.replace('^', ''),
    description: 'Find and fix problems in your JavaScript code.',
  },
];

function Card({ title, version, description }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 border border-neutral-800 rounded-lg overflow-hidden group transition-colors duration-300 bg-neutral-900/50"
    >
      <div
        className="pointer-events-none absolute -inset-px transition opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <h2 className="text-lg font-medium mb-2 text-neutral-200">{title}</h2>
        <p className="text-neutral-500 text-sm mb-4">v{version}</p>
        <p className="text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="w-12 h-12 bg-neutral-100 rounded-full mb-6"></div>
          <h1 className="text-4xl font-light tracking-tight mb-4 text-neutral-100">React Starter</h1>
          <p className="text-xl text-neutral-400 font-light leading-relaxed">A simple, clean starter template focusing on typography and whitespace.</p>
        </header>

        <main className="grid gap-8 md:grid-cols-2">
          {techStack.map((tech) => (
            <Card key={tech.title} {...tech} />
          ))}
        </main>

        <footer className="mt-20 pt-8 border-t border-neutral-800 text-sm text-neutral-500 flex justify-between items-center">
          <p>&copy; 2025 - {new Date().getFullYear()} React Starter. All rights reserved.</p>
          <p>
            by{' '}
            <a href="https://www.adydetra.my.id" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
              adydetra
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
