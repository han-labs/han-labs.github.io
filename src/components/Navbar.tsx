import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const links = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.achievements', href: '#achievements' },
  { key: 'nav.beyond', href: '#beyond' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <a href="#" className="text-2xl font-bold tracking-tight text-ink">
          H.G.HAN
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a key={link.href} className="text-[15px] font-semibold hover:underline text-ink" href={link.href}>
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Toggles Container */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="brutal-button flex h-8 w-8 cursor-pointer select-none items-center justify-center bg-blue-pop p-0 text-xs font-black leading-none text-ink"
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="brutal-button flex h-8 w-8 cursor-pointer select-none items-center justify-center bg-yellow-pop p-0 text-base font-black leading-none text-ink"
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </div>
      </nav>
    </header>
  );
}
