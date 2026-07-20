import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { lang, t } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
      />
      <div className="brutal-card p-3.5 text-xs font-semibold leading-relaxed md:p-4 text-ink/90">
        <p>{profile[lang].about}</p>
      </div>
    </section>
  );
}
