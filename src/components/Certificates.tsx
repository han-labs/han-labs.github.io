import { certificates } from '../data/certificates';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function Certificates() {
  const { lang, t } = useLanguage();

  return (
    <section id="certificates" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader eyebrow={t('certificates.eyebrow')} title={t('certificates.title')} />
      <div className="grid gap-3.5 md:grid-cols-2 mt-4">
        {certificates.map((certificate) => {
          const hasRealLink = certificate.proof && !certificate.proof.startsWith('#todo');
          const ItemWrapper = hasRealLink ? 'a' : 'div';

          // Get localized data or default fallback
          const localized = (certificate as any)[lang];
          const name = localized?.name || certificate.name;
          const issuer = localized?.issuer || certificate.issuer;

          return (
            <ItemWrapper
              key={name}
              href={hasRealLink ? certificate.proof : undefined}
              target={hasRealLink ? '_blank' : undefined}
              rel={hasRealLink ? 'noreferrer' : undefined}
              className={`brutal-card-sm p-3 flex items-center justify-between transition-all ${
                hasRealLink
                  ? 'hover:bg-yellow-pop/5 hover:border-yellow-pop cursor-pointer'
                  : 'cursor-default'
              }`}
            >
              <div>
                <h3 className="text-xs md:text-sm font-black text-ink">{name}</h3>
                <p className="text-[10px] font-semibold text-ink/80 mt-0.5">
                  {issuer} · {certificate.date}
                </p>
              </div>
              {hasRealLink && (
                <span className="text-[10px] font-black text-ink ml-4 shrink-0 transition-transform group-hover:translate-x-1 select-none">
                  →
                </span>
              )}
            </ItemWrapper>
          );
        })}
      </div>
    </section>
  );
}
