import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume', isResume: true }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl border-b border-blue-100 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 tracking-tight drop-shadow-md select-none"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              item.isResume ? (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.12, backgroundColor: '#2563eb', color: '#fff' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FileText className="w-5 h-5" />
                  {item.name}
                </motion.button>
              ) : (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, color: '#2563eb' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200 font-semibold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {item.name}
                </motion.button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7 text-blue-700 dark:text-yellow-400" />
            ) : (
              <Menu className="h-7 w-7 text-blue-700 dark:text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl mt-2 shadow-xl border border-blue-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isResume ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-2 w-full text-left px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <FileText className="w-5 h-5" />
                    {item.name}
                  </button>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-blue-700 dark:text-gray-200 hover:text-white hover:bg-blue-600 dark:hover:text-yellow-400 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 