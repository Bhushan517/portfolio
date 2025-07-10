import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code, Zap } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px 10px #6366f1' }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 flex items-center justify-center shadow-2xl relative overflow-hidden border-8 border-white/60 dark:border-gray-800 ring-4 ring-blue-300/40 dark:ring-yellow-300/30 transition-all duration-500"
              >
                <img 
                  src="/bhushan.jpg" 
                  alt="Bhushan Profile" 
                  className="object-cover w-full h-full rounded-full border-4 border-blue-200 dark:border-gray-700 shadow-2xl"
                  style={{ aspectRatio: '1/1', background: '#fff' }}
                />
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                      'linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)',
                      'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
                      'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-20"
                />
              </motion.div>
            </div>
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-lg text-blue-600 dark:text-yellow-400 font-medium"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              Hi, I'm
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-yellow-400 dark:via-yellow-600 dark:to-yellow-400 bg-clip-text text-transparent">
                Bhushan
              </span>
            </motion.h1>
            {/* Animated subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl font-medium text-blue-500 dark:text-yellow-400 mb-2 animate-pulse"
            >
            
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-200 space-y-2"
            >
              <span className="text-blue-600 dark:text-yellow-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                {/* <Code className="w-6 h-6" /> */}
                <Typewriter
                words={['Turning ideas into reality', 'Full Stack Developer', ' I Am React expert' , 'I Am Node.js expert']}
                loop={0}
                // cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
              </span>
              {/* <br /> */}
              {/* <span className="text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-5 h-5" />
               
              </span> */}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate Full-Stack Developer dedicated to building scalable, high-performance web applications that solve real-world problems. With expertise in both frontend and backend technologies, I craft seamless digital experiences that are fast, responsive, and user-friendly. I thrive on transforming complex ideas into intuitive interfaces and robust architectures using modern tech stacks like React, Node.js, TypeScript, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 30px 10px #3b82f6' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWork}
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-500 dark:to-yellow-700 text-white dark:text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 dark:hover:from-yellow-400 dark:hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl text-base animate-pulse"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 30px 10px #f59e42' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Bhushan Raut (1).pdf';
                  link.download = 'Bhushan_Raut_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-all duration-300 backdrop-blur-sm text-base animate-pulse"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 