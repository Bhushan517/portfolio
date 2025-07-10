import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.p 
              className="text-gray-700 dark:text-gray-200 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              © 2024 Bhushan. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-gray-500 dark:text-gray-400 text-sm mt-2 flex items-center justify-center md:justify-start gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Made with <Heart className="inline w-4 h-4 text-red-500 mx-1 animate-pulse" /> and lots of coffee
            </motion.p>
          </motion.div>
          
          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1, 
              y: -3,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white p-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white/20 dark:border-gray-700/30 backdrop-blur-sm"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
        
        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-center"
        >
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Built with <span className="text-blue-600 dark:text-yellow-400 font-semibold">React</span>, <span className="text-purple-600 dark:text-yellow-400 font-semibold">Framer Motion</span>, and <span className="text-pink-600 dark:text-yellow-400 font-semibold">Tailwind CSS</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 