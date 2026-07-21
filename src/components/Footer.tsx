import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { lang, t } = useLanguage();
  const currentProfile = profile[lang];

  const links = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.achievements', href: '#achievements' },
    { key: 'nav.beyond', href: '#beyond' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-ink bg-paper/95 px-4 py-4 font-normal text-ink backdrop-blur transition-colors duration-300 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <div className="text-base font-semibold text-ink md:text-lg">{profile.name}</div>
            <div className="mt-1 text-sm text-ink/65">
              {currentProfile.role} · {currentProfile.location}
            </div>
          </div>

          <nav aria-label="Footer links" className="flex max-w-md flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-ink/70 underline-offset-4 transition-colors hover:text-blue-pop hover:underline"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-3 flex flex-col items-center justify-between gap-1 border-t border-ink/15 pt-3 text-xs text-ink/55 sm:flex-row">
          <span>Made with <span role="img" aria-label="love">❤️</span> in HCMC · © 2026 Huynh Gia Han</span>
          <a href="#" className="font-mono uppercase tracking-wider transition-colors hover:text-ink">
            {t('spy.top')} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
