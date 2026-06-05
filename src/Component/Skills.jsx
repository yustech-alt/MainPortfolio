import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiVite,
  SiVercel,
  SiSupabase,
  SiJira,
  SiTrello,
  SiNotion,
  SiMiro,
  SiSlack,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Development",
    description: "Building fast, accessible, production-grade interfaces.",
    skills: [
      { name: "React", Icon: FaReact, color: "text-[#61dafb]", level: 92 },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178c6]", level: 85 },
      { name: "JavaScript", Icon: SiJavascript, color: "text-[#f7df1e]", level: 92 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#38bdf8]", level: 92 },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white", level: 78 },
      { name: "Redux", Icon: SiRedux, color: "text-[#764abc]", level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    description: "From version control to deployment and backend services.",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "text-[#f05032]", level: 88 },
      { name: "GitHub", Icon: FaGithub, color: "text-white", level: 88 },
      { name: "Node.js", Icon: FaNodeJs, color: "text-[#68a063]", level: 68 },
      { name: "Supabase", Icon: SiSupabase, color: "text-[#3ecf8e]", level: 72 },
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47a248]", level: 68 },
      { name: "Vite", Icon: SiVite, color: "text-[#646cff]", level: 82 },
      { name: "Vercel", Icon: SiVercel, color: "text-white", level: 82 },
    ],
  },
  {
    category: "Product Management",
    description: "Defining problems, aligning teams, and shipping outcomes that matter.",
    skills: [
      { name: "Jira", Icon: SiJira, color: "text-[#0052cc]", level: 80 },
      { name: "Trello", Icon: SiTrello, color: "text-[#0079bf]", level: 85 },
      { name: "Notion", Icon: SiNotion, color: "text-white", level: 88 },
      { name: "Miro", Icon: SiMiro, color: "text-[#ffdd00]", level: 78 },
      { name: "Slack", Icon: SiSlack, color: "text-[#4a154b]", level: 85 },
      { name: "Figma", Icon: FaFigma, color: "text-[#f24e1e]", level: 75 },
    ],
  },
];

const pmCompetencies = [
  { label: "Product Discovery", desc: "User interviews, problem framing, opportunity sizing" },
  { label: "Roadmap Planning", desc: "Prioritisation frameworks — RICE, MoSCoW, impact vs effort" },
  { label: "Agile & Scrum", desc: "Sprint planning, backlog grooming, retrospectives" },
  { label: "Stakeholder Alignment", desc: "Cross-functional communication and buy-in" },
  { label: "Metrics & KPIs", desc: "Defining success metrics, tracking outcomes over output" },
  { label: "User Research", desc: "Usability testing, synthesis, persona development" },
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
          <span className="inline-block text-[#8b5cf6] text-xs font-bold tracking-[0.25em] uppercase bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full px-4 py-1.5 mb-6">
            What I Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto rounded-full" />
          <p className="text-[#94a3b8] mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            I build products end-to-end — from defining the problem to shipping
            the interface. Here are the skills and tools I use across both disciplines.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-8 w-full">
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-10">
                  <h3 className="text-sm font-bold text-[#8b5cf6] tracking-widest uppercase">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#475569]">{cat.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${cat.category}-${skill.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
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
                      <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.05, ease: "easeOut" }}
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

        {/* PM Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 w-full rounded-3xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6]/20 to-[#6d28d9]/20"
        >
          <div className="bg-[#0f0f17] rounded-3xl p-8 md:p-10">
            <h3 className="text-sm font-bold text-[#8b5cf6] tracking-widest uppercase mb-2">
              Product Management Competencies
            </h3>
            <p className="text-xs text-[#475569] mb-10">
              Core PM skills I apply when scoping, planning, and delivering products.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pmCompetencies.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-[#13131a] border border-white/5 rounded-2xl p-5 hover:border-[#8b5cf6]/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6] mb-3" />
                  <p className="text-sm font-semibold text-[#e2e8f0] mb-1.5">{item.label}</p>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-4 w-full max-w-4xl"
        >
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <div
                key={`badge-${cat.category}-${skill.name}`}
                className="flex items-center gap-2.5 bg-[#0f0f17] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/60 px-4 py-2.5 rounded-full transition-colors duration-300"
              >
                <span className="text-base">
                  <skill.Icon className={skill.color} />
                </span>
                <span className="text-xs text-[#94a3b8] font-medium">{skill.name}</span>
              </div>
            ))
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;