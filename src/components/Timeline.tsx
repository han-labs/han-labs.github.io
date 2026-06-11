import { achievements } from '../data/achievements';
import { SectionHeader } from './SectionHeader';

const DOT_COLORS = ['bg-yellow-pop', 'bg-blue-pop', 'bg-green-pop', 'bg-pink-pop'];

const getLinkText = (link: string, title: string) => {
  const t = title.toLowerCase();
  if (t.includes('certificate') || t.includes('academy') || t.includes('training')) {
    return 'View Certificate';
  }
  if (t.includes('article') || t.includes('blog') || t.includes('writing')) {
    return 'Read Article';
  }
  if (t.includes('mentor') || t.includes('activity') || t.includes('research') || t.includes('eureka')) {
    return 'View Activity';
  }
  return 'View Detail';
};

export function Timeline() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-9">
      <SectionHeader
        eyebrow="Timeline"
        title="Achievements and milestones."
        description="Scholarships, research, mentoring, and learning milestones that support my internship journey."
      />
      <div className="relative pl-8 md:pl-12">
        {/* Slim vertical line */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-0.5 bg-ink" />

        <div className="space-y-6">
          {achievements.map((item, index) => {
            const hasRealLink = item.link && !item.link.startsWith('#todo');
            const dotColor = DOT_COLORS[index % DOT_COLORS.length];

            return (
              <article key={`${item.year}-${item.title}`} className="relative">
                {/* Node dot */}
                <div
                  className={`absolute left-[-32px] md:left-[-44px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${dotColor} shadow-[1.5px_1.5px_0_rgba(18,18,18,1)]`}
                />

                <div className="flex flex-col items-start">
                  <span className="inline-block border border-ink bg-ink text-paper px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-base md:text-lg font-black text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-ink/80 leading-relaxed">{item.description}</p>
                  
                  {hasRealLink ? (
                    <a
                      className="inline-flex items-center gap-1 mt-2 text-xs font-black underline hover:text-blue-pop transition-colors"
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {getLinkText(item.link, item.title)} →
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
