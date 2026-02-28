import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">A Little Bit About Me</h3>
            <p className="mb-4">
              My name is Luis Troy Paraiso, and I'm a web developer based in the Philippines. I specialize in creating modern, responsive websites and applications using the latest technologies.
            </p>
            <p className="mb-4">
              I'm a passionate developer with a love for creating beautiful and functional web applications. I'm always eager to learn new technologies and improve my skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring the outdoors, reading a good book, or trying out new recipes in the kitchen.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="stats stats-vertical lg:stats-horizontal w-full">
              <div className="stat">
                <div className="stat-title">Experience</div>
                <div className="stat-value">1</div>
                <div className="stat-desc">Year</div>
              </div>
              <div className="stat">
                <div className="stat-title">Projects</div>
                <div className="stat-value">3</div>
                <div className="stat-desc">Completed</div>
              </div>
              <div className="stat">
                <div className="stat-title">Focus</div>
                <div className="stat-value">Web</div>
                <div className="stat-desc">Design & Development</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
