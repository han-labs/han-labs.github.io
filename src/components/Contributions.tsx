import { SectionHeader } from './SectionHeader';

const contributions = [
  {
    title: 'Backend Development',
    text: 'Build REST APIs, authentication, RBAC, and database-backed features.',
  },
  {
    title: 'Database Design',
    text: 'Design PostgreSQL schemas for real application workflows.',
  },
  {
    title: 'Deployment Mindset',
    text: 'Containerize and deploy applications with Docker, Nginx, and AWS EC2.',
  },
  {
    title: 'Team Collaboration',
    text: 'Work with Git, Agile/Scrum, documentation, and clear project ownership.',
  },
];

export function Contributions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-9">
      <SectionHeader eyebrow="Contribute" title="What I can bring to a team." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contributions.map((item, index) => (
          <article
            key={item.title}
            className={`brutal-card-sm p-3.5 md:p-4 ${index % 2 === 0 ? 'bg-blue-pop' : 'bg-green-pop'}`}
          >
            <h3 className="text-base font-black text-ink">{item.title}</h3>
            <p className="mt-2 text-xs font-semibold leading-relaxed text-ink/90">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
