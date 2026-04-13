import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

type Trail = {
  x: number;
  y: number;
  id: number;
};

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [trail, setTrail] = useState<Trail[]>([]);

  // CURSOR EFFECT
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }

      setTrail((prev) => [
        ...prev.slice(-15),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // BACKGROUND CANVAS
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    let stars: any[] = [];
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.25
      });
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#2a0d0d');
      gradient.addColorStop(0.5, '#4a1414');
      gradient.addColorStop(1, '#7a1f1f');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-20" />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#7a1f1f]/30 rounded-full blur-[150px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#4a1414]/30 rounded-full blur-[120px] bottom-[-150px] right-[-150px]" />

      {/* CURSOR GLOW */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-80 h-80 rounded-full 
        bg-gradient-to-br from-[#7a1f1f]/20 via-[#4a1414]/20 to-[#2a0d0d]/20
        blur-3xl -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* CURSOR TRAIL */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          className="pointer-events-none fixed w-2 h-2 rounded-full bg-[#7a1f1f]/80 blur-[2px] z-20"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      <ThreeScene />

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO BULAT - PERBAIKAN DI SINI */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
              
              {/* GLOW EFFECT AROUND PHOTO */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-60 
              bg-gradient-to-r from-[#7a1f1f] via-[#4a1414] to-[#2a0d0d] scale-110" />

              {/* GRADIENT BORDER */}
              <div className="relative w-full h-full p-[5px] rounded-full 
              bg-gradient-to-tr from-[#7a1f1f] via-[#a52a2a] to-[#2a0d0d] shadow-2xl">
                
                {/* IMAGE CONTAINER */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a0505] flex items-center justify-center border-2 border-white/5">
                  <img
                    src="/public/Aneesa.jpg"
                    alt="Aneesa"
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-700 ease-in-out"
                    /* TIPS: 
                       - Gunakan object-cover agar gambar memenuhi lingkaran.
                       - Gunakan object-top jika kepala terpotong. 
                       - Gunakan object-center jika ingin pas di tengah.
                    */
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2 rounded-full 
              bg-gradient-to-r from-[#7a1f1f] to-[#4a1414]
              text-white text-xs font-bold mb-6 tracking-[0.2em] shadow-lg uppercase">
                ✨ Welcome to my world ✨
              </span>

              <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                <span className="opacity-90">Aneesa's</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff4d4d] via-[#a52a2a] to-[#7a1f1f] bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
                🍷 Every small project is a step toward
                <span className="text-[#ff4d4d] font-semibold"> creativity, elegance, </span>
                and building a meaningful digital journey.
              </p>

              <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                <button
                  onClick={scrollToAbout}
                  className="px-10 py-4 rounded-full text-white font-bold 
                  bg-[#7a1f1f] hover:bg-[#a52a2a] shadow-[0_0_20px_rgba(122,31,31,0.4)] 
                  transition-all active:scale-95"
                >
                  🚀 Explore Work
                </button>

                <a
                  href="#"
                  className="px-10 py-4 rounded-full font-bold text-white 
                  bg-white/5 backdrop-blur-md border border-white/10 
                  hover:bg-white/10 transition-all"
                >
                  💌 Let's Talk
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* SCROLL ICON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full 
        bg-white/5 backdrop-blur-md border border-white/10 shadow-md z-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <ArrowDown className="text-white/60 w-6 h-6" />
      </motion.button>
    </section>
  );
}