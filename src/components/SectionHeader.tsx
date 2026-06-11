type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-5 max-w-3xl">
      <p className="mb-2 inline-block border-2 border-ink bg-yellow-pop px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-ink">
        {eyebrow}
      </p>
      <h2 className="section-title text-2xl font-black leading-tight sm:text-3xl md:text-4xl lg:text-[40px] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 text-sm md:text-base font-semibold leading-relaxed text-ink/80">
          {description}
        </p>
      ) : null}
    </div>
  );
}
