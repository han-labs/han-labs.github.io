import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <div className="brutal-card bg-yellow-pop p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* Left Column: Info & Details */}
          <div>
            <span className="inline-block border-2 border-ink bg-paper px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-3 shadow-[1.5px_1.5px_0_rgba(18,18,18,1)]">
              Get in Touch
            </span>
            <h2 className="section-title text-3xl font-black leading-tight md:text-4xl text-ink">
              Let’s build something together!
            </h2>
            <p className="mt-3 text-base font-semibold leading-relaxed text-ink/90">
              I am actively looking for <strong className="font-black">Backend Developer Intern</strong> opportunities where I can contribute to building API systems, designing PostgreSQL databases, and handling containerized deployments.
            </p>
            
            <div className="mt-5 space-y-2.5 text-sm font-bold text-ink">
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span>Location: {profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">✉️</span>
                <a className="underline hover:text-ink/75" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actions Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="brutal-button bg-paper px-4 py-3 text-center text-sm font-black flex items-center justify-center gap-2"
              href={`mailto:${profile.email}`}
            >
              ✉️ Email Me
            </a>
            <a
              className="brutal-button bg-blue-pop px-4 py-3 text-center text-sm font-black flex items-center justify-center gap-2"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              className="brutal-button bg-green-pop px-4 py-3 text-center text-sm font-black flex items-center justify-center gap-2"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>
            <a
              className="brutal-button bg-pink-pop px-4 py-3 text-center text-sm font-black flex items-center justify-center gap-2"
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
            >
              📄 View Resume
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
