"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "FEATURES", href: "#features" },
    { name: "PRICING", href: "#pricing" },
    { name: "DOCS", href: "/docs" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b-2 border-[#263e0f]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/app-icon.png" alt="Nomadical" className="w-10 h-10 rounded-lg object-contain" />
              <span className="text-white font-black text-xl tracking-tight">NOMADICAL</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-[#263e0f] transition-colors text-sm font-bold tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#263e0f] group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-[#263e0f] transition-colors text-sm font-bold tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#263e0f] group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link
              href="#apps"
              className="bg-[#263e0f] hover:bg-white text-white hover:text-black px-6 py-3 font-bold text-sm tracking-wider transition-all hover:scale-105"
            >
              EXPLORE APPS
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#263e0f] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black border-t-2 border-[#263e0f]"
            >
              <div className="py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        className="block text-white hover:text-[#263e0f] transition-colors text-2xl font-black"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-white hover:text-[#263e0f] transition-colors text-2xl font-black"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t-2 border-white/10"
                >
                  <Link
                    href="#apps"
                    className="block bg-[#263e0f] hover:bg-white text-white hover:text-black px-6 py-4 font-black text-lg text-center transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    EXPLORE APPS
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
