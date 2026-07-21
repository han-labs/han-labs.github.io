import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { lang, t } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
      />
      <div className="brutal-card p-4 text-sm font-normal leading-7 text-ink/90 md:p-5 md:text-[15px]">
        <p>{profile[lang].about}</p>
      </div>
    </section>
  );
}
