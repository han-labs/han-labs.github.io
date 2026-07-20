import { achievements } from '../data/achievements';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const DOT_COLORS = ['bg-yellow-pop', 'bg-blue-pop', 'bg-green-pop', 'bg-pink-pop'];

export function Timeline() {
  const { lang, t } = useLanguage();

  return (
    <section id="achievements" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader
        eyebrow={t('timeline.eyebrow')}
        title={t('timeline.title')}
      />

      <div className="relative mt-4 overflow-hidden">
        {/* Horizontal Line running through the year nodes */}
        <div className="absolute left-0 right-0 top-[18px] h-[2px] bg-ink" />

        {/* Horizontal Scrollable Container */}
        <div className="flex gap-4 overflow-x-auto pb-3 pt-1 px-2 scrollbar-thin snap-x justify-start">
          {achievements.map((yearGroup, index) => {
            const dotColor = DOT_COLORS[index % DOT_COLORS.length];

            return (
              <article
                key={yearGroup.year}
                className="flex-shrink-0 w-48 snap-start relative pt-8 text-center flex flex-col items-center"
              >
                {/* Node dot centered on the line */}
                <div
                  className={`absolute top-[12px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-ink ${dotColor}`}
                />

                <div className="flex flex-col items-center w-full">
                  <span className="inline-block border border-ink bg-ink text-paper px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider mb-2 rounded-sm select-none">
                    {yearGroup.year}
                  </span>
                  
                  <div className="space-y-2.5 w-full flex flex-col items-center">
                    {yearGroup.items.map((item, itemIdx) => {
                      const currentItem = item[lang];
                      return (
                        <div key={itemIdx} className="flex flex-col items-center max-w-[170px]">
                          <h4 className="text-[11px] font-black text-ink leading-tight">
                            {currentItem.title}
                          </h4>
                          <p className="mt-1 text-[9px] font-semibold text-ink/75 leading-relaxed">
                            {currentItem.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
