import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpg";

export default function Loader({ progress }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
      role="status"
      aria-live="polite"
      aria-label="Loading Zu Burger Spot digital menu"
    >
      {/* single photo, full-bleed, feathered — no second background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 42%, black 0%, black 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 42%, black 0%, black 35%, transparent 78%)",
        }}
      >
        <img
          src={logo}
          alt=""
          className="h-full w-full object-cover opacity-70"
          draggable={false}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,9,4,0.35)_0%,_rgba(11,9,4,0.85)_60%,_rgba(11,9,4,1)_100%)]" />

      {/* steam wisps */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[7.5rem] flex gap-3 z-10" aria-hidden="true">
        {[0, 0.5, 1].map((delay, i) => (
          <span
            key={i}
            className="steam-wisp block h-16 w-[3px] rounded-full bg-[var(--color-gold-light)]/60 blur-[2px]"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-display text-shimmer text-3xl sm:text-4xl tracking-[0.02em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Zu Burger Spot
        </motion.p>
        <motion.p
          className="mt-3 text-[10px] sm:text-[11px] tracking-[0.42em] uppercase text-[var(--color-stone)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          Digital Menu
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 mt-10 h-[2px] w-40 sm:w-56 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.25 }}
        />
      </motion.div>
    </motion.div>
  );
}
