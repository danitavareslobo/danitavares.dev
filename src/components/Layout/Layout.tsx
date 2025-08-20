import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`layout ${isDark ? 'dark' : 'light'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="layout__container"
      >
        <ThemeToggle />
        <main className="layout__main">
          {children}
        </main>
      </motion.div>
    </div>
  );
};

export default Layout;