import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const sections = [
  { id: '#', labelKey: 'spy.top' },
  { id: '#about', labelKey: 'nav.about' },
  { id: '#skills', labelKey: 'nav.skills' },
  { id: '#projects', labelKey: 'nav.projects' },
  { id: '#achievements', labelKey: 'nav.achievements' },
  { id: '#beyond', labelKey: 'nav.beyond' },
  { id: '#certificates', labelKey: 'nav.certificates' },
  { id: '#contact', labelKey: 'nav.contact' },
];

export function ScrollSpy() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = '#';

      for (const section of sections) {
        if (section.id === '#') continue;
        const el = document.getElementById(section.id.substring(1));
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      // If at the very top of the page, force Top selection
      if (window.scrollY < 80) {
        current = '#';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed right-3.5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3.5 bg-paper/90 border border-ink/30 p-2.5 rounded-full shadow-[2px_2px_0_var(--color-line)] transition-colors duration-300">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className="group relative flex items-center justify-center cursor-pointer w-2.5 h-2.5"
            aria-label={`Jump to ${t(section.labelKey)}`}
          >
            {/* Tooltip */}
            <span className="absolute right-7 top-1/2 -translate-y-1/2 bg-ink text-paper px-2 py-0.5 text-[9px] font-black rounded-sm border border-ink select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-[1.5px_1.5px_0_var(--color-line)]">
              {t(section.labelKey)}
            </span>

            {/* Dot Node */}
            <span
              className={`w-2.5 h-2.5 rounded-full border border-ink/80 transition-all duration-200 ${
                isActive
                  ? 'bg-yellow-pop scale-125 border-ink'
                  : 'bg-ink/20 hover:bg-ink/65 hover:scale-110'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
