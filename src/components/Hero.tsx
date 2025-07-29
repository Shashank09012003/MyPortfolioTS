import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

// Import my local image
import myPhoto from '../../src/assets/ChatGPT Image May 5, 2025, 09_31_50 PM.png';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null); 
  const vantaRef = useRef<HTMLDivElement | null>(null); 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3b82f6,
          shininess: 35.0,
          waveHeight: 15.0,
          waveSpeed: 0.75,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateMove = (movement: number, axis: 'x' | 'y') => {
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    const size = axis === 'x' ? window.innerWidth : window.innerHeight;
    return (position / size - 0.5) * movement;
  };

  // Define TypeScript type for the animation
  type FloatingAnimationType = {
    y: number[];
    transition: {
      duration: number;
      repeat: number;
      repeatType: "reverse" | "loop" | "mirror" | undefined;
      ease: string;
    };
  };

  // Properly typed animation object
  const floatingAnimation: FloatingAnimationType = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <section
      ref={vantaRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl font-semibold text-primary-500 mb-4"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading"
            >
              Shashank Sharma
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 h-16"
            >
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'UI/UX Designer',
                    'React Specialist',
                    'Creative Coder',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I build exceptional and accessible digital experiences for the web, focusing on both aesthetics and functionality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition duration-300"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent text-white border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition duration-300"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl"
              animate={floatingAnimation}
              style={{
                transform: `translate(${calculateMove(20, 'x')}px, ${calculateMove(20, 'y')}px)`,
              }}
            >
              <img
                src={myPhoto}
                alt="Shashank Sharma"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;