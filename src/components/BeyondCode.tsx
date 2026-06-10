import { beyondCodeItems } from '../data/beyondCode';
import { SectionHeader } from './SectionHeader';

const getLinkText = (link: string, title: string) => {
  const t = title.toLowerCase();
  if (t.includes('scholarship') || t.includes('recognition')) {
    return 'View Detail';
  }
  if (t.includes('article') || t.includes('story') || t.includes('profile')) {
    return 'Read Article';
  }
  if (t.includes('mentor') || t.includes('activity') || t.includes('community')) {
    return 'View Activity';
  }
  if (t.includes('research')) {
    return 'View Detail';
  }
  return 'View Detail';
};

export function BeyondCode() {
  return (
    <section id="beyond" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <SectionHeader
        eyebrow="Beyond the Code"
        title="Beyond the Code"
        description="Activities, scholarships, research, and stories that shaped my learning journey."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {beyondCodeItems.map((item) => {
          const hasRealLink = item.link && !item.link.startsWith('#todo');
          
          return (
            <article key={item.title} className="brutal-card-sm overflow-hidden flex flex-col h-full bg-paper">
              <div className="relative aspect-[3/2] w-full border-b-2 border-ink overflow-hidden bg-cream">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  src={item.image || '/assets/beyond-placeholder.svg'}
                  alt={`${item.title} thumbnail`}
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = '/assets/beyond-placeholder.svg';
                  }}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-ink/80 flex-grow">
                  {item.description}
                </p>
                {hasRealLink ? (
                  <a
                    className="brutal-button bg-yellow-pop px-3 py-1.5 text-xs font-black inline-block w-fit mt-4 text-center"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getLinkText(item.link, item.title)}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
