import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../constants';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }),
  };

  return (
    <section className="py-20 bg-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">My Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-heading">Professional Skills</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">{skill.name}</h4>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  custom={skill.level}
                  variants={barVariants}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/assets/resume.pdf"
              className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition duration-300"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;