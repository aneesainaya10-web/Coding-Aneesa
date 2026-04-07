import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Rocket, ChevronDown, Sparkles, GraduationCap, Target } from 'lucide-react';

const STATS = [
  { icon: Coffee, value: '1732+', label: 'Cup of taro latte' },
  { icon: Rocket, value: '2437+', label: 'Unstoppable homework' },
];

const ACCORDION_DATA = [
  {
    id: 'intro',
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Introduction",
    content:
      "My name is Aneesa Inaya, I was born on July 3, 2010. I am a student at MAN 1 Banda Aceh who loves exploring new things and creating meaningful ideas for my future."
  },
  {
    id: 'vision',
    icon: <Target className="w-5 h-5" />,
    title: "Vision & Goal",
    content:
      "To become a disciplined and competent individual who successfully enters Politeknik Keuangan Negara STAN and contributes professionally to Indonesia’s financial sector."
  }
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-pink-100 to-rose-200">

      {/* 🌸 Blur Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-pink-300/40 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[350px] h-[350px] bg-rose-300/40 rounded-full blur-[100px] bottom-[-100px] right-[-100px]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2 text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            <Sparkles size={16} />
            Discover More About Me ✨
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            About Me ♡
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* FOTO */}
          <div className="space-y-8">
            <div className="relative group">

              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl blur-2xl opacity-80 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200"></div>

              <div className="relative p-[3px] rounded-2xl bg-white/40 backdrop-blur-xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-white/30 backdrop-blur">
                  <img
                    src="/nafis.jpg"
                    alt="profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl text-center bg-white/40 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-lg transition"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-pink-500" />
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg">
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Get to know me better ♡
            </h3>

            <p className="text-lg text-gray-600">
              Hello, I am <strong>Aneesa Inaya</strong>, a 10th grade student 💫
            </p>

            {/* ACCORDION */}
            <div className="space-y-3">
              {ACCORDION_DATA.map((item, idx) => (
                <div key={item.id} className="rounded-xl overflow-hidden">

                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-4 bg-white/50 backdrop-blur-lg border border-white/40 text-gray-800 hover:bg-white/70 transition"
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
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 text-gray-600 bg-white/30 backdrop-blur">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}