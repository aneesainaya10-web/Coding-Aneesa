import { motion } from "framer-motion";

const skills = {
  ipa: [
    { name: "Mathematics", level: 98 },
    { name: "Biology", level: 97 },
  ],
  ips: [
    { name: "History", level: 98 },
    { name: "Sociology", level: 96 },
  ],
  olahraga: [
    { name: "Running", level: 92 },
    { name: "Fitness", level: 90 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-[#f8d7da]">{name}</span>
        <span className="text-[#cfa3a9]">{level}%</span>
      </div>

      <div className="h-2 bg-[#2a0a0a] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full 
          bg-gradient-to-r from-[#7a1f1f] via-[#b76e79] to-[#f5c6c9]
          shadow-[0_0_12px_rgba(183,110,121,0.5)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* BACKGROUND (deep wine) */}
      <div className="absolute inset-0 -z-20 
      bg-gradient-to-b from-[#140303] via-[#2a0a0a] to-[#140303]" />

      {/* GLOW (wine fog effect) */}
      <div className="absolute w-[500px] h-[500px] bg-[#7a1f1f]/25 rounded-full blur-[160px] top-[-150px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-[#4a1414]/30 rounded-full blur-[140px] bottom-[-120px] right-[-80px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#4a1414] to-[#2a0a0a]
          text-[#e8b4b8] text-xs font-bold tracking-[0.2em] mb-6 uppercase shadow-lg">
            ✨ 𝐌𝐲 𝐒𝐤𝐢𝐥𝐥𝐬 ✨
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#f8d7da]">
            𝑨𝒄𝒂𝒅𝒆𝒎𝒊𝒄{" "}
            <span className="bg-gradient-to-r from-[#b76e79] via-[#e8b4b8] to-[#f5c6c9] bg-clip-text text-transparent">
               𝑺𝒌𝒊𝒍𝒍𝒔
            </span>
          </h2>

          <div className="w-24 h-1 mt-6 mx-auto rounded-full 
          bg-gradient-to-r from-[#7a1f1f] to-[#f5c6c9]" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { title: "IPA", icon: "⚗️", data: skills.ipa },
            { title: "IPS", icon: "💰", data: skills.ips },
            { title: "Olahraga", icon: "🏃‍♂️", data: skills.olahraga },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-7 rounded-2xl 
              bg-gradient-to-b from-[#2a0a0a]/80 to-[#140303]/90
              backdrop-blur-xl 
              border border-[#7a1f1f]/30
              shadow-[0_10px_50px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_50px_rgba(122,31,31,0.5)]
              transition-all duration-500"
            >
              {/* HEADER CARD */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl 
                bg-gradient-to-br from-[#7a1f1f]/40 to-[#2a0a0a]/40">
                  <span className="text-2xl">{section.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-[#f5c6c9]">
                  {section.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="space-y-5">
                {section.data.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}