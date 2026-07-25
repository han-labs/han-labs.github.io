import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { lang, t } = useLanguage();
  const currentProfile = profile[lang];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-10 pt-5 md:px-6 md:pb-12 md:pt-6">
      <div className="brutal-card bg-yellow-pop p-5 md:p-7">
        <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* Left Column: Info & Details */}
          <div>
            <span className="mb-2.5 inline-block border-2 border-ink bg-paper px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink shadow-[1.5px_1.5px_0_rgba(18,18,18,1)]">
              {t('contact.eyebrow')}
            </span>
            <h2 className="section-title text-2xl font-bold leading-tight text-ink md:text-3xl">
              {t('contact.title')}
            </h2>
            <p className="mt-3 text-sm font-normal leading-relaxed text-ink/85">
              {t('contact.desc')}
            </p>
            
            <div className="mt-4 space-y-1.5 text-xs font-semibold text-ink">
              <div>
                {t('contact.location')}: {currentProfile.location}
              </div>
              <div>
                {t('contact.email')}:{' '}
                <a className="break-all underline hover:text-ink/75" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="text-ink/65">
                {t('contact.eduemail')}:{' '}
                <a className="break-all underline hover:text-ink/75" href={`mailto:${profile.educationEmail}`}>
                  {profile.educationEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actions Grid */}
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              className="brutal-button flex cursor-pointer select-none items-center justify-center bg-pink-pop px-3.5 py-2.5 text-center text-xs font-semibold text-ink"
              href={`mailto:${profile.email}`}
            >
              Email
            </a>
            <a
              className="brutal-button flex cursor-pointer select-none items-center justify-center bg-green-pop px-3.5 py-2.5 text-center text-xs font-semibold text-ink"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="brutal-button flex cursor-pointer select-none items-center justify-center bg-blue-pop px-3.5 py-2.5 text-center text-xs font-semibold text-ink"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="brutal-button flex cursor-pointer select-none items-center justify-center bg-yellow-pop px-3.5 py-2.5 text-center text-xs font-semibold text-ink"
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.viewcv')}
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
