import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { lang, t } = useLanguage();
  const currentProfile = profile[lang];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <div className="brutal-card bg-yellow-pop p-4.5 md:p-6">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* Left Column: Info & Details */}
          <div>
            <span className="inline-block border-2 border-ink bg-paper px-2 py-0.5 text-[9px] font-black uppercase tracking-wider mb-2 shadow-[1.5px_1.5px_0_rgba(18,18,18,1)] text-ink">
              {t('contact.eyebrow')}
            </span>
            <h2 className="section-title text-xl font-black leading-tight md:text-2xl text-ink">
              {t('contact.title')}
            </h2>
            <p className="mt-2 text-xs font-semibold leading-relaxed text-ink/90">
              {t('contact.desc')}
            </p>
            
            <div className="mt-3.5 space-y-1 text-[11px] font-bold text-ink">
              <div>
                {t('contact.location')}: {currentProfile.location}
              </div>
              <div>
                {t('contact.email')}:{' '}
                <a className="underline hover:text-ink/75" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actions Grid */}
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              className="brutal-button bg-pink-pop px-3 py-2 text-center text-[10px] font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={`mailto:${profile.email}`}
            >
              Email
            </a>
            <a
              className="brutal-button bg-green-pop px-3 py-2 text-center text-[10px] font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="brutal-button bg-blue-pop px-3 py-2 text-center text-[10px] font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="brutal-button bg-yellow-pop px-3 py-2 text-center text-[10px] font-black flex items-center justify-center text-ink cursor-pointer select-none"
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
