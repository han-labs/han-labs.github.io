import { profile } from '../data/profile';

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-14">
      <div className="brutal-card p-5 md:p-8">
        <p className="mb-3 inline-block border-2 border-ink bg-blue-pop px-3 py-1 text-xs font-black uppercase tracking-wider">
          Open to Backend Internships
        </p>
        <h1 className="section-title text-4xl font-black leading-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-xl font-black">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-ink/95">{profile.heroLine}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="brutal-button bg-yellow-pop px-4 py-2.5 font-black" href="#projects">
            View Projects
          </a>
          <a className="brutal-button bg-paper px-4 py-2.5 font-black" href={profile.cv} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="brutal-button bg-green-pop px-4 py-2.5 font-black" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="brutal-button bg-blue-pop px-4 py-2.5 font-black" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="brutal-button bg-pink-pop px-4 py-2.5 font-black" href={`mailto:${profile.email}`}>
            Email Me
          </a>
        </div>

        <div className="mt-6 grid gap-2.5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {profile.highlights.map((item) => (
            <div key={item} className="border-2 border-ink bg-paper px-3 py-1.5 text-center text-sm font-black">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-card flex items-center justify-center bg-yellow-pop p-5 md:p-6">
        <img
          className="aspect-square w-full max-w-sm border-4 border-ink object-cover"
          src={profile.avatar}
          alt="Huynh Gia Han profile placeholder"
        />
      </div>
    </section>
  );
}
