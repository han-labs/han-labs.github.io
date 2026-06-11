import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream/95 backdrop-blur transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="text-xl font-black tracking-tight text-ink">
          H.G.HAN
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a key={link.href} className="font-bold hover:underline text-ink" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="brutal-button bg-yellow-pop h-9 w-9 text-base font-black flex items-center justify-center cursor-pointer select-none"
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
      </nav>
    </header>
  );
}
