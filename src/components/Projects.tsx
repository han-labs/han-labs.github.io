import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-9">
      <SectionHeader
        eyebrow="Projects"
        title="Featured backend projects."
        description="CV is the compressed version. This portfolio shows the detailed work behind it."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="brutal-card overflow-hidden flex flex-col h-full bg-paper">
            <img className="h-44 w-full border-b-4 border-ink object-cover" src={project.image} alt={`${project.name} thumbnail`} />
            <div className="p-4.5 flex flex-col flex-grow">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black text-ink">{project.name}</h3>
                <span className="border-2 border-ink bg-pink-pop px-2 py-0.5 text-[10px] font-black text-ink">{project.status}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-wider text-ink/70">{project.period}</p>
              <p className="mt-2.5 text-sm font-semibold leading-relaxed text-ink/90">{project.description}</p>

              <ul className="mt-2.5 space-y-1 flex-grow">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-xs font-semibold text-ink/80">
                    <span className="mr-2 font-black text-[10px]">▣</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="border-2 border-ink bg-yellow-pop px-1.5 py-0.5 text-[9px] font-black text-ink">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.github && !project.github.startsWith('#todo') ? (
                  <a className="brutal-button bg-paper px-2.5 py-1 text-xs font-black text-ink" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
                {project.demo && !project.demo.startsWith('#todo') ? (
                  <a className="brutal-button bg-blue-pop px-2.5 py-1 text-xs font-black text-ink" href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : null}
                {project.caseStudy && !project.caseStudy.startsWith('#todo') ? (
                  <a className="brutal-button bg-green-pop px-2.5 py-1 text-xs font-black text-ink" href={project.caseStudy}>
                    Case Study
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
