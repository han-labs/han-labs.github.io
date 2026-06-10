type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="mb-2 inline-block border-2 border-ink bg-yellow-pop px-3 py-1 text-xs font-black uppercase tracking-wider">
        {eyebrow}
      </p>
      <h2 className="section-title text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-3 text-base font-semibold leading-relaxed text-ink/80">{description}</p> : null}
    </div>
  );
}
