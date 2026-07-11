import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";
import logo from "../assets/images/logo.jpg";

export default function Loader({ progress }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
    >
      {/* background photo */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,9,4,0.55)_0%,_rgba(11,9,4,0.88)_65%,_rgba(11,9,4,0.98)_100%)]" />
      </motion.div>

      {/* steam wisps rising from behind the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[7.5rem] flex gap-3 z-10">
        {[0, 0.5, 1].map((delay, i) => (
          <span
            key={i}
            className="steam-wisp block h-16 w-[3px] rounded-full bg-[var(--color-gold-light)]/60 blur-[2px]"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      {/* logo mark */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <div className="absolute inset-0 -m-2 rounded-full bg-[var(--color-gold)]/20 blur-2xl" />
          <img
            src={logo}
            alt="Zu Burger Spot"
            className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover ring-1 ring-[var(--color-gold)]/50 shadow-[0_0_60px_rgba(212,160,23,0.25)]"
            draggable={false}
          />
        </div>

        <motion.p
          className="font-display text-shimmer mt-6 text-2xl sm:text-3xl tracking-[0.18em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Zu Burger Spot
        </motion.p>
        <motion.p
          className="mt-2 text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[var(--color-stone)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          Digital Menu
        </motion.p>
      </motion.div>

      {/* progress bar */}
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
