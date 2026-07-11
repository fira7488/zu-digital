import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();

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

  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 4);

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

          <main className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
            {/* Plain, clean hero shell — no image behind this whole panel */}
            <section className="hero-panel mb-8 rounded-[28px] border border-white/10 px-5 py-6 sm:px-7 sm:py-7">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
                {/* LEFT COLUMN — the ONLY place the photo lives, boxed and clipped */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 px-5 py-6 sm:px-6 sm:py-7">
                  {/* photo confined to this box only */}
                  <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                    <motion.img
                      src={logo}
                      alt=""
                      className="h-full w-full object-contain"
                      animate={
                        prefersReducedMotion ? {} : { x: ["-2%", "2%", "-2%"] }
                      }
                      transition={{
                        duration: 16,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,9,4,0.55)_0%,_rgba(11,9,4,0.82)_65%,_rgba(11,9,4,0.95)_100%)]" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-[11px] tracking-[0.42em] uppercase text-(--color-gold)/80">
                      Fresh • Fast • Flavorful
                    </p>
                    <h1 className="font-display mt-3 text-3xl sm:text-4xl text-(--color-cream)">
                      Zu Burger Spot
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-(--color-stone) sm:text-[15px]">
                      Explore a modern digital menu with burgers, pastries,
                      pancakes, shawarma, fresh juices, shakes, and more — all
                      presented in a clean, premium style.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href="#burgers"
                        className="rounded-full bg-(--color-gold) px-4 py-2 text-sm font-semibold text-[#0b0904] transition-opacity hover:opacity-90"
                      >
                        Browse Menu
                      </a>
                      <a
                        href="#footer"
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-(--color-cream) transition-colors hover:border-(--color-gold)/40 hover:text-(--color-gold-light)"
                      >
                        Visit & Order
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN — plain, no photo, same as the simple version */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {featuredItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-(--color-gold)">
                          Popular
                        </span>
                        <span className="font-display text-sm text-(--color-gold-light)">
                          {item.price.toLocaleString("en-US")} Br
                        </span>
                      </div>
                      <p className="font-display text-[15px] text-(--color-cream)">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEARCH BAR — plain, no photo, same as the simple version */}
              <div className="search-shell mt-6 rounded-2xl border border-white/10 px-3 py-3">
                <label className="mb-2 block text-[11px] uppercase tracking-[0.3em] text-(--color-stone)">
                  Search menu
                </label>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search burgers, pancakes, shakes..."
                  className="w-full border-0 bg-transparent text-sm text-(--color-cream) outline-none placeholder:text-(--color-stone)"
                />
              </div>
            </section>

            <div className="mb-6 flex items-center justify-between gap-3">
              <p className="text-[11px] uppercase tracking-[0.32em] text-(--color-stone)">
                {visibleCategories.length} categories shown
              </p>
            </div>

            {visibleCategories.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 px-5 py-10 text-center text-sm text-(--color-stone)">
                No menu items match that search yet.
              </div>
            ) : (
              <div className="space-y-14">
                {visibleCategories.map((cat) => (
                  <MenuSection
                    key={cat.id}
                    category={cat}
                    items={grouped.get(cat.id) ?? []}
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
