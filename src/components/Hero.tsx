import { useState } from 'react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { lang, t } = useLanguage();
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentProfile = profile[lang];

  return (
    <section className="mx-auto grid max-w-5xl gap-4.5 px-4 py-4 md:min-h-[290px] md:grid-cols-[1.55fr_0.45fr] md:px-6 md:py-5">
      {/* Intro Card with Dashed Border */}
      <div className="brutal-dashed-card flex h-full flex-col p-4 md:p-5">
        <div>
          <h1 className="section-title text-xl font-black leading-tight text-ink sm:text-2xl md:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-sm font-black text-ink">{currentProfile.role}</p>
          <p className="mt-3 max-w-xl whitespace-pre-line text-xs font-semibold leading-relaxed text-ink/95 sm:text-xs md:text-[13px]">
            {currentProfile.heroLine}
          </p>
        </div>

        <div className="min-h-6 flex-1" aria-hidden="true" />

        <div className="space-y-3.5">
          {/* Buttons (scaled down) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
            <a className="hero-action-resume brutal-button bg-yellow-pop px-3 py-1.5 text-[11px] font-black text-ink" href={profile.cv} target="_blank" rel="noreferrer">
              {t('hero.viewcv')}
            </a>
            <a className="hero-action-github brutal-button bg-green-pop px-3 py-1.5 text-[11px] font-black text-ink" href={profile.github} target="_blank" rel="noreferrer">
              {t('hero.github')}
            </a>
            <a className="hero-action-linkedin brutal-button bg-blue-pop px-3 py-1.5 text-[11px] font-black text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">
              {t('hero.linkedin')}
            </a>
            <a className="hero-action-projects brutal-button bg-paper px-3 py-1.5 text-[11px] font-black text-ink" href="#projects">
              {t('hero.viewprojects')}
            </a>

            <div className="relative inline-block">
              <button
                type="button"
                onClick={() => setShowEmailPopover(!showEmailPopover)}
                className="hero-action-email brutal-button cursor-pointer bg-pink-pop px-3 py-1.5 text-[11px] font-black text-ink"
                aria-expanded={showEmailPopover}
              >
                {t('hero.emailme')}
              </button>
              {showEmailPopover ? (
                <div className="brutal-card absolute left-0 z-20 mt-1.5 w-60 bg-paper p-3 text-left">
                  <div className="mb-1.5 flex items-start justify-between">
                    <p className="text-[9px] font-black uppercase tracking-wider text-ink/75">{t('hero.emailaddress')}</p>
                    <button
                      type="button"
                      onClick={() => setShowEmailPopover(false)}
                      className="cursor-pointer px-1 text-xs font-black hover:text-pink-pop"
                      aria-label="Close email options"
                    >
                      ×
                    </button>
                  </div>
                  <p className="mb-2 break-all border border-ink bg-cream p-1.5 font-mono text-[9px] font-bold text-ink">
                    {profile.email}
                  </p>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="brutal-button flex-grow cursor-pointer bg-yellow-pop px-2 py-0.5 text-[9px] font-black text-ink"
                    >
                      {copied ? t('hero.copied') : t('hero.copyemail')}
                    </button>
                    <a
                      href={`mailto:${profile.email}?subject=Software%20Developer%20Intern%20Opportunity`}
                      onClick={() => setShowEmailPopover(false)}
                      className="brutal-button flex-grow bg-blue-pop px-2 py-0.5 text-center text-[9px] font-black text-ink"
                    >
                      {t('hero.openmail')}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {currentProfile.highlights.map((item) => (
              <div key={item} className="border border-ink bg-paper px-2 py-1 text-center text-[9px] font-black text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avatar Image Card with Dashed Border (narrower column makes image smaller) */}
      <div className="brutal-dashed-card overflow-hidden bg-yellow-pop flex items-center justify-center w-full aspect-square md:aspect-auto md:h-full max-w-[200px] md:max-w-full mx-auto">
        <img
          className="w-full h-full object-cover object-[center_24%]"
          src={profile.avatar}
          alt="Portrait of Huynh Gia Han"
        />
      </div>
    </section>
  );
}
