import { skills } from '../data/skills';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <SectionHeader eyebrow="Skills" title="The stack I work with." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.group} className="brutal-card-sm p-4 md:p-5">
            <h3 className="mb-3 text-xl font-black">{skill.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span key={item} className="border-2 border-ink bg-yellow-pop px-2.5 py-0.5 text-xs font-black">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
