import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiHome, HiUser, HiCode, HiBriefcase, HiDocument, HiMail 
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, DEVELOPER_INFO } from '../../utils/constants';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from '../Layout/ThemeToggle';
import './SideMenu.scss';

const iconMap = {
  HiHome, HiUser, HiCode, HiBriefcase, HiDocument, HiMail,
  FaGithub, FaLinkedin, FaWhatsapp
};

const SideMenu: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.aside
      className={`side-menu ${isDark ? 'dark' : 'light'}`}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="side-menu__container">
        {/* Logo/Nome */}
        <motion.div 
          className="side-menu__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <NavLink to="/" className="side-menu__logo">
            <h2>{DEVELOPER_INFO.name.split(' ')[0]}</h2>
            <span>Full-Stack Development</span>
          </NavLink>
          <div className="side-menu__theme-toggle">
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Navegação Principal */}
        <motion.nav 
          className="side-menu__nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ul className="side-menu__nav-list">
            {NAVIGATION_ITEMS.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.li
                  key={item.id}
                  className="side-menu__nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `side-menu__nav-link ${isActive ? 'side-menu__nav-link--active' : ''}`
                    }
                  >
                    <IconComponent className="side-menu__nav-icon" />
                    <span className="side-menu__nav-text">{item.label}</span>
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Redes Sociais */}
        <motion.div 
          className="side-menu__social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="side-menu__social-label">
            <span>Conecte-se comigo</span>
          </div>
          <div className="side-menu__social-links">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="side-menu__social-link"
                  title={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 1, duration: 0.3 }}
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default SideMenu;