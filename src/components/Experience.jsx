import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Customer Service Representative',
    company: 'TaskUs',
    date: '2023 - 2024',
    description: 'Provided excellent customer support and resolved issues for clients across multiple industries. Tasks range from troubleshooting technical problems to managing customer inquiries and feedback.',
  },
  {
    role: 'IT Intern',
    company: 'Codex Business Solutions Inc.',
    date: '2025 - Present',
    description: `Assisted in the development of new features and bug fixes for the company's flagship product.`,
  }
];

const Experience = () => {
  return (
    <div id="experience" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="relative">
          <div className="hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center w-full mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                >
                  <div className="bg-base-300 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-md font-semibold text-accent">{item.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <div className="absolute left-0 h-full w-0.5 bg-primary"></div>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center w-full mb-8"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full ml-8">
                  <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-md font-semibold text-primary">{item.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
