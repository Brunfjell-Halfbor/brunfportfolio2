import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(./background.png)',
      }}
    >
      <div className="hero-overlay bg-opacity-90 bg-black/80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-5xl font-bold"
          >
            Brunfjell
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-5"
          >
            Building modern web experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-5"
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a href="https://github.com/Brunfjell-Halfbor" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/luis-troy-paraiso" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-secondary" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
