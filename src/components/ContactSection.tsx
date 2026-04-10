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
      label: "Email",
      value: "aneesainaya10@gmail.com",
      href: "mailto:aneesainaya10@gmail.com",
    },
    {
      icon: Phone,
      label: "Call",
      value: "+62 82147777392",
      href: "https://wa.me/6282147777392",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Banda Aceh, Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* WINE RED BLUR BACKGROUND */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#5c1a1a]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#7a1f1f]/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#7a1f1f] font-medium mb-2 block">
            Contact
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2a0d0d]">
            Get In Touch ✨
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#2a0d0d] via-[#5c1a1a] to-[#7a1f1f] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 p-4 
                bg-white/70 backdrop-blur-md border border-[#f3e8e8]
                rounded-xl hover:shadow-xl transition group"
              >
                <div className="p-3 bg-[#2a0d0d] rounded-lg text-white group-hover:bg-[#5c1a1a] transition">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#7a1f1f] text-sm">{info.label}</p>
                  <p className="text-[#2a0d0d] font-medium">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 
            bg-white/70 backdrop-blur-xl 
            border border-[#f3e8e8] 
            rounded-2xl shadow-xl"
          >
            <input
              name="name"
              placeholder="Your name ✨"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-[#e5d4d4] outline-none focus:border-[#7a1f1f]"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email 📩"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-[#e5d4d4] outline-none focus:border-[#7a1f1f]"
            />

            <input
              name="subject"
              placeholder="Subject 💬"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-[#e5d4d4] outline-none focus:border-[#7a1f1f]"
            />

            <textarea
              name="message"
              placeholder="Your message 📥"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-[#e5d4d4] min-h-[150px] outline-none focus:border-[#7a1f1f]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl 
              bg-[#2a0d0d] hover:bg-[#5c1a1a]
              text-white font-semibold transition"
            >
              {isSubmitting ? "Sending..." : "Kirim Pesan"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}