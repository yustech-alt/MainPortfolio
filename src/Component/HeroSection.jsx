import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/yustech-alt',
    label: 'GitHub',
    Icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/yuslabi',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
  {
    href: 'https://twitter.com/yusufbalogun',
    label: 'Twitter',
    Icon: FaTwitter,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden px-5 sm:px-8 md:px-12"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#6d28d9]/20 rounded-full blur-3xl pointer-events-none" />

      {/* FIX: Added pb-28 sm:pb-16 so the content column never overlaps
          the absolutely-positioned scroll indicator at the bottom.
          On desktop the indicator sits at bottom-8 (~32px) + its own height
          (~52px) = ~84px, so pb-28 (112px) gives comfortable clearance. */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 items-center text-center z-10 pb-28 sm:pb-26">

        {/* Availability Badge */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-2 sm:gap-3 bg-[#13131a] border border-[#8b5cf6]/30 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-xs sm:text-sm text-[#94a3b8]">Available for freelance &amp; internship</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-8 text-white"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]">
            Yusuf Balogun
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-base sm:text-xl md:text-2xl text-[#94a3b8] font-medium mb-4 sm:mb-8 max-w-2xl leading-relaxed"
        >
          Frontend Developer building modern, scalable web experiences that solve real problems.
        </motion.p>

        {/* Tech Stack */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-xs sm:text-sm text-[#a78bfa] font-medium mb-6 sm:mb-8 tracking-widest uppercase leading-relaxed"
        >
          React · TypeScript · Tailwind CSS · Next.js
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-semibold rounded-xl cursor-pointer transition-colors duration-300 shadow-lg shadow-[#8b5cf6]/40 min-h-[48px] w-full sm:w-auto"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white font-semibold rounded-xl cursor-pointer transition-colors duration-300 min-h-[48px] w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center gap-6 sm:gap-8"
        >
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-xl sm:text-2xl"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator — absolutely positioned, hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-[#94a3b8] tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#8b5cf6] to-transparent"
        />
      </motion.div>

    </section>
  )
}

export default HeroSection