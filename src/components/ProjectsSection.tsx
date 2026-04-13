import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "🛒",
    color: "from-[#7a1f1f]/30 to-[#2a0a0a]/40",
    github: "#",
    demo: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    image: "📚",
    color: "from-[#b76e79]/20 to-[#7a1f1f]/30",
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Dashboard analytics untuk social media dengan real-time data visualization dan reporting.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "📊",
    color: "from-[#4a1414]/30 to-[#7a1f1f]/20",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "🤖",
    color: "from-[#7a1f1f]/30 to-[#140303]/40",
    github: "#",
    demo: "#",
  },
  {
    title: "Video Editing Tutorial",
    description:
      "Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.",
    tags: ["Premiere Pro", "After Effects", "YouTube"],
    image: "🎬",
    color: "from-[#b76e79]/30 to-[#4a1414]/30",
    youtube: "#",
  },
  {
    title: "Coding Tips & Tricks",
    description:
      "Konten tips programming dan best practices untuk developer Indonesia.",
    tags: ["Instagram", "TikTok", "YouTube Shorts"],
    image: "💡",
    color: "from-[#7a1f1f]/20 to-[#b76e79]/20",
    youtube: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 
      bg-gradient-to-b from-[#140303] via-[#2a0a0a] to-[#140303]" />

      {/* GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-[#7a1f1f]/25 rounded-full blur-[160px] top-[-150px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-[#b76e79]/20 rounded-full blur-[140px] bottom-[-120px] right-[-80px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#4a1414] to-[#2a0a0a]
          text-[#e8b4b8] text-xs font-bold tracking-[0.2em] mb-6 uppercase shadow-lg">
            ✨ Portfolio ✨
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#f8d7da]">
            Projects &{" "}
            <span className="bg-gradient-to-r from-[#b76e79] via-[#e8b4b8] to-[#f5c6c9] bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <div className="w-24 h-1 mt-6 mx-auto rounded-full 
          bg-gradient-to-r from-[#7a1f1f] to-[#f5c6c9]" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl 
              bg-gradient-to-b from-[#2a0a0a]/80 to-[#140303]/90
              backdrop-blur-xl
              border border-[#7a1f1f]/30
              shadow-[0_10px_50px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_50px_rgba(122,31,31,0.5)]
              hover:-translate-y-2 transition-all duration-500">

                {/* IMAGE */}
                <div className={`aspect-video rounded-xl mb-5 flex items-center justify-center 
                bg-gradient-to-br ${project.color}
                border border-[#7a1f1f]/20`}>
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#f5c6c9] group-hover:text-[#e8b4b8] transition">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-[#e8b4b8]/80 mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md 
                      bg-[#7a1f1f]/20 text-[#f5c6c9] border border-[#7a1f1f]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 pt-4 mt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1 px-3 py-2 text-xs rounded-full 
                      bg-[#2a0a0a] text-[#f5c6c9] border border-[#7a1f1f]/40
                      hover:bg-[#7a1f1f]/30 transition"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 px-3 py-2 text-xs rounded-full 
                      bg-gradient-to-r from-[#7a1f1f] to-[#b76e79]
                      text-white hover:scale-105 transition"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}

                  {project.youtube && (
                    <a
                      href={project.youtube}
                      className="flex items-center gap-1 px-3 py-2 text-xs rounded-full 
                      bg-[#b76e79]/20 text-[#f5c6c9] border border-[#b76e79]/30
                      hover:bg-[#b76e79]/30 transition"
                    >
                      <Play size={14} /> Watch
                    </a>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}