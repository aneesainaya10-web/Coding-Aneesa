import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 80 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-[#2a0d0d]">{name}</span>
        <span className="text-sm text-[#7a1f1f] font-semibold">{level}%</span>
      </div>

      {/* BAR */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full 
          bg-gradient-to-r from-[#7a1f1f] via-[#a52a2a] to-[#4a1414] shadow-md"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* 🌌 BACKGROUND (SAMA DENGAN HERO) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#2a0d0d] via-[#4a1414] to-[#7a1f1f]" />

      {/* 💫 GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#7a1f1f]/30 rounded-full blur-[140px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#4a1414]/30 rounded-full blur-[120px] bottom-[-150px] right-[-150px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#a52a2a] font-semibold mb-2 block tracking-wide">
            ✨ My Skills ✨
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Skills & Teknologi
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#7a1f1f] to-[#a52a2a] mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl 
            bg-white/10 backdrop-blur-xl border border-white/10 
            shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#7a1f1f]/20">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>

            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl 
            bg-white/10 backdrop-blur-xl border border-white/10 
            shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#4a1414]/20">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>

            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl 
            bg-white/10 backdrop-blur-xl border border-white/10 
            shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#7a1f1f]/20">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Tools & Lainnya
              </h3>
            </div>

            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}