import { motion } from "framer-motion";

function formatBirr(n) {
  return n.toLocaleString("en-US");
}

const itemImages = {
  b1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
  b2: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1000&q=80",
  b3: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1000&q=80",
  b4: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
  b5: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=80",
  s1: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
  s2: "https://images.unsplash.com/photo-1553909489-ec2175ef3f52?auto=format&fit=crop&w=1000&q=80",
  s3: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  s4: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
  s5: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=80",
  s6: "https://images.unsplash.com/photo-1554139697-9b260a44c452?auto=format&fit=crop&w=1000&q=80",
  p1: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
  p2: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=1000&q=80",
  p3: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
  p4: "https://images.unsplash.com/photo-1567620905732-2d1ec7dd9f88?auto=format&fit=crop&w=1000&q=80",
  p5: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1000&q=80",
  p6: "https://images.unsplash.com/photo-1464306076886-da185f6a9d8b?auto=format&fit=crop&w=1000&q=80",
  p7: "https://images.unsplash.com/photo-1443131307017-5d1e6ab8e5d3?auto=format&fit=crop&w=1000&q=80",
  w1: "https://images.unsplash.com/photo-1617021713030-2d5ae3720b85?auto=format&fit=crop&w=1000&q=80",
  w2: "https://images.unsplash.com/photo-1615870216516-5ad49cfe1f6d?auto=format&fit=crop&w=1000&q=80",
  w3: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
  w4: "https://images.unsplash.com/photo-1547499417-61a0d9cdb223?auto=format&fit=crop&w=1000&q=80",
  w5: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  f1: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1000&q=80",
  f2: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80",
  j1: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  j2: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1000&q=80",
  j3: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80",
  j4: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1000&q=80",
  j5: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  j6: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  j7: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80",
  j8: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
  j9: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1000&q=80",
  j10: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
  m1: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80",
  m2: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  m3: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80",
  m4: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80",
  m5: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1000&q=80",
  fr1: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  fr2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
  fr3: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  fr4: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80",
  fr5: "https://images.unsplash.com/photo-1511920183350-8f9f1fbfd9db?auto=format&fit=crop&w=1000&q=80",
  fr6: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  h1: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
  d1: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=1000&q=80",
  d2: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  d3: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
  d4: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
  e1: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
  e2: "https://images.unsplash.com/photo-1518013431113-eb1465fa5752?auto=format&fit=crop&w=1000&q=80",
  e3: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80";

function getItemImage(itemId, fallback) {
  return itemImages[itemId] || fallback || fallbackImage;
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
          <p className="text-2xl">{category.icon}</p>
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
              delay: index * 0.03,
              ease: "easeOut",
            }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="menu-item-image-wrap">
              <img
                src={getItemImage(item.id, category.image)}
                alt={item.name}
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
              <span>{formatBirr(item.price)} BR</span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
