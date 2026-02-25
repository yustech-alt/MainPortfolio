import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/yusufbalogun",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/yusufbalogun",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://twitter.com/yusufbalogun",
    label: "Twitter",
    icon: <FaTwitter />,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 md:px-12"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#6d28d9]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-4 z-10">
        {/* Availability Badge */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 bg-[#13131a] border border-[#8b5cf6]/30 rounded-full px-5 py-2.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-[#94a3b8]">
            Available for freelance &amp; internship
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]">
            Yusuf Balogun
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl md:text-2xl text-[#94a3b8] font-medium max-w-2xl leading-relaxed mb-4"
        >
          Frontend Developer building modern, scalable web experiences that
          solve real problems.
        </motion.p>

        {/* Tech Stack */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-sm text-[#a78bfa] font-medium tracking-widest uppercase mb-8"
        >
          React · TypeScript · Tailwind CSS · Next.js
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#8b5cf6]/50 hover:scale-105 min-h-[48px]"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 min-h-[48px]"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-2xl"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-[#94a3b8] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#8b5cf6] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
