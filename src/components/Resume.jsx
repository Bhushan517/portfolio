import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

const RESUME_URL = '/Bhushan Raut (1).pdf'; // Update this path if needed
const RESUME_PREVIEW_IMG = '/resume-preview.jpg'; // Optional: add a preview image

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-200 opacity-20 rounded-full blur-3xl animate-float" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-md flex items-center justify-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" /> Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View or download my latest resume. Click below to see it online or save a copy!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center gap-8"
        >
          {/* Resume Preview (image or embed) */}
          <div className="w-full flex justify-center mb-6">
            {/* If you have a preview image, use <img>. For PDF, you can use <iframe> or <object> */}
            <img
              src={RESUME_PREVIEW_IMG}
              alt="Resume Preview"
              className="rounded-xl shadow-lg border border-blue-100 max-h-96 object-contain bg-white"
              style={{ width: '100%', maxWidth: 600 }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg"
            >
              <Eye className="w-6 h-6" /> View Resume Online
            </a>
            <a
              href={RESUME_URL}
              download="Bhushan_Raut_Resume.pdf"
              className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-200 backdrop-blur-sm text-lg"
            >
              <Download className="w-6 h-6" /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 