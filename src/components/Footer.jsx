import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-6 bg-base-200 text-base-content rounded">
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#skills" className="link link-hover">Skills</a>
            <a href="#projects" className="link link-hover">Projects</a>
            <a href="#about" className="link link-hover">About</a>
            <a href="#contact" className="link link-hover">Contact</a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/Brunfjell-Halfbor" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/luis-troy-paraiso" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-secondary" />
          </a>
        </div>

        <div className="text-center">
          <p>Copyright © 2026 - All rights reserved by Brunfjell</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;