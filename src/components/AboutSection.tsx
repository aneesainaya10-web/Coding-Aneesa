import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const ABOUT_DATA = [
  {
    id: "intro",
    icon: "🎓",
    title: "𝑰𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏",
    content:
      "𝐌𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬 𝐀𝐧𝐞𝐞𝐬𝐚 𝐈𝐧𝐚𝐲𝐚, 𝐈 𝐰𝐚𝐬 𝐛𝐨𝐫𝐧 𝐨𝐧 𝐉𝐮𝐥𝐲 3, 2010. 𝐈 𝐚𝐦 𝐚 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐚𝐭 𝐌𝐀𝐍 1 𝐁𝐚𝐧𝐝𝐚 𝐀𝐜𝐞𝐡 𝐰𝐡𝐨 𝐥𝐨𝐯𝐞𝐬 𝐞𝐱𝐩𝐥𝐨𝐫𝐢𝐧𝐠 𝐧𝐞𝐰 𝐭𝐡𝐢𝐧𝐠𝐬 𝐚𝐧𝐝 𝐜𝐫𝐞𝐚𝐭𝐢𝐧𝐠 𝐦𝐞𝐚𝐧𝐢𝐧𝐠𝐟𝐮𝐥 𝐢𝐝𝐞𝐚𝐬 𝐟𝐨𝐫 𝐦𝐲 𝐟𝐮𝐭𝐮𝐫𝐞."
  },
  {
    id: "vision",
    icon: "🎯",
    title: "𝑽𝒊𝒔𝒊𝒐𝒏 & 𝑮𝒐𝒂𝒍",
    content:
      "𝐓𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐚 𝐝𝐢𝐬𝐜𝐢𝐩𝐥𝐢𝐧𝐞𝐝 𝐚𝐧𝐝 𝐜𝐨𝐦𝐩𝐞𝐭𝐞𝐧𝐭 𝐢𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥 𝐰𝐡𝐨 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐞𝐧𝐭𝐞𝐫𝐬 𝐏𝐨𝐥𝐢𝐭𝐞𝐤𝐧𝐢𝐤 𝐊𝐞𝐮𝐚𝐧𝐠𝐚𝐧 𝐍𝐞𝐠𝐚𝐫𝐚 𝐒𝐓𝐀𝐍 𝐚𝐧𝐝 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐞𝐬 𝐩𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥𝐥𝐲 𝐭𝐨 𝐈𝐧𝐝𝐨𝐧𝐞𝐬𝐢𝐚’𝐬 𝐟𝐢𝐧𝐚𝐧𝐜𝐢𝐚𝐥 𝐬𝐞𝐜𝐭𝐨𝐫."
  }
];

export default function AboutSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* BACKGROUND (SAMA DENGAN SKILLS) */}
      <div className="absolute inset-0 -z-20 
      bg-gradient-to-b from-[#140303] via-[#2a0a0a] to-[#140303]" />

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] 
      bg-[#7a1f1f]/25 rounded-full blur-[160px] 
      top-[-150px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] 
      bg-[#4a1414]/30 rounded-full blur-[140px] 
      bottom-[-120px] right-[-80px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#4a1414] to-[#2a0a0a]
          text-[#e8b4b8] text-xs font-bold tracking-[0.2em] mb-6 uppercase shadow-lg">
            <Sparkles size={14} />
            Discover more about Me
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#f8d7da]">
            𝑨𝒃𝒐𝒖𝒕{" "}
            <span className="bg-gradient-to-r from-[#b76e79] via-[#e8b4b8] to-[#f5c6c9] bg-clip-text text-transparent">
              𝑴𝒆
            </span>
          </h2>

          <div className="w-24 h-1 mt-6 mx-auto rounded-full 
          bg-gradient-to-r from-[#7a1f1f] to-[#f5c6c9]" />
        </motion.div>

        {/* ACCORDION */}
        <div className="max-w-3xl mx-auto space-y-6">

          {ABOUT_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden 
              bg-gradient-to-b from-[#2a0a0a]/80 to-[#140303]/90
              backdrop-blur-xl 
              border border-[#7a1f1f]/30
              shadow-[0_10px_50px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_50px_rgba(122,31,31,0.5)]
              transition-all duration-500"
            >

              {/* BUTTON */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5"
              >
                <div className="flex items-center gap-3 text-[#f5c6c9]">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.title}</span>
                </div>

                <ChevronDown
                  className={`text-[#e8b4b8] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-5 pb-5 text-[#e8b4b8] leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}