import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();
  const currentProfile = profile[lang];

  return (
    <footer className="border-t border-ink bg-paper px-4 py-4 md:px-6 text-[10px] font-semibold text-ink transition-colors duration-300">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-center sm:text-left">
          <span className="font-black">{profile.name}</span> · {currentProfile.role}
        </div>
        <div className="flex items-center gap-2 text-ink/75 text-[9px] text-center sm:text-right">
          <span>React · Vite · Tailwind · GitHub Pages</span>
          <span>·</span>
          <span>© 2026 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
