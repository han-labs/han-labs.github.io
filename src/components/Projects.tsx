import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
      />
      <div className="mt-5 grid gap-5 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => {
          const currentData = project[lang];
          return (
            <article key={project.name} className="brutal-card overflow-hidden flex flex-col md:flex-row h-full bg-paper">
              {/* Left thumbnail image on desktop, top image on mobile */}
              <img
                className="h-32 w-full shrink-0 border-b border-ink object-cover md:h-full md:w-36 md:border-b-0 md:border-r"
                src={project.image}
                alt={`${project.name} thumbnail`}
              />
              {/* Project Content details */}
              <div className="flex flex-grow flex-col justify-between p-4">
                <div>
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-base font-semibold text-ink">{project.name}</h3>
                    <span className="border border-ink bg-pink-pop px-1.5 py-0.5 text-[9px] font-bold text-ink">{currentData.status}</span>
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-ink/65">{project.period}</p>
                  <p className="mt-2 text-xs font-normal leading-relaxed text-ink/85">{currentData.description}</p>

                  <ul className="mt-2 space-y-0.5">
                    {currentData.highlights.map((highlight) => (
                      <li key={highlight} className="text-[11px] font-normal leading-relaxed text-ink/75">
                        <span className="mr-1 font-black text-[8px]">▣</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-ink bg-yellow-pop px-1.5 py-0.5 text-[9px] font-semibold text-ink">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.github && !project.github.startsWith('#todo') ? (
                      <a className="brutal-button bg-paper px-2.5 py-1 text-[10px] font-semibold text-ink" href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    {project.live && !project.live.startsWith('#todo') ? (
                      <a className="brutal-button bg-blue-pop px-2.5 py-1 text-[10px] font-semibold text-ink" href={project.live} target="_blank" rel="noreferrer">
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
