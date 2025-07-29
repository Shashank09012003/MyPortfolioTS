import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-9xl font-bold text-primary-500 mb-4 font-heading"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium flex items-center justify-center gap-2 mx-auto shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition duration-300"
            >
              <Home size={18} />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;