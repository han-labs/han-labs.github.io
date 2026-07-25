import { useEffect, useState } from 'react';
import { Certificate, certificates } from '../data/certificates';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function Certificates() {
  const { lang, t } = useLanguage();
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!activeCertificate) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveCertificate(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertificate]);

  const getLocalizedCopy = (certificate: Certificate) => {
    return certificate[lang] ?? { name: certificate.name, issuer: certificate.issuer };
  };

  const activeCopy = activeCertificate ? getLocalizedCopy(activeCertificate) : null;

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader eyebrow={t('certificates.eyebrow')} title={t('certificates.title')} />

      <div className="scrollbar-thin mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {certificates.map((certificate) => {
          const localized = getLocalizedCopy(certificate);

          return (
            <button
              key={localized.name}
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              className="brutal-card-sm group w-[72vw] max-w-[280px] shrink-0 snap-start cursor-zoom-in overflow-hidden bg-paper text-left transition-transform duration-200 hover:-translate-y-1"
            >
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={localized.name}
                  className="aspect-[16/10] w-full border-b border-ink object-cover"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col items-center justify-center border-b border-ink bg-cream p-4 text-center">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                    {localized.issuer}
                  </span>
                  <span className="mt-2 text-base font-semibold leading-snug text-ink">{localized.name}</span>
                </div>
              )}

              <div className="p-3">
                <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-ink md:text-sm">
                  {localized.name}
                </h3>
                <div className="mt-2 flex items-center justify-between gap-4 text-[11px] text-ink/65">
                  <span>{localized.issuer} · {certificate.date}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeCertificate && activeCopy ? (
        <div
          className="article-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCopy.name}
        >
          <div
            className="brutal-card relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-paper p-2.5 sm:p-3 md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="brutal-button absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center bg-pink-pop text-sm font-semibold text-ink sm:right-5 sm:top-5"
              aria-label="Close certificate preview"
            >
              ×
            </button>

            {activeCertificate.image ? (
              <img
                src={activeCertificate.image}
                alt={activeCopy.name}
                className="max-h-[72vh] w-full bg-cream object-contain"
              />
            ) : (
              <div className="flex min-h-[55vh] w-full flex-col items-center justify-center bg-cream p-8 text-center">
                <span className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-ink/55">
                  {activeCopy.issuer}
                </span>
                <span className="mt-4 max-w-2xl text-2xl font-semibold leading-snug text-ink md:text-4xl">
                  {activeCopy.name}
                </span>
              </div>
            )}

            <div className="flex flex-col gap-1 px-1 pb-1 pt-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-ink">{activeCopy.name}</h3>
                <p className="mt-1 text-sm text-ink/65">{activeCopy.issuer}</p>
              </div>
              <span className="font-mono text-xs text-ink/55">{activeCertificate.date}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
