import { useState } from 'react';
import { BlogPost, posts } from '../data/blog';
import { SectionHeader } from './SectionHeader';

export function BlogPreview() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Disable scroll when modal is open
  if (typeof window !== 'undefined') {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="writing" className="mx-auto max-w-5xl px-4 py-5 md:px-6 md:py-7">
      <SectionHeader
        eyebrow="Writing"
        title="Project case studies and notes."
        description="Read detailed development logs and lessons from my backend projects."
      />
      
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            onClick={() => setActivePost(post)}
            className="brutal-card-sm p-3.5 md:p-4 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 bg-paper"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="border-2 border-ink bg-blue-pop px-2 py-0.5 text-[10px] font-black text-ink">
                  {post.tag}
                </span>
                <span className="text-[10px] font-bold text-ink/70">{post.readingTime}</span>
              </div>
              <h3 className="text-sm md:text-base font-black text-ink hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-[11px] font-semibold leading-relaxed text-ink/80">
                {post.excerpt}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePost(post);
              }}
              className="mt-4 text-[10px] font-black underline hover:text-pink-pop text-left cursor-pointer text-ink"
            >
              Read Article →
            </button>
          </article>
        ))}
      </div>

      {/* Neobrutalist Reading Modal styled to match design screenshot */}
      {activePost && (
        <div
          className="article-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActivePost(null)}
        >
          <div
            className="border-4 border-ink bg-paper max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-[6px_6px_0_var(--color-line)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Square Pink Close Button with border and shadow */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 border-2 border-ink bg-pink-pop h-8 w-8 flex items-center justify-center font-black cursor-pointer text-sm text-ink select-none shadow-[3px_3px_0_var(--color-line)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--color-line)] transition-all"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="border-2 border-ink bg-blue-pop px-2.5 py-0.5 text-xs font-black text-ink select-none">
                  {activePost.tag}
                </span>
                <span className="text-xs font-bold text-ink/70">{activePost.readingTime}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-ink leading-tight mb-4">
                {activePost.title}
              </h3>
              {/* Quote Block with thick vertical left border */}
              <p className="text-xs md:text-sm font-semibold italic text-ink/80 border-l-[4px] border-ink pl-3.5 mb-5">
                {activePost.intro}
              </p>
            </div>

            {/* Modal Sections */}
            <div className="space-y-4 mt-4 text-ink">
              {activePost.sections.map((section, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm md:text-base font-black">{section.heading}</h4>
                  <p className="text-xs md:text-sm font-semibold leading-relaxed text-ink/85">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* What I Learned Card with border, shadow, and white/paper background */}
            <div className="mt-6 border-2 border-ink bg-paper p-4 shadow-[4px_4px_0_var(--color-line)]">
              <h5 className="text-xs md:text-sm font-black text-ink mb-1">What I Learned</h5>
              <p className="text-[11px] md:text-xs font-semibold leading-relaxed text-ink/90">
                {activePost.whatILearned}
              </p>
            </div>

            {/* Bottom Yellow Close Action Button with border and shadow */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="border-2 border-ink bg-yellow-pop px-4 py-1.5 text-xs font-black text-ink cursor-pointer select-none shadow-[3px_3px_0_var(--color-line)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--color-line)] transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
