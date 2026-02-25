import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiVite,
  SiVercel,
} from "react-icons/si";

// FIX: Store icon component references instead of JSX elements in data.
// This avoids shared JSX instance issues when the same icon is rendered
// in multiple places (grid + badge row), and keeps data serialisable.
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", Icon: FaReact, color: "text-[#61dafb]", level: 90 },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "text-[#3178c6]",
        level: 80,
      },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "text-[#f7df1e]",
        level: 90,
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "text-[#38bdf8]",
        level: 90,
      },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white", level: 75 },
      { name: "Redux", Icon: SiRedux, color: "text-[#764abc]", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "text-[#f05032]", level: 85 },
      { name: "GitHub", Icon: FaGithub, color: "text-white", level: 85 },
      { name: "Node.js", Icon: FaNodeJs, color: "text-[#68a063]", level: 65 },
      {
        name: "Firebase",
        Icon: SiFirebase,
        color: "text-[#ffca28]",
        level: 70,
      },
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47a248]", level: 65 },
      { name: "Vite", Icon: SiVite, color: "text-[#646cff]", level: 80 },
      { name: "Vercel", Icon: SiVercel, color: "text-white", level: 80 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", Icon: FaFigma, color: "text-[#f24e1e]", level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 md:py-32 px-8 md:px-12 relative flex flex-col items-center"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#6d28d9]/10 rounded-full blur-3xl pointer-events-none" />

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
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto rounded-full" />
          {/* FIX: Escaped apostrophe with &apos; */}
          <p className="text-[#94a3b8] mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            Technologies and tools I&apos;ve been working with and continuously
            improving.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-10 w-full">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="rounded-3xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6]/30 to-[#6d28d9]/30"
            >
              <div className="bg-[#0f0f17] rounded-3xl p-8 md:p-10">
                {/* Category Label */}
                <h3 className="text-sm font-semibold text-[#8b5cf6] tracking-widest uppercase mb-10">
                  {cat.category}
                </h3>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.div
                      // FIX: Namespaced key to avoid collisions across categories
                      key={`${cat.category}-${skill.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="flex flex-col gap-4"
                    >
                      {/* Skill Name Row */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* FIX: Render icon from component reference */}
                          <span className="text-xl">
                            <skill.Icon className={skill.color} />
                          </span>
                          <span className="text-sm font-medium text-[#f1f5f9]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-[#94a3b8] font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-5 w-full max-w-4xl"
        >
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <div
                // FIX: Namespaced key to prevent collisions across categories
                key={`badge-${cat.category}-${skill.name}`}
                className="flex items-center gap-3 bg-[#0f0f17] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/60 px-5 py-3 rounded-full transition-colors duration-300"
              >
                {/* FIX: Render icon from component reference */}
                <span className="text-base">
                  <skill.Icon className={skill.color} />
                </span>
                <span className="text-xs text-[#94a3b8] font-medium">
                  {skill.name}
                </span>
              </div>
            )),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
