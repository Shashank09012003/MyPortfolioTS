import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <div className="w-full flex justify-between items-center">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-primary-500 hover:bg-primary-600 p-2 rounded-full shadow-lg transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </motion.a>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full shadow-lg transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900 font-heading">{project.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;