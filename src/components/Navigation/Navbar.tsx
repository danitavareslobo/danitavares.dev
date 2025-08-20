import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
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

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Navbar Superior */}
      <motion.nav 
        className={`navbar ${isDark ? 'dark' : 'light'} ${isMenuOpen ? 'navbar--expanded' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="navbar__container">
          <div className="navbar__logo">
            <Link to="/" className="navbar__logo-link">
              <span className="navbar__name">Dani Tavares Lobo</span>
              <span className="navbar__role">Full-Stack Development</span>
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

            {/* Menu Hambúrguer / X para fechar */}
            <motion.button 
              className={`navbar__menu-toggle ${isMenuOpen ? 'navbar__menu-toggle--active' : ''}`}
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <HiX size={50} /> : <HiMenu size={24} />}
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

            {/* Menu Lateral Estilo Onyedika 50/50 */}
            <motion.div
              className="onyedika-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Seção de Redes Sociais - 50% esquerda */}
              <div className="onyedika-menu__social-section">
                <motion.a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-block social-block--github"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="social-block__content">
                    <FaGithub size={48} />
                    <span className="social-block__label">GitHub</span>
                  </div>
                </motion.a>

                <motion.a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-block social-block--linkedin"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="social-block__content">
                    <FaLinkedin size={48} />
                    <span className="social-block__label">LinkedIn</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-block social-block--whatsapp"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <div className="social-block__content">
                    <FaWhatsapp size={48} />
                    <span className="social-block__label">WhatsApp</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="social-block social-block--email"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="social-block__content">
                    <HiMail size={48} />
                    <span className="social-block__label">E-mail</span>
                  </div>
                </motion.a>
              </div>
              
              {/* Seção de Navegação - 50% direita */}
              <div className="onyedika-menu__navigation-section">
                <nav className="navigation-menu">
                  <motion.li
                    className="navigation-menu__item"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Link 
                      to="/" 
                      onClick={closeMenu}
                      className={isActiveRoute('/') ? 'active' : ''}
                    >
                      HOME
                    </Link>
                  </motion.li>
                  
                  <motion.li
                    className="navigation-menu__item"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link 
                      to="/sobre" 
                      onClick={closeMenu}
                      className={isActiveRoute('/sobre') ? 'active' : ''}
                    >
                      SOBRE
                    </Link>
                  </motion.li>
                  
                  <motion.li
                    className="navigation-menu__item"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link 
                      to="/trabalhos" 
                      onClick={closeMenu}
                      className={isActiveRoute('/trabalhos') ? 'active' : ''}
                    >
                      TRABALHOS
                    </Link>
                  </motion.li>
                  
                  
                  <motion.li
                    className="navigation-menu__item"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link 
                      to="/curriculo" 
                      onClick={closeMenu}
                      className={isActiveRoute('/curriculo') ? 'active' : ''}
                    >
                      CURRÍCULO
                    </Link>
                  </motion.li>
                  
                  <motion.li
                    className="navigation-menu__item"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link 
                      to="/contato" 
                      onClick={closeMenu}
                      className={isActiveRoute('/contato') ? 'active' : ''}
                    >
                      CONTATO
                    </Link>
                  </motion.li>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;