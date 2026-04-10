import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* 🍷 WINE GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-red-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-red-700 font-medium mb-2 block">
            Contact
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-red-950">
            Get In Touch 🍷
          </h2>

          <div className="w-20 h-1 bg-red-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 p-4 
                bg-white/60 backdrop-blur-md border border-red-200 
                rounded-xl hover:bg-red-50 transition-all group shadow-sm"
              >
                <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition">
                  <info.icon className="text-red-800 w-6 h-6" />
                </div>
                <div>
                  <p className="text-red-600 text-sm">{info.label}</p>
                  <p className="text-red-900 font-medium">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 
            bg-white/70 backdrop-blur-md border border-red-200 
            rounded-2xl shadow-lg"
          >
            <input
              name="name"
              placeholder="Your name✨"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-white border border-red-200 
              focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email📩"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-white border border-red-200 
              focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              name="subject"
              placeholder="Subject 💬"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-white border border-red-200 
              focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <textarea
              name="message"
              placeholder="Your messages 🚀"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg 
              bg-white border border-red-200 
              min-h-[150px] 
              focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl 
              bg-red-800 hover:bg-red-900 
              text-white font-semibold tracking-wide
              transition-all duration-300 shadow-md"
            >
              {isSubmitting ? "Sending..." : "Send your messages"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}