import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 py-10 text-center">
      <img
        src={logo}
        alt="Zu Burger Spot"
        className="mx-auto h-12 w-12 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40"
      />
      <p className="font-display mt-3 text-sm tracking-[0.15em] text-[var(--color-cream)]">
        ZU BURGER SPOT
      </p>
      <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[var(--color-stone)]">
        Shashamane • Modern digital menu
      </p>
      <p className="mt-4 text-[11px] text-[var(--color-stone)]/70">
        Prices in Ethiopian Birr · Menu subject to change
      </p>
    </footer>
  );
}
