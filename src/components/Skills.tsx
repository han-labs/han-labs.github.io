import { skills } from '../data/skills';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const GROUP_TRANSLATIONS: Record<string, Record<string, string>> = {
  'Languages': { en: 'Languages', vi: 'Ngôn ngữ' },
  'Backend': { en: 'Backend', vi: 'Backend' },
  'Databases': { en: 'Databases', vi: 'Cơ sở dữ liệu' },
  'Tools & Practices': { en: 'Tools & Practices', vi: 'Công cụ & Quy trình' },
  'Additional': { en: 'Additional', vi: 'Bổ sung' },
  'Spoken Languages': { en: 'Languages', vi: 'Ngoại ngữ' },
};

const ITEM_TRANSLATIONS: Record<string, Record<string, string>> = {
  'Vietnamese · Native': { en: 'Vietnamese · Native', vi: 'Tiếng Việt · Bản ngữ' },
  'English · C1 (EF SET)': { en: 'English · C1 (EF SET)', vi: 'Tiếng Anh · C1 (EF SET)' },
  'Japanese · Basic': { en: 'Japanese · Basic', vi: 'Tiếng Nhật · Cơ bản' },
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
                    {ITEM_TRANSLATIONS[item]?.[lang] ?? item}
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
