import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animate, setAnimate] = useState(false);

  const categories = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];

  useEffect(() => {
    setAnimate(true);
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(activeFilter)));
    }
    
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [activeFilter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my work, personal projects, and contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } transition-all duration-300`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-heading">Interested in working together?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;