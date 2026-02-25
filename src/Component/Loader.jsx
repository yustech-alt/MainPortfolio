import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Hello There 👋",
  "Welcome To My World 🌍",
  "I Build Things For The Web 💻",
  "Hope You Enjoy The Visit ✨",
];

const Loader = ({ onComplete }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Cycle through phrases every 1.8s
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => {
        if (prev < phrases.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Progress bar over 8 seconds
  useEffect(() => {
    const start = performance.now();
    const duration = 8000;
    let rafId;
    let timeout1;
    let timeout2;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeout1 = setTimeout(() => setExiting(true), 400);
        timeout2 = setTimeout(() => onComplete(), 1200);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ?
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background glow orbs — FIX: Capped size on mobile to prevent horizontal overflow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            // FIX: w-[500px] was wider than most phones — scaled down for mobile
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-[#6d28d9]/15 rounded-full blur-3xl"
          />

          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#8b5cf6 1px, transparent 1px),
								linear-gradient(90deg, #8b5cf6 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Corner decorations — FIX: Smaller and closer to edge on mobile */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#8b5cf6]/40 rounded-tl-xl" />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#8b5cf6]/40 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#8b5cf6]/40 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#8b5cf6]/40 rounded-br-xl" />

          {/* FIX: Tighter padding and smaller gap on mobile for short viewports */}
          <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-8 px-4 sm:px-6 w-full">
            {/* Logo — FIX: Scaled down on small screens */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-3xl sm:text-5xl shadow-2xl shadow-[#8b5cf6]/40">
                👨‍💻
              </div>
              {/* Ring around logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-[20px] sm:rounded-[28px] border-2 border-dashed border-[#8b5cf6]/30"
              />
            </motion.div>

            {/* Name — FIX: Added text-4xl base so heading doesn't overflow on small phones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                Yusuf<span className="text-[#8b5cf6]">.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                // FIX: Slightly smaller tracking on tiny screens to avoid overflow
                className="text-[#94a3b8] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase mt-2"
              >
                Frontend Developer
              </motion.p>
            </motion.div>

            {/* Cycling Phrases — FIX: min-h instead of fixed h-8 so emoji phrases don't clip on narrow screens */}
            <div className="min-h-[2rem] flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                  // FIX: Added px-4 so long phrases don't touch screen edges on narrow devices
                  className="text-[#94a3b8] text-xs sm:text-sm md:text-base font-medium text-center px-4"
                >
                  {phrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Bar — FIX: Full width with a max-w cap instead of fixed w-64/w-80 */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full max-w-[16rem] sm:max-w-[20rem] flex flex-col gap-2"
            >
              <div className="w-full h-[3px] bg-[#1e1e2e] rounded-full overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] rounded-full transition-all duration-100"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#64748b]">
                  Loading portfolio...
                </span>
                <span className="text-xs text-[#8b5cf6] font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Bouncing Dots */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      : null}
    </AnimatePresence>
  );
};

export default Loader;
