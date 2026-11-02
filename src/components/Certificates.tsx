import { useEffect, useState } from 'react';
import { Certificate, certificates } from '../data/certificates';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { HorizontalRail } from './HorizontalRail';

const KIND_STYLES: Record<Certificate['kind'], string> = {
  award: 'bg-pink-pop',
  scholarship: 'bg-yellow-pop',
  certificate: 'bg-blue-pop',
};

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
      <HorizontalRail label={t('certificates.title')}>
        {certificates.map((certificate) => {
          const localized = getLocalizedCopy(certificate);

          return (
            <button
              key={localized.name}
              data-certificate-card
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              className="brutal-card-sm group w-[72vw] max-w-[280px] shrink-0 snap-start cursor-zoom-in overflow-hidden bg-paper text-left transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative border-b border-ink bg-cream">
                <img
                  src={certificate.image}
                  alt={localized.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-contain p-1"
                />
                <span className={`absolute left-2 top-2 border border-ink px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink ${KIND_STYLES[certificate.kind]}`}>
                  {t(`certificates.kind.${certificate.kind}`)}
                </span>
              </div>

              <div className="p-3">
                <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-ink md:text-sm">
                  {localized.name}
                </h3>
                <div className="mt-2 flex items-center justify-between gap-4 text-[11px] text-ink/65">
                  <span>{localized.issuer} · {certificate.date}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider group-hover:underline">
                    {t('certificates.view')}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </HorizontalRail>

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

            <img
              src={activeCertificate.image}
              alt={activeCopy.name}
              className="max-h-[72vh] w-full bg-cream object-contain"
            />

            <div className="flex flex-col gap-1 px-1 pb-1 pt-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className={`mb-2 inline-block border border-ink px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink ${KIND_STYLES[activeCertificate.kind]}`}>
                  {t(`certificates.kind.${activeCertificate.kind}`)}
                </span>
                <h3 className="text-lg font-semibold text-ink">{activeCopy.name}</h3>
                <p className="mt-1 text-sm text-ink/65">{activeCopy.issuer}</p>
                {activeCertificate.details && (
                  <p className="mt-2 text-sm text-ink/80">{activeCertificate.details[lang]}</p>
                )}
                {activeCertificate.document && (
                  <a
                    href={activeCertificate.document}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-button mt-3 inline-flex bg-blue-pop px-3 py-2 text-xs font-semibold text-ink"
                  >
                    {lang === 'en' ? 'Open original PDF ↗' : 'Mở bản PDF gốc ↗'}
                  </a>
                )}
              </div>
              <span className="font-mono text-xs text-ink/55">{activeCertificate.date}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
