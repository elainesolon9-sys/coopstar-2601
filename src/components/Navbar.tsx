'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-coopstar-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl italic">C</span>
              </div>
              <span className={`font-bold text-xl tracking-tighter ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                COOPSTAR<span className="text-coopstar-red italic">EXPRESS</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-coopstar-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:1150523563"
                className="bg-coopstar-red text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-red-700 transition-all transform hover:scale-105 shadow-md"
              >
                <Phone size={16} />
                Ligar Agora
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-coopstar-red p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-coopstar-red block px-3 py-4 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={14} className="text-coopstar-red" />
                  <span>Av. Jurucê, 898 - Moema</span>
                </div>
                <a
                  href="tel:1150523563"
                  className="bg-coopstar-red text-white w-full text-center px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  (11) 5052-3563
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
