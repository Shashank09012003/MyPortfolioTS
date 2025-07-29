import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants';

const Experience = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">My Journey</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-heading">Professional Experience</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <VerticalTimeline lineColor="#e5e7eb">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 10px 25px -10px rgba(0, 0, 0, 0.1)',
                padding: '2rem',
                borderRadius: '0.75rem',
              }}
              contentArrowStyle={{ borderRight: '10px solid #fff' }}
              date={experience.date}
              icon={<Briefcase className="text-white" />}
              iconStyle={{ background: '#3b82f6', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-gray-900 font-heading">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-primary-600 font-medium mt-1">
                {experience.company}
              </h4>
              <p className="text-gray-600 mt-4">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;