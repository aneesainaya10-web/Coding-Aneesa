import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pink-100 to-rose-200">

      {/* 🌸 Blur Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300/40 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-rose-300/40 rounded-full blur-[100px] bottom-[-100px] right-[-100px]" />

      {/* subtle overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-xl text-pink-500 text-sm font-medium mb-6 shadow-md border border-white/40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✨ Welcome to my portfolio
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 leading-tight"
          >
            Hello there
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 bg-clip-text text-transparent drop-shadow-md">
              with Aneesa here ✨
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I created this space to share who I am, what I build, and what I love.
            Take your time to explore and discover more about me 💫
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg backdrop-blur-lg hover:scale-105 transition"
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ✨ View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-white/40 text-pink-500 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition"
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              💌 Contact Me
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-6"
          >
            {[Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="p-3 rounded-full bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-lg hover:bg-white/70 transition"
                whileHover={{ scale: 1.15, y: -3 }}
              >
                <Icon className="h-5 w-5 text-pink-500" />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-lg transition"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-pink-500 animate-bounce" />
      </motion.button>
    </section>
  );
}