type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-6 max-w-5xl">
      <p className="mb-2.5 inline-block border-2 border-ink bg-yellow-pop px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
        {eyebrow}
      </p>
      <h2 className="section-title text-2xl font-bold leading-tight text-ink sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
