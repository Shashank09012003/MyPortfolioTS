import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-90"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            I'm available for freelance work. Let's build something amazing together!
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;