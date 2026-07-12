export default function CategoryNav({ categories, active, onSelect }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[61px] sm:top-[65px] z-20 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="scrollbar-none mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-2.5 sm:px-6">
        <button
          onClick={() => onSelect("all")}
          aria-current={active === "all" ? "true" : undefined}
          className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm tracking-wide transition-colors min-h-[40px] ${
            active === "all"
              ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[#0b0904] font-semibold"
              : "border-white/10 text-[var(--color-stone)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-cream)]"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            aria-current={active === c.id ? "true" : undefined}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm tracking-wide transition-colors min-h-[40px] ${
              active === c.id
                ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[#0b0904] font-semibold"
                : "border-white/10 text-[var(--color-stone)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-cream)]"
            }`}
          >
            <span className="mr-1.5" aria-hidden="true">
              {c.icon}
            </span>
            {c.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
