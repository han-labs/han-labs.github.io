import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-9">
      <div className="brutal-card bg-yellow-pop p-5 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* Left Column: Info & Details */}
          <div>
            <span className="inline-block border-2 border-ink bg-paper px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-2.5 shadow-[1.5px_1.5px_0_rgba(18,18,18,1)] text-ink">
              Get in Touch
            </span>
            <h2 className="section-title text-2xl font-black leading-tight md:text-3xl text-ink">
              Let’s build something together!
            </h2>
            <p className="mt-2.5 text-sm font-semibold leading-relaxed text-ink/90">
              Looking for Backend Developer Intern opportunities where I can contribute to building API systems, designing PostgreSQL databases, and handling containerized deployments.
            </p>
            
            <div className="mt-4 space-y-1.5 text-xs font-bold text-ink">
              <div>
                Location: {profile.location}
              </div>
              <div>
                Email:{' '}
                <a className="underline hover:text-ink/75" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actions Grid (No Emojis, Colors matching Hero) */}
          <div className="grid gap-2.5 sm:grid-cols-2">
            <a
              className="brutal-button bg-pink-pop px-3.5 py-2.5 text-center text-xs font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={`mailto:${profile.email}`}
            >
              Email
            </a>
            <a
              className="brutal-button bg-green-pop px-3.5 py-2.5 text-center text-xs font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="brutal-button bg-blue-pop px-3.5 py-2.5 text-center text-xs font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="brutal-button bg-yellow-pop px-3.5 py-2.5 text-center text-xs font-black flex items-center justify-center text-ink cursor-pointer select-none"
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
