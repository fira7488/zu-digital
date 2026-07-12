import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import CategoryNav from "./components/CategoryNav.jsx";
import MenuSection from "./components/MenuSection.jsx";
import Footer from "./components/Footer.jsx";
import { categories, menuItems } from "./data/menuData.js";
import logo from "./assets/images/logo.jpg";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;
    const tick = () => {
      const pct = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
      else setTimeout(() => setLoading(false), 350);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const cat of categories) {
      map.set(
        cat.id,
        menuItems.filter((item) => item.category === cat.id),
      );
    }
    return map;
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories.filter((cat) => {
      const items = grouped.get(cat.id) ?? [];
      return (
        cat.label.toLowerCase().includes(normalizedQuery) ||
        items.some((item) => item.name.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [grouped, normalizedQuery]);

  const visibleCategories =
    active === "all"
      ? filteredCategories
      : filteredCategories.filter((c) => c.id === active);

  // Single flagship dish — confident, not four identical cards
  const flagship =
    menuItems.find((item) => item.featured) ??
    menuItems.find((item) => item.id === "b4"); // American Burger fallback

  const handleSelect = (id) => {
    setActive(id);
    if (id !== "all") {
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grain-overlay" />
      <AnimatePresence>
        {loading && <Loader key="loader" progress={progress} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          <Header />
          <CategoryNav
            categories={categories}
            active={active}
            onSelect={handleSelect}
          />

          <main className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
            {/* HERO — asymmetric, typography-led, no boxed photo */}
            <section className="relative mb-16 sm:mb-20">
              {/* logo emblem — a badge, not a background */}
              <motion.img
                src={logo}
                alt="Zu Burger Spot emblem"
                className="pointer-events-none absolute -top-6 right-0 z-10 h-24 w-24 -rotate-6 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40 shadow-[0_8px_40px_rgba(212,160,23,0.18)] sm:h-32 sm:w-32 sm:-top-8"
                initial={{ opacity: 0, scale: 0.85, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                draggable={false}
              />

              <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                <div className="pt-4">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-stone)]">
                    Fresh &middot; Fast &middot; Flavorful
                  </p>
                  <h1 className="font-display mt-4 text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[var(--color-cream)]">
                    Zu Burger
                    <br />
                    <span className="font-display italic text-[var(--color-gold)]">
                      Spot
                    </span>
                  </h1>
                  <p className="mt-6 max-w-md text-[15px] leading-6 text-[var(--color-stone)]">
                    Burgers, sandwiches, pancakes, shawarma, fresh juices and
                    shakes — made fresh, served fast.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <a
                      href="#burgers"
                      className="rounded-full bg-[var(--color-gold)] px-6 py-2.5 text-sm font-semibold text-[#0b0904] transition-opacity hover:opacity-90"
                    >
                      Browse Menu
                    </a>
                    <a
                      href="#footer"
                      className="text-sm text-[var(--color-stone)] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[var(--color-cream)]"
                    >
                      Visit &amp; Order
                    </a>
                  </div>
                </div>

                {/* single confident flagship dish, not a 4-card grid */}
                {flagship && (
                  <div className="pb-1">
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-stone)]">
                      Most Loved
                    </p>
                    <p className="font-display mt-2 text-2xl text-[var(--color-cream)]">
                      {flagship.name}
                    </p>
                    <p className="font-display italic mt-1 text-4xl text-[var(--color-gold)]">
                      {flagship.price.toLocaleString("en-US")}
                      <span className="ml-1 text-sm not-italic tracking-[0.1em] text-[var(--color-stone)]">
                        BR
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* search — plain, no box */}
              <div className="mt-10 border-b border-white/10 pb-2">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search the menu&hellip;"
                  className="w-full border-0 bg-transparent text-[15px] text-[var(--color-cream)] outline-none placeholder:text-[var(--color-stone)]/60"
                />
              </div>
            </section>

            {visibleCategories.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 px-5 py-10 text-center text-sm text-[var(--color-stone)]">
                No menu items match that search yet.
              </div>
            ) : (
              <div className="space-y-16">
                {visibleCategories.map((cat, i) => (
                  <MenuSection
                    key={cat.id}
                    category={cat}
                    items={grouped.get(cat.id) ?? []}
                    featured={active === "all" && i === 0}
                  />
                ))}
              </div>
            )}
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
