import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const phrases = [
  'Hello There 👋',
  'Welcome To My World 🌍',
  'I Build Things For The Web 💻',
  'Hope You Enjoy The Visit ✨',
]

// Total loader duration in ms — keep this short for good UX
const DURATION = 2000

const Loader = ({ onComplete }) => {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  // Cycle through phrases evenly across the loader duration
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => {
        if (prev < phrases.length - 1) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, DURATION / phrases.length)

    return () => clearInterval(interval)
  }, [])

  // Progress bar + exit sequence
  useEffect(() => {
    let cancelled = false
    let rafId
    let timeout1
    let timeout2
    const start = performance.now()

    const tick = (now) => {
      const pct = Math.min(((now - start) / DURATION) * 100, 100)

      if (!cancelled) setProgress(pct)

      if (pct < 100) {
        rafId = requestAnimationFrame(tick)
      } else {
        // Small pause at 100% before fading out
        timeout1 = setTimeout(() => { if (!cancelled) setExiting(true) }, 300)
        timeout2 = setTimeout(() => { if (!cancelled) onComplete() }, 1000)
      }
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6d28d9]/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#8b5cf6 1px, transparent 1px),
                linear-gradient(90deg, #8b5cf6 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#8b5cf6]/40 rounded-tl-xl" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#8b5cf6]/40 rounded-tr-xl" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#8b5cf6]/40 rounded-bl-xl" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#8b5cf6]/40 rounded-br-xl" />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6">

            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-5xl shadow-2xl shadow-[#8b5cf6]/40">
                👨‍💻
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-[28px] border-2 border-dashed border-[#8b5cf6]/30"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                Yusuf<span className="text-[#8b5cf6]">.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-[#94a3b8] text-xs tracking-[0.4em] uppercase mt-2"
              >
                Frontend Developer
              </motion.p>
            </motion.div>

            {/* Cycling Phrases */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#94a3b8] text-sm md:text-base font-medium text-center"
                >
                  {phrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-64 md:w-80 flex flex-col gap-2"
            >
              <div className="w-full h-[3px] bg-[#1e1e2e] rounded-full overflow-hidden">
                {/* FIX: Pure CSS transition — no mixed Framer Motion + CSS conflict */}
                <div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] rounded-full transition-[width] duration-100 ease-linear"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#94a3b8]">Loading portfolio...</span>
                <span className="text-xs text-[#8b5cf6] font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Bouncing Dots */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"
                />
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader