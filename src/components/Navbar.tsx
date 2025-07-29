import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Extract the path without the leading slash
    const path = location.pathname.slice(1) || 'home';
    setActive(path);
  }, [location]);

  return (
    <motion.nav
      className={`${
        scrolled ? 'bg-dark/80 backdrop-blur-md' : 'bg-transparent'
      } fixed w-full z-20 top-0 left-0 py-5 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('home');
            window.scrollTo(0, 0);
          }}
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500 text-white"
          >
            <Code size={24} />
          </motion.div>
          <p className="text-xl font-bold text-white">
            <span className="font-heading">Shashank </span>
            <span className="text-primary-500">Sharma</span>
          </p>
        </Link>

        <ul className="hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? 'text-primary-500' : 'text-white'
              } hover:text-primary-400 text-lg font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.id)}
            >
              <Link to={nav.id === 'home' ? '/' : `/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <motion.div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-dark/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? 'text-primary-500' : 'text-white'
                  } font-medium cursor-pointer text-base`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <Link to={nav.id === 'home' ? '/' : `/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;