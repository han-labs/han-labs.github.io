import { posts } from '../data/blog';
import { SectionHeader } from './SectionHeader';

export function BlogPreview() {
  return (
    <section id="writing" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <SectionHeader
        eyebrow="Writing"
        title="Project case studies and notes."
        description="Static placeholders for now. These can become real blog posts later."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => {
          const hasRealLink = post.link && !post.link.startsWith('#todo');
          return (
            <article key={post.title} className="brutal-card-sm p-4 md:p-5 flex flex-col justify-between">
              <div>
                <span className="border-2 border-ink bg-blue-pop px-2 py-0.5 text-xs font-black">{post.tag}</span>
                <h3 className="mt-3 text-lg md:text-xl font-black">{post.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-ink/80">{post.excerpt}</p>
              </div>
              {hasRealLink ? (
                <a className="mt-4 inline-block text-xs font-black underline hover:text-blue-pop transition-colors" href={post.link}>
                  Read Article →
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
