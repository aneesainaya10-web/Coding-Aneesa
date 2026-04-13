import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl shadow-2xl border-b border-white/10' : ''
      }`}
    >
      {/* GRADIENT BACKGROUND */}
      <div
        className={`absolute inset-0 -z-10 ${
          isDark
            ? 'bg-gradient-to-r from-black via-[#1a0505] to-[#4a1414]'
            : 'bg-gradient-to-r from-[#7a1f1f] via-[#4a1414] to-[#ffe4e6]'
        }`}
      />

      {/* NOISE / GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.3),transparent_70%)]" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`flex items-center gap-2 font-extrabold tracking-wide cursor-pointer ${
              isDark ? 'text-[#fca5a5]' : 'text-[#2a0d0d]'
            }`}
            whileHover={{ scale: 1.08 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xl md:text-2xl font-serif">Neesa's Portofolio 𐔌՞. .՞𐦯 </span>
          </motion.a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative font-medium text-sm uppercase tracking-widest transition ${
                  isDark
                    ? 'text-[#fca5a5] hover:text-white'
                    : 'text-[#2a0d0d] hover:text-[#7a1f1f]'
                }`}
                whileHover={{ y: -3 }}
              >
                {item.label}

                {/* UNDERLINE ANIMATION */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* THEME BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5 text-[#2a0d0d]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-[#2a0d0d]" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden backdrop-blur-xl border-t border-white/10 ${
              isDark ? 'bg-black/80' : 'bg-[#7a1f1f]/90'
            }`}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-lg font-semibold tracking-wide transition ${
                    isDark
                      ? 'text-[#fca5a5] hover:text-white'
                      : 'text-white hover:text-[#ffe4e6]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
