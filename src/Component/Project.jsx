import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project One",
    desc: "A full-featured web application built with React and TypeScript. Features include authentication, real-time updates, and a clean dashboard UI.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    desc: "A responsive e-commerce platform with product filtering, cart functionality, and seamless checkout experience.",
    tags: ["React", "Redux", "Node.js"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    desc: "A weather dashboard app that fetches real-time data from an API and displays beautiful data visualizations.",
    tags: ["React", "REST API", "Chart.js"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Project Four",
    desc: "A task management app with drag-and-drop functionality, local storage persistence, and priority tagging.",
    tags: ["React", "Tailwind CSS", "DnD"],
    github: "https://github.com/yourusername/project-four",
    live: "https://project-four.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Project Five",
    desc: "A personal blog platform with markdown support, dark mode, and a clean reading experience.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-five",
    live: "https://project-five.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Ominifood",
    desc: "A portfolio template built for developers with smooth animations and a fully responsive layout.",
    tags: ["HTML", "CSS", "Media Queries"],
    github: "https://github.com/yustech-alt/Omnifood",
    live: "https://omnifood-yusufsite.netlify.app/",
    featured: false,
  },
];

// FIX: Separated Framer Motion animation props from Tailwind hover styles
// by wrapping the gradient border in a plain div, avoiding transition conflicts.
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6]/30 to-[#6d28d9]/30 hover:from-[#8b5cf6] hover:to-[#6d28d9] duration-300 group"
  >
    <div className="bg-[#0f0f17] rounded-2xl p-8 h-full flex flex-col gap-5">
      <div className="flex items-start justify-between gap-5">
        {/* FIX: Removed redundant text-sm (14px) — text-[15px] takes precedence */}
        <h3 className="text-[15px] font-bold text-white">{project.title}</h3>
        <div className="flex gap-3 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-lg"
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="text-[#94a3b8] hover:text-[#8b5cf6] transition-colors duration-200 text-lg"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      {/* FIX: Removed redundant text-sm — kept text-[15px] only */}
      <p className="text-[15px] text-[#94a3b8] leading-relaxed flex-1">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-4 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 md:py-32 px-8 md:px-12 relative flex flex-col items-center"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 w-full"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto rounded-full" />
          <p className="text-[#94a3b8] mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            Here are some of the projects I&apos;ve worked on. Each one was an
            opportunity to learn something new and solve real problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-8 mb-14 w-full">
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
                {/* Number Badge — FIX: Safe number formatting, works beyond 9 */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-xl font-extrabold text-white shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-[#8b5cf6]/20 text-[#8b5cf6] px-4 py-1.5 rounded-full font-semibold border border-[#8b5cf6]/30">
                      ⭐ Featured
                    </span>
                  </div>
                  {/* FIX: Removed redundant text-sm — kept text-[15px] only */}
                  <p className="text-[15px] text-[#94a3b8] leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="w-11 h-11 rounded-xl bg-[#8b5cf6]/10 hover:bg-[#8b5cf6] flex items-center justify-center text-[#94a3b8] hover:text-white transition-all duration-300 text-lg"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="w-11 h-11 rounded-xl bg-[#8b5cf6]/10 hover:bg-[#8b5cf6] flex items-center justify-center text-[#94a3b8] hover:text-white transition-all duration-300 text-lg"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 w-full">
          {/* FIX: Using project.id as key instead of project.title */}
          {others.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white font-semibold rounded-full transition-all duration-300 min-h-[48px]"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
