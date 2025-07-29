import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

import shashankPhoto from "../../src/assets/image (5).jpg";

const About = () => {
  const fadeIn = {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn more about my journey, skills, and experiences as a
              developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={shashankPhoto}
                  alt="Shashank Sharma"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              </div>

              <motion.div
                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary-500 text-white p-3 rounded-full">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-xl font-bold">2+ Years</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-heading">
                Who I Am
              </h2>
              <p className="text-gray-600 mb-6">
                I'm Shashank, a passionate MERN stack developer with expertise
                in creating responsive, user-centric web applications. With over
                2 years of experience in web development, I specialize in
                bringing ideas to life through clean code and engaging user
                experiences.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in tech began during college when I discovered my
                passion for creating digital solutions. Since then, I've worked
                with various companies and clients, building everything from
                simple landing pages to complex web applications.
              </p>
              <p className="text-gray-600 mb-8">
                When I'm not coding, you can find me hiking, reading about new
                technologies, or contributing to open-source projects. I believe
                in continuous learning and staying updated with the latest
                trends in web development.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-gray-100 px-4 py-2 rounded-full">
                  <p className="font-semibold">🌐 Frontend Specialist</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full">
                  <p className="font-semibold">🎨 UI/UX Enthusiast</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full">
                  <p className="font-semibold">🚀 Performance Optimizer</p>
                </div>
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition duration-300"
                >
                  Get In Touch
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-2">
              My Background
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 font-heading">
              Education
            </h3>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500"
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900 font-heading">
                Full Stack Web development (MERN)
              </h4>
              <p className="text-primary-600 font-medium mb-4">
                AlmaBetter (2023)
              </p>
              <p className="text-gray-600">
                A MERN full-stack web development course equips you with the
                ability to build complete web applications with MongoDB,
                Express.js, React.js, and Node.js, covering front-end
                interactivity, back-end logic, and database management for
                full-fledged web development skills.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary-500"
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900 font-heading">
                Bachelor's in Computer Application
              </h4>
              <p className="text-secondary-600 font-medium mb-4">
                St. Aloysius college (2020-2023)
              </p>
              <p className="text-gray-600">
                A BCA (Bachelor of Computer Applications) course cultivates foundational expertise in computer science, 
                programming, and IT applications, preparing graduates for diverse roles in the technology sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
