import { useState } from 'react';
import { beyondCodeItems, LocalizedJourneyArticle } from '../data/beyondCode';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function BeyondCode() {
  const { lang, t } = useLanguage();
  const [activeArticle, setActiveArticle] = useState<LocalizedJourneyArticle | null>(null);

  // Disable scroll when modal is open
  if (typeof window !== 'undefined') {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="beyond" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader
        eyebrow={t('beyond.eyebrow')}
        title={t('beyond.title')}
      />
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {beyondCodeItems.map((item) => {
          const currentArticle = item[lang];
          return (
            <article
              key={currentArticle.title}
              onClick={() => setActiveArticle(currentArticle)}
              className="brutal-card-sm flex cursor-pointer flex-col justify-between bg-paper p-4 transition-transform duration-200 hover:-translate-y-1 md:p-5"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="select-none border border-ink bg-blue-pop px-2 py-0.5 text-[10px] font-bold text-ink">
                    {t('article.tag')}
                  </span>
                  <span className="text-[10px] font-bold text-ink/70">{t('article.readtime')}</span>
                </div>
                <h3 className="text-base font-semibold text-ink hover:underline md:text-lg">
                  {currentArticle.title}
                </h3>
                <p className="mt-2.5 text-xs font-normal leading-relaxed text-ink/75">
                  {currentArticle.excerpt}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveArticle(currentArticle);
                }}
                className="mt-5 cursor-pointer text-left text-[11px] font-semibold text-ink underline hover:text-pink-pop"
              >
                {t('article.read')} →
              </button>
            </article>
          );
        })}
      </div>

      {/* Article Overlay Modal styled to match design screenshot */}
      {activeArticle && (
        <div
          className="article-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="border-4 border-ink bg-paper max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-[6px_6px_0_var(--color-line)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Square Pink Close Button with border and shadow */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 border-2 border-ink bg-pink-pop h-8 w-8 flex items-center justify-center font-black cursor-pointer text-sm text-ink select-none shadow-[3px_3px_0_var(--color-line)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--color-line)] transition-all"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="border-2 border-ink bg-blue-pop px-2.5 py-0.5 text-xs font-black text-ink select-none">
                  {t('article.tag')}
                </span>
                <span className="text-xs font-bold text-ink/70">{t('article.readtime')}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-ink leading-tight mb-4">
                {activeArticle.title}
              </h3>
              {/* Quote Block with thick vertical left border */}
              <p className="text-xs md:text-sm font-semibold italic text-ink/80 border-l-[4px] border-ink pl-3.5 mb-5">
                {activeArticle.intro}
              </p>
            </div>

            {/* Modal Sections */}
            <div className="space-y-4 mt-4 text-ink">
              {activeArticle.sections.map((section, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm md:text-base font-black">{section.heading}</h4>
                  <p className="text-xs md:text-sm font-semibold leading-relaxed text-ink/85">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Close Button at the bottom */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="border-2 border-ink bg-yellow-pop px-4 py-1.5 text-xs font-black text-ink cursor-pointer select-none shadow-[3px_3px_0_var(--color-line)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--color-line)] transition-all"
              >
                {t('article.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
