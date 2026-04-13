import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const glowRef = useRef(null);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setTrail((prev) => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.left = currentX + "px";
        glowRef.current.style.top = currentY + "px";
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">

      {/* BACKGROUND (same as SkillsSection) */}
      <div className="absolute inset-0 -z-20 
      bg-gradient-to-b from-[#140303] via-[#2a0a0a] to-[#140303]" />

      {/* GLOW ORBS */}
      <div className="absolute w-[600px] h-[600px] bg-[#7a1f1f]/20 rounded-full blur-[170px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#4a1414]/25 rounded-full blur-[150px] bottom-[-200px] right-[-150px]" />

      {/* CURSOR GLOW */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-96 h-96 rounded-full 
        bg-[radial-gradient(circle,rgba(122,31,31,0.35)_0%,rgba(42,10,10,0.2)_40%,transparent_70%)]
        blur-[90px] -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* TRAIL */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          className="pointer-events-none fixed w-2 h-2 rounded-full bg-[#b76e79]/70 blur-[2px]"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <span className="inline-block px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#2a0a0a] to-[#140303]
          text-[#e8b4b8] text-xs font-bold tracking-[0.2em] mb-6 uppercase shadow-lg border border-[#7a1f1f]/30">
            ✨ Welcome ✨
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-[#f8d7da] leading-tight">
            <span className="opacity-90">𝐀𝐧𝐞𝐞𝐬𝐚'𝐬 </span>
            <br />
            <span className="bg-gradient-to-r from-[#b76e79] via-[#e8b4b8] to-[#f5c6c9] bg-clip-text text-transparent">
              𝓟𝓸𝓻𝓽𝓸𝓯𝓸𝓵𝓲𝓸
            </span>
          </h1>

          <p className="mt-6 text-[#e8b4b8]/90 text-lg leading-relaxed max-w-xl">
            𝐀 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐨𝐟 𝐜𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲, 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐛𝐮𝐢𝐥𝐭 𝐰𝐢𝐭𝐡 𝐞𝐥𝐞𝐠𝐚𝐧𝐭 𝐝𝐞𝐬𝐢𝐠𝐧 𝐚𝐧𝐝 𝐦𝐞𝐚𝐧𝐢𝐧𝐠𝐟𝐮𝐥 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞𝐬.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToAbout}
              className="px-10 py-4 rounded-full font-bold text-white
              bg-gradient-to-r from-[#7a1f1f] to-[#4a1414]
              hover:shadow-[0_0_25px_rgba(122,31,31,0.6)]
              transition-all duration-300"
            >
              🚀 Explore Work
            </button>

            <a
              href="#"
              className="px-10 py-4 rounded-full font-bold text-[#e8b4b8]
              bg-white/5 backdrop-blur-xl border border-[#7a1f1f]/30
              hover:bg-white/10 transition-all"
            >
              💌 Contact
            </a>
          </div>
        </motion.div>

        {/* IMAGE SECTION (TIDAK DIUBAH STYLE FRAME-NYA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]">

            {/* glow belakang (tidak ganggu frame) */}
            <div className="absolute inset-0 rounded-full blur-[120px] opacity-60 
            bg-gradient-to-r from-[#7a1f1f] via-[#b76e79] to-[#f5c6c9] scale-125" />

            {/* FOTO FRAME - TIDAK DIUBAH */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="/Aneesa.jpg"
                alt="Aneesa"
                className="w-full h-full object-cover object-[50%_30%] 
                scale-110 hover:scale-125 transition duration-700"
              />

              <div className="absolute inset-0 rounded-full 
              bg-[radial-gradient(circle,transparent_55%,rgba(20,3,3,0.9)_100%)]" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full 
        bg-white/5 backdrop-blur-xl border border-[#7a1f1f]/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-[#e8b4b8] w-6 h-6" />
      </motion.button>

    </section>
  );
}