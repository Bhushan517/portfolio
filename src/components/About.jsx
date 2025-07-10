import React from 'react';
import { Code, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Mysore',
      year: '2022-2025',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: '12th Commerce',
      school: 'Savitribai Phule Pune University ',
      year: '2021',
      description: 'Passed with 70% in 12th Commerce'
    }
  ];
// 
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-md">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-yellow-600 mx-auto mb-6 rounded-full shadow-md"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Story</h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a <span className="text-blue-600 dark:text-yellow-400 font-semibold">Detail-oriented Full-Stack Developer</span> with practical internship experience in building robust web applications and APIs. I'm proficient in developing dynamic, user-centric interfaces using React.js and creating scalable backend services with Node.js and Express.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I've successfully contributed to multiple real-world projects during internships, taking ownership of both individual components and end-to-end full-stack features. I'm skilled in writing clean, maintainable code, integrating third-party APIs, and enhancing application performance and user experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm adept at working in cross-functional Agile teams, collaborating with designers, QA, and backend engineers to deliver high-quality solutions on time. I continuously learn and adapt to new technologies to stay ahead in a fast-evolving tech landscape.
            </p>
            {/* Education Cards */}
            <div className="mt-8 grid gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-start gap-4">
                  <Award className="w-8 h-8 text-blue-600 dark:text-yellow-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-yellow-400 font-medium">{edu.school} <span className="text-gray-400 dark:text-gray-300 font-normal">({edu.year})</span></p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {/* Technical Skills Section */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6">
                <h4 className="text-lg font-bold mb-4 text-blue-700 dark:text-yellow-400">Frontend</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-1">
                    <span>React</span><span>95%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-yellow-600 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>JavaScript/TypeScript</span><span>90%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-yellow-400 to-pink-500 dark:from-yellow-400 dark:to-pink-400 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>HTML</span><span>90%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-pink-400 to-blue-400 dark:from-pink-400 dark:to-yellow-400 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>CSS</span><span>88%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-purple-700 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6">
                <h4 className="text-lg font-bold mb-4 text-blue-700 dark:text-yellow-400">Backend</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-1">
                    <span>Node.js</span><span>85%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500 dark:from-yellow-400 dark:to-green-600 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Express</span><span>80%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-gray-500 dark:from-yellow-400 dark:to-gray-400 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>MongoDB</span><span>75%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 dark:from-yellow-400 dark:to-green-400 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Fastify</span><span>78%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-pink-400 dark:from-yellow-400 dark:to-pink-400 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>MySQL</span><span>70%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-green-400 dark:from-yellow-400 dark:to-green-400 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>PostgreSQL</span><span>68%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-purple-700 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6">
                <h4 className="text-lg font-bold mb-4 text-blue-700 dark:text-yellow-400">Other</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-1">
                    <span>Git</span><span>85%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-gray-400 to-gray-900 dark:from-yellow-400 dark:to-gray-700 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  {/* <div className="flex justify-between items-center mb-1">
                    <span>Agile</span><span>80%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-pink-400 dark:from-yellow-400 dark:to-pink-400 rounded-full" style={{width: '80%'}}></div>
                  </div> */}
                 
                 
                  
                  <div className="flex justify-between items-center mb-1">
                    <span>Postman</span><span>85%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full mb-2">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-yellow-400 dark:to-pink-400 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span>VS Code</span><span>90%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-yellow-400 dark:to-indigo-400 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 