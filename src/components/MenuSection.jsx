import { motion } from "framer-motion";

function formatBirr(n) {
  return n.toLocaleString("en-US");
}

export default function MenuSection({ category, items }) {
  return (
    <motion.section
      id={category.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative mb-5 h-36 overflow-hidden rounded-2xl sm:h-44">
        <img
          src={category.image}
          alt={category.label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-5">
          <p className="text-2xl" aria-hidden="true">
            {category.icon}
          </p>
          <h2 className="font-display text-xl tracking-wide text-[var(--color-cream)] sm:text-2xl">
            {category.label}
          </h2>
          <p className="text-xs text-[var(--color-stone)] sm:text-sm">
            {category.tagline}
          </p>
        </div>
      </div>

      <div className="menu-card-grid pb-10">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            className="menu-item-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.38,
              delay: Math.min(index * 0.03, 0.3),
              ease: "easeOut",
            }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="menu-item-image-wrap">
              <img
                src={item.image || category.image}
                alt=""
                loading="lazy"
                className="menu-item-image"
              />
            </div>

            <div className="menu-item-content">
              <h3 className="menu-item-title">{item.name}</h3>
              <p className="menu-item-description">
                {item.description ??
                  "Freshly prepared and served with care for a satisfying bite."}
              </p>
            </div>

            <div className="menu-item-price-badge">
              <span>
                {formatBirr(item.price)}
                <span className="sr-only"> Ethiopian Birr</span> BR
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
