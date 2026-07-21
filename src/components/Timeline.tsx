import { achievements } from '../data/achievements';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const DOT_COLORS = ['bg-yellow-pop', 'bg-blue-pop', 'bg-green-pop', 'bg-pink-pop'];

export function Timeline() {
  const { lang, t } = useLanguage();

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader
        eyebrow={t('timeline.eyebrow')}
        title={t('timeline.title')}
      />

      <div className="relative mt-4 overflow-hidden">
        {/* Horizontal Line running through the year nodes */}
        <div className="absolute left-0 right-0 top-[18px] h-[2px] bg-ink" />

        {/* Horizontal Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 pt-1 px-2 scrollbar-thin snap-x justify-start">
          {achievements.map((yearGroup, index) => {
            const dotColor = DOT_COLORS[index % DOT_COLORS.length];

            return (
              <article
                key={yearGroup.year}
                className="relative flex w-52 flex-shrink-0 snap-start flex-col items-center pt-8 text-center"
              >
                {/* Node dot centered on the line */}
                <div
                  className={`absolute top-[12px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-ink ${dotColor}`}
                />

                <div className="flex flex-col items-center w-full">
                  <span className="mb-2 inline-block select-none rounded-sm border border-ink bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-paper">
                    {yearGroup.year}
                  </span>
                  
                  <div className="space-y-2.5 w-full flex flex-col items-center">
                    {yearGroup.items.map((item, itemIdx) => {
                      const currentItem = item[lang];
                      return (
                        <div key={itemIdx} className="flex flex-col items-center max-w-[170px]">
                          <h4 className="text-xs font-semibold leading-tight text-ink">
                            {currentItem.title}
                          </h4>
                          <p className="mt-1.5 text-[10px] font-normal leading-relaxed text-ink/70">
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
