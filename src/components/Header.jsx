import logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
        <img
          src={logo}
          alt="Zu Burger Spot"
          className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40"
        />
        <div className="min-w-0">
          <p className="font-display truncate text-[15px] tracking-[0.08em] text-[var(--color-cream)] sm:text-base">
            Zu Burger Spot
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]/80 sm:text-[11px]">
            Digital Menu
          </p>
        </div>
        <div className="ml-auto hidden text-right sm:block">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-stone)]">
            Freshly Made
          </p>
          <p className="text-[11px] text-[var(--color-cream)]">Fast service • modern menu</p>
        </div>
      </div>
    </header>
  );
}
