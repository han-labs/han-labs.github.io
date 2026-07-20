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
    <section id="skills" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-1.5 mt-3">
        {skills.map((skill) => {
          const translatedGroup = GROUP_TRANSLATIONS[skill.group]?.[lang] || skill.group;
          return (
            <div
              key={skill.group}
              className="flex items-center gap-2 border-b border-ink/10 pb-1.5 last:border-0"
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-ink w-20 md:w-24 shrink-0">
                {translatedGroup}
              </span>
              <div className="flex flex-wrap gap-1">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-cream border border-ink/20 px-1.5 py-0.5 text-[9px] font-semibold text-ink"
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
