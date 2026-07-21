import { skills } from '../data/skills';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const GROUP_TRANSLATIONS: Record<string, Record<string, string>> = {
  'Java & Spring': { en: 'Java & Spring', vi: 'Java & Spring' },
  'Backend Foundations': { en: 'Backend Foundations', vi: 'Nền tảng Backend' },
  'Databases': { en: 'Databases', vi: 'Cơ sở dữ liệu' },
  'Development Tools': { en: 'Development Tools', vi: 'Công cụ phát triển' },
  'Delivery & Collaboration': { en: 'Delivery & Collaboration', vi: 'Triển khai & Cộng tác' }
};

export function Skills() {
  const { lang, t } = useLanguage();
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} />
      <div className="mt-3 grid grid-cols-1 gap-y-2.5 md:grid-cols-2 md:gap-x-12">
        {skills.map((skill) => {
          const translatedGroup = GROUP_TRANSLATIONS[skill.group]?.[lang] || skill.group;
          return (
            <div
              key={skill.group}
              className="flex items-center gap-3 border-b border-ink/10 pb-2.5 last:border-0"
            >
              <span className="w-24 shrink-0 text-[11px] font-bold uppercase tracking-wider text-ink md:w-28">
                {translatedGroup}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="border border-ink/20 bg-cream px-2 py-1 text-[10px] font-normal text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
