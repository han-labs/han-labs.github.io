import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
      />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-4">
        {projects.map((project) => {
          const currentData = project[lang];
          return (
            <article key={project.name} className="brutal-card overflow-hidden flex flex-col md:flex-row h-full bg-paper">
              {/* Left thumbnail image on desktop, top image on mobile */}
              <img
                className="h-28 w-full md:h-full md:w-32 border-b border-ink md:border-b-0 md:border-r border-ink object-cover shrink-0"
                src={project.image}
                alt={`${project.name} thumbnail`}
              />
              {/* Project Content details */}
              <div className="p-3 flex flex-col flex-grow justify-between">
                <div>
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-xs sm:text-sm md:text-sm font-black text-ink">{project.name}</h3>
                    <span className="border border-ink bg-pink-pop px-1 py-0.5 text-[8px] font-black text-ink">{currentData.status}</span>
                  </div>
                  <p className="text-[8px] font-black uppercase tracking-wider text-ink/70">{project.period}</p>
                  <p className="mt-1.5 text-[11px] font-semibold leading-relaxed text-ink/90">{currentData.description}</p>

                  <ul className="mt-2 space-y-0.5">
                    {currentData.highlights.map((highlight) => (
                      <li key={highlight} className="text-[10px] font-semibold text-ink/80">
                        <span className="mr-1 font-black text-[8px]">▣</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-ink bg-yellow-pop px-1 py-0.5 text-[8px] font-black text-ink">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.github && !project.github.startsWith('#todo') ? (
                      <a className="brutal-button bg-paper px-2 py-0.5 text-[9px] font-black text-ink" href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    {project.live && !project.live.startsWith('#todo') ? (
                      <a className="brutal-button bg-blue-pop px-2 py-0.5 text-[9px] font-black text-ink" href={project.live} target="_blank" rel="noreferrer">
                        {t('project.livedemo')}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
