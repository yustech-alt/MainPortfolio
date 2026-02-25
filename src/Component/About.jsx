import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Months Experience', value: '18+' },
  { label: 'Cups of Coffee', value: '∞' },
]

const cards = [
  {
    Icon: FaCode,
    title: 'Clean Code',
    desc: 'I write readable, maintainable, and scalable code following best practices.',
  },
  {
    Icon: FaLaptopCode,
    title: 'Responsive Design',
    desc: 'Every project I build works flawlessly across all devices and screen sizes.',
  },
  {
    Icon: FaRocket,
    title: 'Performance First',
    desc: 'I optimize for speed, accessibility, and the best possible user experience.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-24 px-8 md:px-12 min-h-screen relative flex flex-col items-center"
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#6d28d9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <motion.div {...fadeUp()} className="text-center mb-20 w-full">
          <span className="inline-block text-[#8b5cf6] text-xs font-bold tracking-[0.25em] uppercase bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full px-4 py-1.5 mb-6">
            Get To Know Me
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#f1f5f9] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">

          {/* Left — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-fit pb-10">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] blur-xl opacity-30 scale-105" />
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] p-[2px]">
                <div className="w-full h-full rounded-[22px] bg-[#0e0e18] overflow-hidden">
                  <img
                    src="/yusuf.png"
                    alt="Yusuf Balogun"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-2 -right-4 bg-[#13131a] border border-[#8b5cf6]/30 rounded-2xl px-4 py-3 shadow-xl shadow-black/50"
              >
                <p className="text-[11px] text-[#64748b] mb-0.5">Frontend Developer</p>
                <p className="text-sm font-bold text-[#8b5cf6]">Available for Work</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 pt-4 md:pt-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#e2e8f0] leading-snug">
              A passionate Frontend Developer <br className="hidden md:block" />
              based in Nigeria 🌍
            </h3>
            <p className="text-[#94a3b8] leading-[1.8] text-sm md:text-[15px]">
              I'm Yusuf Balogun, a frontend developer who loves turning ideas into
              beautiful, functional web experiences. I specialize in building modern
              web applications using React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-[#94a3b8] leading-[1.8] text-sm md:text-[15px]">
              When I'm not coding, I'm learning new technologies, contributing to
              open source, or exploring how design and development intersect to create
              amazing user experiences. I'm currently open to freelance projects and
              internship opportunities.
            </p>
            <div className="pt-2">
              <a
                href="/Yusuf_Resume.pdf"
                download="Yusuf_Balogun_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#8b5cf6]/25 hover:shadow-[#8b5cf6]/40 hover:-translate-y-0.5"
              >
                Download Resume <span>↓</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeUp()}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(i * 0.08)}
              className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center hover:border-[#8b5cf6]/40 transition-all duration-300"
            >
              <p className="text-3xl font-black text-[#8b5cf6] mb-1 tracking-tight">{stat.value}</p>
              <p className="text-[11px] text-[#94a3b8] font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i * 0.1)}
              className="group relative bg-[#0e0e18] border border-white/5 rounded-2xl p-7 overflow-hidden hover:border-[#8b5cf6]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#8b5cf6]/0 group-hover:bg-[#8b5cf6]/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-11 h-11 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6]/20 transition-colors duration-300">
                  <card.Icon className="text-xl text-[#8b5cf6]" />
                </div>
                <h4 className="text-base font-bold text-[#e2e8f0] mb-2.5">{card.title}</h4>
                <p className="text-[13px] text-[#94a3b8] leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About