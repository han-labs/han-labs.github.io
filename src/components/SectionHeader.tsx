type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-4 max-w-3xl">
      <p className="mb-1.5 inline-block border-2 border-ink bg-yellow-pop px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-ink">
        {eyebrow}
      </p>
      <h2 className="section-title text-lg sm:text-xl md:text-2xl font-black leading-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
