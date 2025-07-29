import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Send, Heart } from 'lucide-react';
import { socialLinks, navLinks } from '../constants';

const Footer = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      case 'twitter':
        return <Twitter size={24} />;
      case 'instagram':
        return <Instagram size={24} />;
      default:
        return <Github size={24} />;
    }
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Shashank Sharma</h3>
            <p className="text-gray-300 mb-4">
              Creative developer focused on building beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id === 'home' ? '/' : `/${link.id}`}
                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Frontend Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Backend Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contact</h3>
            <p className="text-gray-300 mb-4">Want to get in touch? Send me a message!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors duration-300">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Shashank Sharma © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;