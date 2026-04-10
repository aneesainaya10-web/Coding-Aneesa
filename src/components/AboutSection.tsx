import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

type Item = {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
};

const ACCORDION_DATA: Item[] = [
  {
    id: 'intro',
    icon: <span>🎓</span>,
    title: "𝑰𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏",
    content:
      "My name is Aneesa Inaya, I was born on July 3, 2010. I am a student at MAN 1 Banda Aceh who loves exploring new things and creating meaningful ideas for my future."
  },
  {
    id: 'vision',
    icon: <span>🎯</span>,
    title: "𝑽𝒊𝒔𝒊𝒐𝒏 & 𝑮𝒐𝒂𝒍",
    content:
      "To become a disciplined and competent individual who successfully enters Politeknik Keuangan Negara STAN and contributes professionally to Indonesia’s financial sector."
  }
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden 
    bg-gradient-to-br from-white via-[#fff8f8] to-[#fff3f3] text-[#2a0d0d]">

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-[#7a1f1f]/10 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[350px] h-[350px] bg-[#4a1414]/10 rounded-full blur-[100px] bottom-[-100px] right-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2 text-[#7a1f1f] font-semibold tracking-widest uppercase text-sm mb-3">
            <Sparkles size={16} />
            Discover More About Me ✨
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About Me ♡
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#7a1f1f] to-[#4a1414] mx-auto rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto space-y-4">

          {ACCORDION_DATA.map((item, idx) => (
            <div key={item.id} className="rounded-xl overflow-hidden shadow-md border border-[#7a1f1f]/20">

              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 
                bg-[#fff5f5] hover:bg-[#ffecec] transition"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="font-semibold">{item.title}</span>
                </div>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    expanded === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-4 bg-white text-[#5a2a2a]">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}