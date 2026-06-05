import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project One",
    desc: "A full-featured web application with authentication, real-time updates, and a clean dashboard UI. Built for performance and scalability from the ground up.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
    featured: true,
    type: "engineering",
  },
  {
    id: 2,
    title: "Project Two",
    desc: "A responsive e-commerce platform with product filtering, cart functionality, and a seamless checkout flow optimised for conversion.",
    tags: ["React", "Redux", "Node.js"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.vercel.app",
    featured: true,
    type: "engineering",
  },
  {
    id: 3,
    title: "Project Three",
    desc: "A weather dashboard that fetches real-time API data and renders it with clean data visualisations.",
    tags: ["React", "REST API", "Chart.js"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three.vercel.app",
    featured: false,
    type: "engineering",
  },
  {
    id: 4,
    title: "Nikkis Ecommerce",
    desc: "A modern e-commerce storefront for a fashion brand. Focused on visual clarity, fast load times, and a smooth shopping experience.",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/yustech-alt/Nikkis-Ecommerces-website",
    live: "https://nikkis-ecommerces-website.vercel.app/",
    featured: false,
    type: "engineering",
  },
  {
    id: 5,
    title: "SanctuaryHealth",
    desc: "A web tool helping low-income Nigerians find treatment costs before visiting a clinic — reducing cost-related health avoidance and dangerous self-medication.",
    tags: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/yustech-alt/SanctuaryHealth",
    live: "https://sanctuary-health.vercel.app/",
    featured: false,
    type: "engineering",
  },
  {
    id: 6,
    title: "Omnifood",
    desc: "A fully responsive marketing site for a meal delivery service, built with semantic HTML and CSS — no frameworks.",
    tags: ["HTML", "CSS", "Media Queries"],
    github: "https://github.com/yustech-alt/Omnifood",
    live: "https://omnifood-yusufsite.netlify.app/",
    featured: false,
    type: "engineering",
  },
];

const caseStudies = [
  {
    id: "cs-1",
    title: "SanctuaryHealth — Product Case Study",
    summary: "How I defined the problem, scoped the MVP, and shipped a health-cost tool for underserved Nigerians.",
    problem: "Millions of Nigerians avoid medical care because they don't know what treatment will cost. This leads to late diagnoses and dangerous self-medication. No existing tool addressed this for low-income users in a simple, offline-friendly way.",
    process: [
      "Conducted 12 user interviews with patients and clinic staff across Lagos and Ibadan.",
      "Mapped the current journey — identified the key drop-off point: cost uncertainty before the first visit.",
      "Ran a prioritisation session using the RICE framework to scope the MVP to one core feature: a cost estimator by symptom and clinic type.",
      "Built low-fidelity wireframes in Figma, tested with 5 users, iterated twice before writing a line of code.",
      "Defined success metrics: task completion rate, return visit rate, and average session time.",
    ],
    outcome: "Shipped the MVP in 3 weeks. 80%+ task completion rate in usability tests. Users reported reduced anxiety about visiting clinics.",
    tags: ["User Research", "Figma", "RICE Framework", "MVP Scoping", "Usability Testing"],
    live: "https://sanctuary-health.vercel.app/",
  },
  {
    id: "cs-2",
    title: "E-Commerce Checkout — Conversion Optimisation",
    summary: "Diagnosing a 68% cart abandonment rate and redesigning the checkout flow to fix it.",
    problem: "An e-commerce client had a 68% cart abandonment rate. Analytics showed the drop-off happened at the shipping form — too many fields, no progress indicator, and no guest checkout option.",
    process: [
      "Pulled session recordings from Hotjar to confirm where users were dropping off.",
      "Ran a 5-second test on the existing checkout — users couldn't identify the next step.",
      "Mapped competing checkouts (Shopify, Paystack) to benchmark field count and flow.",
      "Reduced form fields from 14 to 7. Added a 3-step progress bar. Introduced guest checkout.",
      "A/B tested the redesign against the original for 2 weeks.",
    ],
    outcome: "Cart abandonment dropped from 68% to 41%. Checkout completion rate increased by 38%.",
    tags: ["Hotjar", "A/B Testing", "UX Research", "Conversion Optimisation", "Figma"],
    live: "#",
  },
];

const CaseStudyModal = ({ study, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        className="relative bg-[#0f0f17] border border-[#8b5cf6]/20 rounded-3xl p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white transition-colors duration-200"
        >
          <FaTimes />
        </button>

        <p className="text-[#8b5cf6] text-xs font-bold tracking-widest uppercase mb-3">Case Study</p>
        <h3 className="text-xl font-extrabold text-white mb-2 pr-10">{study.title}</h3>
        <p className="text-sm text-[#64748b] mb-8 leading-relaxed">{study.summary}</p>

        <div className="flex flex-col gap-7">
          <div>
            <p className="text-xs font-bold text-[#8b5cf6] tracking-widest uppercase mb-3">The Problem</p>
            <p className="text-sm text-[#94a3b8] leading-[1.8]">{study.problem}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-[#8b5cf6] tracking-widest uppercase mb-3">Process</p>
            <ol className="flex flex-col gap-3">
              {study.process.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#94a3b8] leading-[1.8]">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-xs font-bold text-[#8b5cf6] tracking-widest uppercase mb-3">Outcome</p>
            <p className="text-sm text-[#94a3b8] leading-[1.8]">{study.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {study.tags.map((tag) => (
            <span key={tag} className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {study.live !== "#" && (
          
           <a href={study.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#8b5cf6] hover:text-white transition-colors duration-200"
          >
            <FaExternalLinkAlt className="text-xs" /> View Live Project
          </a>
        )}
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6]/30 to-[#6d28d9]/30 hover:from-[#8b5cf6] hover:to-[#6d28d9] duration-300 group"
  >
    <div className="bg-[#0f0f17] rounded-2xl p-7 h-full flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[15px] font-bold text-white leading-snug">{project.title}</h3>
        <div className="flex gap-3 shrink-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-lg">
            <FaGithub />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live`} className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-lg">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <p className="text-sm text-[#94a3b8] leading-relaxed flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-3 py-1.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeStudy, setActiveStudy] = useState(null);
  const [activeTab, setActiveTab] = useState("engineering");

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen py-24 md:py-32 px-8 md:px-12 relative flex flex-col items-center">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 w-full"
        >
          <span className="inline-block text-[#8b5cf6] text-xs font-bold tracking-[0.25em] uppercase bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full px-4 py-1.5 mb-6">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto rounded-full" />
          <p className="text-[#94a3b8] mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            Selected work across frontend engineering and product management. Each project had a real problem to solve.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center gap-2 bg-[#0f0f17] border border-white/5 rounded-full p-1.5 mb-14">
          {[
            { key: "engineering", label: "Engineering" },
            { key: "product", label: "Product Case Studies" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/30"
                  : "text-[#64748b] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Engineering Tab */}
        {activeTab === "engineering" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-14"
          >
            {/* Featured */}
            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold text-[#475569] tracking-widest uppercase">Featured</p>
              {featured.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl p-[1px] bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] shadow-lg shadow-[#8b5cf6]/10"
                >
                  <div className="bg-[#0f0f17] rounded-3xl p-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-xl font-extrabold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <span className="text-xs bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full font-semibold border border-[#8b5cf6]/30">
                          Featured
                        </span>
                      </div>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-3 py-1.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#8b5cf6]/10 hover:bg-[#8b5cf6] flex items-center justify-center text-[#94a3b8] hover:text-white transition-all duration-300 text-lg">
                        <FaGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#8b5cf6]/10 hover:bg-[#8b5cf6] flex items-center justify-center text-[#94a3b8] hover:text-white transition-all duration-300 text-lg">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects */}
            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold text-[#475569] tracking-widest uppercase">Other Projects</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Case Studies Tab */}
        {activeTab === "product" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full grid sm:grid-cols-2 gap-6"
          >
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-[#0f0f17] border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-[#8b5cf6]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
                <div className="absolute inset-0 bg-[#8b5cf6]/0 group-hover:bg-[#8b5cf6]/3 transition-all duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <span className="text-[10px] font-bold text-[#8b5cf6] tracking-widest uppercase">Product Management</span>
                  <h3 className="text-base font-bold text-white leading-snug">{study.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1">{study.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStudy(study)}
                    className="mt-2 w-fit text-sm font-semibold text-[#8b5cf6] hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    Read Case Study →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          
           <a href="https://github.com/yustech-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white font-semibold rounded-full transition-all duration-300"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>

      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
};

export default Projects;