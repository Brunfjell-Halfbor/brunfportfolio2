import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'WanderGo Car Rental',
    description: 'WanderGo Car Portal is a modern, mobile-friendly web application for car rental services, built using React.js, Vite, Firebase (Firestore, Authentication, Hosting), and Tailwind CSS.',
    image: './WanderGo.png',
    tags: ['React', 'Firebase', 'Tailwind'],
    github: '#',
    live: 'https://wandergo-carrental.web.app',
  },
  {
    title: 'Larong Bata',
    description: 'A game where I attempt to recreate the street games we used to play as a kid.',
    image: './larong-bata-teaser.png',
    tags: ['Godot', 'GDScript', 'Blender'],
    github: 'https://brunfjell.itch.io/larong-bata',
    live: '#',
  },
  {
    title: 'QCULand',
    description: 'A game where I attempt to recreate the street games we used to play as a kid.',
    image: './qculand-b.png',
    tags: ['React.js', 'Vite', 'Three.js', 'Blender'],
    github: '#',
    live: 'https://qculand.web.app/',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={project.image} alt={project.title} className="w-full" />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <FaGithub className="mr-2" />
                      Repository
                    </a>
                  )}
                  {project.live && project.live !== "#" ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Live Demo
                    </a>
                  ) : (
                    <button className="btn btn-secondary cursor-not-allowed" disabled>
                      Under Development
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
