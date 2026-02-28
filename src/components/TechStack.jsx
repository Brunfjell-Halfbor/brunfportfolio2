import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiN8N } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ],
  tools: [
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'n8n', icon: <SiN8N /> },
  ]
};

const TechStack = () => {
  return (
    <div id="skills" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-30">
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-center">Frontend</h3>
            <div className="grid grid-cols-3 gap-8">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-6xl text-secondary">{skill.icon}</div>
                  <div className="absolute -bottom-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-center">Backend</h3>
            <div className="grid grid-cols-3 gap-8">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-6xl text-accent">{skill.icon}</div>
                  <div className="absolute -bottom-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-center">Tools</h3>
            <div className="grid grid-cols-3 gap-8">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-6xl text-primary">{skill.icon}</div>
                  <div className="absolute -bottom-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
