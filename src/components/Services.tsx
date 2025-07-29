import { useState } from 'react';
import { motion } from 'framer-motion';
import { services, serviceIcons } from '../constants';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">What I Offer</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-heading">My Services</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <motion.div
                key={index}
                variants={serviceVariants}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{
                      scale: hoveredService === service.title ? 1.2 : 1,
                      rotate: hoveredService === service.title ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600"
                  >
                    {Icon && <Icon size={32} />}
                  </motion.div>
                  <h4 className="text-xl font-bold mb-4 font-heading text-gray-900">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;