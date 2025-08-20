import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiHome, HiBriefcase, HiCode, HiDocument, HiMail } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { DEVELOPER_INFO } from '../../utils/constants';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Animação de entrada do navbar com delay
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Superior */}
      <motion.nav 
        className={`navbar ${isDark ? 'dark' : 'light'}`}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="navbar__container">
          <div className="navbar__logo">
            <Link to="/" className="navbar__logo-link">
              <span className="navbar__name">Dani</span>
              <span className="navbar__role">Desenvolvedora</span>
            </Link>
          </div>

          <div className="navbar__actions">
            {/* Toggle Tema */}
            <motion.button 
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <FiSun className="navbar__theme-icon" /> : <FiMoon className="navbar__theme-icon" />}
              </motion.div>
            </motion.button>

            {/* Menu Hambúrguer */}
            <motion.button 
              className={`navbar__menu-toggle ${isMenuOpen ? 'navbar__menu-toggle--active' : ''}`}
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Lateral Deslizante Estilo Onyedika */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Menu Lateral */}
            <motion.div
              className="onyedika-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            >
              {/* Bloco GitHub */}
              <motion.div 
                className="onyedika-menu__block onyedika-menu__block--github"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="onyedika-menu__social-link">
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
              </motion.div>

              {/* Bloco LinkedIn */}
              <motion.div 
                className="onyedika-menu__block onyedika-menu__block--linkedin"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="onyedika-menu__social-link">
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </motion.div>

              {/* Bloco WhatsApp */}
              <motion.div 
                className="onyedika-menu__block onyedika-menu__block--whatsapp"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a href={`https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="onyedika-menu__social-link">
                  <FaWhatsapp size={20} />
                  <span>WhatsApp</span>
                </a>
              </motion.div>

              {/* Bloco E-mail */}
              <motion.div 
                className="onyedika-menu__block onyedika-menu__block--email"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="onyedika-menu__social-link">
                  <HiMail size={20} />
                  <span>E-mail</span>
                </a>
              </motion.div>

              {/* Bloco Menu Principal */}
              <motion.div 
                className="onyedika-menu__block onyedika-menu__block--nav"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <nav className="onyedika-menu__nav">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link to="/" onClick={closeMenu} className="onyedika-menu__nav-link">
                      <HiHome size={20} /> HOME
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Link to="/work" onClick={closeMenu} className="onyedika-menu__nav-link">
                      <HiBriefcase size={20} /> TRABALHOS
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    <Link to="/skills" onClick={closeMenu} className="onyedika-menu__nav-link">
                      <HiCode size={20} /> HABILIDADES
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                  >
                    <Link to="/resume" onClick={closeMenu} className="onyedika-menu__nav-link">
                      <HiDocument size={20} /> CURRÍCULO
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.3 }}
                  >
                    <Link to="/contact" onClick={closeMenu} className="onyedika-menu__nav-link">
                      <HiMail size={20} /> CONTATO
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;