import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
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
        isScrolled ? 'backdrop-blur-xl shadow-lg' : ''
      }`}
    >
      {/* 🍷 BACKGROUND */}
      <div
        className={`absolute inset-0 -z-10 ${
          isDark
            ? 'bg-gradient-to-r from-black via-[#1a0505] to-[#4a1414]'
            : 'bg-gradient-to-r from-[#7a1f1f] via-[#4a1414] to-[#ffe4e6]'
        }`}
      />

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 -z-10 ${
          isDark ? 'bg-black/50' : 'bg-white/20'
        }`}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`font-display text-xl md:text-2xl font-bold cursor-pointer drop-shadow ${
              isDark ? 'text-[#fca5a5]' : 'text-[#2a0d0d]'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Neesa's
          </motion.a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`font-medium transition cursor-pointer ${
                  isDark
                    ? 'text-[#fca5a5] hover:text-[#fecaca]'
                    : 'text-[#2a0d0d] hover:text-[#7a1f1f]'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* THEME BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full bg-black/10 hover:bg-black/20"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl ${
              isDark ? 'bg-black/80' : 'bg-[#7a1f1f]/90'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`font-medium py-2 ${
                    isDark
                      ? 'text-[#fca5a5] hover:text-[#fecaca]'
                      : 'text-[#2a0d0d] hover:text-[#ffe4e6]'
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