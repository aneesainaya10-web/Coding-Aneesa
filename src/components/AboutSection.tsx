import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🖱️ mouse movement
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });

      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }

      setTrail((prev) => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // 🌌 background canvas
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
        size: Math.random() * 1.2,
        speed: Math.random() * 0.25
      });
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      gradient.addColorStop(0, '#1a0505');
      gradient.addColorStop(0.5, '#4c0d0d');
      gradient.addColorStop(1, '#2b0a0a');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.fillStyle = 'rgba(255,255,255,0.25)';
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

      {/* 🌌 Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-20" />

      {/* ✨ Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-[#7f1d1d]/30 rounded-full blur-[140px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-[#3b0a0a]/30 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* 🖱️ cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-80 h-80 rounded-full 
        bg-gradient-to-br from-[#7f1d1d]/20 via-[#4c0d0d]/20 to-[#1a0505]/20
        blur-3xl -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* trail */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-red-300/60 blur-[1px] z-20"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      <ThreeScene />

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* 🖼️ IMAGE with parallax */}
          <motion.div
            animate={{ x: mouse.x * -1, y: mouse.y * -1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              <div className="absolute -inset-3 rounded-full blur-2xl opacity-70 
              bg-gradient-to-r from-[#7f1d1d] via-[#4c0d0d] to-[#1a0505]" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl">
                <img
                  src="/ade.jpg"
                  alt="Aneesa"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border border-white/10"
                />
              </div>
            </div>
          </motion.div>

          {/* ✨ TEXT */}
          <motion.div
            animate={{ x: mouse.x, y: mouse.y }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-center md:text-left"
          >

            <span className="inline-block px-5 py-2 rounded-full 
            bg-gradient-to-r from-[#7f1d1d] to-[#4c0d0d]
            text-white text-xs font-bold mb-6 tracking-widest shadow-lg">
              ✨ LUXURY MODE ✨
            </span>

            {/* 💎 SHIMMER TEXT */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-red-100">
              Hello there
              <br />
              <span className="relative inline-block text-transparent bg-clip-text 
              bg-gradient-to-r from-[#fca5a5] via-[#7f1d1d] to-[#fcd34d] 
              animate-[shimmer_3s_linear_infinite]">
                Aneesa Inaya ✨
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-red-200">
              💖 Every small project holds a step toward 
              <span className="text-amber-400 font-semibold"> mastery & elegance </span> 
              in the digital world.
            </p>

            <div className="flex gap-4 mt-10 justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#7f1d1d] to-[#4c0d0d] shadow-xl 
                hover:scale-105 transition"
              >
                🚀 Explore
              </button>

              <a
                href="#"
                className="px-8 py-3 rounded-full font-semibold text-red-200 
                bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition"
              >
                💌 Contact
              </a>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ⬇️ Scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full 
        bg-white/10 backdrop-blur-xl border border-white/10 shadow-md z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-red-300 w-6 h-6" />
      </motion.button>
    </section>
  );
}