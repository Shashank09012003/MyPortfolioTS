import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
          <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">Get In Touch</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-heading">Contact Me</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Contact Information</h4>
            
            <motion.div
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <MapPin className="text-primary-600" size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Location</h5>
                <p className="text-gray-600">Bhopal(M.P), INDIA</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <Mail className="text-primary-600" size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                <p className="text-gray-600">shashanksharma7581@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <Phone className="text-primary-600" size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Phone</h5>
                <p className="text-gray-600">+91 7581938947</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-heading">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Shashank09012003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/cs-shashank-sharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://x.com/Shashank8839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/__shashank09__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#E1306C] text-white rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Send Me a Message</h4>
              
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 text-green-800 p-4 rounded-lg mb-6"
                >
                  <p className="font-medium">Your message has been sent successfully!</p>
                  <p>I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">There was an error sending your message.</p>
                  <p>Please try again later or contact me directly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                      placeholder="Lionel Messi"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                      placeholder="messi@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  className="mb-6"
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                    placeholder="How can I help you?"
                  />
                </motion.div>
                
                <motion.div
                  className="mb-6"
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full md:w-auto px-8 py-3 bg-primary-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors duration-300 disabled:bg-gray-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;