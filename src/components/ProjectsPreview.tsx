import { motion } from 'framer-motion';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ProjectsPreview = () => {
  // Only show first 3 projects for preview
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">My Work</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-heading">Recent Projects</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 flex items-center justify-center gap-2 bg-dark text-white rounded-full font-medium shadow-lg hover:bg-gray-800 transition duration-300"
            >
              View All Projects
              <ChevronRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;