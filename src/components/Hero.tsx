import { useState } from 'react';
import { profile } from '../data/profile';

export function Hero() {
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-12">
      <div className="brutal-card p-4.5 md:p-7">
        <p className="mb-2.5 inline-block border-2 border-ink bg-blue-pop px-2.5 py-0.5 text-xs font-black uppercase tracking-wider">
          Open to Backend Internships
        </p>
        <h1 className="section-title text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-[52px] text-ink">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg font-black text-ink">{profile.role}</p>
        <p className="mt-3.5 max-w-2xl text-base font-semibold leading-relaxed text-ink/95">
          {profile.heroLine}
        </p>

        {/* Action Buttons Reordered */}
        <div className="mt-5 flex flex-wrap gap-2.5 items-center">
          <a
            className="brutal-button bg-yellow-pop px-3.5 py-2 text-sm font-black text-ink cursor-pointer select-none"
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
          <a
            className="brutal-button bg-green-pop px-3.5 py-2 text-sm font-black text-ink cursor-pointer select-none"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="brutal-button bg-blue-pop px-3.5 py-2 text-sm font-black text-ink cursor-pointer select-none"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="brutal-button bg-paper px-3.5 py-2 text-sm font-black text-ink cursor-pointer select-none"
            href="#projects"
          >
            View Projects
          </a>

          {/* Email Me Popover Toggle */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowEmailPopover(!showEmailPopover)}
              className="brutal-button bg-pink-pop px-3.5 py-2 text-sm font-black text-ink cursor-pointer select-none"
            >
              Email Me
            </button>
            {showEmailPopover && (
              <div className="absolute left-0 mt-2 z-20 w-72 brutal-card p-4 text-left shadow-[4px_4px_0_rgba(18,18,18,1)] bg-paper">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[10px] font-black uppercase tracking-wider text-ink/75">Intern Candidate Email</p>
                  <button
                    onClick={() => setShowEmailPopover(false)}
                    className="text-xs font-black hover:text-pink-pop cursor-pointer select-none px-1"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs font-bold border border-ink bg-cream p-2 mb-3 break-all select-all font-mono text-ink">
                  {profile.email}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="brutal-button bg-yellow-pop px-2.5 py-1 text-xs font-black flex-grow cursor-pointer select-none text-ink"
                  >
                    {copied ? 'Copied!' : 'Copy Email'}
                  </button>
                  <a
                    href={`mailto:${profile.email}?subject=Backend%20Developer%20Intern%20Opportunity`}
                    onClick={() => setShowEmailPopover(false)}
                    className="brutal-button bg-blue-pop px-2.5 py-1 text-xs font-black flex-grow text-center cursor-pointer select-none text-ink"
                  >
                    Open Mail App
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-2 grid-cols-2 lg:grid-cols-4">
          {profile.highlights.map((item) => (
            <div key={item} className="border-2 border-ink bg-paper px-2 py-1 text-center text-xs font-black text-ink">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-card flex items-center justify-center bg-yellow-pop p-4.5 md:p-6">
        <img
          className="aspect-square w-full max-w-[280px] border-4 border-ink object-cover"
          src={profile.avatar}
          alt="Huynh Gia Han profile placeholder"
        />
      </div>
    </section>
  );
}
