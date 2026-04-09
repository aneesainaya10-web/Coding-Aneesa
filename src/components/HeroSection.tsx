import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const [trail, setTrail] = useState([]);

  // CURSOR EFFECT (wine elegant)
  useEffect(() => {
    const move = (e) => {
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
    const ctx = canvas.getContext('2d');

    let stars = [];
    let animationId;

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

      {/* SOFT GLOW BACKGROUND */}
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

          {/* IMAGE (BESAR & ROUND CLASSY) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">

              {/* GLOW FRAME */}
              <div className="absolute -inset-6 rounded-full blur-3xl opacity-70 bg-gradient-to-r from-[#7a1f1f] via-[#4a1414] to-[#2a0d0d]" />

              {/* BORDER FRAME */}
              <div className="relative p-[6px] rounded-full bg-gradient-to-r from-[#7a1f1f] via-[#4a1414] to-[#2a0d0d] shadow-2xl">

                <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10">
                  <img
                    src="/ade.jpg"
                    alt="Aneesa"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left">

            <span className="inline-block px-5 py-2 rounded-full 
            bg-gradient-to-r from-[#7a1f1f] to-[#4a1414]
            text-white text-xs font-semibold mb-6 tracking-wider shadow-lg">
              ✨ WELCOME ✨
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[#2a0d0d]">Hello there</span>
              <br />
              <span className="bg-gradient-to-r from-[#7a1f1f] via-[#a52a2a] to-[#4a1414] bg-clip-text text-transparent">
                Aneesa Inaya ✨
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#4a1414]">
              🍷 Every small project is a step toward
              <span className="text-[#7a1f1f] font-semibold"> creativity, elegance, </span>
              and building a meaningful digital journey.
            </p>

            <div className="flex gap-4 mt-10 justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#7a1f1f] to-[#4a1414] shadow-lg hover:scale-105 transition"
              >
                🚀 Explore
              </button>

              <a
                href="#"
                className="px-8 py-3 rounded-full font-semibold text-[#7a1f1f] 
                bg-white/20 backdrop-blur-xl border border-white/20 hover:bg-white/30 transition"
              >
                💌 Contact
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full 
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-md z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-[#7a1f1f] w-6 h-6" />
      </motion.button>
    </section>
  );
}