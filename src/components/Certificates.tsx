import { certificates } from '../data/certificates';
import { SectionHeader } from './SectionHeader';

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <SectionHeader eyebrow="Certificates" title="Certificates & Credentials" />
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => {
          const hasRealLink = certificate.proof && !certificate.proof.startsWith('#todo');
          return (
            <article key={certificate.name} className="brutal-card-sm p-4 md:p-5">
              <h3 className="text-lg font-black">{certificate.name}</h3>
              <p className="mt-1.5 text-sm font-semibold text-ink/85">
                {certificate.issuer} · {certificate.date}
              </p>
              {hasRealLink ? (
                <a
                  className="mt-3.5 inline-block text-xs font-black underline hover:text-blue-pop transition-colors"
                  href={certificate.proof}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate →
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
