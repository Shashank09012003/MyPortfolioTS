import { motion } from 'framer-motion';
import ContactForm from '../components/Contact';

const ContactPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 font-heading">Find Me Here</h2>
            <p className="text-gray-600 mt-4">Operating from Bhopal’s dynamic tech hub in Madhya Pradesh</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30238.736891031007!2d77.30783053432738!3d23.259933317549708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5986c0d2ddc7%3A0xe3b1f750dccb39a5!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1705170599999!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;