export default function CategoryNav({ categories, active, onSelect }) {
  return (
    <div className="sticky top-[61px] sm:top-[65px] z-20 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-white/5">
      <div className="scrollbar-none mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        <button
          onClick={() => onSelect("all")}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-xs sm:text-sm tracking-wide transition-colors ${
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
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs sm:text-sm tracking-wide transition-colors ${
              active === c.id
                ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[#0b0904] font-semibold"
                : "border-white/10 text-[var(--color-stone)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-cream)]"
            }`}
          >
            <span className="mr-1.5">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
