import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-9">
      <SectionHeader
        eyebrow="About"
        title="Backend-focused, deployment-minded."
        description="A short introduction before recruiters jump into projects and achievements."
      />
      <div className="brutal-card p-4 text-sm font-semibold leading-relaxed md:p-5 text-ink/90">
        <p>{profile.about}</p>
      </div>
    </section>
  );
}
