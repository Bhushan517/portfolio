import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, Clock, Users } from 'lucide-react';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/500x300?text=Project+Image';
import hirehq from '../assets/hirehq3.png';
import simplify from '../assets/simplify.png';
import farmhub from '../assets/hottractor.jpg';

const projects = [
  {
    id: 1,
    title: 'HireHQ',
    description: 'Smart Hiring & Job Management Platform for Employers and Job Seekers.',
    image: hirehq,
    technologies: ['Fastify', 'Node.js', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyUrl: '#',
    stars: 45,
    forks: 12,
    duration: '3 months'
  },
  {
    id: 2,
    title: 'Simplify VMS',
    description: 'Vendor Management System backend API for streamlined vendor operations and procurement processes.',
    image:simplify,
    technologies: ['Fastify', 'Node.js', 'TypeScript', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyUrl: '#',
    stars: 32,
    forks: 8,
    duration: '2 months'
  },
  {
    id: 4,
    title: 'Farm Hub',
    description: 'Farm Hub 🚜 Tractor & Transport Business Solutions',
    image: farmhub,
    technologies: ['React.jsx', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyUrl: '#',
    stars: 15,
    forks: 3,
    duration: '2 weeks'
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [180, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-md">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[420px]"
            >
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-300 hover:scale-105 bg-gray-100"
                  style={{ aspectRatio: '16/9', minHeight: '8rem', maxHeight: '20rem' }}
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-blue-700 dark:text-yellow-400 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-yellow-400 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-gray-400 dark:text-gray-300 text-xs">
                    <span className="flex items-center gap-1"><Star className="w-4 h-4" />{project.stars}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{project.forks}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{project.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-green-600 dark:hover:text-yellow-400 transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 