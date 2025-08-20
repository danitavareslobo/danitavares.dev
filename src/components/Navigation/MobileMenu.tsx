import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { 
  HiHome, HiUser, HiCode, HiBriefcase, HiDocument, HiMail 
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, DEVELOPER_INFO } from '../../utils/constants';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from '../Layout/ThemeToggle';
import './MobileMenu.scss';

const iconMap = {
  HiHome, HiUser, HiCode, HiBriefcase, HiDocument, HiMail,
  FaGithub, FaLinkedin, FaWhatsapp
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.4
      }
    }),
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.div 
        className="mobile-menu__trigger"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ThemeToggle />
        <motion.button
          className={`mobile-menu__hamburger ${isOpen ? 'mobile-menu__hamburger--active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <span className="mobile-menu__hamburger-line"></span>
          <span className="mobile-menu__hamburger-line"></span>
          <span className="mobile-menu__hamburger-line"></span>
        </motion.button>
      </motion.div>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu__overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
            />
            
            <motion.div
              className={`mobile-menu ${isDark ? 'dark' : 'light'}`}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mobile-menu__container">
                {/* Header with close button */}
                <motion.div 
                  className="mobile-menu__header"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="mobile-menu__title">
                    {DEVELOPER_INFO.name.split(' ')[0]}
                  </h2>
                  <motion.button
                    className="mobile-menu__close"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <HiX />
                  </motion.button>
                </motion.div>

                {/* Navigation Links */}
                <motion.nav className="mobile-menu__nav">
                  <ul className="mobile-menu__nav-list">
                    {NAVIGATION_ITEMS.map((item, index) => {
                      const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                      return (
                        <motion.li
                          key={item.id}
                          className="mobile-menu__nav-item"
                          custom={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover={{ x: 10 }}
                        >
                          <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                              `mobile-menu__nav-link ${isActive ? 'mobile-menu__nav-link--active' : ''}`
                            }
                            onClick={closeMenu}
                          >
                            <IconComponent className="mobile-menu__nav-icon" />
                            <span className="mobile-menu__nav-text">{item.label}</span>
                          </NavLink>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.nav>

                {/* Social Links */}
                <motion.div 
                  className="mobile-menu__social"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="mobile-menu__social-label">
                    Conecte-se comigo
                  </span>
                  <div className="mobile-menu__social-links">
                    {SOCIAL_LINKS.map((social, index) => {
                      const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-menu__social-link"
                          title={social.name}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index + 0.9 }}
                        >
                          <IconComponent />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;