import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Pesan berhasil dikirim ✨");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "My Email",
      value: "aneesainaya10@gmail.com",
      href: "mailto:aneesainaya10@gmail.com",
    },
    {
      icon: Phone,
      label: "Call",
      value: "+62 82147777392",
      href: "https://wa.me/62821477777392",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Banda Aceh, Indonesia",
      href: "#",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* BACKGROUND (same wine system) */}
      <div className="absolute inset-0 -z-20 
      bg-gradient-to-b from-[#140303] via-[#2a0a0a] to-[#140303]" />

      {/* GLOW ORBS */}
      <div className="absolute w-[500px] h-[500px] bg-[#7a1f1f]/20 rounded-full blur-[170px] top-[-150px] left-[-120px]" />
      <div className="absolute w-[450px] h-[450px] bg-[#4a1414]/25 rounded-full blur-[150px] bottom-[-120px] right-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#2a0a0a] to-[#140303]
          text-[#e8b4b8] text-xs font-bold tracking-[0.25em] uppercase shadow-lg border border-[#7a1f1f]/30">
            ✨ Contact ✨
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#f8d7da] mt-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#b76e79] via-[#e8b4b8] to-[#f5c6c9] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 mt-6 mx-auto rounded-full 
          bg-gradient-to-r from-[#7a1f1f] to-[#f5c6c9]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT CONTACT INFO */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4 p-5 
                bg-gradient-to-b from-[#2a0a0a]/80 to-[#140303]/90
                backdrop-blur-xl border border-[#7a1f1f]/30
                rounded-2xl hover:shadow-[0_0_30px_rgba(122,31,31,0.4)]
                transition-all duration-300"
              >
                <div className="p-3 rounded-xl 
                bg-gradient-to-br from-[#7a1f1f]/40 to-[#2a0a0a]/40">
                  <info.icon className="text-[#e8b4b8] w-6 h-6" />
                </div>

                <div>
                  <p className="text-[#cfa3a9] text-sm">{info.label}</p>
                  <p className="text-[#f8d7da] font-medium">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 p-7 rounded-2xl
            bg-gradient-to-b from-[#2a0a0a]/80 to-[#140303]/90
            backdrop-blur-xl border border-[#7a1f1f]/30
            shadow-[0_10px_50px_rgba(0,0,0,0.7)]"
          >
            <input
              name="name"
              placeholder="Your name ✨"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-[#140303]/60 border border-[#7a1f1f]/30
              text-[#f8d7da] placeholder-[#cfa3a9]
              focus:outline-none focus:ring-2 focus:ring-[#b76e79]"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email 📩"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-[#140303]/60 border border-[#7a1f1f]/30
              text-[#f8d7da] placeholder-[#cfa3a9]
              focus:outline-none focus:ring-2 focus:ring-[#b76e79]"
            />

            <input
              name="subject"
              placeholder="Subject 💬"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-[#140303]/60 border border-[#7a1f1f]/30
              text-[#f8d7da] placeholder-[#cfa3a9]
              focus:outline-none focus:ring-2 focus:ring-[#b76e79]"
            />

            <textarea
              name="message"
              placeholder="Your message 🚀"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-[#140303]/60 border border-[#7a1f1f]/30
              min-h-[150px]
              text-[#f8d7da] placeholder-[#cfa3a9]
              focus:outline-none focus:ring-2 focus:ring-[#b76e79]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-bold
              bg-gradient-to-r from-[#7a1f1f] to-[#4a1414]
              text-white hover:shadow-[0_0_25px_rgba(122,31,31,0.6)]
              transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}