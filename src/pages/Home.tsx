import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import ProjectsPreview from '../components/ProjectsPreview';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Skills />
      <ProjectsPreview />
      <Experience />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;