import { useEffect, useState } from 'react';
import { Project, projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const projectHash = (project: Project) => `#project-${project.slug}`;

export function Projects() {
  const { lang, t } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const syncProjectFromUrl = () => {
      const project = projects.find((item) => projectHash(item) === window.location.hash);
      setActiveProject(project ?? null);
    };

    syncProjectFromUrl();
    window.addEventListener('hashchange', syncProjectFromUrl);
    window.addEventListener('popstate', syncProjectFromUrl);

    return () => {
      window.removeEventListener('hashchange', syncProjectFromUrl);
      window.removeEventListener('popstate', syncProjectFromUrl);
    };
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProject();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const openProject = (project: Project) => {
    window.history.pushState(null, '', projectHash(project));
    setActiveProject(project);
  };

  const closeProject = () => {
    window.history.replaceState(null, '', '#projects');
    setActiveProject(null);
  };

  const activeCopy = activeProject?.[lang];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} />

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const currentData = project[lang];

          return (
            <article
              key={project.slug}
              role="link"
              tabIndex={0}
              aria-label={`${t('project.readcase')}: ${project.name}`}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(project);
                }
              }}
              className="brutal-card group flex h-full cursor-pointer flex-col overflow-hidden bg-paper transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-pop"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-ink bg-cream">
                {project.image ? (
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                    src={project.image}
                    alt={`${project.name} project preview`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--color-cream),var(--color-yellow-pop))] p-6 text-center">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                        {t('project.gallery')}
                      </span>
                      <div className="mt-2 text-2xl font-semibold text-ink">{project.name}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink md:text-xl">{project.name}</h3>
                    {project.period ? (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink/55">{project.period}</p>
                    ) : null}
                  </div>
                  <span className="border border-ink bg-pink-pop px-2 py-0.5 text-[9px] font-semibold text-ink">
                    {currentData.status}
                  </span>
                </div>

                <p className="mt-3 text-sm font-normal leading-relaxed text-ink/80">{currentData.summary}</p>
                <p className="mt-2 text-xs font-medium text-ink/65">{currentData.role}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-ink/25 bg-yellow-pop px-2 py-1 text-[9px] font-medium text-ink">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                  <a
                    href={projectHash(project)}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      openProject(project);
                    }}
                    onKeyDown={(event) => event.stopPropagation()}
                    className="brutal-button bg-blue-pop px-3 py-1.5 text-[10px] font-semibold text-ink"
                  >
                    {t('project.readcase')} →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    onKeyDown={(event) => event.stopPropagation()}
                    className="brutal-button bg-paper px-3 py-1.5 text-[10px] font-semibold text-ink"
                  >
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                      className="brutal-button bg-green-pop px-3 py-1.5 text-[10px] font-semibold text-ink"
                    >
                      {t('project.livedemo')}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeProject && activeCopy ? (
        <div
          className="article-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-article-title"
        >
          <article
            className="brutal-card relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-paper"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProject}
              className="brutal-button absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center bg-pink-pop text-base font-semibold text-ink md:right-5 md:top-5"
              aria-label={t('project.close')}
            >
              ×
            </button>

            <div className="aspect-[16/7] min-h-44 w-full overflow-hidden border-b border-ink bg-cream">
              {activeProject.image ? (
                <img
                  src={activeProject.image}
                  alt={`${activeProject.name} project preview`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,var(--color-cream),var(--color-yellow-pop))] p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/55">{t('project.gallery')}</span>
                </div>
              )}
            </div>

            <div className="p-5 md:p-8">
              <div className="pr-12">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="border border-ink bg-pink-pop px-2 py-0.5 text-[10px] font-semibold text-ink">
                    {activeCopy.status}
                  </span>
                  {activeProject.period ? (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink/55">{activeProject.period}</span>
                  ) : null}
                </div>
                <h3 id="project-article-title" className="section-title text-2xl font-semibold text-ink md:text-4xl">
                  {activeProject.name}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75 md:text-base">{activeCopy.summary}</p>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
                <section>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                    {t('project.role')}
                  </h4>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{activeCopy.role}</p>
                </section>
                <section>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                    {t('project.contribution')}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-ink/85">{activeCopy.contribution}</p>
                </section>
              </div>

              <section className="mt-7 border-t border-ink/15 pt-5">
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                  {t('project.stack')}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span key={tech} className="border border-ink/25 bg-yellow-pop px-2.5 py-1 text-[10px] font-medium text-ink">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {activeProject.gallery.length > 0 ? (
                <section className="mt-7 border-t border-ink/15 pt-5">
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                    {t('project.gallery')}
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {activeProject.gallery.map((media) => (
                      <figure key={media.src} className="overflow-hidden border border-ink bg-cream">
                        <img src={media.src} alt={media.alt[lang]} className="aspect-video w-full object-cover" />
                        {media.caption ? (
                          <figcaption className="p-2 text-[10px] text-ink/65">{media.caption[lang]}</figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="mt-7 border-t border-ink/15 pt-5">
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                  {t('project.resources')}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-button bg-paper px-3 py-1.5 text-[11px] font-semibold text-ink"
                  >
                    GitHub ↗
                  </a>
                  {activeProject.live ? (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-button bg-green-pop px-3 py-1.5 text-[11px] font-semibold text-ink"
                    >
                      {t('project.livedemo')} ↗
                    </a>
                  ) : null}
                  {activeProject.resources.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-button bg-blue-pop px-3 py-1.5 text-[11px] font-semibold text-ink"
                    >
                      {resource.label} ↗
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
